<template>
  <div style="position:relative">
    <!-- 右上角纹理装饰 -->
    <img
      src="/res/texture_transparency.png"
      alt=""
      aria-hidden="true"
      style="position:absolute; top:0; right:0; max-width:40%; max-height:280px; pointer-events:none; z-index:0; object-fit:contain;"
    />
    <!-- Hero - 渐变背景区 -->
    <div class="page-hero" style="background: linear-gradient(180deg, rgb(var(--mdui-color-primary-container)) 0%, transparent 100%); padding: 1.5rem 1rem 7rem">
      <div style="display:flex; align-items:center; justify-content:center; gap:1rem; flex-wrap:wrap">
        <span
          class="logo-mask"
          style="width:3rem; height:3rem; flex-shrink:0; color:rgb(var(--mdui-color-primary))"
        ></span>
        <div style="text-align:left">
          <h1 style="margin:0; font-size:1.35rem; line-height:1.3">株洲市南方中学 电教委员专题网站</h1>
          <p style="margin:0.25rem 0 0; font-size:0.85rem">班级电脑维护技术交流分享</p>
        </div>
      </div>
    </div>

    <div class="page-container">

      <!-- Banner 轮播 -->
      <div class="banner-carousel" style="margin-top:-5rem">
        <div class="banner-track" :style="{ transform: `translateX(-${currentBanner * 100}%)` }">
          <div v-for="(b, i) in banners" :key="i" class="banner-slide">
            <a
              v-if="b.link"
              :href="b.link"
              target="_blank"
              mdui-ripple
              style="display:block; position:relative; width:100%; height:100%; text-decoration:none; color:inherit; overflow:hidden"
            >
              <img :src="b.src" :alt="b.alt" />
              <div class="banner-caption" v-if="b.title">{{ b.title }}</div>
            </a>
            <template v-else>
              <img :src="b.src" :alt="b.alt" />
              <div class="banner-caption" v-if="b.title">{{ b.title }}</div>
            </template>
          </div>
        </div>
        <div class="banner-dots">
          <span
            v-for="(b, i) in banners"
            :key="i"
            class="banner-dot"
            :class="{ active: i === currentBanner }"
            @click="goToBanner(i)"
          ></span>
        </div>
        <mdui-button-icon
          class="banner-arrow left"
          icon="chevron_left--outlined"
          @click="prevBanner"
        ></mdui-button-icon>
        <mdui-button-icon
          class="banner-arrow right"
          icon="chevron_right--outlined"
          @click="nextBanner"
        ></mdui-button-icon>
      </div>

      <!-- 最新消息 — secondary 青绿色调
      <h3 class="section-heading" style="color:rgb(var(--mdui-color-secondary))">
        <mdui-icon name="new_releases--outlined" style="color:rgb(var(--mdui-color-secondary))"></mdui-icon>最新消息
      </h3>
      <mdui-list style="border-radius:var(--mdui-shape-corner-medium); margin-bottom:1rem; background:rgb(var(--mdui-color-secondary-container))">
        <mdui-list-item headline="2026/7/1 EasiAuto 新增二维码登录、进程注入" noninteractive>
          <mdui-icon slot="icon" name="smart_toy--outlined" style="color:rgb(var(--mdui-color-secondary))"></mdui-icon>
          <div slot="description"></div>
        </mdui-list-item>
        <mdui-divider></mdui-divider>
        <mdui-list-item headline="2025/10/8 ExitBoard2 静态编译完成并开放下载" noninteractive>
          <mdui-icon slot="icon" name="download--outlined" style="color:rgb(var(--mdui-color-secondary))"></mdui-icon>
          <div slot="description" style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center">
            <mdui-chip variant="suggestion" href="/files/ExitBoard2_win32.exe">下载安装包</mdui-chip>
            <mdui-chip variant="suggestion" href="/files/HARMONYOS_SANS_SC_REGULAR.TTF">下载字体（初次使用必装）</mdui-chip>
            <span style="font-size:0.75rem">不会装？进群看教程或找程序作者 2505xxt</span>
          </div>
        </mdui-list-item>
         
        
      </mdui-list>-->

      <!-- 作品展示 — primary 珊瑚色调 -->
      <h3 class="section-heading" style="color:rgb(var(--mdui-color-primary))">
        <mdui-icon name="palette--outlined" style="color:rgb(var(--mdui-color-primary))"></mdui-icon>作品展示
      </h3>
      <div class="card-grid" style="margin-bottom:0.75rem">
        <mdui-card v-for="w in works" :key="w.title" clickable :href="w.link" target="_blank">
          <div style="padding:1rem; display:flex; align-items:flex-start; gap:0.75rem">
            <img v-if="w.iconImg" :src="w.iconImg" alt="" style="width: 2.5rem; height: 2.5rem; object-fit: contain; flex-shrink: 0; border-radius: 0.375rem; margin-top: 0.125rem;" />
            <mdui-icon v-else :name="w.icon" style="font-size:2rem; color:rgb(var(--mdui-color-primary))"></mdui-icon>
            <div>
              <div style="font-weight:600; font-size:0.95rem">{{ w.title }}</div>
              <div style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.25rem">{{ w.author }}</div>
              <div v-if="w.badge" style="margin-top:0.35rem">
                <mdui-chip variant="suggestion" style="font-size:0.65rem; height:auto; min-height:1.25rem; white-space:normal; word-break:break-all; line-height:1.3; padding:0.15rem 0">{{ w.badge }}</mdui-chip>
              </div>
            </div>
          </div>
        </mdui-card>
      </div>
      <div style="text-align:center; margin-bottom:1rem">
        <mdui-button href="/showcase" variant="outlined">
          查看全部作品<mdui-icon slot="end-icon" name="arrow_forward--outlined"></mdui-icon>
        </mdui-button>
      </div>

      <!-- 你知道吗 — secondary 青绿色调 -->
      <h3 class="section-heading" style="color:rgb(var(--mdui-color-secondary))">
        <mdui-icon name="lightbulb--outlined" style="color:rgb(var(--mdui-color-secondary))"></mdui-icon>你知道吗
      </h3>
      <mdui-list style="border-radius:var(--mdui-shape-corner-medium); margin-bottom:1rem; background:rgb(var(--mdui-color-secondary-container))">
        <mdui-list-item v-for="tip in tips" :key="tip.title" noninteractive :headline="tip.title">
          <mdui-icon slot="icon" :name="tip.icon" style="color:rgb(var(--mdui-color-secondary))"></mdui-icon>
          <div slot="description" style="white-space:normal">{{ tip.content }}</div>
        </mdui-list-item>
      </mdui-list>
      <div style="text-align:center; margin-bottom:1rem">
        <mdui-button href="/learn" variant="outlined">
          查看全部教学<mdui-icon slot="end-icon" name="arrow_forward--outlined"></mdui-icon>
        </mdui-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentBanner = ref(0)
