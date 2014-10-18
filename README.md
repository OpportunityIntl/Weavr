OI Framework
=========

Frontend framework for Opportunity International. Documentation below.

##General

_Insert documentation on random but useful classes that don't fit easily in other categories_

##Typography
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

##Grid System

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

##Radio buttons and checkboxes

_Insert documentation for radio buttons and checkboxes here_

##Select boxes

_Insert documentation for select boxes here_

##Colors

_Insert documentation for colors here_

##Lists

_Insert documentation for lists here_

##Icon fonts

_Insert documentation on icon fonts here_

##Buttons

_Insert documentation on buttons here_
