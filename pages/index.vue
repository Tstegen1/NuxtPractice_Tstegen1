<template>
  <div class="container">
      <h1 class="title">
        {{ message }}
      </h1>
      <hr>
      <router-link to="/price">Price page</router-link>
      <img src="~/assets/cat.jpg" alt="cat">
  </div>
      <!-- <div>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id }},{{ user.name }}, {{ user.company.name }}
          </li>
        </ul>
      </div> -->
</template>

<script>
// const axios = require('axios');
// let url = "https://jsonplaceholder.typicode.com/usersxxx";

export default {
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
  data() {
    return {
      message: 'Helo World'
    }
  }
}
</script>

<style>
</style>
