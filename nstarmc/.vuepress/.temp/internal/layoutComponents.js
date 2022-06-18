import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/nstarmc-tools帮助文档/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/nstarmc-tools帮助文档/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("vuepress-plugin-md-enhance/lib/client/SlidePage.js")),
  "Blog": defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/nstarmc-tools帮助文档/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
