---
title: 'Paragraphs and Links'
layout: documentation
---

Here's what default paragraph styles look like:

<div class="demo">
<p>
  Opportunity International is working to end global poverty by creating/sustaining 20 million jobs by 2020. We believe that enabling individuals to create dignified and sustainable work is the foundation for transforming their lives, their children’s futures and their communities.
</p>
<p>
  Opportunity International was founded in 1971 by two visionary leaders who were inspired to take action by their experiences with people living in extreme poverty.
</p>
</div>

## Large and small modifiers

Paragraphs can be modified with the `.large` and `.small` modifiers:

<div class="demo">
  <p class="large">
    This is a large paragraph. Stumptown Thundercats before they sold out Tumblr, asymmetrical 3 wolf moon literally butcher farm-to-table wolf cronut. Roof party XOXO banjo letterpress, kale chips retro authentic meggings readymade raw denim whatever.
  </p>
  <p>
    This is a normal paragraph. Neutra tofu pour-over put a bird on it cold-pressed. Dreamcatcher keffiyeh Neutra 90's, raw denim pour-over 8-bit cred shabby chic direct trade pork belly PBR&B.
  </p>
  <p class="small">
    This is a small paragraph. Wolf vegan crucifix, fashion axe 3 wolf moon leggings Banksy hella authentic chia Echo Park kogi heirloom. Raw denim yr migas locavore pickled, retro Marfa cray disrupt 8-bit 90's four dollar toast. Truffaut chillwave ugh shabby chic migas, art party Marfa.
  </p>
</div>

```html
<p class="large">This is a large paragraph...</p>
<p>This is a normal paragraph...</p>
<p class="small">This is a small paragraph...</p>
```

## Alignment

You can change the text alignment of a paragraph (or any other element) with Weavr's alignment utility classes, `.align-left`, `.align-center`, `.align-right`. Elements are left-aligned by default, so the `.align-left` is only necessary when you need to override the alignment inherited from a parent element.

<div class="demo">
  <p class="align-left">This paragraph is left aligned</p>
  <p class="align-center">This paragraph is center aligned</p>
  <p class="align-right">This paragraph is right aligned</p>
</div>

```html
<p class="align-left">This paragraph is left aligned</p>
<p class="align-center">This paragraph is center aligned</p>
<p class="align-right">This paragraph is right aligned</p>
```
