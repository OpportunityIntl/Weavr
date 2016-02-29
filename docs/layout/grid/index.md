---
title: 'Grid'
layout: documentation
---

Weavr comes with a fluid, responsive 12-column grid system with fixed gutters. Gutters are 20px by default. Rows are `<div>`s with a class of `.row`. Columns are `<div>`s with a class of `.col` followed by column classes indicating how many columns the `<div>` should span at each breakpoint.

Desktop column classes follow the format `col-[number of columns]`, while breakpoints below that (netbook, tablet, mobile) follow the format `[first letter of breakpoint]-col-[number of columns]`.

For the desktop breakpoint, the columns should add up to 12. For breakpoints below that, they should add up to a multiple of 12.

<div class="demo">
  <div class="row">
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-3 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-3 t-col-6 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-3 t-col-6 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-3 t-col-6 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-3 t-col-6 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-5 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-5 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-7 t-col-7 m-col-7">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-5 t-col-5 m-col-5">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-8 t-col-8 m-col-7">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-5">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-9 t-col-8 m-col-7">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-3 t-col-4 m-col-5">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-10 t-col-9 m-col-8">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-3 m-col-4">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-11 t-col-10 m-col-9">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-1 t-col-2 m-col-3">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
</div>

```html
<!-- excerpts of the markup in the demo -->
<div class="row">
  <div class="col col-4 t-col-4 m-col-12">
    ...
  </div>
  <div class="col col-4 t-col-4 m-col-6">
    ...
  </div>
  <div class="col col-4 t-col-4 m-col-6">
    ...
  </div>
</div>
<div class="row">
  <div class="col col-5 t-col-4 m-col-6">
    ...
  </div>
  <div class="col col-2 t-col-4 m-col-6">
    ...
  </div>
  <div class="col col-5 t-col-4 m-col-12">
    ...
  </div>
</div>
<div class="row">
  <div class="col col-8 t-col-8 m-col-7">
    ...
  </div>
  <div class="col col-4 t-col-4 m-col-5">
    ...
  </div>
</div>
<div class="row">
  <div class="col col-12 t-col-12 m-col-12">
    ...
  </div>
</div>
```

<div class="alert">
  <p>
    <strong>NOTE:</strong> Weavr's grid system sets negative left and right margins on the <code>.row</code> element to create fixed-width gutters without requiring classes to identify the first and last column in each row. A side effect of this is that the row must be a descendant of an element that has at least as much padding as half the gutter width (e.g. for a normal row, an ancestor element must have at least 10px of padding on the left and right sides). If you place a row inside an element that goes from viewport edge to edge with no padding, the gutter from the last column in the row will extend beyond the width of the viewport and make the page horizontally scrollable.
  </p>
  <p>
    If you want to use the grid system from edge to edge of the viewport, use the `.no-gutter` modifier (which is introduced below) to create a row with no gutters between columns.
  </p>
</div>

## Modifying the gutter size

The gutter between columns can be made larger, smaller, or removed with the modifier classes `.large-gutter`, `.small-gutter`, and `.no-gutter`.

<div class="demo">
  <div class="row large-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row large-gutter">
    <div class="col col-5 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-5 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row large-gutter">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
</div>

```html
<div class="row large-gutter">
  ...
</div>
```

<div class="demo">
  <div class="row small-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row small-gutter">
    <div class="col col-5 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-5 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
  <div class="row small-gutter">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
</div>

```html
<div class="row small-gutter">
  ...
</div>
```

<div class="demo">
  <div class="row no-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-teal-bg padding-1x"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <div class="brand-orange-bg padding-1x"></div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-5 t-col-4 m-col-6">
      <div class="brand-pink-bg padding-1x"></div>
    </div>
    <div class="col col-2 t-col-4 m-col-6">
      <div class="brand-offwhite-bg padding-1x"></div>
    </div>
    <div class="col col-5 t-col-4 m-col-12">
      <div class="brand-darkgray-bg padding-1x"></div>
    </div>
  </div>
  <div class="row no-gutter">
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-green-bg padding-1x"></div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <div class="brand-purple-bg padding-1x"></div>
    </div>
  </div>
</div>

```html
<div class="row no-gutter">
  ...
</div>
```

## Nested grids

Gutters are only applied to a row's first-level columns, so you can safely nest rows inside of columns.

<div class="demo">
  <div class="row no-gutter brand-offwhite-bg">
    <div class="col col-8 t-col-8 m-col-12">
      <div class="padding-2x">
        <h3 class="brand-green">Subscribe</h3>
        <p class="small">
          We won't sell your information, yadda yadda yadda.
        </p>
        <div class="row">
          <div class="col col-4 t-col-6 m-col-12">
            <input type="text" name="name" value="" placeholder="First Name">
          </div>
          <div class="col col-4 t-col-6 m-col-12">
            <input type="text" name="name" value="" placeholder="Email">
          </div>
          <div class="col col-4 t-col-12 m-col-12">
            <input type="submit" class="btn brand-green-bg block" value="Sign up">
          </div>
        </div>
      </div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="padding-2x brand-darkgray-bg">
        <p class="small">
          <strong>About Opportunity International</strong>
        </p>
        <p class="small">
          Polaroid cliche Schlitz butcher selfies. Vice vinyl mixtape photo booth. Trust fund synth Shoreditch you probably haven't heard of them vinyl, literally small batch.
        </p>
      </div>
    </div>
  </div>
</div>

```html
<div class="row no-gutter brand-offwhite-bg">
  <div class="col col-8 t-col-8 m-col-12">
    <div class="padding-2x">
      <h3 class="brand-green">Subscribe</h3>
      <p class="small">
        We won't sell your information, yadda yadda yadda.
      </p>
      <div class="row">
        <div class="col col-4 t-col-6 m-col-12">
          <input type="text" name="name" value="" placeholder="First Name">
        </div>
        <div class="col col-4 t-col-6 m-col-12">
          <input type="text" name="name" value="" placeholder="Email">
        </div>
        <div class="col col-4 t-col-12 m-col-12">
          <input type="submit" class="btn brand-green-bg block" value="Sign up">
        </div>
      </div>
    </div>
  </div>
  <div class="col col-4 t-col-4 m-col-12">
    <div class="padding-2x brand-darkgray-bg">
      <p class="small">
        <strong>About Opportunity International</strong>
      </p>
      <p class="small">
        Polaroid cliche Schlitz butcher selfies. Vice vinyl mixtape photo booth. Trust fund synth Shoreditch you probably haven't heard of them vinyl, literally small batch.
      </p>
    </div>
  </div>
</div>
```

---

{% include prev.html url='docs/layout' title='Layout' %}
{% include next.html url='docs/layout/containers' title='Containers' %}
