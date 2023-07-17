/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-04-14 13:33:47
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-28 23:05:33
 * @FilePath: /blog-web/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    // '@pinia/nuxt',
    '@element-plus/nuxt',
    ['@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          // ['defineStore', 'definePiniaStore'],
        ]
      }
    ]
  ],
  imports: {
    dirs: [
      // Scan top-level modules
      // 'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      // 'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  css: [
    '@/assets/css/variables.less',
    '@/assets/css/index.less',
    '@/assets/css/tailwind.css',
  ],
  app: {
    head: {
      title: 'XING的博客',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '兴仁、来自95的前端程序员、热爱工作、热爱生活、喜欢安安静静的写代码、也喜欢安安静静的创作、用思考驱动技术、享受技术的乐趣'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'author',
          name: 'author',
          content: 'xingren'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'xingren的博客,兴仁,杏仁,个人博客,前端文章,前端博客,前端技术,全栈开发,Node,nodeJs,nest,vue,nuxt,nuxt3'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' },
        { rel: 'StyleSheet', href: '//at.alicdn.com/t/c/font_4053640_pv1nq0dlkja.css' }
      ]
    }
  },
  vite: {
    server: {
      open: true,
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/css/variables.less";'
        }
      }
    },
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '',
    // Public keys that are exposed to the client
    public: {
      apiBase: 'http://api.jiangly.com/'
    }
  }
});
