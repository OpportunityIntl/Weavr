---
title: Using Weavr
layout: documentation
---
## Add Weavr to your project

To get started, add the `dist/weavr` directory to your project's assets directory. Assets such as fonts and images are referenced using relative paths in Weavr's stylesheets, so as long as the `dist/weavr` directory is intact, it doesn't matter where you place it in your project's directory tree.

## Boilerplate template

Below is a minimal boilerplate HTML document for Weavr. Note that Weavr's Javascript, as well as the [Javascript libraries built on top of Weavr]({{ site.baseurl }}/docs/libraries), depend on jQuery. Be sure to load jQuery before loading `OI.weavr.min.js` and any other scripts that depend on Weavr.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    
    <title>My Project</title>
    
    <link href="path/to/weavr/OI.weavr.min.css" rel="stylesheet">
    <!-- load stylesheets that depend on Weavr here -->
    
    <!-- For IE8 support, if needed: -->
    <!--[if lt IE 9]>
      <script src="path/to/html5shiv.js"></script>
      <script src="path/to/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <!-- page content goes here -->
  
    <script src="path/to/jquery.min.js"></script>
    <script src="path/to/weavr/OI.weavr.min.js"></script>
    <!-- load scripts that depend on Weavr here -->
  </body>
</html>
```

## Viewport Units bug on iOS Safari

Before version 8, iOS Safari had a nasty bug that caused viewport units (`vh`, `vw`, `vmin`, `vmax`) to go haywire. Weavr uses the `vh` unit for its viewport height layout classes. If you need to support iOS Safari 7 and below, Weavr comes with a "buggyfill" script, `OI.viewportunitsfix.js`. Include it in your document's `<head>`, after your stylesheets:

```html
<script type="text/javascript" src="path/to/weavr/OI.viewportunitsfix.min.js"></script>
<script type="text/javascript">
  iOSSafariViewportUnitsFix([
    {selector: '.viewport-height', property: 'height', value: '100vh'},
    {selector: '.viewport-half-height', property: 'height', value: '50vh'},
    {selector: '.viewport-quarter-height', property: 'height', value: '25vh'},
    {selector: '.viewport-three-quarter-height', property: 'height', value: '75vh'},
    {selector: '.viewport-two-thirds-height', property: 'height', value: '66vh'},
    {selector: '.viewport-one-third-height', property: 'height', value: '33vh'}
  ]);
</script>
```
