<template>
  <h2 v-if="isLoading">Wait please...</h2>
  <h2 v-else>Users</h2>

  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users?.length > 0">
    <user-list :users="users" v-slot="{ user }">
      <h5>{{ user.first_name }} {{ user.last_name }}</h5>
      <span>{{ user.email }}</span>
    </user-list>
  </div>

  <button @click="previousPage">Previous</button>
  <button @click="nextPage">Next</button>
  <span>Page {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composables/useUsers.js";
import UserList from "@/components/UserList";

export default {
  components: { UserList },
  setup() {
    const {
      currentPage,
      isLoading,
      users,
      errorMessage,
      nextPage,
      previousPage,
    } = useUsers();

    return {
      currentPage,
      isLoading,
      users,
      errorMessage,
      nextPage,
      previousPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

ul {
  width: 250px;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
}
</style>
