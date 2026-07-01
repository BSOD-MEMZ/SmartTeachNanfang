<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="construction--outlined" style="color:rgb(var(--mdui-color-primary));"></mdui-icon>
      <h1>工具箱</h1>
      <p>电教委员常用工具集合</p>
    </div>

    <!-- ====== 配置查询 ====== -->
    <h3 class="section-heading" style="color:rgb(var(--mdui-color-primary))">
      <mdui-icon name="memory--outlined" style="color:rgb(var(--mdui-color-primary))"></mdui-icon>配置查询
    </h3>

    <mdui-card style="padding:1.25rem; margin-bottom:2rem; background:rgb(var(--mdui-color-surface-container)); height:300px; overflow:hidden">
      <mdui-tabs value="regular" variant="secondary" full-width @change="onTabChange" style="overflow:hidden">
        <mdui-tab value="regular" icon="meeting_room--outlined" inline>普通教室</mdui-tab>
        <mdui-tab value="mobile" icon="directions_walk--outlined" inline>走班教室</mdui-tab>

        <!-- 普通教室面板 -->
        <mdui-tab-panel slot="panel" value="regular" style="padding-top:1.25rem">
          <div style="display:flex; flex-direction:column; gap:1rem">
            <mdui-text-field
              ref="regularInput"
              label="班级编号"
              placeholder="例如：2501"
              helper="输入 4 位班级编号（仅支持创新楼）"
              icon="tag--outlined"
              clearable
              :value="regularValue"
              @input="regularValue = $event.target.value"
              @keydown="handleRegularKeydown"
            ></mdui-text-field>
            <mdui-button
              variant="filled"
              full-width
              icon="search--outlined"
              @click="queryRegular"
            >查询配置</mdui-button>
          </div>
        </mdui-tab-panel>

        <!-- 走班教室面板 -->
        <mdui-tab-panel slot="panel" value="mobile" style="padding-top:1.25rem">
          <div style="display:flex; flex-direction:column; gap:1rem">
            <mdui-text-field
              ref="mobileInput"
              label="教室编号"
              placeholder="例如：207"
              helper="输入 3 位教室编号（仅支持创新楼）"
              icon="tag--outlined"
              clearable
              :value="mobileValue"
              @input="mobileValue = $event.target.value"
              @keydown="handleMobileKeydown"
            ></mdui-text-field>
            <mdui-button
              variant="filled"
              full-width
              icon="search--outlined"
              @click="queryMobile"
            >查询配置</mdui-button>
          </div>
        </mdui-tab-panel>
      </mdui-tabs>
    </mdui-card>

    <!-- ====== 浏览器检测 ====== -->
    <h3 class="section-heading" style="color:rgb(var(--mdui-color-secondary))">
      <mdui-icon name="language--outlined" style="color:rgb(var(--mdui-color-secondary))"></mdui-icon>浏览器检测
    </h3>

    <mdui-card style="padding:1.25rem; margin-bottom:2rem; background:rgb(var(--mdui-color-surface-container))">
      <div style="display:flex; flex-direction:column; gap:1rem">
        <!-- 浏览器名称和版本 -->
        <div style="display:flex; align-items:center; gap:1rem">
          <mdui-icon
            :name="browser.icon"
            style="font-size:2.5rem; color:rgb(var(--mdui-color-secondary)); flex-shrink:0"
          ></mdui-icon>
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:1.1rem; color:rgb(var(--mdui-color-on-surface))">{{ browser.name }}</div>
            <div style="font-size:0.85rem; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.15rem">
              版本 {{ browser.version }} · {{ browser.engine }}
            </div>
          </div>
        </div>

        <mdui-divider></mdui-divider>

        <!-- 状态标签 -->
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap">
          <div style="display:flex; align-items:center; gap:0.5rem; padding:0.6rem 1rem; border-radius:var(--mdui-shape-corner-small); flex:1; min-width:180px"
               :style="{ background: `rgb(var(--mdui-color-${browser.freshness.color}-container))` }">
            <mdui-icon
              :name="browser.freshness.icon"
              :style="{ color: `rgb(var(--mdui-color-${browser.freshness.color}))`, flexShrink:'0' }"
            ></mdui-icon>
            <div>
              <div style="font-size:0.75rem; color:rgb(var(--mdui-color-on-surface-variant))">版本状态</div>
              <div style="font-weight:600; font-size:0.9rem"
                   :style="{ color: `rgb(var(--mdui-color-${browser.freshness.color}))` }">
                {{ browser.freshness.text }}
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:0.5rem; padding:0.6rem 1rem; border-radius:var(--mdui-shape-corner-small); flex:1; min-width:180px"
               :style="{ background: `rgb(var(--mdui-color-${browser.teaching.color}-container))` }">
            <mdui-icon
              :name="browser.teaching.icon"
              :style="{ color: `rgb(var(--mdui-color-${browser.teaching.color}))`, flexShrink:'0' }"
            ></mdui-icon>
            <div>
              <div style="font-size:0.75rem; color:rgb(var(--mdui-color-on-surface-variant))">教学适用</div>
              <div style="font-weight:600; font-size:0.9rem"
                   :style="{ color: `rgb(var(--mdui-color-${browser.teaching.color}))` }">
                {{ browser.teaching.text }}
              </div>
            </div>
          </div>
        </div>

        <!-- 提示 -->
        <div v-if="browser.tip" style="font-size:0.8rem; color:rgb(var(--mdui-color-on-surface-variant)); line-height:1.6; padding:0.5rem 0.75rem; background:rgb(var(--mdui-color-surface-container-low)); border-radius:var(--mdui-shape-corner-small)">
          <mdui-icon name="tips_and_updates--outlined" style="font-size:1rem; vertical-align:middle; margin-right:0.35rem; color:rgb(var(--mdui-color-secondary))"></mdui-icon>
          {{ browser.tip }}
        </div>
      </div>
    </mdui-card>

    <!-- ====== 倒计时器 ====== -->
    <h3 class="section-heading" style="color:rgb(var(--mdui-color-tertiary))">
      <mdui-icon name="timer--outlined" style="color:rgb(var(--mdui-color-tertiary))"></mdui-icon>倒计时器
    </h3>

    <mdui-card style="padding:1.25rem; margin-bottom:2rem; background:rgb(var(--mdui-color-surface-container))">
      <div style="display:flex; flex-direction:column; align-items:center; gap:1.25rem">
        <!-- 预设快捷按钮 + 自定义时间（运行中隐藏） -->
        <div v-show="!isRunning" style="display:flex; flex-direction:column; align-items:center; gap:0.75rem; width:100%">
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; justify-content:center">
            <mdui-chip
              v-for="preset in presets"
              :key="preset.label"
              :variant="preset.seconds === totalSeconds && !customInput ? 'filled' : 'outlined'"
              clickable
              @click="setPreset(preset.seconds)"
            >{{ preset.label }}</mdui-chip>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem">
            <mdui-text-field
              type="number"
              label="时"
              variant="outlined"
              style="width:80px"
              :value="inputHours"
              @input="onCustomInput('hours', $event.target.value)"
            ></mdui-text-field>
            <span style="font-size:1.25rem; font-weight:300; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.5rem">:</span>
            <mdui-text-field
              type="number"
              label="分"
              variant="outlined"
              style="width:80px"
              :value="inputMinutes"
              @input="onCustomInput('minutes', $event.target.value)"
            ></mdui-text-field>
            <span style="font-size:1.25rem; font-weight:300; color:rgb(var(--mdui-color-on-surface-variant)); margin-top:0.5rem">:</span>
            <mdui-text-field
              type="number"
              label="秒"
              variant="outlined"
              style="width:80px"
              :value="inputSeconds"
              @input="onCustomInput('seconds', $event.target.value)"
            ></mdui-text-field>
          </div>
        </div>

        <!-- 时间显示 -->
        <div style="display:flex; align-items:center; gap:0.5rem; font-family:'JingNanBoBoHei','FZLTY',sans-serif"
             :style="{ color: isFinished ? 'rgb(var(--mdui-color-tertiary))' : 'rgb(var(--mdui-color-on-surface))', transition: 'color 0.3s' }">
          <span style="font-size:2.5rem; font-weight:700; min-width:3.5rem; text-align:center">{{ display.hours }}</span>
          <span style="font-size:2rem; font-weight:300">:</span>
          <span style="font-size:2.5rem; font-weight:700; min-width:3.5rem; text-align:center">{{ display.minutes }}</span>
          <span style="font-size:2rem; font-weight:300">:</span>
          <span style="font-size:2.5rem; font-weight:700; min-width:3.5rem; text-align:center">{{ display.seconds }}</span>
        </div>

        <!-- 进度条 -->
        <div style="width:100%; height:6px; background:rgb(var(--mdui-color-surface-container-low)); border-radius:3px; overflow:hidden">
          <div
            :style="{
              width: progressPercent + '%',
              height: '100%',
              background: isFinished ? 'rgb(var(--mdui-color-tertiary))' : 'rgb(var(--mdui-color-primary))',
              borderRadius: '3px',
              transition: 'width 1s linear, background 0.3s'
            }"
          ></div>
        </div>

        <!-- 操作按钮 -->
        <div style="display:flex; gap:0.75rem">
          <mdui-button
            variant="filled"
            :icon="isRunning ? 'pause--outlined' : 'play_arrow--outlined'"
            :disabled="totalSeconds === 0 || isFinished"
            @click="toggleTimer"
          >{{ isRunning ? '暂停' : '开始' }}</mdui-button>
          <mdui-button
            variant="outlined"
            icon="stop--outlined"
            :disabled="totalSeconds === 0 && !isRunning"
            @click="resetTimer"
          >重置</mdui-button>
        </div>

        <!-- 完成提示 -->
        <div v-if="isFinished" style="font-weight:600; font-size:0.95rem; color:rgb(var(--mdui-color-tertiary)); animation: pulse 1s ease-in-out infinite">
          <mdui-icon name="notifications_active--outlined" style="vertical-align:middle; margin-right:0.35rem"></mdui-icon>
          时间到！
        </div>
      </div>
    </mdui-card>

    <!-- 结果对话框 -->
    <mdui-dialog
      ref="resultDialog"
      :icon="dialogError ? 'error_outline' : 'memory'"
      :headline="dialogTitle"
      close-on-esc
      close-on-overlay-click
      @closed="onDialogClosed"
    >
      <!-- 错误消息 -->
      <div v-if="dialogError" style="padding:0.5rem 0; font-size:0.95rem; color:rgb(var(--mdui-color-on-surface-variant)); line-height:1.8">
        {{ dialogError }}
      </div>
      <!-- 正常配置 -->
      <div v-else style="display:flex; flex-direction:column; gap:0.75rem; padding:0.5rem 0">
        <div
          v-for="spec in dialogSpecs"
          :key="spec.label"
          style="display:flex; align-items:center; gap:0.75rem; padding:0.75rem 1rem; background:rgb(var(--mdui-color-surface-container-low)); border-radius:var(--mdui-shape-corner-small)"
        >
          <mdui-icon :name="spec.icon" style="font-size:1.5rem; color:rgb(var(--mdui-color-primary)); flex-shrink:0"></mdui-icon>
          <div style="flex:1; min-width:0">
            <div style="font-size:0.75rem; color:rgb(var(--mdui-color-on-surface-variant))">{{ spec.label }}</div>
            <div style="font-weight:600; font-size:1rem; color:rgb(var(--mdui-color-on-surface))">{{ spec.value }}</div>
          </div>
        </div>
      </div>
      <mdui-button slot="action" variant="filled" @click="closeDialog">确定</mdui-button>
    </mdui-dialog>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'tools' }
})

