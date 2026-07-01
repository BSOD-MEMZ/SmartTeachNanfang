<template>
  <div>
    <!-- 全宽底纹（绝对定位，不占布局空间） -->
    <div class="about-banner">
      <img src="/res/aboutbanner.png" alt="" aria-hidden="true" />
    </div>

    <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="info--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>关于本站</h1>
      <p>智教南方 - SmartTeachNanfang</p>
    </div>

    <!-- 网站简介 -->
    <mdui-card clickable style="padding:1.5rem; margin-bottom:1rem">
      <h3 class="section-heading" style="color:rgb(var(--mdui-color-primary)); margin-top:0">
        <mdui-icon name="school--outlined"></mdui-icon>网站简介
      </h3>
      <p style="line-height:1.8; color:rgb(var(--mdui-color-on-surface-variant)); margin:0">
        本站由株洲市南方中学电教委员自主搭建和维护，旨在为同学们提供一个技术交流、资源分享的平台。
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
          <a href="https://github.com/BSOD-MEMZ/SmartTeachNanfang" target="_blank" style="display:flex; align-items:center; gap:0.75rem; padding:0.25rem 0; text-decoration:none; color:inherit">
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

    <!-- 底部声明 -->
    <div style="margin-top:1rem; text-align:center; font-size:0.75rem; color:rgb(var(--mdui-color-on-surface-variant)); line-height:1.8; padding:1.5rem 0 2rem">
      <p style="margin:0 0 0.5rem">
        <mdui-icon name="gavel--outlined" style="font-size:0.875rem; vertical-align:middle; margin-right:0.25rem"></mdui-icon>
        <strong>严正声明</strong>
      </p>
      <p style="margin:0 0 1rem; max-width:600px; margin-left:auto; margin-right:auto">
        本站为株洲市南方中学学生自主搭建的非官方交流平台，与学校官方无关。<br />
        平台能且仅能由学生自主管理，不受任何个人和组织的干扰
      </p>
      <p style="margin:0 0 0.5rem">
        <mdui-icon name="code--outlined" style="font-size:0.875rem; vertical-align:middle; margin-right:0.25rem"></mdui-icon>
        <strong>开源性声明</strong>
      </p>
      <p style="margin:0 0 1rem">
        本站源代码在
        <a href="https://github.com/BSOD-MEMZ/SmartTeachNanfang" target="_blank" style="color:rgb(var(--mdui-color-primary)); font-weight:500">GitHub</a>
        开源（MIT 协议），欢迎提交 PR 贡献内容或修复问题。
      </p>
      <p style="margin:0; font-size:0.7rem; color:rgb(var(--mdui-color-on-surface) / 0.35)">
        &copy; {{ new Date().getFullYear() }} SmartTeachNanfang · 智教南方 - 株洲市南方中学 电教委员专题网站
      </p>
    </div>
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
  { name: 'Cookie', role: '南方信息拓展社社长', class: '2524' },
  { name: 'Imgreenhand', role: '古法编程大手子', class: '2511' },
  { name: 'Kingstar', role: '高级军官', class: '2517' },
]
</script>

<style scoped>
.about-banner {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}
.about-banner img {
  width: 100%;
  display: block;
}
.page-container {
  position: relative;
  z-index: 1;
}
</style>
