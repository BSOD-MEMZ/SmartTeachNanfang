<template>
  <div class="page-container">
    <!-- 返回链接 -->
    <NuxtLink to="/articles" style="display:inline-flex;align-items:center;gap:0.5rem;color:rgb(var(--mdui-color-primary));text-decoration:none;margin-bottom:1.5rem;font-size:0.875rem">
      <mdui-icon name="arrow_back--outlined" style="font-size:1rem"></mdui-icon>
      返回文章列表
    </NuxtLink>

    <!-- 文章卡片 -->
    <mdui-card style="padding:1.5rem" v-if="article">
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <mdui-chip variant="filled">{{ article.tag }}</mdui-chip>
        <span style="font-size:0.75rem;color:rgb(var(--mdui-color-on-surface)/0.4)">{{ article.author }}</span>
        <span style="font-size:0.75rem;color:rgb(var(--mdui-color-on-surface)/0.3)">{{ article.date }}</span>
      </div>

      <h1 style="font-size:1.5rem;font-weight:700;color:rgb(var(--mdui-color-on-surface));margin:0 0 1.5rem;line-height:1.6">
        {{ article.title }}
      </h1>

      <div class="article-content">
        <ContentRenderer :value="article" />
      </div>

      <mdui-divider style="margin:1.5rem 0"></mdui-divider>
      <NuxtLink to="/articles">
        <mdui-button variant="outlined">
          <mdui-icon name="arrow_back--outlined" slot="icon"></mdui-icon>
          返回文章列表
        </mdui-button>
      </NuxtLink>
    </mdui-card>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data: article } = await useAsyncData(path, () =>
  queryContent(path).findOne()
)

useHead({
  htmlAttrs: { 'data-page': 'articles' },
  title: article.value?.title ? `${article.value.title} — 南方电教` : '文章 — 南方电教'
})
</script>