const regularValue = ref('')
const mobileValue = ref('')
const activeTab = ref('regular')

const resultDialog = ref(null)
const dialogTitle = ref('')
const dialogSpecs = ref([])
const dialogError = ref('')

// ====== 浏览器检测 ======
const browser = reactive({
  name: '未知浏览器',
  version: '',
  engine: '',
  icon: 'language--outlined',
  freshness: { text: '无法判断', icon: 'help_outline--outlined', color: 'secondary' },
  teaching: { text: '无法判断', icon: 'help_outline--outlined', color: 'secondary' },
  tip: ''
})

function detectBrowser() {
  if (import.meta.server) return
  const ua = navigator.userAgent
  let name = ''
  let version = ''
  let engine = ''
  let icon = 'language--outlined'
  let majorVer = 0

  // Edge (Edg/)
  const edgeMatch = ua.match(/Edg\/(\d+)/)
  if (edgeMatch) {
    name = 'Microsoft Edge'
    version = edgeMatch[1]
    engine = 'Chromium'
    icon = 'tab--outlined'
    majorVer = parseInt(edgeMatch[1], 10)
  }

  // QQ Browser
  if (!name) {
    const qqMatch = ua.match(/QQBrowser\/(\d+)/)
    if (qqMatch) {
      name = 'QQ 浏览器'
      version = qqMatch[1]
      engine = 'Chromium'
      icon = 'explore--outlined'
      majorVer = parseInt(qqMatch[1], 10)
    }
  }

  // 360 Browser
  if (!name && (ua.includes('360SE') || ua.includes('360EE') || ua.includes('QIHU'))) {
    name = '360 浏览器'
    const v360 = ua.match(/(?:360SE|360EE)\/(\d+)/)
    version = v360 ? v360[1] : '?'
    engine = 'Chromium'
    icon = 'shield--outlined'
    majorVer = v360 ? parseInt(v360[1], 10) : 0
  }

  // Sogou
  if (!name && (ua.includes('MetaSr') || ua.includes('Sogou'))) {
    name = '搜狗浏览器'
    const vSg = ua.match(/SE[\s\/]?(\d+)/) || ua.match(/SogouMobileBrowser\/(\d+)/)
    version = vSg ? vSg[1] : '?'
    engine = 'Chromium'
    icon = 'pets--outlined'
    majorVer = vSg ? parseInt(vSg[1], 10) : 0
  }

  // Chrome
  if (!name) {
    const chromeMatch = ua.match(/Chrome\/(\d+)/)
    if (chromeMatch && !ua.includes('Edg/')) {
      name = 'Google Chrome'
      version = chromeMatch[1]
      engine = 'Chromium'
      icon = 'language--outlined'
      majorVer = parseInt(chromeMatch[1], 10)
    }
  }

  // Firefox
  if (!name) {
    const ffMatch = ua.match(/Firefox\/(\d+)/)
    if (ffMatch) {
      name = 'Mozilla Firefox'
      version = ffMatch[1]
      engine = 'Gecko'
      icon = 'whatshot--outlined'
      majorVer = parseInt(ffMatch[1], 10)
    }
  }

  // Fallback: try to extract any version
  if (!name) {
    name = '浏览器'
    icon = 'language--outlined'
    const vAny = ua.match(/(?:Chrome|Version)\/(\d+)/)
    version = vAny ? vAny[1] : '?'
    engine = '未知'
    majorVer = vAny ? parseInt(vAny[1], 10) : 0
  }

  browser.name = name
  browser.version = version
  browser.engine = engine
  browser.icon = icon

  if (majorVer >= 120) {
    browser.freshness = { text: '非常新', icon: 'new_releases--outlined', color: 'primary' }
  } else if (majorVer >= 100) {
    browser.freshness = { text: '较新', icon: 'check_circle--outlined', color: 'primary' }
  } else if (majorVer >= 80) {
    browser.freshness = { text: '一般', icon: 'info--outlined', color: 'tertiary' }
  } else if (majorVer > 0) {
    browser.freshness = { text: '版本过旧', icon: 'warning--outlined', color: 'tertiary' }
  }


  if (majorVer >= 100) {
    browser.teaching = { text: '完全满足', icon: 'verified--outlined', color: 'primary' }
    browser.tip = '当前浏览器内核较新，可以正常使用各类在线教学平台、Office 365、希沃网页版等。'
  } else if (majorVer >= 90) {
    browser.teaching = { text: '基本满足', icon: 'check--outlined', color: 'tertiary' }
    browser.tip = '建议升级浏览器到最新版本，部分教学平台的新功能可能不受支持。'
  } else if (majorVer > 0) {
    browser.teaching = { text: '建议升级', icon: 'error_outline--outlined', color: 'tertiary' }
    browser.tip = '浏览器版本过旧，可能无法正常访问大部分教学平台。强烈建议升级到 Edge 或 Chrome 最新版。'
  }
}

