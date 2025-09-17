---
spellchecker: ignore Sakakawea, USGS
---
# Watersheds used for the 2025 CONUS run

The intention of the [initiative](2025-CONUS-runs) is to apply production-grade Riverscapes tools to all rivers in the entire conterminous USA, ie excluding Alaska, Hawaii and the territories. This page documents the watersheds chosen for analysis, in other words the "universe" for the run.

The scale used for model runs is the HUC10 sized watersheds. See [glossary - HUC](glossary#HUC) for more on "HUCs".

The ultimate source for the watershed boundaries, as well as much of the base hydrographic data, is the [NHD Plus High Resolution](https://www.usgs.gov/national-hydrography/nhdplus-high-resolution) (NHDPlus HR). However not every watershed is considered suitable for our purposes. Furthermore USGS does not make available a single layer with all HUC10 watersheds, so we had to prepare it.

## Details of watershed boundary dataset built

The following describes in more detail the filtering and processing required to create our watersheds layer.

### Generate combined dataset

The geopackage for each Vector Processing Unit (VPU) (corresponding to HUC4) was downloaded from the "**Current**" [folder](https://prd-tnm.s3.amazonaws.com/index.html?prefix=StagedProducts/Hydrography/NHDPlusHR/VPU/Current/GPKG/) of staged products of The National Map on Amazon AWS. USGS has a page on ways to [access national hydrography products](https://www.usgs.gov/national-hydrography/access-national-hydrography-products).

Only the VPUs up to 18XX were downloaded. This excludes watersheds in Alaska, Hawaii, and the territories.

The features from the HUC10 layer in each were merged into one new layer.

This merged layer has 17,999 features and 19 fields including the geometry. The coordinate reference system is EPSG:4269 which has units of degrees.

### Cleaning: Duplicate Removal

There were some 1008 watersheds with completely duplicated records in the source. Said another way, all fields are identical, other than the fid field. These duplicates were removed, keeping only one copy of each.

Some watersheds overlap. For example, in Vermont the `0430` VPU has areas that overlap with 0415 VPU. As all 0415 HUCs are duplicated and neither the [National Release 2](#national-release-2), nor our previous Riverscapes model runs include `0415`, so we removed it entirely.

Some watersheds were found in two VPUs. In particular, the geopackage for VPU `0804` includes watersheds from the `1111` and `1114` VPUs. The records from the 0804 geopackage were removed from our final layer.

Some (9 HUC IDs) were found to have duplicate records with insignificant differences between them: for some only the LoadDate differed, for others it was a rounding error difference in AreaSqKm. We kept the record with the earlier load date and the 'cleaner' AreaSqKm.

One HUC10, `0414030204`, a frontal-type HU, had two records each corresponding to a separate but adjacent polygon. These were merged into one multi-polygon record consistent with other frontal HUs.

After this cleaning we had 16,113 HUC10s.

### Watershed types filter

For our analysis, generally we include only these watershed types:

* Standard
* Closed
* Frontal
* Multiple Outlet

This excludes watershed types: Water, Island, Urban, and Indeterminate Flow.

The specific SQL filter used is `WHERE HUType in ('S', 'C', 'F', 'M')`

An exception was made for the 12 HUC10s along Lake Sakakawea in North Dakota that have HUType W (water) but also have rivers suitable for modeling. These are all in HUC6 `101101` so we use that information to selectively include these watersheds.

### Geographic filter

Along the international border between the USA and Canada, and also between USA and Mexico, some watersheds have been split at the border, while others have not. While NHDPlus HR provides hydrographic data for these watersheds, other data needed for some models are not available. For our purposes we keep only those watersheds that where more than 90% of the area is inside the USA. The states layer `GU_StateOrTerritory` from [USGS National Boundary Dataset](https://www.sciencebase.gov/catalog/item/6477c7cad34e3ac335bed077) was used. We select all states where FCode is `State` and Not (Hawaii or Alaska). We then dissolved this and calculated the area of overlap with each HUC.

## Simplified cartographic representation

For the purposes of quickly rendering national-scale maps, we created a geographically simplified version of the layer using [GeoPandas](https://github.com/geopandas/geopandas). Specifically load the layer into a GeoDataFrame, convert the layer to EPSG 5070, run `simplify_coverage` with a tolerance of 8 km (8000 m), then save the data in the EPSG:4326 used by Athena and web maps.

## Comparison to other versions

### National Release 2

In addition to the /VPU/current files that we used, the NHDPlus HR data published a single "National Release 2" in February 2025, available as a file geodatabase `NHDPlus_H_National_Release_2_GDB.gdb`. (See [ScienceBase catalog item](https://www.sciencebase.gov/catalog/item/679d39cbd34eb38981c9c7a5) and [release notes](https://prd-tnm.s3.amazonaws.com/StagedProducts/Hydrography/NHDPlusHR/National/GDB/Notes_and_Known_Issues_for_NHDPlus_NR2.pdf).) Within this geodatabase are:

* HUC12 watersheds, `WBDHU12`
* VPUs, `NHDPlusBoundarUnit`

By dissolving the HUC12 to HUC10s, we would get a layer almost identical to the one we have constructed, however there were was one HUC10 missing a piece, and numerous slivers and gaps left in the dissolve, so we decided not use this as a source.

### The WBD Boundary Dataset

The USGS also produced a national Watershed Boundary Dataset (WBD). This convenient layer is largely the same but has some important differences. The biggest differences are in the 1005 and 1006 VPUs.
