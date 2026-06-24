<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="info--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>关于本站</h1>
      <p>南方中学电教委员的非官方小天地</p>
    </div>

    <!-- 网站简介 -->
    <mdui-card clickable style="padding:1.5rem; margin-bottom:1rem">
      <h3 class="section-heading" style="color:rgb(var(--mdui-color-primary)); margin-top:0">
        <mdui-icon name="school--outlined"></mdui-icon>网站简介
      </h3>
      <p style="line-height:1.8; color:rgb(var(--mdui-color-on-surface-variant)); margin:0">
        本站由南方中学电教委员自主搭建和维护，旨在为同学们提供一个技术交流、资源分享的平台。
        这里汇集了电教委员们的自制作品、实用软件资源、技术教程，以及日常工作中积累的经验和技巧。
      </p>
    </mdui-card>

    <!-- 三列卡片 -->
    <div class="card-grid" style="margin-bottom:3rem">
      <!-- 联系方式 -->
      <mdui-card clickable style="padding:1.25rem 1rem">
        <h3 class="section-heading" style="color:rgb(var(--mdui-color-tertiary)); margin-top:0">
          <mdui-icon name="alternate_email--outlined"></mdui-icon>联系方式
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.5rem">
          <div style="display:flex; align-items:center; gap:0.75rem; padding:0.25rem 0">
            <mdui-icon name="chat--outlined" style="color:rgb(var(--mdui-color-tertiary)); flex-shrink:0"></mdui-icon>
            <div>
              <div style="font-weight:500">QQ 群</div>
              <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant))">1021156150</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:0.75rem; padding:0.25rem 0">
            <mdui-icon name="mail--outlined" style="color:rgb(var(--mdui-color-tertiary)); flex-shrink:0"></mdui-icon>
            <div>
              <div style="font-weight:500">邮箱</div>
              <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant))">xxt8582753@126.com</div>
            </div>
          </div>
          <a href="https://github.com/BSOD-MEMZ/xxt85web" target="_blank" style="display:flex; align-items:center; gap:0.75rem; padding:0.25rem 0; text-decoration:none; color:inherit">
            <mdui-icon name="code--outlined" style="color:rgb(var(--mdui-color-tertiary)); flex-shrink:0"></mdui-icon>
            <div>
              <div style="font-weight:500">GitHub</div>
              <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant))">给仓库发 PR 投稿</div>
            </div>
          </a>
        </div>
      </mdui-card>

      <!-- 技术栈 -->
      <mdui-card clickable style="padding:1.25rem 1rem">
        <h3 class="section-heading" style="color:rgb(var(--mdui-color-secondary)); margin-top:0">
          <mdui-icon name="terminal--outlined"></mdui-icon>技术栈
        </h3>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem">
          <mdui-chip variant="suggestion">Nuxt 3</mdui-chip>
          <mdui-chip variant="suggestion">MDUI 2</mdui-chip>
          <mdui-chip variant="suggestion">Vue 3</mdui-chip>
          <mdui-chip variant="suggestion">TypeScript</mdui-chip>
          <mdui-chip variant="suggestion">Material Design 3</mdui-chip>
        </div>
      </mdui-card>

      <!-- 作者列表 -->
      <mdui-card clickable style="padding:1.25rem 1rem">
        <h3 class="section-heading" style="color:rgb(var(--mdui-color-primary)); margin-top:0">
          <mdui-icon name="people--outlined"></mdui-icon>作者
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.25rem">
          <div v-for="author in authors" :key="author.name" style="display:flex; align-items:center; justify-content:space-between; padding:0.35rem 0">
            <div>
              <span style="font-weight:500">{{ author.name }}</span>
              <span style="font-size:0.75rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-left:0.5rem">{{ author.role }}</span>
            </div>
            <mdui-chip variant="filled" style="font-size:0.65rem; height:1.25rem">{{ author.class }}</mdui-chip>
          </div>
        </div>
      </mdui-card>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'about' },
  title: '关于 — 南方电教'
})

const authors = [
  { name: 'xxt8582753', role: '主要开发者', class: '2505' },
  { name: 'AbCd', role: '开发者', class: '2506' },
]
</script>
