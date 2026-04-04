import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "eliteToken文档库",
  description: "eliteToken使用文档本地镜像",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "简介", link: "/" },
      { text: "快速开始", link: "/guide/register" },
      { text: "Claude Code", link: "/claude-code/windows" },
      { text: "帮助", link: "/help/faq" }
    ],
    sidebar: [
      {
        text: "快速开始",
        items: [
          { text: "简介", link: "/" },
          { text: "价格说明", link: "/guide/pricing" },
          { text: "注册与充值", link: "/guide/register" },
          { text: "创建令牌", link: "/guide/token" }
        ]
      },
      {
        text: "Claude Code",
        items: [
          { text: "Windows 安装", link: "/claude-code/windows" },
          { text: "macOS 安装", link: "/claude-code/macos" },
          { text: "Linux 安装", link: "/claude-code/linux" },
          { text: "CC-Switch 配置", link: "/claude-code/cc-switch" }
        ]
      },
      {
        text: "使用指南",
        items: [
          { text: "VSCode 中使用", link: "/usage/vscode" },
          { text: "命令行使用", link: "/usage/cli" }
        ]
      },
      {
        text: "其他工具",
        items: [
          { text: "Codex 教程", link: "/tools/codex" },
          { text: "Gemini CLI 教程", link: "/tools/gemini-cli" }
        ]
      },
      {
        text: "帮助",
        items: [
          { text: "常见问题", link: "/help/faq" },
          { text: "模型与计费", link: "/help/models-pricing" },
          { text: "文档结构", link: "/guide/structure" }
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/" }],
    search: {
      provider: "local"
    }
  }
});
