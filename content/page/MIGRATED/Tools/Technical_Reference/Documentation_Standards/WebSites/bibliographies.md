---
title: Automated Bibliographies
---

These instructions describe how to automate a bibliography within your website using the free [Zotero](https://www.zotero.org) bibliographic software. It is possible to maintain a private or shared library within Zotero and then use the Python script on this page to export the citations to a text file for inclusion in your web site.

Riverscapes web sites are written as palin text markdown files, stored in git repositories and served over the internet using GitHub Pages. The script described in the following instructions will output a single, formatted markdown page containing all the citations for a single Zotero library. You can include this markdown page in your web site and GitHub Pages will generate the corresponding web page. Here's our [beaver restoration example](http://brat.riverscapes.net/references.html) that was generated using this script.

## Step 1 - Prereqisites

You will need a [Zotero](https://www.zotero.org) account with access to a library containing citations. You will also need [Python](https://www.python.org/) with [PIP](https://pypi.org/project/pip/) installed.

## Step 2 - Zotero Configuration

Login to your Zotero account online and click on the library that you want to include in your web site. It's a good idea to create a dedicated library for each citation listing that you want to generate.

Note down the numeric portion of the library URL:

![url]({{site.baseurl}}/assets/images/zotero/url_slug.png)

 Navigate to your Zotero account settings page (using the down arrow beside your account name). Switch to the `Feeds/API` tab and create a new API key. Keep this key private and somewhere safe, such as in a password manager. You are going to need it later in this process when you run the Python script. Be sure never to commit this key to git or somewhere that it could end up online.

![settings]({{site.baseurl}}/assets/images/zotero/settings.png)

## Step 3 - Create Script Workspace

You will need a folder where you can save and run a Python script. This should **not** be inside your web site folder structure. Download and save the following Python script into this folder.

<script src="https://gist.github.com/philipbaileynar/304397c0aa36d414cee5bb899dc374f7.js"></script>

## Step 3 Install Script Prerequisites

Ensure that you have the [pyzotero](https://github.com/urschrei/pyzotero) Python library installed, by simply typing the following at the command line:

`pip install pyzotero`

Be sure to install pyzotero in the correct Python environment if you have more than one, or are using a [Python virtual environment](https://docs.python.org/3/tutorial/venv.html).

## Run the Python Script

Open a command prompt and navigate to the folder where you saved the Python script earlier in this process. Type the following command:

`python zotero.py LIBRARY_ID group|user YOUR_API_KEY BIBLIOGRAPHY_PATH`

The LIBRARY_ID should be the numeric part of the zotero library URL noted down above. The next argument depends on whether your library is a personal **user** library or a **group** library shared among several people. Remove the one you aren't using. YOUR_API_KEY is the API key from the earlier step. And finally the BIBLIOGRAPHY_PATH is the location where you want the output bibliography to be generated.

Note that the script generates an entirely new markdown file each time that it is run. It will **overwrite the existing file** if one exists. If you don't want this behaviour then edit the script to append the bibliography to the existing output markdown file. 

Type return to run the script. Review the markdown output before publishing. If you're publishing to a GitHub Pages web site (i.e. any riverscapes web site) then it's strongly recommended that you test your bibliography by [serving Jekyll locally]({{site.baseurl}}/Tools/Technical_Reference/Documentation_Standards/WebSites/testing_locally.html) before committing and pushing the output markdown file.

You can tweak the output markdown as necessary. Just remember that each time you run the script it will overwrite your changes with the new markdown. This is especially important if you write any introductory text at the top of the file. Copy and paste it to a temporary location as a backup while you iterate running the script.

## Script


## Video Demonstration

<div class="responsive-embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/K-GBbzYSERo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


