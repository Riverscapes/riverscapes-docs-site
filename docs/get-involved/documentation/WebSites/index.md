---
title: Tool Web Sites
weight: 2
---

Many riverscapes tools (pieces of software) are documented using their own web site, for example:

* [viewer.riverscapes.net](https://viewer.riverscapes.net)
* [Riverscapes Studio for QGIS (QRiS) at qris.riverscapes.net](https://qris.riverscapes.net)
* [tools.riverscapes.net](https://tools.riverscapes.net)

These sites use a consistent design and content. They are intended to help end users discover, obtain and run the tools. Like this one, these web sites are written as plain text [markdown](https://en.wikipedia.org/wiki/Markdown) files stored in a [GitHub](https://github.com/) repository and published using Docusaurus.

Tool developers can use the following material to learn how to write, test and publish tool web sites on GitHub.

## Site Content Recommendations

It's recommended that - at an absolute minimum - you cover the following topics in your web site:

* **Release Notes** - include a single page that lists each of the official releases, the date of the release, together with some high level description of the changes. Here's [an example](http://workbench.northarrowresearch.com/release_notes.html).
* **Acknowledgements** - content describing the contributors and funding sources.
* **Source Code** - link back to the GitHub repo so readers can easily obtain the source code should they need it.
* **Citations** - Either at the bottom of the home page, or on a dedicated page should more space be required.
* **Getting Started** - instructions on how users download, configure and run the code.
* **Prerequisites** - A list of dependencies required by users before the code will run, together with links and/or instructions on how to obtain them. This next point is incredibly important! It is often hard to know what technologies that you have on your computer are actually in use by your code. You should install your code on a *clean* computer that has never been used for development or had the source code on it to thoroughly understand what all is required. This is the only true way to understand what is required. Not doing this test will almost certainly mean that your instructions will be incomplete for some users that have a different computer configuration than you.
