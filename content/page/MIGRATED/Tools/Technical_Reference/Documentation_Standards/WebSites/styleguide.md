---
title: Style Guide Illustrated
weight: 8
---

This page exists mainly for checking the CSS styles and as a reference for the markdown and html to produce particular content. All styles here are simply derived from [Foundation's core CSS classes](https://foundation.zurb.com/sites/docs/)

The source code is provide in a `code block` above of the demonstrated feature.  Alternatively, you can view the source code for this page [here](https://github.com/Riverscapes/Program/blob/master/docs/Technical_Reference/Documentation_Standards/WebSites/styleguide.md).


`# H1` produces:
# H1

***NOTE: (Never EVER use H1 in the body. It's here for completeness)***

`## H2 is this` produces:
## H2 is this
`*this is italics*` and `**this is bold**` and `***this is both***` illustrated in regular paragraph text: 

Here is some paragraph text. Pariatur *this is italics* and **this is bold** and ***this is both*** commodo et nisi ea est nulla enim ad id consequat aliquip. Proident anim est ad officia nostrud excepteur anim reprehenderit elit anim est irure pariatur. Duis ipsum anim dolor veniam voluptate occaecat cupidatat incididunt aliquip adipisicing officia dolor. Irure proident esse ullamco qui consequat elit excepteur qui velit proident cupidatat commodo amet. Tempor duis et qui dolore ex tempor esse dolore laboris ullamco deserunt. Nisi Lorem cupidatat aliqua elit commodo occaecat incididunt. In id sit et in consectetur eu incididunt aliquip Lorem deserunt et id non aliquip.

`### H3 is this` produces:
### H3 is this

`#### H4  is this` produces:
#### H4 is this

`##### H5 is this` produces:
##### H5 is this

`###### H62 is this` produces:
###### H6 is this

------------------------------------------

## Images

`<img class="float-left" src="http://lorempixel.com/150/100/cats/5">`
<img class="float-left" src="http://lorempixel.com/150/100/cats/5"> 
Sometimes you want an image to live on the left. Veniam deserunt do magna nisi sunt ea quis aliqua aute cupidatat elit Lorem non. Dolore veniam deserunt nisi aute magna. Officia id dolor aliqua sunt dolor id cupidatat quis ea elit excepteur ea non. Aute sint aute in enim pariatur veniam ut. Ut Lorem anim occaecat aliquip quis irure ipsum elit do deserunt consequat aute cillum. Magna dolore sint adipisicing labore deserunt. Incididunt culpa laboris nisi Lorem excepteur.

`<img class="float-right" src="http://lorempixel.com/150/100/cats/4">`
<img class="float-right" src="http://lorempixel.com/150/100/cats/4"> 
Other times it belongs on the right. Veniam deserunt do magna nisi sunt ea quis aliqua aute cupidatat elit Lorem non. Dolore veniam deserunt nisi aute magna. Officia id dolor aliqua sunt dolor id cupidatat quis ea elit excepteur ea non. Aute sint aute in enim pariatur veniam ut. Ut Lorem anim occaecat aliquip quis irure ipsum elit do deserunt consequat aute cillum. Magna dolore sint adipisicing labore deserunt. Incididunt culpa laboris nisi Lorem excepteur.

------------------------------------------

## Embeds

This is mainly for youtube videos. Just use the regular youtube embed code wrapped in a `responsive-embed` `div`

```
<div class="responsive-embed widescreen">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rNSnfXl1ZjU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```

<div class="responsive-embed widescreen">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rNSnfXl1ZjU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

------------------------------------------

## Tables

Sometimes you need tabular data:

| Header1   | Col A   | Col B   | Col C   |
| --------- | ------- | ------- | ------- |
| **Row 1** | 0.23423 | 0.23423 | 0.23423 |
| **Row 2** | 0.23423 | 0.23423 | 0.23423 |
| **Row 3** | 0.23423 | 0.23423 | 0.23423 |

Produced with:
```
| Header1   | Col A   | Col B   | Col C   |
| --------- | ------- | ------- | ------- |
| **Row 1** | 0.23423 | 0.23423 | 0.23423 |
| **Row 2** | 0.23423 | 0.23423 | 0.23423 |
| **Row 3** | 0.23423 | 0.23423 | 0.23423 |
```

------------------------------------------


## Buttons

### Basic Buttons

Basic buttons can be produced as follows:

<!-- Anchors (links) -->
`<a href="about.html" class="button">Learn More</a>`:
<a href="about.html" class="button">Learn More</a>

`<a href="#features" class="button">View All Features</a>`:
<a href="#features" class="button">View All Features</a>

### Button Sizes

Sometimes you want buttons of different sizes:
```
<a class="button tiny" href="#">So Tiny</a>
<a class="button small" href="#">So Small</a>
<a class="button" href="#">So Basic</a>
<a class="button large" href="#">So Large</a>
```
<a class="button tiny" href="#">So Tiny</a>
<a class="button small" href="#">So Small</a>
<a class="button" href="#">So Basic</a>
<a class="button large" href="#">So Large</a>

Sometimes you want your buttons to expand the width of the page.
```
<a class="button expanded" href="#">Such Expand</a>
<a class="button small expanded" href="#">Wow, Small Expand</a>
```
<a class="button expanded" href="#">Such Expand</a>
<a class="button small expanded" href="#">Wow, Small Expand</a>

### Button Coloring

Coloring buttons can be done as follows:
```
<a class="button primary" href="#">Primary</a>
<a class="button secondary" href="#">Secondary</a>
<a class="button success" href="#">Success</a>
<a class="button alert" href="#">Alert</a>
<a class="button warning" href="#">Warning</a>
```
<a class="button primary" href="#">Primary</a>
<a class="button secondary" href="#">Secondary</a>
<a class="button success" href="#">Success</a>
<a class="button alert" href="#">Alert</a>
<a class="button warning" href="#">Warning</a>

### Hollow Buttons
The same colors can be used on hollow buttons:
```
<a class="hollow button" href="#">Primary</a>
<a class="hollow button secondary" href="#">Secondary</a>
<a class="hollow button success" href="#">Success</a>
<a class="hollow button alert" href="#">Alert</a>
<a class="hollow button warning" href="#">Warning</a>
<a class="hollow button" href="#" disabled>Disabled</a>
```
<a class="hollow button" href="#">Primary</a>
<a class="hollow button secondary" href="#">Secondary</a>
<a class="hollow button success" href="#">Success</a>
<a class="hollow button alert" href="#">Alert</a>
<a class="hollow button warning" href="#">Warning</a>
<a class="hollow button" href="#" disabled>Disabled</a>

### Buttons with Icons

We use [font-awesome](https://fontawesome.com/v4.7.0/) icon set for icons

`<a class="button" href="#"><i class="fa fa-home"></i> 'home' icon </a>`
<a class="button" href="#"><i class="fa fa-home"></i> 'home' icon </a>

Maybe you want a custom icon:

`<a class="button" href="#"><img src="/images/favicons/android-icon-36x36.png"> 'home' icon </a>`
<a class="button" href="#"><img src="/images/favicons/android-icon-36x36.png"> 'home' icon </a>

-----------------------------------------

## Block-grids

Block grids are a shorthand way to create equally-sized columns.

<div class="row small-up-2 medium-up-3 large-up-4">
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/1" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/2" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/3" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/4" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/5" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/6" class="thumbnail" alt="">
  </div>
</div>

```
<div class="row small-up-2 medium-up-3 large-up-4">
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/1" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/2" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/3" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/4" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/5" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="http://lorempixel.com/500/500/cats/6" class="thumbnail" alt="">
  </div>
</div>
```

------------------------------------------

## Cards 

Cards can be used to display items of a similar class

<div class="row small-up-2 medium-up-3">
  <div class="column">
    <div class="card">
      <img src="http://lorempixel.com/150/100/cats/1">
      <div class="card-section">
        <h4>This is a row of cards.</h4>
        <p>This row of cards is embedded in an Flex Block Grid.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="http://lorempixel.com/150/100/cats/2">
      <div class="card-section">
        <h4>This is a card.</h4>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="http://lorempixel.com/150/100/cats/3">
      <div class="card-section">
        <h4>This is a card.</h4>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
      </div>
    </div>
  </div>
</div>
```
<div class="row small-up-2 medium-up-3">
  <div class="column">
    <div class="card">
      <img src="http://lorempixel.com/150/100/cats/1">
      <div class="card-section">
        <h4>This is a row of cards.</h4>
        <p>This row of cards is embedded in an Flex Block Grid.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="http://lorempixel.com/150/100/cats/2">
      <div class="card-section">
        <h4>This is a card.</h4>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="http://lorempixel.com/150/100/cats/3">
      <div class="card-section">
        <h4>This is a card.</h4>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
      </div>
    </div>
  </div>
</div>
```


--------------------------------------------

## Advanced grid work

Everything in foundaiton is rows and columns. There are always 12 columns in a row:

Grids can also behave differently at different sizes (think phone vs. desktop)

<!-- demogrid only adds borders around the rows and columns. Don't use that yourself -->
<div class="demogrid">
  <div class="row">
    <div class="columns small-2 large-4">small-2 large-4</div>
    <div class="columns small-4 large-4">small-4 large-4</div>
    <div class="columns small-6 large-4">small-6 large-4</div>
  </div>
  <div class="row">
    <div class="columns large-3">large-3</div>
    <div class="columns large-6">large-6</div>
    <div class="columns large-3">large-3</div>
  </div>
  <div class="row">
    <div class="columns small-6 large-2"><!-- ... --></div>
    <div class="columns small-6 large-8"><!-- ... --></div>
    <div class="columns small-12 large-2"><!-- ... --></div>
  </div>
</div>

```
<div class="demogrid">
  <div class="row">
    <div class="columns small-2 large-4">small-2 large-4</div>
    <div class="columns small-4 large-4">small-4 large-4</div>
    <div class="columns small-6 large-4">small-6 large-4</div>
  </div>
  <div class="row">
    <div class="columns large-3">large-3</div>
    <div class="columns large-6">large-6</div>
    <div class="columns large-3">large-3</div>
  </div>
  <div class="row">
    <div class="columns small-6 large-2"><!-- ... --></div>
    <div class="columns small-6 large-8"><!-- ... --></div>
    <div class="columns small-12 large-2"><!-- ... --></div>
  </div>
</div>
```