onMounted(() => detectBrowser())

// ====== 倒计时器 ======
const presets = [
  { label: '1 分钟', seconds: 60 },
  { label: '3 分钟', seconds: 180 },
  { label: '5 分钟', seconds: 300 },
  { label: '10 分钟', seconds: 600 },
  { label: '40 分钟', seconds: 2400 },
  { label: '45 分钟', seconds: 2700 },
]

const totalSeconds = ref(0)
const remainingSeconds = ref(0)
const isRunning = ref(false)
const isFinished = ref(false)
const customInput = ref(false)
const inputHours = ref('')
const inputMinutes = ref('')
const inputSeconds = ref('')
let timerInterval = null

const display = computed(() => {
  const secs = remainingSeconds.value
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  const s = secs % 60
  return {
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
  }
})

const progressPercent = computed(() => {
  if (totalSeconds.value === 0) return 100
  return (remainingSeconds.value / totalSeconds.value) * 100
})

function onCustomInput(field, val) {
  const num = parseInt(val, 10) || 0
  if (field === 'hours') inputHours.value = val
  if (field === 'minutes') inputMinutes.value = val
  if (field === 'seconds') inputSeconds.value = val

  const h = field === 'hours' ? num : (parseInt(inputHours.value, 10) || 0)
  const m = field === 'minutes' ? num : (parseInt(inputMinutes.value, 10) || 0)
  const s = field === 'seconds' ? num : (parseInt(inputSeconds.value, 10) || 0)

  const total = h * 3600 + m * 60 + s
  if (total > 0) {
    resetTimer()
    customInput.value = true
    totalSeconds.value = total
    remainingSeconds.value = total
  }
}

