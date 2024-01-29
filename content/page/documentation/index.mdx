---
title: Documentation
description: How to build and document a Riverscapes asset
banner: true
---

The Riverscapes Consortium produces documentation for our tools and standards using websites like this one. These websites are written in [React](https://reactjs.org) using a plugin called [Gatsby](https://www.gatsbyjs.org/). This page is a guide for how to build and document a Riverscapes website using this technology.

# An Introduction to Gatsby

Gatsby is a static site generator  that converts files written in [Markdown](https://www.markdownguide.org/) into a website. Gatsby is built on top of [React](https://reactjs.org/), a popular JavaScript library for building user interfaces. To build one of these websites you only need to be familiar with Markdown, React is optional. You write content in Markdown, push the changes to GitHub and the website is automatically built and published.

## Hosting

The Riverscapes Consortium hosts our software code and documentation websites on [GitHub](https://github.com/Riverscapes). We use GitHub [Actions](https://github.com/features/actions) to automate the publishing of our Gatsby websites when we push the markdown to GitHub.

## The Riverscapes Gatsby Theme

We have published a [Riverscapes theme for Gatsby](https://github.com/Riverscapes/riverscapes-gatsby-theme) that can be consumed by consortium members for their documentation needs. This theme applies a consistent look and feel to all Riverscapes websites. 

See the the instructions below for how to use this theme. Also see the [demo page](./demo) for examples and instructions on how to use the Gatsby theme, what markdown elements to use and how to reference images etc.

## Theming a New Riverscapes Gatsby Site

The following assumes that you want to host a Riverscapes documentation webiste inside a GitHub repository that already contains code for a Riverscapes tool, model or app. You do this by placing the Gatsby site within a folder called `docs` in the root of the repository. (As opposed to hosting a riverscapes themed site in an empty repository where the website is the only asset and there's no other code.)

# Writing and Running Gatsby Web Sites

We use [GitHub Code Spaces](https://youtu.be/sYJ3CHtT6WM?si=tVfWlx1JzpH5Airg) to write and run our Gatsby documentation websites. This is a cloud-based development environment that is hosted by GitHub. It allows you to write and run code in a web browser without having to install any software on your local machine. This is a great way to get started with Gatsby because it eliminates the need to install NodeJS and Yarn on your local machine.

1. In a browser, navigate to the repository containing the Gatsby site. (See Creating a Gatsby site below if your site does not exist yet.)
1. Click on down arrow beside the green "Code" button and select the "Code Spaces" tab.
1. Click the elippses and choose **New With Options...**.
1. For the branch pick `docs` and this should reveal a new dropdown allowing you to pick the type of Code Space.
1. Select the "Gatsby Docs Dev Container" (naming might vary slightly).
1. Leave the region as `US West`.
1. Leve the machine type as `2-core`.
1. Click Create Code Space.
1. Click the button to open the code space in Visual Studio Code.

The code space will take a few minutes to build and then connect. Once it's running, make sure to open the Documentation Workspace. This will cause Visual Studio Code to briefly close and then reopen with the correct workspace settings.

The final step in the connection process will start the Gatsby server and open a Preview browser window. This is the live site running on your local machine. 

You can make changes to markdown files (*.mdx), save the files and then choose the "Rebuild Gatsby Site" script from the debug menu. Once the build has finished, you can refresh the Preview browser window to see your changes.

The preview browser is extremely limited. It's recommended to open a browser on your local computer and view the Gatsby site that way. The easiest way to do this is to click the link in the terminal window that says "Local: http://localhost:8000". This will open a new tab in your default browser and you can see the site there.

This entire workflow is demonstrated here.

<Youtube  embedId="CxTdXBK3Tuk" caption="Code Space Demo"/>

## Publishing the Gatsby Site

Publishing a Gatsby site is as simple as pushing the markdown files to GitHub. The GitHub actions will handle the rest. This is a great way to publish a website because it's easy and it's free. The only downside is that it takes a few minutes for the site to build and deploy.

1. Save all your changes.
1. Run the site locally to verify that it builds correctly (see previous section).
1. Commit all your markdown changes to the `docs` branch.
1. Push the `docs` branch to GitHub.
1. Wait 3-5 minutes for it to build and deploy. You can monitor the progress of the build by visiting the Actions tab of your repository in GitHub.

## Upgrading the Gatsby Theme

These steps include making a git commit. It is recommended that you isolate the theme upgrade into a dedicated commit without any other content changes. Use a meaningful commit message like "Upgrading Gatsby theme". This is to help with troubleshooting if something goes wrong.

1. Follow the steps above to open a code space and run the site locally.
1. Switch to the Debug tab in Visual Studio Code.
1. Pick "Upgrade Gatsby Theme" from the drop down list of scripts.
1. click the green play button to run the script.
1. It's a good idea to run the site locally to verify that the upgrade has worked correctly and that there are no negative side effects.
1. Commit your changes and push them to GitHub. The GitHub actions will handle the publishing of the site. Wait 3-5 minutes and then check the live site.

# Creating a New Gatsby site

The following workflow describes how to add a Riverscapes Gatsby site to an existing GitHub repository that already has some code associated with a model, tool, app etc. This is the recommended way to host a Riverscapes documentation website.

1. Create a new folder at the root of your repository called `docs`.
1. Copy everything from the following location into your docs folder. Be sure to get everything including the hidden files (that start with a dot).
[https://github.com/Riverscapes/riverscapes-gatsby-theme/tree/main/sites/template](https://github.com/Riverscapes/riverscapes-gatsby-theme/tree/main/sites/template)
1. Open the Docs.code-workspace in the new location.
    - You may need to open the workspace file and adjust the paths inside it if you move it to a different location.
    - For those of us with nvm installed (typically non-windows users) This should put your terminal in the right place so that the .nvmrc file registers and the correct version of node is installed.
1. Open `gatsby-config.ts` and change all the TODO items:
    - `pathPrefix`: If this site is going to live at a subpath like https://example.com/sub-site, then change this to /sub-site NOTE: Case matters
    - `start_url`: Should match the pathPrefix if you have one
1. Open a terminal and make sure you are in the ./docs folder with the correct version of Nodejs
1. Run `yarn install` inside the ./docs folder to install all the dependencies
1. Run `yarn start` inside the ./docs folder to start the dev server and develop locally.
1. Now move the 2 yml files from the folder `.github/workflows` into the root of your .git repo. (These files are the instructions to publish the site when the docs branched is pushed to GitHub)/
1. At this point push the `docs` branch to GitHub.
1. Go to the repository settings tab in GitHub and enable Github Pages

Follow the steps in the next section to run the site locally and then push it to GitHub to publish it.

# Migrating a Jekyll site to Gatsby

The following assumes that you have an existing GitHub repository with a `docs` folder that is being used to host your Jekyll site. 

1. Clone the repository to your local machine.
2. In git, make sure that you are currently at the head of the branch that is being used to publish the Jekyll site. This is typically caled `docs` and can be verified using the repository settings page.
1. Create a new temporary branch for the Gatsby migration. Call it `gatsby-docs`.
1. Delete the file called `Gemfile`.
1. Delete the file called `.gitignore`.
1. Delete the file called `_config.yml`.
1. Create a new folder inside the `docs` folder called `OLD_JEKYLL`.
1. Move all remaining files into a temporary `docs/OLD_JEKYLL` folder so that Gatsby will ignore them for now. We do this because Jekyll allows you to use files in any location and it can be confusing to have them in the same folder as the new Gatsby files. We want to move them out of the way for now and then bring them back one-by-one as we fix them.
Change file extension from *.md to *.mdx
1. One-by-one move each existing markdown files from the `docs/OLD_JEKYLL` folder into the `content/page` folder. It is recommended to make small git commits as you go so it's easier to see what changed and what broke the build. NEVER COMMIT ANYTHING BROKEN
    1. Fix the frontmatter (see below).
    1. Fix the markdown content by visiting the local page in the browser and looking for errors on the screen and in the console (common problems are listed below).
    1. Move any images the page depends on from the assets/images folder to the static/images folder.
1. With the markdown file in the correct location and the content fixed, you can now move the images from the `docs/OLD_JEKYLL` folder into the `static/images` folder.
1. Once you have a site that runs locally (see above) you can commit your changes and push them to GitHub. The GitHub actions will handle the publishing of the site. Wait 3-5 minutes and then check the live site (see above).

The goal is to slowly migrate all the old content to Gatsby *.mdx files and eventually delete the `docs/OLD_JEKYLL` folder. You can do this in small steps and commit your changes as you go. This will make it easier to see what changed and what broke the build.

# Jekyll vs Gatsby

In the past we used a different software tool called [Jekyll](https://jekyllrb.com/) to build our documentation websites. Jekyll is also a static site generator like Gatsby. The two softwares are very similar in that they both convert markdown files into a website. However, Jekyll is written in Ruby and Gatsby is written in JavaScript. Jekyll is older and more mature but Gatsby is more modern and has a larger community of developers. We have decided to move to Gatsby because it is more flexible and easier to customize.

The biggest difference is that in Gatsby you write files with the extension `*.mdx` instead of just `*.md`. The `x` stands for `jsx` which is a file extension used by React. This means that you can use React components inside your markdown files. This is a powerful feature that allows you to do things like embed interactive maps and charts inside your documentation.

# Advanced

The documentation above is the recommended approach for developing and running Gatsby documentation sites. It uses remote virtual machines running in the cloud.

However, should you need to run Gatsby locally on your own machine, the following instructions are provided.

### Install NodeJS

Visit the [NodeJS website](https://nodejs.org/en/) and install the latest LTS version of NodeJS. This is required to run Gatsby. You can accept the default settings during the installation process and you do not need to install any optional components (e.g. Chocolatey).

Check the version of NodeJS that you have installed by opening a terminal and running the following command. You need to have at least version 16.

```bash
node --version
```

### Install Yarn  

At the terminal run the following command to install Yarn.

```bash
npm install --global yarn
```

## Running Gatsby Locally

This assumes that you have installed NodeJS and Yarn as described above.

1. Open a terminal and make sure you are in the `./docs` folder with the correct version of Nodejs (see above).
1. Run `yarn start` to start the dev server and develop locally.
1. Open a browser (if one doesn't pop-up automatically) and visit http://localhost:8000 to see the site.

Note that you can make changes to markdown files (*.mdx), save the files and the site will automatically rebuild and refresh in the browser. This is called "hot reloading" and it's a great way to develop a site.

However, any changes to the `gatsby-config.ts` file will require you to stop the dev server and restart it. This is because the `gatsby-config.ts` file is only read once when the server starts.