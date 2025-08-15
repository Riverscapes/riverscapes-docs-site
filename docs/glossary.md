---
title: Glossary
description: glossary of terms used in Riverscapes documentation
sidebar_position: 6
---

## EPSG

A catalog of coordinate reference systems. Providing an EPSG number is a shortcut for the specification of the coordinate system. For example `EPSG:4326` corresponds to WGS 84, the World Geodetic System 1984 used in GPS. See [epsg.io](https://epsg.io/) to discover coordinate systems worldwide.

## HUC - Hydrologic Unit Code

In the United States, watersheds are delineated by USGS using a nationwide, hierarchical system. Each hydrologic unit is assigned a 2-digit to 12-digit number that uniquely identifies the respective region, subregion, basin, sub-basin, watershed or subwatershed, as shown below. Learn more at [Hydrologic Unit Codes (HUCs) Explained](https://nas.er.usgs.gov/hucs.aspx).

![Hydrologic Unit Structure illustrated](/img/glossary/WBD_Base_HUStructure_small.png)

The Riverscapes Data Exchange treats the HUC identifier as a special attribute of projects for ease of searching and identifying projects using this code. For this reason Riverscapes projects outside the USA may wish to use this field as a unique identifier.

## rscli

The command-line interface for the Data Exchange. See [rscli documentation](/products/data-exchange/rscli).
