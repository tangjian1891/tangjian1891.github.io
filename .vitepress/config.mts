import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Blog",
  titleTemplate: ":title - Blog",
  head: [["link", { href: "http://www.baidu.com" }]],
  lang: "zh-CN",
  description: "汤健得个人得前端总结，html,css,js,vue,node",
  srcDir: "src", //使用src作为文档默认目录
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    siteTitle: "汤健-技术总结（5年）",
    aside: "left",
    // siteTitle:"个人博客",
    logo: "/assets/images/logo.jpg",
    nav: [
      { text: "书籍知识", link: "/book-summary/" },
      { text: "工程化", link: "/工程化/introduction" },
      { text: "js", link: "/js" },
      { text: "html&css", link: "/html&css/html" },
      { text: "home", link: "/" },
      { text: "css", link: "/css/" },
      { text: "ts", link: "/ts/" },
      { text: "node", link: "/node/npm" },
      { text: "算法", link: "/算法/" },
      { text: "设计模式", link: "/设计模式/" },
      { text: "web相关知识", link: "/web相关知识/" },
      { text: "手写实现", link: "/手写实现/" },
      { text: "cook", link: "/cook/noodles" },
      { text: "book", link: "/book/" },
      { text: "webgis", link: "/webgis/" },
      { text: "工具软件", link: "/software/" },
      // {
      //   text: "下拉",
      //   items: [
      //     { text: "链接1", link: ".." },
      //     { text: "链接1", link: ".." },
      //   ],
      // },
    ],

    sidebar: {
      "/book-summary/": [
        { text: "JavaScript介绍", link: "./introduce" },
        { text: "语言语法", link: "./grammar" },
      ],
      "/工程化/": [
        { text: "开发规范", link: "./开发规范" },
        { text: "还行", link: "/dwd" },
      ],
      "/html&css/": [
        { text: "html", link: "/html&css/html" },
        { text: "css", items: [{ text: "奇奇怪怪", link: "/html&css/css" }] },
      ],

      "/css/": [
        {
          text: "css概述",
          items: [{ text: "盒模型", link: "/css/box-model" }],
        },
      ],
      "/node/": [
        {
          items: [
            { text: "npm", link: "/node/npm" },
            { text: "常见api", link: "/node/api" },
          ],
        },
      ],
      "/算法/": [
        {
          text: "算法概述",
          items: [
            { text: "排序", link: "/算法/排序" },
            { text: "两数之和", link: "/算法/两数之和" },
            { text: "斐波那契", link: "/算法/斐波那契" },
          ],
        },
      ],
      "/web相关知识/": [
        {
          text: "服务器",
          items: [
            { text: "linux", link: "/web相关知识/linux" },
            { text: "nginx", link: "/web相关知识/nginx" },
            { text: "jenkins", link: "/web相关知识/jenkins" },
          ],
        },
      ],
      "/cook/": [
        {
          text: "调料",
          items: [{ text: "面条", link: "/cook/noodles" }],
        },
      ],
      "/book/": [
        {
          text: "书籍介绍",
          items: [{ text: "js高程/红宝书", link: "/book/js高程" }],
        },
      ],
      "/webgis/": [
        {
          text: "gis前言",
          items: [
            { text: "openlayers", link: "/webgis/openlayers" },
            { text: "工具软件", link: "/webgis/tools" },
          ],
        },
      ],
      "/software/": [
        {
          text: "vscode",
        },
      ],
      // "/手写实现/": [
      //   { text: "Promise", link: "/手写实现/promise" },
      //   { text: "call-apply-bind", link: "/手写实现/call-apply-bind" },
      // ],
      // "/设计模式/": [
      //   { text: "发布-订阅", link: "/设计模式/发布-订阅" },
      // ],
    },
  },
  cleanUrls: true,
  appearance: false,
  lastUpdated: true,
});
