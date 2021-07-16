<template>
  <div class="container">
    <div class="row">
      <section>
        <list-items
          v-for="item in list"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :description="item.description"
          :price="item.price"
          :url="item.url"
          @cart-content="showInCart"
        ></list-items>
      </section>
    </div>
  </div>
</template>

<script>
import ListItems from "./ListItems.vue";
export default {
  components: {
    ListItems,
  },
  data() {
    return {
      myCart: [],
    };
  },
  computed: {
    list() {
      return this.$store.getters["allItems"];
    },
  },

  methods: {
    showInCart(name, itemQuantity, value, id, url) {
      const addedItem = {
        name,
        itemQuantity,
        value,
        id,
        url,
      };
      this.$store.dispatch("addItem", addedItem);
      this.$store.dispatch("addCost", addedItem);
      const val = this.$store.getters["getTotalCost"];


      const added = val.reduce((prev, next) => {
        console.log(prev, next);
        return prev + next;
      }, 0);
      this.$store.dispatch("sum", added);
      console.log({ added });
    },
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.75rem;
}
</style>
