var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CAMARALOSCARRERA_1 = new ol.format.GeoJSON();
var features_CAMARALOSCARRERA_1 = format_CAMARALOSCARRERA_1.readFeatures(json_CAMARALOSCARRERA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAMARALOSCARRERA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAMARALOSCARRERA_1.addFeatures(features_CAMARALOSCARRERA_1);
var lyr_CAMARALOSCARRERA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAMARALOSCARRERA_1, 
                style: style_CAMARALOSCARRERA_1,
                popuplayertitle: "CAMARA LOS CARRERA",
                interactive: true,
                title: '<img src="styles/legend/CAMARALOSCARRERA_1.png" /> CAMARA LOS CARRERA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CAMARALOSCARRERA_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CAMARALOSCARRERA_1];
lyr_CAMARALOSCARRERA_1.set('fieldAliases', {'ID': 'ID', 'SELLADA': 'SELLADA', 'CT (metros': 'CT (metros', 'CRe (metro': 'CRe (metro', 'CRs (metro': 'CRs (metro', 'He (metros': 'He (metros', 'Hs (metros': 'Hs (metros', 'DISTANCIA': 'DISTANCIA', 'Y': 'Y', 'X': 'X', });
lyr_CAMARALOSCARRERA_1.set('fieldImages', {'ID': 'TextEdit', 'SELLADA': 'TextEdit', 'CT (metros': 'TextEdit', 'CRe (metro': 'TextEdit', 'CRs (metro': 'TextEdit', 'He (metros': 'TextEdit', 'Hs (metros': 'TextEdit', 'DISTANCIA': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_CAMARALOSCARRERA_1.set('fieldLabels', {'ID': 'inline label - always visible', 'SELLADA': 'inline label - always visible', 'CT (metros': 'inline label - always visible', 'CRe (metro': 'inline label - always visible', 'CRs (metro': 'inline label - always visible', 'He (metros': 'inline label - always visible', 'Hs (metros': 'inline label - always visible', 'DISTANCIA': 'inline label - always visible', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', });
lyr_CAMARALOSCARRERA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});