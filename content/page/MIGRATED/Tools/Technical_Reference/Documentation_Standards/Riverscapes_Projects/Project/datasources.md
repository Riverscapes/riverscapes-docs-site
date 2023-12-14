---
title: DataSources (Inputs/Outputs)
weight: 3

---

DataSources can be defined in two places: 

1. **Inside** **`<Inputs>` At the top of the file**: These are DataSources that can be referenced from other places.
2. **Inside a realization**: This can either be a reference to the input at the top of the file or a completely new DataSource node.


## Dataset Type Hierarchy

The kind of Datasource tag you choose (e.g. `<Raster>`, `<DEM>` ) is important. The list below may not be extensive since new tags may be invented from time to time. 

1. **DataSet**: *This is a grouping only and not in use as a tag*
   1. **GeoSpatial**: *This is a grouping only and not in use as a tag*
      1. **Raster**: `<Raster id="" Guid="">` 
         1. **DEM**:  `<DEM id="" Guid="">` 
      2. **Vector**:  `<Vector id="" Guid="">` 
      3. **TIN**:  `<TIN id="" Guid="">` 
   2. **Context Layer**: A context layer can either be a file OR a tile-layer loaded from a mapping service
      1. **Hillshade**: `<Hillshade>`: Path to a hillshade raster or tile service.
      2. **Shape**: A `.shp` file that is not used for context and not geospatial processing. 
   3. **SimpleFile**
      1. **CSV**: Self-explanatory
      2. **Image**: Any image (png, jpg, gif etc.)

## General Use

**Here is an example of a DataSource**

```xml
    <Vector id="hillshade01" Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
      <Name>Hillshade</Name>
      <Path>analyses\context\layers\hillshade\Upper_Salmon_Hillshade.tif</Path>
      <Project>../../Relative/path/to/OtherProject</Project>
    </Vector>
```

### Attributes:

* **Guids**: `Guid=""` All inputs that are not references (i.e. using the `ref=""` attribute) must have a Guid.
* **Id**: `id=""` The Id you give to a Datasource should be unique in the XML file but does not have to be unique across all project XMLs.
* **References**: `ref=""`: The `ref` attribute is used to reference a DataSource inside the `<Inputs>` tag at the top of the file. It should contain the unique `id` of the DataSource you would like to reference.

#### Rerences (`ref=""`)

**Some rules for using `ref`**

* If you use `ref` you should not use `Id` or `Guid` since these are covered inside the referenced object. Likewise you should not use `<Path>`, `<Project>`, `<Name>` or any other tags.
* `<MetaData>` can still be used but only if it is refering to information that cannot be shared across all [Realizations]().

``` xml
<Project>
    <!-- ... -->
    <Inputs>
      	<!-- Here we define the actual input -->
        <DEM id="DEM1" Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
            <Name>DEM</Name>
            <Path>01_Inputs/01_Topo/Slope/Slope1.img</Path>
            <MetaData>
                <Meta Name="description">Jordan Gilbert</Meta>
                <Meta Name="HUC8ID">17020005</Meta>
            </MetaData>
        </DEM>
    </Inputs>
    <Realizations>
        <VBET>
            <!-- ... -->
            <Inputs>
                <Topography>
	                <!-- And here we refer to it -->
                    <DEM ref="DEM1" />
                </Topography>
            </Inputs>
            <!-- ... -->
        </VBET>
    </Realizations>
</Project>
```

### Elements:

* **Name**: `<Name>` A plain-text name for this Datasource
* **Path**: `<Path>` A ***RELATIVE*** filepath to the layer/file/datasource in question (i.e. `inputs/input01/input.tif`). The path is relative either to this project or another project root specified using the `<Project>` element. 
* **Project**: `<Project>`*(Optional)* If you are refering to a datasource in another project you can use this element. Relative paths are preferred but in some cases absolute paths are necessary. See below for more details.
* [**MetaData**](metadata.html): `<MetaData>` Key-value pairs. *(See [MetaData](metadata.html) docs for how to use this.)*

#### Special Elements:

* **URL**: *(Contextual Layers Only)* Contextual layers like `<Hillshade>` can have this element. It is the path to an online location or tile-server. The idea is that the software can try to load the local file and, failing this, use the version available from the `<URL>`

## External Project References

You can use Datasources from other projects using the `<Project>` element 

* Relative paths are prefered. Absolute paths can be used but will break when transfered to another machine.
* You *must* specify a path to a FOLDER contianing the `project.rs.xml` file: `../../Path/to/Project/`

## Extended Use

Sometimes you'll see a tag inside an `<Analysis>` tag that is Dataset-like. An example is VBET where a drainage network `<Network>` is basically a shapefile Dataset Type that has been extended to contain `<Buffers>`

```xml
<Inputs>
  <Topography>
    <DEM ref="DEM1"/>
    <Flow ref="FLOW4235"/>
    <Slope ref="SLOPE4235"/>
  </Topography>
  <DrainageNetworks>
    <!-- Network is an extended DataSet that has been augmented with <Buffers> -->
    <Network ref="DN001">
      <Buffers>
		<!-- A buffer is simply <Vector> object renamed -->
        <Buffer>
          <Name>Large Buffer</Name>
          <Path>01_Inputs/02_Network/Network_001/Buffers/lg_buf1.shp</Path>
        </Buffer>
        <Buffer>
          <Name>Medium Buffer</Name>
          <Path>01_Inputs/02_Network/Network_001/Buffers/med_buf1.shp</Path>
        </Buffer>
        <Buffer>
          <Name>Small Buffer</Name>
          <Path>01_Inputs/02_Network/Network_001/Buffers/sm_buf1.shp</Path>
        </Buffer>
      </Buffers>
    </Network>
  </DrainageNetworks>
</Inputs>
```

Such examples are too specific to document fully here. You can find hints at how to use these using autocomplete in Pycharm or by reading the XSD file.