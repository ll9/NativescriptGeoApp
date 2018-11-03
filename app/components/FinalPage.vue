<template>
    <Page class="page" @loaded="pageLoaded">
        <SDActionBar></SDActionBar>
        <StackLayout>
            <Button text="Abschicken"></Button>
        </StackLayout>
    </Page>
</template>

<script>
import Vue from "vue";
import SDActionBar from "./SDActionBar";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    any: () => {}
  },
  methods: {},
  components: {
    SDActionBar
  }
});
</script>

<style scoped lang="scss">
</style>
