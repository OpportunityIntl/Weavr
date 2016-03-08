---
title: 'Forms'
layout: documentation
---

## Labels, text inputs, textareas, and placeholders

Weavr contains default styles for labels, text inputs (as well as email, phone, number, and password inputs, which are all displayed the same), textareas, and placeholder text. Note that labels are displayed as block elements.

<div class="demo">
  <form>
    <div class="row">
      <div class="col col-4 t-col-6 m-col-12">
        <label for="text-input">Text input</label>
        <input type="text" id="text-input" name="text" placeholder="Text input">
      </div>
      <div class="col col-4 t-col-6 m-col-12">
        <label for="phone-input">Phone input</label>
        <input type="phone" id="phone-input" name="phone" placeholder="Phone input">
      </div>
      <div class="col col-4 t-col-12 m-col-12">
        <label for="password-input">Password input</label>
        <input type="password" id="password-input" name="password" placeholder="Password input">
      </div>
    </div>
    <div class="row">
      <div class="col col-4 t-col-4 m-col-6">
        <label for="email-input">Email input</label>
        <input type="email" id="email-input" name="email" placeholder="Email input">
      </div>
      <div class="col col-4 t-col-4 m-col-6">
        <label for="number-input">Number input</label>
        <input type="number" id="number-input" name="number" placeholder="Number input">
      </div>
    </div>
    <div class="row">
      <div class="col col-12 t-col-12 m-col-12">
        <label for="textarea">Textarea</label>
        <textarea id="textarea"></textarea>
      </div>
    </div>
  </form>
</div>

```html
<form>
  <div class="row">
    <div class="col col-4 t-col-6 m-col-12">
      <label for="text-input">Text input</label>
      <input type="text" id="text-input" name="text" placeholder="Text input">
    </div>
    <div class="col col-4 t-col-6 m-col-12">
      <label for="phone-input">Phone input</label>
      <input type="phone" id="phone-input" name="phone" placeholder="Phone input">
    </div>
    <div class="col col-4 t-col-12 m-col-12">
      <label for="password-input">Password input</label>
      <input type="password" id="password-input" name="password" placeholder="Password input">
    </div>
  </div>
  <div class="row">
    <div class="col col-4 t-col-4 m-col-6">
      <label for="email-input">Email input</label>
      <input type="email" id="email-input" name="email" placeholder="Email input">
    </div>
    <div class="col col-4 t-col-4 m-col-6">
      <label for="number-input">Number input</label>
      <input type="number" id="number-input" name="number" placeholder="Number input">
    </div>
  </div>
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <label for="textarea">Textarea</label>
      <textarea id="textarea"></textarea>
    </div>
  </div>
</form>
```

## Select boxes

Wrap select boxes in a `div` with the class `.select`. This allows us to style them consistently across browsers. Weavr's Javascript listens for changes on the `select` element to mimic the default placeholder styles on the select box.

<div class="demo">
  <div class="contained-3 centered">
    <label for="select-box">Select box</label>
    <div class="select">
      <select name="select" id="select-box">
        <option value="">Choose an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  </div>
</div>

```html
<label for="select-box">Select box</label>
<div class="select">
  <select name="select" id="select-box">
    <option value="">Choose an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

## Radio buttons and checkboxes

Weavr uses custom styles for radio buttons and checkboxes. It uses the fairly common technique of hiding the native element (by positioning it offscreen rather than using `display: none` for maximum cross-browser compatibility) and using `:before` pseudo-element on the `label`.

This requires that the input be placed immediately before the label. Add the class `.radio` for radio buttons and `.checkbox` for checkboxes, and be sure to use the correct `for` attribute. Note that radio buttons and checkboxes display as block elements by default.

<div class="demo">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <label>Radio buttons</label>
      
      <input type="radio" id="radio-group-1" name="radio-group" value="1">
      <label for="radio-group-1" class="radio">Radio button 1</label>

      <input type="radio" id="radio-group-2" name="radio-group" value="2">
      <label for="radio-group-2" class="radio">Radio button 2</label>

      <input type="radio" id="radio-group-3" name="radio-group" value="3">
      <label for="radio-group-3" class="radio">Radio button 3</label>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <label>Checkboxes</label>
      
      <input type="checkbox" id="checkbox-1" value="1">
      <label for="checkbox-1" class="checkbox">Checkbox 1</label>
      
      <input type="checkbox" id="checkbox-2" value="2">
      <label for="checkbox-2" class="checkbox">Checkbox 2</label>
      
      <input type="checkbox" id="checkbox-3" value="3">
      <label for="checkbox-3" class="checkbox">Checkbox 3</label>
    </div>
  </div>
</div>

```html
<label>Radio buttons</label>

