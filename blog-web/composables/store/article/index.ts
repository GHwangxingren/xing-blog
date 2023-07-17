/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-28 23:09:41
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-28 23:37:40
 * @FilePath: /blog-web/composables/store/article/index.ts
 */
export const useArticle = defineStore('article', () => {
  const articleTopList = ref<any[]>([]);
  const setArticleTopList = (list: any[]): void=> {
    articleTopList.value = list;
  }

  return {
    articleTopList,
    setArticleTopList
  }
});