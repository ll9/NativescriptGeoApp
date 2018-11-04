import * as webViewInterfaceModule from 'nativescript-webview-interface';
import * as geolocation from 'nativescript-geolocation';

const locationOptions = {
    desiredAccuracy: 3,
    updateDistance: 10,
    maximumAge: 20000,
    timeout: 20000
};

export default class MapViewService {
    /**
     * @param {object} args Webview args
     * @param {string} root Path of the source Web Directory
     * @param {() => any}
     */
    constructor(webView, root, navigateCallback) {
        this.webView = webView;
        this.root = root;
        this.navigateCallback = navigateCallback

        this.oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, root);
        this.initEventListeners();
    }

    initEventListeners() {
        this.oWebViewInterface.on('request-coordinates', (evt) => {
            this.setCoordinates();
        })

        this.oWebViewInterface.on('coordinates-set', (coordinates) => {
            this.navigateCallback(coordinates);
        });
    }

    /**
     * 
     * @param {(coordinates: float[]) => void} callback 
     */
    getCoordinates(callback) {
        this.oWebViewInterface.callJSFunction('getCoordinates', null, (resp) => {
            callback(resp);
        })
    }

    async setCoordinates() {
        let location = await geolocation
            .getCurrentLocation(locationOptions)
            .catch(err => alert("GPS konnte nicht ermittelt werden"))
        if (!location) return;


        let coordinates = [location.longitude, location.latitude]
        this.oWebViewInterface.callJSFunction('setCoordinates', [coordinates])
    }


}