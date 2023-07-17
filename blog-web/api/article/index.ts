/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-17 22:26:51
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-28 22:33:03
 * @FilePath: /blog-web/api/article/index.ts
 */
// await axios.get(`${baseURL}/api/article/query`,{ params: { pageSize: 100 }})
import type { HttpOption } from '~/composables/utils/useHttp';
import type { ArticleListParams, ArticleModel } from './typing';

enum Api {
  getArticleList = '/api/article/query',
}

export const getArticleList = async (params: ArticleListParams, option?: HttpOption<any>) => {
  return await useHttp.get<ArticleModel>(Api.getArticleList, params, option)
}