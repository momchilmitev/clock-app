(this["webpackJsonpclock-app"]=this["webpackJsonpclock-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=(c(12),c(2)),o=(c(13),c(14),c(3)),l=c.n(o),j=c(4),u=c(5),b=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.quotable.io/random");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(Object(j.a)({},c));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),[c,a]},f=c(0),p=function(){var e=b(),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(f.jsxs)("section",{className:"quote",children:[Object(f.jsxs)("div",{className:"quote__action",children:[Object(f.jsx)("p",{className:"quote__content",children:c?c.content:null}),Object(f.jsx)("span",{className:"btn--load",onClick:n})]}),Object(f.jsx)("p",{className:"quote__author",children:c?c.author:null})]})},d=(c(17),c.p+"static/media/icon-sun.cb7a2aac.svg"),m=c.p+"static/media/icon-moon.83b9f0db.svg",O=function(e){var t=e.setNight,c=e.city,s=e.countryCode,a=e.timeType,i=Object(n.useState)(new Date),o=Object(r.a)(i,2),l=o[0],j=o[1],u=Object(n.useState)("morning"),b=Object(r.a)(u,2),p=b[0],O=b[1];return Object(n.useEffect)((function(){var e=setInterval((function(){j(new Date),l.getHours()>5&&l.getHours()<12?O("morning"):l.getHours()>=12&&l.getHours()<18?O("afternoon"):(O("evening"),t(!0))}),1e3);return function(){clearInterval(e)}})),Object(f.jsxs)("section",{className:"time",children:[Object(f.jsxs)("p",{className:"time__title",children:[Object(f.jsx)("img",{src:l.getHours()>5&&l.getHours()<18?d:m,className:"time__icon",alt:"time icon"}),"Good ",p,Object(f.jsx)("span",{className:"time__title--second",children:", it's currently"})]}),Object(f.jsxs)("h1",{className:"time__value",children:[l&&"".concat(l.getHours()<10?"0"+l.getHours():l.getHours(),":").concat(l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes()),Object(f.jsx)("span",{className:"time__type",children:a||null})]}),Object(f.jsxs)("p",{className:"time__location",children:["In ",c?"".concat(c,", ").concat(s):null]})]})},_=(c(18),function(e){var t=e.toggleInfo,c=e.open;return Object(f.jsxs)("button",{onClick:t,className:"btn--primary",children:[c?"less":"more"," ",Object(f.jsx)("span",{})]})}),h=function(e){var t=Object(n.useState)(null),c=Object(r.a)(t,2),s=c[0],a=c[1],i=function(){var t=Object(u.a)(l.a.mark((function t(){var c,n,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return c=t.sent,t.next=5,c.json();case 5:return n=t.sent,t.next=8,fetch("http://worldtimeapi.org/api/ip");case 8:return s=t.sent,t.next=11,s.json();case 11:i=t.sent,a(Object(j.a)(Object(j.a)({},n),i));case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),s};var x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(r.a)(a,2),o=i[0],l=i[1],j=h("https://api.ipdata.co/?api-key=".concat("bcb486591cceeb1643340b74723f4cf9b9ceadc7548140829bacc76f"));if(!j)return Object(f.jsx)("div",{children:"Loading ..."});var u=c?"app app--open":"app",b=o?"app--night":"";return Object(f.jsxs)("div",{className:"".concat(u," ").concat(b),children:[Object(f.jsxs)("section",{className:"clock",children:[Object(f.jsx)(p,{}),Object(f.jsxs)("section",{className:"clock__action",children:[Object(f.jsx)(O,{setNight:l,city:j.city,countryCode:j.country_code,timeType:j.time_zone.abbr}),Object(f.jsx)(_,{toggleInfo:function(){s(!c)},open:c})]})]}),Object(f.jsxs)("section",{className:"info",children:[Object(f.jsxs)("section",{className:"info__section--left",children:[Object(f.jsxs)("article",{className:"info__detail",children:[Object(f.jsx)("p",{className:"info__title",children:"current timezone"}),Object(f.jsx)("p",{className:"info__value",children:j.timezone})]}),Object(f.jsxs)("article",{className:"info__detail",children:[Object(f.jsx)("p",{className:"info__title",children:"Day of the year"}),Object(f.jsx)("p",{className:"info__value",children:j.day_of_year})]})]}),Object(f.jsxs)("section",{className:"info__section--right",children:[Object(f.jsxs)("article",{className:"info__detail",children:[Object(f.jsx)("p",{className:"info__title",children:"Day of the week"}),Object(f.jsx)("p",{className:"info__value",children:[7,1,2,3,4,5,6][j.day_of_week]})]}),Object(f.jsxs)("article",{className:"info__detail",children:[Object(f.jsx)("p",{className:"info__title",children:"Week number"}),Object(f.jsx)("p",{className:"info__value",children:j.week_number})]})]})]})]})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.b0ebabf1.chunk.js.map