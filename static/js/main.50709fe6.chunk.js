(this["webpackJsonpmyntra-assign"]=this["webpackJsonpmyntra-assign"]||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(30),r=c.n(n),s=c(4),i=c.n(s),o=c(10),d=c(12),l=c(31),j=new(c.n(l).a)("pk_26391e23a714272fb5e3af9b22b895cb9cc84bc864fc4",!0),u=(c(69),c(9)),b=c(2),m=c.p+"static/media/Bag.40b76dce.svg",h=(c(70),c(0)),x=function(e){var t=e.totalItems,c=Object(b.f)();return Object(h.jsx)("div",{className:"parentRest",children:"/"===c.pathname&&Object(h.jsxs)("div",{className:"bag",children:[Object(h.jsxs)(u.b,{to:"/cart",children:[Object(h.jsx)("img",{src:m,className:"bag",width:"15px",alt:"bag"}),0!==t&&Object(h.jsx)("span",{className:"icon-badge",children:t})]}),Object(h.jsx)("div",{className:"name",children:" Bag"})]})})},O=(c(77),function(e){var t=e.SearchResult,c=Object(a.useState)(""),n=Object(d.a)(c,2),r=n[0],s=n[1];return Object(h.jsx)("div",{className:"search",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(e),console.log(e)},children:Object(h.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"Search"})})})}),p=c.p+"static/media/Myntra.948d71b8.svg",v=function(e){var t=e.totalItems,c=e.SearchResult;return Object(h.jsx)("div",{className:"completeOuter",children:Object(h.jsxs)("div",{className:"navOuter",children:[Object(h.jsx)("div",{className:"logo navItems",children:Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("img",{src:p,className:"logo-img",alt:""})})}),Object(h.jsx)("div",{className:"searchBar navItems",children:Object(h.jsx)(O,{SearchResult:c})}),Object(h.jsx)("div",{className:"rest navItems",children:Object(h.jsx)(x,{totalItems:t})})]})})},f=(c(78),function(e){var t=e.productDetails,c=e.onAddToCart,a=e.change;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-Image",children:Object(h.jsx)("img",{className:"prodImg",src:t.media.source,alt:"",title:t.name})}),Object(h.jsxs)("div",{className:"ShirtName content-card",children:[" ",t.name]}),Object(h.jsx)("div",{className:"metadata content-card",dangerouslySetInnerHTML:{__html:t.description}}),Object(h.jsx)("div",{className:"price content-card",children:t.price.formatted_with_symbol}),Object(h.jsxs)("div",{className:"actions content-card",children:[Object(h.jsx)("button",{type:"button",className:"cart-btn add",onClick:function(){return c(t.id,1)},children:" Add to cart"}),Object(h.jsx)("button",{type:"button",className:"cart-btn view",onClick:function(){return a(t.id)},children:" View"})]})]})}),N=(c(79),function(e){var t=e.products,c=e.onAddToCart,a=e.addTrip,n=e.change,r=e.handleFilter;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"sort",children:[Object(h.jsx)("label",{for:"sort",className:"sort-title",children:"Sort By Price:"}),Object(h.jsxs)("select",{name:"sort",id:"sort",onChange:function(){return r},children:[Object(h.jsx)("option",{value:"highest",children:"higehstToLowest"}),Object(h.jsx)("option",{value:"lowest",children:"LowestToHighest"})]})]}),Object(h.jsx)("div",{className:"ImageData",children:Object(h.jsx)("div",{className:"row",children:t.map((function(e){return Object(h.jsx)(f,{productDetails:e,onAddToCart:c,addTrip:a,change:n},e.id)}))})})]})}),g=(c(80),function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"heading",children:" Filter"}),Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsxs)("div",{className:"radioChild",children:[" ",Object(h.jsx)("input",{type:"radio",value:"Men",name:"drone"})," Men"]}),Object(h.jsxs)("div",{className:"radioChild",children:[" ",Object(h.jsx)("input",{type:"radio",value:"Women",name:"drone"})," Women"]})]}),Object(h.jsxs)("div",{className:"checkboxes",children:[Object(h.jsx)("div",{className:"title",children:" CATEGORIES"}),Object(h.jsxs)("div",{className:"checkboxChild",children:[Object(h.jsx)("input",{type:"checkbox"}),"Price more than $10 "]}),Object(h.jsxs)("div",{className:"checkboxChild",children:[Object(h.jsx)("input",{type:"checkbox"}),"Price more than $20"]}),Object(h.jsxs)("div",{className:"checkboxChild",children:[Object(h.jsx)("input",{type:"checkbox"}),"Price more than $30"]})]})]})}),y=(c(81),function(e){var t=e.products,c=e.onAddToCart,a=e.addTrip,n=e.change;return Object(h.jsxs)("div",{className:"parentMain",children:[Object(h.jsx)("div",{className:"filters",children:Object(h.jsx)(g,{})}),Object(h.jsx)("div",{className:"MainData",children:Object(h.jsx)(N,{products:t,onAddToCart:c,addTrip:a,change:n})})]})}),w=c(18),C=(c(82),function(e){var t=e.change,c=e.onAddToCart;return console.log(c),Object(h.jsx)("div",{className:"itemDetail-parent",children:Object(h.jsxs)("div",{className:"main-card",children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)(w.b,{defaultScale:1,defaultPositionX:100,defaultPositionY:100,children:Object(h.jsx)(w.a,{children:Object(h.jsx)("img",{src:t.media.source,className:"card-img",alt:""})})})}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("div",{className:"name-detail detail-child",children:t.name}),Object(h.jsx)("div",{className:"metadata-detail detail-child",dangerouslySetInnerHTML:{__html:t.description}}),Object(h.jsx)("div",{className:"price detail-child",children:t.price.formatted_with_symbol}),Object(h.jsx)("button",{type:"button detail-child",className:"addToCart",onClick:function(){return c(t.id,1)},children:" Add to Bag"})]})]})})}),k=(c(83),function(e){var t=e.cart,c=e.handleUpdateToCart,a=e.handleRemoveFromCart,n=e.handleEmptyCart,r=function(){return Object(h.jsxs)("div",{className:"empty-parent",children:[Object(h.jsx)("div",{className:"Heading-Cart",children:" Your Cart "}),Object(h.jsx)("div",{className:"empty-cart",children:"Your Cart is empty "}),Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("span",{className:"empty-cart",children:"Click to Add some items"})})]})},s=function(){return Object(h.jsxs)("div",{className:"parent",children:[Object(h.jsx)("div",{className:"Heading-Cart",children:" Your Cart "}),Object(h.jsx)("div",{className:"row",children:t.line_items.map((function(e){return Object(h.jsxs)("div",{className:"cart-card",children:[Object(h.jsx)("div",{className:"cart-img",children:Object(h.jsx)("img",{className:"img-cart",src:e.media.source,alt:""})}),Object(h.jsx)("div",{className:"item-name",children:e.name}),Object(h.jsxs)("div",{className:"price-counter",children:[Object(h.jsx)("div",{className:"item-price",children:e.line_total.formatted_with_symbol}),Object(h.jsxs)("div",{className:"item-price counter",children:[Object(h.jsx)("button",{type:"button",className:"counter-items counter-btn",onClick:function(){return c(e.id,e.quantity-1)},children:" - "}),Object(h.jsx)("span",{className:"counter-items",children:e.quantity}),Object(h.jsx)("button",{type:"button",className:"counter-items counter-btn",onClick:function(){return c(e.id,e.quantity+1)},children:" + "})]})]}),Object(h.jsx)("div",{className:"remove",children:Object(h.jsx)("button",{type:"button",className:"remove-btn",onClick:function(){return a(e.id)},children:" Remove"})})]})}))}),Object(h.jsxs)("div",{className:"total-amount",children:["Your Total amount is : ",t.subtotal.formatted_with_symbol]}),Object(h.jsx)("div",{className:"remove-cart-btn",children:Object(h.jsx)("button",{className:"remove-cart",onClick:n,children:"Empty Cart"})})]})};return Object(h.jsx)("div",{className:"parent",children:t.line_items.length?Object(h.jsx)(s,{}):Object(h.jsx)(r,{})})}),_=(c(84),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(d.a)(r,2),l=s[0],m=s[1],x=Object(a.useState)("start"),O=Object(d.a)(x,2),p=O[0],f=O[1],N=Object(a.useState)([]),g=Object(d.a)(N,2),w=g[0],_=g[1],T=function(){var e=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.products.retrieve(t);case 2:c=e.sent,_(c),console.log(j.products.retrieve(t)),console.log(w),f("add-trip");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.products.list();case 2:t=e.sent,c=t.data,n(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,j.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){S(),I()}),[]);var A=function(){var e=Object(o.a)(i.a.mark((function e(t,c){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.add(t,c);case 2:a=e.sent,n=a.cart,m(n),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(t,c){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.update(t,{quantity:c});case 2:a=e.sent,n=a.cart,m(n);case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.remove(t);case 2:c=e.sent,a=c.cart,m(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.empty();case 2:t=e.sent,c=t.cart,m(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.categories.retrieve(t);case 2:c=e.sent,a=[],n(c),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(b.c,{children:[Object(h.jsxs)(b.a,{exact:!0,path:"/",children:[Object(h.jsx)("div",{className:"navbar",children:Object(h.jsx)(v,{totalItems:l.total_items,SearchResult:E})}),"start"===p&&Object(h.jsx)("div",{className:"Maincontent",children:Object(h.jsx)(y,{products:c,onAddToCart:A,change:T,handleFilter:function(){n((function(e){return" "!==e.sort?e.products.sort((function(t,c){return"lowest"===e.sort?t.price.formatted_with_symbol<c.price.formatted_with_symbol?1:-1:t.price.formatted_with_symbol>c.price.formatted_with_symbol?1:-1})):e.products.sort((function(e,t){return e.id<t.id?1:-1})),{products:e.products}}))}})}),"add-trip"===p&&Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{change:w,onAddToCart:A}),Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("div",{className:"reload",onClick:function(){return window.location.reload(!1)},children:" Go Back"})})]})]}),Object(h.jsx)(b.a,{exact:!0,path:"/cart",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"navbar",children:Object(h.jsx)(v,{totalItems:l.total_items})}),Object(h.jsx)(k,{cart:l,handleUpdateToCart:R,handleRemoveFromCart:M,handleEmptyCart:B})]})})]})})})});r.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.50709fe6.chunk.js.map