<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-04 22:42:43
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-09 22:38:39
 * @FilePath: /blog-web/pages/index.vue
-->
<template>
  <div>
    <NuxtLayout>
      <!-- <NuxtPage /> -->
      <HomeBanner />
      <div class="content flex flex-wrap">
        <HomeMain />
        <HomeAside />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="less" scoped>
  .content {
    padding: 40px 15px;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
</style>

