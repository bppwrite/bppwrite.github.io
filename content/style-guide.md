+++
title = "Style Guide"
date = "2017-03-26T09:36:08-04:00"

+++

# Style Guide

## Colors

<div class="color-example gray-1">$white</div>
<div class="color-example gray-2">$gray-light</div>
<div class="color-example gray-3">$gray</div>
<div class="color-example gray-4">$gray-dark</div>
<div class="color-example gray-5">$black</div>

<div class="color-example color-1">$primary-dark</div>
<div class="color-example color-2">$primary</div>
<div class="color-example color-3">$primary-light</div>
<div class="color-example color-4">$accent</div>

## Typography

### Headings

{{% block-highlight %}}
# h1. The spectacle before us was indeed sublime.
## h2. The spectacle before us was indeed sublime.
### h3. The spectacle before us was indeed sublime.
#### h4. The spectacle before us was indeed sublime.
##### h5. The spectacle before us was indeed sublime.
###### h6. The spectacle before us was indeed sublime.
{{% /block-highlight %}}

### Paragraphs

Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.

All their equipment and instruments are alive.


### Fonts

<h4 class="font-1">Interstate Black</h4>
<h4 class="font-2">Interstate Bold Condensed These fonts are almost exactly the same.</h4>
<h4 class="font-3">Interstate Regular Condensed These fonts are almost exactly the same.</h4>
<h4 class="font-4">Interstate Light Condensed</h4>
<h4 class="font-5">Trend Sans One</h4>
<h4 class="font-6">Twenty Twelve Slab Regular</h4>

## Elements

### Lists

* One
* Two
    * One
    * Two
* Three

1. One
2. Two
    1. One
    2. Two
3. Three

### Buttons

{{% button "#" %}}Button w/ _Markdown_{{% /button %}}
<br/>

{{% button-secondary "#" %}}Secondary Button w/ _Markdown_{{% /button-secondary %}}
<br/>

{{< button "#" >}}
    Button w/o _Markdown_
{{< /button >}}
<br/>

{{< button-secondary "#" >}}
    Secondary Button w/0 _Markdown_
{{< /button-secondary >}}

### Links

[Hola](#)

### Blockquotes

> I watched the storm, so beautiful yet terrific. Mist enveloped the ship three hours out from port. It was going to be a lonely trip back.

### Table

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
