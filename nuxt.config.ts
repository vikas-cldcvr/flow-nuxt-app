// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["assets/app.css"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("f-"),
    },
  },
  plugins: [
    {
      src: "~/plugins/flow",
      mode: "client",
    },
  ],
});
