<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
        <StackLayout>
            <WebView src="~/wwwroot/index.html"></WebView>
            <Button text="Get location" @tap="buttonGetLocationTap"></Button>
        </StackLayout>
    </Page>
</template>

<script>
var geolocation = require("nativescript-geolocation");

export default {
  data: function() {
    return {};
  },
  methods: {
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
              console.log("Current location is: " + JSON.stringify(loc));
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
