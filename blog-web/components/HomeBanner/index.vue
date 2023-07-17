<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-08 21:51:52
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-28 22:57:03
 * @FilePath: /blog-web/components/HomeBanner/index.vue
-->
<template>
  <div class="app-full-page h-screen relative">
    <div class="site-info absolute px-10 w-full">
      <div class="site-title text-center font-bold">Love You</div>
      <div class="site-subtitle">
        <span class="subtitle">{{ subTitle }}</span>
        <span class="type-cursor ml-2">|</span>
      </div>
    </div>
    <div id="slide-down" class="absolute bottom-0 w-full text-center">
      <i class="iconfont icon-slidedown angle-down relative font-bold cursor-pointer" @click="scrollView"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
const subTitleList = [
  '睡觉睡到自然醒，数钱数到手抽筋。',
  '我的工作就是摸鱼摸鱼还是摸鱼。',
  '上班有三好：好烦，好困，好饿。',
  'Never put off till tomorrow what you can do today'
];
let bannerImg = `url(${new URL('../../assets/img/home.jpg', import.meta.url).href})`;

const scrollView = () => {
  window.scrollTo({
    top: document.querySelector(".app-full-page")!.clientHeight,
    behavior: 'smooth'
  });
};

// 打字机动画
let subTitle = ref<string>('');
let randomSubTitle = ref<string>('');
const setSubTitle = (t: string, time: number = 200): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      subTitle.value = t;
      resolve();
    }, time);
  })
};
let index = ref<number>(0);
const setSubTitleMain = async (flag: boolean): Promise<void> => {
  if (flag) {
    if (index.value === subTitleList.length) {
      index.value = 0;
    }
    randomSubTitle.value = subTitleList[index.value];
    index.value++;
  }
  if (flag) {
    for (let i = 0; i <= randomSubTitle.value.length - 1; i++) {
      await setSubTitle(randomSubTitle.value.substring(0, i));
    }
  } else {
    for (let i = randomSubTitle.value.length - 1; i >= 0; i--) {
      await setSubTitle(randomSubTitle.value.substring(0, i), 100);
    }
  }
  // 取反
  setTimeout(() => {
    setSubTitleMain(!flag);
  }, 1000);
};
onMounted(() => {
  setSubTitleMain(true);
});
</script>


<style lang="less" scoped>
.app-full-page {
  background: v-bind(bannerImg) no-repeat center;
  background-size: cover;

  .site-info  {
    top: 43%;

    .site-title {
      margin: 0;
      color: @colorTextWhite;
      font-size: 1.85rem;
    }
    .site-subtitle {
      font-size: 1rem;
      color: @colorGray;
      text-align: center;
      width: 100%;
      .type-cursor {
        color: @colorGray;
        animation: simbling-cursor .4s linear infinite;
      }
    }
  }

  .angle-down {
    display: block;
    color: @colorGray;
    font-size: 30px;
    animation: scroll-down-effect 1.5s infinite;
  }
  @keyframes scroll-down-effect {
    0% {
      top: 0;
      opacity: .4
    }
    50% {
      top: -16px;
      opacity: 1;
      filter: none;
    }
    100% {
      top: 0;
      opacity: .4
    }
  }
}

@keyframes simbling-cursor {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}



@media screen and (min-width: @breakpoints-md) {
  .app-full-page .site-info .site-title {
    font-size: 2.45rem;
  }
}
</style>