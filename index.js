/*
 * Assemble Contrib Plugin: Contextual
 * https://github.com/assemble/assemble-contrib-contextual
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

// core modules
var path  = require('path');

// node modules
var sort  = require('sort-object');
var _ = require('lodash');

/**
 * @param  {Object}   params
 * @param  {Function} next
 * @return {String}   The permalink string
 */
module.exports = function (assemble) {
  "use strict";

  var options = assemble.config;
  var grunt = options.grunt;

  var middleware = function(params, next) {

    var contextual = options.contextual || {};
    var page       = params.page;
    var context = params.context;

    contextual.dest = contextual.dest || page.dest + '/tmp';

    var outputDir = path.join(contextual.dest, path.dirname(page.src), page.data.basename);
    grunt.file.write(outputDir + '.json', JSON.stringify(sort(_.omit(context, ['grunt', 'orig'])), null, 2));

    grunt.verbose.ok('Generating context for: '.yellow + page.dest);

    next();
  };

  middleware.event = 'page:before:render';

  return {
    'assemble-middleware-contextual': middleware
  };
};
