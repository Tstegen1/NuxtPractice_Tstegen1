<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span v-if="todo.created">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span :class="{done: todo.done}">
            {{ todo.name }} {{ todo.created.toDate() | dateFilter}}
          </span>
          <button @click="remove(todo.id)">remove</button>
          {{ todo.id }}
        </span>
      </li>
    </ul>
    <div class="form">
      <!-- preventでページ遷移しないようにする -->
      <form @submit.prevent="add"> 
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  //新規登録したデータを一時的に格納しておく
  data() {
    return {
      name: '',
      done: false,
    }
  },
  //最初に初期化処理を呼び出す
  created() {
    this.$store.dispatch('todos/init');
  },
  //addイベントが発生するとactionsのaddが呼ばれ、nameが渡す
  methods: {
    add() {
      this.$store.dispatch('todos/add', this.name)
      this.name = '';
    },
    remove(id) {
      //idはfirestoreのドキュメントIDのこと。なるほどって感じ！
      this.$store.dispatch('todos/remove', id)
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/orderdTodos']
      // return this.$store.state.todos.todos;
    }
  },
  filters: {
    dateFilter(date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>

<style scoped>
li > span > span.done {
  text-decoration: line-through;
}
  
</style>