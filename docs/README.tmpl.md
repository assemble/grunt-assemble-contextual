# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

## Getting Started
{%= _.doc("quickstart.md") %}

## Option
{%= _.doc("options.md") %}

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].

## Author

+ [github/jonschlinkert]({%= author.url %})
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)


## License
{%= copyright %}
{%= license %}

***

_This file was generated on {%= grunt.template.date("fullDate") %}._


[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html