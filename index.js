"use strict"

var modernizr = require('customizr');

function ModernizrBrunch(brunchCfg)
{
	var modernizrConfig = (brunchCfg.plugins && brunchCfg.plugins.modernizr) || {};
	
	this.config = {
		
		cache: true,
		devFile: false,
		crawl: true,
		
		// We'll scan the files brunch generates, but we wont know them until
		// onCompile()
		files: {
			src: []
		},
		
		// Where do we write the modernir file?
		dest: modernizrConfig.destination || 'public/modernizr.js',
		
		// If brunch is optimizing then so do we
		uglify: (brunchCfg && brunchCfg.optimize),
		
		// Override these values with brunchConfig.plugins.modernizr.x
		options: modernizrConfig.options || [ 'html5shiv', 'addTest', 'setClasses' ],
		tests: modernizrConfig.tests || [],
		excludeTests: modernizrConfig.excludeTests || [],
		customTests: modernizrConfig.customTests || []
	}
}
ModernizrBrunch.prototype.brunchPlugin = true;
ModernizrBrunch.prototype.onCompile = function(generatedFiles)
{
	// List of files brunch has generated
	this.config.files.src = generatedFiles.map(function(x){ return x.path});
	
	console.log(this.config);
	
	// Do the compile
	modernizr(this.config);
};

module.exports = ModernizrBrunch;
