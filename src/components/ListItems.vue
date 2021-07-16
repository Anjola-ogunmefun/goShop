<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100 border-light" style="width:25rem">
            <img
              :src="url"
              class="card-img-top"
              style="padding:2rem; height:400px"
              alt="product image"
            />
            <div class="card-body">
              <h2 class="card-title">
                <strong>{{ name }}</strong>
              </h2>
              <h3>
                Price: <span style="margin:0">&#8358;</span>
                {{ price.toLocaleString() }}
              </h3>
              <h4 class="card-text">
                {{ description }}
              </h4>
              <div class="quantity">
                <h5>Quantity</h5>
                <span class="badge bg-primary" @click="subtractQuantity"
                  >&#x2212;</span
                >
                <strong> {{ itemQuantity }}</strong>
                <span class="badge bg-primary" @click="addQuantity"
                  >&#x2b;</span
                >
              </div>
              <button
                class="btn btn-primary"
                @click="addToCart"
                :disabled="isActive"
              >
                Add to cart
              </button>
              <p class="quantity">
                Cost:
                <span style="margin:0">&#8358;</span
                >{{ value.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["cart-content"],

  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    url: {
      type: String,
    },
  },
  data() {
    return {
      itemQuantity: 0,
      value: 0,
      enable: false,
    };
  },

  computed: {
    isActive() {
      return this.itemQuantity === 0 ? true : false;
    },
  },
  methods: {
    addQuantity() {
      this.itemQuantity++;
    },
    subtractQuantity() {
      if (this.itemQuantity === 0) {
        return (this.itemQuantity = 0);
      }
      this.itemQuantity--;
    },
    addToCart() {
      this.value = this.itemQuantity * this.price;
      this.$emit(
        "cart-content",
        this.name,
        this.itemQuantity,
        this.value,
        this.id,
        this.url
      );
    },
  },
};
</script>

<style scoped>
div span {
  display: inline-flex;
  font-size: 20px;
  width: 30px;
  padding: 0 0.6rem;
  margin: 0 3.5rem;
}

section {
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem; */
}

button {
  font-size: 18px;
  padding: 0.5rem 1rem;
  margin: 1.5rem 2rem;
}

button:hover,
button:active {
  background-color: rgb(24, 24, 238);
}

span {
  cursor: pointer;
}

.quantity {
  font-size: 16px;
  margin-top: 20px;
}
</style>
