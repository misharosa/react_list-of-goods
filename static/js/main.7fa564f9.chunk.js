(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o),s=n(2),c=n(5),i=n(6),u=n(8),a=n(7),l=n(1),b=n.n(l),d=(n(13),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={goods:h,visible:!0},t.opener=function(){return t.setState({visible:!1})},t.sortGoodsLength=function(){return t.setState((function(t){return{goods:Object(s.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.sortGoodsByAlphabet=function(){return t.setState((function(t){return{goods:Object(s.a)(t.goods).sort()}}))},t.reverseGoods=function(){return t.setState((function(t){return{goods:Object(s.a)(t.goods).reverse()}}))},t.reset=function(){return t.setState({goods:[].concat(h)})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods;return t.visible?Object(d.jsx)("button",{type:"button",onClick:this.opener,children:"Start"}):Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Goods:"}),Object(d.jsx)("button",{type:"button",onClick:this.reverseGoods,children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:this.sortGoodsByAlphabet,children:"sortByAlphabet"}),Object(d.jsx)("button",{type:"button",onClick:this.sortGoodsLength,children:"sortByLength"}),Object(d.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{children:t},t)}))})]})}}]),n}(b.a.Component);r.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7fa564f9.chunk.js.map