import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const useTodos = ()=> {

    const store = useStore();

    const currentTab = ref("all");
    const isOpen = ref(false);
    const taskDescription = ref('');
    const closeModal = ()=> isOpen.value = false;

    


    return {
      currentTab,
      isOpen,
      taskDescription,
      // computed
      pending: computed(() => store.getters["pendingTodos"]),
      getTodosByTab: computed(()=> store.getters['getTodosByTab'](currentTab.value) ),
      
      // methods
      toggleTodo: ( id )=> store.commit("toggleTodo", id),
      createTask: ()=> {
        store.commit("createTodo", taskDescription.value)
        closeModal();
      },
      openModal: ()=> {
        taskDescription.value = '';
        isOpen.value = true
      },
      closeModal,
      

    };

}
export default useTodos