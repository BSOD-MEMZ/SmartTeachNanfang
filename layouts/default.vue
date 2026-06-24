<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <!-- 顶部导航栏 -->
    <mdui-top-app-bar>
      <mdui-button-icon
        icon="menu--outlined"
        class="mobile-only"
        style="margin-right:0.5rem"
        @click="openDrawer">
      </mdui-button-icon>
      <span
        class="logo-mask"
        style="width:2.5rem; height:2.5rem; color:rgb(var(--mdui-color-on-surface)); vertical-align:middle; margin-right:0.5rem; cursor:pointer; flex-shrink:0"
        @click="navigateTo('/')"
      ></span>
      <mdui-top-app-bar-title @click="navigateTo('/')" style="cursor:pointer; font-family:'JingNanBoBoHei','FZLTY',sans-serif">株洲市南方中学 电教委员专题网站</mdui-top-app-bar-title>
      <div style="flex:1"></div>
      <!-- 深浅色切换 -->
      <mdui-button-icon
        :icon="isDark ? 'light_mode--outlined' : 'dark_mode--outlined'"
        @click="toggleTheme">
      </mdui-button-icon>
    </mdui-top-app-bar>

    <div style="display:flex; flex:1">
      <!-- 桌面端：侧边导航栏 -->
      <mdui-navigation-rail class="desktop-only" style="position:fixed; top:64px; left:0; bottom:0; z-index:40">
        <mdui-navigation-rail-item
          v-for="item in navItems"
          :key="item.path"
          :icon="route.path === item.path ? item.icon : item.icon + '--outlined'"
          :value="item.path"
          :active="route.path === item.path"
          @click="navigateTo(item.path)">
          {{ item.label }}
        </mdui-navigation-rail-item>
      </mdui-navigation-rail>

      <!-- 移动端：侧边抽屉 -->
      <mdui-navigation-drawer
        close-on-esc
        close-on-overlay-click
        @close="closeDrawer"
        style="z-index:60">
        <mdui-list>
          <mdui-list-subheader>导航</mdui-list-subheader>
          <mdui-list-item
            v-for="item in navItems"
            :key="item.path"
            :headline="item.label"
            :active="route.path === item.path"
            @click="closeDrawer(); navigateTo(item.path)">
            <mdui-icon slot="icon" :name="(route.path === item.path ? item.icon : item.icon + '--outlined')"></mdui-icon>
          </mdui-list-item>
        </mdui-list>
      </mdui-navigation-drawer>

      <!-- 主内容 -->
      <div class="main-content" style="flex:1; padding-top:64px; padding-bottom:1rem">
        <slot />
      </div>
    </div>

    <!-- 返回顶部 FAB -->
    <mdui-fab
      v-show="showFab"
      icon="keyboard_arrow_up--outlined"
      class="fab-back-to-top"
      variant="tertiary"
      @click="scrollToTop">
    </mdui-fab>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { setTheme, getTheme } from 'mdui'

const route = useRoute()
const showFab = ref(false)
const isDark = ref(false)

// 页面配色 — 使用 MDUI setColorScheme 自动生成完整 Material 3 主题（含暗色）
usePageTheme()

const navItems = [
  { label: '首页', path: '/', icon: 'home' },
  { label: '资源', path: '/resources', icon: 'folder' },
  { label: '作品', path: '/showcase', icon: 'palette' },
  { label: '文章', path: '/articles', icon: 'article' },
  { label: '宣传', path: '/promo', icon: 'campaign' },
  { label: '导航', path: '/nav', icon: 'link' },
  { label: '关于', path: '/about', icon: 'info' }
]

function openDrawer() {
  const drawer = document.querySelector('mdui-navigation-drawer')
  if (drawer) drawer.setAttribute('open', '')
}

function closeDrawer() {
  const drawer = document.querySelector('mdui-navigation-drawer')
  if (drawer) drawer.removeAttribute('open')
}

function toggleTheme() {
  isDark.value = !isDark.value
  setTheme(isDark.value ? 'dark' : 'light')
  localStorage.setItem('mdui-theme-pref', isDark.value ? 'dark' : 'light')
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showFab.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // 恢复持久化的主题状态
  const saved = localStorage.getItem('mdui-theme-pref')
  if (saved === 'dark') {
    isDark.value = true
    setTheme('dark')
  } else {
    isDark.value = false
    setTheme('light')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 默认显示移动端元素 */
.mobile-only { display: inline-flex !important; }
.desktop-only { display: none !important; }

/* 桌面端显示侧边栏，隐藏移动端 */
@media (min-width: 840px) {
  .desktop-only { display: flex !important; }
  .mobile-only { display: none !important; }
  .main-content { margin-left: 80px; }
}
</style>
