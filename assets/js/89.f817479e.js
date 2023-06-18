(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{383:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速上手-quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手-quick-start"}},[s._v("#")]),s._v(" 快速上手  "),t("font",{attrs:{size:"3"}},[s._v("Quick Start")])],1),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("使用 npm 构建前，请先确保您已经安装好了 Node.js 运行时环境。")])]),s._v(" "),t("h4",{attrs:{id:"通过-npm-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-npm-安装"}},[s._v("#")]),s._v(" 通过 npm 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("npm i visn -S")])]),s._v(" "),t("h4",{attrs:{id:"通过-yarn-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-yarn-安装"}},[s._v("#")]),s._v(" 通过 yarn 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("yarn add visn -S")])]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"引入组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入组件"}},[s._v("#")]),s._v(" 引入组件")]),s._v(" "),t("p",[s._v("所有组件文档中的引入路径均以 "),t("strong",[s._v("npm")]),s._v(" 安装为例，如果你是通过下载源代码的方式使用 Visn，请将路径修改为项目中 "),t("strong",[s._v("Visn 所在的目录")]),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"全局注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局注册"}},[s._v("#")]),s._v(" 全局注册")]),s._v(" "),t("p",[s._v("在您的Vue项目中，进入main.js文件，进行全局注册：")]),s._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入组件库和样式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" visn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visn/packages'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visn/lib/visn.css'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册组件库")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("还可以通过这样的方式对某个组件进行全局注册：")]),s._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" VsButton "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visn/packages/vs-button'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 组件按需引入注册<br/>")]),s._v("\nVsButton"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"局部注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部注册"}},[s._v("#")]),s._v(" 局部注册")]),s._v(" "),t("p",[s._v("同上，局部注册则没有引入整个Visn的必要，只需要局部引入即可，不过需要再声明一下Vue，建议全局注册会方便很多。")]),s._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" VsButton "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visn/packages/vs-button'")]),s._v("\nVsButton"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("使用组件")]),s._v("\n引入组件后，可以在 Vue 项目中直接使用组件。")]),s._v(" "),t("div",{staticClass:"language-HTML line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("vs-button")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("按钮"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("vs-button")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);