---
title: 'Display Classes'
layout: documentation
---

Weavr comes with display classes to enable you to quickly hide elements from various breakpoints. Simply add the breakpoint ('mobile', 'tablet', 'netbook', or 'desktop') the class `.no-[breakpoint]`.

For example, to hide an element from just mobile devices, you would use:

~~~html
<div class="no-mobile">...</div>
~~~

Or to only display an element on large screens:

~~~html
<div class="no-mobile no-tablet no-netbook">...</div>
~~~

<div class="demo align-center">
  <div class="no-mobile no-tablet no-netbook">You are at the "desktop" breakpoint.</div>
  <div class="no-mobile no-tablet no-desktop">You are at the "netbook" breakpoint.</div>
  <div class="no-mobile no-netbook no-desktop">You are at the "tablet" breakpoint.</div>
  <div class="no-tablet no-netbook no-desktop">You are at the "mobile" breakpoint.</div>
</div>
