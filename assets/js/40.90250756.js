(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{308:function(v,t,_){"use strict";_.r(t);var o=_(6),a=Object(o.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[v._v("#")]),v._v(" Node.js")]),v._v(" "),t("h2",{attrs:{id:"后端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[v._v("#")]),v._v(" 后端")]),v._v(" "),t("p",[v._v("JavaScript是一门前端的脚本语言，需要通过浏览器的"),t("strong",[v._v("解析引擎")]),v._v("才能运行，在Chrome的JS解析引擎的"),t("strong",[v._v("V8")]),v._v("。")]),v._v(" "),t("blockquote",[t("p",[v._v("“有没有办法使JavaScript脱离浏览器运行在服务端呢？”")])]),v._v(" "),t("p",[v._v("JS的发明公司网景通讯提出了这么一个构想。")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现。")])])]),v._v(" "),t("p",[v._v("服务端也毫不例外。")]),v._v(" "),t("p",[v._v("于2009年，谷歌发布了一款基于Chrome V8引擎的JavaScript运行环境，名为"),t("font",{attrs:{color:"green"}},[t("b",[v._v("Node.js")])]),v._v("。由Ryan Dahl开发，Node.js使用了一个事件驱动、非阻塞式I/O模型，让 JavaScript 运行在服务端的开发平台，它让JavaScript成为与PHP、Python、Perl、Ruby等服务端语言平起平坐的脚本语言。")],1),v._v(" "),t("p",[v._v("Javascript 是一个"),t("strong",[v._v("事件驱动")]),v._v("语言，Node利用了这个优点，编写出可扩展性高的服务器。Node采用了一个称为"),t("code",[v._v("事件循环")]),v._v(" "),t("code",[v._v("event loop")]),v._v("的架构，使得编写可扩展性高的服务器变得既容易又安全。提高服务器性能的技巧有多种多样。Node选择了一种既能提高性能，又能减低开发复杂度的架构。这是一个非常重要的特性。并发编程通常很复杂且布满地雷。Node绕过了这些，但仍提供很好的性能。")]),v._v(" "),t("p",[v._v("Node采用一系列“非阻塞”库来支持事件循环的方式。本质上就是为文件系统、数据库之类的资源提供接口。向文件系统发送一个请求时，无需等待硬盘（寻址并检索文件），硬盘准备好的时候非阻塞接口会通知Node。该模型以可扩展的方式简化了对慢资源的访问， 直观，易懂。尤其是对于熟悉onmouseover、onclick等DOM事件的用户，更有一种似曾相识的感觉。")]),v._v(" "),t("p",[v._v("Node可以在不新增额外线程的情况下，依然可以对任务进行并发处理 —— Node.js是单线程的。它通过事件循环（event loop）来实现并发操作，对此，我们应该要充分利用这一点 —— 尽可能的避免阻塞操作，取而代之，多使用非阻塞操作。")]),v._v(" "),t("h2",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),t("ul",[t("li",[v._v("它是一个Javascript运行环境")]),v._v(" "),t("li",[v._v("依赖于Chrome V8引擎进行代码解释")]),v._v(" "),t("li",[v._v("事件驱动")]),v._v(" "),t("li",[v._v("非阻塞I/O")]),v._v(" "),t("li",[v._v("轻量、可伸缩，适于实时数据交互应用")]),v._v(" "),t("li",[v._v("单进程，单线程")])]),v._v(" "),t("h2",{attrs:{id:"解决痛点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决痛点"}},[v._v("#")]),v._v(" 解决痛点")]),v._v(" "),t("ol",[t("li",[v._v("并发连接\n异步、事件驱动模型\n异步机制、事件驱动整个过程没有阻塞新用户的连接，也不需要维护已有用户的连接。\n基于这样的机制，理论上陆续有用户请求连接，NodeJS都可以进行响应，因此NodeJS能支持比Java、PHP程序更高的并发量.虽然维护事件队列也需要成本，再由于NodeJS是单线程，事件队列越长，得到响应的时间就越长，并发量上去还是会力不从心。\nNodeJS解决并发连接问题：更改连接到服务器的方式，每个连接发射（emit）一个在NodeJS引擎进程中运行的事件（Event），放进事件队列当中，而不是为每个连接生成一个新的OS线程（并为其分配一些配套内存）。")]),v._v(" "),t("li",[v._v("I/O阻塞\nJava、PHP也有办法实现并行请求（子线程），但NodeJS通过回调函数（Callback）和异步机制会做得很自然。")])]),v._v(" "),t("h2",{attrs:{id:"node-js的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js的优缺点"}},[v._v("#")]),v._v(" Node.js的优缺点")]),v._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("前端/后端开发使用同一种语言")])])]),v._v(" "),t("blockquote",[t("p",[v._v("Node.js在服务端和客户端都是使用 JavaScript，这意味着开发人员在各层上只需使用一门语言。")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("性能和I/O负载：")])])]),v._v(" "),t("blockquote",[t("p",[v._v("Nodejs非常好的解决了IO密集的问题，通过异步IO来实现。")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("连接的内存开销：")])])]),v._v(" "),t("blockquote",[t("p",[v._v("每个Node.js进程可以支持超过12万活跃的连接，每个连接消耗大约2K的内存。")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("学习成本较低")])])]),v._v(" "),t("blockquote",[t("p",[v._v("Node使用js开发，只需要学习简单的api，前端开发者就可以无障碍使用，学习成本很低。")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("Node.js的开源社区正逐渐壮大，优秀的npm包的数量在快速增多")])])]),v._v(" "),t("blockquote",[t("p",[v._v("很多优秀的包都是简单而灵巧的，为了开发者的使用习惯而设计。")])]),v._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点：")]),v._v(" "),t("ul",[t("li",[v._v("不适合CPU密集型应用")])]),v._v(" "),t("blockquote",[t("p",[v._v("CPU密集型应用给Node带来的挑战主要是：由于JavaScript单线程的原因，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起；")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("只支持单核CPU，不能充分利用CPU")])]),v._v(" "),t("li",[t("p",[v._v("可靠性低，一旦代码某个环节崩溃，整个系统都崩溃\n原因：单进程，单线程")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);