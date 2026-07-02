<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="link--outlined"></mdui-icon>
      <h1>网址导航</h1>
      <p>常用网址快速访问</p>
    </div>

    <!-- 导航卡片网格 -->
    <div class="card-grid">
      <mdui-card clickable href="http://www.zznfzx.cn/" target="_blank" style="background:rgb(var(--mdui-color-primary-container));">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="school--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">南方中学官网</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">www.zznfzx.cn</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="http://192.168.9.252/" target="_blank" style="background:rgb(var(--mdui-color-secondary-container));">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="computer--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-secondary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">校园内网</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">192.168.9.252</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://forum.smart-teach.cn/" target="_blank" style="background:rgb(var(--mdui-color-tertiary-container));">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="public--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-tertiary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">智教联盟</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">forum.smart-teach.cn</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://github.com/BSOD-MEMZ/SmartTeachNanfang" target="_blank" style="background:rgb(var(--mdui-color-primary-container));">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="code--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">GitHub 仓库</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">github.com/BSOD-MEMZ/SmartTeachNanfang</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://0xabcd.dev/" target="_blank" style="background:rgb(var(--mdui-color-secondary-container));">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="person--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-secondary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">2506班电教</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">0xabcd.dev</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://classisland.tech/" target="_blank" style="background:rgb(var(--mdui-color-tertiary-container));">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="calendar_month--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-tertiary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">ClassIsland</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">classisland.tech</div>
          </div>
        </div>
      </mdui-card>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'nav' }
})
</script>
