(this["webpackJsonpwidget-script"]=this["webpackJsonpwidget-script"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(0),i=n.n(a),o=n(15),c=n.n(o),l=n(9);function s(e){var t,n,r=e.ids,a=void 0===r?"":r,i=e.apiKey,o=void 0===i?"c942efb0-1f29-4046-895b-8976466c7b66":i,c=e.widgetType,l=void 0===c?"reservation":c,s=(null===a||void 0===a||null===(t=a.split(","))||void 0===t||null===(n=t.filter((function(e){return null===e||void 0===e?void 0:e.length})))||void 0===n?void 0:n.map((function(e){return'"#'.concat(e.trim(),'"')})))||"";return'<script src="https://widget.letsumai.com/dist/embed.min.js"><\/script>\n<script type="text/javascript">\n  document.addEventListener(\'DOMContentLoaded\', function (event) {\n    ['.concat(s,"].forEach((id) => {\n      var links = document.querySelectorAll(id);\n      links.forEach((link) => {\n        link.addEventListener('click', function (e) {\n          e.preventDefault();\n          umaiWidget.config({\n            apiKey: \"").concat(o,'",\n            widgetType: "').concat(l,'"\n          });\n          umaiWidget.openWidget();\n          return false;\n        });\n      });\n    })\n  });\n<\/script>')}var d=n(2),b=n(25),u=n(1),h=function(e){var t=e.size,n=e.color,r=Object(b.a)(e,["size","color"]);return Object(u.jsx)("svg",Object(d.a)(Object(d.a)({},r),{},{viewBox:"0 0 320 512",width:t,height:t,fill:n,children:Object(u.jsx)("path",{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})}))};h.displayName="CaretDownIcon",h.defaultProps={size:24,color:"currentcolor"};var j=h;function p(e){return Object(u.jsxs)("div",{className:"inline-block relative w-64 mb-2",children:[e.label&&Object(u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",for:e.id,children:e.label}),Object(u.jsx)("select",Object(d.a)(Object(d.a)({},e),{},{value:e.value,className:"block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",children:e.options})),Object(u.jsx)("div",{className:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker",children:Object(u.jsx)(j,{className:"fill-current h-4 w-4"})})]})}function f(e){return Object(u.jsx)("div",{className:"inline-block relative w-64 mb-2",children:Object(u.jsxs)("label",{className:"block font-bold",children:[Object(u.jsx)("input",Object(d.a)({className:"mr-2 leading-tight",type:"checkbox"},e)),Object(u.jsx)("span",{className:"text-sm",children:"Show Line Numbers"})]})})}function m(e){var t=e.select,n=e.toggle;return Object(u.jsxs)("div",{className:"list-reset flex flex-wrap items-center justify-between my-2",children:[Object(u.jsx)(f,Object(d.a)({},n)),Object(u.jsx)(p,Object(d.a)({},t))]})}function g(){return Object(u.jsx)("div",{className:"flex mb-6 justify-center pt-5 ",children:Object(u.jsx)("p",{className:"text-2xl text-gray-50",children:" Widget Script"})})}function O(e){var t=e.text;return Object(u.jsxs)("div",{className:"inline-block relative mb-2",children:[Object(u.jsx)("span",{className:"mr-10 font-bold text-gray-700 text-lg",children:"Note:"}),Object(u.jsx)("p",{className:"text-md font-bold mb-2",children:t})]})}function v(e){return Object(u.jsxs)("div",{className:"inline-block relative w-64 mb-2",children:[Object(u.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",for:e.id,children:e.label}),Object(u.jsx)("input",Object(d.a)({className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300",required:!0,type:"text"},e)),Object(u.jsx)("p",{className:"block text-gray-700 text-sm font-bold mb-2",children:e.description})]})}function x(e){var t=e.widgetType,n=e.apiKey,r=e.ids;return Object(u.jsxs)("div",{className:"list-reset flex flex-wrap items-center justify-between my-2 pt-5",children:[Object(u.jsx)(v,Object(d.a)({},n)),Object(u.jsx)(v,Object(d.a)({},r)),Object(u.jsx)(p,Object(d.a)({},t))]})}var y,w,k,N,L,E={a11yDark:"a11y-dark",a11yLight:"a11y-light",anOldHope:"an-old-hope",androidstudio:"androidstudio",atomOneDark:"atom-one-dark",atomOneLight:"atom-one-light",codepen:"codepen",dracula:"dracula",far:"far",github:"github",googlecode:"googlecode",hopscotch:"hopscotch",hybrid:"hybrid",irBlack:"ir-black",monoBlue:"mono-blue",monokaiSublime:"monokai-sublime",monokai:"monokai",nord:"nord",obsidian:"obsidian",ocean:"ocean",paraisoDark:"paraiso-dark",paraisoLight:"paraiso-light",pojoaque:"pojoaque",purebasic:"purebasic",railscast:"railscast",rainbow:"rainbow",shadesOfPurple:"shades-of-purple",solarizedDark:"solarized-dark",solarizedLight:"solarized-light",sunburst:"sunburst",tomorrowNightBlue:"tomorrow-night-blue",tomorrowNightBright:"tomorrow-night-bright",tomorrowNightEighties:"tomorrow-night-eighties",tomorrowNight:"tomorrow-night",tomorrow:"tomorrow",vs2015:"vs2015",xt256:"xt256",zenburn:"zenburn"},S={reservation:"reservation",giftcard:"giftcard",delivery:"delivery",takeaway:"takeaway"};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function B(e,t){var n=e.title,r=e.titleId,i=z(e,["title","titleId"]);return a.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:832.192,height:245.613,viewBox:"0 0 832.192 245.613",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,y||(y=a.createElement("path",{d:"M55.571,174.738V38.209H67.233V174.052c0,63.8,34.3,97.422,86.445,97.422,51.8,0,85.418-32.245,85.418-96.736V38.209h11.662v135.5c0,71.7-39.449,108.4-97.422,108.4C95.708,282.108,55.571,245.746,55.571,174.738Z",transform:"translate(-55.571 -36.495)",fill:"#fff"})),w||(w=a.createElement("path",{d:"M176.1,38.209H187.08l101.54,146.133L389.815,38.209h10.978V278.335H389.131V58.448L288.621,202.524h-.688L187.424,58.448V278.335H176.1Z",transform:"translate(79.797 -36.495)",fill:"#fff"})),k||(k=a.createElement("path",{d:"M442.052,38.209h11.664V278.335H442.052Z",transform:"translate(378.476 -36.495)",fill:"#fff"})),N||(N=a.createElement("path",{d:"M430.067,37.4H419.091L305.2,279.241h12.007l32.93-69.979,74.1-158.14,69.294,147.506,5.146,10.634,32.588,69.979h12.693Z",transform:"translate(224.783 -37.401)",fill:"#fff"})),L||(L=a.createElement("rect",{width:81.915,height:10.615,transform:"translate(606.109 161.227)",fill:"#fff"})))}var P=a.forwardRef(B),D=(n.p,function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,228)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))});n(40);function T(){var e=Object(a.useState)(l.dracula),t=Object(r.a)(e,2),i=t[0],o=t[1],c=Object(a.useState)("dracula"),d=Object(r.a)(c,2),b=d[0],h=d[1],j=Object(a.useState)(!0),p=Object(r.a)(j,2),f=p[0],v=p[1],y=Object(a.useState)(S.reservation),w=Object(r.a)(y,2),k=w[0],N=w[1],L=Object(a.useState)(""),C=Object(r.a)(L,2),z=C[0],B=C[1],D=Object(a.useState)(""),T=Object(r.a)(D,2),H=T[0],M=T[1];return Object(u.jsxs)("div",{className:"container mx-auto p-4",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(P,{})}),Object(u.jsx)(g,{}),Object(u.jsx)(m,{select:{value:b,onChange:function(e){var t=n(9)[e.target.value];return o(t),h(e.target.value)},options:Object.keys(E).map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))},toggle:{checked:f,onChange:function(e){return v(!f)}}}),Object(u.jsx)("div",{className:"demo",children:Object(u.jsx)(l.CopyBlock,{language:"javascript",text:s({ids:H,apiKey:z,widgetType:k}),showLineNumbers:f,theme:i,wrapLines:!0,codeBlock:!0})}),Object(u.jsx)(x,{widgetType:{id:"widgetType",label:"Select widget type here",value:k,onChange:function(e){var t=S[e.target.value];N(t)},options:Object.keys(S).map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))},apiKey:{id:"apikey",label:"Enter apiKey given from umai here",placeholder:"Please enter the api key here",value:z,onChange:function(e){return B(e.target.value)}},ids:{id:"ids",label:"Enter button id's here",placeholder:"Please enter the ids of button here",value:H,onChange:function(e){return M(e.target.value)}}}),Object(u.jsx)(O,{text:Object(u.jsxs)(u.Fragment,{children:["Please enter comma separated id's if you have more than one button for each widget type on the webiste."," ",Object(u.jsx)("span",{className:"ml-3",children:" For example: button1,button2,button3"})]})})]})}c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),D()}},[[41,152,153]]]);
//# sourceMappingURL=main.cc4d4ece.chunk.js.map