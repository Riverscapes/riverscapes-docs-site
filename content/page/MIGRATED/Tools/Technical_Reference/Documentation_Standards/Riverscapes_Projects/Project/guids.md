---
title: GUIDs
weight: 1
---

[Universally Unique Identifiers (UUID, or GUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier) Are used to track file changes on XML nodes. 

```
07817542-0b3f-4154-9bfb-d3e20cc69d64
740ce55d-91f7-47bd-b3e7-265d685a464d
174fd928-34a1-462f-ae60-8a6d3109c97b
c767a4b0-74db-49d2-bfbf-8b6d3a77b3d5
603ee6e2-a70d-4514-adf0-7335b9800743
b5b5bb74-7dbd-468d-a863-a026b36a0224
385c98ec-811c-4dd0-8990-3b92c33f3f5b
1f819399-1f97-4cec-a8d7-b5180aca6221
f0b50bdc-e302-4647-ae04-98f561f90b38
412332d4-89a0-4acb-a7ae-2826f8717b55
```

## Guidelines for GUID use

### DO use GUIDs:

* Uniquely. Every GUID inside an XML file should be unique. There is one case where GUIDs can be duplicates: when you are referencing a layer from another project.
* On every file node for inputs and outputs: (`<Raster>, <Vector> etc...`)
* On Every Realization
* On inputs pulled from other projects. **Note: GUIDs must match.**

### DON'T use GUIDS:

* On container nodes (`<Outputs></Outputs>`)
* On internal references: (`<Raster ref="MYRASTER"/>`)

### DO Change a GUID

* Any time the file on the disk is altered in any way.

## Examples:

``` xml
<!-- Note the Raster and not the container has the GUID -->
<Inputs>
	<Raster id="SLOPE4235" guid="241cdf2a-a397-4fd7-acd2-de0869ed4662">
      <Name>Slope</Name>
      <Path>01_Inputs/01_Topo/Slope/Slope1.img</Path>
    </Raster>
</Inputs>


<!-- Here's a realization example -->
<VBET dateCreated="2016-07-08T23:49:51" productVersion="1.4.0" guid="385c98ec-811c-4dd0-8990-3b92c33f3f5b">
	...
</VBET>


<!-- This guid should match the one in the VBET project -->
<Vector id="valleybottom01" guid="b5b5bb74-7dbd-468d-a863-a026b36a0224">
	<Name>USal_valley_bottom</Name>
	<Path>inputs/USal_valleybottom.shp</Path>
	<Project>../some/../other/path/Sample_VBET_Project/</Project>
</Vector>
  
```



## Code Examples: 

### Python:

```python
import uuid

def getUUID(self):
    """
    Here's a little function that prints a unique ID (GUID)
    """
    return str(uuid.uuid4()).upper()

print getUUID()
```

Note that this uses `.upper()` to create windows-like GUIDs that are all uppercase. It shouldn't matter that much whether you create upper or lowercase GUIDs so long as you are consistent.



### Fetching Guids

When you're linking projects together you might need to fetch a guid from anothe project. 

The following snippet shows 3 different ways to retrieve a guid from a project:

<https://github.com/Riverscapes/Program/blob/master/Project/python/guid.py>