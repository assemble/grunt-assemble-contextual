From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install {%= name %} --save-dev
```

_The plugin must be listed in the `devDependencies` of your project.js package.json to be recognized by Assemble!_.

Once that's done, just add `{%= name %}`, the name of this module, to the `plugins` option in the Assemble task:


```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assemble: {
      options: {
        plugins: ['{%= name %}'],
        {%= _.shortname(name) %}: {
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