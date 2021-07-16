import { createApp } from "vue";

import App from "./App.vue";
import store from "./store.js"

import TheHeader from "./components/baseComponents/TheHeader.vue";
import BaseButton from "./components/baseComponents/BaseButton.vue";
import MyCart from "./components/MyCart.vue";
import TheMarket from "./components/TheMarket.vue";
import CartStructure from "./components/CartStructure.vue";

const app = createApp(App);

app.use(store)

app.component("the-header", TheHeader);
app.component("base-button", BaseButton);
app.component("my-cart", MyCart);
app.component("the-market", TheMarket);
app.component("cart-structure", CartStructure);

app.mount("#app");
