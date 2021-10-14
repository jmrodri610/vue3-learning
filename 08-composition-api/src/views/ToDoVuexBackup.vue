<template>
  <img
    src="https://dam.smashmexico.com.mx/wp-content/uploads/2020/01/thanos-primer-actor-marvel-studios-josh-brolin-cover.jpg"
    alt="thanos"
  />
  <h1>Thanos' toDo list</h1>
  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">All Todos</button>
  <button :class="{ active: currentTab === 'pending' }" @click="currentTab = 'pending'">Pending</button>
  <button :class="{ active: currentTab === 'completed' }" @click="currentTab = 'completed'">Completed</button>

  <hr />
  <h4>Total tasks: {{ all.length }}</h4>
  <div v-if="currentTab === 'all'">
    <div class="todo-list ">
      <h4>Pending tasks: {{ pending.length }}</h4>
      <div v-for="{ id, text, completed } in pending" :key="id">
        <h5 class="incompleted">{{ text }}</h5>
        <input type="checkbox" :checked="completed" @click="toggleTodo(id)"/>
      </div>
    </div>
    <div class="todo-list">
      <h4>Completed tasks: {{ completed.length }}</h4>
      <div v-for="{ id, text, completed } in completed" :key="id">
        <h5 class="completed">{{ text }}</h5>
        <input type="checkbox" :checked="completed" @click="toggleTodo(id)"/>
      </div>
    </div>
  </div>
  <div v-else>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed': todo.completed }">
        {{todo.text}}
        <input type="checkbox" :checked="todo.completed" @click="toggleTodo(todo.id)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const currentTab = ref("all");


    return {
      currentTab,

      // computed
      pending: computed(() => store.getters["pendingTodos"]),
      all: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),

      getTodosByTab: computed(()=> store.getters['getTodosByTab'](currentTab.value) ),
      
      // methods
      toggleTodo: ( id )=> store.commit("toggleTodo", id)

    };
  },
};
</script>

<style scoped>
img {
  height: 250px;
  width: 350px;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}

hr {
  width: 80%;
}

li {
  list-style: none;
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 350px;
  margin: 0px 10px 0px 10px;
}

.completed {
  color: green;
}

.incompleted {
  color: brown;
}
</style>
