<template>
  <div class="comment-txt">
    <p>{{ comment.author }}</p>
    <p>{{ comment.txt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object,
  },
};
</script>

<style>
.comment-txt {
  display: flex;
  justify-content: space-between;
}
</style>