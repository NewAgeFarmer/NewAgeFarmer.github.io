(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{280:function(t,e,_){"use strict";_.r(e);var r=_(6),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),e("h2",{attrs:{id:"初识css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初识css"}},[t._v("#")]),t._v(" 初识CSS")]),t._v(" "),e("p",[t._v("层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现"),e("a",{attrs:{href:"https://baike.baidu.com/item/HTML?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"https://baike.baidu.com/item/%E6%A0%87%E5%87%86%E9%80%9A%E7%94%A8%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80/6805073?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准通用标记语言"),e("OutboundLink")],1),t._v("的一个应用）或"),e("a",{attrs:{href:"https://baike.baidu.com/item/XML?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("XML"),e("OutboundLink")],1),t._v("（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。")]),t._v(" "),e("p",[t._v("如果HTML表示了网页的内容，CSS则决定这些内容展示的形式。CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。")]),t._v(" "),e("h2",{attrs:{id:"工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),e("p",[t._v("CSS是一种定义样式结构如字体、颜色、位置等的语言，被用于描述网页上的信息格式化和显示的方式。CSS样式可以直接存储于HTML网页或者单独的样式单文件。无论哪一种方式，样式单包含将样式应用到指定类型的元素的规则。外部使用时，样式单规则被放置在一个带有文件扩展名_css的外部样式单文档中。")]),t._v(" "),e("p",[t._v("样式规则是可应用于网页中元素，如文本段落或链接的格式化指令。样式规则由一个或多个样式属性及其值组成。内部样式单直接放在网页中，外部样式单保存在独立的文档中，网页通过一个特殊标签链接外部样式单。")]),t._v(" "),e("p",[t._v("名称CSS中的“层叠（cascading）”表示样式单规则应用于HTML文档元素的方式。具体地说，CSS样式单中的样式形成一个层次结构，更具体的样式覆盖通用样式。样式规则的优先级由CSS根据这个层次结构决定，从而实现级联效果。")]),t._v(" "),e("p",[t._v("层叠样式表（"),e("em",[t._v("Cascading Style Sheet，CSS")]),t._v("）有助于实现负责任的Web设计。CSS对开发者构建Web站点的影响很大，并且这种影响可能是无止境的。将网页的大部分甚至是全部的表示信息从（"),e("em",[t._v("X")]),t._v("）HTML文件中移出，并将它们保留在一个样式表中有诸多优点，如降低文件大小、节省网络带宽以及易于维护等。此外，站点的表现信息和核心内容相分离，使得站点的设计人员能够在短暂的时间内对整个网站进行各种各样的修改。 [14]")]),t._v(" "),e("p",[t._v("CSS简化了网页的格式代码，外部的样式表还会被浏览器保存在缓存里，加快了下载显示的速度，也减少了需要上传的代码数量（"),e("em",[t._v("因为重复设置的格式将被只保存一次")]),t._v("）。只要修改保存着网站格式的CSs样式表文件就可以改变整个站点的风格特色，在修改页面数量庞大的站点时，显得格外有用。这就避免了一个个网页的修改，大大减少了工作量。")]),t._v(" "),e("h2",{attrs:{id:"语言特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语言特点"}},[t._v("#")]),t._v(" 语言特点")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("丰富的样式定义")])])]),t._v(" "),e("p",[t._v("CSS提供了丰富的文档样式外观，以及设置文本和背景属性的能力；允许为任何元素创建边框，以及元素边框与其他元素间的距离，以及元素边框与元素内容间的距离；允许随意改变文本的大小写方式、修饰方式以及其他页面效果。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("易于使用和修改")])])]),t._v(" "),e("p",[t._v("CSS可以将样式定义在HTML元素的style属性中，也可以将其定义在HTML文档的header部分，也可以将样式声明在一个专门的CSS文件中，以供HTML页面引用。总之，CSS样式表可以将所有的样式声明统一存放，进行统一管理。")]),t._v(" "),e("p",[t._v("另外，可以将相同样式的元素进行归类，使用同一个样式进行定义，也可以将某个样式应用到所有同名的HTML标签中，也可以将一个CSS样式指定到某个页面元素中。如果要修改样式，我们只需要在样式列表中找到相应的样式声明进行修改。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("多页面应用")])])]),t._v(" "),e("p",[t._v("CSS样式表可以单独存放在一个CSS文件中，这样我们就可以在多个页面中使用同一个CSS样式表。CSS样式表理论上不属于任何页面文件，在任何页面文件中都可以将其引用。这样就可以实现多个页面风格的统一。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("层叠")])])]),t._v(" "),e("p",[t._v("简单的说，层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。例如对一个站点中的多个页面使用了同一套CSS样式表，而某些页面中的某些元素想使用其他样式，就可以针对这些样式单独定义一个样式表应用到页面中。这些后来定义的样式将对前面的样式设置进行重写，在浏览器中看到的将是最后面设置的样式效果。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("页面压缩")])])]),t._v(" "),e("p",[t._v("在使用HTML定义页面效果的网站中，往往需要大量或重复的表格和font元素形成各种规格的文字样式，这样做的后果就是会产生大量的HTML标签，从而使页面文件的大小增加。而将样式的声明单独放到CSS样式表中，可以大大的减小页面的体积，这样在加载页面时使用的时间也会大大的减少。另外，CSS样式表的复用更大程度的缩减了页面的体积，减少下载的时间。")])])}),[],!1,null,null,null);e.default=a.exports}}]);