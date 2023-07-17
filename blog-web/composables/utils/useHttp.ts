/*
 * @Description: 封装fetch
 * @Author: web.wangxingren
 * @Date: 2023-04-20 23:02:05
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-03 23:15:18
 * @FilePath: /blog-web/composables/useHttp.ts
 */
import { UseFetchOptions } from "#app";
import { Ref } from "vue";
import type { SearchParameters, FetchResponse } from "ofetch";
import { cloneDeep } from "lodash";


// 后端返回的数据类型
export interface ResOptions<T> {
  data: T
  code?: number
  message?: string
  success?: boolean
}
export type HttpOption<T> = UseFetchOptions<ResOptions<T>>;
type UrlType = string | Request | Ref<string | Request> | (() => string | Request);

const handleError = <T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) => {
  const err = (text: string) => {
    console.log(response?._data?.message ?? text);
  }
  if (!response._data) {
    err('请求超时，服务器无响应！')
    return
  }
  const handleMap: { [key: number]: () => void } = {
    404: () => err('服务器资源不存在'),
    500: () => err('服务器内部错误'),
    403: () => err('没有权限访问该资源'),
    401: () => {
      err('登录状态已过期，需要重新登录')
      // TODO 跳转实际登录页
    },
  }
  handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}
// get方法传递数组形式参数
const paramSerializer = (params?: SearchParameters) => {
  if (!params) return;

  const query = cloneDeep(params);
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any )=> JSON.stringify(v));
      delete query[key];
    }
  })
  return query;
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = async <T>(url: UrlType, option?: UseFetchOptions<ResOptions<T>>) => {
  return useFetch<ResOptions<T>>(url, {
    // 请求拦截器
    onRequest({ options }) {
      // get方法传递数组形式参数：{ key: [1, 2 ,3] } ===> { key[]: ['1', '2', '3'] } 
      options.params = paramSerializer(options.params);
      // 添加baseUrl，nuxt3环境变量从useRuntimeConfig里面取
      const { public: { apiBase } } = useRuntimeConfig();
      options.baseURL = apiBase;
      options.headers = new Headers(options.headers);
      options.headers.set('Authorization', 'Bearer');
    },
    // 响应拦截
    onResponse({ response }) {
      // content-disposition 指示如何处理响应内容inline：直接在页面显示;attchment：以附件形式下载
      if (response.headers.get('content-disposition') && response.status === 200) {
        return response;
      }
      if (response._data.code !== 200) {
        handleError<T>(response);
        return Promise.reject(response._data);
      }
      return response._data;
    },
    // 错误处理
    onResponseError({ response }) {
      handleError<T>(response)
      return Promise.reject(response?._data ?? null)
    },
    // 合并参数
    ...option as any,
  })
};

// 自动导出
export const useHttp = {
  get: <T>(url: UrlType, params?: any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'get', params, ...option })
  },

  post: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'post', body, ...option })
  },

  put: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'put', body, ...option })
  },

  delete: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'delete', body, ...option })
  },
}