<input type="radio" id="radio-group-1" name="radio-group" value="1">
<label for="radio-group-1" class="radio">Radio button 1</label>

<input type="radio" id="radio-group-2" name="radio-group" value="2">
<label for="radio-group-2" class="radio">Radio button 2</label>

<input type="radio" id="radio-group-3" name="radio-group" value="3">
<label for="radio-group-3" class="radio">Radio button 3</label>

<label>Checkboxes</label>

<input type="checkbox" id="checkbox-1" value="1">
<label for="checkbox-1" class="checkbox">Checkbox 1</label>

<input type="checkbox" id="checkbox-2" value="2">
<label for="checkbox-2" class="checkbox">Checkbox 2</label>

<input type="checkbox" id="checkbox-3" value="3">
<label for="checkbox-3" class="checkbox">Checkbox 3</label>
```

### Inline radio buttons and checkboxes

To display radio buttons and checkboxes as inline elements, just add the `.inline` modifier class to the label.

<div class="demo">
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <label>Inline radio buttons</label>
      
      <input type="radio" id="inline-radio-group-1" name="inline-radio-group" value="1">
      <label for="inline-radio-group-1" class="radio inline">Inline Radio 1</label>

      <input type="radio" id="inline-radio-group-2" name="inline-radio-group" value="2">
      <label for="inline-radio-group-2" class="radio inline">Inline Radio 2</label>

      <input type="radio" id="inline-radio-group-3" name="inline-radio-group" value="3">
      <label for="inline-radio-group-3" class="radio inline">Inline Radio 3</label>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <label>Inline checkboxes</label>
      
      <input type="checkbox" id="inline-checkbox-1" value="1">
      <label for="inline-checkbox-1" class="checkbox inline">Inline checkbox 1</label>
      
      <input type="checkbox" id="inline-checkbox-2" value="2">
      <label for="inline-checkbox-2" class="checkbox inline">Inline checkbox 2</label>
      
      <input type="checkbox" id="inline-checkbox-3" value="3">
      <label for="inline-checkbox-3" class="checkbox inline">Inline checkbox 3</label>
    </div>
  </div>
</div>

```html
<label>Inline radio buttons</label>

<input type="radio" id="inline-radio-group-1" name="inline-radio-group" value="1">
<label for="inline-radio-group-1" class="radio inline">Inline Radio 1</label>

<input type="radio" id="inline-radio-group-2" name="inline-radio-group" value="2">
<label for="inline-radio-group-2" class="radio inline">Inline Radio 2</label>

<input type="radio" id="inline-radio-group-3" name="inline-radio-group" value="3">
<label for="inline-radio-group-3" class="radio inline">Inline Radio 3</label>

<label>Inline checkboxes</label>

<input type="checkbox" id="inline-checkbox-1" value="1">
<label for="inline-checkbox-1" class="checkbox inline">Inline checkbox 1</label>

<input type="checkbox" id="inline-checkbox-2" value="2">
<label for="inline-checkbox-2" class="checkbox inline">Inline checkbox 2</label>

