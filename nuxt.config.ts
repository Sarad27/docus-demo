export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["givebutter-widget"].includes(tag),
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://widgets.givebutter.com/latest.umd.cjs?acct=JIchSptaQ0kQJOkZ&p=other",
          async: true,
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
