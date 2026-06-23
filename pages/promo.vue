<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="campaign--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>宣传材料</h1>
      <p>您可以下载这些材料并自行打印，用于宣传本网站</p>
    </div>

    <!-- 宣传材料 -->
    <mdui-card style="padding: 1.5rem; text-align: center;">
      <mdui-icon name="image--outlined" style="font-size: 3rem; color: rgb(var(--mdui-color-on-surface) / 0.2); margin-bottom: 1rem;"></mdui-icon>
      <h2 style="font-size: 1.25rem; font-weight: 600; color: rgb(var(--mdui-color-on-surface)); margin-bottom: 0.75rem;">宣传海报</h2>

      <!-- 海报占位 -->
      <div style="background: rgb(var(--mdui-color-surface-container)); border-radius: 1rem; padding: 3rem; margin-bottom: 1.5rem; border: 2px dashed rgb(var(--mdui-color-primary-container));">
        <p style="color: rgb(var(--mdui-color-on-surface) / 0.4);">
          宣传海报图片（请将图片放入 public/res/ 目录）
        </p>
      </div>

      <mdui-button href="/files/res/1.png" download variant="filled" style="background:rgb(var(--mdui-color-tertiary));">
        <mdui-icon name="download--outlined" slot="icon"></mdui-icon>
        下载宣传海报
      </mdui-button>
    </mdui-card>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'promo' }
})
</script>