<input type="checkbox" id="inline-checkbox-3" value="3">
<label for="inline-checkbox-3" class="checkbox inline">Inline checkbox 3</label>
```

### Small radio buttons and checkboxes

To make the radio buttons and checkboxes smaller, add the `.small` modifier class.

<div class="demo">
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <label>Small radio buttons</label>
      
      <input type="radio" id="small-inline-radio-group-1" name="small-inline-radio-group small" value="1">
      <label for="small-inline-radio-group-1" class="radio inline small">Option 1</label>

      <input type="radio" id="small-inline-radio-group-2" name="small-inline-radio-group small" value="2">
      <label for="small-inline-radio-group-2" class="radio inline small">Option 2</label>

      <input type="radio" id="small-inline-radio-group-3" name="small-inline-radio-group small" value="3">
      <label for="small-inline-radio-group-3" class="radio inline small">Option 3</label>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <label>Small checkboxes</label>
      
      <input type="checkbox" id="small-inline-checkbox-1" value="1">
      <label for="small-inline-checkbox-1" class="checkbox inline small">Option 1</label>
      
      <input type="checkbox" id="small-inline-checkbox-2" value="2">
      <label for="small-inline-checkbox-2" class="checkbox inline small">Option 2</label>
      
      <input type="checkbox" id="small-inline-checkbox-3" value="3">
      <label for="small-inline-checkbox-3" class="checkbox inline small">Option 3</label>
    </div>
  </div>
</div>

```html
<label>Small radio buttons</label>

<input type="radio" id="small-inline-radio-group-1" name="small-inline-radio-group small" value="1">
<label for="small-inline-radio-group-1" class="radio inline small">Option 1</label>

<input type="radio" id="small-inline-radio-group-2" name="small-inline-radio-group small" value="2">
<label for="small-inline-radio-group-2" class="radio inline small">Option 2</label>

<input type="radio" id="small-inline-radio-group-3" name="small-inline-radio-group small" value="3">
<label for="small-inline-radio-group-3" class="radio inline small">Option 3</label>

<label>Small checkboxes</label>

<input type="checkbox" id="small-inline-checkbox-1" value="1">
<label for="small-inline-checkbox-1" class="checkbox inline small">Option 1</label>

<input type="checkbox" id="small-inline-checkbox-2" value="2">
<label for="small-inline-checkbox-2" class="checkbox inline small">Option 2</label>

<input type="checkbox" id="small-inline-checkbox-3" value="3">
<label for="small-inline-checkbox-3" class="checkbox inline small">Option 3</label>
```

### Radio inputs styled as buttons

Radio inputs can be styled to look like buttons. Just use the class `.btn` instead of `.radio` on the label tag.

<div class="demo">
  <div class="row">
    <div class="col col-3 t-col-6 m-col-6">
      <input type="radio" id="button-radio-1" name="button-radio" value="20">
      <label class="btn" for="button-radio-1">$20</label>
    </div>
    <div class="col col-3 t-col-6 m-col-6">
      <input type="radio" id="button-radio-2" name="button-radio" value="50">
      <label class="btn" for="button-radio-2">$50</label>
    </div>
    <div class="col col-3 t-col-6 m-col-6">
      <input type="radio" id="button-radio-3" name="button-radio" value="100">
      <label class="btn" for="button-radio-3">$100</label>
    </div>
    <div class="col col-3 t-col-6 m-col-6">
      <input type="radio" id="button-radio-4" name="button-radio" value="150">
      <label class="btn" for="button-radio-4">$150</label>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col col-3 t-col-6 m-col-6">
    <input type="radio" id="button-radio-1" name="button-radio" value="20">
    <label class="btn" for="button-radio-1">$20</label>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <input type="radio" id="button-radio-2" name="button-radio" value="50">
    <label class="btn" for="button-radio-2">$50</label>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <input type="radio" id="button-radio-3" name="button-radio" value="100">
    <label class="btn" for="button-radio-3">$100</label>
  </div>
  <div class="col col-3 t-col-6 m-col-6">
    <input type="radio" id="button-radio-4" name="button-radio" value="150">
    <label class="btn" for="button-radio-4">$150</label>
  </div>
</div>
```
