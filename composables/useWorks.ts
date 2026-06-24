// 共享数据 — 作品和友情链接，首页与作品展示页共用
// 只需在这里维护一份数据，两页自动同步

export interface WorkItem {
  title: string
  desc: string
  author: string
  link: string
  icon: string
  badge?: string
}

export interface LinkItem {
  title: string
  link: string
  icon: string
}

export function useWorks() {
  const works: WorkItem[] = [
    { title: 'EasiAuto 希沃白板自动登录', desc: '通过模拟点击，图像识别，进程注入等方式自动登录希沃白板', author: '2506 电教 AbCd 自制', link: 'https://easiauto.0xabcd.dev/', icon: 'rocket_launch--outlined', badge: '中小学生数字素养提升实践活动省赛入围作品' },
    { title: 'QQListener 班级群监听器', desc: '让每一条重要通知都能被听见 班级群消息监听器', author: '2505 电教 xxt8582753 自制', link: 'https://xxtsoft.top/support/qqlistener/', icon: 'volume_up--outlined', badge: '中小学生数字素养提升实践活动国赛入围作品' },
    { title: 'EntertainingIsland 娱乐插件', desc: '防巡堂警报、下课倒计时、小说阅读器、老师口头禅记录、RSS新闻、拿老师的头当课程表、能作弊的点名器、每日宜忌运势等功能。', author: '2505 电教 xxt8582753 自制', link: 'https://forum.smart-teach.cn/d/2042-ni-de-ke-biao-bi-ni-xiang-xiang-de-geng-hao-wan-classislandcha-jian-entertainingislandfa-bu', icon: 'star--outlined'},
    { title: '点名器', desc: '基于Java的随机点名工具', author: '2412 电教 RenJun 自制', link: 'https://github.com/RenJun-ZH/rollcall', icon: 'my_location--outlined' },
    { title: 'EasiNote Theme Patcher', desc: '轻松替换希沃白板课件和小工具主题（不建议用，代码写的很烂）', author: '2505 电教 xxt8582753 自制', link: 'https://forum.smart-teach.cn/d/1252-easinote-theme-patcher', icon: 'brush--outlined' },
    { title: 'ExitBoard 放学倒计时', desc: '任务栏上的放学倒计时，支持自定义放学背景图片和音乐', author: '2505 电教 xxt8582753 自制', link: 'https://forum.smart-teach.cn/d/748-exitboard-fang-xue-dao-ji-shi', icon: 'schedule--outlined' },
    { title: 'SeewoPenTweaker', desc: '让希沃翻页笔变成鼠标！2517班有福了！', author: '2506 电教 AbCd 自制', link: 'https://github.com/hxabcd/SeewoPenTweaker', icon: 'edit--outlined' },
    { title: '360拖堂卫士', desc: '拖堂自动关闭PPT', author: '2505 电教 xxt8582753 自制', link: 'https://forum.smart-teach.cn/d/740-360tuo-tang-wei-shi', icon: 'shield--outlined' },
    
  ]

  const links: LinkItem[] = [
    { title: '2506班电教', link: 'https://0xabcd.dev/', icon: 'link--outlined' },
    { title: '智教联盟', link: 'https://forum.smart-teach.cn/', icon: 'public--outlined' },
  ]

  return { works, links }
}
