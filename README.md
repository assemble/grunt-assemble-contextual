# assemble-contrib-contextual [![NPM version](https://badge.fury.io/js/assemble-contrib-contextual.png)](http://badge.fury.io/js/assemble-contrib-contextual)

> Generates a JSON file with the context of each page. Basic plugin to help see what's happening in the build.

**Upgrade notice!** v0.2.0 or greater of this plugin depend on Assemble v0.5.0. _This plugin will not work with Assemble v0.4.0!_

## Getting Started
In the command line, run:

```bash
npm install assemble-contrib-contextual --save
```

Next, to register the plugin with Assemble in your project's Gruntfile you can either specify the direct path to the plugin(s) (e.g. `./path/to/plugins/*.js`), or if installed via npm, make sure the plugin is in the `devDependencies` of your project.js package.json, and simply add the module's name to the `plugins` option:

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assemble: {
      options: {
        plugins: ['assemble-contrib-contextual', 'other/plugins/*.js'],
        contextual: {
          dest: 'tmp/'
        }
      },
      files: {
        'dist/': ['templates/*.hbs']
      }
    }
  });
  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default', ['assemble']);
};
```
If everything was installed and configured correctly, after running `grunt assemble` you should see a JSON file for each page in the `dest` directory defined in the plugin's options. The basename of each page will be used as the name of each file.

_This plugin will make the build run slower!_ To disable it simple remove it from the options or remove the `dest` property.


Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.


## Options
### dest
Type: `String`  
Default: `assemble.dest + /tmp`

Destination of JSON context.


## Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.

+ [assemble-plugin-drafts](https://api.github.com/repos/assemble/assemble-plugin-drafts): Assemble plugin (v0.5.0) for preventing drafts from being rendered. 
+ [assemble-plugin-pagination](https://api.github.com/repos/assemble/assemble-plugin-pagination): WIP this plugin isn't ready for use! 
+ [assemble-plugin-rss](https://api.github.com/repos/assemble/assemble-plugin-rss): NOT Published yet! This plugin isn't ready for prime time! Plugin for creating RSS feeds with Assemble, the static site generator for Node.js, Grunt.js and Yeoman.  
+ [generator-plugin](https://api.github.com/repos/assemble/generator-plugin): Yeoman generator for Assemble plugins.  
+ [grunt-init-assemble-plugin](https://api.github.com/repos/assemble/grunt-init-assemble-plugin): Generate a plugin for Assemble. 
+ [plugins](https://api.github.com/repos/assemble/plugins): Collection of contrib plugins maintained by the Assemble core team. 
+ [assemble-contrib-lunr](https://api.github.com/repos/assemble/assemble-contrib-lunr): Assemble plugin for creating a search engine within your static site using lunr.js. 
+ [assemble-contrib-lunr-examples](https://api.github.com/repos/assemble/assemble-contrib-lunr-examples): Usages examples for assemble-contrib-lunr, a search plugin for Assemble. 
+ [assemble-contrib-markdown](https://api.github.com/repos/assemble/assemble-contrib-markdown): HEADS UP! This isn't ready for prime time! Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios. 
+ [assemble-contrib-navigation](https://api.github.com/repos/assemble/assemble-contrib-navigation): Assemble plugin for automatically generating Bootstrap-style side navigation.  
+ [assemble-contrib-permalinks](https://api.github.com/repos/assemble/assemble-contrib-permalinks): Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more. 
+ [assemble-contrib-sitemap](https://api.github.com/repos/assemble/assemble-contrib-sitemap): Sitemap generator plugin for Assemble 
+ [assemble-contrib-toc](https://api.github.com/repos/assemble/assemble-contrib-toc): Create a table of contents in the generated HTML, using Cheerio.js 
+ [assemble-contrib-toc-example](https://api.github.com/repos/assemble/assemble-contrib-toc-example): Example for generating a Table of Contents using Assemble. 
+ [assemble-contrib-wordcount](https://api.github.com/repos/assemble/assemble-contrib-wordcount): Assemble plugin for displaying a word-count on blog posts or pages. 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.


## Contributing
Find a bug? Have a feature request? Please [create an Issue](git://github.com/assemble/assemble-contrib-contextual/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality,
and run `docs` in the command line to build the docs with [Verb](https://github.com/assemble/verb).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)


## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on May 01, 2014._
