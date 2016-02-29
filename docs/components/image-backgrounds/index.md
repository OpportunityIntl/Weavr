---
title: 'Image Backgrounds'
layout: documentation
---

To add a background image to an element, add the class `.bg-image` along with the `background-image` property in an inline style attribute. This sets the `background-size` property to `cover`, so the image will scale to fill the container while maintaining the image's original aspect ratio. If the ratio of the image is different than the ratio of the container, the sides will be clipped.

<div class="demo">
  <div class="viewport-half-height bg-image" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div> 
</div>

```html
<div class="viewport-half-height bg-image" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div> 
```

## Background position

By default, the background image is centered vertically and horizontally in the container. You can easily change the vertical alignment by adding modifier classes `.top` or `.bottom`, and change the horizontal alignment with  `.left` or `.right`.

For example, to position the background image to be vertically aligned to the top of the container but centered horizontally:

<div class="demo">
  <div class="viewport-half-height bg-image top" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div> 
</div>

```html
<div class="viewport-half-height bg-image top" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div> 
```

To align the background image to the bottom right of the container:

<div class="demo">
  <div class="viewport-half-height bg-image bottom right" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div> 
</div>

```html
<div class="viewport-half-height bg-image bottom right" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div> 
```

<div class="alert">
  <p>
    <strong>TIP:</strong> Resize your browser window to get a better sense of the background image position in action.
  </p>
</div>

## Background color overlays

You can overlay a background color over the background image by adding the `.overlay` class along with a [background color class]({{ site.baseurl }}/docs/components/colors). Check out the [Weavr Kitchen Sink]({{ site.baseurl }}/kitchensink/#background-images-and-overlays) for a demonstration of all the possible color overlays.

<div class="demo">
  <div class="row large-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="viewport-one-third-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="viewport-one-third-height bg-image overlay brand-teal-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="viewport-one-third-height bg-image overlay brand-white-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
    </div>
  </div>
</div>

```html
<div class="viewport-one-third-height bg-image overlay brand-dark-purple-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
<div class="viewport-one-third-height bg-image overlay brand-teal-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
<div class="viewport-one-third-height bg-image overlay brand-white-bg" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
```

## Gradient overlays

Turn the background color overlay into a gradient by adding the `.gradient` modifier class. The bottom third will be gradated from 0% opacity to the normal overlay opacity. This is only recommended for neutral background colors, as colored gradient overlays look pretty funky.

<div class="demo">
  <div class="row large-gutter">
    <div class="col col-4 t-col-4 m-col-12">
      <div class="viewport-one-third-height bg-image overlay brand-white-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">  
      <div class="viewport-one-third-height bg-image overlay brand-offwhite-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
    </div>
    <div class="col col-4 t-col-4 m-col-12">
      <div class="viewport-one-third-height bg-image overlay brand-darkgray-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
    </div>
  </div>
</div>

```html
  <div class="viewport-one-third-height bg-image overlay brand-white-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
  <div class="viewport-one-third-height bg-image overlay brand-offwhite-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
  <div class="viewport-one-third-height bg-image overlay brand-darkgray-bg gradient" style="background-image: url('{{ site.baseurl }}/images/sample-bg-image.jpg')"></div>
```

---

{% include prev.html url='docs/components/images-and-videos' title='Images and Videos' %}
{% include next.html url='docs/components/background-overlays' title='Background overlays' %}
