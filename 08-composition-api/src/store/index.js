import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Friendly visit to Sandor', completed: true },
      { id: '2', text: 'Meeting with Asgardian assholes in the space', completed: true },
      { id: '3', text: 'Visit my dearest friend in knowhere', completed: false},
      { id: '4', text: 'Thanksgiving dinner with my daughter in Vormir', completed: false},
      { id: '5', text: 'Battle with some assholes from the earth', completed: false},
      { id: '6', text: 'Clean the universe', completed: false},
    ]
  },
  mutations: {
    toggleTodo(state, id) {

      const idx = state.todos.findIndex( todo => todo.id === id)

      state.todos[idx].completed = !state.todos[idx].completed
    }
  },
  actions: {
  },
  getters: {
    pendingTodos(state) {
      return state.todos.filter(todo => !todo.completed)
    },
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },
    allTodos(state) {
      return state.todos
    },
    getTodosByTab: (_, getters) => ( tab ) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  modules: {
  }
})
