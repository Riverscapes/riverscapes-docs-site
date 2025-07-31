---
title: How to Use Athena 
---

We use [AWS Athena](https://aws.amazon.com/athena/) for storing and querying vast amounts of data. Its brilliance is in its simplicty. Under the hood Athena is just a folder of files with a query engine sitting on top of it. The files always columnar, either CSV, TSV or JSON or special binary column formats such as Parquet. Athena uses the Trino SQL standard. It supports the common SQL standard as well as some really powerful capabilities such as `ST_` geospatial functions.

The amazing thing about Athena is that you simply add files or update files in the folder that each database table is pointing to and all the queries see the updated data.

## Resources

- [Athena Data Types](https://docs.aws.amazon.com/athena/latest/ug/data-types.html)
- [Athena Geospatial Functions](https://docs.google.com/document/d/1x_pjrizBQfN34K3DoAKa-qedLHuuFOHV2FxG-Rn4W7E/edit?usp=sharing)
- [Athena SQL Syntax](https://docs.aws.amazon.com/athena/latest/ug/dml-queries-functions-operators.html)
