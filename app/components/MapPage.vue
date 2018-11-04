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

import DataPage from "./DataPage";
import SDActionBar from "./SDActionBar";
import MapViewservice from "../utils/MapService";
import { navigationOptions } from '../utils/settings'

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
      this.MapViewservice = new MapViewservice(
        webView,
        WWW_ROOT,
        coordinates => {
          alert(coordinates);
          this.$navigateTo(DataPage, navigationOptions);
        }
      );
    },
    async buttonGetLocationTap(args) {
      await this.MapViewservice.setCoordinates();
    },
    navigateForward() {
      this.MapViewservice.getCoordinates(coordinates => {
        // TODO: navigate to next page and persist data
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
