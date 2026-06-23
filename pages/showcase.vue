<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="palette--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>作品展示</h1>
      <p>南方中学电教委员们的自制作品，欢迎大家投稿！</p>
    </div>

    <!-- 投稿提示 -->
    <mdui-card style="margin-bottom: 1.5rem; text-align: center;">
      <p style="font-size: 0.875rem; color: rgb(var(--mdui-color-on-surface) / 0.6); padding: 1rem;">
        <mdui-icon name="lightbulb--outlined" style="font-size: 1rem; vertical-align: middle;"></mdui-icon>
        想投稿文章、作品吗？
        <a href="https://github.com/BSOD-MEMZ/xxt85web" target="_blank" style="color: rgb(var(--mdui-color-primary)); font-weight: 600;">
          给 GitHub 发 PR
        </a>
        就行，或者找 2505 班电教，或发邮件 xxt8582753@126.com
      </p>
    </mdui-card>

    <!-- 作品卡片网格 -->
    <div class="card-grid">
      <mdui-card clickable href="https://github.com/RenJun-ZH/rollcall" target="_blank">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="my_location--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">基于Java的点名器</div>
            <div style="font-size: 0.8rem; color: rgb(var(--mdui-color-on-surface) / 0.5);">随机点名工具</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">2412电教自制</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://forum.smart-teach.cn/d/748-exitboard-fang-xue-dao-ji-shi" target="_blank">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="schedule--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">ExitBoard 放学倒计时</div>
            <div style="font-size: 0.8rem; color: rgb(var(--mdui-color-on-surface) / 0.5);">放学倒计时，支持自定义</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">2505电教自制</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://forum.smart-teach.cn/d/740-360tuo-tang-wei-shi" target="_blank">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="shield--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">360拖堂卫士</div>
            <div style="font-size: 0.8rem; color: rgb(var(--mdui-color-on-surface) / 0.5);">防拖堂神器</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">2505电教自制</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://forum.smart-teach.cn/d/725" target="_blank">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="rocket_launch--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">EasiAuto 希沃白板自动登录</div>
            <div style="font-size: 0.8rem; color: rgb(var(--mdui-color-on-surface) / 0.5);">全新UI Automation，更智能更稳定</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">2506电教自制</div>
          </div>
        </div>
      </mdui-card>

      <mdui-card clickable href="https://github.com/hxabcd/SeewoPenTweaker" target="_blank">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <mdui-icon name="edit--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-primary));"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">SeewoPenTweaker</div>
            <div style="font-size: 0.8rem; color: rgb(var(--mdui-color-on-surface) / 0.5);">让希沃翻页笔变成鼠标！</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">2506电教自制</div>
          </div>
        </div>
      </mdui-card>
    </div>

    <!-- 友情链接 -->
    <div style="margin-top: 2rem;">
      <div class="section-heading" style="color:rgb(var(--mdui-color-tertiary));">
        <mdui-icon name="link--outlined" style="color:rgb(var(--mdui-color-tertiary));"></mdui-icon>
        友情链接
      </div>
      <div class="card-grid">
        <mdui-card clickable href="https://0xabcd.dev/" target="_blank" style="background:rgb(var(--mdui-color-tertiary-container));">
          <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <mdui-icon name="link--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-tertiary));"></mdui-icon>
            <div>
              <div style="font-weight: 600; font-size: 1rem;">2506班电教</div>
              <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">友情链接</div>
            </div>
          </div>
        </mdui-card>

        <mdui-card clickable href="https://forum.smart-teach.cn/" target="_blank" style="background:rgb(var(--mdui-color-tertiary-container));">
          <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <mdui-icon name="public--outlined" style="font-size: 2rem; color: rgb(var(--mdui-color-tertiary));"></mdui-icon>
            <div>
              <div style="font-weight: 600; font-size: 1rem;">智教联盟</div>
              <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">友情链接</div>
            </div>
          </div>
        </mdui-card>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'showcase' }
})
</script>
