import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Y-UI",
  description: "一个正在完善的组件库",
  base: "/Y-UI/",
  head: [["link", { rel: "icon", href: "/Y-UI/favicon.ico" }]],
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: false,
    nav: [
      { text: "开始使用", link: "/" },
      { text: "组件", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
