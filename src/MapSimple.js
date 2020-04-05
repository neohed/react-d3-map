import React, {useState, useEffect} from "react";
import data from './data/world_q10s9.topo';
import {feature} from 'topojson-client';
import {geoMercator, geoPath} from 'd3-geo';

const features = feature(data, data.objects.world);

const svgStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    marginTop: '64px'
};
const mapStyle = {
    fill: 'silver',
    stroke: 'black'
};
const width = 860,
    height = 600;

const MapSimple = () => {
    const [mapOutline, setMapOutline] = useState(null);

    useEffect(() => {
        const projection = geoMercator();
        /*
            .scale(baseScale * k) // Make the map larger to fit the SVG canvas
            .translate([tx, ty]) // translate centers the image
            .center([0, 55.1]) // Without this the UK appears off the top of the SVG canvas
            .rotate([3.3, -0.1]) // rotate the globe...? This moves the UK into the center of the canvas.
            .parallels([50, 60]); // This "lengthens" the UK, making it look less squished
         */

        const pathGenerator = geoPath().projection(projection);

        setMapOutline(features.features
            .map((d, i) => <path key={i} d={pathGenerator(d)} style={mapStyle} />));
    }, [
        data
    ]);

    return <svg width={width} height={height} style={svgStyle}>
        <g>
            {mapOutline}
        </g>
    </svg>
};

export default MapSimple;
