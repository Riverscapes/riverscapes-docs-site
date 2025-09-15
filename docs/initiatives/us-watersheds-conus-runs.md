---
spellchecker: ignore Sakakawea
---
# Watersheds used for the 2025 CONUS run

The intention of the [initiative](2025-CONUS-runs) is to apply production-grade Riverscapes tools to all rivers in the entire conterminous USA, ie excluding Alaska, Hawaii and the territories. This page documents the watersheds chosen for analysis, in other words the "universe" for the run.

The scale used for model runs is the HUC10 sized watersheds. See [glossary - HUC](glossary#HUC) for more information.

The ultimate source for the watershed boundaries, as well as much of the base hydrographic data, is the [NHD Plus High Resolution](https://www.usgs.gov/national-hydrography/nhdplus-high-resolution) (NHDPlus HR). However not every watershed is considered suitable for our purposes. Furthermore USGS does not make available a single layer with all HUC10 watersheds, so we had to prepare it.

## Details of watershed boundary dataset built

The following describes in more detail the filtering and processing required to create our watersheds layer.

### Generate combined dataset

The geopackage for each Vector Processing Unit (VPU) (corresponding to HUC4) was downloaded from the "**Current**" [folder](https://prd-tnm.s3.amazonaws.com/index.html?prefix=StagedProducts/Hydrography/NHDPlusHR/VPU/Current/GPKG/) of staged products of The National Map on Amazon AWS. USGS has a page on ways to [access national hydrography products](https://www.usgs.gov/national-hydrography/access-national-hydrography-products).

Only the VPUs up to 18XX were downloaded. This excludes watersheds in Alaska, Hawaii, and the territories.

The features from the HUC10 layer in each were merged into one new layer.

This merged layer had 17,999 features and 17 fields. The coordinate reference system is EPSG:4269 which has units of degrees.

### Watershed types filter

Generally we include only these watershed types:

* Standard
* Closed
* Frontal
* Multiple Outlet

This excludes watershed types Water, Island, Urban, and Indeterminate Flow.

The specific SQL filter used is `WHERE HUType in ('S', 'C', 'F', 'M')`

An exception was made for the 12 HUC10s along Lake Sakakawea in North Dakota that have HUType W (water) but also have rivers suitable for modeling. These are all in HUC6 `101101` so we use that information to selectively include these watersheds.

### Geographic filter

Along the international border between the USA and Canada, some watersheds have been split at the border, while others have not. While NHDPlus HR provides hydrographic data for these watersheds, other data needed for some models are not available. For our purposes we keep only those watersheds that where at least 90% of the area is inside the USA. The states layer from __ was used 

### Cleaning

There were some 1008 watersheds with duplicate records in the source. That is all fields, These were removed.

Some watersheds overlap. For example, in Vermont the 0430 VPU has areas that overlap with 0415 VPU. As neither the [National Release 2](#national-release-2), nor our previous Riverscapes model runs include 0415 we 

Some watersheds were found in two VPUs: the 

## Simplified cartographic representation

## Comparison to other versions

### National Release 2

In addition to the /VPU/current files that we used, the NHDPlus HR data published a single "National Release 2" in February 2025, available as a file geodatabase `NHDPlus_H_National_Release_2_GDB.gdb`. (See [ScienceBase catalog item](https://www.sciencebase.gov/catalog/item/679d39cbd34eb38981c9c7a5) and [release notes](https://prd-tnm.s3.amazonaws.com/StagedProducts/Hydrography/NHDPlusHR/National/GDB/Notes_and_Known_Issues_for_NHDPlus_NR2.pdf).) Within this geodatabase are:

* HUC12 watersheds, `WBDHU12`
* VPUs, `NHDPlusBoundarUnit`

In comparison to the . However it is 

### The WBD Boundary Dataset

The USGS also produced a national Watershed Boundary Dataset (WBD). This convenient layer is largely the same but has some important differences.
