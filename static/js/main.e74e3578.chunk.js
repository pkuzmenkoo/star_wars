(this.webpackJsonpstar_wars=this.webpackJsonpstar_wars||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(35),n=a.n(c),s=(a(101),a(10)),i=a(27),o=a(34),u=a(8),l=a.n(u),h=a(17),j=a(33),d=a(70),b=function(){var e=Object(h.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://swapi.dev/api/").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("people/?page=1").then((function(e){return e}));case 2:t=e.sent,a=Object(d.a)(t.results);case 4:if(null===t.next){e.next=12;break}return r=t.next.slice(21),e.next=8,b(r).then((function(e){return e}));case 8:t=e.sent,a=[].concat(Object(d.a)(a),Object(d.a)(t.results)),e.next=4;break;case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(a(103),a(2)),x=function(e){var t=e.selectedCharacter,a=e.clearSelectCharacter,c=e.correctedUrl,n=Object(r.useState)([]),s=Object(j.a)(n,2),u=s[0],d=s[1],b=function(){var e=Object(h.a)(l.a.mark((function e(){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.films.map(function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c(t));case 2:return a=e.sent,e.abrupt("return",Object(o.a)({},a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.next=5,Promise.all(t.vehicles.map(function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c(t));case 2:return a=e.sent,e.abrupt("return",Object(o.a)({},a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:r=e.sent,n=Object(o.a)(Object(o.a)({},t),{},{films:a,vehicles:r}),d(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){""!==t&&b()}),[t]),Object(O.jsxs)("div",{className:"DetailsCharacters",children:[Object(O.jsx)("h2",{children:"Details:"}),Object(O.jsx)(i.b,{className:"btn btn__close",type:"button",onClick:a,to:"/star_wars/characters",children:"X"}),u!==[]&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Name: ".concat(t.name)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Height: ".concat(t.height)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Mass: ".concat(t.mass)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Hair color: ".concat(t.hair_color)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Skin color: ".concat(t.skin_color)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Eye color: ".concat(t.eye_color)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Birth year: ".concat(t.birth_year)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Gender: ".concat(t.gender)}),Object(O.jsx)("div",{className:"DetailsCharacters__info",children:"Home World: ".concat(t.homeworld.name)}),Object(O.jsxs)("div",{className:"DetailsCharacters__info",children:["Films: ",u.films?u.films.map((function(e){return Object(O.jsx)("div",{children:"".concat(e.title)},e.title)})):Object(O.jsx)("div",{children:"Loading"})]}),Object(O.jsxs)("div",{className:"DetailsCharacters__info",children:[t.vehicles.length>0&&Object(O.jsx)("span",{children:"Vehicles:"}),u.vehicles?u.vehicles.map((function(e){return Object(O.jsx)("div",{children:"".concat(e.name," - ").concat(e.model)},e.name)})):Object(O.jsx)("span",{children:"Loading"})]})]})]})},m=a(130),v=a(128),_=a(127),w=a(129),N=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(v.a,{active:!0,children:Object(O.jsx)(_.a,{children:"Loading"})}),Object(O.jsx)(w.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]})})},C=(a(111),a(112),function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),u=Object(j.a)(n,2),d=u[0],b=u[1],m=Object(r.useState)(""),v=Object(j.a)(m,2),_=v[0],w=v[1],C=Object(r.useState)([]),g=Object(j.a)(C,2),k=g[0],y=g[1],D=Object(r.useState)(!1),S=Object(j.a)(D,2),L=S[0],E=S[1],B=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,p();case 3:t=e.sent,c(t),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){return e.replace("http","https")},H=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,Promise.all(a.map(function(){var e=Object(h.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(F(t.homeworld));case 2:return a=e.sent,e.abrupt("return",Object(o.a)(Object(o.a)({},t),{},{homeworld:a}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:t=e.sent,y(t),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){B()}),[]),Object(r.useEffect)((function(){H()}),[a]),Object(O.jsxs)("div",{className:"CharactersList",children:[Object(O.jsx)("input",{type:"text",className:"search",placeholder:"Input character name",value:d,onChange:function(e){var t=e.target;return b(t.value)}}),Object(O.jsx)("h2",{className:"CharactersList__title",children:"Characters:"}),L?Object(O.jsx)(N,{}):Object(O.jsx)("ul",{className:"CharactersList__list",children:k.filter((function(e){return e.name.includes(d)})).map((function(e){var t=e.name,a=e.gender,r=e.homeworld,c=e.url;return Object(O.jsxs)("li",{className:"CharactersList__item",children:[Object(O.jsx)("div",{children:"Name: ".concat(t)}),Object(O.jsx)("div",{children:"Gender: ".concat(a)}),Object(O.jsx)("div",{children:"Home World: ".concat(r.name)}),Object(O.jsx)(i.b,{className:"btn",to:"/star_wars/characters/".concat(t),name:t,onClick:function(e){var t=e.target;w(t.name)},children:"Show Details"})]},c)}))}),Object(O.jsx)(s.a,{path:"/star_wars/characters/".concat(_),children:_&&Object(O.jsx)(x,{selectedCharacter:k.find((function(e){return e.name===_})),clearSelectCharacter:function(){return w({})},correctedUrl:F})})]})}),g=(a(113),function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsxs)(s.a,{path:"/star_wars/home",children:[Object(O.jsx)("button",{onClick:function(){FB.getLoginStatus((function(e){e&&"connected"===e.status&&FB.logout((function(e){console.log("bye")}))}))},children:"Log out"}),Object(O.jsx)("h1",{className:"main_title",children:"Star Wars"}),Object(O.jsx)("nav",{className:"menu",children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/star_wars/characters",className:"btn",children:"Characters"})})})})]}),Object(O.jsx)(s.a,{path:"/star_wars/characters",children:Object(O.jsx)(C,{})}),Object(O.jsx)(s.a,{path:"/star_wars",exact:!0,children:Object(O.jsx)("div",{className:"fb-login-button","data-width":"","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false"})})]})})});n.a.render(Object(O.jsx)(i.a,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.e74e3578.chunk.js.map