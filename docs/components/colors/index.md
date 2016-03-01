---
title: 'Colors'
layout: documentation
---

Opportunity's brand has a vibrant color palette, and Weavr contains utility classes to quickly set the text color or background to each brand color. Color classes are named `.brand-[color]` for setting text color and `.brand-[color]-bg` for setting the background color.

## Color palette

For reference, here are the colors and their RGB and HEX values:

<div class="row">
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-purple-bg"></div>
    <p class="small">
      Purple<br>
      <code>.brand-purple</code><br>
      <code>.brand-purple-bg</code><br>
      #4a0059<br>
      rgb(74,0,89)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-light-purple-bg"></div>
    <p class="small">
      Light Purple<br>
      <code>.brand-light-purple</code><br>
      <code>.brand-light-purple-bg</code><br>
      #611171<br>
      rgb(97,17,113)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-teal-bg"></div>
    <p class="small">
      Teal<br>
      <code>.brand-teal</code><br>
      <code>.brand-teal-bg</code><br>
      #00abab<br>
      rgb(0,171,171)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-light-teal-bg"></div>
    <p class="small">
      Light Teal<br>
      <code>.brand-light-teal</code><br>
      <code>.brand-light-teal-bg</code><br>
      #6cc9c8<br>
      rgb(108,201,200)
    </p>
  </div>
</div>
<div class="row">
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-pink-bg"></div>
    <p class="small">
      Pink<br>
      <code>.brand-pink</code><br>
      <code>.brand-pink-bg</code><br>
      #ed027e<br>
      rgb(237,2,126)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-light-pink-bg"></div>
    <p class="small">
      Light Pink<br>
      <code>.brand-light-pink</code><br>
      <code>.brand-light-pink-bg</code><br>
      #ea69a7<br>
      rgb(234,105,167)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-orange-bg"></div>
    <p class="small">
      Orange<br>
      <code>.brand-orange</code><br>
      <code>.brand-orange-bg</code><br>
      #f15b22<br>
      rgb(241,91,34)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-light-orange-bg"></div>
    <p class="small">
      Light Orange<br>
      <code>.brand-light-orange</code><br>
      <code>.brand-light-orange-bg</code><br>
      #f37d50<br>
      rgb(243,125,80)
    </p>
  </div>
</div>
<div class="row">
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-green-bg"></div>
    <p class="small">
      Green<br>
      <code>.brand-green</code><br>
      <code>.brand-green-bg</code><br>
      #7bc557<br>
      rgb(123,197,87)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-offwhite-bg"></div>
    <p class="small">
      Offwhite<br>
      <code>.brand-offwhite</code><br>
      <code>.brand-offwhite-bg</code><br>
      #efeeea<br>
      rgb(239,238,234)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-gray-bg"></div>
    <p class="small">
      Gray<br>
      <code>.brand-gray</code><br>
      <code>.brand-gray-bg</code><br>
      #8f8e8c<br>
      rgb(143,142,140)
    </p>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-darkgray-bg"></div>
    <p class="small">
      Dark Gray<br>
      <code>.brand-dark-gray</code><br>
      <code>.brand-dark-gray-bg</code><br>
      #222222<br>
      rgb(34,34,34)
    </p>
  </div>
</div>

A darker purple also exists, but should only be used in print and for background color overlays.

<div class="row">
  <div class="col col-3 t-col-6 m-col-6">
    <div class="swatch brand-dark-purple-bg"></div>
    <p class="small">
      Dark Purple<br>
      <code>.brand-dark-purple</code><br>
      <code>.brand-dark-purple-bg</code><br>
      #2d0a3c<br>
      rgb(45,10,60)
    </p>
  </div>
</div>

<div class="alert">
  <p>
    <strong>NOTE:</strong> Due to legibility concerns, text should never be placed on a gray background (<code>.brand-gray-bg</code>). That color should really only be used for text.
  </p>
</div>

## Miscellaneous color classes

A few other utility color classes exist outside the palette above:

### White text and backgrounds

`.brand-white`, `.brand-white-bg`

### Transparent background

`.brand-transparent-bg`

### Text colors

Weavr's default text color is `#333333`, with the secondary color `#555555` available.

`.text-color`, `.text-color-secondary`.

## Text against background colors

All background color classes, with the exception of `.brand-offwhite-bg`, set the text color to `#fff` for legibility.

<div class="demo">
  <div class="row">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-2x align-center">
        White text
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-pink-bg padding-2x align-center">
        White text
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-teal-bg padding-2x align-center">
        White text
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-orange-bg padding-2x align-center">
        White text
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-green-bg padding-2x align-center">
        White text
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-dark-gray-bg padding-2x align-center">
        White text
      </div>
    </div>
  </div>
</div>

---

{% include prev.html url='docs/components' title='Components' %}
{% include next.html url='docs/components/buttons' title='Buttons' %}
