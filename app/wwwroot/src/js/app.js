var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
    })
});

function setCoordinates(payload) {
    let coordinates = ol.proj.fromLonLat(payload.coordinates)
    map.getView().animate({center: coordinates, zoom: 17});
}