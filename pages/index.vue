<template>
  <div class="container">
      <h1 class="title">
        {{ message }}
      </h1>
      <hr>
      <router-link to="/price">Price page</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Helo World'
    }
  }
}
</script>

<style>
</style>
