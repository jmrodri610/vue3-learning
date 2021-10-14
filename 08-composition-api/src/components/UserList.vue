<template>
  <ul>
    <!-- <li>
        <h5>hola mundo</h5>
      </li> -->
    <slot v-for="user in users" :key="user.id" :user="user"></slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  width: 250px;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
}
</style>
