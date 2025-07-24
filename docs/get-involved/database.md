---
title: Database Driven Tools
weight: 2
---

Post from [@philpbaileynar](https://github.com/orgs/Riverscapes/people/philipbaileynar) <i class="fa fa-github" aria-hidden="true"></i>


-----
# Background

<!-- TODO <a href="https://en.wikipedia.org/wiki/ArcInfo"><img class="float-right" src="https://lh3.googleusercontent.com/proxy/-Agz6WJMCR9kJs6jCoyxoox2l1FlT4WoZIc4-yKqG3-4MwRsF6zROA38B8y6g5M_GrfG8dEoC6QzuNfc092NTzJ-gxJrBzCRJUqXRGH1dQwZSQN1s6HJkCiiejGvl8VpsQ"> </a> -->
We are increasingly relying on databases in our [riverscapes tools](/tools). Remember that the "I" in GIS stands for information. So if you don't know how to use a database you can't really call yourself a GIS expert! Still not convinced? [ESRI's](http://esri.com) first product back in the 1970s was called [ArcInfo](https://en.wikipedia.org/wiki/ArcInfo). The "Arc" referred to geometry while the "Info" literally referred to a tabular database. Yet, most GIS users (including most Riverscape Scientists) don't regularlly use databases directly.  So not knowing databases means your skills are 40 years out of date!   Here's how you can turn it all around...

There are several popular brands of databases, some of which you might have heard of - [MySQL](https://www.mysql.com/), [Oracle](https://www.oracle.com/database/), [SQLite](https://www.sqlite.org/index.html), [Postgres](https://www.postgresql.org/), [SQLServer](https://www.microsoft.com/en-us/sql-server), [Access](https://www.microsoft.com/en-us/microsoft-365/access). They differ in lots of ways, but what they all share in common is that you interact with data using something called the [Structured Query Language](https://en.wikipedia.org/wiki/SQL) (SQL). Despite a few SQL nuances all the aforementioned database brands implement the same SQL standard for retrieving and managing data. The bottom line... **You need to learn the SQL language**. Here are some resources...

# Resources
## For Book Lovers
<!-- TODO <a href="https://www.oreilly.com/library/view/getting-started-with/9781491938607/"><img width="125" class="float-right" src="https://learning.oreilly.com/library/cover/9781491938607/250w/"></a>
- [Getting Started With SQL](https://www.oreilly.com/library/view/getting-started-with/9781491938607/) (I really like O'Reilly books) -->

## For Movie Lovers

### PostGIS

[Introduction to PostGIS](https://youtu.be/g4DgAVCmiDE) (a geospatial extension to postgres). 

<YouTubeEmbed videoId="g4DgAVCmiDE" />

### SQL
[Introduction to SQL](https://youtu.be/7S_tz1z_5bA) (this 3hr video course uses MySQL but I like Mosh, the presenter)
<div class="responsive-embed">

<iframe width="560" height="315" src="https://www.youtube.com/embed/7S_tz1z_5bA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## For Practical Types

- [Code Academy SQL Course](https://www.codecademy.com/catalog/language/sql)
- [Software Carpentry](https://swcarpentry.github.io/sql-novice-survey/)

## Software


The two types of open source database that we use are:

- [SQLite](https://sqlite.org/about.html) - useful when you just want to store data on your computer and use it yourself.
- [Postgres](https://www.postgresql.org/) - hosted on a server and accessible by multiple people. 

If you're just starting out then I recommend SQLite and the O'Reilly book above. Note that SQLite itself does not have a user interface. It's literally just a file format for storing data. You will need a piece of software to open and work with SQLite files. For this I recommend [DataGrip](https://www.jetbrains.com/datagrip/). It's free with a university email address.

## What about GIS?

Basic SQL is not geospatial. I recommend learning the SQL language before delving further into geospatial databases. But if you're keen then you should know that we are using the open source [geopackage](https://www.geopackage.org/) to store GIS data on desktop computers (no more ShapeFiles!) and the [PostGIS](https://postgis.net/) extension to serve GIS data from online servers.

Not convinced? As of November 2020 the outputs of the following tools are already geopackage SQLite databases:

- [VBET](http://vbet.riverscapes.net)
- [Confinement](http://confinement.riverscapes.net)
- [RVD](http://rcat.riverscapes.net)

We will soon migrate [BRAT](http://brat.riverscapes.net) to output a SQLite geopackage and stop using ShapeFiles. The new reach typing tool for the Mississippi, as well as [GNAT](http://gnat.riverscapes.net/) will also use databases. Our reporting technology also relies on SQLite.

-----------
# Summary
In summary... If you plan on working with riverscapes tools and data, it would be in your best interest to learn SQL.