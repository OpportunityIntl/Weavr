---
title: 'Lists'
layout: documentation
---

Ordered and unordered lists are styled like this by default:

<div class="demo">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
        <li>
          Unordered list item 3
          <ul>
            <li>Nested list item 1</li>
            <li>Nested list item 2</li>
            <li>
              Nested list item 3
              <ul>
                <li>Very nested list item 1</li>
                <li>Very nested list item 2</li>
                <li>Very nested list item 3</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
        <li>
          Ordered list item 3
          <ol>
            <li>Nested list item 1</li>
            <li>Nested list item 2</li>
            <li>
              Nested list item 3
              <ol>
                <li>Very nested list item 1</li>
                <li>Very nested list item 2</li>
                <li>Very nested list item 3</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</div>

## No list style

Lists can be displayed without bullets or numbers with the `.no-list-style` modifier class.

<div class="demo">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <ul class="no-list-style">
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
        <li>Unordered list item 3</li>
      </ul>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <ol class="no-list-style">
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
        <li>Ordered list item 3</li>
      </ol>
    </div>
  </div>
</div>

```html
<ul class="no-list-style">
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
  <li>Unordered list item 3</li>
</ul>

<ol class="no-list-style">
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
</ol>
```

## Inline lists

Add the modifier class `.inline` to display list items inline instead of stacked. List items are displayed with a 20px gutter between them. Note that it is unnecessary to add the `.no-list-style` class here.

<div class="demo">
  <ul class="inline">
    <li>Inline list item 1</li>
    <li>Inline list item 2</li>
    <li>Inline list item 3</li>
  </ul>
</div>

```html
<ul class="inline">
  <li>Inline list item 1</li>
  <li>Inline list item 2</li>
  <li>Inline list item 3</li>
</ul>
```
