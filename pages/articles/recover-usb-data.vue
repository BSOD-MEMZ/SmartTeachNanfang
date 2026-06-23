<template>
  <div class="page-container">
    <!-- 返回链接 -->
    <NuxtLink to="/articles" style="display: inline-flex; align-items: center; gap: 0.5rem; color: rgb(var(--mdui-color-primary)); text-decoration: none; margin-bottom: 1.5rem; font-size: 0.875rem;">
      <mdui-icon name="arrow_back--outlined" style="font-size: 1rem;"></mdui-icon>
      返回文章列表
    </NuxtLink>

    <!-- 文章卡片 -->
    <mdui-card style="padding: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
        <mdui-chip variant="filled">实用教程</mdui-chip>
        <span style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4);">2505 xxt</span>
      </div>

      <h1 style="font-size: 1.5rem; font-weight: 700; color: rgb(var(--mdui-color-on-surface)); margin-bottom: 1.5rem; line-height: 1.6;">
        用 DiskGenius 抢救 U 盘里的资料
      </h1>

      <div class="article-content">
        <p>
          U盘作为我们日常学习和生活中最常用的存储设备，经常会遇到各种问题：文件误删、分区丢失、无法识别等等。这时候，DiskGenius 就是一个非常好用的数据恢复工具。
        </p>

        <div class="highlight-box" style="background:rgb(var(--mdui-color-secondary-container)); border-color:rgb(var(--mdui-color-secondary));">
          <h3 style="font-weight: 600; color: rgb(var(--mdui-color-secondary)); margin-bottom: 0.5rem;">
            <mdui-icon name="build--outlined" style="font-size: 1rem; vertical-align: middle;"></mdui-icon>
            DiskGenius 主要功能：
          </h3>
          <ul style="list-style: disc; list-style-position: inside; font-size: 0.875rem;">
            <li>恢复已删除的文件</li>
            <li>恢复丢失的分区</li>
            <li>从无法访问的U盘中提取数据</li>
            <li>磁盘分区管理</li>
          </ul>
        </div>

        <p style="font-style: italic; color: rgb(var(--mdui-color-on-surface) / 0.4);">
          （本文为占位内容，完整教程请访问原网站或进QQ群获取）
        </p>
      </div>

      <mdui-divider style="margin: 1.5rem 0;"></mdui-divider>
      <NuxtLink to="/articles">
        <mdui-button variant="outlined">
          <mdui-icon name="arrow_back--outlined" slot="icon"></mdui-icon>
          返回文章列表
        </mdui-button>
      </NuxtLink>
    </mdui-card>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'articles-recover-usb-data' }
})
</script>
