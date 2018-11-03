<template>
    <Page class="page" @loaded="pageLoaded">
        <SDActionBar></SDActionBar>
        <StackLayout>
            <Button text="Weiter" @tap="navigateForward"></Button>
        </StackLayout>
    </Page>
</template>

<script>
import Vue from "vue";
import SDActionBar from "./SDActionBar";
import FinalPage from "./FinalPage";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    any: () => {}
  },
  methods: {
    navigateForward() {
      this.$navigateTo(FinalPage);
    }
  },
  components: {
    SDActionBar
  }
});
</script>

<style scoped lang="scss">
</style>
