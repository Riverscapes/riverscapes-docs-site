---
title: Testing Sites Locally
---

It's always a good idea to verify changes locally before pushing them to GitHub. This avoids potentially breaking a site, or having to a push simply to visualize your work (only to realize a minor typo and then stage-commit-push a second time). To do this you need to run Jekyll locally on your computer and then point your browser at your localhost. Unfortunately Jekyll is coded in Ruby which can be tricky to install on Windows. Follow these one-time set-up instructions then at the bottom, the new command for running a Jekyll site from your computer:

* [Windows](#windows)
* [Mac OSX](#osx)

## Windows

### 1. Check if Ruby is installed

1. [Open a DOS command Window](https://www.isunshare.com/windows-10/4-ways-to-open-command-prompt-in-windows-10.html) (press the Windows key and then type `cmd` and hit enter)
1. Type the command `ruby --version` to check if you have Ruby installed and which version you might be running.
1. If you get "command not found" because Ruby is not installed then proceed to the next section. 
1. We need a Ruby version that's equal to or newer than 2.1.0 so reinstall Ruby if you have an older version.

### 2. Install Ruby (if necessary)

1. Download the [Ruby installer](https://rubyinstaller.org/downloads). You want: Ruby+devkit 2.6.4 (exact number doesn't matter. Just choose the greatest Ruby+Devkit version)
1. Run the installer and choose all the default choices.
1. When the command line choice comes up choose **Base installation**

```
   1 - MSYS2 base installation        <------ choose this one: (1)
   2 - MSYS2 system update (optional)
   3 - MSYS2 and MINGW development toolchain
```
At the second prompt just hit ENTER to get out.

Now go back to **Step 1: Check Version of Ruby**. There's no point in proceeding if you're running an old version or the installation failed.

### 3. Install Bundler

Back at the DOS command window, type the following command:

```
gem install bundler
```

### 4. Site-level (Do this for every site you want to serve locally)

1. Open a DOS command window in the `/docs` folder of the site you want to serve.
1. Run the following command to install all the necessary components needed for the current site:

```
bundle install
```

### 5. Serving a site locally

With the one-time steps above complete, you're good to go. You shouldn't have to run bundler install again and can just run the following command every time you want to serve a site:

```
bundle exec jekyll serve
```


You should see something like this:

```
Configuration file: /Path/To/my-website/_config.yml
            Source: /Path/To/my-website
       Destination: /Path/To/my-website/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
      Remote Theme: Using theme riverscapes/riverscapes-jekyll-theme
                    done in 13.892 seconds.
 Auto-regeneration: enabled for '/Path/To/my-website'
    Server address: http://127.0.0.1:4001
  Server running... press ctrl-c to stop.
```

Note that this is telling you to navigate to `http://127.0.0.1:4001` in your browser in order to see the site. 

#### Some finer points

* This service will rebuild the site every time you save a markdown `.md` file. You must **refresh your browser** to see the changes.
* `Ctrl-c` to exit the process.
* If you change the `_config.yml` file you will need to exit the process and restart.

---------------------------

## OSX

Mac OS comes with ruby pre-install so you should be able to jump ahead and install `bundler` directly.

Start at step #3 in the Windows installation instructions above. All the steps are the same from there.

### Advanced

If you've somehow changed your OSX ruby installation or you wish to use your own version you can [install Homebrew](https://brew.sh/) to get things working.