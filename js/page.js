var _window_opened=[];
var _show_two_left=false;
var _show_two_right=false;

window.onload=function(){
	var src_=[];
		for(var i=0;i<427;++i) src_.push('video/BG/BG'+leftPad(i,3)+'.jpg')
		$('#_spin_image').spritespin({
			source:src_,			
			animate: true,
			sizeMode:'fill',
			responsive:true,
			onLoad:spinOnLoad,
		    plugins: [
		      '360',
		      'drag'
		    ]
		});		
	
	onMenuClick(6);
	setupWindowLayout();
}
window.onresize=function(){
	setupWindowLayout();	
}

function setupWindowLayout(){
	var height_max=$('#_left_window').innerHeight();

	if($('#_window_wheel').outerHeight()+$('#_window_fur').outerHeight()>height_max){
		_show_two_left=false
		$('#_window_wheel').addClass('windowCenter');
		$('#_window_wheel').css('top','');	
		$('#_window_fur').addClass('windowCenter');
		$('#_window_fur').css('bottom','');
	}else{
		_show_two_left=true;
		
		$('#_window_wheel').removeClass('windowCenter');
		$('#_window_wheel').css('top','0');	
		
		$('#_window_fur').removeClass('windowCenter');
		$('#_window_fur').css('bottom','0');
	}
	if($('#_window_air').outerHeight()+$('#_window_video').outerHeight()>height_max){
		
		_show_two_right=false;

		$('#_window_air').addClass('windowCenter');
		$('#_window_air').css('top','');

		$('#_window_video').addClass('windowCenter');
		$('#_window_video').css('bottom','');	
	}else{
		
		_show_two_right=true;
		
		$('#_window_air').removeClass('windowCenter');
		$('#_window_air').css('top','0');	

		$('#_window_video').removeClass('windowCenter');
		$('#_window_video').css('bottom','0');	
	}

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

function getWindowHeight(idx_){
	switch(idx_){
		case 0:
			return $('#_window_sound').outerHeight();
		case 1:
			return $('#_window_air').outerHeight();
		case 2:
			return $('#_window_wheel').outerHeight();
		case 3:
			return $('#_window_fur').outerHeight();
		case 4:
			return $('#_window_oil').outerHeight();
		case 5:
			return $('#_window_video').outerHeight();
		case 6:
			return $('#_window_info').outerHeight();
	}
}
function isLeftWindow(idx_){
	switch(idx_){
		case 1:
		case 5:
		case 4:
			return false;
		default:
			return true;
	}
}
function checkEmptyWindow(idx_){
	switch(idx_){
		case 0:
			closeMenu(2);
			closeMenu(3);
			closeMenu(6);
			break;
		case 6:
			closeMenu(0);
			closeMenu(2);
			closeMenu(3);
			break;
		case 2:
			if(!_show_two_left) closeMenu(3);
			closeMenu(0);
			closeMenu(6);
			break;
		case 3:
			if(!_show_two_left) closeMenu(2);
			closeMenu(0);
			closeMenu(6);
			break;
		case 1:
			if(!_show_two_right) closeMenu(5);
			closeMenu(4);
			break;
		case 5:
			if(!_show_two_right) closeMenu(1);
			closeMenu(4);
			break;
		case 4:
			closeMenu(1);
			closeMenu(5);
			break;
	}
}


function onMenuClick(i){

	// check already opened
	// var idx_=_window_opened.indexOf(i);
	// if(idx_!==-1) return;

	// find space
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

