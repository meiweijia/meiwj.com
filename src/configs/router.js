/**
 * 多页面路由配置
 * @param {name} 页面独立key
 * @param {path} 页面路径
 * @param {title} 页面标题
 */
module.exports = [
  {
    name: 'index',
    path: 'pages/index',
    title: 'Home',
    icon: 'bx-home'
  },
  {
    name: 'about',
    path: 'pages/about',
    title: 'About',
    icon: 'bx-user'
  },
  {
    name: 'resume',
    path: 'pages/resume',
    title: 'Resume',
    icon: 'bx-file-blank'
  },
];