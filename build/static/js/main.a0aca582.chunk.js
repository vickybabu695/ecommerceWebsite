(this.webpackJsonpecommercewebsite=this.webpackJsonpecommercewebsite||[]).push([[0],{39:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(14),i=c.n(a),r=(c(39),c(16)),n=c(3),d=c(24),j=c(5),l=c(8),o=(c(40),function(e,t){var c,s,a,i,r=e.shoppingCart,n=e.totalPrice,d=e.qty;switch(t.type){case"ADD_TO_CART":return r.find((function(e){return e.id===t.id}))?e:((c=t.product).qty=1,i=d+1,a=n+c.price,{shoppingCart:[c].concat(Object(l.a)(r)),totalPrice:a,qty:i});case"INC":return(c=t.cart).qty=c.qty+1,a=n+c.price,i=d+1,s=r.findIndex((function(e){return e.id===t.id})),r[s]=c,{shoppingCart:Object(l.a)(r),totalPrice:a,qty:i};case"DEC":return(c=t.cart).qty>1?(c.qty=c.qty-1,a=n-c.price,i=d-1,s=r.findIndex((function(e){return e.id===t.id})),r[s]=c,{shoppingCart:Object(l.a)(r),totalPrice:a,qty:i}):e;case"DELETE":var j=r.filter((function(e){return e.id!==t.id}));return i=d-(c=t.cart).qty,a=n-c.price*c.qty,{shoppingCart:Object(l.a)(j),totalPrice:a,qty:i};case"empty":return{shoppingCart:[],totalPrice:0,qty:0};default:return e}}),p=c(2),u=Object(s.createContext)(),b=function(e){var t=Object(s.useReducer)(o,{shoppingCart:[],totalPrice:0,qty:0}),c=Object(j.a)(t,2),a=c[0],i=c[1];return Object(p.jsx)(u.Provider,{value:Object(d.a)(Object(d.a)({},a),{},{dispatch:i}),children:e.children})},h=function(){var e=Object(s.useContext)(u).qty;return Object(p.jsxs)("nav",{children:[Object(p.jsx)("ul",{className:"left",children:Object(p.jsx)("li",{children:Object(p.jsx)(r.b,{to:"/",children:"Welcome to shopping Site"})})}),Object(p.jsx)("ul",{className:"right",children:Object(p.jsx)("li",{children:Object(p.jsx)(r.b,{to:"cart",children:Object(p.jsxs)("span",{className:"shoppingCart",children:[Object(p.jsx)("i",{class:"fas fa-cart-plus"}),Object(p.jsx)("span",{className:"cartCount",children:e})]})})})})]})},m=c.p+"static/media/shoe.31461fe3.jpg",O=c.p+"static/media/MicroPhone.3a039b88.jpg",x=c.p+"static/media/vessel.d562102b.jpg",f=c.p+"static/media/fan.0d2c3348.jpg",v=c.p+"static/media/Mobile.5a4aecc3.jpg",g=c.p+"static/media/book.aa9033c1.jpg",N=c.p+"static/media/chair.22d41845.jpg",y=c.p+"static/media/laptop.164b273d.jpg",C=Object(s.createContext)(),q=function(e){var t=Object(s.useState)([{id:1,name:"shoe",price:500,image:m,status:"hot"},{id:2,name:"MicroPhone",price:1e3,image:O,status:"hot"},{id:3,name:"vessel",price:200,image:x,status:"new"},{id:4,name:"fan",price:1500,image:f,status:"hot"},{id:5,name:"Mobile",price:5e3,image:v,status:"new"},{id:6,name:"book",price:100,image:g,status:"hot"},{id:7,name:"chair",price:400,image:N,status:"hot"},{id:8,name:"laptop",price:1e4,image:y,status:"new"}]),c=Object(j.a)(t,1)[0];return Object(p.jsx)(C.Provider,{value:{products:Object(l.a)(c)},children:e.children})},P=function(){return Object(p.jsx)("header",{children:Object(p.jsx)("div",{className:"headerText",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:" Offers For You Only"}),Object(p.jsx)("p",{children:"Enjoy online shopping with IndiaExpress"})]})})})},k=function(e){var t=Object(s.useContext)(C).products,c=Object(s.useContext)(u).dispatch;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(P,{}),Object(p.jsx)("div",{className:"products",children:t.map((function(e){return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("div",{className:"product-image",children:Object(p.jsx)("img",{src:e.image,alt:"not found"})}),Object(p.jsxs)("div",{className:"product-details",children:[Object(p.jsx)("div",{className:"product-name",children:e.name}),Object(p.jsxs)("div",{className:"product-price",children:["$",e.price,".00"]}),Object(p.jsx)("div",{className:"add-to-cart",onClick:function(){return c({type:"ADD_TO_CART",id:e.id,product:e})},children:"add to card"})]})]},e.id)}))})]})},E=c(4),T=c.n(E),w=c(7),D=c(34),I=c.n(D),A=c(35),M=c.n(A),_=c(23);c(66);_.a.configure();var H=function(e){var t=Object(s.useContext)(u),c=t.shoppingCart,a=t.totalPrice,i=t.qty,r=t.dispatch,n=Object(s.useContext)(u);console.log(n);var d=function(){var t=Object(w.a)(T.a.mark((function t(c){var s,i,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={name:"All Products",price:a},t.next=3,M.a.post("http://localhost:8080/checkout",{product:s,token:c});case 3:i=t.sent,n=i.data.status,console.log(n),"success"===n&&(r({type:"EMPTY"}),e.history.push("/"),_.a.success("You have paid successfully",{position:_.a.POSITION.TOP_RIGHT}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"cart-container",style:{marginTop:"100px"},children:c.length>0?c.map((function(e){return Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsx)("span",{className:"cart-image",children:Object(p.jsx)("img",{src:e.image,alt:"not found"})}),Object(p.jsx)("span",{className:"cart-product-name",children:e.name}),Object(p.jsx)("span",{className:"cart-product-price",children:e.price}),Object(p.jsx)("span",{className:"inc",onClick:function(){return r({type:"INC",id:e.id,cart:e})},children:Object(p.jsx)("i",{className:"fas fa-plus"})}),Object(p.jsx)("span",{className:"product-quantity",children:e.qty}),Object(p.jsx)("span",{className:"dec",onClick:function(){return r({type:"DEC",id:e.id,cart:e})},children:Object(p.jsx)("i",{className:"fas fa-minus"})}),Object(p.jsxs)("span",{className:"product-total-price",children:["$",e.price*e.qty,".00"]}),Object(p.jsx)("span",{className:"delete",onClick:function(){return r({type:"DELETE",id:e.id,cart:e})},children:Object(p.jsx)("i",{className:"fas fa-trash-alt"})})]},e.id)})):Object(p.jsx)("div",{className:"empty",children:"Sorry your card is empty."})}),c.length>0?Object(p.jsx)("div",{className:"cart-summary",children:Object(p.jsxs)("div",{className:"summary",children:[Object(p.jsx)("h3",{children:"Cart Summary"}),Object(p.jsxs)("div",{className:"total-items",children:[Object(p.jsx)("div",{className:"items",children:"Total Items"}),Object(p.jsx)("div",{className:"item-count",children:i})]}),Object(p.jsxs)("div",{className:"total-price-section",children:[Object(p.jsx)("div",{className:"just-title",children:"Total Price"}),Object(p.jsxs)("div",{className:"item-price",children:["$",a,".00"]}),Object(p.jsx)("div",{className:"stripe-section",children:Object(p.jsx)(I.a,{stripeKey:"pk_test_51IqfILSGBfzDew1juUWK27iUjeRDbECLzVimDHlzEBHEXKbLd8sJJWubscxjQbigJJGkVYjCiRh4oHHDQMHumYOw00pl2kFV6M",token:d,billingAddress:!0,shippingAddress:!0,amount:100*a,name:"All Products"})})]})]})}):""]})},J=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"not-found",children:Object(p.jsx)("h2",{children:" Page Not Found !! "})})})};var R=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(q,{children:Object(p.jsx)(b,{children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(h,{}),Object(p.jsxs)(n.c,{children:[Object(p.jsx)(n.a,{path:"/",exact:!0,element:Object(p.jsx)(k,{})}),Object(p.jsx)(n.a,{path:"/cart",exact:!0,element:Object(p.jsx)(H,{})}),Object(p.jsx)(n.a,{element:Object(p.jsx)(J,{})})]})]})})})})};i.a.render(Object(p.jsx)(R,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.a0aca582.chunk.js.map