(function(g,h){"function"===typeof define&&define.amd?(g.marked=require("./marked"),g.RevealMarkdown=h(g.marked),g.RevealMarkdown.initialize()):"object"===typeof exports?module.exports=h(require("./marked")):(g.RevealMarkdown=h(g.marked),g.RevealMarkdown.initialize())})(this,function(g){function h(b){b=(b.querySelector("script")||b).textContent;b=b.replace(RegExp("__SCRIPT_END__","g"),"\x3c/script>");var a=b.match(/^\n?(\s*)/)[1].length,c=b.match(/^\n?(\t*)/)[1].length;0<c?b=b.replace(new RegExp("\\n?\\t{"+
c+"}","g"),"\n"):1<a&&(b=b.replace(new RegExp("\\n? {"+a+"}","g"),"\n"));return b}function p(b){b=b.attributes;for(var a=[],c=0,e=b.length;c<e;c++){var d=b[c].name,f=b[c].value;/data\-(markdown|separator|vertical|notes)/gi.test(d)||(f?a.push(d+'="'+f+'"'):a.push(d))}return a.join(" ")}function q(b){b=b||{};b.separator=b.separator||"^\r?\n---\r?\n$";b.notesSeparator=b.notesSeparator||"note:";b.attributes=b.attributes||"";return b}function m(b,a){a=q(a);var c=b.split(new RegExp(a.notesSeparator,"mgi"));
2===c.length&&(b=c[0]+'<aside class="notes">'+g(c[1].trim())+"</aside>");b=b.replace(/<\/script>/g,"__SCRIPT_END__");return'<script type="text/template">'+b+"\x3c/script>"}function n(b,a){a=q(a);for(var c=new RegExp(a.separator+(a.verticalSeparator?"|"+a.verticalSeparator:""),"mg"),e=new RegExp(a.separator),d,f=0,g,h=!0,k=[];d=c.exec(b);)notes=null,g=e.test(d[0]),!g&&h&&k.push([]),d=b.substring(f,d.index),g&&h?k.push(d):k[k.length-1].push(d),f=c.lastIndex,h=g;(h?k:k[k.length-1]).push(b.substring(f));
for(var l="",c=0,e=k.length;c<e;c++)k[c]instanceof Array?(l+="<section "+a.attributes+">",k[c].forEach(function(b){l+="<section data-markdown>"+m(b,a)+"</section>"}),l+="</section>"):l+="<section "+a.attributes+" data-markdown>"+m(k[c],a)+"</section>";return l}function r(){for(var b=document.querySelectorAll("[data-markdown]"),a,c=0,e=b.length;c<e;c++)if(a=b[c],a.getAttribute("data-markdown").length){var d=new XMLHttpRequest,f=a.getAttribute("data-markdown");datacharset=a.getAttribute("data-charset");
null!=datacharset&&""!=datacharset&&d.overrideMimeType("text/html; charset="+datacharset);d.onreadystatechange=function(){4===d.readyState&&(a.outerHTML=200<=d.status&&300>d.status||0===d.status?n(d.responseText,{separator:a.getAttribute("data-separator"),verticalSeparator:a.getAttribute("data-separator-vertical"),notesSeparator:a.getAttribute("data-separator-notes"),attributes:p(a)}):'<section data-state="alert">ERROR: The attempt to fetch '+f+" failed with HTTP status "+d.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>")};
d.open("GET",f,!1);try{d.send()}catch(g){alert("Failed to get the Markdown file "+f+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+g)}}else a.getAttribute("data-separator")||a.getAttribute("data-separator-vertical")||a.getAttribute("data-separator-notes")?a.outerHTML=n(h(a),{separator:a.getAttribute("data-separator"),verticalSeparator:a.getAttribute("data-separator-vertical"),notesSeparator:a.getAttribute("data-separator-notes"),attributes:p(a)}):
a.innerHTML=m(h(a))}function t(b,a,c){c=new RegExp(c,"mg");var e=RegExp('([^"= ]+?)="([^"=]+?)"',"mg"),d=b.nodeValue;if(matches=c.exec(d)){var f=matches[1],d=d.substring(0,matches.index)+d.substring(c.lastIndex);for(b.nodeValue=d;matchesClass=e.exec(f);)a.setAttribute(matchesClass[1],matchesClass[2]);return!0}return!1}function u(b,a,c,e,d){if(null!=a&&void 0!=a.childNodes&&0<a.childNodes.length){previousParentElement=a;for(var f=0;f<a.childNodes.length;f++){childElement=a.childNodes[f];if(0<f)for(j=
f-1;0<=j;){aPreviousChildElement=a.childNodes[j];if("function"==typeof aPreviousChildElement.setAttribute&&"BR"!=aPreviousChildElement.tagName){previousParentElement=aPreviousChildElement;break}--j}parentSection=b;"section"==childElement.nodeName&&(previousParentElement=parentSection=childElement);"function"!=typeof childElement.setAttribute&&childElement.nodeType!=Node.COMMENT_NODE||u(parentSection,childElement,previousParentElement,e,d)}}a.nodeType==Node.COMMENT_NODE&&0==t(a,c,e)&&t(a,b,d)}function v(){for(var b=
document.querySelectorAll("[data-markdown]"),a=0,c=b.length;a<c;a++){var e=b[a];if(!e.getAttribute("data-markdown-parsed")){e.setAttribute("data-markdown-parsed",!0);var d=e.querySelector("aside.notes"),f=h(e);e.innerHTML=g(f);u(e,e,null,e.getAttribute("data-element-attributes")||e.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",e.getAttribute("data-attributes")||e.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$");d&&e.appendChild(d)}}}if("undefined"===
typeof g)throw"The reveal.js Markdown plugin requires marked to be loaded";"undefined"!==typeof hljs&&g.setOptions({highlight:function(b,a){return hljs.highlightAuto(b,a).value}});return{initialize:function(){r();v()},processSlides:r,convertSlides:v,slidify:n}});