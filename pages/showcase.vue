<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="palette--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>作品展示</h1>
      <p>南方中学电教委员们的自制作品，欢迎大家投稿！</p>
    </div>

    <!-- 投稿提示 -->
    <mdui-card clickable style="margin-bottom: 1.5rem; text-align: center;">
      <p style="font-size: 0.875rem; color: rgb(var(--mdui-color-on-surface) / 0.6); padding: 1rem;">
        <mdui-icon name="lightbulb--outlined" style="font-size: 1rem; vertical-align: middle;"></mdui-icon>
        想投稿文章、作品吗？
        <a href="https://github.com/BSOD-MEMZ/SmartTeachNanfang" target="_blank" style="color: rgb(var(--mdui-color-primary)); font-weight: 600;">
          给 GitHub 发 PR
        </a>
        就行，或者找 2505 班电教，或发邮件 xxt8582753@126.com
      </p>
    </mdui-card>

    <!-- 作品卡片网格 -->
    <div class="card-grid">
      <mdui-card v-for="w in works" :key="w.title" clickable :href="w.link" target="_blank">
        <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
          <img v-if="w.iconImg" :src="w.iconImg" alt="" style="width: 2.5rem; height: 2.5rem; object-fit: contain; flex-shrink: 0; border-radius: 0.375rem;" />
          <mdui-icon v-else :name="w.icon" style="font-size: 2rem; color: rgb(var(--mdui-color-primary)); flex-shrink: 0;"></mdui-icon>
          <div>
            <div style="font-weight: 600; font-size: 1rem;">{{ w.title }}</div>
            <div style="font-size: 0.8rem; color: rgb(var(--mdui-color-on-surface) / 0.5);">{{ w.desc }}</div>
            <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">{{ w.author }}</div>
            <div v-if="w.badge" style="margin-top:0.35rem">
              <mdui-chip variant="suggestion" style="font-size:0.65rem; height:1.25rem">{{ w.badge }}</mdui-chip>
            </div>
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
        <mdui-card v-for="link in links" :key="link.title" clickable :href="link.link" target="_blank" style="background:rgb(var(--mdui-color-tertiary-container));">
          <div style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <mdui-icon :name="link.icon" style="font-size: 2rem; color: rgb(var(--mdui-color-tertiary));"></mdui-icon>
            <div>
              <div style="font-weight: 600; font-size: 1rem;">{{ link.title }}</div>
              <div style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4); margin-top: 0.25rem;">友情链接</div>
            </div>
          </div>
        </mdui-card>
      </div>
    </div>
  </div>
</template>

<script setup>
const { works, links } = useWorks()

useHead({
  htmlAttrs: { 'data-page': 'showcase' }
})
</script>
