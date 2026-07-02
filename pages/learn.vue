<template>
  <div class="page-container">
    <!-- 页头 -->
    <div class="page-hero">
      <mdui-icon name="menu_book--outlined" style="color:rgb(var(--mdui-color-secondary));"></mdui-icon>
      <h1>学习园地</h1>
      <p>了解电教相关知识</p>
    </div>

    <h3 class="section-heading" style="color:rgb(var(--mdui-color-primary))">
      <mdui-icon name="assignment--outlined" style="color:rgb(var(--mdui-color-primary))"></mdui-icon>一些常识
    </h3>
    <div class="card-grid" style="margin-bottom:2rem">
      <mdui-card v-for="duty in duties" :key="duty.title" clickable style="background:rgb(var(--mdui-color-primary-container))">
        <div style="padding:1.25rem">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem">
            <mdui-icon :name="duty.icon" style="font-size:2rem; color:rgb(var(--mdui-color-primary)); flex-shrink:0"></mdui-icon>
            <div style="font-weight:600; font-size:1rem; color:rgb(var(--mdui-color-on-primary-container))">{{ duty.title }}</div>
          </div>
          <ul style="margin:0; padding-left:1.25rem; font-size:0.85rem; color:rgb(var(--mdui-color-on-primary-container)); line-height:1.9">
            <li v-for="(item, i) in duty.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </mdui-card>
    </div>

    <h3 class="section-heading" style="color:rgb(var(--mdui-color-tertiary))">
      <mdui-icon name="build--outlined" style="color:rgb(var(--mdui-color-tertiary))"></mdui-icon>常见故障解决方法
    </h3>

    <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:3rem">
      <mdui-card
        v-for="(qa, idx) in qas"
        :key="idx"
        clickable
        @click="toggleQA(idx)"
        :style="{
          background: expandedSet.has(idx) ? 'rgb(var(--mdui-color-tertiary-container))' : 'rgb(var(--mdui-color-surface-container))',
          transition: 'background 0.3s, box-shadow 0.3s'
        }"
      >
        <div style="padding:1rem 1.25rem">
          <div style="display:flex; align-items:flex-start; gap:0.75rem">
            <mdui-icon
              :name="expandedSet.has(idx) ? 'expand_less' : 'expand_more'"
              style="flex-shrink:0; color:rgb(var(--mdui-color-tertiary))"
            ></mdui-icon>
            <div style="flex:1; min-width:0">
              <div style="font-weight:600; font-size:0.95rem; color:rgb(var(--mdui-color-on-surface))">{{ qa.q }}</div>
              <div
                v-show="expandedSet.has(idx)"
                style="margin-top:0.75rem; line-height:1.8; font-size:0.9rem; color:rgb(var(--mdui-color-on-surface-variant))"
              >
                <div v-if="qa.a" style="margin-bottom:0.5rem">{{ qa.a }}</div>
                <div v-if="qa.steps" style="display:flex; flex-direction:column; gap:0.35rem">
                  <div
                    v-for="(step, si) in qa.steps"
                    :key="si"
                    style="display:flex; align-items:flex-start; gap:0.5rem; background:rgb(var(--mdui-color-surface-container-low)); border-radius:var(--mdui-shape-corner-small); padding:0.5rem 0.75rem"
                  >
                    <span style="flex-shrink:0; width:1.4rem; height:1.4rem; display:inline-flex; align-items:center; justify-content:center; background:rgb(var(--mdui-color-tertiary)); color:rgb(var(--mdui-color-on-tertiary)); border-radius:50%; font-size:0.7rem; font-weight:700">{{ si + 1 }}</span>
                    <span>{{ step }}</span>
                  </div>
                </div>
                <div v-if="qa.tip" style="margin-top:0.6rem; background:rgb(var(--mdui-color-secondary-container)); color:rgb(var(--mdui-color-on-secondary-container)); border-radius:var(--mdui-shape-corner-small); padding:0.5rem 0.75rem">
                  <mdui-icon name="lightbulb--outlined" style="font-size:1rem; vertical-align:middle; margin-right:0.35rem; color:rgb(var(--mdui-color-secondary))"></mdui-icon>
                  {{ qa.tip }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </mdui-card>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-page': 'learn' }
})

