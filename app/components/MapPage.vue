<template>
    <Page class="page" @loaded="pageLoaded">
        <SDActionBar></SDActionBar>
        <StackLayout>
            <WebView id="webView"></WebView>
            <Button text="Weiter" @tap="navigateForward"></Button>
        </StackLayout>
    </Page>
</template>

<script>
import Vue from "vue";
import * as webViewInterfaceModule from "nativescript-webview-interface";
import MapViewservice from "../utils/MapService";
import DataPage from './DataPage';
import SDActionBar from "./SDActionBar";

const WWW_ROOT = "~/wwwroot/index.html";

export default Vue.extend({
  data() {
    return {
      /** @type {MapViewservice} */
      MapViewservice: null
    };
  },
  computed: {
    any: () => {}
  },
  methods: {
    pageLoaded(args) {
      let page = args.object;
      let webView = page.getViewById("webView");
      if (webView.android) {
        webView.android.getSettings().setBuiltInZoomControls(false);
      }
      this.MapViewservice = new MapViewservice(webView, WWW_ROOT);
    },
    async buttonGetLocationTap(args) {
      await this.MapViewservice.setCoordinates();
    },
    navigateForward() {
      alert("pre")
      this.MapViewservice.getCoordinates(coordinates => {
      alert("after")
        // TODO: navigate to next page and persist data
        alert(coordinates);
        this.$navigateTo(DataPage);
      });
    }
  },
  components: {
    SDActionBar
  }
});
</script>

<style scoped lang="scss">
</style>
