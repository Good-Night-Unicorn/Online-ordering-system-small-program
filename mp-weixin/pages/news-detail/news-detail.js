(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{2104:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,a,u,i){try{var c=t[u](i),o=c.value}catch(f){return void e(f)}c.done?n(o):Promise.resolve(o).then(r,a)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var i=t.apply(n,e);function c(t){u(i,r,a,c,o,"next",t)}function o(t){u(i,r,a,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(){var t=i(r.default.mark((function t(n){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=n.id,t.next=3,this.$api.info("news",n.id);case 3:e=t.sent,this.detail=e.data,this.detail.content=this.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}()};n.default=c},"3e38":function(t,n,e){},"416b":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}))},"9e4e":function(t,n,e){"use strict";var r=e("3e38"),a=e.n(r);a.a},af8f:function(t,n,e){"use strict";e.r(n);var r=e("2104"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},bb78:function(t,n,e){"use strict";(function(t){e("c536"),e("921b");r(e("66fd"));var n=r(e("f3ad"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f3ad:function(t,n,e){"use strict";e.r(n);var r=e("416b"),a=e("af8f");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("9e4e");var i,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"da995038",null,!1,r["a"],i);n["default"]=o.exports}},[["bb78","common/runtime","common/vendor"]]]);