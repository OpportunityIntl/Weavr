---
title: 'Logos'
layout: documentation
---

Weavr comes with graphic files for the many variations of Opportunity's web logo. The Opportunity logo comes in several variations based on the country, size, color, and background. In addition to referencing the files in image tags, you can quickly add a logo to your project by using the `.oi-logo` class on an element. When adding the class to a link or `span`, the element will be displayed `inline-block`. Adding it to a `div` will give you a block element.

<div class="demo align-center">
  <span class="oi-logo"></span>
</div>

~~~html
<span class="oi-logo"></span>
~~~

<div class="alert">
  <p>
    <strong>NOTE:</strong> Weavr automatically uses higher-resolution versions of the logo on retina screens. Needless to say, because of the proportion of the mark to the text in Opportunity's logo, the logo looks best on retina screens, especially at smaller sizes.
  </p>
</div>

## Country

Weavr includes country-specific logos for Opportunity's fundraising partners in Australia and Canada. Add the class `.australia` or `.canada` to the element to get the respective logo variation.

<div class="demo align-center">
  <div class="row">
    <div class="col col-4 t-col-6 m-col-12">
      <span class="oi-logo"></span>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <span class="oi-logo australia"></span>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <span class="oi-logo canada"></span>
    </div>
  </div>
</div>

~~~html
<span class="oi-logo"></span>
<span class="oi-logo australia"></span>
<span class="oi-logo canada"></span>
~~~

## Size

The logo can be displayed smaller (ideal for mobile) by adding the modifier class `.small`. The small logo should probably be reserved for tablet and mobile devices, as it looks best on retina screens.

<div class="demo align-center">
  <div class="row">
    <div class="col col-4 t-col-6 m-col-12">
      <span class="oi-logo small"></span>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <span class="oi-logo small australia"></span>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <span class="oi-logo small canada"></span>
    </div>
  </div>
</div>

~~~html
<span class="oi-logo small"></span>
<span class="oi-logo small australia"></span>
<span class="oi-logo small canada"></span>
~~~

## Color variations

The Opportunity logo comes in monochromatic variations for each of the primary brand colors. Add the class `.brand-purple`, `.brand-teal`, `.brand-orange`, or `.brand-pink` to get the color variation.

<div class="demo">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="oi-logo"></div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="oi-logo brand-purple"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="oi-logo brand-teal"></div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="oi-logo brand-orange"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="oi-logo brand-pink"></div>
    </div>
  </div>
</div>

~~~html
<div class="oi-logo"></div>
<div class="oi-logo brand-purple"></div>
<div class="oi-logo brand-teal"></div>
<div class="oi-logo brand-orange"></div>
<div class="oi-logo brand-pink"></div>
~~~

## On dark backgrounds

For logos placed on a dark or colored background, add the `.on-dark` class to get the appropriate variation.

<div class="demo align-center brand-darkgray-bg">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <span class="oi-logo on-dark"></span>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <span class="oi-logo canada brand-teal on-dark"></span>
    </div>
  </div>
</div>

~~~html
<span class="oi-logo on-dark"></span>
<span class="oi-logo canada brand-teal on-dark"></span>
~~~
