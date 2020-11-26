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
    <div class="img-desc">
      <img
        class="product-img"
        :src="require(`@/assets/pImgs/${product.name}.jpg`)"
        alt=""
      />
      <p class="inside-img-desc">{{ product.name }}</p>
    </div>
    <div class="product-actions">
      <div class="price">
        <p>{{ this.priceSign + product.price }}</p>
      </div>
      <div class="comments-likes">
        <img
          class="mini-icon"
          :src="require('@/assets/icons/comment.png')"
          alt=""
        />
        <img
          v-if="heartSign"
          class="mini-icon"
          :src="require(`@/assets/icons/${heartSign}.png`)"
          alt=""
          ref="heart"
          @click.stop="onLikeClicked(product.likes)"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      priceSign: "€",
      heartSign: null,
    };
  },
  mounted() {
    this.checkHeartStatus();
  },
  methods: {
    checkHeartStatus() {
      console.log(this.product.likes.isPressed);
      this.heartSign = this.product.likes.isPressed ? "redHeart" : "heart";
      if (this.product.likes.isDissable) {
        this.heartSign = "blackHeart";
        console.log(this.$refs.heart);
      }
    },
    onLikeClicked(likes) {
      console.log(likes);
    },
  },
};
</script>

<style lang="css">
.product-prev {
  display: flex;
  flex-direction: column;
  /* height: 200px; */
  margin-bottom: 20px;
  width: 250px;
}

.product-headline {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.avatar-img {
  margin-right: 1vw;
  width: 30px;
  border-radius: 50%;
}

.product-img {
  width: 100%;
}

.img-desc {
  position: relative;
}

.inside-img-desc {
  padding: 5px;
  position: absolute;
  bottom: 0;
  line-height: 0;
  color: white;
  font-size: 1.2em;
}

.product-actions {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-icon {
  margin-left: 5px;
  width: 20px;
  cursor: pointer;
}
</style>