---
title: 'Buttons'
layout: documentation
---

Make a button by adding the `.btn` class along with a [color class]({{ site.baseurl }}/docs/elements/colors) to a submit input, button input, link, or button element.

<div class="demo">
  <div class="inline-buttons">
    <a class="btn brand-purple-bg">Link</a>
    <input type="submit" value="Submit Input" class="btn brand-teal-bg" />
    <input type="button" value="Button Input" class="btn brand-orange-bg" />
    <button type="button" class="btn brand-pink-bg">Button</button>
  </div>
</div>

~~~html
<div class="inline-buttons">
  <a class="btn brand-purple-bg">Link</a>
  <input type="submit" value="Submit Input" class="btn brand-teal-bg" />
  <input type="button" value="Button Input" class="btn brand-orange-bg" />
  <button type="button" class="btn brand-pink-bg">Button</button>
</div>
~~~

Weavr's buttons come in three sizes, two styles, and each of Opportunity's brand colors. They can either be displayed as `inline-block` elements (i.e. only as wide as needed to accommodate the button text) or `block` elements, filling the width of their container and centering the text.

## Inline and block buttons

Buttons are displayed as `inline-block` by default. Add the `.block` modifier class to make them block elements.

<div class="demo">
  <p class="align-center">
    <button type="button" class="btn brand-purple-bg">An inline button</button>
  </p>
  <button type="button" class="btn block brand-purple-bg">A block button</button>
</div>

~~~html
<p class="align-center">
  <button type="button" class="btn brand-purple-bg">An inline button</button>
</p>
<button type="button" class="btn block brand-purple-bg">A block button</button>
~~~

If you need to display buttons side-by-side, use the `.inline-buttons` class on the buttons' container. It will provide a uniform gutter between the buttons and gracefully handle wrapping as the viewport gets smaller. You can see this in action in the first demo on this page.

## Normal and Ghost buttons

There are two styles available: "normal" and "ghost". For normal buttons, be sure to use a background color class. For ghost buttons, use a text color class and add the `.ghost` modifier class.

<div class="demo">
  <div class="inline-buttons">
    <button type="button" class="btn brand-orange-bg">A normal button</button>
    <button type="button" class="btn brand-orange ghost">A ghost button</button>
  </div>
</div>

~~~html
<p class="inline-buttons">
  <button type="button" class="btn brand-orange-bg">A normal button</button>
  <button type="button" class="btn brand-orange ghost">A ghost button</button>
</p>
~~~

## Sizes

Make a button larger or smaller by adding the modifier classes `.large` and `.small`.

<div class="demo">
  <p class="inline-buttons">
    <a class="btn large brand-pink-bg">Large button</a>
    <a class="btn large brand-pink ghost">Large button</a>
  </p>
  <p class="inline-buttons">
    <a class="btn brand-green-bg">Normal button</a>
    <a class="btn brand-green ghost">Normal button</a>
  </p>
  <p class="inline-buttons">
    <a class="btn small brand-teal-bg">Small button</a>
    <a class="btn small brand-teal ghost">Small button</a>
  </p>
</div>

~~~html
<p class="inline-buttons">
  <a class="btn large brand-pink-bg">Large button</a>
  <a class="btn large brand-pink ghost">Large button</a>
</p>
<p class="inline-buttons">
  <a class="btn brand-green-bg">Normal button</a>
  <a class="btn brand-green ghost">Normal button</a>
</p>
<p class="inline-buttons">
  <a class="btn small brand-teal-bg">Small button</a>
  <a class="btn small brand-teal ghost">Small button</a>
</p>
~~~

## Disabled buttons

Buttons can be disabled by adding the `disabled` attribute (for `input`s and `buttons`) and by adding the `.disabled` class to links. For disabled links, Weavr's Javascript automatically cancels any click events on them.

<div class="demo">
  <p class="inline-buttons">
    <a class="btn brand-purple-bg disabled">Disabled link</a>
    <input type="submit" class="btn brand-purple-bg" value="Disabled submit input" disabled />
    <input type="button" class="btn brand-purple-bg" value="Disabled button input" disabled />
    <button class="btn brand-purple-bg" disabled>Disabled button</button>
  </p>
  <p class="inline-buttons">
    <a class="btn ghost brand-purple disabled">Disabled link</a>
    <input type="submit" class="btn ghost brand-purple" value="Disabled submit input" disabled />
    <input type="button" class="btn ghost brand-purple" value="Disabled button input" disabled />
    <button class="btn ghost brand-purple" disabled>Disabled button</button>
  </p>
</div>

~~~html
<p class="inline-buttons">
  <a class="btn brand-purple-bg disabled">Disabled link</a>
  <input type="submit" class="btn brand-purple-bg" value="Disabled submit input" disabled />
  <input type="button" class="btn brand-purple-bg" value="Disabled button input" disabled />
  <button class="btn brand-purple-bg" disabled>Disabled button</button>
</p>
<p class="inline-buttons">
  <a class="btn ghost brand-purple disabled">Disabled link</a>
  <input type="submit" class="btn ghost brand-purple" value="Disabled submit input" disabled />
  <input type="button" class="btn ghost brand-purple" value="Disabled button input" disabled />
  <button class="btn ghost brand-purple" disabled>Disabled button</button>
</p>
~~~

## White buttons

If a button is contained in an element with a background color class, you can use `.brand-white-bg` (or `.brand-white` for ghost buttons) on the button and its text will take on the color of the background. A demonstration:

<div class="demo">
  <div class="row no-gutter">
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-pink-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-teal-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-orange-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-green-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-darkgray-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-gray-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-offwhite-bg padding-1x">
        <a class="btn block brand-white-bg">White</a>
      </div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-pink-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-teal-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-orange-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-green-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-darkgray-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-gray-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <div class="brand-offwhite-bg padding-1x">
        <a class="ghost btn block brand-white">White</a>
      </div>
    </div>
  </div>
</div>

~~~html
<div class="row no-gutter">
  <div class="col col-4 t-col-6 m-col-12">
    <div class="brand-pink-bg padding-1x">
      <a class="btn block brand-white-bg">White</a>
    </div>
  </div>
  <div class="col col-4 t-col-6 m-col-12">
    <div class="brand-purple-bg padding-1x">
      <a class="btn block brand-white-bg">White</a>
    </div>
  </div>
  <div class="col col-4 t-col-6 m-col-12">
    <div class="brand-teal-bg padding-1x">
      <a class="btn block brand-white-bg">White</a>
    </div>
  </div>
</div>

...

<div class="row no-gutter">
  <div class="col col-4 t-col-6 m-col-12">
    <div class="brand-pink-bg padding-1x">
      <a class="ghost btn block brand-white">White</a>
    </div>
  </div>
  <div class="col col-4 t-col-6 m-col-12">
    <div class="brand-purple-bg padding-1x">
      <a class="ghost btn block brand-white">White</a>
    </div>
  </div>
  <div class="col col-4 t-col-6 m-col-12">
    <div class="brand-teal-bg padding-1x">
      <a class="ghost btn block brand-white">White</a>
    </div>
  </div>
</div>

...

~~~
