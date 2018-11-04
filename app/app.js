import Vue from "nativescript-vue";

import LoginPage from "./components/MapPage";

new Vue({

    template: `
        <Frame>
            <LoginPage />
        </Frame>`,

    components: {
        LoginPage
    }
}).$start();
