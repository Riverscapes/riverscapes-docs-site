---
title: Tool Web Sites
weight: 2
---

Every riverscapes tool (piece of software) is documented using its own web site. These sites use a consistent design and content. They are intended to help end users discover, obtain and run the tools. The web sites are written as plain text [markdown](https://en.wikipedia.org/wiki/Markdown) files stored in a [GitHub](https://github.com/) repository. GitHub then handles serving these files as a web site. 

Tool developers can use the following material to learn how to write, test and publish tool web sites on GitHub.

# Introduction - GitHub Pages

GitHub can build a web site for your tool from simple text files stored in your repo! This is an excellent way to quickly and easily build a professional, polished documentation site for your tool that users can read to learn more about how it works. The beauty of this approach is that all you need to write are simple text files using the [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax. No understanding of web technology is required! Here are a couple of examples:

* [GCD](http://gcd.riverscapes.net)
* [PyBRAT](http://brat.riverscapes.net/)


# Creating a Web Site

Here are the steps to create a documentation web site for your tool. GitHub also has lots of documentation online describing how to use this [GitHub Pages](https://pages.github.com/) technology.

1. Download the [latest web template here](https://github.com/Riverscapes/riverscapes-jekyll-theme/releases/latest) from the riverscapes-jeklyll-theme <a href="https://github.com/Riverscapes/riverscapes-jekyll-theme"><i class="fa fa-github" aria-hidden="true"></i></a>
2. Unzip the file to the root of your repository. This will create a `docs` folder with the website template contained therein. Comit these changes (e.g. as `RS Website Template copied`)
3. If creating a website for a repository that is also your tool or sourcecode, skip ahead to step 4. If creating a repository that is just a website, move all contents of `docs` folder to root of repository and then delete `docs` folder. 
4. Push your changes up to `origin` (i.e. the GitHub remote).
5. Open your repo home page on GitHub and:
   1. Click on the Settings link above the source code listing.
   2. Scroll down until you see **GitHub Pages**
   3. Choose **master branch /docs folder** in the source dropdown.
   4. Click **Save**.
   5. Wait 2-3 minutes for the site to get generated.
   6. Click on the link shown for your web site. Typically it will be of the form `http://riverscapes.github.io/YOURREPONAME`
5. [Create whatever other web pages](/Tools/Technical_Reference/Documentation_Standards/WebSites/creating_new_pages.html) you need and also store them in the docs folder. You will notice a bunch of suggested pages and templates you can either [edit](/Tools/Technical_Reference/Documentation_Standards/WebSites/edits.html) or delete. You can use folders to separate and group files. Note that the folder names are going to be interpreted into links on the web site. So do **not** use spaces in folder names. Instead use underscores in place of spaces, and do use capitalization. File names are not used as links, but the informal standard is to also avoid spaces and use all lower case for file names.

You will need to wait 2-3 minutes after each push to GitHub for your site to be generated from your markdown documents.

This short video shows how quick and easy the above is:
<div class="responsive-embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/I-KFI-xiarA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



# Theming Your Site

<!-- TODO By default your web site will use a simple black and white theme. See the section on [theming]({{ site.baseurl}}/Tools/Technical_Reference/Documentation_Standards/WebSites/theming.html) that describes how to apply the standard riverscapes theme to your site. (i.e. the stylized theme used for this site.) -->

# Site Content Recommendations

It's recommended that - at an absolute minimum - you cover the following topics in your web site:

* **Release Notes** - include a single page that lists each of the official releases, the date of the release, together with some high level description of the changes. Here's [an example](http://workbench.northarrowresearch.com/release_notes.html).
* **Acknowledgements** - content describing the contributors and funding sources.
* **Source Code** - link back to the GitHub repo so readers can easily obtain the source code should they need it.
* **Citations** - Either at the bottom of the home page, or on a dedicated page should more space be required.
* **Getting Started** - instructions on how users download, configure and run the code.
* **Prerequisites** - A list of dependencies required by users before the code will run, together with links and/or instructions on how to obtain them. This next point is incredibly important! It is often hard to know what technologies that you have on your computer are actually in use by your code. You should install your code on a *clean* computer that has never been used for development or had the source code on it to thoroughly understand what all is required. This is the only true way to understand what is required. Not doing this test will almost certainly mean that your instructions will be incomplete for some users that have a different computer configuration than you.