/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-03 23:03:36
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-03 23:09:09
 * @FilePath: /blog-web/api/sys/index.ts
 */
import type { BannerResultModel, BannerType } from './typing'
import type { HttpOption } from '~/composables/utils/useHttp'
export * from './typing'

enum Api {
  getBanner = '/operation/app/banner/getBanner',
}

export const getBanner = async (type: BannerType, option?: HttpOption<BannerResultModel[]>) => {
  return await useHttp.get<BannerResultModel[]>(Api.getBanner, { banner_type_id: type }, option)
}
