<template>
  <img
    src="https://dam.smashmexico.com.mx/wp-content/uploads/2020/01/thanos-primer-actor-marvel-studios-josh-brolin-cover.jpg"
    alt="thanos"
  />
  <h1>Thanos' toDo list</h1>
  <button
    :class="{ active: currentTab === 'all' }"
    class="btn mr-2"
    @click="currentTab = 'all'"
  >
    All Todos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    class="btn mr-2"
    @click="currentTab = 'pending'"
  >
    Pending
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    class="btn"
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

  <button class="btn" @click="openModal">New task</button>

  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h2>Create a new Task</h2>
      <p>This task will be created as incomplete</p>
      <hr />
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTask">
        <input
          type="text"
          placeholder="Description of the task..."
          v-model="taskDescription"
        />
        <div class="mt-2">
          <button class="btn btn-success" type="submit">Create task</button>
        </div>
      </form>
    </template>
  </modal>
</template>

<script>
import useTodos from "../composables/useTodos";
import Modal from "@/components/Modal";

export default {
  components: { Modal },
  setup() {
    const {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo,
      isOpen,
      openModal,
      closeModal,
      createTask,
      taskDescription,
    } = useTodos();

    return {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo,
      isOpen,
      openModal,
      closeModal,
      createTask,
      taskDescription,
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
