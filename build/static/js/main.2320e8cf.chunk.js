(this.webpackJsonpreact_ecomm=this.webpackJsonpreact_ecomm||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(11),l=n(14),u=n(77),b=new(n.n(u).a)("pk_24215abff4489234e4fce743fe8528e5afc46e13a4a4f",!0),d=n(176),j=n(178),p=n(57),m=n(179),h=n(180),x=n(181),O=n(15),f=n(18),g=n.p+"static/media/logo.02307c0d.png",v=n(8),y=n(173),k=n(19),w=Object(y.a)((function(e){var t;return{appBar:(t={boxShadow:"2px 2px 0px #BE00FE",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",color:"white"},Object(v.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),Object(v.a)(t,"backgroundColor","#3b073d"),t),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none",fontFamily:["'Patua One', cursive"],fontSize:"2.2rem"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),C=n(2),S=function(e){var t=e.totalItems,n=w(),a=Object(O.g)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(d.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(p.a,{component:f.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:g,alt:"Commerce.js",height:"55px",className:n.image}),"Super Mart"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(m.a,{component:f.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:t,color:"Secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},N=n(187),_=n(182),T=n(183),B=n(184),R=n(185),E=n(186),F=Object(y.a)((function(){return{root:{maxWidth:"100%",backgroundColor:"rgb(99, 13, 114)",boxShadow:"0px 10px 15px 18px rgba(183, 25, 211,0.1)",borderRadius:"20px",border:"4px solid purple",color:"rgb(218, 55, 247)"},media:{height:0,paddingTop:"96.25%",borderBottom:"2px solid purple"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between",color:"rgb(218, 55, 247)"},icon:{color:"rgb(218, 55, 247)"}}})),z=function(e){var t=e.product,n=e.onAddToCart,a=F();return Object(C.jsxs)(_.a,{className:a.root,children:[Object(C.jsx)(T.a,{className:a.media,image:t.media.source,title:t.name}),Object(C.jsxs)(B.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:t.name}),Object(C.jsx)(p.a,{variant:"h6",children:t.price.formatted_with_symbol})]}),Object(C.jsx)(p.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",component:"p"})]}),Object(C.jsx)(R.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(m.a,{className:a.icon,"arial-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(C.jsx)(E.a,{})})})]})},I=Object(y.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:"rgb(39, 15, 43)",padding:e.spacing(3)},title:{color:"purple",borderBottom:"2px solid purple"},heading:Object(v.a)({},e.breakpoints.down("xs"),{fontSize:"2.2rem"}),root:{flexGrow:1}}})),L=function(e){var t=e.products,n=e.onAddToCart,a=I();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.title,id:"products",children:Object(C.jsx)(p.a,{align:"center",className:a.heading,variant:"h2",children:"Cool Gaming Tech"})}),Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(N.a,{container:!0,justify:"center",spacing:2,children:t.map((function(e){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(z,{product:e,onAddToCart:n})},e.id)}))})]})},D=n(188),A=n(189),W=Object(y.a)((function(e){var t;return{toolbar:e.mixins.toolbar,main:{backgroundColor:"rgb(39, 15, 43)",paddingBottom:"5%"},title:Object(v.a)({display:"inline-block",marginTop:"5%",color:"rgb(150, 54, 240)",textShadow:"-1px 1px black",borderBottom:"2px solid purple"},e.breakpoints.between("xs","sm"),{marginTop:"10%",fontSize:"2.5rem"}),empty:Object(v.a)({height:"40vh",color:"purple"},e.breakpoints.up("xs"),{height:"45vh"}),emptyButton:(t={minWidth:"150px"},Object(v.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none",backgroundColor:"rgb(214, 169, 255)",padding:"2px"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between",marginBottom:"5%",color:"rgb(218, 55, 247)"}}})),H=Object(y.a)((function(){return{media:{height:260,borderBottom:"2px solid purple"},card:{backgroundColor:"rgb(99, 13, 114)",boxShadow:"0px 10px 15px 18px rgba(183, 25, 211,0.1)",borderRadius:"20px",border:"4px solid purple",color:"rgb(218, 55, 247)"},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),P=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveCartQty,r=H();return Object(C.jsxs)(_.a,{className:r.card,children:[Object(C.jsx)(T.a,{image:t.media.source,alt:t.name,className:r.media}),Object(C.jsxs)(B.a,{className:r.cardContent,children:[Object(C.jsx)(p.a,{variant:"h6",children:t.name}),Object(C.jsxs)(p.a,{variant:"h6",children:[" ",t.line_total.formatted_with_symbol]})]}),Object(C.jsxs)(R.a,{className:r.cartAction,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(D.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(C.jsx)(p.a,{children:t.quantity}),Object(C.jsx)(D.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)},children:"+"})]}),Object(C.jsx)(D.a,{variant:"contained",typed:"button",color:"secondary",onClick:function(){return a(t.id)},children:"Remove"})]})]})},Q=function(e){var t=e.cart,n=e.handleUpdateCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=W(),i=function(){return Object(C.jsx)("main",{className:c.empty,children:Object(C.jsxs)(p.a,{variant:"subtitle1",children:["You have no item in card.",Object(C.jsx)(f.b,{to:"/",className:c.link,children:"Add Items to Cart"})]})})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(P,{item:e,onUpdateCartQty:n,onRemoveCartQty:a})},e.id)}))}),Object(C.jsxs)("div",{className:c.cardDetails,children:[Object(C.jsxs)(p.a,{variant:"h5",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{className:c.cardBtn,children:[Object(C.jsx)(D.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty cart"}),Object(C.jsx)(D.a,{component:f.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Check Out"})]})]})]})};return t.line_items?Object(C.jsx)("main",{className:c.main,children:Object(C.jsxs)(A.a,{classame:c.bg,children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(p.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]})}):"Loading.."},M=n(195),q=n(197),G=n(85),U=n(204),V=n(198),Y=n(200),J=n(196),K=Object(y.a)((function(e){var t,n;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,bg:(t={backgroundColor:"rgb(39, 15, 43)",padding:"2%",height:"122vh"},Object(v.a)(t,e.breakpoints.up("xs"),{height:"130vh"}),Object(v.a)(t,e.breakpoints.between("sm","md"),{height:"210vh"}),t),layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(n={boxShadow:"0px 10px 15px 18px rgba(183, 25, 211,0.1)",borderRadius:"20px",border:"4px solid purple",marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(v.a)(n,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(n,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),n),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0",backgroundColor:"black"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),X=n(49),Z=n(203),$=n(199),ee=n(193),te=n(45),ne=n(201),ae=function(e){var t=e.name,n=e.label,a=Object(te.d)().control;return Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(te.a,{as:ne.a,defaultValue:"",control:a,fullWidth:!0,name:t,label:n,required:!0})})},re=n(56),ce=Object(y.a)((function(e){var t,n;return{main:{backgroundColor:"#800285",color:"#fff",padding:"10px 0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"30vh",position:"relative",bottom:0},Typography:(t={},Object(v.a)(t,e.breakpoints.up("xs"),{fontSize:"1.2rem"}),Object(v.a)(t,e.breakpoints.up("sm"),{fontSize:"2rem"}),t),icons:(n={display:"flex",justifyContent:"center",alignItems:"center"},Object(v.a)(n,e.breakpoints.up("xs"),{marginTop:"8px"}),Object(v.a)(n,e.breakpoints.up("sm"),{marginTop:"16px"}),n),icon:{margin:"10px 30px 0 5px",textDecoration:"none",color:"white",borderRadius:"50%",lineHeight:"1.5rem",fontSize:"2.5rem"}}})),ie=(n(138),function(){var e=ce();return Object(C.jsx)("footer",{className:e.main,children:Object(C.jsxs)("div",{className:e.info,children:[Object(C.jsx)(p.a,{className:e.Typography,variant:"h4",children:"Keep shopping.We got all best products."}),Object(C.jsxs)("div",{className:e.icons,children:[Object(C.jsx)("a",{className:e.icon,href:"",children:Object(C.jsx)(re.a,{})}),Object(C.jsx)("a",{className:e.icon,href:"",children:Object(C.jsx)(re.b,{})}),Object(C.jsx)("a",{className:e.icon,href:"",children:Object(C.jsx)(re.c,{})})]})]})})}),se=function(e){var t=e.checkoutToken,n=e.next,r=Object(a.useState)([]),c=Object(l.a)(r,2),i=c[0],u=c[1],d=Object(a.useState)(""),j=Object(l.a)(d,2),m=j[0],h=j[1],x=Object(a.useState)([]),O=Object(l.a)(x,2),g=O[0],v=O[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),w=k[0],S=k[1],_=Object(a.useState)([]),T=Object(l.a)(_,2),B=T[0],R=T[1],E=Object(a.useState)(" "),F=Object(l.a)(E,2),z=F[0],I=F[1],L=Object(te.c)(),A=Object.entries(i).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),W=Object.entries(g).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),H=B.map((function(e){return{id:e.id,label:"".concat(e.description,"- (").concat(e.price.formatted_with_symbol,")")}})),P=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,u(a),h(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,v(a),S(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,b.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,R(r),I(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){P(t.id),console.log("checkoutToken.id"),console.log(t),console.log(t.id)}),[]),Object(a.useEffect)((function(){m&&Q(m)}),[m]),Object(a.useEffect)((function(){w&&M(t.id,m,w)}),[w]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(te.b,Object(X.a)(Object(X.a)({},L),{},{children:Object(C.jsxs)("form",{onSubmit:L.handleSubmit((function(e){return n(Object(X.a)(Object(X.a)({},e),{},{shippingCountry:m,shippingSubdivision:w,shippingOption:z}))})),children:[Object(C.jsxs)(N.a,{container:!0,spacing:3,children:[Object(C.jsx)(ae,{name:"firstname",label:"Frist Name"}),Object(C.jsx)(ae,{name:"lastname",label:"Last Name"}),Object(C.jsx)(ae,{name:"address",label:"Address"}),Object(C.jsx)(ae,{name:"email",label:"Email"}),Object(C.jsx)(ae,{name:"city",label:"City"}),Object(C.jsx)(ae,{name:"pincode",label:"Pincode"}),Object(C.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(Z.a,{children:"Shipping Country"}),Object(C.jsx)($.a,{value:m,fullWidth:!0,onChange:function(e){return h(e.target.value)},children:A.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(Z.a,{children:"Shipping Sub-Division"}),Object(C.jsx)($.a,{value:w,fullWidth:!0,onChange:function(e){return S(e.target.value)},children:W.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(Z.a,{children:"Shipping Options"}),Object(C.jsx)($.a,{value:z,fullWidth:!0,onChange:function(e){return I(e.target.value)},children:H.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(D.a,{component:f.b,to:"/cart",variant:"outlined",children:" Back to Cart"}),Object(C.jsx)(D.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},oe=n(50),le=n(82),ue=n(192),be=n(142),de=n(194),je=function(e){var t=e.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Order Summary"}),Object(C.jsxs)(ue.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(C.jsxs)(be.a,{styel:{padding:"10px 0"},children:[Object(C.jsx)(de.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(C.jsx)(p.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(C.jsxs)(be.a,{styel:{padding:"10px 0"},children:[Object(C.jsx)(de.a,{primary:"Total: "}),Object(C.jsx)(p.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},pe=Object(le.a)("pk_test_51IVc9fH1LFzYbMWKuXMQjU5HL3OR2VeWt90jcbkW45mAHL5YVY1TD68hapyEbpu8kLoqxpV8wyaRnDcmC2vZNlTD00gjDr4CgQ"),me=function(e){var t=e.checkoutToken,n=e.shippingData,a=e.backStep,r=(e.onCaptureCheckout,e.nextStep),c=e.timeout,i=function(){var e=Object(o.a)(s.a.mark((function e(a,i,o){var l,u,b,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&i){e.next=3;break}return e.abrupt("return");case 3:return l=i.getElement(oe.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:l});case 6:u=e.sent,b=u.error,d=u.paymentMethod,b?console.log("[error]",b):({line_items:t.live.line_items,customer:{firstname:n.firstname,lastname:n.lastname,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.pincode,country:n.shippingCountry},fullfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_mehtod_id:d.id}}},c(),r());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(je,{checkoutToken:t}),Object(C.jsx)(M.a,{}),Object(C.jsx)(p.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:" Payment Method"}),Object(C.jsx)(oe.Elements,{stripe:pe,children:Object(C.jsx)(oe.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(C.jsxs)("form",{onSubmit:function(e){return i(e,n,r)},children:[Object(C.jsx)(oe.CardElement,{}),Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(D.a,{variant:"outlined",onClick:a,children:"Back"}),Object(C.jsxs)(D.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay: ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},he=n(62),xe=n.n(he),Oe=["Shipping address","Payment details"],fe=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=e.refreshCart,u=Object(a.useState)(0),d=Object(l.a)(u,2),j=d[0],m=d[1],h=Object(a.useState)(null),x=Object(l.a)(h,2),g=x[0],v=x[1],y=Object(a.useState)({}),k=Object(l.a)(y,2),w=k[0],S=k[1],N=Object(a.useState)(!1),_=Object(l.a)(N,2),T=_[0],B=_[1],R=K(),E=Object(O.f)(),F=window.innerHeight;window.addEventListener("resize",(function(){window.innerHeight<F?xe()("main").css("height","220vh"):xe()("main").css("height","140vh")}));var z=function(){return m((function(e){return e+1}))},I=function(){return m((function(e){return e-1}))};Object(a.useEffect)((function(){t.id&&function(){var e=Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,v(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),E.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var L=function(e){S(e),z()},A=function(){setTimeout((function(){B(!0)}),3e3)},W=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(p.a,{varian:"h5",children:["Thank you for your purchase. ",n.customer.firstname," ",n.customer.lasttname]}),Object(C.jsx)(M.a,{className:R.divider}),Object(C.jsxs)(p.a,{variant:"subtitle2",children:["Oredr ref:",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(D.a,{component:f.b,to:"/",variant:"outlined",children:"Back Home"})]}):T?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{varian:"h5",children:"Thank you for your purchase. "}),Object(C.jsx)(M.a,{className:R.divider})]}),Object(C.jsx)("br",{}),Object(C.jsx)(D.a,{component:f.b,to:"/",variant:"outlined",onClick:i,children:"Back Home"})]}):Object(C.jsx)("div",{className:R.spinner,children:Object(C.jsx)(J.a,{})})};c&&(C.Fragment,p.a,D.a,f.b);var H=function(){return 0===j?Object(C.jsx)(se,{checkoutToken:g,next:L}):Object(C.jsx)(me,{shippingData:w,checkoutToken:g,refreshCart:i,nextStep:z,backStep:I,onCaptureCheckout:r,timeout:A})};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("main",{className:R.bg,children:[Object(C.jsx)(q.a,{}),Object(C.jsx)("div",{className:R.toolbar}),Object(C.jsx)("div",{className:R.layout,children:Object(C.jsxs)(G.a,{className:R.paper,children:[Object(C.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(U.a,{activeStep:j,className:R.stepper,children:Oe.map((function(e){return Object(C.jsx)(V.a,{children:Object(C.jsx)(Y.a,{children:e})},e)}))}),j===Oe.length?Object(C.jsx)(W,{}):g&&Object(C.jsx)(H,{}),"  "]})})]})})},ge=(n(139),n.p+"static/media/landing.24c683a9.jpg"),ve=Object(y.a)((function(e){var t,n;return{main:(t={display:"flex",justifyContent:"center",alignItems:"center",fontFamily:["'Overpass', sans-serif"],width:"100%",background:"linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(".concat(ge,");"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"#fe346e"},Object(v.a)(t,e.breakpoints.up("xs"),{height:"80vh"}),Object(v.a)(t,e.breakpoints.between("md","lg"),{height:"90vh"}),Object(v.a)(t,e.breakpoints.up("lg"),{height:"100vh"}),t),info:{borde:"2px solid black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},t1:(n={fontFamily:["'Overpass', sans-serif"],textShadow:"-1px 1px #fff"},Object(v.a)(n,e.breakpoints.up("xs"),{fontSize:"2.9rem"}),Object(v.a)(n,e.breakpoints.up("sm"),{fontSize:"2rem"}),Object(v.a)(n,e.breakpoints.up("lg"),{fontSize:"4.5rem",marginTop:"5%"}),n),t2:Object(v.a)({fontFamily:["'Overpass', sans-serif"],textShadow:"-1px -1px  #fe346e",color:"#fff"},e.breakpoints.up("lg"),{fontSize:"2.0rem"}),t3:Object(v.a)({fontFamily:["'Overpass', sans-serif"],color:"#fff"},e.breakpoints.up("lg"),{fontSize:"1.5rem"})}})),ye=n(83),ke=function(){var e=ve();return Object(C.jsx)("div",{className:e.main,style:{background:"linear-gradient(to bottom,  ".concat({color1:{background:"#000000",opacity:"1.5"}}," ,").concat({color2:{background:"#000000",opacity:"1.8"}}," 100%")},children:Object(C.jsxs)("div",{className:e.info,children:[Object(C.jsx)(p.a,{className:e.t1,variant:"h6",align:"center",display:"block",children:"Welcome to the Super Market"}),Object(C.jsx)(p.a,{className:e.t2,variant:"subtitle1",align:"center",children:"Best place to grab gamming stuffs"}),Object(C.jsx)(p.a,{className:e.t3,variant:"subtitle2",align:"center",children:"we had super deals on all products"}),Object(C.jsx)(ye.a,{smooth:!0,to:"#products",className:"btn",children:"Shop Now"})]})})},we=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(l.a)(c,2),u=i[0],d=i[1],j=Object(a.useState)({}),p=Object(l.a)(j,2),m=p[0],h=p[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),v=g[0],y=g[1],k=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,b.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.add(t,n);case 2:a=e.sent,r=a.cart,d(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,d(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.remove(t);case 2:n=e.sent,a=n.cart,d(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.empty();case 2:t=e.sent,n=t.cart,d(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.refresh();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.checkout.capture(t,n);case 3:a=e.sent,h(a),console.log("**ORDER**"),console.table(m),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0.data.error.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),Object(C.jsxs)(f.a,{children:[Object(C.jsx)(S,{totalItems:u.total_items}),Object(C.jsxs)(O.c,{children:[Object(C.jsxs)(O.a,{exact:!0,path:"/",children:[Object(C.jsx)(ke,{}),Object(C.jsx)(L,{products:n,onAddToCart:N})]}),Object(C.jsx)(O.a,{exact:!0,path:"/cart",children:Object(C.jsx)(Q,{cart:u,handleUpdateCartQty:_,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(C.jsx)(O.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(fe,{cart:u,order:m,onCaptureCheckout:E,refreshCart:R,error:v})})]}),Object(C.jsx)(ie,{})]})};n(140);c.a.render(Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(we,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.2320e8cf.chunk.js.map