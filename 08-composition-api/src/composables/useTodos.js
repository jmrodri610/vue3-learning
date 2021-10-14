import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const useTodos = ()=> {

    const store = useStore();

    const currentTab = ref("all");


    return {
      currentTab,

      // computed
      pending: computed(() => store.getters["pendingTodos"]),
      getTodosByTab: computed(()=> store.getters['getTodosByTab'](currentTab.value) ),
      
      // methods
      toggleTodo: ( id )=> store.commit("toggleTodo", id)

    };

}
export default useTodos