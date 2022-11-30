import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'unplugin-icons/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '~/assets/style/index.scss', // global css
  ],

  // https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    classSuffix: '', // theme mode suffix name
  },

  experimental: {
    reactivityTransform: true,
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // build
  build: {
    transpile: process.env.NODE_ENV === 'production' ? ['element-plus/es'] : [],
  },

  vite: {
    plugins: [
      AutoImport({
        resolvers: [
          // autoimport Feedback component like message and notification
          ElementPlusResolver({
            importStyle: false,
          }),
        ],
      }),
      Components({
        dts: true,
        resolvers: [
          // autoimport component and css
          ElementPlusResolver({
            // if turn ssr true will full Import when build project
            // ssr: false,
            importStyle: false,
          }),
          IconsResolver({
            // prefix: 'i', // defalt prefix
            customCollections: ['icons'],
          }),
        ],
      }),
      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
        customCollections: {
          icons: FileSystemIconLoader('./assets/icons'),
        },
      }),
    ],
  },
})
