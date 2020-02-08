# Gatsby Drupal Starter Blog with Markdown
This is based off of the [Gatsby Drupal
blog example](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal),
with some modifications to allow bloggers to write articles in commonmark
markdown format.

[Blog](https://errcsool.com/blog/68)

r Drupal Setup
After starting Drupal, create a new text format for your markdown blog inputs.
This should be a plaintext input format. Do not use the `Markdown` filter, as this
converts markdown input into HTML. 

# Notes
The raw markdown source should be retrieved by the Gatsby dev server and parsed
by the `unified.js` parsing layer into React components.

I use the ContentaCMS headless Drupal distributing based off of Drupal Core 8.
These instructions probably translate to standard Drupal 8, as 8 switches the
Core API to be headless by default.
