'use strict'

var modernizr = require('customizr');
var path = require('path');

function ModernizrBrunch(brunchCfg)
{
	var modernizrConfig = (brunchCfg.plugins && brunchCfg.plugins.modernizr) || {};
	var filesConfig = (brunchCfg.files) || {};
	var publicDir = brunchCfg.paths.public;
	
	// Find all generated files from config.paths
	var files = []
	for(var type in filesConfig)
	{
		var joinTo = filesConfig[type].joinTo;
		for(var file in joinTo)
		{
			var filePath = path.join(publicDir, file);
			if(files.indexOf(filePath) == -1)
				files.push(filePath);
		}
	}
	
	this.config = {
		
		cache: true,
		devFile: false,
		crawl: true,
		
		// Files to scan, all output files specified in brunch config.files
		files: {
			src: files
		},
		
		// Where do we write the modernir file?
		dest: path.join(publicDir, modernizrConfig.destination || 'modernizr.js'),
		
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
	modernizr(this.config);
};

module.exports = ModernizrBrunch;
