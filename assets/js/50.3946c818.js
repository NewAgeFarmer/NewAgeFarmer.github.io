(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{347:function(v,_,e){"use strict";e.r(_);var t=e(6),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"异步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[v._v("#")]),v._v(" 异步")]),v._v(" "),_("h2",{attrs:{id:"同步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[v._v("#")]),v._v(" 同步")]),v._v(" "),_("p",[v._v("JavaScript是一门"),_("strong",[v._v("单线程")]),v._v("语言，JavaScript 每次只能调动浏览器的主线程执行脚本，页面绘制，垃圾回收等操作。")]),v._v(" "),_("p",[v._v("浏览器按照代码顺序一行一行执行程序，浏览器会等待代码的解析和工作，在上一行完成后才会执行下一行，这是"),_("strong",[v._v("同步")]),v._v("。这样做是很有必要的，因为每一行新的代码都是建立在前面代码的基础之上的。")]),v._v(" "),_("h2",{attrs:{id:"异步-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步-2"}},[v._v("#")]),v._v(" 异步")]),v._v(" "),_("p",[v._v("如果需要执行一段耗费时间很长的代码，那么浏览器的主线程就会被这段代码所阻塞。")]),v._v(" "),_("p",[v._v("主线程正常情况下应该是不断执行浏览器的"),_("strong",[v._v("事件循环")]),v._v("，如果在一个循环中被现有的任务阻塞，"),_("em",[v._v("任务队列")]),v._v("无法执行新的任务（如：外部I/O），也就无法再去响应用户的操作，同时也导致渲染器无法执行页面的重新渲染，看起来就是卡死了不动的样子。")]),v._v(" "),_("p",[v._v("又或者是一个定时器的任务，用户定下一个时间在到达的时候能够执行某些操作，但是在时间未到之前我们希望浏览器还灵活可以执行其他的操作，而不会一直监听这个定时器导致主线程被占用。")]),v._v(" "),_("p",[v._v("对于那些多线程的语言比较好解决，只需要为程序多开一个线程，合理利用冗余的处理器资源，也就是"),_("strong",[v._v("异步")]),v._v("。但是 JavaScript 是单线程的，虽然 H5 为前端提供了 "),_("strong",[v._v("Web Workers API")]),v._v(" 可以让大计算量的代码放到独立于主线程的后台线程去操作，从而避免主线程的阻塞。在没有该 API 时，早期的 JS 是怎么执行异步代码的呢？")]),v._v(" "),_("p",[v._v("这就是耗时的同步函数的基本问题。我们期望获得一种方法，让我们的程序可以：")]),v._v(" "),_("ul",[_("li",[v._v("通过调用一个函数来启动一个长期运行的操作")]),v._v(" "),_("li",[v._v("让函数开始操作并立即返回，这样我们的程序就可以保持对其他事件做出反应的能力")]),v._v(" "),_("li",[v._v("当操作最终完成时，通知我们操作的结果。")])]),v._v(" "),_("p",[v._v("这就是异步函数为我们提供的能力。")]),v._v(" "),_("p",[v._v("事件处理程序实际上就是异步编程的一种形式：你提供的函数（事件处理程序）将在事件发生时被调用（而不是立即被调用）。如果“事件”是“异步操作已经完成”，那么就可以看到事件如何被用来通知调用者异步函数调用的结果的。")]),v._v(" "),_("h2",{attrs:{id:"回调函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回调函数"}},[v._v("#")]),v._v(" 回调函数")]),v._v(" "),_("p",[v._v("事件处理程序是一种特殊类型的回调函数。而回调函数则是一个被传递到另一个函数中的会在适当的时候被调用的函数。正如我们刚刚所看到的：回调函数曾经是 JavaScript 中实现异步函数的主要方式。")]),v._v(" "),_("p",[v._v("于是在 JavaScript 中的定时器被设计成了：setTimeout(callback, time)")]),v._v(" "),_("blockquote",[_("p",[v._v("浏览器在顺序执行到这里的时候，并不会立刻执行定时器的回调函数代码，而是放到一个**“等候队列”"),_("strong",[v._v("中，等时间到了并且浏览器")]),v._v("“手头上”**没有别的更紧急的任务要执行的时候，那么浏览器才会去执行这个回调函数。")]),v._v(" "),_("p",[v._v("这个”等候队列“是"),_("strong",[v._v("消息队列")]),v._v("，这个”手头“就是浏览器的"),_("strong",[v._v("调用栈")]),v._v("。")])]),v._v(" "),_("p",[v._v("一些早期的异步 API 也是以这种方式来使用事件的。"),_("code",[v._v("XMLHttpRequest")]),v._v("API 可以让你用 JavaScript 向远程服务器发起 HTTP 请求。由于这样的操作可能需要很长的时间，所以它被设计成异步 API，你可以通过给 "),_("code",[v._v("XMLHttpRequest")]),v._v(" 对象附加事件监听器来让程序在请求进展和最终完成时获得通知。")]),v._v(" "),_("p",[v._v("我们在添加了事件监听器后发送请求。注意，在这之后，我们仍然可以在控制台中输出“请求已发起”，也就是说，我们的程序可以在请求进行的同时继续运行，而我们的事件处理程序将在请求完成时被调用。")]),v._v(" "),_("p",[v._v("然而，当回调函数本身需要调用其他同样接受回调函数的函数时，基于回调的代码会变得难以理解。因为函数内多层嵌套，很难捋清楚对应的层级，代码也更难阅读和调试了。这种回调函数多层嵌套的情况被称为“回调地狱”。当你需要执行一些分解成一系列异步函数的操作时，这将变得十分常见。")]),v._v(" "),_("p",[v._v("由于以上这些原因，大多数现代异步 API 都不使用回调。ES6 时一种新的语法加入了 JS 并成为了解决异步编程“回调地狱”问题的方案——"),_("code",[v._v("Promise")]),v._v("，现在 JS 异步编程的基础也是基于 Promise。")]),v._v(" "),_("h2",{attrs:{id:"promise"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[v._v("#")]),v._v(" Promise")]),v._v(" "),_("p",[_("strong",[v._v("Promise")]),v._v(" 意为“承诺”。就好像某个人发出一个承诺，你知道他一定会去兑现他的承诺，即使你并不知道是什么时候。")]),v._v(" "),_("p",[v._v("异步编程也正如此，你知道它终究会返回一个结果，虽然时间并不可知。")]),v._v(" "),_("p",[_("strong",[v._v("Promise")]),v._v(" 是一个对象，它提供了一个 API 用来获取异步操作的消息，可以是任何方面的异步操作（比如一个异步的网络请求）。")]),v._v(" "),_("p",[_("code",[v._v("Promise")]),v._v("对象有以下两个特点：")]),v._v(" "),_("blockquote",[_("ol",[_("li",[_("p",[v._v("对象的状态不受外界影响。"),_("code",[v._v("Promise")]),v._v("对象代表一个异步操作，有三种状态："),_("code",[v._v("pending")]),v._v("（进行中）、"),_("code",[v._v("fulfilled")]),v._v("（已成功）和"),_("code",[v._v("rejected")]),v._v("（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。")])]),v._v(" "),_("li",[_("p",[v._v("一旦状态改变，就不会再变，任何时候都可以得到这个结果。"),_("code",[v._v("Promise")]),v._v("对象的状态改变，只有两种可能：从"),_("code",[v._v("pending")]),v._v("变为"),_("code",[v._v("fulfilled")]),v._v("和从"),_("code",[v._v("pending")]),v._v("变为"),_("code",[v._v("rejected")]),v._v("。只要这两种情况发生，状态便不会再改变了。这时就称为 resolved（已定型）。如果改变已经发生了，你再对"),_("code",[v._v("Promise")]),v._v("对象添加回调函数，也会立即得到这个结果。")])])])]),v._v(" "),_("p",[v._v("有了"),_("code",[v._v("Promise")]),v._v("对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，"),_("code",[v._v("Promise")]),v._v("对象提供统一的接口，使得控制异步操作更加容易。")])])}),[],!1,null,null,null);_.default=r.exports}}]);