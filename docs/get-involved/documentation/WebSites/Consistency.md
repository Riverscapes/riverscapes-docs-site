---
title: Consistency & Utility
weight: 5
---

## Making your documentation consistent

Always attempt to follow the template set by previous pages in the same parent folders (e.g. if writing a [command page](/Documentation/Commands/) ).

### Making your documentation useful with hyperlinks

Poorly cross-referenced webpages (especially those on documented) are just annoying and a missed opportunity. Empathize with your audience enough to make sure they can find whatever you talk about. 

So an example  would be to mention that we have good ETAL BRAT Standards, but fail to link you to that page.

#### Example 1 - No references
_How its rendered:_
We have good ETAL BRAT Standards.

_How its written in markdown:_
``` markdown
We have good ETAL BRAT Standards.
```

_Annoying: without references this is vague._

#### Example 2 - Amateur hyperlink listed but not linked
_How its rendered:_  We have good ETAL BRAT Standards (http://brat.riverscapes.net/Documentation/Standards/).

_How its written in markdown:_ 
``` markdown
We have good ETAL BRAT Standards (http://brat.riverscapes.net/Documentation/Standards/).
```

_Annoying: as a user can't even click on this, they need to copy and paste it into their browser ._

#### Example 3 - Amateur hyperlink listed and linked
_How its rendered:_ We have good ETAL BRAT Standards ([http://brat.riverscapes.net/Documentation/Standards/](http://brat.riverscapes.net/Documentation/Standards/)).

_How its written in markdown:_
``` markdown
We have good ETAL BRAT Standards ([http://brat.riverscapes.net/Documentation/Standards/](http://brat.riverscapes.net/Documentation/Standards/)).
```

_Amateurish: do we need to list the URL out?._

#### Example 4 -  hyperlink only - preferred
_How its rendered:_
We have good [ETAL BRAT Standards](http://brat.riverscapes.net/Documentation/Standards/).

_How its written in markdown:_
``` markdown
We have good ETAL BRAT Standards We have good [ETAL BRAT Standards](http://brat.riverscapes.net/Documentation/Standards/).
```

_Our default standard._

{/* TODO: <div align="center"> Add a screenshot or example image of the consistency standard here. </div> */}

