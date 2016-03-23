Weavr
=========

Weavr is a frontend framework for Opportunity International. You can [check out the documentation here](http://opportunityintl.github.io/Weavr) (still in progress).

## Introduction

The Weavr framework was created by Opportunity International to speed up development time for new pages/projects and to ensure consistency across Opportunity’s web platforms.

It is lightweight (compared to frameworks like Foundation and Bootstrap), fully responsive and mobile first. One of our goals was to build a CSS framework that avoids the clutter of classnames that some other frameworks require in your markup, instead relying as much as possible on highly opinionated default styles for semantic markup, leaving the use of CSS classes for layouts, modules, and for modifying elements with modifier and utility classes.

Weavr’s default styles are highly opinionated to promote consistency in design patterns across Opportunity’s web platforms. In contrast to other frameworks, which are designed to be customized and adapted to anyone’s brand or website design, Weavr is meant to be 100% on-brand for Opportunity and no one else.

## Development

To work on Weavr, clone the repo to your local machine. We use Grunt to automate the build process, so you'll need to have Node, NPM, and Grunt installed.

The build process has been tested on Node v0.12.7 with Grunt v0.4.5. It has not been tested on any versions of Node since they made the switch to semantic versioning (v4 and above).

In the root of the repo directory, run `npm install`. Start the Grunt `watch` task with `grunt watch`. This will listen for changes to .js and .scss files under the `js` and `sass` directories.

The final files are compiled and copied to `dist/weavr`.
