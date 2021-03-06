var _window_opened=[];
var _play_sound=true;


var _spin_pos=[
{'startFrame':300,'endFrame':149,'startPos':60,'endPos':50},
{'startFrame':150,'endFrame':300,'startPos':40,'endPos':63},
{'startFrame':300,'endFrame':149,'startPos':40,'endPos':60},
{'startFrame':150,'endFrame':300,'startPos':63,'endPos':48},
{'startFrame':300,'endFrame':149,'startPos':63,'endPos':35},
{'startFrame':0,'endFrame':0,'startPos':0,'endPos':0},
{'startFrame':150,'endFrame':300,'startPos':0,'endPos':0}];

window.onload=function(){
	var src_=[];
		for(var i=0;i<427;++i) src_.push('video/BG/BG'+leftPad(i,3)+'.jpg')
		$('#_spin_image').spritespin({
			source:src_,			
			animate: false,
			retainAnimate:true,
			sizeMode:'fill',
			responsive:false,
			onLoad:spinOnLoad,
			onFrameChanged:frameUpdate,
			frame:150,
		    plugins: [
		      '360',
		      'drag'
		    ]
		});			


	// onMenuClick(6);
	// setupWindowLayout();
}
window.onresize=resize;
	
function resize(){
	mobile_detect=new MobileDetect(window.navigator.userAgent);
	_mobile=(mobile_detect.mobile()!=null) || $(this).width()<768;
	
	if(_mobile){
		if(_window_opened.length>1){
			var w=_window_opened.shift();
			closeMenu(w.idx);
		}	
		$('#_mmlab').addClass('hidden');
		$('#_facebook').addClass('hidden');
		$('#_sound_button').addClass('hidden');
		$('#_ham_button').removeClass('hidden');

		var w=$(window).innerWidth()/2-($(window).innerHeight()/9.0*16.0)/2;
		$('canvas').css('left',w+'px');
		$('canvas').css('top','0');
		
		$('#_spin_info').removeClass('hidden');

	}else{
		$('#_mmlab').removeClass('hidden');
		$('#_facebook').removeClass('hidden');
		$('#_sound_button').removeClass('hidden');
		$('#_ham_button').addClass('hidden');

		var w=$(window).innerHeight()/2-($(window).innerWidth()/16.0*9.0)/2;
		$('canvas').css('left','0');
		$('canvas').css('top',w+'px');

	}
}


function spinOnLoad(){

	resize();

	var api = $("#_spin_image").spritespin("api");
	api.startAnimation();
	api.updateFrame(224);
	api.stopAnimation();

	$('#_loading').addClass('hidden');
	setTimeout(function(){
			$('#_loading').addClass('close');
	},200);
}


function leftPad(value, length){ 
    return ('0'.repeat(length) + value).slice(-length); 
}
function isLeft(idx_){
	if(idx_<3 || idx_==6) return true;
	return false;
}
function getWindow(idx_){
	switch(idx_){
		case 0:
			return $('#_window_sound');
		case 1:
			return $('#_window_air');
		case 2:
			return $('#_window_wheel');
		case 3:
			return $('#_window_fur');
		case 4:
			return $('#_window_oil');
		case 5:
			return $('#_window_video');
		case 6:
			return $('#_window_info');
	}
}
function getSpin(idx_){
	switch(idx_){
		case 0:
			return $('#_spin_sound');
		case 1:
			return $('#_spin_air');
		case 2:
			return $('#_spin_wheel');
		case 3:
			return $('#_spin_fur');
		case 4:
			return $('#_spin_oil');
		case 5:
			return $('#_spin_video');
		case 6:
			return $('#_spin_info');
	}
}

