(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{626:function(t,a,e){"use strict";e.r(a);var n=e(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"语义化标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语义化标签"}},[t._v("#")]),t._v(" 语义化标签")]),t._v(" "),e("p",[t._v("如：header、footer、main、nav、aside、section、article等\n增强代码的可读性、可维护性")]),t._v(" "),e("h1",{attrs:{id:"新增input的type值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增input的type值"}},[t._v("#")]),t._v(" 新增input的type值")]),t._v(" "),e("p",[t._v("选择框类型\ncolor     颜色选择器\ndate      日期选择器\ndatetime-local   日期时间选择器\ntime     时间选择器\nmonth   月份选择器\nweek  周选择器")]),t._v(" "),e("p",[t._v("限制类\nnumber   限制输入数字\nemail  不能够完全正确\nsearch  多了一个删除内容按钮\nurl     验证一个浏览地址\nrange   区间选择（有点类似 进度条）")]),t._v(" "),e("h1",{attrs:{id:"input-新属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-新属性"}},[t._v("#")]),t._v(" input 新属性")]),t._v(" "),e("p",[t._v("aria-*     盲人提示信息\ndata-*     数据的tag      el.dataset['name']\ncontentEditable    可编辑的区域\ntabIndex    调整tab键获取光标顺序")]),t._v(" "),e("h1",{attrs:{id:"form-表单新元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-表单新元素"}},[t._v("#")]),t._v(" form 表单新元素")]),t._v(" "),e("p",[t._v("datalist   可搜索下拉列表\noutput    输出框   【不建议使用】\nkeygen  私钥加密  【已废弃】")]),t._v(" "),e("h1",{attrs:{id:"form-新属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-新属性"}},[t._v("#")]),t._v(" form 新属性")]),t._v(" "),e("p",[t._v("novalidate     取消验证")]),t._v(" "),e("h1",{attrs:{id:"本地存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地存储"}},[t._v("#")]),t._v(" 本地存储")]),t._v(" "),e("p",[t._v("会话级存储  sessionStorage\n会话：一次交互 一次聊天 一次会面。 在交互（网页被打开）的过程中 数据有效 交互结束后数据自动清除\n数据在浏览器标签页存在周期中（关闭标签页、关闭浏览器数据就没了）")]),t._v(" "),e("p",[t._v("永远级存储    localStorage\n本地存储（永久性存储，关了浏览器也还在，除非手动删除）约能存5M")]),t._v(" "),e("p",[t._v("复杂数据类型的本地存储\n先将数据转换为json字符串\nsetItem()\ngetItem()\n将json字符串转换为对应的复杂数据类型")]),t._v(" "),e("p",[t._v("cookie  浏览器暂时存储一些数据的东西，存放在你的(用户)电脑上，以各个站点为单位，不同的浏览器直接cookie不共用\n需要在服务器环境下才能设置cookie(火狐浏览器除外) 默认存储时间会会话级存储，可以通过expires进行设置存储时间\n一般用于保存用户的一些id账号信息，如输入密码之后30天可以不需要再输入密码登录\n大小限制 4kb\n每次发 HTTP 请求，都会有 Cookie 字段，带着")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('设置cookie\n    // 获取本地时间转换为时间戳\n    let date=new Date().getTime();\n    // 进行计算,时间戳加上30天再转换为日期对象\n    let newDate=new Date(date + 30*24*60*60*1000)\n    // 由于时区的关系需要使用toUTCString()可根据世界时 (UTC) 把 Date 对象转换为字符串,并返回结果\n    document.cookie="name=姓名; expires="+newDate.toUTCString()\n\n获取cookie\n     console.log(document.cookie);\n')])])]),e("p",[t._v("JSON 字符串/对象\nJSON.stringify()       将js 复杂数据类型 转换成 json字符串\nJSON.parse()          将json字符串 转换成 对应的复杂数据类型")]),t._v(" "),e("h1",{attrs:{id:"新的获取dom-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新的获取dom-api"}},[t._v("#")]),t._v(" 新的获取DOM API")]),t._v(" "),e("p",[t._v("querySelector  获取第一个满足条件的元素\nquerySelectorAll 获取所有 满足条件的元素")]),t._v(" "),e("h1",{attrs:{id:"多媒体标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多媒体标签"}},[t._v("#")]),t._v(" 多媒体标签")]),t._v(" "),e("p",[t._v("video属性\nautoplay      自动播放\nsrc                 获取视频地址 （相对/绝对  完整url地址 均可）")]),t._v(" "),e("p",[t._v("width            宽度\nheight           高度\nmuted          静音 （如果视频进入 自动播放 必须要先静音）\nloop              自动循环播放\ncontrols       显示播放控制台\nposter          封面（图片，相对/绝对  完整url地址 均可）")]),t._v(" "),e("p",[t._v("video方法")]),t._v(" "),e("p",[t._v("load ()    重新加载\nplay()      播放\npause()    暂停")]),t._v(" "),e("p",[t._v("video 事件\nended    视频播放结束时触发的事件")]),t._v(" "),e("p",[t._v("audio 属性\nload ()    重新加载\nplay()      播放\npause()    暂停")]),t._v(" "),e("h1",{attrs:{id:"地理定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地理定位"}},[t._v("#")]),t._v(" 地理定位")]),t._v(" "),e("p",[t._v("h5提供了Geolocation API访问地理位置，即通过window.navigator.geolocation来实现访问\n这个对象有三个方法:\ngetCurrentPosition()、watchPosition()、clearWatch()\n页面第一次使用这个api需要获得用户许可, watchPosition可以对位置变化事件进行监听")]),t._v(" "),e("p",[t._v("高德地图使用\n进入高德地图 开放平台\n登录账号\n完善个人信息---个人开发者  ----填写名字")]),t._v(" "),e("p",[t._v("应用管理---我的应用---创建新应用\n进入该应用---添加--填写对应值\n获取到该应用的私钥并保存")]),t._v(" "),e("p",[t._v("示例中心\n驾车路线规划---复制代码\n替换 key   替换 中心城市点位（经纬度） 替换起点终点(经纬度)")]),t._v(" "),e("h1",{attrs:{id:"css3兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3兼容性"}},[t._v("#")]),t._v(" css3兼容性")]),t._v(" "),e("p",[t._v("-webkit-  以webkit做内核的浏览器（chrome，safri） -webkit-border-rauids\n-ms-    IE  -ms-border-rauids\n-moz-   火狐\n-o-    opera（手机）\n浏览器兼容HTML5评分网站：http://html5test.com/")])])}),[],!1,null,null,null);a.default=r.exports}}]);