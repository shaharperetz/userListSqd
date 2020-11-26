<template>
  <section>
    <productList :products="productsToShow" />
  </section>
</template>

<script>
import productList from "../components/productList.vue";
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
  components: { productList },
};
</script>
