// $(document).ready(function() {



    require([
        "esri/Map",
        "esri/views/MapView",
        "dojo/domReady!"
    ], function(Map, MapView) {
        var map = new Map({
            basemap: "streets"
        });
        
        var view = new MapView({
            container: "viewDiv",  
            map: map,
            zoom: 8,
            center: [-79.5, 38]              
        });
    });

// });