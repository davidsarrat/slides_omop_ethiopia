# Code layout

A federated query over the OMOP CDM with DataSHIELD:

```r
library(DSI)
library(dsBaseClient)

# Connect to participating sites
logindata <- read.csv("logindata.csv")
conns <- datashield.login(logins = logindata, assign = TRUE)

# Count patients with a Type 2 diabetes diagnosis — per site, no row-level data leaves
ds.table("D$condition_occurrence$condition_concept_id", datasources = conns)
```

Inline code like `ds.mean()` and fenced blocks are both themed for the DSWB palette.