const expandedSet = ref(new Set())

function toggleQA(idx) {
  const newSet = new Set(expandedSet.value)
  if (newSet.has(idx)) {
    newSet.delete(idx)
  } else {
    newSet.add(idx)
  }
  expandedSet.value = newSet
}

const duties = [
  {
    icon: 'cleaning_services--outlined',
    title: '日常维护',
    items: [
      '定期清理桌面多余文件，保持 C 盘有 8GB 以上剩余空间（清理方法看下面）',
      '及时卸载捆绑软件和弹窗广告程序',
      '将图标放在桌面右下角方便点击',
      '上课前把上节课的PPT关掉，防止占用过多的内存',
      '电脑不必额外安装杀毒软件，就算是系统自带Windows Defender也建议禁用'
    ],
  },
  {
    icon: 'file_open--outlined',
    title: 'WPS还是Office？',
    items: [
      'WPS免费但付费，Office付费但免费',
      'Office性能好占用低，最重要的是Office触摸屏写字很丝滑',
      '一些老师用WPS做PPT，Office打开提示要修复，但是WPS兼容性就很好',
      '如果你们老师放PPT没遇到什么兼容性问题就用Office，通常建议Office 2019或更高版本。如果有兼容性问题，可以考虑换WPS'
    ],
  },
  {
    icon: 'screenshot_monitor--outlined',
    title: '黑屏怎么办',
    items: [
      '如果是规律性的黑屏，显示无信号，那就是系统休眠导致的，打开Windows设置->系统->电源和睡眠，全部改成从不',
      '如果黑屏是完全卡死，那就是磁盘空间不足导致虚拟内存不足，虚拟内存不足但物理内存吃满了，所以黑屏了，如果是这样，清理一下C盘，或者检查虚拟内存配置'
    ],
  },
  {
    icon: 'donut_large--outlined',
    title: '清理C盘',
    items: [
      '去网站的资源中心下载一个叫Dism++的东西',
      '找一个中午或者阳光体育，因为花的时间比较多，清理过程其实是可以正常使用电脑的，但是不建议，不然电脑会比较累',
      '运行Dism++，点击空间回收，勾选上被取代的WinSxS组件、过期Appx应用、Windows报告事件更新安装记录、Installer目录，Installer基线缓存、损坏的Appx。下面的缓存文件全部勾选。应用程序那里全部勾选，临时文件全部勾选，然后直接点击清理',
      '相信我，如果你是第一次清理，运气好可以释放十多个G，如果你觉得还不够，可以勾选CompactOS，硬链接合并，但是确实很慢',
      '还不够？继续往下看'
    ],
  },
  {
    icon: 'campaign--outlined',
    title: '认清现实',
    items: [
      '日常维护不能解决积累已久的性能问题，如果机子已经优化到最佳状态，但4GB内存实在不能满足教学要求，这是学校的问题',
      '老师U盘没插好导致PPT放不出来，学校网络问题导致希沃登陆不上，这些问题都是无法避免无法解决的，如果遇到脾气不好的老师，真的只能受着',

    ],
  },
]

