---
title: Glossary
description: glossary of terms used in Riverscapes documentation
sidebar_position: 6
---

## Anthropogenic Context

A [Riverscapes-compliant](#riverscapes-compliant) network model that combines geospatial datasets of anthropogenic features — roads, railroads, and canals — with land cover classification, hydrography, and the riverscape extent ([valley bottom](#vbet---valley-bottom-extraction-tool)) to provide a comprehensive view of potential human impacts on riverscapes. The tool identifies areas where human infrastructure may be constraining aquatic and riparian ecosystems, as well as areas where restoration and conservation efforts may be most effective. Outputs from Anthropogenic Context feed directly into the [BRAT](#brat---beaver-restoration-assessment-tool) and [RCAT](#rcat---riparian-condition-assessment-tool) models. See [Anthropogenic Context documentation](https://tools.riverscapes.net/anthro/).

## BRAT - Beaver Restoration Assessment Tool

A [Riverscapes-compliant](#riverscapes-compliant) planning tool designed to help researchers, restoration practitioners, and resource managers assess the potential for beaver to serve as agents of stream conservation and restoration across large regions and watersheds. At its core, BRAT uses a capacity model to estimate the upper limit of dam density (dams per kilometer) for individual stream reaches throughout a drainage network. By combining capacity estimates with proximity to human infrastructure, BRAT identifies opportunities, risks, and constraints for beaver reintroduction and dam-based restoration. See [BRAT documentation](https://tools.riverscapes.net/brat/).

## Business Logic

An XML file that tells a [Riverscapes Viewer](#riverscapes-viewer) how to display a specific project type. Business Logic defines the hierarchical layer tree presented to users, which layers appear in which [Project Views](#project-views), and how symbology (colors, line weights, category breaks) is applied. There is one Business Logic file per project type; it lives in the open-source [RiverscapesXML repository](https://github.com/Riverscapes/RiverscapesXML). Because symbology is defined once and shared centrally, every user who opens the same project type sees identical, purpose-built cartography — regardless of whether they are using the Web, QGIS, or ArcGIS Viewer.

## CLI - Command Line Interface

A text-based interface for interacting with software by typing commands into a terminal rather than using a graphical application. Several Riverscapes tools — including [rscli](#rscli) — are CLI applications. See also the [CLI definition on Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface).

## Channel Area

A [Riverscapes-compliant](#riverscapes-compliant) network model that generates polygons representing the spatial extent of a watershed's drainage network, providing a more realistic depiction of stream and river channels than simple polyline networks. It combines buffered flow lines — scaled by upstream contributing drainage area using regional channel-width relationships — with existing waterbody polygons to produce a first-order approximation of the active channel area. Channel Area outputs are a key input to the [VBET](#vbet---valley-bottom-extraction-tool) and [TauDEM](#taudem) tools. See [Channel Area documentation](https://tools.riverscapes.net/channelarea/).

## CONUS

An abbreviation for the **Conterminous United States** (also called the continental United States) — the 48 states that share land borders, excluding Alaska and Hawaii. Used throughout Riverscapes documentation to describe the geographic scope of national model runs, such as the [2025 CONUS Run](/initiatives/2025-CONUS-runs) which produced model outputs for approximately 15,000 HUC10 watersheds across CONUS.

## Confinement Tool

A [Riverscapes-compliant](#riverscapes-compliant) network model that quantifies the degree to which river reaches are laterally confined by their valley margins. For each reach the tool outputs left and right confined margins and a constriction ratio — the proportion of the active channel bounded by hillslopes or terraces rather than accessible floodplain. Confinement is an important geomorphic context variable for understanding stream sensitivity, sediment dynamics, and restoration potential. See [Confinement Tool documentation](https://tools.riverscapes.net/confinement/).

## Cybercastor

The Riverscapes Consortium's cloud-based batch processing engine for running geospatial models at scale. Cybercastor pulls input projects from the [Data Exchange](https://data.riverscapes.net), executes models in parallel across hundreds of watersheds simultaneously, and automatically deposits the resulting [Riverscapes Projects](#riverscapes-project) back to the Data Exchange complete with provenance metadata. It has been used to produce over 115,000 projects covering virtually every [HUC10](#huc10) watershed in [CONUS](#conus). See [Cybercastor documentation](/products/cybercastor).

## Dark Knowledge

A term (*sensu* [Jeschke et al. 2019](https://dx.doi.org/10.1139/facets-2019-0007)) referring to scientific knowledge that exists but is effectively inaccessible — trapped in unpublished reports, proprietary formats, poorly documented datasets, or institutional silos. One of the motivating problems behind the Riverscapes data standards and [Data Exchange](https://data.riverscapes.net) is reducing dark knowledge by making riverscapes data findable, accessible, and reusable. See also [FAIR Principles](#fair-principles).

## DEM - Digital Elevation Model

A raster dataset representing the elevation of the Earth's surface at a regular grid of points. DEMs are a fundamental input to nearly all Riverscapes network models, providing the topographic information needed to derive flow direction, slope, drainage area, channel geometry, and valley bottom extent. Common sources include the USGS 3DEP (10 m and 1 m resolution) and LiDAR-derived products. The preferred file format for DEMs in Riverscapes projects is [GeoTIFF](#geotiff).

## EPSG

A catalog of coordinate reference systems maintained by the International Association of Oil & Gas Producers. Providing an EPSG number is a shortcut for the full specification of a coordinate system. For example `EPSG:4326` corresponds to [WGS84](#wgs84), the World Geodetic System 1984 used in GPS. See [epsg.io](https://epsg.io/) to discover coordinate systems worldwide.

## FAIR Principles

A set of guiding principles for scientific data management first published by [Wilkinson et al. (2016)](http://dx.doi.org/10.1038/sdata.2016.18). The acronym stands for:

- **F**indable — data can be discovered by humans and machines via rich metadata and persistent identifiers
- **A**ccessible — data can be retrieved using open, standard protocols
- **I**nteroperable — data uses broadly adopted formats and vocabularies so it can be combined with other datasets
- **R**eusable — data is well-described enough that others can understand, reproduce, and build upon it

The Riverscapes [data standards](/standards), [project format](#riverscapes-project), and [Data Exchange](https://data.riverscapes.net) are all designed to help researchers and practitioners achieve FAIR (or at minimum FAR) compliance for their riverscapes data.

## GeoPackage

An open, non-proprietary file format for geospatial vector and raster data, standardized by the [Open Geospatial Consortium (OGC)](https://www.geopackage.org/). A GeoPackage file uses the `.gpkg` extension and is a self-contained SQLite database that can hold multiple layers of different geometry types (points, lines, polygons) as well as attribute tables and raster tiles. The Riverscapes Consortium recommends GeoPackages over Shapefiles for [many reasons](http://switchfromshapefile.org/), including the absence of field-name length limits, support for multiple layers in a single file, and full Unicode support. All Riverscapes network model outputs use GeoPackages for vector data.

## GeoTIFF

An open raster file format (`.tif` or `.tiff`) that embeds geographic metadata — coordinate reference system, spatial extent, and pixel resolution — directly inside a standard TIFF image file. GeoTIFF is the recommended raster format for [Riverscapes Projects](#riverscapes-project) because it is widely supported, non-proprietary, and self-describing. Cloud-Optimized GeoTIFF (COG) is a variant optimized for streaming over HTTP and is used for tile-based delivery in the [Riverscapes Viewer](#riverscapes-viewer).

## GraphQL

A query language and runtime for APIs, developed by Facebook and now maintained as an open standard. Unlike REST APIs, GraphQL lets clients specify exactly which fields they need, avoiding over-fetching data. The [Riverscapes Data Exchange](https://data.riverscapes.net) exposes a GraphQL API that allows programmatic searching, filtering, and downloading of projects. The API is used internally by [Cybercastor](#cybercastor), [rscli](#rscli), and [pydex](#pydex), and can also be queried directly from any language. See [Data Exchange API documentation](/products/data-exchange/advanced/data-exchange-api).

## GUID / UUID

A **Globally Unique Identifier** (GUID) — also called a Universally Unique Identifier (UUID) — is a 128-bit identifier formatted as a string of 32 hexadecimal digits separated by hyphens, e.g. `241cdf2a-a397-4fd7-acd2-de0869ed4662`. In Riverscapes projects, GUIDs are assigned to every file node (rasters, vectors, GeoPackages) and every [Realization](#realization) in the `project.rs.xml` file. A GUID must be changed any time the underlying file is modified, enabling provenance tracking and change detection. When a dataset is referenced from another project, the GUID must match the original. See [GUID guidelines](/standards/Project/guids).

## HUC - Hydrologic Unit Code

In the United States, watersheds are delineated by USGS using a nationwide, hierarchical system. Each hydrologic unit is assigned a 2-digit to 12-digit number that uniquely identifies the respective region, subregion, basin, sub-basin, watershed or subwatershed, as shown below. Learn more at [Hydrologic Unit Codes (HUCs) Explained](https://nas.er.usgs.gov/hucs.aspx).

![Hydrologic Unit Structure illustrated](/img/glossary/WBD_Base_HUStructure_small.png)

The Riverscapes Data Exchange treats the HUC identifier as a special attribute of projects for ease of searching and identifying projects using this code. For this reason Riverscapes projects outside the USA may wish to use this field as a unique identifier. See also [WBD](#wbd---watershed-boundary-dataset) and [HUC10](#huc10).

## HUC10

A specific level in the [HUC](#huc---hydrologic-unit-code) hierarchy identified by a 10-digit code, corresponding to a **watershed** — the smallest standard unit in the national hydrologic framework that drains to a single outlet point. HUC10 watersheds are the primary unit of analysis for Riverscapes national model runs; the [2025 CONUS run](/initiatives/2025-CONUS-runs) produced outputs for approximately 15,000 HUC10 watersheds. A typical HUC10 watershed covers 250–1,000 km² and contains tens to hundreds of kilometres of mapped stream network.

## Hydrologic Context

A [Riverscapes-compliant](#riverscapes-compliant) network model that uses regional regression curves to calculate low and typical flood discharges and associated stream power for each reach of a river network. These hydrologic estimates provide a consistent, nationally scalable picture of flow regime and hydraulic energy that informs other Riverscapes models and helps managers contextualize restoration potential and geomorphic sensitivity. See [Hydrologic Context documentation](https://tools.riverscapes.net/hydro/).

## project.rs.xml

The plain-text XML metadata manifest at the root of every [Riverscapes Project](#riverscapes-project). This file is the "magic sauce" of the Riverscapes data standard — it describes the project type, all input and output data files, their relationships, and provenance metadata. It must validate against the [Riverscapes XSD](#xsd---xml-schema-definition), and its presence is what makes a folder of data recognizable to the [Data Exchange](https://data.riverscapes.net), [Riverscapes Viewers](#riverscapes-viewer), and [Cybercastor](#cybercastor). The file can be authored by hand, generated programmatically with the [rsxml](#rsxml) Python package, or managed via [rscli](#rscli). See [project XML documentation](/standards/Project/projectxml).

## Project Views

Named, curated sets of layers within a [Riverscapes Viewer](#riverscapes-viewer) that are pre-configured to highlight a specific aspect of a project. For example, a BRAT project might have a "Dam Building Capacity" view and a "Conservation Restoration" view, each loading a different subset of layers with appropriate symbology. Project Views are defined in the [Business Logic](#business-logic) file for each project type and appear in the Viewer's layer panel.

## pydex

The official Python client library for the [Riverscapes Data Exchange](https://data.riverscapes.net) API. `pydex` handles authentication, [GraphQL](#graphql) query pagination, and incremental file downloads, making it straightforward to search across thousands of projects, filter by geography or metadata, and integrate riverscapes data into analysis pipelines. It is the recommended approach for bulk downloads or automated data workflows. See [Python API documentation](/products/data-exchange/advanced/python-api).

## RCAT - Riparian Condition Assessment Tool

A [Riverscapes-compliant](#riverscapes-compliant) network model that provides an estimate of overall riparian condition based on three lines of evidence: (1) land use intensity within the riverscape (from [Anthropogenic Context](#anthropogenic-context)), (2) riparian vegetation departure from historic conditions, and (3) floodplain accessibility. These three inputs are combined in a fuzzy inference system to produce a single output index from 0 (very poor condition) to 1 (intact condition). See [RCAT documentation](https://tools.riverscapes.net/rcat/).

## Realization

A single "run" of a tool or analysis within a [Riverscapes Project](#riverscapes-project). The `project.rs.xml` file can contain multiple realizations, each representing a different execution of the tool with potentially different parameters, input data, or software versions. Every realization records its own inputs, outputs, parameters, software version, creation date, and [GUID](#guid--uuid). One realization can be tagged as `Promoted="true"` to indicate it is the accepted or QA-approved result. See [Realizations documentation](/standards/Project/realizations).

## Riverscapes-Compliant

A label applied to tools and datasets that meet the [Riverscapes Consortium standards](/standards). For a **tool**, compliance means the tool is open source, documented, produces outputs packaged as [Riverscapes Projects](#riverscapes-project), and has been assigned a [Tool Grade](#tool-grade) by the Riverscapes Technical Committee. For a **project or dataset**, compliance means it includes a valid [`project.rs.xml`](#projectrsxml) that validates against the [XSD](#xsd---xml-schema-definition), uses open non-proprietary data formats, and includes sufficient metadata for others to understand and reuse the data.

## Riverscapes Context

A [Riverscapes-compliant](#riverscapes-compliant) network model and the first step in the Riverscapes tools waterfall. Riverscapes Context gathers key nationally available datasets — NHD+HR hydrography, 10 m [DEM](#dem---digital-elevation-model), land ownership, land cover, and more — clips and processes them to a given [HUC](#huc---hydrologic-unit-code) watershed boundary, and organizes them into a single [Riverscapes Project](#riverscapes-project). All other Riverscapes network models depend on a Riverscapes Context project as their starting point. Pre-built Context projects covering all [CONUS](#conus) [HUC10](#huc10) watersheds are available on the [Data Exchange](https://data.riverscapes.net). See [Riverscapes Context documentation](https://tools.riverscapes.net/rscontext/).

## RME - Riverscapes Metric Engine

A [Riverscapes-compliant](#riverscapes-compliant) network model that synthesizes outputs from all other production-grade tools in the Riverscapes waterfall into a single, comprehensive dataset for assessing riverscape health. Metrics are attached to Discrete Geographic Object (DGO) polygons and Integrated Geographic Object (IGO) points produced by [VBET](#vbet---valley-bottom-extraction-tool): metrics with a "dgo" prefix summarize a single DGO, while metrics with an "igo" prefix aggregate values over a moving window of adjacent DGOs. RME outputs are the primary data layer used in the [Riverscapes Viewer](#riverscapes-viewer) for planning and prioritization. See [RME documentation](https://tools.riverscapes.net/rme/).

## Riverscapes Project

The fundamental data packaging unit in the Riverscapes ecosystem. A Riverscapes Project is a structured folder of data files (GeoPackages, rasters, reports, CSVs, etc.) accompanied by a [`project.rs.xml`](#projectrsxml) metadata manifest at the root. The manifest describes the project type, lists all files and their roles (input, intermediate, output), records provenance and parameters, and defines the spatial extent. Because every project follows this structure, the [Data Exchange](https://data.riverscapes.net), [Riverscapes Viewers](#riverscapes-viewer), and [Cybercastor](#cybercastor) can all automatically discover, display, and process any compliant project. See [Riverscapes Projects documentation](/standards/Project).

## Riverscapes Viewer

A family of free applications — available for the web browser, QGIS, and ArcGIS Pro — for opening and exploring [Riverscapes Projects](#riverscapes-project). The Viewer reads the [`project.rs.xml`](#projectrsxml) manifest and [Business Logic](#business-logic) files to automatically organize layers into a meaningful project tree and apply curated symbology, without any manual configuration. The **Web Viewer** is embedded directly in every project page on the [Data Exchange](https://data.riverscapes.net); the **QGIS Viewer** additionally supports uploading and downloading projects. See [Riverscapes Viewer documentation](/products/riverscapes-viewer) and [viewer.riverscapes.net](https://viewer.riverscapes.net).

## rscli

The command-line interface for the [Riverscapes Data Exchange](https://data.riverscapes.net). `rscli` is used to upload and download projects from the terminal, handling authentication, XML validation, file-by-file transfer, and progress reporting. It supports regex-based file filtering for selective downloads and is the simplest programmatic entry point for interacting with the Data Exchange without writing code. See [rscli documentation](/products/rscli).

## rsxml

A Python package (`pip install rsxml`) that provides typed Python classes for generating valid, schema-compliant [`project.rs.xml`](#projectrsxml) files programmatically. Rather than writing XML by hand — which is error-prone — tool developers use `rsxml` to construct `Project`, `Realization`, `Dataset`, `Geopackage`, and `MetaData` objects and call `project.write()` to produce the manifest. The package also includes shared logging utilities used across the Riverscapes tools ecosystem. See [rsxml documentation](/products/rsxml).

## TauDEM

A [Riverscapes-compliant](#riverscapes-compliant) wrapper around the Terrain Analysis Using Digital Elevation Models suite originally developed by David Tarboton at Utah State University's Hydrology Research Group. The Riverscapes TauDEM package takes a [DEM](#dem---digital-elevation-model) and channel network as inputs and produces a suite of terrain and hydrologic derivative rasters: pit-filled DEM, D-infinity flow direction, D-infinity contributing area, Topographic Wetness Index (TWI), Height Above Nearest Drainage (HAND), D-infinity slope, and D-8 slope. These derivatives are essential inputs to [VBET](#vbet---valley-bottom-extraction-tool) and other downstream Riverscapes tools. See [TauDEM documentation](https://tools.riverscapes.net/taudem/).

## Tool Grade

A classification system used by the Riverscapes Consortium to communicate how mature, robust, and accessible a tool is. Grades progress along a continuum from early research ideas through to broadly deployed applications:

| Grade | Description |
|---|---|
| **Concept** | An articulated idea; no working code yet |
| **Proof of Concept** | Demonstrates the approach works on example data; not yet usable by others |
| **Research Grade** | Packaged and potentially open-source, but requires developer assistance to run on new data |
| **Operational Grade** | Can be run by technical users following documentation; limited error handling |
| **Professional Grade** | Polished interface, comprehensive documentation, reliable across diverse datasets |
| **Production Grade** | Optimized for scalable batch execution, e.g. via [Cybercastor](#cybercastor) |
| **Commercial Grade** | Highest accessibility; deployed as web apps, mobile apps, or commercial plugins |

Tool grades are assigned by the Riverscapes Technical Committee and are based on [Technological Readiness Levels (TRLs)](#trl---technological-readiness-level). See [Tool Discrimination](/standards/discrimination).

## TRL - Technological Readiness Level

A scale originally developed by NASA to measure the maturity of a technology, from initial concept (TRL 1–2) through applied research and development (TRL 3–6) to deployment and operations (TRL 7–9). The Riverscapes [Tool Grade](#tool-grade) system is directly based on TRLs. See the [TWI Global overview of TRLs](https://www.twi-global.com/technical-knowledge/faqs/technology-readiness-levels) for a detailed breakdown.

## VBET - Valley Bottom Extraction Tool

A [Riverscapes-compliant](#riverscapes-compliant) network model that identifies and maps the valley bottom of a riverscape, separating it into geomorphic units — channel, active floodplain, and elevated (distal/inactive) floodplain. VBET uses a [DEM](#dem---digital-elevation-model) and [Channel Area](#channel-area) polygon as inputs, deriving a slope raster and a Height Above Nearest Drainage (HAND) raster (via [TauDEM](#taudem)) and combining them into a probability-of-valley-bottom raster calibrated by stream size. It also segments the valley bottom into Discrete Geographic Objects (DGOs) and places Integrated Geographic Object (IGO) points at the center of each DGO to enable reach-scale metric summaries over a moving window of adjacent DGOs. See [VBET documentation](https://tools.riverscapes.net/vbet/).

## Warehouse Tag

The `<Warehouse>` XML element that [rscli](#rscli) automatically writes into [`project.rs.xml`](#projectrsxml) after a successful upload to the [Data Exchange](https://data.riverscapes.net). It records the project's assigned [GUID](#guid--uuid) and the Data Exchange environment the project lives in, linking the local file to its cloud counterpart. On subsequent uploads, `rscli` uses this tag to determine that it should *update* an existing project rather than create a new one. If you are creating a new project from an existing one as a template, remove the `<Warehouse>` tag (or use `rscli upload --new`) to prevent accidentally overwriting the original.

## WBD - Watershed Boundary Dataset

The national [HUC](#huc---hydrologic-unit-code) delineation dataset produced and maintained by USGS and NRCS. The WBD defines the boundaries of hydrologic units at all scales from HUC2 (regions) through [HUC10](#huc10) (watersheds) and HUC12 (subwatersheds), covering the entire United States. It is the authoritative source for the watershed boundaries and HUC codes used throughout the Riverscapes Data Exchange and network model runs. Available from [The National Map](https://www.usgs.gov/national-hydrography/watershed-boundary-dataset).

## WGS84 - World Geodetic System 1984

The global geographic coordinate system used as the standard reference frame for GPS and most web mapping applications, identified by [EPSG](#epsg) code `EPSG:4326`. Longitude and latitude values in WGS84 are expressed in decimal degrees. In the Riverscapes ecosystem, `project_bounds.geojson` files (which define a project's spatial extent in the Data Exchange) must always be in WGS84. WGS84 is also the coordinate system used by the Riverscapes Viewer's web map. Projected data (in local coordinate systems such as UTM) may be stored in project files, but geographic extents must be reprojected to WGS84 for the manifest.

## XSD - XML Schema Definition

A ruleset, written in XML, that formally specifies which elements, attributes, and structures are permitted in an XML file. The Riverscapes Consortium publishes an XSD for the [`project.rs.xml`](#projectrsxml) format at [xml.riverscapes.net](https://xml.riverscapes.net/Projects/XSD/V2/RiverscapesProject.xsd). Any project XML that does not validate against this XSD cannot be uploaded to the [Data Exchange](https://data.riverscapes.net). Tools like Visual Studio Code can validate XML against an XSD in real time, making it easy to catch errors during authoring. A separate [Business Logic XSD](https://github.com/Riverscapes/RiverscapesXML/blob/master/RaveBusinessLogic/XSD/project_explorer.xsd) governs the structure of [Business Logic](#business-logic) files.
