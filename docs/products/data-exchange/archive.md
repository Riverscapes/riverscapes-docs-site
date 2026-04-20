---
title: Archive Projects
---

Archiving moves projects into lower-cost storage. Essential project data is always retained, but some features are turned off to reduce cost. Archived projects can be restored to regular accessibility, but this recovery process can take up to 48 hrs to complete.

## Project Data

In Data Exchange, each project usually has four types of files:

- Main project files, like geospatial data, databases, and spreadsheets
- Project metadata, such as description, map boundary, and permissions
- Web map tiles used to show the project on maps
- A ZIP file used when someone downloads the project

![archive](/img/products/data-exchange/non-archived-projects.excalidraw.svg)

## Archived Projects

When a project is archived, two things happen: 1) The main project files are moved to deep storage. This costs less, but takes longer to access, and 2) Web map tiles and the downloadable ZIP file are removed. Project metadata stays available, so the project can still be found in Data Exchange. Because tiles and the ZIP are removed, archived projects cannot be viewed on web maps or downloaded.

![archive](/img/products/data-exchange/archived-projects.excalidraw.svg)

## Restoring Projects

Unarchiving reverses the process. The main project files are moved back to accessible storage. Web map tiles are rebuilt (the ZIP file is rebuilt only when someone requests a download).

## Technical Details