<template v-if="user">
  <section>
    <h1>Welcome To {{ user.name }} Page!</h1>
    <h3>View {{ user.name }} products</h3>
    <ProductList :products="allPuserProducts" />
  </section>
</template>

<script>
import ProductList from "../components/ProductList";
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    allPuserProducts() {
      let allProducts = this.$store.getters.products;
      let productsToShow = allProducts.filter(
        (product) => product.author.id === this.user.id
      );
      return productsToShow;
    },
  },
  methods: {
    getUser(id) {
      let users = this.$store.getters.users;
      this.user = users.find((user) => user.id === id);
    },
  },

  created() {
    let userId = this.$route.params.id;
    this.getUser(userId);
  },
  components: {
    ProductList,
  },
};
</script>

<style>
</style>