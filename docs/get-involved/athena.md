---
title: How to Use Athena 
---

We use [AWS Athena](https://aws.amazon.com/athena/) for storing and querying vast amounts of data. Its brilliance is in its simplicty. Under the hood Athena is just a folder of files with a query engine sitting on top of it. The files always columnar, either CSV, TSV or JSON or special binary column formats such as Parquet. Athena uses the Trino SQL standard. It supports the common SQL standard as well as some really powerful capabilities such as `ST_` geospatial functions.

The amazing thing about Athena is that you simply add files or update files in the folder that each database table is pointing to and all the queries see the updated data.

## Resources

- [Athena Data Types](https://docs.aws.amazon.com/athena/latest/ug/data-types.html)
- [Athena Geospatial Functions](https://trino.io/docs/current/functions/geospatial.html)
- [Athena SQL Syntax](https://docs.aws.amazon.com/athena/latest/ug/dml-queries-functions-operators.html)

# Add a Geospatial Layer to Athena

There are probably many ways to do this, but these are the steps that we have used to date.

1. The layer is single part polygon (Athena cannot handle multipart features)
1. We try to standardize on layers in WGS84 (EPSG:4326)
1. Put the feature class in a GeoPackage
1. Open the GeoPackage in DataGrip
1. Download Spatialite for your operating system and load this Spatialite extension.
1. Select the features from the feature class table, converting the geometries to well known text (WKT)
1. Save the query result to Tab Separated Values (TSV). Do not use CSV because the WKT will contain commas.
1. Upload the TSV file to appropriate S3 bucket.
1. Run Athena `CREATE TABLE` command to create the database table.
1. run Athena queries against the new table.

```sql
-- Command to load Spatialite;
SELECT load_extension('/opt/homebrew/Cellar/libspatialite/5.1.0_1/lib/mod_spatialite.8.dylib')

-- Query to convert GeoPackage geometries to WKT
SELECT <columns_required_for_athena>, ST_ASTEXT(CastAutomagic(geom)) AS GEOM FROM <feature_class_table_name>;
```

And here's an example Athena CREATE TABLE query

```sql
CREATE EXTERNAL TABLE `athena_table_name`(
  <file_list_and_data_types>
  `geom` string)
ROW FORMAT DELIMITED 
  FIELDS TERMINATED BY '\t' 
STORED AS INPUTFORMAT 
  'org.apache.hadoop.mapred.TextInputFormat' 
OUTPUTFORMAT 
  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
  's3::/<athena_bucket>'
TBLPROPERTIES (
  'skip.header.line.count'='1', )
  ```