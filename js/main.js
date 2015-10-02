var light_on = true;

$('.switch').on('click', function(e) {


	$('body').toggleClass('light');
	$('body').toggleClass('dark');

	$('button').toggleClass('on');
	$('button').toggleClass('off');

	if ( '.status' != light_on ) {
		$('.status').text("Hey, who turn off the lights?");
	}

});
