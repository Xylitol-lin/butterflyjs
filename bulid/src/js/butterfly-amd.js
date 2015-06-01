require.config({
	baseUrl: '../',
	packages: [{
		name: 'butterfly',
		location: './src/js',
		main: 'butterfly'
	}],
	paths: {
		// require.js plugins
		view: 'src/js/requirejs-butterfly',
		// lib
		zepto: 'src/bower_components/zepto/zepto.min',
		jquery: 'src/bower_components/jquery/dist/jquery.min',
		underscore: 'src/bower_components/underscore/underscore-min',
		backbone: 'src/bower_components/backbone/backbone',
		text: 'src/bower_components/requirejs-text/text',
		spin: 'src/bower_components/spin.js/spin.min'
	},
	waitSeconds: 7,
	shim: {
		jquery: {exports: '$'},
		underscore: {exports: '_'},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require(['butterfly'],
	function(butterfly){

		//ios7 issue fix
		// if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
  // 		$('html').addClass('ipad ios7');
		// }
		//iOS scroll to top
		setTimeout(function() {window.scrollTo(0, 1);}, 0);


		//enable fastclick
		// FastClick.attach(document.body);

		//this will stop the page from scrolling without IScroll
		// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});
