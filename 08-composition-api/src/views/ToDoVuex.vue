<template>
  <img
    src="https://dam.smashmexico.com.mx/wp-content/uploads/2020/01/thanos-primer-actor-marvel-studios-josh-brolin-cover.jpg"
    alt="thanos"
  />
  <h1>Thanos' toDo list</h1>
  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
    All Todos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pending
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completed
  </button>

  <hr />
  <h4>Total tasks: {{ getTodosByTab.length }}</h4>
  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
        <input
          type="checkbox"
          :checked="todo.completed"
          @click="toggleTodo(todo.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import useTodos from "../composables/useTodos";

export default {
  setup() {

    const { currentTab, pending, getTodosByTab, toggleTodo } = useTodos();

    return { currentTab, pending, getTodosByTab, toggleTodo };
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
