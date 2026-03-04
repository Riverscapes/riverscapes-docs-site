---
title: Lidar-based VBET for Lahontan Cutthroat Trout Occupied Streams
---

Utah State University project index: TBD

## Overview
Many of the riverscapes in the mountains of the Great Basin are too small to extract meaningful information from VBET runs using the default data sources 
(10m NED DEMs and NHDHR+ drainage networks). To support efforts at evaluating riverscape conditions and planning restoration projects across the occupied
range of Lahontan Cutthroat Trout (LCT), we are running VBET at the HUC12 scale for basins that contain streams occupied by LCT.

-----

## Resources for technicians
The videos below document the workflow for running VBET from lidar DEMs. The videos cover the following topics:
1. Building the lidar DEM using the riverscapes-tools 3DEP DEM Builder.
2. Using TauDEM tools to extract a drainage network from the DEM.
3. Editing and attributing the network with the necessary fields and associated information.
4. Incorporating the high resolution data into a Riverscapes Context project.
5. Running VBET in a codespace and uploading to the data exchange.
   
-----

### 1 Lidar DEM Builder
<YouTubeEmbed videoId="Pv1Dyxj4LMM" />

-----

### 2 Network Extraction
<YouTubeEmbed videoId="6VtUeSPOJKQ" />

-----

[Documentation](https://docs.riverscapes.net/get-involved/taudem_networks) for extracting networks.

-----

#### 2.1 Culverts
<YouTubeEmbed videoId="jpUQ3wUoJmc" />

-----

### 3 Editing Network
<YouTubeEmbed videoId="2r3N0qO13yQ" />

-----

### 4 Adding to Riverscapes Context
<YouTubeEmbed videoId="QpI7W6hm-QI" />

:::note
Keep the Riverscapes Context projects saved in your codespace data directory so that it's available if VBET needs rerun (e.g., after additional calibration)
:::

-----

### 5
<YouTubeEmbed videoId="7JOktf75ms4" />
