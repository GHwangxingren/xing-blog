<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-07 22:05:01
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-08 22:41:37
 * @FilePath: /blog-web/components/Layout/AppMenu/HeaderMenu.vue
-->
<template>
  <div class="app-header-menu h-full">
    <div class="menu-h5"></div>
    <div class="menu-h5-list"></div>
    <ul class="menu-pc-list flex items-center h-full">
      <li
        v-for="(item, index) in navList"
        :key="index"
        class="h-full mr-20 cursor-pointer text-sm flex items-center"
        :class="{ 'top-color': props.currentHeight < 60 }"
      >
        <i :class="['iconfont', 'mr-4', 'text-xl', item.icon]"></i>
        <span>
          <nuxt-link
            :to="item.path"
            class="menu-link"
            active-class="current"
          >
            {{ item.name }}
          </nuxt-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ currentHeight: number }>(), {
  currentHeight: 0
});
interface InavList {
  name: string
  icon: string
  path?: string 
};
const navList:InavList[] = [
  {
    name: '搜索',
    icon: 'icon-sousuo'
  },
  {
    name: '首页',
    icon: 'icon-shouye',
    path: '/text'
  },
  {
    name: '文档',
    icon: 'icon-daohang',
    path: '/text'
  },
  {
    name: '相册',
    icon: 'icon-xiangce',
    path: ''
  },
  {
    name: '留言板',
    icon: 'icon-liuyanban',
    path: ''
  }
];
</script>

<style lang="less" scoped>
.menu-pc-list li{
  position: relative;
  height: 100%;
  transition: color .8s;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    width: 0;
    border-radius: 2px;
    background-image: @color;
    transition: all 0.3s ease;
  }
  &:hover {
    background: @color;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    color: @colorPrimary;
    &::after {
      width: 100%;
      left: 0;
    }
  }
  &.top-color {
    color: #eee;
  }
}
</style>