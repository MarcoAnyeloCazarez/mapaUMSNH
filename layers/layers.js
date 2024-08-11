var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SanMiguel_MichGeo_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SanMiguel_Mich-Geo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SanMiguel_MichGeo_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11168714.842304, 2243424.574957, -11155090.304400, 2258249.509917]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_SanMiguel_MichGeo_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SanMiguel_MichGeo_1];
