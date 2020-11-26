<template>
  <section v-if="products" class="product-list">
    <ProductPreview
      v-for="(product, idx) in products"
      :key="idx"
      :product="product"
    />
  </section>
</template>

<script>
import ProductPreview from "./ProductPreview";
export default {
  name: "product-list",
  props: ["products"],

  components: {
    ProductPreview,
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>