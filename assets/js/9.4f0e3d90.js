(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{257:function(s,t,i){},288:function(s,t,i){"use strict";i(257)},308:function(s,t,i){"use strict";i.r(t);var e={name:"VsLoading",data:()=>({radius:"",linecolor:""}),props:["size","color","speed"],methods:{},mounted(){switch(this.linecolor=this.color?this.color:"skyblue",this.radius=this.size?this.size:"16px",this.speed){case"fast":this.time="0.4s";break;case"slow":this.time="2s";break;default:this.time="1s"}this.$refs.root.style.setProperty("--color",this.linecolor),this.$refs.root.style.setProperty("--size",this.radius),this.$refs.root.style.setProperty("--time",this.time)}},o=(i(288),i(6)),r=Object(o.a)(e,(function(){var s=this._self._c;return s("div",{ref:"root",staticClass:"vs-loading"},[s("i",{staticClass:"loading"})])}),[],!1,null,"2fda3b55",null);t.default=r.exports}}]);