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

    <!-- 分类卡片区 — 数据驱动 -->
    <template v-for="(section, si) in sections" :key="section.title">
      <h3
        class="section-heading"
        :style="{ color: `rgb(var(--mdui-color-${section.color}))` }"
      >
        <mdui-icon
          :name="section.icon"
          :style="{ color: `rgb(var(--mdui-color-${section.color}))` }"
        ></mdui-icon>
        {{ section.title }}
      </h3>
      <div class="card-grid" style="margin-bottom:1.5rem">
        <mdui-card
          v-for="item in section.items"
          :key="item.title"
          clickable
          :href="item.href"
          :target="item.download ? undefined : '_blank'"
          :download="item.download || undefined"
          :style="{ background: `rgb(var(--mdui-color-${section.color}-container))` }"
        >
          <div style="padding:1rem; display:flex; align-items:flex-start; gap:0.75rem">
            <img v-if="item.iconImg" :src="item.iconImg" alt="" style="width:2.5rem; height:2.5rem; object-fit:contain; flex-shrink:0; border-radius:0.375rem; margin-top:0.125rem" />
            <mdui-icon
              v-else
              :name="item.icon"
              :style="{ fontSize:'2rem', color:`rgb(var(--mdui-color-${section.color}))`, flexShrink:'0' }"
            ></mdui-icon>
            <div style="min-width:0">
              <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
                <span style="font-weight:600; font-size:0.95rem">{{ item.title }}</span>
              </div>
              <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.25rem; line-height:1.4">{{ item.desc }}</div>
            </div>
          </div>
        </mdui-card>
      </div>
    </template>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'resources' }
})

const sections = [
  {
    title: '装机必备',
    icon: 'school--outlined',
    color: 'primary',
    items: [
      { title: '希沃全家桶下载', desc: '希沃白板，希沃视频展台，希沃授课助手等', icon: 'calendar_month--outlined', iconImg: '/res/icon/easinote.png', label: '官方', href: 'https://e.seewo.com/' },
      { title: '维词教学系统', desc: '官方下载', icon: 'assignment--outlined', iconImg: '/res/icon/weici.png',href: 'http://www.weixuetec.com/#/' },
    ]
  },
  {
    title: '课程工具',
    icon: 'school--outlined',
    color: 'tertiary',
    items: [
      { title: 'ClassIsland 纯净版', desc: '课程表软件，高一很多班都在用。官方纯净版，需自行配置', icon: 'calendar_month--outlined', iconImg: '/res/icon/classisland.png', label: '官方', href: 'https://classisland.tech/' },
      { title: 'ClassIsland 2506 配置版', desc: '自带南方中学两个季节的时间表，根据学校实际情况进行了修改，开箱即用，推荐使用', icon: 'calendar_month--outlined', iconImg: '/res/icon/classisland.png', href: 'https://1813038527.share.123pan.cn/123pan/LQJuVv-v32Dd' },
      { title: 'ClassWork 作业板', desc: '打开即用的作业管理工具', icon: 'assignment--outlined', iconImg: '/res/icon/classwork.png',label: '即开即用', href: 'https://classworks.wuyuan.dev/' },
    ]
  },
  {
    title: '系统维护',
    icon: 'cleaning_services--outlined',
    color: 'secondary',
    items: [
      { title: 'Geek Uninstaller', desc: '强制卸载流氓软件，清除残留注册表和文件', icon: 'delete--outlined', iconImg: '/res/icon/geek.png', href: '/res/files/geek.exe', download: 'geek.exe' },
      { title: 'Dism++', desc: 'C盘空间清理神器，还能管理系统更新和驱动', icon: 'cleaning_services--outlined',iconImg: '/res/icon/dism.png', href: 'https://1813038527.share.123pan.cn/123pan/LQJuVv-VtDDd' },
      { title: 'Everything', desc: '快速搜索文件，比Windows自带搜索快N倍', icon: 'search--outlined', iconImg: '/res/icon/everything.png', href: 'https://www.voidtools.com/zh-cn/downloads/' },
      { title: 'Windows Update Blocker', desc: '禁用烦人的 Windows 自动更新，防止上课时突然重启', icon: 'block--outlined',iconImg: '/res/icon/wub.png', href: 'https://www.sordum.org/9470/windows-update-blocker-v1-8/', download: undefined },
    ]
  },
  {
    title: '实用软件',
    icon: 'apps--outlined',
    color: 'tertiary',
    items: [
      { title: '7-Zip', desc: '开源免费的压缩解压软件，无广告无捆绑', icon: 'folder_zip--outlined', iconImg: '/res/icon/7z.png',href: 'https://www.7-zip.org/' },
      { title: 'K-Lite Codec Pack', desc: '解决视频无法播放', icon: 'movie--outlined',  iconImg: '/res/icon/klite.png',href: 'https://www.123865.com/s/LQJuVv-zSeNd' },
      { title: 'Google Chrome', desc: '备用浏览器，其实Edge完全够用', icon: 'language--outlined',iconImg: '/res/icon/chrome.png',href: 'https://1813038527.share.123pan.cn/123pan/LQJuVv-q4wDd' },
    ]
  },

  {
    title: '运行库合集',
    icon: 'extension--outlined',
    color: 'secondary',
    items: [
      { title: '.NET Runtime 8.0', desc: 'ClassIsland 等现代软件的运行依赖', icon: 'settings--outlined',  href: 'https://www.123865.com/s/LQJuVv-iSeNd' },
      { title: '微软常用运行库合集', desc: '软件打不开可以先试下这个', icon: 'dns--outlined', href: 'https://1813038527.share.123pan.cn/123pan/LQJuVv-V8lDd' },
     
    ]
  },

  {
    title: '其他',
    icon: 'more_horiz--outlined',
    color: 'primary',
    items: [
      { title: 'HEU KMS Activator', desc: '懂的都懂，激活你的系统', icon: 'key--outlined', href: 'https://www.123865.com/s/LQJuVv-ZleNd' },
     
    ]
  },
]
</script>
