---
title: 'Tables'
layout: documentation
---

Weavr applies some basic default styles to tables. Cells have a light-gray border, and rows alternate between white and light-gray backgrounds.

For a minimal table, with no headings or footer, there's no need to wrap your rows in a `tbody` tag (browsers end up doing that for you, and it saves some unnecessary nesting in your markup). Basic tables look like this:

<div class="demo">
  <div class="responsive-table">
    <table>
      <tr>
        <td>Datum 1</td>
        <td>Datum 2</td>
        <td>Datum 3</td>
        <td>Datum 4</td>
      </tr>
      <tr>
        <td>Datum 5</td>
        <td>Datum 6</td>
        <td>Datum 7</td>
        <td>Datum 8</td>
      </tr>
      <tr>
        <td>Datum 9</td>
        <td>Datum 10</td>
        <td>Datum 11</td>
        <td>Datum 12</td>
      </tr>
      <tr>
        <td>Datum 13</td>
        <td>Datum 14</td>
        <td>Datum 15</td>
        <td>Datum 16</td>
      </tr>
    </table>
  </div>
</div>

```html
<table>
  <tr>
    <td>Datum 1</td>
    <td>Datum 2</td>
    <td>Datum 3</td>
    <td>Datum 4</td>
  </tr>
  ...
</table>
```

## Responsive tables

In lieu of elaborate responsive table solutions (which typically involved some Javascript wizardry and additional markup), you can simply wrap a table in a `div` with the class `.responsive-table`. If the available width is smaller than the minimum width of the table, the `.responsive-table` div will become scrollable. This is in place in all the demos on this page if you want to resize your browser and see it in action.

```html
<div class="responsive-table">
  <table>
    ...
  </table>
</div>
```

## Table headings

If you want headings for your table columns, it's time to start using the `thead` and `tbody` tags in your markup. Table headings look like this:

<div class="demo">
  <div class="responsive-table">
    <table>
      <thead>
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
          <th>Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Datum 1</td>
          <td>Datum 2</td>
          <td>Datum 3</td>
          <td>Datum 4</td>
        </tr>
        <tr>
          <td>Datum 5</td>
          <td>Datum 6</td>
          <td>Datum 7</td>
          <td>Datum 8</td>
        </tr>
        <tr>
          <td>Datum 9</td>
          <td>Datum 10</td>
          <td>Datum 11</td>
          <td>Datum 12</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<table>
  <thead>
    <tr>
      <th>Heading 1</th>
      <th>Heading 2</th>
      <th>Heading 3</th>
      <th>Heading 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Datum 1</td>
      <td>Datum 2</td>
      <td>Datum 3</td>
      <td>Datum 4</td>
    </tr>
    ...
  </tbody>
</table>
```

## Table footer

Use the `tfoot` tag to create a footer rows for you table. A thicker and darker border is placed between above the first footer row.

<div class="demo">
  <div class="responsive-table">
    <table>
      <thead>
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
          <th>Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Datum 1</td>
          <td>Datum 2</td>
          <td>Datum 3</td>
          <td>Datum 4</td>
        </tr>
        <tr>
          <td>Datum 5</td>
          <td>Datum 6</td>
          <td>Datum 7</td>
          <td>Datum 8</td>
        </tr>
        <tr>
          <td>Datum 9</td>
          <td>Datum 10</td>
          <td>Datum 11</td>
          <td>Datum 12</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer 1</td>
          <td>Footer 2</td>
          <td>Footer 3</td>
          <td>Footer 4</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

```html
<table>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
      <td>Footer 4</td>
    </tr>
  </tfoot>
</table>
```

## Row headings

To add row headings on your table. Use a `th` in place of the first `td` in your body rows:

<div class="demo">
  <div class="responsive-table">
    <table>
      <thead>
        <tr>
          <th class="hide"></th>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
          <th>Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Row heading 1</th>
          <td>Datum 1</td>
          <td>Datum 2</td>
          <td>Datum 3</td>
          <td>Datum 4</td>
        </tr>
        <tr>
          <th>Row heading 2</th>
          <td>Datum 5</td>
          <td>Datum 6</td>
          <td>Datum 7</td>
          <td>Datum 8</td>
        </tr>
        <tr>
          <th>Row heading 3</th>
          <td>Datum 9</td>
          <td>Datum 10</td>
          <td>Datum 11</td>
          <td>Datum 12</td>
        </tr>
        <tr>
          <th>Row heading 4</th>
          <td>Datum 13</td>
          <td>Datum 14</td>
          <td>Datum 15</td>
          <td>Datum 16</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<table>
  <thead>
    <tr>
      <th class="hide"></th>
      <th>Heading 1</th>
      <th>Heading 2</th>
      <th>Heading 3</th>
      <th>Heading 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row heading 1</th>
      <td>Datum 1</td>
      <td>Datum 2</td>
      <td>Datum 3</td>
      <td>Datum 4</td>
    </tr>
    ...
  </tbody>
</table>
```

## Hiding cells

The demo above demonstrated the use of `.hide` to hide a cell. This is a common scenario when using both column and row headings in a table.

