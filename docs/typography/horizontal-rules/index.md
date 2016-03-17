---
title: 'Horizontal Rules'
layout: documentation
---

Horizontal rules are useful for breaking up content or separating sections of text. Default `<hr>`s look like this (copy added for reference):

<div class="demo">
  <p>
    Opportunity International was founded in 1971 by two visionary leaders who were inspired to take action by their experiences with people living in extreme poverty.
  </p>
  <p>
    Al Whittaker, former president of Bristol Myers International Corporation in the U.S., and Australian entrepreneur David Bussau sought a solution that would help people transform their lives and sustain their success.
  </p>
  <p>
    Opportunity International was one of the first nonprofit organizations to recognize the benefits of microfinance – financial services for low-income people – in developing countries.
  </p>
  <hr>
  <p class="small">
    Opportunity International provides access to savings, small business loans, insurance and training to over 5 million people working their way out of poverty in the developing world. Clients in more than 20 countries use these financial services to start or expand a business, provide for their families, create jobs for their neighbors and build a safety net for the future. Opportunity International is a 501(c)(3) non-profit and serves all people regardless of race, religion, ethnicity or gender.
  </p>
</div>

Against an offwhite background (`.brand-offwhite-bg`), horizontal rules are a bit darker:

<div class="demo brand-offwhite-bg">
  <hr>
</div>

You can add the `.large` modifier class to make the horizontal rule thicker:

<div class="demo">
  <hr class="large">
</div>

~~~html
<hr class="large">
~~~

Add the `.decorative` modifier class to use a more "decorative" version of a horizontal rule. We put "decorative" in quotes because Opportunity's brand doesn't really include decorative elements, but we needed a term to describe this less practical but more interesting treatment of horizontal rules.

<div class="demo">
  <p>
    Opportunity International was founded in 1971 by two visionary leaders who were inspired to take action by their experiences with people living in extreme poverty.
  </p>
  <hr class="large decorative">
  <p>
    Al Whittaker, former president of Bristol Myers International Corporation in the U.S., and Australian entrepreneur David Bussau sought a solution that would help people transform their lives and sustain their success.
  </p>
</div>

~~~html
<hr class="large decorative">
~~~
