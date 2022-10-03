(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{341:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flex-box-弹性布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-box-弹性布局"}},[s._v("#")]),s._v(" Flex Box 弹性布局")]),s._v(" "),t("h2",{attrs:{id:"一、简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[s._v("#")]),s._v(" 一、简介")]),s._v(" "),t("p",[t("code",[s._v("Flex Box")]),s._v("模型，全称"),t("code",[s._v("Flexible Box")]),s._v("，意为弹性盒子，是"),t("strong",[s._v("CSS")]),s._v("一种常见的布局方式。早期的盒模型布局方式有很多不足，非常不灵活，未能很好的解决许多网页内容布置的需求。Flex 布局的出现，使得 HTML 元素的布置更加灵活。它能有效计算元素间的间隙、距离等，并调整元素的对齐方式。现在 flex 布局已经得到了所有浏览器的支持，是解决布局问题和兼容问题和最好的方案之一。")]),s._v(" "),t("p",[s._v("容器默认存在两个轴："),t("strong",[s._v("水平轴")]),s._v("（main axis）和"),t("strong",[s._v("垂直轴")]),s._v("（cross axis），项目默认沿主轴排列（水平轴）：")]),s._v(" "),t("h2",{attrs:{id:"二、基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[s._v("#")]),s._v(" 二、基本概念")]),s._v(" "),t("p",[s._v("开启 flex 布局的父元素视为"),t("strong",[s._v("容器")]),s._v("（flex container），内部的子元素称为"),t("strong",[s._v("项目")]),s._v("（flex item)。")]),s._v(" "),t("p",[s._v("flex 容器中有两条特殊的轴线，一条是主轴"),t("code",[s._v("main axis")]),s._v("，一条是交叉轴"),t("code",[s._v("cross axis")]),s._v("。在默认情况下，主轴即水平方向上的轴，交叉轴为竖直方向上的轴。")]),s._v(" "),t("h2",{attrs:{id:"三、用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、用法"}},[s._v("#")]),s._v(" 三、用法")]),s._v(" "),t("p",[s._v("在想要使用弹性布局的元素上添加 "),t("strong",[s._v("display: flex;")]),s._v(" 属性以开启。")]),s._v(" "),t("div",{staticClass:"language-HTML line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-CSS line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("于是我们得到了一个弹性布局的父元素作为容器，在里面就可以放置子元素作为项目进行布局了。 flex 布局的容器里面的项目会自动沿主轴方向布置。")]),s._v(" "),t("h2",{attrs:{id:"四、属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、属性"}},[s._v("#")]),s._v(" 四、属性")]),s._v(" "),t("p",[s._v("在开启 flex 布局后，我们就可以添加一些属性来使里面项目的布置符合我们的设计。容器和项目上均可以控制布局的样式，但两者所使用的属性并不相同。")]),s._v(" "),t("p",[s._v("容器上的属性通常为控制内部所有项目的共同属性。")]),s._v(" "),t("h3",{attrs:{id:"父元素属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父元素属性"}},[s._v("#")]),s._v(" 父元素属性")]),s._v(" "),t("p",[s._v("容器常见的属性有：")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("flex-direction")]),s._v(" "),t("li",[s._v("flex-wrap")]),s._v(" "),t("li",[s._v("justify-content")]),s._v(" "),t("li",[s._v("align-items")])])]),s._v(" "),t("h4",{attrs:{id:"_1-flex-direction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-flex-direction"}},[s._v("#")]),s._v(" 1. flex-direction")]),s._v(" "),t("p",[t("strong",[s._v("flex-direction")]),s._v("决定主轴的方向，而项目会沿容器的主轴方向分布，所以"),t("code",[s._v("flex-direction")]),s._v("决定了所有项目排列的方向：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("flex-direction 有四个值")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("row")]),s._v("：主轴水平方向，项目自左向右排列，为默认值。")]),s._v(" "),t("li",[t("code",[s._v("row-reverse")]),s._v("：主轴水平方向，自右向左排列。")]),s._v(" "),t("li",[t("code",[s._v("column")]),s._v("：主轴垂直方向，自上而下排列。")]),s._v(" "),t("li",[t("code",[s._v("column-reverse")]),s._v("：主轴垂直方向，自下而上排列。")])])]),s._v(" "),t("h4",{attrs:{id:"_2-flex-wrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-wrap"}},[s._v("#")]),s._v(" 2. flex-wrap")]),s._v(" "),t("p",[t("strong",[s._v("flex-wrap")]),s._v("决定项目是否换行：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("ul",[t("li",[t("code",[s._v("nowrap")]),s._v("：默认值，不换行。当主轴的长度是固定并且空间不足时，项目尺寸会随之进行调整，而不会换行。")]),s._v(" "),t("li",[t("code",[s._v("wrap")]),s._v("：当本行/列项目的尺寸超出了容器的宽/高进行换行，新行在下。")]),s._v(" "),t("li",[t("code",[s._v("wrap-reverse")]),s._v("：换行，新行在上。")])])]),s._v(" "),t("h4",{attrs:{id:"_3-justify-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-justify-content"}},[s._v("#")]),s._v(" 3. justify-content")]),s._v(" "),t("p",[t("strong",[s._v("justify-content")]),s._v("：元素在主轴方向上的对齐方式：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | space-evently"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("ul",[t("li",[t("code",[s._v("flex-start")]),s._v("：默认值，项目对齐主轴起点")]),s._v(" "),t("li",[t("code",[s._v("flex-end")]),s._v("：项目对齐主轴终点")]),s._v(" "),t("li",[t("code",[s._v("center")]),s._v(" ：项目在主轴上"),t("strong",[s._v("居中对齐")])]),s._v(" "),t("li",[t("code",[s._v("space-between")]),s._v("：项目在主轴上"),t("strong",[s._v("两端对齐")]),s._v("，第一个项目对齐起点，末位项目对齐终点，中间的元素均匀分布。")]),s._v(" "),t("li",[t("code",[s._v("space-around")]),s._v(" ：每个项目的间距相同，但是两倍于项目与容器边界的距离。")]),s._v(" "),t("li",[t("code",[s._v("space-evenly")]),s._v("：每个项目的间距相同且等于项目与容器边界的距离，类似于两个子盒子的边界塌陷了。")])])]),s._v(" "),t("h4",{attrs:{id:"_4-align-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-align-items"}},[s._v("#")]),s._v(" 4. align-items")]),s._v(" "),t("p",[t("strong",[s._v("align-item")]),s._v("：元素在交叉轴上的对齐方式：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | stretch | baseline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("ul",[t("li",[t("code",[s._v("flex-start")]),s._v("：对齐交叉轴的起点")]),s._v(" "),t("li",[t("code",[s._v("flex-end")]),s._v("：对齐交叉轴的终点")]),s._v(" "),t("li",[t("code",[s._v("center")]),s._v("：在交叉轴上居中对齐")]),s._v(" "),t("li",[t("code",[s._v("stretch")]),s._v("：默认值，弹性项包含外边距的交叉轴方向尺寸拉伸至容器的行高")]),s._v(" "),t("li",[t("code",[s._v("baseline")]),s._v("：以元素的第一行文字的基线对齐")])])]),s._v(" "),t("h3",{attrs:{id:"三、子元素属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、子元素属性"}},[s._v("#")]),s._v(" 三、子元素属性")]),s._v(" "),t("p",[s._v("子元素的属性通常是关于该子元素在flex中的布局情况。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("flex-basis")]),s._v(" "),t("li",[s._v("flex-grow")]),s._v(" "),t("li",[s._v("flex-shrink")]),s._v(" "),t("li",[s._v("align-self")]),s._v(" "),t("li",[s._v("order")])])]),s._v(" "),t("h4",{attrs:{id:"_1-flex-basis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-flex-basis"}},[s._v("#")]),s._v(" 1. flex-basis")]),s._v(" "),t("p",[t("code",[s._v("flex-basis")]),s._v("属性定义了在分配多余空间之前，项目占据的主轴空间，浏览器会根据这个属性来计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。使用形式如下：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当主轴设置为水平时，当设置了 flex-basis，设置的项目宽度值会失效，"),t("code",[s._v("flex-basis")]),s._v(" 需要跟 "),t("code",[s._v("flex-grow")]),s._v(" 和 "),t("code",[s._v("flex-shrink")]),s._v(" 配合使用才能生效。有两种特殊的值：")]),s._v(" "),t("ul",[t("li",[s._v("当 "),t("code",[s._v("flex-basis")]),s._v(" 值为 0 % 时，项目尺寸会被认为是0，因此无论项目尺寸设置多少都用；")]),s._v(" "),t("li",[s._v("当 "),t("code",[s._v("flex-basis")]),s._v(" 值为 auto 时，则跟根据尺寸的设定值来设置大小。")])]),s._v(" "),t("h4",{attrs:{id:"_2-flex-grow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-grow"}},[s._v("#")]),s._v(" 2. flex-grow")]),s._v(" "),t("p",[t("code",[s._v("flex-grow")]),s._v("决定项目在主轴方向上所占比例，默认为"),t("strong",[s._v("0")]),s._v("，即不放缩。")]),s._v(" "),t("p",[s._v("当容器中所有的项目都设置了flex-basis属性时，如果仍有是剩余的空间，设置的 "),t("code",[s._v("flex-grow")]),s._v(" 属性才能生效。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果所有项目的flex-grow属性都设置为1，那么它们会均分剩余的空间，如下图所示：")])]),s._v(" "),t("li",[t("p",[s._v("如果其中一个项目的flex-grow属性设置为2，其他均为1，那么它占据的剩余空间就是其他项目的两倍。")])])]),s._v(" "),t("h4",{attrs:{id:"_3-flex-shrink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-flex-shrink"}},[s._v("#")]),s._v(" 3. flex-shrink")]),s._v(" "),t("p",[t("code",[s._v("flex-shrink")]),s._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。不能设置负值，使用形式如下：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("ul",[t("li",[s._v("如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小")]),s._v(" "),t("li",[s._v("如果一个项目的 flex-shrink 属性为 0，空间不足时不缩小")])])]),s._v(" "),t("h4",{attrs:{id:"_4-align-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-align-self"}},[s._v("#")]),s._v(" 4. align-self")]),s._v(" "),t("p",[t("code",[s._v("align-self")]),s._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),t("code",[s._v("align-items")]),s._v("属性。默认值为"),t("code",[s._v("auto")]),s._v("，表示继承父元素的"),t("code",[s._v("align-items")]),s._v("属性，如果没有父元素，则等同于"),t("code",[s._v("stretch")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这个属性和align-items属性的效果是一样的，只不过这个属性只对单个项目生效，而align-items是对容器中所有的项目生效。")]),s._v(" "),t("h4",{attrs:{id:"_6-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-order"}},[s._v("#")]),s._v(" 6. order")]),s._v(" "),t("p",[t("code",[s._v("order")]),s._v("属性用来定义项目的排列顺序。数值越小，排列越靠前，默认为"),t("code",[s._v("0")]),s._v("。使用形式如下：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);