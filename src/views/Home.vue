<template>
  <section>
    <ProductList :products="productsToShow" />
  </section>
</template>

<script>
import ProductList from "../components/ProductList";
export default {
  name: "home",

  data() {
    return {};
  },
  computed: {
    productsToShow() {
      return this.$store.getters.products;
    },
  },

  methods: {},
  components: { ProductList },
};
</script>
