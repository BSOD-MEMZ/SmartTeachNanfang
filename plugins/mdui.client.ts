// MDUI JS — 仅客户端
import 'mdui'
import { setTheme, getTheme } from 'mdui'

export default defineNuxtPlugin(() => {
  // 确保主题初始化为 light，防止 MDUI 默认颜色覆盖自定义 CSS 变量
  const theme = getTheme()
  if (theme === 'auto') {
    setTheme('light')
  }
})
