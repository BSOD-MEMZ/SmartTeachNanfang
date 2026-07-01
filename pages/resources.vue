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
                <mdui-chip variant="filled" style="font-size:0.65rem; height:1.25rem">{{ item.label }}</mdui-chip>
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
    title: '课程工具',
    icon: 'school--outlined',
    color: 'primary',
    items: [
      { title: 'ClassIsland 纯净版', desc: '课程表软件，高一很多班都在用。官方纯净版，需自行配置', icon: 'calendar_month--outlined', iconImg: '/res/icon/classisland.png', label: '官方', href: 'https://classisland.tech/' },
      { title: 'ClassIsland 2506配置版', desc: '内含南中时间表，只保留核心功能，干净清爽', icon: 'calendar_month--outlined', iconImg: '/res/icon/classisland.png', label: '推荐', href: 'https://www.123865.com/s/LQJuVv-BieNd' },
      { title: 'ClassIsland 2505配置版', desc: '内含南中秋季/春冬季时间表，但配置可能令老师不适，请谨慎使用', icon: 'calendar_month--outlined', iconImg: '/res/icon/classisland.png', label: '不推荐', href: 'https://www.123865.com/s/LQJuVv-eSeNd' },
      { title: 'ClassWork 作业板', desc: '打开即用的作业管理工具', icon: 'assignment--outlined', iconImg: '/res/icon/classwork.ico',label: '即开即用', href: 'https://classworks.wuyuan.dev/' },
    ]
  },
  {
    title: '系统维护',
    icon: 'cleaning_services--outlined',
    color: 'secondary',
    items: [
      { title: 'Geek Uninstaller', desc: '强制卸载流氓软件，清除残留注册表和文件', icon: 'delete--outlined', label: '必备',iconImg: '/res/icon/geek.ico', href: '/files/res/geek.exe', download: true },
      { title: 'Dism++', desc: 'C盘空间清理神器，还能管理系统更新和驱动', icon: 'cleaning_services--outlined',iconImg: '/res/icon/dism.ico', label: '强烈推荐', href: 'https://www.123865.com/s/LQJuVv-2leNd' },
      { title: 'Everything', desc: '快速搜索文件，比Windows自带搜索快N倍', icon: 'search--outlined', label: '推荐',iconImg: '/res/icon/everything.ico', href: 'https://www.voidtools.com/zh-cn/downloads/' },
      { title: 'Windows Update Blocker', desc: '禁用烦人的 Windows 自动更新，防止上课时突然重启', icon: 'block--outlined',iconImg: '/res/icon/wub.ico', label: '实用', href: '/files/res/WindowsUpdateBlocker_1.8.0.0.exe', download: true },
    ]
  },
  {
    title: '实用软件',
    icon: 'apps--outlined',
    color: 'tertiary',
    items: [
      { title: '7-Zip', desc: '开源免费的压缩解压软件，无广告无捆绑', icon: 'folder_zip--outlined', label: '必备', href: 'https://www.7-zip.org/' },
      { title: 'PotPlayer', desc: '万能视频播放器，解码能力强，界面简洁', icon: 'play_circle--outlined', label: '推荐', href: 'https://potplayer.daum.net/' },
      { title: 'K-Lite Codec Pack', desc: '系统缺解码器？装这个一站式解决', icon: 'movie--outlined', label: '解码', href: 'https://www.123865.com/s/LQJuVv-zSeNd' },
      { title: 'Google Chrome', desc: '备用浏览器，Edge抽风时的救星', icon: 'language--outlined', label: '备用', href: 'https://1813038527.share.123pan.cn/123pan/LQJuVv-q4wDd' },
    ]
  },
  {
    title: '办公学习',
    icon: 'edit_note--outlined',
    color: 'primary',
    items: [
      { title: 'Notepad++', desc: '轻量级代码/文本编辑器，比记事本强一万倍', icon: 'notes--outlined', label: '必备', href: 'https://notepad-plus-plus.org/downloads/' },
      { title: 'draw.io', desc: '免费在线流程图、思维导图绘制工具', icon: 'account_tree--outlined', label: '在线', href: 'https://app.diagrams.net/' },
      { title: 'Obsidian', desc: 'Markdown 笔记软件，本地存储、插件丰富', icon: 'edit--outlined', label: '笔记', href: 'https://obsidian.md/' },
      { title: 'Snipaste', desc: '截图+贴图工具，按F1截图F3贴到屏幕上', icon: 'crop--outlined', label: '截图', href: 'https://www.snipaste.com/' },
    ]
  },
  {
    title: '运行库合集',
    icon: 'extension--outlined',
    color: 'secondary',
    items: [
      { title: '.NET Runtime 8.0', desc: 'ClassIsland 等现代软件的运行依赖', icon: 'settings--outlined', label: '必备', href: 'https://www.123865.com/s/LQJuVv-iSeNd' },
      { title: 'Visual C++ 运行库', desc: '很多绿色软件打不开？装这个全家桶', icon: 'dns--outlined', label: '推荐', href: 'https://www.123865.com/s/LQJuVv-3leNd' },
      { title: 'DirectX 修复工具', desc: '游戏/软件报 d3dx 错误时使用', icon: 'videogame_asset--outlined', label: '修复', href: 'https://www.123865.com/s/LQJuVv-4leNd' },
    ]
  },
  {
    title: '系统美化',
    icon: 'palette--outlined',
    color: 'tertiary',
    items: [
      { title: 'TranslucentTB', desc: '让任务栏变透明，桌面颜值瞬间提升', icon: 'dock--outlined', label: '美化', href: 'https://github.com/TranslucentTB/TranslucentTB' },
      { title: 'Lively Wallpaper', desc: '动态桌面壁纸，支持视频、网页、互动壁纸', icon: 'wallpaper--outlined', label: '壁纸', href: 'https://www.rocksdanister.com/lively/' },
      { title: 'TrafficMonitor', desc: '任务栏显示实时网速、CPU/内存占用', icon: 'monitoring--outlined', label: '监控', href: 'https://github.com/zhongyang219/TrafficMonitor' },
    ]
  },
  {
    title: '其他',
    icon: 'more_horiz--outlined',
    color: 'primary',
    items: [
      { title: 'HEU KMS Activator', desc: '懂的都懂 😏', icon: 'key--outlined', label: '懂的都懂', href: 'https://www.123865.com/s/LQJuVv-ZleNd' },
      { title: 'DiskGenius', desc: '数据恢复和磁盘分区管理，抢救U盘数据', icon: 'sd_card--outlined', label: '数据恢复', href: 'https://www.diskgenius.cn/' },
    ]
  },
]
</script>
