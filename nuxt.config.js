import colors from 'vuetify/es5/util/colors';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jack Steel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'Jack Steel is an experienced London-based Full Stack Software Engineer with a demonstrated history of working in the Finance and Higher Education industries. Skilled in C#, Entity Framework, .NET Core, MVC ASP.NET, JavaScript, Typescript, and Vue.Js. Graduated with First Class honours degree in Computer Science from the University of Lincoln.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "og:url", content: "https://www.jacksteel.co.uk" },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "Jack Steel - Software Engineer" },
      { name: "og:description", content: "Jack Steel is an experienced London-based Full Stack Software Engineer." },
      { name: "og:image", content: "/imgs/banner.png" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:domain", content: "jacksteel.co.uk" },
      { name: "twitter:url", content: "https://www.jacksteel.co.uk" },
      { name: "twitter:title", content: "Jack Steel - Software Engineer" },
      { name: "twitter:description", content: "Jack Steel is an experienced London-based Full Stack Software Engineer." },
      { name: "twitter:image", content: "/imgs/banner.png" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/browser-support.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
