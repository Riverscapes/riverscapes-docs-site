---
title: Permissions
---

[Data Exchange](https://data.riverscapes.net) projects can be owned by either individual users or organizations. Projects can also be made public or secret. The combination of these two concepts - ownership and visibility - provides a powerful system for managing who can discover and then work with data.

## Ownership

All projects are owned by a single entity, either an individual user or an organization. Obviously if a project is owned by an individual user then that user has full control over the project. That user can control who can discover and see the project simply by changing the visibility setting on each individual project.

However, if a project is owned by an **organization** then a series of roles determines what other users can do with the project. In the table below the term "edit" refers to several operations:

- Edit the project title, summary, description, tags
- Change the project visibility between public and private
- Archive and unarchive a project


Role|Discover Public Projects Via Search|Discover Private Projects via Search|Upload Projects|Edit Projects|Delete Projects|Manage Organization Users|Delete Organization
---|:---:|:---:|:---:|:---:|:---:|:---:|:---:
_No Role_ - users who do not belong to the organization|✅
Viewer|✅|✅
Contributor|✅|✅|✅|✅|✅|||
Administrator|✅|✅|✅|✅|✅|✅||
Owner|✅|✅|✅|✅|✅|✅|✅|

These permissions not only apply to the Riverscapes Data Exchange web application, but they are also enforced when using the API via other means, such as from programmatic code (e.g. Python) or the command line interface ([rscli](/products/rscli)).