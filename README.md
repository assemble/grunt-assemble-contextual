# assemble-contrib-contextual [![NPM version](https://badge.fury.io/js/assemble-contrib-contextual.png)](http://badge.fury.io/js/assemble-contrib-contextual) 

> Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build.

## Getting Started
From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install assemble-contrib-contextual --save-dev
```

_The plugin must be listed in the `devDependencies` of your project.js package.json to be recognized by Assemble!_.

Once that's done, just add `assemble-contrib-contextual`, the name of this module, to the `plugins` option in the Assemble task:


```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assemble: {
      options: {
        plugins: ['assemble-contrib-contextual'],
        contextual: {
          dest: 'tmp/'
        }
      },
      ...
    }
  });
  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default', ['assemble']);
};
```

If everything was installed and configured correctly, after running `grunt assemble` you should see a JSON file for each page in the `output` directory defined in the plugin's options. The basename of each page will be used as the name of each file.

_This plugin will make the build run slower!_ To disable it simple remove it from the options or remove the `dest` property. 


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].

## Author

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Monday, October 14, 2013._


[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html