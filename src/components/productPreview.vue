<template>
  <section class="product-prev">
    <router-link :to="`/profile/${product.author.id}`" class="product-headline">
      <img
        class="avatar-img"
        :src="require(`@/assets/avatars/avatar-${product.author.id}.jpg`)"
        alt=""
      />
      <p class="avatar-name">{{ product.author.name }}</p>
    </router-link>
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
          @click="onCommentClick"
          class="mini-icon"
          :src="require('@/assets/icons/comment.png')"
          alt=""
        />
        <div class="heart-container" @click="onLikeClicked(product)">
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
    <CommentList
      v-if="commentShown"
      :comments="product.comments"
      @submitComment="submitComment"
    />
  </section>
</template>

<script>
import CommentList from "./CommentList";
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      commentShown: false,
      priceSign: "€",
    };
  },

  methods: {
    onLikeClicked(product) {
      this.$store.dispatch({ type: "likeClicked", product });
    },
    onCommentClick() {
      this.commentShown = !this.commentShown;
    },
    submitComment(comment) {
      let productComment = {
        comment,
        product: this.product,
      };
      this.$store.dispatch({ type: "addComment", productComment });
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
  components: {
    CommentList,
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
  margin: 50px;
}

.product-headline {
  align-items: center;
  display: flex;
  padding: 10px;
  flex-direction: row;
  color: black;
  text-decoration: none;
}

.product-headline img {
  margin-right: 20px;
}

.avatar-img {
  margin-right: 1vw;
  width: 30px;
  border-radius: 50%;
}

.product-img {
  width: 100%;
  border-radius: 10px;
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