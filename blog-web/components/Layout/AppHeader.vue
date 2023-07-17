<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-04 22:57:04
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-08 22:40:20
 * @FilePath: /blog-web/components/layout/appHeader.vue
-->
<template>
  <div class="app-header-wrapper flex justify-between items-center" :class="[headerClass]">
    <span class="header-left">
      <a href="/" title="xing">
        <i class="iconfont icon-X"></i>
        <i class="iconfont icon-I"></i>
        <i class="iconfont icon-N"></i>
        <i class="iconfont icon-G"></i>
      </a>
    </span>
    <layoutAppMenuHeaderMenu :currentHeight="currentHeight" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let scrollTop = ref<number>(0),
    currentHeight = ref<number>(0),
    headerClass = ref<string>('');

const handlerScrollNav = () => {
  const curScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  scrollTop.value = curScrollTop;
  const scroll = curScrollTop - currentHeight.value;
  currentHeight.value = curScrollTop;

  if (currentHeight.value < 60) {
    headerClass.value = 'fixed-top';
  } else if (scroll < 0) {
    headerClass.value = 'slide-down';
  } else {
    headerClass.value = 'slide-up';
  }
};

onMounted(() => {
  // 滚动监听
  window.addEventListener('scroll', handlerScrollNav);
});
</script>


<style lang="less" scoped>
@import '@/assets/css/variables.less';
.app-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  color: @colorTextTitle;
  padding: 0 14px;
  transition: all .8s;
  &.fixed-top {
    background: transparent;
    box-shadow: unset;
    .iconfont {
      color: #eee;
    }
  }
  &.slide-down {
    background: rgba(255, 255, 255, 0.8) !important;
  }
  &.slide-up {
    background: transparent;
    transform: translateY(-100px);
  }
}
</style>