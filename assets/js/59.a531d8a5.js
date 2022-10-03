(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{356:function(e,v,t){"use strict";t.r(v);var _=t(6),o=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"vue-js-渐进式框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-渐进式框架"}},[e._v("#")]),e._v(" Vue.js "),v("font",{attrs:{size:"2"}},[e._v("渐进式框架")])],1),e._v(" "),v("h2",{attrs:{id:"发展背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发展背景"}},[e._v("#")]),e._v(" 发展背景")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("HTML DIV+CSS")])])]),e._v(" "),v("p",[e._v("最早期的页面是 HTML 文件的静态网页；")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("后端MVC")])])]),e._v(" "),v("p",[e._v("当时的网站开发，采用的是后端MVC模式 *Model（模型层）：提供/保存数据 *Controller（控制层）：数据处理，实现业务逻辑 * View（视图层）：展示数据，提供用户界面 前端只是后端 MVC 的 V。")]),e._v(" "),v("p",[e._v("慢慢发展出两种技术："),v("strong",[e._v("JSP")]),e._v("和"),v("strong",[e._v("jQuery")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("JSP")]),e._v("全称 "),v("code",[e._v("Java Server Page")]),e._v("，是 Java 企业应用的一种动态技术。Java 和 JSP 是运行在服务器端的，也就是说他两运行的结果生成 HTML，HTML 是静态页面，而 JSP 是动态页面。JSP部署于网络服务器上，可以响应客户端发送的请求，并根据请求内容动态地生成 HTML 、XML 或其他格式文档的 Web 网页，然后返回给请求者。JSP 在 HTML 里面增加了变量绑定，但是这些变量是由服务端填充之后仍然以 HTML 的形式发给客户端；为了跨平台的功能，为了极度的伸缩能力，所以极大的增加了产品的复杂性。")]),e._v(" "),v("p",[e._v("当用户访问网站时，会向后台发送一个请求，后台接收到请求，生成静态HTML页面，发送到浏览器。 比如JSP。")]),e._v(" "),v("p",[e._v("MVC的模式进行开发，这种模式严重阻碍了前端开发效率，也让后端不能专注于业务开发，于是前后端开始分离，各司其职。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("前后端分离")])])]),e._v(" "),v("p",[e._v("前端程序员负责将数据渲染到页面上，频繁地写document.getElement...大大增加了程序员的工作量。"),v("strong",[e._v("jQuery")]),e._v(" 是一个轻量级的 JavaScript 库。jQuery 能够使用户的 HTML 页面 和 JS 内容分离，同时更方便使用者对DOM的操作，也就是说，jQuery 的使用，更有利于 HTML、CSS、JS 三者的分离，使得前端代码得到更好的维护。但是 jQuery 仍然没有改变前端需要频繁操作DOM这一现象，并且在数据量比较大的情况下，还会造成页面卡慢。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("MVVM")])])]),e._v(" "),v("p",[e._v("MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离 把Model和View关联起来的就是ViewModel。")]),e._v(" "),v("p",[e._v("ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model")]),e._v(" "),v("p",[e._v("View 和 Model 之间的同步工作完全是自动的，无需人为干涉")]),e._v(" "),v("p",[e._v("因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理而这时候，就有了 MVVM 等 MV* 概念的提出：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12701457-5ff37383872109f7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",alt:"img"}})]),e._v(" "),v("p",[v("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12701457-de9bc0824a24048b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/720/format/webp",alt:"img"}})]),e._v(" "),v("blockquote",[v("p",[e._v("何为 MVVM 模式？")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("Model")]),e._v("：提供/保存数据。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("View")]),e._v("：视图。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("View-Model")]),e._v("：简化的 Controller，唯一的作用就是为 View 提供处理好的数据，不含其它逻辑。")])])])]),e._v(" "),v("p",[e._v("简单来说，就是 MV* 模式，将对数据的操作提升上去了。在 Vue、React、Angular 等 MV* 框架中，可以通过对数据的操作，从而完成对页面数据的渲染。这就是MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来！")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12701457-c8f18127bb23d8dd?imageMogr2/auto-orient/strip%7CimageView2/2/w/959/format/webp",alt:"img"}})]),e._v(" "),v("h2",{attrs:{id:"vue-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-js"}},[e._v("#")]),e._v(" Vue.js")]),e._v(" "),v("blockquote",[v("p",[e._v("vuejs指的是一个构建数据驱动的web界面的渐进式框架，其目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。")])]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("Vue.js是什么？")])])]),e._v(" "),v("p",[e._v("Vue.js是一个构建数据驱动的 web 界面的渐进式框架，作者是尤雨溪。2013年，在 Google 工作的尤雨溪，受到 Angular 的启发，开发出了一款轻量级框架，最初命名为 Seed ，在 0.6.0 版本更名为 Vue 并确定 Logo，目前已更新到3.0版本。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue 是一套用于构建用户界面的渐进式 JavaScript 框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用（SPA）提供驱动。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("Vue.js有什么优点呢？")])])]),e._v(" "),v("ol",[v("li",[v("p",[e._v("容易上手。MVVM的模式让使用者无需操心于DOM操作，只需要把心思放到数据的操作即可，工程师可以很快掌握并且应用到实际开发中。")])]),e._v(" "),v("li",[v("p",[e._v("渐进式框架。在项目构建初期不需要使用太多的特性，可以只使用其中的一部分功能。后期vue可以通过安装插件的方式来实现功能的扩展，如路由(vue-router)，状态管理(Vuex)等。")])])]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("Vue的核心是什么？")])])]),e._v(" "),v("p",[e._v("Vue官网介绍：通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。由此可以反映出来Vue的两个核心关键词：数据绑定 和视图组件。")]),e._v(" "),v("p",[e._v("Vue的数据驱动：数据改变驱动了视图的自动更新，传统的做法你得手动改变DOM来改变视图，vuejs 只需要改变数据，就会自动改变视图。再也不用你去操心DOM的更新了，这就是MVVM思想的实现。")]),e._v(" "),v("p",[e._v("视图组件化：把整一个网页的拆分成一个个区块，每个区块我们可以看作成一个组件。网页由多个组件拼接或者嵌套组成。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("Vue的适用场景有哪些？")])])]),e._v(" "),v("p",[e._v("如果你还在用 jquery 频繁操作你的DOM来更新页面的话，那么，你可以用Vue.js来解放你的DOM操作了。")]),e._v(" "),v("p",[e._v("如果你的项目中有多个部分是相同的，并可以封装成一个组件，那么，你可以试试用Vue.js。")]),e._v(" "),v("p",[e._v("此外，Vue.js的核心实现中使用了ES5的Object.defineProperty特性，IE8及以下版本浏览器是不兼容的，所以，你的项目需要兼容这些较低版本的浏览器的话，那么，Vue.js就不适用了。")]),e._v(" "),v("p",[e._v("Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。但是Vue.js 自身不是一个全能框架，毕竟它只聚焦于视图层。但是作为目前前端工程师比较追捧的前端框架。")])])}),[],!1,null,null,null);v.default=o.exports}}]);