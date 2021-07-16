<template>
  <section>    
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="url" class="img-fluid" alt="product image" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">{{ name }}</h1>
            <div class="quantity">
              <h3>Quantity</h3>
              {{ itemQuantity }}
            </div>
            <p class="quantity">
              Cost:
              <span style="background-color:transparent; margin:0">&#8358;</span
              >{{ value.toLocaleString() }}
            </p>
            <button class="btn btn-lg btn-danger" @click="$emit('remove-product', id)">
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    itemQuantity: {
      type: Number,
    },
    value: {
      type: Number,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style scoped>
section {
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
.quantity {
  font-size: 24px;
  margin-top: 20px;
}
img{
  margin-top: 40px;
}
</style>
