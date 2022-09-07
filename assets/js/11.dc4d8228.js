(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{281:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),s("h2",{attrs:{id:"盒模型-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型-2"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),s("p",[t._v("CSS 盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容")]),t._v(" "),s("p",[t._v("盒模型允许我们在其它元素和周围元素边框之间的空间放置元素")]),t._v(" "),s("p",[t._v("CSS 中组成一个块级盒子需要:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content box（内容）")]),t._v(": 这个区域是用来显示内容，大小可以通过设置 width 和 height")]),t._v(" "),s("li",[s("strong",[t._v("Padding box（内边距）")]),t._v(": 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置")]),t._v(" "),s("li",[s("strong",[t._v("Border box（边框）")]),t._v(": 边框盒包裹内容和内边距。大小通过 border 相关属性设置")]),t._v(" "),s("li",[s("strong",[t._v("Margin box（外边距）")]),t._v(": 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置")])]),t._v(" "),s("blockquote",[s("p",[t._v("**Tips：**背景应用于由内容和内边距、边框组成的区域")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/17e7d04c26c530d75b7d59a58b0d5490.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"块级盒子和内联盒子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块级盒子和内联盒子"}},[t._v("#")]),t._v(" 块级盒子和内联盒子")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("display")]),t._v(" 属性值来更改内部显示类型")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 块级盒子 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 内联盒子 */")]),t._v("\n12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("块级盒子")])]),t._v(" "),s("p",[t._v("一个被定义成块级的（block）盒子会表现出以下行为:")]),t._v(" "),s("ul",[s("li",[t._v("盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽")]),t._v(" "),s("li",[t._v("每个盒子都会换行")]),t._v(" "),s("li",[t._v("width 和 height 属性可以发挥作用")]),t._v(" "),s("li",[t._v("内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围推开")])]),t._v(" "),s("p",[s("strong",[t._v("内联盒子")])]),t._v(" "),s("p",[t._v("如果一个盒子对外显示为 "),s("code",[t._v("inline")]),t._v("，那么他的行为如下:")]),t._v(" "),s("ul",[s("li",[t._v("盒子不会产生换行。")]),t._v(" "),s("li",[t._v("width 和 height 属性将不起作用")]),t._v(" "),s("li",[t._v("垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 "),s("code",[t._v("inline")]),t._v(" 状态的盒子推开")]),t._v(" "),s("li",[t._v("水平方向的内边距、外边距以及边框会被应用且会把其他处于 "),s("code",[t._v("inline")]),t._v(" 状态的盒子推开")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/2a4aabb36b73abf6dadeabfa32228665.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"标准盒模型和ie盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准盒模型和ie盒模型"}},[t._v("#")]),t._v(" 标准盒模型和IE盒模型")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("box-sizing")]),t._v(" 属性来设置"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("盒子模型"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* IE盒模型 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 标准盒模型 */")]),t._v("\n12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/86c7ce7be14790da7b334ce8f0b4c1e6.png",alt:"img"}})]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("content-box")]),t._v(" —— 默认值，标准盒子模型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("设置的 "),s("code",[t._v("width")]),t._v(" 与 "),s("code",[t._v("height")]),t._v(" 只包括内容（content box）的宽和高， 不包括边框（border），内边距（padding），外边距（margin）")])]),t._v(" "),s("li",[s("p",[t._v("尺寸计算公式：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("盒子实际宽度 = border*2 + padding*2 + content box内容宽度\n盒子实际高度 = border*2 + padding*2 + content box内容高度\n\n设置的盒子宽度 = content box内容宽度\n设置的盒子高度 = content box内容高度\n12345\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("border-box")]),t._v(" —— IE盒模型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("设置的 "),s("code",[t._v("width")]),t._v(" 与 "),s("code",[t._v("height")]),t._v(" 包括内容（content box）的宽和高，边框（border），内边距（padding），但不包括外边距（margin）")])]),t._v(" "),s("li",[s("p",[t._v("尺寸计算公式：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("盒子实际宽度 = border*2 + padding*2 + content box内容宽度\n盒子实际高度 = border*2 + padding*2 + content box内容高度\n\n设置的盒子宽度 = border*2 + padding*2 + content box内容宽度\n设置的盒子高度 = border*2 + padding*2 + content box内容高度\n12345\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])])])]),t._v(" "),s("h2",{attrs:{id:"css尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css尺寸"}},[t._v("#")]),t._v(" CSS尺寸")]),t._v(" "),s("p",[t._v("CSS 尺寸属性允许你控制元素的高度（"),s("code",[t._v("height")]),t._v("）和宽度（"),s("code",[t._v("width")]),t._v("）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("height")])]),t._v(" "),s("td",[t._v("设置元素的高度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("width")])]),t._v(" "),s("td",[t._v("设置元素的宽度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("max-height")])]),t._v(" "),s("td",[t._v("设置元素的最大高度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("max-width")])]),t._v(" "),s("td",[t._v("设置元素的最大宽度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("min-height")])]),t._v(" "),s("td",[t._v("设置元素的最小高度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("min-width")])]),t._v(" "),s("td",[t._v("设置元素的最小宽度")])])])]),t._v(" "),s("h3",{attrs:{id:"width-和-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#width-和-height"}},[t._v("#")]),t._v(" width 和 height")]),t._v(" "),s("p",[s("code",[t._v("height")]),t._v(" 属性设置元素的高度。行内非替换元素（如："),s("code",[t._v("<a>")]),t._v(","),s("code",[t._v("<span>")]),t._v(",影响他们高度的是"),s("code",[t._v("line-height")]),t._v("属性）会忽略这个属性")]),t._v(" "),s("p",[s("code",[t._v("width")]),t._v(" 属性设置元素的宽度。行内非替换元素（如："),s("code",[t._v("<a>")]),t._v(","),s("code",[t._v("<span>")]),t._v("）会忽略这个属性")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("auto")]),t._v(" 默认。浏览器会计算出实际的宽度")]),t._v(" "),s("li",[s("code",[t._v("length")]),t._v(" 使用 "),s("strong",[t._v("px")]),t._v(", cm, mm, em 等单位定义宽度")]),t._v(" "),s("li",[s("code",[t._v("%")]),t._v(" 基于包含它的块级对象的百分比定义宽度")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n123456789\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"max-width-和-max-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-width-和-max-height"}},[t._v("#")]),t._v(" max-width 和 max-height")]),t._v(" "),s("p",[s("code",[t._v("max-height")]),t._v(" 属性设置元素的最大高度")]),t._v(" "),s("p",[t._v("该属性值会对元素的高度设置一个最高限制。因此，元素可以比指定值矮，但不能比其高。不允许指定负值")]),t._v(" "),s("p",[t._v("设置最大高度后，段落的高度不会超过最大高度，但文本会溢出，其他部分可以覆盖到溢出的部分")]),t._v(" "),s("p",[s("code",[t._v("max-width")]),t._v(" 定义元素的最大宽度")]),t._v(" "),s("p",[t._v("该属性值会对元素的宽度设置一个最高限制。因此，元素可以比指定值窄，但不能比其宽。不允许指定负值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("none")]),t._v(" 默认。对元素的宽度没有限制")]),t._v(" "),s("li",[s("code",[t._v("length")]),t._v(" 使用 "),s("strong",[t._v("px")]),t._v(", cm, mm, em 等单位定义元素的最大宽度值")]),t._v(" "),s("li",[s("code",[t._v("%")]),t._v(" 基于包含它的块级对象的百分比定义最大宽度")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 元素的最大宽度不能超过200px */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 元素的最大高度不能超过200px */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n123456789\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"min-width-和-min-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-width-和-min-height"}},[t._v("#")]),t._v(" min-width 和 min-height")]),t._v(" "),s("p",[s("code",[t._v("min-height")]),t._v(" 属性设置元素的最小高度")]),t._v(" "),s("p",[t._v("该属性值会对元素的高度设置一个最低限制。因此，元素可以比指定值高，但不能比其矮。不允许指定负值")]),t._v(" "),s("p",[s("code",[t._v("min-width")]),t._v(" 属性设置元素的最小宽度。")]),t._v(" "),s("p",[t._v("该属性值会对元素的宽度设置一个最小限制。因此，元素可以比指定值宽，但不能比其窄。不允许指定负值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("length")]),t._v(" 使用 "),s("strong",[t._v("px")]),t._v(", cm, mm, em 等单位定义元素的最小高度值，默认值是0")]),t._v(" "),s("li",[s("code",[t._v("%")]),t._v(" 基于包含它的块级对象的百分比定义最小高度")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 元素的宽度最低为100px */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 元素的高度最低为100px */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n123456789\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"边框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[t._v("#")]),t._v(" 边框")]),t._v(" "),s("p",[t._v("CSS边框属性允许你指定一个元素边框的样式和颜色")]),t._v(" "),s("ul",[s("li",[t._v("border：简写属性，用于把针对四个边的属性设置在一个声明")]),t._v(" "),s("li",[t._v("border-width：简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度")]),t._v(" "),s("li",[t._v("border-style：简写属性，用于设置元素所有边框的样式，或者单独地为各边设置边框样式")]),t._v(" "),s("li",[t._v("border-color：简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-width border-style border-color\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"边框宽度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框宽度"}},[t._v("#")]),t._v(" 边框宽度")]),t._v(" "),s("p",[t._v("用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" thin|medium|thick|length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("thin")]),t._v(" "),s("td",[t._v("定义细的边框。")])]),t._v(" "),s("tr",[s("td",[t._v("medium")]),t._v(" "),s("td",[t._v("默认。定义中等的边框。")])]),t._v(" "),s("tr",[s("td",[t._v("thick")]),t._v(" "),s("td",[t._v("定义粗的边框。")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("length")])]),t._v(" "),s("td",[t._v("允许您自定义边框的宽度。")])]),t._v(" "),s("tr",[s("td",[t._v("inherit")]),t._v(" "),s("td",[t._v("规定应该从父元素继承边框宽度。")])])])]),t._v(" "),s("h3",{attrs:{id:"边框样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框样式"}},[t._v("#")]),t._v(" 边框样式")]),t._v(" "),s("p",[t._v("用于设置元素所有边框的样式，或者单独地为各边设置边框样式")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("none")]),t._v(" "),s("td",[t._v("定义无边框。")])]),t._v(" "),s("tr",[s("td",[t._v("hidden")]),t._v(" "),s("td",[t._v("与 “none” 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。")])]),t._v(" "),s("tr",[s("td",[t._v("dotted")]),t._v(" "),s("td",[t._v("定义点状边框。在大多数浏览器中呈现为实线。")])]),t._v(" "),s("tr",[s("td",[t._v("dashed")]),t._v(" "),s("td",[t._v("定义虚线。在大多数浏览器中呈现为实线。")])]),t._v(" "),s("tr",[s("td",[t._v("solid")]),t._v(" "),s("td",[t._v("定义实线。")])]),t._v(" "),s("tr",[s("td",[t._v("double")]),t._v(" "),s("td",[t._v("定义双线。双线的宽度等于 border-width 的值。")])]),t._v(" "),s("tr",[s("td",[t._v("groove")]),t._v(" "),s("td",[t._v("定义 3D 凹槽边框。其效果取决于 border-color 的值。")])]),t._v(" "),s("tr",[s("td",[t._v("ridge")]),t._v(" "),s("td",[t._v("定义 3D 垄状边框。其效果取决于 border-color 的值。")])]),t._v(" "),s("tr",[s("td",[t._v("inset")]),t._v(" "),s("td",[t._v("定义 3D inset 边框。其效果取决于 border-color 的值。")])]),t._v(" "),s("tr",[s("td",[t._v("outset")]),t._v(" "),s("td",[t._v("定义 3D outset 边框。其效果取决于 border-color 的值。")])]),t._v(" "),s("tr",[s("td",[t._v("inherit")]),t._v(" "),s("td",[t._v("规定应该从父元素继承边框样式。")])])])]),t._v(" "),s("h3",{attrs:{id:"边框颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边框颜色"}},[t._v("#")]),t._v(" 边框颜色")]),t._v(" "),s("p",[t._v("设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("color")])]),t._v(" "),s("td",[t._v("指定背景颜色")])]),t._v(" "),s("tr",[s("td",[t._v("transparent")]),t._v(" "),s("td",[t._v("指定边框的颜色应该是透明的。这是默认")])]),t._v(" "),s("tr",[s("td",[t._v("inherit")]),t._v(" "),s("td",[t._v("指定边框的颜色，应该从父元素继承")])])])]),t._v(" "),s("p",[t._v("颜色是通过CSS最经常的指定：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://download.csdn.net/download/weixin_45303117/12186468",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准盒模型与怪异盒模的区别.htmlhtml"),s("img",{attrs:{src:"https://csdnimg.cn/release/blogv2/dist/components/img/star.png",alt:"img"}}),t._v("0星超过10%的资源5KB"),s("img",{attrs:{src:"https://csdnimg.cn/release/blogv2/dist/components/img/arrowDownWhite.png",alt:"img"}}),t._v("下载"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("颜色的名称")]),t._v(" "),s("li",[t._v("HEX 十六进制")]),t._v(" "),s("li",[t._v("RGB")]),t._v(" "),s("li",[t._v("RGBA")]),t._v(" "),s("li",[t._v("HSL")]),t._v(" "),s("li",[t._v("HSLA")])]),t._v(" "),s("h3",{attrs:{id:"设置各边属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置各边属性"}},[t._v("#")]),t._v(" 设置各边属性")]),t._v(" "),s("p",[t._v("css边框可以设置元素各边的边框宽度、边框样式、边框颜色")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置顺序 */")]),t._v("\ntop -> right -> bottom -> left\n\nborder-style：属性1 属性2 属性3 属性4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n上->右->下->左\n\nborder-style：属性1 属性2 属性3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n上->左右->下\n\nborder-style：属性1 属性2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n上下->左右\n\nborder-style：属性1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n上下左右属性相同\n1234567891011121314\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("ul",[s("li",[t._v("border-top：简写属性，用于把上边框的所有属性设置到一个声明中\n"),s("ul",[s("li",[t._v("border-top-width：设置元素的上边框的宽度")]),t._v(" "),s("li",[t._v("border-top-style：设置元素的上边框的宽度")]),t._v(" "),s("li",[t._v("border-top-color：设置元素的上边框的宽度")])])]),t._v(" "),s("li",[t._v("border-right：简写属性，用于把右边框的所有属性设置到一个声明中\n"),s("ul",[s("li",[t._v("border-right-width：设置元素的右边框的宽度")]),t._v(" "),s("li",[t._v("border-right-style：设置元素的右边框的宽度")]),t._v(" "),s("li",[t._v("border-right-color：设置元素的右边框的宽度")])])]),t._v(" "),s("li",[t._v("border-bottom：简写属性，用于把下边框的所有属性设置到一个声明中\n"),s("ul",[s("li",[t._v("border-bottom-width：设置元素的下边框的宽度")]),t._v(" "),s("li",[t._v("border-bottom-style：设置元素的下边框的样式")]),t._v(" "),s("li",[t._v("border-bottom-color：设置元素的下边框的颜色")])])]),t._v(" "),s("li",[t._v("border-left：简写属性，用于把左边框的所有属性设置到一个声明中\n"),s("ul",[s("li",[t._v("border-left-width：设置元素的左边框的宽度")]),t._v(" "),s("li",[t._v("border-left-style：设置元素的左边框的宽度")]),t._v(" "),s("li",[t._v("border-left-color：设置元素的左边框的宽度")])])])]),t._v(" "),s("h2",{attrs:{id:"轮廓"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轮廓"}},[t._v("#")]),t._v(" 轮廓")]),t._v(" "),s("p",[t._v("轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用")]),t._v(" "),s("p",[t._v("轮廓（outline）属性指定元素轮廓的样式、颜色和宽度")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/381a03030b075aad83e53f82ba67707c.png",alt:"img"}})]),t._v(" "),s("p",[t._v("可以设置的属性分别是（按顺序）：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("outline-color --\x3e outline-style --\x3e outline-width\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("outline是围绕元素。它是围绕元素的边距。但是，它是来自不同的边框属性")]),t._v(" "),s("p",[t._v("outline不是元素尺寸的一部分，因此元素的宽度和高度属性不包含轮廓的宽度")]),t._v(" "),s("p",[t._v("outline是不占空间的，既不会增加额外的width或者height")]),t._v(" "),s("ul",[s("li",[t._v("outline：在一个声明中设置所有的轮廓属性")]),t._v(" "),s("li",[t._v("outline-color：设置轮廓的颜色（属性值与边框颜色属性值相同）")]),t._v(" "),s("li",[t._v("outline-style：设置轮廓的样式（属性值与边框样式属性值相同）")]),t._v(" "),s("li",[t._v("outline-width：设置轮廓的宽度（属性值与边框宽度属性值相同）")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outline-color outline-style outline-width\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"外边距与内边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外边距与内边距"}},[t._v("#")]),t._v(" 外边距与内边距")]),t._v(" "),s("p",[t._v("CSS margin (外边距) 属性定义元素周围的空间")]),t._v(" "),s("p",[t._v("CSS padding (填充) 属性定义元素边框与元素内容之间的空间")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/336152d3c6c84bcdf8f6690352d5a4ca.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"外边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外边距"}},[t._v("#")]),t._v(" 外边距")]),t._v(" "),s("p",[t._v("margin 设置元素的外边距（盒子与其它盒子之间的距离）")]),t._v(" "),s("ul",[s("li",[t._v("margin 没有背景颜色，是完全透明的")]),t._v(" "),s("li",[t._v("margin 会在元素边框外设置外边距推开其它元素，不会改变元素自身的宽度和高度")])]),t._v(" "),s("p",[t._v("margin 可以单独改变元素的上，下，左，右边距，也可以一次改变所有的属性")]),t._v(" "),s("p",[t._v("为了缩短代码，有可能使用一个属性中 margin 指定的所有外边距属性")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" margin-top margin-right margin-bottom margin-left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 按照顺时针顺序 top -> right -> bottom -> left  */")]),t._v("\n12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("margin-top：设置元素的上外边距")]),t._v(" "),s("li",[t._v("margin-right：设置元素的右外边距")]),t._v(" "),s("li",[t._v("margin-bottom：设置元素的下外边距")]),t._v(" "),s("li",[t._v("margin-left：设置元素的左外边距")])]),t._v(" "),s("p",[t._v("四个值部分缺省，有如下三种情况：")]),t._v(" "),s("blockquote",[s("p",[t._v("1 个值，其他 3 个值都由这个值（上外边距）复制得到")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 等价于 1px 1px 1px 1px */")]),t._v("\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[t._v("2 个值，第 3 个值（下外边距）由第 1 个值（上外边距）复制得到，第 4 个值（左外边距）由第 2 个值（右外边距）复制得到")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5em 1em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 等价于 0.5em 1em 0.5em 1em */")]),t._v("\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://download.csdn.net/download/weixin_38597970/12890928",target:"_blank",rel:"noopener noreferrer"}},[t._v("IE盒子模型和标准W3C盒子模型pdf"),s("img",{attrs:{src:"https://csdnimg.cn/release/blogv2/dist/components/img/star.png",alt:"img"}}),t._v("0星超过10%的资源158KB"),s("img",{attrs:{src:"https://csdnimg.cn/release/blogv2/dist/components/img/arrowDownWhite.png",alt:"img"}}),t._v("下载"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("3 个值，第 4 个值（左外边距）由第 2 个值（右外边距）复制得到")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.25em 1em 0.5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 等价于 0.25em 1em 0.5em 1em */")]),t._v("\n1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("归纳起来就是，上下对应，左右对应，第一个值是 top")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("auto")]),t._v(" "),s("td",[t._v("浏览器计算外边距")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("length")])]),t._v(" "),s("td",[t._v("规定以具体单位计的外边距值，比如像素、厘米等。默认值是 0px")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("%")])]),t._v(" "),s("td",[t._v("规定基于父元素的宽度的百分比的外边距")])]),t._v(" "),s("tr",[s("td",[t._v("inherit")]),t._v(" "),s("td",[t._v("规定应该从父元素继承外边距")])])])]),t._v(" "),s("h3",{attrs:{id:"内边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内边距"}},[t._v("#")]),t._v(" 内边距")]),t._v(" "),s("p",[t._v("padding 定义元素边框与元素内容之间的空间，即上下左右的内边距")]),t._v(" "),s("ul",[s("li",[t._v("padding 设置内边距后会增加元素自身的高度和宽度")]),t._v(" "),s("li",[t._v("元素的背景颜色会渲染填充 padding 设置的区域")]),t._v(" "),s("li",[t._v("块级元素默认为横占一行宽度为100%，当不给块级元素设置宽度（默认宽度）然后再设置padding，此时块级元素的宽度不会改变")]),t._v(" "),s("li",[t._v("块级元素设置了宽度此时再设置padding就会撑大盒子")])]),t._v(" "),s("p",[t._v("单独使用 padding 属性可以改变上下左右的填充")]),t._v(" "),s("p",[t._v("为了缩短代码，有可能使用一个属性中 padding 指定的所有内边距属性")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-top padding-right padding-bottom padding-left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 按照顺时针顺序 top -> right -> bottom -> left  */")]),t._v("\n12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("padding-top：设置元素的上内边距")]),t._v(" "),s("li",[t._v("padding-right：设置元素的右内边距")]),t._v(" "),s("li",[t._v("padding-bottom：设置元素的下内边距")]),t._v(" "),s("li",[t._v("padding-left：设置元素的左内边距")])]),t._v(" "),s("p",[t._v("内边距与外边距一样，遵循值复制的规则")]),t._v(" "),s("ul",[s("li",[t._v("如果缺少左外边距的值，则使用右外边距的值")]),t._v(" "),s("li",[t._v("如果缺少下外边距的值，则使用上外边距的值")]),t._v(" "),s("li",[t._v("如果缺少右外边距的值，则使用上外边距的值")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("length")])]),t._v(" "),s("td",[t._v("定义一个固定的填充(像素, pt, em,等)")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("%")])]),t._v(" "),s("td",[t._v("使用百分比值定义一个填充")])])])]),t._v(" "),s("h3",{attrs:{id:"清除内外边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除内外边距"}},[t._v("#")]),t._v(" 清除内外边距")]),t._v(" "),s("p",[t._v("不同的浏览器会有不用的默认的内外边距 ，在布局前首先清除下网页的内外边距")]),t._v(" "),s("p",[t._v("将所有的元素内外间距都设为 0 来清除内外边距")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n1234\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"margin重叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#margin重叠"}},[t._v("#")]),t._v(" margin重叠")]),t._v(" "),s("p",[s("strong",[t._v("相邻块级元素垂直外边距的合并")])]),t._v(" "),s("p",[t._v("当上下相邻的两个块级元素（兄弟元素）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上边距 margin-top，则它们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值之中较大的，这种现象被称为 margin重叠")]),t._v(" "),s("p",[s("strong",[t._v("垂直之间塌陷的原则是以两盒子最大的外边距为准")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f8aa674721543f93a29641eff71279bb.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("ul",[s("li",[t._v("只给同级元素中的一个元素设置margin")]),t._v(" "),s("li",[t._v("给每一个元素添加父元素，然后触发BFC规则（不推荐）")])]),t._v(" "),s("h3",{attrs:{id:"margin塌陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#margin塌陷"}},[t._v("#")]),t._v(" margin塌陷")]),t._v(" "),s("p",[s("strong",[t._v("嵌套块级元素垂直外边距的塌陷")])]),t._v(" "),s("p",[t._v("对于两个嵌套关系（父子元素）的块级元素，父元素上有上边距 margin-top 同时子元素也有上边距 margin-top，此时父元素的上边距 margin-top 会受子元素影响，当子元素的外边距大于父元素的外边距时，父元素就会塌陷较大值的外边距，这种现象被称为 margin塌陷")]),t._v(" "),s("p",[s("strong",[t._v("即无论给子元素设不设置margin-top值，其都不发生作用，都会作用于父元素身上")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/3cd42bca62d7e82706b77d7d026b9899.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("ul",[s("li",[t._v("给父元素设置外边框（border）或者内边距（padding）(不建议)")]),t._v(" "),s("li",[t._v("触发 BFC （BFC = OFDP overflow、float、display、position）")]),t._v(" "),s("li",[t._v("使用伪元素 "),s("code",[t._v("::before")]),t._v("，"),s("code",[t._v("::after")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);