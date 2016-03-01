---
title: 'Background overlays'
layout: documentation
---

The foundational markup to overlay content over a container (i.e. place content over a background image, or align content over a container with a fixed height and/or width) is this:

```html
<div class="overlay">
  <div class="content-overlay">
    Content goes here.
  </div>
</div>
```

This sets the position of the `.overlay` container to `relative` and the position of the `.content-overlay` to `absolute`.

You're going to need more than this, though. Since the content has `position: absolute`, it has no impact on the size of its container, so the `.overlay` container needs to have a defined height. Without a defined height, the content overlay will be overlapping awkwardly with other elements after the container. For this demo, let's define the container's height with a viewport height class.

```html
<div class="overlay viewport-half-height">
  <div class="content-overlay">
    Content goes here.
  </div>
</div>
```

But this still isn't a realistic use-case. If we're overlaying content over a container (as opposed to just placing the content _in_ the container) it's probably for one of two reasons: 1) to vertically center content over a container with a defined height that's taller than the content, or 2) to position text over an image, probably with a color overlay between the background image and the content for legibility.

Let's start with the first use-case.

## Vertically centering content

Starting with the markup above, we'll add the positioning modifier class `.middle` to position the overlay content.

Let's take a look. We're adding a background color to the container to better illustrate the positioning, and to center-align the text we're adding the `.align-center` modifier.

<div class="demo">
  <div class="overlay viewport-half-height brand-offwhite-bg">
    <div class="content-overlay middle align-center">
      Content goes here.
    </div>
  </div>
</div>

```html
<div class="overlay viewport-half-height brand-offwhite-bg">
  <div class="content-overlay middle align-center">
    <h1>Overlaid heading</h1>
  </div>
</div>
```

### Content taller than container

In a responsive environment, it's likely that at a certain device or viewport size, the overlay content will end up taller than the container. This is common on mobile devices when using a viewport height class for the container and a few lines of content (e.g. a heading, paragraph, and button). Weavr's Javascript automatically checks for this and ensures that the container expands enough to fit the overlay content. It does this by setting the `min-height` property of the container to the height of the overlay content (including padding and margins).

### Padding on overlay content

You'll probably want some padding around the overlay content. With larger viewports, you likely won't notice a need for any padding, but once the viewport gets smaller, the content will start butting up against the edge of the container, which doesn't look good.

To accomplish this, just add the desired [padding class]({{ site.baseurl }}/docs/layout/margins-and-padding) to the content overlay `<div>`. Adding padding to the container won't have any effect here, as the content overlay is positioned relative to the border-box of the container, not the content-box.

## Content over a background image

The second use case for content overlays is to position content over a background image, often with a background color overlay between the image and content.

Let's take the demo from above and add a background image and background color overlay. We just need to add the `.bg-image` class and a background-color class, like we used on the [image backgrounds]({{ site.baseurl }}/docs/layout/image-backgrounds) page. We'll also add a padding class to the content overlay to ensure the content looks good on smaller screens.

<div class="demo">
  <div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
    <div class="content-overlay middle align-center padding-2x">
      Content goes here.
    </div>
  </div>
</div>

```html
<div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
  <div class="content-overlay middle align-center padding-2x">
    Content goes here.
  </div>
</div>
```

### Positioning content

The above demo vertically centers the content in its container. You may want to position the content differently in certain cases. To do that, use one of the following positioning modifier classes: `.top`, `.bottom`, `.middle`, `.left`, or `.right`.

For example, to position the content at the bottom of the container:

<div class="demo">
  <div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
    <div class="content-overlay bottom align-center padding-2x">
      Content goes here.
    </div>
  </div>
</div>

```html
<div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
  <div class="content-overlay bottom align-center padding-2x">
    Content goes here.
  </div>
</div>
```

And if we want to position the content in the bottom right of the container:

<div class="demo">
  <div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
    <div class="content-overlay bottom right align-center padding-2x">
      Content goes here.
    </div>
  </div>
</div>

```html
<div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
  <div class="content-overlay bottom right align-center padding-2x">
    Content goes here.
  </div>
</div>
```

<div class="alert">
  <p>
    <strong>NOTE:</strong> The <code>.left</code> and <code>.right</code> classes set the width property to <code>auto</code>, while without those classes the <code>&lt;div&gt;</code> retains its default width value of <code>100%</code>. This is important to know if you're placing a background color on the content overlay <code>&lt;div&gt;</code>.
  </p>
</div>

## A few more examples

Here are a few examples of ways you might combine background images, background color overlays, and content overlays:

<div class="demo">
  <div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
    <div class="content-overlay padding-2x middle align-center">
      <div class="contained-6 centered">
        <h1>Here's a heading</h1>
        <p>
          And here's a paragraph of text below it. Notice that this paragraph has several sentences in it. Three sentences, in fact. Actually, that last one wasn't a complete sentence. And now there are 5 sentences.
        <p>
      </div>
    </div>
  </div>
</div>

```html
<div class="viewport-half-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
  <div class="content-overlay padding-2x middle align-center">
    <div class="contained-6 centered">
      <h1>Here's a heading</h1>
      <p>
        And here's a paragraph of text below it. Notice that this paragraph has several sentences in it. Three sentences, in fact. Actually, that last one wasn't a complete sentence. And now there are 5 sentences.
      <p>
    </div>
  </div>
</div>
```

<div class="demo">
  <div class="viewport-half-height bg-image overlay brand-darkgray-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
    <div class="content-overlay padding-2x bottom align-center">
      <h1 class="margin-bottom-1x">Here's a heading</h1>
      <div class="inline-buttons">
        <button type="button" class="btn brand-pink-bg">Button 1</button>
        <button type="button" class="btn brand-purple-bg">Button 2</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="viewport-half-height bg-image overlay brand-darkgray-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
  <div class="content-overlay padding-2x bottom align-center">
    <h1 class="margin-bottom-1x">Here's a heading</h1>
    <div class="inline-buttons">
      <button type="button" class="btn brand-pink-bg">Button 1</button>
      <button type="button" class="btn brand-purple-bg">Button 2</button>
    </div>
  </div>
</div>
```

<div class="demo">
  <div class="viewport-half-height bg-image overlay" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
    <div class="content-overlay padding-2x bottom right brand-purple-bg">
      <h1>Here's a heading <span class="subheading">and subheading</span></h1>
    </div>
  </div>
</div>

```html
<div class="viewport-half-height bg-image overlay" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')">
  <div class="content-overlay padding-2x bottom right brand-purple-bg">
    <h1>Here's a heading <span class="subheading">and subheading</span></h1>
  </div>
</div>
```
