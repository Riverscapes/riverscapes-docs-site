---
title: Using Docusaurus for Riverscapes documentation
page-status: stub
page-priority: medium
---

## Create a new page

A new page is written in markdown and should have .md or .mdx extension. (Use .mdx if you are including a react component.)

### Front matter

Front matter is a section at the very top of the file beggining with three dashes and containing key:value pairs. 
See https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter for Docusaurus supported fields. 
Suggested front matter for Riverscapes docs: 

```text
---
title: Friendly Page Title
description: A description of the page
page-status: stub,messy,mature,protected,generated
page-priority: low,medium,high
---

The `page-status` and `page-priority` tags are proposed for internal use and have no impact on how the page is displayed. 

```

### How to embed a Youtube Video

Use this syntax: 


#### Individual Video

```ts
<YouTubeEmbed videoId="mfyhjVfECf4" />
```


<YouTubeEmbed videoId="mfyhjVfECf4" />

#### Playlists

```ts
<YouTubeEmbed videoId="videoseries?si=ShLyh1OooBaksIn1&amp;list=PLbpi6ZahtOH4sXk8IP-z9gW9oDz5XjQwA" />
```

<YouTubeEmbed videoId="videoseries?si=ShLyh1OooBaksIn1&amp;list=PLbpi6ZahtOH4sXk8IP-z9gW9oDz5XjQwA" />

## Common theme repository

We have a [private GitHub repository](https://github.com/Riverscapes/riverscapes-docusaurus-theme) for the theme and a demo site at 
https://riverscapes.github.io/riverscapes-docusaurus-theme/ 