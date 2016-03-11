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

A monochromatic version of the indicator is available for use against colored backgrounds. Just add the `.monochromatic` class to the indicator.

<div class="demo">
  <div class="row no-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x align-center">
        <span class="loading-indicator monochromatic"></span>
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-teal-bg padding-1x align-center">
        <span class="loading-indicator monochromatic"></span>
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-orange-bg padding-1x align-center">
        <span class="loading-indicator monochromatic"></span>
      </div>
    </div>
  </div>
</div>

```html
<div class="brand-purple-bg">
  <span class="loading-indicator monochromatic"></span>
</div>
<div class="brand-teal-bg">
  <span class="loading-indicator monochromatic"></span>
</div>
<div class="brand-orange-bg">
  <span class="loading-indicator monochromatic"></span>
</div>
```

## Loading indicator on buttons

You might want to display the loading indicator in a button to indicate that an action has been taken and that the request is processing. Inside a link or `button` tag, wrap the button text in a span with the `.loading-indicator` class. The indicator scales with the size of the button.

<div class="demo align-center">
  <button type="button" class="btn brand-pink-bg"><span class="loading-indicator monochromatic">Processing</span></button>
</div>

```html
<button type="button" class="btn brand-pink-bg"><span class="loading-indicator monochromatic">Processing</span></button>
```

<div class="alert">
  <p>
    <strong>NOTE:</strong> Because the indicator uses the <code>:before</code> pseudo-element, you can only use this in links styled as buttons and <code>button</code> tags.
  </p>
</div>
