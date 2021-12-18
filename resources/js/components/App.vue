<template>
  <p>
    <span>{{title}}App</span>
  </p>
</template>

<script>
  export default {
    name: 'App',
    data: () => {
      return {
        title: '議事録管理'
      }
    }
  }
</script>

<style lang="scss">
p {
  span {
    color: blue;
  }
}
</style>
