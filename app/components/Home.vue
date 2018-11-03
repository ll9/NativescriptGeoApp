<template>
    <Page class="page" @loaded="pageLoaded">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
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
      this.MapViewservice.getCoordinates((coordinates) => {
        // TODO: navigate to next page and persist data
        alert(coordinates);
      })
    }
  }
});
</script>

<style scoped lang="scss">
</style>
