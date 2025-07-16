---
title: Linking to other projects
---

Sometimes you need to grab resources like inputs and reference layers from other projects. You do it like so:

## Case 1: Internally referenced file

This is the non-linked case just for clarity. 

``` xml
<Vector id="valleybottom01">
    <Name>USal_valley_bottom</Name>
    <Path>valley_bottom_polygon_01/USal_valleybottom.shp</Path>
    <MetaData>
        <Meta name="origin">/inputs/confinements/valley_bottom_polygon/valley_bottom_polygon_01/USal_valleybottom.shp</Meta>
    </MetaData>
</Vector>
```

## Case 2: Non-local, non-program file

Sometimes you just want to grab a file from somewhere on your computer. 

This is exactly the same as **Case 1** because it is up to the software to copy this layer into the project and link it up

## Case 3: Grab an input from an external project in the same program

``` xml
  <Vector id="valleybottom01">
    <Name>USal_valley_bottom</Name>
    <!-- Project prefers relative path but CAN be absolute -->
    <Project>../some/../other/path/Sample_VBET_Project</Project>
    <!-- Path is preferred to be Local but Absolute paths WILL work (necessary for projects on
          different physical drives -->
    <Path>inputs/confinements/valley_bottom_polygon/valley_bottom_polygon_01/USal_valleybottom.shp</Path>
  </Vector>
```

*NB: The `<Project>` tab references a folder, not an XML file*

## Case 4: Grab a file from an external project on another drive or outside the program

In this case all you need to do is use an absolute path.

This case is here but it shouldn't be used if you can help it because it can't really be shared and has cross-platform implications.\

``` xml
  <Vector id="valleybottom01">
    <Name>USal_valley_bottom</Name>
    <Project>c:\some\other\project\Sample_VBET_Project</Project>
    <Path>confinements\valley_bottom_polygon\valley_bottom_polygon_01\USal_valleybottom.shp</Path>
  </Vector>
```

## Notes:

* `<Path>` is ALWAYS relative. No exceptions
* `<Project>` is usually relative. Exceptions can be made but should be avoided if possible. It references a folder containing the project XML file (`project.rs.xml`)
* Referencing the parent's guid is a good practice. See the [Guid guidelines](guids.html) page for examples of how fetch guids from other projects.