## Row sections

If you want to segment body rows into sections, you can add the `.section-separator` class to the row and it will add a thicker border above the row.

<div class="demo">
  <div class="responsive-table">
    <table>
      <tr>
        <td>Datum 1</td>
        <td>Datum 2</td>
        <td>Datum 3</td>
        <td>Datum 4</td>
      </tr>
      <tr>
        <td>Datum 4</td>
        <td>Datum 5</td>
        <td>Datum 6</td>
        <td>Datum 7</td>
      </tr>
      <tr class="section-separator">
        <td>Datum 8</td>
        <td>Datum 9</td>
        <td>Datum 10</td>
        <td>Datum 11</td>
      </tr>
      <tr>
        <td>Datum 12</td>
        <td>Datum 13</td>
        <td>Datum 14</td>
        <td>Datum 15</td>
      </tr>
    </table>
  </div>
</div>

```html
<table>
  <tr>
    ...
  </tr>
  <tr>
    ...
  </tr>
  <tr class="section-separator">
    ...
  </tr>
  <tr>
    ...
  </tr>
</table>
```

## A complex demo

Here's an example of a more complex table that incorporates everything. It also demonstrates the use of alignment modifier classes to align cell content.

<div class="demo">
  <div class="responsive-table">
    <table>
      <thead>
        <tr>
          <th class="hide"></th>
          <th colspan="2" class="align-center">Loan Clients</th>
          <th colspan="2" class="align-center">Deposit Clients</th>
        </tr>
        <tr>
          <th class="hide"></th>
          <th>2013</th>
          <th>2014</th>
          <th>2013</th>
          <th>2014</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>DR Congo</th>
          <td class="align-right">9,059</td>
          <td class="align-right">5,399</td>
          <td class="align-right">-</td>
          <td class="align-right">3,534</td>
        </tr>
        <tr>
          <th>Ghana</th>
          <td class="align-right">194,600</td>
          <td class="align-right">210,821</td>
          <td class="align-right">459,515</td>
          <td class="align-right">534,002</td>
        </tr>
        <tr>
          <th>Kenya</th>
          <td class="align-right">11,281</td>
          <td class="align-right">10,875</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr>
          <th>Malawi</th>
          <td class="align-right">59,710</td>
          <td class="align-right">48,032</td>
          <td class="align-right">483,590</td>
          <td class="align-right">668,459</td>
        </tr>
        <tr>
          <th>Mozambique</th>
          <td class="align-right">11,020</td>
          <td class="align-right">10,733</td>
          <td class="align-right">64,051</td>
          <td class="align-right">72,571</td>
        </tr>
        <tr>
          <th>Rwanda</th>
          <td class="align-right">39,038</td>
          <td class="align-right">34,121</td>
          <td class="align-right">115,599</td>
          <td class="align-right">175,421</td>
        </tr>
        <tr>
          <th>Tanzania</th>
          <td class="align-right">9,312</td>
          <td class="align-right">5,594</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr>
          <th>Uganda</th>
          <td class="align-right">27,117</td>
          <td class="align-right">28,982</td>
          <td class="align-right">87,574</td>
          <td class="align-right">80,484</td>
        </tr>
        <tr class="section-separator">
          <th>Colombia</th>
          <td class="align-right">11,052</td>
          <td class="align-right">10,203</td>
          <td class="align-right">16,795</td>
          <td class="align-right">25,816</td>
        </tr>
        <tr>
          <th>Dominican Republic</th>
          <td class="align-right">17,532</td>
          <td class="align-right">24,033</td>
          <td class="align-right">-</td>
          <td class="align-right">37,646</td>
        </tr>
        <tr>
          <th>Honduras</th>
          <td class="align-right">9,451</td>
          <td class="align-right">7,877</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr>
          <th>Nicaragua</th>
          <td class="align-right">17,531</td>
          <td class="align-right">14,107</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr>
          <th>Peru</th>
          <td class="align-right">2,216</td>
          <td class="align-right">2,566</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr class="section-separator">
          <th>Macedonia</th>
          <td class="align-right">6,823</td>
          <td class="align-right">6,921</td>
          <td class="align-right">8,438</td>
          <td class="align-right">23,526</td>
        </tr>
        <tr>
          <th>Romania</th>
          <td class="align-right">1,965</td>
          <td class="align-right">1,713</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr>
          <th>Serbia</th>
          <td class="align-right">20,520</td>
          <td class="align-right">27,824</td>
          <td class="align-right">23,915</td>
          <td class="align-right">31,485</td>
        </tr>
        <tr class="section-separator">
          <th>China</th>
          <td class="align-right">872</td>
          <td class="align-right">1,001</td>
          <td class="align-right">-</td>
          <td class="align-right">-</td>
        </tr>
        <tr>
          <th>India</th>
          <td class="align-right">1,751,077</td>
          <td class="align-right">2,057,439</td>
          <td class="align-right">-</td>
          <td class="align-right">2,166,454</td>
        </tr>
        <tr>
          <th>Indonesia</th>
          <td class="align-right">31,622</td>
          <td class="align-right">343,202</td>
          <td class="align-right">40,656</td>
          <td class="align-right">250,351</td>
        </tr>
        <tr>
          <th>Philippines</th>
          <td class="align-right">661,808</td>
          <td class="align-right">596,586</td>
          <td class="align-right">58,440</td>
          <td class="align-right">52,467</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Global</th>
          <td class="align-right"><strong>2,893,6060</strong></td>
          <td class="align-right"><strong>3,448,029</strong></td>
          <td class="align-right"><strong>1,358,573</strong></td>
          <td class="align-right"><strong>4,122,216</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

