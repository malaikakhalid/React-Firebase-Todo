(this.webpackJsonpmy_todo=this.webpackJsonpmy_todo||[]).push([[0],{37:function(e,t,a){},55:function(e,t,a){e.exports=a(77)},60:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),i=(a(60),a(18)),l=a(103),d=a(107),m=a(106),s=a(104),u=(a(37),a(22)),p=a.n(u),f=p.a.initializeApp({apiKey:"AIzaSyAL7Nl1uGwnVVCDYcnbOyLUeCbyiamSSqg",authDomain:"todo-3023d.firebaseapp.com",databaseURL:"https://todo-3023d.firebaseio.com",projectId:"todo-3023d",storageBucket:"todo-3023d.appspot.com",messagingSenderId:"317723274136",appId:"1:317723274136:web:6cf7df4e2475323716d9ed",measurementId:"G-2EHYMLC9HJ"}).firestore(),E=a(97),b=a(105),g=a(100),h=a(101),v=a(108),y=a(102),S=a(50),w=a.n(S),C=a(51),O=a.n(C),k=Object(E.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},margin:{margin:e.spacing(1)}}}));var j=function(e){var t=k(),a=Object(n.useState)(!1),r=Object(i.a)(a,2),c=r[0],l=r[1],d=Object(n.useState)(""),m=Object(i.a)(d,2),s=m[0],u=m[1];return o.a.createElement("div",null,o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{open:c,onClose:function(e){return l(!1)}},o.a.createElement("div",{className:t.paper},o.a.createElement("h1",null,"I am a modal"),o.a.createElement("input",{value:s,placeholder:e.todo.text,onChange:function(e){return u(e.target.value)}}),o.a.createElement("button",{onClick:function(){f.collection("todos").doc(e.todo.id).set({text:s,timestamp:p.a.firestore.FieldValue.serverTimestamp()},{merge:!0}),l(!1)}},"Update"),o.a.createElement("button",{onClick:function(e){return l(!1)}},"Cancel"))),o.a.createElement(g.a,{className:"todo__list"},o.a.createElement(h.a,null,o.a.createElement(v.a,{primary:e.todo.text,secondary:"Todos"}),o.a.createElement(y.a,{onClick:function(t){return f.collection("todos").doc(e.todo.id).delete()},className:t.margin},o.a.createElement(w.a,{fontSize:"medium",color:"secondary"})),o.a.createElement(y.a,{onClick:function(e){return l(!0)},className:t.margin},o.a.createElement(O.a,{fontSize:"medium",color:"primary"}))))))};a(76);var x=function(){var e=Object(n.useState)(["abc","def"]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),E=u[0],b=u[1];return Object(n.useEffect)((function(){f.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){console.log(e.docs.map((function(e){return e.data()}))),r(e.docs.map((function(e){return{id:e.id,text:e.data().text}})))}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"TODO APP LIST"),o.a.createElement("form",null,o.a.createElement(l.a,null,o.a.createElement(d.a,{htmlFor:"my-input"},"Add todo here"),o.a.createElement(m.a,{value:E,onChange:function(e){return b(e.target.value)},type:"text"})),o.a.createElement(s.a,{disabled:!E,type:"submit",onClick:function(e){e.preventDefault(),f.collection("todos").add({text:E,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),b("")},variant:"contained",color:"secondary"},"Add Item"," "),o.a.createElement("ul",{className:"li-item"},a.map((function(e){return o.a.createElement(j,{todo:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.baa8f94b.chunk.js.map