function setPreset(secs) {
  resetTimer()
  customInput.value = false
  inputHours.value = ''
  inputMinutes.value = ''
  inputSeconds.value = ''
  totalSeconds.value = secs
  remainingSeconds.value = secs
}

function toggleTimer() {
  if (isRunning.value) {
    isRunning.value = false
    clearInterval(timerInterval)
    timerInterval = null
  } else {
    if (remainingSeconds.value <= 0) return
    isRunning.value = true
    isFinished.value = false
    timerInterval = setInterval(() => {
      remainingSeconds.value--
      if (remainingSeconds.value <= 0) {
        remainingSeconds.value = 0
        isRunning.value = false
        isFinished.value = true
        clearInterval(timerInterval)
        timerInterval = null
      }
    }, 1000)
  }
}

function resetTimer() {
  isRunning.value = false
  isFinished.value = false
  clearInterval(timerInterval)
  timerInterval = null
  totalSeconds.value = 0
  remainingSeconds.value = 0
}

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

function onTabChange(e) {
  activeTab.value = e.target.value
}

function handleRegularKeydown(e) {
  if (e.key === 'Enter') queryRegular()
}

function handleMobileKeydown(e) {
  if (e.key === 'Enter') queryMobile()
}

function queryRegular() {
  const val = regularValue.value.trim()
  if (!val) return

  const num = parseInt(val, 10)
  if (isNaN(num) || num < 2501 || num > 2524) {
    dialogError.value = '请输入有效的班级编号（2501 ~ 2524）'
    dialogTitle.value = '无效的班级编号'
    dialogSpecs.value = []
    resultDialog.value.open = true
    return
  }

  dialogError.value = ''
  dialogTitle.value = `${val} 班 · 普通教室`
  dialogSpecs.value = [
    { icon: 'developer_board--outlined', label: '处理器', value: 'Intel Core i3-8100' },
    { icon: 'memory--outlined', label: '内存', value: '4 GB RAM' },
    { icon: 'storage--outlined', label: '硬盘', value: '128 GB SSD' },
  ]
  resultDialog.value.open = true
}

