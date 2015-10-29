# modernizr-brunch

Custom modernizr builder for [brunch](http://brunch.io). Generates you a modernizr build
for any tests you are using in your project.

## Installation

`npm install --save javascript-brunch`

## Configuration

Configuration is handled using brunch config plugin options.

#### `destination` (string, optional)

The output location of your generated modernizr file.

Default: `public/javascripts/modernizr.js`.

#### `options` (array, optional)

Modernizr options. Setting this will replace the default values. Check the
[modernizr builder](https://modernizr.com/download) for possble values, it
is not very well explained.

Default: `[ 'html5shiv', 'addTest', 'setClasses' ]`

#### `tests` (array, optional)

Any tests that you want to include in the modernizr file. You might need this
if for some reason your project used modernizr tests that can not be picked up
automatically.

#### `excludeTests` (array, optional)

Any tests that you want to explicitly exclude from the build. Most useful for
css classes that match modernizr test names.


## Example brunch-config.coffee

```coffee
	plugins:
		modernizr:
			destination: 'public/javascripts/modernizr.js'
			options: [
				'setClasses'
			]
			tests: [
				'cors'
				'xhr2'
			]
			excludeTests: [
				'opacity'
			]
````
