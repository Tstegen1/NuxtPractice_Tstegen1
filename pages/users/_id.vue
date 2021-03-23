<template>
  <div>
    <h1>{{ message }}</h1>
    <p>id: {{ this.$route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '/users/_id.vueを表示中'
    }
  },
  //paramsは数字のみにするためのチェック
  validate({ params }) {
    //正規表現
    return /^\d+$/.test(params.id);
  }
}
</script>