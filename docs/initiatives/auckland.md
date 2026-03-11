---
title: Auckland
---

# Riverscapes Projects

| Type | [Milldale](https://data.riverscapes.net/s?type=Project&tags=Milldale&view=map) | [Silverdale](https://data.riverscapes.net/s?type=Project&tags=Silverdale&view=map) | [Pine Valley](https://data.riverscapes.net/s?type=Project&tags=PineValley) |
| :--- | :--- | :--- | :--- |
| [TauDEM](https://data.riverscapes.net/s?type=Project&owner=ORGANIZATION%3Ad90a2b33-205a-424b-b77e-4e72741b1783&projectTypeId=taudem&view=map) | [Data](https://data.riverscapes.net/p/2960d5c3-9af9-4a91-91a7-b5a8cc9510ab) | [Data](https://data.riverscapes.net/p/4c37af4e-17f6-4b65-9661-612b7c4e22e2) | [Data](https://data.riverscapes.net/p/eb4daa30-5e8f-4700-bd88-52568eb95f1a) |
| [VBET](https://data.riverscapes.net/s?type=Project&owner=ORGANIZATION%3Ad90a2b33-205a-424b-b77e-4e72741b1783&projectTypeId=vbet&view=map) | [Data](https://data.riverscapes.net/p/2cff5ccb-6754-4e5a-906c-bf5043b804e6) | [Data](https://data.riverscapes.net/p/9f665dc3-948b-4b03-b715-207b54c9cce2) | [Data](https://data.riverscapes.net/p/45e32135-94a2-4c20-8fc5-c91e38e90c6d) |

<!--
Athena query to get the data for the above table

SELECT
    regexp_extract(name, '^(TauDEM|VBET)') as project_type,
    -- Milldale Column
    MAX(CASE WHEN name LIKE '%Milldale%'
        THEN '[' || 'Data' || '](https://your-portal-url.com/project/' || uuid || ')'
        ELSE '' END) as Milldale,
    -- Silverdale Column
    MAX(CASE WHEN name LIKE '%Silverdale%'
        THEN '[' || 'Data' || '](https://your-portal-url.com/project/' || uuid || ')'
        ELSE '' END) as Silverdale,
    -- Pine Valley Column (Handles both 'PineValley' and 'Pine Valley')
    MAX(CASE WHEN name LIKE '%Pine%Valley%'
        THEN '[' || 'Data' || '](https://your-portal-url.com/project/' || uuid || ')'
        ELSE '' END) as Pine_Valley
FROM rs_raw.data_exchange_projects
WHERE contains(tags, 'PineValley')
   OR contains(tags, 'Silverdale')
   OR contains(tags, 'Milldale')
GROUP BY 1
ORDER BY 1;
-->

# Links and Resources

- [Auckland Council Open Data Search API](https://data-aucklandcouncil.opendata.arcgis.com/api/search/definition/)
- [Auckland Council Open Data](https://data-aucklandcouncil.opendata.arcgis.com/) (ArcGIS Services)
- [Integrated Catchment Planning Tool](https://aklc.govt.nz/portal/apps/webappviewer/index.html)