let bannerTimer = null

const banners = [
  { src: '/res/banner1.jpg', alt: 'Banner 1', title: '2505 xxt8582753 - ClassIsland娱乐功能插件，让同学眼前一亮，老师眼前一黑。', link: 'https://forum.smart-teach.cn/d/2042' },
  { src: '/res/banner2.png', alt: 'Banner 2', title: '2506 AbCd - 一款自动登录希沃白板的小工具，通过模拟登录流程来实现自动登录。', link: 'https://easiauto.0xabcd.dev/' },
  { src: '/res/banner3.jpg', alt: 'Banner 3', title: '欢迎入群讨论，电教委员和普通技术爱好者都欢迎，科技高中就靠我们啦（？', },
  // { src: '/res/banner4.jpg', alt: 'Banner 4', title: '哪有这么好的免费服务器啊', },
  { src: '/res/banner5.jpg', alt: 'Banner 5', title: '电子班牌破解 自由上网装软件', },
]

function nextBanner() {
  currentBanner.value = (currentBanner.value + 1) % banners.length
}

function prevBanner() {
  currentBanner.value = (currentBanner.value - 1 + banners.length) % banners.length
}

function goToBanner(i) {
  currentBanner.value = i
  resetTimer()
}

function resetTimer() {
  if (bannerTimer) clearInterval(bannerTimer)
  bannerTimer = setInterval(nextBanner, 4000)
}

onMounted(() => {
  bannerTimer = setInterval(nextBanner, 4000)
})

onUnmounted(() => {
  if (bannerTimer) clearInterval(bannerTimer)
})

const { works } = useWorks()

const tips = [
  { icon: 'cleaning_services--outlined', title: '希沃管家清理', content: '希沃管家会吞掉大量内存，且与SeewoPenTweaker冲突。卸载密码是 000000，卸载后不影响希沃白板和展台正常使用。' },
  { icon: 'volume_up--outlined', title: '电脑没声音？', content: '可以在后台挂个 WMP 循环播放音频，在音量合成器中将音量调低（但不要调到0）。' },
  { icon: 'album--outlined', title: 'C盘清理建议', content: '不要相信所谓的C盘清理工具！使用 Dism++ 进行空间回收，养成好习惯：软件装D盘，提醒老师不要把文件在桌面上乱扔。' },
  { icon: 'folder--outlined', title: '桌面整理技巧', content: '将「此电脑」、希沃白板等常用软件图标移到桌面下方，方便老师快速打开。' }
]

useHead({
  htmlAttrs: { 'data-page': 'home' }
})
</script>
