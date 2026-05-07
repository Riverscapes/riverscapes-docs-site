---
title: Downloading Multiple Projects
description: How to download several Data Exchange projects at a time
---

A common need when using the [Data Exchange](https://data.riverscapes.net) is to be able to download multiple projects at a time. This might mean several projects of the same type ("I want all BRAT projects in Idaho") or it might mean gathering all the projects for a particular area ("Give me all the different themes of data for my project area").

The are several approaches available, depending on the technology you have available and your comfort level scripting an automated solution.

## Brute Force

Small numbers of projects can be downloaded by hand from the Data Exchange website itself (click on the download arrow available next to every project), the [QViewer downloader feature](https://viewer.riverscapes.net/software-help/help-qgis/qgis-downloader) or using the [Riverscapes Command Line Interface (rscli)](/products/rscli).

Obviously, this is only practical for small numbers of projects, but it shouldn't be overlooked as a transparent approach that requires minimal technical skill.

## Command Line

The [Riverscapes Command Line Interface (rscli)](/products/rscli) is excellent for downloading data exchange projects. It has several advantages over other approaches; It downloads the project files directly, avoiding the need to unzip a download file, and it also allows for limiting which files are downloaded using filter expressions.

rscli  download commands can be concatenated together into a batch file (on Windows, or shell script on MacOS or Linux) to download multiple projects.

The following example demonstrates this approach for three projects. Note the use of the `--no-input` option. Running this script will open a seaparate web browser tab to authenticate for each project, but it will not pause and wait for user input each time. Also note how each project is downloaded to its own folder named with the project unique identifier (GUID). Expanding this approach to hundreds of projects will open a lot of browser tabs, but it works.

See the section at the bottom of this page describing how to obtain these project GUID identifiers.

```sh
rscli download --no-input --id b313f426-87cd-4b78-886f-86a9ec8c02ca ./b313f426-87cd-4b78-886f-86a9ec8c02ca
rscli download --no-input --id e56612d8-9332-42eb-9f93-6b8f05467462 ./e56612d8-9332-42eb-9f93-6b8f05467462
rscli download --no-input --id 614ce6bf-5fd8-4b38-bdfd-37fcb63b7b9a ./614ce6bf-5fd8-4b38-bdfd-37fcb63b7b9a
etc etc
```

## Python Script

The Riverscapes consortium has Python scripts that demonstrate how to loop over multiple projects and download the individual files. This obviously requires some knowledge of scripting, but much of the work involves configuring a Python environment as the core scripts are already available.

The following script loops over a set of project GUIDs listed in a CSV text file and downloads all the files for each project. See the section at the bottom of this page describing how to obtain these project GUID identifiers.

[Multiple Project Download By CSV Python Script](https://github.com/Riverscapes/data-exchange-scripts/blob/main/scripts/scrapers/download_project_files_by_csv.py)

The best strategy for running this script involves forking the git repository and then using `uv` to create a Python venv to run the code in [Visual Studio Code](https://code.visualstudio.com/).

## Reports

The [Riverscapes Reports](https://reports.riverscapes.net) platform lets you specify an AOI and download key metrics from the riverscapes network models that have been run for 99% of the conterminous United States (CONUS). You can draw the AOI, upload a polygon or pick from one of the existing boundary layers.

The IGO scrape report provides riverscape centroid points together with a [rich suite of metrics](https://tools.riverscapes.net/rme/data#output-attributes) from the [Riverscapes Metric Engine (RME)](https://tools.riverscapes.net/rme/). 

This approach of course presumes that the information your are interested in already exists in RME and that you want the only latest model run for each CONUS watershed.

## Custom Merged Project

The Riverscapes Consortium developers can run a custom project union to merge the geospatial data for multiple projects and package into a single project. This is only possible for individual riverscape project types (e.g. RS Context, VBET, RCAT) and is only really practical for less than 100 projects.

Contact support@riverscapes.freshdesk.com if this is something that you are interested in.