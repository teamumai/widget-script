(this["webpackJsonpwidget-script"]=this["webpackJsonpwidget-script"]||[]).push([[81],{43:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,o){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,c=i.length;-1!==n.code.indexOf(r=t(a,c));)++c;return i[c]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,o=Object.keys(n.tokenStack);!function i(c){for(var s=0;s<c.length&&!(r>=o.length);s++){var p=c[s];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=o[r],g=n.tokenStack[u],l="string"===typeof p?p:p.content,f=t(a,u),k=l.indexOf(f);if(k>-1){++r;var d=l.substring(0,k),h=new e.Token(a,e.tokenize(g,n.grammar),"language-"+a,g),m=l.substring(k+f.length),y=[];d&&y.push.apply(y,i([d])),y.push(h),m&&y.push.apply(y,i([m])),"string"===typeof p?c.splice.apply(c,[s,1].concat(y)):p.content=y}}else p.content&&i(p.content)}return c}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.d3e189ba.chunk.js.map