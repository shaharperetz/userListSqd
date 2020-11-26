<template>
  <section>
    <userList :users="usersToShow" />
  </section>
</template>

<script>
import userList from "../components/userList.vue";
export default {
  name: "home",

  data() {
    return {};
  },
  computed: {
    usersToShow() {
      return this.$store.getters.users;
    },
  },

  methods: {},
  components: { userList },
};
</script>
