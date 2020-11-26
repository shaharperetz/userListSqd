<template>
  <section v-if="products">
    <product-preview
      v-for="(product, idx) in products"
      :key="idx"
      :product="product"
    />
  </section>
</template>

<script>
import productPreview from "./productPreview.vue";
export default {
  name: "product-list",
  props: ["products"],

  components: {
    productPreview,
  },
};
</script>

<style>
</style>