<template v-if="comment">
  <section class="comments-list">
    <CommentPreview
      v-for="(comment, idx) in comments"
      :key="idx"
      :comment="comment"
    />
    <form class="form-comment" @submit.prevent="submitComment">
      <input type="text" v-model="comment.author" placeholder="Your name" />
      <input
        type="text"
        v-model="comment.txt"
        placeholder="Write your comment"
      />
      <button>submit</button>
    </form>
  </section>
</template>

<script>
import CommentPreview from "./CommentPreview";
export default {
  props: {
    comments: Array,
  },
  data() {
    return {
      comment: {
        author: "",
        txt: "",
      },
    };
  },
  methods: {
    submitComment() {
      this.$emit("submitComment", this.comment);
      this.comment = {
        author: "",
        txt: "",
      };
    },
  },
  components: {
    CommentPreview,
  },
};
</script>

<style>
.comments-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.form-comment {
  display: flex;
  flex-direction: column;
}
</style>