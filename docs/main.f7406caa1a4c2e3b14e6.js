!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){!function(t,n){var r=function(e,t,n){"use strict";var r,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var a=t.documentElement,o=e.HTMLPictureElement,s=e.addEventListener.bind(e),l=e.setTimeout,u=e.requestAnimationFrame||l,c=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],h={},v=Array.prototype.forEach,y=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e.getAttribute("class")||"")&&h[t]},g=function(e,t){y(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},m=function(e,t){var n;(n=y(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},p=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&p(e,t),f.forEach((function(n){e[r](n,t)}))},b=function(e,n,i,a,o){var s=t.createEvent("Event");return i||(i={}),i.instance=r,s.initEvent(n,!a,!o),s.detail=i,e.dispatchEvent(s),s},z=function(t,n){var r;!o&&(r=e.picturefill||i.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},A=(he=[],ve=[],ye=he,ge=function(){var e=ye;for(ye=he.length?ve:he,de=!0,fe=!1;e.length;)e.shift()();de=!1},me=function(e,n){de&&!n?e.apply(this,arguments):(ye.push(e),fe||(fe=!0,(t.hidden?l:u)(ge)))},me._lsFlush=ge,me),_=function(e,t){return t?function(){A(e)}:function(){var t=this,n=arguments;A((function(){e.apply(t,n)}))}},w=function(e){var t,r,i=function(){t=null,e()},a=function(){var e=n.now()-r;e<99?l(a,99-e):(c||i)(i)};return function(){r=n.now(),t||(t=l(a,99))}},L=(U=/^img$/i,Y=/^iframe$/i,G="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),J=0,K=0,Q=-1,V=function(e){K--,(!e||K<0||!e.target)&&(K=0)},X=function(e){return null==$&&($="hidden"==E(t.body,"visibility")),$||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},Z=function(e,n){var r,i=e,o=X(e);for(R-=n,I+=n,D-=n,H+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=a;)(o=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(r=i.getBoundingClientRect(),o=H>r.left&&D<r.right&&I>r.top-1&&R<r.bottom+1);return o},ee=function(){var e,n,o,s,l,u,c,d,f,h,v,y,g=r.elements;if((j=i.loadMode)&&K<8&&(e=g.length)){for(n=0,Q++;n<e;n++)if(g[n]&&!g[n]._lazyRace)if(!G||r.prematureUnveil&&r.prematureUnveil(g[n]))se(g[n]);else if((d=g[n].getAttribute("data-expand"))&&(u=1*d)||(u=J),h||(h=!i.expand||i.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:i.expand,r._defEx=h,v=h*i.expFactor,y=i.hFac,$=null,J<v&&K<1&&Q>2&&j>2&&!t.hidden?(J=v,Q=0):J=j>1&&Q>1&&K<6?h:0),f!==u&&(q=innerWidth+u*y,F=innerHeight+u,c=-1*u,f=u),o=g[n].getBoundingClientRect(),(I=o.bottom)>=c&&(R=o.top)<=F&&(H=o.right)>=c*y&&(D=o.left)<=q&&(I||H||D||R)&&(i.loadHidden||X(g[n]))&&(P&&K<3&&!d&&(j<3||Q<4)||Z(g[n],u))){if(se(g[n]),l=!0,K>9)break}else!l&&P&&!s&&K<4&&Q<4&&j>2&&(T[0]||i.preloadAfterLoad)&&(T[0]||!d&&(I||H||D||R||"auto"!=g[n].getAttribute(i.sizesAttr)))&&(s=T[0]||g[n]);s&&!l&&se(s)}},te=function(e){var t,r=0,a=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,r=n.now(),e()},u=c&&o>49?function(){c(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:_((function(){l(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=a-(n.now()-r))<0&&(i=0),e||i<9?u():l(u,i))}}(ee),ne=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(V(e),g(t,i.loadedClass),m(t,i.loadingClass),p(t,ie),b(t,"lazyloaded"))},re=_(ne),ie=function(e){re({target:e.target})},ae=function(e){var t,n=e.getAttribute(i.srcsetAttr);(t=i.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},oe=_((function(e,t,n,r,a){var o,s,u,c,f,h;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?g(e,i.autosizesClass):e.setAttribute("sizes",r)),s=e.getAttribute(i.srcsetAttr),o=e.getAttribute(i.srcAttr),a&&(c=(u=e.parentNode)&&d.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(s||o||c),f={target:e},g(e,i.loadingClass),h&&(clearTimeout(W),W=l(V,2500),p(e,ie,!0)),c&&v.call(u.getElementsByTagName("source"),ae),s?e.setAttribute("srcset",s):o&&!c&&(Y.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),a&&(s||c)&&z(e,{src:o})),e._lazyRace&&delete e._lazyRace,m(e,i.lazyClass),A((function(){var t=e.complete&&e.naturalWidth>1;h&&!t||(t&&g(e,"ls-is-cached"),ne(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&K--}),!0)})),se=function(e){if(!e._lazyRace){var t,n=U.test(e.nodeName),r=n&&(e.getAttribute(i.sizesAttr)||e.getAttribute("sizes")),a="auto"==r;(!a&&P||!n||!e.getAttribute("src")&&!e.srcset||e.complete||y(e,i.errorClass)||!y(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,a&&S.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,K++,oe(e,t,a,r,n))}},le=w((function(){i.loadMode=3,te()})),ue=function(){3==i.loadMode&&(i.loadMode=2),le()},ce=function(){P||(n.now()-B<999?l(ce,999):(P=!0,i.loadMode=3,te(),s("scroll",ue,!0)))},{_:function(){B=n.now(),r.elements=t.getElementsByClassName(i.lazyClass),T=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),s("scroll",te,!0),s("resize",te,!0),s("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&se(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",te,!0),a.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),s("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?ce():(s("load",ce),t.addEventListener("DOMContentLoaded",te),l(ce,2e4)),r.elements.length?(ee(),A._lsFlush()):te()},checkElems:te,unveil:se,_aLSL:ue}),S=(x=_((function(e,t,n,r){var i,a,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(a=0,o=(i=t.getElementsByTagName("source")).length;a<o;a++)i[a].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)})),O=function(e,t,n){var r,i=e.parentNode;i&&(n=C(e,i,n),(r=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&x(e,i,r,n))},k=w((function(){var e,t=N.length;if(t)for(e=0;e<t;e++)O(N[e])})),{_:function(){N=t.getElementsByClassName(i.autosizesClass),s("resize",k)},checkElems:k,updateElem:O}),M=function(){!M.i&&t.getElementsByClassName&&(M.i=!0,S._(),L._())};var N,x,O,k;var T,P,W,j,B,q,F,R,D,H,I,$,U,Y,G,J,K,Q,V,X,Z,ee,te,ne,re,ie,ae,oe,se,le,ue,ce;var de,fe,he,ve,ye,ge,me;return l((function(){i.init&&M()})),r={cfg:i,autoSizer:S,loader:L,init:M,uP:z,aC:g,rC:m,hC:y,fire:b,gW:C,rAF:A}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},function(e,t,n){"use strict";n.r(t);n(0),n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.navLinks=document.querySelectorAll(".header__nav > a"),this.menuIcon=document.querySelector(".header__menu-icon"),this.navEl=document.querySelector(".header__nav"),this.headerEl=document.querySelector(".header"),this.headerChildren=document.querySelector(".header > *"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",(function(){return e.navOnScroll()})),this.navLinks.forEach((function(t){return t.addEventListener("click",(function(){return e.toggleNav()}))})),this.menuIcon.addEventListener("click",(function(){return e.toggleNav()}))}},{key:"toggleNav",value:function(){this.navEl.classList.toggle("opened")}},{key:"navOnScroll",value:function(){window.scrollY>2*this.headerEl.offsetHeight?(this.headerEl.classList.add("smaller"),this.headerChildren.classList.add("adjusted"),this.headerEl.style.transition="1s"):(this.headerEl.classList.remove("smaller"),this.headerChildren.classList.remove("adjusted"))}}])&&r(t.prototype,n),i&&r(t,i),e}())}]);