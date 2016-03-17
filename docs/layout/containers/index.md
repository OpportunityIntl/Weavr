---
title: 'Containers'
layout: documentation
---

Weavr uses container classes to constrain content to a maximum width. The container classes are named `.contained-[1..12]`, where the container's width is expressed as a number of columns in a grid-12 system with a max-width of 1260px. For example, `.contained-12` constrains the width to a maximum of 1260px, while `.contained-9` constrains the width to a maximum of 945px. Container classes set the `max-width` property, so the width of the containers is fluid below their maximum width.

See the demonstration below. Note that because of the width of the content section of this documentation, we're not bothering to demonstrate `.contained-12` through `.contained-10`, and you won't see the `.contained-9` element at its full-width even if you're viewing this documentation on a larger screen. Resize your browser window to see how the containers become fluid below their respective maximum widths. The [Weavr Kitchen Sink]({{ site.baseurl }}/kitchensink) demonstrates all 12 container classes if your screen is wide enough.

<div class="demo">
  <p>
    <code>.contained-9</code>
  </p>
  <div class="contained-9 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-8</code>
  </p>
  <div class="contained-8 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-7</code>
  </p>
  <div class="contained-7 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-6</code>
  </p>
  <div class="contained-6 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-5</code>
  </p>
  <div class="contained-5 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-4</code>
  </p>
  <div class="contained-4 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-3</code>
  </p>
  <div class="contained-3 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-2</code>
  </p>
  <div class="contained-2 brand-purple-bg padding-1x"></div>

  <p>
    <code>.contained-1</code>
  </p>
  <div class="contained-1 brand-purple-bg padding-1x"></div>
</div>

## Centering containers

Containers can be centered by adding the `.centered` modifier class. This sets the left and right margin to `auto`, so it only works on elements with a fixed `width` or `max-width` (like container classes). This modifier class is not to be confused with `.align-center`, which centers content _within_ an element and uses the `text-align` property.

<div class="demo">
  <div class="contained-9 centered brand-purple-bg padding-1x margin-bottom-2x"></div>
  <div class="contained-6 centered brand-purple-bg padding-1x margin-bottom-2x"></div>
  <div class="contained-4 centered brand-purple-bg padding-1x"></div>
</div>

~~~html
<div class="contained-9 centered brand-purple-bg padding-1x margin-bottom-2x"></div>
<div class="contained-6 centered brand-purple-bg padding-1x margin-bottom-2x"></div>
<div class="contained-4 centered brand-purple-bg padding-1x"></div>
~~~
