<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-09 22:10:18
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-28 23:44:39
 * @FilePath: /blog-web/components/HomeMain/HomeAside.vue
-->
<template>
  <div class="home-aside">
    <div class="card-wight">
      <div class="avatar-img">
        <img src="../../assets/img/avatar.png" alt="">
      </div>
      <p class="font-medium text-center text-2xl leading-loose font-sans">Xing</p>
      <p class="text-center text-font-color text-sm leading-relaxed font-sans">A Simple and Beautiful Blog For Myself</p>
      <div class="flex justify-between items-center mt-18 mb-4 text-font-color">
        <div class="label flex items-center flex-col flex-1 cursor-pointer">
          <span>文章</span>
          <span class="text-high-color text-lg mt-4">17</span>
        </div>
        <div class="label flex items-center flex-col flex-1 cursor-pointer ">
          <span>标签</span>
          <span class="text-high-color text-lg mt-4">11</span>
        </div>
        <div class="label flex items-center flex-col flex-1 cursor-pointer">
          <span>分类</span>
          <span class="text-high-color text-lg mt-4">5</span>
        </div>
      </div>
      <a class="flex items-center justify-center bg-btn-color mt-14 py-4 text-white-color button-animated" href="https://github.com/GHwangxingren?tab=repositories" target="_blank">
        <i class="iconfont icon-GitHub text-xs"></i>
        <span class="ml-4">GitHub</span>
      </a>
      <div class="connect mt-10 text-center text-font-color">
        <a class="mx-10" href="mailto:GHwangxingren@163.com" target="_blank">
          <i class="iconfont icon-youjian text-xl inline-block rotate-transition hover:rotate-360"></i>
        </a>
        <a class="mx-10" href="https://gitee.com/" target="_blank">
          <i class="iconfont icon-gitee text-xl inline-block rotate-transition hover:rotate-360"></i>
        </a>
      </div>
    </div>
    <div class="card-wight mt-20">
      <div class="flex items-center text-lg mb-12">
        <i class="iconfont icon-icon-activity"></i>
        <p class="ml-4 text-font-color font-semibold">公告</p>
      </div>
      <div class="leading-relaxed text-font-color">泰裤辣！</div>
    </div>
    <div class="card-wight mt-20">
      <div class="flex items-center text-lg mb-12 text-font-color">
        <i class="iconfont font-semibold icon-daojishi"></i>
        <p class="ml-4 font-semibold">最新文章</p>
      </div>
      <div v-for="item in articleTopList" :key="item.id" class="flex items-center mt-10">
        <div class="article-cover cursor-pointer rounded shrink-0">
          <img class="h-full w-full object-cover" :src="item.coverImg" alt="" />
        </div>
        <div class="pl-10">
          <p class="text-font-color line-clamp-2 cursor-pointer hover:text-btn-color transition duration-300">{{ item.title }}</p>
          <p class="text-desc-color text-xs mt-4">{{ dayjs(item.createdAt).format('YYYY-MM-DD') }}</p>
        </div>
      </div>
    </div>
    <div class="card-wight mt-20">
      <div class="flex items-center text-lg mb-12 text-font-color">
        <i class="iconfont icon-wenjianjia"></i>
        <p class="ml-4 font-semibold">分类</p>
      </div>
    </div>
    <div class="card-wight mt-20">
      <div class="flex items-center text-lg mb-12 text-font-color">
        <i class="iconfont icon-biaoqian"></i>
        <p class="ml-4 font-semibold">标签</p>
      </div>
    </div>
    <div class="card-wight mt-20">
      <div class="flex items-center text-lg mb-12 text-font-color">
        <i class="iconfont icon-guidang1"></i>
        <p class="ml-4 font-semibold">归档</p>
      </div>
    </div>
    <div class="card-wight mt-20">
      <div class="flex items-center text-lg mb-12 text-font-color">
        <i class="iconfont icon-shuju font-semibold"></i>
        <p class="ml-4 font-semibold">网站资讯</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dayjs } from 'element-plus';
import { storeToRefs } from 'pinia';
const useArticleStore = useArticle();
const { articleTopList } = storeToRefs(useArticleStore);
</script>


<style lang="less" scoped>
.home-aside {
  width: 26%;
  height: 1000px;
  padding-left: 15px;

  .card-wight {
    box-shadow: @cardBoxShadow;
    transition: all .3s;
    border-radius: 8px;
    padding: 20px 24px;
    background-color: @colorBg;
    .avatar-img {
      overflow: hidden;
      margin: 0 auto;
      width: 110px;
      height: 110px;
      border-radius: 70px;
      img {
        width: 100%;
        height: 100%;
        transition: filter 375ms ease-in .2s,transform .3s;
        object-fit: cover;
        &:hover {
          transform: rotate(360deg);
        }
      }
    }
    .label span {
      transition: color .3s;
    }
    .label:hover span {
      color: @colorAhoverText !important;
    }
    .article-cover {
      width: 3.6rem;
      height: 3.6rem;
      overflow: hidden;
      img {
        transition: transform .6s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  .icon-icon-activity {
    color: red;
    font-size: 1.4rem;
    animation: shake 1s linear infinite;
  }
}



.button-animated {
  position: relative;
  z-index: 1;
  transition: color 1s;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #ff7242;
    content: "";
    transition: transform 0.5s ease-out;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }

  &:hover {
    &:before {
      transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
      transform: scaleX(1);
    }
  }
}

@keyframes shake {
    0% {
        transform: rotate(-15deg)
    }

    4% {
        transform: rotate(15deg)
    }

    8%,24% {
        transform: rotate(-18deg)
    }

    12%,28% {
        transform: rotate(18deg)
    }

    16% {
        transform: rotate(-22deg)
    }

    20% {
        transform: rotate(22deg)
    }

    32% {
        transform: rotate(-12deg)
    }

    36% {
        transform: rotate(12deg)
    }

    40% {
        transform: rotate(0deg)
    }
}

@media screen and (min-width: @breakpoints-lg) {
  .home-aside {
    padding-left: 15px;
  }
}
@media screen and (max-width: @breakpoints-lg) {
  .home-aside  {
    width: 100%;
    padding-left: 0;
  }
}
</style>