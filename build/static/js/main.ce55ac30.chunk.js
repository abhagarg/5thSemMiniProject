(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),i=c(31),r=c.n(i),s=(c(65),c(53)),o=c(9),d=(c(66),c(67),c(55)),l=c.n(d),j=c(56),u=c.n(j),h=c(17),b=c(2),m=Object(n.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(b.jsx)(m.Provider,{value:Object(n.useReducer)(t,c),children:a})},O=function(){return Object(n.useContext)(m)},x=c(39),g=x.a.initializeApp({apiKey:"AIzaSyCToIoZttYVFce6kT_-FTbcVh_dvY8ZetQ",authDomain:"miniprojectecommerce.firebaseapp.com",projectId:"miniprojectecommerce",storageBucket:"miniprojectecommerce.appspot.com",messagingSenderId:"1040611756032",appId:"1:1040611756032:web:9f8145cb7b13538f8bf0e5",measurementId:"G-16XTFJRP10"}).firestore(),v=x.a.auth();var _=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",src:"https://www.creaticity.co.in/images/homecity/logo/urban-ladder.svg"})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{className:"header__searchInput",type:"text"}),Object(b.jsx)(l.a,{className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)(h.b,{to:!a&&"/login",children:Object(b.jsxs)("div",{onClick:function(){a&&v.signOut()},className:"header__option",children:[Object(b.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(b.jsx)(h.b,{to:"/orders",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(b.jsx)(h.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(u.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(79),c(80);var f=function(e){var t=e.id,c=e.title,n=e.image,a=e.price,i=e.rating,r=O(),s=Object(o.a)(r,2),d=(s[0].basket,s[1]);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"\u20b9"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(b.jsx)("img",{src:n,alt:""}),Object(b.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:i}})},children:"Add to Basket"})]})};var y=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home__container",children:[Object(b.jsx)("img",{className:"home__image",src:"https://www.oakhavenhospice.co.uk/wp-content/uploads/2020/11/curved-furniture-header-living-room.jpg",alt:""}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(f,{id:"12321341",title:"BIGMO Modern Black White Design Home Utility Padded Stool/ Ottoman (4 Legs-Added Stability-Natural Finish)",price:2749,rating:4,image:"https://www.loomkart.com/wp-content/uploads/2019/12/Stools1000x1000_0005_IMG_20191211_124119.jpg"}),Object(b.jsx)(f,{id:"49538094",title:"Ren 6 Door Wardrobe with External Drawers in Wenge Finish",price:30597,rating:4,image:"https://ii1.pepperfry.com/media/catalog/product/r/e/568x625/ren-6-door-wardrobe-with-external-drawers-in-wenge-finish-by-mintwud-ren-6-door-wardrobe-with-extern-1dbjov.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(f,{id:"4903850",title:"Yuuma King Size Bed with Storage in Wenge Finish",price:36999,rating:4,image:"https://ii1.pepperfry.com/media/catalog/product/y/u/568x625/yuuma-king-size-bed-with-storage-in-wenge-finish-by-mintuwd-yuuma-king-size-bed-with-storage-in-weng-lcckjh.jpg"}),Object(b.jsx)(f,{id:"90829332",title:"Scape Canvas Art Prints In Golden",price:2338,rating:4,image:"https://ii1.pepperfry.com/media/catalog/product/s/c/568x625/scape-canvas-art-prints-in-golden-by-the-artment-scape-canvas-art-prints-in-golden-by-the-artment-tpwltc.jpg"}),Object(b.jsx)(f,{id:"3254354345",title:"Kosmo Premium Dressing Unit in Natural Wenge Woodpore Melamine Finish",price:10131,rating:4,image:"https://ii1.pepperfry.com/media/catalog/product/k/o/568x625/kosmo-premium-dressing-unit-in-natural-wenge-woodpore-melamine-finish-by-spacewood-kosmo-premium-dre-ju8yv8.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(f,{id:"23445930",title:"Haaken 3 Seater Sofa in Blue color",price:77999,rating:5,image:"https://ii1.pepperfry.com/media/catalog/product/h/a/568x284/haaken-3-seater-sofa-in-blue-color----woodsworth-by-pepperfry-haaken-3-seater-sofa-in-blue-color-----a5mjqg.jpg"}),Object(b.jsx)(f,{id:"3254354345",title:"Scorpion Study Table with Book Shelves & Cabinet in Knotty Wood Finish",price:18749,rating:4,image:"https://ii1.pepperfry.com/media/catalog/product/s/t/568x625/study-table-with-book-shelves---cabinet-in-knotty-wood-finish-by-crystal-furnitech-study-table-with--blhd06.jpg"})]})]})})},k=c(11),N=(c(81),c(82),c(25)),w=c.n(N),S=c(40),E=c(22),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},C=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(S.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:n});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var B=function(){var e=Object(k.f)(),t=O(),c=Object(o.a)(t,2),n=c[0].basket;return c[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(w.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",n.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:T(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(b.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(84);var P=function(e){var t=e.id,c=e.image,n=e.title,a=e.price,i=e.rating,r=e.hideButton,s=O(),d=Object(o.a)(s,2),l=(d[0].basket,d[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"\u20b9"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))}),!r&&Object(b.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var A=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:"https://indiater.com/wp-content/uploads/2021/09/furniture-and-interior-detail-store-promotion-sale-ads-banner-on-yellow-floor-and-background-1024x395.jpg",alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Hello, ",null===a||void 0===a?void 0:a.email]}),Object(b.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),n.map((function(e){return Object(b.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(B,{})})]})};c(85);var I=function(){var e=Object(k.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),d=s[0],l=s[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"login__logo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzOz6nF33tEPWcjdnQBfNyt2zQe01uEGjNscbIXnPa2PB7zTbTEQic6-Gss5D4gp83Q&usqp=CAU"})}),Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign-in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{type:"password",value:d,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(a,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By signing-in you agree to the website's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(a,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Account"})]})]})},R=c(27),D=c.n(R),M=c(38),z=(c(87),c(24)),U=c(57),W=c.n(U).a.create({baseURL:"http://localhost:5001/fir-ec9a4/us-central1/api"});var F=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],a=c.basket,i=c.user,r=t[1],s=Object(k.f)(),d=Object(z.useStripe)(),l=Object(z.useElements)(),j=Object(n.useState)(!1),u=Object(o.a)(j,2),m=u[0],p=u[1],x=Object(n.useState)(""),v=Object(o.a)(x,2),_=v[0],f=v[1],y=Object(n.useState)(null),N=Object(o.a)(y,2),S=N[0],E=N[1],C=Object(n.useState)(!0),B=Object(o.a)(C,2),A=B[0],I=B[1],R=Object(n.useState)(!0),U=Object(o.a)(R,2),F=U[0],L=U[1];Object(n.useEffect)((function(){var e=function(){var e=Object(M.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W({method:"post",url:"/payments/create?total=".concat(100*T(a))});case 2:t=e.sent,L(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),console.log("THE SECRET IS >>>",F),console.log("\ud83d\udc71",i);var Y=function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,d.confirmCardPayment(F,{payment_method:{card:l.getElement(z.CardElement)}}).then((function(e){var t=e.paymentIntent;g.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:a,amount:t.amount,created:t.created}),p(!0),E(null),f(!1),r({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"payment",children:Object(b.jsxs)("div",{className:"payment__container",children:[Object(b.jsxs)("h1",{children:["Checkout (",Object(b.jsxs)(h.b,{to:"/checkout",children:[null===a||void 0===a?void 0:a.length," items"]}),")"]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Delivery Address"})}),Object(b.jsxs)("div",{className:"payment__address",children:[Object(b.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(b.jsx)("p",{children:"Gate1,Graphic Era University, Clement Town,"}),Object(b.jsx)("p",{children:"Dehradun, Uttarakhand 248002"})]})]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Review items and delivery"})}),Object(b.jsx)("div",{className:"payment__items",children:a.map((function(e){return Object(b.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Payment Method"})}),Object(b.jsx)("div",{className:"payment__details",children:Object(b.jsxs)("form",{onSubmit:Y,children:[Object(b.jsx)(z.CardElement,{onChange:function(e){I(e.empty),E(e.error?e.error.message:"")}}),Object(b.jsxs)("div",{className:"payment__priceContainer",children:[Object(b.jsx)(w.a,{renderText:function(e){return Object(b.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:T(a),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(b.jsx)("button",{disabled:_||A||m,children:Object(b.jsx)("span",{children:_?Object(b.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),S&&Object(b.jsx)("div",{children:S})]})})]})]})})},L=(c(105),c(106),c(58)),Y=c.n(L);var G=function(e){var t,c=e.order;return Object(b.jsxs)("div",{className:"order",children:[Object(b.jsx)("h2",{children:"Order"}),Object(b.jsx)("p",{children:Y.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(b.jsx)("p",{className:"order__id",children:Object(b.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(b.jsx)(w.a,{renderText:function(e){return Object(b.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var K=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],a=(c.basket,c.user),i=(t[1],Object(n.useState)([])),r=Object(o.a)(i,2),s=r[0],d=r[1];return Object(n.useEffect)((function(){a?g.collection("users").doc(null===a||void 0===a?void 0:a.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[a]),Object(b.jsxs)("div",{className:"orders",children:[Object(b.jsx)("h1",{children:"Your Orders"}),Object(b.jsx)("div",{className:"orders__order",children:null===s||void 0===s?void 0:s.map((function(e){return Object(b.jsx)(G,{order:e})}))})]})},H=c(59),V=Object(H.a)("pk_test_51K7avPSCxSVOaeerWdQX3xEXVqLPkzmqXOt7GsznLuUfwURSLHCFVl6rDLXGoBhrjXPyR3huBmEzSz6nHuyu0Wt8002tE1m2SU");var X=function(){var e=O(),t=Object(o.a)(e,2);Object(s.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(k.c,{children:[Object(b.jsxs)(k.a,{path:"/orders",children:[Object(b.jsx)(_,{}),Object(b.jsx)(K,{})]}),Object(b.jsx)(k.a,{path:"/login",children:Object(b.jsx)(I,{})}),Object(b.jsxs)(k.a,{path:"/checkout",children:[Object(b.jsx)(_,{}),Object(b.jsx)(A,{})]}),Object(b.jsxs)(k.a,{path:"/payment",children:[Object(b.jsx)(_,{}),Object(b.jsx)(z.Elements,{stripe:V,children:Object(b.jsx)(F,{})})]}),Object(b.jsxs)(k.a,{path:"/",children:[Object(b.jsx)(_,{}),Object(b.jsx)(y,{})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{initialState:{basket:[],user:null},reducer:C,children:Object(b.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.ce55ac30.chunk.js.map