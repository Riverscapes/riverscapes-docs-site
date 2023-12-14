---
title: MetaData
weight: 2

---

# MetaData

Metadata tags can be used in a few key places inside the Project XML:

1. Directly inside `<Project>` 

```xml
  <MetaData>
    <Meta Name="SomeKey">SomeVal</Meta>
    <Meta Name="SomeOtherKey">SomeOtherVal</Meta>
  </MetaData>
```

## Where to use:

Metadata tags can be used in a few key places in the Project XML:

### Directly inside `<Project>`

Project-wide metadata is designed to give context to the entire project:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="XSD/v1/Project.xsd">

  <Name>Sample_VBET_Project</Name>
  <ProjectType>VBET</ProjectType>

  <MetaData>
    <Meta Name="Operator">Jordan Gilbert</Meta>
    <Meta Name="HUC8ID">17020005</Meta>
    <Meta Name="HUC8NAME">Chief Joseph</Meta>
    <Meta Name="HUC8ID">17020005</Meta>
    <Meta Name="HUC8NAME">Upper Columbia</Meta>
    <Meta Name="SomeMetaName">SomeOtherValue</Meta>
  </MetaData>
  
  <!-- ... -->

</Project>
```

### Inside Realizations

Anything that is unique to this particular realization should be stored as such:

```xml
  <Realizations>
    <VBET DateCreated="2016-07-08T23:49:51" ProductVersion="1.4.0" Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
  
      <Name>My realization Name</Name>

      <MetaData>
        <Meta Name="somecontextthing">Hello</Meta>
        <Meta Name="description">I did a thing and then another thing...</Meta>
      </MetaData>
      
      <!-- ... -->
      
    </VBET>
</Realizations>
```

### Inside Datasource Objects

Can be used to add important data to the specific DataSource

```xml
<DEM id="DEM1" Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
  <Name>DEM</Name>
  <Path>01_Inputs/01_Topo/Slope/Slope1.img</Path>
  <MetaData>
    <Meta Name="author">Jordan Gilbert</Meta>
    <Meta Name="data_dateCollected">2016-07-08T23:49:51</Meta>
  </MetaData>
</DEM>
```

