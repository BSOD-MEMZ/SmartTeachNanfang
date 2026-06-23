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
    <mdui-list style="background:rgb(var(--mdui-color-secondary-container)); border-radius:1rem; padding:0.5rem 0;">
      <mdui-list-subheader>
        <mdui-icon name="build--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        常用工具
      </mdui-list-subheader>

      <mdui-list-item
        headline="ClassIsland 纯净版"
        description="课程表软件，高一很多班都在用。官方纯净版，需自行配置（技术要求较高）"
        href="https://classisland.tech/"
        target="_blank">
        <mdui-icon name="calendar_month--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">官方</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="ClassIsland 2505配置版"
        description="已配置好的版本，内含南中秋季/春冬季时间表。但配置文件有一些可能令老师不适的内容，请谨慎使用"
        href="https://www.123865.com/s/LQJuVv-eSeNd"
        target="_blank">
        <mdui-icon name="calendar_month--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="tonal">不推荐</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="ClassIsland 2506配置版（推荐）"
        description="已配置好的版本，内含南中时间表，只保留核心功能，干净清爽"
        href="https://www.123865.com/s/LQJuVv-BieNd"
        target="_blank">
        <mdui-icon name="calendar_month--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">推荐</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="ICC CE"
        description="屏幕批注软件，吊打希沃自带PPT小工具（Bug 有点多）"
        href="https://www.123865.com/s/LQJuVv-tSeNd"
        target="_blank">
        <mdui-icon name="draw--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">实用</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="ClassWork 作业板（网页端）"
        description="打开即用的作业管理工具"
        href="https://classworks.wuyuan.dev/"
        target="_blank">
        <mdui-icon name="assignment--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">即开即用</mdui-chip>
      </mdui-list-item>
    </mdui-list>

    <!-- 辅助工具 -->
    <mdui-list style="background:rgb(var(--mdui-color-tertiary-container)); border-radius:1rem; padding:0.5rem 0;">
      <mdui-list-subheader>
        <mdui-icon name="construction--outlined" slot="icon" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
        辅助工具
      </mdui-list-subheader>

      <mdui-list-item
        headline="Geek"
        description="强制删除流氓软件"
        href="/files/res/geek.exe"
        download>
        <mdui-icon name="delete--outlined" slot="icon" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">必备</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="Everything"
        description="快速搜索文件，比Windows自带搜索快N倍"
        href="https://www.voidtools.com/zh-cn/downloads/"
        target="_blank">
        <mdui-icon name="search--outlined" slot="icon" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">推荐</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="Windows Update Blocker"
        description="禁用烦人的 Windows 自动更新"
        href="/files/res/WindowsUpdateBlocker_1.8.0.0.exe"
        download>
        <mdui-icon name="block--outlined" slot="icon" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">实用</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="HEU KMS"
        description="懂的都懂 😏"
        href="https://www.123865.com/s/LQJuVv-ZleNd"
        target="_blank">
        <mdui-icon name="key--outlined" slot="icon" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="tonal">懂的都懂</mdui-chip>
      </mdui-list-item>
    </mdui-list>

    <!-- 更多 -->
    <mdui-list style="background:rgb(var(--mdui-color-secondary-container)); border-radius:1rem; padding:0.5rem 0;">
      <mdui-list-subheader>
        <mdui-icon name="more_horiz--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        更多
      </mdui-list-subheader>

      <mdui-list-item
        headline="dotnet runtime"
        description="如果 ClassIsland 需要装 dotnet 但微软官网打不开，可以先用这个"
        href="https://www.123865.com/s/LQJuVv-iSeNd"
        target="_blank">
        <mdui-icon name="settings--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">备用</mdui-chip>
      </mdui-list-item>

      <mdui-list-item
        headline="K-Lite Codec Pack"
        description="视频放不出来？装这个解码器包"
        href="https://www.123865.com/s/LQJuVv-zSeNd"
        target="_blank">
        <mdui-icon name="movie--outlined" slot="icon" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
        <mdui-chip slot="end-icon" variant="filled">解码</mdui-chip>
      </mdui-list-item>
    </mdui-list>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'resources' }
})
</script>
