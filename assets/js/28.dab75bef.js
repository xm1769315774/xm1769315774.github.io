(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{629:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"对于-dom-的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-dom-的理解"}},[t._v("#")]),t._v(" 对于 DOM 的理解？")]),t._v(" "),a("p",[t._v("概念: DOM(文档对象模型),主要用于操作HTML中的,文本内容,样式结构,标签..")]),t._v(" "),a("p",[t._v("分类: 共三种类型")]),t._v(" "),a("p",[t._v("​\t核心DOM: 主要提示操作XML和HTML的核心操作接口( CRUD)")]),t._v(" "),a("p",[t._v("​\tCRUD: 增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete)")]),t._v(" "),a("p",[t._v("​\tXML DOM: 主要用于操作XML接口")]),t._v(" "),a("p",[t._v("​\tHTML DOM: 主要用于操作HTML接口")]),t._v(" "),a("p",[t._v("节点树")]),t._v(" "),a("p",[t._v("把整个html文档当成树形的结构,方便后期进行DOM操作,获取相关的内容(节点)")]),t._v(" "),a("p",[t._v("主要内容:")]),t._v(" "),a("p",[t._v("​\t1.整个文档---文档节点---document")]),t._v(" "),a("p",[t._v("​\t2.所有HTML标签---标签(元素)节点---element")]),t._v(" "),a("p",[t._v("​\t3.所有标签上的属性----属性节点----Attribute(attr/att )")]),t._v(" "),a("p",[t._v("​\t4.标签中的文本内容---文本节点包括:空格和回车----text")]),t._v(" "),a("p",[t._v("​\t5.一切万物皆节点(Node)")]),t._v(" "),a("h1",{attrs:{id:"获取dom节点操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取dom节点操作"}},[t._v("#")]),t._v(" 获取DOM节点操作")]),t._v(" "),a("p",[t._v("通过不同的方式获取需要进行操作的HTML节点,来进行操作")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式一: 通过id的值来获取元素对象")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标准写法:")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id的值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非标准写法: 由于ID具有唯一性,可以直接通过id的值获取到指定元素对象")]),t._v("\n\t说明"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  表示文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("相当于body标签 \n\t\tget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 表示获取"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        Element"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 表示 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("标签")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tBy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 表示通过"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("的方式\n        Id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("的值\n        \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式二: 通过类名来获取元素对象")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示获取文档中所有指定类名的标签节点")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class的值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示获取指定对象中所有指定类名的标签节点")]),t._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class的值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t注意"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("获取到的元素对象为伪数组格式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("哪怕只有一个元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("也是伪数组\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("不能直接使用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("必需通过数组的方式来进行"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("操作 \n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("伪数组"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 表示长得像数组"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("但是不能使用数组方法"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("可以使用属性\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式三: 通过标签名来获取元素对象")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示获取文档中所有指定标签名的标签节点")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'标签名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示获取指定对象中所有指定标签名的标签节点")]),t._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'标签名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t注意"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("获取到的元素对象为伪数组格式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("哪怕只有一个元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("也是伪数组\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("不能直接使用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("必需通过数组的方式来进行"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("操作 \n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("伪数组"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 表示长得像数组"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("但是不能使用数组方法"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("可以使用属性\n\n#"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),t._v("新增的获取元素的方式"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t表示获取整个文档中指定选择器的第一个元素"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("具体元素\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'选择器'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t表示获取指定元素对象中的所有指定选择器的元素节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("伪数组\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'选择器'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n\t注意"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n\t\t选择器"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("必需是"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CSS")]),t._v("中的选择器"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("如"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  id   #box   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test")]),t._v("\n")])])]),a("h1",{attrs:{id:"操作属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作属性"}},[t._v("#")]),t._v(" 操作属性")]),t._v(" "),a("p",[t._v("注意: 在js元素DOM中的属性,在标签属性中有对应的同名属性")]),t._v(" "),a("p",[t._v("如: 操作DOM中的id")]),t._v(" "),a("p",[t._v("​\t元素对象.id: 获取指定元素对象上的id属性的值")]),t._v(" "),a("p",[t._v("​\t元素对象.id=值; 设置指定元素对象上id属性的值")]),t._v(" "),a("h1",{attrs:{id:"原生js中使用classlist操作class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生js中使用classlist操作class"}},[t._v("#")]),t._v(" 原生js中使用classList操作class")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实现  鼠标按下，换颜色，松开，恢复默认颜色")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mousedown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div01"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"changeColor"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mouseup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div01"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"changeColor"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//语法:")]),t._v("\n元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("属性名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   设置指定对象上的属性值\n元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("属性名\t   获取指定对象上的属性值\n\n注意"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("属性"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("一般写成 className \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//style属性:  主要用于设置或获取行内样式")]),t._v("\n#注意"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 一般css中由多个单词组成的样式属性"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("一般使用 驼峰命名法来写\n如"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("dom操作   backgroundColor\n\tfont"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n语法"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t设置样式"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("属性名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t获取样式"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("属性名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h1",{attrs:{id:"操作dom节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作dom节点"}},[t._v("#")]),t._v(" 操作DOM节点")]),t._v(" "),a("p",[t._v("操作节点: 对节点进行CRUD操作(增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete))")]),t._v(" "),a("h2",{attrs:{id:"查询节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询节点"}},[t._v("#")]),t._v(" 查询节点")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("#查询节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t原生获取节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),t._v("节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement\n\tbody节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body\n\n#查询节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("属性"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("大部分东西都有"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUG")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("子节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode   子点找父节点\n    \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild\t列表中的第一个节点\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild\t    列表中的最后一个节点\n    \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes\t获取当前父节点中所有子节点的列表\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v("同级兄弟节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("previousSibling\t上一个兄弟节点\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.")]),t._v("同级兄弟节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibling\t    下一个兄弟节点\n\t\n")])])]),a("h2",{attrs:{id:"创建节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建节点"}},[t._v("#")]),t._v(" 创建节点")]),t._v(" "),a("p",[t._v("作用: 用于创建指定标签")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤1: 创建一个元素节点(标签节点)")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" 元素节点"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'标签名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤2: 向元素节点中 添加标签属性(class==>写成 className)")]),t._v("\n\t元素节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("属性名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//步骤3: 向元素节点中  添加文本内容")]),t._v("\n\t元素节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"添加节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[t._v("#")]),t._v(" 添加节点")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式一: 在父节点内容之后添加新节点")]),t._v("\n\t父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("新节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式二: 在指定兄弟节点之前添加新节点")]),t._v("\n\t父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("新节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("同级兄弟节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"修改节点-替换节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改节点-替换节点"}},[t._v("#")]),t._v(" 修改节点(替换节点)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" 父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("新节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("旧节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  表示用新节点 替换 旧节点\n")])])]),a("h2",{attrs:{id:"删除节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除节点"}},[t._v("#")]),t._v(" 删除节点")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("父节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("子节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h1",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("p",[t._v("用户与计算机交互的行为")]),t._v(" "),a("p",[t._v("事件的四要素")]),t._v(" "),a("ul",[a("li",[t._v("事件源: 事件发生在谁身上,谁就是事件源")]),t._v(" "),a("li",[t._v("事件类型: 发生事件时,具体发生的哪类事件")]),t._v(" "),a("li",[t._v("事件处理函数(事件句柄): 事件发生时,所执行的那个函数")]),t._v(" "),a("li",[t._v("事件对象: 表示事件的旁观者, 事件对象中包含了所有与事件相关的信息")])]),t._v(" "),a("p",[t._v("注册事件的三种方式")]),t._v(" "),a("p",[t._v("分类:")]),t._v(" "),a("p",[t._v("​\t1.通过标签上的事件属性注册事件--(DOM0级事件)")]),t._v(" "),a("p",[t._v("​\t2.通过元素对象来注册事件--(DOM0级事件)")]),t._v(" "),a("p",[t._v("​\t3.通过事件监听(侦听)来注册事件---重点--(DOM2级事件)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.通过标签上的事件属性注册事件--(DOM0级事件)--了解")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("标签名 事件类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js代码"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("文本内容"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("标签名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\t\t如"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div onclick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js代码"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缺点:")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("js和html代码没有分离"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("不方便后期维护\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("同类型的事件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只能注册一次  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.通过元素对象来注册事件--(DOM0级事件)--理解")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式一:")]),t._v("\n\t\t元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("事件类型")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式二: ")]),t._v("\n\t\t元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("事件类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//优点:")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("js和html代码分离了\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缺点:")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("同类型的事件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只能注册一次 \n\t\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.通过事件监听(侦听)来注册事件---==重点==--(DOM2级事件)")]),t._v("\n\t注册事件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("事件源")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'不带on的事件类型'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("事件处理函数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t注销事件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("事件源")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("元素对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'不带on的事件类型'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("事件处理函数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t#注意"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("提示低版本浏览器")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ie9以下版本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("中  \n    \t注册事件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" attachEvent    事件类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("带on的事件类型\n        注销事件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" detachEvent    事件类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("带on的事件类型\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);