---
title: XML Validation
---

Riverscapes relies on several different [Extensible Markup Language](https://en.wikipedia.org/wiki/XML) (XML) files. They are used to define the individual projects, the data warehouses that store these projects and also how the projects are displayed in [RAVE](http://rave.riverscapes.net/).

Each of these types of XML has a different set of rules that define the tag names, attributes and how these are laid out in the file. These rules are defined in a [XSD schema files](https://en.wikipedia.org/wiki/XML_schema) that are available online.

Whenever writing XML by hand or, more likely, writing code to do so, it is absolutely vital that the XML produced is validated against the XSD schema file to check for errors and omissions. This process will verify that all tag names are valid, that the required tags are present and that the nesting of all the tags meets the XSD rules.

There are lots of tools available for validating XML. Indeed, most modern Integrated Development Environments (IDE) software can perform this task. There are even online validation tools, although they tend rely on the files being uploaded and so they only tend work on one file at a time.

Our preferred tool for validating XML is Microsoft's free [Visual Studio Code](https://code.visualstudio.com/). The following instructions describe how to configure and perform XML validation using Visual Studio Code. A [video description](#video-demonstration) at the bottom of this page demonstrates these steps.

# Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/).
1. [Java Development Kit](https://developers.redhat.com/products/openjdk/download?sc_cid=701f2000000RWTnAAO) (JDK). On Windows it's recommended that you download and use the MSI installer to walk through the installation. At the time of writing the `jdk-8u252-x64` MSI is the most appropriate download.
1. Install Red Hat XML Tools in Visual Studio Code:
    1. Open Visual Studio Code.
    1. Switch to the extension Marketplace (5th icon down the left side).
    1. Search for "Red Hat XML Tools".
    1. Click Install.
    1. Close and restart Visual Studio Code.

# Which XSD To Use:

Use the following URLs in the `namespaceSchemaLocation` attribute in the root level node of your XML:

<!-- TODO |XML Type|XSD URL|
|---|---|
|[Riverscapes Project XML Files]({{ site.baseurl}}/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/projectxml.html)|[https://raw.githubusercontent.com/Riverscapes/Program/master/Project/XSD/V1/Project.xsd](https://raw.githubusercontent.com/Riverscapes/Program/master/Project/XSD/V1/Project.xsd)|
|[RAVE Business Logic XML](http://rave.riverscapes.net/business-logic.html)|[https://raw.githubusercontent.com/Riverscapes/RaveAddIn/master/RaveAddIn/XML/XSD/project_explorer.xsd](https://raw.githubusercontent.com/Riverscapes/RaveAddIn/master/RaveAddIn/XML/XSD/project_explorer.xsd)| -->

# XML Validation

Open the XML file that you want to validate. Ensure that the XML file refers to a schema namespace in the root XML tag of the file. Here's an example from the top of a riverscapes project file referring to the [XSD file online in the GitHub repository](https://github.com/NorthArrowResearch/riverscapes-programs/blob/master/Projects/BRAT/XSD/V1/Project.xsd). The namespace reference is on line 3:

```xml
<?xml version="1.0"?>
<Project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/NorthArrowResearch/riverscapes-programs/master/Projects/BRAT/XSD/V1/Project.xsd">
	<Name>Riverscapes Context for HUC 17120007</Name>
	<ProjectType>RSContext</ProjectType>
	<Warehouse><Meta name="id">3f286d71-6191-4f5b-a6fc-468759e7f18e</Meta><Meta name="user">eeb79d24-68b5-405a-be55-8e23fdf929dc</Meta><Meta name="program">Anabranch</Meta></Warehouse><MetaData>
		<Meta name="ModelVersion">1.0.0</Meta>
		<Meta name="dateCreated">2020-05-06T12:29:43.807018</Meta>
		<Meta name="dateCreated">2020-05-06T12:29:43.817540</Meta>
		<Meta name="HUC8">17120007</Meta>
		<Meta name="Watershed">Warner Lakes</Meta>
	</MetaData>
	<Realizations>
...
```

Open the terminal pane (CTRL+J on Windows) and switch to the "Problems" tab. Any problems with the XML should be underlined in red and also appear in this Problems pane. Test that validation is working by writing some invalid XML (either a nonsense tag name or deleting an angle bracket etc.).

# Helpful Features

1. When typing XML tags use intellisense (CTRL+Space) to suggest valid tags and attributes.
1. Right click anywhere in the XML file to "reformat" the document. This will reindent the nested tags.

# Video Demonstration

<div class="responsive-embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HMw2ki-bauQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>