(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),a=c.n(r),i=(c(13),c(8)),s=c(4),j=Object(n.createContext)(),d=c(0),o=function(){var e=Object(n.useContext)(j),t=e.cities;e.addCity;return Object(d.jsxs)("table",{className:"city-list",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"City"}),Object(d.jsx)("th",{children:"Temperature"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.temperature})]})}))})]})},u=function(){var e=Object(n.useContext)(j).addCity,t=Object(n.useState)(""),c=Object(s.a)(t,2),r=c[0],a=c[1];return Object(d.jsxs)("div",{className:"add-city-form",children:[Object(d.jsx)("input",{className:"input",onChange:function(e){return a(e.target.value)},value:r}),Object(d.jsx)("button",{className:"input",onClick:function(t){var c="http://api.weatherstack.com/current?access_key=".concat("9c7c6bb649f116a9ba16f7930b195075","&query=").concat(r);console.log(c),fetch(c).then((function(e){return e.json()})).then((function(t){e(r,t.current.temperature),a("")}))},children:"Add"})]})},b=c(7),l=function(){var e=Object(n.useContext)(j),t=e.cities;e.addCity;if(0===t.length)return Object(d.jsx)("div",{children:"Add some cities to view their average temperatures."});var c,r=0,a=Object(b.a)(t);try{for(a.s();!(c=a.n()).done;){r+=c.value.temperature}}catch(s){a.e(s)}finally{a.f()}var i=r/t.length;return Object(d.jsxs)("div",{children:["The average is ",Object(d.jsx)("b",{children:i.toFixed(2)})," degrees Fahrenheit."]})};var h=function(){var e=Object(n.useState)([{name:"Berlin",temperature:7}]),t=Object(s.a)(e,2),c=t[0],r=t[1];return console.log(c),Object(d.jsx)(j.Provider,{value:{cities:c,addCity:function(e,t){r([].concat(Object(i.a)(c),[{name:e,temperature:t}]))}},children:Object(d.jsxs)("div",{className:"city-overview",children:[Object(d.jsx)("h2",{children:"Multi-Weather App"}),Object(d.jsx)(o,{}),Object(d.jsx)(u,{}),Object(d.jsx)(l,{})]})})};a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0a2d09e9.chunk.js.map