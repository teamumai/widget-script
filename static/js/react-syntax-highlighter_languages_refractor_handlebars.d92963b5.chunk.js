(this["webpackJsonpwidget-script"]=this["webpackJsonpwidget-script"]||[]).push([[51,81],{136:function(e,n,t){"use strict";var a=t(43);function i(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=i,i.displayName="handlebars",i.aliases=[]},43:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,i,r){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(i,(function(e){if("function"===typeof r&&!r(e))return e;for(var i,o=s.length;-1!==t.code.indexOf(i=n(a,o));)++o;return s[o]=e,i})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var i=0,r=Object.keys(t.tokenStack);!function s(o){for(var l=0;l<o.length&&!(i>=r.length);l++){var u=o[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=r[i],p=t.tokenStack[c],g="string"===typeof u?u:u.content,d=n(a,c),f=g.indexOf(d);if(f>-1){++i;var k=g.substring(0,f),b=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(f+d.length),m=[];k&&m.push.apply(m,s([k])),m.push(b),h&&m.push.apply(m,s([h])),"string"===typeof u?o.splice.apply(o,[l,1].concat(m)):u.content=m}}else u.content&&s(u.content)}return o}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.d92963b5.chunk.js.map