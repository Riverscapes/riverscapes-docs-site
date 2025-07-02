---
title: Realizations
weight: 4
---
Inside the realzations tag you will find a custom tag based on what kind of project this is. These contents of these custom tags have the same structure at the base level however they can be customized inside their Inputs and Analysis tags.

***NB: Documenting all possible realizations here would be problematic because they tend to change fairly often. You can use Pycharm's autocomplete to hint at this structure, finding a simimlar XML file to use as a template, or by reading the XSD directly.***

### Basic structure

```xml
<Realizations>
    <CustomTagName Promoted="true" DateCreated="" ProductVersion="" Guid="">
      <Name>Some realization name</Name>

      <Parameters>
        <Param Name="paramName">ParamValue</Param>
      </Parameters>

      <Inputs>
		    <!-- Project specific customizations start here -->
      </Inputs>

      <Analyses>
		    <!-- Project specific customizations start here -->
      </Analyses>

    </CustomTagName>
</Realizations>
```

#### Attributes:

* **Guid**: Unique across all projects
* **ProductVersion**: The version of the tool used to create this realization.
* **DateCreated**: Date code for when this realization was created. Use [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format(e.g. `2016-07-08T23:49:51`)
* **Promoted**: *(Optional)* Tag one of your realizations as `Promoted="true"` to make this the "Accepted" or QA-approved realization if applicable. 

#### Elements:

<!-- TODO
* **Name**: A good name for this realization. 
* **Parameters**: Key-Value pairs for any parameters that were used to run this tool and create this realization. (e.g. `<Param Name="cutoff_threshold">0.341</Param>`)
* **Inputs**: The structure inside inputs is custom to the project type but at inner-most level will use a [Datasource type](/) or a [DataSource Reference](). -->

**Riverstyles Example:**

```xml
<Realizations>
	<RiverStyles Promoted="true" DateCreated="" ProductVersion="" Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
      <Name>USal_confinement_500m</Name>

      <Parameters>
        <Param Name="segmentation_distance">500</Param>
      </Parameters>

      <!--Inputs refer to the files defined at the top of the file-->
      <Inputs>
        <DrainageNetworks Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
          <Network ref="drainageNetwork01">
            <!-- Buffers is just a container tag -->
            <Buffers>
              <!-- Buffers is an extension of a DataSource Reference Type --> 
              <Buffer ref="USal_500m"/>
            </Buffers>
            <!-- ValleyBottom is an extension of a DataSource Reference Type --> 
            <ValleyBottom ref="valleybottom01"/>
          </Network>
        </DrainageNetworks>
      </Inputs>

      <Analyses>
        <!-- Analysis Container tag --> 
        <Confinements>
          <!-- ValleyBottom is an extension of a DataSource Reference Type --> 
          <Confinement>
            <Name>USal_confinement_500m</Name>
            <Path>analyses\confinements\confinement_01\USal_Confinement_500m.shp</Path>
            <MetaData>
              <Meta Name="segmentation_distance">500</Meta>
            </MetaData>
          </Confinement>
        </Confinements>
        <!-- Analysis Container tag --> 
        <RiverStyleReach>
          <!-- Container tag --> 
          <ManualCrossChecks>
            <!-- ManualCrossCheck is an extension of a DataSource Reference Type -->
            <ManualCrossCheck>
              <Path>analyses\river_styles\manual_crosschecks\manual_crosscheck_01\USal_River_Styles.shp</Path>
            </ManualCrossCheck>
          </ManualCrossChecks>
        </RiverStyleReach>
      </Analyses>
    </RiverStyles>
</Realizations>
```



**VBET Example**:

```xml
<Realizations>
	<VBET DateCreated="2016-07-08T23:49:51" ProductVersion="1.4.0" Guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
  
      <Name>My realization Name</Name>

      <MetaData>
        <Meta Name="somecontextthing">Hello</Meta>
        <Meta Name="description">I did a thing and then another thing...</Meta>
      </MetaData>

      <Parameters>
        <Param Name="high_da_thresh">250</Param>
        <Param Name="low_da_thresh">25</Param>
        <Param Name="lg_buf_size">500</Param>
        <Param Name="med_buf_size">150</Param>
        <Param Name="sm_buf_size">25</Param>
        <Param Name="min_buf_size">8</Param>
        <Param Name="lg_slope_thresh">5</Param>
        <Param Name="med_slope_thresh">7</Param>
        <Param Name="sm_slope_thresh">12</Param>
        <Param Name="ag_distance">150</Param>
        <Param Name="min_area">30000</Param>
        <Param Name="min_hole">30000</Param>
      </Parameters>
      <Inputs>
        <Topography>
          <DEM ref="DEM1"/>
          <Flow ref="FLOW4235"/>
          <Slope ref="SLOPE4235"/>
        </Topography>
        <DrainageNetworks>
          <Network ref="DN001">
            <Buffers>
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
      <Analyses>
        <Analysis>
          <Name>My First Analysis</Name>
          <Outputs>
            <!-- These are just the types we know and love -->
            <Vector>
              <Name>Raw Valley Bottom</Name>
              <Path>02_Analyses/Output_001/Tucannon_VBET_unedited.shp</Path>
            </Vector>

            <Vector>
              <Name>Edited Valley Bottom</Name>
              <Path>02_Analyses/Output_001/Tucannon_VBET_edited.shp</Path>
            </Vector>
          </Outputs>
        </Analysis>
      </Analyses>
  	</VBET>
</Realizations>
```

