(this.webpackJsonpstar_wars=this.webpackJsonpstar_wars||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(35),n=a.n(r),s=(a(101),a(27)),i=a(10),o=a(34),u=a(8),l=a.n(u),h=a(17),j=a(33),d=a(70),b=function(){var e=Object(h.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://swapi.dev/api/").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("people/?page=1").then((function(e){return e}));case 2:t=e.sent,a=Object(d.a)(t.results);case 4:if(null===t.next){e.next=12;break}return c=t.next.slice(21),e.next=8,b(c).then((function(e){return e}));case 8:t=e.sent,a=[].concat(Object(d.a)(a),Object(d.a)(t.results)),e.next=4;break;case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(a(103),a(2)),x=function(e){var t=e.selectedCharacter,a=e.clearSelectCharacter,r=e.correctedUrl,n=Object(c.useState)([]),i=Object(j.a)(n,2),u=i[0],d=i[1],b=function(){var e=Object(h.a)(l.a.mark((function e(){var a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.films.map(function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(r(t));case 2:return a=e.sent,e.abrupt("return",Object(o.a)({},a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.next=5,Promise.all(t.vehicles.map(function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(r(t));case 2:return a=e.sent,e.abrupt("return",Object(o.a)({},a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:c=e.sent,n=Object(o.a)(Object(o.a)({},t),{},{films:a,vehicles:c}),console.log(t),d(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){""!==t&&b()}),[t]),Object(O.jsxs)("div",{className:"DetailsCharacters",children:[Object(O.jsx)("h2",{children:"Details:"}),Object(O.jsx)(s.b,{className:"btn btn__close",type:"button",onClick:a,to:"/characters",children:"X"}),u!==[]&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Name: ".concat(t.name)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Height: ".concat(t.height)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Mass: ".concat(t.mass)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Hair color: ".concat(t.hair_color)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Skin color: ".concat(t.skin_color)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Eye color: ".concat(t.eye_color)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Birth year: ".concat(t.birth_year)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Gender: ".concat(t.gender)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Home World: ".concat(t.homeworld.name)}),Object(O.jsxs)("div",{className:"DetailsCharacters__info",children:["Films: ",u.films?u.films.map((function(e){return Object(O.jsx)("div",{children:"".concat(e.title)},e.title)})):Object(O.jsx)("div",{children:"Loading"})]}),Object(O.jsxs)("div",{className:"DetailsCharacters__info",children:[t.vehicles.length>0&&Object(O.jsx)("span",{children:"Vehicles:"}),u.vehicles?u.vehicles.map((function(e){return Object(O.jsx)("div",{children:"".concat(e.name," - ").concat(e.model)},e.name)})):Object(O.jsx)("span",{children:"Loading"})]})]})]})},m=a(130),v=a(128),_=a(127),w=a(129),N=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(v.a,{active:!0,children:Object(O.jsx)(_.a,{children:"Loading"})}),Object(O.jsx)(w.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]})})},C=(a(111),a(112),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),u=Object(j.a)(n,2),d=u[0],b=u[1],m=Object(c.useState)(""),v=Object(j.a)(m,2),_=v[0],w=v[1],C=Object(c.useState)([]),k=Object(j.a)(C,2),g=k[0],y=k[1],D=Object(c.useState)(!1),S=Object(j.a)(D,2),E=S[0],L=S[1],H=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,p();case 3:t=e.sent,r(t),L(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){return e.replace("http","https")},W=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,Promise.all(a.map(function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(P(t.homeworld));case 2:return a=e.sent,e.abrupt("return",Object(o.a)(Object(o.a)({},t),{},{homeworld:a}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:t=e.sent,y(t),L(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){H()}),[]),Object(c.useEffect)((function(){W()}),[a]),Object(O.jsxs)("div",{className:"CharactersList",children:[Object(O.jsx)("input",{type:"text",className:"search",placeholder:"Input character name",value:d,onChange:function(e){var t=e.target;return b(t.value)}}),Object(O.jsx)("h2",{className:"CharactersList__title",children:"Characters:"}),E?Object(O.jsx)(N,{}):Object(O.jsx)("ul",{className:"CharactersList__list",children:g.filter((function(e){return e.name.includes(d)})).map((function(e){var t=e.name,a=e.gender,c=e.homeworld,r=e.url;return Object(O.jsxs)("li",{className:"CharactersList__item",children:[Object(O.jsx)("div",{children:"Name: ".concat(t)}),Object(O.jsx)("div",{children:"Gender: ".concat(a)}),Object(O.jsx)("div",{children:"Home World: ".concat(c.name)}),Object(O.jsx)(s.b,{className:"btn",to:"/characters/".concat(t),name:t,onClick:function(e){var t=e.target;w(t.name)},children:"Show Details"})]},r)}))}),Object(O.jsx)(i.a,{path:"/characters/".concat(_),children:_&&Object(O.jsx)(x,{selectedCharacter:g.find((function(e){return e.name===_})),clearSelectCharacter:function(){return w({})},correctedUrl:P})})]})}),k=(a(113),function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("h1",{className:"main_title",children:"Star Wars"}),Object(O.jsx)("nav",{className:"menu",children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/characters",className:"btn",children:"Characters"})})})}),Object(O.jsx)("div",{className:"fb-login-button","data-width":"","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false"}),Object(O.jsx)(i.a,{path:"/characters",children:Object(O.jsx)(C,{})})]})})});n.a.render(Object(O.jsx)(s.a,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.bfceb9fd.chunk.js.map