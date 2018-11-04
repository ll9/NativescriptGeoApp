<template>
    <Page class="page" @loaded="pageLoaded">
        <SDActionBar disable-back></SDActionBar>
        <StackLayout>
            <Button text="Weiter" @tap="navigateForward"></Button>
        </StackLayout>
    </Page>
</template>

<script>
import Vue from "vue";
import SDActionBar from "./SDActionBar";
import MapPage from "./MapPage";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    any: () => {}
  },
  methods: {
    navigateForward() {
      this.$navigateTo(MapPage, {
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
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
