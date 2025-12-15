---
title: Source Code Documentation
weight: 1
---

Riverscapes tools are public and intended to be used by a broad variety of users. Therefore it is vital that the source code is logically organized and well documented.

Riverscapes tool source code is hosted using the free and public [GitHub](https://github.com/Riverscapes/) service. Generally speaking, each tool source code resides in its own git repository. These repositories are collected within a Riverscapes [organization on GitHub](https://github.com/orgs/Riverscapes/dashboard). Contact [North Arrow Research](mailto:info@northarrowresearch.com) should you wish to have your tool included within this Riverscapes organization.

The following guidelines are intended for riverscapes tool developers to consistency and thoroughly document their source code.

## Source Code Check List

Here are some things to remember before uploading your source code onto the internet. Review **all** the files in **all** the folders in your source code directory and:

* Ensure that all the files needed to run the source code are in the repo! The best way to confirm this is to copy the source code onto a separate computer that has never had the source code on it before and then try and run the code there. Guaranteed the first time you do this it will not work and you will realize that you've forgotten to include one or more files. External dependencies don't need to go in your repo, but any file that you've authored should be included.
* Delete any temporary files or files that are no longer needed.
* Remove all sensitive information such as user names and passwords. It's best that your code reads these from a configuration file that is separate from your source code. This configuration file can then be excluded from your repo using a [.gitignore](https://help.github.com/articles/ignoring-files/) file. If you do this, then it can be helpful to create another file called something like `config.TEMPLATE`, with the exact same structure as your configure file, but without the sensitive information, and then include this in the repo. Others trying to use your code can use this template as a starting point.
* Remove all references to local file or folder paths. Any such references should be passed to your tool as command line parameters and not as literals in code files. See video below.
* Avoid putting binary files in your repo (databases, DLLs, compiled items etc). Again, use a [.gitignore](https://help.github.com/articles/ignoring-files/) file to exclude these.

<YouTubeEmbed videoId="ltx8pdD1NlU" />

## Source code in Riverscapes GitHub

Your source code should be stored in a git repository and uploaded into the [Riverscapes](https://github.com/orgs/Riverscapes/dashboard) organization on GitHub. If you're new to GitHub, the default is to upload repositories under the umbrella of your own user account, so it's important that you understand how to upload the repo under the riverscapes organization.

You should learn and understand how to use [git](https://git-scm.com/) first! Certainly research any of the terms below that are not readily obvious to you. But, at a high level, starting from a folder of non-version controlled source code on your computer, the steps are:

1. Install git version control software. 
2. Initialize a new git repo in your top level source code folder.
3. Commit all changes to the git repo.
4. Login to [GitHub](http://github.com)
5. Navigate to the [Riverscapes organization](https://github.com/orgs/Riverscapes/dashboard).
6. Click the green **New Repository** Button and fill in the necessary fields.
7. Copy the SSH address that GitHub provides once the repo is created.
8. On your local system, add a new **Remote**. Call it `origin` and paste the SSH address.
9. Push your source code up to origin.
10. Refresh the repo page on GitHub and verify that your source code appears.

[Git](https://git-scm.com/) is natively a command line tool that many developers struggle to master. While most git operations can be performed from dirctly within the GitHub web interface. However there are several excellent user-interface driven software products that simplify git operations and make it less intimidating to learn. Some of our favourites are:

* [Git Kraken](https://www.gitkraken.com/)
* [Source Tree](https://www.sourcetreeapp.com/)
* [GitHub Desktop Client](https://desktop.github.com/)

## Tag your releases

Review the commit history and create git [tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) at each official release using a systematic numbering system. Remember to **push** your tags to origin (or they will only reside on your local git repo).

## Read Me File

Add a file to the top level folder of your repo called `readme.md` The `md` suffix tells GitHub that this is a plain text [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) document. It's important because GitHub renders this readme file below the listing of source code. See the [bottom of the PyBRAT repo](https://github.com/Riverscapes/pyBRAT) for an example.

Learn [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you don't know it already. You're going to be writing a lot of it!

For now, simply put one or two sentences in the read me that provide a high level overview of your model. You will be adding more information to this file later...

## License File

Create and a plain text file in the root of your repository simply called `LICENSE` (no file suffix). [Choose an appropriate license](https://choosealicense.com/) and put the text in this file. Most Riverscapes models use the [GNU 3.0 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Documentation Web Sites

Each tool should have its own documentation web site that explains how the tool works as well as how to obtain, install and run the tool itself. We use Docusauras as the default for deloying these sites on the GitHub hosted repository (see the [Using Docusauras](https://docs.riverscapes.net/get-involved/documentation/using-docusaurus) for more information. Any peer-reviewed publications that vet the methods implemented in the tool or code should be cited and listed.
