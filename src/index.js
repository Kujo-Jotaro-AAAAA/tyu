import { bindData, Observer } from './binding';
import compile from './template/compile';

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = '<div id="app"></div><button id="btn1">用户名</button><button id="btn2">密码</button>';

  // 定义 data 部份
  const data = bindData({
    username: 'wangweiqi',
    password: '123456789',
  });

  // 定义 template 部份
  const app = compile('<h1>Username:<span>{{username}}</span></h1><h1>Password:<span>{{password}}</span></h1>');

  // 创建根组件
  const observeRoot = new Observer('app', data, app);

  // 开始运行
  observeRoot.init();


  // 以下为演示代码，各种方向修改 data 的数据
  setTimeout(() => {
    data.password = '000000';
  }, 2000);

  setTimeout(() => {
    data.username = 'admin';
  }, 3000);

  setTimeout(() => {

    document.getElementById('btn1').addEventListener('click', e => {
      data.username = '用户名';
    }, false);

    document.getElementById('btn2').addEventListener('click', e => {
      data.password = '密码';
    }, false);

  }, 500);
});
