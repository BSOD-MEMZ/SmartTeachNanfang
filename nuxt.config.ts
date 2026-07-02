// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-23',
  devtools: { enabled: false },
  modules: [],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('mdui-')
    }
  },
  app: {
    head: {
      title: '株洲市南方中学电教委员专题网站',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no' },
        { name: 'renderer', content: 'webkit' },
        { name: 'description', content: '株洲市南方中学电教委员交流中心' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/res/logo.png' },
        // Material Icons（mdui-icon 组件使用）
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
