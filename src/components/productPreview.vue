<template>
  <section class="product-prev">
    <div class="product-headline">
      <img
        class="avatar-img"
        :src="require(`@/assets/avatars/avatar-${product.author.id}.jpg`)"
        alt=""
      />
      <p class="avatar-name">{{ product.author.name }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="css">
.product-prev {
  display: flex;
  height: 200px;
  width: 150px;
}

.product-headline {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.avatar-img {
  margin-right: 1vw;
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
</style>