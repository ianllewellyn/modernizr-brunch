# modernizr-brunch

<img src="//img.shields.io/npm/v/modernizr-brunch.svg" alt="npm version" height="18">
<img src="//img.shields.io/npm/dt/modernizr-brunch.svg" alt="npm downloads" height="18">

[Modernizr](http://modernizr.com) builder for [brunch](http://brunch.io).
Automatically generates you a custom modernizr build including any Modernizr tests
in your brinch project.

## Installation

`npm install --save modernizr-brunch`

## Configuration

Configuration is handled using brunch config plugin options.

#### `destination` (string, optional)

The output location of your generated modernizr file relative to the root of
your public dir (the same as joinTo paths).

Default: `{config.paths.public}/modernizr.js`.

#### `options` (array, optional)

Modernizr options. Setting this will replace the default values. Check the
[modernizr builder](https://modernizr.com/download) for possble values, it
is not very well explained.

Default: `[ 'html5shiv', 'addTest', 'setClasses' ]`

#### `tests` (array, optional)

Any tests that you want to include in the modernizr file. You might need this
if for some reason your project used modernizr tests that can not be picked up
automatically.

[All Modernizr tests](https://modernizr.com/docs#features)

#### `excludeTests` (array, optional)

Any tests that you want to explicitly exclude from the build. Most useful for
css classes that match modernizr test names.

## Example brunch-config.coffee

```coffee
	plugins:
		modernizr:
			destination: 'javascripts/modernizr.js'
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
