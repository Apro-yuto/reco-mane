<template>
  <div>
    <p>{{title}}App</p>
    <router-view/>
  </div>
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

<style lang="scss" scoped>
p {
  color: blue;
}
</style>
