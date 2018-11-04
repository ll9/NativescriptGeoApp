<template>
    <Page class="page" @loaded="pageLoaded">
        <FlexboxLayout>
        <StackLayout class="form">

            <TextField hint="Email" keyboardType="email" autocorrect="false"
                autocapitalizationType="none" class="input input-border" />
            <TextField hint="Passwort" secure="true" class="input input-border" />

            <Button text="Anmelden" class="btn btn-primary" />
            <Button text="Registrieren" />

        </StackLayout>
    </FlexboxLayout>
    </Page>
</template>

<script>
import Vue from "vue";
import SDActionBar from "./SDActionBar";
import MapPage from "./MapPage";
import { navigationOptions } from "../utils/settings";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    any: () => {}
  },
  methods: {
    navigateForward() {
      this.$navigateTo(MapPage, navigationOptions);
    }
  },
  components: {
    SDActionBar
  }
});
</script>

<style scoped lang="scss">
FlexboxLayout {
  justify-content: center;
  align-items: center;
}
StackLayout {
  width: 300;
  padding: 10 16;
  background-color: #f0f0f0;
}

Button,
TextField {
  margin-bottom: 10;
}
.btn-primary {
  background-color: #cb1d00;
  margin-left: 0;
  margin-right: 0;
}
TextField {
  placeholder-color: #c4afb4;
  color: black;
}
</style>
