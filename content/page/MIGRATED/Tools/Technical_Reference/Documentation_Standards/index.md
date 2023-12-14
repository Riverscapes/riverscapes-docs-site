---
title: Documentation Standards
weight: 1
---


<div class="row small-up-2 medium-up-3">
  <div class="column">
    <div class="card">
      <img src="/images/audience.png">
      <div class="card-section">
        <h4>Intended Audience</h4>
        <ul>
        <li>RC - Tool Developers </li>
        <li>RC - Website/Documentation Contributors </li>
        </ul>
      </div>
    </div>
  </div>

</div>




Consistent documentation is fundamental to the riverscapes consortium philosophy. In practical terms this minimally involves the following types of documentation:

* [Source code documentation](Source_Code) explaining the various components of a tool and how they work
* [Tool web sites](WebSites) for end users to discover, download and run the tools
* [Riverscapes Projects](Riverscapes_Projects) metadata to accompany the outputs of each tool

The above resources are intended as a reference and guide for  RC developers and website contributors. 

### Best Practice Examples

#### BRAT - A New Research-Grade Script
In the case of tools or models that represent novel, new and/or significant methodological advances or scientific contributions, the model should also be vetted  in the peer-reviewed scholarly literature. For example, the RC [BRAT](http://brat.riverscapes.net) (Beaver Restoration Assessment Tool) beaver dam capacity model (BRAT) was originally vetted in:
- Macfarlane W.W. , Wheaton J.M., Bouwes N., Jensen M., Gilbert J.T., Hough-Snee N., and Shivick J. 2015. [Modeling the capacity of riverscapes to support beaver dams](https://www.researchgate.net/publication/285590037_Modeling_the_capacity_of_riverscapes_to_support_beaver_dams). Geomorphology. DOI: [10.1016/j.geomorph.2015.11.019](http://dx.doi.org/10.1016/j.geomorph.2015.11.019).

However, BRAT's 
- Source code documentation is in its open-source [Riverscapes](https://github.com/Riverscapes) GitHub repo in the Riverscapes: 
[https://github.com/Riverscapes/pyBRAT/](https://github.com/Riverscapes/pyBRAT/)
- The tool website at [https://brat.riverscapes.net]( https://brat.riverscapes.net) has all the end-user tool documentaoin
- Examples of BRAT data are available in Riverscapes Warehouses from  [https://brat.riverscapes.net/BRATData]( https://brat.riverscapes.net/BRATData)  

### Tributary Impact - Implementing a Research Grade Script
By contrast, agorithms and methods that have already been published and vetted, but are simply packaged into an opensource tool for others to use should cite the original author   
 For example, the [Tributary Impact](http://tributaryimpact.riverscapes.net/) was originally vetted and presented in:
- Rice SP. 2017. Tributary connectivity, confluence aggradation and network biodiversity. Geomorphology 277 : 6–16. DOI: [10.1016/j.geomorph.2016.03.027](http://dx.doi.org/10.1016/j.geomorph.2016.03.027)

However, the algorithm was coded up to implement and shared as
- Source code documentation is in its open-source [Riverscapes](https://github.com/Riverscapes) GitHub repo in the Riverscapes: 
[https://github.com/Riverscapes/TributaryImpact](https://github.com/Riverscapes/TributaryImpact)
- The tool website at [http://tributaryimpact.riverscapes.net/](http://tributaryimpact.riverscapes.net/) and is minimally documented for transparency
