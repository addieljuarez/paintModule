// /*
 // * Single Window Application Template:
 // * A basic starting point for your application.  Mostly a blank canvas.
 // * 
 // * In app.js, we generally take care of a few things:
 // * - Bootstrap the application with any data we need
 // * - Check for dependencies like device type, platform version or network connection
 // * - Require and open our top-level UI component
 // *  
 // */
// 
// //bootstrap and check dependencies
// if (Ti.version < 1.8 ) {
	// alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
// }
// 
// // This is a single context application with multiple windows in a stack
// (function() {
	// //render appropriate components based on the platform and form factor
	// var osname = Ti.Platform.osname,
		// version = Ti.Platform.version,
		// height = Ti.Platform.displayCaps.platformHeight,
		// width = Ti.Platform.displayCaps.platformWidth;
// 	
	// //considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	// //yourself what you consider a tablet form factor for android
	// var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
// 	
	// var Window;
	// if (isTablet) {
		// Window = require('ui/tablet/ApplicationWindow');
	// }
	// else {
		// // Android uses platform-specific properties to create windows.
		// // All other platforms follow a similar UI pattern.
		// if (osname === 'android') {
			// Window = require('ui/handheld/android/ApplicationWindow');
		// }
		// else {
			// Window = require('ui/handheld/ApplicationWindow');
		// }
	// }
	// new Window().open();
// })();





var Paint = require('ti.paint');

var win = Ti.UI.createWindow({ backgroundColor: '#fff' });
var paintView = Paint.createPaintView({
    top:0, right:0, bottom:80, left:0,
    // strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
    strokeColor:'#0f0', strokeAlpha:255, strokeWidth:10,
    eraseMode:false
});
win.add(paintView);

var buttonStrokeWidth = Ti.UI.createButton({ left:10, bottom:10, right:10, height:30, title:'Decrease Stroke Width' });
buttonStrokeWidth.addEventListener('click', function(e) {
	paintView.strokeWidth = (paintView.strokeWidth === 10) ? 5 : 10;
	e.source.title = (paintView.strokeWidth === 10) ? 'Decrease Stroke Width' : 'Increase Stroke Width';
});
win.add(buttonStrokeWidth);

var buttonStrokeColorRed = Ti.UI.createButton({ bottom:100, left:10, width:75, height:30, title:'Red' });
buttonStrokeColorRed.addEventListener('click', function() { paintView.strokeColor = 'red'; });
var buttonStrokeColorGreen = Ti.UI.createButton({ bottom:70, left:10, width:75, height:30, title:'Green' });
buttonStrokeColorGreen.addEventListener('click', function() { paintView.strokeColor = '#0f0'; });
var buttonStrokeColorBlue = Ti.UI.createButton({ bottom:40, left:10, width:75, height:30, title:'Blue' });
buttonStrokeColorBlue.addEventListener('click', function() { paintView.strokeColor = '#0000ff'; });
win.add(buttonStrokeColorRed);
win.add(buttonStrokeColorGreen);
win.add(buttonStrokeColorBlue);

var clear = Ti.UI.createButton({ bottom:40, left:100, width:75, height:30, title:'Clear' });
clear.addEventListener('click', function() { paintView.clear(); });
win.add(clear);

var buttonStrokeAlpha = Ti.UI.createButton({ bottom:70, right:10, width:100, height:30, title:'Alpha : 100%' });
buttonStrokeAlpha.addEventListener('click', function(e) {
	paintView.strokeAlpha = (paintView.strokeAlpha === 255) ? 127 : 255;
	e.source.title = (paintView.strokeAlpha === 255) ? 'Alpha : 100%' : 'Alpha : 50%';
});
win.add(buttonStrokeAlpha);

var buttonStrokeColorEraser = Ti.UI.createButton({ bottom:40, right:10, width:100, height:30, title:'Erase : Off' });
buttonStrokeColorEraser.addEventListener('click', function(e) {
	paintView.eraseMode = (paintView.eraseMode) ? false : true;
	e.source.title = (paintView.eraseMode) ? 'Erase : On' : 'Erase : Off';
});
win.add(buttonStrokeColorEraser);

win.open();