function queryMobile() {
  const val = mobileValue.value.trim()
  if (!val) return

  // 走班教室专用
  if (val === '406') {
    dialogError.value = '这是年级组办公室，不是走班教室。'
    dialogTitle.value = `${val} · 李哲的老巢`
    dialogSpecs.value = []
    resultDialog.value.open = true
    return
  }

  // 仅允许 207 / 307 / 404
  if (val !== '207' && val !== '307' && val !== '404') {
    dialogError.value = '请输入有效的走班教室编号（207、307、404）'
    dialogTitle.value = '无效的教室编号'
    dialogSpecs.value = []
    resultDialog.value.open = true
    return
  }

  dialogError.value = ''
  dialogTitle.value = `${val} · 走班教室`
  if (val === '207') {
    dialogSpecs.value = [
      { icon: 'developer_board--outlined', label: '处理器', value: 'Intel Core i5-8300H' },
      { icon: 'memory--outlined', label: '内存', value: '4 GB RAM' },
      { icon: 'storage--outlined', label: '硬盘', value: '256 GB SSD' },
    ]
  } else {
    dialogSpecs.value = [
      { icon: 'developer_board--outlined', label: '处理器', value: 'Intel Core i3-8100' },
      { icon: 'memory--outlined', label: '内存', value: '4 GB RAM' },
      { icon: 'storage--outlined', label: '硬盘', value: '128 GB SSD' },
    ]
  }
  resultDialog.value.open = true
}

function closeDialog() {
  resultDialog.value.open = false
}

function onDialogClosed() {
  // 不清空输入，方便再次查询
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
