<template>
  <div style="min-height: 60vh; display: flex; align-items: center; justify-content: center;">
    <div style="text-align: center; padding: 1rem;">
      <mdui-icon name="search_off--outlined" style="font-size: 5rem; color: rgb(var(--mdui-color-secondary)); margin-bottom: 1rem;"></mdui-icon>
      <h1 style="font-size: 2.5rem; font-weight: 700; color: rgb(var(--mdui-color-on-surface)); margin-bottom: 0.75rem;">404</h1>
      <p style="font-size: 1.1rem; color: rgb(var(--mdui-color-on-surface) / 0.6); margin-bottom: 0.5rem;">这个页面不存在</p>
      <p style="font-size: 0.875rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-bottom: 2rem;">也许它从未存在过，也许它还在建设中...</p>
      <NuxtLink to="/">
        <mdui-button variant="filled">
          <mdui-icon name="home--outlined" slot="icon"></mdui-icon>
          返回首页
        </mdui-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'notfound' }
})
</script>