function checkEmptyWindow(idx_){
	
	var left_=isLeft(idx_);

	if(_mobile){
		for(var k=0;k<_window_opened.length;k++){
			closeMenu(_window_opened[k].idx);
			_window_opened.splice(k,1);
		}
		_window_opened.push({'idx':idx_,'pos':'left'});
		if(left_){
			$('#_right_window').addClass('close');
			$('#_left_window').removeClass('close');
		}else{
			$('#_left_window').addClass('close');
			$('#_right_window').removeClass('close');
		}
		return;
	}
	$('#_left_window').removeClass('close');
	$('#_right_window').removeClass('close');
	
	var ridx=-1;
	for(var k=0;k<_window_opened.length;k++){
		if(left_ && _window_opened[k].pos==='left') ridx=k;
		if(!left_ && _window_opened[k].pos==='right') ridx=k;
	}
	if(ridx>-1){
		closeMenu(_window_opened[ridx].idx);
		_window_opened.splice(ridx,1);
	}
	if(left_) _window_opened.push({'idx':idx_,'pos':'left'});
	else _window_opened.push({'idx':idx_,'pos':'right'});

}


function onMenuClick(i){


	if(!$('#_hint').hasClass('hidden')) onHintClick();

	var idx=-1;
	for(var k=0;k<_window_opened.length;k++){
		if(_window_opened[k].idx==i) idx=k;
	}
	if(idx>-1) return;

	checkEmptyWindow(i);
	setTimeout(function(){
		openMenu(i);
		// _window_opened.push(i);
	},500);
}
function openMenu(i){
	
	playWindowOpen();

	switch(i){
		case 0:
			$('#_window_sound').removeClass('close');			
			$('#_window_sound').removeClass('hidden');			
			$('#_menu_sound').addClass('active');
			$('#_spin_sound').addClass('active');
			break;
		case 1:
			$('#_window_air').removeClass('close');
			$('#_window_air').removeClass('hidden');
			$('#_menu_air').addClass('active');
			$('#_spin_air').addClass('active');
			break;
		case 2:
			$('#_window_wheel').removeClass('close');
			$('#_window_wheel').removeClass('hidden');			
			$('#_menu_wheel').addClass('active');
			$('#_spin_wheel').addClass('active');
			break;
		case 3:
			$('#_window_fur').removeClass('close');
			$('#_window_fur').removeClass('hidden');
			$('#_menu_fur').addClass('active');
			$('#_spin_fur').addClass('active');
			break;
		case 4:
			$('#_window_oil').removeClass('close');
			$('#_window_oil').removeClass('hidden');
			$('#_menu_oil').addClass('active');
			$('#_spin_oil').addClass('active');
			break;
		case 5:
			$('#_window_video').removeClass('close');
			$('#_window_video').removeClass('hidden');			
			$('#_menu_video').addClass('active');
			break;
		case 6:
			$('#_window_info').removeClass('close');
			$('#_window_info').removeClass('hidden');			
			$('#_spin_info').addClass('active');
			break;
	}
}

