(window.webpackJsonpreduxtasks=window.webpackJsonpreduxtasks||[]).push([[0],{25:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(11),a=n.n(c),i=(n(30),n(14)),u=n(8),l=n(13),m=n(10),f=n(22),s=n(24);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Array.prototype.move=function(e,t){var n=Object(s.a)(this),r=n[e+t];return n[e+t]=n[e],n[e]=r,n};var O=function(e,t){return{type:"MOVE_UP",items:e.move(t,-1),index:t-1}},v=function(e,t){return{type:"MOVE_DOWN",items:e.move(t,1),index:t+1}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"ORDER":return p({},e,{itemMove:t.itemMove,index:e.foods.indexOf(t.itemMove)});case"MOVE_DOWN":case"MOVE_UP":return p({},e,{items:t.items,index:t.index});default:return e}},b=function(e){return e.foods.foods},y=function(e){return e.foods.itemMove},g=function(e){return e.foods.index},w=Object(m.b)({foods:E}),x=Object(m.c)(w,{foods:{foods:["Apple","Bread","Carrot","Dumplings","Eggs","Fish","Carlic","Honey","Ice Cream","Jam"],itemMove:"",index:null}}),h=Object(l.b)((function(e){return{foods:b(e),index:g(e),itemMove:y(e)}}),(function(e){return{order:function(t){return e({type:"ORDER",itemMove:t})},moveUp:function(t,n){return e(O(t,n))},moveDown:function(t,n){return e(v(t,n))}}}))((function(e){var t=e.foods,n=e.index,r=e.itemMove,c=e.order;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{disabled:!(r&&n>0),onClick:function(){return O(t,n)}},"Move Up"),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e,onClick:function(){return c(e)}},e)}))),o.a.createElement("button",{disabled:!(r&&n<t.length-1),onClick:function(){return v(t,n)}},"Move Down"))}));var j=function(){return o.a.createElement("h1",null,"Home Page")},M=function(){return o.a.createElement(i.a,null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.b,{to:"/",exact:!0},"Home")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/food"},"Food")))),o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",exact:!0,component:j}),o.a.createElement(u.a,{path:"/food",component:h})))};a.a.render(o.a.createElement(l.a,{store:x},o.a.createElement(M,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3eaae16d.chunk.js.map