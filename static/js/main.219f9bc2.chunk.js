(this["webpackJsonpkalkulator-wydatkow-na-samochod"]=this["webpackJsonpkalkulator-wydatkow-na-samochod"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),o=c(31),s=c.n(o),i=(c(46),c(29)),l=(c(47),c(48),c(30)),r=c(19),u=c(39),d=c(28),j=Object({NODE_ENV:"production",PUBLIC_URL:"/car-payment-calculator",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyABfw0WNsy78vzqxvG3d0opdjtlXm1_9U4",REACT_APP_APP_ID:"1:1026753788642:web:f37719446ccccee4fabcbb",REACT_APP_AUTH_DOMAIN:"car-payment-calculator-291b8.firebaseapp.com",REACT_APP_DATABASE_URL:"https://car-payment-calculator-291b8-default-rtdb.europe-west1.firebasedatabase.app",REACT_APP_MESSAGING_SENDER_ID:"1026753788642",REACT_APP_PROJECT_ID:"car-payment-calculator-291b8",REACT_APP_STORAGE_BUCKET:"car-payment-calculator-291b8.appspot.com"}),b={apiKey:j.REACT_APP_API_KEY,authDomain:j.REACT_APP_AUTH_DOMAIN,databaseURL:j.REACT_APP_DATABASE_URL,projectId:j.REACT_APP_PROJECT_ID,storageBucket:j.REACT_APP_STORAGE_BUCKET,messagingSenderId:j.REACT_APP_MESSAGING_SENDER_ID,appId:j.REACT_APP_APP_ID},O=(Object(u.a)(b),Object(d.a)()),p=c(10),h=c(6),m=Object(n.createContext)(null),x=function(e){var t=e.children,c=Object(n.useState)(),a=Object(p.a)(c,2),o=a[0],s=a[1],i=Object(n.useState)(),l=Object(p.a)(i,2),r=l[0],u=l[1],d=Object(n.useState)(!1),j=Object(p.a)(d,2),b=j[0],O=j[1];return Object(h.jsx)(m.Provider,{value:{list:o,setList:s,user:r,setUser:u,infoShow:b,setInfoShow:O},children:t})},f=function(){var e=Object(n.useContext)(m),t=e.user,c=e.setUser,a=(e.list,e.setList),o=e.setInfoShow,s=new l.a,i=Object(l.b)();i.languageCode="pl";return Object(n.useEffect)((function(){var e=Object(r.c)(O,"/".concat(""));Object(r.b)(e,(function(e){a(e.val())}))}),["",a]),Object(h.jsx)("div",{children:Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("div",{className:"logo",children:"LOGO"}),Object(h.jsx)("h1",{className:"title",children:"Lista wydatk\xf3w na samoch\xf3d"}),Object(h.jsx)("button",{onClick:!0===Boolean(t)?function(){Object(l.d)(i).then((function(e){console.log("Wylogowano"),c()})).catch((function(e){console.warn(e)}))}:function(){o(!1),Object(l.c)(i,s).then((function(e){console.log("Zalogowano"),c(e.user)})).catch((function(e){console.warn(e)}))},children:!0===Boolean(t)?"Wyloguj":"Zaloguj za pomoc\u0105 Google"})]})})},v=(c(52),function(){var e=Object(n.useContext)(m).user;return Object(h.jsx)("menu",{className:"menu",children:Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("ul",{children:["  ",Object(h.jsx)("li",{className:"list",children:Object(h.jsx)(i.b,{className:"link",to:"/",children:"Strona g\u0142\xf3wna"})}),!0===Boolean(e)?Object(h.jsx)("li",{className:"list",children:Object(h.jsx)(i.b,{className:"link",to:"/expenses",children:"Wdatki"})}):null]}),"  "]})})}),N=c(11),C=c(41),E=(c(57),function(){var e=Object(n.useContext)(m),t=e.user,c=e.infoShow,a=e.setInfoShow,o=Object(n.useState)(Number("")),s=Object(p.a)(o,2),i=s[0],l=s[1],r=Object(n.useState)(""),u=Object(p.a)(r,2),j=u[0],b=u[1],x=Object(n.useState)(""),f=Object(p.a)(x,2),v=f[0],N=f[1],E=Object(n.useState)(""),A=Object(p.a)(E,2),_=A[0],S=A[1],g=Object(C.a)(),P=function(){l(Number("")),b(""),N(""),S("")};return Object(h.jsxs)("section",{className:"divForm",children:[!0===c?Object(h.jsx)("p",{className:"infoShowText",children:"Musisz si\u0119 zaogowa\u0107 aby doda\u0107 sw\xf3j wydatek!"}):null,Object(h.jsxs)("form",{className:"form",method:"post",onSubmit:function(e){e.preventDefault(),!0===Boolean(t)?function(e,c,n,a){Object(d.c)(Object(d.b)(O,"/".concat(null===t||void 0===t?void 0:t.uid,"/").concat(g)),{id:g,price:Number(e),productName:c,date:n,carBrand:a,createDate:(new Date).toUTCString()})}(i,j,v,_):a(!0),P()},children:[Object(h.jsxs)("label",{className:"label label1",children:["Cena:",Object(h.jsx)("input",{onChange:function(e){l(null===e||void 0===e?void 0:e.target.value)},type:"number",value:0===i?"":i,placeholder:"cena za rzeczy... np: 50 z\u0142",required:!0})]}),Object(h.jsxs)("label",{className:"label label2",children:["Rzecz:",Object(h.jsx)("input",{onChange:function(e){b(null===e||void 0===e?void 0:e.target.value)},type:"text",value:j,placeholder:"Zakup... np: Paliwo",required:!0})]}),Object(h.jsxs)("label",{className:"label label3",children:["Data:",Object(h.jsx)("input",{onChange:function(e){N(null===e||void 0===e?void 0:e.target.value)},type:"date",value:v,required:!0})]}),Object(h.jsxs)("label",{className:"label label4",children:["Auto:",Object(h.jsxs)("select",{onChange:function(e){S(e.target.value)},name:"auto",id:"auto",value:_,required:"none"===_,children:[Object(h.jsx)("option",{value:"none",children:" - Wybierz -"}),Object(h.jsx)("option",{value:"ford",children:"Ford"}),Object(h.jsx)("option",{value:"hyundai",children:"Hyundai"}),Object(h.jsx)("option",{value:"volkswagen",children:"Volkswagen"})]})]}),Object(h.jsx)("button",{type:"submit",className:"submitBtn",children:"Zapisz"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),P(),console.log("reset")},className:"btn",type:"button",children:"Anuluj"})]})]})}),A=(c(58),c(59),function(e){var t=e.children,c=e.isOpen,a=e.handleOnClose,o=e.shouldBeCloseOnOutsideClick,i=Object(n.useRef)(null),l=Object(n.useRef)(null);Object(n.useEffect)((function(){if(i.current){var e=i.current;c?(l.current=document.activeElement,e.showModal()):l.current&&(e.close(),l.current.focus())}}),[c]),Object(n.useEffect)((function(){var e=i.current,t=function(e){e.preventDefault(),a()};return e.addEventListener("cancel",t),function(){e.removeEventListener("cancel",t)}}),[a]);return s.a.createPortal(Object(h.jsx)("dialog",{className:"modal",ref:i,onClick:function(e){var t=e.target,c=i.current;o&&t===c&&a()},children:t}),document.body)}),_=(c(60),function(e){var t=e.isOpenPopup,c=e.hidePopup,a=e.id,o=e.priceFromExpensesList,s=e.dateFromExpensesList,i=e.carBrandFromExpensesList,l=e.productNameFromExpensesList,u=e.createDateFromExpensesList,d=Object(n.useContext)(m),j=d.list,b=d.user,x=[];for(var f in j["".concat(b.uid)])x.push(f);var v=Object(n.useState)(Number(o)),N=Object(p.a)(v,2),C=N[0],E=N[1],_=Object(n.useState)(l),S=Object(p.a)(_,2),g=S[0],P=S[1],y=Object(n.useState)(s),w=Object(p.a)(y,2),T=w[0],k=w[1],D=Object(n.useState)(i),z=Object(p.a)(D,2),R=z[0],L=z[1],B=Object(n.useState)(!1),I=Object(p.a)(B,2),F=I[0],U=I[1];return Object(h.jsx)(A,{isOpen:t,handleOnClose:c,shouldBeCloseOnOutsideClick:!1,children:Object(h.jsxs)("div",{className:"divEdit",children:[!0===F?Object(h.jsx)("p",{className:"warningText",children:"nie mo\u017cesz zapisa\u0107 nie zmieniaj\u0105c \u017cadnej warto\u015bci"}):null,Object(h.jsxs)("form",{className:"formEdit",method:"post",onSubmit:function(e){0===C&&""===g&&""===T&&""===R?U(!0):(c(),U(!1),x.map((function(e){return j["".concat(b.uid)]["".concat(e)].id===a&&Object(r.e)(Object(r.c)(O,"/".concat(b.uid,"/").concat(a)),{price:Number(C),productName:g,createDate:u,date:T,id:a,carBrand:R,editDate:(new Date).toUTCString()}),null}))),e.preventDefault()},children:[Object(h.jsxs)("label",{className:"label",children:["Cena:",Object(h.jsx)("input",{onChange:function(e){E(null===e||void 0===e?void 0:e.target.value)},type:"number",value:0===C?"":C,placeholder:"cena za rzeczy... np: 50 z\u0142"})]}),Object(h.jsxs)("label",{className:"label",children:["Rzecz:",Object(h.jsx)("input",{onChange:function(e){P(null===e||void 0===e?void 0:e.target.value)},type:"text",value:g,placeholder:"Zakup... np: Paliwo"})]}),Object(h.jsxs)("label",{className:"label",children:["Data:",Object(h.jsx)("input",{onChange:function(e){k(null===e||void 0===e?void 0:e.target.value)},type:"date",value:T})]}),Object(h.jsxs)("label",{className:"label",children:["Auto:",Object(h.jsxs)("select",{onChange:function(e){L(null===e||void 0===e?void 0:e.target.value)},value:R,children:[Object(h.jsx)("option",{value:"none",children:" - Wybierz -"}),Object(h.jsx)("option",{value:"ford",children:"Ford"}),Object(h.jsx)("option",{value:"hyundai",children:"Hyundai"}),Object(h.jsx)("option",{value:"volkswagen",children:"Volkswagen"})]})]}),Object(h.jsx)("button",{className:"btnSubmit",type:"submit",children:"Zapisz"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),U(!1),c()},className:"btnCancel",type:"button",children:"Anuluj"})]})]})})}),S=function(e){var t=e.date,c=void 0===t?"2021-07-01":t,a=e.productName,o=void 0===a?"Akumulator":a,s=e.price,i=void 0===s?50:s,l=e.carBrand,u=void 0===l?"Ford":l,d=e.id,j=e.createDate,b=Object(n.useState)(!1),x=Object(p.a)(b,2),f=x[0],v=x[1],N=Object(n.useContext)(m),C=N.list,E=N.user,A=[];for(var S in C["".concat(E.uid)])A.push(S);return Object(h.jsx)("li",{className:"liList",children:Object(h.jsxs)("article",{className:"expenseList",children:[Object(h.jsx)("h3",{children:"Zakupy dotycz\u0105ce utrzymania samochodu"}),Object(h.jsx)("p",{children:"Zakupiony produkt: ".concat(o)}),Object(h.jsx)("p",{children:"Przeznaczony do samochodu: ".concat(u)}),Object(h.jsx)("p",{children:"Kwota zakupu: ".concat(i,"z\u0142")}),Object(h.jsx)("p",{children:"Zakupiony w dniu: ".concat(c)}),Object(h.jsx)("button",{onClick:function(){A.map((function(e){if(C["".concat(E.uid)]["".concat(e)].id===d){var t=Object(r.c)(O,"/".concat(E.uid,"/").concat(d));Object(r.d)(t)}return null}))},className:"btn",children:"usu\u0144"}),Object(h.jsx)("button",{onClick:function(){v(!0)},className:"btn",children:"edytuj"}),Object(h.jsx)(_,{id:d,isOpenPopup:f,hidePopup:function(e){e&&e.preventDefault(),v(!1)},priceFromExpensesList:i,dateFromExpensesList:c,carBrandFromExpensesList:u,productNameFromExpensesList:o,createDateFromExpensesList:j},d)]})})},g=(c(61),function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),c=t[0],a=t[1],o=Object(n.useContext)(m),s=o.list,i=o.user,l=Object.entries(s["".concat(i.uid)]),r=[];l.forEach((function(e){"productName"!==c?r.push([e[1]["".concat(c)],e[1].id]):r.push([String(e[1].productName).toLowerCase(),e[1].id])}));var u=r.sort().sort((function(e,t){return e[0]-t[0]})).map((function(e){return Object(h.jsx)(S,{id:s["".concat(i.uid)]["".concat(e[1])].id,date:s["".concat(i.uid)]["".concat(e[1])].date,carBrand:s["".concat(i.uid)]["".concat(e[1])].carBrand,price:Number(s["".concat(i.uid)]["".concat(e[1])].price),productName:s["".concat(i.uid)]["".concat(e[1])].productName,createDate:s["".concat(i.uid)]["".concat(e[1])].createDate},s["".concat(i.uid)]["".concat(e[1])].id)}));return Object(h.jsxs)("section",{className:"sectionExpenses",children:[Object(h.jsx)("ul",{className:"ulExpenses",children:u}),Object(h.jsxs)("div",{className:"expensesCalculating",children:["\u0141\u0105czne wydatki ".concat(function(){var e=0;return r.sort((function(e,t){return e[0]-t[0]})).forEach((function(t){return e+=Number(s["".concat(i.uid)]["".concat(t[1])].price)})),e}()," z\u0142."),Object(h.jsxs)("label",{className:"sort",children:[" Sortuj po:",Object(h.jsxs)("select",{className:"sortSelect",onChange:function(e){a(e.target.value)},value:c,children:[Object(h.jsx)("option",{value:"-",disabled:void 0!==c,children:"-Wybierz-"}),Object(h.jsx)("option",{value:"price",children:"Cena"}),Object(h.jsx)("option",{value:"carBrand",children:"smoch\xf3d"}),Object(h.jsx)("option",{value:"date",children:"data"}),Object(h.jsx)("option",{value:"productName",children:"produkt"})]})]})]})]})}),P=(c(62),function(){var e=Object(n.useContext)(m).user;return Object(h.jsx)("main",{className:"main",children:Object(h.jsxs)(N.d,{children:[Object(h.jsx)(N.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(E,{})}}),!1===Boolean(e)?Object(h.jsx)(N.a,{from:"/expenses",to:"/"}):Object(h.jsx)(N.b,{exact:!0,path:"/expenses",render:function(){return Object(h.jsx)(g,{})}})]})})}),y=function(){return Object(h.jsxs)(x,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(v,{}),Object(h.jsx)(P,{})]})})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.219f9bc2.chunk.js.map