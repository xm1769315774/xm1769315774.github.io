(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{620:function(a,s,t){"use strict";t.r(s);var e=t(5),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-入门"}},[a._v("#")]),a._v(" MySQL 入门")]),a._v(" "),t("p",[a._v("数据库：存储和管理数据的工具")]),a._v(" "),t("p",[a._v("常见数据库：MySQL、Oracle、MongoDB、indexDB、SQLite")]),a._v(" "),t("p",[a._v("关系型数据库：MySQL：通过二维表来描述实体与实体之间的关系")]),a._v(" "),t("p",[a._v("非关系型数据库：MongoDB（用户操作记录、地理信息位置，大数据更多使用非关系型）")]),a._v(" "),t("p",[a._v("最常用 MySQL：开源、免费")]),a._v(" "),t("p",[a._v("SQLite：移动端的轻型数据库")]),a._v(" "),t("h1",{attrs:{id:"数据库术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库术语"}},[a._v("#")]),a._v(" 数据库术语")]),a._v(" "),t("p",[a._v("结构层级：数据库 -> 数据表（多个）-> 多条数据")]),a._v(" "),t("p",[a._v("字段：相当于表的表头\n数据：一条记录/一个数据行")]),a._v(" "),t("p",[a._v("Navicat 可视化操作数据库的工具")]),a._v(" "),t("h1",{attrs:{id:"sql-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句"}},[a._v("#")]),a._v(" SQL 语句")]),a._v(" "),t("p",[a._v("SQL：结构化查询语言。是用来操作数据库（可以操作表、操作数据）")]),a._v(" "),t("p",[a._v("每天做的都是 CRUD 应用：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("Create 创建\nRetrive 查询\nUpdate 更新\nDelete 删除\n")])])]),t("h1",{attrs:{id:"mysql-数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据类型"}},[a._v("#")]),a._v(" MySQL 数据类型")]),a._v(" "),t("p",[a._v("常用：\nINT：整型\nVARCHAR：可变长度字符串\nTEXT：长文本\nTIMESTAMP：时间戳")]),a._v(" "),t("h1",{attrs:{id:"创建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[a._v("#")]),a._v(" 创建表")]),a._v(" "),t("p",[a._v("主键：一个表中，主键的值是唯一的")]),a._v(" "),t("p",[a._v("关键字：CREATE TABLE")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CREATE TABLE `user`(\n  `id` INT PRIMARY KEY AUTO_INCREMENT,\n  `name` VARCHAR(255),\n  `age` INT,\n  `sex` VARCHAR(1),\n  `desc` TEXT,\n  `ctime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n")])])]),t("h1",{attrs:{id:"插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入数据"}},[a._v("#")]),a._v(" 插入数据")]),a._v(" "),t("p",[a._v("INSERT INTO")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("INSERT INTO users\n  (name, age, sex, `desc`)\n  VALUES\n  ('后羿', 101, '男', '周日被我射熄火了，所以今天是周一');\n")])])]),t("h1",{attrs:{id:"更新数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新数据"}},[a._v("#")]),a._v(" 更新数据")]),a._v(" "),t("p",[a._v("UPDATE")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    UPDATE users SET age=32 WHERE id=7;\n")])])]),t("p",[a._v("其中：\nWHERE 设定条件。如果不加，就会改所有。")]),a._v(" "),t("h1",{attrs:{id:"删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[a._v("#")]),a._v(" 删除数据")]),a._v(" "),t("p",[a._v("DELETE")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    DELETE FROM users WHERE age=101;\n")])])]),t("p",[a._v("注意：一定要写 WHERE。不限定条件，就全部删了")]),a._v(" "),t("h1",{attrs:{id:"查询数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[a._v("#")]),a._v(" 查询数据")]),a._v(" "),t("p",[a._v("SELECT")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    SELECT name, sex, `desc` FROM users;\n")])])]),t("p",[a._v("查询所有字段：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    SELECT * FROM users;\n")])])]),t("p",[a._v("其中 * 表示所有字段。")]),a._v(" "),t("p",[a._v("通过 WHERE 字句设定条件：")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    SELECT * FROM users WHERE age>=18;\n")])])]),t("p",[a._v("条件：\n=：等于\n<> 或 !=：不等于\n：大于\n<：小于\n=：大于等于\n<=：小于等于")]),a._v(" "),t("h1",{attrs:{id:"like-模糊查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#like-模糊查询"}},[a._v("#")]),a._v(" LIKE 模糊查询")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    SELECT * FROM users WHEREdescLIKE '%男%';\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("% 表示的是匹配任意字符\n")])])]),t("h1",{attrs:{id:"and-、or、in-操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#and-、or、in-操作符"}},[a._v("#")]),a._v(" AND 、OR、IN 操作符")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("AND：且。要求同时满足条件\nOR：或。满足其一\nIN：满足多个值中的一个\n")])])]),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    SELECT * FROM users WHERE age IN (16, 300, 42);\n")])])]),t("h1",{attrs:{id:"排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[a._v("#")]),a._v(" 排序")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    SELECT * FROM users ORDER BY age ASC;\n")])])]),t("p",[a._v("默认升序：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("ASC：升序\nDESC：降序\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);