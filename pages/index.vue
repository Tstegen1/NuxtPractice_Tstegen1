<template>
  <div class="container">
      <!-- <h1 class="title">
        {{ message }}
      </h1> -->
      <!-- <p>{{ $store.state.hello.message }}</p> -->
      <p>Counter: {{ $store.state.counter.counter }}</p>
      <!-- <button v-on:click="$store.dispatch('hello/updateMessageAction','Dispatch with payload')">Dispatch</button>      -->
      <!-- <button @click="updateMessage">update</button>      -->
      <!-- <button @click="updateMessage">dispatch</button>      -->
      <button @click="increment">increment</button>     
      <button @click="decrement">decrement</button>     
      <button @click="reset">reset</button>     

      <hr>
      <router-link to="/price">Price page</router-link>
      <!-- <img src="~/assets/cat.jpg" alt="cat"> -->
  </div>
      <!-- <div>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id }},{{ user.name }}, {{ user.company.name }}
          </li>
        </ul>
      </div> -->
       <!-- <p>{{ $store.state.message }}</p> -->
</template>

<script>
// const axios = require('axios');
// let url = "https://jsonplaceholder.typicode.com/usersxxx";

export default {
  methods: {
    updateMessage() {
      // return this.$store.commit('hello/updateMessage')
      return this.$store.dispatch('hello/updateMessageAction', 'dispatchAction');
    },
    increment() {
      return this.$store.commit('counter/countUp');
    },
    decrement() {
      return this.$store.commit('counter/countDown');
    },
    reset() {
      return this.$store.commit('counter/resetCounter');
    }
  }
  // asyncData({ params, error }) {
  //   return axios.get(url)
  //     .then((res) => {
  //       return { users: res.data }
  //     }) 
  //     .catch((e) => {
  //       console.log(e.message);
  //       error({ statusCode: e.response.status, message: e.message })
  //     })
  // },
  // data() {
  //   return {
  //     message: 'Hello Vuex'
  //   }
  // }
}
</script>

<style>
</style>
