var _window_opened=[];

var _spin_pos=[
{'startFrame':300,'endFrame':149,'startPos':40,'endPos':50},
{'startFrame':150,'endFrame':300,'startPos':40,'endPos':63},
{'startFrame':150,'endFrame':300,'startPos':60,'endPos':40},
{'startFrame':300,'endFrame':149,'startPos':38,'endPos':63},
{'startFrame':300,'endFrame':149,'startPos':63,'endPos':35}];

window.onload=function(){
	var src_=[];
		for(var i=0;i<427;++i) src_.push('video/BG/BG'+leftPad(i,3)+'.jpg')
		$('#_spin_image').spritespin({
			source:src_,			
			animate: true,
			sizeMode:'fill',
			responsive:true,
			onLoad:spinOnLoad,
			onFrameChanged:frameUpdate,
		    plugins: [
		      '360',
		      'drag'
		    ]
		});			


	onMenuClick(6);
	// setupWindowLayout();
}
window.onresize=function(){
}


function spinOnLoad(){
	$('#_loading').addClass('hidden');
	setTimeout(function(){
			$('#_loading').addClass('close');
	},200);
}


function leftPad(value, length){ 
    return ('0'.repeat(length) + value).slice(-length); 
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

	switch(_window_opened.length){
		case 0:
			_window_opened.push({'idx':idx_,'pos':'left'});
			getWindow(idx_).css('left','60px');
			getWindow(idx_).css('right','');
			break;
		case 1:
			var exist_=_window_opened[0].pos;
			if(exist_==='left'){
				_window_opened.push({'idx':idx_,'pos':'right'});
				getWindow(idx_).css('right','60px');
				getWindow(idx_).css('left','');			
			}else{
				_window_opened.push({'idx':idx_,'pos':'left'});
				getWindow(idx_).css('left','60px');
				getWindow(idx_).css('right','');			
			}
			break;
		case 2:
			var pop=_window_opened.shift();
			closeMenu(pop.idx);
			if(pop.pos==='right'){
				_window_opened.push({'idx':idx_,'pos':'right'});
				getWindow(idx_).css('right','60px');
				getWindow(idx_).css('left','');			
			}else{
				_window_opened.push({'idx':idx_,'pos':'left'});
				getWindow(idx_).css('left','60px');
				getWindow(idx_).css('right','');			
			}
			break;
	}


}


function onMenuClick(i){
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
	// show window
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
	// console.log(data.frame);
	var frame=mapFrame(data.frame);

	for(var i=0;i<5;++i){
		var spin_=getSpin(i);
		
		var sfr=mapFrame(_spin_pos[i].startFrame);
		var efr=mapFrame(_spin_pos[i].endFrame);

		if(frame<sfr || frame>efr){
			spin_.addClass('hidden');
			continue;
		}

		spin_.removeClass('hidden');
		
		var pos=mapVal(frame,sfr,efr,_spin_pos[i].startPos,_spin_pos[i].endPos);
		
		if(i==0 || i==4 || i==2){
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