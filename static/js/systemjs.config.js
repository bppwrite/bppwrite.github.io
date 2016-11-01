(function(global) {
  // map tells the System loader where to look for things
	var map = {
		'app': 'js/dist',
		'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.12',
		'jquery': 'https://unpkg.com/jquery@3.1.1/dist/jquery.min.js'
	};
  // packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app': { main: 'main.js',  defaultExtension: 'js' },
		'rxjs': { defaultExtension: 'js' }
	};
	var config = {
		map: map,
		packages: packages,
		baseURL: '/'
	};
	System.config(config);
})(this);