```html
<table>
  <thead>
    <tr>
      <th class="hide"></th>
      <th colspan="2" class="align-center">Loan Clients</th>
      <th colspan="2" class="align-center">Deposit Clients</th>
    </tr>
    <tr>
      <th class="hide"></th>
      <th>2013</th>
      <th>2014</th>
      <th>2013</th>
      <th>2014</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>DR Congo</th>
      <td class="align-right">9,059</td>
      <td class="align-right">5,399</td>
      <td class="align-right">-</td>
      <td class="align-right">3,534</td>
    </tr>
    <tr>
      <th>Ghana</th>
      <td class="align-right">194,600</td>
      <td class="align-right">210,821</td>
      <td class="align-right">459,515</td>
      <td class="align-right">534,002</td>
    </tr>
    <tr>
      <th>Kenya</th>
      <td class="align-right">11,281</td>
      <td class="align-right">10,875</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr>
      <th>Malawi</th>
      <td class="align-right">59,710</td>
      <td class="align-right">48,032</td>
      <td class="align-right">483,590</td>
      <td class="align-right">668,459</td>
    </tr>
    <tr>
      <th>Mozambique</th>
      <td class="align-right">11,020</td>
      <td class="align-right">10,733</td>
      <td class="align-right">64,051</td>
      <td class="align-right">72,571</td>
    </tr>
    <tr>
      <th>Rwanda</th>
      <td class="align-right">39,038</td>
      <td class="align-right">34,121</td>
      <td class="align-right">115,599</td>
      <td class="align-right">175,421</td>
    </tr>
    <tr>
      <th>Tanzania</th>
      <td class="align-right">9,312</td>
      <td class="align-right">5,594</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr>
      <th>Uganda</th>
      <td class="align-right">27,117</td>
      <td class="align-right">28,982</td>
      <td class="align-right">87,574</td>
      <td class="align-right">80,484</td>
    </tr>
    <tr class="section-separator">
      <th>Colombia</th>
      <td class="align-right">11,052</td>
      <td class="align-right">10,203</td>
      <td class="align-right">16,795</td>
      <td class="align-right">25,816</td>
    </tr>
    <tr>
      <th>Dominican Republic</th>
      <td class="align-right">17,532</td>
      <td class="align-right">24,033</td>
      <td class="align-right">-</td>
      <td class="align-right">37,646</td>
    </tr>
    <tr>
      <th>Honduras</th>
      <td class="align-right">9,451</td>
      <td class="align-right">7,877</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr>
      <th>Nicaragua</th>
      <td class="align-right">17,531</td>
      <td class="align-right">14,107</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr>
      <th>Peru</th>
      <td class="align-right">2,216</td>
      <td class="align-right">2,566</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr class="section-separator">
      <th>Macedonia</th>
      <td class="align-right">6,823</td>
      <td class="align-right">6,921</td>
      <td class="align-right">8,438</td>
      <td class="align-right">23,526</td>
    </tr>
    <tr>
      <th>Romania</th>
      <td class="align-right">1,965</td>
      <td class="align-right">1,713</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr>
      <th>Serbia</th>
      <td class="align-right">20,520</td>
      <td class="align-right">27,824</td>
      <td class="align-right">23,915</td>
      <td class="align-right">31,485</td>
    </tr>
    <tr class="section-separator">
      <th>China</th>
      <td class="align-right">872</td>
      <td class="align-right">1,001</td>
      <td class="align-right">-</td>
      <td class="align-right">-</td>
    </tr>
    <tr>
      <th>India</th>
      <td class="align-right">1,751,077</td>
      <td class="align-right">2,057,439</td>
      <td class="align-right">-</td>
      <td class="align-right">2,166,454</td>
    </tr>
    <tr>
      <th>Indonesia</th>
      <td class="align-right">31,622</td>
      <td class="align-right">343,202</td>
      <td class="align-right">40,656</td>
      <td class="align-right">250,351</td>
    </tr>
    <tr>
      <th>Philippines</th>
      <td class="align-right">661,808</td>
      <td class="align-right">596,586</td>
      <td class="align-right">58,440</td>
      <td class="align-right">52,467</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Global</th>
      <td class="align-right"><strong>2,893,6060</strong></td>
      <td class="align-right"><strong>3,448,029</strong></td>
      <td class="align-right"><strong>1,358,573</strong></td>
      <td class="align-right"><strong>4,122,216</strong></td>
    </tr>
  </tfoot>
</table>
```
