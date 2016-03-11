---
title: 'Loading Indicators'
layout: documentation
---

Weavr includes a CSS loading indicator. It comes in three sizes and full-color and monochromatic variations.

To add the loading indicator, add a `div` or `span` with the class `.loading-indicator`. The actual indicator is placed in a `:before` pseudo-element, so you could add this class to an element that already contains content, but you'll need to add some additional styles to handle the spacing and positioning of the indicator relative to the content.

<div class="demo align-center">
  <span class="loading-indicator"></span>
</div>

```html
<span class="loading-indicator"></span>
```

## Sizes

Add the modifier classes `.large` or `.small` to maker the indicator larger or smaller.

<div class="demo align-center">
<span class="loading-indicator small"></span>
<span class="loading-indicator"></span>
<span class="loading-indicator large"></span>
</div>

```html
<span class="loading-indicator small"></span>
<span class="loading-indicator"></span>
<span class="loading-indicator large"></span>
```

## Against colored backgrounds

Indicators automatically switch to a monochromatic variation against colored backgrounds as long as the background color is set by a [background color class]({{ site.baseurl }}/docs/components/colors).

<div class="demo">
  <div class="row no-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x align-center">
        <span class="loading-indicator"></span>
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-teal-bg padding-1x align-center">
        <span class="loading-indicator"></span>
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-orange-bg padding-1x align-center">
        <span class="loading-indicator"></span>
      </div>
    </div>
  </div>
</div>

```html
<div class="brand-purple-bg">
  <span class="loading-indicator"></span>
</div>
<div class="brand-teal-bg">
  <span class="loading-indicator"></span>
</div>
<div class="brand-orange-bg">
  <span class="loading-indicator"></span>
</div>
```

If you would like to use the monochromatic variation against a background that wasn't set via a background color class, you can add the `.monochromatic` modifier class to the indicator.

<div class="demo">
  <div class="padding-2x align-center" style="background-color: #ed027e;">
    <span class="loading-indicator monochromatic"></span>
  </div>
</div>

```html
<div class="padding-2x align-center" style="background-color: #ed027e;">
  <span class="loading-indicator monochromatic"></span>
</div>
```

Note that the full-color indicator is used against offwhite and dark gray backgrounds.

<div class="demo">
  <div class="row no-gutter">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-offwhite-bg padding-1x align-center">
        <span class="loading-indicator"></span>
      </div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-dark-gray-bg padding-1x align-center">
        <span class="loading-indicator"></span>
      </div>
    </div>
  </div>
</div>
