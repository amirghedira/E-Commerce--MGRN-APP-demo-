(this["webpackJsonppaper-kit-react"]=this["webpackJsonppaper-kit-react"]||[]).push([[0],{101:function(e,t,a){e.exports={mainHome:"Home_mainHome__25zOJ"}},115:function(e,t,a){e.exports=a(172)},167:function(e,t,a){e.exports=a.p+"static/media/headerpic.4fb45315.png"},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(57),c=a.n(l),o=a(17),i=a(26),s=a(20),m=a(175),u=a(176);var d=function(){return r.a.createElement("footer",{className:"footer footer-black footer-white"},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"credits ml-auto"},r.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear(),", made with"," ",r.a.createElement("i",{className:"fa fa-heart heart"})," by Amir GHEDIRA")))))},p=a(15),E=a(9),g=a.n(E),f=a(177),b=a(178),y=a(179),h=a(180),v=a(190),x=a(191),O=a(192),j=a(181),C=a(182),k=a(98),S=r.a.createContext({products:[],token:null}),w=a(59),I=a.n(w);var P=function(){var e=r.a.useState("navbar-transparent"),t=Object(p.a)(e,2),a=t[0],n=t[1],l=r.a.useState(!1),c=Object(p.a)(l,2),o=c[0],s=c[1],u=r.a.useContext(S);return r.a.useEffect((function(){var e=function(){document.documentElement.scrollTop>299||document.body.scrollTop>119?n(""):(document.documentElement.scrollTop<300||document.body.scrollTop<120)&&n("navbar-transparent")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),r.a.createElement(f.a,{className:g()("fixed-top",a),expand:"lg"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"navbar-translate"},r.a.createElement(b.a,{"data-placement":"bottom",title:"Coded by Creative Tim",to:"/home",tag:i.b},"E-Commerce"),r.a.createElement("button",{"aria-expanded":o,className:g()("navbar-toggler navbar-toggler",{toggled:o}),onClick:function(){s(!o),document.documentElement.classList.toggle("nav-open")}},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(y.a,{className:"justify-content-end",navbar:!0,isOpen:o},u.token?r.a.createElement(h.a,{navbar:!0},u.user?r.a.createElement(v.a,{nav:!0,inNavbar:!0},r.a.createElement(x.a,{nav:!0,caret:!0},u.user.username),r.a.createElement(O.a,{right:!0},r.a.createElement(j.a,{tag:i.b,to:"/orders"},"Orders"),r.a.createElement(j.a,{tag:i.b,to:"/profile"},"Settings"),r.a.createElement(j.a,{divider:!0}),r.a.createElement(j.a,{onClick:u.disconnectUser},r.a.createElement("strong",null,"Disconnect")))):r.a.createElement(I.a,{style:{margin:"auto"},type:"Rings",color:"#00BFFF",height:50,width:50})):r.a.createElement(h.a,{navbar:!0},r.a.createElement(C.a,null,r.a.createElement(i.b,{to:"/login"},r.a.createElement(k.a,{className:"btn-round",color:"warning"},"Login"))),r.a.createElement(C.a,null,r.a.createElement(i.b,{to:"/signup"},r.a.createElement(k.a,{className:"btn-round",color:"danger"},"Sign Up")))))))},N=a(24),_=a(101),T=a.n(_),U=a(64),$=a(25),q=a.n($),B=function(){return r.a.createElement("div",{style:{display:"flex",backgroundColor:"rgba(0,0,0,0.4)",position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",zIndex:"1000"}},r.a.createElement(I.a,{style:{margin:"auto",marginTop:"400px"},type:"ThreeDots",color:"#00BFFF",height:75,width:75}))},W=a(183),z=a(74),H=a.n(z),D=function(e){return r.a.createElement(W.a,{xs:"3",className:H.a.cardProduct},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{className:H.a.productImage,src:e.imageUrl,alt:"..."})),r.a.createElement("div",{style:{marginTop:"20px",display:"flex",justifyContent:"center",alignContent:"center"}},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/product/".concat(e.id)},r.a.createElement("h4",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},r.a.createElement("strong",null,e.title))),r.a.createElement("h6",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},e.price,"$"),r.a.createElement(k.a,{color:"success",style:{display:"flex",margin:"auto",width:"110px"},tag:i.b,to:"/purchase/".concat(e.id)},"Purchace"))))};function M(){var e=Object(N.a)(["\n  {\n  getProducts{\n    products{\n      _id\n      imageUrl\n      title\n      price\n      available\n      description\n    }\n  }\n  }\n"]);return M=function(){return e},e}var L=q()(M()),F=function(){var e=Object(U.c)(L),t=e.loading,a=e.data;return r.a.createElement("div",{className:T.a.mainHome},r.a.createElement(m.a,null,t?r.a.createElement(B,null):r.a.createElement(u.a,null,a.getProducts.products.map((function(e){return r.a.createElement(D,{key:e._id,title:e.title,imageUrl:e.imageUrl,id:e._id,price:e.price})})))))},R=a(184),Y=a(185),A=a(186);function V(){var e=Object(N.a)(["\nquery(\n  $username:String!\n  $password:String!  \n){\n  userLogin(username:$username,password:$password){\n    \n    status\n    token\n    user{\n      username\n      email\n      address\n      phone\n    }\n    \n  }\n}\n"]);return V=function(){return e},e}var Q=q()(V()),J=function(){var e=r.a.useContext(S),t=Object(s.g)(),a=r.a.useState(""),n=Object(p.a)(a,2),l=n[0],c=n[1],o=Object(U.a)(Q,{onCompleted:function(a){200!==a.userLogin.status?c("wrong credentials"):(e.setUser(a.userLogin.user),localStorage.setItem("token",a.userLogin.token),e.setToken(a.userLogin.token),t.push("/home"))}}),i=Object(p.a)(o,1)[0];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"filter"}),r.a.createElement(m.a,{style:{marginTop:"100px"}},r.a.createElement(u.a,null,r.a.createElement(W.a,{className:"ml-auto mr-auto",lg:"4"},r.a.createElement(R.a,{className:"card-register ml-auto mr-auto"},r.a.createElement("h3",{className:"title mx-auto"},"Welcome"),r.a.createElement(Y.a,{className:"register-form"},r.a.createElement("label",null,"Username"),r.a.createElement(A.a,{placeholder:"Username",id:"username",type:"text",onClickCapture:function(){return c("")}}),r.a.createElement("label",null,"Password"),r.a.createElement(A.a,{placeholder:"Password",id:"password",type:"password",onClickCapture:function(){return c("")}}),r.a.createElement("label",{style:{display:"flex",justifyContent:"center"}},l),r.a.createElement(k.a,{block:!0,className:"btn-round",color:"danger",onClick:function(){var e=document.getElementById("username").value,t=document.getElementById("password").value;i({variables:{username:e,password:t}})}},"Login")),r.a.createElement("div",{className:"forgot"},r.a.createElement(k.a,{className:"btn-link",color:"danger",href:"#pablo",onClick:function(e){return e.preventDefault()}},"Forgot password?"))))))))},G=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"filter"}),r.a.createElement(m.a,{style:{marginTop:"100px"}},r.a.createElement(u.a,null,r.a.createElement(W.a,{className:"ml-auto mr-auto",lg:"4"},r.a.createElement(R.a,{className:"card-register ml-auto mr-auto"},r.a.createElement("h3",{className:"title mx-auto"},"Welcome"),r.a.createElement(Y.a,{className:"register-form"},r.a.createElement("label",null,"Username"),r.a.createElement(A.a,{placeholder:"Username",type:"text"}),r.a.createElement("label",null,"Email"),r.a.createElement(A.a,{placeholder:"Email",type:"text"}),r.a.createElement("label",null,"Password"),r.a.createElement(A.a,{placeholder:"Password",type:"password"}),r.a.createElement("label",null,"Re-Password"),r.a.createElement(A.a,{placeholder:"Repassword",type:"password"}),r.a.createElement("label",null,"Phone number"),r.a.createElement(A.a,{placeholder:"N Phone",type:"text"}),r.a.createElement("label",null,"Address"),r.a.createElement(A.a,{placeholder:"Address",type:"text"}),r.a.createElement(k.a,{block:!0,className:"btn-round",color:"danger"},"Register")),r.a.createElement("div",{className:"forgot"},r.a.createElement(k.a,{className:"btn-link",color:"danger",href:"#pablo",onClick:function(e){return e.preventDefault()}},"Forgot password?"))))))))};function X(){var e=Object(N.a)(["\n\n   query getProduct(\n\n       $productId:String!\n   ){\n       getProduct(productId:$productId){\n           product{\n               _id\n               title\n               description\n               price\n               imageUrl\n               available\n           }\n       }\n\n   }\n\n\n"]);return X=function(){return e},e}var Z=q()(X()),K=function(e){var t=Object(U.c)(Z,{variables:{productId:e.match.params.id}}),a=t.data,n=t.loading;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m.a,{style:{paddingTop:"100px",paddingBottom:"100px"}},n?r.a.createElement(B,null):r.a.createElement(u.a,null,r.a.createElement(W.a,{xs:"4"},r.a.createElement("img",{width:"400",src:a.getProduct.product.imageUrl,alt:"..."}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("h5",{style:{fontWeight:"bold",fontSize:"14px"}}," Price: ",a.getProduct.product.price,"$"))),r.a.createElement(W.a,{xs:"8"},r.a.createElement("div",{style:{marginTop:"40px",display:"flex",justifyContent:"center"}},r.a.createElement("h4",{style:{fontWeight:500}},a.getProduct.product.title)),r.a.createElement("pre",{style:{display:"flex",justifyContent:"center",minHeight:"150px",marginTop:"40px",whiteSpace:"pre-wrap",paddingLeft:"20px",paddingRight:"20px"}},a.getProduct.product.description),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(k.a,{color:"success",tag:i.b,to:"/purchase/".concat(a.getProduct.product._id)},"Purchase")))))))},ee=function(e){var t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],l=a[1];return r.a.createElement(u.a,{style:{paddingTop:"50px",paddingLeft:"50px"}},r.a.createElement(W.a,{xs:"2",style:{display:"flex"}},r.a.createElement("h5",{style:{fontWeight:"bold",fontSize:"15px",margin:"auto"}},e.title)),r.a.createElement(W.a,{xs:n?"7":"9",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",null,n?e.password?r.a.createElement("div",null,r.a.createElement(A.a,{style:{margin:"auto",fontSize:"16px"},placeholder:"password",type:e.type}),r.a.createElement(A.a,{style:{margin:"auto",fontSize:"16px"},placeholder:"Re-enter password",type:e.type})):r.a.createElement(A.a,{id:e.id,style:{margin:"auto",fontSize:"16px"},defaultValue:e.value,type:e.type}):r.a.createElement("h6",{id:e.id,style:{margin:"auto"}},e.value))),r.a.createElement(W.a,{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},n?r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},r.a.createElement(k.a,{color:"success",style:{marginLeft:"20px",marginRight:"10px"},onClick:function(){l(!1),e.updateUser({username:document.getElementById("username").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value,address:document.getElementById("address").value})}},"Save"),r.a.createElement(k.a,{color:"danger",onClick:function(){l(!1)}},"Cancel")):r.a.createElement("i",{style:{fontSize:"20px",color:"black"},className:"fa fa-pencil-square-o","aria-hidden":"true",onClick:function(){l(!0)}})))};function te(){var e=Object(N.a)(["\n\n    mutation($username:String!,$email:String!,$address:String!,$phone:String!){\n        updateUser(updateUserInput:{\n            username:$username\n            email:$email\n            phone:$phone\n            address:$address\n        }){\n            user{\n              _id\n            }\n        }\n    }\n"]);return te=function(){return e},e}var ae=q()(te()),ne=function(){var e=r.a.useContext(S),t=r.a.useState(null),a=Object(p.a)(t,2),n=a[0],l=a[1];r.a.useEffect((function(){e.token&&e.user&&l(e.user)}),[e.token,e.user]);var c=Object(U.b)(ae,{onCompleted:function(e){console.log(e)},onError:function(e){console.log(e)}}),i=Object(p.a)(c,1)[0];return n?r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("h2",null,"Update Profile"),r.a.createElement("div",{style:{paddingTop:"50px",paddingBottom:"50px"}},r.a.createElement(ee,{id:"username",title:"Username",value:n.username,type:"text",updateUser:function(e){i({variables:Object(o.a)(Object(o.a)({},n),{},{username:e.username})}),l(Object(o.a)(Object(o.a)({},n),{},{username:e.username}))}}),r.a.createElement(ee,{id:"email",title:"Email",value:n.email,type:"text",updateUser:function(e){i({variables:Object(o.a)(Object(o.a)({},n),{},{email:e.email})}),l(Object(o.a)(Object(o.a)({},n),{},{email:e.email}))}}),r.a.createElement(ee,{id:"password",title:"Password",password:!0,value:"*******",type:"password",updateUser:function(e){}}),r.a.createElement(ee,{id:"phone",title:"Phone Number",value:n.phone,type:"number",updateUser:function(e){i({variables:Object(o.a)(Object(o.a)({},n),{},{phone:e.phone})}),l(Object(o.a)(Object(o.a)({},n),{},{phone:e.phone}))}}),r.a.createElement(ee,{id:"address",title:"address",value:n.address,type:"textarea",updateUser:function(e){i({variables:Object(o.a)(Object(o.a)({},n),{},{address:e.address})}),l(Object(o.a)(Object(o.a)({},n),{},{address:e.address}))}})))):r.a.createElement(B,null)},re=a(187),le=a(50),ce=a.n(le),oe=function(e){var t=+(new Date).toISOString().split("T")[0].split("-")[2],a=+(new Date).toISOString().split("T")[0].split("-")[0],n=+(new Date).toISOString().split("T")[1].split(":")[0],l=+e.children.split("T")[0].split("-")[2],c=+e.children.split("T")[0].split("-")[0],o=+e.children.split("T")[1].split(":")[0];return c===a?l===t?o-n>12?r.a.createElement(r.a.Fragment,null,"Today",", ",r.a.createElement(ce.a,{format:"HH:MM"},e.children)):r.a.createElement(ce.a,{fromNow:!0},e.children):l===t-1?r.a.createElement(r.a.Fragment,null,"Yesterday",", ",r.a.createElement(ce.a,{format:"HH:MM"},e.children)):r.a.createElement(ce.a,{format:"DD MMMM, HH:MM "},e.children):r.a.createElement(ce.a,{format:"DD MMMM YYYY, "},e.children)},ie=function(e){return null!==r.a.useContext(S).token?e.children:r.a.createElement(s.a,{to:"/login"})};function se(){var e=Object(N.a)(["\n    query{\n        getUserOrders{\n            orders\n            {\n                _id\n                product\n                {\n                    title\n                    _id\n                }\n                totalPrice\n                quantity\n                date\n                status\n            }\n        }\n    }\n\n"]);return se=function(){return e},e}var me=q()(se()),ue=function(){var e=Object(n.useContext)(S),t=r.a.useState(null),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(U.c)(me),s=o.loading,d=o.data,E=r.a.useState(1),g=Object(p.a)(E,2),f=g[0],b=g[1];return r.a.useEffect((function(){s||(c(d.getUserOrders.orders),e.setOrders(d.getUserOrders.orders))}),[s,d,e]),r.a.useEffect((function(){switch(f){case 2:c(e.orders.filter((function(e){return"pended"===e.status})));break;case 3:c(e.orders.filter((function(e){return"passed"===e.status})));break;case 4:c(e.orders.filter((function(e){return"canceled"===e.status})));break;default:c(e.orders)}}),[f,e.orders]),s?r.a.createElement(B,null):r.a.createElement(ie,null,r.a.createElement("div",null,r.a.createElement(m.a,{style:{marginTop:"100px",marginBottom:"100px"}},r.a.createElement(u.a,{style:{marginTop:"20px",marginBottom:"40px"}},r.a.createElement(W.a,{xs:"12",style:{display:"flex",justifyContent:"center"}},r.a.createElement(k.a,{color:1===f?"info":null,style:{margin:"20px"},onClick:function(){b(1)}},"All Orders"),r.a.createElement(k.a,{color:2===f?"info":null,style:{margin:"20px"},onClick:function(){b(2)}},"Pended Orders"),r.a.createElement(k.a,{color:3===f?"info":null,style:{margin:"20px"},onClick:function(){b(3)}},"Passed Orders"),r.a.createElement(k.a,{color:4===f?"info":null,style:{margin:"20px"},onClick:function(){b(4)}},"Canceled Orders"))),r.a.createElement(re.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Total price"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,l.slice(0).reverse().map((function(e,t){return r.a.createElement("tr",{key:e._id},r.a.createElement("th",{scope:"row"},r.a.createElement(i.b,{to:"/order/".concat(e._id)},r.a.createElement("strong",{style:{fontWeight:"bold"}},l.length-t))),r.a.createElement("td",null,r.a.createElement(oe,null,e.date)),r.a.createElement("td",null,r.a.createElement(i.b,{to:"/product/".concat(e.product._id)},r.a.createElement("strong",{style:{fontWeight:"bold"}},e.product.title))),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.totalPrice," $"),r.a.createElement("td",null,"passed"===e.status?r.a.createElement("i",{className:"fa fa-check-circle-o",style:{fontSize:"26px",fontWeight:"bold",color:"green"}}):"pended"===e.status?r.a.createElement("i",{className:"fa fa-times-circle-o",style:{fontSize:"26px",fontWeight:"bold",color:"yellow"}}):r.a.createElement("i",{className:"fa fa-ban",style:{fontSize:"26px",fontWeight:"bold",color:"red"}})))})))))))},de=a(75),pe=a.n(de),Ee=function(e){return r.a.createElement(u.a,{style:{paddingTop:"10px",paddingBottom:"10px",display:"flex",alignItems:"center"}},r.a.createElement(W.a,{xs:"3"},r.a.createElement("h4",{style:{margin:0,fontWeight:"bold",fontSize:"18px"}},e.name,":")),r.a.createElement(W.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement("h5",{style:{margin:0,fontWeight:"400"}},e.icon&&r.a.createElement("i",{className:e.icon,style:{fontSize:"26px",fontWeight:"bold",color:e.iconColor,marginRight:"10px"}}),e.value)))};function ge(){var e=Object(N.a)(["\n\n    query($orderId:String!)\n    {\n        getOrder(orderId:$orderId)\n        {\n            status\n            order\n            {\n                _id\n                date\n                status\n                quantity\n                product\n                    {\n                        title\n                        imageUrl\n                        price\n                    }\n            }\n        }\n    }\n\n"]);return ge=function(){return e},e}function fe(){var e=Object(N.a)(["\n\n    mutation($orderId:String!,$quantity:Int!,$status:String!){\n        updateOrder(orderId:$orderId,quantity:$quantity,status:$status){\n            order{\n                _id\n            }\n        }\n    }\n"]);return fe=function(){return e},e}var be=q()(fe()),ye=q()(ge()),he=function(e){var t=r.a.useState(null),a=Object(p.a)(t,2),n=a[0],l=a[1];Object(U.c)(ye,{variables:{orderId:e.match.params.id},onCompleted:function(e){console.log(e.getOrder),l(e.getOrder.order)}});var c=r.a.useState(!1),i=Object(p.a)(c,2),s=i[0],d=i[1],E=r.a.useState(1),g=Object(p.a)(E,2),f=g[0],b=g[1],y=Object(U.b)(be,{onCompleted:function(){l(Object(o.a)(Object(o.a)({},n),{},{quantity:f}))},variables:{orderId:e.match.params.id,quantity:f,status:null===n||void 0===n?void 0:n.status}}),h=Object(p.a)(y,1)[0],v=Object(U.b)(be,{onCompleted:function(){l(Object(o.a)(Object(o.a)({},n),{},{status:"canceled"}))},variables:{orderId:e.match.params.id,quantity:f,status:"canceled"}}),x=Object(p.a)(v,1)[0],O=Object(U.b)(be,{onCompleted:function(){l(Object(o.a)(Object(o.a)({},n),{},{status:"passed"}))},variables:{orderId:e.match.params.id,quantity:f,status:"passed"}}),j=Object(p.a)(O,1)[0];return n?r.a.createElement(ie,null,r.a.createElement(m.a,{className:pe.a.mainContainer},r.a.createElement("h4",{style:{marginBottom:"20px",fontWeight:"bold",color:"black"}},"Command: #",n._id),r.a.createElement(u.a,{className:pe.a.orderContainer},r.a.createElement(W.a,{xs:"4"},r.a.createElement("img",{width:"200",src:n.product.imageUrl,alt:"img"})),r.a.createElement(W.a,null,r.a.createElement(Ee,{name:"Product",value:n.product.title}),r.a.createElement(Ee,{name:"Order date",value:r.a.createElement(oe,null,n.date)}),r.a.createElement(u.a,{style:{paddingTop:"10px",paddingBottom:"10px",display:"flex",alignItems:"center"}},r.a.createElement(W.a,{xs:"3"},r.a.createElement("h4",{style:{margin:0,fontWeight:"bold",fontSize:"18px"}},"Quantity:")),r.a.createElement(W.a,{style:{display:"flex",justifyContent:"flex-end"}},s?r.a.createElement(A.a,{style:{width:"16%"},type:"number",min:1,defaultValue:n.quantity,onChange:function(e){b(+e.target.value)}}):r.a.createElement("h5",{style:{margin:0,fontWeight:"400"}},n.quantity)),r.a.createElement(W.a,{xs:"4"},s&&r.a.createElement("div",null,r.a.createElement(k.a,{color:"info",style:{margin:"10px"},onClick:function(){return h(),void d(!1)}},"Save"),r.a.createElement(k.a,{style:{margin:"10px"},onClick:function(){b(n.quantity),d(!1)}},"Cancel")))),r.a.createElement(Ee,{name:"Total price",value:n.product.price*f+"$"}),"passed"===n.status?r.a.createElement(Ee,{name:"Status",value:"Command Passed",icon:"fa fa-check-circle-o",iconColor:"green"}):"pended"===n.status?r.a.createElement(Ee,{name:"Status",value:"Command Pended",icon:"fa fa-times-circle-o",iconColor:"yellow"}):r.a.createElement(Ee,{name:"Status",value:"Command Canceled",icon:"fa fa-ban",iconColor:"red"}))),"pended"===n.status&&r.a.createElement(u.a,{style:{marginTop:"30px"}},r.a.createElement(W.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(k.a,{color:"danger",style:{margin:"20px"},onClick:function(){x()}},"Cancel"),r.a.createElement(k.a,{color:"info",style:{margin:"20px"},onClick:function(){return d(!s)}},"Edit"),r.a.createElement(k.a,{color:"success",style:{margin:"20px"},onClick:function(){j()}},"Validate"))))):r.a.createElement(B,null)};var ve=function(){return r.a.createElement("div",{className:"section-dark ",style:{height:"350px",backgroundPositionX:"-50px",backgroundPositionY:"-150px",backgroundImage:"url("+a(167)+")"}})},xe=a(27);function Oe(){var e=Object(N.a)(["\nquery{\n  getConnectedUser{\n    user{\n      _id\n      username\n      email\n      phone\n      address\n    }   \n  }\n}\n"]);return Oe=function(){return e},e}var je=q()(Oe()),Ce=function(e){var t=r.a.useState(localStorage.getItem("token")),a=Object(p.a)(t,2),n=a[0],l=a[1],c=Object(U.c)(je),o=c.data,i=c.loading,s=r.a.useState([]),m=Object(p.a)(s,2),u=m[0],d=m[1],E=r.a.useState(null),g=Object(p.a)(E,2),f=g[0],b=g[1];r.a.useEffect((function(){i||b(o.getConnectedUser.user)}),[i,o]);return r.a.createElement(S.Provider,{value:{token:n,setToken:l,user:f,setUser:b,disconnectUser:function(){b(null),l(null),localStorage.removeItem("token")},setOrders:d,orders:u}},e.children)},ke=a(103),Se=a(188),we=a(189),Ie=a(113),Pe=a(112),Ne=a(76),_e=a.n(Ne);function Te(){var e=Object(N.a)(["\n    mutation($productId:String!,$quantity:Int!)\n    {\n        orderProduct(productId:$productId,quantity:$quantity)\n        {\n            order\n            {\n                _id\n                product\n                {\n                    title\n                    _id\n                }\n                totalPrice\n                quantity\n                date\n                status\n            }\n        }\n    }\n"]);return Te=function(){return e},e}function Ue(){var e=Object(N.a)(["\n    query($productId:String!)\n    {\n      getProduct(productId:$productId)\n        {\n            product\n            {\n                title\n                _id\n                description\n                price\n                imageUrl\n            }\n        }\n    }\n\n"]);return Ue=function(){return e},e}var $e=q()(Ue()),qe=q()(Te()),Be=function(e){var t=r.a.useContext(S),a=Object(s.g)(),n=r.a.useState(1),l=Object(p.a)(n,2),c=l[0],o=l[1],i=Object(U.c)($e,{variables:{productId:e.match.params.id}}),d=i.data,E=i.loading,g=Object(U.b)(qe,{update:function(e,n){t.setOrders([].concat(Object(Pe.a)(t.orders),[n.data.orderProduct.order])),a.push("/order/".concat(n.data.orderProduct.order._id))},onError:function(e){console.log(e)},variables:{productId:e.match.params.id,quantity:c}}),f=Object(p.a)(g,1)[0];return E?r.a.createElement(B,null):r.a.createElement(m.a,{className:_e.a.mainContainer},r.a.createElement("h4",{style:{marginBottom:"20px",fontWeight:"bold",color:"black"}},"Purchase: #",e.match.params.id),r.a.createElement(u.a,{className:_e.a.orderContainer},r.a.createElement(W.a,{xs:"4"},r.a.createElement("img",{width:"200",src:d.getProduct.product.imageUrl,alt:"img"})),r.a.createElement(W.a,null,r.a.createElement(Ee,{name:"Product",value:d.getProduct.product.title}),r.a.createElement(u.a,{style:{paddingTop:"10px",paddingBottom:"10px",display:"flex",alignItems:"center"}},r.a.createElement(W.a,{xs:"3"},r.a.createElement("h4",{style:{margin:0,fontWeight:"bold",fontSize:"18px"}},"Quantity:")),r.a.createElement(W.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(A.a,{type:"number",onChange:function(e){o(+e.target.value)},style:{margin:0,fontWeight:"400",width:"15%"},defaultValue:c,min:1}))),r.a.createElement(Ee,{name:"Total Price",value:c*d.getProduct.product.price+"$"}))),r.a.createElement(u.a,{style:{marginTop:"30px"}},r.a.createElement(W.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(k.a,{color:"danger",style:{margin:"20px"}},"Cancel"),r.a.createElement(k.a,{color:"success",style:{margin:"20px"},onClick:function(){t.token||a.push("/login/"),f()}},"Validate"))))},We=Object(ke.a)({uri:"http://localhost:5000/graphql"}),ze=Object(Ie.a)((function(e,t){var a=t.headers,n=localStorage.getItem("token");return{headers:Object(o.a)(Object(o.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),He=new Se.a({link:ze.concat(We),cache:new we.a}),De=function(){return r.a.createElement(xe.a,{client:He},r.a.createElement(Ce,null,r.a.createElement(i.a,null,r.a.createElement(P,null),r.a.createElement(ve,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home",component:F}),r.a.createElement(s.b,{path:"/login",component:J}),r.a.createElement(s.b,{path:"/signup",component:G}),r.a.createElement(s.b,{path:"/product/:id",component:K}),r.a.createElement(s.b,{path:"/profile",component:ne}),r.a.createElement(s.b,{path:"/orders",component:ue}),r.a.createElement(s.b,{path:"/purchase/:id",component:Be}),r.a.createElement(s.b,{path:"/order/:id",component:he}),r.a.createElement(s.a,{to:"/home"}))),r.a.createElement(d,null)))};a(169),a(170),a(171);c.a.render(r.a.createElement(De,null),document.getElementById("root"))},74:function(e,t,a){e.exports={cardProduct:"ProductCard_cardProduct__2zgks",mainHome:"ProductCard_mainHome__2NEwd",productImage:"ProductCard_productImage__3gZIb"}},75:function(e,t,a){e.exports={mainContainer:"Order_mainContainer__2vyiH",orderContainer:"Order_orderContainer__1vS5c"}},76:function(e,t,a){e.exports={mainContainer:"Order_mainContainer__1QGTg",orderContainer:"Order_orderContainer__3q71X"}}},[[115,1,2]]]);
//# sourceMappingURL=main.397ffb24.chunk.js.map