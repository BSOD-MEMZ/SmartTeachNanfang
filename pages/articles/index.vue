<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="article--outlined"></mdui-icon>
      <h1>文章阅读</h1>
      <p>电教委员们的技术分享与思考</p>
    </div>

    <!-- 文章列表 -->
    <mdui-list>
      <NuxtLink to="/articles/school-computer-management" style="text-decoration: none; color: inherit;">
        <mdui-list-item
          headline="关于学校一体机管理制度的思考"
          description="我是一名高一学生，同时也是一名有着七年经验的&quot;老电教&quot;。这些年来，我接触过许多设备，在每一台电脑上都倾注了不少心血。今天，我想借此机会，分享一些我对南方中学电脑管理制度的思考。"
          style="background:rgb(var(--mdui-color-secondary-container)); border-radius:0.75rem; margin-bottom:0.5rem;">
          <mdui-icon name="description--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
          <div slot="end-icon" style="display: flex; align-items: center; gap: 0.5rem;">
            <mdui-chip variant="filled">深度思考</mdui-chip>
            <span style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4);">2505 xxt</span>
          </div>
        </mdui-list-item>
      </NuxtLink>

      <NuxtLink to="/articles/recover-usb-data" style="text-decoration: none; color: inherit;">
        <mdui-list-item
          headline="用 DiskGenius 抢救 U 盘里的资料"
          description="实用数据恢复教程，教你如何用 DiskGenius 拯救 U 盘中丢失的数据。"
          style="background:rgb(var(--mdui-color-tertiary-container)); border-radius:0.75rem;">
          <mdui-icon name="sd_card--outlined" slot="icon" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
          <div slot="end-icon" style="display: flex; align-items: center; gap: 0.5rem;">
            <mdui-chip variant="filled">实用教程</mdui-chip>
            <span style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4);">2505 xxt</span>
          </div>
        </mdui-list-item>
      </NuxtLink>
    </mdui-list>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'articles' }
})
</script>
