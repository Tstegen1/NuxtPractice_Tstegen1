<template>
  <div>
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
    }
  }
}
</script>