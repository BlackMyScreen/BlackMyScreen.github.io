!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t){return""===t?void 0:+t}function p(t,n){(null!=n||t.value)&&(t.value=n)}let $;function w(t){$=t}function y(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const x=[],b=[],v=[],k=[],_=Promise.resolve();let C=!1;function E(t){v.push(t)}let L=!1;const A=new Set;function D(){if(!L){L=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];w(n),I(n.$$)}for(x.length=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];A.has(n)||(A.add(n),n())}v.length=0}while(x.length);for(;k.length;)k.pop()();C=!1,L=!1,A.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const M=new Set;let F;function z(){F={r:0,c:[],p:F}}function N(){F.r||o(F.c),F=F.p}function R(t,n){t&&t.i&&(M.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),F.c.push(()=>{M.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function j(t){t&&t.c()}function H(t,e,r){const{fragment:c,on_mount:u,on_destroy:a,after_update:s}=t.$$;c&&c.m(e,r),E(()=>{const e=u.map(n).filter(i);a?a.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(E)}function S(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,_.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(n,i,r,c,u,a,l=[-1]){const f=$;w(n);const d=i.props||{},h=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:l};let m=!1;if(h.ctx=r?r(n,d,(t,e,...o)=>{const i=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=i)&&(h.bound[t]&&h.bound[t](i),m&&q(n,t)),e}):[],h.update(),m=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();i.intro&&R(n.$$.fragment),H(n,i.target,i.anchor),D()}w(f)}class T{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function U(t){let n,e,o;const i=t[3].default,r=function(t,n,e,o){if(t){const i=c(t,n,e,o);return t[0](i)}}(i,t,t[2],null);return{c(){n=l("div"),e=l("a"),r&&r.c(),m(e,"class","button"),m(e,"href",t[0]),m(e,"download",t[1]),m(n,"class","download-button-container")},m(t,i){a(t,n,i),u(n,e),r&&r.m(e,null),o=!0},p(t,[n]){r&&r.p&&4&n&&r.p(c(i,t,t[2],null),function(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}(i,t[2],n,null)),(!o||1&n)&&m(e,"href",t[0]),(!o||2&n)&&m(e,"download",t[1])},i(t){o||(R(r,t),o=!0)},o(t){W(r,t),o=!1},d(t){t&&s(n),r&&r.d(t)}}}function O(t,n,e){let{href:o}=n,{filename:i}=n,{$$slots:r={},$$scope:c}=n;return t.$set=t=>{"href"in t&&e(0,o=t.href),"filename"in t&&e(1,i=t.filename),"$$scope"in t&&e(2,c=t.$$scope)},[o,i,c,r]}class Y extends T{constructor(t){super(),B(this,t,O,U,r,{href:0,filename:1})}}function P(t){let n;const e=new Y({props:{href:t[3],filename:"BlackMyScreen.png",$$slots:{default:[X]},$$scope:{ctx:t}}});return{c(){j(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.href=t[3]),64&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function X(t){let n;return{c(){n=f("Download")},m(t,e){a(t,n,e)},d(t){t&&s(n)}}}function G(t){let n,e,o,i,r=t[3]&&P(t);return{c(){n=l("canvas"),e=d(),r&&r.c(),o=f(""),m(n,"width",t[0]),m(n,"height",t[1])},m(c,u){a(c,n,u),t[5](n),a(c,e,u),r&&r.m(c,u),a(c,o,u),i=!0},p(t,[e]){(!i||1&e)&&m(n,"width",t[0]),(!i||2&e)&&m(n,"height",t[1]),t[3]?r?(r.p(t,e),R(r,1)):(r=P(t),r.c(),R(r,1),r.m(o.parentNode,o)):r&&(z(),W(r,1,1,()=>{r=null}),N())},i(t){i||(R(r),i=!0)},o(t){W(r),i=!1},d(i){i&&s(n),t[5](null),i&&s(e),r&&r.d(i),i&&s(o)}}}function J(t,n,e){let o,i,{width:r}=n,{height:c}=n;return y(()=>{const t=o.getContext("2d");let n;return function r(){n=requestAnimationFrame(r),t.fillStyle="#000",t.fillRect(0,0,o.width,o.height),e(3,i=o.toDataURL("image/png;base64"))}(),()=>{cancelAnimationFrame(n)}}),t.$set=t=>{"width"in t&&e(0,r=t.width),"height"in t&&e(1,c=t.height)},[r,c,o,i,void 0,function(t){b[t?"unshift":"push"](()=>{e(2,o=t)})}]}class K extends T{constructor(t){super(),B(this,t,J,G,r,{width:0,height:1})}}function Q(t){let n;const e=new Y({props:{href:t[3],filename:"ImFeelingLucky.png",$$slots:{default:[V]},$$scope:{ctx:t}}});return{c(){j(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.href=t[3]),64&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function V(t){let n;return{c(){n=f("Download")},m(t,e){a(t,n,e)},d(t){t&&s(n)}}}function Z(t){let n,e,o,i,r,c,f,h,g,p,$=t[3]&&Q(t);return{c(){n=l("main"),e=l("h2"),e.textContent="I'm Feeling Lucky",o=d(),i=l("p"),i.textContent="I know this is definitely not black 😂 yet while developing this site I came\n    across this neat effect and couldn't resist including it.",r=d(),c=l("p"),c.innerHTML="<strong>Note:</strong>\n    You will download the picture at the moment of your click on the download\n    button, meaning it&#39;s a static image and the downloaded .png file won&#39;t be\n    animated.\n  ",f=d(),h=l("canvas"),g=d(),$&&$.c(),m(h,"width",t[0]),m(h,"height",t[1])},m(s,l){a(s,n,l),u(n,e),u(n,o),u(n,i),u(n,r),u(n,c),u(n,f),u(n,h),t[5](h),u(n,g),$&&$.m(n,null),p=!0},p(t,[e]){(!p||1&e)&&m(h,"width",t[0]),(!p||2&e)&&m(h,"height",t[1]),t[3]?$?($.p(t,e),R($,1)):($=Q(t),$.c(),R($,1),$.m(n,null)):$&&(z(),W($,1,1,()=>{$=null}),N())},i(t){p||(R($),p=!0)},o(t){W($),p=!1},d(e){e&&s(n),t[5](null),$&&$.d()}}}function tt(t,n,e){let o,i,r,{width:c}=n,{height:u}=n;return y(()=>{const t=o.getContext("2d");return window.Worker&&(r=new Worker("/worker-imfeelinglucky.js")),function n(){let c;c=requestAnimationFrame(n);const u=t.getImageData(0,0,o.width,o.height);if(window.Worker&&r)r.postMessage([o.width,o.height,u]),r.onmessage=n=>{t.putImageData(n.data,0,0),e(3,i=o.toDataURL("image/png;base64"))};else{for(let t=0;t<u.data.length;t+=4){const n=t/4,e=n%o.width,i=n/o.height>>>0,r=window.performance.now(),c=64+128*e/o.width+64*Math.sin(r/1e3),a=64+128*i/o.height+64*Math.cos(r/1e3),s=128;u.data[t+0]=c,u.data[t+1]=a,u.data[t+2]=s,u.data[t+3]=255}t.putImageData(u,0,0),e(3,i=o.toDataURL("image/png;base64"))}}(),()=>{cancelAnimationFrame(frame)}}),t.$set=t=>{"width"in t&&e(0,c=t.width),"height"in t&&e(1,u=t.height)},[c,u,o,i,r,function(t){b[t?"unshift":"push"](()=>{e(2,o=t)})}]}class nt extends T{constructor(t){super(),B(this,t,tt,Z,r,{width:0,height:1})}}function et(t){let n,e,i,r,c,f,g,$,w,y,x,b,v,k,_,C,E,L=!1,A=!1;function D(){L=!0,t[5].call(c)}function I(){A=!0,t[6].call(w)}const M=new K({props:{width:t[0],height:t[1]}}),F=new nt({props:{width:t[0],height:t[1]}});return{c(){n=l("main"),e=l("h5"),e.textContent="Your current devices display dimensions",i=d(),r=l("div"),c=l("input"),f=d(),g=l("span"),g.textContent="X",$=d(),w=l("input"),y=d(),x=l("button"),x.textContent="Reset",b=d(),v=l("section"),j(M.$$.fragment),k=d(),_=l("section"),j(F.$$.fragment),m(c,"class","size-control"),m(c,"type","number"),m(g,"class","size-controls-operator"),m(w,"class","size-control"),m(w,"type","number"),m(x,"class","size-reset"),m(x,"type","button"),m(r,"class","size-controls")},m(s,l,d){a(s,n,l),u(n,e),u(n,i),u(n,r),u(r,c),p(c,t[0]),u(r,f),u(r,g),u(r,$),u(r,w),p(w,t[1]),u(r,y),u(r,x),u(n,b),u(n,v),H(M,v,null),u(n,k),u(n,_),H(F,_,null),C=!0,d&&o(E),E=[h(c,"input",D),h(w,"input",I),h(x,"click",t[2])]},p(t,[n]){!L&&1&n&&p(c,t[0]),L=!1,!A&&2&n&&p(w,t[1]),A=!1;const e={};1&n&&(e.width=t[0]),2&n&&(e.height=t[1]),M.$set(e);const o={};1&n&&(o.width=t[0]),2&n&&(o.height=t[1]),F.$set(o)},i(t){C||(R(M.$$.fragment,t),R(F.$$.fragment,t),C=!0)},o(t){W(M.$$.fragment,t),W(F.$$.fragment,t),C=!1},d(t){t&&s(n),S(M),S(F),o(E)}}}function ot(t,n,e){let o,i,r=window.innerWidth,c=window.innerHeight;return e(0,o=r),e(1,i=c),[o,i,function(){e(0,o=window.innerWidth),e(1,i=window.innerHeight)},r,c,function(){o=g(this.value),e(0,o),e(3,r)},function(){i=g(this.value),e(1,i),e(4,c)}]}var it;new class extends T{constructor(t){super(),B(this,t,ot,et,r,{})}}({target:(it=document.getElementById("blackmyscreen"),it.innerHTML="",it)})}();
//# sourceMappingURL=bundle.js.map
