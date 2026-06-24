<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="article--outlined"></mdui-icon>
      <h1>文章阅读</h1>
      <p>电教委员们的技术分享与思考</p>
    </div>

    <!-- 文章列表 -->
    <mdui-list>
      <NuxtLink
        v-for="(article, i) in articles"
        :key="article._path"
        :to="article._path"
        style="text-decoration: none; color: inherit;"
      >
        <mdui-list-item
          :headline="article.title"
          :description="article.description"
          :style="`background:rgb(var(--mdui-color-${i % 2 === 0 ? 'secondary' : 'tertiary'}-container)); border-radius:0.75rem; margin-bottom:0.5rem;`"
        >
          <mdui-icon name="description--outlined" slot="icon" :style="`color:rgb(var(--mdui-color-${i % 2 === 0 ? 'secondary' : 'tertiary'}));`"></mdui-icon>
          <div slot="end-icon" style="display: flex; align-items: center; gap: 0.5rem;">
            <mdui-chip variant="filled">{{ article.tag }}</mdui-chip>
            <span style="font-size: 0.75rem; color: rgb(var(--mdui-color-on-surface) / 0.4);">{{ article.author }}</span>
          </div>
        </mdui-list-item>
      </NuxtLink>
    </mdui-list>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'articles' }
})

const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/articles')
    .sort({ date: -1 })
    .find()
)
</script>
