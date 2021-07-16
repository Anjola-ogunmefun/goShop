<template>
  <section>
    <div class="container">
      <div class="row">
        <h2 class="display-4 text-center">My cart</h2>
        <hr />
        <p v-if="cart.length === 0" class="display-5 text-center">
          Cart is Empty!
        </p>

        <cart-structure
          v-else
          v-for="product in cart"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :value="product.value"
          :itemQuantity="product.itemQuantity"
          :url="product.url"
          @remove-product="deleteItem(product.id)"
        >
        </cart-structure>
        <h1 v-if="sum < 1" class="text-center">
          Total: <span style="margin:0">&#8358;</span> 0
        </h1>
        <h1 v-else class="text-center">
          Total: <span style="margin:0">&#8358;</span>
          {{ sum.toLocaleString() }}
        </h1>

        <div class="col-6 offset-3 text-center">
          <button
            class="btn btn-warning btn-lg text-center"
            :disabled="isActive"
            @click="clear"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.cart.length === 0 ? true : false;
    },
    cart() {
      return this.$store.getters["getCart"];
    },
    sum() {
      return this.$store.getters["getSumTotal"];
    },
  },
  methods: {
    clear() {
      this.cart.splice(0, this.cart.length);
      this.$store.dispatch("clearTotalCost", []);
      const val = this.$store.getters["getTotalCost"];
      const reducer = (accumulator, currentValue) => accumulator - currentValue;
      const added = val.reduce(reducer);
      this.$store.dispatch("sum", added);
    },
    deleteItem(id) {
      const itemToDelete = this.cart.find((item) => id === item.id);
      const indexOfItem = this.cart.indexOf(itemToDelete);
      this.cart.splice(indexOfItem, 1);
      const val = this.$store.getters["getTotalCost"];

      val.splice(indexOfItem, 1);

      const added = val.reduce((prev, next) => {
        return prev + next;
      }, 0);
      this.$store.dispatch("sum", added);
    },
  },
};
</script>

<style scoped>
p {
  margin-top: 100px;
}
h1,
button {
  margin: 50px 0px;
}
</style>