// ====== 常见故障 ======
const qas = [
  {
    q: '一体机开机后屏幕黑屏，显示无信号',
    a: '这是最常遇到的问题之一，通常不是硬件故障。',
    steps: [
      '检查一体机输入源按钮，确认选中了正确的输入源（PC）',
      '轻触屏幕，如果是Windows自动休眠，建议关闭',
    ],
  },

  {
    q: '一体机触屏失灵或触摸不准',
    steps: [
      '先用干净的软布擦拭屏幕四周的边框',
      '检查屏幕角落是否有异物卡在触摸框感应区',
      '检查屏幕上是否有蚊虫',
    ],
  },
  {
    q: '为什么不推荐同时安装Office和WPS',
    steps: [
      '同时安装多种办公软件会导致COM组件互相冲突，像希沃那个翻页的东西（PPT小工具）就是需要COM组件支持',
      '系统通过CLSID定位具体组件，当系统同时安装Microsoft Office与WPS Office时，两者均会向注册表写入自动化接口，导致COM组件映射关系被覆盖，从而产生调用异常，也就是希沃小工具打不开之类的'
    ],
  },
  {
    q: '开机要等很久',
    steps: [
      '按 Ctrl+Shift+Esc 打开任务管理器 → 启动选项卡，禁用不必要的开机自启程序',
    ],
  },
  {
    q: '教室电脑运行特别慢，电脑频繁弹广告窗口，影响上课',
    steps: [
      '之前看到一个鬼，他妈的装个PVZ杂交版，结果还下的盗版，捆绑一堆流氓软件，首先不建议在学校电脑上装游戏，就算装也不要装盗版游戏',
      '打开控制面板 → 程序和功能，按安装时间排序，卸载最近安装的可疑软件',
      '删掉电脑上的杀毒软件，金山毒霸，360，火绒都不要有，首先现在的电脑没那么容易中毒，其次这些杀毒软件的后台扫描很吃性能的！',
    ],
    tip: '不要从非官网下载软件，安装时看清楚勾选框，拒绝捆绑安装。',
  },
  {
    q: '希沃白板登录不了，一直显示网络错误',
    steps: [
      '首先确认教室网络正常（打开浏览器访问任意网站测试）',
      '如果是南方土豆交换机发力了，让老师开个热点，你带了手机也可以自己开个热点',
      '如果班上有人用了VPN，揍他一顿，然后打开控制面板->网络和Internet->Internet属性->连接->局域网设置，取消勾选为 LAN 使用代理服务器，然后确定',
    ],
    
  },
  {
    q: 'PPT 打开提示要修复',
    steps: [
      '只有Microsoft PowerPoint有这个问题，解决它最直接的方法是安装WPS，但我相信大家都不喜欢WPS',
      '点击修复，然后等，一直等，不要取消',
    ],
    tip: '如果你发现某个老师的课件总是这样，可以让他先发你一份，提前修好，不占用上课时间。',
  },
  {
    q: '教室无法上网',
    steps: [
      '彻底关机再打开，为什么嘞，因为有些老师上完课弹出U盘可能弹错了，把USB无线网卡弹掉了。',
      '如果不是本机网卡问题，那就只能是学校垃圾WiFi发力了。'
    ],
  },
  {
    q: '清理C盘',
    steps: [
      '先试试卸载不需要的软件',
      '按下Win+X，点击PowerShell（管理员），输入powercfg -h off，按回车',
      '按下Win+R，输入SystemPropertiesPerformance.exe，弹出的性能选项点高级，虚拟内存点更改，取消勾选自动管理的所有驱动器分页文件大小（如果已经取消勾选了就不用管）点下列表里的C:，选中无分页文件，点下设置；再点下D:，选中系统管理的大小，点下设置，然后点下确定。',
      '还有一个办法，去网上装一个Dism++，用那个释放空间功能，那个是真的牛逼，能清出十多个G，你大可自己搜搜使用方法',
    ],
    tip: '这个操作较为复杂，建议让群里经过认证的技术人员辅助操作',
  },
  {
    q: 'NFZX-TEA WiFi密码',
    steps: [
      'nanfangzhongxue',
    ],
  },
  {
    q: 'NFZX-Card WiFi密码',
    steps: [
      'Dzbanpai',
    ],
  },
  {
    q: '电子班牌破解方法',
    steps: [
      '学习强国那里有个搜索按钮，进入搜索界面键盘会弹出来',
      '长按斜杠键，点击语言设置，在弹出的页面里从屏幕左边缘滑动，会出现侧边栏',
      '点击显示设置，找到隐藏底部导航栏选项，让导航栏显示',
      '用底部导航栏回到桌面。如果要重新回到学习强国页面，找到“液晶互动”应用，打开就行',
    ],
    tip: '只有安卓7才能用这种方式打开设置页面侧边栏，所以我们吃到时代的红利了。破解之后建议先去装一个MT管理器',
  },
]
</script>