function onCloseClick(i){

	var idx=-1;
	for(var k=0;k<_window_opened.length;k++){
		if(_window_opened[k].idx==i) idx=k;
	}
	if(idx>-1) _window_opened.splice(idx,1);

	closeMenu(i);
}
function closeMenu(i){
	
	// var idx_=_window_opened.indexOf(i);
	// if(idx_!==-1) _window_opened.splice(idx_,1);
	playWindowClose();
	if(isLeft(i)) $('#_left_window').addClass('close');
	else $('#_right_window').addClass('close');

	switch(i){
		case 0:
			$('#_window_sound').addClass('hidden');
			$('#_menu_sound').removeClass('active');
			$('#_spin_sound').removeClass('active');
			setTimeout(function(){
				$('#_window_sound').addClass('close');
			},300);			
			break;
		case 1:
			$('#_video_air').each(function () { this.pause() });
			$('#_window_air').addClass('hidden');
			$('#_menu_air').removeClass('active');
			$('#_spin_air').removeClass('active');
			setTimeout(function(){
				$('#_window_air').addClass('close');
			},300);			
			break;
		case 2:
			$('#_window_wheel').addClass('hidden');
			$('#_menu_wheel').removeClass('active');
			$('#_spin_wheel').removeClass('active');
			setTimeout(function(){
				$('#_window_wheel').addClass('close');
			},300);			
			break;
		case 3:
			$('#_video_fur').each(function () { this.pause() });
			$('#_window_fur').addClass('hidden');
			$('#_menu_fur').removeClass('active');
			$('#_spin_fur').removeClass('active');
			setTimeout(function(){
				$('#_window_fur').addClass('close');
			},300);			
			break;
		case 4:
			$('#_window_oil').addClass('hidden');
			$('#_menu_oil').removeClass('active');
			$('#_spin_oil').removeClass('active');
			setTimeout(function(){
				$('#_window_oil').addClass('close');
			},300);			
			break;
		case 5:
			$('#_video_video').each(function () { this.pause() });
			$('#_window_video').addClass('hidden');
			$('#_menu_video').removeClass('active');
			setTimeout(function(){
				$('#_window_video').addClass('close');
			},300);			
			break;
		case 6:
			$('#_window_info').addClass('hidden');
			$('#_spin_info').removeClass('active');
			setTimeout(function(){
				$('#_window_info').addClass('close');
			},300);			
			break;
	}
}


function frameUpdate(e,data){

	if(_mobile) return;

	// console.log(data.frame);
	var frame=mapFrame(data.frame);

	for(var i=0;i<=6;++i){

		if(i==5) continue;

		var spin_=getSpin(i);
		
		var sfr=mapFrame(_spin_pos[i].startFrame);
		var efr=mapFrame(_spin_pos[i].endFrame);

		if(frame<sfr || frame>efr){
			spin_.addClass('hidden');
			continue;
		}

		spin_.removeClass('hidden');
		
		var pos=mapVal(frame,sfr,efr,_spin_pos[i].startPos,_spin_pos[i].endPos);
		
		if(i==3 || i==4 || i==5){
			// console.log(spin_.css('right'));
			var dest=parseFloat(spin_.css('right'))/$(window).innerWidth().toFixed(2)*100.0;
			spin_.css('width',(pos-dest)+'%');
		}else{
			var dest=parseFloat(spin_.css('left'))/$(window).innerWidth().toFixed(2)*100.0;
			spin_.css('width',(pos-dest)+'%');
		}
	}
}
function mapFrame(f){
	return (f-150+427)%427;
}

function mapVal(t,start,end,x1,x2){
	var tt=t-start;
	var dt=end-start;
	var dp=x2-x1;
	return (tt.toFixed(2)/dt.toFixed(2))*dp.toFixed(2)+x1;
}

function toggleSound(){
	_play_sound=!_play_sound;
	if(_play_sound){
		$('#_sound_button').removeClass('off');
		$('#_sound_bgm')[0].play();
	}else{
		$('#_sound_button').addClass('off');
		$('#_sound_bgm')[0].pause();
	}
}

function playWindowOpen(){
	if(_play_sound) $('#_sound_open')[0].play();
}
function playWindowClose(){
	if(_play_sound) $('#_sound_close')[0].play();
}

function onHintClick(){
	$('#_sound_bgm')[0].play();
	$('#_hint').addClass('hidden');
	setTimeout(function(){
		$('#_hint').addClass('close');
	},300);

	var api = $("#_spin_image").spritespin("api");
	api.startAnimation();
	// SpriteSpin.startAnimation($('#_spin_image'));
}


function toggleMenu(){
	
	if(!_mobile) return;

	if(!$('#_sound_button').hasClass('hidden')){
		// $('#_ham_button').removeClass('hidden');
		$('#_mmlab').addClass('hidden');
		$('#_facebook').addClass('hidden');
		$('#_sound_button').addClass('hidden');
	}else{
		// $('#_ham_button').addClass('hidden');
		$('#_mmlab').removeClass('hidden');
		$('#_facebook').removeClass('hidden');
		$('#_sound_button').removeClass('hidden');
	}
}