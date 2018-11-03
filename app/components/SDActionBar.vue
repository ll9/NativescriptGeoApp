<template>
        <ActionBar class="action-bar" title="luxData.smallApp">
              <NavigationButton v-if="!disableBack" text="Zurück" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
      disableBack: {
          type: Boolean,
          default: false
      }
  },
  data() {
    return {};
  },
  computed: {
    any: () => {}
  },
  methods: {}
});
</script>

<style scoped lang="scss">
</style>
