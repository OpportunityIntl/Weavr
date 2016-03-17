---
title: 'Blockquotes'
layout: documentation
---

For blockquotes, wrap the quote in a paragraph tag, and wrap the optional citation in a `<cite>` tag.

<div class="demo">
  <blockquote>
    <p>
      I have learned so much from my Trust Group, including how to save and manage money properly. Now, because of Opportunity, my business has been more successful and I have been able to pay for my children’s education."
    </p>
    <cite>Sheilah Jjumba, clothing store owner, Uganda</cite>
  </blockquote>
</div>

~~~html
<blockquote>
  <p>
    I have learned so much from my Trust Group, including how to save and manage money properly. Now, because of Opportunity, my business has been more successful and I have been able to pay for my children’s education."
  </p>
  <cite>Sheilah Jjumba, clothing store owner, Uganda</cite>
</blockquote>
~~~

If there are multiple blockquote elements in a row, the borders will collapse automatically:

<div class="demo">
  <blockquote>
    <p>
      When I first met my Opportunity loan officer, I had nothing. Now, I have truly become a provider, and I know my future is in God’s hands.”
    </p>
    <cite>Luz Maria Atencia, Food Vendor in Cartagena, Colombia</cite>
  </blockquote>
  <blockquote>
    <p>
      In the past, I didn’t take my education seriously— spending my pocket money on treats and skipping class. Then, I learned what I could do if I saved money. I learned to grow and sell vegetables to take the pressure off my struggling parents. I was so proud to save enough money to buy my own pen, and now I am saving to buy my own books."
    </p>
    <cite>Maureen Alinaiswe, Student at the Nuvila Primary School in Uganda</cite>
  </blockquote>
</div>

~~~html
<blockquote>
  <p>
    When I first met my Opportunity loan officer, I had nothing. Now, I have truly become a provider, and I know my future is in God’s hands.”
  </p>
  <cite>Luz Maria Atencia, Food Vendor in Cartagena, Colombia</cite>
</blockquote>
<blockquote>
  <p>
    In the past, I didn’t take my education seriously — spending my pocket money on treats and skipping class. Then, I learned what I could do if I saved money. I learned to grow and sell vegetables to take the pressure off my struggling parents. I was so proud to save enough money to buy my own pen, and now I am saving to buy my own books."
  </p>
  <cite>Maureen Alinaiswe, Student at the Nuvila Primary School in Uganda</cite>
</blockquote>
~~~

## No borders

To remove the border above and below the blockquote, add the `.no-border` modifier class.

<div class="demo">
  <blockquote class="no-border">
    <p>
      I have learned so much from my Trust Group, including how to save and manage money properly. Now, because of Opportunity, my business has been more successful and I have been able to pay for my children’s education."
    </p>
    <cite>Sheilah Jjumba, clothing store owner, Uganda</cite>
  </blockquote>
</div>

~~~html
<blockquote class="no-border">
  <p>
    I have learned so much from my Trust Group, including how to save and manage money properly. Now, because of Opportunity, my business has been more successful and I have been able to pay for my children’s education."
  </p>
  <cite>Sheilah Jjumba, clothing store owner, Uganda</cite>
</blockquote>
~~~

## Large blockquotes

Add the `.large` modifier class to make a blockquote larger.

<div class="demo">
  <blockquote class="large no-border">
    <p>
      I have learned so much from my Trust Group, including how to save and manage money properly. Now, because of Opportunity, my business has been more successful and I have been able to pay for my children’s education."
    </p>
    <cite>Sheilah Jjumba, clothing store owner, Uganda</cite>
  </blockquote>
</div>

~~~html
<blockquote class="large no-border">
  <p>
    I have learned so much from my Trust Group, including how to save and manage money properly. Now, because of Opportunity, my business has been more successful and I have been able to pay for my children’s education."
  </p>
  <cite>Sheilah Jjumba, clothing store owner, Uganda</cite>
</blockquote>
~~~
