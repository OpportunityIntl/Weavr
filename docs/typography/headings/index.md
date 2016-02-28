---
title: 'Headings'
layout: documentation
---

Weavr includes styles for headings `h1` through `h6`, but to be honest, we've never run into a situation where we needed `h5` and `h6`, so those styles are fairly arbitrary at the moment. Here's a demonstration:

<div class="demo">
  <h1>Here's an H1</h1>
  <h2>Here's an H2</h2>
  <h3>Here's an H3</h3>
  <h4>Here's an H4</h4>
  <h5>Here's an H5</h5>
  <h6>Here's an H6</h6>
</div>

## Subheadings and Superheadings

You can define subheadings and "superheadings" (we may have made that term up) by adding a span inside the heading tag with the corresponding class:

<div class="demo">
  <h1>This is a heading <span class="subheading">and this is the subheading</span></h1>
</div>

```html
<h1>This is a heading <span class="subheading">and this is the subheading</span></h1>
```

<div class="demo">
  <h1><span class="superheading">This is a superheading</span> above a heading</h1>
</div>

```html
<h1><span class="superheading">This is a superheading</span> above a heading</h1>
```

<div class="alert warning">
  <p><strong>NOTE:</strong> The empty space in the markup before the subheading span and after the superheading span is not necessary visually, but it is necessary for search engines and web crawlers to read the heading correctly.</p>
</div>

## Bordered headings

Headings can also be displayed with a border and padding for visual effect. Simply add the class `.bordered` to the heading tag, along with an optional [color class]({{ site.baseurl }}/docs/components/colors). The `.bordered` class sets the display to `inline-block`.

<div class="demo">
  <div class="align-center">
    <h3 class="bordered">A bordered heading</h3>
  </div>
</div>
```html
<div class="align-center">
  <h3 class="bordered">A bordered heading</h3>
</div>
```

<div class="demo">
  <div class="align-center">
    <h3 class="bordered brand-teal">A bordered heading with color</h3>
  </div>
</div>
```html
<div class="align-center">
  <h3 class="bordered brand-teal">A bordered heading with color</h3>
</div>
```

Bordered headings display white against dark and colored backgrounds.

<div class="demo brand-purple-bg">
  <div class="align-center">
    <h3 class="bordered">A bordered heading on purple</h3>
  </div>
</div>
```html
<div class="align-center brand-purple-bg padding-2x">
  <h3 class="bordered">A bordered heading on purple</h3>
</div>
```
