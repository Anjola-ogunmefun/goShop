<template>
  <section>
    <the-header></the-header>

    <base-button>
      <li
        v-if="selectedTab !== 'the-market'"
        class="nav-item mr-2"
        @click="changeSelectedTab('the-market')"
        :class="marketTab"
      >
        <a class="btn btn-outline-danger btn-lg">List items</a>
      </li>
      <li
        v-if="selectedTab !== 'my-cart'"
        class="nav-item"
        @click="changeSelectedTab('my-cart')"
        :class="cartTab"
      >
        <a class="btn btn-outline-danger btn-lg" >My cart</a>
      </li>
    </base-button>

    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </section>
</template>

<script>
export default {
  props: ["something"],
  data() {
    return {
      selectedTab: "the-market",

      
    };
  },
  computed: {
    marketTab() {
      if (this.selectedTab === "the-market") {
        return "active";
      }
      return null;
    },
    cartTab() {
      return this.selectedTab === "my-cart" ? "active" : null;
    },
  },
  methods: {
    changeSelectedTab(component) {
      this.selectedTab = component;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: monospace;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  cursor: pointer;
  font-size: 2rem;
}
@media only screen and (max-width: 600px) {
 a{
   margin-right: -80px;
 }
}
</style>
