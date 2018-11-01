<template>
    <Page class="page" @loaded="pageLoaded">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
        <StackLayout>
            <WebView id="webView"></WebView>
            <Button text="Get location" @tap="buttonGetLocationTap"></Button>
        </StackLayout>
    </Page>
</template>

<script>
var geolocation = require("nativescript-geolocation");
var webViewInterfaceModule = require("nativescript-webview-interface");
var oWebViewInterface;

export default {
  data: function() {
    return {};
  },
  methods: {
    pageLoaded(args) {
      let page = args.object;
      this.setupWebViewInterface(page);
    },

    // Initializes plugin with a webView
    setupWebViewInterface(page) {
      var webView = page.getViewById("webView");
      oWebViewInterface = new webViewInterfaceModule.WebViewInterface(
        webView,
        "~/wwwroot/index.html"
      );
    },
    buttonGetLocationTap(args) {
      var location = geolocation
        .getCurrentLocation({
          desiredAccuracy: 3,
          updateDistance: 10,
          maximumAge: 20000,
          timeout: 20000
        })
        .then(
          function(loc) {
            if (loc) {
              oWebViewInterface.callJSFunction(
                "setCoordinates",
                { coordinates: [loc.longitude, loc.latitude] },
                function(result) {
                }
              );
            }
          },
          function(e) {
            console.log("Error: " + e.message);
          }
        );
    }
  }
};
</script>

<style scoped lang="scss">
</style>
