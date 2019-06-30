<template>
  <div id="app">
    <!--rounter-view 显示的是当前路由地址所对应的内容-->
    <keep-alive exclude="Detail">
      <!--keep-alive 表示把当下的路由内容放进内存，下次使用不用再请求-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
