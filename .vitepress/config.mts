import { defineConfig } from "vitepress";
import { router } from "./router";
import { set_sidebar } from "./set_sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "starry code",
  description: "代码要闪闪发光",
  base: "/starry-code/",
  // titleTemplate: "Custom Suffix",
  titleTemplate: ":title - Custom Suffix",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      // {
      //   text: "个人成长",
      //   items: [
      //     {
      //       text: "大江南北游记",
      //       link: "/column/Travel/", // 表示docs/column/Travel/index.md
      //     },
      //     {
      //       text: "所思·所想",
      //       link: "/column/Growing/", // 表示docs/column/Growing/index.md
      //     },
      //   ],
      // },
    ],
    sidebar: { "/": set_sidebar("") },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
