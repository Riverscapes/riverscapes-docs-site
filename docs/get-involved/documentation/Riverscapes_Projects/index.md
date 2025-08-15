---
title: Riverscapes Projects
weight: 3
---
## The Problem

One of the most significant barriers to effective collaboration and leveraging of past work is being able to access and share any tool or model output or analysis, within the transparent context of the inputs and methods from which it was produced (Wilkinson et al. 2016).  "Just send me the data", is rarely actually that simple. Plus, one of the hallmarks of scientific rigor is *reproducibility*. 

### Sharing is Expected... and Easier Today

Sharing used to be technically difficult, but today is easy. Many great tools now exist for sharing data (typically as a zip file) to comply with open access and data sharing requirements, including [Zenodo](https://zenodo.org/), [figshare](https://figshare.com/), and [HydroShare](https://www.hydroshare.org/).

However, it can be difficult to use those platforms to make **riverscapes specific** data more easily consumable, explorable and useful to your audiences. Especially given the complexity of so many riverscapes tools and workflows, "can you make the data available?" is an easy thing to comply with by uploading a zip file to one of the services above, but a very difficult thing to do properly. **We assert the Riverscapes community desperately needs data standards and simple tools for more effective sharing of riverscapes-specific data** ([Fryirs et al. 2019](http://dx.doi.org/10.1002/wat2.1372)).

![simply making data available is not sufficient to make it useful](/img/data/CanIGetData.png)

In an era of "big data", it is easy to get overwhelmed without appropriate context. Unfortunately, context means metadata, and very few researchers and practitioners have the time or are likely to produce that metadata manually. However, failure to do so contributes to "dark knowledge" (*sensu* [Jeschke et al. 2019](https://dx.doi.org/10.1139/facets-2019-0007)) through *inaccessible data and information*, and we *can* do better. We need to better leverage each other's work, but we often do not because it takes too much time.

## A Better way for the Riverscapes Community

### Goals

* Make it **easier to produce, curate and organize riverscapes analyses** in the context of the inputs and intermediates they were produced from. - i.e. make exploreable in [Riverscapes Viewers](https://viewer.riverscapes.net) 
* Foster transparency, reproducibility and sharing of riverscapes data and analyses. 
* Simplify ability for tool users to make tool outputs **F-A-I-R** or at least **F-A-R**.
  
<!-- TODO To achieve the above goals, we propose packaging data as  **riverscapes projects** <img  src="/images/data/RiverscapesProject_24.png">. This helps both the developer and the tool user grow their audiences for their tools -->

<!-- TODO One way of achieve the third goal of packaging analyses as  **riverscapes projects** <img  src="/images/data/RiverscapesProject_24.png"> is to facilitate the contribution of Riverscapes Data  to a [**DATA** Warehouses](/Data_Warehouses) for sharing <i class="fa fa-share-alt" aria-hidden="true"></i> and achieve **F**-**A**-**I**-**R**.  With our [RAVE tools](https://rave.riverscapes.xyz) and [Warehouse](](/Data_Warehouses) ) we strive to make it easy to contribute your data as a riverscapes project , which are:
- [**F**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-2)indable,  
-   [**A**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-3)ccessible, and
-    *ideally* [**I**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-4)nteroperable and
-     [**R**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-5)e-useable. 

There are many other platforms and warehouses where full or partial **F**-**A**-**I**-**R** can be achieved (e.g. [zeondo](https://zenodo.org/), [HydroShare](https://www.hydroshare.org/), [FigShare](https://figshare.com/) or [OpenAIRE](https://openaire.com/)). These systems will not necessarily have awareness of what a **riverscapes projects** <img  src="/images/data/RiverscapesProject_24.png"> is, but they can handle uploading the data as a zip file, and at least the F, A and R parts of FAIR. 

Note the **F**-**A**-**I**-**R**, correspond to the **f**indable, **a**ccessible, **i**nteroperable and **r**e-useable [Principles](https://force11.org/info/the-fair-data-principles/) (Wilkinson et al. [2016](https://www.nature.com/articles/sdata201618)), which the RC strives towards and helps facilitate the riverscapes community follow. 
 -->



## Riverscapes Projects 
<!-- TODO <img class="float-right" src="/images/data/ProjectTree_VBET.png"> -->
<!-- TODO We developed a data standard for packaging up riverscapes analyses (i.e. outputs of any [RC compliant tool](/Tools) into **riverscapes projects** <img  src="/images/data/RiverscapesProject_24.png">.  The project data can be navigated through a project tree like shown at right. -->
<!-- TODO 
[Riverscapes-compliant tools](/Tools) <img  src="/images/rc/RiverscapesCompliant_24.png"> automatically produce datasets that we call "projects". Each project is accompanied by metadata documentation in the form of an [XML project file](/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/projectxml.html). These project files have specific requirements and must comply with the [riverscapes project schema](/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Program/). In addition, the projects have a simple, standardized folder structure in which all data files are saved and or modified to disc (I/O).  -->

Riverscapes projects can also be manually produced for any dataset and analysis to provide it context. For datasets that you want to share with a large audience, but may not produce that many times, it still may be worth the investment.


<!-- TODO ## What are the Benefits of Riverscapes Projects?
Beyond better organization and transparency, the major benefits of riverscapes projects <img  src="/images/data/RiverscapesProject_24.png"> are:
- [Easy Visualization & Exploration in GIS & Web](#easy-visualization-and-exploration-in-gis-and-web)
- [Easier to Share with Metadata](#easier-to-share-with-metadata)
- [Scalable Analyses & Interoperable](#scalable-analysis--interoperability) with other Riverscapes Compliant Tools   -->


<!-- TODO ### Easy Visualization and Exploration in GIS and Web 
Sharing and opening any project in the [RV](http://rave.riverscapes.net/) (Riverscapes Viewer). You can reach GIS audiences with RV in ArcGIS or QGIS, or non-GIS users through WebRV.
<div align="center">
<img  src="/images/data/RS_VBET_Project_WebRAVE.png">
<br><i>Example of WebRV view of a project. You can curate "Views" of collections of layers in your project, or they can add any layer to the map and see it symbolized as you intended it to be visualized. As the curator of your own project type, you can specify this symbology consistently.</i>
</div> -->

* Helps you achieve  [**A**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-3)ccessiblity and [**R**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-5)e-useability principles.


### Easier to Share with Metadata
<!-- TODO <div align="center">
<img align="center" src="/images/data/RV_LayerMetaData.png">
<br><i>All layers have easily viewed Metadata from the Project Tree, which allows tracing back individual layers to their original sources or externally referenced projects.</i>
</div> -->
<!-- TODO <img class="float-right" src="/images/data/Project_VBET_ProjectInfo.png"> The packaging of data into a folder or zip file that can be easily shared, and then opened in any [RV app](http://rave.riverscapes.net) is handy. It ensures that your audience will see the data organized as you want it to be, with the right context, and correct symbology. -->

Riverscapes projects can be stored in the [Riverscapes Data Exchange](/products/data-exchange) and made publicly available. Documentation can be included at various levels:

#### Project level metadata

The following can be entered and edited in the Data Exchange by the project owner:

* Project summary
* Project description
* User metadata fields (if not locked*)
* Tags

Summary, description and user metadata can also be entered via the project.rs.xml file. There, a user metadata field can be designed as locked, meaning it will not be editable in the data exchange.  


Moreover, Riverscapes Projects facilitate automated metadata production and housekeeping. An example of the automatically generated metadata for a [production-grade, network tool](http://tools.riverscapes.net) is shown at left.

- Helps you achieve [**F**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-2)indability,   [**A**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-3)ccessibility, and [**R**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-5)e-useability principles.

### Scalable Analysis & Interoperability

Riverscapes projects can be accessed, modified and populated with cloud computing because querying, and batching operations are possible with a consistent data standard and storage. Plus, other riverscape-compliant projects can easily reference each other. 

- Helps you achieve [**I**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-4)nteroperability and  [**R**](https://force11.org/info/the-fair-data-principles/#elementor-toc__heading-anchor-5)e-useability principles. 

-----------

## References

- Fryirs KA, Wheaton JM, Bizzi S, Williams R, Brierley GJ. 2019. To plug-in or not to plug-in? Geomorphic analysis of rivers using the River Styles Framework in an era of big data acquisition and automation. Wiley Interdisciplinary Reviews: Water 6 : e1372. DOI: [10.1002/wat2.1372](http://dx.doi.org/10.1002/wat2.1372)
- Jeschke JM, Lokatis S, Bartram I, Tockner K. 2019. Knowledge in the dark: scientific challenges and ways forward. FACETS.  DOI: [10.1139/facets-2019-0007](https://dx.doi.org/10.1139/facets-2019-0007)
- Wilkinson MD et al. 2016. The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data 3 : 160018. DOI: [10.1038/sdata.2016.18](http://dx.doi.org/10.1038/sdata.2016.18)
