const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D6TNUSQ_.js","assets/vendor-9_aBDW1-.js","assets/lucide-DM1g0vjl.js","assets/aos-B5LL9sPA.js","assets/Home-CfWoIi2A.css","assets/Blog-zycbrFqF.js","assets/useReadingTime-D6q00ocr.js","assets/Blog-C3-PUZki.css","assets/BlogPost-muwK092n.js","assets/BlogPost-F2JtnmSN.css","assets/NotFound-C4VGpsh0.js","assets/NotFound-BJVAgHV8.css"])))=>i.map(i=>d[i]);
import{i as so,s as jx,d as Pu,u as zt,a as Kx,c as ii,p as kc,r as ft,w as Iu,h as jg,n as Kg,b as Zg,o as Wr,e as ot,f as z,g as Zs,j as Xs,k as qt,l as Hs,m as fi,q as vs,t as et,v as as,x as hn,y as zf,z as au,F as Xi,A as cr,B as al,C as Vc,D as $a,E as Zx,G as ql,H as Jx,I as Qx,T as eM,J as tM}from"./vendor-9_aBDW1-.js";import{A as nM,X as iM,S as rM,a as sM,W as oM,P as aM,b as lM,G as cM,C as zp,c as uM,d as hM,R as dM,L as fM,e as pM,D as mM,f as _M,g as gM,h as vM,i as xM,Z as MM,M as Jg,j as Qg,k as e0}from"./lucide-DM1g0vjl.js";import{r as yM,g as SM}from"./aos-B5LL9sPA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/*!
 * vue-router v5.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const ko=typeof document<"u";function t0(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function TM(r){return r.__esModule||r[Symbol.toStringTag]==="Module"||r.default&&t0(r.default)}const At=Object.assign;function Yu(r,e){const t={};for(const n in e){const i=e[n];t[n]=Ki(i)?i.map(r):r(i)}return t}const ll=()=>{},Ki=Array.isArray;function Hp(r,e){const t={};for(const n in r)t[n]=n in e?e[n]:r[n];return t}let Qt=(function(r){return r[r.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",r[r.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",r[r.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",r[r.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",r[r.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",r})({});const n0=Symbol("");Qt.MATCHER_NOT_FOUND+"",Qt.NAVIGATION_GUARD_REDIRECT+"",Qt.NAVIGATION_ABORTED+"",Qt.NAVIGATION_CANCELLED+"",Qt.NAVIGATION_DUPLICATED+"";function sa(r,e){return At(new Error,{type:r,[n0]:!0},e)}function Sr(r,e){return r instanceof Error&&n0 in r&&(e==null||!!(r.type&e))}const EM=["params","query","hash"];function bM(r){if(typeof r=="string")return r;if(r.path!=null)return r.path;const e={};for(const t of EM)t in r&&(e[t]=r[t]);return JSON.stringify(e,null,2)}const AM=Symbol(""),Gp=Symbol(""),Lu=Symbol(""),Hf=Symbol(""),ud=Symbol("");function QL(){return so(Lu)}function wM(r){return so(Hf)}/*!
 * vue-router v5.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const i0=/#/g,RM=/&/g,CM=/\//g,PM=/=/g,IM=/\?/g,r0=/\+/g,LM=/%5B/g,DM=/%5D/g,s0=/%5E/g,NM=/%60/g,o0=/%7B/g,UM=/%7C/g,a0=/%7D/g,OM=/%20/g;function Gf(r){return r==null?"":encodeURI(""+r).replace(UM,"|").replace(LM,"[").replace(DM,"]")}function FM(r){return Gf(r).replace(o0,"{").replace(a0,"}").replace(s0,"^")}function hd(r){return Gf(r).replace(r0,"%2B").replace(OM,"+").replace(i0,"%23").replace(RM,"%26").replace(NM,"`").replace(o0,"{").replace(a0,"}").replace(s0,"^")}function BM(r){return hd(r).replace(PM,"%3D")}function kM(r){return Gf(r).replace(i0,"%23").replace(IM,"%3F")}function VM(r){return kM(r).replace(CM,"%2F")}function bl(r){if(r==null)return null;try{return decodeURIComponent(""+r)}catch{}return""+r}const zM=/\/$/,HM=r=>r.replace(zM,"");function $u(r,e,t="/"){let n,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(n=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=r(s.slice(1))),a>=0&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=qM(n??e,t),{fullPath:n+s+o,path:n,query:i,hash:bl(o)}}function GM(r,e){const t=e.query?r(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Wp(r,e){return!e||!r.toLowerCase().startsWith(e.toLowerCase())?r:r.slice(e.length)||"/"}function WM(r,e,t){const n=e.matched.length-1,i=t.matched.length-1;return n>-1&&n===i&&oa(e.matched[n],t.matched[i])&&l0(e.params,t.params)&&r(e.query)===r(t.query)&&e.hash===t.hash}function oa(r,e){return(r.aliasOf||r)===(e.aliasOf||e)}function l0(r,e){if(Object.keys(r).length!==Object.keys(e).length)return!1;for(var t in r)if(!XM(r[t],e[t]))return!1;return!0}function XM(r,e){return Ki(r)?Xp(r,e):Ki(e)?Xp(e,r):(r&&r.valueOf())===(e&&e.valueOf())}function Xp(r,e){return Ki(e)?r.length===e.length&&r.every((t,n)=>t===e[n]):r.length===1&&r[0]===e}function qM(r,e){if(r.startsWith("/"))return r;if(!r)return e;const t=e.split("/"),n=r.split("/"),i=n[n.length-1];(i===".."||i===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o).join("/")}const Kr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let dd=(function(r){return r.pop="pop",r.push="push",r})({}),ju=(function(r){return r.back="back",r.forward="forward",r.unknown="",r})({});function YM(r){if(!r)if(ko){const e=document.querySelector("base");r=e&&e.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),HM(r)}const $M=/^[^#]+#/;function jM(r,e){return r.replace($M,"#")+e}function KM(r,e){const t=document.documentElement.getBoundingClientRect(),n=r.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Du=()=>({left:window.scrollX,top:window.scrollY});function ZM(r){let e;if("el"in r){const t=r.el,n=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=KM(i,r)}else e=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qp(r,e){return(history.state?history.state.position-e:-1)+r}const fd=new Map;function JM(r,e){fd.set(r,e)}function QM(r){const e=fd.get(r);return fd.delete(r),e}function ey(r){return typeof r=="string"||r&&typeof r=="object"}function c0(r){return typeof r=="string"||typeof r=="symbol"}function ty(r){const e={};if(r===""||r==="?")return e;const t=(r[0]==="?"?r.slice(1):r).split("&");for(let n=0;n<t.length;++n){const i=t[n].replace(r0," "),s=i.indexOf("="),o=bl(s<0?i:i.slice(0,s)),a=s<0?null:bl(i.slice(s+1));if(o in e){let l=e[o];Ki(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Yp(r){let e="";for(let t in r){const n=r[t];if(t=BM(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ki(n)?n.map(i=>i&&hd(i)):[n&&hd(n)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function ny(r){const e={};for(const t in r){const n=r[t];n!==void 0&&(e[t]=Ki(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return e}function Ca(){let r=[];function e(n){return r.push(n),()=>{const i=r.indexOf(n);i>-1&&r.splice(i,1)}}function t(){r=[]}return{add:e,list:()=>r.slice(),reset:t}}function os(r,e,t,n,i,s=o=>o()){const o=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(sa(Qt.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):ey(d)?l(sa(Qt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&n.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>r.call(n&&n.instances[i],e,t,c));let h=Promise.resolve(u);r.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Ku(r,e,t,n,i=s=>s()){const s=[];for(const o of r)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(t0(l)){const c=(l.__vccOpts||l)[e];c&&s.push(os(c,t,n,o,a,i))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=TM(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&os(d,t,n,o,a,i)()}))}}return s}function iy(r,e){const t=[],n=[],i=[],s=Math.max(e.matched.length,r.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(r.matched.find(c=>oa(c,a))?n.push(a):t.push(a));const l=r.matched[o];l&&(e.matched.find(c=>oa(c,l))||i.push(l))}return[t,n,i]}/*!
 * vue-router v5.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let ry=()=>location.protocol+"//"+location.host;function u0(r,e){const{pathname:t,search:n,hash:i}=e,s=r.indexOf("#");if(s>-1){let o=i.includes(r.slice(s))?r.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),Wp(a,"")}return Wp(t,r)+n+i}function sy(r,e,t,n){let i=[],s=[],o=null;const a=({state:d})=>{const f=u0(r,location),p=t.value,g=e.value;let m=0;if(d){if(t.value=f,e.value=d,o&&o===p){o=null;return}m=g?d.position-g.position:0}else n(f);i.forEach(_=>{_(t.value,p,{delta:m,type:dd.pop,direction:m?m>0?ju.forward:ju.back:ju.unknown})})};function l(){o=t.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(At({},d.state,{scroll:Du()}),"")}}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function $p(r,e,t,n=!1,i=!1){return{back:r,current:e,forward:t,replaced:n,position:window.history.length,scroll:i?Du():null}}function oy(r){const{history:e,location:t}=window,n={value:u0(r,t)},i={value:e.state};i.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=r.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?r:r.slice(h))+l:ry()+r+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function o(l,c){s(l,At({},e.state,$p(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),n.value=l}function a(l,c){const u=At({},i.value,e.state,{forward:l,scroll:Du()});s(u.current,u,!0),s(l,At({},$p(n.value,l,null),{position:u.position+1},c),!1),n.value=l}return{location:n,state:i,push:a,replace:o}}function ay(r){r=YM(r);const e=oy(r),t=sy(r,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=At({location:"",base:r,go:n,createHref:jM.bind(null,r)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ly(r){return r=location.host?r||location.pathname+location.search:"",r.includes("#")||(r+="#"),ay(r)}let qs=(function(r){return r[r.Static=0]="Static",r[r.Param=1]="Param",r[r.Group=2]="Group",r})({});var fn=(function(r){return r[r.Static=0]="Static",r[r.Param=1]="Param",r[r.ParamRegExp=2]="ParamRegExp",r[r.ParamRegExpEnd=3]="ParamRegExpEnd",r[r.EscapeNext=4]="EscapeNext",r})(fn||{});const cy={type:qs.Static,value:""},uy=/[a-zA-Z0-9_]/;function hy(r){if(!r)return[[]];if(r==="/")return[[cy]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=fn.Static,n=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===fn.Static?s.push({type:qs.Static,value:c}):t===fn.Param||t===fn.ParamRegExp||t===fn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:qs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<r.length;){if(l=r[a++],l==="\\"&&t!==fn.ParamRegExp){n=t,t=fn.EscapeNext;continue}switch(t){case fn.Static:l==="/"?(c&&h(),o()):l===":"?(h(),t=fn.Param):d();break;case fn.EscapeNext:d(),t=n;break;case fn.Param:l==="("?t=fn.ParamRegExp:uy.test(l)?d():(h(),t=fn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case fn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=fn.ParamRegExpEnd:u+=l;break;case fn.ParamRegExpEnd:h(),t=fn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===fn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}const jp="[^/]+?",dy={sensitive:!1,strict:!1,start:!0,end:!0};var qn=(function(r){return r[r._multiplier=10]="_multiplier",r[r.Root=90]="Root",r[r.Segment=40]="Segment",r[r.SubSegment=30]="SubSegment",r[r.Static=40]="Static",r[r.Dynamic=20]="Dynamic",r[r.BonusCustomRegExp=10]="BonusCustomRegExp",r[r.BonusWildcard=-50]="BonusWildcard",r[r.BonusRepeatable=-20]="BonusRepeatable",r[r.BonusOptional=-8]="BonusOptional",r[r.BonusStrict=.7000000000000001]="BonusStrict",r[r.BonusCaseSensitive=.25]="BonusCaseSensitive",r})(qn||{});const fy=/[.+*?^${}()[\]/\\]/g;function py(r,e){const t=At({},dy,e),n=[];let i=t.start?"^":"";const s=[];for(const c of r){const u=c.length?[]:[qn.Root];t.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=qn.Segment+(t.sensitive?qn.BonusCaseSensitive:0);if(d.type===qs.Static)h||(i+="/"),i+=d.value.replace(fy,"\\$&"),f+=qn.Static;else if(d.type===qs.Param){const{value:p,repeatable:g,optional:m,regexp:_}=d;s.push({name:p,repeatable:g,optional:m});const v=_||jp;if(v!==jp){f+=qn.BonusCustomRegExp;try{new RegExp(`(${v})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+M.message)}}let y=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),i+=y,f+=qn.Dynamic,m&&(f+=qn.BonusOptional),g&&(f+=qn.BonusRepeatable),v===".*"&&(f+=qn.BonusWildcard)}u.push(f)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=qn.BonusStrict}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of r){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===qs.Static)u+=f.value;else if(f.type===qs.Param){const{value:p,repeatable:g,optional:m}=f,_=p in c?c[p]:"";if(Ki(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Ki(_)?_.join("/"):_;if(!v)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function my(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=e[t]-r[t];if(n)return n;t++}return r.length<e.length?r.length===1&&r[0]===qn.Static+qn.Segment?-1:1:r.length>e.length?e.length===1&&e[0]===qn.Static+qn.Segment?1:-1:0}function h0(r,e){let t=0;const n=r.score,i=e.score;for(;t<n.length&&t<i.length;){const s=my(n[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-n.length)===1){if(Kp(n))return 1;if(Kp(i))return-1}return i.length-n.length}function Kp(r){const e=r[r.length-1];return r.length>0&&e[e.length-1]<0}const _y={strict:!1,end:!0,sensitive:!1};function gy(r,e,t){const n=py(hy(r.path),t),i=At(n,{record:r,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function vy(r,e){const t=[],n=new Map;e=Hp(_y,e);function i(h){return n.get(h)}function s(h,d,f){const p=!f,g=Jp(h);g.aliasOf=f&&f.record;const m=Hp(e,h),_=[g];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const T of M)_.push(Jp(At({},g,{components:f?f.record.components:g.components,path:T,aliasOf:f?f.record:g})))}let v,y;for(const M of _){const{path:T}=M;if(d&&T[0]!=="/"){const b=d.record.path,A=b[b.length-1]==="/"?"":"/";M.path=d.record.path+(T&&A+T)}if(v=gy(M,d,m),f?f.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),p&&h.name&&!Qp(v)&&o(h.name)),d0(v)&&l(v),g.children){const b=g.children;for(let A=0;A<b.length;A++)s(b[A],v,f&&f.children[A])}f=f||v}return y?()=>{o(y)}:ll}function o(h){if(c0(h)){const d=n.get(h);d&&(n.delete(h),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(h);d>-1&&(t.splice(d,1),h.record.name&&n.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const d=yy(h,t);t.splice(d,0,h),h.record.name&&!Qp(h)&&n.set(h.record.name,h)}function c(h,d){let f,p={},g,m;if("name"in h&&h.name){if(f=n.get(h.name),!f)throw sa(Qt.MATCHER_NOT_FOUND,{location:h});m=f.record.name,p=At(Zp(d.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),h.params&&Zp(h.params,f.keys.map(y=>y.name))),g=f.stringify(p)}else if(h.path!=null)g=h.path,f=t.find(y=>y.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=d.name?n.get(d.name):t.find(y=>y.re.test(d.path)),!f)throw sa(Qt.MATCHER_NOT_FOUND,{location:h,currentLocation:d});m=f.record.name,p=At({},d.params,h.params),g=f.stringify(p)}const _=[];let v=f;for(;v;)_.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:_,meta:My(_)}}r.forEach(h=>s(h));function u(){t.length=0,n.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Zp(r,e){const t={};for(const n of e)n in r&&(t[n]=r[n]);return t}function Jp(r){const e={path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:r.aliasOf,beforeEnter:r.beforeEnter,props:xy(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xy(r){const e={},t=r.props||!1;if("component"in r)e.default=t;else for(const n in r.components)e[n]=typeof t=="object"?t[n]:t;return e}function Qp(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function My(r){return r.reduce((e,t)=>At(e,t.meta),{})}function yy(r,e){let t=0,n=e.length;for(;t!==n;){const s=t+n>>1;h0(r,e[s])<0?n=s:t=s+1}const i=Sy(r);return i&&(n=e.lastIndexOf(i,n-1)),n}function Sy(r){let e=r;for(;e=e.parent;)if(d0(e)&&h0(r,e)===0)return e}function d0({record:r}){return!!(r.name||r.components&&Object.keys(r.components).length||r.redirect)}function em(r){const e=so(Lu),t=so(Hf),n=ii(()=>{const l=zt(r.to);return e.resolve(l)}),i=ii(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(oa.bind(null,u));if(d>-1)return d;const f=tm(l[c-2]);return c>1&&tm(u)===f&&h[h.length-1].path!==f?h.findIndex(oa.bind(null,l[c-2])):d}),s=ii(()=>i.value>-1&&Ay(t.params,n.value.params)),o=ii(()=>i.value>-1&&i.value===t.matched.length-1&&l0(t.params,n.value.params));function a(l={}){if(by(l)){const c=e[zt(r.replace)?"replace":"push"](zt(r.to)).catch(ll);return r.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:ii(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}function Ty(r){return r.length===1?r[0]:r}const Ey=Pu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:em,setup(r,{slots:e}){const t=Zg(em(r)),{options:n}=so(Lu),i=ii(()=>({[nm(r.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[nm(r.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Ty(e.default(t));return r.custom?s:jg("a",{"aria-current":t.isExactActive?r.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Vo=Ey;function by(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const e=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return r.preventDefault&&r.preventDefault(),!0}}function Ay(r,e){for(const t in e){const n=e[t],i=r[t];if(typeof n=="string"){if(n!==i)return!1}else if(!Ki(i)||i.length!==n.length||n.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function tm(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const nm=(r,e,t)=>r??e??t,wy=Pu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:e,slots:t}){const n=so(ud),i=ii(()=>r.route||n.value),s=so(Gp,0),o=ii(()=>{let c=zt(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ii(()=>i.value.matched[o.value]);kc(Gp,ii(()=>o.value+1)),kc(AM,a),kc(ud,i);const l=ft();return Iu(()=>[l.value,a.value,r.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!oa(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=r.name,h=a.value,d=h&&h.components[u];if(!d)return im(t.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=jg(d,At({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return im(t.default,{Component:m,route:c})||m}}});function im(r,e){if(!r)return null;const t=r(e);return t.length===1?t[0]:t}const Ry=wy;function Cy(r){const e=vy(r.routes,r),t=r.parseQuery||ty,n=r.stringifyQuery||Yp,i=r.history,s=Ca(),o=Ca(),a=Ca(),l=jx(Kr);let c=Kr;ko&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yu.bind(null,F=>""+F),h=Yu.bind(null,VM),d=Yu.bind(null,bl);function f(F,$){let te,se;return c0(F)?(te=e.getRecordMatcher(F),se=$):se=F,e.addRoute(se,te)}function p(F){const $=e.getRecordMatcher(F);$&&e.removeRoute($)}function g(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function _(F,$){if($=At({},$||l.value),typeof F=="string"){const ce=$u(t,F,$.path),be=e.resolve({path:ce.path},$),Ie=i.createHref(ce.fullPath);return At(ce,be,{params:d(be.params),hash:bl(ce.hash),redirectedFrom:void 0,href:Ie})}let te;if(F.path!=null)te=At({},F,{path:$u(t,F.path,$.path).path});else{const ce=At({},F.params);for(const be in ce)ce[be]==null&&delete ce[be];te=At({},F,{params:h(ce)}),$.params=h($.params)}const se=e.resolve(te,$),de=F.hash||"";se.params=u(d(se.params));const Ee=GM(n,At({},F,{hash:FM(de),path:se.path})),oe=i.createHref(Ee);return At({fullPath:Ee,hash:de,query:n===Yp?ny(F.query):F.query||{}},se,{redirectedFrom:void 0,href:oe})}function v(F){return typeof F=="string"?$u(t,F,l.value.path):At({},F)}function y(F,$){if(c!==F)return sa(Qt.NAVIGATION_CANCELLED,{from:$,to:F})}function M(F){return A(F)}function T(F){return M(At(v(F),{replace:!0}))}function b(F,$){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:se}=te;let de=typeof se=="function"?se(F,$):se;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=v(de):{path:de},de.params={}),At({query:F.query,hash:F.hash,params:de.path!=null?{}:F.params},de)}}function A(F,$){const te=c=_(F),se=l.value,de=F.state,Ee=F.force,oe=F.replace===!0,ce=b(te,se);if(ce)return A(At(v(ce),{state:typeof ce=="object"?At({},de,ce.state):de,force:Ee,replace:oe}),$||te);const be=te;be.redirectedFrom=$;let Ie;return!Ee&&WM(n,se,te)&&(Ie=sa(Qt.NAVIGATION_DUPLICATED,{to:be,from:se}),re(se,se,!0,!1)),(Ie?Promise.resolve(Ie):R(be,se)).catch(X=>Sr(X)?Sr(X,Qt.NAVIGATION_GUARD_REDIRECT)?X:P(X):q(X,be,se)).then(X=>{if(X){if(Sr(X,Qt.NAVIGATION_GUARD_REDIRECT))return A(At({replace:oe},v(X.to),{state:typeof X.to=="object"?At({},de,X.to.state):de,force:Ee}),$||be)}else X=L(be,se,!0,oe,de);return C(be,se,X),X})}function x(F,$){const te=y(F,$);return te?Promise.reject(te):Promise.resolve()}function S(F){const $=Oe.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(F):F()}function R(F,$){let te;const[se,de,Ee]=iy(F,$);te=Ku(se.reverse(),"beforeRouteLeave",F,$);for(const ce of se)ce.leaveGuards.forEach(be=>{te.push(os(be,F,$))});const oe=x.bind(null,F,$);return te.push(oe),J(te).then(()=>{te=[];for(const ce of s.list())te.push(os(ce,F,$));return te.push(oe),J(te)}).then(()=>{te=Ku(de,"beforeRouteUpdate",F,$);for(const ce of de)ce.updateGuards.forEach(be=>{te.push(os(be,F,$))});return te.push(oe),J(te)}).then(()=>{te=[];for(const ce of Ee)if(ce.beforeEnter)if(Ki(ce.beforeEnter))for(const be of ce.beforeEnter)te.push(os(be,F,$));else te.push(os(ce.beforeEnter,F,$));return te.push(oe),J(te)}).then(()=>(F.matched.forEach(ce=>ce.enterCallbacks={}),te=Ku(Ee,"beforeRouteEnter",F,$,S),te.push(oe),J(te))).then(()=>{te=[];for(const ce of o.list())te.push(os(ce,F,$));return te.push(oe),J(te)}).catch(ce=>Sr(ce,Qt.NAVIGATION_CANCELLED)?ce:Promise.reject(ce))}function C(F,$,te){a.list().forEach(se=>S(()=>se(F,$,te)))}function L(F,$,te,se,de){const Ee=y(F,$);if(Ee)return Ee;const oe=$===Kr,ce=ko?history.state:{};te&&(se||oe?i.replace(F.fullPath,At({scroll:oe&&ce&&ce.scroll},de)):i.push(F.fullPath,de)),l.value=F,re(F,$,te,oe),P()}let N;function k(){N||(N=i.listen((F,$,te)=>{if(!Ve.listening)return;const se=_(F),de=b(se,Ve.currentRoute.value);if(de){A(At(de,{replace:!0,force:!0}),se).catch(ll);return}c=se;const Ee=l.value;ko&&JM(qp(Ee.fullPath,te.delta),Du()),R(se,Ee).catch(oe=>Sr(oe,Qt.NAVIGATION_ABORTED|Qt.NAVIGATION_CANCELLED)?oe:Sr(oe,Qt.NAVIGATION_GUARD_REDIRECT)?(A(At(v(oe.to),{force:!0}),se).then(ce=>{Sr(ce,Qt.NAVIGATION_ABORTED|Qt.NAVIGATION_DUPLICATED)&&!te.delta&&te.type===dd.pop&&i.go(-1,!1)}).catch(ll),Promise.reject()):(te.delta&&i.go(-te.delta,!1),q(oe,se,Ee))).then(oe=>{oe=oe||L(se,Ee,!1),oe&&(te.delta&&!Sr(oe,Qt.NAVIGATION_CANCELLED)?i.go(-te.delta,!1):te.type===dd.pop&&Sr(oe,Qt.NAVIGATION_ABORTED|Qt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),C(se,Ee,oe)}).catch(ll)}))}let H=Ca(),V=Ca(),O;function q(F,$,te){P(F);const se=V.list();return se.length?se.forEach(de=>de(F,$,te)):console.error(F),Promise.reject(F)}function Y(){return O&&l.value!==Kr?Promise.resolve():new Promise((F,$)=>{H.add([F,$])})}function P(F){return O||(O=!F,k(),H.list().forEach(([$,te])=>F?te(F):$()),H.reset()),F}function re(F,$,te,se){const{scrollBehavior:de}=r;if(!ko||!de)return Promise.resolve();const Ee=!te&&QM(qp(F.fullPath,0))||(se||!te)&&history.state&&history.state.scroll||null;return Kg().then(()=>de(F,$,Ee)).then(oe=>oe&&ZM(oe)).catch(oe=>q(oe,F,$))}const ae=F=>i.go(F);let Ne;const Oe=new Set,Ve={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:_,options:r,push:M,replace:T,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:Y,install(F){F.component("RouterLink",Vo),F.component("RouterView",Ry),F.config.globalProperties.$router=Ve,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(l)}),ko&&!Ne&&l.value===Kr&&(Ne=!0,M(i.location).catch(se=>{}));const $={};for(const se in Kr)Object.defineProperty($,se,{get:()=>l.value[se],enumerable:!0});F.provide(Lu,Ve),F.provide(Hf,Kx($)),F.provide(ud,l);const te=F.unmount;Oe.add(F),F.unmount=function(){Oe.delete(F),Oe.size<1&&(c=Kr,N&&N(),N=null,l.value=Kr,Ne=!1,O=!1),te()}}};function J(F){return F.reduce(($,te)=>$.then(()=>S(te)),Promise.resolve())}return Ve}const rm="/website_3.0/assets/light-DIg6qvTy.png",sm="/website_3.0/assets/dark-D3srNl-h.png",Xr=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},Py={class:"header"},Iy={class:"nav container"},Ly={class:"logo"},Dy={class:"nav-links"},Ny={class:"nav-actions"},Uy={class:"theme-icon-image"},Oy=["src","alt"],Fy=["src","alt"],By={class:"back-to-top-content"},ky={key:0,class:"mobile-menu"},Vy={__name:"Header",props:{isDark:Boolean},emits:["toggle-theme"],setup(r,{emit:e}){const t=_=>{if(window.location.pathname!=="/")window.location.href=`/#${_.substring(1)}`;else{const v=document.querySelector(_);v&&v.scrollIntoView({behavior:"smooth",block:"start"})}},n=r,i=e,s=ft(!1),o=ft(""),a=ft(!1),l=ft(!1),c=ft(0),u=ii(()=>n.isDark?sm:rm),h=()=>{a.value||(a.value=!0,i("toggle-theme"),setTimeout(()=>{a.value=!1},300))},d=()=>{s.value=!s.value},f=()=>{s.value=!1},p=()=>{window.scrollTo({top:0,behavior:"smooth"})},g=()=>{window.jinrishici&&window.jinrishici.load(_=>{o.value=_.data.content})},m=()=>{const _=document.createElement("script");_.src="https://sdk.jinrishici.com/v2/browser/jinrishici.js",_.charset="utf-8",_.onload=()=>{g()},document.head.appendChild(_)};return Wr(()=>{m(),window.addEventListener("scroll",()=>{const _=document.querySelector(".header");_&&(window.scrollY>10?_.classList.add("scrolled"):_.classList.remove("scrolled")),window.scrollY>300?l.value=!0:l.value=!1;const v=document.documentElement.scrollHeight-document.documentElement.clientHeight,y=window.scrollY/v*100;c.value=Math.min(100,Math.max(0,y))})}),(_,v)=>(et(),ot("header",Py,[z("div",{class:"scroll-progress",style:Xs({width:c.value+"%"})},null,4),z("nav",Iy,[z("div",Ly,[qt(zt(Vo),{to:"/",class:"logo-text"},{default:Hs(()=>[as(hn(o.value||"ContinueYN"),1)]),_:1})]),z("ul",Dy,[z("li",null,[qt(zt(Vo),{to:"/",class:"nav-link"},{default:Hs(()=>[...v[10]||(v[10]=[as("首页",-1)])]),_:1})]),z("li",null,[z("a",{href:"#about",class:"nav-link",onClick:v[0]||(v[0]=fi(y=>t("#about"),["prevent"]))},"关于")]),z("li",null,[z("a",{href:"#skills",class:"nav-link",onClick:v[1]||(v[1]=fi(y=>t("#skills"),["prevent"]))},"技能")]),z("li",null,[z("a",{href:"#projects",class:"nav-link",onClick:v[2]||(v[2]=fi(y=>t("#projects"),["prevent"]))},"项目")]),z("li",null,[z("a",{href:"#contact",class:"nav-link",onClick:v[3]||(v[3]=fi(y=>t("#contact"),["prevent"]))},"联系")]),z("li",null,[qt(zt(Vo),{to:"/blog",class:"nav-link"},{default:Hs(()=>[...v[11]||(v[11]=[as("文章",-1)])]),_:1})])]),z("div",Ny,[z("button",{onClick:h,class:vs(["theme-toggle",{animating:a.value}]),"aria-label":"切换主题"},[z("div",Uy,[z("img",{src:u.value,alt:r.isDark?"切换到日间模式":"切换到夜间模式",class:"theme-icon current",loading:"lazy"},null,8,Oy),z("img",{src:r.isDark?zt(rm):zt(sm),alt:r.isDark?"日间模式":"夜间模式",class:"theme-icon next",loading:"lazy"},null,8,Fy)])],2),z("button",{onClick:p,class:vs(["back-to-top",{show:l.value}]),"aria-label":"回到顶部"},[z("div",By,[v[12]||(v[12]=z("div",{class:"sakura-petal petal-1"},null,-1)),v[13]||(v[13]=z("div",{class:"sakura-petal petal-2"},null,-1)),v[14]||(v[14]=z("div",{class:"sakura-petal petal-3"},null,-1)),v[15]||(v[15]=z("div",{class:"star-icon"},"✦",-1)),qt(zt(nM),{size:"20",class:"arrow-icon"})]),v[16]||(v[16]=z("div",{class:"back-to-top-glow"},null,-1))],2),z("button",{class:"mobile-menu-btn",onClick:d,"aria-label":"切换菜单"},[...v[17]||(v[17]=[z("span",null,null,-1),z("span",null,null,-1),z("span",null,null,-1)])])])]),s.value?(et(),ot("div",ky,[qt(zt(Vo),{to:"/",class:"mobile-nav-link",onClick:v[4]||(v[4]=y=>f())},{default:Hs(()=>[...v[18]||(v[18]=[as("首页",-1)])]),_:1}),z("a",{href:"#about",class:"mobile-nav-link",onClick:v[5]||(v[5]=fi(()=>{t("#about"),f()},["prevent"]))},"关于"),z("a",{href:"#skills",class:"mobile-nav-link",onClick:v[6]||(v[6]=fi(()=>{t("#skills"),f()},["prevent"]))},"技能"),z("a",{href:"#projects",class:"mobile-nav-link",onClick:v[7]||(v[7]=fi(()=>{t("#projects"),f()},["prevent"]))},"项目"),z("a",{href:"#contact",class:"mobile-nav-link",onClick:v[8]||(v[8]=fi(()=>{t("#contact"),f()},["prevent"]))},"联系"),qt(zt(Vo),{to:"/blog",class:"mobile-nav-link",onClick:v[9]||(v[9]=y=>f())},{default:Hs(()=>[...v[19]||(v[19]=[as("博客",-1)])]),_:1})])):Zs("",!0)]))}},zy=Xr(Vy,[["__scopeId","data-v-aeadc841"]]),Hy="/website_3.0/assets/user-BhXDwF8C.jpg",Gy="/website_3.0/assets/background-music-CXiIKsBW.mp3",Wy={id:"home",class:"hero"},Xy={class:"container"},qy={class:"hero-content"},Yy={class:"hero-text"},$y={class:"hero-actions fade-in-up",style:{"animation-delay":"0.4s"}},jy={class:"hero-visual"},Ky={class:"avatar-wrapper"},Zy={class:"audio-control-inner"},Jy={key:0,class:"play-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},Qy={key:1,class:"pause-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},eS={__name:"Hero",setup(r){const e=ft(null),t=ft(null),n=ft(!1);let i=null,s=null,o=null,a=null,l=null,c=null,u=175;const h=ft(!1),d=()=>{const M=h.value;h.value=document.documentElement.classList.contains("dark"),M!==h.value&&e.value&&e.value.getContext("2d").clearRect(0,0,600,600)};Wr(()=>{d(),v(),window.addEventListener("resize",v);const M=new IntersectionObserver((b,A)=>{b.forEach(x=>{x.isIntersecting&&(x.target.classList.add("is-visible"),A.unobserve(x.target))})},{threshold:.12});document.querySelectorAll(".fade-in-up").forEach(b=>M.observe(b)),window.__heroObserver=M,new MutationObserver(()=>{d()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})});const f=async()=>{i||await p(),n.value?m():g()},p=async()=>{try{i=new(window.AudioContext||window.webkitAudioContext),s=i.createAnalyser(),s.fftSize=256,a=new Audio(Gy),a.loop=!0,a.crossOrigin="anonymous",o=i.createMediaElementSource(a),o.connect(s),s.connect(i.destination);const M=s.frequencyBinCount;c=new Uint8Array(M),_()}catch(M){console.error("音频初始化失败:",M)}},g=async()=>{i&&i.state==="suspended"&&await i.resume(),a&&(await a.play(),n.value=!0)},m=()=>{a&&(a.pause(),n.value=!1)},_=()=>{const M=e.value;if(!M)return;const T=M.getContext("2d");let b=0;const A=()=>{if(l=requestAnimationFrame(A),b+=.02,T.clearRect(0,0,M.width,M.height),s&&n.value){s.getByteFrequencyData(c);const x=300,S=300,C=u+30,L=80,N=Math.PI*2/L;for(let k=0;k<L;k++){const H=k*N,O=(c[k]||0)/255,q=Math.sin(k*.8)*.5,Y=Math.cos(k*.5)*.3,P=Math.sin(k*1.2)*.2,re=q+Y+P,ae=Math.max(2,O*40+5+re*25),Ne=x+Math.cos(H)*(C-ae/2),Oe=S+Math.sin(H)*(C-ae/2),Ve=x+Math.cos(H)*(C+ae/2),J=S+Math.sin(H)*(C+ae/2),F=T.createLinearGradient(Ne,Oe,Ve,J);h.value?(F.addColorStop(0,`rgba(138, 43, 226, ${.4+O*.6})`),F.addColorStop(.5,`rgba(170, 126, 247, ${.6+O*.4})`),F.addColorStop(1,`rgba(138, 43, 226, ${.4+O*.6})`)):(F.addColorStop(0,`rgba(255, 255, 255, ${.4+O*.6})`),F.addColorStop(.5,`rgba(167, 254, 215, ${.6+O*.4})`),F.addColorStop(1,`rgba(255, 255, 255, ${.4+O*.6})`)),T.beginPath(),T.moveTo(Ne,Oe),T.lineTo(Ve,J),T.strokeStyle=F,T.lineWidth=1.5+O*2,T.lineCap="round",T.stroke()}T.beginPath(),T.arc(x,S,C,0,Math.PI*2),T.strokeStyle=h.value?"rgba(138, 43, 226, 0.25)":"rgba(66, 239, 172, 0.25)",T.lineWidth=1.5,T.stroke();for(let k=0;k<8;k++){const H=C+30+Math.sin(b+k)*10,V=(Math.sin(b*1.5+k)+1)/2*.15;T.beginPath(),T.arc(x,S,H,0,Math.PI*2),T.strokeStyle=h.value?`rgba(138, 43, 226, ${V})`:`rgba(66, 239, 172, ${V})`,T.lineWidth=1,T.stroke()}}};A()},v=()=>{const M=e.value,T=t.value;M&&T&&(M.width=600,M.height=600,u=T.getBoundingClientRect().width/2)};zf(()=>{l&&cancelAnimationFrame(l),a&&(a.pause(),a=null),o&&(o.disconnect(),o=null),s&&(s.disconnect(),s=null),i&&(i.close(),i=null),window.removeEventListener("resize",v);const M=window.__heroObserver;M&&typeof M.disconnect=="function"&&M.disconnect();try{delete window.__heroObserver}catch{}});const y=M=>{if(window.location.pathname!=="/")window.location.href=`/#${M.substring(1)}`;else{const T=document.querySelector(M);T&&T.scrollIntoView({behavior:"smooth",block:"start"})}};return(M,T)=>(et(),ot("section",Wy,[z("div",Xy,[z("div",qy,[z("div",Yy,[T[2]||(T[2]=au('<h1 class="hero-title fade-in-up" data-v-c3f4a263> HELLO~,I&#39;m <span class="text-gradient" data-v-c3f4a263><svg class="yu animated-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" data-v-c3f4a263><g transform="translate(0,0) scale(0.303,0.303)" data-v-c3f4a263><path fill="#6c91ee" d=" M 185.48 64.76 C 192.71 63.61 199.97 62.42 206.92 60.03 C 212.40 67.09 220.68 70.43 229.20 72.16 C 235.15 72.99 239.42 77.56 244.62 80.11 C 251.60 82.21 254.38 89.64 257.00 95.69 C 247.40 102.40 237.85 109.20 228.28 115.95 C 236.69 119.06 245.47 121.73 252.60 127.42 C 263.68 136.27 275.16 144.73 284.83 155.17 C 294.66 165.50 307.65 171.79 319.28 179.73 C 328.73 186.41 338.79 192.14 348.51 198.39 C 353.39 201.54 359.76 201.16 364.49 204.49 C 374.43 215.99 391.44 215.16 404.21 221.66 C 414.20 226.83 425.47 228.88 435.14 234.72 C 442.02 238.80 450.23 237.91 457.83 239.10 C 460.95 240.11 463.63 242.13 466.52 243.64 C 471.36 246.59 477.20 247.28 482.16 250.00 C 485.19 251.97 487.90 254.40 490.60 256.81 C 486.93 259.83 483.01 262.64 478.63 264.54 C 470.83 267.19 462.11 265.98 454.55 269.41 C 448.80 271.83 442.44 272.09 436.44 273.60 C 431.81 274.46 427.26 275.92 422.54 276.12 C 416.27 276.60 410.13 274.31 403.88 275.25 C 393.33 277.05 382.45 272.99 372.15 276.73 C 364.74 270.85 358.73 263.59 352.43 256.65 C 339.70 249.05 331.56 236.05 320.66 226.30 C 317.65 222.95 312.94 221.59 310.35 217.85 C 303.52 205.45 292.58 196.18 283.10 185.91 C 273.73 178.22 265.59 169.05 259.16 158.76 C 248.92 146.67 235.32 137.64 220.27 132.68 C 206.02 152.30 196.04 174.75 180.45 193.42 C 173.90 201.88 166.93 210.02 160.73 218.75 C 151.98 230.89 140.22 240.42 128.58 249.66 C 119.66 257.34 111.67 266.23 101.61 272.51 C 96.25 275.91 89.40 277.80 86.07 283.69 C 79.22 283.35 74.62 289.32 68.67 291.58 C 59.09 294.83 48.48 298.28 38.48 294.74 C 53.74 281.66 68.98 268.41 82.18 253.19 C 94.20 239.22 107.79 226.66 119.08 212.06 C 126.99 202.02 135.76 192.66 143.28 182.31 C 149.32 171.95 155.60 161.69 160.87 150.91 C 171.22 125.67 191.34 105.75 200.96 80.19 C 195.94 74.91 190.27 70.27 185.48 64.76 Z" data-v-c3f4a263></path><path fill="#6c91ee" d=" M 219.85 215.83 C 229.61 214.15 239.57 213.37 249.47 214.06 C 257.95 213.73 265.70 217.45 273.59 220.01 C 272.11 223.75 270.26 227.40 269.49 231.37 C 269.27 237.34 265.00 243.27 259.16 244.79 C 254.25 245.52 249.27 245.73 244.32 246.16 C 242.84 250.35 240.31 254.07 238.66 258.17 C 238.47 261.99 239.96 265.70 240.43 269.47 C 242.69 274.21 239.52 278.39 237.84 282.56 C 251.42 284.05 264.90 282.40 278.17 279.69 C 285.52 281.21 292.99 283.24 299.90 286.32 C 304.41 289.91 308.55 293.97 313.21 297.39 C 312.72 300.13 312.77 303.06 311.57 305.62 C 303.81 310.87 294.75 315.20 285.16 314.80 C 273.36 314.16 261.51 314.18 249.78 312.67 C 246.98 312.30 243.09 313.17 242.43 316.38 C 241.38 327.89 242.43 339.46 242.72 350.99 C 243.15 358.99 242.91 367.18 244.96 374.99 C 247.23 383.08 246.56 391.58 247.87 399.83 C 250.37 417.91 249.66 436.56 243.98 453.99 C 240.89 462.53 232.64 469.40 223.15 467.95 C 212.97 459.75 206.51 447.91 196.72 439.28 C 192.58 435.84 187.42 433.99 183.11 430.84 C 179.05 425.71 176.64 418.62 169.89 416.29 C 170.51 414.57 171.16 412.86 171.82 411.16 C 178.86 413.22 186.05 414.84 193.36 415.52 C 199.45 415.69 205.46 414.23 211.45 413.39 C 212.85 406.12 213.63 398.74 214.17 391.36 C 215.21 379.77 211.22 368.29 212.81 356.69 C 214.62 345.94 211.32 335.29 209.85 324.72 C 202.19 323.43 194.30 323.40 186.85 325.80 C 173.74 328.30 158.34 330.57 146.76 322.24 C 145.31 321.33 143.90 320.36 142.49 319.40 C 150.92 313.26 159.65 306.98 169.73 303.88 C 178.04 301.91 186.32 299.69 194.74 298.21 C 199.80 297.40 206.67 298.07 209.47 292.61 C 212.05 283.58 210.18 274.30 207.61 265.52 C 207.11 259.84 202.69 255.67 197.99 253.10 C 188.36 250.34 178.08 251.92 168.39 249.45 C 164.73 247.36 161.28 244.74 158.96 241.17 C 167.39 237.70 173.53 229.83 182.91 228.48 C 189.49 227.86 195.60 225.26 202.00 223.83 C 208.44 222.26 213.13 216.74 219.85 215.83 Z" data-v-c3f4a263></path><path fill="#6c91ee" d=" M 119.47 358.44 C 126.45 349.88 125.54 337.83 132.08 328.98 C 142.07 339.53 146.45 353.81 148.78 367.81 C 150.23 373.44 152.93 378.86 152.47 384.85 C 151.88 392.46 149.94 399.91 147.98 407.27 C 143.06 414.16 137.36 420.48 132.55 427.46 C 125.75 426.27 118.11 425.25 113.05 420.06 C 111.05 416.48 109.22 412.25 110.13 408.07 C 112.54 394.82 113.64 381.27 112.68 367.83 C 112.22 363.40 117.16 361.45 119.47 358.44 Z" data-v-c3f4a263></path><path fill="#6c91ee" d=" M 279.81 340.18 C 289.83 342.32 299.83 344.75 310.07 345.70 C 315.91 346.73 322.75 346.43 327.51 350.54 C 336.60 358.10 348.80 362.38 355.08 372.93 C 359.78 381.46 366.41 390.29 365.58 400.53 C 360.76 404.96 356.43 410.41 350.40 413.28 C 341.90 414.99 333.59 410.07 328.19 403.82 C 320.02 394.80 310.30 387.02 303.42 376.91 C 300.66 367.54 289.31 364.92 285.93 356.05 C 283.72 350.83 281.82 345.48 279.81 340.18 Z" data-v-c3f4a263></path></g></svg><svg class="nuo animated-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" data-v-c3f4a263><g transform="translate(0,0) scale(0.303,0.303)" data-v-c3f4a263><path fill="#79bbdc" d=" M 341.07 73.10 C 342.47 70.77 345.41 67.88 348.25 69.74 C 357.79 75.07 367.02 81.31 374.72 89.12 C 385.03 101.93 379.07 119.04 379.16 133.86 C 387.64 137.91 397.15 134.13 405.85 132.57 C 414.82 130.38 423.79 133.36 432.74 134.07 C 438.67 134.10 444.27 140.08 442.18 146.02 C 440.30 152.08 436.15 160.26 428.44 158.39 C 418.64 157.88 408.82 157.36 399.02 157.87 C 390.98 156.86 381.63 155.07 374.78 160.77 C 367.95 170.35 367.10 182.58 361.84 192.94 C 357.60 201.86 350.31 208.68 344.84 216.78 C 342.06 216.19 339.24 215.62 336.45 215.12 C 335.23 216.56 334.00 217.99 332.75 219.40 C 327.49 205.28 332.99 190.73 334.42 176.52 C 335.94 172.04 333.46 168.16 331.22 164.62 C 317.50 167.50 303.76 170.42 290.32 174.42 C 288.44 176.70 288.48 179.96 287.55 182.59 C 285.64 192.14 282.30 201.34 277.94 210.02 C 275.95 213.92 270.02 213.74 267.22 210.76 C 259.49 203.92 256.82 193.66 253.99 184.18 C 246.62 186.51 238.91 190.39 230.99 187.97 C 220.58 184.80 211.36 178.20 203.95 170.31 C 208.03 168.54 212.03 166.40 216.45 165.60 C 228.75 163.49 240.90 160.18 252.39 155.27 C 251.80 139.37 247.13 124.08 242.48 109.00 C 240.50 103.08 240.81 96.52 242.67 90.62 C 244.14 86.55 249.26 86.68 252.85 87.19 C 264.76 89.88 273.11 99.45 280.80 108.16 C 287.54 120.74 286.26 135.41 287.75 149.17 C 303.90 149.56 319.83 146.42 335.40 142.41 C 341.02 125.36 344.34 106.81 340.17 89.04 C 339.51 83.82 337.91 77.82 341.07 73.10 Z" data-v-c3f4a263></path><path fill="#79bbdc" d=" M 185.23 96.98 C 194.31 99.43 202.06 105.11 209.97 110.02 C 209.99 115.37 210.01 120.73 210.03 126.09 C 196.88 136.92 179.35 138.39 163.13 140.43 C 159.76 140.94 156.38 140.12 153.38 138.59 C 147.04 135.44 140.38 132.71 134.89 128.12 C 128.56 121.91 122.88 114.87 119.19 106.76 C 128.60 102.92 138.90 103.43 148.84 102.51 C 160.83 99.97 172.91 97.07 185.23 96.98 Z" data-v-c3f4a263></path><path fill="#79bbdc" d=" M 136.84 202.96 C 147.05 196.41 158.64 190.83 170.92 190.16 C 177.25 193.01 182.93 197.08 188.95 200.51 C 191.27 211.94 188.54 223.47 184.10 234.02 C 180.50 245.00 175.98 255.62 171.13 266.10 C 167.04 274.53 167.23 284.08 164.38 292.86 C 160.17 313.37 158.08 334.27 157.00 355.16 C 172.64 343.02 188.22 330.59 206.02 321.69 C 188.82 347.90 173.29 375.13 156.78 401.77 C 147.36 416.85 142.43 434.09 135.16 450.20 C 132.61 456.13 124.83 458.46 119.01 456.99 C 110.73 452.01 102.95 445.69 96.94 438.09 C 94.81 431.89 98.79 425.99 100.34 420.16 C 103.38 411.08 114.63 408.26 117.57 399.06 C 119.90 390.87 124.44 383.40 125.39 374.84 C 127.71 355.09 127.99 335.16 130.44 315.42 C 133.14 291.85 131.98 267.98 135.98 244.55 C 131.51 244.30 126.56 243.83 122.68 246.59 C 118.31 248.49 113.99 253.17 108.93 251.14 C 94.87 245.98 80.52 239.33 71.16 227.16 C 85.96 218.77 103.91 220.62 118.96 213.00 C 125.28 210.35 131.62 207.50 136.84 202.96 Z" data-v-c3f4a263></path><path fill="#79bbdc" d=" M 290.97 212.88 C 298.07 213.24 305.52 212.13 312.48 213.62 C 317.98 219.40 322.99 225.82 329.45 230.65 C 328.86 233.56 328.33 236.50 327.76 239.42 C 338.92 243.94 351.65 244.55 363.13 240.80 C 376.01 236.03 390.19 239.29 403.49 237.19 C 411.67 232.89 420.29 228.21 429.93 229.13 C 439.87 231.33 448.12 237.42 456.77 242.40 C 455.67 247.37 456.00 256.33 449.38 257.33 C 431.99 259.10 414.48 258.77 397.03 259.21 C 376.24 260.24 355.42 261.94 334.96 265.88 C 332.11 266.60 328.62 267.11 327.27 270.16 C 320.45 280.58 314.66 291.62 308.44 302.38 C 303.14 312.13 297.09 321.86 295.50 333.06 C 296.09 336.74 298.50 339.84 299.24 343.50 C 304.12 366.73 306.38 390.43 307.17 414.13 C 324.82 413.44 342.50 412.33 360.01 409.92 C 364.24 409.69 366.37 405.54 368.28 402.32 C 372.23 391.56 373.33 380.03 376.23 369.00 C 379.77 359.87 381.21 350.15 382.77 340.54 C 364.94 342.73 347.48 347.46 330.44 353.07 C 327.78 353.81 325.17 352.42 322.73 351.53 C 314.43 348.29 308.16 341.68 301.69 335.81 C 310.30 331.15 320.14 329.64 329.49 327.11 C 343.17 323.54 357.56 326.02 371.47 324.44 C 381.77 323.63 388.58 311.99 399.68 315.33 C 412.48 320.14 423.06 330.02 430.91 341.04 C 433.10 347.40 431.63 354.58 428.63 360.49 C 424.28 369.29 425.89 379.85 421.51 388.64 C 412.36 404.31 411.77 425.68 395.39 436.44 C 382.37 441.88 369.51 431.73 356.34 434.33 C 343.41 436.50 330.42 438.20 317.50 440.41 C 310.84 440.55 306.72 446.12 302.04 450.01 C 297.58 447.86 291.78 447.61 288.71 443.26 C 281.45 435.15 281.68 423.47 280.62 413.32 C 279.99 398.59 277.78 384.01 275.51 369.46 C 264.90 377.81 259.37 390.50 250.05 400.04 C 245.88 405.23 239.94 408.54 235.44 413.36 C 231.89 418.65 229.84 424.84 225.97 429.95 C 217.81 441.09 206.47 449.21 196.34 458.41 C 192.11 462.83 185.83 459.23 180.67 458.80 C 190.48 443.74 200.12 428.48 211.67 414.67 C 216.34 409.71 217.92 402.90 221.06 397.03 C 229.74 380.05 236.77 362.18 247.11 346.08 C 254.07 335.25 257.48 322.50 265.05 312.03 C 268.00 307.73 271.77 303.66 272.31 298.19 C 274.08 290.43 276.20 282.64 276.36 274.64 C 260.59 279.13 245.74 286.39 229.96 290.84 C 223.53 293.00 216.14 293.19 210.04 289.93 C 201.38 285.29 193.01 280.12 184.24 275.67 C 184.15 274.97 183.96 273.57 183.87 272.87 C 196.85 264.03 212.77 261.45 227.96 258.91 C 244.33 257.12 260.62 254.71 276.80 251.61 C 280.22 250.80 283.49 249.47 286.75 248.18 C 286.45 236.23 288.59 224.52 290.97 212.88 Z" data-v-c3f4a263></path></g></svg></span></h1><p class="hero-description fade-in-up" style="animation-delay:0.2s;" data-v-c3f4a263> 一名AI应用全栈开发者，专注于创造优雅、高效的数字化解决方案。 </p>',2)),z("div",$y,[z("a",{href:"#projects",class:"btn",onClick:T[0]||(T[0]=fi(b=>y("#projects"),["prevent"]))},"Show"),z("a",{href:"#contact",class:"btn btn-outline",onClick:T[1]||(T[1]=fi(b=>y("#contact"),["prevent"]))},"Contact")]),T[3]||(T[3]=au('<div class="hero-stats fade-in-up" style="animation-delay:0.6s;" data-v-c3f4a263><div class="stat" data-v-c3f4a263><span class="stat-number" data-v-c3f4a263>0+</span><span class="stat-label" data-v-c3f4a263>年经验</span></div><div class="stat" data-v-c3f4a263><span class="stat-number" data-v-c3f4a263>0+</span><span class="stat-label" data-v-c3f4a263>项目完成</span></div><div class="stat" data-v-c3f4a263><span class="stat-number" data-v-c3f4a263>100%</span><span class="stat-label" data-v-c3f4a263>客户满意</span></div></div>',1))]),z("div",jy,[z("div",Ky,[z("canvas",{ref_key:"waveCanvas",ref:e,class:"wave-canvas"},null,512),z("div",{class:"avatar",ref_key:"avatarElement",ref:t},[...T[4]||(T[4]=[z("img",{src:Hy,alt:"个人头像",loading:"lazy"},null,-1)])],512),z("button",{class:vs(["audio-control",{playing:n.value}]),onClick:f},[z("div",Zy,[n.value?(et(),ot("svg",Qy,[...T[6]||(T[6]=[z("path",{d:"M6 6h12v12H6z"},null,-1)])])):(et(),ot("svg",Jy,[...T[5]||(T[5]=[z("path",{d:"M8 5v14l11-7z"},null,-1)])]))]),T[7]||(T[7]=z("div",{class:"audio-control-ring"},null,-1)),T[8]||(T[8]=z("div",{class:"audio-control-glow"},null,-1))],2)])])])])]))}},tS=Xr(eS,[["__scopeId","data-v-c3f4a263"]]),nS={id:"about",class:"about"},iS={class:"container"},rS=["onClick"],sS={class:"card-content"},oS={class:"vertical-text"},aS={class:"modal-title"},lS={class:"modal-description"},cS={class:"modal-tags"},uS={class:"modal-details"},hS={__name:"About",setup(r){const e=ft([]),t=ft([]),n=ft(0),i=ft(!1),s=ft(0),o=ft([]),a=ft(null),l=(v,y)=>{v&&(o.value[y]=v)},c=ft([{text:"兴趣",title:"兴趣爱好",description:"对技术充满热情，享受创造的过程",tags:["Web 开发","AI 应用"],details:"我热衷于探索最新的 Web 技术和 AI 应用，喜欢将创意转化为实际的产品。在空闲时间，我会研究开源项目，参与技术社区，不断提升自己的技能。"},{text:"特长",title:"专业特长",description:"全栈开发能力，从前端到后端都能胜任",tags:["Vue/React","Node.js","数据库"],details:"具备完整的前后端开发能力，熟悉现代前端框架和后端技术栈。能够快速学习新技术，并根据项目需求选择最合适的解决方案。"},{text:"经历",title:"项目经历",description:"2 周以上的项目开发经验",tags:["个人项目","实战经验"],details:"虽然正式工作经验不长，但我通过个人项目和实践积累了宝贵的开发经验。每个项目都让我成长，每次挑战都让我更加强大。"},{text:"技能",title:"技术技能",description:"掌握多种编程语言和开发工具",tags:["JavaScript","Python","Git"],details:"熟练掌握 JavaScript、Python 等编程语言，熟悉 Vue、React 等前端框架，以及 Node.js 后端开发。同时具备运维、测试、网络安全等多方面的基础知识。"},{text:"目标",title:"发展目标",description:"持续学习，成为更优秀的开发者",tags:["技术成长","职业发展"],details:"我的目标是不断提升技术水平，参与更有挑战性的项目，为开源社区做贡献，并帮助他人解决技术问题。相信持续学习和实践是成长的关键。"}]),u=ii(()=>c.value[s.value]),h=["rotate(-10deg)","rotate(-6deg) translate(35%, -12%)","rotate(-2deg) translate(65%, -19%)","rotate(2deg) translate(95%, -26%)","rotate(6deg) translate(125%, -23%)"],d=()=>{t.value=e.value,t.value.forEach((v,y)=>{v.nums=y}),n.value=5},f=()=>{t.value.forEach(v=>{let y=v.nums;if(y+1>=t.value.length){y=0,v.style.transition="";const M=c.value.pop();c.value.unshift(M),n.value++,n.value>=9&&(n.value=0)}else y+=1,v.style.transition="transform 0.3s ease";v.style.zIndex=y,v.style.transform=h[y],v.nums=y})},p=v=>{s.value=v,i.value=!0},g=()=>{f()},m=()=>{i.value=!1},_=()=>{a.value&&clearInterval(a.value),setTimeout(()=>{a.value&&clearInterval(a.value),o.value.forEach(v=>{v&&(v.classList.remove("header-fault"),v.style.transform="",v.style.clipPath="")})},1e3),a.value=setInterval(()=>{o.value.forEach(v=>{if(v){v.classList.add("header-fault"),v.style.transform=`translate(${Math.random()*60-30}%,${Math.random()*60-30}%)`;let y=Math.random()*100,M=Math.random()*100,T=Math.random()*50+50,b=Math.random()*40+10;v.style.clipPath=`polygon(${y}% ${M}%, ${y+b}% ${M}%, ${y+b}% ${M+T}%, ${y}% ${M+T}%)`}})},30)};return Wr(()=>{d()}),(v,y)=>(et(),ot("section",nS,[z("div",{class:"header-container",onClick:_},[z("div",{class:"header",ref:M=>l(M,0)},"About",512),z("div",{class:"header",ref:M=>l(M,1)},"About",512),z("div",{class:"header",ref:M=>l(M,2)},"About",512),z("div",{class:"header",ref:M=>l(M,3)},"About",512)]),z("div",iS,[(et(!0),ot(Xi,null,cr(c.value,(M,T)=>(et(),ot("div",{key:T,ref_for:!0,ref_key:"pokerRefs",ref:e,class:vs(["poker",`poker${T+1}`]),onClick:b=>p(T)},[z("div",sS,[z("div",oS,[z("span",null,hn(M.text.charAt(0)),1),z("span",null,hn(M.text.charAt(1)),1)])])],10,rS))),128)),z("div",{class:vs(["poker_top","poker5"]),onClick:g})]),i.value?(et(),ot("div",{key:0,class:"modal",onClick:m},[z("div",{class:"modal-content",onClick:y[0]||(y[0]=fi(()=>{},["stop"]))},[z("button",{class:"modal-close",onClick:m},[qt(zt(iM),{size:24})]),z("h3",aS,hn(u.value.title),1),z("p",lS,hn(u.value.description),1),z("div",cS,[(et(!0),ot(Xi,null,cr(u.value.tags,(M,T)=>(et(),ot("span",{key:T,class:"tag"},hn(M),1))),128))]),y[1]||(y[1]=z("div",{class:"modal-divider"},null,-1)),z("p",uS,hn(u.value.details),1)])])):Zs("",!0)]))}},dS=Xr(hS,[["__scopeId","data-v-6d892008"]]),fS={id:"skills",class:"skills"},pS={class:"container"},mS={class:"skills-container"},_S={class:"skills-categories"},gS=["onClick"],vS={class:"skills-content"},xS=["onClick"],MS={class:"skill-header"},yS={class:"skill-icon"},SS={class:"skill-name"},TS={class:"skill-description"},ES={class:"skill-level"},bS={class:"level-bar"},AS=["data-level"],wS={class:"level-text"},RS={class:"tools-section"},CS={class:"tools-grid"},PS={class:"tool-name"},IS={class:"skill-modal-header"},LS={class:"skill-modal-icon"},DS={class:"skill-modal-title"},NS={class:"skill-modal-body"},US={class:"skill-modal-description"},OS={class:"skill-modal-level"},FS={class:"skill-modal-level-bar"},BS={class:"skill-modal-level-text"},kS={key:0,class:"skill-modal-details"},VS={class:"skill-modal-details-list"},zS={__name:"Skills",setup(r){const e=ft("frontend"),t=ft(null),n=ft([{id:"frontend",name:"前端开发",skills:[{name:"Vue.js",icon:"zap",description:"构建现代化的单页应用程序和用户界面",level:90,levelText:"精通",details:["Vue 3 Composition API","Vue Router 4","Pinia 状态管理","Vue Test Utils","Vite 构建工具","Vue 生态系统集成"]},{name:"React",icon:"globe",description:"开发可复用的组件和复杂的前端应用",level:85,levelText:"熟练",details:["React 18 Hooks","React Router","Redux / Zustand","React Testing Library","Next.js 框架","Server Components"]},{name:"TypeScript",icon:"code2",description:"提供类型安全的 JavaScript 开发体验",level:88,levelText:"熟练",details:["高级类型系统","泛型编程","类型声明文件","TypeScript 配置","与框架集成","类型安全的 API 设计"]},{name:"CSS3/SCSS",icon:"palette",description:"创建响应式和美观的用户界面设计",level:92,levelText:"精通",details:["CSS Grid 布局","Flexbox 布局","CSS 变量","SCSS 预处理器","响应式设计","CSS 动画和过渡","Tailwind CSS 等工具"]}]},{id:"backend",name:"后端开发",skills:[{name:"Node.js",icon:"server",description:"构建高性能的服务器端应用程序",level:85,levelText:"熟练",details:["Express.js 框架","NestJS 框架","中间件开发","异步编程","文件系统操作","WebSocket 通信"]},{name:"Python",icon:"python",description:"开发数据分析和后端服务",level:80,levelText:"熟练",details:["Django 框架","FastAPI 框架","Flask 框架","数据分析库","异步编程","装饰器和上下文管理器"]},{name:"数据库",icon:"database",description:"MySQL, MongoDB, Redis 等数据库管理",level:82,levelText:"熟练",details:["SQL 查询优化","数据库设计","事务管理","MongoDB 聚合查询","Redis 缓存策略","数据库备份和恢复"]},{name:"API 设计",icon:"link",description:"RESTful API 和 GraphQL 设计",level:85,levelText:"熟练",details:["RESTful 设计原则","GraphQL Schema 设计","API 版本控制","认证和授权","API 文档","速率限制和安全"]}]},{id:"devops",name:"DevOps",skills:[{name:"Docker",icon:"layers",description:"容器化应用部署和管理",level:78,levelText:"掌握",details:["Dockerfile 编写","Docker Compose","容器网络","容器存储","Docker 镜像优化","容器安全"]},{name:"CI/CD",icon:"refreshCw",description:"自动化构建和部署流程",level:75,levelText:"掌握",details:["GitHub Actions","GitLab CI","Jenkins","自动化测试集成","部署策略","环境管理"]},{name:"AWS",icon:"cloud",description:"云服务管理和部署",level:70,levelText:"掌握",details:["EC2 实例管理","S3 存储","IAM 权限管理","Lambda 函数","API Gateway","CloudFormation"]},{name:"Git",icon:"gitBranch",description:"版本控制和团队协作",level:90,levelText:"精通",details:["分支管理策略","Git 工作流","冲突解决","Git hooks","子模块和子树","Git 性能优化"]}]}]),i=ft([{name:"VS Code",icon:"code"},{name:"Git",icon:"gitMerge"},{name:"Figma",icon:"layout"},{name:"Webpack",icon:"package"},{name:"Vite",icon:"wind"},{name:"Postman",icon:"send"},{name:"Edge DevTools",icon:"search"}]),s={zap:MM,globe:xM,code2:vM,palette:gM,server:_M,python:zp,database:mM,link:pM,layers:fM,refreshCw:dM,cloud:hM,gitBranch:uM,code:zp,gitMerge:cM,layout:lM,package:aM,wind:oM,send:sM,search:rM};let o=null;const a=(u=document)=>{if(!o)return;Array.from(u.querySelectorAll(".skill-card")).forEach(f=>{f.classList.contains("animate-in")||o.observe(f)}),Array.from(u.querySelectorAll(".tool-item")).forEach(f=>{f.classList.contains("animate-in")||o.observe(f)})};Wr(()=>{o=new IntersectionObserver((u,h)=>{u.forEach(d=>{d.isIntersecting&&(d.target.classList.add("animate-in"),h.unobserve(d.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"}),a()}),Iu(e,async()=>{document.querySelectorAll(".skill-card").forEach(d=>d.classList.remove("animate-in")),await Kg(),Array.from(document.querySelectorAll(".skills-grid")).forEach(d=>{window.getComputedStyle(d).display!=="none"&&a(d)})});const l=u=>{t.value=u,document.body.style.overflow="hidden"},c=()=>{t.value=null,document.body.style.overflow=""};return zf(()=>{o&&typeof o.disconnect=="function"&&o.disconnect(),o=null,document.body.style.overflow=""}),(u,h)=>(et(),ot("section",fS,[z("div",pS,[h[5]||(h[5]=z("div",{class:"section-header"},[z("h2",{class:"section-title"},"Skills")],-1)),z("div",mS,[z("div",_S,[(et(!0),ot(Xi,null,cr(n.value,d=>(et(),ot("div",{key:d.id,class:vs(["category-tab",{active:e.value===d.id}]),onClick:f=>e.value=d.id},hn(d.name),11,gS))),128))]),z("div",vS,[(et(!0),ot(Xi,null,cr(n.value,d=>$a((et(),ot("div",{key:d.id,class:"skills-grid"},[(et(!0),ot(Xi,null,cr(d.skills,(f,p)=>(et(),ot("div",{key:f.name,class:vs(["skill-card",{clickable:!0}]),style:Xs({animationDelay:`${p*.1}s`}),onClick:g=>l(f)},[z("div",MS,[z("div",yS,[(et(),al(Vc(s[f.icon]),{size:"24"}))]),z("h3",SS,hn(f.name),1)]),z("p",TS,hn(f.description),1),z("div",ES,[z("div",bS,[z("div",{class:"level-progress",style:Xs({"--target-width":f.level+"%"}),"data-level":f.level},null,12,AS)]),z("span",wS,hn(f.levelText),1)]),h[1]||(h[1]=z("div",{class:"skill-card-footer"},[z("span",{class:"skill-more"},"点击查看详情 →")],-1))],12,xS))),128))])),[[Zx,e.value===d.id]])),128))])]),z("div",RS,[h[2]||(h[2]=z("h3",{class:"tools-title"},"Tools",-1)),z("div",CS,[(et(!0),ot(Xi,null,cr(i.value,(d,f)=>(et(),ot("div",{key:d.name,class:"tool-item",style:Xs({animationDelay:`${f*.1}s`})},[(et(),al(Vc(s[d.icon]),{size:"28",class:"tool-icon"})),z("span",PS,hn(d.name),1)],4))),128))])]),t.value?(et(),ot("div",{key:0,class:"skill-modal",onClick:c},[z("div",{class:"skill-modal-content",onClick:h[0]||(h[0]=fi(()=>{},["stop"]))},[z("button",{class:"skill-modal-close",onClick:c},"×"),z("div",IS,[z("div",LS,[(et(),al(Vc(s[t.value.icon]),{size:"36"}))]),z("h3",DS,hn(t.value.name),1)]),z("div",NS,[z("p",US,hn(t.value.description),1),z("div",OS,[h[3]||(h[3]=z("div",{class:"skill-modal-level-label"},"掌握程度",-1)),z("div",FS,[z("div",{class:"skill-modal-level-progress",style:Xs({width:t.value.level+"%"})},null,4)]),z("div",BS,hn(t.value.levelText),1)]),t.value.details?(et(),ot("div",kS,[h[4]||(h[4]=z("h4",{class:"skill-modal-details-title"},"技术细节",-1)),z("ul",VS,[(et(!0),ot(Xi,null,cr(t.value.details,(d,f)=>(et(),ot("li",{key:f},hn(d),1))),128))])])):Zs("",!0)]),z("div",{class:"skill-modal-footer"},[z("button",{class:"skill-modal-button",onClick:c},"关闭")])])])):Zs("",!0)])]))}},HS=Xr(zS,[["__scopeId","data-v-4394fb9e"]]);function Cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function f0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},aa={duration:.5,overwrite:!1,delay:0},Wf,In,Wt,Ui=1e8,Bt=1/Ui,pd=Math.PI*2,GS=pd/4,WS=0,p0=Math.sqrt,XS=Math.cos,qS=Math.sin,wn=function(e){return typeof e=="string"},tn=function(e){return typeof e=="function"},kr=function(e){return typeof e=="number"},Xf=function(e){return typeof e>"u"},vr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},qf=function(){return typeof window<"u"},Yl=function(e){return tn(e)||wn(e)},m0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,YS=/random\([^)]+\)/g,$S=/,\s*/g,om=/(?:-?\.?\d|\.)+/gi,_0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,g0=/[+-]=-?[.\d]+/,jS=/[^,'"\[\]\s]+/gi,KS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,or,md,Yf,Ei={},lu={},v0,x0=function(e){return(lu=la(e,Ei))&&li},$f=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Al=function(e,t){return!t&&console.warn(e)},M0=function(e,t){return e&&(Ei[e]=t)&&lu&&(lu[e]=t)||Ei},wl=function(){return 0},ZS={suppressEvents:!0,isStart:!0,kill:!1},zc={suppressEvents:!0,kill:!1},JS={suppressEvents:!0},jf={},ms=[],_d={},y0,mi={},Ju={},am=30,Hc=[],Kf="",Zf=function(e){var t=e[0],n,i;if(vr(t)||tn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hc.length;i--&&!Hc[i].targetTest(t););n=Hc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new X0(e[i],n)))||e.splice(i,1);return e},Js=function(e){return e._gsap||Zf(Oi(e))[0]._gsap},S0=function(e,t,n){return(n=e[t])&&tn(n)?e[t]():Xf(n)&&e.getAttribute&&e.getAttribute(t)||n},si=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},Ko=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},QS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},cu=function(){var e=ms.length,t=ms.slice(0),n,i;for(_d={},ms.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jf=function(e){return!!(e._initted||e._startAt||e.add)},T0=function(e,t,n,i){ms.length&&!In&&cu(),e.render(t,n,!!(In&&t<0&&Jf(e))),ms.length&&!In&&cu()},E0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jS).length<2?t:wn(e)?e.trim():e},b0=function(e){return e},bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},e1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},la=function(e,t){for(var n in t)e[n]=t[n];return e},lm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},uu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},cl=function(e){var t=e.parent||$t,n=e.keyframes?e1(kn(e.keyframes)):bi;if(ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},t1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},A0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Nu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},xs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},n1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gd=function(e,t,n,i){return e._startAt&&(In?e._startAt.revert(zc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},i1=function r(e){return!e||e._ts&&r(e.parent)},cm=function(e){return e._repeat?ca(e._tTime,e=e.duration()+e._rDelay)*e:0},ca=function(e,t){var n=Math.floor(e=Yt(e/t));return e&&n===e?n-1:n},hu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uu=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},Ou=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uu(e),n._dirty||Qs(n,e)),e},w0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=hu(e.rawTime(),t),(!t._dur||Hl(0,t.totalDuration(),n)-t._tTime>Bt)&&t.render(n,!0)),Qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Bt}},ur=function(e,t,n,i){return t.parent&&xs(t),t._start=Yt((kr(n)?n:n||e!==$t?Pi(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),A0(e,t,"_first","_last",e._sort?"_start":0),vd(t)||(e._recent=t),i||w0(e,t),e._ts<0&&Ou(e,e._tTime),e},R0=function(e,t){return(Ei.ScrollTrigger||$f("scrollTrigger",t))&&Ei.ScrollTrigger.create(t,e)},C0=function(e,t,n,i,s){if(ep(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!In&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&y0!==gi.frame)return ms.push(e),e._lazy=[s,i],1},r1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},vd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},s1=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&r1(e)&&!(!e._initted&&vd(e))||(e._ts<0||e._dp._ts<0)&&!vd(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Hl(0,e._tDur,t),u=ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||In||i||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&C0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Bt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&gd(e,t,n,!0),e._onUpdate&&!n&&Mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&xs(e,1),!n&&!In&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},o1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ua=function(e,t,n,i){var s=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Yt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ou(e,e._tTime=e._tDur*a),e.parent&&Uu(e),n||Qs(e.parent,e),e},um=function(e){return e instanceof Zn?Qs(e):ua(e,e._dur)},a1={_start:0,endTime:wl,totalDuration:wl},Pi=function r(e,t,n){var i=e.labels,s=e._recent||a1,o=e.duration()>=Ui?s.endTime(!1):e._dur,a,l,c;return wn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(kn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ul=function(e,t,n){var i=kr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dn(t[0],o,t[s+1])},Es=function(e,t){return e||e===0?t(e):t},Hl=function(e,t,n){return n<e?e:n>t?t:n},Fn=function(e,t){return!wn(e)||!(t=KS.exec(e))?"":t[1]},l1=function(e,t,n){return Es(n,function(i){return Hl(e,t,i)})},xd=[].slice,P0=function(e,t){return e&&vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vr(e[0]))&&!e.nodeType&&e!==or},c1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return wn(i)&&!t||P0(i,1)?(s=n).push.apply(s,Oi(i)):n.push(i)})||n},Oi=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):wn(e)&&!n&&(md||!ha())?xd.call((t||Yf).querySelectorAll(e),0):kn(e)?c1(e,n):P0(e)?xd.call(e,0):e?[e]:[]},Md=function(e){return e=Oi(e)[0]||Al("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Oi(t,n.querySelectorAll?n:n===e?Al("Invalid scope")||Yf.createElement("div"):e)}},I0=function(e){return e.sort(function(){return .5-Math.random()})},L0=function(e){if(tn(e))return e;var t=vr(e)?e:{each:e},n=eo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return wn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,p){var g=(p||t).length,m=o[g],_,v,y,M,T,b,A,x,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!S){for(A=-Ui;A<(A=p[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],_=l?Math.min(S,g)*u-.5:i%S,v=S===Ui?0:l?g*h/S-.5:i/S|0,A=0,x=Ui,b=0;b<g;b++)y=b%S-_,M=v-(b/S|0),m[b]=T=c?Math.abs(c==="y"?M:y):p0(y*y+M*M),T>A&&(A=T),T<x&&(x=T);i==="random"&&I0(m),m.max=A-x,m.min=x,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Fn(t.amount||t.each)||0,n=n&&g<0?H0(n):n}return g=(m[d]-m.min)/m.max||0,Yt(m.b+(n?n(g):g)*m.v)+m.u}},yd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(kr(n)?0:Fn(n))}},D0=function(e,t){var n=kn(e),i,s;return!n&&vr(e)&&(i=n=e.radius||Ui,e.values?(e=Oi(e.values),(s=!kr(e[0]))&&(i*=i)):e=yd(e.increment)),Es(t,n?tn(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ui,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||kr(o)?u:u+Fn(o)}:yd(e))},N0=function(e,t,n,i){return Es(kn(e)?!t:n===!0?!!(n=0):!i,function(){return kn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},u1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},h1=function(e,t){return function(n){return e(parseFloat(n))+(t||Fn(n))}},d1=function(e,t,n){return O0(e,t,0,1,n)},U0=function(e,t,n){return Es(n,function(i){return e[~~t(i)]})},f1=function r(e,t,n){var i=t-e;return kn(e)?U0(e,r(0,e.length),t):Es(n,function(s){return(i+(s-e)%i)%i+e})},p1=function r(e,t,n){var i=t-e,s=i*2;return kn(e)?U0(e,r(0,e.length-1),t):Es(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Rl=function(e){return e.replace(YS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($S);return N0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},O0=function(e,t,n,i,s){var o=t-e,a=i-n;return Es(s,function(l){return n+((l-e)/o*a||0)})},m1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=wn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(kn(e)&&!kn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(p){p*=h;var g=Math.min(d,~~p);return u[g](p-g)},n=t}else i||(e=la(kn(e)?[]:{},e));if(!u){for(l in t)Qf.call(a,e,l,"get",t[l]);s=function(p){return ip(p,a)||(o?e.p:e)}}}return Es(n,s)},hm=function(e,t,n){var i=e.labels,s=Ui,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,n){var i=e.vars,s=i[t],o=Wt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ms.length&&cu(),a&&(Wt=a),u=l?s.apply(c,l):s.call(c),Wt=o,u},ja=function(e){return xs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!In),e.progress()<1&&Mi(e,"onInterrupt"),e},qo,F0=[],B0=function(e){if(e)if(e=!e.name&&e.default||e,qf()||e.headless){var t=e.name,n=tn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:wl,render:ip,add:Qf,kill:I1,modifier:P1,rawVars:0},o={targetTest:0,get:0,getSetter:np,aliases:{},register:0};if(ha(),e!==i){if(mi[t])return;bi(i,bi(uu(e,s),o)),la(i.prototype,la(s,uu(e,o))),mi[i.prop=t]=i,e.targetTest&&(Hc.push(i),jf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}M0(t,i),e.register&&e.register(li,i,oi)}else F0.push(e)},Ft=255,Ka={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},Qu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ft+.5|0},k0=function(e,t,n){var i=e?kr(e)?[e>>16,e>>8&Ft,e&Ft]:0:Ka.black,s,o,a,l,c,u,h,d,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ka[e])i=Ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ft,i&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(om),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Qu(l+1/3,s,o),i[1]=Qu(l,s,o),i[2]=Qu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(_0),n&&i.length<4&&(i[3]=1),i}else i=e.match(om)||Ka.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Ft,o=i[1]/Ft,a=i[2]/Ft,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},V0=function(e){var t=[],n=[],i=-1;return e.split(_s).forEach(function(s){var o=s.match(Xo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dm=function(e,t,n){var i="",s=(e+i).match(_s),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=k0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=V0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_s,"1").split(Xo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_s),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},_s=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ka)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),_1=/hsl[a]?\(/,z0=function(e){var t=e.join(" "),n;if(_s.lastIndex=0,_s.test(t))return n=_1.test(t),e[1]=dm(e[1],n),e[0]=dm(e[0],n,V0(e[1])),!0},Cl,gi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,p=function g(m){var _=r()-i,v=m===!0,y,M,T,b;if((_>e||_<0)&&(n+=_-t),i+=_,T=i-n,y=T-o,(y>0||v)&&(b=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,o+=y+(y>=s?4:s-y),M=1),v||(l=c(g)),M)for(f=0;f<a.length;f++)a[f](T,d,b,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){v0&&(!md&&qf()&&(or=md=window,Yf=or.document||{},Ei.gsap=li,(or.gsapVersions||(or.gsapVersions=[])).push(li.version),x0(lu||or.GreenSockGlobals||!or.gsap&&or||{}),F0.forEach(B0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Cl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Cl=0,c=wl},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,v){var y=_?function(M,T,b,A){m(M,T,b,A),h.remove(y)}:m;return h.remove(m),a[v?"unshift":"push"](y),ha(),y},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},h})(),ha=function(){return!Cl&&gi.wake()},Mt={},g1=/^[\d.\-M][\d.\-,\s]/,v1=/["']/g,x1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(v1,"").trim():+c,i=l.substr(a+1).trim();return t},M1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},y1=function(e){var t=(e+"").split("("),n=Mt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[x1(t[1])]:M1(e).split(",").map(E0)):Mt._CE&&g1.test(e)?Mt._CE("",e):n},H0=function(e){return function(t){return 1-e(1-t)}},G0=function r(e,t){for(var n=e._first,i;n;)n instanceof Zn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},eo=function(e,t){return e&&(tn(e)?e:Mt[e]||y1(e))||t},ho=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return si(e,function(a){Mt[a]=Ei[a]=s,Mt[o=a.toLowerCase()]=n;for(var l in s)Mt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Mt[a+"."+l]=s[l]}),s},W0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},eh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/pd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*qS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:W0(a);return s=pd/s,l.config=function(c,u){return r(e,c,u)},l},th=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:W0(n);return i.config=function(s){return r(e,s)},i};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ho(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Mt.Linear.easeNone=Mt.none=Mt.Linear.easeIn;ho("Elastic",eh("in"),eh("out"),eh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ho("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ho("Circ",function(r){return-(p0(1-r*r)-1)});ho("Sine",function(r){return r===1?1:-XS(r*GS)+1});ho("Back",th("in"),th("out"),th());Mt.SteppedEase=Mt.steps=Ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Bt;return function(a){return((i*Hl(0,o,a)|0)+s)*n}}};aa.ease=Mt["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kf+=r+","+r+"Params,"});var X0=function(e,t){this.id=WS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:S0,this.set=t?t.getSetter:np},Pl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ua(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),Cl||gi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ha(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ou(this,n),!s._dp||s.parent||w0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ur(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),T0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ca(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?hu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(Hl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Uu(this),n1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ha(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Yt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ur(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=JS);var i=In;return In=n,Jf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),In=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,um(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,um(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pi(this,n),ri(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-Bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=tn(n)?n:b0,l=function(){var u=i.then;i.then=null,s&&s(),tn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ja(this)},r})();bi(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var Zn=(function(r){f0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),$t&&ur(n.parent||$t,Cr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&R0(Cr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ul(0,arguments,this),this},t.from=function(i,s,o){return ul(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ul(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,cl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dn(i,s,Pi(this,o),1),this},t.call=function(i,s,o){return ur(this,dn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dn(i,o,Pi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,cl(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,cl(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Yt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,p,g,m,_,v,y,M,T,b,A;if(this!==$t&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,M=this._start,y=this._ts,_=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Yt(u%m),u===l?(g=this._repeat,d=c):(T=Yt(u/m),g=~~T,g&&g===T&&(d=c,g--),d>c&&(d=c)),T=ca(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),b&&g&1&&(d=c-d,A=1),g!==T&&!this._lock){var x=b&&T&1,S=x===(b&&g&1);if(g<T&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Yt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;G0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=o1(this,Yt(a),Yt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!T&&(Mi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=-Bt);break}}f=p}else{f=this._last;for(var R=i<0?i:d;f;){if(p=f._prev,(f._act||R<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,o||In&&Jf(f)),d!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=R?-Bt:Bt);break}}f=p}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Bt)._zTime=d>=a?1:-1,this._ts))return this._start=M,Uu(this),this.render(i,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Mi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(kr(s)||(s=Pi(this,s,i)),!(i instanceof Pl)){if(kn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(wn(i))return this.addLabel(i,s);if(tn(i))i=dn.delayedCall(0,i);else return this}return this!==i?ur(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return wn(i)?this.removeLabel(i):tn(i)?this.killTweensOf(i):(i.parent===this&&Nu(this,i),i===this._recent&&(this._recent=this._last),Qs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(gi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=dn.delayedCall(0,s||wl,o);return a.data="isPause",this._hasPause=1,ur(this,a,Pi(this,i))},t.removePause=function(i){var s=this._first;for(i=Pi(this,i);s;)s._start===i&&s.data==="isPause"&&xs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Oi(i),l=this._first,c=kr(s),u;l;)l instanceof dn?QS(l._targets,a)&&(c?(!cs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Pi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,p=dn.to(o,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Bt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ua(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,h||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,bi({startAt:{time:Pi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hm(this,Pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hm(this,Pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Yt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Qs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ui,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ur(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Yt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ua(o,o===$t&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if($t._ts&&(T0($t,hu(i,$t)),y0=gi.frame),gi.frame>=am){am+=Ti.autoSleep||120;var s=$t._first;if((!s||!s._ts)&&Ti.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e})(Pl);bi(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var S1=function(e,t,n,i,s,o,a){var l=new oi(this._pt,e,t,0,1,Z0,null,s),c=0,u=0,h,d,f,p,g,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Rl(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Zu)||[];h=Zu.exec(i);)p=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),p!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:p.charAt(1)==="="?Ko(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Zu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(g0.test(i)||_)&&(l.e=0),this._pt=l,l},Qf=function(e,t,n,i,s,o,a,l,c,u){tn(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:tn(h)?c?e[t.indexOf("set")||!tn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=tn(h)?c?w1:j0:tp,p;if(wn(i)&&(~i.indexOf("random(")&&(i=Rl(i)),i.charAt(1)==="="&&(p=Ko(d,i)+(Fn(d)||0),(p||p===0)&&(i=p))),!u||d!==i||Sd)return!isNaN(d*i)&&i!==""?(p=new oi(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?C1:K0,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&$f(t,i),S1.call(this,e,t,d,i,f,l||Ti.stringFilter,c))},T1=function(e,t,n,i,s){if(tn(e)&&(e=hl(e,s,t,n,i)),!vr(e)||e.style&&e.nodeType||kn(e)||m0(e))return wn(e)?hl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=hl(e[a],s,t,n,i);return o},q0=function(e,t,n,i,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:T1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new oi(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==qo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},cs,Sd,ep=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,y=e._overwrite==="auto"&&!Wf,M=e.timeline,T,b,A,x,S,R,C,L,N,k,H,V,O;if(M&&(!d||!s)&&(s="none"),e._ease=eo(s,aa.ease),e._yEase=h?H0(eo(h===!0?s:h,aa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(L=m[0]?Js(m[0]).harness:0,V=L&&i[L.prop],T=uu(i,jf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&p?zc:ZS),g._lazy=0),o){if(xs(e._startAt=dn.set(m,bi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In||!a&&!f)&&e._startAt.revert(zc),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(a=!1),A=bi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ri(l),immediateRender:a,stagger:0,parent:_},T),V&&(A[L.prop]=V),xs(e._startAt=dn.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In?e._startAt.revert(zc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ri(l)||l&&!p,b=0;b<m.length;b++){if(S=m[b],C=S._gsap||Zf(m)[b]._gsap,e._ptLookup[b]=k={},_d[C.id]&&ms.length&&cu(),H=v===m?b:v.indexOf(S),L&&(N=new L).init(S,V||T,e,H,v)!==!1&&(e._pt=x=new oi(e._pt,S,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(q){k[q]=x}),N.priority&&(R=1)),!L||V)for(A in T)mi[A]&&(N=q0(A,T,e,H,S,v))?N.priority&&(R=1):k[A]=x=Qf.call(e,S,A,"get",T[A],H,v,0,i.stringFilter);e._op&&e._op[b]&&e.kill(S,e._op[b]),y&&e._pt&&(cs=e,$t.killTweensOf(S,k,e.globalTime(t)),O=!e.parent,cs=0),e._pt&&l&&(_d[C.id]=1)}R&&J0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,d&&t<=0&&M.render(Ui,!0,!0)},E1=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sd=1,e.vars[t]="+=0",ep(e,a),Sd=0,l?Al(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=sn(n)+Fn(h.e)),h.b&&(h.b=u.s+Fn(h.b))},b1=function(e,t){var n=e[0]?Js(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=la({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},A1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(kn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},hl=function(e,t,n,i,s){return tn(e)?e.call(t,n,i,s):wn(e)&&~e.indexOf("random(")?Rl(e):e},Y0=Kf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$0={};si(Y0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return $0[r]=1});var dn=(function(r){f0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:cl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=i.parent||$t,y=(kn(n)||m0(n)?kr(n[0]):"length"in i)?[n]:Oi(n),M,T,b,A,x,S,R,C;if(a._targets=y.length?Zf(y):Al("GSAP target "+n+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||d||Yl(c)||Yl(u)){if(i=a.vars,M=a.timeline=new Zn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),M.kill(),M.parent=M._dp=Cr(a),M._start=0,d||Yl(c)||Yl(u)){if(A=y.length,R=d&&L0(d),vr(d))for(x in d)~Y0.indexOf(x)&&(C||(C={}),C[x]=d[x]);for(T=0;T<A;T++)b=uu(i,$0),b.stagger=0,_&&(b.yoyoEase=_),C&&la(b,C),S=y[T],b.duration=+hl(c,Cr(a),T,S,y),b.delay=(+hl(u,Cr(a),T,S,y)||0)-a._delay,!d&&A===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),M.to(S,b,R?R(T,S,y):0),M._ease=Mt.none;M.duration()?c=u=0:a.timeline=0}else if(p){cl(bi(M.vars.defaults,{ease:"none"})),M._ease=eo(p.ease||i.ease||"none");var L=0,N,k,H;if(kn(p))p.forEach(function(V){return M.to(y,V,">")}),M.duration();else{b={};for(x in p)x==="ease"||x==="easeEach"||A1(x,p[x],b,p.easeEach);for(x in b)for(N=b[x].sort(function(V,O){return V.t-O.t}),L=0,T=0;T<N.length;T++)k=N[T],H={ease:k.e,duration:(k.t-(T?N[T-1].t:0))/100*c},H[x]=k.v,M.to(y,H,L),L+=H.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!Wf&&(cs=Cr(a),$t.killTweensOf(y),cs=0),ur(v,Cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===Yt(v._time)&&ri(h)&&i1(Cr(a))&&v.data!=="nested")&&(a._tTime=-Bt,a.render(Math.max(0,-u)||0)),m&&R0(Cr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Bt&&!u?l:i<Bt?0:i,d,f,p,g,m,_,v,y,M;if(!c)s1(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=Yt(h%g),h===l?(p=this._repeat,d=c):(m=Yt(h/g),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),_=this._yoyo&&p&1,_&&(M=this._yEase,d=c-d),m=ca(this._tTime,g),d===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&(y&&this._yEase&&G0(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Yt(g*p),!0).invalidate()._lock=0))}if(!this._initted){if(C0(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Mi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&gd(this,i,s,o),Mi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&gd(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xs(this,1),!s&&!(u&&!a)&&(h||a||_)&&(Mi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Cl||gi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ep(this,c),u=this._ease(c/this._dur),E1(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Ou(this,0),this.parent||A0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!In),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cs&&cs.vars.overwrite!==!0)._first||ja(this),this.parent&&o!==this.timeline.totalDuration()&&ua(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Oi(i):a,c=this._ptLookup,u=this._pt,h,d,f,p,g,m,_;if((!s||s==="all")&&t1(a,l))return s==="all"&&(this._pt=0),ja(this);for(h=this._op=this._op||[],s!=="all"&&(wn(s)&&(g={},si(s,function(v){return g[v]=1}),s=g),s=b1(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(h[_]=s,p=d,f={}):(f=h[_]=h[_]||{},p=s);for(g in p)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Nu(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ja(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ul(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ul(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return $t.killTweensOf(i,s,o)},e})(Pl);bi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(r){dn[r]=function(){var e=new Zn,t=xd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var tp=function(e,t,n){return e[t]=n},j0=function(e,t,n){return e[t](n)},w1=function(e,t,n,i){return e[t](i.fp,n)},R1=function(e,t,n){return e.setAttribute(t,n)},np=function(e,t){return tn(e[t])?j0:Xf(e[t])&&e.setAttribute?R1:tp},K0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},C1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Z0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ip=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},P1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},I1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Nu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},L1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},J0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},oi=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||K0,this.d=l||this,this.set=c||tp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=L1,this.m=n,this.mt=s,this.tween=i},r})();si(Kf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jf[r]=1});Ei.TweenMax=Ei.TweenLite=dn;Ei.TimelineLite=Ei.TimelineMax=Zn;$t=new Zn({sortChildren:!1,defaults:aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=z0;var to=[],Gc={},D1=[],fm=0,N1=0,nh=function(e){return(Gc[e]||D1).map(function(t){return t()})},Td=function(){var e=Date.now(),t=[];e-fm>2&&(nh("matchMediaInit"),to.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=or.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),nh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fm=e,nh("matchMedia"))},Q0=(function(){function r(t,n){this.selector=n&&Md(n),this.data=[],this._r=[],this.isReverted=!1,this.id=N1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){tn(n)&&(s=i,i=n,n=tn);var o=this,a=function(){var c=Wt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Md(s)),Wt=o,h=i.apply(o,arguments),tn(h)&&o._r.push(h),Wt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===tn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Wt;Wt=null,n(this),Wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof dn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof dn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=to.length;o--;)to[o].id===this.id&&to.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),U1=(function(){function r(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){vr(n)||(n={matches:n});var o=new Q0(0,s||this.scope),a=o.conditions={},l,c,u;Wt&&!o.selector&&(o.selector=Wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=or.matchMedia(n[c]),l&&(to.indexOf(o)<0&&to.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Td):l.addEventListener("change",Td)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),du={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return B0(i)})},timeline:function(e){return new Zn(e)},getTweensOf:function(e,t){return $t.getTweensOf(e,t)},getProperty:function(e,t,n,i){wn(e)&&(e=Oi(e)[0]);var s=Js(e||{}).get,o=n?b0:E0;return n==="native"&&(n=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,n,i)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Oi(e),e.length>1){var i=e.map(function(u){return li.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=mi[t],a=Js(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;qo._pt=0,h.init(e,n?u+n:u,qo,0,[e]),h.render(1,h),qo._pt&&ip(1,qo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=li.to(e,bi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return $t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=eo(e.ease,aa.ease)),lm(aa,e||{})},config:function(e){return lm(Ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ei[a]&&Al(t+" effect requires "+a+" plugin.")}),Ju[t]=function(a,l,c){return n(Oi(a),bi(l||{},s),c)},o&&(Zn.prototype[t]=function(a,l,c){return this.add(Ju[t](a,vr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Mt[e]=eo(t)},parseEase:function(e,t){return arguments.length?eo(e,t):Mt},getById:function(e){return $t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zn(e),i,s;for(n.smoothChildTiming=ri(e.smoothChildTiming),$t.remove(n),n._dp=0,n._time=n._tTime=$t._time,i=$t._first;i;)s=i._next,(t||!(!i._dur&&i instanceof dn&&i.vars.onComplete===i._targets[0]))&&ur(n,i,i._start-i._delay),i=s;return ur($t,n,0),n},context:function(e,t){return e?new Q0(e,t):Wt},matchMedia:function(e){return new U1(e)},matchMediaRefresh:function(){return to.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Td()},addEventListener:function(e,t){var n=Gc[e]||(Gc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:f1,wrapYoyo:p1,distribute:L0,random:N0,snap:D0,normalize:d1,getUnit:Fn,clamp:l1,splitColor:k0,toArray:Oi,selector:Md,mapRange:O0,pipe:u1,unitize:h1,interpolate:m1,shuffle:I0},install:x0,effects:Ju,ticker:gi,updateRoot:Zn.updateRoot,plugins:mi,globalTimeline:$t,core:{PropTween:oi,globals:M0,Tween:dn,Timeline:Zn,Animation:Pl,getCache:Js,_removeLinkedListItem:Nu,reverting:function(){return In},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Wf=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return du[r]=dn[r]});gi.add(Zn.updateRoot);qo=du.to({},{duration:0});var O1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},F1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=O1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ih=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(wn(s)&&(l={},si(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}F1(a,s)}}}},li=du.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)In?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ih("roundProps",yd),ih("modifiers"),ih("snap",D0))||du;dn.version=Zn.version=li.version="3.14.2";v0=1;qf()&&ha();Mt.Power0;Mt.Power1;Mt.Power2;Mt.Power3;Mt.Power4;Mt.Linear;Mt.Quad;Mt.Cubic;Mt.Quart;Mt.Quint;Mt.Strong;Mt.Elastic;Mt.Back;Mt.SteppedEase;Mt.Bounce;Mt.Sine;Mt.Expo;Mt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pm,us,Zo,rp,Ys,mm,sp,B1=function(){return typeof window<"u"},Vr={},Bs=180/Math.PI,Jo=Math.PI/180,go=Math.atan2,_m=1e8,op=/([A-Z])/g,k1=/(left|right|width|margin|padding|x)/i,V1=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},H1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},G1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},W1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ev=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},X1=function(e,t,n){return e.style[t]=n},q1=function(e,t,n){return e.style.setProperty(t,n)},Y1=function(e,t,n){return e._gsap[t]=n},$1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},j1=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},K1=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},jt="transform",ai=jt+"Origin",Z1=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Vr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Pr(i,a)}):this.tfm[e]=o.x?o[e]:Pr(i,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return hr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(jt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=jt}(s||t)&&this.props.push(e,t,s[e])},nv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},J1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(op,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sp(),(!s||!s.isStart)&&!n[jt]&&(nv(n),i.zOrigin&&n[ai]&&(n[ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},iv=function(e,t){var n={target:e,props:[],revert:J1,save:Z1};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},rv,bd=function(e,t){var n=us.createElementNS?us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):us.createElement(e);return n&&n.style?n:us.createElement(e)},yi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(op,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,da(t)||t,1)||""},gm="O,Moz,ms,Ms,Webkit".split(","),da=function(e,t,n){var i=t||Ys,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(gm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?gm[o]:"")+e},Ad=function(){B1()&&window.document&&(pm=window,us=pm.document,Zo=us.documentElement,Ys=bd("div")||{style:{}},bd("div"),jt=da(jt),ai=jt+"Origin",Ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rv=!!da("perspective"),sp=li.core.reverting,rp=1)},vm=function(e){var t=e.ownerSVGElement,n=bd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Zo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Zo.removeChild(n),s},xm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sv=function(e){var t,n;try{t=e.getBBox()}catch{t=vm(e),n=1}return t&&(t.width||t.height)||n||(t=vm(e)),t&&!t.width&&!t.x&&!t.y?{x:+xm(e,["x","cx","x1"])||0,y:+xm(e,["y","cy","y1"])||0,width:0,height:0}:t},ov=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sv(e))},Ms=function(e,t){if(t){var n=e.style,i;t in Vr&&t!==ai&&(t=jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(op,"-$1").toLowerCase())):n.removeAttribute(t)}},hs=function(e,t,n,i,s,o){var a=new oi(e._pt,t,n,0,1,o?tv:ev);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Mm={deg:1,rad:1,turn:1},Q1={grid:1,flex:1},ys=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ys.style,l=k1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",p,g,m,_;if(i===o||!s||Mm[i]||Mm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),_=e.getCTM&&ov(e),(f||o==="%")&&(Vr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[u],sn(f?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===us||!g.appendChild)&&(g=us.body),m=g._gsap,m&&f&&m.width&&l&&m.time===gi.time&&!m.uncache)return sn(s/m.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,p=e[u],v?e.style[t]=v:Ms(e,t)}else(f||o==="%")&&!Q1[yi(g,"display")]&&(a.position=yi(e,"position")),g===e&&(a.position="static"),g.appendChild(Ys),p=Ys[u],g.removeChild(Ys),a.position="absolute";return l&&f&&(m=Js(g),m.time=gi.time,m.width=g[u]),sn(d?p*s/h:p&&s?h/p*s:0)},Pr=function(e,t,n,i){var s;return rp||Ad(),t in hr&&t!=="transform"&&(t=hr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vr[t]&&t!=="transform"?(s=Ll(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:pu(yi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=fu[t]&&fu[t](e,t,n)||yi(e,t)||S0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ys(e,t,s,n)+n:s},eT=function(e,t,n,i){if(!n||n==="none"){var s=da(t,e,1),o=s&&yi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=yi(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,Z0),l=0,c=0,u,h,d,f,p,g,m,_,v,y,M,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=yi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=yi(e,t)||i,g?e.style[t]=g:Ms(e,t)),u=[n,i],z0(u),n=u[0],i=u[1],d=n.match(Xo)||[],T=i.match(Xo)||[],T.length){for(;h=Xo.exec(i);)m=h[0],v=i.substring(l,h.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ko(f,m)+M),_=parseFloat(m),y=m.substr((_+"").length),l=Xo.lastIndex-y.length,y||(y=y||Ti.units[t]||M,l===i.length&&(i+=y,a.e+=y)),M!==y&&(f=ys(e,t,g,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?tv:ev;return g0.test(i)&&(a.e=0),this._pt=a,a},ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ym[n]||n,t[1]=ym[i]||i,t.join(" ")},nT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vr[a]&&(l=1,a=a==="transformOrigin"?ai:jt),Ms(n,a);l&&(Ms(n,jt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ll(n,1),o.uncache=1,nv(i)))}},fu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,n,0,0,nT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Il=[1,0,0,1,0,0],av={},lv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sm=function(e){var t=yi(e,jt);return lv(t)?Il:t.substr(7).match(_0).map(sn)},ap=function(e,t){var n=e._gsap||Js(e),i=e.style,s=Sm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Il:s):(s===Il&&!e.offsetParent&&e!==Zo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Zo.appendChild(e)),s=Sm(e),l?i.display=l:Ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Zo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wd=function(e,t,n,i,s,o){var a=e._gsap,l=s||ap(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],g=l[2],m=l[3],_=l[4],v=l[5],y=t.split(" "),M=parseFloat(y[0])||0,T=parseFloat(y[1])||0,b,A,x,S;n?l!==Il&&(A=f*m-p*g)&&(x=M*(m/A)+T*(-g/A)+(g*v-m*_)/A,S=M*(-p/A)+T*(f/A)-(f*v-p*_)/A,M=x,T=S):(b=sv(e),M=b.x+(~y[0].indexOf("%")?M/100*b.width:M),T=b.y+(~(y[1]||y[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(_=M-c,v=T-u,a.xOffset=h+(_*f+v*g)-_,a.yOffset=d+(_*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ai]="0px 0px",o&&(hs(o,a,"xOrigin",c,M),hs(o,a,"yOrigin",u,T),hs(o,a,"xOffset",h,a.xOffset),hs(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+T)},Ll=function(e,t){var n=e._gsap||new X0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=yi(e,ai)||"0",u,h,d,f,p,g,m,_,v,y,M,T,b,A,x,S,R,C,L,N,k,H,V,O,q,Y,P,re,ae,Ne,Oe,Ve;return u=h=d=g=m=_=v=y=M=0,f=p=1,n.svg=!!(e.getCTM&&ov(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),i.scale=i.rotate=i.translate="none"),A=ap(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),wd(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,b=n.yOrigin||0,A!==Il&&(C=A[0],L=A[1],N=A[2],k=A[3],u=H=A[4],h=V=A[5],A.length===6?(f=Math.sqrt(C*C+L*L),p=Math.sqrt(k*k+N*N),g=C||L?go(L,C)*Bs:0,v=N||k?go(N,k)*Bs+g:0,v&&(p*=Math.abs(Math.cos(v*Jo))),n.svg&&(u-=T-(T*C+b*N),h-=b-(T*L+b*k))):(Ve=A[6],Ne=A[7],P=A[8],re=A[9],ae=A[10],Oe=A[11],u=A[12],h=A[13],d=A[14],x=go(Ve,ae),m=x*Bs,x&&(S=Math.cos(-x),R=Math.sin(-x),O=H*S+P*R,q=V*S+re*R,Y=Ve*S+ae*R,P=H*-R+P*S,re=V*-R+re*S,ae=Ve*-R+ae*S,Oe=Ne*-R+Oe*S,H=O,V=q,Ve=Y),x=go(-N,ae),_=x*Bs,x&&(S=Math.cos(-x),R=Math.sin(-x),O=C*S-P*R,q=L*S-re*R,Y=N*S-ae*R,Oe=k*R+Oe*S,C=O,L=q,N=Y),x=go(L,C),g=x*Bs,x&&(S=Math.cos(x),R=Math.sin(x),O=C*S+L*R,q=H*S+V*R,L=L*S-C*R,V=V*S-H*R,C=O,H=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),f=sn(Math.sqrt(C*C+L*L+N*N)),p=sn(Math.sqrt(V*V+Ve*Ve)),x=go(H,V),v=Math.abs(x)>2e-4?x*Bs:0,M=Oe?1/(Oe<0?-Oe:Oe):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lv(yi(e,jt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=sn(f),n.scaleY=sn(p),n.rotation=sn(g)+a,n.rotationX=sn(m)+a,n.rotationY=sn(_)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ai]=pu(c)),n.xOffset=n.yOffset=0,n.force3D=Ti.force3D,n.renderTransform=n.svg?rT:rv?cv:iT,n.uncache=0,n},pu=function(e){return(e=e.split(" "))[0]+" "+e[1]},rh=function(e,t,n){var i=Fn(t);return sn(parseFloat(t)+parseFloat(ys(e,"x",n+"px",i)))+i},iT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cv(e,t)},As="0deg",Pa="0px",ws=") ",cv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,y=n.zOrigin,M="",T=_==="auto"&&e&&e!==1||_===!0;if(y&&(h!==As||u!==As)){var b=parseFloat(u)*Jo,A=Math.sin(b),x=Math.cos(b),S;b=parseFloat(h)*Jo,S=Math.cos(b),o=rh(v,o,A*S*-y),a=rh(v,a,-Math.sin(b)*-y),l=rh(v,l,x*S*-y+y)}m!==Pa&&(M+="perspective("+m+ws),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(T||o!==Pa||a!==Pa||l!==Pa)&&(M+=l!==Pa||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ws),c!==As&&(M+="rotate("+c+ws),u!==As&&(M+="rotateY("+u+ws),h!==As&&(M+="rotateX("+h+ws),(d!==As||f!==As)&&(M+="skew("+d+", "+f+ws),(p!==1||g!==1)&&(M+="scale("+p+", "+g+ws),v.style[jt]=M||"translate(0, 0)"},rT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,y=parseFloat(o),M=parseFloat(a),T,b,A,x,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Jo,c*=Jo,T=Math.cos(l)*h,b=Math.sin(l)*h,A=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=Jo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,x*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,b*=S)),T=sn(T),b=sn(b),A=sn(A),x=sn(x)):(T=h,x=d,b=A=0),(y&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(y=ys(f,"x",o,"px"),M=ys(f,"y",a,"px")),(p||g||m||_)&&(y=sn(y+p-(p*T+g*A)+m),M=sn(M+g-(p*b+g*x)+_)),(i||s)&&(S=f.getBBox(),y=sn(y+i/100*S.width),M=sn(M+s/100*S.height)),S="matrix("+T+","+b+","+A+","+x+","+y+","+M+")",f.setAttribute("transform",S),v&&(f.style[jt]=S)},sT=function(e,t,n,i,s){var o=360,a=wn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Bs:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*_m)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*_m)%o-~~(c/o)*o)),e._pt=d=new oi(e._pt,t,n,i,c,z1),d.e=u,d.u="deg",e._props.push(n),d},Tm=function(e,t){for(var n in t)e[n]=t[n];return e},oT=function(e,t,n){var i=Tm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[jt]=t,a=Ll(n,1),Ms(n,jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[jt],o[jt]=t,a=Ll(n,1),o[jt]=c);for(l in Vr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Fn(c),p=Fn(u),h=f!==p?ys(n,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new oi(e._pt,a,l,h,d-h,Ed),e._pt.u=p||0,e._props.push(l));Tm(a,i)};si("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});fu[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(p){return Pr(a,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(p,g){return f[p]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var uv={name:"css",register:Ad,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,p,g,m,_,v,y,M,T,b,A,x,S;rp||Ad(),this.styles=this.styles||iv(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(mi[g]&&q0(g,t,n,i,e,s)))){if(f=typeof u,p=fu[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Rl(u)),p)p(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",_s.lastIndex=0,_s.test(c)||(m=Fn(c),_=Fn(u),_?m!==_&&(c=ys(e,g,c,_)+_):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),x.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],wn(c)&&~c.indexOf("random(")&&(c=Rl(c)),Fn(c+"")||c==="auto"||(c+=Ti.units[g]||Fn(Pr(e,g))||""),(c+"").charAt(1)==="="&&(c=Pr(e,g))):c=Pr(e,g),d=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),g in hr&&(g==="autoAlpha"&&(d===1&&Pr(e,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,a.visibility),hs(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=hr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Vr,y){if(this.styles.save(g),S=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=yi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=yi(e,"perspective"),R?e.style.perspective=R:Ms(e,"perspective")}h=parseFloat(u)}if(M||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ll(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,M=this._pt=new oi(this._pt,a,jt,0,1,T.renderTransform,T,0,-1),M.dep=1),g==="scale")this._pt=new oi(this._pt,T,"scaleY",T.scaleY,(v?Ko(T.scaleY,v+h):h)-T.scaleY||0,Ed),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(ai,0,a[ai]),u=tT(u),T.svg?wd(e,u,0,b,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==T.zOrigin&&hs(this,T,"zOrigin",T.zOrigin,_),hs(this,a,g,pu(c),pu(u)));continue}else if(g==="svgOrigin"){wd(e,u,1,b,0,this);continue}else if(g in av){sT(this,T,g,d,v?Ko(d,v+u):u);continue}else if(g==="smoothOrigin"){hs(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){oT(this,u,e);continue}}else g in a||(g=da(g)||g);if(y||(h||h===0)&&(d||d===0)&&!V1.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),_=Fn(u)||(g in Ti.units?Ti.units[g]:m),m!==_&&(d=ys(e,g,c,_)),this._pt=new oi(this._pt,y?T:a,g,d,(v?Ko(d,v+h):h)-d,!y&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?W1:Ed),this._pt.u=_||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=G1):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=H1);else if(g in a)eT.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){$f(g,u);continue}y||(g in a?x.push(g,0,a[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),o.push(g)}}A&&J0(this)},render:function(e,t){if(t.tween._time||!sp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pr,aliases:hr,getSetter:function(e,t,n){var i=hr[t];return i&&i.indexOf(",")<0&&(t=i),t in Vr&&t!==ai&&(e._gsap.x||Pr(e,"x"))?n&&mm===n?t==="scale"?$1:Y1:(mm=n||{})&&(t==="scale"?j1:K1):e.style&&!Xf(e.style[t])?X1:~t.indexOf("-")?q1:np(e,t)},core:{_removeProperty:Ms,_getMatrix:ap}};li.utils.checkPrefix=da;li.core.getStyleSaver=iv;(function(r,e,t,n){var i=si(r+","+e+","+t,function(s){Vr[s]=1});si(e,function(s){Ti.units[s]="deg",av[s]=1}),hr[i[13]]=r+","+e,si(n,function(s){var o=s.split(":");hr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ti.units[r]="px"});li.registerPlugin(uv);var Za=li.registerPlugin(uv)||li;Za.core.Tween;function aT(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lT(r,e,t){return e&&aT(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,Wc,vi,ds,fs,Qo,hv,ks,dl,dv,Lr,Wi,fv,pv=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},mv=1,Yo=[],dt=[],mr=[],fl=Date.now,Rd=function(e,t){return t},cT=function(){var e=dl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,dt),i.push.apply(i,mr),dt=n,mr=i,Rd=function(o,a){return t[o](a)}},gs=function(e,t){return~mr.indexOf(e)&&mr[mr.indexOf(e)+1][t]},pl=function(e){return!!~dv.indexOf(e)},Wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$l="scrollLeft",jl="scrollTop",Cd=function(){return Lr&&Lr.isPressed||dt.cache++},mu=function(e,t){var n=function i(s){if(s||s===0){mv&&(vi.history.scrollRestoration="manual");var o=Lr&&Lr.isPressed;s=i.v=Math.round(s)||(Lr&&Lr.iOS?1:0),e(s),i.cacheID=dt.cache,o&&Rd("ss",s)}else(t||dt.cache!==i.cacheID||Rd("ref"))&&(i.cacheID=dt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Jn={s:$l,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:mu(function(r){return arguments.length?vi.scrollTo(r,mn.sc()):vi.pageXOffset||ds[$l]||fs[$l]||Qo[$l]||0})},mn={s:jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Jn,sc:mu(function(r){return arguments.length?vi.scrollTo(Jn.sc(),r):vi.pageYOffset||ds[jl]||fs[jl]||Qo[jl]||0})},ni=function(e,t){return(t&&t._ctx&&t._ctx.selector||Pn.utils.toArray)(e)[0]||(typeof e=="string"&&Pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ss=function(e,t){var n=t.s,i=t.sc;pl(e)&&(e=ds.scrollingElement||fs);var s=dt.indexOf(e),o=i===mn.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Wn(e,"scroll",Cd);var a=dt[s+o],l=a||(dt[s+o]=mu(gs(e,n),!0)||(pl(e)?i:mu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Pn.getProperty(e,"scrollBehavior")==="smooth"),l},Pd=function(e,t,n){var i=e,s=e,o=fl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,g){var m=fl();g||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(p){var g=a,m=s,_=fl();return(p||p===0)&&p!==i&&u(p),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Ia=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Em=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_v=function(){dl=Pn.core.globals().ScrollTrigger,dl&&dl.core&&cT()},gv=function(e){return Pn=e||pv(),!Wc&&Pn&&typeof document<"u"&&document.body&&(vi=window,ds=document,fs=ds.documentElement,Qo=ds.body,dv=[vi,ds,fs,Qo],Pn.utils.clamp,fv=Pn.core.context||function(){},ks="onpointerenter"in Qo?"pointer":"mouse",hv=on.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wi=on.eventTypes=("ontouchstart"in fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mv=0},500),_v(),Wc=1),Wc};Jn.op=mn;dt.cache=0;var on=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Wc||gv(Pn)||console.warn("Please gsap.registerPlugin(Observer)"),dl||_v();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,y=n.onPress,M=n.onRelease,T=n.onRight,b=n.onLeft,A=n.onUp,x=n.onDown,S=n.onChangeX,R=n.onChangeY,C=n.onChange,L=n.onToggleX,N=n.onToggleY,k=n.onHover,H=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,q=n.isNormalizer,Y=n.onGestureStart,P=n.onGestureEnd,re=n.onWheel,ae=n.onEnable,Ne=n.onDisable,Oe=n.onClick,Ve=n.scrollSpeed,J=n.capture,F=n.allowClicks,$=n.lockAxis,te=n.onLockAxis;this.target=a=ni(a)||fs,this.vars=n,f&&(f=Pn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Ve=Ve||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(vi.getComputedStyle(Qo).lineHeight)||22);var se,de,Ee,oe,ce,be,Ie,X=this,B=0,gt=0,tt=n.passive||!u&&n.passive!==!1,Ge=Ss(a,Jn),Re=Ss(a,mn),I=Ge(),E=Re(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Wi[0]==="pointerdown",ne=pl(a),ie=a.ownerDocument||ds,Q=[0,0,0],ve=[0,0,0],ue=0,Ce=function(){return ue=fl()},Ae=function(ke,rt){return(X.event=ke)&&f&&uT(ke.target,f)||rt&&G&&ke.pointerType!=="touch"||O&&O(ke,rt)},he=function(){X._vx.reset(),X._vy.reset(),de.pause(),h&&h(X)},pe=function(){var ke=X.deltaX=Em(Q),rt=X.deltaY=Em(ve),Me=Math.abs(ke)>=i,Ke=Math.abs(rt)>=i;C&&(Me||Ke)&&C(X,ke,rt,Q,ve),Me&&(T&&X.deltaX>0&&T(X),b&&X.deltaX<0&&b(X),S&&S(X),L&&X.deltaX<0!=B<0&&L(X),B=X.deltaX,Q[0]=Q[1]=Q[2]=0),Ke&&(x&&X.deltaY>0&&x(X),A&&X.deltaY<0&&A(X),R&&R(X),N&&X.deltaY<0!=gt<0&&N(X),gt=X.deltaY,ve[0]=ve[1]=ve[2]=0),(oe||Ee)&&(V&&V(X),Ee&&(m&&Ee===1&&m(X),v&&v(X),Ee=0),oe=!1),be&&!(be=!1)&&te&&te(X),ce&&(re(X),ce=!1),se=0},Pe=function(ke,rt,Me){Q[Me]+=ke,ve[Me]+=rt,X._vx.update(ke),X._vy.update(rt),c?se||(se=requestAnimationFrame(pe)):pe()},Le=function(ke,rt){$&&!Ie&&(X.axis=Ie=Math.abs(ke)>Math.abs(rt)?"x":"y",be=!0),Ie!=="y"&&(Q[2]+=ke,X._vx.update(ke,!0)),Ie!=="x"&&(ve[2]+=rt,X._vy.update(rt,!0)),c?se||(se=requestAnimationFrame(pe)):pe()},_e=function(ke){if(!Ae(ke,1)){ke=Ia(ke,u);var rt=ke.clientX,Me=ke.clientY,Ke=rt-X.x,Xe=Me-X.y,Je=X.isDragging;X.x=rt,X.y=Me,(Je||(Ke||Xe)&&(Math.abs(X.startX-rt)>=s||Math.abs(X.startY-Me)>=s))&&(Ee||(Ee=Je?2:1),Je||(X.isDragging=!0),Le(Ke,Xe))}},$e=X.onPress=function(we){Ae(we,1)||we&&we.button||(X.axis=Ie=null,de.pause(),X.isPressed=!0,we=Ia(we),B=gt=0,X.startX=X.x=we.clientX,X.startY=X.y=we.clientY,X._vx.reset(),X._vy.reset(),Wn(q?a:ie,Wi[1],_e,tt,!0),X.deltaX=X.deltaY=0,y&&y(X))},U=X.onRelease=function(we){if(!Ae(we,1)){Hn(q?a:ie,Wi[1],_e,!0);var ke=!isNaN(X.y-X.startY),rt=X.isDragging,Me=rt&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Ke=Ia(we);!Me&&ke&&(X._vx.reset(),X._vy.reset(),u&&F&&Pn.delayedCall(.08,function(){if(fl()-ue>300&&!we.defaultPrevented){if(we.target.click)we.target.click();else if(ie.createEvent){var Xe=ie.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,vi,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),we.target.dispatchEvent(Xe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&rt&&!q&&de.restart(!0),Ee&&pe(),_&&rt&&_(X),M&&M(X,Me)}},me=function(ke){return ke.touches&&ke.touches.length>1&&(X.isGesturing=!0)&&Y(ke,X.isDragging)},fe=function(){return(X.isGesturing=!1)||P(X)},xe=function(ke){if(!Ae(ke)){var rt=Ge(),Me=Re();Pe((rt-I)*Ve,(Me-E)*Ve,1),I=rt,E=Me,h&&de.restart(!0)}},le=function(ke){if(!Ae(ke)){ke=Ia(ke,u),re&&(ce=!0);var rt=(ke.deltaMode===1?l:ke.deltaMode===2?vi.innerHeight:1)*p;Pe(ke.deltaX*rt,ke.deltaY*rt,0),h&&!q&&de.restart(!0)}},ee=function(ke){if(!Ae(ke)){var rt=ke.clientX,Me=ke.clientY,Ke=rt-X.x,Xe=Me-X.y;X.x=rt,X.y=Me,oe=!0,h&&de.restart(!0),(Ke||Xe)&&Le(Ke,Xe)}},De=function(ke){X.event=ke,k(X)},We=function(ke){X.event=ke,H(X)},vt=function(ke){return Ae(ke)||Ia(ke,u)&&Oe(X)};de=X._dc=Pn.delayedCall(d||.25,he).pause(),X.deltaX=X.deltaY=0,X._vx=Pd(0,50,!0),X._vy=Pd(0,50,!0),X.scrollX=Ge,X.scrollY=Re,X.isDragging=X.isGesturing=X.isPressed=!1,fv(this),X.enable=function(we){return X.isEnabled||(Wn(ne?ie:a,"scroll",Cd),o.indexOf("scroll")>=0&&Wn(ne?ie:a,"scroll",xe,tt,J),o.indexOf("wheel")>=0&&Wn(a,"wheel",le,tt,J),(o.indexOf("touch")>=0&&hv||o.indexOf("pointer")>=0)&&(Wn(a,Wi[0],$e,tt,J),Wn(ie,Wi[2],U),Wn(ie,Wi[3],U),F&&Wn(a,"click",Ce,!0,!0),Oe&&Wn(a,"click",vt),Y&&Wn(ie,"gesturestart",me),P&&Wn(ie,"gestureend",fe),k&&Wn(a,ks+"enter",De),H&&Wn(a,ks+"leave",We),V&&Wn(a,ks+"move",ee)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=oe=Ee=!1,X._vx.reset(),X._vy.reset(),I=Ge(),E=Re(),we&&we.type&&$e(we),ae&&ae(X)),X},X.disable=function(){X.isEnabled&&(Yo.filter(function(we){return we!==X&&pl(we.target)}).length||Hn(ne?ie:a,"scroll",Cd),X.isPressed&&(X._vx.reset(),X._vy.reset(),Hn(q?a:ie,Wi[1],_e,!0)),Hn(ne?ie:a,"scroll",xe,J),Hn(a,"wheel",le,J),Hn(a,Wi[0],$e,J),Hn(ie,Wi[2],U),Hn(ie,Wi[3],U),Hn(a,"click",Ce,!0),Hn(a,"click",vt),Hn(ie,"gesturestart",me),Hn(ie,"gestureend",fe),Hn(a,ks+"enter",De),Hn(a,ks+"leave",We),Hn(a,ks+"move",ee),X.isEnabled=X.isPressed=X.isDragging=!1,Ne&&Ne(X))},X.kill=X.revert=function(){X.disable();var we=Yo.indexOf(X);we>=0&&Yo.splice(we,1),Lr===X&&(Lr=0)},Yo.push(X),q&&pl(a)&&(Lr=X),X.enable(g)},lT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();on.version="3.14.2";on.create=function(r){return new on(r)};on.register=gv;on.getAll=function(){return Yo.slice()};on.getById=function(r){return Yo.filter(function(e){return e.vars.id===r})[0]};pv()&&Pn.registerPlugin(on);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Be,zo,ht,Vt,_i,wt,lp,_u,Dl,ml,Ja,Kl,Un,Fu,Id,$n,bm,Am,Ho,vv,sh,xv,Yn,Ld,Mv,yv,ss,Dd,cp,ea,up,_l,Nd,oh,Zl=1,On=Date.now,ah=On(),ki=0,Qa=0,wm=function(e,t,n){var i=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Rm=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hT=function r(){return Qa&&requestAnimationFrame(r)},Cm=function(){return Fu=1},Pm=function(){return Fu=0},ar=function(e){return e},el=function(e){return Math.round(e*1e5)/1e5||0},Sv=function(){return typeof window<"u"},Tv=function(){return Be||Sv()&&(Be=window.gsap)&&Be.registerPlugin&&Be},oo=function(e){return!!~lp.indexOf(e)},Ev=function(e){return(e==="Height"?up:ht["inner"+e])||_i["client"+e]||wt["client"+e]},bv=function(e){return gs(e,"getBoundingClientRect")||(oo(e)?function(){return jc.width=ht.innerWidth,jc.height=up,jc}:function(){return Ir(e)})},dT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=gs(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Ev(s):e["client"+s])||0}},fT=function(e,t){return!t||~mr.indexOf(e)?bv(e):function(){return jc}},dr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=gs(e,n))?o()-bv(e)()[s]:oo(e)?(_i[n]||wt[n])-Ev(i):e[n]-e["offset"+i])},Jl=function(e,t){for(var n=0;n<Ho.length;n+=3)(!t||~t.indexOf(Ho[n+1]))&&e(Ho[n],Ho[n+1],Ho[n+2])},pi=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},tl=function(e){return typeof e=="number"},Vs=function(e){return typeof e=="object"},La=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},lh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},vo=Math.abs,Av="left",wv="top",hp="right",dp="bottom",no="width",io="height",gl="Right",vl="Left",xl="Top",Ml="Bottom",un="padding",Li="margin",fa="Width",fp="Height",pn="px",Di=function(e){return ht.getComputedStyle(e)},pT=function(e){var t=Di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Im=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ir=function(e,t){var n=t&&Di(e)[Id]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},gu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Rv=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},mT=function(e){return function(t){return Be.utils.snap(Rv(e),t)}},pp=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},_T=function(e){return function(t,n){return pp(Rv(e))(t,n.direction)}},Ql=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},En=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ec=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Lm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tc={toggleActions:"play",anticipatePin:0},vu={top:0,left:0,center:.5,bottom:1,right:1},Xc=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in vu?vu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},nc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,p=Vt.createElement("div"),g=oo(n)||gs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=g?wt:n,v=e.indexOf("start")!==-1,y=v?c:u,M="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(M+=(i===mn?hp:dp)+":"+(o+parseFloat(d))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],qc(p,0,i,v),p},qc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+fa]=1,s["border"+a+fa]=0,s[n.p]=t+"px",Be.set(e,s)},ct=[],Ud={},Nl,Dm=function(){return On()-ki>34&&(Nl||(Nl=requestAnimationFrame(Or)))},xo=function(){(!Yn||!Yn.isPressed||Yn.startX>wt.clientWidth)&&(dt.cache++,Yn?Nl||(Nl=requestAnimationFrame(Or)):Or(),ki||lo("scrollStart"),ki=On())},ch=function(){yv=ht.innerWidth,Mv=ht.innerHeight},nl=function(e){dt.cache++,(e===!0||!Un&&!xv&&!Vt.fullscreenElement&&!Vt.webkitFullscreenElement&&(!Ld||yv!==ht.innerWidth||Math.abs(ht.innerHeight-Mv)>ht.innerHeight*.25))&&_u.restart(!0)},ao={},gT=[],Cv=function r(){return En(_t,"scrollEnd",r)||$s(!0)},lo=function(e){return ao[e]&&ao[e].map(function(t){return t()})||gT},di=[],Pv=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},Iv=function(){return dt.forEach(function(e){return Bn(e)&&++e.cacheID&&(e.rec=e())})},mp=function(e,t){var n;for($n=0;$n<ct.length;$n++)n=ct[$n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));_l=!0,t&&Pv(t),t||lo("revert")},Lv=function(e,t){dt.cache++,(t||!jn)&&dt.forEach(function(n){return Bn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(ht.history.scrollRestoration=cp=e)},jn,ro=0,Nm,vT=function(){if(Nm!==ro){var e=Nm=ro;requestAnimationFrame(function(){return e===ro&&$s(!0)})}},Dv=function(){wt.appendChild(ea),up=!Yn&&ea.offsetHeight||ht.innerHeight,wt.removeChild(ea)},Um=function(e){return Dl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},$s=function(e,t){if(_i=Vt.documentElement,wt=Vt.body,lp=[ht,Vt,_i,wt],ki&&!e&&!_l){bn(_t,"scrollEnd",Cv);return}Dv(),jn=_t.isRefreshing=!0,_l||Iv();var n=lo("refreshInit");vv&&_t.sort(),t||mp(),dt.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),_l=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Nd=1,Um(!0),ct.forEach(function(i){var s=dr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Um(!1),Nd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),dt.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lv(cp,1),_u.pause(),ro++,jn=2,Or(2),ct.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),jn=_t.isRefreshing=!1,lo("refresh")},Od=0,Yc=1,yl,Or=function(e){if(e===2||!jn&&!_l){_t.isUpdating=!0,yl&&yl.update(0);var t=ct.length,n=On(),i=n-ah>=50,s=t&&ct[0].scroll();if(Yc=Od>s?-1:1,jn||(Od=s),i&&(ki&&!Fu&&n-ki>200&&(ki=0,lo("scrollEnd")),Ja=ah,ah=n),Yc<0){for($n=t;$n-- >0;)ct[$n]&&ct[$n].update(0,i);Yc=1}else for($n=0;$n<t;$n++)ct[$n]&&ct[$n].update(0,i);_t.isUpdating=!1}Nl=0},Fd=[Av,wv,dp,hp,Li+Ml,Li+gl,Li+xl,Li+vl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$c=Fd.concat([no,io,"boxSizing","max"+fa,"max"+fp,"position",Li,un,un+xl,un+gl,un+Ml,un+vl]),xT=function(e,t,n){ta(n);var i=e._gsap;if(i.spacerIsNative)ta(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Fd.length,o=t.style,a=e.style,l;s--;)l=Fd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[dp]=a[hp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[no]=gu(e,Jn)+pn,o[io]=gu(e,mn)+pn,o[un]=a[Li]=a[wv]=a[Av]="0",ta(i),a[no]=a["max"+fa]=n[no],a[io]=a["max"+fp]=n[io],a[un]=n[un],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MT=/([A-Z])/g,ta=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(MT,"-$1").toLowerCase())}},ic=function(e){for(var t=$c.length,n=e.style,i=[],s=0;s<t;s++)i.push($c[s],n[$c[s]]);return i.t=e,i},yT=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},jc={left:0,top:0},Om=function(e,t,n,i,s,o,a,l,c,u,h,d,f,p){Bn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Xc("0"+e.substr(3),n):0));var g=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(e)||(e=+e),tl(e))f&&(e=Be.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&qc(a,n,i,!0);else{Bn(t)&&(t=t(l));var y=(e||"0").split(" "),M,T,b,A;v=ni(t,l)||wt,M=Ir(v)||{},(!M||!M.left&&!M.top)&&Di(v).display==="none"&&(A=v.style.display,v.style.display="block",M=Ir(v),A?v.style.display=A:v.style.removeProperty("display")),T=Xc(y[0],M[i.d]),b=Xc(y[1]||"0",n),e=M[i.p]-c[i.p]-u+T+s-b,a&&qc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var x=e+n,S=o._isStart;m="scroll"+i.d2,qc(o,x,i,S&&x>20||!S&&(h?Math.max(wt[m],_i[m]):o.parentNode[m])<=x+1),h&&(c=Ir(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+pn))}return f&&v&&(m=Ir(v),f.seek(d),_=Ir(v),f._caScrollDist=m[i.p]-_[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},ST=/(webkit|moz|length|cssText|inset)/i,Fm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=Di(e);for(o in a)!+o&&!ST.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},Nv=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},rc=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},Bm=function(e,t){var n=Ss(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,p={};c=c||n();var g=Nv(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Or()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",n.wheelHandler),_t.isTouch&&bn(e,"touchmove",n.wheelHandler),s},_t=(function(){function r(t,n){zo||r.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qa){this.update=this.refresh=this.kill=ar;return}n=Im(pi(n)||tl(n)||n.nodeType?{trigger:n}:n,tc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,y=s.once,M=s.snap,T=s.pinReparent,b=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,S=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Jn:mn,C=!h&&h!==0,L=ni(n.scroller||ht),N=Be.core.getCache(L),k=oo(L),H=("pinType"in n?n.pinType:gs(L,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=C&&n.toggleActions.split(" "),q="markers"in n?n.markers:tc.markers,Y=k?0:parseFloat(Di(L)["border"+R.p2+fa])||0,P=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ae=dT(L,k,R),Ne=fT(L,k),Oe=0,Ve=0,J=0,F=Ss(L,R),$,te,se,de,Ee,oe,ce,be,Ie,X,B,gt,tt,Ge,Re,I,E,G,ne,ie,Q,ve,ue,Ce,Ae,he,pe,Pe,Le,_e,$e,U,me,fe,xe,le,ee,De,We;if(P._startClamp=P._endClamp=!1,P._dir=R,m*=45,P.scroller=L,P.scroll=A?A.time.bind(A):F,de=F(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(vv=1,n.refreshPriority===-9999&&(yl=P)),N.tweenScroll=N.tweenScroll||{top:Bm(L,mn),left:Bm(L,Jn)},P.tweenTo=$=N.tweenScroll[R.p],P.scrubDuration=function(Me){me=tl(Me)&&Me,me?U?U.duration(Me):U=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:me,paused:!0,onComplete:function(){return _&&_(P)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),_e=0,l||(l=i.vars.id)),M&&((!Vs(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in wt.style&&Be.set(k?[wt,_i]:L,{scrollBehavior:"auto"}),dt.forEach(function(Me){return Bn(Me)&&Me.target===(k?Vt.scrollingElement||_i:L)&&(Me.smooth=!1)}),se=Bn(M.snapTo)?M.snapTo:M.snapTo==="labels"?mT(i):M.snapTo==="labelsDirectional"?_T(i):M.directional!==!1?function(Me,Ke){return pp(M.snapTo)(Me,On()-Ve<500?0:Ke.direction)}:Be.utils.snap(M.snapTo),fe=M.duration||{min:.1,max:2},fe=Vs(fe)?ml(fe.min,fe.max):ml(fe,fe),xe=Be.delayedCall(M.delay||me/2||.1,function(){var Me=F(),Ke=On()-Ve<500,Xe=$.tween;if((Ke||Math.abs(P.getVelocity())<10)&&!Xe&&!Fu&&Oe!==Me){var Je=(Me-oe)/Ge,Xt=i&&!C?i.totalProgress():Je,nt=Ke?0:(Xt-$e)/(On()-Ja)*1e3||0,Ct=Be.utils.clamp(-Je,1-Je,vo(nt/2)*nt/.185),Zt=Je+(M.inertia===!1?0:Ct),Ut,Et,bt=M,Mn=bt.onStart,Pt=bt.onInterrupt,yn=bt.onComplete;if(Ut=se(Zt,P),tl(Ut)||(Ut=Zt),Et=Math.max(0,Math.round(oe+Ut*Ge)),Me<=ce&&Me>=oe&&Et!==Me){if(Xe&&!Xe._initted&&Xe.data<=vo(Et-Me))return;M.inertia===!1&&(Ct=Ut-Je),$(Et,{duration:fe(vo(Math.max(vo(Zt-Xt),vo(Ut-Xt))*.185/nt/.05||0)),ease:M.ease||"power3",data:vo(Et-Me),onInterrupt:function(){return xe.restart(!0)&&Pt&&Pt(P)},onComplete:function(){P.update(),Oe=F(),i&&!C&&(U?U.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),_e=$e=i&&!C?i.totalProgress():P.progress,v&&v(P),yn&&yn(P)}},Me,Ct*Ge,Et-Me-Ct*Ge),Mn&&Mn(P,$.tween)}}else P.isActive&&Oe!==Me&&xe.restart(!0)}).pause()),l&&(Ud[l]=P),d=P.trigger=ni(d||f!==!0&&f),We=d&&d._gsap&&d._gsap.stRevert,We&&(We=We(P)),f=f===!0?d:ni(f),pi(a)&&(a={targets:d,className:a}),f&&(p===!1||p===Li||(p=!p&&f.parentNode&&f.parentNode.style&&Di(f.parentNode).display==="flex"?!1:un),P.pin=f,te=Be.core.getCache(f),te.spacer?Re=te.pinState:(b&&(b=ni(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),te.spacerIsNative=!!b,b&&(te.spacerState=ic(b))),te.spacer=G=b||Vt.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),te.pinState=Re=ic(f)),n.force3D!==!1&&Be.set(f,{force3D:!0}),P.spacer=G=te.spacer,Le=Di(f),Ce=Le[p+R.os2],ie=Be.getProperty(f),Q=Be.quickSetter(f,R.a,pn),uh(f,G,Le),E=ic(f)),q){gt=Vs(q)?Im(q,Lm):Lm,X=nc("scroller-start",l,L,R,gt,0),B=nc("scroller-end",l,L,R,gt,0,X),ne=X["offset"+R.op.d2];var vt=ni(gs(L,"content")||L);be=this.markerStart=nc("start",l,vt,R,gt,ne,0,A),Ie=this.markerEnd=nc("end",l,vt,R,gt,ne,0,A),A&&(De=Be.quickSetter([be,Ie],R.a,pn)),!H&&!(mr.length&&gs(L,"fixedMarkers")===!0)&&(pT(k?wt:L),Be.set([X,B],{force3D:!0}),he=Be.quickSetter(X,R.a,pn),Pe=Be.quickSetter(B,R.a,pn))}if(A){var we=A.vars.onUpdate,ke=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),we&&we.apply(A,ke||[])})}if(P.previous=function(){return ct[ct.indexOf(P)-1]},P.next=function(){return ct[ct.indexOf(P)+1]},P.revert=function(Me,Ke){if(!Ke)return P.kill(!0);var Xe=Me!==!1||!P.enabled,Je=Un;Xe!==P.isReverted&&(Xe&&(le=Math.max(F(),P.scroll.rec||0),J=P.progress,ee=i&&i.progress()),be&&[be,Ie,X,B].forEach(function(Xt){return Xt.style.display=Xe?"none":"block"}),Xe&&(Un=P,P.update(Xe)),f&&(!T||!P.isActive)&&(Xe?xT(f,G,Re):uh(f,G,Di(f),Ae)),Xe||P.update(Xe),Un=Je,P.isReverted=Xe)},P.refresh=function(Me,Ke,Xe,Je){if(!((Un||!P.enabled)&&!Ke)){if(f&&Me&&ki){bn(r,"scrollEnd",Cv);return}!jn&&re&&re(P),Un=P,$.tween&&!Xe&&($.tween.kill(),$.tween=0),U&&U.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ue){return Ue.vars.immediateRender&&Ue.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Xt=ae(),nt=Ne(),Ct=A?A.duration():dr(L,R),Zt=Ge<=.01||!Ge,Ut=0,Et=Je||0,bt=Vs(Xe)?Xe.end:n.end,Mn=n.endTrigger||d,Pt=Vs(Xe)?Xe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),yn=P.pinnedContainer=n.pinnedContainer&&ni(n.pinnedContainer,P),ti=d&&Math.max(0,ct.indexOf(P))||0,Gt=ti,nn,ln,wi,Yr,w,W,Z,K,j,ye,Te,Se,Fe;for(q&&Vs(Xe)&&(Se=Be.getProperty(X,R.p),Fe=Be.getProperty(B,R.p));Gt-- >0;)W=ct[Gt],W.end||W.refresh(0,1)||(Un=P),Z=W.pin,Z&&(Z===d||Z===f||Z===yn)&&!W.isReverted&&(ye||(ye=[]),ye.unshift(W),W.revert(!0,!0)),W!==ct[Gt]&&(ti--,Gt--);for(Bn(Pt)&&(Pt=Pt(P)),Pt=wm(Pt,"start",P),oe=Om(Pt,d,Xt,R,F(),be,X,P,nt,Y,H,Ct,A,P._startClamp&&"_startClamp")||(f?-.001:0),Bn(bt)&&(bt=bt(P)),pi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(pi(Pt)?Pt.split(" ")[0]:"")+bt:(Ut=Xc(bt.substr(2),Xt),bt=pi(Pt)?Pt:(A?Be.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,oe):oe)+Ut,Mn=d)),bt=wm(bt,"end",P),ce=Math.max(oe,Om(bt||(Mn?"100% 0":Ct),Mn,Xt,R,F()+Ut,Ie,B,P,nt,Y,H,Ct,A,P._endClamp&&"_endClamp"))||-.001,Ut=0,Gt=ti;Gt--;)W=ct[Gt]||{},Z=W.pin,Z&&W.start-W._pinPush<=oe&&!A&&W.end>0&&(nn=W.end-(P._startClamp?Math.max(0,W.start):W.start),(Z===d&&W.start-W._pinPush<oe||Z===yn)&&isNaN(Pt)&&(Ut+=nn*(1-W.progress)),Z===f&&(Et+=nn));if(oe+=Ut,ce+=Ut,P._startClamp&&(P._startClamp+=Ut),P._endClamp&&!jn&&(P._endClamp=ce||-.001,ce=Math.min(ce,dr(L,R))),Ge=ce-oe||(oe-=.01)&&.001,Zt&&(J=Be.utils.clamp(0,1,Be.utils.normalize(oe,ce,le))),P._pinPush=Et,be&&Ut&&(nn={},nn[R.a]="+="+Ut,yn&&(nn[R.p]="-="+F()),Be.set([be,Ie],nn)),f&&!(Nd&&P.end>=dr(L,R)))nn=Di(f),Yr=R===mn,wi=F(),ve=parseFloat(ie(R.a))+Et,!Ct&&ce>1&&(Te=(k?Vt.scrollingElement||_i:L).style,Te={style:Te,value:Te["overflow"+R.a.toUpperCase()]},k&&Di(wt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Te.style["overflow"+R.a.toUpperCase()]="scroll")),uh(f,G,nn),E=ic(f),ln=Ir(f,!0),K=H&&Ss(L,Yr?Jn:mn)(),p?(Ae=[p+R.os2,Ge+Et+pn],Ae.t=G,Gt=p===un?gu(f,R)+Ge+Et:0,Gt&&(Ae.push(R.d,Gt+pn),G.style.flexBasis!=="auto"&&(G.style.flexBasis=Gt+pn)),ta(Ae),yn&&ct.forEach(function(Ue){Ue.pin===yn&&Ue.vars.pinSpacing!==!1&&(Ue._subPinOffset=!0)}),H&&F(le)):(Gt=gu(f,R),Gt&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=Gt+pn)),H&&(w={top:ln.top+(Yr?wi-oe:K)+pn,left:ln.left+(Yr?K:wi-oe)+pn,boxSizing:"border-box",position:"fixed"},w[no]=w["max"+fa]=Math.ceil(ln.width)+pn,w[io]=w["max"+fp]=Math.ceil(ln.height)+pn,w[Li]=w[Li+xl]=w[Li+gl]=w[Li+Ml]=w[Li+vl]="0",w[un]=nn[un],w[un+xl]=nn[un+xl],w[un+gl]=nn[un+gl],w[un+Ml]=nn[un+Ml],w[un+vl]=nn[un+vl],I=yT(Re,w,T),jn&&F(0)),i?(j=i._initted,sh(1),i.render(i.duration(),!0,!0),ue=ie(R.a)-ve+Ge+Et,pe=Math.abs(Ge-ue)>1,H&&pe&&I.splice(I.length-2,2),i.render(0,!0,!0),j||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),sh(0)):ue=Ge,Te&&(Te.value?Te.style["overflow"+R.a.toUpperCase()]=Te.value:Te.style.removeProperty("overflow-"+R.a));else if(d&&F()&&!A)for(ln=d.parentNode;ln&&ln!==wt;)ln._pinOffset&&(oe-=ln._pinOffset,ce-=ln._pinOffset),ln=ln.parentNode;ye&&ye.forEach(function(Ue){return Ue.revert(!1,!0)}),P.start=oe,P.end=ce,de=Ee=jn?le:F(),!A&&!jn&&(de<le&&F(le),P.scroll.rec=0),P.revert(!1,!0),Ve=On(),xe&&(Oe=-1,xe.restart(!0)),Un=0,i&&C&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Zt||J!==P.progress||A||g||i&&!i._initted)&&(i&&!C&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(A&&oe<-.001&&!J?Be.utils.normalize(oe,ce,0):J,!0),P.progress=Zt||(de-oe)/Ge===J?0:J),f&&p&&(G._pinOffset=Math.round(P.progress*ue)),U&&U.invalidate(),isNaN(Se)||(Se-=Be.getProperty(X,R.p),Fe-=Be.getProperty(B,R.p),rc(X,R,Se),rc(be,R,Se-(Je||0)),rc(B,R,Fe),rc(Ie,R,Fe-(Je||0))),Zt&&!jn&&P.update(),u&&!jn&&!tt&&(tt=!0,u(P),tt=!1)}},P.getVelocity=function(){return(F()-Ee)/(On()-Ja)*1e3||0},P.endAnimation=function(){La(P.callbackAnimation),i&&(U?U.progress(1):i.paused()?C||La(i,P.direction<0,1):La(i,i.reversed()))},P.labelToScroll=function(Me){return i&&i.labels&&(oe||P.refresh()||oe)+i.labels[Me]/i.duration()*Ge||0},P.getTrailing=function(Me){var Ke=ct.indexOf(P),Xe=P.direction>0?ct.slice(0,Ke).reverse():ct.slice(Ke+1);return(pi(Me)?Xe.filter(function(Je){return Je.vars.preventOverlaps===Me}):Xe).filter(function(Je){return P.direction>0?Je.end<=oe:Je.start>=ce})},P.update=function(Me,Ke,Xe){if(!(A&&!Xe&&!Me)){var Je=jn===!0?le:P.scroll(),Xt=Me?0:(Je-oe)/Ge,nt=Xt<0?0:Xt>1?1:Xt||0,Ct=P.progress,Zt,Ut,Et,bt,Mn,Pt,yn,ti;if(Ke&&(Ee=de,de=A?F():Je,M&&($e=_e,_e=i&&!C?i.totalProgress():nt)),m&&f&&!Un&&!Zl&&ki&&(!nt&&oe<Je+(Je-Ee)/(On()-Ja)*m?nt=1e-4:nt===1&&ce>Je+(Je-Ee)/(On()-Ja)*m&&(nt=.9999)),nt!==Ct&&P.enabled){if(Zt=P.isActive=!!nt&&nt<1,Ut=!!Ct&&Ct<1,Pt=Zt!==Ut,Mn=Pt||!!nt!=!!Ct,P.direction=nt>Ct?1:-1,P.progress=nt,Mn&&!Un&&(Et=nt&&!Ct?0:nt===1?1:Ct===1?2:3,C&&(bt=!Pt&&O[Et+1]!=="none"&&O[Et+1]||O[Et],ti=i&&(bt==="complete"||bt==="reset"||bt in i))),S&&(Pt||ti)&&(ti||h||!i)&&(Bn(S)?S(P):P.getTrailing(S).forEach(function(wi){return wi.endAnimation()})),C||(U&&!Un&&!Zl?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",nt,i._tTime/i._tDur):(U.vars.totalProgress=nt,U.invalidate().restart())):i&&i.totalProgress(nt,!!(Un&&(Ve||Me)))),f){if(Me&&p&&(G.style[p+R.os2]=Ce),!H)Q(el(ve+ue*nt));else if(Mn){if(yn=!Me&&nt>Ct&&ce+1>Je&&Je+1>=dr(L,R),T)if(!Me&&(Zt||yn)){var Gt=Ir(f,!0),nn=Je-oe;Fm(f,wt,Gt.top+(R===mn?nn:0)+pn,Gt.left+(R===mn?0:nn)+pn)}else Fm(f,G);ta(Zt||yn?I:E),pe&&nt<1&&Zt||Q(ve+(nt===1&&!yn?ue:0))}}M&&!$.tween&&!Un&&!Zl&&xe.restart(!0),a&&(Pt||y&&nt&&(nt<1||!oh))&&Dl(a.targets).forEach(function(wi){return wi.classList[Zt||y?"add":"remove"](a.className)}),o&&!C&&!Me&&o(P),Mn&&!Un?(C&&(ti&&(bt==="complete"?i.pause().totalProgress(1):bt==="reset"?i.restart(!0).pause():bt==="restart"?i.restart(!0):i[bt]()),o&&o(P)),(Pt||!oh)&&(c&&Pt&&lh(P,c),V[Et]&&lh(P,V[Et]),y&&(nt===1?P.kill(!1,1):V[Et]=0),Pt||(Et=nt===1?1:3,V[Et]&&lh(P,V[Et]))),x&&!Zt&&Math.abs(P.getVelocity())>(tl(x)?x:2500)&&(La(P.callbackAnimation),U?U.progress(1):La(i,bt==="reverse"?1:!nt,1))):C&&o&&!Un&&o(P)}if(Pe){var ln=A?Je/A.duration()*(A._caScrollDist||0):Je;he(ln+(X._isFlipped?1:0)),Pe(ln)}De&&De(-Je/A.duration()*(A._caScrollDist||0))}},P.enable=function(Me,Ke){P.enabled||(P.enabled=!0,bn(L,"resize",nl),k||bn(L,"scroll",xo),re&&bn(r,"refreshInit",re),Me!==!1&&(P.progress=J=0,de=Ee=Oe=F()),Ke!==!1&&P.refresh())},P.getTween=function(Me){return Me&&$?$.tween:U},P.setPositions=function(Me,Ke,Xe,Je){if(A){var Xt=A.scrollTrigger,nt=A.duration(),Ct=Xt.end-Xt.start;Me=Xt.start+Ct*Me/nt,Ke=Xt.start+Ct*Ke/nt}P.refresh(!1,!1,{start:Rm(Me,Xe&&!!P._startClamp),end:Rm(Ke,Xe&&!!P._endClamp)},Je),P.update()},P.adjustPinSpacing=function(Me){if(Ae&&Me){var Ke=Ae.indexOf(R.d)+1;Ae[Ke]=parseFloat(Ae[Ke])+Me+pn,Ae[1]=parseFloat(Ae[1])+Me+pn,ta(Ae)}},P.disable=function(Me,Ke){if(Me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ke||U&&U.pause(),le=0,te&&(te.uncache=1),re&&En(r,"refreshInit",re),xe&&(xe.pause(),$.tween&&$.tween.kill()&&($.tween=0)),!k)){for(var Xe=ct.length;Xe--;)if(ct[Xe].scroller===L&&ct[Xe]!==P)return;En(L,"resize",nl),k||En(L,"scroll",xo)}},P.kill=function(Me,Ke){P.disable(Me,Ke),U&&!Ke&&U.kill(),l&&delete Ud[l];var Xe=ct.indexOf(P);Xe>=0&&ct.splice(Xe,1),Xe===$n&&Yc>0&&$n--,Xe=0,ct.forEach(function(Je){return Je.scroller===P.scroller&&(Xe=1)}),Xe||jn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Me&&i.revert({kill:!1}),Ke||i.kill()),be&&[be,Ie,X,B].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),yl===P&&(yl=0),f&&(te&&(te.uncache=1),Xe=0,ct.forEach(function(Je){return Je.pin===f&&Xe++}),Xe||(te.spacer=0)),n.onKill&&n.onKill(P)},ct.push(P),P.enable(!1,!1),We&&We(P),i&&i.add&&!Ge){var rt=P.update;P.update=function(){P.update=rt,dt.cache++,oe||ce||P.refresh()},Be.delayedCall(.01,P.update),Ge=.01,oe=ce=0}else P.refresh();f&&vT()},r.register=function(n){return zo||(Be=n||Tv(),Sv()&&window.document&&r.enable(),zo=Qa),zo},r.defaults=function(n){if(n)for(var i in n)tc[i]=n[i];return tc},r.disable=function(n,i){Qa=0,ct.forEach(function(o){return o[i?"kill":"disable"](n)}),En(ht,"wheel",xo),En(Vt,"scroll",xo),clearInterval(Kl),En(Vt,"touchcancel",ar),En(wt,"touchstart",ar),Ql(En,Vt,"pointerdown,touchstart,mousedown",Cm),Ql(En,Vt,"pointerup,touchend,mouseup",Pm),_u.kill(),Jl(En);for(var s=0;s<dt.length;s+=3)ec(En,dt[s],dt[s+1]),ec(En,dt[s],dt[s+2])},r.enable=function(){if(ht=window,Vt=document,_i=Vt.documentElement,wt=Vt.body,Be&&(Dl=Be.utils.toArray,ml=Be.utils.clamp,Dd=Be.core.context||ar,sh=Be.core.suppressOverwrites||ar,cp=ht.history.scrollRestoration||"auto",Od=ht.pageYOffset||0,Be.core.globals("ScrollTrigger",r),wt)){Qa=1,ea=document.createElement("div"),ea.style.height="100vh",ea.style.position="absolute",Dv(),hT(),on.register(Be),r.isTouch=on.isTouch,ss=on.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ld=on.isTouch===1,bn(ht,"wheel",xo),lp=[ht,Vt,_i,wt],Be.matchMedia?(r.matchMedia=function(c){var u=Be.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Be.addEventListener("matchMediaInit",function(){Iv(),mp()}),Be.addEventListener("matchMediaRevert",function(){return Pv()}),Be.addEventListener("matchMedia",function(){$s(0,1),lo("matchMedia")}),Be.matchMedia().add("(orientation: portrait)",function(){return ch(),ch})):console.warn("Requires GSAP 3.11.0 or later"),ch(),bn(Vt,"scroll",xo);var n=wt.hasAttribute("style"),i=wt.style,s=i.borderTopStyle,o=Be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ir(wt),mn.m=Math.round(a.top+mn.sc())||0,Jn.m=Math.round(a.left+Jn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(wt.setAttribute("style",""),wt.removeAttribute("style")),Kl=setInterval(Dm,250),Be.delayedCall(.5,function(){return Zl=0}),bn(Vt,"touchcancel",ar),bn(wt,"touchstart",ar),Ql(bn,Vt,"pointerdown,touchstart,mousedown",Cm),Ql(bn,Vt,"pointerup,touchend,mouseup",Pm),Id=Be.utils.checkPrefix("transform"),$c.push(Id),zo=On(),_u=Be.delayedCall(.2,$s).pause(),Ho=[Vt,"visibilitychange",function(){var c=ht.innerWidth,u=ht.innerHeight;Vt.hidden?(bm=c,Am=u):(bm!==c||Am!==u)&&nl()},Vt,"DOMContentLoaded",$s,ht,"load",$s,ht,"resize",nl],Jl(bn),ct.forEach(function(c){return c.enable(0,1)}),l=0;l<dt.length;l+=3)ec(En,dt[l],dt[l+1]),ec(En,dt[l],dt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(oh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Kl)||(Kl=i)&&setInterval(Dm,i),"ignoreMobileResize"in n&&(Ld=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jl(En)||Jl(bn,n.autoRefreshEvents||"none"),xv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ni(n),o=dt.indexOf(s),a=oo(s);~o&&dt.splice(o,a?6:2),i&&(a?mr.unshift(ht,i,wt,i,_i,i):mr.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(pi(n)?ni(n):n).getBoundingClientRect(),a=o[s?no:io]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=ni(n));var o=n.getBoundingClientRect(),a=o[s?no:io],l=i==null?a/2:i in vu?vu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ao.killAll||[];ao={},i.forEach(function(s){return s()})}},r})();_t.version="3.14.2";_t.saveStyles=function(r){return r?Dl(r).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),Dd())}}):di};_t.revert=function(r,e){return mp(!r,e)};_t.create=function(r,e){return new _t(r,e)};_t.refresh=function(r){return r?nl(!0):(zo||_t.register())&&$s(!0)};_t.update=function(r){return++dt.cache&&Or(r===!0?2:0)};_t.clearScrollMemory=Lv;_t.maxScroll=function(r,e){return dr(r,e?Jn:mn)};_t.getScrollFunc=function(r,e){return Ss(ni(r),e?Jn:mn)};_t.getById=function(r){return Ud[r]};_t.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};_t.isScrolling=function(){return!!ki};_t.snapDirectional=pp;_t.addEventListener=function(r,e){var t=ao[r]||(ao[r]=[]);~t.indexOf(e)||t.push(e)};_t.removeEventListener=function(r,e){var t=ao[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};_t.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Be.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(p){h.length||f.restart(!0),h.push(p.trigger),d.push(p),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Bn(s)&&(s=s(),bn(_t,"refresh",function(){return s=e.batchMax()})),Dl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(_t.create(c))}),t};var km=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},hh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(on.isTouch?" pinch-zoom":""):"none",e===_i&&r(wt,t)},sc={auto:1,scroll:1},TT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Be.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(sc[(l=Di(s)).overflowY]||sc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!oo(s)&&(sc[(l=Di(s)).overflowY]||sc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Uv=function(e,t,n,i){return on.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&TT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&bn(Vt,on.eventTypes[0],zm,!1,!0)},onDisable:function(){return En(Vt,on.eventTypes[0],zm,!0)}})},ET=/(input|label|select|textarea)/i,Vm,zm=function(e){var t=ET.test(e.target.tagName);(t||Vm)&&(e._gsapAllow=!0,Vm=t)},bT=function(e){Vs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ni(e.target)||_i,u=Be.core.globals().ScrollSmoother,h=u&&u.get(),d=ss&&(e.content&&ni(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Ss(c,mn),p=Ss(c,Jn),g=1,m=(on.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,_=0,v=Bn(i)?function(){return i(a)}:function(){return i||2.8},y,M,T=Uv(c,e.type,!0,s),b=function(){return M=!1},A=ar,x=ar,S=function(){l=dr(c,mn),x=ml(ss?1:0,l),n&&(A=ml(0,dr(c,Jn))),y=ro},R=function(){d._gsap.y=el(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},C=function(){if(M){requestAnimationFrame(b);var q=el(a.deltaY/2),Y=x(f.v-q);if(d&&Y!==f.v+f.offset){f.offset=Y-f.v;var P=el((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=dt.cache,Or()}return!0}f.offset&&R(),M=!0},L,N,k,H,V=function(){S(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function(O){return ss&&O.type==="touchmove"&&C()||g>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){M=!1;var O=g;g=el((ht.visualViewport&&ht.visualViewport.scale||1)/m),L.pause(),O!==g&&hh(c,g>1.01?!0:n?!1:"x"),N=p(),k=f(),S(),y=ro},e.onRelease=e.onGestureStart=function(O,q){if(f.offset&&R(),!q)H.restart(!0);else{dt.cache++;var Y=v(),P,re;n&&(P=p(),re=P+Y*.05*-O.velocityX/.227,Y*=km(p,P,re,dr(c,Jn)),L.vars.scrollX=A(re)),P=f(),re=P+Y*.05*-O.velocityY/.227,Y*=km(f,P,re,dr(c,mn)),L.vars.scrollY=x(re),L.invalidate().duration(Y).play(.01),(ss&&L.vars.scrollY>=l||P>=l-1)&&Be.to({},{onUpdate:V,duration:Y})}o&&o(O)},e.onWheel=function(){L._ts&&L.pause(),On()-_>1e3&&(y=0,_=On())},e.onChange=function(O,q,Y,P,re){if(ro!==y&&S(),q&&n&&p(A(P[2]===q?N+(O.startX-O.x):p()+q-P[1])),Y){f.offset&&R();var ae=re[2]===Y,Ne=ae?k+O.startY-O.y:f()+Y-re[1],Oe=x(Ne);ae&&Ne!==Oe&&(k+=Oe-Ne),f(Oe)}(Y||q)&&Or()},e.onEnable=function(){hh(c,n?!1:"x"),_t.addEventListener("refresh",V),bn(ht,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),T.enable()},e.onDisable=function(){hh(c,!0),En(ht,"resize",V),_t.removeEventListener("refresh",V),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new on(e),a.iOS=ss,ss&&!f()&&f(1),ss&&Be.ticker.add(ar),H=a._dc,L=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Nv(f,f(),function(){return L.pause()})},onUpdate:Or,onComplete:H.vars.onComplete}),a};_t.sort=function(r){if(Bn(r))return ct.sort(r);var e=ht.pageYOffset||0;return _t.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};_t.observe=function(r){return new on(r)};_t.normalizeScroll=function(r){if(typeof r>"u")return Yn;if(r===!0&&Yn)return Yn.enable();if(r===!1){Yn&&Yn.kill(),Yn=r;return}var e=r instanceof on?r:bT(r);return Yn&&Yn.target===e.target&&Yn.kill(),oo(e.target)&&(Yn=e),e};_t.core={_getVelocityProp:Pd,_inputObserver:Uv,_scrollers:dt,_proxies:mr,bridge:{ss:function(){ki||lo("scrollStart"),ki=On()},ref:function(){return Un}}};Tv()&&Be.registerPlugin(_t);const AT={id:"projects",class:"projects"},wT={class:"scrolling-text-container"},RT={class:"scrolling-text-container"},CT={class:"sticky-wrapper"},PT={class:"horizontal-container"},IT={class:"card-content"},LT={class:"card-title"},DT={class:"card-description"},NT={class:"card-tech"},UT={class:"card-links"},OT=["href"],FT={__name:"Projects",setup(r){Za.registerPlugin(_t);const e=ft(null),t=ft(null),n=ft(null),i=ft(null),s=ft([{id:1,title:"My-website_1.0",description:"最初版本的个人网站，采用 HTML5+CSS3+jQuery 构建，包含个人简介、技能展示和学习经历等基础内容，探索网页设计的起点之作。",githubUrl:"https://github.com/ContinueYN/website_1.0",technologies:["HTML5","CSS3","jQuery","Scroll.js"]},{id:2,title:"My-website_2.0",description:"全面升级的个人网站，基于 React 重构，优化整体设计语言，添加流畅的页面过渡动画和响应式布局，提升用户体验。",githubUrl:"https://github.com/ContinueYN/website_2.0",technologies:["React","CSS3","HTML5","JSX"]},{id:3,title:"食堂网站",description:"金中海湾食堂官方网站，支持弹幕互动、菜品排行榜、多页面切换等功能。后端采用 Python Flask，实现学生交流和菜品展示。",githubUrl:"https://github.com/ContinueYN/Canteen",technologies:["Python","Flask","HTML5","CSS3","Layui"]},{id:4,title:"3D 古诗词",description:"诗之古河 - 将传统文化与现代科技融合的创新项目。基于 Three.js 实现书法作品的 3D 动态展示，支持唐风卷轴、绢本册页等多种装帧形式。",githubUrl:"https://github.com/ContinueYN/Poem",technologies:["Three.js","Tween.js","HTML5","CSS3"]},{id:5,title:"表单注册",description:"ChatRegistry AI - 全栈用户管理系统，集成 AI 聊天服务。包含用户注册、信息管理功能，搭载智谱 AI GLM-4，支持多种聊天模式和思维链推理。",githubUrl:"https://github.com/ContinueYN/ChatRegistry-AI",technologies:["Vue3","TypeScript","FastAPI","Express"]}]);return Wr(()=>{n.value&&Za.to(n.value,{xPercent:-50,ease:"none",duration:20,repeat:-1}),i.value&&Za.fromTo(i.value,{xPercent:-50},{xPercent:0,ease:"none",duration:20,repeat:-1});const o=t.value,a=e.value;if(o&&a){const l=o.scrollWidth,c=window.innerWidth;Za.to(o,{x:()=>-(l-c),ease:"none",scrollTrigger:{trigger:a,start:"top top",end:()=>`+=${l-c}`,scrub:1,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}})}}),(o,a)=>(et(),ot("section",AT,[z("div",wT,[z("div",{class:"scrolling-text scrolling-left",ref_key:"scrollingTextLeftRef",ref:n},[...a[0]||(a[0]=[z("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1),z("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1)])],512)]),z("div",RT,[z("div",{class:"scrolling-text scrolling-right",ref_key:"scrollingTextRightRef",ref:i},[...a[1]||(a[1]=[z("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1),z("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1)])],512)]),z("div",{class:"horizontal-scroll-section",ref_key:"horizontalSectionRef",ref:e},[z("div",CT,[z("div",PT,[z("div",{class:"horizontal-track",ref_key:"horizontalTrackRef",ref:t},[(et(!0),ot(Xi,null,cr(s.value,l=>(et(),ot("div",{key:l.id,class:"project-card"},[z("div",IT,[z("h3",LT,hn(l.title),1),z("p",DT,hn(l.description),1),z("div",NT,[(et(!0),ot(Xi,null,cr(l.technologies,c=>(et(),ot("span",{key:c,class:"tech-tag"},hn(c),1))),128))]),z("div",UT,[z("a",{href:l.githubUrl,class:"card-link github-link",target:"_blank"},[...a[2]||(a[2]=[z("span",null,"GitHub",-1),z("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[z("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.24-.604-.536-1.529.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.648.353 2.572.11 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1)])],8,OT)])])]))),128))],512)])])],512)]))}},BT=Xr(FT,[["__scopeId","data-v-1c619a5c"]]),kT={id:"contact",class:"contact"},VT={class:"contact-bg-decoration"},zT={class:"sakura-petals"},HT={class:"container"},GT={class:"contact-content"},WT={class:"contact-info"},XT={class:"info-card"},qT={class:"contact-methods"},YT={class:"contact-method"},$T={class:"contact-icon-wrapper"},jT={class:"contact-icon"},KT={class:"contact-method"},ZT={class:"contact-icon-wrapper"},JT={class:"contact-icon"},QT={class:"contact-method"},eE={class:"contact-icon-wrapper"},tE={class:"contact-icon"},nE={class:"form-group"},iE={class:"input-wrapper"},rE=["disabled"],sE={class:"form-group"},oE={class:"input-wrapper"},aE=["disabled"],lE={class:"form-group"},cE={class:"input-wrapper"},uE=["disabled"],hE={class:"form-group"},dE={class:"input-wrapper"},fE=["disabled"],pE=["disabled"],mE={key:0},_E={key:1},gE=Pu({__name:"Contact",setup(r){const e=Zg({name:"",email:"",subject:"",message:""}),t=ft(!1),n=async()=>{if(!t.value){t.value=!0;try{const o=await(await fetch("http://localhost:3001/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();o.success?(alert(o.message),Object.assign(e,{name:"",email:"",subject:"",message:""})):alert(o.message||"发送失败，请重试")}catch(i){console.error("提交表单失败:",i),alert("网络错误，请检查网络连接或稍后重试")}finally{t.value=!1}}};return(i,s)=>(et(),ot("section",kT,[z("div",VT,[s[4]||(s[4]=au('<div class="floating-shapes" data-v-e8281ab5><div class="shape shape-1" data-v-e8281ab5></div><div class="shape shape-2" data-v-e8281ab5></div><div class="shape shape-3" data-v-e8281ab5></div><div class="shape shape-4" data-v-e8281ab5></div><div class="shape shape-5" data-v-e8281ab5></div></div>',1)),z("div",zT,[(et(),ot(Xi,null,cr(15,o=>z("div",{class:"petal",key:o,style:Xs({left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*2}s`})},null,4)),64))])]),z("div",HT,[s[27]||(s[27]=au('<div class="section-header" data-v-e8281ab5><h2 class="section-title" data-v-e8281ab5><span class="title-icon" data-v-e8281ab5>✦</span> ~~Contact~~ <span class="title-icon" data-v-e8281ab5>✦</span></h2><p class="section-subtitle" data-v-e8281ab5>有项目想讨论？欢迎联系！</p><div class="title-decoration" data-v-e8281ab5><span class="deco-line" data-v-e8281ab5></span><span class="deco-star" data-v-e8281ab5>✦</span><span class="deco-line" data-v-e8281ab5></span></div></div>',1)),z("div",GT,[z("div",WT,[z("div",XT,[s[11]||(s[11]=z("div",{class:"card-header"},[z("h3",null,"通过右边可以发送到我QQ邮箱")],-1)),s[12]||(s[12]=z("p",{class:"info-description"},"如果您有项目想法或需要帮助，请随时与我联系。我通常会在一日内回复。",-1)),z("div",qT,[z("div",YT,[z("div",$T,[s[5]||(s[5]=z("div",{class:"icon-bg"},null,-1)),z("div",jT,[qt(zt(Jg),{size:20})])]),s[6]||(s[6]=z("div",{class:"method-info"},[z("h4",null,"邮箱"),z("p",null,"3258664928@qq.com")],-1))]),z("div",KT,[z("div",ZT,[s[7]||(s[7]=z("div",{class:"icon-bg"},null,-1)),z("div",JT,[qt(zt(Qg),{size:20})])]),s[8]||(s[8]=z("div",{class:"method-info"},[z("h4",null,"电话"),z("p",null,"+86 181 3686 5751")],-1))]),z("div",QT,[z("div",eE,[s[9]||(s[9]=z("div",{class:"icon-bg"},null,-1)),z("div",tE,[qt(zt(e0),{size:20})])]),s[10]||(s[10]=z("div",{class:"method-info"},[z("h4",null,"地址"),z("p",null,"中国，汕头市")],-1))])])])]),z("form",{class:"contact-form",onSubmit:fi(n,["prevent"])},[s[26]||(s[26]=z("div",{class:"form-header"},[z("h3",null,"发送消息")],-1)),z("div",nE,[s[15]||(s[15]=z("label",{for:"name"}," 姓名 * ",-1)),z("div",iE,[$a(z("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=o=>e.name=o),disabled:t.value,required:"",placeholder:"请输入您的姓名"},null,8,rE),[[ql,e.name]]),s[13]||(s[13]=z("div",{class:"input-border"},null,-1)),s[14]||(s[14]=z("div",{class:"input-highlight"},null,-1))])]),z("div",sE,[s[18]||(s[18]=z("label",{for:"email"}," 邮箱 * ",-1)),z("div",oE,[$a(z("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=o=>e.email=o),disabled:t.value,required:"",placeholder:"请输入您的邮箱"},null,8,aE),[[ql,e.email]]),s[16]||(s[16]=z("div",{class:"input-border"},null,-1)),s[17]||(s[17]=z("div",{class:"input-highlight"},null,-1))])]),z("div",lE,[s[21]||(s[21]=z("label",{for:"subject"}," 主题 * ",-1)),z("div",cE,[$a(z("input",{type:"text",id:"subject","onUpdate:modelValue":s[2]||(s[2]=o=>e.subject=o),disabled:t.value,required:"",placeholder:"请输入主题"},null,8,uE),[[ql,e.subject]]),s[19]||(s[19]=z("div",{class:"input-border"},null,-1)),s[20]||(s[20]=z("div",{class:"input-highlight"},null,-1))])]),z("div",hE,[s[24]||(s[24]=z("label",{for:"message"}," 消息 * ",-1)),z("div",dE,[$a(z("textarea",{id:"message",rows:"5","onUpdate:modelValue":s[3]||(s[3]=o=>e.message=o),disabled:t.value,required:"",placeholder:"请输入您的消息..."},null,8,fE),[[ql,e.message]]),s[22]||(s[22]=z("div",{class:"input-border"},null,-1)),s[23]||(s[23]=z("div",{class:"input-highlight"},null,-1))])]),z("button",{type:"submit",class:"btn btn-submit",disabled:t.value},[t.value?(et(),ot("span",mE,"发送中...")):(et(),ot("span",_E,"发送消息")),s[25]||(s[25]=z("div",{class:"btn-shine"},null,-1))],8,pE)],32)])])]))}}),vE=Xr(gE,[["__scopeId","data-v-e8281ab5"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="183",xE=0,Hm=1,ME=2,Kc=1,yE=2,il=3,zr=0,Qn=1,Ni=2,Fr=0,na=1,Gm=2,Wm=3,Xm=4,SE=5,Gs=100,TE=101,EE=102,bE=103,AE=104,wE=200,RE=201,CE=202,PE=203,Bd=204,kd=205,IE=206,LE=207,DE=208,NE=209,UE=210,OE=211,FE=212,BE=213,kE=214,Vd=0,zd=1,Hd=2,pa=3,Gd=4,Wd=5,Xd=6,qd=7,Ov=0,VE=1,zE=2,_r=0,Fv=1,Bv=2,kv=3,Vv=4,zv=5,Hv=6,Gv=7,qm="attached",HE="detached",Wv=300,uo=301,ma=302,dh=303,fh=304,Bu=306,_a=1e3,fr=1001,xu=1002,_n=1003,Xv=1004,rl=1005,gn=1006,Zc=1007,Dr=1008,xi=1009,qv=1010,Yv=1011,Ul=1012,_p=1013,xr=1014,Fi=1015,Hr=1016,gp=1017,vp=1018,Ol=1020,$v=35902,jv=35899,Kv=1021,Zv=1022,Bi=1023,Gr=1026,js=1027,xp=1028,Mp=1029,ga=1030,yp=1031,Sp=1033,Jc=33776,Qc=33777,eu=33778,tu=33779,Yd=35840,$d=35841,jd=35842,Kd=35843,Zd=36196,Jd=37492,Qd=37496,ef=37488,tf=37489,nf=37490,rf=37491,sf=37808,of=37809,af=37810,lf=37811,cf=37812,uf=37813,hf=37814,df=37815,ff=37816,pf=37817,mf=37818,_f=37819,gf=37820,vf=37821,xf=36492,Mf=36494,yf=36495,Sf=36283,Tf=36284,Ef=36285,bf=36286,GE=2200,WE=2201,XE=2202,Fl=2300,Bl=2301,ph=2302,Ym=2303,$o=2400,jo=2401,Mu=2402,Tp=2500,qE=2501,YE=0,Jv=1,Af=2,$E=3200,Ep=0,jE=1,ls="",Cn="srgb",ei="srgb-linear",yu="linear",It="srgb",Mo=7680,$m=519,KE=512,ZE=513,JE=514,bp=515,QE=516,eb=517,Ap=518,tb=519,wf=35044,nb=35048,jm="300 es",pr=2e3,kl=2001;function ib(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function rb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sb(){const r=Vl("canvas");return r.style.display="block",r}const Km={};function Su(...r){const e="THREE."+r.shift();console.log(e,...r)}function Qv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=Qv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Qe(...r){r=Qv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Tu(...r){const e=r.join(" ");e in Km||(Km[e]=!0,He(...r))}function ob(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ab={[Vd]:zd,[Hd]:Xd,[Gd]:qd,[pa]:Wd,[zd]:Vd,[Xd]:Hd,[qd]:Gd,[Wd]:pa};class fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zm=1234567;const Sl=Math.PI/180,va=180/Math.PI;function $i(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function wp(r,e){return(r%e+e)%e}function lb(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function cb(r,e,t){return r!==e?(t-r)/(e-r):0}function Tl(r,e,t){return(1-t)*r+t*e}function ub(r,e,t,n){return Tl(r,e,1-Math.exp(-t*n))}function hb(r,e=1){return e-Math.abs(wp(r,e*2)-e)}function db(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function fb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function pb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function mb(r,e){return r+Math.random()*(e-r)}function _b(r){return r*(.5-Math.random())}function gb(r){r!==void 0&&(Zm=r);let e=Zm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vb(r){return r*Sl}function xb(r){return r*va}function Mb(r){return(r&r-1)===0&&r!==0}function yb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Sb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:Sl,RAD2DEG:va,generateUUID:$i,clamp:mt,euclideanModulo:wp,mapLinear:lb,inverseLerp:cb,lerp:Tl,damp:ub,pingpong:hb,smoothstep:db,smootherstep:fb,randInt:pb,randFloat:mb,randFloatSpread:_b,seededRandom:gb,degToRad:vb,radToDeg:xb,isPowerOfTwo:Mb,ceilPowerOfTwo:yb,floorPowerOfTwo:Sb,setQuaternionFromProperEuler:Tb,normalize:Lt,denormalize:qi};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(h!==g||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let _=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);_=Math.sin(_*v)/y,a=Math.sin(a*v)/y,l=l*_+d*a,c=c*_+f*a,u=u*_+p*a,h=h*_+g*a}else{l=l*_+d*a,c=c*_+f*a,u=u*_+p*a,h=h*_+g*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new D,Jm=new it;class je{constructor(e,t,n,i,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=i[0],m=i[3],_=i[6],v=i[1],y=i[4],M=i[7],T=i[2],b=i[5],A=i[8];return s[0]=o*g+a*v+l*T,s[3]=o*m+a*y+l*b,s[6]=o*_+a*M+l*A,s[1]=c*g+u*v+h*T,s[4]=c*m+u*y+h*b,s[7]=c*_+u*M+h*A,s[2]=d*g+f*v+p*T,s[5]=d*m+f*y+p*b,s[8]=d*_+f*M+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_h.makeScale(e,t)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new je,Qm=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eb(){const r={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(i.r=Br(i.r),i.g=Br(i.g),i.b=Br(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(i.r=ia(i.r),i.g=ia(i.g),i.b=ia(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?yu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ei]:{primaries:e,whitePoint:n,transfer:yu,toXYZ:Qm,fromXYZ:e_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:n,transfer:It,toXYZ:Qm,fromXYZ:e_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),r}const xt=Eb();function Br(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yo;class bb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yo===void 0&&(yo=Vl("canvas")),yo.width=e.width,yo.height=e.height;const i=yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Br(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Br(t[n]/255)*255):t[n]=Br(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ab=0;class Rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(gh(i[o].image)):s.push(gh(i[o]))}else s=gh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function gh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let wb=0;const vh=new D;class An extends fo{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=fr,i=fr,s=gn,o=Dr,a=Bi,l=xi,c=An.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=$i(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Wv;An.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,i=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,T=(_+1)/2,b=(u+d)/4,A=(h+g)/4,x=(p+m)/4;return y>M&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=A/n):M>T?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=x/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-g)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rb extends fo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new An(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rp(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends Rb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ex extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cb extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ze{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,p,g,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/So.setFromMatrixColumn(e,0).length(),s=1/So.setFromMatrixColumn(e,1).length(),o=1/So.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pb,e,Ib)}lookAt(e,t,n){const i=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Zr.crossVectors(n,ui),Zr.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Zr.crossVectors(n,ui)),Zr.normalize(),oc.crossVectors(ui,Zr),i[0]=Zr.x,i[4]=oc.x,i[8]=ui.x,i[1]=Zr.y,i[5]=oc.y,i[9]=ui.y,i[2]=Zr.z,i[6]=oc.z,i[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],v=n[3],y=n[7],M=n[11],T=n[15],b=i[0],A=i[4],x=i[8],S=i[12],R=i[1],C=i[5],L=i[9],N=i[13],k=i[2],H=i[6],V=i[10],O=i[14],q=i[3],Y=i[7],P=i[11],re=i[15];return s[0]=o*b+a*R+l*k+c*q,s[4]=o*A+a*C+l*H+c*Y,s[8]=o*x+a*L+l*V+c*P,s[12]=o*S+a*N+l*O+c*re,s[1]=u*b+h*R+d*k+f*q,s[5]=u*A+h*C+d*H+f*Y,s[9]=u*x+h*L+d*V+f*P,s[13]=u*S+h*N+d*O+f*re,s[2]=p*b+g*R+m*k+_*q,s[6]=p*A+g*C+m*H+_*Y,s[10]=p*x+g*L+m*V+_*P,s[14]=p*S+g*N+m*O+_*re,s[3]=v*b+y*R+M*k+T*q,s[7]=v*A+y*C+M*H+T*Y,s[11]=v*x+y*L+M*V+T*P,s[15]=v*S+y*N+M*O+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15],v=l*f-c*d,y=a*f-c*h,M=a*d-l*h,T=o*f-c*u,b=o*d-l*u,A=o*h-a*u;return t*(g*v-m*y+_*M)-n*(p*v-m*T+_*b)+i*(p*y-g*T+_*A)-s*(p*M-g*b+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],v=t*a-n*o,y=t*l-i*o,M=t*c-s*o,T=n*l-i*a,b=n*c-s*a,A=i*c-s*l,x=u*g-h*p,S=u*m-d*p,R=u*_-f*p,C=h*m-d*g,L=h*_-f*g,N=d*_-f*m,k=v*N-y*L+M*C+T*R-b*S+A*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/k;return e[0]=(a*N-l*L+c*C)*H,e[1]=(i*L-n*N-s*C)*H,e[2]=(g*A-m*b+_*T)*H,e[3]=(d*b-h*A-f*T)*H,e[4]=(l*R-o*N-c*S)*H,e[5]=(t*N-i*R+s*S)*H,e[6]=(m*M-p*A-_*y)*H,e[7]=(u*A-d*M+f*y)*H,e[8]=(o*L-a*R+c*x)*H,e[9]=(n*R-t*L-s*x)*H,e[10]=(p*b-g*M+_*v)*H,e[11]=(h*M-u*b-f*v)*H,e[12]=(a*S-o*C-l*x)*H,e[13]=(t*C-n*S+i*x)*H,e[14]=(g*y-p*T-m*v)*H,e[15]=(u*T-h*y+d*v)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,g=o*u,m=o*h,_=a*h,v=l*c,y=l*u,M=l*h,T=n.x,b=n.y,A=n.z;return i[0]=(1-(g+_))*T,i[1]=(f+M)*T,i[2]=(p-y)*T,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+_))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(p+y)*A,i[9]=(m-v)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=So.set(i[0],i[1],i[2]).length();const a=So.set(i[4],i[5],i[6]).length(),l=So.set(i[8],i[9],i[10]).length();s<0&&(o=-o),zi.copy(this);const c=1/o,u=1/a,h=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=h,zi.elements[9]*=h,zi.elements[10]*=h,t.setFromRotationMatrix(zi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=pr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===pr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=pr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===pr)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===kl)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const So=new D,zi=new Ze,Pb=new D(0,0,0),Ib=new D(1,1,1),Zr=new D,oc=new D,ui=new D,t_=new Ze,n_=new it;class Ai{constructor(e=0,t=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return t_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return n_.setFromEuler(this),this.setFromQuaternion(n_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lb=0;const i_=new D,To=new it,Tr=new Ze,ac=new D,Da=new D,Db=new D,Nb=new it,r_=new D(1,0,0),s_=new D(0,1,0),o_=new D(0,0,1),a_={type:"added"},Ub={type:"removed"},Eo={type:"childadded",child:null},xh={type:"childremoved",child:null};class kt extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new D,t=new Ai,n=new it,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new je}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,t){return i_.copy(e).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ac.copy(e):ac.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(Da,ac,this.up):Tr.lookAt(ac,Da,this.up),this.quaternion.setFromRotationMatrix(Tr),i&&(Tr.extractRotation(i.matrixWorld),To.setFromRotationMatrix(Tr),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ub),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,Db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new D(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Si extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ob={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function yh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=wp(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yh(o,s,e+1/3),this.g=yh(o,s,e),this.b=yh(o,s,e-1/3)}return xt.colorSpaceToWorking(this,i),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=nx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return xt.workingToColorSpace(Nn.copy(this),e),Math.round(mt(Nn.r*255,0,255))*65536+Math.round(mt(Nn.g*255,0,255))*256+Math.round(mt(Nn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Nn.copy(this),t);const n=Nn.r,i=Nn.g,s=Nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Cn){xt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,i=Nn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(lc);const n=Tl(Jr.h,lc.h,t),i=Tl(Jr.s,lc.s,t),s=Tl(Jr.l,lc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ye;Ye.NAMES=nx;class Fb extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hi=new D,Er=new D,Sh=new D,br=new D,bo=new D,Ao=new D,l_=new D,Th=new D,Eh=new D,bh=new D,Ah=new Ht,wh=new Ht,Rh=new Ht;class Yi{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hi.subVectors(e,t),i.cross(Hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Hi.subVectors(i,t),Er.subVectors(n,t),Sh.subVectors(e,t);const o=Hi.dot(Hi),a=Hi.dot(Er),l=Hi.dot(Sh),c=Er.dot(Er),u=Er.dot(Sh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(o,br.y),l.addScaledVector(a,br.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ah.setScalar(0),wh.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ah,s.x),o.addScaledVector(wh,s.y),o.addScaledVector(Rh,s.z),o}static isFrontFacing(e,t,n,i){return Hi.subVectors(n,t),Er.subVectors(e,t),Hi.cross(Er).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Hi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;bo.subVectors(i,n),Ao.subVectors(s,n),Th.subVectors(e,n);const l=bo.dot(Th),c=Ao.dot(Th);if(l<=0&&c<=0)return t.copy(n);Eh.subVectors(e,i);const u=bo.dot(Eh),h=Ao.dot(Eh);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bo,o);bh.subVectors(e,s);const f=bo.dot(bh),p=Ao.dot(bh);if(p>=0&&f<=p)return t.copy(s);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ao,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return l_.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(l_,a);const _=1/(m+g+d);return o=g*_,a=d*_,t.copy(n).addScaledVector(bo,o).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gi):Gi.fromBufferAttribute(s,o),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),uc.subVectors(this.max,Na),wo.subVectors(e.a,Na),Ro.subVectors(e.b,Na),Co.subVectors(e.c,Na),Qr.subVectors(Ro,wo),es.subVectors(Co,Ro),Rs.subVectors(wo,Co);let t=[0,-Qr.z,Qr.y,0,-es.z,es.y,0,-Rs.z,Rs.y,Qr.z,0,-Qr.x,es.z,0,-es.x,Rs.z,0,-Rs.x,-Qr.y,Qr.x,0,-es.y,es.x,0,-Rs.y,Rs.x,0];return!Ch(t,wo,Ro,Co,uc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,wo,Ro,Co,uc))?!1:(hc.crossVectors(Qr,es),t=[hc.x,hc.y,hc.z],Ch(t,wo,Ro,Co,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ar=[new D,new D,new D,new D,new D,new D,new D,new D],Gi=new D,cc=new qr,wo=new D,Ro=new D,Co=new D,Qr=new D,es=new D,Rs=new D,Na=new D,uc=new D,hc=new D,Cs=new D;function Ch(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cs.fromArray(r,s);const a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cn=new D,dc=new ut;let Bb=0;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wf,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wf&&(e.usage=this.usage),e}}class ix extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rx extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vn extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kb=new qr,Ua=new D,Ph=new D;class Mr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Ph)),this.expandByPoint(Ua.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vb=0;const Ri=new Ze,Ih=new kt,Po=new D,hi=new qr,Oa=new qr,Tn=new D;class Kt extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ib(e)?rx:ix)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(hi.min,Oa.min),hi.expandByPoint(Tn),Tn.addVectors(hi.max,Oa.max),hi.expandByPoint(Tn)):(hi.expandByPoint(Oa.min),hi.expandByPoint(Oa.max))}hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tn.fromBufferAttribute(a,c),l&&(Po.fromBufferAttribute(e,c),Tn.add(Po)),i=Math.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new D,l[x]=new D;const c=new D,u=new D,h=new D,d=new ut,f=new ut,p=new ut,g=new D,m=new D;function _(x,S,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,R),d.fromBufferAttribute(s,x),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,R),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(C),a[x].add(g),a[S].add(g),a[R].add(g),l[x].add(m),l[S].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,S=v.length;x<S;++x){const R=v[x],C=R.start,L=R.count;for(let N=C,k=C+L;N<k;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new D,M=new D,T=new D,b=new D;function A(x){T.fromBufferAttribute(i,x),b.copy(T);const S=a[x];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(b,S);const C=M.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,C)}for(let x=0,S=v.length;x<S;++x){const R=v[x],C=R.start,L=R.count;for(let N=C,k=C+L;N<k;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let _=0;_<u;_++)d[p++]=c[f++]}return new Tt(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wf,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new D;class Gl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Su("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Su("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let zb=0;class ji extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=na,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(n.blending=this.blending),this.side!==zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bd&&(n.blendSrc=this.blendSrc),this.blendDst!==kd&&(n.blendDst=this.blendDst),this.blendEquation!==Gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$m&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wr=new D,Lh=new D,fc=new D,ts=new D,Dh=new D,pc=new D,Nh=new D;class ku{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lh.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Lh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fc),a=ts.dot(this.direction),l=-ts.dot(fc),c=ts.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Lh).addScaledVector(fc,d),f}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const n=wr.dot(this.direction),i=wr.dot(wr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,i,s){Dh.subVectors(t,e),pc.subVectors(n,e),Nh.crossVectors(Dh,pc);let o=this.direction.dot(Nh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const l=a*this.direction.dot(pc.crossVectors(ts,pc));if(l<0)return null;const c=a*this.direction.dot(Dh.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(Nh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nr extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const c_=new Ze,Ps=new ku,mc=new Mr,u_=new D,_c=new D,gc=new D,vc=new D,Uh=new D,xc=new D,h_=new D,Mc=new D;class zn extends kt{constructor(e=new Kt,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Uh.fromBufferAttribute(h,e),o?xc.addScaledVector(Uh,u):xc.addScaledVector(Uh.sub(t),u))}t.add(xc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),Ps.copy(e.ray).recast(e.near),!(mc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(mc,u_)===null||Ps.origin.distanceToSquared(u_)>(e.far-e.near)**2))&&(c_.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(c_),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const m=d[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){const b=a.getX(M),A=a.getX(M+1),x=a.getX(M+2);i=yc(this,_,e,n,c,u,h,b,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=yc(this,o,e,n,c,u,h,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const m=d[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){const b=M,A=M+1,x=M+2;i=yc(this,_,e,n,c,u,h,b,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const v=m,y=m+1,M=m+2;i=yc(this,o,e,n,c,u,h,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hb(r,e,t,n,i,s,o,a){let l;if(e.side===Qn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===zr,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Mc);return c<t.near||c>t.far?null:{distance:c,point:Mc.clone(),object:r}}function yc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,_c),r.getVertexPosition(l,gc),r.getVertexPosition(c,vc);const u=Hb(r,e,t,n,_c,gc,vc,h_);if(u){const h=new D;Yi.getBarycoord(h_,_c,gc,vc,h),i&&(u.uv=Yi.getInterpolatedAttribute(i,a,l,c,h,new ut)),s&&(u.uv1=Yi.getInterpolatedAttribute(s,a,l,c,h,new ut)),o&&(u.normal=Yi.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Yi.getNormal(_c,gc,vc,d.normal),u.face=d,u.barycoord=h}return u}const d_=new D,f_=new Ht,p_=new Ht,Gb=new D,m_=new Ze,Sc=new D,Oh=new Mr,__=new Ze,Fh=new ku;class sx extends zn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qm,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sc),this.boundingBox.expandByPoint(Sc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sc),this.boundingSphere.expandByPoint(Sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oh.copy(this.boundingSphere),Oh.applyMatrix4(i),e.ray.intersectsSphere(Oh)!==!1&&(__.copy(i).invert(),Fh.copy(e.ray).applyMatrix4(__),!(this.boundingBox!==null&&Fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===HE?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;f_.fromBufferAttribute(i.attributes.skinIndex,e),p_.fromBufferAttribute(i.attributes.skinWeight,e),d_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=p_.getComponent(s);if(o!==0){const a=f_.getComponent(s);m_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gb.copy(d_).applyMatrix4(m_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ox extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pp extends An{constructor(e=null,t=1,n=1,i,s,o,a,l,c=_n,u=_n,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const g_=new Ze,Wb=new Ze;class Ta{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Wb;g_.multiplyMatrices(a,t[s]),g_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ta(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pp(t,e,e,Bi,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(He("Skeleton: No bone found with UUID:",s),o=new ox),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rf extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Io=new Ze,v_=new Ze,Tc=[],x_=new qr,Xb=new Ze,Fa=new zn,Ba=new Mr;class qb extends zn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rf(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Io),x_.copy(e.boundingBox).applyMatrix4(Io),this.boundingBox.union(x_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Io),Ba.copy(e.boundingSphere).applyMatrix4(Io),this.boundingSphere.union(Ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(n),e.ray.intersectsSphere(Ba)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Io),v_.multiplyMatrices(n,Io),Fa.matrixWorld=v_,Fa.raycast(e,Tc);for(let o=0,a=Tc.length;o<a;o++){const l=Tc[o];l.instanceId=s,l.object=this,t.push(l)}Tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pp(new Float32Array(i*this.count),i,this.count,xp,Fi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bh=new D,Yb=new D,$b=new je;class zs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bh.subVectors(n,t).cross(Yb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$b.getNormalMatrix(e),i=this.coplanarPoint(Bh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Mr,jb=new ut(.5,.5),Ec=new D;class Ip{constructor(e=new zs,t=new zs,n=new zs,i=new zs,s=new zs,o=new zs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],m=s[10],_=s[11],v=s[12],y=s[13],M=s[14],T=s[15];if(i[0].setComponents(c-o,f-u,_-p,T-v).normalize(),i[1].setComponents(c+o,f+u,_+p,T+v).normalize(),i[2].setComponents(c+a,f+h,_+g,T+y).normalize(),i[3].setComponents(c-a,f-h,_-g,T-y).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,_-m,T-M).normalize();else if(i[4].setComponents(c-l,f-d,_-m,T-M).normalize(),t===pr)i[5].setComponents(c+l,f+d,_+m,T+M).normalize();else if(t===kl)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=jb.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ec.x=i.normal.x>0?e.max.x:e.min.x,Ec.y=i.normal.y>0?e.max.y:e.min.y,Ec.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class po extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new D,bu=new D,M_=new Ze,ka=new ku,bc=new Mr,kh=new D,y_=new D;class Vu extends kt{constructor(e=new Kt,t=new po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Eu.fromBufferAttribute(t,i-1),bu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Eu.distanceTo(bu);e.setAttribute("lineDistance",new Vn(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(i),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;M_.copy(i).invert(),ka.copy(e.ray).applyMatrix4(M_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){const _=u.getX(g),v=u.getX(g+1),y=Ac(this,e,ka,l,_,v,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(p-1),m=u.getX(f),_=Ac(this,e,ka,l,g,m,p-1);_&&t.push(_)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){const _=Ac(this,e,ka,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=Ac(this,e,ka,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ac(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Eu.fromBufferAttribute(a,i),bu.fromBufferAttribute(a,s),t.distanceSqToSegment(Eu,bu,kh,y_)>n)return;kh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(kh);if(!(c<e.near||c>e.far))return{distance:c,point:y_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const S_=new D,T_=new D;class Wl extends Vu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)S_.fromBufferAttribute(t,i),T_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+S_.distanceTo(T_);e.setAttribute("lineDistance",new Vn(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kb extends Vu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ax extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const E_=new Ze,Cf=new ku,wc=new Mr,Rc=new D;class Zb extends kt{constructor(e=new Kt,t=new ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(i),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;E_.copy(i).invert(),Cf.copy(e.ray).applyMatrix4(E_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,g=f;p<g;p++){const m=c.getX(p);Rc.fromBufferAttribute(h,m),b_(Rc,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,g=f;p<g;p++)Rc.fromBufferAttribute(h,p),b_(Rc,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function b_(r,e,t,n,i,s,o){const a=Cf.distanceSqToPoint(r);if(a<t){const l=new D;Cf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class lx extends An{constructor(e=[],t=uo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zl extends An{constructor(e,t,n=xr,i,s,o,a=_n,l=_n,c,u=Gr,h=1){if(u!==Gr&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jb extends zl{constructor(e,t=xr,n=uo,i,s,o=_n,a=_n,l,c=Gr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cx extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xl extends Kt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(h,2));function p(g,m,_,v,y,M,T,b,A,x,S){const R=M/A,C=T/x,L=M/2,N=T/2,k=b/2,H=A+1,V=x+1;let O=0,q=0;const Y=new D;for(let P=0;P<V;P++){const re=P*C-N;for(let ae=0;ae<H;ae++){const Ne=ae*R-L;Y[g]=Ne*v,Y[m]=re*y,Y[_]=k,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[_]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(ae/A),h.push(1-P/x),O+=1}}for(let P=0;P<x;P++)for(let re=0;re<A;re++){const ae=d+re+H*P,Ne=d+re+H*(P+1),Oe=d+(re+1)+H*(P+1),Ve=d+(re+1)+H*P;l.push(ae,Ne,Ve),l.push(Ne,Oe,Ve),q+=6}a.addGroup(f,q,S),f+=q,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zu extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const v=_*d-o;for(let y=0;y<c;y++){const M=y*h-s;p.push(M,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const y=v+c*_,M=v+c*(_+1),T=v+1+c*(_+1),b=v+1+c*_;f.push(y,M,b),f.push(M,T,b)}this.setIndex(f),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lp extends Kt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){const v=[],y=_/n;let M=0;_===0&&o===0?M=.5/t:_===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const b=T/t;h.x=-e*Math.cos(i+b*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+b*s)*Math.sin(o+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(b+M,1-y),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){const y=u[_][v+1],M=u[_][v],T=u[_+1][v],b=u[_+1][v+1];(_!==0||o>0)&&f.push(y,M,b),(_!==n-1||l<Math.PI)&&f.push(M,T,b)}this.setIndex(f),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xn(r){const e={};for(let t=0;t<r.length;t++){const n=xa(r[t]);for(const i in n)e[i]=n[i]}return e}function Qb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ux(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const hx={clone:xa,merge:Xn};var eA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=tA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=Qb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nA extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hu extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yr extends Hu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iA extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rA extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Cc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function sA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function A_(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function dx(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oA extends Ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jo:s=e,a=2*t-n;break;case Mu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:o=e,l=2*n-t;break;case Mu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,m=g*p,_=-d*m+2*d*g-d*p,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,y=(-1-f)*m+(1.5+f)*g+.5*p,M=f*m-f*g;for(let T=0;T!==a;++T)s[T]=_*o[u+T]+v*o[c+T]+y*o[l+T]+M*o[h+T];return s}}class fx extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class aA extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class lA extends Ea{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const g=(n-t)/(i-t),m=1-g;for(let _=0;_!==a;++_)s[_]=o[c+_]*m+o[l+_]*g;return s}const f=a*2,p=e-1;for(let g=0;g!==a;++g){const m=o[c+g],_=o[l+g],v=p*f+g*2,y=d[v],M=d[v+1],T=e*f+g*2,b=h[T],A=h[T+1];let x=(n-t)/(i-t),S,R,C,L,N;for(let k=0;k<8;k++){S=x*x,R=S*x,C=1-x,L=C*C,N=L*C;const V=N*t+3*L*x*y+3*C*S*b+R*i-n;if(Math.abs(V)<1e-10)break;const O=3*L*(y-t)+6*C*x*(b-y)+3*S*(i-b);if(Math.abs(O)<1e-10)break;x=x-V/O,x=Math.max(0,Math.min(1,x))}s[g]=N*m+3*L*x*M+3*C*S*A+R*_}return s}}class Ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cc(t,this.TimeBufferType),this.values=Cc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cc(e.times,Array),values:Cc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new aA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new lA(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Fl:t=this.InterpolantFactoryMethodDiscrete;break;case Bl:t=this.InterpolantFactoryMethodLinear;break;case ph:t=this.InterpolantFactoryMethodSmooth;break;case Ym:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return ph;case this.InterpolantFactoryMethodBezier:return Ym}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&rb(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ph,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ji.prototype.ValueTypeName="";Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Bl;class ba extends Ji{constructor(e,t,n){super(e,t,n)}}ba.prototype.ValueTypeName="bool";ba.prototype.ValueBufferType=Array;ba.prototype.DefaultInterpolation=Fl;ba.prototype.InterpolantFactoryMethodLinear=void 0;ba.prototype.InterpolantFactoryMethodSmooth=void 0;class px extends Ji{constructor(e,t,n,i){super(e,t,n,i)}}px.prototype.ValueTypeName="color";class Ma extends Ji{constructor(e,t,n,i){super(e,t,n,i)}}Ma.prototype.ValueTypeName="number";class cA extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)it.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ya extends Ji{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new cA(this.times,this.values,this.getValueSize(),e)}}ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;class Aa extends Ji{constructor(e,t,n){super(e,t,n)}}Aa.prototype.ValueTypeName="string";Aa.prototype.ValueBufferType=Array;Aa.prototype.DefaultInterpolation=Fl;Aa.prototype.InterpolantFactoryMethodLinear=void 0;Aa.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends Ji{constructor(e,t,n,i){super(e,t,n,i)}}Sa.prototype.ValueTypeName="vector";class Pf{constructor(e="",t=-1,n=[],i=Tp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$i(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=sA(l);l=A_(l,1,u),c=A_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ma(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(He("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Qe("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,g){if(f.length!==0){const m=[],_=[];dx(f,m,_,p),m.length!==0&&g.push(new h(d,m,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)f[d[p].morphTargets[g]]=-1;for(const g in f){const m=[],_=[];for(let v=0;v!==d[p].morphTargets.length;++v){const y=d[p];m.push(y.time),_.push(y.morphTarget===g?1:0)}i.push(new Ma(".morphTargetInfluence["+g+"]",m,_))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Sa,f+".position",d,"pos",i),n(ya,f+".quaternion",d,"rot",i),n(Sa,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function uA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return Sa;case"color":return px;case"quaternion":return ya;case"bool":case"boolean":return ba;case"string":return Aa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function hA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=uA(r.type);if(r.times===void 0){const t=[],n=[];dx(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(w_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!w_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function w_(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dA{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fA=new dA;class wa{constructor(e){this.manager=e!==void 0?e:fA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr={};class pA extends Error{constructor(e,t){super(e),this.response=t}}class mx extends wa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ur.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rr[e]!==void 0){Rr[e].push({onLoad:t,onProgress:n,onError:i});return}Rr[e]=[],Rr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rr[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let g=0;const m=new ReadableStream({start(_){v();function v(){h.read().then(({done:y,value:M})=>{if(y)_.close();else{g+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let b=0,A=u.length;b<A;b++){const x=u[b];x.onProgress&&x.onProgress(T)}_.enqueue(M),v()}},y=>{_.error(y)})}}});return new Response(m)}else throw new pA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ur.add(`file:${e}`,c);const u=Rr[e];delete Rr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Lo=new WeakMap;class _x extends wa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ur.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Lo.get(o);h===void 0&&(h=[],Lo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Vl("img");function l(){u(),t&&t(this);const h=Lo.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Lo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Ur.remove(`image:${e}`);const d=Lo.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Lo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ur.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class mA extends wa{constructor(e){super(e)}load(e,t,n,i){const s=new An,o=new _x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Gu extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Vh=new Ze,R_=new D,C_=new D;class Dp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;R_.setFromMatrixPosition(e.matrixWorld),t.position.copy(R_),C_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C_),t.updateMatrixWorld(),Vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===kl||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pc=new D,Ic=new it,er=new D;class gx extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=pr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pc,Ic,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,er.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Pc,Ic,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new D,P_=new ut,I_=new ut;class Kn extends gx{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,P_,I_),t.subVectors(I_,P_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _A extends Dp{constructor(){super(new Kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=va*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gA extends Gu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _A}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class vA extends Dp{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class xA extends Gu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wu extends gx{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class MA extends Dp{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nu extends Gu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new MA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class yA extends Gu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class El{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zh=new WeakMap;class SA extends wa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ur.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(zh.has(o)===!0)i&&i(zh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ur.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zh.set(l,c),Ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ur.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Do=-90,No=1;class TA extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kn(Do,No,e,t);i.layers=this.layers,this.add(i);const s=new Kn(Do,No,e,t);s.layers=this.layers,this.add(s);const o=new Kn(Do,No,e,t);o.layers=this.layers,this.add(o);const a=new Kn(Do,No,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Do,No,e,t);l.layers=this.layers,this.add(l);const c=new Kn(Do,No,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class EA extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bA{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){it.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;it.multiplyQuaternionsFlat(e,o,e,t,e,n),it.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Np="\\[\\]\\.:\\/",AA=new RegExp("["+Np+"]","g"),Up="[^"+Np+"]",wA="[^"+Np.replace("\\.","")+"]",RA=/((?:WC+[\/:])*)/.source.replace("WC",Up),CA=/(WCOD+)?/.source.replace("WCOD",wA),PA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Up),IA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Up),LA=new RegExp("^"+RA+CA+PA+IA+"$"),DA=["material","materials","bones","map"];class NA{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AA,"")}static parseTrackName(e){const t=LA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);DA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=NA;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class UA{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:$o,endingEnd:$o};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=WE,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qE:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Tp:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===XE;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===GE){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=jo,i.endingEnd=jo):(e?i.endingStart=this.zeroSlopeAtStart?jo:$o:i.endingStart=Mu,t?i.endingEnd=this.zeroSlopeAtEnd?jo:$o:i.endingEnd=Mu)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const OA=new Float32Array(1);class FA extends fo{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;p=new bA(Rt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fx(new Float32Array(2),new Float32Array(2),1,OA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Pf.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Tp),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new UA(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Pf.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class L_{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class BA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class kA extends Wl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Kt;i.setAttribute("position",new Vn(t,3)),i.setAttribute("color",new Vn(n,3));const s=new po({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function D_(r,e,t,n){const i=VA(n);switch(t){case Kv:return r*e;case xp:return r*e/i.components*i.byteLength;case Mp:return r*e/i.components*i.byteLength;case ga:return r*e*2/i.components*i.byteLength;case yp:return r*e*2/i.components*i.byteLength;case Zv:return r*e*3/i.components*i.byteLength;case Bi:return r*e*4/i.components*i.byteLength;case Sp:return r*e*4/i.components*i.byteLength;case Jc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $d:case Kd:return Math.max(r,16)*Math.max(e,8)/4;case Yd:case jd:return Math.max(r,8)*Math.max(e,8)/2;case Zd:case Jd:case ef:case tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qd:case nf:case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _f:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xf:case Mf:case yf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sf:case Tf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ef:case bf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VA(r){switch(r){case xi:case qv:return{byteLength:1,components:1};case Ul:case Yv:case Hr:return{byteLength:2,components:1};case gp:case vp:return{byteLength:2,components:4};case xr:case _p:case Fi:return{byteLength:4,components:1};case $v:case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vx(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zA(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],g=h[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var HA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$A=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ZA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ww=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ow=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$w=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$R=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:HA,alphahash_pars_fragment:GA,alphamap_fragment:WA,alphamap_pars_fragment:XA,alphatest_fragment:qA,alphatest_pars_fragment:YA,aomap_fragment:$A,aomap_pars_fragment:jA,batching_pars_vertex:KA,batching_vertex:ZA,begin_vertex:JA,beginnormal_vertex:QA,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:ow,color_fragment:aw,color_pars_fragment:lw,color_pars_vertex:cw,color_vertex:uw,common:hw,cube_uv_reflection_fragment:dw,defaultnormal_vertex:fw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:_w,emissivemap_pars_fragment:gw,colorspace_fragment:vw,colorspace_pars_fragment:xw,envmap_fragment:Mw,envmap_common_pars_fragment:yw,envmap_pars_fragment:Sw,envmap_pars_vertex:Tw,envmap_physical_pars_fragment:Nw,envmap_vertex:Ew,fog_vertex:bw,fog_pars_vertex:Aw,fog_fragment:ww,fog_pars_fragment:Rw,gradientmap_pars_fragment:Cw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Lw,lights_pars_begin:Dw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Ow,lights_phong_fragment:Fw,lights_phong_pars_fragment:Bw,lights_physical_fragment:kw,lights_physical_pars_fragment:Vw,lights_fragment_begin:zw,lights_fragment_maps:Hw,lights_fragment_end:Gw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:Yw,map_fragment:$w,map_pars_fragment:jw,map_particle_fragment:Kw,map_particle_pars_fragment:Zw,metalnessmap_fragment:Jw,metalnessmap_pars_fragment:Qw,morphinstance_vertex:eR,morphcolor_vertex:tR,morphnormal_vertex:nR,morphtarget_pars_vertex:iR,morphtarget_vertex:rR,normal_fragment_begin:sR,normal_fragment_maps:oR,normal_pars_fragment:aR,normal_pars_vertex:lR,normal_vertex:cR,normalmap_pars_fragment:uR,clearcoat_normal_fragment_begin:hR,clearcoat_normal_fragment_maps:dR,clearcoat_pars_fragment:fR,iridescence_pars_fragment:pR,opaque_fragment:mR,packing:_R,premultiplied_alpha_fragment:gR,project_vertex:vR,dithering_fragment:xR,dithering_pars_fragment:MR,roughnessmap_fragment:yR,roughnessmap_pars_fragment:SR,shadowmap_pars_fragment:TR,shadowmap_pars_vertex:ER,shadowmap_vertex:bR,shadowmask_pars_fragment:AR,skinbase_vertex:wR,skinning_pars_vertex:RR,skinning_vertex:CR,skinnormal_vertex:PR,specularmap_fragment:IR,specularmap_pars_fragment:LR,tonemapping_fragment:DR,tonemapping_pars_fragment:NR,transmission_fragment:UR,transmission_pars_fragment:OR,uv_pars_fragment:FR,uv_pars_vertex:BR,uv_vertex:kR,worldpos_vertex:VR,background_vert:zR,background_frag:HR,backgroundCube_vert:GR,backgroundCube_frag:WR,cube_vert:XR,cube_frag:qR,depth_vert:YR,depth_frag:$R,distance_vert:jR,distance_frag:KR,equirect_vert:ZR,equirect_frag:JR,linedashed_vert:QR,linedashed_frag:eC,meshbasic_vert:tC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:rC,meshmatcap_vert:sC,meshmatcap_frag:oC,meshnormal_vert:aC,meshnormal_frag:lC,meshphong_vert:cC,meshphong_frag:uC,meshphysical_vert:hC,meshphysical_frag:dC,meshtoon_vert:fC,meshtoon_frag:pC,points_vert:mC,points_frag:_C,shadow_vert:gC,shadow_frag:vC,sprite_vert:xC,sprite_frag:MC},ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},lr={basic:{uniforms:Xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Xn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Xn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Xn([ge.points,ge.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Xn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Xn([ge.common,ge.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Xn([ge.sprite,ge.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Xn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Xn([ge.lights,ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};lr.physical={uniforms:Xn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Lc={r:0,b:0,g:0},Ls=new Ai,yC=new Ze;function SC(r,e,t,n,i,s){const o=new Ye(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function p(v){let y=!1;const M=f(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===Bu)?(c===void 0&&(c=new zn(new Xl(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:xa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ls.copy(y.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yC.makeRotationFromEuler(Ls)),c.material.toneMapped=xt.getTransfer(M.colorSpace)!==It,(u!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new zn(new zu(2,2),new Zi({name:"BackgroundMaterial",uniforms:xa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=xt.getTransfer(M.colorSpace)!==It,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Lc,ux(r)),t.buffers.color.setClear(Lc.r,Lc.g,Lc.b,y,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:_}}function TC(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(C,L,N,k,H){let V=!1;const O=h(C,k,N,L);s!==O&&(s=O,c(s.object)),V=f(C,k,N,H),V&&p(C,k,N,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(C,L,N,k),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(C){return r.bindVertexArray(C)}function u(C){return r.deleteVertexArray(C)}function h(C,L,N,k){const H=k.wireframe===!0;let V=n[L.id];V===void 0&&(V={},n[L.id]=V);const O=C.isInstancedMesh===!0?C.id:0;let q=V[O];q===void 0&&(q={},V[O]=q);let Y=q[N.id];Y===void 0&&(Y={},q[N.id]=Y);let P=Y[H];return P===void 0&&(P=d(l()),Y[H]=P),P}function d(C){const L=[],N=[],k=[];for(let H=0;H<t;H++)L[H]=0,N[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:k,object:C,attributes:{},index:null}}function f(C,L,N,k){const H=s.attributes,V=L.attributes;let O=0;const q=N.getAttributes();for(const Y in q)if(q[Y].location>=0){const re=H[Y];let ae=V[Y];if(ae===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;O++}return s.attributesNum!==O||s.index!==k}function p(C,L,N,k){const H={},V=L.attributes;let O=0;const q=N.getAttributes();for(const Y in q)if(q[Y].location>=0){let re=V[Y];re===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),H[Y]=ae,O++}s.attributes=H,s.attributesNum=O,s.index=k}function g(){const C=s.newAttributes;for(let L=0,N=C.length;L<N;L++)C[L]=0}function m(C){_(C,0)}function _(C,L){const N=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;N[C]=1,k[C]===0&&(r.enableVertexAttribArray(C),k[C]=1),H[C]!==L&&(r.vertexAttribDivisor(C,L),H[C]=L)}function v(){const C=s.newAttributes,L=s.enabledAttributes;for(let N=0,k=L.length;N<k;N++)L[N]!==C[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function y(C,L,N,k,H,V,O){O===!0?r.vertexAttribIPointer(C,L,N,H,V):r.vertexAttribPointer(C,L,N,k,H,V)}function M(C,L,N,k){g();const H=k.attributes,V=N.getAttributes(),O=L.defaultAttributeValues;for(const q in V){const Y=V[q];if(Y.location>=0){let P=H[q];if(P===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),P!==void 0){const re=P.normalized,ae=P.itemSize,Ne=e.get(P);if(Ne===void 0)continue;const Oe=Ne.buffer,Ve=Ne.type,J=Ne.bytesPerElement,F=Ve===r.INT||Ve===r.UNSIGNED_INT||P.gpuType===_p;if(P.isInterleavedBufferAttribute){const $=P.data,te=$.stride,se=P.offset;if($.isInstancedInterleavedBuffer){for(let de=0;de<Y.locationSize;de++)_(Y.location+de,$.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let de=0;de<Y.locationSize;de++)y(Y.location+de,ae/Y.locationSize,Ve,re,te*J,(se+ae/Y.locationSize*de)*J,F)}else{if(P.isInstancedBufferAttribute){for(let $=0;$<Y.locationSize;$++)_(Y.location+$,P.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let $=0;$<Y.locationSize;$++)m(Y.location+$);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let $=0;$<Y.locationSize;$++)y(Y.location+$,ae/Y.locationSize,Ve,re,ae*J,ae/Y.locationSize*$*J,F)}}else if(O!==void 0){const re=O[q];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(Y.location,re);break;case 3:r.vertexAttrib3fv(Y.location,re);break;case 4:r.vertexAttrib4fv(Y.location,re);break;default:r.vertexAttrib1fv(Y.location,re)}}}}v()}function T(){S();for(const C in n){const L=n[C];for(const N in L){const k=L[N];for(const H in k){const V=k[H];for(const O in V)u(V[O].object),delete V[O];delete k[H]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const N in L){const k=L[N];for(const H in k){const V=k[H];for(const O in V)u(V[O].object),delete V[O];delete k[H]}}delete n[C.id]}function A(C){for(const L in n){const N=n[L];for(const k in N){const H=N[k];if(H[C.id]===void 0)continue;const V=H[C.id];for(const O in V)u(V[O].object),delete V[O];delete H[C.id]}}}function x(C){for(const L in n){const N=n[L],k=C.isInstancedMesh===!0?C.id:0,H=N[k];if(H!==void 0){for(const V in H){const O=H[V];for(const q in O)u(O[q].object),delete O[q];delete H[V]}delete N[k],Object.keys(N).length===0&&delete n[L]}}}function S(){R(),o=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function EC(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g]*d[g];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bC(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Bi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fi&&!x)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:b}}function AC(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zs,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,_=r.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let M=_.clippingState||null;l.value=M,M=u(p,d,y,f);for(let T=0;T!==y;++T)M[T]=t[T];_.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,M=f;y!==g;++y,M+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const ps=4,N_=[.125,.215,.35,.446,.526,.582],Ws=20,wC=256,Va=new Wu,U_=new Ye;let Hh=null,Gh=0,Wh=0,Xh=!1;const RC=new D;class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=RC}=s;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Wh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Hr,format:Bi,colorSpace:ei,depthBuffer:!1},i=F_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CC(s)),this._blurMaterial=IC(s,e,t),this._ggxMaterial=PC(s,e,t)}return i}_compileMaterial(e){const t=new zn(new Kt,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i,s){const l=new Kn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(U_),h.toneMapping=_r,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zn(new Xl,new Nr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let _=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,_=!0):(m.color.copy(U_),_=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const T=this._cubeSize;Uo(i,M*T,y>2?T:0,T,T),h.setRenderTarget(i),_&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===uo||e.mapping===ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-ps?n-p+ps:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Uo(s,m,_,3*g,2*g),i.setRenderTarget(s),i.render(a,Va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Uo(e,m,_,3*g,2*g),i.setRenderTarget(e),i.render(a,Va)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),g=s/p,m=isFinite(s)?1+Math.floor(u*g):Ws;m>Ws&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const _=[];let v=0;for(let A=0;A<Ws;++A){const x=A/g,S=Math.exp(-x*x/2);_.push(S),A===0?v+=S:A<m&&(v+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const M=this._sizeLods[i],T=3*M*(i>y-ps?i-y+ps:0),b=4*(this._cubeSize-M);Uo(t,T,b,3*M,2*M),l.setRenderTarget(t),l.render(h,Va)}}function CC(r){const e=[],t=[],n=[];let i=r;const s=r-ps+1+N_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ps?l=N_[o-r+ps-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,g=3,m=2,_=1,v=new Float32Array(g*p*f),y=new Float32Array(m*p*f),M=new Float32Array(_*p*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,x=b>2?0:-1,S=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(S,g*p*b),y.set(d,m*p*b);const R=[b,b,b,b,b,b];M.set(R,_*p*b)}const T=new Kt;T.setAttribute("position",new Tt(v,g)),T.setAttribute("uv",new Tt(y,m)),T.setAttribute("faceIndex",new Tt(M,_)),n.push(new zn(T,null)),i>ps&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function F_(r,e,t){const n=new gr(r,e,t);return n.texture.mapping=Bu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function PC(r,e,t){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function IC(r,e,t){const n=new Float32Array(Ws),i=new D(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function B_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function k_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xx extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lx(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xl(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:Fr});s.uniforms.tEquirect.value=t;const o=new zn(i,s),a=t.minFilter;return t.minFilter===Dr&&(t.minFilter=gn),new TA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function LC(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===dh||f===fh)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new xx(p.height);return g.fromEquirectangularTexture(r,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===dh||f===fh,g=f===uo||f===ma;if(p||g){let m=t.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new O_(r)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new O_(r)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===dh?d.mapping=uo:f===fh&&(d.mapping=ma),d}function l(d){let f=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function DC(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Tu("WebGLRenderer: "+n+" extension not supported."),i}}}function NC(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let g=0;if(p===void 0)return;if(f!==null){const v=f.array;g=f.version;for(let y=0,M=v.length;y<M;y+=3){const T=v[y+0],b=v[y+1],A=v[y+2];d.push(T,b,b,A,A,T)}}else{const v=p.array;g=p.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const T=y+0,b=y+1,A=y+2;d.push(T,b,b,A,A,T)}}const m=new(p.count>=65535?rx:ix)(d,1);m.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function UC(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];t.update(m,n,1)}function h(d,f,p,g){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d.length;_++)c(d[_]/o,f[_],g[_]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,p);let _=0;for(let v=0;v<p;v++)_+=f[v]*g[v];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function OC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function FC(r,e,t){const n=new WeakMap,i=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),g===!0&&(y=3);let M=a.attributes.position.count*y,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*T*4*h),A=new ex(b,M,T,h);A.type=Fi,A.needsUpdate=!0;const x=y*4;for(let R=0;R<h;R++){const C=m[R],L=_[R],N=v[R],k=M*T*4*R;for(let H=0;H<C.count;H++){const V=H*x;f===!0&&(i.fromBufferAttribute(C,H),b[k+V+0]=i.x,b[k+V+1]=i.y,b[k+V+2]=i.z,b[k+V+3]=0),p===!0&&(i.fromBufferAttribute(L,H),b[k+V+4]=i.x,b[k+V+5]=i.y,b[k+V+6]=i.z,b[k+V+7]=0),g===!0&&(i.fromBufferAttribute(N,H),b[k+V+8]=i.x,b[k+V+9]=i.y,b[k+V+10]=i.z,b[k+V+11]=N.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new ut(M,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function BC(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const kC={[Fv]:"LINEAR_TONE_MAPPING",[Bv]:"REINHARD_TONE_MAPPING",[kv]:"CINEON_TONE_MAPPING",[Vv]:"ACES_FILMIC_TONE_MAPPING",[Hv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[zv]:"CUSTOM_TONE_MAPPING"};function VC(r,e,t,n,i){const s=new gr(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new gr(e,t,{type:Hr,depthBuffer:!1,stencilBuffer:!1}),a=new Kt;a.setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Vn([0,2,0,0,2,0],2));const l=new nA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new zn(a,l),u=new Wu(-1,1,1,-1,0,1);let h=null,d=null,f=!1,p,g=null,m=[],_=!1;this.setSize=function(v,y){s.setSize(v,y),o.setSize(v,y);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(v,y)}},this.setEffects=function(v){m=v,_=m.length>0&&m[0].isRenderPass===!0;const y=s.width,M=s.height;for(let T=0;T<m.length;T++){const b=m[T];b.setSize&&b.setSize(y,M)}},this.begin=function(v,y){if(f||v.toneMapping===_r&&m.length===0)return!1;if(g=y,y!==null){const M=y.width,T=y.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return _===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=_r,!0},this.hasRenderPass=function(){return _},this.end=function(v,y){v.toneMapping=p,f=!0;let M=s,T=o;for(let b=0;b<m.length;b++){const A=m[b];if(A.enabled!==!1&&(A.render(v,T,M,y),A.needsSwap!==!1)){const x=M;M=T,T=x}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,l.defines={},xt.getTransfer(h)===It&&(l.defines.SRGB_TRANSFER="");const b=kC[d];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Mx=new An,If=new zl(1,1),yx=new ex,Sx=new Cb,Tx=new lx,V_=[],z_=[],H_=new Float32Array(16),G_=new Float32Array(9),W_=new Float32Array(4);function Ra(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=V_[i];if(s===void 0&&(s=new Float32Array(i),V_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function vn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qu(r,e){let t=z_[e];t===void 0&&(t=new Int32Array(e),z_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function zC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function HC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2fv(this.addr,e),xn(t,e)}}function GC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;r.uniform3fv(this.addr,e),xn(t,e)}}function WC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4fv(this.addr,e),xn(t,e)}}function XC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;W_.set(n),r.uniformMatrix2fv(this.addr,!1,W_),xn(t,n)}}function qC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;G_.set(n),r.uniformMatrix3fv(this.addr,!1,G_),xn(t,n)}}function YC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;H_.set(n),r.uniformMatrix4fv(this.addr,!1,H_),xn(t,n)}}function $C(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2iv(this.addr,e),xn(t,e)}}function KC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;r.uniform3iv(this.addr,e),xn(t,e)}}function ZC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4iv(this.addr,e),xn(t,e)}}function JC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function QC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2uiv(this.addr,e),xn(t,e)}}function e2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;r.uniform3uiv(this.addr,e),xn(t,e)}}function t2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4uiv(this.addr,e),xn(t,e)}}function n2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(If.compareFunction=t.isReversedDepthBuffer()?Ap:bp,s=If):s=Mx,t.setTexture2D(e||s,i)}function i2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sx,i)}function r2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tx,i)}function s2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yx,i)}function o2(r){switch(r){case 5126:return zC;case 35664:return HC;case 35665:return GC;case 35666:return WC;case 35674:return XC;case 35675:return qC;case 35676:return YC;case 5124:case 35670:return $C;case 35667:case 35671:return jC;case 35668:case 35672:return KC;case 35669:case 35673:return ZC;case 5125:return JC;case 36294:return QC;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}function a2(r,e){r.uniform1fv(this.addr,e)}function l2(r,e){const t=Ra(e,this.size,2);r.uniform2fv(this.addr,t)}function c2(r,e){const t=Ra(e,this.size,3);r.uniform3fv(this.addr,t)}function u2(r,e){const t=Ra(e,this.size,4);r.uniform4fv(this.addr,t)}function h2(r,e){const t=Ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function d2(r,e){const t=Ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function f2(r,e){const t=Ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function p2(r,e){r.uniform1iv(this.addr,e)}function m2(r,e){r.uniform2iv(this.addr,e)}function _2(r,e){r.uniform3iv(this.addr,e)}function g2(r,e){r.uniform4iv(this.addr,e)}function v2(r,e){r.uniform1uiv(this.addr,e)}function x2(r,e){r.uniform2uiv(this.addr,e)}function M2(r,e){r.uniform3uiv(this.addr,e)}function y2(r,e){r.uniform4uiv(this.addr,e)}function S2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=If:o=Mx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function T2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sx,s[o])}function E2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Tx,s[o])}function b2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yx,s[o])}function A2(r){switch(r){case 5126:return a2;case 35664:return l2;case 35665:return c2;case 35666:return u2;case 35674:return h2;case 35675:return d2;case 35676:return f2;case 5124:case 35670:return p2;case 35667:case 35671:return m2;case 35668:case 35672:return _2;case 35669:case 35673:return g2;case 5125:return v2;case 36294:return x2;case 36295:return M2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return b2}}class w2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o2(t.type)}}class R2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A2(t.type)}}class C2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function X_(r,e){r.seq.push(e),r.map[e.id]=e}function P2(r,e,t){const n=r.name,i=n.length;for(qh.lastIndex=0;;){const s=qh.exec(n),o=qh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){X_(t,c===void 0?new w2(a,r,e):new R2(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new C2(a),X_(t,h)),t=h}}}class iu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);P2(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function q_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const I2=37297;let L2=0;function D2(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Y_=new je;function N2(r){xt._getMatrix(Y_,xt.workingColorSpace,r);const e=`mat3( ${Y_.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(r)){case yu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+D2(r.getShaderSource(e),a)}else return s}function U2(r,e){const t=N2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const O2={[Fv]:"Linear",[Bv]:"Reinhard",[kv]:"Cineon",[Vv]:"ACESFilmic",[Hv]:"AgX",[Gv]:"Neutral",[zv]:"Custom"};function F2(r,e){const t=O2[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dc=new D;function B2(){xt.getLuminanceCoefficients(Dc);const r=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function V2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z2(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function sl(r){return r!==""}function j_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(r){return r.replace(H2,W2)}const G2=new Map;function W2(r,e){let t=at[e];if(t===void 0){const n=G2.get(e);if(n!==void 0)t=at[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(r){return r.replace(X2,q2)}function q2(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function J_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Y2={[Kc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function $2(r){return Y2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j2={[uo]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function K2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":j2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z2={[ma]:"ENVMAP_MODE_REFRACTION"};function J2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Z2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q2={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[VE]:"ENVMAP_BLENDING_MIX",[zE]:"ENVMAP_BLENDING_ADD"};function e3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Q2[r.combine]||"ENVMAP_BLENDING_NONE"}function t3(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n3(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$2(t),c=K2(t),u=J2(t),h=e3(t),d=t3(t),f=k2(t),p=V2(s),g=i.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sl).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sl).join(`
`),_.length>0&&(_+=`
`)):(m=[J_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),_=[J_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?at.tonemapping_pars_fragment:"",t.toneMapping!==_r?F2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,U2("linearToOutputTexel",t.outputColorSpace),B2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sl).join(`
`)),o=Lf(o),o=j_(o,t),o=K_(o,t),a=Lf(a),a=j_(a,t),a=K_(a,t),o=Z_(o),a=Z_(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+m+o,M=v+_+a,T=q_(i,i.VERTEX_SHADER,y),b=q_(i,i.FRAGMENT_SHADER,M);i.attachShader(g,T),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(C){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(b)||"",H=L.trim(),V=N.trim(),O=k.trim();let q=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,T,b);else{const P=$_(i,T,"vertex"),re=$_(i,b,"fragment");Qe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+P+`
`+re)}else H!==""?He("WebGLProgram: Program Info Log:",H):(V===""||O==="")&&(Y=!1);Y&&(C.diagnostics={runnable:q,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:_}})}i.deleteShader(T),i.deleteShader(b),x=new iu(i,g),S=z2(i,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,I2)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=b,this}let i3=0;class r3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new s3(e),t.set(e,n)),n}}class s3{constructor(e){this.id=i3++,this.code=e,this.usedTimes=0}}function o3(r,e,t,n,i,s){const o=new tx,a=new r3,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,R,C,L){const N=C.fog,k=L.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||H,V),q=O&&O.mapping===Bu?O.image.height:null,Y=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const P=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=P!==void 0?P.length:0;let ae=0;k.morphAttributes.position!==void 0&&(ae=1),k.morphAttributes.normal!==void 0&&(ae=2),k.morphAttributes.color!==void 0&&(ae=3);let Ne,Oe,Ve,J;if(Y){const we=lr[Y];Ne=we.vertexShader,Oe=we.fragmentShader}else Ne=x.vertexShader,Oe=x.fragmentShader,a.update(x),Ve=a.getVertexShaderID(x),J=a.getFragmentShaderID(x);const F=r.getRenderTarget(),$=r.state.buffers.depth.getReversed(),te=L.isInstancedMesh===!0,se=L.isBatchedMesh===!0,de=!!x.map,Ee=!!x.matcap,oe=!!O,ce=!!x.aoMap,be=!!x.lightMap,Ie=!!x.bumpMap,X=!!x.normalMap,B=!!x.displacementMap,gt=!!x.emissiveMap,tt=!!x.metalnessMap,Ge=!!x.roughnessMap,Re=x.anisotropy>0,I=x.clearcoat>0,E=x.dispersion>0,G=x.iridescence>0,ne=x.sheen>0,ie=x.transmission>0,Q=Re&&!!x.anisotropyMap,ve=I&&!!x.clearcoatMap,ue=I&&!!x.clearcoatNormalMap,Ce=I&&!!x.clearcoatRoughnessMap,Ae=G&&!!x.iridescenceMap,he=G&&!!x.iridescenceThicknessMap,pe=ne&&!!x.sheenColorMap,Pe=ne&&!!x.sheenRoughnessMap,Le=!!x.specularMap,_e=!!x.specularColorMap,$e=!!x.specularIntensityMap,U=ie&&!!x.transmissionMap,me=ie&&!!x.thicknessMap,fe=!!x.gradientMap,xe=!!x.alphaMap,le=x.alphaTest>0,ee=!!x.alphaHash,De=!!x.extensions;let We=_r;x.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(We=r.toneMapping);const vt={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:Oe,defines:x.defines,customVertexShaderID:Ve,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:se,batchingColor:se&&L._colorsTexture!==null,instancing:te,instancingColor:te&&L.instanceColor!==null,instancingMorph:te&&L.morphTexture!==null,outputColorSpace:F===null?r.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ei,alphaToCoverage:!!x.alphaToCoverage,map:de,matcap:Ee,envMap:oe,envMapMode:oe&&O.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:be,bumpMap:Ie,normalMap:X,displacementMap:B,emissiveMap:gt,normalMapObjectSpace:X&&x.normalMapType===jE,normalMapTangentSpace:X&&x.normalMapType===Ep,metalnessMap:tt,roughnessMap:Ge,anisotropy:Re,anisotropyMap:Q,clearcoat:I,clearcoatMap:ve,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:E,iridescence:G,iridescenceMap:Ae,iridescenceThicknessMap:he,sheen:ne,sheenColorMap:pe,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:_e,specularIntensityMap:$e,transmission:ie,transmissionMap:U,thicknessMap:me,gradientMap:fe,opaque:x.transparent===!1&&x.blending===na&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:le,alphaHash:ee,combine:x.combine,mapUv:de&&p(x.map.channel),aoMapUv:ce&&p(x.aoMap.channel),lightMapUv:be&&p(x.lightMap.channel),bumpMapUv:Ie&&p(x.bumpMap.channel),normalMapUv:X&&p(x.normalMap.channel),displacementMapUv:B&&p(x.displacementMap.channel),emissiveMapUv:gt&&p(x.emissiveMap.channel),metalnessMapUv:tt&&p(x.metalnessMap.channel),roughnessMapUv:Ge&&p(x.roughnessMap.channel),anisotropyMapUv:Q&&p(x.anisotropyMap.channel),clearcoatMapUv:ve&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&p(x.sheenRoughnessMap.channel),specularMapUv:Le&&p(x.specularMap.channel),specularColorMapUv:_e&&p(x.specularColorMap.channel),specularIntensityMapUv:$e&&p(x.specularIntensityMap.channel),transmissionMapUv:U&&p(x.transmissionMap.channel),thicknessMapUv:me&&p(x.thicknessMap.channel),alphaMapUv:xe&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(X||Re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(de||xe),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&X===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:$,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:de&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===It,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&xt.getTransfer(x.emissiveMap.colorSpace)===It,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ni,flipSided:x.side===Qn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:De&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&x.extensions.multiDraw===!0||se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(S,x),v(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const S=f[x.type];let R;if(S){const C=lr[S];R=hx.clone(C.uniforms)}else R=x.uniforms;return R}function M(x,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new n3(r,S,x,i),c.push(R),u.set(S,R)),R}function T(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:A}}function a3(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function l3(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Q_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function eg(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,_){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=_),e++,v}function l(d,f,p,g,m,_){const v=a(d,f,p,g,m,_);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(d,f,p,g,m,_){const v=a(d,f,p,g,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||l3),n.length>1&&n.sort(f||Q_),i.length>1&&i.sort(f||Q_)}function h(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function c3(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new eg,r.set(n,[o])):i>=s.length?(o=new eg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function u3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ye};break;case"SpotLight":t={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function h3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let d3=0;function f3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function p3(r){const e=new u3,t=h3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Ze,o=new Ze;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,g=0,m=0,_=0,v=0,y=0,M=0,T=0,b=0,A=0;c.sort(f3);for(let S=0,R=c.length;S<R;S++){const C=c[S],L=C.color,N=C.intensity,k=C.distance;let H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ga?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],N);A++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,q=t.get(C);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(L).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[g]=V;const O=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[g]=O.matrix,C.castShadow){const q=t.get(C);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=H,M++}g++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(L).multiplyScalar(N),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const O=C.shadow,q=t.get(C);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,q.shadowCameraNear=O.camera.near,q.shadowCameraFar=O.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=C.shadow.matrix,y++}n.point[p]=V,p++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(N),V.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[_]=V,_++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==g||x.rectAreaLength!==m||x.hemiLength!==_||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,x.directionalLength=f,x.pointLength=p,x.spotLength=g,x.rectAreaLength=m,x.hemiLength=_,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=A,n.version=d3++)}function l(c,u){let h=0,d=0,f=0,p=0,g=0;const m=u.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function tg(r){const e=new p3(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function m3(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new tg(r),e.set(i,[a])):s>=o.length?(a=new tg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v3=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],x3=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ng=new Ze,za=new D,Yh=new D;function M3(r,e,t){let n=new Ip;const i=new ut,s=new ut,o=new Ht,a=new iA,l=new rA,c={},u=t.maxTextureSize,h={[zr]:Qn,[Qn]:zr,[Ni]:Ni},d=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:_3,fragmentShader:g3}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Kt;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let _=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===yE&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const S=r.getRenderTarget(),R=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Fr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=_!==this.type;N&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(H=>H.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,H=b.length;k<H;k++){const V=b[k],O=V.shadow;if(O===void 0){He("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const q=O.getFrameExtents();i.multiply(q),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,O.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Y,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===il){if(V.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new gr(i.x,i.y,{format:ga,type:Hr,minFilter:gn,magFilter:gn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new zl(i.x,i.y,Fi),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Gr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n}else V.isPointLight?(O.map=new xx(i.x),O.map.depthTexture=new Jb(i.x,xr)):(O.map=new gr(i.x,i.y),O.map.depthTexture=new zl(i.x,i.y,xr)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Gr,this.type===Kc?(O.map.depthTexture.compareFunction=Y?Ap:bp,O.map.depthTexture.minFilter=gn,O.map.depthTexture.magFilter=gn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n);O.camera.updateProjectionMatrix()}const P=O.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<P;re++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,re),r.clear();else{re===0&&(r.setRenderTarget(O.map),r.clear());const ae=O.getViewport(re);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),L.viewport(o)}if(V.isPointLight){const ae=O.camera,Ne=O.matrix,Oe=V.distance||ae.far;Oe!==ae.far&&(ae.far=Oe,ae.updateProjectionMatrix()),za.setFromMatrixPosition(V.matrixWorld),ae.position.copy(za),Yh.copy(ae.position),Yh.add(v3[re]),ae.up.copy(x3[re]),ae.lookAt(Yh),ae.updateMatrixWorld(),Ne.makeTranslation(-za.x,-za.y,-za.z),ng.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ng,ae.coordinateSystem,ae.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),M(A,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===il&&v(O,x),O.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(S,R,C)};function v(b,A){const x=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gr(i.x,i.y,{format:ga,type:Hr})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,x,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,x,f,g,null)}function y(b,A,x,S){let R=null;const C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=R.uuid,N=A.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let H=k[N];H===void 0&&(H=R.clone(),k[N]=H,A.addEventListener("dispose",T)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,S===il?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=r.properties.get(R);L.light=x}return R}function M(b,A,x,S,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===il)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const N=e.update(b),k=b.material;if(Array.isArray(k)){const H=N.groups;for(let V=0,O=H.length;V<O;V++){const q=H[V],Y=k[q.materialIndex];if(Y&&Y.visible){const P=y(b,Y,S,R);b.onBeforeShadow(r,b,A,x,N,P,q),r.renderBufferDirect(x,null,N,P,b,q),b.onAfterShadow(r,b,A,x,N,P,q)}}}else if(k.visible){const H=y(b,k,S,R);b.onBeforeShadow(r,b,A,x,N,H,null),r.renderBufferDirect(x,null,N,H,b,null),b.onAfterShadow(r,b,A,x,N,H,null)}}const L=b.children;for(let N=0,k=L.length;N<k;N++)M(L[N],A,x,S,R)}function T(b){b.target.removeEventListener("dispose",T);for(const x in c){const S=c[x],R=b.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function y3(r,e){function t(){let U=!1;const me=new Ht;let fe=null;const xe=new Ht(0,0,0,0);return{setMask:function(le){fe!==le&&!U&&(r.colorMask(le,le,le,le),fe=le)},setLocked:function(le){U=le},setClear:function(le,ee,De,We,vt){vt===!0&&(le*=We,ee*=We,De*=We),me.set(le,ee,De,We),xe.equals(me)===!1&&(r.clearColor(le,ee,De,We),xe.copy(me))},reset:function(){U=!1,fe=null,xe.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,fe=null,xe=null,le=null;return{setReversed:function(ee){if(me!==ee){const De=e.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),me=ee;const We=le;le=null,this.setClear(We)}},getReversed:function(){return me},setTest:function(ee){ee?F(r.DEPTH_TEST):$(r.DEPTH_TEST)},setMask:function(ee){fe!==ee&&!U&&(r.depthMask(ee),fe=ee)},setFunc:function(ee){if(me&&(ee=ab[ee]),xe!==ee){switch(ee){case Vd:r.depthFunc(r.NEVER);break;case zd:r.depthFunc(r.ALWAYS);break;case Hd:r.depthFunc(r.LESS);break;case pa:r.depthFunc(r.LEQUAL);break;case Gd:r.depthFunc(r.EQUAL);break;case Wd:r.depthFunc(r.GEQUAL);break;case Xd:r.depthFunc(r.GREATER);break;case qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ee}},setLocked:function(ee){U=ee},setClear:function(ee){le!==ee&&(le=ee,me&&(ee=1-ee),r.clearDepth(ee))},reset:function(){U=!1,fe=null,xe=null,le=null,me=!1}}}function i(){let U=!1,me=null,fe=null,xe=null,le=null,ee=null,De=null,We=null,vt=null;return{setTest:function(we){U||(we?F(r.STENCIL_TEST):$(r.STENCIL_TEST))},setMask:function(we){me!==we&&!U&&(r.stencilMask(we),me=we)},setFunc:function(we,ke,rt){(fe!==we||xe!==ke||le!==rt)&&(r.stencilFunc(we,ke,rt),fe=we,xe=ke,le=rt)},setOp:function(we,ke,rt){(ee!==we||De!==ke||We!==rt)&&(r.stencilOp(we,ke,rt),ee=we,De=ke,We=rt)},setLocked:function(we){U=we},setClear:function(we){vt!==we&&(r.clearStencil(we),vt=we)},reset:function(){U=!1,me=null,fe=null,xe=null,le=null,ee=null,De=null,We=null,vt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,g=!1,m=null,_=null,v=null,y=null,M=null,T=null,b=null,A=new Ye(0,0,0),x=0,S=!1,R=null,C=null,L=null,N=null,k=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=O>=2);let Y=null,P={};const re=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Ne=new Ht().fromArray(re),Oe=new Ht().fromArray(ae);function Ve(U,me,fe,xe){const le=new Uint8Array(4),ee=r.createTexture();r.bindTexture(U,ee),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<fe;De++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(me+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ee}const J={};J[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(r.DEPTH_TEST),o.setFunc(pa),Ie(!1),X(Hm),F(r.CULL_FACE),ce(Fr);function F(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function $(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function te(U,me){return h[U]!==me?(r.bindFramebuffer(U,me),h[U]=me,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=me),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=me),!0):!1}function se(U,me){let fe=f,xe=!1;if(U){fe=d.get(me),fe===void 0&&(fe=[],d.set(me,fe));const le=U.textures;if(fe.length!==le.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,De=le.length;ee<De;ee++)fe[ee]=r.COLOR_ATTACHMENT0+ee;fe.length=le.length,xe=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,xe=!0);xe&&r.drawBuffers(fe)}function de(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const Ee={[Gs]:r.FUNC_ADD,[TE]:r.FUNC_SUBTRACT,[EE]:r.FUNC_REVERSE_SUBTRACT};Ee[bE]=r.MIN,Ee[AE]=r.MAX;const oe={[wE]:r.ZERO,[RE]:r.ONE,[CE]:r.SRC_COLOR,[Bd]:r.SRC_ALPHA,[UE]:r.SRC_ALPHA_SATURATE,[DE]:r.DST_COLOR,[IE]:r.DST_ALPHA,[PE]:r.ONE_MINUS_SRC_COLOR,[kd]:r.ONE_MINUS_SRC_ALPHA,[NE]:r.ONE_MINUS_DST_COLOR,[LE]:r.ONE_MINUS_DST_ALPHA,[OE]:r.CONSTANT_COLOR,[FE]:r.ONE_MINUS_CONSTANT_COLOR,[BE]:r.CONSTANT_ALPHA,[kE]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(U,me,fe,xe,le,ee,De,We,vt,we){if(U===Fr){g===!0&&($(r.BLEND),g=!1);return}if(g===!1&&(F(r.BLEND),g=!0),U!==SE){if(U!==m||we!==S){if((_!==Gs||M!==Gs)&&(r.blendEquation(r.FUNC_ADD),_=Gs,M=Gs),we)switch(U){case na:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gm:r.blendFunc(r.ONE,r.ONE);break;case Wm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case na:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wm:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}v=null,y=null,T=null,b=null,A.set(0,0,0),x=0,m=U,S=we}return}le=le||me,ee=ee||fe,De=De||xe,(me!==_||le!==M)&&(r.blendEquationSeparate(Ee[me],Ee[le]),_=me,M=le),(fe!==v||xe!==y||ee!==T||De!==b)&&(r.blendFuncSeparate(oe[fe],oe[xe],oe[ee],oe[De]),v=fe,y=xe,T=ee,b=De),(We.equals(A)===!1||vt!==x)&&(r.blendColor(We.r,We.g,We.b,vt),A.copy(We),x=vt),m=U,S=!1}function be(U,me){U.side===Ni?$(r.CULL_FACE):F(r.CULL_FACE);let fe=U.side===Qn;me&&(fe=!fe),Ie(fe),U.blending===na&&U.transparent===!1?ce(Fr):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;a.setTest(xe),xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?F(r.SAMPLE_ALPHA_TO_COVERAGE):$(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){R!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),R=U)}function X(U){U!==xE?(F(r.CULL_FACE),U!==C&&(U===Hm?r.cullFace(r.BACK):U===ME?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$(r.CULL_FACE),C=U}function B(U){U!==L&&(V&&r.lineWidth(U),L=U)}function gt(U,me,fe){U?(F(r.POLYGON_OFFSET_FILL),(N!==me||k!==fe)&&(N=me,k=fe,o.getReversed()&&(me=-me),r.polygonOffset(me,fe))):$(r.POLYGON_OFFSET_FILL)}function tt(U){U?F(r.SCISSOR_TEST):$(r.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=r.TEXTURE0+H-1),Y!==U&&(r.activeTexture(U),Y=U)}function Re(U,me,fe){fe===void 0&&(Y===null?fe=r.TEXTURE0+H-1:fe=Y);let xe=P[fe];xe===void 0&&(xe={type:void 0,texture:void 0},P[fe]=xe),(xe.type!==U||xe.texture!==me)&&(Y!==fe&&(r.activeTexture(fe),Y=fe),r.bindTexture(U,me||J[U]),xe.type=U,xe.texture=me)}function I(){const U=P[Y];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ne(){try{r.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ie(){try{r.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ue(){try{r.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ce(){try{r.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ae(){try{r.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function he(){try{r.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function pe(U){Ne.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function Pe(U){Oe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Oe.copy(U))}function Le(U,me){let fe=c.get(me);fe===void 0&&(fe=new WeakMap,c.set(me,fe));let xe=fe.get(U);xe===void 0&&(xe=r.getUniformBlockIndex(me,U.name),fe.set(U,xe))}function _e(U,me){const xe=c.get(me).get(U);l.get(me)!==xe&&(r.uniformBlockBinding(me,xe,U.__bindingPointIndex),l.set(me,xe))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Y=null,P={},h={},d=new WeakMap,f=[],p=null,g=!1,m=null,_=null,v=null,y=null,M=null,T=null,b=null,A=new Ye(0,0,0),x=0,S=!1,R=null,C=null,L=null,N=null,k=null,Ne.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:$,bindFramebuffer:te,drawBuffers:se,useProgram:de,setBlending:ce,setMaterial:be,setFlipSided:Ie,setCullFace:X,setLineWidth:B,setPolygonOffset:gt,setScissorTest:tt,activeTexture:Ge,bindTexture:Re,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:Ae,texImage3D:he,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:ue,texStorage3D:Ce,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:ve,scissor:pe,viewport:Pe,reset:$e}}function S3(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):Vl("canvas")}function g(I,E,G){let ne=1;const ie=Re(I);if((ie.width>G||ie.height>G)&&(ne=G/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(ne*ie.width),ve=Math.floor(ne*ie.height);h===void 0&&(h=p(Q,ve));const ue=E?p(Q,ve):h;return ue.width=Q,ue.height=ve,ue.getContext("2d").drawImage(I,0,0,Q,ve),He("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+ve+")."),ue}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function m(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,E,G,ne,ie=!1){if(I!==null){if(r[I]!==void 0)return r[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=E;if(E===r.RED&&(G===r.FLOAT&&(Q=r.R32F),G===r.HALF_FLOAT&&(Q=r.R16F),G===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.R8UI),G===r.UNSIGNED_SHORT&&(Q=r.R16UI),G===r.UNSIGNED_INT&&(Q=r.R32UI),G===r.BYTE&&(Q=r.R8I),G===r.SHORT&&(Q=r.R16I),G===r.INT&&(Q=r.R32I)),E===r.RG&&(G===r.FLOAT&&(Q=r.RG32F),G===r.HALF_FLOAT&&(Q=r.RG16F),G===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RG8UI),G===r.UNSIGNED_SHORT&&(Q=r.RG16UI),G===r.UNSIGNED_INT&&(Q=r.RG32UI),G===r.BYTE&&(Q=r.RG8I),G===r.SHORT&&(Q=r.RG16I),G===r.INT&&(Q=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),G===r.UNSIGNED_INT&&(Q=r.RGB32UI),G===r.BYTE&&(Q=r.RGB8I),G===r.SHORT&&(Q=r.RGB16I),G===r.INT&&(Q=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),G===r.UNSIGNED_INT&&(Q=r.RGBA32UI),G===r.BYTE&&(Q=r.RGBA8I),G===r.SHORT&&(Q=r.RGBA16I),G===r.INT&&(Q=r.RGBA32I)),E===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),E===r.RGBA){const ve=ie?yu:xt.getTransfer(ne);G===r.FLOAT&&(Q=r.RGBA32F),G===r.HALF_FLOAT&&(Q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Q=ve===It?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(I,E){let G;return I?E===null||E===xr||E===Ol?G=r.DEPTH24_STENCIL8:E===Fi?G=r.DEPTH32F_STENCIL8:E===Ul&&(G=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===Ol?G=r.DEPTH_COMPONENT24:E===Fi?G=r.DEPTH_COMPONENT32F:E===Ul&&(G=r.DEPTH_COMPONENT16),G}function T(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==_n&&I.minFilter!==gn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function b(I){const E=I.target;E.removeEventListener("dispose",b),x(E),E.isVideoTexture&&u.delete(E)}function A(I){const E=I.target;E.removeEventListener("dispose",A),R(E)}function x(I){const E=n.get(I);if(E.__webglInit===void 0)return;const G=I.source,ne=d.get(G);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(I),Object.keys(ne).length===0&&d.delete(G)}n.remove(I)}function S(I){const E=n.get(I);r.deleteTexture(E.__webglTexture);const G=I.source,ne=d.get(G);delete ne[E.__cacheKey],o.memory.textures--}function R(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ie=0;ie<E.__webglFramebuffer[ne].length;ie++)r.deleteFramebuffer(E.__webglFramebuffer[ne][ie]);else r.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)r.deleteFramebuffer(E.__webglFramebuffer[ne]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=I.textures;for(let ne=0,ie=G.length;ne<ie;ne++){const Q=n.get(G[ne]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[ne])}n.remove(I)}let C=0;function L(){C=0}function N(){const I=C;return I>=i.maxTextures&&He("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function k(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function H(I,E){const G=n.get(I);if(I.isVideoTexture&&tt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){const ne=I.image;if(ne===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,I,E);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function V(I,E){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){J(G,I,E);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function O(I,E){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){J(G,I,E);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function q(I,E){const G=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){F(G,I,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const Y={[_a]:r.REPEAT,[fr]:r.CLAMP_TO_EDGE,[xu]:r.MIRRORED_REPEAT},P={[_n]:r.NEAREST,[Xv]:r.NEAREST_MIPMAP_NEAREST,[rl]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[Zc]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},re={[KE]:r.NEVER,[tb]:r.ALWAYS,[ZE]:r.LESS,[bp]:r.LEQUAL,[JE]:r.EQUAL,[Ap]:r.GEQUAL,[QE]:r.GREATER,[eb]:r.NOTEQUAL};function ae(I,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gn||E.magFilter===Zc||E.magFilter===rl||E.magFilter===Dr||E.minFilter===gn||E.minFilter===Zc||E.minFilter===rl||E.minFilter===Dr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Y[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Y[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Y[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,P[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==rl&&E.minFilter!==Dr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",b));const ne=E.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const Q=k(E);if(Q!==I.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const ve=ie[I.__cacheKey];ve!==void 0&&(ie[I.__cacheKey].usedTimes--,ve.usedTimes===0&&S(E)),I.__cacheKey=Q,I.__webglTexture=ie[Q].texture}return G}function Oe(I,E,G){return Math.floor(Math.floor(I/G)/E)}function Ve(I,E,G,ne){const Q=I.updateRanges;if(Q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,G,ne,E.data);else{Q.sort((he,pe)=>he.start-pe.start);let ve=0;for(let he=1;he<Q.length;he++){const pe=Q[ve],Pe=Q[he],Le=pe.start+pe.count,_e=Oe(Pe.start,E.width,4),$e=Oe(pe.start,E.width,4);Pe.start<=Le+1&&_e===$e&&Oe(Pe.start+Pe.count-1,E.width,4)===_e?pe.count=Math.max(pe.count,Pe.start+Pe.count-pe.start):(++ve,Q[ve]=Pe)}Q.length=ve+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),Ce=r.getParameter(r.UNPACK_SKIP_PIXELS),Ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let he=0,pe=Q.length;he<pe;he++){const Pe=Q[he],Le=Math.floor(Pe.start/4),_e=Math.ceil(Pe.count/4),$e=Le%E.width,U=Math.floor(Le/E.width),me=_e,fe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,$e,U,me,fe,G,ne,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function J(I,E,G){let ne=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=r.TEXTURE_3D);const ie=Ne(I,E),Q=E.source;t.bindTexture(ne,I.__webglTexture,r.TEXTURE0+G);const ve=n.get(Q);if(Q.version!==ve.__version||ie===!0){t.activeTexture(r.TEXTURE0+G);const ue=xt.getPrimaries(xt.workingColorSpace),Ce=E.colorSpace===ls?null:xt.getPrimaries(E.colorSpace),Ae=E.colorSpace===ls||ue===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let he=g(E.image,!1,i.maxTextureSize);he=Ge(E,he);const pe=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let Le=y(E.internalFormat,pe,Pe,E.colorSpace,E.isVideoTexture);ae(ne,E);let _e;const $e=E.mipmaps,U=E.isVideoTexture!==!0,me=ve.__version===void 0||ie===!0,fe=Q.dataReady,xe=T(E,he);if(E.isDepthTexture)Le=M(E.format===js,E.type),me&&(U?t.texStorage2D(r.TEXTURE_2D,1,Le,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,pe,Pe,null));else if(E.isDataTexture)if($e.length>0){U&&me&&t.texStorage2D(r.TEXTURE_2D,xe,Le,$e[0].width,$e[0].height);for(let le=0,ee=$e.length;le<ee;le++)_e=$e[le],U?fe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,_e.width,_e.height,pe,Pe,_e.data):t.texImage2D(r.TEXTURE_2D,le,Le,_e.width,_e.height,0,pe,Pe,_e.data);E.generateMipmaps=!1}else U?(me&&t.texStorage2D(r.TEXTURE_2D,xe,Le,he.width,he.height),fe&&Ve(E,he,pe,Pe)):t.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,pe,Pe,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Le,$e[0].width,$e[0].height,he.depth);for(let le=0,ee=$e.length;le<ee;le++)if(_e=$e[le],E.format!==Bi)if(pe!==null)if(U){if(fe)if(E.layerUpdates.size>0){const De=D_(_e.width,_e.height,E.format,E.type);for(const We of E.layerUpdates){const vt=_e.data.subarray(We*De/_e.data.BYTES_PER_ELEMENT,(We+1)*De/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,We,_e.width,_e.height,1,pe,vt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,he.depth,pe,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Le,_e.width,_e.height,he.depth,0,_e.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,he.depth,pe,Pe,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Le,_e.width,_e.height,he.depth,0,pe,Pe,_e.data)}else{U&&me&&t.texStorage2D(r.TEXTURE_2D,xe,Le,$e[0].width,$e[0].height);for(let le=0,ee=$e.length;le<ee;le++)_e=$e[le],E.format!==Bi?pe!==null?U?fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Le,_e.width,_e.height,0,_e.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,_e.width,_e.height,pe,Pe,_e.data):t.texImage2D(r.TEXTURE_2D,le,Le,_e.width,_e.height,0,pe,Pe,_e.data)}else if(E.isDataArrayTexture)if(U){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Le,he.width,he.height,he.depth),fe)if(E.layerUpdates.size>0){const le=D_(he.width,he.height,E.format,E.type);for(const ee of E.layerUpdates){const De=he.data.subarray(ee*le/he.data.BYTES_PER_ELEMENT,(ee+1)*le/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,he.width,he.height,1,pe,Pe,De)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,pe,Pe,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,pe,Pe,he.data);else if(E.isData3DTexture)U?(me&&t.texStorage3D(r.TEXTURE_3D,xe,Le,he.width,he.height,he.depth),fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,pe,Pe,he.data)):t.texImage3D(r.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,pe,Pe,he.data);else if(E.isFramebufferTexture){if(me)if(U)t.texStorage2D(r.TEXTURE_2D,xe,Le,he.width,he.height);else{let le=he.width,ee=he.height;for(let De=0;De<xe;De++)t.texImage2D(r.TEXTURE_2D,De,Le,le,ee,0,pe,Pe,null),le>>=1,ee>>=1}}else if($e.length>0){if(U&&me){const le=Re($e[0]);t.texStorage2D(r.TEXTURE_2D,xe,Le,le.width,le.height)}for(let le=0,ee=$e.length;le<ee;le++)_e=$e[le],U?fe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,pe,Pe,_e):t.texImage2D(r.TEXTURE_2D,le,Le,pe,Pe,_e);E.generateMipmaps=!1}else if(U){if(me){const le=Re(he);t.texStorage2D(r.TEXTURE_2D,xe,Le,le.width,le.height)}fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Pe,he)}else t.texImage2D(r.TEXTURE_2D,0,Le,pe,Pe,he);m(E)&&_(ne),ve.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function F(I,E,G){if(E.image.length!==6)return;const ne=Ne(I,E),ie=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);const Q=n.get(ie);if(ie.version!==Q.__version||ne===!0){t.activeTexture(r.TEXTURE0+G);const ve=xt.getPrimaries(xt.workingColorSpace),ue=E.colorSpace===ls?null:xt.getPrimaries(E.colorSpace),Ce=E.colorSpace===ls||ve===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!Ae&&!he?pe[ee]=g(E.image[ee],!0,i.maxCubemapSize):pe[ee]=he?E.image[ee].image:E.image[ee],pe[ee]=Ge(E,pe[ee]);const Pe=pe[0],Le=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),$e=y(E.internalFormat,Le,_e,E.colorSpace),U=E.isVideoTexture!==!0,me=Q.__version===void 0||ne===!0,fe=ie.dataReady;let xe=T(E,Pe);ae(r.TEXTURE_CUBE_MAP,E);let le;if(Ae){U&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,$e,Pe.width,Pe.height);for(let ee=0;ee<6;ee++){le=pe[ee].mipmaps;for(let De=0;De<le.length;De++){const We=le[De];E.format!==Bi?Le!==null?U?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,We.width,We.height,Le,We.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,$e,We.width,We.height,0,We.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,We.width,We.height,Le,_e,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,$e,We.width,We.height,0,Le,_e,We.data)}}}else{if(le=E.mipmaps,U&&me){le.length>0&&xe++;const ee=Re(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(he){U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,Le,_e,pe[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,pe[ee].width,pe[ee].height,0,Le,_e,pe[ee].data);for(let De=0;De<le.length;De++){const vt=le[De].image[ee].image;U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,vt.width,vt.height,Le,_e,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,$e,vt.width,vt.height,0,Le,_e,vt.data)}}else{U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,_e,pe[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Le,_e,pe[ee]);for(let De=0;De<le.length;De++){const We=le[De];U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Le,_e,We.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,$e,Le,_e,We.image[ee])}}}m(E)&&_(r.TEXTURE_CUBE_MAP),Q.__version=ie.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function $(I,E,G,ne,ie,Q){const ve=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),Ce=y(G.internalFormat,ve,ue,G.colorSpace),Ae=n.get(E),he=n.get(G);if(he.__renderTarget=E,!Ae.__hasExternalTextures){const pe=Math.max(1,E.width>>Q),Pe=Math.max(1,E.height>>Q);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,Ce,pe,Pe,E.depth,0,ve,ue,null):t.texImage2D(ie,Q,Ce,pe,Pe,0,ve,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),gt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,ie,he.__webglTexture,0,B(E)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,ie,he.__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(I,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const ne=E.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,Q=M(E.stencilBuffer,ie),ve=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;gt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(E),Q,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(E),Q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,I)}else{const ne=E.textures;for(let ie=0;ie<ne.length;ie++){const Q=ne[ie],ve=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),Ce=y(Q.internalFormat,ve,ue,Q.colorSpace);gt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(E),Ce,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(E),Ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(I,E,G){const ne=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(E.depthTexture);if(ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,E.depthTexture.addEventListener("dispose",b)),ie.__webglTexture===void 0){ie.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),ae(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ae=s.convert(E.depthTexture.format),he=s.convert(E.depthTexture.type);let pe;E.depthTexture.format===Gr?pe=r.DEPTH_COMPONENT24:E.depthTexture.format===js&&(pe=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,pe,E.width,E.height,0,Ae,he,null)}}else H(E.depthTexture,0);const Q=ie.__webglTexture,ve=B(E),ue=ne?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Ce=E.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Gr)gt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,ue,Q,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,ue,Q,0);else if(E.depthTexture.format===js)gt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,ue,Q,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,ue,Q,0);else throw new Error("Unknown depthTexture format")}function de(I){const E=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ie)};ne.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ne}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ne=0;ne<6;ne++)se(E.__webglFramebuffer[ne],I,ne);else{const ne=I.texture.mipmaps;ne&&ne.length>0?se(E.__webglFramebuffer[0],I,0):se(E.__webglFramebuffer,I,0)}else if(G){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=r.createRenderbuffer(),te(E.__webglDepthbuffer[ne],I,!1);else{const ie=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ne];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Q)}}else{const ne=I.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),te(E.__webglDepthbuffer,I,!1);else{const ie=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(I,E,G){const ne=n.get(I);E!==void 0&&$(ne.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&de(I)}function oe(I){const E=I.texture,G=n.get(I),ne=n.get(E);I.addEventListener("dispose",A);const ie=I.textures,Q=I.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)G.__webglFramebuffer[ue][Ce]=r.createFramebuffer()}else G.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)G.__webglFramebuffer[ue]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ve)for(let ue=0,Ce=ie.length;ue<Ce;ue++){const Ae=n.get(ie[ue]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&gt(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const Ce=ie[ue];G.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Ae=s.convert(Ce.format,Ce.colorSpace),he=s.convert(Ce.type),pe=y(Ce.internalFormat,Ae,he,Ce.colorSpace,I.isXRRenderTarget===!0),Pe=B(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),te(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),ae(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)$(G.__webglFramebuffer[ue][Ce],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else $(G.__webglFramebuffer[ue],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(E)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ue=0,Ce=ie.length;ue<Ce;ue++){const Ae=ie[ue],he=n.get(Ae);let pe=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,he.__webglTexture),ae(pe,Ae),$(G.__webglFramebuffer,I,Ae,r.COLOR_ATTACHMENT0+ue,pe,0),m(Ae)&&_(pe)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),ae(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)$(G.__webglFramebuffer[Ce],I,E,r.COLOR_ATTACHMENT0,ue,Ce);else $(G.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,ue,0);m(E)&&_(ue),t.unbindTexture()}I.depthBuffer&&de(I)}function ce(I){const E=I.textures;for(let G=0,ne=E.length;G<ne;G++){const ie=E[G];if(m(ie)){const Q=v(I),ve=n.get(ie).__webglTexture;t.bindTexture(Q,ve),_(Q),t.unbindTexture()}}}const be=[],Ie=[];function X(I){if(I.samples>0){if(gt(I)===!1){const E=I.textures,G=I.width,ne=I.height;let ie=r.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(I),ue=E.length>1;if(ue)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ce=I.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[Ae]);const he=n.get(E[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,G,ne,0,0,G,ne,ie,r.NEAREST),l===!0&&(be.length=0,Ie.length=0,be.push(r.COLOR_ATTACHMENT0+Ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(be.push(Q),Ie.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,ve.__webglColorRenderbuffer[Ae]);const he=n.get(E[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,he,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function B(I){return Math.min(i.maxSamples,I.samples)}function gt(I){const E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function tt(I){const E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function Ge(I,E){const G=I.colorSpace,ne=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==ei&&G!==ls&&(xt.getTransfer(G)===It?(ne!==Bi||ie!==xi)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",G)),E}function Re(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=Ee,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=$,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function T3(r,e){function t(n,i=ls){let s;const o=xt.getTransfer(i);if(n===xi)return r.UNSIGNED_BYTE;if(n===gp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$v)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===qv)return r.BYTE;if(n===Yv)return r.SHORT;if(n===Ul)return r.UNSIGNED_SHORT;if(n===_p)return r.INT;if(n===xr)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Hr)return r.HALF_FLOAT;if(n===Kv)return r.ALPHA;if(n===Zv)return r.RGB;if(n===Bi)return r.RGBA;if(n===Gr)return r.DEPTH_COMPONENT;if(n===js)return r.DEPTH_STENCIL;if(n===xp)return r.RED;if(n===Mp)return r.RED_INTEGER;if(n===ga)return r.RG;if(n===yp)return r.RG_INTEGER;if(n===Sp)return r.RGBA_INTEGER;if(n===Jc||n===Qc||n===eu||n===tu)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yd||n===$d||n===jd||n===Kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zd||n===Jd||n===Qd||n===ef||n===tf||n===nf||n===rf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zd||n===Jd)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ef)return s.COMPRESSED_R11_EAC;if(n===tf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===nf)return s.COMPRESSED_RG11_EAC;if(n===rf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sf||n===of||n===af||n===lf||n===cf||n===uf||n===hf||n===df||n===ff||n===pf||n===mf||n===_f||n===gf||n===vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===of)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===af)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===df)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ff)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_f)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xf||n===Mf||n===yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xf)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sf||n===Tf||n===Ef||n===bf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ef)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ol?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const E3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zi({vertexShader:E3,fragmentShader:b3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zn(new zu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w3 extends fo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const g=typeof XRWebGLBinding<"u",m=new A3,_={},v=t.getContextAttributes();let y=null,M=null;const T=[],b=[],A=new ut;let x=null;const S=new Kn;S.viewport=new Ht;const R=new Kn;R.viewport=new Ht;const C=[S,R],L=new EA;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let F=T[J];return F===void 0&&(F=new Mh,T[J]=F),F.getTargetRaySpace()},this.getControllerGrip=function(J){let F=T[J];return F===void 0&&(F=new Mh,T[J]=F),F.getGripSpace()},this.getHand=function(J){let F=T[J];return F===void 0&&(F=new Mh,T[J]=F),F.getHandSpace()};function H(J){const F=b.indexOf(J.inputSource);if(F===-1)return;const $=T[F];$!==void 0&&($.update(J.inputSource,J.frame,c||o),$.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",O);for(let J=0;J<T.length;J++){const F=b[J];F!==null&&(b[J]=null,T[J].disconnect(F))}N=null,k=null,m.reset();for(const J in _)delete _[J];e.setRenderTarget(y),f=null,d=null,h=null,i=null,M=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,te=null,se=null;v.depth&&(se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?js:Gr,te=v.stencil?Ol:xr);const de={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new gr(d.textureWidth,d.textureHeight,{format:Bi,type:xi,depthTexture:new zl(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new gr(f.framebufferWidth,f.framebufferHeight,{format:Bi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(J){for(let F=0;F<J.removed.length;F++){const $=J.removed[F],te=b.indexOf($);te>=0&&(b[te]=null,T[te].disconnect($))}for(let F=0;F<J.added.length;F++){const $=J.added[F];let te=b.indexOf($);if(te===-1){for(let de=0;de<T.length;de++)if(de>=b.length){b.push($),te=de;break}else if(b[de]===null){b[de]=$,te=de;break}if(te===-1)break}const se=T[te];se&&se.connect($)}}const q=new D,Y=new D;function P(J,F,$){q.setFromMatrixPosition(F.matrixWorld),Y.setFromMatrixPosition($.matrixWorld);const te=q.distanceTo(Y),se=F.projectionMatrix.elements,de=$.projectionMatrix.elements,Ee=se[14]/(se[10]-1),oe=se[14]/(se[10]+1),ce=(se[9]+1)/se[5],be=(se[9]-1)/se[5],Ie=(se[8]-1)/se[0],X=(de[8]+1)/de[0],B=Ee*Ie,gt=Ee*X,tt=te/(-Ie+X),Ge=tt*-Ie;if(F.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),se[10]===-1)J.projectionMatrix.copy(F.projectionMatrix),J.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const Re=Ee+tt,I=oe+tt,E=B-Ge,G=gt+(te-Ge),ne=ce*oe/I*Re,ie=be*oe/I*Re;J.projectionMatrix.makePerspective(E,G,ne,ie,Re,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,F){F===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(F.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let F=J.near,$=J.far;m.texture!==null&&(m.depthNear>0&&(F=m.depthNear),m.depthFar>0&&($=m.depthFar)),L.near=R.near=S.near=F,L.far=R.far=S.far=$,(N!==L.near||k!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,k=L.far),L.layers.mask=J.layers.mask|6,S.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const te=J.parent,se=L.cameras;re(L,te);for(let de=0;de<se.length;de++)re(se[de],te);se.length===2?P(L,S,R):L.projectionMatrix.copy(S.projectionMatrix),ae(J,L,te)};function ae(J,F,$){$===null?J.matrix.copy(F.matrixWorld):(J.matrix.copy($.matrixWorld),J.matrix.invert(),J.matrix.multiply(F.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(F.projectionMatrix),J.projectionMatrixInverse.copy(F.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=va*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(J){return _[J]};let Ne=null;function Oe(J,F){if(u=F.getViewerPose(c||o),p=F,u!==null){const $=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let te=!1;$.length!==L.cameras.length&&(L.cameras.length=0,te=!0);for(let oe=0;oe<$.length;oe++){const ce=$[oe];let be=null;if(f!==null)be=f.getViewport(ce);else{const X=h.getViewSubImage(d,ce);be=X.viewport,oe===0&&(e.setRenderTargetTextures(M,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(M))}let Ie=C[oe];Ie===void 0&&(Ie=new Kn,Ie.layers.enable(oe),Ie.viewport=new Ht,C[oe]=Ie),Ie.matrix.fromArray(ce.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ce.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(be.x,be.y,be.width,be.height),oe===0&&(L.matrix.copy(Ie.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),te===!0&&L.cameras.push(Ie)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const oe=h.getDepthInformation($[0]);oe&&oe.isValid&&oe.texture&&m.init(oe,i.renderState)}if(se&&se.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let oe=0;oe<$.length;oe++){const ce=$[oe].camera;if(ce){let be=_[ce];be||(be=new cx,_[ce]=be);const Ie=h.getCameraImage(ce);be.sourceTexture=Ie}}}}for(let $=0;$<T.length;$++){const te=b[$],se=T[$];te!==null&&se!==void 0&&se.update(te,F,c||o)}Ne&&Ne(J,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),p=null}const Ve=new vx;Ve.setAnimationLoop(Oe),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}}const Ds=new Ai,R3=new Ze;function C3(r,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,ux(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,y,M){_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),h(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),d(m,_),_.isMeshPhysicalMaterial&&f(m,_,M)):_.isMeshMatcapMaterial?(s(m,_),p(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),g(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,v,y):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Qn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Qn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const v=e.get(_),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,Ds.copy(M),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(R3.makeRotationFromEuler(Ds)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,y){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=y*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function h(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,v){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const v=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function P3(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(p(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(v,T);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function u(v){const y=h();v.__bindingPointIndex=y;const M=r.createBuffer(),T=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],M=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,A=M.length;b<A;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,R=x.length;S<R;S++){const C=x[S];if(f(C,b,S,T)===!0){const L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let H=0;H<N.length;H++){const V=N[H],O=g(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,L+k,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,k),k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,M,T){const b=v.value,A=y+"_"+M;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{const x=T[A];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return T[A]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function p(v){const y=v.uniforms;let M=0;const T=16;for(let A=0,x=y.length;A<x;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let R=0,C=S.length;R<C;R++){const L=S[R],N=Array.isArray(L.value)?L.value:[L.value];for(let k=0,H=N.length;k<H;k++){const V=N[k],O=g(V),q=M%T,Y=q%O.boundary,P=q+Y;M+=Y,P!==0&&T-P<O.storage&&(M+=T-P),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=O.storage}}}const b=M%T;return b>0&&(M+=T-b),v.__size=M,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}const I3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function L3(){return tr===null&&(tr=new Pp(I3,16,16,ga,Hr),tr.name="DFG_LUT",tr.minFilter=gn,tr.magFilter=gn,tr.wrapS=fr,tr.wrapT=fr,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class D3{constructor(e={}){const{canvas:t=sb(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=f,m=new Set([Sp,yp,Mp]),_=new Set([xi,xr,Ul,Ol,gp,vp]),v=new Uint32Array(4),y=new Int32Array(4);let M=null,T=null;const b=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Cn;let C=0,L=0,N=null,k=-1,H=null;const V=new Ht,O=new Ht;let q=null;const Y=new Ye(0);let P=0,re=t.width,ae=t.height,Ne=1,Oe=null,Ve=null;const J=new Ht(0,0,re,ae),F=new Ht(0,0,re,ae);let $=!1;const te=new Ip;let se=!1,de=!1;const Ee=new Ze,oe=new D,ce=new Ht,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function X(){return N===null?Ne:1}let B=n;function gt(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",vt,!1),B===null){const W="webgl2";if(B=gt(W,w),B===null)throw gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Qe("WebGLRenderer: "+w.message),w}let tt,Ge,Re,I,E,G,ne,ie,Q,ve,ue,Ce,Ae,he,pe,Pe,Le,_e,$e,U,me,fe,xe;function le(){tt=new DC(B),tt.init(),me=new T3(B,tt),Ge=new bC(B,tt,e,me),Re=new y3(B,tt),Ge.reversedDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),I=new OC(B),E=new a3,G=new S3(B,tt,Re,E,Ge,me,I),ne=new LC(S),ie=new zA(B),fe=new TC(B,ie),Q=new NC(B,ie,I,fe),ve=new BC(B,Q,ie,fe,I),_e=new FC(B,Ge,G),pe=new AC(E),ue=new o3(S,ne,tt,Ge,fe,pe),Ce=new C3(S,E),Ae=new c3,he=new m3(tt),Le=new SC(S,ne,Re,ve,p,l),Pe=new M3(S,ve,Ge),xe=new P3(B,I,Ge,Re),$e=new EC(B,tt,I),U=new UC(B,tt,I),I.programs=ue.programs,S.capabilities=Ge,S.extensions=tt,S.properties=E,S.renderLists=Ae,S.shadowMap=Pe,S.state=Re,S.info=I}le(),g!==xi&&(x=new VC(g,t.width,t.height,i,s));const ee=new w3(S,B);this.xr=ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(w){w!==void 0&&(Ne=w,this.setSize(re,ae,!1))},this.getSize=function(w){return w.set(re,ae)},this.setSize=function(w,W,Z=!0){if(ee.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,ae=W,t.width=Math.floor(w*Ne),t.height=Math.floor(W*Ne),Z===!0&&(t.style.width=w+"px",t.style.height=W+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(re*Ne,ae*Ne).floor()},this.setDrawingBufferSize=function(w,W,Z){re=w,ae=W,Ne=Z,t.width=Math.floor(w*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(g===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,W,Z,K){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,W,Z,K),Re.viewport(V.copy(J).multiplyScalar(Ne).round())},this.getScissor=function(w){return w.copy(F)},this.setScissor=function(w,W,Z,K){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,W,Z,K),Re.scissor(O.copy(F).multiplyScalar(Ne).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(w){Re.setScissorTest($=w)},this.setOpaqueSort=function(w){Oe=w},this.setTransparentSort=function(w){Ve=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,Z=!0){let K=0;if(w){let j=!1;if(N!==null){const ye=N.texture.format;j=m.has(ye)}if(j){const ye=N.texture.type,Te=_.has(ye),Se=Le.getClearColor(),Fe=Le.getClearAlpha(),Ue=Se.r,st=Se.g,lt=Se.b;Te?(v[0]=Ue,v[1]=st,v[2]=lt,v[3]=Fe,B.clearBufferuiv(B.COLOR,0,v)):(y[0]=Ue,y[1]=st,y[2]=lt,y[3]=Fe,B.clearBufferiv(B.COLOR,0,y))}else K|=B.COLOR_BUFFER_BIT}W&&(K|=B.DEPTH_BUFFER_BIT),Z&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Le.dispose(),Ae.dispose(),he.dispose(),E.dispose(),ne.dispose(),ve.dispose(),fe.dispose(),xe.dispose(),ue.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Je),ee.removeEventListener("sessionend",Xt),nt.stop()};function De(w){w.preventDefault(),Su("WebGLRenderer: Context Lost."),R=!0}function We(){Su("WebGLRenderer: Context Restored."),R=!1;const w=I.autoReset,W=Pe.enabled,Z=Pe.autoUpdate,K=Pe.needsUpdate,j=Pe.type;le(),I.autoReset=w,Pe.enabled=W,Pe.autoUpdate=Z,Pe.needsUpdate=K,Pe.type=j}function vt(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function we(w){const W=w.target;W.removeEventListener("dispose",we),ke(W)}function ke(w){rt(w),E.remove(w)}function rt(w){const W=E.get(w).programs;W!==void 0&&(W.forEach(function(Z){ue.releaseProgram(Z)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Z,K,j,ye){W===null&&(W=be);const Te=j.isMesh&&j.matrixWorld.determinant()<0,Se=ti(w,W,Z,K,j);Re.setMaterial(K,Te);let Fe=Z.index,Ue=1;if(K.wireframe===!0){if(Fe=Q.getWireframeAttribute(Z),Fe===void 0)return;Ue=2}const st=Z.drawRange,lt=Z.attributes.position;let qe=st.start*Ue,Dt=(st.start+st.count)*Ue;ye!==null&&(qe=Math.max(qe,ye.start*Ue),Dt=Math.min(Dt,(ye.start+ye.count)*Ue)),Fe!==null?(qe=Math.max(qe,0),Dt=Math.min(Dt,Fe.count)):lt!=null&&(qe=Math.max(qe,0),Dt=Math.min(Dt,lt.count));const rn=Dt-qe;if(rn<0||rn===1/0)return;fe.setup(j,K,Se,Z,Fe);let Jt,Nt=$e;if(Fe!==null&&(Jt=ie.get(Fe),Nt=U,Nt.setIndex(Jt)),j.isMesh)K.wireframe===!0?(Re.setLineWidth(K.wireframeLinewidth*X()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if(j.isLine){let Ln=K.linewidth;Ln===void 0&&(Ln=1),Re.setLineWidth(Ln*X()),j.isLineSegments?Nt.setMode(B.LINES):j.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else j.isPoints?Nt.setMode(B.POINTS):j.isSprite&&Nt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ln=j._multiDrawStarts,ze=j._multiDrawCounts,ci=j._multiDrawCount,yt=Fe?ie.get(Fe).bytesPerElement:1,Vi=E.get(K).currentProgram.getUniforms();for(let Qi=0;Qi<ci;Qi++)Vi.setValue(B,"_gl_DrawID",Qi),Nt.render(Ln[Qi]/yt,ze[Qi])}else if(j.isInstancedMesh)Nt.renderInstances(qe,rn,j.count);else if(Z.isInstancedBufferGeometry){const Ln=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ze=Math.min(Z.instanceCount,Ln);Nt.renderInstances(qe,rn,ze)}else Nt.render(qe,rn)};function Me(w,W,Z){w.transparent===!0&&w.side===Ni&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Mn(w,W,Z),w.side=zr,w.needsUpdate=!0,Mn(w,W,Z),w.side=Ni):Mn(w,W,Z)}this.compile=function(w,W,Z=null){Z===null&&(Z=w),T=he.get(Z),T.init(W),A.push(T),Z.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),w!==Z&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const K=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Se=ye[Te];Me(Se,Z,j),K.add(Se)}else Me(ye,Z,j),K.add(ye)}),T=A.pop(),K},this.compileAsync=function(w,W,Z=null){const K=this.compile(w,W,Z);return new Promise(j=>{function ye(){if(K.forEach(function(Te){E.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){j(w);return}setTimeout(ye,10)}tt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ke=null;function Xe(w){Ke&&Ke(w)}function Je(){nt.stop()}function Xt(){nt.start()}const nt=new vx;nt.setAnimationLoop(Xe),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(w){Ke=w,ee.setAnimationLoop(w),w===null?nt.stop():nt.start()},ee.addEventListener("sessionstart",Je),ee.addEventListener("sessionend",Xt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const Z=ee.enabled===!0&&ee.isPresenting===!0,K=x!==null&&(N===null||Z)&&x.begin(S,N);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,W,N),T=he.get(w,A.length),T.init(W),A.push(T),Ee.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(Ee,pr,W.reversedDepth),de=this.localClippingEnabled,se=pe.init(this.clippingPlanes,de),M=Ae.get(w,b.length),M.init(),b.push(M),ee.enabled===!0&&ee.isPresenting===!0){const Te=S.xr.getDepthSensingMesh();Te!==null&&Ct(Te,W,-1/0,S.sortObjects)}Ct(w,W,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(Oe,Ve),Ie=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ie&&Le.addToRenderList(M,w),this.info.render.frame++,se===!0&&pe.beginShadows();const j=T.state.shadowsArray;if(Pe.render(j,w,W),se===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&x.hasRenderPass())===!1){const Te=M.opaque,Se=M.transmissive;if(T.setupLights(),W.isArrayCamera){const Fe=W.cameras;if(Se.length>0)for(let Ue=0,st=Fe.length;Ue<st;Ue++){const lt=Fe[Ue];Ut(Te,Se,w,lt)}Ie&&Le.render(w);for(let Ue=0,st=Fe.length;Ue<st;Ue++){const lt=Fe[Ue];Zt(M,w,lt,lt.viewport)}}else Se.length>0&&Ut(Te,Se,w,W),Ie&&Le.render(w),Zt(M,w,W)}N!==null&&L===0&&(G.updateMultisampleRenderTarget(N),G.updateRenderTargetMipmap(N)),K&&x.end(S),w.isScene===!0&&w.onAfterRender(S,w,W),fe.resetDefaultState(),k=-1,H=null,A.pop(),A.length>0?(T=A[A.length-1],se===!0&&pe.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Ct(w,W,Z,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){K&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const Te=ve.update(w),Se=w.material;Se.visible&&M.push(w,Te,Se,Z,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const Te=ve.update(w),Se=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ce.copy(Te.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Se)){const Fe=Te.groups;for(let Ue=0,st=Fe.length;Ue<st;Ue++){const lt=Fe[Ue],qe=Se[lt.materialIndex];qe&&qe.visible&&M.push(w,Te,qe,Z,ce.z,lt)}}else Se.visible&&M.push(w,Te,Se,Z,ce.z,null)}}const ye=w.children;for(let Te=0,Se=ye.length;Te<Se;Te++)Ct(ye[Te],W,Z,K)}function Zt(w,W,Z,K){const{opaque:j,transmissive:ye,transparent:Te}=w;T.setupLightsView(Z),se===!0&&pe.setGlobalState(S.clippingPlanes,Z),K&&Re.viewport(V.copy(K)),j.length>0&&Et(j,W,Z),ye.length>0&&Et(ye,W,Z),Te.length>0&&Et(Te,W,Z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ut(w,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){const qe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new gr(1,1,{generateMipmaps:!0,type:qe?Hr:xi,minFilter:Dr,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const ye=T.state.transmissionRenderTarget[K.id],Te=K.viewport||V;ye.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);const Se=S.getRenderTarget(),Fe=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(ye),S.getClearColor(Y),P=S.getClearAlpha(),P<1&&S.setClearColor(16777215,.5),S.clear(),Ie&&Le.render(Z);const st=S.toneMapping;S.toneMapping=_r;const lt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),se===!0&&pe.setGlobalState(S.clippingPlanes,K),Et(w,Z,K),G.updateMultisampleRenderTarget(ye),G.updateRenderTargetMipmap(ye),tt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Dt=0,rn=W.length;Dt<rn;Dt++){const Jt=W[Dt],{object:Nt,geometry:Ln,material:ze,group:ci}=Jt;if(ze.side===Ni&&Nt.layers.test(K.layers)){const yt=ze.side;ze.side=Qn,ze.needsUpdate=!0,bt(Nt,Z,K,Ln,ze,ci),ze.side=yt,ze.needsUpdate=!0,qe=!0}}qe===!0&&(G.updateMultisampleRenderTarget(ye),G.updateRenderTargetMipmap(ye))}S.setRenderTarget(Se,Fe,Ue),S.setClearColor(Y,P),lt!==void 0&&(K.viewport=lt),S.toneMapping=st}function Et(w,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ye=w.length;j<ye;j++){const Te=w[j],{object:Se,geometry:Fe,group:Ue}=Te;let st=Te.material;st.allowOverride===!0&&K!==null&&(st=K),Se.layers.test(Z.layers)&&bt(Se,W,Z,Fe,st,Ue)}}function bt(w,W,Z,K,j,ye){w.onBeforeRender(S,W,Z,K,j,ye),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(S,W,Z,K,w,ye),j.transparent===!0&&j.side===Ni&&j.forceSinglePass===!1?(j.side=Qn,j.needsUpdate=!0,S.renderBufferDirect(Z,W,K,j,w,ye),j.side=zr,j.needsUpdate=!0,S.renderBufferDirect(Z,W,K,j,w,ye),j.side=Ni):S.renderBufferDirect(Z,W,K,j,w,ye),w.onAfterRender(S,W,Z,K,j,ye)}function Mn(w,W,Z){W.isScene!==!0&&(W=be);const K=E.get(w),j=T.state.lights,ye=T.state.shadowsArray,Te=j.state.version,Se=ue.getParameters(w,j.state,ye,W,Z),Fe=ue.getProgramCacheKey(Se);let Ue=K.programs;K.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;K.envMap=ne.get(w.envMap||K.environment,st),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",we),Ue=new Map,K.programs=Ue);let lt=Ue.get(Fe);if(lt!==void 0){if(K.currentProgram===lt&&K.lightsStateVersion===Te)return yn(w,Se),lt}else Se.uniforms=ue.getUniforms(w),w.onBeforeCompile(Se,S),lt=ue.acquireProgram(Se,Fe),Ue.set(Fe,lt),K.uniforms=Se.uniforms;const qe=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=pe.uniform),yn(w,Se),K.needsLights=nn(w),K.lightsStateVersion=Te,K.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=lt,K.uniformsList=null,lt}function Pt(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=iu.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function yn(w,W){const Z=E.get(w);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function ti(w,W,Z,K,j){W.isScene!==!0&&(W=be),G.resetTextureUnits();const ye=W.fog,Te=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Se=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ei,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ue=ne.get(K.envMap||Te,Fe),st=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,lt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!Z.morphAttributes.position,Dt=!!Z.morphAttributes.normal,rn=!!Z.morphAttributes.color;let Jt=_r;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Jt=S.toneMapping);const Nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ln=Nt!==void 0?Nt.length:0,ze=E.get(K),ci=T.state.lights;if(se===!0&&(de===!0||w!==H)){const Sn=w===H&&K.id===k;pe.setState(K,w,Sn)}let yt=!1;K.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ci.state.version||ze.outputColorSpace!==Se||j.isBatchedMesh&&ze.batching===!1||!j.isBatchedMesh&&ze.batching===!0||j.isBatchedMesh&&ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ze.instancing===!1||!j.isInstancedMesh&&ze.instancing===!0||j.isSkinnedMesh&&ze.skinning===!1||!j.isSkinnedMesh&&ze.skinning===!0||j.isInstancedMesh&&ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ze.instancingMorph===!1&&j.morphTexture!==null||ze.envMap!==Ue||K.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==st||ze.vertexTangents!==lt||ze.morphTargets!==qe||ze.morphNormals!==Dt||ze.morphColors!==rn||ze.toneMapping!==Jt||ze.morphTargetsCount!==Ln)&&(yt=!0):(yt=!0,ze.__version=K.version);let Vi=ze.currentProgram;yt===!0&&(Vi=Mn(K,W,j));let Qi=!1,bs=!1,mo=!1;const Ot=Vi.getUniforms(),Rn=ze.uniforms;if(Re.useProgram(Vi.program)&&(Qi=!0,bs=!0,mo=!0),K.id!==k&&(k=K.id,bs=!0),Qi||H!==w){Re.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",w.projectionMatrix),Ot.setValue(B,"viewMatrix",w.matrixWorldInverse);const jr=Ot.map.cameraPosition;jr!==void 0&&jr.setValue(B,oe.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,bs=!0,mo=!0)}if(ze.needsLights&&(ci.state.directionalShadowMap.length>0&&Ot.setValue(B,"directionalShadowMap",ci.state.directionalShadowMap,G),ci.state.spotShadowMap.length>0&&Ot.setValue(B,"spotShadowMap",ci.state.spotShadowMap,G),ci.state.pointShadowMap.length>0&&Ot.setValue(B,"pointShadowMap",ci.state.pointShadowMap,G)),j.isSkinnedMesh){Ot.setOptional(B,j,"bindMatrix"),Ot.setOptional(B,j,"bindMatrixInverse");const Sn=j.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ot.setValue(B,"boneTexture",Sn.boneTexture,G))}j.isBatchedMesh&&(Ot.setOptional(B,j,"batchingTexture"),Ot.setValue(B,"batchingTexture",j._matricesTexture,G),Ot.setOptional(B,j,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",j._indirectTexture,G),Ot.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",j._colorsTexture,G));const $r=Z.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0)&&_e.update(j,Z,Vi),(bs||ze.receiveShadow!==j.receiveShadow)&&(ze.receiveShadow=j.receiveShadow,Ot.setValue(B,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(Rn.envMapIntensity.value=W.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=L3()),bs&&(Ot.setValue(B,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&Gt(Rn,mo),ye&&K.fog===!0&&Ce.refreshFogUniforms(Rn,ye),Ce.refreshMaterialUniforms(Rn,K,Ne,ae,T.state.transmissionRenderTarget[w.id]),iu.upload(B,Pt(ze),Rn,G)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(iu.upload(B,Pt(ze),Rn,G),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(B,"center",j.center),Ot.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(B,"normalMatrix",j.normalMatrix),Ot.setValue(B,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Sn=K.uniformsGroups;for(let jr=0,_o=Sn.length;jr<_o;jr++){const Vp=Sn[jr];xe.update(Vp,Vi),xe.bind(Vp,Vi)}}return Vi}function Gt(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,W,Z){const K=E.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=W,E.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const Z=E.get(w);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const ln=B.createFramebuffer();this.setRenderTarget=function(w,W=0,Z=0){N=w,C=W,L=Z;let K=null,j=!1,ye=!1;if(w){const Se=E.get(w);if(Se.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(B.FRAMEBUFFER,Se.__webglFramebuffer),V.copy(w.viewport),O.copy(w.scissor),q=w.scissorTest,Re.viewport(V),Re.scissor(O),Re.setScissorTest(q),k=-1;return}else if(Se.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(Se.__hasExternalTextures)G.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Se.__boundDepthTexture!==st){if(st!==null&&E.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Ue=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[W])?K=Ue[W][Z]:K=Ue[W],j=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?K=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?K=Ue[Z]:K=Ue,V.copy(w.viewport),O.copy(w.scissor),q=w.scissorTest}else V.copy(J).multiplyScalar(Ne).floor(),O.copy(F).multiplyScalar(Ne).floor(),q=$;if(Z!==0&&(K=ln),Re.bindFramebuffer(B.FRAMEBUFFER,K)&&Re.drawBuffers(w,K),Re.viewport(V),Re.scissor(O),Re.setScissorTest(q),j){const Se=E.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Se.__webglTexture,Z)}else if(ye){const Se=W;for(let Fe=0;Fe<w.textures.length;Fe++){const Ue=E.get(w.textures[Fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Fe,Ue.__webglTexture,Z,Se)}}else if(w!==null&&Z!==0){const Se=E.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,Z)}k=-1},this.readRenderTargetPixels=function(w,W,Z,K,j,ye,Te,Se=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){Re.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const Ue=w.textures[Se],st=Ue.format,lt=Ue.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se),!Ge.textureFormatReadable(st)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(lt)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&Z>=0&&Z<=w.height-j&&B.readPixels(W,Z,K,j,me.convert(st),me.convert(lt),ye)}finally{const Ue=N!==null?E.get(N).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,W,Z,K,j,ye,Te,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe)if(W>=0&&W<=w.width-K&&Z>=0&&Z<=w.height-j){Re.bindFramebuffer(B.FRAMEBUFFER,Fe);const Ue=w.textures[Se],st=Ue.format,lt=Ue.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se),!Ge.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(W,Z,K,j,me.convert(st),me.convert(lt),0);const Dt=N!==null?E.get(N).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Dt);const rn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ob(B,rn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(qe),B.deleteSync(rn),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,Z=0){const K=Math.pow(2,-Z),j=Math.floor(w.image.width*K),ye=Math.floor(w.image.height*K),Te=W!==null?W.x:0,Se=W!==null?W.y:0;G.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Te,Se,j,ye),Re.unbindTexture()};const wi=B.createFramebuffer(),Yr=B.createFramebuffer();this.copyTextureToTexture=function(w,W,Z=null,K=null,j=0,ye=0){let Te,Se,Fe,Ue,st,lt,qe,Dt,rn;const Jt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(Z!==null)Te=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,st=Z.min.y,lt=Z.isBox3?Z.min.z:0;else{const Rn=Math.pow(2,-j);Te=Math.floor(Jt.width*Rn),Se=Math.floor(Jt.height*Rn),w.isDataArrayTexture?Fe=Jt.depth:w.isData3DTexture?Fe=Math.floor(Jt.depth*Rn):Fe=1,Ue=0,st=0,lt=0}K!==null?(qe=K.x,Dt=K.y,rn=K.z):(qe=0,Dt=0,rn=0);const Nt=me.convert(W.format),Ln=me.convert(W.type);let ze;W.isData3DTexture?(G.setTexture3D(W,0),ze=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),ze=B.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),ze=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ci=B.getParameter(B.UNPACK_ROW_LENGTH),yt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Vi=B.getParameter(B.UNPACK_SKIP_PIXELS),Qi=B.getParameter(B.UNPACK_SKIP_ROWS),bs=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Jt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Jt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,lt);const mo=w.isDataArrayTexture||w.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Rn=E.get(w),$r=E.get(W),Sn=E.get(Rn.__renderTarget),jr=E.get($r.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let _o=0;_o<Fe;_o++)mo&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,E.get(w).__webglTexture,j,lt+_o),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,E.get(W).__webglTexture,ye,rn+_o)),B.blitFramebuffer(Ue,st,Te,Se,qe,Dt,Te,Se,B.DEPTH_BUFFER_BIT,B.NEAREST);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||E.has(w)){const Rn=E.get(w),$r=E.get(W);Re.bindFramebuffer(B.READ_FRAMEBUFFER,wi),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,Yr);for(let Sn=0;Sn<Fe;Sn++)mo?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,j,lt+Sn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,j),Ot?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$r.__webglTexture,ye,rn+Sn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$r.__webglTexture,ye),j!==0?B.blitFramebuffer(Ue,st,Te,Se,qe,Dt,Te,Se,B.COLOR_BUFFER_BIT,B.NEAREST):Ot?B.copyTexSubImage3D(ze,ye,qe,Dt,rn+Sn,Ue,st,Te,Se):B.copyTexSubImage2D(ze,ye,qe,Dt,Ue,st,Te,Se);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ot?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(ze,ye,qe,Dt,rn,Te,Se,Fe,Nt,Ln,Jt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,ye,qe,Dt,rn,Te,Se,Fe,Nt,Jt.data):B.texSubImage3D(ze,ye,qe,Dt,rn,Te,Se,Fe,Nt,Ln,Jt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,qe,Dt,Te,Se,Nt,Ln,Jt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,qe,Dt,Jt.width,Jt.height,Nt,Jt.data):B.texSubImage2D(B.TEXTURE_2D,ye,qe,Dt,Te,Se,Nt,Ln,Jt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ci),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Vi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,bs),ye===0&&W.generateMipmaps&&B.generateMipmap(ze),Re.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){C=0,L=0,N=null,Re.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}function ig(r,e){if(e===YE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Af||e===Jv){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Af)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function N3(r){const e=new Map,t=new Map,n=r.clone();return Ex(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ex(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Ex(r.children[n],e.children[n],t)}class U3 extends wa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new V3(t)}),this.register(function(t){return new z3(t)}),this.register(function(t){return new K3(t)}),this.register(function(t){return new Z3(t)}),this.register(function(t){return new J3(t)}),this.register(function(t){return new G3(t)}),this.register(function(t){return new W3(t)}),this.register(function(t){return new X3(t)}),this.register(function(t){return new q3(t)}),this.register(function(t){return new k3(t)}),this.register(function(t){return new Y3(t)}),this.register(function(t){return new H3(t)}),this.register(function(t){return new j3(t)}),this.register(function(t){return new $3(t)}),this.register(function(t){return new F3(t)}),this.register(function(t){return new rg(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rg(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Q3(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=El.extractUrlBase(e);o=El.resolveURL(c,this.path)}else o=El.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bx){try{o[pt.KHR_BINARY_GLTF]=new eP(e)}catch(h){i&&i(h);return}s=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fP(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:o[h]=new B3;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[h]=new tP(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[h]=new nP;break;case pt.KHR_MESH_QUANTIZATION:o[h]=new iP;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function O3(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function an(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class F3{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ei);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new nu(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xA(u),c.distance=h;break;case"spot":c=new gA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class B3{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Nr}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ei),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Cn))}return Promise.all(i)}}class k3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class V3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ut(s,s)}return Promise.all(i)}}class z3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class H3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class G3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ei)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Cn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class W3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class X3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(s[0],s[1],s[2],ei),Promise.all(i)}}class q3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class Y3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(s[0],s[1],s[2],ei),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Cn)),Promise.all(i)}}class $3{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class j3{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return an(this.parser,e,this.name)!==null?yr:null}extendMaterialParams(e,t){const n=an(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class K3{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Z3{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class J3{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class rg{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Q3{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ii.TRIANGLES&&c.mode!==Ii.TRIANGLE_STRIP&&c.mode!==Ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const p of h){const g=new Ze,m=new D,_=new it,v=new D(1,1,1),y=new qb(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,g.compose(m,_,v));for(const M in l)if(M==="_COLOR_0"){const T=l[M];y.instanceColor=new Rf(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);kt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const bx="glTF",Ha=12,sg={JSON:1313821514,BIN:5130562};class eP{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ha,s=new DataView(e,Ha);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===sg.JSON){const c=new Uint8Array(e,Ha+o,a);this.content=n.decode(c)}else if(l===sg.BIN){const c=Ha+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Df[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Df[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ra[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(f)},a,c,ei,d)})})}}class nP{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iP{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Ax extends Ea{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,g=p-c,m=-2*f+3*d,_=f-d,v=1-m,y=_-d+h;for(let M=0;M!==a;M++){const T=o[g+M+a],b=o[g+M+l]*u,A=o[p+M+a],x=o[p+M]*u;s[M]=v*T+y*b+m*A+_*x}return s}}const rP=new it;class sP extends Ax{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return rP.fromArray(s).normalize().toArray(s),s}}const Ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},og={9728:_n,9729:gn,9984:Xv,9985:Zc,9986:rl,9987:Dr},ag={33071:fr,33648:xu,10497:_a},$h={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Df={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oP={CUBICSPLINE:void 0,LINEAR:Bl,STEP:Fl},jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aP(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Hu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zr})),r.DefaultMaterial}function Ns(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lP(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function cP(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uP(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=r.indices+":"+Kh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Kh(r.targets[n]);return e}function Kh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Nf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hP(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dP=new Ze;class fP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new O3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new mA(this.options.manager):this.textureLoader=new SA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ns(s,a,i),sr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(El.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$h[i.type],a=ra[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Tt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=$h[i.type],c=ra[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,m;if(f&&f!==h){const _=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=t.cache.get(v);y||(g=new c(a,_*f,i.count*f/u),y=new Cp(g,f/u),t.cache.add(v,y)),m=new Gl(y,l,d%f/u,p)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new Tt(g,l,p);if(i.sparse!==void 0){const _=$h.SCALAR,v=ra[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,T=new v(o[1],y,i.sparse.count*_),b=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,x=T.length;A<x;A++){const S=T[A];if(m.setX(S,b[A*l]),l>=2&&m.setY(S,b[A*l+1]),l>=3&&m.setZ(S,b[A*l+2]),l>=4&&m.setW(S,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=og[d.magFilter]||gn,u.minFilter=og[d.minFilter]||Dr,u.wrapS=ag[d.wrapS]||_a,u.wrapT=ag[d.wrapT]||_a,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==_n&&u.minFilter!==gn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(g){const m=new An(g);m.needsUpdate=!0,d(m)}),t.load(El.resolveURL(h,s.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),sr(h,o),h.userData.mimeType=o.mimeType||hP(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ax,ji.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new po,ji.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const h=i[pt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ei),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Cn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ni);const u=s.alphaMode||jh.OPAQUE;if(u===jh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===jh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Nr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ut(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Nr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Nr){const h=s.emissiveFactor;a.emissive=new Ye().setRGB(h[0],h[1],h[2],ei)}return s.emissiveTexture!==void 0&&o!==Nr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Cn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),sr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ns(i,h,s),h})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return lg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=uP(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=lg(new Kt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?aP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const g=u[f],m=o[f];let _;const v=c[f];if(m.mode===Ii.TRIANGLES||m.mode===Ii.TRIANGLE_STRIP||m.mode===Ii.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new sx(g,v):new zn(g,v),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===Ii.TRIANGLE_STRIP?_.geometry=ig(_.geometry,Jv):m.mode===Ii.TRIANGLE_FAN&&(_.geometry=ig(_.geometry,Af));else if(m.mode===Ii.LINES)_=new Wl(g,v);else if(m.mode===Ii.LINE_STRIP)_=new Vu(g,v);else if(m.mode===Ii.LINE_LOOP)_=new Kb(g,v);else if(m.mode===Ii.POINTS)_=new Zb(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&cP(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),sr(_,s),m.extensions&&Ns(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Ns(i,h[0],s),h[0];const d=new Si;s.extensions&&Ns(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kn(en.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ze;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ta(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],p=i.samplers[f.sampler],g=f.target,m=g.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],g=h[3],m=h[4],_=[];for(let y=0,M=d.length;y<M;y++){const T=d[y],b=f[y],A=p[y],x=g[y],S=m[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const R=n._createAnimationTracks(T,b,A,x,S);if(R)for(let C=0;C<R.length;C++)_.push(R[C])}const v=new Pf(s,void 0,_);return sr(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dP)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,p=h[0];u.pivot=new D().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ox:c.length>1?u=new Si:c.length===1?u=c[0]:u=new kt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),sr(u,s),s.extensions&&Ns(n,u,s),s.matrix!==void 0){const h=new Ze;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Si;n.name&&(s.name=i.createUniqueName(n.name)),sr(s,n),n.extensions&&Ns(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?s.add(N3(d)):s.add(d)}const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ji||d instanceof An)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];is[s.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(is[s.path]){case is.weights:c=Ma;break;case is.rotation:c=ya;break;case is.translation:case is.scale:c=Sa;break;default:switch(n.itemSize){case 1:c=Ma;break;case 2:case 3:default:c=Sa;break}break}const u=i.interpolation!==void 0?oP[i.interpolation]:Bl,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+is[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ya?sP:Ax;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pP(r,e,t){const n=e.attributes,i=new qr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Nf(ra[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const g=Nf(ra[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Mr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function lg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Df[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return xt.workingColorSpace!==ei&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),sr(r,e),pP(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?lP(r,e.targets,t):r})}/*!
 * @pixiv/three-vrm v3.5.1
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Nc=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),St=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),cg=class extends kt{constructor(r){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${r}`,this.expressionName=r,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(r){this._binds.push(r)}deleteBind(r){const e=this._binds.indexOf(r);e>=0&&this._binds.splice(e,1)}applyWeight(r){var e;let t=this.outputWeight;t*=(e=r?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(r=>r.clearAppliedWeight())}};function wx(r,e,t){var n,i;const s=r.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(i=s.meshes)==null?void 0:i[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function ug(r,e){return St(this,null,function*(){const t=yield r.parser.getDependency("node",e);return wx(r,e,t)})}function hg(r){return St(this,null,function*(){const e=yield r.parser.getDependencies("node"),t=new Map;return e.forEach((n,i)=>{const s=wx(r,i,n);s!=null&&t.set(i,s)}),t})}var Uf={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Rx(r){return Math.max(Math.min(r,1),0)}var dg=class Cx{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(Uf));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)&&(e[n]=i)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(Uf));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)||(e[n]=i)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Cx().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Rx(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const i=t.expressionName;this.blinkExpressionNames.indexOf(i)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(i)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(i)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(i=>{e-=i.overrideBlinkAmount,t-=i.overrideLookAtAmount,n-=i.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Ga={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},mP={_Color:Ga.Color,_EmissionColor:Ga.EmissionColor,_ShadeColor:Ga.ShadeColor,_RimColor:Ga.RimColor,_OutlineColor:Ga.OutlineColor},_P=new Ye,Px=class Ix{constructor({material:e,type:t,targetValue:n,targetAlpha:i}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=i??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:i,deltaValue:s}=t,o=this.material[i];o?.add(_P.copy(s).multiplyScalar(e))}if(n!=null){const{propertyName:i,deltaValue:s}=n;this.material[i]!=null&&(this.material[i]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:i}=e,s=this.material[n];s?.copy(i)}if(t!=null){const{propertyName:n,initialValue:i}=t;this.material[n]!=null&&(this.material[n]=i)}}_initColorBindState(){var e,t,n;const{material:i,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const u=i[l].clone(),h=new Ye(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,n;const{material:i,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=i[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Ix._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Px._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var fg=Px,Au=class{constructor({primitives:r,index:e,weight:t}){this.primitives=r,this.index=e,this.weight=t}applyWeight(r){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*r)})}clearAppliedWeight(){this.primitives.forEach(r=>{var e;((e=r.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(r.morphTargetInfluences[this.index]=0)})}},pg=new ut,Lx=class Dx{constructor({material:e,scale:t,offset:n}){var i,s;this.material=e,this.scale=t,this.offset=n;const o=(i=Object.entries(Dx._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:i[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(pg.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(pg.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Lx._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var mg=Lx,gP=new Set(["1.0","1.0-beta"]),Nx=class Ux{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return St(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return St(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return St(this,null,function*(){var t,n;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!gP.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(Uf)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});const h=new dg;return yield Promise.all(Array.from(u.entries()).map(d=>St(this,[d],function*([f,p]){var g,m,_,v,y,M,T;const b=new cg(f);if(e.scene.add(b),b.isBinary=(g=p.isBinary)!=null?g:!1,b.overrideBlink=(m=p.overrideBlink)!=null?m:"none",b.overrideLookAt=(_=p.overrideLookAt)!=null?_:"none",b.overrideMouth=(v=p.overrideMouth)!=null?v:"none",(y=p.morphTargetBinds)==null||y.forEach(A=>St(this,null,function*(){var x;if(A.node===void 0||A.index===void 0)return;const S=yield ug(e,A.node),R=A.index;if(!S.every(C=>Array.isArray(C.morphTargetInfluences)&&R<C.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${p.name} attempts to index morph #${R} but not found.`);return}b.addBind(new Au({primitives:S,index:R,weight:(x=A.weight)!=null?x:1}))})),p.materialColorBinds||p.textureTransformBinds){const A=[];e.scene.traverse(x=>{const S=x.material;S&&(Array.isArray(S)?A.push(...S):A.push(S))}),(M=p.materialColorBinds)==null||M.forEach(x=>St(this,null,function*(){A.filter(R=>{var C;const L=(C=this.parser.associations.get(R))==null?void 0:C.materials;return x.material===L}).forEach(R=>{b.addBind(new fg({material:R,type:x.type,targetValue:new Ye().fromArray(x.targetValue),targetAlpha:x.targetValue[3]}))})})),(T=p.textureTransformBinds)==null||T.forEach(x=>St(this,null,function*(){A.filter(R=>{var C;const L=(C=this.parser.associations.get(R))==null?void 0:C.materials;return x.material===L}).forEach(R=>{var C,L;b.addBind(new mg({material:R,offset:new ut().fromArray((C=x.offset)!=null?C:[0,0]),scale:new ut().fromArray((L=x.scale)!=null?L:[1,1])}))})}))}h.registerExpression(b)}))),h})}_v0Import(e){return St(this,null,function*(){var t;const n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;const s=i.blendShapeMaster;if(!s)return null;const o=new dg,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>St(this,null,function*(){var u;const h=c.presetName,d=h!=null&&Ux.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);const p=new cg(f);e.scene.add(p),p.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(m=>St(this,null,function*(){var _;if(m.mesh===void 0||m.index===void 0)return;const v=[];(_=n.nodes)==null||_.forEach((M,T)=>{M.mesh===m.mesh&&v.push(T)});const y=m.index;yield Promise.all(v.map(M=>St(this,null,function*(){var T;const b=yield ug(e,M);if(!b.every(A=>Array.isArray(A.morphTargetInfluences)&&y<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${y}th morph but not found.`);return}p.addBind(new Au({primitives:b,index:y,weight:.01*((T=m.weight)!=null?T:100)}))})))}));const g=c.materialValues;g&&g.length!==0&&g.forEach(m=>{if(m.materialName===void 0||m.propertyName===void 0||m.targetValue===void 0)return;const _=[];e.scene.traverse(y=>{if(y.material){const M=y.material;Array.isArray(M)?_.push(...M.filter(T=>(T.name===m.materialName||T.name===m.materialName+" (Outline)")&&_.indexOf(T)===-1)):M.name===m.materialName&&_.indexOf(M)===-1&&_.push(M)}});const v=m.propertyName;_.forEach(y=>{if(v==="_MainTex_ST"){const T=new ut(m.targetValue[0],m.targetValue[1]),b=new ut(m.targetValue[2],m.targetValue[3]);b.y=1-b.y-T.y,p.addBind(new mg({material:y,scale:T,offset:b}));return}const M=mP[v];if(M){p.addBind(new fg({material:y,type:M,targetValue:new Ye().fromArray(m.targetValue),targetAlpha:m.targetValue[3]}));return}console.warn(v+" is not supported")})}),o.registerExpression(p)}))),o})}};Nx.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var vP=Nx,Op=class Go{constructor(e,t){this._firstPersonOnlyLayer=Go.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Go.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Go(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Go.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Go.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(i=>{n.type==="firstPersonOnly"?(i.layers.set(this._firstPersonOnlyLayer),i.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(i.layers.set(this._thirdPersonOnlyLayer),i.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(i)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,i){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&i.includes(h[0])||u[1]>0&&i.includes(h[1])||u[2]>0&&i.includes(h[2])||u[3]>0&&i.includes(h[3]))continue;const d=t[l],f=n[l];if(d[0]>0&&i.includes(f[0])||d[1]>0&&i.includes(f[1])||d[2]>0&&i.includes(f[2])||d[3]>0&&i.includes(f[3]))continue;const p=t[c],g=n[c];p[0]>0&&i.includes(g[0])||p[1]>0&&i.includes(g[1])||p[2]>0&&i.includes(g[2])||p[3]>0&&i.includes(g[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const n=new sx(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const i=n.geometry,s=i.getAttribute("skinIndex"),o=s instanceof L_?[]:s.array,a=[];for(let g=0;g<o.length;g+=4)a.push([o[g],o[g+1],o[g+2],o[g+3]]);const l=i.getAttribute("skinWeight"),c=l instanceof L_?[]:l.array,u=[];for(let g=0;g<c.length;g+=4)u.push([c[g],c[g+1],c[g+2],c[g+3]]);const h=i.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),p=[];for(let g=0;g<f;g++)p[g]=d[g];return i.setIndex(p),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ta(e.skeleton.bones,e.skeleton.boneInverses),new Ze),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const i=this._createErasedMesh(t,n);e.add(i)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new Si;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const i=n;this._createHeadlessModelForSkinnedMesh(t,i)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Op.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Op.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var _g=Op,xP=new Set(["1.0","1.0-beta"]),MP=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(r){this.parser=r}afterRoot(r){return St(this,null,function*(){const e=r.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");r.userData.vrmFirstPerson=yield this._import(r,e)}})}_import(r,e){return St(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(r,e);if(t)return t;const n=yield this._v0Import(r,e);return n||null})}_v1Import(r,e){return St(this,null,function*(){var t,n;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!xP.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson,c=[],u=yield hg(r);return Array.from(u.entries()).forEach(([h,d])=>{var f,p;const g=(f=l?.meshAnnotations)==null?void 0:f.find(m=>m.node===h);c.push({meshes:d,type:(p=g?.type)!=null?p:"auto"})}),new _g(e,c)})}_v0Import(r,e){return St(this,null,function*(){var t;const n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;const s=i.firstPerson;if(!s)return null;const o=[],a=yield hg(r);return Array.from(a.entries()).forEach(([l,c])=>{const u=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new _g(e,o)})}_convertV0FlagToV1Type(r){return r==="FirstPersonOnly"?"firstPersonOnly":r==="ThirdPersonOnly"?"thirdPersonOnly":r==="Both"?"both":"auto"}},gg=new D,vg=new D,yP=new it,xg=class extends Si{constructor(r){super(),this.vrmHumanoid=r,this._boneAxesMap=new Map,Object.values(r.humanBones).forEach(e=>{const t=new kA(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(r=>{r.geometry.dispose(),r.material.dispose()})}updateMatrixWorld(r){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(gg,yP,vg);const n=gg.set(.1,.1,.1).divide(vg);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(r)}},Zh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],SP={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Ox(r){return r.invert?r.invert():r.inverse(),r}var Us=new D,Os=new it,Of=class{constructor(r){this.humanBones=r,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const r={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(Us.copy(n.position),Os.copy(n.quaternion),r[t]={position:Us.toArray(),rotation:Os.toArray()})}),r}getPose(){const r={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;Us.set(0,0,0),Os.identity();const i=this.restPose[t];i?.position&&Us.fromArray(i.position).negate(),i?.rotation&&Ox(Os.fromArray(i.rotation)),Us.add(n.position),Os.premultiply(n.quaternion),r[t]={position:Us.toArray(),rotation:Os.toArray()}}),r}setPose(r){Object.entries(r).forEach(([e,t])=>{const n=e,i=this.getBoneNode(n);if(!i)return;const s=this.restPose[n];s&&(t?.position&&(i.position.fromArray(t.position),s.position&&i.position.add(Us.fromArray(s.position))),t?.rotation&&(i.quaternion.fromArray(t.rotation),s.rotation&&i.quaternion.multiply(Os.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([r,e])=>{const t=this.getBoneNode(r);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(r){var e;return(e=this.humanBones[r])!=null?e:void 0}getBoneNode(r){var e,t;return(t=(e=this.humanBones[r])==null?void 0:e.node)!=null?t:null}},Jh=new D,TP=new it,EP=new D,Mg=class Fx extends Of{static _setupTransforms(e){const t=new kt;t.name="VRMHumanoidRig";const n={},i={},s={};Zh.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=new D,h=new it;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(u,h,Jh),n[a]=u,i[a]=c.quaternion.clone();const d=new it;(l=c.parent)==null||l.matrixWorld.decompose(Jh,d,Jh),s[a]=d}});const o={};return Zh.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=n[a];let h=a,d;for(;d==null&&(h=SP[h],h!=null);)d=n[h];const f=new kt;f.name="Normalized_"+c.name,(h?(l=o[h])==null?void 0:l.node:t).add(f),f.position.copy(u),d&&f.position.sub(d),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:i}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:i,boneRotations:s}=Fx._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=i,this._boneRotations=s}update(){Zh.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),i=this._parentWorldRotations[e],s=TP.copy(i).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(i).premultiply(s).multiply(o),e==="hips"){const a=n.getWorldPosition(EP);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},yg=class Bx{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new Of(e),this._normalizedHumanBones=new Mg(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Of(e.humanBones),this._normalizedHumanBones=new Mg(this._rawHumanBones),this}clone(){return new Bx(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},bP={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},AP=new Set(["1.0","1.0-beta"]),Sg={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},wP=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(r){return St(this,null,function*(){r.userData.vrmHumanoid=yield this._import(r)})}_import(r){return St(this,null,function*(){const e=yield this._v1Import(r);if(e)return e;const t=yield this._v0Import(r);return t||null})}_v1Import(r){return St(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!AP.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>St(this,[h],function*([d,f]){let p=d;const g=f.node;if(l){const _=Sg[p];_!=null&&(p=_)}const m=yield this.parser.getDependency("node",g);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${p} (index = ${g}) does not exist`);return}c[p]={node:m}}))));const u=new yg(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){const h=new xg(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(r){return St(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const i=n.humanoid;if(!i)return null;const s={};i.humanBones!=null&&(yield Promise.all(i.humanBones.map(a=>St(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;const u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const h=Sg[l],d=h??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:u}}))));const o=new yg(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new xg(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(r){const e=Object.values(bP).filter(t=>r[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return r}},Tg=class extends Kt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Tt(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Tt(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,r=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let r=0;r<64;r++){const e=r/63*this._currentTheta;this._attrPos.setXYZ(r+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<63;r++)this._attrIndex.setXYZ(r*3,0,r+1,r+2);this._attrIndex.needsUpdate=!0}},RP=class extends Kt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new D,this._currentTail=new D,this._attrPos=new Tt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Tt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){const e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Uc=new it,Eg=new it,Wa=new D,bg=new D,Ag=Math.sqrt(2)/2,CP=new it(0,0,-Ag,Ag),PP=new D(0,1,0),IP=class extends Si{constructor(r){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=r;{const e=new Tg;e.radius=.5;const t=new Nr({color:65280,transparent:!0,opacity:.5,side:Ni,depthTest:!1,depthWrite:!1});this._meshPitch=new zn(e,t),this.add(this._meshPitch)}{const e=new Tg;e.radius=.5;const t=new Nr({color:16711680,transparent:!0,opacity:.5,side:Ni,depthTest:!1,depthWrite:!1});this._meshYaw=new zn(e,t),this.add(this._meshYaw)}{const e=new RP;e.radius=.1;const t=new po({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Wl(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(r){const e=en.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=en.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Wa),this.vrmLookAt.getLookAtWorldQuaternion(Uc),Uc.multiply(this.vrmLookAt.getFaceFrontQuaternion(Eg)),this._meshYaw.position.copy(Wa),this._meshYaw.quaternion.copy(Uc),this._meshPitch.position.copy(Wa),this._meshPitch.quaternion.copy(Uc),this._meshPitch.quaternion.multiply(Eg.setFromAxisAngle(PP,e)),this._meshPitch.quaternion.multiply(CP);const{target:n,autoUpdate:i}=this.vrmLookAt;n!=null&&i&&(n.getWorldPosition(bg).sub(Wa),this._lineTarget.geometry.tail.copy(bg),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Wa)),super.updateMatrixWorld(r)}},LP=new D,DP=new D;function Ff(r,e){return r.matrixWorld.decompose(LP,e,DP),e}function ru(r){return[Math.atan2(-r.z,r.x),Math.atan2(r.y,Math.sqrt(r.x*r.x+r.z*r.z))]}function wg(r){const e=Math.round(r/2/Math.PI);return r-2*Math.PI*e}var Rg=new D(0,0,1),NP=new D,UP=new D,OP=new D,FP=new it,Qh=new it,Cg=new it,BP=new it,ed=new Ai,kx=class Vx{constructor(e,t){this.offsetFromHeadBone=new D,this.autoUpdate=!0,this.faceFront=new D(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new it)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Ai)}getEuler(e){return e.set(en.DEG2RAD*this._pitch,en.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Vx(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Ff(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(Rg)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=ru(this.faceFront);return ed.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(ed).premultiply(BP.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Qh),this.getFaceFrontQuaternion(Cg),e.copy(Rg).applyQuaternion(Qh).applyQuaternion(Cg).applyEuler(this.getEuler(ed))}lookAt(e){const t=FP.copy(this._restHeadWorldQuaternion).multiply(Ox(this.getLookAtWorldQuaternion(Qh))),n=this.getLookAtWorldPosition(UP),i=OP.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=ru(this.faceFront),[a,l]=ru(i),c=wg(a-s),u=wg(o-l);this._yaw=en.RAD2DEG*c,this._pitch=en.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(NP)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};kx.EULER_ORDER="YXZ";var kP=kx,VP=new D(0,0,1),nr=new it,Oo=new it,Ci=new Ai(0,0,0,"YXZ"),su=class{constructor(r,e,t,n,i){this.humanoid=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i,this.faceFront=new D(0,0,1),this._restQuatLeftEye=new it,this._restQuatRightEye=new it,this._restLeftEyeParentWorldQuat=new it,this._restRightEyeParentWorldQuat=new it;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Ff(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Ff(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(r,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),i=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Ci.x=-en.DEG2RAD*this.rangeMapVerticalDown.map(-e):Ci.x=en.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Ci.y=-en.DEG2RAD*this.rangeMapHorizontalInner.map(-r):Ci.y=en.DEG2RAD*this.rangeMapHorizontalOuter.map(r),nr.setFromEuler(Ci),this._getWorldFaceFrontQuat(Oo),i.quaternion.copy(Oo).multiply(nr).multiply(Oo.invert()),nr.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(i.quaternion).multiply(nr).premultiply(nr.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Ci.x=-en.DEG2RAD*this.rangeMapVerticalDown.map(-e):Ci.x=en.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Ci.y=-en.DEG2RAD*this.rangeMapHorizontalOuter.map(-r):Ci.y=en.DEG2RAD*this.rangeMapHorizontalInner.map(r),nr.setFromEuler(Ci),this._getWorldFaceFrontQuat(Oo),s.quaternion.copy(Oo).multiply(nr).multiply(Oo.invert()),nr.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(nr).premultiply(nr.invert()).multiply(this._restQuatRightEye))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=en.RAD2DEG*r.y,t=en.RAD2DEG*r.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(r){if(this.faceFront.distanceToSquared(VP)<.01)return r.identity();const[e,t]=ru(this.faceFront);return Ci.set(0,.5*Math.PI+e,t,"YZX"),r.setFromEuler(Ci)}};su.type="bone";var Bf=class{constructor(r,e,t,n,i){this.expressions=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i}applyYawPitch(r,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),r<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-r))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(r)))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=en.RAD2DEG*r.y,t=en.RAD2DEG*r.x;this.applyYawPitch(e,t)}};Bf.type="expression";var Pg=class{constructor(r,e){this.inputMaxValue=r,this.outputScale=e}map(r){return this.outputScale*Rx(r/this.inputMaxValue)}},zP=new Set(["1.0","1.0-beta"]),Oc=.01,HP=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot}afterRoot(r){return St(this,null,function*(){const e=r.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=r.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");r.userData.vrmLookAt=yield this._import(r,e,t)}})}_import(r,e,t){return St(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(r,e,t);if(n)return n;const i=yield this._v0Import(r,e,t);return i||null})}_v1Import(r,e,t){return St(this,null,function*(){var n,i,s;const o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const l=(i=o.extensions)==null?void 0:i.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!zP.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const u=l.lookAt;if(!u)return null;const h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),p=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),g=this._v1ImportRangeMap(u.rangeMapVerticalUp,h);let m;u.type==="expression"?m=new Bf(t,d,f,p,g):m=new su(e,d,f,p,g);const _=this._importLookAt(e,m);return _.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),_})}_v1ImportRangeMap(r,e){var t,n;let i=(t=r?.inputMaxValue)!=null?t:90;const s=(n=r?.outputScale)!=null?n:e;return i<Oc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),i=Oc),new Pg(i,s)}_v0Import(r,e,t){return St(this,null,function*(){var n,i,s,o;const l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),p=this._v0ImportDegreeMap(c.lookAtVerticalUp,u);let g;c.lookAtTypeName==="BlendShape"?g=new Bf(t,h,d,f,p):g=new su(e,h,d,f,p);const m=this._importLookAt(e,g);return c.firstPersonBoneOffset?m.offsetFromHeadBone.set((i=c.firstPersonBoneOffset.x)!=null?i:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):m.offsetFromHeadBone.set(0,.06,0),m.faceFront.set(0,0,-1),g instanceof su&&g.faceFront.set(0,0,-1),m})}_v0ImportDegreeMap(r,e){var t,n;const i=r?.curve;JSON.stringify(i)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=r?.xRange)!=null?t:90;const o=(n=r?.yRange)!=null?n:e;return s<Oc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=Oc),new Pg(s,o)}_importLookAt(r,e){const t=new kP(r,e);if(this.helperRoot){const n=new IP(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function GP(r,e){return typeof r!="string"||r===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(r)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(r)||/^data:.*,.*$/i.test(r)||/^blob:.*$/i.test(r)?r:e+r)}var WP=new Set(["1.0","1.0-beta"]),XP=class{get name(){return"VRMMetaLoaderPlugin"}constructor(r,e){var t,n,i;this.parser=r,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(i=e?.acceptV0Meta)!=null?i:!0}afterRoot(r){return St(this,null,function*(){r.userData.vrmMeta=yield this._import(r)})}_import(r){return St(this,null,function*(){const e=yield this._v1Import(r);if(e!=null)return e;const t=yield this._v0Import(r);return t??null})}_v1Import(r){return St(this,null,function*(){var e,t,n;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!WP.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(r){return St(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const i=n.meta;if(!i)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&i.texture!=null&&i.texture!==-1&&(s=yield this.parser.getDependency("texture",i.texture)),{metaVersion:"0",allowedUserName:i.allowedUserName,author:i.author,commercialUssageName:i.commercialUssageName,contactInformation:i.contactInformation,licenseName:i.licenseName,otherLicenseUrl:i.otherLicenseUrl,otherPermissionUrl:i.otherPermissionUrl,reference:i.reference,sexualUssageName:i.sexualUssageName,texture:s??void 0,title:i.title,version:i.version,violentUssageName:i.violentUssageName}})}_extractGLTFImage(r){return St(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[r];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image doesn't exist`),null;let i=n.uri;if(n.bufferView!=null){const o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});i=URL.createObjectURL(a)}return i==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new _x().loadAsync(GP(i,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},qP=class{constructor(r){this.scene=r.scene,this.meta=r.meta,this.humanoid=r.humanoid,this.expressionManager=r.expressionManager,this.firstPerson=r.firstPerson,this.lookAt=r.lookAt}update(r){this.humanoid.update(),this.lookAt&&this.lookAt.update(r),this.expressionManager&&this.expressionManager.update()}},YP=class extends qP{constructor(r){super(r),this.materials=r.materials,this.springBoneManager=r.springBoneManager,this.nodeConstraintManager=r.nodeConstraintManager}update(r){super.update(r),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(r),this.materials&&this.materials.forEach(e=>{e.update&&e.update(r)})}},$P=Object.defineProperty,Ig=Object.getOwnPropertySymbols,jP=Object.prototype.hasOwnProperty,KP=Object.prototype.propertyIsEnumerable,Lg=(r,e,t)=>e in r?$P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Dg=(r,e)=>{for(var t in e||(e={}))jP.call(e,t)&&Lg(r,t,e[t]);if(Ig)for(var t of Ig(e))KP.call(e,t)&&Lg(r,t,e[t]);return r},Ks=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),ZP={"":3e3,srgb:3001};function JP(r,e){parseInt(co,10)>=152?r.colorSpace=e:r.encoding=ZP[e]}var QP=class{get pending(){return Promise.all(this._pendings)}constructor(r,e){this._parser=r,this._materialParams=e,this._pendings=[]}assignPrimitive(r,e){e!=null&&(this._materialParams[r]=e)}assignColor(r,e,t){if(e!=null){const n=new Ye().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[r]=n}}assignTexture(r,e,t){return Ks(this,null,function*(){const n=Ks(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,r,e),t&&JP(this._materialParams[r],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(r,e,t){return Ks(this,null,function*(){return this.assignTexture(r,e!=null?{index:e}:void 0,t)})}},eI=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,tI=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,nI={None:"none"},Ng={None:"none",ScreenCoordinates:"screenCoordinates"},iI={3e3:"",3001:"srgb"};function td(r){return parseInt(co,10)>=152?r.colorSpace:iI[r.encoding]}var rI=class extends Zi{constructor(r={}){var e;super({vertexShader:eI,fragmentShader:tI}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Ep,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=nI.None,this._outlineWidthMode=Ng.None,this._isOutline=!1,r.transparentWithZWrite&&(r.depthWrite=!0),delete r.transparentWithZWrite,r.fog=!0,r.lights=!0,r.clipping=!0,this.uniforms=hx.merge([ge.common,ge.normalmap,ge.emissivemap,ge.fog,ge.lights,{litFactor:{value:new Ye(1,1,1)},mapUvTransform:{value:new je},colorAlpha:{value:1},normalMapUvTransform:{value:new je},shadeColorFactor:{value:new Ye(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new je},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new je},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Ye(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new je},parametricRimColorFactor:{value:new Ye(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new je},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Ye(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new je},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new je},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Ye(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new je},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=r.uniforms)!=null?e:{}]),this.setValues(r),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${td(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${td(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${td(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(co,10),i=Object.entries(Dg(Dg({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=i+t.vertexShader,t.fragmentShader=i+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(r){this.uniforms.litFactor.value=r}get map(){return this.uniforms.map.value}set map(r){this.uniforms.map.value=r}get normalMap(){return this.uniforms.normalMap.value}set normalMap(r){this.uniforms.normalMap.value=r}get normalScale(){return this.uniforms.normalScale.value}set normalScale(r){this.uniforms.normalScale.value=r}get emissive(){return this.uniforms.emissive.value}set emissive(r){this.uniforms.emissive.value=r}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(r){this.uniforms.emissiveIntensity.value=r}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(r){this.uniforms.emissiveMap.value=r}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(r){this.uniforms.shadeColorFactor.value=r}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(r){this.uniforms.shadeMultiplyTexture.value=r}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(r){this.uniforms.shadingShiftFactor.value=r}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(r){this.uniforms.shadingShiftTexture.value=r}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(r){this.uniforms.shadingShiftTextureScale.value=r}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(r){this.uniforms.shadingToonyFactor.value=r}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(r){this.uniforms.giEqualizationFactor.value=r}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(r){this.uniforms.matcapFactor.value=r}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(r){this.uniforms.matcapTexture.value=r}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(r){this.uniforms.parametricRimColorFactor.value=r}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(r){this.uniforms.rimMultiplyTexture.value=r}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(r){this.uniforms.rimLightingMixFactor.value=r}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(r){this.uniforms.parametricRimFresnelPowerFactor.value=r}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(r){this.uniforms.parametricRimLiftFactor.value=r}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(r){this.uniforms.outlineWidthMultiplyTexture.value=r}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(r){this.uniforms.outlineWidthFactor.value=r}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(r){this.uniforms.outlineColorFactor.value=r}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(r){this.uniforms.outlineLightingMixFactor.value=r}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(r){this.uniforms.uvAnimationMaskTexture.value=r}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(r){this.uniforms.uvAnimationScrollXOffset.value=r}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(r){this.uniforms.uvAnimationScrollYOffset.value=r}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(r){this.uniforms.uvAnimationRotationPhase.value=r}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(r){this._ignoreVertexColor=r,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(r){this._v0CompatShade=r,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(r){this._debugMode=r,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(r){this._outlineWidthMode=r,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(r){this._isOutline=r,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(r){this._uploadUniformsWorkaround(),this._updateUVAnimation(r)}copy(r){return super.copy(r),this.map=r.map,this.normalMap=r.normalMap,this.emissiveMap=r.emissiveMap,this.shadeMultiplyTexture=r.shadeMultiplyTexture,this.shadingShiftTexture=r.shadingShiftTexture,this.matcapTexture=r.matcapTexture,this.rimMultiplyTexture=r.rimMultiplyTexture,this.outlineWidthMultiplyTexture=r.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=r.uvAnimationMaskTexture,this.normalMapType=r.normalMapType,this.uvAnimationScrollXSpeedFactor=r.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=r.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=r.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=r.ignoreVertexColor,this.v0CompatShade=r.v0CompatShade,this.debugMode=r.debugMode,this.outlineWidthMode=r.outlineWidthMode,this.isOutline=r.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(r){this.uniforms.uvAnimationScrollXOffset.value+=r*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=r*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=r*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const r=parseInt(co,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:r,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===Ng.ScreenCoordinates}}_updateTextureMatrix(r,e){r.value&&(r.value.matrixAutoUpdate&&r.value.updateMatrix(),e.value.copy(r.value.matrix))}},sI=new Set(["1.0","1.0-beta"]),zx=class ou{get name(){return ou.EXTENSION_NAME}constructor(e,t={}){var n,i,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:rI,this.renderOrderOffset=(i=t.renderOrderOffset)!=null?i:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ks(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ks(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Ks(this,null,function*(){var t;const n=this.parser,s=(t=n.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n?.map((i,s)=>{var o;this._getMToonExtension(s)&&((o=i.extensions)!=null&&o.KHR_materials_unlit)&&delete i.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[ou.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!sI.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${ou.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return Ks(this,null,function*(){var n;delete t.metalness,delete t.roughness;const i=new QP(this.parser,t);i.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),i.assignColor("shadeColorFactor",e.shadeColorFactor),i.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),i.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),i.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),i.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),i.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),i.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),i.assignColor("matcapFactor",e.matcapFactor),i.assignTexture("matcapTexture",e.matcapTexture,!0),i.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),i.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),i.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),i.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),i.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),i.assignPrimitive("outlineWidthMode",e.outlineWidthMode),i.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),i.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),i.assignColor("outlineColorFactor",e.outlineColorFactor),i.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),i.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),i.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),i.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),i.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),i.assignPrimitive("v0CompatShade",this.v0CompatShade),i.assignPrimitive("debugMode",this.debugMode),yield i.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const i=this._parseRenderOrder(n);e.renderOrder=i+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof ji)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=Qn,e.material.push(n);const i=e.geometry,s=i.index?i.index.count:i.attributes.position.count/3;i.addGroup(0,s,0),i.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(i=>n.add(i)):n.add(t);for(const i of n)this._mToonMaterialSet.add(i)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};zx.EXTENSION_NAME="VRMC_materials_mtoon";var oI=zx,aI=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Hx=class kf{get name(){return kf.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return aI(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const i=n.emissiveMultiplier;t.emissiveIntensity=i})}_getHDREmissiveMultiplierExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[kf.EXTENSION_NAME];if(a!=null)return a}};Hx.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var lI=Hx,cI=Object.defineProperty,uI=Object.defineProperties,hI=Object.getOwnPropertyDescriptors,Ug=Object.getOwnPropertySymbols,dI=Object.prototype.hasOwnProperty,fI=Object.prototype.propertyIsEnumerable,Og=(r,e,t)=>e in r?cI(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ir=(r,e)=>{for(var t in e||(e={}))dI.call(e,t)&&Og(r,t,e[t]);if(Ug)for(var t of Ug(e))fI.call(e,t)&&Og(r,t,e[t]);return r},Fg=(r,e)=>uI(r,hI(e)),pI=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});function Fo(r){return Math.pow(r,2.2)}var mI=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(r){var e;this.parser=r,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return pI(this,null,function*(){var r;const e=this.parser.json,t=(r=e.extensions)==null?void 0:r.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((i,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(i.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(i,l);e.materials[s]=c}else if((a=i.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(i,l);e.materials[s]=c}else i.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${i.shader}`)}))})}_parseV0MToonProperties(r,e){var t,n,i,s,o,a,l,c,u,h,d,f,p,g,m,_,v,y,M,T,b,A,x,S,R,C,L,N,k,H,V,O,q,Y,P,re,ae,Ne,Oe,Ve,J,F,$,te,se,de,Ee,oe,ce,be,Ie,X,B,gt,tt;const Ge=(n=(t=r.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,I=((i=r.floatProperties)==null?void 0:i._ZWrite)===1&&Ge,E=this._v0ParseRenderQueue(r),G=(o=(s=r.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,ne=Ge?"BLEND":G?"MASK":"OPAQUE",ie=G?(l=(a=r.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,ve=((u=(c=r.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,ue=this._portTextureTransform(r),Ce=((d=(h=r.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((wi,Yr)=>Yr===3?wi:Fo(wi)),Ae=(f=r.textureProperties)==null?void 0:f._MainTex,he=Ae!=null?{index:Ae,extensions:ir({},ue)}:void 0,pe=(g=(p=r.floatProperties)==null?void 0:p._BumpScale)!=null?g:1,Pe=(m=r.textureProperties)==null?void 0:m._BumpMap,Le=Pe!=null?{index:Pe,scale:pe,extensions:ir({},ue)}:void 0,_e=((v=(_=r.vectorProperties)==null?void 0:_._EmissionColor)!=null?v:[0,0,0,1]).map(Fo),$e=(y=r.textureProperties)==null?void 0:y._EmissionMap,U=$e!=null?{index:$e,extensions:ir({},ue)}:void 0,me=((T=(M=r.vectorProperties)==null?void 0:M._ShadeColor)!=null?T:[.97,.81,.86,1]).map(Fo),fe=(b=r.textureProperties)==null?void 0:b._ShadeTexture,xe=fe!=null?{index:fe,extensions:ir({},ue)}:void 0;let le=(x=(A=r.floatProperties)==null?void 0:A._ShadeShift)!=null?x:0,ee=(R=(S=r.floatProperties)==null?void 0:S._ShadeToony)!=null?R:.9;ee=en.lerp(ee,1,.5+.5*le),le=-le-(1-ee);const De=(L=(C=r.floatProperties)==null?void 0:C._IndirectLightIntensity)!=null?L:.1,We=De?1-De:void 0,vt=(N=r.textureProperties)==null?void 0:N._SphereAdd,we=vt!=null?[1,1,1]:void 0,ke=vt!=null?{index:vt}:void 0,rt=(H=(k=r.floatProperties)==null?void 0:k._RimLightingMix)!=null?H:0,Me=(V=r.textureProperties)==null?void 0:V._RimTexture,Ke=Me!=null?{index:Me,extensions:ir({},ue)}:void 0,Xe=((q=(O=r.vectorProperties)==null?void 0:O._RimColor)!=null?q:[0,0,0,1]).map(Fo),Je=(P=(Y=r.floatProperties)==null?void 0:Y._RimFresnelPower)!=null?P:1,Xt=(ae=(re=r.floatProperties)==null?void 0:re._RimLift)!=null?ae:0,nt=["none","worldCoordinates","screenCoordinates"][(Oe=(Ne=r.floatProperties)==null?void 0:Ne._OutlineWidthMode)!=null?Oe:0];let Ct=(J=(Ve=r.floatProperties)==null?void 0:Ve._OutlineWidth)!=null?J:0;Ct=.01*Ct;const Zt=(F=r.textureProperties)==null?void 0:F._OutlineWidthTexture,Ut=Zt!=null?{index:Zt,extensions:ir({},ue)}:void 0,Et=((te=($=r.vectorProperties)==null?void 0:$._OutlineColor)!=null?te:[0,0,0]).map(Fo),Mn=((de=(se=r.floatProperties)==null?void 0:se._OutlineColorMode)!=null?de:0)===1?(oe=(Ee=r.floatProperties)==null?void 0:Ee._OutlineLightingMix)!=null?oe:1:0,Pt=(ce=r.textureProperties)==null?void 0:ce._UvAnimMaskTexture,yn=Pt!=null?{index:Pt,extensions:ir({},ue)}:void 0,ti=(Ie=(be=r.floatProperties)==null?void 0:be._UvAnimScrollX)!=null?Ie:0;let Gt=(B=(X=r.floatProperties)==null?void 0:X._UvAnimScrollY)!=null?B:0;Gt!=null&&(Gt=-Gt);const nn=(tt=(gt=r.floatProperties)==null?void 0:gt._UvAnimRotation)!=null?tt:0,ln={specVersion:"1.0",transparentWithZWrite:I,renderQueueOffsetNumber:E,shadeColorFactor:me,shadeMultiplyTexture:xe,shadingShiftFactor:le,shadingToonyFactor:ee,giEqualizationFactor:We,matcapFactor:we,matcapTexture:ke,rimLightingMixFactor:rt,rimMultiplyTexture:Ke,parametricRimColorFactor:Xe,parametricRimFresnelPowerFactor:Je,parametricRimLiftFactor:Xt,outlineWidthMode:nt,outlineWidthFactor:Ct,outlineWidthMultiplyTexture:Ut,outlineColorFactor:Et,outlineLightingMixFactor:Mn,uvAnimationMaskTexture:yn,uvAnimationScrollXSpeedFactor:ti,uvAnimationScrollYSpeedFactor:Gt,uvAnimationRotationSpeedFactor:nn};return Fg(ir({},e),{pbrMetallicRoughness:{baseColorFactor:Ce,baseColorTexture:he},normalTexture:Le,emissiveTexture:U,emissiveFactor:_e,alphaMode:ne,alphaCutoff:ie,doubleSided:ve,extensions:{VRMC_materials_mtoon:ln}})}_parseV0UnlitProperties(r,e){var t,n,i,s,o;const a=r.shader==="VRM/UnlitTransparentZWrite",l=r.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(r),u=r.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=r.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(r),p=((s=(i=r.vectorProperties)==null?void 0:i._Color)!=null?s:[1,1,1,1]).map(Fo),g=(o=r.textureProperties)==null?void 0:o._MainTex,m=g!=null?{index:g,extensions:ir({},f)}:void 0,_={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:p,shadeMultiplyTexture:m};return Fg(ir({},e),{pbrMetallicRoughness:{baseColorFactor:p,baseColorTexture:m},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:_}})}_portTextureTransform(r){var e,t,n,i,s;const o=(e=r.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(i=o?.[2])!=null?i:1,(s=o?.[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(r){var e,t;const n=r.shader==="VRM/UnlitTransparentZWrite",i=((e=r.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||r.shader==="VRM/UnlitTransparent"||n,s=((t=r.floatProperties)==null?void 0:t._ZWrite)===1||n;let o=0;if(i){const a=r.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(r){const e=new Set,t=new Set;r.forEach(n=>{var i,s;const o=n.shader==="VRM/UnlitTransparentZWrite",a=((i=n.keywordMap)==null?void 0:i._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,i)=>{const s=Math.min(Math.max(i-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,i)=>{const s=Math.min(Math.max(i,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},Bg=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),rs=new D,nd=class extends Si{constructor(r){super(),this._attrPosition=new Tt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(nb);const e=new Kt;e.setAttribute("position",this._attrPosition);const t=new po({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Vu(e,t),this.add(this._line),this.constraint=r}updateMatrixWorld(r){rs.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,rs.x,rs.y,rs.z),this.constraint.source&&rs.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,rs.x,rs.y,rs.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(r)}};function kg(r,e){return e.set(r.elements[12],r.elements[13],r.elements[14])}var _I=new D,gI=new D;function vI(r,e){return r.decompose(_I,e,gI),e}function wu(r){return r.invert?r.invert():r.inverse(),r}var Fp=class{constructor(r,e){this.destination=r,this.source=e,this.weight=1}},xI=new D,MI=new D,yI=new D,SI=new it,TI=new it,EI=new it,bI=class extends Fp{get aimAxis(){return this._aimAxis}set aimAxis(r){this._aimAxis=r,this._v3AimAxis.set(r==="PositiveX"?1:r==="NegativeX"?-1:0,r==="PositiveY"?1:r==="NegativeY"?-1:0,r==="PositiveZ"?1:r==="NegativeZ"?-1:0)}get dependencies(){const r=new Set([this.source]);return this.destination.parent&&r.add(this.destination.parent),r}constructor(r,e){super(r,e),this._aimAxis="PositiveX",this._v3AimAxis=new D(1,0,0),this._dstRestQuat=new it}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const r=SI.identity(),e=TI.identity();this.destination.parent&&(vI(this.destination.parent.matrixWorld,r),wu(e.copy(r)));const t=xI.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(r),n=kg(this.source.matrixWorld,MI).sub(kg(this.destination.matrixWorld,yI)).normalize(),i=EI.setFromUnitVectors(t,n).premultiply(e).multiply(r).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}};function AI(r,e){const t=[r];let n=r.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}var wI=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(r){this._constraints.add(r);let e=this._objectConstraintsMap.get(r.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(r.destination,e)),e.add(r)}deleteConstraint(r){this._constraints.delete(r),this._objectConstraintsMap.get(r.destination).delete(r)}setInitState(){const r=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,r,e,n=>n.setInitState())}update(){const r=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,r,e,n=>n.update())}_processConstraint(r,e,t,n){if(t.has(r))return;if(e.has(r))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(r);const i=r.dependencies;for(const s of i)AI(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,n)});n(r),t.add(r)}},RI=new it,CI=new it,PI=class extends Fp{get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._dstRestQuat=new it,this._invSrcRestQuat=new it}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),wu(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const r=RI.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=CI.copy(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},II=new D,LI=new it,DI=new it,NI=class extends Fp{get rollAxis(){return this._rollAxis}set rollAxis(r){this._rollAxis=r,this._v3RollAxis.set(r==="X"?1:0,r==="Y"?1:0,r==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._rollAxis="X",this._v3RollAxis=new D(1,0,0),this._dstRestQuat=new it,this._invDstRestQuat=new it,this._invSrcRestQuatMulDstRestQuat=new it}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),wu(this._invDstRestQuat.copy(this._dstRestQuat)),wu(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const r=LI.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=II.copy(this._v3RollAxis).applyQuaternion(r),n=DI.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},UI=new Set(["1.0","1.0-beta"]),Gx=class ol{get name(){return ol.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return Bg(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return Bg(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(ol.EXTENSION_NAME))!==-1))return null;const s=new wI,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const u=n.nodes[l],h=(c=u?.extensions)==null?void 0:c[ol.EXTENSION_NAME];if(h==null)return;const d=h.specVersion;if(!UI.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${ol.EXTENSION_NAME} specVersion "${d}"`);return}const f=h.constraint;if(f.roll!=null){const p=this._importRollConstraint(a,o,f.roll);s.addConstraint(p)}else if(f.aim!=null){const p=this._importAimConstraint(a,o,f.aim);s.addConstraint(p)}else if(f.rotation!=null){const p=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(p)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){const{source:i,rollAxis:s,weight:o}=n,a=t[i],l=new NI(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new nd(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){const{source:i,aimAxis:s,weight:o}=n,a=t[i],l=new bI(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new nd(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){const{source:i,weight:s}=n,o=t[i],a=new PI(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new nd(a);this.helperRoot.add(l)}return a}};Gx.EXTENSION_NAME="VRMC_node_constraint";var OI=Gx,Fc=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Bp=class{},id=new D,Fs=new D,Wx=class extends Bp{get type(){return"capsule"}constructor(r){var e,t,n,i;super(),this.offset=(e=r?.offset)!=null?e:new D(0,0,0),this.tail=(t=r?.tail)!=null?t:new D(0,0,0),this.radius=(n=r?.radius)!=null?n:0,this.inside=(i=r?.inside)!=null?i:!1}calculateCollision(r,e,t,n){id.setFromMatrixPosition(r),Fs.subVectors(this.tail,this.offset).applyMatrix4(r),Fs.sub(id);const i=Fs.lengthSq();n.copy(e).sub(id);const s=Fs.dot(n);s<=0||(i<=s||Fs.multiplyScalar(s/i),n.sub(Fs));const o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},rd=new D,Vg=new je,Xx=class extends Bp{get type(){return"plane"}constructor(r){var e,t;super(),this.offset=(e=r?.offset)!=null?e:new D(0,0,0),this.normal=(t=r?.normal)!=null?t:new D(0,0,1)}calculateCollision(r,e,t,n){n.setFromMatrixPosition(r),n.negate().add(e),Vg.getNormalMatrix(r),rd.copy(this.normal).applyNormalMatrix(Vg).normalize();const i=n.dot(rd)-t;return n.copy(rd),i}},FI=new D,qx=class extends Bp{get type(){return"sphere"}constructor(r){var e,t,n;super(),this.offset=(e=r?.offset)!=null?e:new D(0,0,0),this.radius=(t=r?.radius)!=null?t:0,this.inside=(n=r?.inside)!=null?n:!1}calculateCollision(r,e,t,n){n.subVectors(e,FI.setFromMatrixPosition(r));const i=n.length(),s=this.inside?this.radius-t-i:i-t-this.radius;return s<0&&(n.multiplyScalar(1/i),this.inside&&n.negate()),s}},rr=new D,BI=class extends Kt{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new D,this._currentTail=new D,this._shape=r,this._attrPos=new Tt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Tt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0);const t=rr.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),r=!0),r&&this._buildPosition()}_buildPosition(){rr.copy(this._currentTail).sub(this._currentOffset);const r=rr.length()/this._currentRadius;for(let n=0;n<=16;n++){const i=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(i),-Math.cos(i),0),this._attrPos.setXYZ(17+n,r+Math.sin(i),Math.cos(i),0),this._attrPos.setXYZ(34+n,-Math.sin(i),0,-Math.cos(i)),this._attrPos.setXYZ(51+n,r+Math.sin(i),0,Math.cos(i))}for(let n=0;n<32;n++){const i=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(i),Math.cos(i)),this._attrPos.setXYZ(100+n,r,Math.sin(i),Math.cos(i))}const e=Math.atan2(rr.y,Math.sqrt(rr.x*rr.x+rr.z*rr.z)),t=-Math.atan2(rr.z,rr.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<34;r++){const e=(r+1)%34;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(68+r*2,34+r,34+e)}for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(136+r*2,68+r,68+e),this._attrIndex.setXY(200+r*2,100+r,100+e)}this._attrIndex.needsUpdate=!0}},kI=class extends Kt{constructor(r){super(),this.worldScale=1,this._currentOffset=new D,this._currentNormal=new D,this._shape=r,this._attrPos=new Tt(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Tt(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},VI=class extends Kt{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new D,this._shape=r,this._attrPos=new Tt(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Tt(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){const e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.needsUpdate=!0}},zI=new D,sd=class extends Si{constructor(r){if(super(),this.matrixAutoUpdate=!1,this.collider=r,this.collider.shape instanceof qx)this._geometry=new VI(this.collider.shape);else if(this.collider.shape instanceof Wx)this._geometry=new BI(this.collider.shape);else if(this.collider.shape instanceof Xx)this._geometry=new kI(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new po({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Wl(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=zI.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},HI=class extends Kt{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new D,this._springBone=r,this._attrPos=new Tt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Tt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){const e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},GI=new D,WI=class extends Si{constructor(r){super(),this.matrixAutoUpdate=!1,this.springBone=r,this._geometry=new HI(this.springBone);const e=new po({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Wl(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=GI.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},od=class extends kt{constructor(r){super(),this.colliderMatrix=new Ze,this.shape=r}updateWorldMatrix(r,e){super.updateWorldMatrix(r,e),XI(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function XI(r,e,t){const n=e.elements;r.copy(e),t&&(r.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],r.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],r.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var qI=new Ze;function YI(r){return r.invert?r.invert():r.getInverse(qI.copy(r)),r}var $I=class{constructor(r){this._inverseCache=new Ze,this._shouldUpdateInverse=!0,this.matrix=r;const e={set:(t,n,i)=>(this._shouldUpdateInverse=!0,t[n]=i,!0)};this._originalElements=r.elements,r.elements=new Proxy(r.elements,e)}get inverse(){return this._shouldUpdateInverse&&(YI(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},ad=new Ze,Bo=new D,Xa=new D,qa=new D,Ya=new D,jI=new Ze,KI=class{constructor(r,e,t={},n=[]){this._currentTail=new D,this._prevTail=new D,this._boneAxis=new D,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Ze,this._initialLocalRotation=new it,this._initialLocalChildPosition=new D;var i,s,o,a,l,c;this.bone=r,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(i=t.hitRadius)!=null?i:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new D(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){const r=new Set,e=this.bone.parent;e&&r.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)r.add(this.colliderGroups[t].colliders[n]);return r}get center(){return this._center}set center(r){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=r,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new $I(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:ad}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail)}update(r){if(r<=0)return;this._calcWorldSpaceBoneLength();const e=Xa.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Ya.copy(this._currentTail).add(Bo.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*r).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*r),qa.setFromMatrixPosition(this.bone.matrixWorld),Ya.sub(qa).normalize().multiplyScalar(this._worldSpaceBoneLength).add(qa),this._collision(Ya),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ya).applyMatrix4(this._getMatrixWorldToCenter());const t=jI.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Bo.copy(Ya).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(r){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const n=this.colliderGroups[e].colliders[t],i=n.shape.calculateCollision(n.colliderMatrix,r,this.settings.hitRadius,Bo);if(i<0){r.addScaledVector(Bo,-i),r.sub(qa);const s=r.length();r.multiplyScalar(this._worldSpaceBoneLength/s).add(qa)}}}_calcWorldSpaceBoneLength(){Bo.setFromMatrixPosition(this.bone.matrixWorld),this.child?Xa.setFromMatrixPosition(this.child.matrixWorld):(Xa.copy(this._initialLocalChildPosition),Xa.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Bo.sub(Xa).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:ad}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:ad}};function ZI(r,e){const t=[];let n=r;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}function Vf(r,e){r.children.forEach(t=>{e(t)||Vf(t,e)})}function JI(r){var e;const t=new Map;for(const n of r){let i=n;do{const s=((e=t.get(i))!=null?e:0)+1;if(s===r.size)return i;t.set(i,s),i=i.parent}while(i!==null)}return null}var zg=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const r=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{r.add(t)})}),Array.from(r)}get colliders(){const r=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{r.add(t)})}),Array.from(r)}addJoint(r){this._joints.add(r);let e=this._objectSpringBonesMap.get(r.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(r.bone,e)),e.add(r),this._isSortedJointsDirty=!0}addSpringBone(r){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(r)}deleteJoint(r){this._joints.delete(r),this._objectSpringBonesMap.get(r.bone).delete(r),this._isSortedJointsDirty=!0}deleteSpringBone(r){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(r)}setInitState(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){const e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){const e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(r){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(r),Vf(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const r=[],e=new Set,t=new Set,n=new Set;for(const s of this._joints)this._insertJointSort(s,e,t,r,n);this._sortedJoints=r;const i=JI(n);this._ancestors=[],i&&(this._ancestors.push(i),Vf(i,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(r,e,t,n,i){if(t.has(r))return;if(e.has(r)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(r);const s=r.dependencies;for(const o of s){let a=!1,l=null;ZI(o,c=>{const u=this._objectSpringBonesMap.get(c);if(u)for(const h of u)a=!0,this._insertJointSort(h,e,t,n,i);else a||(l=c)}),l&&i.add(l)}n.push(r),t.add(r)}_relevantChildrenUpdated(r){var e,t;return((t=(e=this._objectSpringBonesMap.get(r))==null?void 0:e.size)!=null?t:0)>0?!0:(r.updateWorldMatrix(!1,!1),!1)}},Hg="VRMC_springBone_extended_collider",QI=new Set(["1.0","1.0-beta"]),eL=new Set(["1.0"]),Yx=class Wo{get name(){return Wo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return Fc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Fc(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return Fc(this,null,function*(){var t,n,i,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Wo.EXTENSION_NAME))!==-1))return null;const c=new zg,u=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[Wo.EXTENSION_NAME];if(!h)return null;const d=h.specVersion;if(!QI.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Wo.EXTENSION_NAME} specVersion "${d}"`),null;const f=(i=h.colliders)==null?void 0:i.map((g,m)=>{var _,v,y,M,T,b,A,x,S,R,C,L,N,k,H;const V=u[g.node];if(V==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${m} attempted to use the node #${g.node} but not found`),null;const O=g.shape,q=(_=g.extensions)==null?void 0:_[Hg];if(this.useExtendedColliders&&q!=null){const Y=q.specVersion;if(!eL.has(Y))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Hg} specVersion "${Y}". Fallbacking to the ${Wo.EXTENSION_NAME} definition`);else{const P=q.shape;if(P.sphere)return this._importSphereCollider(V,{offset:new D().fromArray((v=P.sphere.offset)!=null?v:[0,0,0]),radius:(y=P.sphere.radius)!=null?y:0,inside:(M=P.sphere.inside)!=null?M:!1});if(P.capsule)return this._importCapsuleCollider(V,{offset:new D().fromArray((T=P.capsule.offset)!=null?T:[0,0,0]),radius:(b=P.capsule.radius)!=null?b:0,tail:new D().fromArray((A=P.capsule.tail)!=null?A:[0,0,0]),inside:(x=P.capsule.inside)!=null?x:!1});if(P.plane)return this._importPlaneCollider(V,{offset:new D().fromArray((S=P.plane.offset)!=null?S:[0,0,0]),normal:new D().fromArray((R=P.plane.normal)!=null?R:[0,0,1])})}}if(O.sphere)return this._importSphereCollider(V,{offset:new D().fromArray((C=O.sphere.offset)!=null?C:[0,0,0]),radius:(L=O.sphere.radius)!=null?L:0,inside:!1});if(O.capsule)return this._importCapsuleCollider(V,{offset:new D().fromArray((N=O.capsule.offset)!=null?N:[0,0,0]),radius:(k=O.capsule.radius)!=null?k:0,tail:new D().fromArray((H=O.capsule.tail)!=null?H:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${m} has no valid shape`)}),p=(s=h.colliderGroups)==null?void 0:s.map((g,m)=>{var _;return{colliders:((_=g.colliders)!=null?_:[]).flatMap(y=>{const M=f?.[y];return M??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${m} attempted to use a collider #${y} but not found`),[])}),name:g.name}});return(o=h.springs)==null||o.forEach((g,m)=>{var _;const v=g.joints,y=(_=g.colliderGroups)==null?void 0:_.map(b=>{const A=p?.[b];if(A==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${b} but not found`);return A}),M=g.center!=null?u[g.center]:void 0;let T;v.forEach(b=>{if(T){const A=T.node,x=u[A],S=b.node,R=u[S],C={hitRadius:T.hitRadius,dragForce:T.dragForce,gravityPower:T.gravityPower,stiffness:T.stiffness,gravityDir:T.gravityDir!=null?new D().fromArray(T.gravityDir):void 0},L=this._importJoint(x,R,C,y);M&&(L.center=M),c.addJoint(L)}T=b})}),c.setInitState(),c})}_v0Import(e){return Fc(this,null,function*(){var t,n,i;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(n=s.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;const c=l?.boneGroups;if(!c)return null;const u=new zg,h=yield e.parser.getDependencies("node"),d=(i=l.colliderGroups)==null?void 0:i.map(f=>{var p;const g=h[f.node];return{colliders:((p=f.colliders)!=null?p:[]).map((_,v)=>{var y,M,T;const b=new D(0,0,0);return _.offset&&b.set((y=_.offset.x)!=null?y:0,(M=_.offset.y)!=null?M:0,_.offset.z?-_.offset.z:0),this._importSphereCollider(g,{offset:b,radius:(T=_.radius)!=null?T:0,inside:!1})})}});return c?.forEach((f,p)=>{const g=f.bones;g&&g.forEach(m=>{var _,v,y,M;const T=h[m],b=new D;f.gravityDir?b.set((_=f.gravityDir.x)!=null?_:0,(v=f.gravityDir.y)!=null?v:0,(y=f.gravityDir.z)!=null?y:0):b.set(0,-1,0);const A=f.center!=null?h[f.center]:void 0,x={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:b},S=(M=f.colliderGroups)==null?void 0:M.map(R=>{const C=d?.[R];if(C==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${R} but not found`);return C});T.traverse(R=>{var C;const L=(C=R.children[0])!=null?C:null,N=this._importJoint(R,L,x,S);A&&(N.center=A),u.addJoint(N)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,i){const s=new KI(e,t,n,i);if(this.jointHelperRoot){const o=new WI(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const n=new qx(t),i=new od(n);if(e.add(i),this.colliderHelperRoot){const s=new sd(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importCapsuleCollider(e,t){const n=new Wx(t),i=new od(n);if(e.add(i),this.colliderHelperRoot){const s=new sd(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importPlaneCollider(e,t){const n=new Xx(t),i=new od(n);if(e.add(i),this.colliderHelperRoot){const s=new sd(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}};Yx.EXTENSION_NAME="VRMC_springBone";var tL=Yx,nL=class{get name(){return"VRMLoaderPlugin"}constructor(r,e){var t,n,i,s,o,a,l,c,u,h;this.parser=r;const d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new vP(r),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new MP(r),this.humanoidPlugin=(i=e?.humanoidPlugin)!=null?i:new wP(r,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e?.lookAtPlugin)!=null?s:new HP(r,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new XP(r),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new oI(r),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new lI(r),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new mI(r),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new tL(r,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new OI(r,{helperRoot:d})}beforeRoot(){return Nc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(r){return Nc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(r)})}getMaterialType(r){const e=this.mtoonMaterialPlugin.getMaterialType(r);return e??null}extendMaterialParams(r,e){return Nc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(r,e),yield this.mtoonMaterialPlugin.extendMaterialParams(r,e)})}afterRoot(r){return Nc(this,null,function*(){yield this.metaPlugin.afterRoot(r),yield this.humanoidPlugin.afterRoot(r),yield this.expressionPlugin.afterRoot(r),yield this.lookAtPlugin.afterRoot(r),yield this.firstPersonPlugin.afterRoot(r),yield this.springBonePlugin.afterRoot(r),yield this.nodeConstraintPlugin.afterRoot(r),yield this.mtoonMaterialPlugin.afterRoot(r);const e=r.userData.vrmMeta,t=r.userData.vrmHumanoid;if(e&&t){const n=new YP({scene:r.scene,expressionManager:r.userData.vrmExpressionManager,firstPerson:r.userData.vrmFirstPerson,humanoid:t,lookAt:r.userData.vrmLookAt,meta:e,materials:r.userData.vrmMToonMaterials,springBoneManager:r.userData.vrmSpringBoneManager,nodeConstraintManager:r.userData.vrmNodeConstraintManager});r.userData.vrm=n}})}};function iL(r){const e=new Set;return r.traverse(t=>{if(!t.isMesh)return;const n=t;e.add(n)}),e}function Gg(r,e,t){if(e.size===1){const o=e.values().next().value;if(o.weight===1)return r[o.index]}const n=new Float32Array(r[0].count*3);let i=0;if(t)i=1;else for(const o of e)i+=o.weight;for(const o of e){const a=r[o.index],l=o.weight/i;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new Tt(n,3)}function rL(r){var e;const t=iL(r.scene),n=new Map,i=(e=r.expressionManager)==null?void 0:e.expressionMap;if(i!=null)for(const[s,o]of Object.entries(i)){const a=new Set;for(const l of o.binds)if(l instanceof Au){if(l.weight!==0)for(const c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(const l of a)o.deleteBind(l)}for(const s of t){const o=n.get(s);if(o==null)continue;const a=s.geometry.morphAttributes;s.geometry.morphAttributes={};const l=s.geometry.clone();s.geometry=l;const c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},p=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let g=0;for(const[m,_]of o)u&&(d.position[g]=Gg(a.position,_,c)),h&&(d.normal[g]=Gg(a.normal,_,c)),i?.[m].addBind(new Au({index:g,weight:1,primitives:[s]})),f[m]=g,p.push(0),g++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=p}}function Ru(r,e,t){if(r.getComponent)return r.getComponent(e,t);{let n=r.array[e*r.itemSize+t];return r.normalized&&(n=en.denormalize(n,r.array)),n}}function $x(r,e,t,n){r.setComponent?r.setComponent(e,t,n):(r.normalized&&(n=en.normalize(n,r.array)),r.array[e*r.itemSize+t]=n)}function sL(r){var e;const t=oL(r),n=new Set;for(const h of t)n.has(h.geometry)&&(h.geometry=dL(h.geometry)),n.add(h.geometry);const i=new Map;for(const h of n){const d=h.getAttribute("skinIndex"),f=(e=i.get(d))!=null?e:new Map;i.set(d,f);const p=h.getAttribute("skinWeight"),g=aL(d,p);f.set(p,g)}const s=new Map;for(const h of t){const d=lL(h,i);s.set(h,d)}const o=[];for(const[h,d]of s){let f=!1;for(const p of o)if(cL(d,p.boneInverseMap)){f=!0,p.meshes.add(h);for(const[m,_]of d)p.boneInverseMap.set(m,_);break}f||o.push({boneInverseMap:d,meshes:new Set([h])})}const a=new Map,l=new ld,c=new ld,u=new ld;for(const h of o){const{boneInverseMap:d,meshes:f}=h,p=Array.from(d.keys()),g=Array.from(d.values()),m=new Ta(p,g),_=c.getOrCreate(m);for(const v of f){const y=v.geometry.getAttribute("skinIndex"),M=l.getOrCreate(y),T=v.skeleton.bones,b=T.map(S=>u.getOrCreate(S)).join(","),A=`${M};${_};${b}`;let x=a.get(A);x==null&&(x=y.clone(),uL(x,T,p),a.set(A,x)),v.geometry.setAttribute("skinIndex",x)}for(const v of f)v.bind(m,new Ze)}}function oL(r){const e=new Set;return r.traverse(t=>{if(!t.isSkinnedMesh)return;const n=t;e.add(n)}),e}function aL(r,e){const t=new Set;for(let n=0;n<r.count;n++)for(let i=0;i<r.itemSize;i++){const s=Ru(r,n,i);Ru(e,n,i)!==0&&t.add(s)}return t}function lL(r,e){const t=new Map,n=r.skeleton,i=r.geometry,s=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight"),a=e.get(s),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function cL(r,e){for(const[t,n]of r.entries()){const i=e.get(t);if(i!=null&&!hL(n,i))return!1}return!0}function uL(r,e,t){const n=new Map;for(const s of e)n.set(s,n.size);const i=new Map;for(const[s,o]of t.entries()){const a=n.get(o);i.set(a,s)}for(let s=0;s<r.count;s++)for(let o=0;o<r.itemSize;o++){const a=Ru(r,s,o),l=i.get(a);$x(r,s,o,l)}r.needsUpdate=!0}function hL(r,e,t){if(t=t||1e-4,r.elements.length!=e.elements.length)return!1;for(let n=0,i=r.elements.length;n<i;n++)if(Math.abs(r.elements[n]-e.elements[n])>t)return!1;return!0}var ld=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(r){return this._objectIndexMap.get(r)}getOrCreate(r){let e=this._objectIndexMap.get(r);return e==null&&(e=this._index,this._objectIndexMap.set(r,e),this._index++),e}};function dL(r){var e,t,n,i;const s=new Kt;s.name=r.name,s.setIndex(r.index);for(const[o,a]of Object.entries(r.attributes))s.setAttribute(o,a);for(const[o,a]of Object.entries(r.morphAttributes)){const l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=r.morphTargetsRelative,s.groups=[];for(const o of r.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=r.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(i=(n=r.boundingBox)==null?void 0:n.clone())!=null?i:null,s.drawRange.start=r.drawRange.start,s.drawRange.count=r.drawRange.count,s.userData=r.userData,s}function Wg(r){if(Object.values(r).forEach(e=>{e?.isTexture&&e.dispose()}),r.isShaderMaterial){const e=r.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n?.isTexture&&n.dispose()})}r.dispose()}function fL(r){const e=r.geometry;e&&e.dispose();const t=r.skeleton;t&&t.dispose();const n=r.material;n&&(Array.isArray(n)?n.forEach(i=>Wg(i)):n&&Wg(n))}function pL(r){r.traverse(fL)}function mL(r,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const i=(t=e?.experimentalSameBoneCounts)!=null?t:!1,s=[];r.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});const o=new Map;let a=0;for(const l of s){const u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;const h=new Map,d=new Map;for(let f=0;f<u.count;f++)for(let p=0;p<u.itemSize;p++){const g=Ru(u,f,p);let m=h.get(g);m==null&&(m=h.size,h.set(g,m),d.set(m,g)),$x(u,f,p,m)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(const l of s){const u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],f=[],p=i?a:h.size;for(let m=0;m<p;m++){const _=(n=h.get(m))!=null?n:0;d.push(l.skeleton.bones[_]),f.push(l.skeleton.boneInverses[_])}const g=new Ta(d,f);l.bind(g,new Ze)}}function _L(r,e){const t=r.position.count,n=new Array(t);let i=0;const s=e.array;for(let o=0;o<s.length;o++){const a=s[o];n[a]||(n[a]=!0,i++)}return{isVertexUsed:n,vertexCount:t,verticesUsed:i}}function gL(r){const e=[],t=[];let n=0;for(let i=0;i<r.length;i++)if(r[i]){const s=n++;e[i]=s,t[s]=i}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function vL(r,e){var t,n,i,s;e.name=r.name,e.morphTargetsRelative=r.morphTargetsRelative,r.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(n=(t=r.boundingBox)==null?void 0:t.clone())!=null?n:null,e.boundingSphere=(s=(i=r.boundingSphere)==null?void 0:i.clone())!=null?s:null,e.setDrawRange(r.drawRange.start,r.drawRange.count),e.userData=r.userData}function xL(r,e,t){const n=e.array,i=new n.constructor(n.length);for(let s=0;s<n.length;s++){const o=n[s];i[s]=t[o]}r.setIndex(new Tt(i,e.itemSize,e.normalized))}function Cu(r,e,t){const n=r.constructor,i=new n(e.length*t);let s=!0;for(let o=0;o<e.length;o++){const l=e[o]*t,c=o*t;for(let u=0;u<t;u++){const h=r[l+u];i[c+u]=h,s=s&&h===0}}return[i,s]}function ML(r){var e;const t=new Map,n=[];for(const[i,s]of Object.entries(r))if(s.isInterleavedBufferAttribute){const o=s,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([i,o])}else{const o=s;n.push([i,o])}return[t,n]}function yL(r,e,t){const[n,i]=ML(e);for(const[s,o]of n){const a=s.array,{stride:l}=s,[c]=Cu(a,t,l),u=new Cp(c,l);u.setUsage(s.usage);for(const[h,d]of o){const{itemSize:f,offset:p,normalized:g}=d,m=new Gl(u,f,p,g);r.setAttribute(h,m)}}for(const[s,o]of i){const a=o.array,{itemSize:l,normalized:c}=o,[u]=Cu(a,t,l);r.setAttribute(s,new Tt(u,l,c))}}function SL(r){var e;const t=new Map,n=[];for(const[i,s]of Object.entries(r)){const o=i;for(let a=0;a<s.length;a++){const l=s[a];if(l.isInterleavedBufferAttribute){const c=l,u=c.data,h=(e=t.get(u))!=null?e:[];t.set(u,h),h.push([o,a,c])}else{const c=l;n.push([o,a,c])}}}return[t,n]}function TL(r,e,t){var n,i;let s=!0;const[o,a]=SL(e),l={};for(const[c,u]of o){const h=c.array,{stride:d}=c,[f,p]=Cu(h,t,d);s=s&&p;const g=new Cp(f,d);g.setUsage(c.usage);for(const[m,_,v]of u){const{itemSize:y,offset:M,normalized:T}=v,b=new Gl(g,y,M,T);(n=l[m])!=null||(l[m]=[]),l[m][_]=b}}for(const[c,u,h]of a){const d=h,f=d.array,{itemSize:p,normalized:g}=d,[m,_]=Cu(f,t,p);s=s&&_,(i=l[c])!=null||(l[c]=[]),l[c][u]=new Tt(m,p,g)}r.morphAttributes=s?{}:l}function EL(r){const e=new Map;r.traverse(t=>{if(!t.isMesh)return;const n=t,i=n.geometry,s=i.index;if(s==null)return;const o=e.get(i);if(o!=null){n.geometry=o;return}const{isVertexUsed:a,vertexCount:l,verticesUsed:c}=_L(i.attributes,s);if(c===l)return;const{originalIndexNewIndexMap:u,newIndexOriginalIndexMap:h}=gL(a),d=new Kt;vL(i,d),e.set(i,d),xL(d,s,u),yL(d,i.attributes,h),TL(d,i.morphAttributes,h),n.geometry=d}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function bL(r){var e;((e=r.meta)==null?void 0:e.metaVersion)==="0"&&(r.scene.rotation.y=Math.PI)}var Ts=class{constructor(){}};Ts.combineMorphs=rL;Ts.combineSkeletons=sL;Ts.deepDispose=pL;Ts.removeUnnecessaryJoints=mL;Ts.removeUnnecessaryVertices=EL;Ts.rotateVRM0=bL;/*!
 * @pixiv/three-vrm-core v3.5.1
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.5.1
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.5.1
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.5.1
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.5.1
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.5.1
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */const AL={key:0,class:"loading-state"},wL={key:1,class:"error-state"},RL={class:"error-message"},CL={key:2,class:"drag-hint"},PL={__name:"VRoidViewer",setup(r){const e=ft(null),t=ft(!0),n=ft(null);let i,s,o,a,l,c,u=0,h=!1,d=!1,f={x:0},p=0,g=0,m=0,_=0,v=!1,y=null,M=null,T=0,b=0,A=0,x=0;Wr(()=>{C(),L(),V(),k(),S()}),zf(()=>{M&&cancelAnimationFrame(M),y&&y.disconnect(),o&&o.dispose(),a&&a.scene.traverse(q=>{q.isMesh&&(q.geometry.dispose(),q.material.map&&q.material.map.dispose(),q.material.dispose())})});function S(){e.value&&(y=new ResizeObserver(()=>{R()}),y.observe(e.value))}function R(){if(!e.value||!o)return;const q=e.value.getBoundingClientRect(),Y=Math.min(q.width,q.height)||200;o.setSize(Y,Y),s.aspect=1,s.updateProjectionMatrix()}function C(){i=new Fb,s=new Kn(30,1,.1,20),s.position.set(0,1.35,3.2),o=new D3({alpha:!0,antialias:!0}),o.setSize(200,200),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,e.value&&e.value.appendChild(o.domElement);const q=new nu(16774632,1.3);q.position.set(1,1.5,1.5),i.add(q);const Y=new nu(13162239,.5);Y.position.set(-.8,.6,-.5),i.add(Y);const P=new nu(16777215,.6);P.position.set(0,1.2,-1.5),i.add(P);const re=new yA(16777215,.5);i.add(re),c=new BA}function L(){const q=new U3;q.register(P=>new nL(P));const Y=new URL("/website_3.0/assets/loi-a3H-fH4W.vrm",import.meta.url).href;q.load(Y,P=>{if(a=P.userData.vrm,!a){n.value="VRM 数据未找到，请确保文件是 VRM 格式",t.value=!1;return}if(Ts.removeUnnecessaryVertices(P.scene),Ts.combineSkeletons(P.scene),a.scene.rotation.y=0,a.scene.position.y=.6,i.add(a.scene),l=new FA(a.scene),a.blendShapeProxy){const re=a.blendShapeProxy.getPresetNames();console.log("可用 BlendShapes:",re);const ae=["joy","fun","happy","smile","laugh","grin","Joy","Fun","Happy","Smile"];let Ne=!1;for(const Oe of ae)try{a.blendShapeProxy.setValue(Oe,.25),console.log("✅ 成功设置表情:",Oe),Ne=!0;break}catch{}Ne||console.log("❌ 未找到笑脸表情，可用列表:",re)}t.value=!1},P=>{Math.round(P.loaded/P.total*100)},P=>{n.value="请将 .vroid 文件转换为 .vrm 格式",t.value=!1,N()})}function N(){const q=new Lp(.5,32,32),Y=new Hu({color:6514417,wireframe:!0}),P=new zn(q,Y);P.position.y=0,i.add(P);const re=()=>{M=requestAnimationFrame(re),P&&(P.rotation.y+=.01,P.rotation.x+=.005)};re()}function k(){const q=o.domElement;q.addEventListener("mousedown",Y=>{h=!0,g=0,f={x:Y.clientX,y:Y.clientY}}),q.addEventListener("mousemove",Y=>{if(a){if(h)g=(Y.clientX-f.x)*.01,p+=g,f={x:Y.clientX,y:Y.clientY};else if(d){const P=q.getBoundingClientRect(),re=P.left+P.width/2,ae=P.top+P.height/2;T=(Y.clientY-ae)/(P.height/2)*.08,b=(Y.clientX-re)/(P.width/2)*.12}}}),q.addEventListener("mouseup",()=>{h=!1}),q.addEventListener("mouseenter",()=>{d=!0}),q.addEventListener("mouseleave",()=>{h=!1,d=!1,T=0,b=0}),q.addEventListener("touchstart",Y=>{h=!0,g=0,f={x:Y.touches[0].clientX,y:Y.touches[0].clientY}}),q.addEventListener("touchmove",Y=>{if(!h||!a)return;g=(Y.touches[0].clientX-f.x)*.01,p+=g,f={x:Y.touches[0].clientX,y:Y.touches[0].clientY}}),q.addEventListener("touchend",()=>{h=!1})}function H(q){const Y=Math.sin(q*1.57),P=Math.sin(q*3.14+1.2)*.25;return Math.pow(Math.abs((Y+1)/2),.7)*2-1+P*.15}function V(){requestAnimationFrame(V);const q=Math.min(c.getDelta(),.1);if(u+=q,l&&l.update(q),a){a.update(q);const Y=a.humanoid.getNormalizedBoneNode("leftUpperArm"),P=a.humanoid.getNormalizedBoneNode("rightUpperArm"),re=a.humanoid.getNormalizedBoneNode("leftLowerArm"),ae=a.humanoid.getNormalizedBoneNode("rightLowerArm"),Ne=a.humanoid.getNormalizedBoneNode("leftUpperLeg"),Oe=a.humanoid.getNormalizedBoneNode("rightUpperLeg"),Ve=a.humanoid.getNormalizedBoneNode("leftLowerLeg"),J=a.humanoid.getNormalizedBoneNode("rightLowerLeg"),F=a.humanoid.getNormalizedBoneNode("spine"),$=a.humanoid.getNormalizedBoneNode("head"),te=a.humanoid.getNormalizedBoneNode("hips"),se=H(u),de=Math.sin(u*2.1+.7)*.25,Ee=Math.sin(u*1.3)*.7+Math.sin(u*.7+1.8)*.3,oe=Math.sin(u*.55+1.2)*.6+Math.sin(u*.35+3.1)*.4,ce=Math.sin(u*4.3+.3)*.025,be=Math.sin(u*5.1+1.7)*.02,Ie=Math.sin(u*3.7+2.9)*.018;if(O(q),$){const Ae=Math.sin(u*.7)*.05+Math.sin(u*1.3+.8)*.03,he=Math.sin(u*.55+.5)*.07+Math.sin(u*1.1+2.1)*.04,pe=Math.sin(u*.45+1)*.03+Math.sin(u*1.6)*.02,Pe=u*.15,Le=(Math.sin(Pe)+1)/2,_e=Math.pow(Math.max(0,Le-.85)*6.67,3),$e=Math.sin(u*1.8+.3)*.08*_e,U=Math.cos(u*1.5+.7)*.12*_e;$.rotation.x=Ae+$e+ce,$.rotation.y=he+U,$.rotation.z=pe+Ie*.5}F&&(F.rotation.x=se*.05+de*.02,F.rotation.z=Ee*.035+oe*.025,F.rotation.y=Ee*.025),te&&(te.rotation.z=Ee*.05+oe*.035,te.rotation.x=se*.025);const X=a.humanoid.getNormalizedBoneNode("leftIndexProximal"),B=a.humanoid.getNormalizedBoneNode("leftMiddleProximal"),gt=a.humanoid.getNormalizedBoneNode("leftRingProximal"),tt=a.humanoid.getNormalizedBoneNode("leftLittleProximal"),Ge=a.humanoid.getNormalizedBoneNode("leftThumbProximal"),Re=a.humanoid.getNormalizedBoneNode("rightIndexProximal"),I=a.humanoid.getNormalizedBoneNode("rightMiddleProximal"),E=a.humanoid.getNormalizedBoneNode("rightRingProximal"),G=a.humanoid.getNormalizedBoneNode("rightLittleProximal"),ne=a.humanoid.getNormalizedBoneNode("rightThumbProximal"),ie=Math.sin(u*3)*.1,Q=Math.sin(u*3+Math.PI)*.1,ve=Math.sin(u*2.2)*.06,ue=Math.cos(u*2.2)*.06,Ce=Math.sin(u*2)*.07;if(P&&(P.rotation.z=.65+Q+Ee*.03+se*.015+be,P.rotation.x=-.45+ve*.5-Ee*.02+se*.02+Ie,P.rotation.y=-.18+ue*.5+Ee*.02+ce),ae&&(ae.rotation.x=-.9+Q*.5-Ee*.03+se*.015+be,ae.rotation.z=.5+ie+ce*.3,ae.rotation.y=-.1+ue+be*.3),Y&&(Y.rotation.z=-.65+ie+Ee*.04+se*.015+ce,Y.rotation.x=-.45+ve*.5+Ee*.03+se*.02+be,Y.rotation.y=.18+ue*.5+Ee*.02+Ie),re&&(re.rotation.x=-.9+ie*.5+Ee*.03+se*.015+Ie,re.rotation.z=-.5+Q+ce*.3,re.rotation.y=.1+ue+be*.3),X&&(X.rotation.x=.05+Ce+ce*.2),B&&(B.rotation.x=.05+Ce+be*.2),gt&&(gt.rotation.x=1.2-Ce*.5+Ie*.2),tt&&(tt.rotation.x=1.2-Ce*.5+ce*.2),Ge&&(Ge.rotation.x=.6+Ce*.3,Ge.rotation.z=.3),Re&&(Re.rotation.x=.05+Ce+be*.2),I&&(I.rotation.x=.05+Ce+Ie*.2),E&&(E.rotation.x=1.2-Ce*.5+ce*.2),G&&(G.rotation.x=1.2-Ce*.5+be*.2),ne&&(ne.rotation.x=.6+Ce*.3,ne.rotation.z=-.3),Ne&&(Ne.rotation.x=Ee*.04+oe*.03+ce*.5,Ne.rotation.z=Ee*.02+be*.5),Oe&&(Oe.rotation.x=-Ee*.04-oe*.03+be*.5,Oe.rotation.z=-Ee*.02+Ie*.5),Ve&&(Ve.rotation.x=Ee*.02+Ie*.3),J&&(J.rotation.x=-Ee*.02+ce*.3),!h&&Math.abs(g)>1e-4?(p+=g,g*=.94):!h&&Math.abs(g)<=1e-4&&(g=0),a.scene.rotation.y+=(p-a.scene.rotation.y)*.06,!h&&Math.abs(g)<5e-4&&(a.scene.rotation.y+=Math.sin(u*.35+1.5)*6e-4),A+=(T-A)*.05,x+=(b-x)*.05,Math.abs(A)>.001||Math.abs(x)>.001?(a.scene.rotation.x=A,a.scene.rotation.y+=x*.3):h||(a.scene.rotation.x+=(0-a.scene.rotation.x)*.03),a.scene.position.y=.6+se*.025,a.blendShapeProxy)try{a.blendShapeProxy.setValue("joy",1)}catch{}}o.render(i,s)}function O(q){if(!(!a||!a.blendShapeProxy)){if(m+=q,!v&&m>=_&&(v=!0,m=0),v){const P=Math.min(m/.15,1);let re;if(P<.35)re=Math.sin(P/.35*Math.PI*.5);else if(P<.5)re=1;else{const ae=(P-.5)/.5;re=1-Math.sin(ae*Math.PI*.5)}try{a.blendShapeProxy.setValue("blink",re)}catch{}if(P>=1){v=!1,m=0,_=2+Math.random()*4;try{a.blendShapeProxy.setValue("blink",0)}catch{}}}_===0&&(_=1+Math.random()*3)}}return(q,Y)=>(et(),ot("div",{ref_key:"container",ref:e,class:"vroid-viewer"},[t.value?(et(),ot("div",AL,[...Y[0]||(Y[0]=[z("div",{class:"spinner"},null,-1),z("p",null,"加载模型中...",-1)])])):Zs("",!0),n.value?(et(),ot("div",wL,[Y[1]||(Y[1]=z("p",null,"模型加载失败",-1)),z("p",RL,hn(n.value),1)])):Zs("",!0),!t.value&&!n.value?(et(),ot("div",CL,"↔ 拖拽旋转")):Zs("",!0)],512))}},IL=Xr(PL,[["__scopeId","data-v-e747b339"]]),LL={class:"footer"},DL={class:"container"},NL={class:"footer-content"},UL={class:"footer-section"},OL={class:"footer-description-wrapper"},FL={class:"footer-section"},BL={class:"contact-info"},kL={__name:"Footer",setup(r){return(e,t)=>(et(),ot("footer",LL,[z("div",DL,[z("div",NL,[z("div",UL,[t[0]||(t[0]=z("h3",{class:"footer-logo"},"Portfolio",-1)),z("div",OL,[qt(IL)])]),z("div",FL,[t[4]||(t[4]=z("h4",null,"联系信息",-1)),z("div",BL,[z("p",null,[qt(zt(Jg),{size:16,class:"inline-icon"}),t[1]||(t[1]=as(" 3258664928@qq.com",-1))]),z("p",null,[qt(zt(Qg),{size:16,class:"inline-icon"}),t[2]||(t[2]=as(" +86 183 1686 5751",-1))]),z("p",null,[qt(zt(e0),{size:16,class:"inline-icon"}),t[3]||(t[3]=as(" 中国，汕头市",-1))])]),t[5]||(t[5]=z("div",{class:"footer-social"},[z("a",{href:"https://github.com/ContinueYN",class:"social-icon"},"GitHub"),z("a",{href:"https://blog.csdn.net",class:"social-icon"},"CSDN"),z("a",{href:"127.0.0.1",class:"social-icon"},"Telegram")],-1))])]),t[6]||(t[6]=z("div",{class:"footer-bottom"},[z("p",null,"© 2025 余诺个人作品集. 保留所有权利.")],-1))])]))}},VL=Xr(kL,[["__scopeId","data-v-1f24f905"]]),zL=Pu({__name:"ParticleBackground",props:{particleCount:{default:80},connectDistance:{default:100},isDark:{type:Boolean,default:!1}},setup(r){const e=r,t=ft(null),n=ft(null),i=ft([]),s=ft(0),o=ft(-1e3),a=ft(-1e3),l=ii(()=>({position:"fixed",top:"0",left:"0",width:"100%",height:"100%",zIndex:"-1",pointerEvents:"none"})),c={particles:["rgba(99, 179, 237, 0.7)","rgba(167, 254, 215, 0.6)","rgba(196, 167, 255, 0.5)","rgba(251, 191, 36, 0.4)"],lines:"rgba(99, 179, 237, 0.15)"},u={particles:["rgba(170, 126, 247, 0.9)","rgba(125, 59, 246, 0.8)","rgba(196, 167, 255, 0.7)","rgba(251, 191, 36, 0.6)"],lines:"rgba(170, 126, 247, 0.3)"},h=x=>{if(!x||x.length===0)return"rgba(255, 255, 255, 1)";const S=Math.floor(Math.random()*x.length);return x[S]??"rgba(255, 255, 255, 1)"},d=()=>{if(!t.value){console.error("Canvas element not found");return}const x=t.value;x.width=window.innerWidth,x.height=window.innerHeight;const S=x.getContext("2d");if(!S){console.error("Failed to get 2D context");return}n.value=S},f=()=>{i.value=[];const x=e.isDark?u:c;for(let S=0;S<e.particleCount;S++)i.value.push({x:Math.random()*(t.value?.width||window.innerWidth),y:Math.random()*(t.value?.height||window.innerHeight),size:Math.random()*3+2,speedX:Math.random()*.3-.15,speedY:Math.random()*.3-.15,color:h(x.particles),opacity:Math.random()*.5+.2,pulseSpeed:Math.random()*.015+.005,pulsePhase:Math.random()*Math.PI*2})},p=()=>{i.value=[];const x=u,S=Math.floor(e.particleCount*.7);for(let C=0;C<S;C++)i.value.push({x:Math.random()*(t.value?.width||window.innerWidth),y:Math.random()*(t.value?.height||window.innerHeight),size:Math.random()*2.5+3.5,speedX:0,speedY:0,color:h(x.particles),opacity:Math.random()*.9+.5,pulseSpeed:Math.random()*.04+.02,pulsePhase:Math.random()*Math.PI*2,isStar:!0,twinkleSpeed:Math.random()*.08+.03,twinklePhase:Math.random()*Math.PI*2});const R=e.particleCount-S;for(let C=0;C<R;C++)i.value.push({x:Math.random()*(t.value?.width||window.innerWidth),y:Math.random()*(t.value?.height||window.innerHeight),size:Math.random()*2+1,speedX:Math.random()*6+4,speedY:Math.random()*2+1,color:h(x.particles),opacity:Math.random()*.3+.7,pulseSpeed:Math.random()*.04+.02,pulsePhase:Math.random()*Math.PI*2,isStar:!1,tailLength:Math.random()*80+40})},g=()=>{e.isDark?p():f()},m=()=>{if(!t.value||!n.value)return;const x=t.value;i.value.forEach(S=>{if(!e.isDark&&o.value>-500&&a.value>-500){const R=o.value-S.x,C=a.value-S.y,L=Math.sqrt(R*R+C*C),N=200;if(L<N){const k=(N-L)/N,H=.02;S.x+=R*k*H,S.y+=C*k*H}}S.x+=S.speedX,S.y+=S.speedY,S.x>x.width?S.x=0:S.x<0&&(S.x=x.width),S.y>x.height?S.y=0:S.y<0&&(S.y=x.height),S.pulsePhase+=S.pulseSpeed,S.twinkleSpeed&&(S.twinklePhase+=S.twinkleSpeed)})},_=()=>{if(!n.value||!t.value)return;const x=t.value,S=c;if(n.value.clearRect(0,0,x.width,x.height),o.value>-500&&a.value>-500){const R=n.value.createRadialGradient(o.value,a.value,0,o.value,a.value,180);R.addColorStop(0,"rgba(99, 179, 237, 0.08)"),R.addColorStop(.5,"rgba(167, 254, 215, 0.04)"),R.addColorStop(1,"transparent"),n.value.fillStyle=R,n.value.globalAlpha=1,n.value.beginPath(),n.value.arc(o.value,a.value,180,0,Math.PI*2),n.value.fill()}n.value.strokeStyle=S.lines,n.value.lineWidth=.5;for(let R=0;R<i.value.length;R++)for(let C=R+1;C<i.value.length;C++){const L=i.value[R],N=i.value[C];if(!L||!N)continue;const k=L.x-N.x,H=L.y-N.y,V=Math.sqrt(k*k+H*H);if(V<e.connectDistance*.8){const O=(1-V/(e.connectDistance*.8))*.2;n.value.beginPath(),n.value.globalAlpha=O,n.value.moveTo(L.x,L.y),n.value.lineTo(N.x,N.y),n.value.stroke()}}i.value.forEach(R=>{const C=Math.sin(R.pulsePhase)*.2+.8,L=R.opacity*C,N=n.value.createRadialGradient(R.x,R.y,0,R.x,R.y,R.size*2.5),k=R.color.match(/rgba?\([^)]+\)/);if(k){const H=k[0];N.addColorStop(0,H.replace(/[\d.]+\)$/,(L*.8).toString())),N.addColorStop(.5,H.replace(/[\d.]+\)$/,(L*.3).toString()))}else N.addColorStop(0,R.color),N.addColorStop(.5,R.color);N.addColorStop(1,"transparent"),n.value.fillStyle=N,n.value.globalAlpha=1,n.value.beginPath(),n.value.arc(R.x,R.y,R.size*2.5,0,Math.PI*2),n.value.fill(),n.value.fillStyle=R.color,n.value.globalAlpha=L,n.value.beginPath(),n.value.arc(R.x,R.y,R.size*.6,0,Math.PI*2),n.value.fill()})},v=()=>{if(!n.value||!t.value)return;const x=t.value,S=u;n.value.clearRect(0,0,x.width,x.height),n.value.strokeStyle=S.lines;for(let R=0;R<i.value.length;R++)for(let C=R+1;C<i.value.length;C++){const L=i.value[R],N=i.value[C];if(!L||!N||!L.isStar||!N.isStar)continue;const k=L.x-N.x,H=L.y-N.y,V=Math.sqrt(k*k+H*H);V<e.connectDistance*.7&&(n.value.beginPath(),n.value.globalAlpha=(1-V/(e.connectDistance*.7))*.2,n.value.lineWidth=.5,n.value.moveTo(L.x,L.y),n.value.lineTo(N.x,N.y),n.value.stroke())}i.value.forEach(R=>{if(R.isStar){const C=R.twinklePhase?Math.sin(R.twinklePhase)*.5+.5:1,L=R.opacity*C,N=n.value.createRadialGradient(R.x,R.y,0,R.x,R.y,R.size*2);N.addColorStop(0,R.color.replace("0.8",(L*.8).toString())),N.addColorStop(1,"transparent"),n.value.fillStyle=N,n.value.globalAlpha=1,n.value.beginPath(),n.value.arc(R.x,R.y,R.size*2,0,Math.PI*2),n.value.fill(),n.value.fillStyle=R.color,n.value.globalAlpha=L,n.value.beginPath();const k=5,H=R.size,V=R.size*.4;for(let O=0;O<k*2;O++){const q=O%2===0?H:V,Y=Math.PI*O/k,P=R.x+Math.cos(Y)*q,re=R.y+Math.sin(Y)*q;O===0?n.value.moveTo(P,re):n.value.lineTo(P,re)}n.value.closePath(),n.value.fill()}else{const C=Math.sin(R.pulsePhase)*.3+.7,L=R.opacity*C,N=40,k=n.value.createLinearGradient(R.x,R.y,R.x-R.speedX*N,R.y-R.speedY*N);k.addColorStop(0,R.color.replace("0.8",L.toString())),k.addColorStop(1,"transparent"),n.value.strokeStyle=k,n.value.lineWidth=R.size,n.value.globalAlpha=.6,n.value.beginPath(),n.value.moveTo(R.x,R.y),n.value.lineTo(R.x-R.speedX*N,R.y-R.speedY*N),n.value.stroke(),n.value.fillStyle=R.color,n.value.globalAlpha=L,n.value.beginPath(),n.value.arc(R.x,R.y,R.size,0,Math.PI*2),n.value.fill()}})},y=()=>{e.isDark?v():_()},M=()=>{if(!t.value||!n.value){console.error("Canvas or context not available in animate");return}m(),y(),s.value=requestAnimationFrame(M)},T=()=>{d(),g()},b=x=>{o.value=x.clientX,a.value=x.clientY},A=()=>{o.value=-1e3,a.value=-1e3};return Wr(()=>{setTimeout(()=>{d(),g(),M()},100),window.addEventListener("resize",T),window.addEventListener("mousemove",b),window.addEventListener("mouseleave",A)}),Jx(()=>{s.value&&cancelAnimationFrame(s.value),window.removeEventListener("resize",T),window.removeEventListener("mousemove",b),window.removeEventListener("mouseleave",A)}),Iu(()=>e.isDark,()=>{g()}),(x,S)=>(et(),ot("canvas",{ref_key:"canvasRef",ref:t,class:"particle-canvas",style:Xs(l.value)},null,4))}}),HL=Xr(zL,[["__scopeId","data-v-41f5ee36"]]);var GL=yM();const Xg=SM(GL),qg={get(r,e){try{const t=localStorage.getItem(r);return t?JSON.parse(t):e}catch{return e}},set(r,e){localStorage.setItem(r,JSON.stringify(e))},remove(r){localStorage.removeItem(r)}},Yg={THEME:"theme"};function WL(){const r=ft(!1),e=()=>{r.value=!r.value,qg.set(Yg.THEME,r.value?"dark":"light"),document.documentElement.classList.toggle("dark",r.value)},t=()=>{const n=qg.get(Yg.THEME,null),i=window.matchMedia("(prefers-color-scheme: dark)").matches;r.value=n?n==="dark":i,document.documentElement.classList.toggle("dark",r.value)};return Wr(()=>{t()}),{isDark:r,toggleTheme:e}}const XL={__name:"App",setup(r){const{isDark:e,toggleTheme:t}=WL(),n=wM(),i=ii(()=>n.path.startsWith("/blog"));return kc("theme",{isDark:e,toggleTheme:t}),Wr(()=>{Xg.init({duration:600,offset:50,once:!0,mirror:!1,easing:"ease-out",delay:0,throttleDelay:99})}),Iu(n,()=>{setTimeout(()=>{Xg.refresh()},300)}),(s,o)=>{const a=Qx("router-view");return et(),ot("div",{id:"app",class:vs({dark:zt(e)})},[qt(HL,{"particle-count":zt(e)?120:60,"connect-distance":zt(e)?150:100,"is-dark":zt(e)},null,8,["particle-count","connect-distance","is-dark"]),i.value?(et(),al(a,{key:0},{default:Hs(({Component:l})=>[qt(eM,{name:"fade",mode:"out-in"},{default:Hs(()=>[(et(),al(Vc(l)))]),_:2},1024)]),_:1})):(et(),ot(Xi,{key:1},[qt(zy,{isDark:zt(e),onToggleTheme:zt(t)},null,8,["isDark","onToggleTheme"]),z("main",null,[qt(tS),qt(dS),qt(HS),qt(BT),qt(vE)]),qt(VL)],64))],2)}}},qL="modulepreload",YL=function(r){return"/website_3.0/"+r},$g={},Bc=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=YL(c),c in $g)return;$g[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":qL,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},$L=[{path:"/",name:"Home",component:()=>Bc(()=>import("./Home-D6TNUSQ_.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"/blog",name:"Blog",component:()=>Bc(()=>import("./Blog-zycbrFqF.js"),__vite__mapDeps([5,6,1,2,3,7]))},{path:"/blog/:id",name:"BlogPost",component:()=>Bc(()=>import("./BlogPost-muwK092n.js"),__vite__mapDeps([8,6,1,2,3,9])),props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Bc(()=>import("./NotFound-C4VGpsh0.js"),__vite__mapDeps([10,1,2,3,11]))}],jL=Cy({history:ly(),routes:$L,scrollBehavior(r,e,t){return t||{top:0}}});function cd(r){const e=document.documentElement;e.classList.remove("theme-day","theme-night"),e.classList.add(r?"theme-night":"theme-day")}if(window.matchMedia){const r=window.matchMedia("(prefers-color-scheme: dark)");cd(r.matches);const e=t=>cd("matches"in t?t.matches:r.matches);typeof r.addEventListener=="function"?r.addEventListener("change",e):typeof r.addListener=="function"&&r.addListener(e)}else cd(!1);const kp=tM(XL);kp.config.errorHandler=(r,e,t)=>{console.error("Global error:",r),console.error("Error info:",t),console.error("Vue instance:",e)};kp.use(jL);kp.mount("#app");export{dS as A,vE as C,VL as F,zy as H,HL as P,Vo as R,HS as S,Xr as _,tS as a,BT as b,QL as c,wM as d,Hy as e,WL as u};
