window.onload=function(){

	

}
function leftPad(value, length){ 
    return ('0'.repeat(length) + value).slice(-length); 
}

function onMenuClick(i){
	switch(i){
		case 0:
			$('#_window_sound').removeClass('close');			
			$('#_window_sound').removeClass('hidden');			
			break;
		case 1:
			$('#_window_air').removeClass('close');
			$('#_window_air').removeClass('hidden');
			break;
		case 2:
			$('#_window_wheel').removeClass('close');
			$('#_window_wheel').removeClass('hidden');			
			break;
		case 3:
			$('#_window_fur').removeClass('close');
			$('#_window_fur').removeClass('hidden');
			break;
		case 4:
			$('#_window_oil').removeClass('close');
			$('#_window_oil').removeClass('hidden');
			break;
		case 5:
			$('#_window_video').removeClass('close');
			$('#_window_video').removeClass('hidden');			
			break;
		case 6:
			$('#_window_info').removeClass('close');
			$('#_window_info').removeClass('hidden');			
			break;
	}
}

function onCloseClick(i){
	switch(i){
		case 0:
			$('#_window_sound').addClass('hidden');
			setTimeout(function(){
				$('#_window_sound').addClass('close');
			},300);			
			break;
		case 1:
			$('#_video_air').each(function () { this.pause() });
			$('#_window_air').addClass('hidden');
			setTimeout(function(){
				$('#_window_air').addClass('close');
			},300);			
			break;
		case 2:
			$('#_window_wheel').addClass('hidden');
			setTimeout(function(){
				$('#_window_wheel').addClass('close');
			},300);			
			break;
		case 3:
			$('#_video_fur').each(function () { this.pause() });
			$('#_window_fur').addClass('hidden');
			setTimeout(function(){
				$('#_window_fur').addClass('close');
			},300);			
			break;
		case 4:
			$('#_window_oil').addClass('hidden');
			setTimeout(function(){
				$('#_window_oil').addClass('close');
			},300);			
			break;
		case 5:
			$('#_video_video').each(function () { this.pause() });
			$('#_window_video').addClass('hidden');
			setTimeout(function(){
				$('#_window_video').addClass('close');
			},300);			
			break;
		case 6:
			$('#_window_info').addClass('hidden');
			setTimeout(function(){
				$('#_window_info').addClass('close');
			},300);			
			break;
	}
}