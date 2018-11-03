var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4,
        enableRotation: false,
    })
});

function getCoordinates() {
    let coordinates = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857' ,'EPSG:4326')
    return coordinates;
}
function setCoordinates(_coordinates) {
    let coordinates = ol.proj.fromLonLat(_coordinates)
    map.getView().animate({center: coordinates, zoom: 17});
}

const oWebViewInterface = window.nsWebViewInterface;

document.addEventListener('DOMContentLoaded', () => {
    let locationButton = document.getElementById("location-button");
    locationButton.onclick = () => {
        oWebViewInterface.emit('request-coordinates');
    }
}, false);
