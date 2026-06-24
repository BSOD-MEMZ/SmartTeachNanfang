<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="campaign--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>宣传材料</h1>
      <p>您可以下载这些材料并自行打印，用于宣传本网站</p>
    </div>

    <!-- 宣传材料 -->
    <mdui-card clickable style="padding: 1.5rem; text-align: center;">
      <h2 style="font-size: 1.25rem; font-weight: 600; color: rgb(var(--mdui-color-on-surface)); margin: 0 0 1rem;">2025年9月宣传资料</h2>

      <img
        src="/res/xccl1.png"
        alt="2025年9月宣传资料"
        style="width:100%; max-width:600px; border-radius:var(--mdui-shape-corner-medium); margin-bottom:1.25rem"
      />

      <mdui-button href="/res/xccl1.png" download variant="filled" style="background:rgb(var(--mdui-color-tertiary));">
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
