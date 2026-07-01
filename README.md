# 株洲市南方中学 电教委员专题网站

非官方平台 · 学生自主维护 · 技术交流分享

## 技术栈

- **框架**：[Nuxt 3](https://nuxt.com/)
- **UI 库**：[MDUI 2](https://www.mdui.org/)（Material Design 3）
- **语言**：TypeScript + Vue 3 Composition API

## 功能

- 每页独立主题色（Material 3 动态配色，支持亮色/暗色双主题）
- 响应式布局（桌面端侧边导航栏 / 移动端抽屉导航）
- 首页 Banner 轮播
- 文章、资源、作品展示、宣传材料、网址导航

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:3000）
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
nanfang-site/
├── pages/            # 页面
│   ├── index.vue     # 首页
│   ├── resources.vue # 资源中心
│   ├── showcase.vue  # 作品展示
│   ├── promo.vue     # 宣传材料
│   ├── nav.vue       # 网址导航
│   ├── articles/     # 文章
│   └── [...slug].vue # 404 页面
├── components/       # 组件
├── layouts/          # 布局
├── composables/      # 组合式函数
├── plugins/          # MDUI 插件
├── assets/css/       # 全局样式
└── public/res/       # 静态资源（图片、字体、Logo）
```

## 投稿

想投稿文章或作品？给 [GitHub 仓库](https://github.com/BSOD-MEMZ/SmartTeachNanfang) 发 PR，或联系 2505 班电教。

## License

MIT
