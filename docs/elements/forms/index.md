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

~~~html
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
~~~

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

~~~html
<label for="select-box">Select box</label>
<div class="select">
  <select name="select" id="select-box">
    <option value="">Choose an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
~~~

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

~~~html
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
~~~

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

~~~html
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
~~~

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

~~~html
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
~~~

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

~~~html
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
~~~

## Icon inputs

You also display icons in an input to provide a more immediate visual indicator of what the field is asking for. Wrap the input in a `div` with the class `.input-icon`, and add an `i` tag after the input with one of Weavr's [icon classes]({{ site.baseurl }}/docs/elements/icons). If you want a `label` for this input, be sure to place it outside the `.input-icon` element.

<div class="demo">
  <div class="contained-3 centered">
    <label for="icon-input-1">Email</label>
    <div class="input-icon">
      <input type="email" id="icon-input-1" placeholder="e.g. joe@example.com">
      <i class="icon-mail"></i>
    </div>
  </div>
</div>

~~~html
<label for="icon-input-1">Email</label>
<div class="input-icon">
  <input type="email" id="icon-input-1" placeholder="e.g. joe@example.com">
  <i class="icon-mail"></i>
</div>
~~~

## Prefixes and Postfixes

You can add an input "prefix" or "postfix" by wrapping the input in a `div` with the class `input-group` and adding a `div` with the class `.prefix` before the input or the class `.postfix` after the input.

<div class="demo">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <label for="input-group-1">Input group 1</label>
      <div class="input-group">
        <div class="prefix">prefix</div>
        <input type="text" name="name" id="input-group-1" placeholder="Text input">
      </div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <label for="input-group-2">Input group 2</label>
      <div class="input-group">
        <input type="text" name="name" id="input-group-2" placeholder="Text input">
        <div class="postfix">postfix</div>
      </div>
    </div>
  </div>
</div>

~~~html
<label for="input-group-1">Input group 1</label>
<div class="input-group">
  <div class="prefix">prefix</div>
  <input type="text" name="name" id="input-group-1" placeholder="Text input">
</div>

<label for="input-group-2">Input group 2</label>
<div class="input-group">
  <input type="text" name="name" id="input-group-2" placeholder="Text input">
  <div class="postfix">postfix</div>
</div>
~~~

<div class="alert">
  <p>
    <strong>NOTE:</strong> Due to the fragile nature of the CSS technique used in these elements, the text inside the prefix or postfix can't contain any whitespaces. Use <code>&amp;nbsp;</code> in place of any spaces.
  </p>
</div>

## Alerts

Create alert boxes with `.alert`. Add `.error`, `.warning`, or `.success` to change the type.

<div class="demo">
  <div class="alert">
    This is a general alert.
  </div>
  <div class="alert error">
    This is an error alert.
  </div>
  <div class="alert warning">
    This is a warning alert.
  </div>
  <div class="alert success">
    This is a success alert.
  </div>
</div>

~~~html
<div class="alert">
  This is a general alert.
</div>
<div class="alert error">
  This is an error alert.
</div>
<div class="alert warning">
  This is a warning alert.
</div>
<div class="alert success">
  This is a success alert.
</div>
~~~

You can put paragraphs, lists, etc. inside the alert:

<div class="demo">
  <div class="alert error">
    <p>Here's a paragraph inside an alert, followed by:</p>
    <ul>
      <li>an</li>
      <li>unordered</li>
      <li>list</li>
    </ul>
  </div>
</div>

~~~html
<div class="alert error">
  <p>Here's a paragraph inside an alert, followed by:</p>
  <ul>
    <li>an</li>
    <li>unordered</li>
    <li>list</li>
  </ul>
</div>
~~~

## Errors

Weavr comes with classes for displaying errors on forms. You've already seen the error alerts demonstrated above.

Use the class `.error` on inputs to indicate that the field has an error. For select boxes, add the `.error` class to the `.select` wrapper, not the actual `select` tag. You can also add the `.error` class to the label.

To display error messages below an input, add a `div` with the class `.error-message` immediately after the input (or in the case of select boxes, after the `.select` wrapper).

<div class="demo">
  <div class="row">
    <div class="col col-6 t-col-6 m-col-12">
      <label for="error-input-1" class="error">Input with error</label> 
      <input type="text" id="error-input-1" class="error" placeholder="Placeholder text" />
      <div class="error-message">This is the error message</div>
    </div>
    <div class="col col-6 t-col-6 m-col-12">
      <label for="error-select-box" class="error">Select box with error</label> 
      <div class="select error">
        <select name="select" id="error-select-box">
          <option value="">Choose an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div class="error-message">This is the error message</div>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 t-col-12 m-col-12">
      <label class="error">Radio input errors</label>
      <input type="radio" name="radio-error" id="radio-error-1" value="">
      <label for="radio-error-1" class="radio inline error">Option 1</label>
      <input type="radio" name="radio-error" id="radio-error-2" value="">
      <label for="radio-error-2" class="radio inline error">Option 2</label>
      <input type="radio" name="radio-error" id="radio-error-3" value="">
      <label for="radio-error-3" class="radio inline error">Option 3</label>
      <div class="error-message">
        This field has an error
      </div>
    </div>
  </div>
</div>
