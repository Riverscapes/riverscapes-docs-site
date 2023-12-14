---
title: Tool Discrimination
weight: 4
---

# Tool Discrimination
<img class="float-right" src="/images/tools/DifferentTools.png"> Discriminating tools helps potential users of the tool or users of its outputs make informed decision about whether the tool and/or its outputs are fit for _their_ purposes. The following are helpful concepts  the RC uses for discriminating model types:

- [Interface](#interface)
- [Tool-Grade](#tool-grade) (using adaptation of NASA's [Technological Readiness Levels](#technological-readiness-levels))
- [Report Cards]({{ site.baseurlf }}/Tools/reportcards.html)

What exactly is the tool itself? Tools can be defined as<sup><a href="https://www.merriam-webster.com/dictionary/tool">1</a></sup>:
> a: something (such as an instrument or apparatus) used in performing an operation or necessary in the practice of a vocation or profession.  *a scholar's books are his tools*
> 
> b: an element of a computer program (such as a graphics application) that activates and controls a particular function. *a drawing tool*

Here, we are referring to **tools** as a computer program  (similar to b), that takes input data, operates on it and produces output(s). We do not consider **tools** to be the many individual commands or functions within a specific tool (some might call such tools a toolset, or toolbox). However, we recognize that for many audiences and end-users, the output data alone is itself a "tool" to inform practice or decision making (e.g. [BRAT](http://brat.riverscapes.net)). However, in those instances the user might be more effectively consuming the outputs of a **tool** (or model, similar to definition a above) via something like the [Riverscapes Viewer](https://rave.riverscapes.net) or our [Riverscapes Warehouse](/Data_Warehouses/) . 


## Interface

RC**tools** are deployed to users thorugh a variety of interfaces:
* <img src="/images/tools/esri_icon.png"> :  [ArcGIS AddIn](https://desktop.arcgis.com/en/arcmap/10.7/guide-books/python-addins/sharing-and-installing-add-ins.htm)  ArcGIS [AddIn Toolbar](https://desktop.arcgis.com/en/arcmap/10.7/analyze/python-addins/sharing-and-installing-add-ins.htm) in ArcGIS
* <img src="/images/tools/ArcPyToolbox.png">:  [ArcPy Toolbox in ArcGIS](https://desktop.arcgis.com/en/arcmap/10.7/analyze/creating-tools/a-quick-tour-of-python-toolboxes.htm)
* <img src="/images/tools/QGIS_bw_24.png"> [QGIS Plugin](https://plugins.qgis.org/) = Toolbar in [QGIS](https://qgis.org)
* <i class="fa fa-terminal" aria-hidden="true"></i> : CLI = [Command Line Interface](https://en.wikipedia.org/wiki/Command-line_interface)
* <i class="fa fa-desktop" aria-hidden="true"></i> : GUI = [Graphical User Interface](https://en.wikipedia.org/wiki/Graphical_user_interface)
* <i class="fa fa-chrome" aria-hidden="true"></i>: Web = interactive web site
* <img  src="/images/data/api_24.png"> : API = [Application Programming Interface](https://en.wikipedia.org/wiki/Application_programming_interface)
* <img src="/images/tools/PWA.png">:  App = [Mobile App](https://en.wikipedia.org/wiki/Mobile_app)

Most tools have just one deployment interface, some have multiple. 

## Tool Grade
We classify the grade of our tools along a continuum of growth from innovative research [ideas](#concept), through to [operational](#operational-grade) tools in development that (with a little love and patience) can be run by someone other than the developer, on through to more broadly deployable [professional](#professional-grade) tools that are robust and usable by any user in very different settings. Tools that have the potential to be efficiently run with greater repetition and/or across greater spatial extents or at greater resolution may be upgraded to [production-grade](#production-grade) tools whereas those that can then be deployed to much broader audiences in the most accessible platforms (e.g. Mobile Aps, Web Aps) and with ease of sharing maybe ultimately be launched as [commercial-grade](#commercial-grade) tools.

<div align="center">
    <img src="/images/tools/grade/Tool_Badges_wText_All_700w.png">
</div>


Our [RC Technical Committee](\About\) ranks a **tool's grade** status using the following criteria:

| [Technology<br>Readiness Level](#technological-readiness-levels) | Tool Status |Badge | Vetted in <br>Peer-Reviewed <br>Literature | Source Code <br>Documentation | Open Source | User <br>Documentation | Easy User <br>Interface | Scalability |
|:-----------------------------:|------------------------|:------------------------------------------------------:|:--------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------:|
| TR1 -TR2 |[**Concept**](#concept)|<img src="/images/tools/grade/TRL_1_32p.png"> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> |
| TR3 |[**Proof of Concept**](#proof-of-concept)| <img src="/images/tools/grade/TRL_2_32p.png">  | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i><br>to<br><i class="fa fa-battery-quarter" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i> |
| TR4 |[**Research Grade**](#research-grade)|<img src="/images/tools/grade/TRL_3_32p.png">  | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-quarter" aria-hidden="true"></i> | <i class="fa fa-battery-quarter" aria-hidden="true"></i> | <i class="fa fa-battery-quarter" aria-hidden="true"></i> | <i class="fa fa-battery-quarter" aria-hidden="true"></i> <br>to<br> <i class="fa fa-battery-half" aria-hidden="true"></i> | <i class="fa fa-battery-empty" aria-hidden="true"></i><br>to<br> <i class="fa fa-battery-quarter" aria-hidden="true"></i> |
| TR5-6 | [**Operational Grade**](#operational-grade)|<img src="/images/tools/grade/TRL_4_32p.png">| <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-half" aria-hidden="true"></i> | <i class="fa fa-battery-half" aria-hidden="true"></i> | <i class="fa fa-battery-quarter" aria-hidden="true"></i> |
| TR7-8 |[**Professional Grade**](#professional-grade)| <img src="/images/tools/grade/TRL_5_32p.png"> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"> | <i class="fa fa-battery-full" aria-hidden="true"> | <i class="fa fa-battery-half" aria-hidden="true"></i> |
| TR8-9 |[**Production Grade**](#production-grade)|<img src="/images/tools/grade/TRL_6_32p.png">   | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"> | <i class="fa fa-battery-quarter" aria-hidden="true"></i> <br>to<br><i class="fa fa-battery-full" aria-hidden="true"> | <i class="fa fa-battery-full" aria-hidden="true"> |
| TR9 | [**Commercial Grade**](#commercial-grade)|<img src="/images/tools/grade/TRL_7_32p.png">  | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"></i> | <i class="fa fa-battery-full" aria-hidden="true"> | <i class="fa fa-battery-full" aria-hidden="true"> | <i class="fa fa-battery-full" aria-hidden="true"> |

None or Not Applicable: <i class="fa fa-battery-empty" aria-hidden="true"></i> •
Minimal or In Progress: <i class="fa fa-battery-quarter" aria-hidden="true"></i> •
Functional: <i class="fa fa-battery-half" aria-hidden="true"></i> •
Fully Developed: <i class="fa fa-battery-full" aria-hidden="true"></i>  

**NOTE** - The RC does not track concepts or proof of concept tools in its listing. 

-------
### Tool Grades Explained
Below we elaborate definitions for each tool-grade.

-------
#### Concept
<img class="float-left" src="/images/tools/grade/TRL_1_256w.png"> **Concept-Grade** <img src="/images/tools/grade/TRL_1_32p.png"> *is the necessary pre-cursor stage to development of any tool, in which the ideas are articulated for what the tool does, what its inputs are, what its outputs are and who its audience might be.* 

Research begins with ideas, and we formalize those ideas into hypotheses and concepts. Before we make an actual "tool", we might articulate a concept, sketch out how it might work (a conceptual model or diagram), or even write some pseudo code. Concepts are typically what gets pitched or proposed for research proposals, and sometimes in agenda-setting or state-of-the-science papers.

RC does not track "tools" before they exist, but the idea of a concept-grade is helpful and explit from NASA's original [technological readniess levels](#technological-readiness-levels).

-------
#### Proof-of-Concept
<img class="float-right" src="/images/tools/grade/TRL_2_256w.png"> 
**Proof-of-Concept-Grade** <img src="/images/tools/grade/TRL_2_32p.png"> *is a stage in which some preliminary form of a tool has been built, and the tool has been demonstrated to "work" by producing reasonalbe outputs for an example dataset.* 

The vast majority of research papers published in the riverscape sciences that use a tool the author(s) developed are using proof-of-concept-grade tools. That is to say, the results produced are scientifically defensible, the methods described are also defensible, and the investigators executed those methods with tools (e.g. source code and scripts) or workflows that they authored and developed. However, another investigator wishing to repeat the work or apply the workflow to their own dataset would  be unlikely able to *use* the tool of the authors (even if it was OpenSource) without significant refactoring or manipulation. 


-------
#### Research-Grade
<img class="float-left" src="/images/tools/grade/TRL_3_256w.png"> 

**Research-Grade** <img src="/images/tools/grade/TRL_3_32p.png"> *tools are those that are supported by peer-reviewed science, have formally been packaged up, and maybe even made open-source, but it is a tool that has really only been applied and validated within the researcher's own lab and/or study-sites.* 

**Research-Grade** tools are typically those that researchers have built to make their life easier, but the idea of the tool might be aluring to other potential users. Such tools might be associated with a methodological contribution, that other researchrs and users would like to apply or replicate, but for them to actually get the tool to work on their machine, with their data might be difficult to impossible.  These tools are sort of "buyer beware", in that they are not really made (yet) for other users (and in the case of open-source, the  "buyers" haven't paid anything... ["you get what you pay for"](https://www.merriam-webster.com/dictionary/you%20get%20what%20you%20pay%20for#:~:text=%E2%80%94used%20to%20say%20that%20a,get%20what%20you%20pay%20for.%22)).

If the RC <img src="/images/RC/RC_28.png"> is successful, we will make it easier. They are  for more researchers to lift their tools from a [proof of concept](#proof-of-concept) to **research-grade**. Research-grade tools are the minimum level required to achieve some degree of [**F**-**A**-**I**-**R**](https://force11.org/info/the-fair-data-principles/)-ness. However, the outputs of such tools can reach broader audiences more effectively, if these tools are made to output Produces [Riverscapes Projects](/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/) <img  src="https://riverscapes.net/assets/images/data/RiverscapesProject_24.png"> that can be easily consumed from a cloud-based [Warehouse]() and explored with the RiversCapes Viewer.. 

Research-grade tools straddle the "research" and "development" [TRLs](#technological-readiness-levels), where some degree of validation of the outputs and its potential utility has been demonstrated. However, the tool's application or utility for users outside the developers research group is limited. 

-------
#### Operational-Grade
<img class="float-right" src="/images/tools/grade/TRL_4_256w.png"> 

**Operational-Grade** <img src="/images/tools/grade/TRL_4_32p.png"> *is defined as.* 

Some explanation.

Operational-grade tools are firmly in the "development" [TRL](#technological-readiness-levels) realm and are based on validated and demonstrated techniques. 

-------
#### Professional-Grade
<img class="float-left" src="/images/tools/grade/TRL_5_256w.png"> 

**Professional-Grade** <img src="/images/tools/grade/TRL_5_32p.png"> *is defined as.* 

Some explanation.

-------
#### Production-Grade
<img class="float-right" src="/images/tools/grade/TRL_6_256w.png"> 

-------
**Production-Grade** <img src="/images/tools/grade/TRL_6_32p.png"> *is defined as.* 

Some explanation.

-------
#### Commercial-Grade
<img class="float-left" src="/images/tools/grade/TRL_7_256w.png"> 

**Commercial-Grade** <img src="/images/tools/grade/TRL_7_32p.png"> *is defined as.* 

Some explanation.

-----
## Technological Readiness Levels
These tool-grade ideas are based on the concept of [Technological Readiness Level](https://www.twi-global.com/technical-knowledge/faqs/technology-readiness-levels) (TRLs), as originally developed by NASA. The TRLs provide a way to discriminate between concepts and products that are in research phases, in development phases, or ready for deployment to broader audiences or market. TRLs are  illustrated below (from [TWI-global](https://www.twi-global.com/technical-knowledge/faqs/technology-readiness-levels) and formally defined by the European Union:

<div align="center">
<a href=""><img src="/images/tools/TRL.png"></a></div>

<!-----
## What is FAIR anyway?  --->



