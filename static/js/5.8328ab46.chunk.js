(this["webpackJsonpcargo-planner"]=this["webpackJsonpcargo-planner"]||[]).push([[5],{91:function(e,t,r){e.exports={info:"CompanyInfo_info__2qdk3",label:"CompanyInfo_label__f6nPX",reqCargo:"CompanyInfo_reqCargo__1CL2p",input:"CompanyInfo_input__2uaLt"}},92:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,"default",(function(){return f}));var o=r(7),i=r(0),u=r(13),b=r(16),l=r(91),s=r.n(l),p=r(1);function f(e){var t=e.company,r=t.id,n=t.name,a=t.email,l=t.boxes,f=Object(u.a)().setCurrentCompany,j=Object(i.useState)(l),O=Object(o.a)(j,2),m=O[0],y=O[1];Object(i.useEffect)((function(){return y(l)}),[t]);var d=Object(i.useCallback)((function(e){return e.preventDefault()}),[]),h=Object(i.useCallback)((function(e){y(e.target.value),f(c(c({},t),{},{boxes:e.target.value}))}),[]);return Object(p.jsxs)("div",{className:s.a.info,children:[Object(p.jsxs)("h2",{children:[" ",n]}),Object(p.jsx)("a",{href:"mailto:".concat(a),type:"email",children:a}),Object(p.jsxs)("p",{children:["Number of required cargo bays:"," ",Object(p.jsx)("span",{className:s.a.reqCargo,children:function(e){var t=e?Math.ceil(.1*e.split(",").reduce((function(e,t){return t<=10?Number(e)+Number(t):Object(b.b)("\u0427\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0447\u0438\u0441\u043b\u0430 (\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 10)")}))):0;return null!==t&&void 0!==t?t:""}(m)})]}),Object(p.jsxs)("form",{onSubmit:d,children:[Object(p.jsx)("label",{className:s.a.label,htmlFor:r,children:"Cargo boxes"}),Object(p.jsx)("input",{className:s.a.input,type:"text",name:"number",id:r,value:m,onChange:h,pattern:"^[0-9]?[.,]?[0-9]?[,]?$",title:"\u0427\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0447\u0438\u0441\u043b\u0430 (\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 10)",required:!0})]})]})}}}]);
//# sourceMappingURL=5.8328ab46.chunk.js.map