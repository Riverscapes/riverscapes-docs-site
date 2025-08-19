---
title: Tool Discrimination
weight: 4
---

What exactly is the tool itself? Tools are [defined by Merriam-Webster](https://www.merriam-webster.com/dictionary/tool) as:
> a: something (such as an instrument or apparatus) used in performing an operation or necessary in the practice of a vocation or profession.  *a scholar's books are his tools*
>
> b: an element of a computer program (such as a graphics application) that activates and controls a particular function. *a drawing tool*

Here, we are referring to **tools** as a computer program  (similar to b), that takes input data, operates on it and produces output(s). We do not consider **tools** to be the many individual commands or functions within a specific tool (some might call such tools a toolset, or toolbox). However, we recognize that for many audiences and end-users, the output data alone is itself a "tool" to inform practice or decision making (e.g. [BRAT](http://brat.riverscapes.net)). However, in those instances the user might be more effectively consuming the outputs of a **tool** (or model, similar to definition a above) via something like the [Riverscapes Viewer](https://rave.riverscapes.net) or our [Riverscapes Warehouse](/Data_Warehouses/).

## Interface

RC tools are deployed to users through a variety of interfaces. Most tools have just one deployment interface, some have multiple.

* [ArcGIS AddIn](https://desktop.arcgis.com/en/arcmap/10.7/guide-books/python-addins/sharing-and-installing-add-ins.htm) 
* [AddIn Toolbar](https://desktop.arcgis.com/en/arcmap/10.7/analyze/python-addins/sharing-and-installing-add-ins.htm) in ArcGIS
* [ArcPy Toolbox in ArcGIS](https://desktop.arcgis.com/en/arcmap/10.7/analyze/creating-tools/a-quick-tour-of-python-toolboxes.htm)
* [QGIS Plugin](https://plugins.qgis.org/) = Toolbar in [QGIS](https://qgis.org)
* CLI = [Command Line Interface](https://en.wikipedia.org/wiki/Command-line_interface)
* GUI = [Graphical User Interface](https://en.wikipedia.org/wiki/Graphical_user_interface)
* Web = interactive web site
* API = [Application Programming Interface](https://en.wikipedia.org/wiki/Application_programming_interface)
* App = [Mobile App](https://en.wikipedia.org/wiki/Mobile_app)

## Tool Grade

We classify the grade of our tools along a continuum of growth from innovative research [ideas](#concept), through to [operational](#operational-grade) tools in development that (with a little love and patience) can be run by someone other than the developer, on through to more broadly deployable [professional](#professional-grade) tools that are robust and usable by any user in very different settings. Tools that have the potential to be efficiently run with greater repetition and/or across greater spatial extents or at greater resolution may be upgraded to [production-grade](#production-grade) tools whereas those that can then be deployed to much broader audiences in the most accessible platforms (e.g. Mobile Aps, Web Aps) and with ease of sharing maybe ultimately be launched as [commercial-grade](#commercial-grade) tools.

The Riverscapes Consortium Technical Committee ranks tool grade status using the following criteria:

|[Technological Readiness Levels](#technological-readiness-levels)|Tool Status|Vetted in Peer-Reviewed Literature|Source Code Documentation|Open Source|User Documentation|Easy User Interface|Scalability|
|--|--|:--:|:--:|:--:|:--:|:--:|:--:|
|TR1-2|Concept|❌|❌|❌|❌|❌|❌|
|TR3|Proof of Concept|🟢|❌|🟨|❌|❌|❌|
|TR4|Research Grade|🟢|🟨|🟨|🟨|🟨|🟢|
|TR5-6|Operational Grade|🟢|🟢|🟢|🟨|🟨|🟨|
|TR7-8|Professional Grade|🟢|🟢|🟢|🟢|🟢|🟨|
|TR8-9|Production Grade|🟢|🟢|🟢|🟢|🟨|🟢|
|TR9|Commercial Grade|🟢|🟢|🟢|🟢|🟢|🟢|

* ❌ criteria not fulfilled
* 🟨 criteria partially or completely fulfilled
* 🟢 criteria completely fulfilled

### Tool Grades Explained

Below we elaborate definitions for each tool-grade.

#### Concept
<!-- TODO <img class="float-left" src="/images/tools/grade/TRL_1_256w.png"> **Concept-Grade** <img src="/images/tools/grade/TRL_1_32p.png"> *is the necessary pre-cursor stage to development of any tool, in which the ideas are articulated for what the tool does, what its inputs are, what its outputs are and who its audience might be.*  -->

Research begins with ideas, and we formalize those ideas into hypotheses and concepts. Before we make an actual "tool", we might articulate a concept, sketch out how it might work (a conceptual model or diagram), or even write some pseudo code. Concepts are typically what gets pitched or proposed for research proposals, and sometimes in agenda-setting or state-of-the-science papers.

RC does not track "tools" before they exist, but the idea of a concept-grade is helpful and explit from NASA's original [technological readiness levels](#technological-readiness-levels).

#### Proof-of-Concept
<!-- TODO <img class="float-right" src="/images/tools/grade/TRL_2_256w.png"> 
**Proof-of-Concept-Grade** <img src="/images/tools/grade/TRL_2_32p.png"> *is a stage in which some preliminary form of a tool has been built, and the tool has been demonstrated to "work" by producing reasonalbe outputs for an example dataset.*  -->

The vast majority of research papers published in the riverscape sciences that use a tool the author(s) developed are using proof-of-concept-grade tools. That is to say, the results produced are scientifically defensible, the methods described are also defensible, and the investigators executed those methods with tools (e.g. source code and scripts) or workflows that they authored and developed. However, another investigator wishing to repeat the work or apply the workflow to their own dataset would  be unlikely able to *use* the tool of the authors (even if it was Open Source) without significant refactoring or manipulation.

#### Research-Grade
<!-- TODO <img class="float-left" src="/images/tools/grade/TRL_3_256w.png">  -->

<!-- TODO **Research-Grade** <img src="/images/tools/grade/TRL_3_32p.png"> *tools are those that are supported by peer-reviewed science, have formally been packaged up, and maybe even made open-source, but it is a tool that has really only been applied and validated within the researcher's own lab and/or study-sites.*  -->

**Research-Grade** tools are typically those that researchers have built to make their life easier, but the idea of the tool might be alluring to other potential users. Such tools might be associated with a methodological contribution, that other researchrs and users would like to apply or replicate, but for them to actually get the tool to work on their machine, with their data might be difficult to impossible.  These tools are sort of "buyer beware", in that they are not really made (yet) for other users (and in the case of open-source, the  "buyers" haven't paid anything... ["you get what you pay for"](https://www.merriam-webster.com/dictionary/you%20get%20what%20you%20pay%20for#:~:text=%E2%80%94used%20to%20say%20that%20a,get%20what%20you%20pay%20for.%22)).

<!-- TODO If the RC <img src="/images/RC/RC_28.png"> is successful, we will make it easier. They are  for more researchers to lift their tools from a [proof of concept](#proof-of-concept) to **research-grade**. Research-grade tools are the minimum level required to achieve some degree of [**F**-**A**-**I**-**R**](https://force11.org/info/the-fair-data-principles/)-ness. However, the outputs of such tools can reach broader audiences more effectively, if these tools are made to output Produces [Riverscapes Projects](/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/) <img  src="https://riverscapes.net/assets/images/data/RiverscapesProject_24.png"> that can be easily consumed from a cloud-based [Warehouse]() and explored with the RiversCapes Viewer..  -->

Research-grade tools straddle the "research" and "development" [TRLs](#technological-readiness-levels), where some degree of validation of the outputs and its potential utility has been demonstrated. However, the tool's application or utility for users outside the developers research group is limited.

#### Operational-Grade
<!-- TODO <img class="float-right" src="/images/tools/grade/TRL_4_256w.png">  -->

<!-- TODO **Operational-Grade** <img src="/images/tools/grade/TRL_4_32p.png"> *is defined as.*  -->

Some explanation.

Operational-grade tools are firmly in the "development" [TRL](#technological-readiness-levels) realm and are based on validated and demonstrated techniques.

#### Professional-Grade
<!-- TODO <img class="float-left" src="/images/tools/grade/TRL_5_256w.png">  -->

<!-- TODO **Professional-Grade** <img src="/images/tools/grade/TRL_5_32p.png"> *is defined as.*  -->

Some explanation.


#### Production-Grade
<!-- TODO <img class="float-right" src="/images/tools/grade/TRL_6_256w.png">  -->


<!-- TODO **Production-Grade** <img src="/images/tools/grade/TRL_6_32p.png"> *is defined as.*  -->

Some explanation.

#### Commercial-Grade
<!-- TODO <img class="float-left" src="/images/tools/grade/TRL_7_256w.png">  -->

<!-- TODO **Commercial-Grade** <img src="/images/tools/grade/TRL_7_32p.png"> *is defined as.*  -->

Some explanation.


## Technological Readiness Levels

These tool-grade ideas are based on the concept of [Technological Readiness Level](https://www.twi-global.com/technical-knowledge/faqs/technology-readiness-levels) (TRLs), as originally developed by NASA. The TRLs provide a way to discriminate between concepts and products that are in research phases, in development phases, or ready for deployment to broader audiences or market. TRLs are  illustrated below (from [TWI-global](https://www.twi-global.com/technical-knowledge/faqs/technology-readiness-levels) and formally defined by the European Union:

![TRL](/img/tools/TRL.png)
