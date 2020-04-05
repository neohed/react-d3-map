# React D3 Map

Examples of D3 Geo maps in React.

## Resources

### Full Tutorial Including installing GDAL & Others

* https://bost.ocks.org/mike/map/

#### Windows Install

* https://sandbox.idre.ucla.edu/sandbox/tutorials/installing-gdal-for-windows

#### MAC Install

* https://sandbox.idre.ucla.edu/sandbox/general/how-to-install-and-run-gdal

### Explanation of working with topojson files

* http://anotherpeak.org/blog/visualization/2018/01/08/d3_geodata_topojson.html

### Description of Formats 

* https://medium.com/@amy.degenaro/introduction-to-digital-cartography-geojson-and-d3-js-c27f066aa84

### Coronavirus Datasets

* https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports
* https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales

## Process

### 1 - Installation of Software

1) Install Python
    https://www.python.org/downloads/

2)  Install GDAL & Python Bindings
    http://www.gisinternals.com/release.php
    a)  Core "gdal-300-1900-x64-core.msi"
    b) Python bindings for the version of Python you installed

3) Path variables
    https://gis.stackexchange.com/questions/326968/ogr2ogr-error-1-proj-pj-obj-create-cannot-find-proj-db
    
    >setx GDAL_DATA "C:\Program Files\GDAL\gdal-data"
     setx GDAL_DRIVER_PATH "C:\Program Files\GDAL\gdalplugins"
     setx PROJ_LIB "C:\Program Files\GDAL\projlib"
     setx PYTHONPATH "C:\Program Files\GDAL\"

4) Test in a cmd:

> gdalinfo --version
>
>5) npm install -g topojson

### 2 - Data

1) Download
    http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_map_subunits.zip
    
2) Convert .shp file to geojson
     ogr2ogr -f GeoJSON world.json ne_10m_admin_0_map_subunits.shp

3) Convert to topojson
    geo2topo world.json > world.topo.json

4) Simplify, quantize and compress
    https://medium.com/@mbostock/command-line-cartography-part-3-1158e4c55a1e

### Build

1) React app + packages
    npm i -S d3-geo topojson-client
    
2) Show map
3) Zoom + pan functionality
4) Add data points

## Todo

1) Get map working - restructure this project!
2) Create version with variable params for D3 geo.
3) Create version with different resolution datasets.
