---
title: 'Images and Videos'
layout: documentation
---

Images and videos embedded via `iframe`s will display with fixed dimensions by default, but Weavr has classes to display them with fluid widths.

## Images

Add the modifier class `.block` to an image tag to turn it into a fluid element. It will expand to fill the width of its container.

<div class="demo">
  <img class="block" src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
</div>

~~~html
<img class="block" src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
~~~

Alternatively, you can wrap an image in a `<figure>` tag and it will become a fluid element.

<div class="demo">
  <figure>
    <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
  </figure>
</div>

~~~html
<figure>
  <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
</figure>
~~~

### Image caption

To add a caption below the image, wrap the image in a `<figure>` tag and add a `<figcaption>` element after the image tag.

<div class="demo">
  <figure>
    <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
    <figcaption>Here's a caption for this photo. Depending on your screen size, it might wrap onto a second line.</figcaption>
  </figure>
</div>

~~~html
<figure>
  <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
  <figcaption>Here's a caption for this photo...</figcaption>
</figure>
~~~

## Responsive Videos

Embedded videos, such as Vimeo and YouTube, use `iframe`s, which display at fixed dimensions by default. To give an embedded video (in an `iframe`) a fluid width while maintaining the same aspect ration, wrap the `iframe` in a `div` with a class of `.flex-video`. It will enforce a 16:9 ratio (the standard for HD videos) for the video. Note that the `height` and `width` attributes are ignored here.

<div class="demo">
  <div class="flex-video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZIdqa1lsfzU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

~~~html
<div class="flex-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZIdqa1lsfzU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>
~~~
