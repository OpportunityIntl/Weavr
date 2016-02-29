---
title: 'Viewport Height Sections'
layout: documentation
---

Weavr's viewport height classes allow you to easily define the height of a section relative to the viewport height. The classes are as follows, and the height should be self-evident:

- `.viewport-height`
- `.viewport-three-quarter-height`
- `.viewport-two-thirds-height`
- `.viewport-half-height`
- `.viewport-one-third-height`
- `.viewport-quarter-height`

Weavr's Javascript automatically checks the height of the content contained in a viewport height section and ensures that the container is never shorter than its content. It does this by setting the `min-height` property of the viewport height section to the height of the content (factoring in margins and padding).

## Demonstration

<div class="demo">
  <section class="viewport-height brand-purple-bg overlay margin-bottom-2x">
    <div class="content-overlay middle align-center">
      <code>.viewport-height</code>
    </div>
  </section>
  <section class="viewport-three-quarter-height brand-purple-bg overlay margin-bottom-2x">
    <div class="content-overlay middle align-center">
      <code>.viewport-three-quarter-height</code>
    </div>
  </section>
  <section class="viewport-two-thirds-height brand-purple-bg overlay margin-bottom-2x">
    <div class="content-overlay middle align-center">
      <code>.viewport-two-thirds-height</code>
    </div>
  </section>
  <section class="viewport-half-height brand-purple-bg overlay margin-bottom-2x">
    <div class="content-overlay middle align-center">
      <code>.viewport-half-height</code>
    </div>
  </section>
  <section class="viewport-one-third-height brand-purple-bg overlay margin-bottom-2x">
    <div class="content-overlay middle align-center">
      <code>.viewport-one-third-height</code>
    </div>
  </section>
  <section class="viewport-quarter-height brand-purple-bg overlay">
    <div class="content-overlay middle align-center">
      <code>.viewport-quarter-height</code>
    </div>
  </section>
</div>
