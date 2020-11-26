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
        <div class="heart-container" @click.stop="onLikeClicked(product)">
          <img
            v-if="heartStatus"
            class="mini-icon heart-mini-icon"
            :src="require(`@/assets/icons/${heartStatus}.png`)"
            alt=""
          />
          <p class="heart-counter">{{ product.likes.counter }}</p>
        </div>
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
    };
  },

  methods: {
    onLikeClicked(product) {
      this.$store.dispatch({ type: "likeClicked", product });
    },
  },

  computed: {
    heartStatus() {
      let heartSign = this.product.likes.isPressed ? "redHeart" : "heart";
      if (this.product.likes.isDissable) {
        heartSign = "blackHeart";
      }
      return heartSign;
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
  width: 25px;
  cursor: pointer;
}

.comments-likes {
  display: flex;
  align-items: center;
}

.heart-container {
  cursor: pointer;
  position: relative;
}

.heart-counter {
  position: absolute;
  top: -10px;
  right: 9px;
  font-size: 14px;
}
</style>