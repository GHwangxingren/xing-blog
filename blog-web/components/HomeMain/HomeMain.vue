<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-09 22:09:26
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-28 23:33:24
 * @FilePath: /blog-web/components/HomeMain/HomeMain.vue
-->
<template>
  <div class="home-main flex-1 md:w-full">
    <div class="posts">
      <div v-for="(item, index) in articleList.rows" :key="item.id" class="posts-item flex items-center md:flex-col md:h-auto">
        <div :class="{ 'order-1': index % 2 }" class="posts-cover cursor-pointer h-full md:w-full md:h-230 md:order-none">
          <a href="/">
            <img class="h-full w-full object-cover" :src="item.coverImg" alt="">
          </a>
        </div>
        <div class="posts-info px-40 md:w-full md:p-20">
          <p class="truncate text-high-color text-2xl leading-normal">{{ item.title }}</p>
          <div class="article-meta-wrap text-desc-color flex items-center my-8 flex-wrap">
            <div v-if="index === 1" class="article-topping flex items-center">
              <i class="iconfont icon-ditu-tuding"></i>
              <span>置顶</span>
              <span class="px-8">|</span>
            </div>
            <div class="article-date flex items-center">
              <i class="iconfont icon-rili mr-2"></i>
              <span>发表于 {{ dayjs(item.createdAt).format('YYYY-MM-DD') }}</span>
              <span class="px-8">|</span>
            </div>
            <div class="article-meta flex items-center">
              <i class="iconfont icon-guidang mr-2"></i>
              <span>Docs 文档</span>
              <span class="px-8">|</span>
            </div>
            <div class="article-meta flex items-center">
              <i class="iconfont icon-pinglun mr-2"></i>
              <span>0条评论</span>
            </div>
          </div>
          <div class="line-clamp-2 leading-loose">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <Pagination class="mt-20" layout="prev, pager, next" />
  </div>
</template>

<script setup lang="ts">
import type { ArticleModel } from '@/api/article/typing';
import { dayjs } from 'element-plus';

// lazy默认false,阻塞路由导航,接口请求完成之后路由跳转,lazy:true 不阻塞路由导航
const { data } = await useApi.article.getArticleList({
  pageSize: 10,
  page: 1,
  keyword: '',
  status: 1
}, { lazy: false });
let articleList: ArticleModel = reactive({
  count: data.value?.data?.count,
  rows: data.value?.data?.rows
}) as ArticleModel;

const useArticleStore = useArticle();
// 存储top5zui xi文章
useArticleStore.setArticleTopList(articleList?.rows?.length > 5 ? articleList.rows.slice(0, 5) : articleList.rows);
</script>


<style lang="less" scoped>
.home-main {
  width: 74%;
  .posts {
    .posts-item {
      height: 15.75rem;
      background: @colorBg;
      overflow: hidden;
      transition: all .3s;
      box-shadow: 0 3px 8px 6px rgba(7,17,27,0.09);
      &:hover img {
        transform: scale(1.1);
      }
      &:not(:first-child) {
        margin-top: 20px;
      }
      .posts-cover {
        width: 44%;
        img {
          transition: transform .6s;
        }
      }
      .posts-info {
        width: 56%;
        .article-meta-wrap {
          font-size: 90%;

          .article-topping {
            color: #ff7242;
          }
        }
      }
    }
  }
}
</style>