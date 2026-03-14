---
title: 2025 CONUS Run
description: 2025 Riverscapes Waterfall Generation for Conterminous USA watersheds
page-status: stub
page-priority: medium
---

<a href="https://tools.riverscapes.net/"><img
  src="https://tools.riverscapes.net/assets/images/waterfall-74b966570b344ad6af3a29ca5e690ecb.svg"
  alt="waterfall"
  style={{ float: "right", width: "350px", margin: "0 0 1em 1em" }}
/></a>

With the financial support of the Bureau of Land Management we ran the latest version of the [production grade Riverscapes network models](https://tools.riverscapes.net) for the conterminous United States (CONUS). The images below represent snapshots of completeness for each of the different models.

There are approximately 18,000 HUC10 watersheds in the United States, of which we ran the aforementioned network models for just over 15,000. This excludes territories, Alaska, islands, as well as watersheds that straddle Canada and Mexico. The blue, filled polygons in the images below are places where the models completed. Green polygons are watersheds that we still intend to run. White areas will not be run. The data themselves are available in the [Riverscapes Data Exchange](https://data.riverscapes.net) for each HUC10. The following saved search will return just the [projects for this 2025CONUS run](https://data.riverscapes.net/d/2f96cfb0-8895-4d0a-8137-85f4496b9f3e/).

The primary metrics from each of the models are combined into the [Riverscapes Metric Engine](https://tools.riverscapes.net/rme/) (RME) model that is available for CONUS as individual HUC10 projects in the data exchange. The discreet geographic objects (DGO) polygons themselves together with approximately 150 metrics are scraped into a single database containing approximately 54 million riverscapes. These data are available via the [Riverscapes Reports](https://reports.riverscapes.net) platform, where you can extract data for any area of interest into both curated reports or raw data exports.

This work was a collaboration between [North Arrow Research](https://northarrowresearch.com) and Utah State University - [Riverscapes Assessment and Monitoring Lab](https://data.riverscapes.net/o/a52b8094-7a1d-4171-955c-ad30ae935296/).

<ToolsWrapper
  cardsize="md"
  cards={[
    {
      title: "Export and Report CONUS Data",
      logoUrl: "https://cdn.riverscapes.net/icons/products/reports/reports.svg",
      description: "Export and report riverscapes for all of CONUS using the Riverscapes Reports Platform. Draw or upload your own area of interest and then generate one of the curated reports or data exports. This draws from approximately 54,000,000 riverscapes from the 2025 CONUS run.",
      toolUrl: "https://reports.riverscapes.net",
    },
    {
      title: "Riverscapes Data Exchange HUC10 Projects",
      logoUrl: "https://cdn.riverscapes.net/icons/products/data-exchange/data-exchange.svg",
      description: "Explore approximately 115,000 Riverscapes network model projects available at the HUC10 scale.",
      toolUrl: "https://data.riverscapes.net/d/2f96cfb0-8895-4d0a-8137-85f4496b9f3e/",
    }
  ]}
/>

:::info
For more information about the definition and selection of the watersheds for analysis, see [Watersheds used for 2025 CONUS run](reference-conus-watersheds).
:::

:::info
This is the third large run of the Riverscapes Network Models. The outputs from the first two runs are also available in the Data Exchange as archived projects.
:::

## Riverscapes Context

![RS Context](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_rscontext.png)

## Channel Area

![Channel Area](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_channelarea.png)

## TauDEM

![TauDEM](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_taudem.png)

## VBET

![VBET](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_vbet.png)

## Anthro

![Anthro](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_anthro.png)

## Hydro

![Hydro](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_hydro_context.png)

## BRAT

![BRAT](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_riverscapes_brat.png)

## RCAT

![RCAT](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_rcat.png)

## Confinement

![Confinement](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_confinement.png)

## Metric Engine

![Metric Engine](https://s3.us-west-2.amazonaws.com/releases.northarrowresearch.com/images/2025_conus_model_run_status_maps/status_map_rs_metric_engine.png)
