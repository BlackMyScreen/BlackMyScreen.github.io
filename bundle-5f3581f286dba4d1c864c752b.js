!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t){return""===t?void 0:+t}function g(t,n){(null!=n||t.value)&&(t.value=n)}let $;function w(t){$=t}function y(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const x=[],b=[],v=[],k=[],_=Promise.resolve();let C=!1;function E(t){v.push(t)}let L=!1;const A=new Set;function D(){if(!L){L=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];w(n),I(n.$$)}for(x.length=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];A.has(n)||(A.add(n),n())}v.length=0}while(x.length);for(;k.length;)k.pop()();C=!1,L=!1,A.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const M=new Set;let z;function F(){z={r:0,c:[],p:z}}function W(){z.r||o(z.c),z=z.p}function H(t,n){t&&t.i&&(M.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),z.c.push(()=>{M.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const R="undefined"!=typeof window?window:global;function j(t){t&&t.c()}function S(t,e,r){const{fragment:c,on_mount:u,on_destroy:a,after_update:s}=t.$$;c&&c.m(e,r),E(()=>{const e=u.map(n).filter(i);a?a.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(E)}function q(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,_.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,i,r,c,u,a,l=[-1]){const f=$;w(n);const d=i.props||{},h=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:l};let m=!1;if(h.ctx=r?r(n,d,(t,e,...o)=>{const i=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=i)&&(h.bound[t]&&h.bound[t](i),m&&B(n,t)),e}):[],h.update(),m=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();i.intro&&H(n.$$.fragment),S(n,i.target,i.anchor),D()}w(f)}class U{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function O(t){let n,e,o;const i=t[3].default,r=function(t,n,e,o){if(t){const i=c(t,n,e,o);return t[0](i)}}(i,t,t[2],null);return{c(){n=l("div"),e=l("a"),r&&r.c(),m(e,"class","button"),m(e,"href",t[0]),m(e,"download",t[1]),m(n,"class","download-button-container")},m(t,i){a(t,n,i),u(n,e),r&&r.m(e,null),o=!0},p(t,[n]){r&&r.p&&4&n&&r.p(c(i,t,t[2],null),function(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}(i,t[2],n,null)),(!o||1&n)&&m(e,"href",t[0]),(!o||2&n)&&m(e,"download",t[1])},i(t){o||(H(r,t),o=!0)},o(t){N(r,t),o=!1},d(t){t&&s(n),r&&r.d(t)}}}function Y(t,n,e){let{href:o}=n,{filename:i}=n,{$$slots:r={},$$scope:c}=n;return t.$set=t=>{"href"in t&&e(0,o=t.href),"filename"in t&&e(1,i=t.filename),"$$scope"in t&&e(2,c=t.$$scope)},[o,i,c,r]}class P extends U{constructor(t){super(),T(this,t,Y,O,r,{href:0,filename:1})}}function X(t){let n;const e=new P({props:{href:t[3],filename:"BlackMyScreen.png",$$slots:{default:[G]},$$scope:{ctx:t}}});return{c(){j(e.$$.fragment)},m(t,o){S(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.href=t[3]),64&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function G(t){let n;return{c(){n=f("Download")},m(t,e){a(t,n,e)},d(t){t&&s(n)}}}function J(t){let n,e,o,i,r=t[3]&&X(t);return{c(){n=l("canvas"),e=d(),r&&r.c(),o=f(""),m(n,"width",t[0]),m(n,"height",t[1])},m(c,u){a(c,n,u),t[5](n),a(c,e,u),r&&r.m(c,u),a(c,o,u),i=!0},p(t,[e]){(!i||1&e)&&m(n,"width",t[0]),(!i||2&e)&&m(n,"height",t[1]),t[3]?r?(r.p(t,e),H(r,1)):(r=X(t),r.c(),H(r,1),r.m(o.parentNode,o)):r&&(F(),N(r,1,1,()=>{r=null}),W())},i(t){i||(H(r),i=!0)},o(t){N(r),i=!1},d(i){i&&s(n),t[5](null),i&&s(e),r&&r.d(i),i&&s(o)}}}function K(t,n,e){let o,i,{width:r}=n,{height:c}=n;return y(()=>{const t=o.getContext("2d");let n;return function r(){n=requestAnimationFrame(r),t.fillStyle="#000",t.fillRect(0,0,o.width,o.height),e(3,i=o.toDataURL("image/png;base64"))}(),()=>{cancelAnimationFrame(n)}}),t.$set=t=>{"width"in t&&e(0,r=t.width),"height"in t&&e(1,c=t.height)},[r,c,o,i,void 0,function(t){b[t?"unshift":"push"](()=>{e(2,o=t)})}]}class Q extends U{constructor(t){super(),T(this,t,K,J,r,{width:0,height:1})}}function V(t){let n;const e=new P({props:{href:t[3],filename:"ImFeelingLucky.png",$$slots:{default:[Z]},$$scope:{ctx:t}}});return{c(){j(e.$$.fragment)},m(t,o){S(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.href=t[3]),64&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Z(t){let n;return{c(){n=f("Download")},m(t,e){a(t,n,e)},d(t){t&&s(n)}}}function tt(t){let n,e,o,i,r,c,f,h,p,g,$=t[3]&&V(t);return{c(){n=l("main"),e=l("h2"),e.textContent="I'm Feeling Lucky",o=d(),i=l("p"),i.textContent="I know this is definitely not black 😂 yet while developing this site I came\n    across this neat effect and couldn't resist including it.",r=d(),c=l("p"),c.innerHTML="<strong>Note:</strong>\n    You will download the picture at the moment of your click on the download\n    button, meaning it&#39;s a static image and the downloaded .png file won&#39;t be\n    animated.\n  ",f=d(),h=l("canvas"),p=d(),$&&$.c(),m(h,"width",t[0]),m(h,"height",t[1])},m(s,l){a(s,n,l),u(n,e),u(n,o),u(n,i),u(n,r),u(n,c),u(n,f),u(n,h),t[5](h),u(n,p),$&&$.m(n,null),g=!0},p(t,[e]){(!g||1&e)&&m(h,"width",t[0]),(!g||2&e)&&m(h,"height",t[1]),t[3]?$?($.p(t,e),H($,1)):($=V(t),$.c(),H($,1),$.m(n,null)):$&&(F(),N($,1,1,()=>{$=null}),W())},i(t){g||(H($),g=!0)},o(t){N($),g=!1},d(e){e&&s(n),t[5](null),$&&$.d()}}}function nt(t,n,e){let o,i,r,{width:c}=n,{height:u}=n;return y(()=>{const t=o.getContext("2d");return window.Worker&&(r=new Worker("/worker-imfeelinglucky.js")),function n(){let a;a=requestAnimationFrame(n);const s=t.getImageData(0,0,c,u);if(window.Worker&&r)r.postMessage([c,u,s]),r.onmessage=n=>{t.putImageData(n.data,0,0),e(3,i=o.toDataURL("image/png;base64"))};else{for(let t=0;t<s.data.length;t+=4){const n=t/4,e=n%o.width,i=n/o.height>>>0,r=window.performance.now(),c=64+128*e/o.width+64*Math.sin(r/1e3),u=64+128*i/o.height+64*Math.cos(r/1e3),a=128;s.data[t+0]=c,s.data[t+1]=u,s.data[t+2]=a,s.data[t+3]=255}t.putImageData(s,0,0),e(3,i=o.toDataURL("image/png;base64"))}}(),()=>{cancelAnimationFrame(frame),r&&r.terminate()}}),t.$set=t=>{"width"in t&&e(0,c=t.width),"height"in t&&e(1,u=t.height)},[c,u,o,i,r,function(t){b[t?"unshift":"push"](()=>{e(2,o=t)})}]}class et extends U{constructor(t){super(),T(this,t,nt,tt,r,{width:0,height:1})}}const{window:ot}=R;function it(t){let n,e,i,r,c,f,p,$,w,y,x,b,v,k,_,C,L,A=!1,D=!1;function I(){A=!0,t[6].call(c)}function M(){D=!0,t[7].call(w)}E(t[5]);const z=new Q({props:{width:t[2],height:t[3]}}),F=new et({props:{width:t[2],height:t[3]}});return{c(){n=l("main"),e=l("h5"),e.textContent="Your current devices display dimensions",i=d(),r=l("div"),c=l("input"),f=d(),p=l("span"),p.textContent="X",$=d(),w=l("input"),y=d(),x=l("button"),x.textContent="Reset",b=d(),v=l("section"),j(z.$$.fragment),k=d(),_=l("section"),j(F.$$.fragment),m(c,"class","size-control"),m(c,"type","number"),m(p,"class","size-controls-operator"),m(w,"class","size-control"),m(w,"type","number"),m(x,"class","size-reset"),m(x,"type","button"),m(r,"class","size-controls")},m(s,l,d){a(s,n,l),u(n,e),u(n,i),u(n,r),u(r,c),g(c,t[2]),u(r,f),u(r,p),u(r,$),u(r,w),g(w,t[3]),u(r,y),u(r,x),u(n,b),u(n,v),S(z,v,null),u(n,k),u(n,_),S(F,_,null),C=!0,d&&o(L),L=[h(ot,"resize",t[5]),h(c,"input",I),h(w,"input",M),h(x,"click",t[4])]},p(t,[n]){!A&&4&n&&g(c,t[2]),A=!1,!D&&8&n&&g(w,t[3]),D=!1;const e={};4&n&&(e.width=t[2]),8&n&&(e.height=t[3]),z.$set(e);const o={};4&n&&(o.width=t[2]),8&n&&(o.height=t[3]),F.$set(o)},i(t){C||(H(z.$$.fragment,t),H(F.$$.fragment,t),C=!0)},o(t){N(z.$$.fragment,t),N(F.$$.fragment,t),C=!1},d(t){t&&s(n),q(z),q(F),o(L)}}}function rt(t,n,e){let o,i,r=window.innerWidth,c=window.innerHeight;return t.$$.update=()=>{1&t.$$.dirty&&e(2,o=r),2&t.$$.dirty&&e(3,i=c)},[r,c,o,i,function(){e(2,o=window.innerWidth),e(3,i=window.innerHeight)},function(){e(0,r=ot.innerWidth),e(1,c=ot.innerHeight)},function(){o=p(this.value),e(2,o),e(0,r)},function(){i=p(this.value),e(3,i),e(1,c)}]}var ct;new class extends U{constructor(t){super(),T(this,t,rt,it,r,{})}}({target:(ct=document.getElementById("blackmyscreen"),ct.innerHTML="",ct)})}();
//# sourceMappingURL=bundle-5f3581f286dba4d1c864c752b.js.map