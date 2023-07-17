<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-04 22:50:54
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-09 22:21:28
 * @FilePath: /blog-web/layouts/default.vue
-->
<template>
  <div class="app-wrapper" id="app">
    <layoutAppHeader />
    <div class="app-wrapper-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .app-wrapper-content {
    flex: 1 auto;
  }
}
</style>
