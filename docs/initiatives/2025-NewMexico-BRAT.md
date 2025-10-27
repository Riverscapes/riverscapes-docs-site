---
title: 2025 New Mexico BRAT Run
---

Utah State University project index: A63320

## Overview
[Rio Grande Return](https://riograndereturn.org/) funded an effort to run the Beaver Restoration Assessment Tool ([BRAT](https://tools.riverscapes.net/brat))
for the entire state of New Mexico. This effort complemented another itiative funded by [Defenders of Wildlife](https://defenders.org) to perform a virtual beaver
dam census across the state (USU project index A60136). These organizations are both Endorsing Organizations for the [New Mexico Beaver Project](htts://nmbeaverproject.org), a group of
organizations focused on restoration of beavers to New Mexico waterways.

TODO: NM statewide BRAT figure here

## Riparian Vegetation Mapping
One of the unique aspects of the is project is that it used a custom vegetation layer to classify suitability of vegetation for beaver dam building. Standard
BRAT runs use the Landfire Existing Vegetation Type (EVT) layer, a 30 m resolution Landsat derivative, to characterize streamside vegetation suitability. In this 
application, we leveraged the [New Mexico Riparian Habitat Map](https://nhnm.unm.edu/riparian/NMRipMap) (NMRipMap) Version 2.0. NMRipMap was produced by a combination
of automated polygon extraction from 1 m resolution imagery and lidar and image classification of the polygons using random forest models. The mapping was performed
across the perennial riverscapes of New Mexico. 

BRAT ingests vegetation rasters, using a lookup to reclassify each distinct vegetation type in the input raster into dam building suitabilty scores from 0 (unsuitable) 
to 4 (preferred). As such, we rasterized the polygons from NMRipMap, assigned each unique vegetation class a new ID value, and added these IDs and their associated
suitability values to the BRAT lookup tables. BRAT generates average vegetation suitability values for each reach by performing zonal stats within 30 m (streamside) and
100 m (riparian) buffers. Because the NMRipMap extent only covers riparian areas, in cases where those buffers extend onto adjacent hillslopes, there are gaps in the
data. To deal with this, we generated a 'hybrid' raster, where these gaps were filled in using the Landfire EVT layer. Because the NMRipaMap data is mapped at 1 m
resolution and the EVT layer is mapped at 30 m, we resampled both to 5 m to create the hybrid raster that was used as a model input. **This customization resulted in
the most accurate vegetation data that has been used to drive the BRAT model**, especially at a large, regional scale. One tradeoff in using this data was that NMRipMap
did not include a class specifically for Aspen alone (it was lumped in mixed forest classes). Aspen is a preferred species for beaver, and thus, where present in
extensive stands, the BRAT results may be underestimating capacity based on this vegetation dataset.

## Deliverables
- Collection of [BRAT Projects](https://data.riverscapes.net/c/8383aab1-8aad-4fdd-9c74-27e9c1b1baef/) in the Riverscapes Data Exchange
- TODO: link to final report
