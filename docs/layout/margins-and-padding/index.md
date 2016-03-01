---
title: 'Margins and Padding'
layout: documentation
---

Weavr includes utility classes to quickly set the padding and margin on elements.

## Padding

Padding classes look like this: `.padding-[0-6x]-[0-6x]`.

The classnames follow the pattern of CSS shorthand for the padding property. They set all four padding amounts (top, bottom, left, and right), with the vertical amounts (top and bottom) being equal and the horizontal amounts (left and right) being equal. Amounts are declared as multipliers of Weavr's default gutter size (15px on mobile, 20px everywhere else) ranging from 0 to 6. When the multiplier is 0, the `x` is dropped. If both the vertical and horizontal padding amounts are the same, the classname is condensed to just `.padding-[0-6x]`.

For example, to set the padding of an element to 60px on the top and bottom and 40px on the left and right, use the class `.padding-3x-2x`. To set the padding to 20px on all sides, use `.padding-1x`. To set the vertical padding to 0 and the horizontal padding to 40px, use `.padding-0-2x`.

Below are all of the possible padding classes.

`.padding-0`, `.padding-0-1x`, `.padding-0-2x`, `.padding-0-3x`, `.padding-0-4x` , `.padding-0-5x` , `.padding-0-6x`

`.padding-1x-0`, `.padding-1x`, `.padding-1x-2x`, `.padding-1x-3x`, `.padding-1x-4x` , `.padding-1x-5x` , `.padding-1x-6x`

`.padding-2x-0`, `.padding-2x-1x`, `.padding-2x`, `.padding-2x-3x`, `.padding-2x-4x` , `.padding-2x-5x` , `.padding-2x-6x`

`.padding-3x-0`, `.padding-3x-1x`, `.padding-3x-2x`, `.padding-3x`, `.padding-3x-4x` , `.padding-3x-5x` , `.padding-3x-6x`

`.padding-4x-0`, `.padding-4x-1x`, `.padding-4x-2x`, `.padding-4x-3x`, `.padding-4x` , `.padding-4x-5x` , `.padding-4x-6x`

`.padding-5x-0`, `.padding-5x-1x`, `.padding-5x-2x`, `.padding-5x-3x`, `.padding-5x-4x` , `.padding-5x` , `.padding-5x-6x`

`.padding-6x-0`, `.padding-6x-1x`, `.padding-6x-2x`, `.padding-6x-3x`, `.padding-6x-4x` , `.padding-6x-5x` , `.padding-6x`

## Margin

Margin utility classes set the margin for only a single side of an element. At the moment they are limited to only the top and bottom. Like padding classes, the margin value is declared as a multiplier of Weavr's default gutter size. They follow the pattern: `.margin-[top or bottom]-[0-6x]`. When the multiplier is 0, the `x` is dropped. 

Below are all of the possible margin classes:

`.margin-top-0`, `.margin-top-1x`, `.margin-top-2x`, `.margin-top-3x`, `.margin-top-4x`, `.margin-top-5x`, `.margin-top-6x`

`.margin-bottom-0`, `.margin-bottom-1x`, `.margin-bottom-2x`, `.margin-bottom-3x`, `.margin-bottom-4x`, `.margin-bottom-5x`, `.margin-bottom-6x`
