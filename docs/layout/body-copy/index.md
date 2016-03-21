---
title: 'Body Copy'
layout: documentation
---

With Weavr's body copy layouts, you can constrain the width of body copy to a comfortable line length and have certain elements extend beyond the text column to the edges of the containing element. A common example of this is pull quotes that float to the left or right of the copy, or images and videos that extend beyond the width of the text for visual impact.

Body copy layouts can be created within 6-, 9-, or 12-column containers. Start by adding the `.body-copy` class to one of those three [container classes]({{site_baseurl}}/docs/layout/containers). Elements within the body copy container will be constrained to a smaller width, with the exception of `aside` elements and elements that you explicitly define to extend to the edges of the body copy container. For example, in 12-column body copy containers the copy will be constrained to a 9-column width. In 9-column body copy containers, copy is constrained to 6 columns. In 6-column body copy containers, copy is constrained to 4 columns. Below is a demo of a 6-column body copy layout. Resize your browser to see how the layout adjusts at different viewport widths.

<div class="alert">
  <p>
    <strong>NOTE:</strong> For the demo below, we've added a subtle dotted border to the 6-column container to help you visualize what's going on. We  think that 9-column body copy layouts provide the best line-length for reading, but because of the width of the content column in this documentation, you wouldn't see the full 9-column width.
  </p>
</div>

<div class="demo">
  <div class="contained-6 centered body-copy" style="border: dotted 1px #efeeea;">
    <h2>Example Body Copy Layout</h2>
    <p>
      Crucifix migas tattooed lo-fi gentrify whatever pitchfork. Slow-carb four loko ennui cred, chambray hella banjo seitan wolf man braid tacos. Butcher whatever letterpress meggings. Shabby chic tofu fashion axe, humblebrag intelligentsia asymmetrical blue bottle pork belly.
    </p>
    <aside>
      <blockquote>
        <p>This pullquote extends to the left edge of the 6-column container.</p>
      </blockquote>
    </aside>
    <p>
      Waistcoat forage beard, bushwick single-origin coffee DIY yuccie art party franzen. Fanny pack listicle brooklyn humblebrag lomo mumblecore. Quinoa meh scenester chartreuse etsy. Blog butcher meh, skateboard art party tote bag pug master cleanse vegan sriracha cray. Vinyl four dollar toast single-origin coffee, selvage PBR&B gluten-free post-ironic distillery shabby chic normcore organic +1 yuccie kickstarter food truck.
    </p>
    <figure class="full-width">
      <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
      <figcaption>Caption for this full-width image</figcaption>
    </figure>
    <p>
      Ugh you probably haven't heard of them ethical cred chia tattooed bespoke, tote bag leggings locavore forage aesthetic. Street art migas lomo, keffiyeh stumptown yuccie biodiesel aesthetic flexitarian pop-up kombucha church-key bespoke. Blog knausgaard mumblecore tofu. Twee chicharrones hoodie forage, lo-fi cronut pug. Post-ironic chicharrones next level, polaroid VHS pickled fashion axe selfies cronut mustache craft beer tofu gochujang.
    </p>
    <aside class="right">
      <figure>
        <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
        <figcaption>Asides can have images and captions too</figcaption>
      </figure>
    </aside>
    <p>
      Kale chips neutra squid flexitarian locavore iPhone irony shoreditch artisan aesthetic, shabby chic authentic blog chicharrones meditation. Austin lo-fi man bun, post-ironic blue bottle chicharrones jean shorts raw denim. Pitchfork austin freegan try-hard, 8-bit authentic ugh. Craft beer crucifix you probably haven't heard of them cliche wayfarers fixie. Paleo +1 kogi celiac, try-hard listicle heirloom poutine intelligentsia semiotics freegan vegan roof party. Artisan ugh fingerstache, PBR&B keffiyeh portland schlitz knausgaard drinking vinegar chillwave venmo vice 90's. Squid thundercats deep v green juice, yr wayfarers yuccie.
    </p>
  </div>
</div>

~~~html
<div class="contained-6 centered body-copy">
  <h2>Example Body Copy Layout</h2>
  <p>
    Crucifix migas tattooed lo-fi gentrify whatever pitchfork. Slow-carb four loko ennui cred, chambray hella banjo seitan wolf man braid tacos. Butcher whatever letterpress meggings. Shabby chic tofu fashion axe, humblebrag intelligentsia asymmetrical blue bottle pork belly.
  </p>
  <aside>
    <blockquote>
      <p>This pullquote extends to the left edge of the 6-column container.</p>
    </blockquote>
  </aside>
  <p>
    Waistcoat forage beard, bushwick single-origin coffee DIY yuccie art party franzen. Fanny pack listicle brooklyn humblebrag lomo mumblecore. Quinoa meh scenester chartreuse etsy. Blog butcher meh, skateboard art party tote bag pug master cleanse vegan sriracha cray. Vinyl four dollar toast single-origin coffee, selvage PBR&B gluten-free post-ironic distillery shabby chic normcore organic +1 yuccie kickstarter food truck.
  </p>
  <figure class="full-width">
    <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
    <figcaption>Caption for this full-width image</figcaption>
  </figure>
  <p>
    Ugh you probably haven't heard of them ethical cred chia tattooed bespoke, tote bag leggings locavore forage aesthetic. Street art migas lomo, keffiyeh stumptown yuccie biodiesel aesthetic flexitarian pop-up kombucha church-key bespoke. Blog knausgaard mumblecore tofu. Twee chicharrones hoodie forage, lo-fi cronut pug. Post-ironic chicharrones next level, polaroid VHS pickled fashion axe selfies cronut mustache craft beer tofu gochujang.
  </p>
  <aside class="right">
    <figure>
      <img src="{{ site.baseurl }}/images/sample-bg-image.jpg" />
      <figcaption>Asides can have images and captions too</figcaption>
    </figure>
  </aside>
  <p>
    Kale chips neutra squid flexitarian locavore iPhone irony shoreditch artisan aesthetic, shabby chic authentic blog chicharrones meditation. Austin lo-fi man bun, post-ironic blue bottle chicharrones jean shorts raw denim. Pitchfork austin freegan try-hard, 8-bit authentic ugh. Craft beer crucifix you probably haven't heard of them cliche wayfarers fixie. Paleo +1 kogi celiac, try-hard listicle heirloom poutine intelligentsia semiotics freegan vegan roof party. Artisan ugh fingerstache, PBR&B keffiyeh portland schlitz knausgaard drinking vinegar chillwave venmo vice 90's. Squid thundercats deep v green juice, yr wayfarers yuccie.
  </p>
</div>
~~~

## Asides

You've seen asides demonstrated above. Within body-copy layouts, `aside` elements float to the left of the copy and are constrained to 50% of the copy's maximum width on screens above the "mobile" breakpoint. On mobile devices, asides display at 100% width. Asides display with a thick top border by default.

### Pullquotes

A common use case for asides is to display a pullquote. For pullquotes, simply put a `blockquote` element inside an `aside`. Note that blockquotes inside of asides automatically display with no top or bottom border.

~~~html
<aside>
  <blockquote>
    ...
  </blockquote>
</aside>
~~~

### No top border

Add the modifier class `.no-border` to remove the top border.

~~~html
<aside class="no-border">
  ...
</aside>
~~~

### Float to the right

Asides can also float to the right of the copy by adding the modifier class `.right` to the aside.

~~~html
<aside class="right">
  ...
</aside>
~~~

## Full-width elements

With the exception of asides, all elements in a body-copy layout will be constrained to the narrower width. To make an element extend to the left and right edges of the container, add the `.full-width` modifier class.
