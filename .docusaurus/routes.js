import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/riverscapes-docs/__docusaurus/debug',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug', 'bf1'),
    exact: true
  },
  {
    path: '/riverscapes-docs/__docusaurus/debug/config',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug/config', '24f'),
    exact: true
  },
  {
    path: '/riverscapes-docs/__docusaurus/debug/content',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug/content', 'a2c'),
    exact: true
  },
  {
    path: '/riverscapes-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug/globalData', 'e2e'),
    exact: true
  },
  {
    path: '/riverscapes-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug/metadata', 'd81'),
    exact: true
  },
  {
    path: '/riverscapes-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug/registry', 'f25'),
    exact: true
  },
  {
    path: '/riverscapes-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/riverscapes-docs/__docusaurus/debug/routes', 'a12'),
    exact: true
  },
  {
    path: '/riverscapes-docs/',
    component: ComponentCreator('/riverscapes-docs/', 'c13'),
    routes: [
      {
        path: '/riverscapes-docs/',
        component: ComponentCreator('/riverscapes-docs/', '294'),
        routes: [
          {
            path: '/riverscapes-docs/',
            component: ComponentCreator('/riverscapes-docs/', 'f77'),
            routes: [
              {
                path: '/riverscapes-docs/dev-tools/',
                component: ComponentCreator('/riverscapes-docs/dev-tools/', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/dev-tools/cyber-castor',
                component: ComponentCreator('/riverscapes-docs/dev-tools/cyber-castor', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/dev-tools/rscli',
                component: ComponentCreator('/riverscapes-docs/dev-tools/rscli', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/dev-tools/rsxml',
                component: ComponentCreator('/riverscapes-docs/dev-tools/rsxml', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/',
                component: ComponentCreator('/riverscapes-docs/documentation/', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/brat-capacity-validation',
                component: ComponentCreator('/riverscapes-docs/documentation/brat-capacity-validation', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/brat-parameterization',
                component: ComponentCreator('/riverscapes-docs/documentation/brat-parameterization', '6e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/demo',
                component: ComponentCreator('/riverscapes-docs/documentation/demo', 'ba3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/project-getting-started',
                component: ComponentCreator('/riverscapes-docs/documentation/project-getting-started', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/rstools',
                component: ComponentCreator('/riverscapes-docs/documentation/rstools', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/documentation/visual-identity',
                component: ComponentCreator('/riverscapes-docs/documentation/visual-identity', '432'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/merging-projects',
                component: ComponentCreator('/riverscapes-docs/merging-projects', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/About/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/About/', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Data_Warehouses/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Data_Warehouses/', '015'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Data_Warehouses/gettingaround',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Data_Warehouses/gettingaround', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Data_Warehouses/signup',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Data_Warehouses/signup', '514'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/RiverscapesXML/GHActions',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/RiverscapesXML/GHActions', 'aca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/RiverscapesXML/ProjectReferences',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/RiverscapesXML/ProjectReferences', '3a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/', 'fca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/discrimination',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/discrimination', '3a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/reportcards',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/reportcards', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/database',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/database', 'c55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Program/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Program/', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/datasources',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/datasources', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/guids',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/guids', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/metadata',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/metadata', '1f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/project-links',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/project-links', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/projectxml',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/projectxml', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/realizations',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/Project/realizations', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/xml_validation',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Riverscapes_Projects/xml_validation', 'fc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Source_Code/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/Source_Code/', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/', '8d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/bibliographies',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/bibliographies', 'e8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/Common',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/Common', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/Consistency',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/Consistency', '3e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/creating_new_pages',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/creating_new_pages', '615'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/edits',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/edits', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/ReportCards/',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/ReportCards/', '7f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/ReportCards/Tool_ReportCard_0-0-00',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/ReportCards/Tool_ReportCard_0-0-00', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/styleguide',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/styleguide', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/subdomain',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/subdomain', '39c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/testing_locally',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/testing_locally', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/theming',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/theming', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/writing_content',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/Documentation_Standards/WebSites/writing_content', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/Technical_Reference/videos',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/Technical_Reference/videos', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/toolStandards',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/toolStandards', '311'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/MIGRATED/Tools/valueproposition',
                component: ComponentCreator('/riverscapes-docs/MIGRATED/Tools/valueproposition', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/standards/',
                component: ComponentCreator('/riverscapes-docs/standards/', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/riverscapes-docs/',
                component: ComponentCreator('/riverscapes-docs/', '13b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
