<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="category--outlined"></mdui-icon>
      <h1>资源中心</h1>
      <p>
        以下为第三方软件资源（侵删），学生自制程序在首页作品展示区。<br />更多软件请进 QQ 群了解！
      </p>
    </div>

    <!-- 常用工具 -->
    <h3 class="section-heading" style="color:rgb(var(--mdui-color-secondary))">
      <mdui-icon name="build--outlined"></mdui-icon>常用工具
    </h3>
    <div class="card-grid" style="margin-bottom:1.5rem">
      <mdui-card
        v-for="item in commonTools"
        :key="item.title"
        clickable
        :href="item.href"
        :target="item.download ? undefined : '_blank'"
        :download="item.download || undefined"
        style="background:rgb(var(--mdui-color-secondary-container))"
      >
        <div style="padding:1rem; display:flex; align-items:flex-start; gap:0.75rem">
          <mdui-icon :name="item.icon" style="font-size:2rem; color:rgb(var(--mdui-color-secondary)); flex-shrink:0"></mdui-icon>
          <div style="min-width:0">
            <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
              <span style="font-weight:600; font-size:0.95rem">{{ item.title }}</span>
              <mdui-chip variant="filled" style="font-size:0.65rem; height:1.25rem">{{ item.label }}</mdui-chip>
            </div>
            <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.25rem; line-height:1.4">{{ item.desc }}</div>
          </div>
        </div>
      </mdui-card>
    </div>

    <!-- 辅助工具 -->
    <h3 class="section-heading" style="color:rgb(var(--mdui-color-tertiary))">
      <mdui-icon name="construction--outlined"></mdui-icon>辅助工具
    </h3>
    <div class="card-grid" style="margin-bottom:1.5rem">
      <mdui-card
        v-for="item in auxTools"
        :key="item.title"
        clickable
        :href="item.href"
        :target="item.download ? undefined : '_blank'"
        :download="item.download || undefined"
        style="background:rgb(var(--mdui-color-tertiary-container))"
      >
        <div style="padding:1rem; display:flex; align-items:flex-start; gap:0.75rem">
          <mdui-icon :name="item.icon" style="font-size:2rem; color:rgb(var(--mdui-color-tertiary)); flex-shrink:0"></mdui-icon>
          <div style="min-width:0">
            <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
              <span style="font-weight:600; font-size:0.95rem">{{ item.title }}</span>
              <mdui-chip variant="filled" style="font-size:0.65rem; height:1.25rem">{{ item.label }}</mdui-chip>
            </div>
            <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.25rem; line-height:1.4">{{ item.desc }}</div>
          </div>
        </div>
      </mdui-card>
    </div>

    <!-- 更多 -->
    <h3 class="section-heading" style="color:rgb(var(--mdui-color-secondary))">
      <mdui-icon name="more_horiz--outlined"></mdui-icon>更多
    </h3>
    <div class="card-grid" style="margin-bottom:3rem">
      <mdui-card
        v-for="item in moreTools"
        :key="item.title"
        clickable
        :href="item.href"
        :target="item.download ? undefined : '_blank'"
        :download="item.download || undefined"
        style="background:rgb(var(--mdui-color-secondary-container))"
      >
        <div style="padding:1rem; display:flex; align-items:flex-start; gap:0.75rem">
          <mdui-icon :name="item.icon" style="font-size:2rem; color:rgb(var(--mdui-color-secondary)); flex-shrink:0"></mdui-icon>
          <div style="min-width:0">
            <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
              <span style="font-weight:600; font-size:0.95rem">{{ item.title }}</span>
              <mdui-chip variant="filled" style="font-size:0.65rem; height:1.25rem">{{ item.label }}</mdui-chip>
            </div>
            <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.25rem; line-height:1.4">{{ item.desc }}</div>
          </div>
        </div>
      </mdui-card>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'resources' }
})
const commonTools = [
  { title: 'Google Chrome', desc: '有一个Edge就够了，除非你想另外装一个浏览器', icon: 'calendar_month--outlined', label: '官方', href: 'https://classisland.tech/' },
  { title: 'ClassIsland 纯净版', desc: '课程表软件，高一很多班都在用。官方纯净版，需自行配置', icon: 'calendar_month--outlined', label: '官方', href: 'https://classisland.tech/' },
  { title: 'ClassIsland 2505配置版', desc: '内含南中秋季/春冬季时间表，但配置可能令老师不适，请谨慎使用', icon: 'calendar_month--outlined', label: '不推荐', href: 'https://www.123865.com/s/LQJuVv-eSeNd' },
  { title: 'ClassIsland 2506配置版', desc: '内含南中时间表，只保留核心功能，干净清爽', icon: 'calendar_month--outlined', label: '推荐', href: 'https://www.123865.com/s/LQJuVv-BieNd' },
  { title: 'ICC CE', desc: '屏幕批注软件，吊打希沃自带PPT小工具（Bug有点多）', icon: 'draw--outlined', label: '实用', href: 'https://www.123865.com/s/LQJuVv-tSeNd' },
  { title: 'ClassWork 作业板', desc: '打开即用的作业管理工具', icon: 'assignment--outlined', label: '即开即用', href: 'https://classworks.wuyuan.dev/' },
]

const auxTools = [
  { title: 'Geek', desc: '强制删除流氓软件', icon: 'delete--outlined', label: '必备', href: '/files/res/geek.exe', download: true },
  { title: 'Everything', desc: '快速搜索文件，比Windows自带搜索快N倍', icon: 'search--outlined', label: '推荐', href: 'https://www.voidtools.com/zh-cn/downloads/' },
  { title: 'Windows Update Blocker', desc: '禁用烦人的 Windows 自动更新', icon: 'block--outlined', label: '实用', href: '/files/res/WindowsUpdateBlocker_1.8.0.0.exe', download: true },
  { title: 'HEU KMS', desc: '懂的都懂 😏', icon: 'key--outlined', label: '懂的都懂', href: 'https://www.123865.com/s/LQJuVv-ZleNd' },
]

const moreTools = [
  { title: 'dotnet runtime', desc: 'ClassIsland 依赖，微软官网打不开时的备用下载', icon: 'settings--outlined', label: '备用', href: 'https://www.123865.com/s/LQJuVv-iSeNd' },
  { title: 'K-Lite Codec Pack', desc: '视频放不出来？装这个解码器包', icon: 'movie--outlined', label: '解码', href: 'https://www.123865.com/s/LQJuVv-zSeNd' },
]
</script>
