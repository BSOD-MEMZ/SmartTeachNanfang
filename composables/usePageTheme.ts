// 页面主题配色 —— 使用 MDUI setColorScheme 生成完整 Material 3 配色方案
// 自动包含亮色/暗色双主题，navbar、背景等全局变色

const pageColors: Record<string, string> = {
  '/': '#39C5BB',           // 首页 — 青绿色（不变）
  '/resources': '#F43F5E',  // 资源 — 玫红
  '/showcase': '#8B5CF6',   // 作品 — 紫罗兰
  '/promo': '#3B82F6',      // 宣传 — 宝蓝
  '/nav': '#10B981',        // 导航 — 翠绿
  '/about': '#6366F1',      // 关于 — 靛蓝
  '/learn': '#0EA5E9',      // 学习 — 天蓝
}

function resolveColor(path: string): string {
  return pageColors[path] || pageColors['/']
}

export function usePageTheme() {
  const route = useRoute()

  const applyTheme = async (path: string) => {
    if (import.meta.server) return
    const { setColorScheme } = await import('mdui')
    setColorScheme(resolveColor(path))
  }

  // 首次加载
  onMounted(() => applyTheme(route.path))

  // 路由切换
  watch(() => route.path, (path) => applyTheme(path))
}
