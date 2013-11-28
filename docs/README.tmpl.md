# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

## Getting Started
{%= _.doc("quickstart.md") %}

## Options
{%= _.doc("options.md") %}

## Assemble plugins
{%= _.include("related-repos.md") %}

## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble/issues/new). Pull requests are also encouraged.
If you find this project useful, please consider "starring" it to show your support! Thanks!

## Authors
{%= _.contrib("authors.md") %}

## License
{%= copyright %}
{%= license %}

***

{%= _.include("footer.md") %}
