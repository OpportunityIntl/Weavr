Weavr
=========

Weavr is a frontend framework for Opportunity International. Documentation below.

##CSS

###General

Every html element has `box-sizing: border-box`.

`.clearfix` can be applied to divs to clear the floats of their child elements. Some classes, such as `.row` are self-clearing and don't need the `.clearfix` class applied.

Alternatively, you can add an empty div with the class `.clear` after floated elements to clear the float.

###Typography
`.brand-font-primary`
Set font to Proxima Nova Regular. Probably unecessary, as the `body` should already have Proxima Nova set as the font-family.

`.brand-font-secondary`
Set font to Times New Roman, italic.

`.align-left`, `.align-center`, `.align-right`
Align content. Setting left-align unnecessary in most situations, as text is left-aligned by default.

`p.large`
Use larger paragraph font-size.

`p.small`
Use smaller paragraph font-size.

###Grid System

OI Framework uses a responsive 12-column grid system with fixed gutters (though gutters can be removed with `.no-gutter`).

`.row`
Establishes a new row. Floats are automatically cleared, so no need for any clearfix markup. Gutter width is 20px for forms and 40px elsewhere.

`.row.no-gutter`
Does what you think.

`.col`
Establishes a column. Does not set width of column. For that we add one of the following classes:

`.col-1`, `.col-2`, `.col-3`, `.col-4`, `.col-5`, `.col-7`, `.col-8`, `.col-9`, `.col-10`, `.col-11`, `.col-12`, where the number indicates the number of columns the element should span.

You can specify different column widths for tablet and mobile devices, as well:

`.t-col-1`, `.t-col-2`, `.t-col-3`, `.t-col-4`, `.t-col-5`, `.t-col-7`, `.t-col-8`, `.t-col-9`, `.t-col-10`, `.t-col-11`, `.t-col-12` for tablet, `.m-col-1`, `.m-col-2`, `.m-col-3`, `.m-col-4`, `.m-col-5`, `.m-col-7`, `.m-col-8`, `m-col-9`, `.m-col-10`, `.m-col-11`, `.m-col-12` for mobile devices.

###Radio buttons and checkboxes

Radio button and checkboxes are styled using the `:checked` and `:before` psuedo-classes. The actual native radio button or checkbox element is hidden (via absolute positioning off the screen, not via the display property) and the element is recreated using the `:before` psuedo-class on the label element. The following classes can be used to change the size and display of radio buttons and checkboxes:

`label.inline`
Display element using inline-block.

`label.radio`, `label.checkbox`
Label will be styled for a radio element or checkbox, respectively.

`label.small`
Label and radio button / checkbox will be small.

`label.v-center`
Label and radio button / checkbox will be vertically centered in wrapping container.

###Select boxes

Select boxes are styled by wrapping them in a `div` with the class of `.select`. To make the select box text match the placeholder text styling of the rest of the input elements, add the class `.select-placeholder` to the `select` element. The OI Framework javascript will handle adding and removing the placeholder style for you.

###Colors

The OI brand web colors are as follows:

- Pink: `#ed027e;`
- Purple: `#611171;`
- Orange: `#f15b22;`
- Teal: `#00abab;`
- Green: `#7bc557;`
- Dark gray: `#222222`
- Gray: `#8f8e8c;`
- Offwhite: `#efeeea`

These colors can be applied to the color or background color of any element with the following classes:

`.brand-pink`, `.brand-purple`, `.brand-orange`, `.brand-teal`, `.brand-green`, `.brand-gray`, `.brand-offwhite`, `.brand-white` set the color.

`.brand-pink-bg`, `.brand-purple-bg`, `.brand-orange-bg`, `.brand-teal-bg`, `.brand-green-bg`, `.brand-darkgray-bg`. `.brand-gray-bg`, `.brand-offwhite-bg`, `.brand-white-bg` set the background color to the corresponding color. These classes also set the text-color to white (with the exception of `.brand-offwhite-bg` and `.brand-white-bg`).

A lighter teal and lighter purple background are available via `.brand-light-teal-bg` and `.brand-light-purple-bg`, and `.transparent-bg` is also available to set a transparent background on any element.

###Lists

`.no-list-style`
Set list-style property to `none`

`ul.inline`
Display list items as inline-block, with no list style and 10px padding.

###Icon fonts

Weavr uses a custom icon fontset largely comprised of select icons from the [Entypo library](http://www.entypo.com/) plus some custom icons. You can [view the full set here](http://opportunityintl.github.io/Weavr/icons).

###Buttons

`.btn`
Style an element like a standard button. A background-color class (e.g. `.brand-pink-bg`) should also be applied to the element.

`.btn.ghost`
Style an element like a ghost button. A color class (e.g. `.brand-pink`) should also be applied to the element.

`.btn.large`
Make a large button.

`.btn.inline`
Display button inline block. Buttons display as `block` by default.

##Javascript

###Utility functions

`OI.utils.tooltip(element, position, message)`
Generate a tooltip, which will appear on mouseover. The _element_ argument should be a jQuery object. Position can be 'top' or 'bottom.' Tooltip is colored purple by default.

`OI.utils.popover(element, position, message)`
Similar to a tooltip, but not tied to the mouseover event. Popover appears when the function is called, and fades out after 4 seconds. Popover is colored orange by default.

`OI.utils.limitToRegex(input, regex)`
Limit the characters allowed in an input. The _input_ argument should be a jQuery object. The _regex_ argument should be a regex expression (e.g. `/[0-9]/`). This function uses a keypress event handler to test the key against the regex, returning true or false. Note that Android browsers do not provide a keypress event, so this function does not work for Android users.

`OI.utils.validateEmail(email)`
Tests an email address against a regex pattern to determine if it is in a valid format. The email address must contain 4 parts: the username, an @ symbol, a domain, and a domain extension (e.g. username@domain.extension). The extension must contain two or more letters. Note that the _email_ argument should be the actual email address as a string, not an input element.
