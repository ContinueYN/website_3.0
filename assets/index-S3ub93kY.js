const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BcbT4aiz.js","assets/vendor-9_aBDW1-.js","assets/lucide-DM1g0vjl.js","assets/aos-B5LL9sPA.js","assets/Home-DaVjC0Xz.css","assets/Blog-DYGbpVtr.js","assets/useReadingTime-D6q00ocr.js","assets/Blog-CTiwglkZ.css","assets/BlogPost-BQcAulCe.js","assets/BlogPost-WeITGPnu.css","assets/NotFound-C8yA51Li.js","assets/NotFound-BP9xU_7d.css"])))=>i.map(i=>d[i]);
import{i as so,s as Kx,d as Gl,u as Kt,a as Zx,c as si,p as zc,r as Pt,w as Iu,h as Z_,n as zf,b as J_,o as qr,e as vt,f as W,g as Zs,j as Xs,k as Qt,l as Hs,m as mi,q as Vr,t as dt,v as ls,x as mn,y as Hf,z as El,F as qi,A as ur,B as al,C as Hc,D as $a,E as Jx,G as $l,H as Qx,I as eM,T as tM,J as nM}from"./vendor-9_aBDW1-.js";import{A as iM,X as rM,S as sM,a as oM,W as aM,P as lM,b as cM,G as uM,C as Hp,c as hM,d as dM,R as fM,L as pM,e as mM,D as gM,f as _M,g as vM,h as xM,i as MM,Z as yM,M as Q_,j as e0,k as t0}from"./lucide-DM1g0vjl.js";import{r as SM,g as TM}from"./aos-B5LL9sPA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/*!
 * vue-router v5.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const ko=typeof document<"u";function n0(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function bM(r){return r.__esModule||r[Symbol.toStringTag]==="Module"||r.default&&n0(r.default)}const Bt=Object.assign;function Yu(r,e){const t={};for(const n in e){const i=e[n];t[n]=Zi(i)?i.map(r):r(i)}return t}const ll=()=>{},Zi=Array.isArray;function Gp(r,e){const t={};for(const n in r)t[n]=n in e?e[n]:r[n];return t}let on=(function(r){return r[r.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",r[r.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",r[r.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",r[r.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",r[r.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",r})({});const i0=Symbol("");on.MATCHER_NOT_FOUND+"",on.NAVIGATION_GUARD_REDIRECT+"",on.NAVIGATION_ABORTED+"",on.NAVIGATION_CANCELLED+"",on.NAVIGATION_DUPLICATED+"";function sa(r,e){return Bt(new Error,{type:r,[i0]:!0},e)}function Tr(r,e){return r instanceof Error&&i0 in r&&(e==null||!!(r.type&e))}const EM=["params","query","hash"];function AM(r){if(typeof r=="string")return r;if(r.path!=null)return r.path;const e={};for(const t of EM)t in r&&(e[t]=r[t]);return JSON.stringify(e,null,2)}const wM=Symbol(""),Wp=Symbol(""),Lu=Symbol(""),Gf=Symbol(""),ud=Symbol("");function eD(){return so(Lu)}function RM(r){return so(Gf)}/*!
 * vue-router v5.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const r0=/#/g,CM=/&/g,PM=/\//g,IM=/=/g,LM=/\?/g,s0=/\+/g,DM=/%5B/g,NM=/%5D/g,o0=/%5E/g,OM=/%60/g,a0=/%7B/g,UM=/%7C/g,l0=/%7D/g,FM=/%20/g;function Wf(r){return r==null?"":encodeURI(""+r).replace(UM,"|").replace(DM,"[").replace(NM,"]")}function BM(r){return Wf(r).replace(a0,"{").replace(l0,"}").replace(o0,"^")}function hd(r){return Wf(r).replace(s0,"%2B").replace(FM,"+").replace(r0,"%23").replace(CM,"%26").replace(OM,"`").replace(a0,"{").replace(l0,"}").replace(o0,"^")}function kM(r){return hd(r).replace(IM,"%3D")}function VM(r){return Wf(r).replace(r0,"%23").replace(LM,"%3F")}function zM(r){return VM(r).replace(PM,"%2F")}function Al(r){if(r==null)return null;try{return decodeURIComponent(""+r)}catch{}return""+r}const HM=/\/$/,GM=r=>r.replace(HM,"");function $u(r,e,t="/"){let n,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(n=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=r(s.slice(1))),a>=0&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=YM(n??e,t),{fullPath:n+s+o,path:n,query:i,hash:Al(o)}}function WM(r,e){const t=e.query?r(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Xp(r,e){return!e||!r.toLowerCase().startsWith(e.toLowerCase())?r:r.slice(e.length)||"/"}function XM(r,e,t){const n=e.matched.length-1,i=t.matched.length-1;return n>-1&&n===i&&oa(e.matched[n],t.matched[i])&&c0(e.params,t.params)&&r(e.query)===r(t.query)&&e.hash===t.hash}function oa(r,e){return(r.aliasOf||r)===(e.aliasOf||e)}function c0(r,e){if(Object.keys(r).length!==Object.keys(e).length)return!1;for(var t in r)if(!qM(r[t],e[t]))return!1;return!0}function qM(r,e){return Zi(r)?qp(r,e):Zi(e)?qp(e,r):(r&&r.valueOf())===(e&&e.valueOf())}function qp(r,e){return Zi(e)?r.length===e.length&&r.every((t,n)=>t===e[n]):r.length===1&&r[0]===e}function YM(r,e){if(r.startsWith("/"))return r;if(!r)return e;const t=e.split("/"),n=r.split("/"),i=n[n.length-1];(i===".."||i===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o).join("/")}const Zr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let dd=(function(r){return r.pop="pop",r.push="push",r})({}),ju=(function(r){return r.back="back",r.forward="forward",r.unknown="",r})({});function $M(r){if(!r)if(ko){const e=document.querySelector("base");r=e&&e.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),GM(r)}const jM=/^[^#]+#/;function KM(r,e){return r.replace(jM,"#")+e}function ZM(r,e){const t=document.documentElement.getBoundingClientRect(),n=r.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Du=()=>({left:window.scrollX,top:window.scrollY});function JM(r){let e;if("el"in r){const t=r.el,n=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=ZM(i,r)}else e=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yp(r,e){return(history.state?history.state.position-e:-1)+r}const fd=new Map;function QM(r,e){fd.set(r,e)}function ey(r){const e=fd.get(r);return fd.delete(r),e}function ty(r){return typeof r=="string"||r&&typeof r=="object"}function u0(r){return typeof r=="string"||typeof r=="symbol"}function ny(r){const e={};if(r===""||r==="?")return e;const t=(r[0]==="?"?r.slice(1):r).split("&");for(let n=0;n<t.length;++n){const i=t[n].replace(s0," "),s=i.indexOf("="),o=Al(s<0?i:i.slice(0,s)),a=s<0?null:Al(i.slice(s+1));if(o in e){let l=e[o];Zi(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function $p(r){let e="";for(let t in r){const n=r[t];if(t=kM(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Zi(n)?n.map(i=>i&&hd(i)):[n&&hd(n)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function iy(r){const e={};for(const t in r){const n=r[t];n!==void 0&&(e[t]=Zi(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return e}function Ca(){let r=[];function e(n){return r.push(n),()=>{const i=r.indexOf(n);i>-1&&r.splice(i,1)}}function t(){r=[]}return{add:e,list:()=>r.slice(),reset:t}}function as(r,e,t,n,i,s=o=>o()){const o=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(sa(on.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):ty(d)?l(sa(on.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&n.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>r.call(n&&n.instances[i],e,t,c));let h=Promise.resolve(u);r.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Ku(r,e,t,n,i=s=>s()){const s=[];for(const o of r)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(n0(l)){const c=(l.__vccOpts||l)[e];c&&s.push(as(c,t,n,o,a,i))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=bM(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&as(d,t,n,o,a,i)()}))}}return s}function ry(r,e){const t=[],n=[],i=[],s=Math.max(e.matched.length,r.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(r.matched.find(c=>oa(c,a))?n.push(a):t.push(a));const l=r.matched[o];l&&(e.matched.find(c=>oa(c,l))||i.push(l))}return[t,n,i]}/*!
 * vue-router v5.0.2
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let sy=()=>location.protocol+"//"+location.host;function h0(r,e){const{pathname:t,search:n,hash:i}=e,s=r.indexOf("#");if(s>-1){let o=i.includes(r.slice(s))?r.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),Xp(a,"")}return Xp(t,r)+n+i}function oy(r,e,t,n){let i=[],s=[],o=null;const a=({state:d})=>{const f=h0(r,location),p=t.value,_=e.value;let m=0;if(d){if(t.value=f,e.value=d,o&&o===p){o=null;return}m=_?d.position-_.position:0}else n(f);i.forEach(g=>{g(t.value,p,{delta:m,type:dd.pop,direction:m?m>0?ju.forward:ju.back:ju.unknown})})};function l(){o=t.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(Bt({},d.state,{scroll:Du()}),"")}}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function jp(r,e,t,n=!1,i=!1){return{back:r,current:e,forward:t,replaced:n,position:window.history.length,scroll:i?Du():null}}function ay(r){const{history:e,location:t}=window,n={value:h0(r,t)},i={value:e.state};i.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=r.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?r:r.slice(h))+l:sy()+r+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function o(l,c){s(l,Bt({},e.state,jp(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),n.value=l}function a(l,c){const u=Bt({},i.value,e.state,{forward:l,scroll:Du()});s(u.current,u,!0),s(l,Bt({},jp(n.value,l,null),{position:u.position+1},c),!1),n.value=l}return{location:n,state:i,push:a,replace:o}}function ly(r){r=$M(r);const e=ay(r),t=oy(r,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Bt({location:"",base:r,go:n,createHref:KM.bind(null,r)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function cy(r){return r=location.host?r||location.pathname+location.search:"",r.includes("#")||(r+="#"),ly(r)}let qs=(function(r){return r[r.Static=0]="Static",r[r.Param=1]="Param",r[r.Group=2]="Group",r})({});var _n=(function(r){return r[r.Static=0]="Static",r[r.Param=1]="Param",r[r.ParamRegExp=2]="ParamRegExp",r[r.ParamRegExpEnd=3]="ParamRegExpEnd",r[r.EscapeNext=4]="EscapeNext",r})(_n||{});const uy={type:qs.Static,value:""},hy=/[a-zA-Z0-9_]/;function dy(r){if(!r)return[[]];if(r==="/")return[[uy]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=_n.Static,n=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===_n.Static?s.push({type:qs.Static,value:c}):t===_n.Param||t===_n.ParamRegExp||t===_n.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:qs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<r.length;){if(l=r[a++],l==="\\"&&t!==_n.ParamRegExp){n=t,t=_n.EscapeNext;continue}switch(t){case _n.Static:l==="/"?(c&&h(),o()):l===":"?(h(),t=_n.Param):d();break;case _n.EscapeNext:d(),t=n;break;case _n.Param:l==="("?t=_n.ParamRegExp:hy.test(l)?d():(h(),t=_n.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case _n.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=_n.ParamRegExpEnd:u+=l;break;case _n.ParamRegExpEnd:h(),t=_n.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===_n.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}const Kp="[^/]+?",fy={sensitive:!1,strict:!1,start:!0,end:!0};var $n=(function(r){return r[r._multiplier=10]="_multiplier",r[r.Root=90]="Root",r[r.Segment=40]="Segment",r[r.SubSegment=30]="SubSegment",r[r.Static=40]="Static",r[r.Dynamic=20]="Dynamic",r[r.BonusCustomRegExp=10]="BonusCustomRegExp",r[r.BonusWildcard=-50]="BonusWildcard",r[r.BonusRepeatable=-20]="BonusRepeatable",r[r.BonusOptional=-8]="BonusOptional",r[r.BonusStrict=.7000000000000001]="BonusStrict",r[r.BonusCaseSensitive=.25]="BonusCaseSensitive",r})($n||{});const py=/[.+*?^${}()[\]/\\]/g;function my(r,e){const t=Bt({},fy,e),n=[];let i=t.start?"^":"";const s=[];for(const c of r){const u=c.length?[]:[$n.Root];t.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=$n.Segment+(t.sensitive?$n.BonusCaseSensitive:0);if(d.type===qs.Static)h||(i+="/"),i+=d.value.replace(py,"\\$&"),f+=$n.Static;else if(d.type===qs.Param){const{value:p,repeatable:_,optional:m,regexp:g}=d;s.push({name:p,repeatable:_,optional:m});const v=g||Kp;if(v!==Kp){f+=$n.BonusCustomRegExp;try{new RegExp(`(${v})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+x.message)}}let y=_?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),i+=y,f+=$n.Dynamic,m&&(f+=$n.BonusOptional),_&&(f+=$n.BonusRepeatable),v===".*"&&(f+=$n.BonusWildcard)}u.push(f)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=$n.BonusStrict}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of r){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===qs.Static)u+=f.value;else if(f.type===qs.Param){const{value:p,repeatable:_,optional:m}=f,g=p in c?c[p]:"";if(Zi(g)&&!_)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Zi(g)?g.join("/"):g;if(!v)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function gy(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=e[t]-r[t];if(n)return n;t++}return r.length<e.length?r.length===1&&r[0]===$n.Static+$n.Segment?-1:1:r.length>e.length?e.length===1&&e[0]===$n.Static+$n.Segment?1:-1:0}function d0(r,e){let t=0;const n=r.score,i=e.score;for(;t<n.length&&t<i.length;){const s=gy(n[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-n.length)===1){if(Zp(n))return 1;if(Zp(i))return-1}return i.length-n.length}function Zp(r){const e=r[r.length-1];return r.length>0&&e[e.length-1]<0}const _y={strict:!1,end:!0,sensitive:!1};function vy(r,e,t){const n=my(dy(r.path),t),i=Bt(n,{record:r,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function xy(r,e){const t=[],n=new Map;e=Gp(_y,e);function i(h){return n.get(h)}function s(h,d,f){const p=!f,_=Qp(h);_.aliasOf=f&&f.record;const m=Gp(e,h),g=[_];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const S of x)g.push(Qp(Bt({},_,{components:f?f.record.components:_.components,path:S,aliasOf:f?f.record:_})))}let v,y;for(const x of g){const{path:S}=x;if(d&&S[0]!=="/"){const E=d.record.path,A=E[E.length-1]==="/"?"":"/";x.path=d.record.path+(S&&A+S)}if(v=vy(x,d,m),f?f.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),p&&h.name&&!em(v)&&o(h.name)),f0(v)&&l(v),_.children){const E=_.children;for(let A=0;A<E.length;A++)s(E[A],v,f&&f.children[A])}f=f||v}return y?()=>{o(y)}:ll}function o(h){if(u0(h)){const d=n.get(h);d&&(n.delete(h),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(h);d>-1&&(t.splice(d,1),h.record.name&&n.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const d=Sy(h,t);t.splice(d,0,h),h.record.name&&!em(h)&&n.set(h.record.name,h)}function c(h,d){let f,p={},_,m;if("name"in h&&h.name){if(f=n.get(h.name),!f)throw sa(on.MATCHER_NOT_FOUND,{location:h});m=f.record.name,p=Bt(Jp(d.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),h.params&&Jp(h.params,f.keys.map(y=>y.name))),_=f.stringify(p)}else if(h.path!=null)_=h.path,f=t.find(y=>y.re.test(_)),f&&(p=f.parse(_),m=f.record.name);else{if(f=d.name?n.get(d.name):t.find(y=>y.re.test(d.path)),!f)throw sa(on.MATCHER_NOT_FOUND,{location:h,currentLocation:d});m=f.record.name,p=Bt({},d.params,h.params),_=f.stringify(p)}const g=[];let v=f;for(;v;)g.unshift(v.record),v=v.parent;return{name:m,path:_,params:p,matched:g,meta:yy(g)}}r.forEach(h=>s(h));function u(){t.length=0,n.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Jp(r,e){const t={};for(const n of e)n in r&&(t[n]=r[n]);return t}function Qp(r){const e={path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:r.aliasOf,beforeEnter:r.beforeEnter,props:My(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function My(r){const e={},t=r.props||!1;if("component"in r)e.default=t;else for(const n in r.components)e[n]=typeof t=="object"?t[n]:t;return e}function em(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function yy(r){return r.reduce((e,t)=>Bt(e,t.meta),{})}function Sy(r,e){let t=0,n=e.length;for(;t!==n;){const s=t+n>>1;d0(r,e[s])<0?n=s:t=s+1}const i=Ty(r);return i&&(n=e.lastIndexOf(i,n-1)),n}function Ty(r){let e=r;for(;e=e.parent;)if(f0(e)&&d0(r,e)===0)return e}function f0({record:r}){return!!(r.name||r.components&&Object.keys(r.components).length||r.redirect)}function tm(r){const e=so(Lu),t=so(Gf),n=si(()=>{const l=Kt(r.to);return e.resolve(l)}),i=si(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(oa.bind(null,u));if(d>-1)return d;const f=nm(l[c-2]);return c>1&&nm(u)===f&&h[h.length-1].path!==f?h.findIndex(oa.bind(null,l[c-2])):d}),s=si(()=>i.value>-1&&wy(t.params,n.value.params)),o=si(()=>i.value>-1&&i.value===t.matched.length-1&&c0(t.params,n.value.params));function a(l={}){if(Ay(l)){const c=e[Kt(r.replace)?"replace":"push"](Kt(r.to)).catch(ll);return r.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:si(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}function by(r){return r.length===1?r[0]:r}const Ey=Gl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:tm,setup(r,{slots:e}){const t=J_(tm(r)),{options:n}=so(Lu),i=si(()=>({[im(r.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[im(r.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&by(e.default(t));return r.custom?s:Z_("a",{"aria-current":t.isExactActive?r.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Vo=Ey;function Ay(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const e=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return r.preventDefault&&r.preventDefault(),!0}}function wy(r,e){for(const t in e){const n=e[t],i=r[t];if(typeof n=="string"){if(n!==i)return!1}else if(!Zi(i)||i.length!==n.length||n.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function nm(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const im=(r,e,t)=>r??e??t,Ry=Gl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:e,slots:t}){const n=so(ud),i=si(()=>r.route||n.value),s=so(Wp,0),o=si(()=>{let c=Kt(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=si(()=>i.value.matched[o.value]);zc(Wp,si(()=>o.value+1)),zc(wM,a),zc(ud,i);const l=Pt();return Iu(()=>[l.value,a.value,r.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!oa(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=r.name,h=a.value,d=h&&h.components[u];if(!d)return rm(t.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=Z_(d,Bt({},p,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return rm(t.default,{Component:m,route:c})||m}}});function rm(r,e){if(!r)return null;const t=r(e);return t.length===1?t[0]:t}const Cy=Ry;function Py(r){const e=xy(r.routes,r),t=r.parseQuery||ny,n=r.stringifyQuery||$p,i=r.history,s=Ca(),o=Ca(),a=Ca(),l=Kx(Zr);let c=Zr;ko&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yu.bind(null,V=>""+V),h=Yu.bind(null,zM),d=Yu.bind(null,Al);function f(V,Q){let oe,ue;return u0(V)?(oe=e.getRecordMatcher(V),ue=Q):ue=V,e.addRoute(ue,oe)}function p(V){const Q=e.getRecordMatcher(V);Q&&e.removeRoute(Q)}function _(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function g(V,Q){if(Q=Bt({},Q||l.value),typeof V=="string"){const ge=$u(t,V,Q.path),Ae=e.resolve({path:ge.path},Q),ke=i.createHref(ge.fullPath);return Bt(ge,Ae,{params:d(Ae.params),hash:Al(ge.hash),redirectedFrom:void 0,href:ke})}let oe;if(V.path!=null)oe=Bt({},V,{path:$u(t,V.path,Q.path).path});else{const ge=Bt({},V.params);for(const Ae in ge)ge[Ae]==null&&delete ge[Ae];oe=Bt({},V,{params:h(ge)}),Q.params=h(Q.params)}const ue=e.resolve(oe,Q),xe=V.hash||"";ue.params=u(d(ue.params));const Re=WM(n,Bt({},V,{hash:BM(xe),path:ue.path})),pe=i.createHref(Re);return Bt({fullPath:Re,hash:xe,query:n===$p?iy(V.query):V.query||{}},ue,{redirectedFrom:void 0,href:pe})}function v(V){return typeof V=="string"?$u(t,V,l.value.path):Bt({},V)}function y(V,Q){if(c!==V)return sa(on.NAVIGATION_CANCELLED,{from:Q,to:V})}function x(V){return A(V)}function S(V){return x(Bt(v(V),{replace:!0}))}function E(V,Q){const oe=V.matched[V.matched.length-1];if(oe&&oe.redirect){const{redirect:ue}=oe;let xe=typeof ue=="function"?ue(V,Q):ue;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=v(xe):{path:xe},xe.params={}),Bt({query:V.query,hash:V.hash,params:xe.path!=null?{}:V.params},xe)}}function A(V,Q){const oe=c=g(V),ue=l.value,xe=V.state,Re=V.force,pe=V.replace===!0,ge=E(oe,ue);if(ge)return A(Bt(v(ge),{state:typeof ge=="object"?Bt({},xe,ge.state):xe,force:Re,replace:pe}),Q||oe);const Ae=oe;Ae.redirectedFrom=Q;let ke;return!Re&&XM(n,ue,oe)&&(ke=sa(on.NAVIGATION_DUPLICATED,{to:Ae,from:ue}),he(ue,ue,!0,!1)),(ke?Promise.resolve(ke):N(Ae,ue)).catch(K=>Tr(K)?Tr(K,on.NAVIGATION_GUARD_REDIRECT)?K:P(K):J(K,Ae,ue)).then(K=>{if(K){if(Tr(K,on.NAVIGATION_GUARD_REDIRECT))return A(Bt({replace:pe},v(K.to),{state:typeof K.to=="object"?Bt({},xe,K.to.state):xe,force:Re}),Q||Ae)}else K=D(Ae,ue,!0,pe,xe);return I(Ae,ue,K),K})}function M(V,Q){const oe=y(V,Q);return oe?Promise.reject(oe):Promise.resolve()}function b(V){const Q=Ge.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(V):V()}function N(V,Q){let oe;const[ue,xe,Re]=ry(V,Q);oe=Ku(ue.reverse(),"beforeRouteLeave",V,Q);for(const ge of ue)ge.leaveGuards.forEach(Ae=>{oe.push(as(Ae,V,Q))});const pe=M.bind(null,V,Q);return oe.push(pe),ie(oe).then(()=>{oe=[];for(const ge of s.list())oe.push(as(ge,V,Q));return oe.push(pe),ie(oe)}).then(()=>{oe=Ku(xe,"beforeRouteUpdate",V,Q);for(const ge of xe)ge.updateGuards.forEach(Ae=>{oe.push(as(Ae,V,Q))});return oe.push(pe),ie(oe)}).then(()=>{oe=[];for(const ge of Re)if(ge.beforeEnter)if(Zi(ge.beforeEnter))for(const Ae of ge.beforeEnter)oe.push(as(Ae,V,Q));else oe.push(as(ge.beforeEnter,V,Q));return oe.push(pe),ie(oe)}).then(()=>(V.matched.forEach(ge=>ge.enterCallbacks={}),oe=Ku(Re,"beforeRouteEnter",V,Q,b),oe.push(pe),ie(oe))).then(()=>{oe=[];for(const ge of o.list())oe.push(as(ge,V,Q));return oe.push(pe),ie(oe)}).catch(ge=>Tr(ge,on.NAVIGATION_CANCELLED)?ge:Promise.reject(ge))}function I(V,Q,oe){a.list().forEach(ue=>b(()=>ue(V,Q,oe)))}function D(V,Q,oe,ue,xe){const Re=y(V,Q);if(Re)return Re;const pe=Q===Zr,ge=ko?history.state:{};oe&&(ue||pe?i.replace(V.fullPath,Bt({scroll:pe&&ge&&ge.scroll},xe)):i.push(V.fullPath,xe)),l.value=V,he(V,Q,oe,pe),P()}let X;function Y(){X||(X=i.listen((V,Q,oe)=>{if(!Xe.listening)return;const ue=g(V),xe=E(ue,Xe.currentRoute.value);if(xe){A(Bt(xe,{replace:!0,force:!0}),ue).catch(ll);return}c=ue;const Re=l.value;ko&&QM(Yp(Re.fullPath,oe.delta),Du()),N(ue,Re).catch(pe=>Tr(pe,on.NAVIGATION_ABORTED|on.NAVIGATION_CANCELLED)?pe:Tr(pe,on.NAVIGATION_GUARD_REDIRECT)?(A(Bt(v(pe.to),{force:!0}),ue).then(ge=>{Tr(ge,on.NAVIGATION_ABORTED|on.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===dd.pop&&i.go(-1,!1)}).catch(ll),Promise.reject()):(oe.delta&&i.go(-oe.delta,!1),J(pe,ue,Re))).then(pe=>{pe=pe||D(ue,Re,!1),pe&&(oe.delta&&!Tr(pe,on.NAVIGATION_CANCELLED)?i.go(-oe.delta,!1):oe.type===dd.pop&&Tr(pe,on.NAVIGATION_ABORTED|on.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),I(ue,Re,pe)}).catch(ll)}))}let $=Ca(),G=Ca(),z;function J(V,Q,oe){P(V);const ue=G.list();return ue.length?ue.forEach(xe=>xe(V,Q,oe)):console.error(V),Promise.reject(V)}function Z(){return z&&l.value!==Zr?Promise.resolve():new Promise((V,Q)=>{$.add([V,Q])})}function P(V){return z||(z=!V,Y(),$.list().forEach(([Q,oe])=>V?oe(V):Q()),$.reset()),V}function he(V,Q,oe,ue){const{scrollBehavior:xe}=r;if(!ko||!xe)return Promise.resolve();const Re=!oe&&ey(Yp(V.fullPath,0))||(ue||!oe)&&history.state&&history.state.scroll||null;return zf().then(()=>xe(V,Q,Re)).then(pe=>pe&&JM(pe)).catch(pe=>J(pe,V,Q))}const fe=V=>i.go(V);let He;const Ge=new Set,Xe={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:g,options:r,push:x,replace:S,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:Z,install(V){V.component("RouterLink",Vo),V.component("RouterView",Cy),V.config.globalProperties.$router=Xe,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),ko&&!He&&l.value===Zr&&(He=!0,x(i.location).catch(ue=>{}));const Q={};for(const ue in Zr)Object.defineProperty(Q,ue,{get:()=>l.value[ue],enumerable:!0});V.provide(Lu,Xe),V.provide(Gf,Zx(Q)),V.provide(ud,l);const oe=V.unmount;Ge.add(V),V.unmount=function(){Ge.delete(V),Ge.size<1&&(c=Zr,X&&X(),X=null,l.value=Zr,He=!1,z=!1),oe()}}};function ie(V){return V.reduce((Q,oe)=>Q.then(()=>b(oe)),Promise.resolve())}return Xe}const sm="/assets/light-DIg6qvTy.png",om="/assets/dark-D3srNl-h.png",Yr=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},Iy={class:"header"},Ly={class:"nav container"},Dy={class:"logo"},Ny={class:"nav-links"},Oy={class:"nav-actions"},Uy={class:"theme-icon-image"},Fy=["src","alt"],By=["src","alt"],ky={class:"back-to-top-content"},Vy={key:0,class:"mobile-menu"},zy={__name:"Header",props:{isDark:Boolean},emits:["toggle-theme"],setup(r,{emit:e}){const t=g=>{if(window.location.pathname!=="/")window.location.href=`/#${g.substring(1)}`;else{const v=document.querySelector(g);v&&v.scrollIntoView({behavior:"smooth",block:"start"})}},n=r,i=e,s=Pt(!1),o=Pt(""),a=Pt(!1),l=Pt(!1),c=Pt(0),u=si(()=>n.isDark?om:sm),h=()=>{a.value||(a.value=!0,i("toggle-theme"),setTimeout(()=>{a.value=!1},300))},d=()=>{s.value=!s.value},f=()=>{s.value=!1},p=()=>{window.scrollTo({top:0,behavior:"smooth"})},_=()=>{window.jinrishici&&window.jinrishici.load(g=>{o.value=g.data.content})},m=()=>{const g=document.createElement("script");g.src="https://sdk.jinrishici.com/v2/browser/jinrishici.js",g.charset="utf-8",g.onload=()=>{_()},document.head.appendChild(g)};return qr(()=>{m(),window.addEventListener("scroll",()=>{const g=document.querySelector(".header");g&&(window.scrollY>10?g.classList.add("scrolled"):g.classList.remove("scrolled")),window.scrollY>300?l.value=!0:l.value=!1;const v=document.documentElement.scrollHeight-document.documentElement.clientHeight,y=window.scrollY/v*100;c.value=Math.min(100,Math.max(0,y))})}),(g,v)=>(dt(),vt("header",Iy,[W("div",{class:"scroll-progress",style:Xs({width:c.value+"%"})},null,4),W("nav",Ly,[W("div",Dy,[Qt(Kt(Vo),{to:"/",class:"logo-text"},{default:Hs(()=>[ls(mn(o.value||"ContinueYN"),1)]),_:1})]),W("ul",Ny,[W("li",null,[Qt(Kt(Vo),{to:"/",class:"nav-link"},{default:Hs(()=>[...v[10]||(v[10]=[ls("首页",-1)])]),_:1})]),W("li",null,[W("a",{href:"#about",class:"nav-link",onClick:v[0]||(v[0]=mi(y=>t("#about"),["prevent"]))},"关于")]),W("li",null,[W("a",{href:"#skills",class:"nav-link",onClick:v[1]||(v[1]=mi(y=>t("#skills"),["prevent"]))},"技能")]),W("li",null,[W("a",{href:"#projects",class:"nav-link",onClick:v[2]||(v[2]=mi(y=>t("#projects"),["prevent"]))},"项目")]),W("li",null,[W("a",{href:"#contact",class:"nav-link",onClick:v[3]||(v[3]=mi(y=>t("#contact"),["prevent"]))},"联系")]),W("li",null,[Qt(Kt(Vo),{to:"/blog",class:"nav-link"},{default:Hs(()=>[...v[11]||(v[11]=[ls("文章",-1)])]),_:1})])]),W("div",Oy,[W("button",{onClick:h,class:Vr(["theme-toggle",{animating:a.value}]),"aria-label":"切换主题"},[W("div",Uy,[W("img",{src:u.value,alt:r.isDark?"切换到日间模式":"切换到夜间模式",class:"theme-icon current",loading:"lazy"},null,8,Fy),W("img",{src:r.isDark?Kt(sm):Kt(om),alt:r.isDark?"日间模式":"夜间模式",class:"theme-icon next",loading:"lazy"},null,8,By)])],2),W("button",{onClick:p,class:Vr(["back-to-top",{show:l.value}]),"aria-label":"回到顶部"},[W("div",ky,[v[12]||(v[12]=W("div",{class:"sakura-petal petal-1"},null,-1)),v[13]||(v[13]=W("div",{class:"sakura-petal petal-2"},null,-1)),v[14]||(v[14]=W("div",{class:"sakura-petal petal-3"},null,-1)),v[15]||(v[15]=W("div",{class:"star-icon"},"✦",-1)),Qt(Kt(iM),{size:"20",class:"arrow-icon"})]),v[16]||(v[16]=W("div",{class:"back-to-top-glow"},null,-1))],2),W("button",{class:"mobile-menu-btn",onClick:d,"aria-label":"切换菜单"},[...v[17]||(v[17]=[W("span",null,null,-1),W("span",null,null,-1),W("span",null,null,-1)])])])]),s.value?(dt(),vt("div",Vy,[Qt(Kt(Vo),{to:"/",class:"mobile-nav-link",onClick:v[4]||(v[4]=y=>f())},{default:Hs(()=>[...v[18]||(v[18]=[ls("首页",-1)])]),_:1}),W("a",{href:"#about",class:"mobile-nav-link",onClick:v[5]||(v[5]=mi(()=>{t("#about"),f()},["prevent"]))},"关于"),W("a",{href:"#skills",class:"mobile-nav-link",onClick:v[6]||(v[6]=mi(()=>{t("#skills"),f()},["prevent"]))},"技能"),W("a",{href:"#projects",class:"mobile-nav-link",onClick:v[7]||(v[7]=mi(()=>{t("#projects"),f()},["prevent"]))},"项目"),W("a",{href:"#contact",class:"mobile-nav-link",onClick:v[8]||(v[8]=mi(()=>{t("#contact"),f()},["prevent"]))},"联系"),Qt(Kt(Vo),{to:"/blog",class:"mobile-nav-link",onClick:v[9]||(v[9]=y=>f())},{default:Hs(()=>[...v[19]||(v[19]=[ls("博客",-1)])]),_:1})])):Zs("",!0)]))}},Hy=Yr(zy,[["__scopeId","data-v-b8891f7e"]]),Gy="/assets/user-BhXDwF8C.jpg",Wy="/assets/background-music-CXiIKsBW.mp3",Xy={id:"home",class:"hero"},qy={class:"container"},Yy={class:"hero-content"},$y={class:"hero-text"},jy={class:"hero-actions fade-in-up",style:{"animation-delay":"0.4s"}},Ky={class:"hero-visual"},Zy={class:"avatar-wrapper"},Jy={class:"audio-control-inner"},Qy={key:0,class:"play-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},eS={key:1,class:"pause-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},tS={__name:"Hero",setup(r){const e=Pt(null),t=Pt(null),n=Pt(!1);let i=null,s=null,o=null,a=null,l=null,c=null,u=175;const h=Pt(!1),d=()=>{const x=h.value;h.value=document.documentElement.classList.contains("dark"),x!==h.value&&e.value&&e.value.getContext("2d").clearRect(0,0,600,600)};qr(()=>{d(),v(),window.addEventListener("resize",v);const x=new IntersectionObserver((E,A)=>{E.forEach(M=>{M.isIntersecting&&(M.target.classList.add("is-visible"),A.unobserve(M.target))})},{threshold:.12});document.querySelectorAll(".fade-in-up").forEach(E=>x.observe(E)),window.__heroObserver=x,new MutationObserver(()=>{d()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})});const f=async()=>{i||await p(),n.value?m():_()},p=async()=>{try{i=new(window.AudioContext||window.webkitAudioContext),s=i.createAnalyser(),s.fftSize=256,a=new Audio(Wy),a.loop=!0,a.crossOrigin="anonymous",o=i.createMediaElementSource(a),o.connect(s),s.connect(i.destination);const x=s.frequencyBinCount;c=new Uint8Array(x),g()}catch(x){console.error("音频初始化失败:",x)}},_=async()=>{i&&i.state==="suspended"&&await i.resume(),a&&(await a.play(),n.value=!0)},m=()=>{a&&(a.pause(),n.value=!1)},g=()=>{const x=e.value;if(!x)return;const S=x.getContext("2d");let E=0;const A=()=>{if(l=requestAnimationFrame(A),E+=.02,S.clearRect(0,0,x.width,x.height),s&&n.value){s.getByteFrequencyData(c);const M=300,b=300,I=u+30,D=80,X=Math.PI*2/D;for(let Y=0;Y<D;Y++){const $=Y*X,z=(c[Y]||0)/255,J=Math.sin(Y*.8)*.5,Z=Math.cos(Y*.5)*.3,P=Math.sin(Y*1.2)*.2,he=J+Z+P,fe=Math.max(2,z*40+5+he*25),He=M+Math.cos($)*(I-fe/2),Ge=b+Math.sin($)*(I-fe/2),Xe=M+Math.cos($)*(I+fe/2),ie=b+Math.sin($)*(I+fe/2),V=S.createLinearGradient(He,Ge,Xe,ie);h.value?(V.addColorStop(0,`rgba(138, 43, 226, ${.4+z*.6})`),V.addColorStop(.5,`rgba(170, 126, 247, ${.6+z*.4})`),V.addColorStop(1,`rgba(138, 43, 226, ${.4+z*.6})`)):(V.addColorStop(0,`rgba(255, 255, 255, ${.4+z*.6})`),V.addColorStop(.5,`rgba(167, 254, 215, ${.6+z*.4})`),V.addColorStop(1,`rgba(255, 255, 255, ${.4+z*.6})`)),S.beginPath(),S.moveTo(He,Ge),S.lineTo(Xe,ie),S.strokeStyle=V,S.lineWidth=1.5+z*2,S.lineCap="round",S.stroke()}S.beginPath(),S.arc(M,b,I,0,Math.PI*2),S.strokeStyle=h.value?"rgba(138, 43, 226, 0.25)":"rgba(66, 239, 172, 0.25)",S.lineWidth=1.5,S.stroke();for(let Y=0;Y<8;Y++){const $=I+30+Math.sin(E+Y)*10,G=(Math.sin(E*1.5+Y)+1)/2*.15;S.beginPath(),S.arc(M,b,$,0,Math.PI*2),S.strokeStyle=h.value?`rgba(138, 43, 226, ${G})`:`rgba(66, 239, 172, ${G})`,S.lineWidth=1,S.stroke()}}};A()},v=()=>{const x=e.value,S=t.value;x&&S&&(x.width=600,x.height=600,u=S.getBoundingClientRect().width/2)};Hf(()=>{l&&cancelAnimationFrame(l),a&&(a.pause(),a=null),o&&(o.disconnect(),o=null),s&&(s.disconnect(),s=null),i&&(i.close(),i=null),window.removeEventListener("resize",v);const x=window.__heroObserver;x&&typeof x.disconnect=="function"&&x.disconnect();try{delete window.__heroObserver}catch{}});const y=x=>{if(window.location.pathname!=="/")window.location.href=`/#${x.substring(1)}`;else{const S=document.querySelector(x);S&&S.scrollIntoView({behavior:"smooth",block:"start"})}};return(x,S)=>(dt(),vt("section",Xy,[W("div",qy,[W("div",Yy,[W("div",$y,[S[2]||(S[2]=El('<h1 class="hero-title fade-in-up" data-v-52b11148><span class="hello-line" data-v-52b11148>HELLO, I&#39;M</span><span class="calligraphy-line text-gradient" data-v-52b11148><svg class="yu animated-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" data-v-52b11148><g transform="translate(0,0) scale(0.303,0.303)" data-v-52b11148><path fill="#6c91ee" d=" M 185.48 64.76 C 192.71 63.61 199.97 62.42 206.92 60.03 C 212.40 67.09 220.68 70.43 229.20 72.16 C 235.15 72.99 239.42 77.56 244.62 80.11 C 251.60 82.21 254.38 89.64 257.00 95.69 C 247.40 102.40 237.85 109.20 228.28 115.95 C 236.69 119.06 245.47 121.73 252.60 127.42 C 263.68 136.27 275.16 144.73 284.83 155.17 C 294.66 165.50 307.65 171.79 319.28 179.73 C 328.73 186.41 338.79 192.14 348.51 198.39 C 353.39 201.54 359.76 201.16 364.49 204.49 C 374.43 215.99 391.44 215.16 404.21 221.66 C 414.20 226.83 425.47 228.88 435.14 234.72 C 442.02 238.80 450.23 237.91 457.83 239.10 C 460.95 240.11 463.63 242.13 466.52 243.64 C 471.36 246.59 477.20 247.28 482.16 250.00 C 485.19 251.97 487.90 254.40 490.60 256.81 C 486.93 259.83 483.01 262.64 478.63 264.54 C 470.83 267.19 462.11 265.98 454.55 269.41 C 448.80 271.83 442.44 272.09 436.44 273.60 C 431.81 274.46 427.26 275.92 422.54 276.12 C 416.27 276.60 410.13 274.31 403.88 275.25 C 393.33 277.05 382.45 272.99 372.15 276.73 C 364.74 270.85 358.73 263.59 352.43 256.65 C 339.70 249.05 331.56 236.05 320.66 226.30 C 317.65 222.95 312.94 221.59 310.35 217.85 C 303.52 205.45 292.58 196.18 283.10 185.91 C 273.73 178.22 265.59 169.05 259.16 158.76 C 248.92 146.67 235.32 137.64 220.27 132.68 C 206.02 152.30 196.04 174.75 180.45 193.42 C 173.90 201.88 166.93 210.02 160.73 218.75 C 151.98 230.89 140.22 240.42 128.58 249.66 C 119.66 257.34 111.67 266.23 101.61 272.51 C 96.25 275.91 89.40 277.80 86.07 283.69 C 79.22 283.35 74.62 289.32 68.67 291.58 C 59.09 294.83 48.48 298.28 38.48 294.74 C 53.74 281.66 68.98 268.41 82.18 253.19 C 94.20 239.22 107.79 226.66 119.08 212.06 C 126.99 202.02 135.76 192.66 143.28 182.31 C 149.32 171.95 155.60 161.69 160.87 150.91 C 171.22 125.67 191.34 105.75 200.96 80.19 C 195.94 74.91 190.27 70.27 185.48 64.76 Z" data-v-52b11148></path><path fill="#6c91ee" d=" M 219.85 215.83 C 229.61 214.15 239.57 213.37 249.47 214.06 C 257.95 213.73 265.70 217.45 273.59 220.01 C 272.11 223.75 270.26 227.40 269.49 231.37 C 269.27 237.34 265.00 243.27 259.16 244.79 C 254.25 245.52 249.27 245.73 244.32 246.16 C 242.84 250.35 240.31 254.07 238.66 258.17 C 238.47 261.99 239.96 265.70 240.43 269.47 C 242.69 274.21 239.52 278.39 237.84 282.56 C 251.42 284.05 264.90 282.40 278.17 279.69 C 285.52 281.21 292.99 283.24 299.90 286.32 C 304.41 289.91 308.55 293.97 313.21 297.39 C 312.72 300.13 312.77 303.06 311.57 305.62 C 303.81 310.87 294.75 315.20 285.16 314.80 C 273.36 314.16 261.51 314.18 249.78 312.67 C 246.98 312.30 243.09 313.17 242.43 316.38 C 241.38 327.89 242.43 339.46 242.72 350.99 C 243.15 358.99 242.91 367.18 244.96 374.99 C 247.23 383.08 246.56 391.58 247.87 399.83 C 250.37 417.91 249.66 436.56 243.98 453.99 C 240.89 462.53 232.64 469.40 223.15 467.95 C 212.97 459.75 206.51 447.91 196.72 439.28 C 192.58 435.84 187.42 433.99 183.11 430.84 C 179.05 425.71 176.64 418.62 169.89 416.29 C 170.51 414.57 171.16 412.86 171.82 411.16 C 178.86 413.22 186.05 414.84 193.36 415.52 C 199.45 415.69 205.46 414.23 211.45 413.39 C 212.85 406.12 213.63 398.74 214.17 391.36 C 215.21 379.77 211.22 368.29 212.81 356.69 C 214.62 345.94 211.32 335.29 209.85 324.72 C 202.19 323.43 194.30 323.40 186.85 325.80 C 173.74 328.30 158.34 330.57 146.76 322.24 C 145.31 321.33 143.90 320.36 142.49 319.40 C 150.92 313.26 159.65 306.98 169.73 303.88 C 178.04 301.91 186.32 299.69 194.74 298.21 C 199.80 297.40 206.67 298.07 209.47 292.61 C 212.05 283.58 210.18 274.30 207.61 265.52 C 207.11 259.84 202.69 255.67 197.99 253.10 C 188.36 250.34 178.08 251.92 168.39 249.45 C 164.73 247.36 161.28 244.74 158.96 241.17 C 167.39 237.70 173.53 229.83 182.91 228.48 C 189.49 227.86 195.60 225.26 202.00 223.83 C 208.44 222.26 213.13 216.74 219.85 215.83 Z" data-v-52b11148></path><path fill="#6c91ee" d=" M 119.47 358.44 C 126.45 349.88 125.54 337.83 132.08 328.98 C 142.07 339.53 146.45 353.81 148.78 367.81 C 150.23 373.44 152.93 378.86 152.47 384.85 C 151.88 392.46 149.94 399.91 147.98 407.27 C 143.06 414.16 137.36 420.48 132.55 427.46 C 125.75 426.27 118.11 425.25 113.05 420.06 C 111.05 416.48 109.22 412.25 110.13 408.07 C 112.54 394.82 113.64 381.27 112.68 367.83 C 112.22 363.40 117.16 361.45 119.47 358.44 Z" data-v-52b11148></path><path fill="#6c91ee" d=" M 279.81 340.18 C 289.83 342.32 299.83 344.75 310.07 345.70 C 315.91 346.73 322.75 346.43 327.51 350.54 C 336.60 358.10 348.80 362.38 355.08 372.93 C 359.78 381.46 366.41 390.29 365.58 400.53 C 360.76 404.96 356.43 410.41 350.40 413.28 C 341.90 414.99 333.59 410.07 328.19 403.82 C 320.02 394.80 310.30 387.02 303.42 376.91 C 300.66 367.54 289.31 364.92 285.93 356.05 C 283.72 350.83 281.82 345.48 279.81 340.18 Z" data-v-52b11148></path></g></svg><svg class="nuo animated-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" data-v-52b11148><g transform="translate(0,0) scale(0.303,0.303)" data-v-52b11148><path fill="#79bbdc" d=" M 341.07 73.10 C 342.47 70.77 345.41 67.88 348.25 69.74 C 357.79 75.07 367.02 81.31 374.72 89.12 C 385.03 101.93 379.07 119.04 379.16 133.86 C 387.64 137.91 397.15 134.13 405.85 132.57 C 414.82 130.38 423.79 133.36 432.74 134.07 C 438.67 134.10 444.27 140.08 442.18 146.02 C 440.30 152.08 436.15 160.26 428.44 158.39 C 418.64 157.88 408.82 157.36 399.02 157.87 C 390.98 156.86 381.63 155.07 374.78 160.77 C 367.95 170.35 367.10 182.58 361.84 192.94 C 357.60 201.86 350.31 208.68 344.84 216.78 C 342.06 216.19 339.24 215.62 336.45 215.12 C 335.23 216.56 334.00 217.99 332.75 219.40 C 327.49 205.28 332.99 190.73 334.42 176.52 C 335.94 172.04 333.46 168.16 331.22 164.62 C 317.50 167.50 303.76 170.42 290.32 174.42 C 288.44 176.70 288.48 179.96 287.55 182.59 C 285.64 192.14 282.30 201.34 277.94 210.02 C 275.95 213.92 270.02 213.74 267.22 210.76 C 259.49 203.92 256.82 193.66 253.99 184.18 C 246.62 186.51 238.91 190.39 230.99 187.97 C 220.58 184.80 211.36 178.20 203.95 170.31 C 208.03 168.54 212.03 166.40 216.45 165.60 C 228.75 163.49 240.90 160.18 252.39 155.27 C 251.80 139.37 247.13 124.08 242.48 109.00 C 240.50 103.08 240.81 96.52 242.67 90.62 C 244.14 86.55 249.26 86.68 252.85 87.19 C 264.76 89.88 273.11 99.45 280.80 108.16 C 287.54 120.74 286.26 135.41 287.75 149.17 C 303.90 149.56 319.83 146.42 335.40 142.41 C 341.02 125.36 344.34 106.81 340.17 89.04 C 339.51 83.82 337.91 77.82 341.07 73.10 Z" data-v-52b11148></path><path fill="#79bbdc" d=" M 185.23 96.98 C 194.31 99.43 202.06 105.11 209.97 110.02 C 209.99 115.37 210.01 120.73 210.03 126.09 C 196.88 136.92 179.35 138.39 163.13 140.43 C 159.76 140.94 156.38 140.12 153.38 138.59 C 147.04 135.44 140.38 132.71 134.89 128.12 C 128.56 121.91 122.88 114.87 119.19 106.76 C 128.60 102.92 138.90 103.43 148.84 102.51 C 160.83 99.97 172.91 97.07 185.23 96.98 Z" data-v-52b11148></path><path fill="#79bbdc" d=" M 136.84 202.96 C 147.05 196.41 158.64 190.83 170.92 190.16 C 177.25 193.01 182.93 197.08 188.95 200.51 C 191.27 211.94 188.54 223.47 184.10 234.02 C 180.50 245.00 175.98 255.62 171.13 266.10 C 167.04 274.53 167.23 284.08 164.38 292.86 C 160.17 313.37 158.08 334.27 157.00 355.16 C 172.64 343.02 188.22 330.59 206.02 321.69 C 188.82 347.90 173.29 375.13 156.78 401.77 C 147.36 416.85 142.43 434.09 135.16 450.20 C 132.61 456.13 124.83 458.46 119.01 456.99 C 110.73 452.01 102.95 445.69 96.94 438.09 C 94.81 431.89 98.79 425.99 100.34 420.16 C 103.38 411.08 114.63 408.26 117.57 399.06 C 119.90 390.87 124.44 383.40 125.39 374.84 C 127.71 355.09 127.99 335.16 130.44 315.42 C 133.14 291.85 131.98 267.98 135.98 244.55 C 131.51 244.30 126.56 243.83 122.68 246.59 C 118.31 248.49 113.99 253.17 108.93 251.14 C 94.87 245.98 80.52 239.33 71.16 227.16 C 85.96 218.77 103.91 220.62 118.96 213.00 C 125.28 210.35 131.62 207.50 136.84 202.96 Z" data-v-52b11148></path><path fill="#79bbdc" d=" M 290.97 212.88 C 298.07 213.24 305.52 212.13 312.48 213.62 C 317.98 219.40 322.99 225.82 329.45 230.65 C 328.86 233.56 328.33 236.50 327.76 239.42 C 338.92 243.94 351.65 244.55 363.13 240.80 C 376.01 236.03 390.19 239.29 403.49 237.19 C 411.67 232.89 420.29 228.21 429.93 229.13 C 439.87 231.33 448.12 237.42 456.77 242.40 C 455.67 247.37 456.00 256.33 449.38 257.33 C 431.99 259.10 414.48 258.77 397.03 259.21 C 376.24 260.24 355.42 261.94 334.96 265.88 C 332.11 266.60 328.62 267.11 327.27 270.16 C 320.45 280.58 314.66 291.62 308.44 302.38 C 303.14 312.13 297.09 321.86 295.50 333.06 C 296.09 336.74 298.50 339.84 299.24 343.50 C 304.12 366.73 306.38 390.43 307.17 414.13 C 324.82 413.44 342.50 412.33 360.01 409.92 C 364.24 409.69 366.37 405.54 368.28 402.32 C 372.23 391.56 373.33 380.03 376.23 369.00 C 379.77 359.87 381.21 350.15 382.77 340.54 C 364.94 342.73 347.48 347.46 330.44 353.07 C 327.78 353.81 325.17 352.42 322.73 351.53 C 314.43 348.29 308.16 341.68 301.69 335.81 C 310.30 331.15 320.14 329.64 329.49 327.11 C 343.17 323.54 357.56 326.02 371.47 324.44 C 381.77 323.63 388.58 311.99 399.68 315.33 C 412.48 320.14 423.06 330.02 430.91 341.04 C 433.10 347.40 431.63 354.58 428.63 360.49 C 424.28 369.29 425.89 379.85 421.51 388.64 C 412.36 404.31 411.77 425.68 395.39 436.44 C 382.37 441.88 369.51 431.73 356.34 434.33 C 343.41 436.50 330.42 438.20 317.50 440.41 C 310.84 440.55 306.72 446.12 302.04 450.01 C 297.58 447.86 291.78 447.61 288.71 443.26 C 281.45 435.15 281.68 423.47 280.62 413.32 C 279.99 398.59 277.78 384.01 275.51 369.46 C 264.90 377.81 259.37 390.50 250.05 400.04 C 245.88 405.23 239.94 408.54 235.44 413.36 C 231.89 418.65 229.84 424.84 225.97 429.95 C 217.81 441.09 206.47 449.21 196.34 458.41 C 192.11 462.83 185.83 459.23 180.67 458.80 C 190.48 443.74 200.12 428.48 211.67 414.67 C 216.34 409.71 217.92 402.90 221.06 397.03 C 229.74 380.05 236.77 362.18 247.11 346.08 C 254.07 335.25 257.48 322.50 265.05 312.03 C 268.00 307.73 271.77 303.66 272.31 298.19 C 274.08 290.43 276.20 282.64 276.36 274.64 C 260.59 279.13 245.74 286.39 229.96 290.84 C 223.53 293.00 216.14 293.19 210.04 289.93 C 201.38 285.29 193.01 280.12 184.24 275.67 C 184.15 274.97 183.96 273.57 183.87 272.87 C 196.85 264.03 212.77 261.45 227.96 258.91 C 244.33 257.12 260.62 254.71 276.80 251.61 C 280.22 250.80 283.49 249.47 286.75 248.18 C 286.45 236.23 288.59 224.52 290.97 212.88 Z" data-v-52b11148></path></g></svg></span></h1><p class="hero-role fade-in-up" style="animation-delay:0.15s;" data-v-52b11148>一名 AI 应用全栈开发者，专注创造优雅高效的数字作品</p><p class="hero-description fade-in-up" style="animation-delay:0.2s;" data-v-52b11148> 从界面到算法，把每一个想法打磨成会呼吸的作品。 </p>',3)),W("div",jy,[W("a",{href:"#projects",class:"btn",onClick:S[0]||(S[0]=mi(E=>y("#projects"),["prevent"]))},"Show"),W("a",{href:"#contact",class:"btn btn-outline",onClick:S[1]||(S[1]=mi(E=>y("#contact"),["prevent"]))},"Contact")]),S[3]||(S[3]=El('<div class="hero-stats fade-in-up" style="animation-delay:0.6s;" data-v-52b11148><div class="stat" data-v-52b11148><span class="stat-number" data-v-52b11148>99+</span><span class="stat-label" data-v-52b11148>年经验</span></div><div class="stat" data-v-52b11148><span class="stat-number" data-v-52b11148>99+</span><span class="stat-label" data-v-52b11148>项目完成</span></div><div class="stat" data-v-52b11148><span class="stat-number" data-v-52b11148>100%</span><span class="stat-label" data-v-52b11148>客户满意</span></div></div>',1))]),W("div",Ky,[W("div",Zy,[W("canvas",{ref_key:"waveCanvas",ref:e,class:"wave-canvas"},null,512),W("div",{class:"avatar",ref_key:"avatarElement",ref:t},[...S[4]||(S[4]=[W("img",{src:Gy,alt:"个人头像",loading:"lazy"},null,-1)])],512),W("button",{class:Vr(["audio-control",{playing:n.value}]),onClick:f},[W("div",Jy,[n.value?(dt(),vt("svg",eS,[...S[6]||(S[6]=[W("path",{d:"M6 6h12v12H6z"},null,-1)])])):(dt(),vt("svg",Qy,[...S[5]||(S[5]=[W("path",{d:"M8 5v14l11-7z"},null,-1)])]))]),S[7]||(S[7]=W("div",{class:"audio-control-ring"},null,-1)),S[8]||(S[8]=W("div",{class:"audio-control-glow"},null,-1))],2)])])])])]))}},nS=Yr(tS,[["__scopeId","data-v-52b11148"]]),iS={id:"about",class:"about"},rS={class:"container"},sS=["onClick"],oS={class:"card-content"},aS={class:"vertical-text"},lS={class:"modal-title"},cS={class:"modal-description"},uS={class:"modal-tags"},hS={class:"modal-details"},dS={__name:"About",setup(r){const e=Pt([]),t=Pt([]),n=Pt(0),i=Pt(!1),s=Pt(0),o=Pt([]),a=Pt(null),l=(v,y)=>{v&&(o.value[y]=v)},c=Pt([{text:"兴趣",title:"兴趣爱好",description:"对技术充满热情，享受创造的过程",tags:["Web 开发","AI 应用"],details:"我热衷于探索最新的 Web 技术和 AI 应用，喜欢将创意转化为实际的产品。在空闲时间，我会研究开源项目，参与技术社区，不断提升自己的技能。"},{text:"特长",title:"专业特长",description:"全栈开发能力，从前端到后端都能胜任",tags:["Vue/React","Node.js","数据库"],details:"具备完整的前后端开发能力，熟悉现代前端框架和后端技术栈。能够快速学习新技术，并根据项目需求选择最合适的解决方案。"},{text:"经历",title:"项目经历",description:"2 周以上的项目开发经验",tags:["个人项目","实战经验"],details:"虽然正式工作经验不长，但我通过个人项目和实践积累了宝贵的开发经验。每个项目都让我成长，每次挑战都让我更加强大。"},{text:"技能",title:"技术技能",description:"掌握多种编程语言和开发工具",tags:["JavaScript","Python","Git"],details:"熟练掌握 JavaScript、Python 等编程语言，熟悉 Vue、React 等前端框架，以及 Node.js 后端开发。同时具备运维、测试、网络安全等多方面的基础知识。"},{text:"目标",title:"发展目标",description:"持续学习，成为更优秀的开发者",tags:["技术成长","职业发展"],details:"我的目标是不断提升技术水平，参与更有挑战性的项目，为开源社区做贡献，并帮助他人解决技术问题。相信持续学习和实践是成长的关键。"}]),u=si(()=>c.value[s.value]),h=["rotate(-10deg)","rotate(-6deg) translate(35%, -12%)","rotate(-2deg) translate(65%, -19%)","rotate(2deg) translate(95%, -26%)","rotate(6deg) translate(125%, -23%)"],d=()=>{t.value=e.value,t.value.forEach((v,y)=>{v.nums=y}),n.value=5},f=()=>{t.value.forEach(v=>{let y=v.nums;if(y+1>=t.value.length){y=0,v.style.transition="";const x=c.value.pop();c.value.unshift(x),n.value++,n.value>=9&&(n.value=0)}else y+=1,v.style.transition="transform 0.3s ease";v.style.zIndex=y,v.style.transform=h[y],v.nums=y})},p=v=>{s.value=v,i.value=!0},_=()=>{f()},m=()=>{i.value=!1},g=()=>{a.value&&clearInterval(a.value),setTimeout(()=>{a.value&&clearInterval(a.value),o.value.forEach(v=>{v&&(v.classList.remove("header-fault"),v.style.transform="",v.style.clipPath="")})},1e3),a.value=setInterval(()=>{o.value.forEach(v=>{if(v){v.classList.add("header-fault"),v.style.transform=`translate(${Math.random()*60-30}%,${Math.random()*60-30}%)`;let y=Math.random()*100,x=Math.random()*100,S=Math.random()*50+50,E=Math.random()*40+10;v.style.clipPath=`polygon(${y}% ${x}%, ${y+E}% ${x}%, ${y+E}% ${x+S}%, ${y}% ${x+S}%)`}})},30)};return qr(()=>{d()}),(v,y)=>(dt(),vt("section",iS,[W("div",{class:"header-container",onClick:g},[W("div",{class:"header",ref:x=>l(x,0)},"About",512),W("div",{class:"header",ref:x=>l(x,1)},"About",512),W("div",{class:"header",ref:x=>l(x,2)},"About",512),W("div",{class:"header",ref:x=>l(x,3)},"About",512)]),W("div",rS,[(dt(!0),vt(qi,null,ur(c.value,(x,S)=>(dt(),vt("div",{key:S,ref_for:!0,ref_key:"pokerRefs",ref:e,class:Vr(["poker",`poker${S+1}`]),onClick:E=>p(S)},[W("div",oS,[W("div",aS,[W("span",null,mn(x.text.charAt(0)),1),W("span",null,mn(x.text.charAt(1)),1)])])],10,sS))),128)),W("div",{class:Vr(["poker_top","poker5"]),onClick:_})]),i.value?(dt(),vt("div",{key:0,class:"modal",onClick:m},[W("div",{class:"modal-content",onClick:y[0]||(y[0]=mi(()=>{},["stop"]))},[W("button",{class:"modal-close",onClick:m},[Qt(Kt(rM),{size:24})]),W("h3",lS,mn(u.value.title),1),W("p",cS,mn(u.value.description),1),W("div",uS,[(dt(!0),vt(qi,null,ur(u.value.tags,(x,S)=>(dt(),vt("span",{key:S,class:"tag"},mn(x),1))),128))]),y[1]||(y[1]=W("div",{class:"modal-divider"},null,-1)),W("p",hS,mn(u.value.details),1)])])):Zs("",!0)]))}},fS=Yr(dS,[["__scopeId","data-v-d07806b6"]]),pS={id:"skills",class:"skills"},mS={class:"container"},gS={class:"skills-container"},_S={class:"skills-categories"},vS=["onClick"],xS={class:"skills-content"},MS=["onClick"],yS={class:"skill-header"},SS={class:"skill-icon"},TS={class:"skill-name"},bS={class:"skill-description"},ES={class:"skill-level"},AS={class:"level-bar"},wS=["data-level"],RS={class:"level-text"},CS={class:"tools-section"},PS={class:"tools-grid"},IS={class:"tool-name"},LS={class:"skill-modal-header"},DS={class:"skill-modal-icon"},NS={class:"skill-modal-title"},OS={class:"skill-modal-body"},US={class:"skill-modal-description"},FS={class:"skill-modal-level"},BS={class:"skill-modal-level-bar"},kS={class:"skill-modal-level-text"},VS={key:0,class:"skill-modal-details"},zS={class:"skill-modal-details-list"},HS={__name:"Skills",setup(r){const e=Pt("frontend"),t=Pt(null),n=Pt([{id:"frontend",name:"前端开发",skills:[{name:"Vue.js",icon:"zap",description:"构建现代化的单页应用程序和用户界面",level:90,levelText:"精通",details:["Vue 3 Composition API","Vue Router 4","Pinia 状态管理","Vue Test Utils","Vite 构建工具","Vue 生态系统集成"]},{name:"React",icon:"globe",description:"开发可复用的组件和复杂的前端应用",level:85,levelText:"熟练",details:["React 18 Hooks","React Router","Redux / Zustand","React Testing Library","Next.js 框架","Server Components"]},{name:"TypeScript",icon:"code2",description:"提供类型安全的 JavaScript 开发体验",level:88,levelText:"熟练",details:["高级类型系统","泛型编程","类型声明文件","TypeScript 配置","与框架集成","类型安全的 API 设计"]},{name:"CSS3/SCSS",icon:"palette",description:"创建响应式和美观的用户界面设计",level:92,levelText:"精通",details:["CSS Grid 布局","Flexbox 布局","CSS 变量","SCSS 预处理器","响应式设计","CSS 动画和过渡","Tailwind CSS 等工具"]}]},{id:"backend",name:"后端开发",skills:[{name:"Node.js",icon:"server",description:"构建高性能的服务器端应用程序",level:85,levelText:"熟练",details:["Express.js 框架","NestJS 框架","中间件开发","异步编程","文件系统操作","WebSocket 通信"]},{name:"Python",icon:"python",description:"开发数据分析和后端服务",level:80,levelText:"熟练",details:["Django 框架","FastAPI 框架","Flask 框架","数据分析库","异步编程","装饰器和上下文管理器"]},{name:"数据库",icon:"database",description:"MySQL, MongoDB, Redis 等数据库管理",level:82,levelText:"熟练",details:["SQL 查询优化","数据库设计","事务管理","MongoDB 聚合查询","Redis 缓存策略","数据库备份和恢复"]},{name:"API 设计",icon:"link",description:"RESTful API 和 GraphQL 设计",level:85,levelText:"熟练",details:["RESTful 设计原则","GraphQL Schema 设计","API 版本控制","认证和授权","API 文档","速率限制和安全"]}]},{id:"devops",name:"DevOps",skills:[{name:"Docker",icon:"layers",description:"容器化应用部署和管理",level:78,levelText:"掌握",details:["Dockerfile 编写","Docker Compose","容器网络","容器存储","Docker 镜像优化","容器安全"]},{name:"CI/CD",icon:"refreshCw",description:"自动化构建和部署流程",level:75,levelText:"掌握",details:["GitHub Actions","GitLab CI","Jenkins","自动化测试集成","部署策略","环境管理"]},{name:"AWS",icon:"cloud",description:"云服务管理和部署",level:70,levelText:"掌握",details:["EC2 实例管理","S3 存储","IAM 权限管理","Lambda 函数","API Gateway","CloudFormation"]},{name:"Git",icon:"gitBranch",description:"版本控制和团队协作",level:90,levelText:"精通",details:["分支管理策略","Git 工作流","冲突解决","Git hooks","子模块和子树","Git 性能优化"]}]}]),i=Pt([{name:"VS Code",icon:"code"},{name:"Git",icon:"gitMerge"},{name:"Figma",icon:"layout"},{name:"Webpack",icon:"package"},{name:"Vite",icon:"wind"},{name:"Postman",icon:"send"},{name:"Edge DevTools",icon:"search"}]),s={zap:yM,globe:MM,code2:xM,palette:vM,server:_M,python:Hp,database:gM,link:mM,layers:pM,refreshCw:fM,cloud:dM,gitBranch:hM,code:Hp,gitMerge:uM,layout:cM,package:lM,wind:aM,send:oM,search:sM};let o=null;const a=(u=document)=>{if(!o)return;Array.from(u.querySelectorAll(".skill-card")).forEach(f=>{f.classList.contains("animate-in")||o.observe(f)}),Array.from(u.querySelectorAll(".tool-item")).forEach(f=>{f.classList.contains("animate-in")||o.observe(f)})};qr(()=>{o=new IntersectionObserver((u,h)=>{u.forEach(d=>{d.isIntersecting&&(d.target.classList.add("animate-in"),h.unobserve(d.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"}),a()}),Iu(e,async()=>{document.querySelectorAll(".skill-card").forEach(d=>d.classList.remove("animate-in")),await zf(),Array.from(document.querySelectorAll(".skills-grid")).forEach(d=>{window.getComputedStyle(d).display!=="none"&&a(d)})});const l=u=>{t.value=u,document.body.style.overflow="hidden"},c=()=>{t.value=null,document.body.style.overflow=""};return Hf(()=>{o&&typeof o.disconnect=="function"&&o.disconnect(),o=null,document.body.style.overflow=""}),(u,h)=>(dt(),vt("section",pS,[W("div",mS,[h[5]||(h[5]=W("div",{class:"section-header"},[W("h2",{class:"section-title"},"Skills")],-1)),W("div",gS,[W("div",_S,[(dt(!0),vt(qi,null,ur(n.value,d=>(dt(),vt("div",{key:d.id,class:Vr(["category-tab",{active:e.value===d.id}]),onClick:f=>e.value=d.id},mn(d.name),11,vS))),128))]),W("div",xS,[(dt(!0),vt(qi,null,ur(n.value,d=>$a((dt(),vt("div",{key:d.id,class:"skills-grid"},[(dt(!0),vt(qi,null,ur(d.skills,(f,p)=>(dt(),vt("div",{key:f.name,class:Vr(["skill-card",{clickable:!0}]),style:Xs({animationDelay:`${p*.1}s`}),onClick:_=>l(f)},[W("div",yS,[W("div",SS,[(dt(),al(Hc(s[f.icon]),{size:"24"}))]),W("h3",TS,mn(f.name),1)]),W("p",bS,mn(f.description),1),W("div",ES,[W("div",AS,[W("div",{class:"level-progress",style:Xs({"--target-width":f.level+"%"}),"data-level":f.level},null,12,wS)]),W("span",RS,mn(f.levelText),1)]),h[1]||(h[1]=W("div",{class:"skill-card-footer"},[W("span",{class:"skill-more"},"点击查看详情 →")],-1))],12,MS))),128))])),[[Jx,e.value===d.id]])),128))])]),W("div",CS,[h[2]||(h[2]=W("h3",{class:"tools-title"},"Tools",-1)),W("div",PS,[(dt(!0),vt(qi,null,ur(i.value,(d,f)=>(dt(),vt("div",{key:d.name,class:"tool-item",style:Xs({animationDelay:`${f*.1}s`})},[(dt(),al(Hc(s[d.icon]),{size:"28",class:"tool-icon"})),W("span",IS,mn(d.name),1)],4))),128))])]),t.value?(dt(),vt("div",{key:0,class:"skill-modal",onClick:c},[W("div",{class:"skill-modal-content",onClick:h[0]||(h[0]=mi(()=>{},["stop"]))},[W("button",{class:"skill-modal-close",onClick:c},"×"),W("div",LS,[W("div",DS,[(dt(),al(Hc(s[t.value.icon]),{size:"36"}))]),W("h3",NS,mn(t.value.name),1)]),W("div",OS,[W("p",US,mn(t.value.description),1),W("div",FS,[h[3]||(h[3]=W("div",{class:"skill-modal-level-label"},"掌握程度",-1)),W("div",BS,[W("div",{class:"skill-modal-level-progress",style:Xs({width:t.value.level+"%"})},null,4)]),W("div",kS,mn(t.value.levelText),1)]),t.value.details?(dt(),vt("div",VS,[h[4]||(h[4]=W("h4",{class:"skill-modal-details-title"},"技术细节",-1)),W("ul",zS,[(dt(!0),vt(qi,null,ur(t.value.details,(d,f)=>(dt(),vt("li",{key:f},mn(d),1))),128))])])):Zs("",!0)]),W("div",{class:"skill-modal-footer"},[W("button",{class:"skill-modal-button",onClick:c},"关闭")])])])):Zs("",!0)])]))}},GS=Yr(HS,[["__scopeId","data-v-1fd27d0e"]]);function Pr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function p0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},aa={duration:.5,overwrite:!1,delay:0},Xf,Dn,Jt,Ui=1e8,Yt=1/Ui,pd=Math.PI*2,WS=pd/4,XS=0,m0=Math.sqrt,qS=Math.cos,YS=Math.sin,Cn=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},zr=function(e){return typeof e=="number"},qf=function(e){return typeof e>"u"},xr=function(e){return typeof e=="object"},oi=function(e){return e!==!1},Yf=function(){return typeof window<"u"},jl=function(e){return ln(e)||Cn(e)},g0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zn=Array.isArray,$S=/random\([^)]+\)/g,jS=/,\s*/g,am=/(?:-?\.?\d|\.)+/gi,_0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,v0=/[+-]=-?[.\d]+/,KS=/[^,'"\[\]\s]+/gi,ZS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tn,ar,md,$f,Ai={},cu={},x0,M0=function(e){return(cu=la(e,Ai))&&ui},jf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wl=function(e,t){return!t&&console.warn(e)},y0=function(e,t){return e&&(Ai[e]=t)&&cu&&(cu[e]=t)||Ai},Rl=function(){return 0},JS={suppressEvents:!0,isStart:!0,kill:!1},Gc={suppressEvents:!0,kill:!1},QS={suppressEvents:!0},Kf={},gs=[],gd={},S0,_i={},Ju={},lm=30,Wc=[],Zf="",Jf=function(e){var t=e[0],n,i;if(xr(t)||ln(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wc.length;i--&&!Wc[i].targetTest(t););n=Wc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new q0(e[i],n)))||e.splice(i,1);return e},Js=function(e){return e._gsap||Jf(Fi(e))[0]._gsap},T0=function(e,t,n){return(n=e[t])&&ln(n)?e[t]():qf(n)&&e.getAttribute&&e.getAttribute(t)||n},ai=function(e,t){return(e=e.split(",")).forEach(t)||e},un=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},Ko=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},e1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},uu=function(){var e=gs.length,t=gs.slice(0),n,i;for(gd={},gs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qf=function(e){return!!(e._initted||e._startAt||e.add)},b0=function(e,t,n,i){gs.length&&!Dn&&uu(),e.render(t,n,!!(Dn&&t<0&&Qf(e))),gs.length&&!Dn&&uu()},E0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(KS).length<2?t:Cn(e)?e.trim():e},A0=function(e){return e},wi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},t1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},la=function(e,t){for(var n in t)e[n]=t[n];return e},cm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},hu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},cl=function(e){var t=e.parent||tn,n=e.keyframes?t1(zn(e.keyframes)):wi;if(oi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},n1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},w0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Nu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},xs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},i1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_d=function(e,t,n,i){return e._startAt&&(Dn?e._startAt.revert(Gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},r1=function r(e){return!e||e._ts&&r(e.parent)},um=function(e){return e._repeat?ca(e._tTime,e=e.duration()+e._rDelay)*e:0},ca=function(e,t){var n=Math.floor(e=en(e/t));return e&&n===e?n-1:n},du=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ou=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||Yt)||0))},Uu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=en(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ou(e),n._dirty||Qs(n,e)),e},R0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=du(e.rawTime(),t),(!t._dur||Wl(0,t.totalDuration(),n)-t._tTime>Yt)&&t.render(n,!0)),Qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Yt}},hr=function(e,t,n,i){return t.parent&&xs(t),t._start=en((zr(n)?n:n||e!==tn?Ii(e,n,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),w0(e,t,"_first","_last",e._sort?"_start":0),vd(t)||(e._recent=t),i||R0(e,t),e._ts<0&&Uu(e,e._tTime),e},C0=function(e,t){return(Ai.ScrollTrigger||jf("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},P0=function(e,t,n,i,s){if(tp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&S0!==xi.frame)return gs.push(e),e._lazy=[s,i],1},s1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},vd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},o1=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&s1(e)&&!(!e._initted&&vd(e))||(e._ts<0||e._dp._ts<0)&&!vd(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Wl(0,e._tDur,t),u=ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dn||i||e._zTime===Yt||!t&&e._zTime){if(!e._initted&&P0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Yt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_d(e,t,n,!0),e._onUpdate&&!n&&Si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&xs(e,1),!n&&!Dn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},a1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ua=function(e,t,n,i){var s=e._repeat,o=en(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:en(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Uu(e,e._tTime=e._tDur*a),e.parent&&Ou(e),n||Qs(e.parent,e),e},hm=function(e){return e instanceof Qn?Qs(e):ua(e,e._dur)},l1={_start:0,endTime:Rl,totalDuration:Rl},Ii=function r(e,t,n){var i=e.labels,s=e._recent||l1,o=e.duration()>=Ui?s.endTime(!1):e._dur,a,l,c;return Cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(zn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ul=function(e,t,n){var i=zr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=oi(l.vars.inherit)&&l.parent;o.immediateRender=oi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new gn(t[0],o,t[s+1])},bs=function(e,t){return e||e===0?t(e):t},Wl=function(e,t,n){return n<e?e:n>t?t:n},kn=function(e,t){return!Cn(e)||!(t=ZS.exec(e))?"":t[1]},c1=function(e,t,n){return bs(n,function(i){return Wl(e,t,i)})},xd=[].slice,I0=function(e,t){return e&&xr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xr(e[0]))&&!e.nodeType&&e!==ar},u1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Cn(i)&&!t||I0(i,1)?(s=n).push.apply(s,Fi(i)):n.push(i)})||n},Fi=function(e,t,n){return Jt&&!t&&Jt.selector?Jt.selector(e):Cn(e)&&!n&&(md||!ha())?xd.call((t||$f).querySelectorAll(e),0):zn(e)?u1(e,n):I0(e)?xd.call(e,0):e?[e]:[]},Md=function(e){return e=Fi(e)[0]||wl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fi(t,n.querySelectorAll?n:n===e?wl("Invalid scope")||$f.createElement("div"):e)}},L0=function(e){return e.sort(function(){return .5-Math.random()})},D0=function(e){if(ln(e))return e;var t=xr(e)?e:{each:e},n=eo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Cn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,p){var _=(p||t).length,m=o[_],g,v,y,x,S,E,A,M,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!b){for(A=-Ui;A<(A=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=o[_]=[],g=l?Math.min(b,_)*u-.5:i%b,v=b===Ui?0:l?_*h/b-.5:i/b|0,A=0,M=Ui,E=0;E<_;E++)y=E%b-g,x=v-(E/b|0),m[E]=S=c?Math.abs(c==="y"?x:y):m0(y*y+x*x),S>A&&(A=S),S<M&&(M=S);i==="random"&&L0(m),m.max=A-M,m.min=M,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=kn(t.amount||t.each)||0,n=n&&_<0?G0(n):n}return _=(m[d]-m.min)/m.max||0,en(m.b+(n?n(_):_)*m.v)+m.u}},yd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=en(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zr(n)?0:kn(n))}},N0=function(e,t){var n=zn(e),i,s;return!n&&xr(e)&&(i=n=e.radius||Ui,e.values?(e=Fi(e.values),(s=!zr(e[0]))&&(i*=i)):e=yd(e.increment)),bs(t,n?ln(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ui,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||zr(o)?u:u+kn(o)}:yd(e))},O0=function(e,t,n,i){return bs(zn(e)?!t:n===!0?!!(n=0):!i,function(){return zn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},h1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},d1=function(e,t){return function(n){return e(parseFloat(n))+(t||kn(n))}},f1=function(e,t,n){return F0(e,t,0,1,n)},U0=function(e,t,n){return bs(n,function(i){return e[~~t(i)]})},p1=function r(e,t,n){var i=t-e;return zn(e)?U0(e,r(0,e.length),t):bs(n,function(s){return(i+(s-e)%i)%i+e})},m1=function r(e,t,n){var i=t-e,s=i*2;return zn(e)?U0(e,r(0,e.length-1),t):bs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Cl=function(e){return e.replace($S,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(jS);return O0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},F0=function(e,t,n,i,s){var o=t-e,a=i-n;return bs(s,function(l){return n+((l-e)/o*a||0)})},g1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Cn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(zn(e)&&!zn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(p){p*=h;var _=Math.min(d,~~p);return u[_](p-_)},n=t}else i||(e=la(zn(e)?[]:{},e));if(!u){for(l in t)ep.call(a,e,l,"get",t[l]);s=function(p){return rp(p,a)||(o?e.p:e)}}}return bs(n,s)},dm=function(e,t,n){var i=e.labels,s=Ui,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,n){var i=e.vars,s=i[t],o=Jt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gs.length&&uu(),a&&(Jt=a),u=l?s.apply(c,l):s.call(c),Jt=o,u},ja=function(e){return xs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&Si(e,"onInterrupt"),e},qo,B0=[],k0=function(e){if(e)if(e=!e.name&&e.default||e,Yf()||e.headless){var t=e.name,n=ln(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Rl,render:rp,add:ep,kill:L1,modifier:I1,rawVars:0},o={targetTest:0,get:0,getSetter:ip,aliases:{},register:0};if(ha(),e!==i){if(_i[t])return;wi(i,wi(hu(e,s),o)),la(i.prototype,la(s,hu(e,o))),_i[i.prop=t]=i,e.targetTest&&(Wc.push(i),Kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}y0(t,i),e.register&&e.register(ui,i,li)}else B0.push(e)},qt=255,Ka={aqua:[0,qt,qt],lime:[0,qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qt],navy:[0,0,128],white:[qt,qt,qt],olive:[128,128,0],yellow:[qt,qt,0],orange:[qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qt,0,0],pink:[qt,192,203],cyan:[0,qt,qt],transparent:[qt,qt,qt,0]},Qu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qt+.5|0},V0=function(e,t,n){var i=e?zr(e)?[e>>16,e>>8&qt,e&qt]:0:Ka.black,s,o,a,l,c,u,h,d,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ka[e])i=Ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qt,i&qt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qt,e&qt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(am),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Qu(l+1/3,s,o),i[1]=Qu(l,s,o),i[2]=Qu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(_0),n&&i.length<4&&(i[3]=1),i}else i=e.match(am)||Ka.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/qt,o=i[1]/qt,a=i[2]/qt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},z0=function(e){var t=[],n=[],i=-1;return e.split(_s).forEach(function(s){var o=s.match(Xo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},fm=function(e,t,n){var i="",s=(e+i).match(_s),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=V0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=z0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_s,"1").split(Xo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_s),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},_s=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ka)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),_1=/hsl[a]?\(/,H0=function(e){var t=e.join(" "),n;if(_s.lastIndex=0,_s.test(t))return n=_1.test(t),e[1]=fm(e[1],n),e[0]=fm(e[0],n,z0(e[1])),!0},Pl,xi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,p=function _(m){var g=r()-i,v=m===!0,y,x,S,E;if((g>e||g<0)&&(n+=g-t),i+=g,S=i-n,y=S-o,(y>0||v)&&(E=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,o+=y+(y>=s?4:s-y),x=1),v||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](S,d,E,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){x0&&(!md&&Yf()&&(ar=md=window,$f=ar.document||{},Ai.gsap=ui,(ar.gsapVersions||(ar.gsapVersions=[])).push(ui.version),M0(cu||ar.GreenSockGlobals||!ar.gsap&&ar||{}),B0.forEach(k0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Pl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Pl=0,c=Rl},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,g,v){var y=g?function(x,S,E,A){m(x,S,E,A),h.remove(y)}:m;return h.remove(m),a[v?"unshift":"push"](y),ha(),y},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},h})(),ha=function(){return!Pl&&xi.wake()},Lt={},v1=/^[\d.\-M][\d.\-,\s]/,x1=/["']/g,M1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(x1,"").trim():+c,i=l.substr(a+1).trim();return t},y1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},S1=function(e){var t=(e+"").split("("),n=Lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[M1(t[1])]:y1(e).split(",").map(E0)):Lt._CE&&v1.test(e)?Lt._CE("",e):n},G0=function(e){return function(t){return 1-e(1-t)}},W0=function r(e,t){for(var n=e._first,i;n;)n instanceof Qn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},eo=function(e,t){return e&&(ln(e)?e:Lt[e]||S1(e))||t},ho=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ai(e,function(a){Lt[a]=Ai[a]=s,Lt[o=a.toLowerCase()]=n;for(var l in s)Lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Lt[a+"."+l]=s[l]}),s},X0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},eh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/pd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*YS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:X0(a);return s=pd/s,l.config=function(c,u){return r(e,c,u)},l},th=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:X0(n);return i.config=function(s){return r(e,s)},i};ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ho(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn;ho("Elastic",eh("in"),eh("out"),eh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ho("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ho("Circ",function(r){return-(m0(1-r*r)-1)});ho("Sine",function(r){return r===1?1:-qS(r*WS)+1});ho("Back",th("in"),th("out"),th());Lt.SteppedEase=Lt.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Yt;return function(a){return((i*Wl(0,o,a)|0)+s)*n}}};aa.ease=Lt["quad.out"];ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zf+=r+","+r+"Params,"});var q0=function(e,t){this.id=XS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:T0,this.set=t?t.getSetter:ip},Il=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ua(this,+t.duration,1,1),this.data=t.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Pl||xi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ha(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uu(this,n),!s._dp||s.parent||R0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),b0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ca(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?du(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Yt?0:this._rts,this.totalTime(Wl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ou(this),i1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ha(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Yt&&(this._tTime-=Yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=en(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(oi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?du(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=QS);var i=Dn;return Dn=n,Qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ii(this,n),oi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,oi(i)),this._dur||(this._zTime=-Yt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Yt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ln(n)?n:A0,l=function(){var u=i.then;i.then=null,s&&s(),ln(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ja(this)},r})();wi(Il.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Yt,_prom:0,_ps:!1,_rts:1});var Qn=(function(r){p0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=oi(n.sortChildren),tn&&hr(n.parent||tn,Pr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&C0(Pr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ul(0,arguments,this),this},t.from=function(i,s,o){return ul(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ul(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,cl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gn(i,s,Ii(this,o),1),this},t.call=function(i,s,o){return hr(this,gn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new gn(i,o,Ii(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,cl(o).immediateRender=oi(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,cl(a).immediateRender=oi(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:en(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,p,_,m,g,v,y,x,S,E,A;if(this!==tn&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,y=this._ts,g=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=en(u%m),u===l?(_=this._repeat,d=c):(S=en(u/m),_=~~S,_&&_===S&&(d=c,_--),d>c&&(d=c)),S=ca(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),E&&_&1&&(d=c-d,A=1),_!==S&&!this._lock){var M=E&&S&1,b=M===(E&&_&1);if(_<S&&(M=!M),a=M?0:u%c?c:u,this._lock=1,this.render(a||(A?0:en(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;W0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=a1(this,en(a),en(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!S&&(Si(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=-Yt);break}}f=p}else{f=this._last;for(var N=i<0?i:d;f;){if(p=f._prev,(f._act||N<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(N-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(N-f._start)*f._ts,s,o||Dn&&Qf(f)),d!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=N?-Yt:Yt);break}}f=p}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Yt)._zTime=d>=a?1:-1,this._ts))return this._start=x,Ou(this),this.render(i,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(zr(s)||(s=Ii(this,s,i)),!(i instanceof Il)){if(zn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Cn(i))return this.addLabel(i,s);if(ln(i))i=gn.delayedCall(0,i);else return this}return this!==i?hr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof gn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Cn(i)?this.removeLabel(i):ln(i)?this.killTweensOf(i):(i.parent===this&&Nu(this,i),i===this._recent&&(this._recent=this._last),Qs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(xi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=gn.delayedCall(0,s||Rl,o);return a.data="isPause",this._hasPause=1,hr(this,a,Ii(this,i))},t.removePause=function(i){var s=this._first;for(i=Ii(this,i);s;)s._start===i&&s.data==="isPause"&&xs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)us!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Fi(i),l=this._first,c=zr(s),u;l;)l instanceof gn?e1(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ii(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,p=gn.to(o,wi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Yt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ua(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,h||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,wi({startAt:{time:Ii(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),dm(this,Ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),dm(this,Ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Yt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=en(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Qs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ui,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=en(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ua(o,o===tn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(tn._ts&&(b0(tn,du(i,tn)),S0=xi.frame),xi.frame>=lm){lm+=Ei.autoSleep||120;var s=tn._first;if((!s||!s._ts)&&Ei.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e})(Il);wi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var T1=function(e,t,n,i,s,o,a){var l=new li(this._pt,e,t,0,1,J0,null,s),c=0,u=0,h,d,f,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Cl(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Zu)||[];h=Zu.exec(i);)p=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Ko(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Zu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(v0.test(i)||g)&&(l.e=0),this._pt=l,l},ep=function(e,t,n,i,s,o,a,l,c,u){ln(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:ln(h)?c?e[t.indexOf("set")||!ln(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=ln(h)?c?R1:K0:np,p;if(Cn(i)&&(~i.indexOf("random(")&&(i=Cl(i)),i.charAt(1)==="="&&(p=Ko(d,i)+(kn(d)||0),(p||p===0)&&(i=p))),!u||d!==i||Sd)return!isNaN(d*i)&&i!==""?(p=new li(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?P1:Z0,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!h&&!(t in e)&&jf(t,i),T1.call(this,e,t,d,i,f,l||Ei.stringFilter,c))},b1=function(e,t,n,i,s){if(ln(e)&&(e=hl(e,s,t,n,i)),!xr(e)||e.style&&e.nodeType||zn(e)||g0(e))return Cn(e)?hl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=hl(e[a],s,t,n,i);return o},Y0=function(e,t,n,i,s,o){var a,l,c,u;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:b1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new li(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==qo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,Sd,tp=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,y=e._overwrite==="auto"&&!Xf,x=e.timeline,S,E,A,M,b,N,I,D,X,Y,$,G,z;if(x&&(!d||!s)&&(s="none"),e._ease=eo(s,aa.ease),e._yEase=h?G0(eo(h===!0?s:h,aa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(D=m[0]?Js(m[0]).harness:0,G=D&&i[D.prop],S=hu(i,Kf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&p?Gc:JS),_._lazy=0),o){if(xs(e._startAt=gn.set(m,wi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&oi(l),startAt:null,delay:0,onUpdate:c&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!a&&!f)&&e._startAt.revert(Gc),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),A=wi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&oi(l),immediateRender:a,stagger:0,parent:g},S),G&&(A[D.prop]=G),xs(e._startAt=gn.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(Gc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Yt,Yt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&oi(l)||l&&!p,E=0;E<m.length;E++){if(b=m[E],I=b._gsap||Jf(m)[E]._gsap,e._ptLookup[E]=Y={},gd[I.id]&&gs.length&&uu(),$=v===m?E:v.indexOf(b),D&&(X=new D).init(b,G||S,e,$,v)!==!1&&(e._pt=M=new li(e._pt,b,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(J){Y[J]=M}),X.priority&&(N=1)),!D||G)for(A in S)_i[A]&&(X=Y0(A,S,e,$,b,v))?X.priority&&(N=1):Y[A]=M=ep.call(e,b,A,"get",S[A],$,v,0,i.stringFilter);e._op&&e._op[E]&&e.kill(b,e._op[E]),y&&e._pt&&(us=e,tn.killTweensOf(b,Y,e.globalTime(t)),z=!e.parent,us=0),e._pt&&l&&(gd[I.id]=1)}N&&Q0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&x.render(Ui,!0,!0)},E1=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sd=1,e.vars[t]="+=0",tp(e,a),Sd=0,l?wl(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=un(n)+kn(h.e)),h.b&&(h.b=u.s+kn(h.b))},A1=function(e,t){var n=e[0]?Js(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=la({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},w1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(zn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},hl=function(e,t,n,i,s){return ln(e)?e.call(t,n,i,s):Cn(e)&&~e.indexOf("random(")?Cl(e):e},$0=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",j0={};ai($0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return j0[r]=1});var gn=(function(r){p0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:cl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,v=i.parent||tn,y=(zn(n)||g0(n)?zr(n[0]):"length"in i)?[n]:Fi(n),x,S,E,A,M,b,N,I;if(a._targets=y.length?Jf(y):wl("GSAP target "+n+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||d||jl(c)||jl(u)){if(i=a.vars,x=a.timeline=new Qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=Pr(a),x._start=0,d||jl(c)||jl(u)){if(A=y.length,N=d&&D0(d),xr(d))for(M in d)~$0.indexOf(M)&&(I||(I={}),I[M]=d[M]);for(S=0;S<A;S++)E=hu(i,j0),E.stagger=0,g&&(E.yoyoEase=g),I&&la(E,I),b=y[S],E.duration=+hl(c,Pr(a),S,b,y),E.delay=(+hl(u,Pr(a),S,b,y)||0)-a._delay,!d&&A===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(b,E,N?N(S,b,y):0),x._ease=Lt.none;x.duration()?c=u=0:a.timeline=0}else if(p){cl(wi(x.vars.defaults,{ease:"none"})),x._ease=eo(p.ease||i.ease||"none");var D=0,X,Y,$;if(zn(p))p.forEach(function(G){return x.to(y,G,">")}),x.duration();else{E={};for(M in p)M==="ease"||M==="easeEach"||w1(M,p[M],E,p.easeEach);for(M in E)for(X=E[M].sort(function(G,z){return G.t-z.t}),D=0,S=0;S<X.length;S++)Y=X[S],$={ease:Y.e,duration:(Y.t-(S?X[S-1].t:0))/100*c},$[M]=Y.v,x.to(y,$,D),D+=$.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!Xf&&(us=Pr(a),tn.killTweensOf(y),us=0),hr(v,Pr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!p&&a._start===en(v._time)&&oi(h)&&r1(Pr(a))&&v.data!=="nested")&&(a._tTime=-Yt,a.render(Math.max(0,-u)||0)),m&&C0(Pr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Yt&&!u?l:i<Yt?0:i,d,f,p,_,m,g,v,y,x;if(!c)o1(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=en(h%_),h===l?(p=this._repeat,d=c):(m=en(h/_),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),g=this._yoyo&&p&1,g&&(x=this._yEase,d=c-d),m=ca(this._tTime,_),d===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&(y&&this._yEase&&W0(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(en(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(P0(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Si(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_d(this,i,s,o),Si(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_d(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xs(this,1),!s&&!(u&&!a)&&(h||a||g)&&(Si(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Pl||xi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||tp(this,c),u=this._ease(c/this._dur),E1(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Uu(this,0),this.parent||w0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,us&&us.vars.overwrite!==!0)._first||ja(this),this.parent&&o!==this.timeline.totalDuration()&&ua(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Fi(i):a,c=this._ptLookup,u=this._pt,h,d,f,p,_,m,g;if((!s||s==="all")&&n1(a,l))return s==="all"&&(this._pt=0),ja(this);for(h=this._op=this._op||[],s!=="all"&&(Cn(s)&&(_={},ai(s,function(v){return _[v]=1}),s=_),s=A1(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){d=c[g],s==="all"?(h[g]=s,p=d,f={}):(f=h[g]=h[g]||{},p=s);for(_ in p)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Nu(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ja(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ul(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ul(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return tn.killTweensOf(i,s,o)},e})(Il);wi(gn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ai("staggerTo,staggerFrom,staggerFromTo",function(r){gn[r]=function(){var e=new Qn,t=xd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var np=function(e,t,n){return e[t]=n},K0=function(e,t,n){return e[t](n)},R1=function(e,t,n,i){return e[t](i.fp,n)},C1=function(e,t,n){return e.setAttribute(t,n)},ip=function(e,t){return ln(e[t])?K0:qf(e[t])&&e.setAttribute?C1:np},Z0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},P1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},J0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},I1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},L1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Nu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},D1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Q0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},li=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Z0,this.d=l||this,this.set=c||np,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=D1,this.m=n,this.mt=s,this.tween=i},r})();ai(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Kf[r]=1});Ai.TweenMax=Ai.TweenLite=gn;Ai.TimelineLite=Ai.TimelineMax=Qn;tn=new Qn({sortChildren:!1,defaults:aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=H0;var to=[],Xc={},N1=[],pm=0,O1=0,nh=function(e){return(Xc[e]||N1).map(function(t){return t()})},Td=function(){var e=Date.now(),t=[];e-pm>2&&(nh("matchMediaInit"),to.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ar.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),nh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pm=e,nh("matchMedia"))},ev=(function(){function r(t,n){this.selector=n&&Md(n),this.data=[],this._r=[],this.isReverted=!1,this.id=O1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ln(n)&&(s=i,i=n,n=ln);var o=this,a=function(){var c=Jt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Md(s)),Jt=o,h=i.apply(o,arguments),ln(h)&&o._r.push(h),Jt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ln?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof gn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof gn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=to.length;o--;)to[o].id===this.id&&to.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),U1=(function(){function r(t){this.contexts=[],this.scope=t,Jt&&Jt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){xr(n)||(n={matches:n});var o=new ev(0,s||this.scope),a=o.conditions={},l,c,u;Jt&&!o.selector&&(o.selector=Jt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ar.matchMedia(n[c]),l&&(to.indexOf(o)<0&&to.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Td):l.addEventListener("change",Td)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),fu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return k0(i)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return tn.getTweensOf(e,t)},getProperty:function(e,t,n,i){Cn(e)&&(e=Fi(e)[0]);var s=Js(e||{}).get,o=n?A0:E0;return n==="native"&&(n=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,n,i)):function(a,l,c){return o((_i[a]&&_i[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Fi(e),e.length>1){var i=e.map(function(u){return ui.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=_i[t],a=Js(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;qo._pt=0,h.init(e,n?u+n:u,qo,0,[e]),h.render(1,h),qo._pt&&rp(1,qo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=ui.to(e,wi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return tn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=eo(e.ease,aa.ease)),cm(aa,e||{})},config:function(e){return cm(Ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!_i[a]&&!Ai[a]&&wl(t+" effect requires "+a+" plugin.")}),Ju[t]=function(a,l,c){return n(Fi(a),wi(l||{},s),c)},o&&(Qn.prototype[t]=function(a,l,c){return this.add(Ju[t](a,xr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Lt[e]=eo(t)},parseEase:function(e,t){return arguments.length?eo(e,t):Lt},getById:function(e){return tn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qn(e),i,s;for(n.smoothChildTiming=oi(e.smoothChildTiming),tn.remove(n),n._dp=0,n._time=n._tTime=tn._time,i=tn._first;i;)s=i._next,(t||!(!i._dur&&i instanceof gn&&i.vars.onComplete===i._targets[0]))&&hr(n,i,i._start-i._delay),i=s;return hr(tn,n,0),n},context:function(e,t){return e?new ev(e,t):Jt},matchMedia:function(e){return new U1(e)},matchMediaRefresh:function(){return to.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Td()},addEventListener:function(e,t){var n=Xc[e]||(Xc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:p1,wrapYoyo:m1,distribute:D0,random:O0,snap:N0,normalize:f1,getUnit:kn,clamp:c1,splitColor:V0,toArray:Fi,selector:Md,mapRange:F0,pipe:h1,unitize:d1,interpolate:g1,shuffle:L0},install:M0,effects:Ju,ticker:xi,updateRoot:Qn.updateRoot,plugins:_i,globalTimeline:tn,core:{PropTween:li,globals:y0,Tween:gn,Timeline:Qn,Animation:Il,getCache:Js,_removeLinkedListItem:Nu,reverting:function(){return Dn},context:function(e){return e&&Jt&&(Jt.data.push(e),e._ctx=Jt),Jt},suppressOverwrites:function(e){return Xf=e}}};ai("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fu[r]=gn[r]});xi.add(Qn.updateRoot);qo=fu.to({},{duration:0});var F1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},B1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=F1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ih=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Cn(s)&&(l={},ai(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}B1(a,s)}}}},ui=fu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ih("roundProps",yd),ih("modifiers"),ih("snap",N0))||fu;gn.version=Qn.version=ui.version="3.14.2";x0=1;Yf()&&ha();Lt.Power0;Lt.Power1;Lt.Power2;Lt.Power3;Lt.Power4;Lt.Linear;Lt.Quad;Lt.Cubic;Lt.Quart;Lt.Quint;Lt.Strong;Lt.Elastic;Lt.Back;Lt.SteppedEase;Lt.Bounce;Lt.Sine;Lt.Expo;Lt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mm,hs,Zo,sp,Ys,gm,op,k1=function(){return typeof window<"u"},Hr={},Bs=180/Math.PI,Jo=Math.PI/180,_o=Math.atan2,_m=1e8,ap=/([A-Z])/g,V1=/(left|right|width|margin|padding|x)/i,z1=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},H1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},G1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},W1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},X1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},q1=function(e,t,n){return e.style[t]=n},Y1=function(e,t,n){return e.style.setProperty(t,n)},$1=function(e,t,n){return e._gsap[t]=n},j1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},K1=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Z1=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},nn="transform",ci=nn+"Origin",J1=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=dr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ir(i,a)}):this.tfm[e]=o.x?o[e]:Ir(i,e),e===ci&&(this.tfm.zOrigin=o.zOrigin);else return dr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(nn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=nn}(s||t)&&this.props.push(e,t,s[e])},iv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Q1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ap,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=op(),(!s||!s.isStart)&&!n[nn]&&(iv(n),i.zOrigin&&n[ci]&&(n[ci]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rv=function(e,t){var n={target:e,props:[],revert:Q1,save:J1};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},sv,Ed=function(e,t){var n=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return n&&n.style?n:hs.createElement(e)},Ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ap,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,da(t)||t,1)||""},vm="O,Moz,ms,Ms,Webkit".split(","),da=function(e,t,n){var i=t||Ys,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vm[o]:"")+e},Ad=function(){k1()&&window.document&&(mm=window,hs=mm.document,Zo=hs.documentElement,Ys=Ed("div")||{style:{}},Ed("div"),nn=da(nn),ci=nn+"Origin",Ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sv=!!da("perspective"),op=ui.core.reverting,sp=1)},xm=function(e){var t=e.ownerSVGElement,n=Ed("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Zo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Zo.removeChild(n),s},Mm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ov=function(e){var t,n;try{t=e.getBBox()}catch{t=xm(e),n=1}return t&&(t.width||t.height)||n||(t=xm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mm(e,["x","cx","x1"])||0,y:+Mm(e,["y","cy","y1"])||0,width:0,height:0}:t},av=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ov(e))},Ms=function(e,t){if(t){var n=e.style,i;t in Hr&&t!==ci&&(t=nn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ap,"-$1").toLowerCase())):n.removeAttribute(t)}},ds=function(e,t,n,i,s,o){var a=new li(e._pt,t,n,0,1,o?nv:tv);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},ym={deg:1,rad:1,turn:1},eT={grid:1,flex:1},ys=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ys.style,l=V1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",p,_,m,g;if(i===o||!s||ym[i]||ym[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),g=e.getCTM&&av(e),(f||o==="%")&&(Hr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],un(f?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),m=_._gsap,m&&f&&m.width&&l&&m.time===xi.time&&!m.uncache)return un(s/m.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,p=e[u],v?e.style[t]=v:Ms(e,t)}else(f||o==="%")&&!eT[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(Ys),p=Ys[u],_.removeChild(Ys),a.position="absolute";return l&&f&&(m=Js(_),m.time=xi.time,m.width=_[u]),un(d?p*s/h:p&&s?h/p*s:0)},Ir=function(e,t,n,i){var s;return sp||Ad(),t in dr&&t!=="transform"&&(t=dr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hr[t]&&t!=="transform"?(s=Dl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:mu(Ti(e,ci))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pu[t]&&pu[t](e,t,n)||Ti(e,t)||T0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ys(e,t,s,n)+n:s},tT=function(e,t,n,i){if(!n||n==="none"){var s=da(t,e,1),o=s&&Ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ti(e,"borderTopColor"))}var a=new li(this._pt,e.style,t,0,1,J0),l=0,c=0,u,h,d,f,p,_,m,g,v,y,x,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ti(e,t)||i,_?e.style[t]=_:Ms(e,t)),u=[n,i],H0(u),n=u[0],i=u[1],d=n.match(Xo)||[],S=i.match(Xo)||[],S.length){for(;h=Xo.exec(i);)m=h[0],v=i.substring(l,h.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ko(f,m)+x),g=parseFloat(m),y=m.substr((g+"").length),l=Xo.lastIndex-y.length,y||(y=y||Ei.units[t]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(f=ys(e,t,_,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?nv:tv;return v0.test(i)&&(a.e=0),this._pt=a,a},Sm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sm[n]||n,t[1]=Sm[i]||i,t.join(" ")},iT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Hr[a]&&(l=1,a=a==="transformOrigin"?ci:nn),Ms(n,a);l&&(Ms(n,nn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Dl(n,1),o.uncache=1,iv(i)))}},pu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new li(e._pt,t,n,0,0,iT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ll=[1,0,0,1,0,0],lv={},cv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tm=function(e){var t=Ti(e,nn);return cv(t)?Ll:t.substr(7).match(_0).map(un)},lp=function(e,t){var n=e._gsap||Js(e),i=e.style,s=Tm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ll:s):(s===Ll&&!e.offsetParent&&e!==Zo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Zo.appendChild(e)),s=Tm(e),l?i.display=l:Ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Zo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wd=function(e,t,n,i,s,o){var a=e._gsap,l=s||lp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,S=parseFloat(y[1])||0,E,A,M,b;n?l!==Ll&&(A=f*m-p*_)&&(M=x*(m/A)+S*(-_/A)+(_*v-m*g)/A,b=x*(-p/A)+S*(f/A)-(f*v-p*g)/A,x=M,S=b):(E=ov(e),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),S=E.y+(~(y[1]||y[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(g=x-c,v=S-u,a.xOffset=h+(g*f+v*_)-g,a.yOffset=d+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ci]="0px 0px",o&&(ds(o,a,"xOrigin",c,x),ds(o,a,"yOrigin",u,S),ds(o,a,"xOffset",h,a.xOffset),ds(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Dl=function(e,t){var n=e._gsap||new q0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,ci)||"0",u,h,d,f,p,_,m,g,v,y,x,S,E,A,M,b,N,I,D,X,Y,$,G,z,J,Z,P,he,fe,He,Ge,Xe;return u=h=d=_=m=g=v=y=x=0,f=p=1,n.svg=!!(e.getCTM&&av(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nn]!=="none"?l[nn]:"")),i.scale=i.rotate=i.translate="none"),A=lp(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),wd(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,E=n.yOrigin||0,A!==Ll&&(I=A[0],D=A[1],X=A[2],Y=A[3],u=$=A[4],h=G=A[5],A.length===6?(f=Math.sqrt(I*I+D*D),p=Math.sqrt(Y*Y+X*X),_=I||D?_o(D,I)*Bs:0,v=X||Y?_o(X,Y)*Bs+_:0,v&&(p*=Math.abs(Math.cos(v*Jo))),n.svg&&(u-=S-(S*I+E*X),h-=E-(S*D+E*Y))):(Xe=A[6],He=A[7],P=A[8],he=A[9],fe=A[10],Ge=A[11],u=A[12],h=A[13],d=A[14],M=_o(Xe,fe),m=M*Bs,M&&(b=Math.cos(-M),N=Math.sin(-M),z=$*b+P*N,J=G*b+he*N,Z=Xe*b+fe*N,P=$*-N+P*b,he=G*-N+he*b,fe=Xe*-N+fe*b,Ge=He*-N+Ge*b,$=z,G=J,Xe=Z),M=_o(-X,fe),g=M*Bs,M&&(b=Math.cos(-M),N=Math.sin(-M),z=I*b-P*N,J=D*b-he*N,Z=X*b-fe*N,Ge=Y*N+Ge*b,I=z,D=J,X=Z),M=_o(D,I),_=M*Bs,M&&(b=Math.cos(M),N=Math.sin(M),z=I*b+D*N,J=$*b+G*N,D=D*b-I*N,G=G*b-$*N,I=z,$=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=un(Math.sqrt(I*I+D*D+X*X)),p=un(Math.sqrt(G*G+Xe*Xe)),M=_o($,G),v=Math.abs(M)>2e-4?M*Bs:0,x=Ge?1/(Ge<0?-Ge:Ge):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cv(Ti(e,nn)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=un(f),n.scaleY=un(p),n.rotation=un(_)+a,n.rotationX=un(m)+a,n.rotationY=un(g)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ci]=mu(c)),n.xOffset=n.yOffset=0,n.force3D=Ei.force3D,n.renderTransform=n.svg?sT:sv?uv:rT,n.uncache=0,n},mu=function(e){return(e=e.split(" "))[0]+" "+e[1]},rh=function(e,t,n){var i=kn(t);return un(parseFloat(t)+parseFloat(ys(e,"x",n+"px",i)))+i},rT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,uv(e,t)},As="0deg",Pa="0px",ws=") ",uv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,y=n.zOrigin,x="",S=g==="auto"&&e&&e!==1||g===!0;if(y&&(h!==As||u!==As)){var E=parseFloat(u)*Jo,A=Math.sin(E),M=Math.cos(E),b;E=parseFloat(h)*Jo,b=Math.cos(E),o=rh(v,o,A*b*-y),a=rh(v,a,-Math.sin(E)*-y),l=rh(v,l,M*b*-y+y)}m!==Pa&&(x+="perspective("+m+ws),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(S||o!==Pa||a!==Pa||l!==Pa)&&(x+=l!==Pa||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ws),c!==As&&(x+="rotate("+c+ws),u!==As&&(x+="rotateY("+u+ws),h!==As&&(x+="rotateX("+h+ws),(d!==As||f!==As)&&(x+="skew("+d+", "+f+ws),(p!==1||_!==1)&&(x+="scale("+p+", "+_+ws),v.style[nn]=x||"translate(0, 0)"},sT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,y=parseFloat(o),x=parseFloat(a),S,E,A,M,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Jo,c*=Jo,S=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-d,M=Math.cos(l-c)*d,c&&(u*=Jo,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,M*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),S*=b,E*=b)),S=un(S),E=un(E),A=un(A),M=un(M)):(S=h,M=d,E=A=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=ys(f,"x",o,"px"),x=ys(f,"y",a,"px")),(p||_||m||g)&&(y=un(y+p-(p*S+_*A)+m),x=un(x+_-(p*E+_*M)+g)),(i||s)&&(b=f.getBBox(),y=un(y+i/100*b.width),x=un(x+s/100*b.height)),b="matrix("+S+","+E+","+A+","+M+","+y+","+x+")",f.setAttribute("transform",b),v&&(f.style[nn]=b)},oT=function(e,t,n,i,s){var o=360,a=Cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Bs:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*_m)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*_m)%o-~~(c/o)*o)),e._pt=d=new li(e._pt,t,n,i,c,H1),d.e=u,d.u="deg",e._props.push(n),d},bm=function(e,t){for(var n in t)e[n]=t[n];return e},aT=function(e,t,n){var i=bm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[nn]=t,a=Dl(n,1),Ms(n,nn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nn],o[nn]=t,a=Dl(n,1),o[nn]=c);for(l in Hr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=kn(c),p=kn(u),h=f!==p?ys(n,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new li(e._pt,a,l,h,d-h,bd),e._pt.u=p||0,e._props.push(l));bm(a,i)};ai("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});pu[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(p){return Ir(a,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(p,_){return f[p]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var hv={name:"css",register:Ad,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,p,_,m,g,v,y,x,S,E,A,M,b;sp||Ad(),this.styles=this.styles||rv(e),M=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(_i[_]&&Y0(_,t,n,i,e,s)))){if(f=typeof u,p=pu[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Cl(u)),p)p(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",_s.lastIndex=0,_s.test(c)||(m=kn(c),g=kn(u),g?m!==g&&(c=ys(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),M.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Cn(c)&&~c.indexOf("random(")&&(c=Cl(c)),kn(c+"")||c==="auto"||(c+=Ei.units[_]||kn(Ir(e,_))||""),(c+"").charAt(1)==="="&&(c=Ir(e,_))):c=Ir(e,_),d=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in dr&&(_==="autoAlpha"&&(d===1&&Ir(e,"visibility")==="hidden"&&h&&(d=0),M.push("visibility",0,a.visibility),ds(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=dr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Hr,y){if(this.styles.save(_),b=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=Ti(e,"perspective"),N?e.style.perspective=N:Ms(e,"perspective")}h=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Dl(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new li(this._pt,a,nn,0,1,S.renderTransform,S,0,-1),x.dep=1),_==="scale")this._pt=new li(this._pt,S,"scaleY",S.scaleY,(v?Ko(S.scaleY,v+h):h)-S.scaleY||0,bd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(ci,0,a[ci]),u=nT(u),S.svg?wd(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==S.zOrigin&&ds(this,S,"zOrigin",S.zOrigin,g),ds(this,a,_,mu(c),mu(u)));continue}else if(_==="svgOrigin"){wd(e,u,1,E,0,this);continue}else if(_ in lv){oT(this,S,_,d,v?Ko(d,v+u):u);continue}else if(_==="smoothOrigin"){ds(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){aT(this,u,e);continue}}else _ in a||(_=da(_)||_);if(y||(h||h===0)&&(d||d===0)&&!z1.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),g=kn(u)||(_ in Ei.units?Ei.units[_]:m),m!==g&&(d=ys(e,_,c,g)),this._pt=new li(this._pt,y?S:a,_,d,(v?Ko(d,v+h):h)-d,!y&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?X1:bd),this._pt.u=g||0,y&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=W1):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=G1);else if(_ in a)tT.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){jf(_,u);continue}y||(_ in a?M.push(_,0,a[_]):typeof e[_]=="function"?M.push(_,2,e[_]()):M.push(_,1,c||e[_])),o.push(_)}}A&&Q0(this)},render:function(e,t){if(t.tween._time||!op())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ir,aliases:dr,getSetter:function(e,t,n){var i=dr[t];return i&&i.indexOf(",")<0&&(t=i),t in Hr&&t!==ci&&(e._gsap.x||Ir(e,"x"))?n&&gm===n?t==="scale"?j1:$1:(gm=n||{})&&(t==="scale"?K1:Z1):e.style&&!qf(e.style[t])?q1:~t.indexOf("-")?Y1:ip(e,t)},core:{_removeProperty:Ms,_getMatrix:lp}};ui.utils.checkPrefix=da;ui.core.getStyleSaver=rv;(function(r,e,t,n){var i=ai(r+","+e+","+t,function(s){Hr[s]=1});ai(e,function(s){Ei.units[s]="deg",lv[s]=1}),dr[i[13]]=r+","+e,ai(n,function(s){var o=s.split(":");dr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ei.units[r]="px"});ui.registerPlugin(hv);var Za=ui.registerPlugin(hv)||ui;Za.core.Tween;function lT(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function cT(r,e,t){return e&&lT(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ln,qc,Mi,fs,ps,Qo,dv,ks,dl,fv,Dr,Xi,pv,mv=function(){return Ln||typeof window<"u"&&(Ln=window.gsap)&&Ln.registerPlugin&&Ln},gv=1,Yo=[],At=[],gr=[],fl=Date.now,Rd=function(e,t){return t},uT=function(){var e=dl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,At),i.push.apply(i,gr),At=n,gr=i,Rd=function(o,a){return t[o](a)}},vs=function(e,t){return~gr.indexOf(e)&&gr[gr.indexOf(e)+1][t]},pl=function(e){return!!~fv.indexOf(e)},qn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Kl="scrollLeft",Zl="scrollTop",Cd=function(){return Dr&&Dr.isPressed||At.cache++},gu=function(e,t){var n=function i(s){if(s||s===0){gv&&(Mi.history.scrollRestoration="manual");var o=Dr&&Dr.isPressed;s=i.v=Math.round(s)||(Dr&&Dr.iOS?1:0),e(s),i.cacheID=At.cache,o&&Rd("ss",s)}else(t||At.cache!==i.cacheID||Rd("ref"))&&(i.cacheID=At.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ei={s:Kl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gu(function(r){return arguments.length?Mi.scrollTo(r,xn.sc()):Mi.pageXOffset||fs[Kl]||ps[Kl]||Qo[Kl]||0})},xn={s:Zl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ei,sc:gu(function(r){return arguments.length?Mi.scrollTo(ei.sc(),r):Mi.pageYOffset||fs[Zl]||ps[Zl]||Qo[Zl]||0})},ri=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ln.utils.toArray)(e)[0]||(typeof e=="string"&&Ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ss=function(e,t){var n=t.s,i=t.sc;pl(e)&&(e=fs.scrollingElement||ps);var s=At.indexOf(e),o=i===xn.sc?1:2;!~s&&(s=At.push(e)-1),At[s+o]||qn(e,"scroll",Cd);var a=At[s+o],l=a||(At[s+o]=gu(vs(e,n),!0)||(pl(e)?i:gu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Ln.getProperty(e,"scrollBehavior")==="smooth"),l},Pd=function(e,t,n){var i=e,s=e,o=fl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=fl();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(p){var _=a,m=s,g=fl();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Ia=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Em=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_v=function(){dl=Ln.core.globals().ScrollTrigger,dl&&dl.core&&uT()},vv=function(e){return Ln=e||mv(),!qc&&Ln&&typeof document<"u"&&document.body&&(Mi=window,fs=document,ps=fs.documentElement,Qo=fs.body,fv=[Mi,fs,ps,Qo],Ln.utils.clamp,pv=Ln.core.context||function(){},ks="onpointerenter"in Qo?"pointer":"mouse",dv=hn.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xi=hn.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gv=0},500),_v(),qc=1),qc};ei.op=xn;At.cache=0;var hn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){qc||vv(Ln)||console.warn("Please gsap.registerPlugin(Observer)"),dl||_v();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,y=n.onPress,x=n.onRelease,S=n.onRight,E=n.onLeft,A=n.onUp,M=n.onDown,b=n.onChangeX,N=n.onChangeY,I=n.onChange,D=n.onToggleX,X=n.onToggleY,Y=n.onHover,$=n.onHoverEnd,G=n.onMove,z=n.ignoreCheck,J=n.isNormalizer,Z=n.onGestureStart,P=n.onGestureEnd,he=n.onWheel,fe=n.onEnable,He=n.onDisable,Ge=n.onClick,Xe=n.scrollSpeed,ie=n.capture,V=n.allowClicks,Q=n.lockAxis,oe=n.onLockAxis;this.target=a=ri(a)||ps,this.vars=n,f&&(f=Ln.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Xe=Xe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mi.getComputedStyle(Qo).lineHeight)||22);var ue,xe,Re,pe,ge,Ae,ke,K=this,k=0,ut=0,at=n.passive||!u&&n.passive!==!1,Ze=Ss(a,ei),Ue=Ss(a,xn),L=Ze(),T=Ue(),H=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xi[0]==="pointerdown",ae=pl(a),le=a.ownerDocument||fs,re=[0,0,0],we=[0,0,0],ve=0,Ve=function(){return ve=fl()},Fe=function($e,ft){return(K.event=$e)&&f&&hT($e.target,f)||ft&&H&&$e.pointerType!=="touch"||z&&z($e,ft)},Me=function(){K._vx.reset(),K._vy.reset(),xe.pause(),h&&h(K)},ye=function(){var $e=K.deltaX=Em(re),ft=K.deltaY=Em(we),R=Math.abs($e)>=i,C=Math.abs(ft)>=i;I&&(R||C)&&I(K,$e,ft,re,we),R&&(S&&K.deltaX>0&&S(K),E&&K.deltaX<0&&E(K),b&&b(K),D&&K.deltaX<0!=k<0&&D(K),k=K.deltaX,re[0]=re[1]=re[2]=0),C&&(M&&K.deltaY>0&&M(K),A&&K.deltaY<0&&A(K),N&&N(K),X&&K.deltaY<0!=ut<0&&X(K),ut=K.deltaY,we[0]=we[1]=we[2]=0),(pe||Re)&&(G&&G(K),Re&&(m&&Re===1&&m(K),v&&v(K),Re=0),pe=!1),Ae&&!(Ae=!1)&&oe&&oe(K),ge&&(he(K),ge=!1),ue=0},Te=function($e,ft,R){re[R]+=$e,we[R]+=ft,K._vx.update($e),K._vy.update(ft),c?ue||(ue=requestAnimationFrame(ye)):ye()},Pe=function($e,ft){Q&&!ke&&(K.axis=ke=Math.abs($e)>Math.abs(ft)?"x":"y",Ae=!0),ke!=="y"&&(re[2]+=$e,K._vx.update($e,!0)),ke!=="x"&&(we[2]+=ft,K._vy.update(ft,!0)),c?ue||(ue=requestAnimationFrame(ye)):ye()},be=function($e){if(!Fe($e,1)){$e=Ia($e,u);var ft=$e.clientX,R=$e.clientY,C=ft-K.x,U=R-K.y,B=K.isDragging;K.x=ft,K.y=R,(B||(C||U)&&(Math.abs(K.startX-ft)>=s||Math.abs(K.startY-R)>=s))&&(Re||(Re=B?2:1),B||(K.isDragging=!0),Pe(C,U))}},Je=K.onPress=function(Ne){Fe(Ne,1)||Ne&&Ne.button||(K.axis=ke=null,xe.pause(),K.isPressed=!0,Ne=Ia(Ne),k=ut=0,K.startX=K.x=Ne.clientX,K.startY=K.y=Ne.clientY,K._vx.reset(),K._vy.reset(),qn(J?a:le,Xi[1],be,at,!0),K.deltaX=K.deltaY=0,y&&y(K))},O=K.onRelease=function(Ne){if(!Fe(Ne,1)){Wn(J?a:le,Xi[1],be,!0);var $e=!isNaN(K.y-K.startY),ft=K.isDragging,R=ft&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),C=Ia(Ne);!R&&$e&&(K._vx.reset(),K._vy.reset(),u&&V&&Ln.delayedCall(.08,function(){if(fl()-ve>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(le.createEvent){var U=le.createEvent("MouseEvents");U.initMouseEvent("click",!0,!0,Mi,1,C.screenX,C.screenY,C.clientX,C.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(U)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,h&&ft&&!J&&xe.restart(!0),Re&&ye(),g&&ft&&g(K),x&&x(K,R)}},Se=function($e){return $e.touches&&$e.touches.length>1&&(K.isGesturing=!0)&&Z($e,K.isDragging)},_e=function(){return(K.isGesturing=!1)||P(K)},Ee=function($e){if(!Fe($e)){var ft=Ze(),R=Ue();Te((ft-L)*Xe,(R-T)*Xe,1),L=ft,T=R,h&&xe.restart(!0)}},me=function($e){if(!Fe($e)){$e=Ia($e,u),he&&(ge=!0);var ft=($e.deltaMode===1?l:$e.deltaMode===2?Mi.innerHeight:1)*p;Te($e.deltaX*ft,$e.deltaY*ft,0),h&&!J&&xe.restart(!0)}},se=function($e){if(!Fe($e)){var ft=$e.clientX,R=$e.clientY,C=ft-K.x,U=R-K.y;K.x=ft,K.y=R,pe=!0,h&&xe.restart(!0),(C||U)&&Pe(C,U)}},ze=function($e){K.event=$e,Y(K)},Qe=function($e){K.event=$e,$(K)},yt=function($e){return Fe($e)||Ia($e,u)&&Ge(K)};xe=K._dc=Ln.delayedCall(d||.25,Me).pause(),K.deltaX=K.deltaY=0,K._vx=Pd(0,50,!0),K._vy=Pd(0,50,!0),K.scrollX=Ze,K.scrollY=Ue,K.isDragging=K.isGesturing=K.isPressed=!1,pv(this),K.enable=function(Ne){return K.isEnabled||(qn(ae?le:a,"scroll",Cd),o.indexOf("scroll")>=0&&qn(ae?le:a,"scroll",Ee,at,ie),o.indexOf("wheel")>=0&&qn(a,"wheel",me,at,ie),(o.indexOf("touch")>=0&&dv||o.indexOf("pointer")>=0)&&(qn(a,Xi[0],Je,at,ie),qn(le,Xi[2],O),qn(le,Xi[3],O),V&&qn(a,"click",Ve,!0,!0),Ge&&qn(a,"click",yt),Z&&qn(le,"gesturestart",Se),P&&qn(le,"gestureend",_e),Y&&qn(a,ks+"enter",ze),$&&qn(a,ks+"leave",Qe),G&&qn(a,ks+"move",se)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=pe=Re=!1,K._vx.reset(),K._vy.reset(),L=Ze(),T=Ue(),Ne&&Ne.type&&Je(Ne),fe&&fe(K)),K},K.disable=function(){K.isEnabled&&(Yo.filter(function(Ne){return Ne!==K&&pl(Ne.target)}).length||Wn(ae?le:a,"scroll",Cd),K.isPressed&&(K._vx.reset(),K._vy.reset(),Wn(J?a:le,Xi[1],be,!0)),Wn(ae?le:a,"scroll",Ee,ie),Wn(a,"wheel",me,ie),Wn(a,Xi[0],Je,ie),Wn(le,Xi[2],O),Wn(le,Xi[3],O),Wn(a,"click",Ve,!0),Wn(a,"click",yt),Wn(le,"gesturestart",Se),Wn(le,"gestureend",_e),Wn(a,ks+"enter",ze),Wn(a,ks+"leave",Qe),Wn(a,ks+"move",se),K.isEnabled=K.isPressed=K.isDragging=!1,He&&He(K))},K.kill=K.revert=function(){K.disable();var Ne=Yo.indexOf(K);Ne>=0&&Yo.splice(Ne,1),Dr===K&&(Dr=0)},Yo.push(K),J&&pl(a)&&(Dr=K),K.enable(_)},cT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();hn.version="3.14.2";hn.create=function(r){return new hn(r)};hn.register=vv;hn.getAll=function(){return Yo.slice()};hn.getById=function(r){return Yo.filter(function(e){return e.vars.id===r})[0]};mv()&&Ln.registerPlugin(hn);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ye,zo,Et,jt,vi,kt,cp,_u,Nl,ml,Ja,Jl,Fn,Fu,Id,Kn,Am,wm,Ho,xv,sh,Mv,jn,Ld,yv,Sv,os,Dd,up,ea,hp,gl,Nd,oh,Ql=1,Bn=Date.now,ah=Bn(),Vi=0,Qa=0,Rm=function(e,t,n){var i=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Cm=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dT=function r(){return Qa&&requestAnimationFrame(r)},Pm=function(){return Fu=1},Im=function(){return Fu=0},lr=function(e){return e},el=function(e){return Math.round(e*1e5)/1e5||0},Tv=function(){return typeof window<"u"},bv=function(){return Ye||Tv()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},oo=function(e){return!!~cp.indexOf(e)},Ev=function(e){return(e==="Height"?hp:Et["inner"+e])||vi["client"+e]||kt["client"+e]},Av=function(e){return vs(e,"getBoundingClientRect")||(oo(e)?function(){return Zc.width=Et.innerWidth,Zc.height=hp,Zc}:function(){return Lr(e)})},fT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=vs(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Ev(s):e["client"+s])||0}},pT=function(e,t){return!t||~gr.indexOf(e)?Av(e):function(){return Zc}},fr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=vs(e,n))?o()-Av(e)()[s]:oo(e)?(vi[n]||kt[n])-Ev(i):e[n]-e["offset"+i])},ec=function(e,t){for(var n=0;n<Ho.length;n+=3)(!t||~t.indexOf(Ho[n+1]))&&e(Ho[n],Ho[n+1],Ho[n+2])},gi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},tl=function(e){return typeof e=="number"},Vs=function(e){return typeof e=="object"},La=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},lh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},vo=Math.abs,wv="left",Rv="top",dp="right",fp="bottom",no="width",io="height",_l="Right",vl="Left",xl="Top",Ml="Bottom",pn="padding",Di="margin",fa="Width",pp="Height",vn="px",Ni=function(e){return Et.getComputedStyle(e)},mT=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Lm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lr=function(e,t){var n=t&&Ni(e)[Id]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},vu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Cv=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},gT=function(e){return function(t){return Ye.utils.snap(Cv(e),t)}},mp=function(e){var t=Ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},_T=function(e){return function(t,n){return mp(Cv(e))(t,n.direction)}},tc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Dm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ic={toggleActions:"play",anticipatePin:0},xu={top:0,left:0,center:.5,bottom:1,right:1},Yc=function(e,t){if(gi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in xu?xu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,p=jt.createElement("div"),_=oo(n)||vs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?kt:n,v=e.indexOf("start")!==-1,y=v?c:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===xn?dp:fp)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],$c(p,0,i,v),p},$c=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+fa]=1,s["border"+a+fa]=0,s[n.p]=t+"px",Ye.set(e,s)},Tt=[],Od={},Ol,Nm=function(){return Bn()-Vi>34&&(Ol||(Ol=requestAnimationFrame(Fr)))},xo=function(){(!jn||!jn.isPressed||jn.startX>kt.clientWidth)&&(At.cache++,jn?Ol||(Ol=requestAnimationFrame(Fr)):Fr(),Vi||lo("scrollStart"),Vi=Bn())},ch=function(){Sv=Et.innerWidth,yv=Et.innerHeight},nl=function(e){At.cache++,(e===!0||!Fn&&!Mv&&!jt.fullscreenElement&&!jt.webkitFullscreenElement&&(!Ld||Sv!==Et.innerWidth||Math.abs(Et.innerHeight-yv)>Et.innerHeight*.25))&&_u.restart(!0)},ao={},vT=[],Pv=function r(){return An(Ct,"scrollEnd",r)||$s(!0)},lo=function(e){return ao[e]&&ao[e].map(function(t){return t()})||vT},pi=[],Iv=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},Lv=function(){return At.forEach(function(e){return Vn(e)&&++e.cacheID&&(e.rec=e())})},gp=function(e,t){var n;for(Kn=0;Kn<Tt.length;Kn++)n=Tt[Kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));gl=!0,t&&Iv(t),t||lo("revert")},Dv=function(e,t){At.cache++,(t||!Zn)&&At.forEach(function(n){return Vn(n)&&n.cacheID++&&(n.rec=0)}),gi(e)&&(Et.history.scrollRestoration=up=e)},Zn,ro=0,Om,xT=function(){if(Om!==ro){var e=Om=ro;requestAnimationFrame(function(){return e===ro&&$s(!0)})}},Nv=function(){kt.appendChild(ea),hp=!jn&&ea.offsetHeight||Et.innerHeight,kt.removeChild(ea)},Um=function(e){return Nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},$s=function(e,t){if(vi=jt.documentElement,kt=jt.body,cp=[Et,jt,vi,kt],Vi&&!e&&!gl){wn(Ct,"scrollEnd",Pv);return}Nv(),Zn=Ct.isRefreshing=!0,gl||Lv();var n=lo("refreshInit");xv&&Ct.sort(),t||gp(),At.forEach(function(i){Vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Tt.slice(0).forEach(function(i){return i.refresh()}),gl=!1,Tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Nd=1,Um(!0),Tt.forEach(function(i){var s=fr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Um(!1),Nd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),At.forEach(function(i){Vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Dv(up,1),_u.pause(),ro++,Zn=2,Fr(2),Tt.forEach(function(i){return Vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zn=Ct.isRefreshing=!1,lo("refresh")},Ud=0,jc=1,yl,Fr=function(e){if(e===2||!Zn&&!gl){Ct.isUpdating=!0,yl&&yl.update(0);var t=Tt.length,n=Bn(),i=n-ah>=50,s=t&&Tt[0].scroll();if(jc=Ud>s?-1:1,Zn||(Ud=s),i&&(Vi&&!Fu&&n-Vi>200&&(Vi=0,lo("scrollEnd")),Ja=ah,ah=n),jc<0){for(Kn=t;Kn-- >0;)Tt[Kn]&&Tt[Kn].update(0,i);jc=1}else for(Kn=0;Kn<t;Kn++)Tt[Kn]&&Tt[Kn].update(0,i);Ct.isUpdating=!1}Ol=0},Fd=[wv,Rv,fp,dp,Di+Ml,Di+_l,Di+xl,Di+vl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kc=Fd.concat([no,io,"boxSizing","max"+fa,"max"+pp,"position",Di,pn,pn+xl,pn+_l,pn+Ml,pn+vl]),MT=function(e,t,n){ta(n);var i=e._gsap;if(i.spacerIsNative)ta(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Fd.length,o=t.style,a=e.style,l;s--;)l=Fd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[fp]=a[dp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[no]=vu(e,ei)+vn,o[io]=vu(e,xn)+vn,o[pn]=a[Di]=a[Rv]=a[wv]="0",ta(i),a[no]=a["max"+fa]=n[no],a[io]=a["max"+pp]=n[io],a[pn]=n[pn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yT=/([A-Z])/g,ta=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yT,"-$1").toLowerCase())}},sc=function(e){for(var t=Kc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Kc[s],n[Kc[s]]);return i.t=e,i},ST=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Zc={left:0,top:0},Fm=function(e,t,n,i,s,o,a,l,c,u,h,d,f,p){Vn(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Yc("0"+e.substr(3),n):0));var _=f?f.time():0,m,g,v;if(f&&f.seek(0),isNaN(e)||(e=+e),tl(e))f&&(e=Ye.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&$c(a,n,i,!0);else{Vn(t)&&(t=t(l));var y=(e||"0").split(" "),x,S,E,A;v=ri(t,l)||kt,x=Lr(v)||{},(!x||!x.left&&!x.top)&&Ni(v).display==="none"&&(A=v.style.display,v.style.display="block",x=Lr(v),A?v.style.display=A:v.style.removeProperty("display")),S=Yc(y[0],x[i.d]),E=Yc(y[1]||"0",n),e=x[i.p]-c[i.p]-u+S+s-E,a&&$c(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var M=e+n,b=o._isStart;m="scroll"+i.d2,$c(o,M,i,b&&M>20||!b&&(h?Math.max(kt[m],vi[m]):o.parentNode[m])<=M+1),h&&(c=Lr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+vn))}return f&&v&&(m=Lr(v),f.seek(d),g=Lr(v),f._caScrollDist=m[i.p]-g[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},TT=/(webkit|moz|length|cssText|inset)/i,Bm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===kt){e._stOrig=s.cssText,a=Ni(e);for(o in a)!+o&&!TT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},Ov=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},oc=function(e,t,n){var i={};i[t.p]="+="+n,Ye.set(e,i)},km=function(e,t){var n=Ss(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,p={};c=c||n();var _=Ov(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){At.cache++,o.tween&&Fr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ye.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},wn(e,"wheel",n.wheelHandler),Ct.isTouch&&wn(e,"touchmove",n.wheelHandler),s},Ct=(function(){function r(t,n){zo||r.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qa){this.update=this.refresh=this.kill=lr;return}n=Lm(gi(n)||tl(n)||n.nodeType?{trigger:n}:n,ic);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,S=s.pinReparent,E=s.pinSpacer,A=s.containerAnimation,M=s.fastScrollEnd,b=s.preventOverlaps,N=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ei:xn,I=!h&&h!==0,D=ri(n.scroller||Et),X=Ye.core.getCache(D),Y=oo(D),$=("pinType"in n?n.pinType:vs(D,"pinType")||Y&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=I&&n.toggleActions.split(" "),J="markers"in n?n.markers:ic.markers,Z=Y?0:parseFloat(Ni(D)["border"+N.p2+fa])||0,P=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(P)},fe=fT(D,Y,N),He=pT(D,Y),Ge=0,Xe=0,ie=0,V=Ss(D,N),Q,oe,ue,xe,Re,pe,ge,Ae,ke,K,k,ut,at,Ze,Ue,L,T,H,ae,le,re,we,ve,Ve,Fe,Me,ye,Te,Pe,be,Je,O,Se,_e,Ee,me,se,ze,Qe;if(P._startClamp=P._endClamp=!1,P._dir=N,m*=45,P.scroller=D,P.scroll=A?A.time.bind(A):V,xe=V(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(xv=1,n.refreshPriority===-9999&&(yl=P)),X.tweenScroll=X.tweenScroll||{top:km(D,xn),left:km(D,ei)},P.tweenTo=Q=X.tweenScroll[N.p],P.scrubDuration=function(R){Se=tl(R)&&R,Se?O?O.duration(R):O=Ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Se,paused:!0,onComplete:function(){return g&&g(P)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),be=0,l||(l=i.vars.id)),x&&((!Vs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in kt.style&&Ye.set(Y?[kt,vi]:D,{scrollBehavior:"auto"}),At.forEach(function(R){return Vn(R)&&R.target===(Y?jt.scrollingElement||vi:D)&&(R.smooth=!1)}),ue=Vn(x.snapTo)?x.snapTo:x.snapTo==="labels"?gT(i):x.snapTo==="labelsDirectional"?_T(i):x.directional!==!1?function(R,C){return mp(x.snapTo)(R,Bn()-Xe<500?0:C.direction)}:Ye.utils.snap(x.snapTo),_e=x.duration||{min:.1,max:2},_e=Vs(_e)?ml(_e.min,_e.max):ml(_e,_e),Ee=Ye.delayedCall(x.delay||Se/2||.1,function(){var R=V(),C=Bn()-Xe<500,U=Q.tween;if((C||Math.abs(P.getVelocity())<10)&&!U&&!Fu&&Ge!==R){var B=(R-pe)/Ze,ce=i&&!I?i.totalProgress():B,j=C?0:(ce-Je)/(Bn()-Ja)*1e3||0,de=Ye.utils.clamp(-B,1-B,vo(j/2)*j/.185),Ie=B+(x.inertia===!1?0:de),Oe,tt,je=x,Dt=je.onStart,mt=je.onInterrupt,Ke=je.onComplete;if(Oe=ue(Ie,P),tl(Oe)||(Oe=Ie),tt=Math.max(0,Math.round(pe+Oe*Ze)),R<=ge&&R>=pe&&tt!==R){if(U&&!U._initted&&U.data<=vo(tt-R))return;x.inertia===!1&&(de=Oe-B),Q(tt,{duration:_e(vo(Math.max(vo(Ie-ce),vo(Oe-ce))*.185/j/.05||0)),ease:x.ease||"power3",data:vo(tt-R),onInterrupt:function(){return Ee.restart(!0)&&mt&&mt(P)},onComplete:function(){P.update(),Ge=V(),i&&!I&&(O?O.resetTo("totalProgress",Oe,i._tTime/i._tDur):i.progress(Oe)),be=Je=i&&!I?i.totalProgress():P.progress,v&&v(P),Ke&&Ke(P)}},R,de*Ze,tt-R-de*Ze),Dt&&Dt(P,Q.tween)}}else P.isActive&&Ge!==R&&Ee.restart(!0)}).pause()),l&&(Od[l]=P),d=P.trigger=ri(d||f!==!0&&f),Qe=d&&d._gsap&&d._gsap.stRevert,Qe&&(Qe=Qe(P)),f=f===!0?d:ri(f),gi(a)&&(a={targets:d,className:a}),f&&(p===!1||p===Di||(p=!p&&f.parentNode&&f.parentNode.style&&Ni(f.parentNode).display==="flex"?!1:pn),P.pin=f,oe=Ye.core.getCache(f),oe.spacer?Ue=oe.pinState:(E&&(E=ri(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),oe.spacerIsNative=!!E,E&&(oe.spacerState=sc(E))),oe.spacer=H=E||jt.createElement("div"),H.classList.add("pin-spacer"),l&&H.classList.add("pin-spacer-"+l),oe.pinState=Ue=sc(f)),n.force3D!==!1&&Ye.set(f,{force3D:!0}),P.spacer=H=oe.spacer,Pe=Ni(f),Ve=Pe[p+N.os2],le=Ye.getProperty(f),re=Ye.quickSetter(f,N.a,vn),uh(f,H,Pe),T=sc(f)),J){ut=Vs(J)?Lm(J,Dm):Dm,K=rc("scroller-start",l,D,N,ut,0),k=rc("scroller-end",l,D,N,ut,0,K),ae=K["offset"+N.op.d2];var yt=ri(vs(D,"content")||D);Ae=this.markerStart=rc("start",l,yt,N,ut,ae,0,A),ke=this.markerEnd=rc("end",l,yt,N,ut,ae,0,A),A&&(ze=Ye.quickSetter([Ae,ke],N.a,vn)),!$&&!(gr.length&&vs(D,"fixedMarkers")===!0)&&(mT(Y?kt:D),Ye.set([K,k],{force3D:!0}),Me=Ye.quickSetter(K,N.a,vn),Te=Ye.quickSetter(k,N.a,vn))}if(A){var Ne=A.vars.onUpdate,$e=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),Ne&&Ne.apply(A,$e||[])})}if(P.previous=function(){return Tt[Tt.indexOf(P)-1]},P.next=function(){return Tt[Tt.indexOf(P)+1]},P.revert=function(R,C){if(!C)return P.kill(!0);var U=R!==!1||!P.enabled,B=Fn;U!==P.isReverted&&(U&&(me=Math.max(V(),P.scroll.rec||0),ie=P.progress,se=i&&i.progress()),Ae&&[Ae,ke,K,k].forEach(function(ce){return ce.style.display=U?"none":"block"}),U&&(Fn=P,P.update(U)),f&&(!S||!P.isActive)&&(U?MT(f,H,Ue):uh(f,H,Ni(f),Fe)),U||P.update(U),Fn=B,P.isReverted=U)},P.refresh=function(R,C,U,B){if(!((Fn||!P.enabled)&&!C)){if(f&&R&&Vi){wn(r,"scrollEnd",Pv);return}!Zn&&he&&he(P),Fn=P,Q.tween&&!U&&(Q.tween.kill(),Q.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(We){return We.vars.immediateRender&&We.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ce=fe(),j=He(),de=A?A.duration():fr(D,N),Ie=Ze<=.01||!Ze,Oe=0,tt=B||0,je=Vs(U)?U.end:n.end,Dt=n.endTrigger||d,mt=Vs(U)?U.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Ke=P.pinnedContainer=n.pinnedContainer&&ri(n.pinnedContainer,P),gt=d&&Math.max(0,Tt.indexOf(P))||0,nt=gt,lt,xt,Nt,ii,w,q,ne,te,ee,Le,Be,De,qe;for(J&&Vs(U)&&(De=Ye.getProperty(K,N.p),qe=Ye.getProperty(k,N.p));nt-- >0;)q=Tt[nt],q.end||q.refresh(0,1)||(Fn=P),ne=q.pin,ne&&(ne===d||ne===f||ne===Ke)&&!q.isReverted&&(Le||(Le=[]),Le.unshift(q),q.revert(!0,!0)),q!==Tt[nt]&&(gt--,nt--);for(Vn(mt)&&(mt=mt(P)),mt=Rm(mt,"start",P),pe=Fm(mt,d,ce,N,V(),Ae,K,P,j,Z,$,de,A,P._startClamp&&"_startClamp")||(f?-.001:0),Vn(je)&&(je=je(P)),gi(je)&&!je.indexOf("+=")&&(~je.indexOf(" ")?je=(gi(mt)?mt.split(" ")[0]:"")+je:(Oe=Yc(je.substr(2),ce),je=gi(mt)?mt:(A?Ye.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,pe):pe)+Oe,Dt=d)),je=Rm(je,"end",P),ge=Math.max(pe,Fm(je||(Dt?"100% 0":de),Dt,ce,N,V()+Oe,ke,k,P,j,Z,$,de,A,P._endClamp&&"_endClamp"))||-.001,Oe=0,nt=gt;nt--;)q=Tt[nt]||{},ne=q.pin,ne&&q.start-q._pinPush<=pe&&!A&&q.end>0&&(lt=q.end-(P._startClamp?Math.max(0,q.start):q.start),(ne===d&&q.start-q._pinPush<pe||ne===Ke)&&isNaN(mt)&&(Oe+=lt*(1-q.progress)),ne===f&&(tt+=lt));if(pe+=Oe,ge+=Oe,P._startClamp&&(P._startClamp+=Oe),P._endClamp&&!Zn&&(P._endClamp=ge||-.001,ge=Math.min(ge,fr(D,N))),Ze=ge-pe||(pe-=.01)&&.001,Ie&&(ie=Ye.utils.clamp(0,1,Ye.utils.normalize(pe,ge,me))),P._pinPush=tt,Ae&&Oe&&(lt={},lt[N.a]="+="+Oe,Ke&&(lt[N.p]="-="+V()),Ye.set([Ae,ke],lt)),f&&!(Nd&&P.end>=fr(D,N)))lt=Ni(f),ii=N===xn,Nt=V(),we=parseFloat(le(N.a))+tt,!de&&ge>1&&(Be=(Y?jt.scrollingElement||vi:D).style,Be={style:Be,value:Be["overflow"+N.a.toUpperCase()]},Y&&Ni(kt)["overflow"+N.a.toUpperCase()]!=="scroll"&&(Be.style["overflow"+N.a.toUpperCase()]="scroll")),uh(f,H,lt),T=sc(f),xt=Lr(f,!0),te=$&&Ss(D,ii?ei:xn)(),p?(Fe=[p+N.os2,Ze+tt+vn],Fe.t=H,nt=p===pn?vu(f,N)+Ze+tt:0,nt&&(Fe.push(N.d,nt+vn),H.style.flexBasis!=="auto"&&(H.style.flexBasis=nt+vn)),ta(Fe),Ke&&Tt.forEach(function(We){We.pin===Ke&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),$&&V(me)):(nt=vu(f,N),nt&&H.style.flexBasis!=="auto"&&(H.style.flexBasis=nt+vn)),$&&(w={top:xt.top+(ii?Nt-pe:te)+vn,left:xt.left+(ii?te:Nt-pe)+vn,boxSizing:"border-box",position:"fixed"},w[no]=w["max"+fa]=Math.ceil(xt.width)+vn,w[io]=w["max"+pp]=Math.ceil(xt.height)+vn,w[Di]=w[Di+xl]=w[Di+_l]=w[Di+Ml]=w[Di+vl]="0",w[pn]=lt[pn],w[pn+xl]=lt[pn+xl],w[pn+_l]=lt[pn+_l],w[pn+Ml]=lt[pn+Ml],w[pn+vl]=lt[pn+vl],L=ST(Ue,w,S),Zn&&V(0)),i?(ee=i._initted,sh(1),i.render(i.duration(),!0,!0),ve=le(N.a)-we+Ze+tt,ye=Math.abs(Ze-ve)>1,$&&ye&&L.splice(L.length-2,2),i.render(0,!0,!0),ee||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),sh(0)):ve=Ze,Be&&(Be.value?Be.style["overflow"+N.a.toUpperCase()]=Be.value:Be.style.removeProperty("overflow-"+N.a));else if(d&&V()&&!A)for(xt=d.parentNode;xt&&xt!==kt;)xt._pinOffset&&(pe-=xt._pinOffset,ge-=xt._pinOffset),xt=xt.parentNode;Le&&Le.forEach(function(We){return We.revert(!1,!0)}),P.start=pe,P.end=ge,xe=Re=Zn?me:V(),!A&&!Zn&&(xe<me&&V(me),P.scroll.rec=0),P.revert(!1,!0),Xe=Bn(),Ee&&(Ge=-1,Ee.restart(!0)),Fn=0,i&&I&&(i._initted||se)&&i.progress()!==se&&i.progress(se||0,!0).render(i.time(),!0,!0),(Ie||ie!==P.progress||A||_||i&&!i._initted)&&(i&&!I&&(i._initted||ie||i.vars.immediateRender!==!1)&&i.totalProgress(A&&pe<-.001&&!ie?Ye.utils.normalize(pe,ge,0):ie,!0),P.progress=Ie||(xe-pe)/Ze===ie?0:ie),f&&p&&(H._pinOffset=Math.round(P.progress*ve)),O&&O.invalidate(),isNaN(De)||(De-=Ye.getProperty(K,N.p),qe-=Ye.getProperty(k,N.p),oc(K,N,De),oc(Ae,N,De-(B||0)),oc(k,N,qe),oc(ke,N,qe-(B||0))),Ie&&!Zn&&P.update(),u&&!Zn&&!at&&(at=!0,u(P),at=!1)}},P.getVelocity=function(){return(V()-Re)/(Bn()-Ja)*1e3||0},P.endAnimation=function(){La(P.callbackAnimation),i&&(O?O.progress(1):i.paused()?I||La(i,P.direction<0,1):La(i,i.reversed()))},P.labelToScroll=function(R){return i&&i.labels&&(pe||P.refresh()||pe)+i.labels[R]/i.duration()*Ze||0},P.getTrailing=function(R){var C=Tt.indexOf(P),U=P.direction>0?Tt.slice(0,C).reverse():Tt.slice(C+1);return(gi(R)?U.filter(function(B){return B.vars.preventOverlaps===R}):U).filter(function(B){return P.direction>0?B.end<=pe:B.start>=ge})},P.update=function(R,C,U){if(!(A&&!U&&!R)){var B=Zn===!0?me:P.scroll(),ce=R?0:(B-pe)/Ze,j=ce<0?0:ce>1?1:ce||0,de=P.progress,Ie,Oe,tt,je,Dt,mt,Ke,gt;if(C&&(Re=xe,xe=A?V():B,x&&(Je=be,be=i&&!I?i.totalProgress():j)),m&&f&&!Fn&&!Ql&&Vi&&(!j&&pe<B+(B-Re)/(Bn()-Ja)*m?j=1e-4:j===1&&ge>B+(B-Re)/(Bn()-Ja)*m&&(j=.9999)),j!==de&&P.enabled){if(Ie=P.isActive=!!j&&j<1,Oe=!!de&&de<1,mt=Ie!==Oe,Dt=mt||!!j!=!!de,P.direction=j>de?1:-1,P.progress=j,Dt&&!Fn&&(tt=j&&!de?0:j===1?1:de===1?2:3,I&&(je=!mt&&z[tt+1]!=="none"&&z[tt+1]||z[tt],gt=i&&(je==="complete"||je==="reset"||je in i))),b&&(mt||gt)&&(gt||h||!i)&&(Vn(b)?b(P):P.getTrailing(b).forEach(function(Nt){return Nt.endAnimation()})),I||(O&&!Fn&&!Ql?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",j,i._tTime/i._tDur):(O.vars.totalProgress=j,O.invalidate().restart())):i&&i.totalProgress(j,!!(Fn&&(Xe||R)))),f){if(R&&p&&(H.style[p+N.os2]=Ve),!$)re(el(we+ve*j));else if(Dt){if(Ke=!R&&j>de&&ge+1>B&&B+1>=fr(D,N),S)if(!R&&(Ie||Ke)){var nt=Lr(f,!0),lt=B-pe;Bm(f,kt,nt.top+(N===xn?lt:0)+vn,nt.left+(N===xn?0:lt)+vn)}else Bm(f,H);ta(Ie||Ke?L:T),ye&&j<1&&Ie||re(we+(j===1&&!Ke?ve:0))}}x&&!Q.tween&&!Fn&&!Ql&&Ee.restart(!0),a&&(mt||y&&j&&(j<1||!oh))&&Nl(a.targets).forEach(function(Nt){return Nt.classList[Ie||y?"add":"remove"](a.className)}),o&&!I&&!R&&o(P),Dt&&!Fn?(I&&(gt&&(je==="complete"?i.pause().totalProgress(1):je==="reset"?i.restart(!0).pause():je==="restart"?i.restart(!0):i[je]()),o&&o(P)),(mt||!oh)&&(c&&mt&&lh(P,c),G[tt]&&lh(P,G[tt]),y&&(j===1?P.kill(!1,1):G[tt]=0),mt||(tt=j===1?1:3,G[tt]&&lh(P,G[tt]))),M&&!Ie&&Math.abs(P.getVelocity())>(tl(M)?M:2500)&&(La(P.callbackAnimation),O?O.progress(1):La(i,je==="reverse"?1:!j,1))):I&&o&&!Fn&&o(P)}if(Te){var xt=A?B/A.duration()*(A._caScrollDist||0):B;Me(xt+(K._isFlipped?1:0)),Te(xt)}ze&&ze(-B/A.duration()*(A._caScrollDist||0))}},P.enable=function(R,C){P.enabled||(P.enabled=!0,wn(D,"resize",nl),Y||wn(D,"scroll",xo),he&&wn(r,"refreshInit",he),R!==!1&&(P.progress=ie=0,xe=Re=Ge=V()),C!==!1&&P.refresh())},P.getTween=function(R){return R&&Q?Q.tween:O},P.setPositions=function(R,C,U,B){if(A){var ce=A.scrollTrigger,j=A.duration(),de=ce.end-ce.start;R=ce.start+de*R/j,C=ce.start+de*C/j}P.refresh(!1,!1,{start:Cm(R,U&&!!P._startClamp),end:Cm(C,U&&!!P._endClamp)},B),P.update()},P.adjustPinSpacing=function(R){if(Fe&&R){var C=Fe.indexOf(N.d)+1;Fe[C]=parseFloat(Fe[C])+R+vn,Fe[1]=parseFloat(Fe[1])+R+vn,ta(Fe)}},P.disable=function(R,C){if(R!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,C||O&&O.pause(),me=0,oe&&(oe.uncache=1),he&&An(r,"refreshInit",he),Ee&&(Ee.pause(),Q.tween&&Q.tween.kill()&&(Q.tween=0)),!Y)){for(var U=Tt.length;U--;)if(Tt[U].scroller===D&&Tt[U]!==P)return;An(D,"resize",nl),Y||An(D,"scroll",xo)}},P.kill=function(R,C){P.disable(R,C),O&&!C&&O.kill(),l&&delete Od[l];var U=Tt.indexOf(P);U>=0&&Tt.splice(U,1),U===Kn&&jc>0&&Kn--,U=0,Tt.forEach(function(B){return B.scroller===P.scroller&&(U=1)}),U||Zn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,R&&i.revert({kill:!1}),C||i.kill()),Ae&&[Ae,ke,K,k].forEach(function(B){return B.parentNode&&B.parentNode.removeChild(B)}),yl===P&&(yl=0),f&&(oe&&(oe.uncache=1),U=0,Tt.forEach(function(B){return B.pin===f&&U++}),U||(oe.spacer=0)),n.onKill&&n.onKill(P)},Tt.push(P),P.enable(!1,!1),Qe&&Qe(P),i&&i.add&&!Ze){var ft=P.update;P.update=function(){P.update=ft,At.cache++,pe||ge||P.refresh()},Ye.delayedCall(.01,P.update),Ze=.01,pe=ge=0}else P.refresh();f&&xT()},r.register=function(n){return zo||(Ye=n||bv(),Tv()&&window.document&&r.enable(),zo=Qa),zo},r.defaults=function(n){if(n)for(var i in n)ic[i]=n[i];return ic},r.disable=function(n,i){Qa=0,Tt.forEach(function(o){return o[i?"kill":"disable"](n)}),An(Et,"wheel",xo),An(jt,"scroll",xo),clearInterval(Jl),An(jt,"touchcancel",lr),An(kt,"touchstart",lr),tc(An,jt,"pointerdown,touchstart,mousedown",Pm),tc(An,jt,"pointerup,touchend,mouseup",Im),_u.kill(),ec(An);for(var s=0;s<At.length;s+=3)nc(An,At[s],At[s+1]),nc(An,At[s],At[s+2])},r.enable=function(){if(Et=window,jt=document,vi=jt.documentElement,kt=jt.body,Ye&&(Nl=Ye.utils.toArray,ml=Ye.utils.clamp,Dd=Ye.core.context||lr,sh=Ye.core.suppressOverwrites||lr,up=Et.history.scrollRestoration||"auto",Ud=Et.pageYOffset||0,Ye.core.globals("ScrollTrigger",r),kt)){Qa=1,ea=document.createElement("div"),ea.style.height="100vh",ea.style.position="absolute",Nv(),dT(),hn.register(Ye),r.isTouch=hn.isTouch,os=hn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ld=hn.isTouch===1,wn(Et,"wheel",xo),cp=[Et,jt,vi,kt],Ye.matchMedia?(r.matchMedia=function(c){var u=Ye.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ye.addEventListener("matchMediaInit",function(){Lv(),gp()}),Ye.addEventListener("matchMediaRevert",function(){return Iv()}),Ye.addEventListener("matchMedia",function(){$s(0,1),lo("matchMedia")}),Ye.matchMedia().add("(orientation: portrait)",function(){return ch(),ch})):console.warn("Requires GSAP 3.11.0 or later"),ch(),wn(jt,"scroll",xo);var n=kt.hasAttribute("style"),i=kt.style,s=i.borderTopStyle,o=Ye.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Lr(kt),xn.m=Math.round(a.top+xn.sc())||0,ei.m=Math.round(a.left+ei.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(kt.setAttribute("style",""),kt.removeAttribute("style")),Jl=setInterval(Nm,250),Ye.delayedCall(.5,function(){return Ql=0}),wn(jt,"touchcancel",lr),wn(kt,"touchstart",lr),tc(wn,jt,"pointerdown,touchstart,mousedown",Pm),tc(wn,jt,"pointerup,touchend,mouseup",Im),Id=Ye.utils.checkPrefix("transform"),Kc.push(Id),zo=Bn(),_u=Ye.delayedCall(.2,$s).pause(),Ho=[jt,"visibilitychange",function(){var c=Et.innerWidth,u=Et.innerHeight;jt.hidden?(Am=c,wm=u):(Am!==c||wm!==u)&&nl()},jt,"DOMContentLoaded",$s,Et,"load",$s,Et,"resize",nl],ec(wn),Tt.forEach(function(c){return c.enable(0,1)}),l=0;l<At.length;l+=3)nc(An,At[l],At[l+1]),nc(An,At[l],At[l+2])}},r.config=function(n){"limitCallbacks"in n&&(oh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Jl)||(Jl=i)&&setInterval(Nm,i),"ignoreMobileResize"in n&&(Ld=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ec(An)||ec(wn,n.autoRefreshEvents||"none"),Mv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ri(n),o=At.indexOf(s),a=oo(s);~o&&At.splice(o,a?6:2),i&&(a?gr.unshift(Et,i,kt,i,vi,i):gr.unshift(s,i))},r.clearMatchMedia=function(n){Tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(gi(n)?ri(n):n).getBoundingClientRect(),a=o[s?no:io]*i||0;return s?o.right-a>0&&o.left+a<Et.innerWidth:o.bottom-a>0&&o.top+a<Et.innerHeight},r.positionInViewport=function(n,i,s){gi(n)&&(n=ri(n));var o=n.getBoundingClientRect(),a=o[s?no:io],l=i==null?a/2:i in xu?xu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Et.innerWidth:(o.top+l)/Et.innerHeight},r.killAll=function(n){if(Tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ao.killAll||[];ao={},i.forEach(function(s){return s()})}},r})();Ct.version="3.14.2";Ct.saveStyles=function(r){return r?Nl(r).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ye.core.getCache(e),Dd())}}):pi};Ct.revert=function(r,e){return gp(!r,e)};Ct.create=function(r,e){return new Ct(r,e)};Ct.refresh=function(r){return r?nl(!0):(zo||Ct.register())&&$s(!0)};Ct.update=function(r){return++At.cache&&Fr(r===!0?2:0)};Ct.clearScrollMemory=Dv;Ct.maxScroll=function(r,e){return fr(r,e?ei:xn)};Ct.getScrollFunc=function(r,e){return Ss(ri(r),e?ei:xn)};Ct.getById=function(r){return Od[r]};Ct.getAll=function(){return Tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ct.isScrolling=function(){return!!Vi};Ct.snapDirectional=mp;Ct.addEventListener=function(r,e){var t=ao[r]||(ao[r]=[]);~t.indexOf(e)||t.push(e)};Ct.removeEventListener=function(r,e){var t=ao[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ye.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(p){h.length||f.restart(!0),h.push(p.trigger),d.push(p),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),wn(Ct,"refresh",function(){return s=e.batchMax()})),Nl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ct.create(c))}),t};var Vm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},hh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(hn.isTouch?" pinch-zoom":""):"none",e===vi&&r(kt,t)},ac={auto:1,scroll:1},bT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ye.core.getCache(s),a=Bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==kt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ac[(l=Ni(s)).overflowY]||ac[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!oo(s)&&(ac[(l=Ni(s)).overflowY]||ac[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Uv=function(e,t,n,i){return hn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&bT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&wn(jt,hn.eventTypes[0],Hm,!1,!0)},onDisable:function(){return An(jt,hn.eventTypes[0],Hm,!0)}})},ET=/(input|label|select|textarea)/i,zm,Hm=function(e){var t=ET.test(e.target.tagName);(t||zm)&&(e._gsapAllow=!0,zm=t)},AT=function(e){Vs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ri(e.target)||vi,u=Ye.core.globals().ScrollSmoother,h=u&&u.get(),d=os&&(e.content&&ri(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Ss(c,xn),p=Ss(c,ei),_=1,m=(hn.isTouch&&Et.visualViewport?Et.visualViewport.scale*Et.visualViewport.width:Et.outerWidth)/Et.innerWidth,g=0,v=Vn(i)?function(){return i(a)}:function(){return i||2.8},y,x,S=Uv(c,e.type,!0,s),E=function(){return x=!1},A=lr,M=lr,b=function(){l=fr(c,xn),M=ml(os?1:0,l),n&&(A=ml(0,fr(c,ei))),y=ro},N=function(){d._gsap.y=el(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(x){requestAnimationFrame(E);var J=el(a.deltaY/2),Z=M(f.v-J);if(d&&Z!==f.v+f.offset){f.offset=Z-f.v;var P=el((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=At.cache,Fr()}return!0}f.offset&&N(),x=!0},D,X,Y,$,G=function(){b(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return d&&Ye.set(d,{y:"+=0"}),e.ignoreCheck=function(z){return os&&z.type==="touchmove"&&I()||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){x=!1;var z=_;_=el((Et.visualViewport&&Et.visualViewport.scale||1)/m),D.pause(),z!==_&&hh(c,_>1.01?!0:n?!1:"x"),X=p(),Y=f(),b(),y=ro},e.onRelease=e.onGestureStart=function(z,J){if(f.offset&&N(),!J)$.restart(!0);else{At.cache++;var Z=v(),P,he;n&&(P=p(),he=P+Z*.05*-z.velocityX/.227,Z*=Vm(p,P,he,fr(c,ei)),D.vars.scrollX=A(he)),P=f(),he=P+Z*.05*-z.velocityY/.227,Z*=Vm(f,P,he,fr(c,xn)),D.vars.scrollY=M(he),D.invalidate().duration(Z).play(.01),(os&&D.vars.scrollY>=l||P>=l-1)&&Ye.to({},{onUpdate:G,duration:Z})}o&&o(z)},e.onWheel=function(){D._ts&&D.pause(),Bn()-g>1e3&&(y=0,g=Bn())},e.onChange=function(z,J,Z,P,he){if(ro!==y&&b(),J&&n&&p(A(P[2]===J?X+(z.startX-z.x):p()+J-P[1])),Z){f.offset&&N();var fe=he[2]===Z,He=fe?Y+z.startY-z.y:f()+Z-he[1],Ge=M(He);fe&&He!==Ge&&(Y+=Ge-He),f(Ge)}(Z||J)&&Fr()},e.onEnable=function(){hh(c,n?!1:"x"),Ct.addEventListener("refresh",G),wn(Et,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),S.enable()},e.onDisable=function(){hh(c,!0),An(Et,"resize",G),Ct.removeEventListener("refresh",G),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new hn(e),a.iOS=os,os&&!f()&&f(1),os&&Ye.ticker.add(lr),$=a._dc,D=Ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ov(f,f(),function(){return D.pause()})},onUpdate:Fr,onComplete:$.vars.onComplete}),a};Ct.sort=function(r){if(Vn(r))return Tt.sort(r);var e=Et.pageYOffset||0;return Ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Et.innerHeight}),Tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ct.observe=function(r){return new hn(r)};Ct.normalizeScroll=function(r){if(typeof r>"u")return jn;if(r===!0&&jn)return jn.enable();if(r===!1){jn&&jn.kill(),jn=r;return}var e=r instanceof hn?r:AT(r);return jn&&jn.target===e.target&&jn.kill(),oo(e.target)&&(jn=e),e};Ct.core={_getVelocityProp:Pd,_inputObserver:Uv,_scrollers:At,_proxies:gr,bridge:{ss:function(){Vi||lo("scrollStart"),Vi=Bn()},ref:function(){return Fn}}};bv()&&Ye.registerPlugin(Ct);const wT={id:"projects",class:"projects"},RT={class:"scrolling-text-container"},CT={class:"scrolling-text-container"},PT={class:"sticky-wrapper"},IT={class:"horizontal-container"},LT={class:"card-content"},DT={class:"card-title"},NT={class:"card-description"},OT={class:"card-tech"},UT={class:"card-links"},FT=["href"],BT={__name:"Projects",setup(r){Za.registerPlugin(Ct);const e=Pt(null),t=Pt(null),n=Pt(null),i=Pt(null),s=Pt([{id:1,title:"GomokuMind",description:"五子棋策略评估与辅助系统，实现并对比 Heuristic、MCTS、Alpha-Beta、AlphaZero、Minimax 五种经典博弈算法。Go 后端 + Python 策略引擎 + React 前端可视化，支持人机对弈与策略胜率分析。",githubUrl:"https://github.com/ContinueYN/GomokuMind",technologies:["Go","Python","React","TypeScript","MCTS","AlphaZero"]},{id:2,title:"ChatRegistry AI",description:"全栈 AI 聊天与用户管理系统。前端 Vue3 + TypeScript，后端 FastAPI + Express 双服务架构，集成智谱 AI GLM-4 大模型，支持流式对话、多轮会话管理、思维链推理及 Markdown 渲染。",githubUrl:"https://github.com/ContinueYN/ChatRegistry-AI",technologies:["Vue3","TypeScript","FastAPI","Express","GLM-4","SSE"]},{id:3,title:"Portfolio 3.0",description:"个人作品集网站第三代。Vue3 + TypeScript + Vite 构建，GSAP 滚动驱动动画、Three.js 粒子背景、VRM 3D 角色交互、SVG 笔画绘制动画，GitHub Actions 自动部署。",githubUrl:"https://github.com/ContinueYN/website_3.0",technologies:["Vue3","TypeScript","GSAP","Three.js","VRM","CI/CD"]},{id:4,title:"诗之古河",description:"传统文化与 3D 前端技术融合。基于 Three.js 实现古诗书法作品的立体展示，支持唐风卷轴、绢本册页、竹简等多种装帧形式切换，配合粒子特效营造古风意境。",githubUrl:"https://github.com/ContinueYN/Poem",technologies:["Three.js","Tween.js","Canvas","CSS3","WebGL"]},{id:5,title:"Literature",description:"纯前端现代文学内容平台，TypeScript 构建。跨平台适配（含 Swift、Java、Ruby 多语言工具链），支持文学作品的结构化浏览、搜索与阅读体验优化。",githubUrl:"https://github.com/ContinueYN/Literature",technologies:["TypeScript","Swift","Python","CSS3","Java"]}]);return qr(()=>{n.value&&Za.to(n.value,{xPercent:-50,ease:"none",duration:20,repeat:-1}),i.value&&Za.fromTo(i.value,{xPercent:-50},{xPercent:0,ease:"none",duration:20,repeat:-1});const o=t.value,a=e.value;if(o&&a){const l=o.scrollWidth,c=window.innerWidth;Za.to(o,{x:()=>-(l-c),ease:"none",scrollTrigger:{trigger:a,start:"top top",end:()=>`+=${l-c}`,scrub:1,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}})}}),(o,a)=>(dt(),vt("section",wT,[W("div",RT,[W("div",{class:"scrolling-text scrolling-left",ref_key:"scrollingTextLeftRef",ref:n},[...a[0]||(a[0]=[W("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1),W("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1)])],512)]),W("div",CT,[W("div",{class:"scrolling-text scrolling-right",ref_key:"scrollingTextRightRef",ref:i},[...a[1]||(a[1]=[W("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1),W("span",{class:"text-repeat"},"PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ PROJECT //\\\\ ",-1)])],512)]),W("div",{class:"horizontal-scroll-section",ref_key:"horizontalSectionRef",ref:e},[W("div",PT,[W("div",IT,[W("div",{class:"horizontal-track",ref_key:"horizontalTrackRef",ref:t},[(dt(!0),vt(qi,null,ur(s.value,l=>(dt(),vt("div",{key:l.id,class:"project-card"},[W("div",LT,[W("h3",DT,mn(l.title),1),W("p",NT,mn(l.description),1),W("div",OT,[(dt(!0),vt(qi,null,ur(l.technologies,c=>(dt(),vt("span",{key:c,class:"tech-tag"},mn(c),1))),128))]),W("div",UT,[W("a",{href:l.githubUrl,class:"card-link github-link",target:"_blank"},[...a[2]||(a[2]=[W("span",null,"GitHub",-1),W("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[W("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.24-.604-.536-1.529.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.648.353 2.572.11 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1)])],8,FT)])])]))),128))],512)])])],512)]))}},kT=Yr(BT,[["__scopeId","data-v-6938a6f0"]]),VT={id:"contact",class:"contact"},zT={class:"contact-bg-decoration"},HT={class:"sakura-petals"},GT={class:"container"},WT={class:"contact-content"},XT={class:"contact-info"},qT={class:"info-card"},YT={class:"contact-methods"},$T={class:"contact-method"},jT={class:"contact-icon-wrapper"},KT={class:"contact-icon"},ZT={class:"contact-method"},JT={class:"contact-icon-wrapper"},QT={class:"contact-icon"},eb={class:"contact-method"},tb={class:"contact-icon-wrapper"},nb={class:"contact-icon"},ib={class:"form-group"},rb={class:"input-wrapper"},sb=["disabled"],ob={class:"form-group"},ab={class:"input-wrapper"},lb=["disabled"],cb={class:"form-group"},ub={class:"input-wrapper"},hb=["disabled"],db={class:"form-group"},fb={class:"input-wrapper"},pb=["disabled"],mb=["disabled"],gb={key:0},_b={key:1},vb=Gl({__name:"Contact",setup(r){const e=J_({name:"",email:"",subject:"",message:""}),t=Pt(!1),n=async()=>{if(!t.value){t.value=!0;try{const o=await(await fetch("http://localhost:3001/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();o.success?(alert(o.message),Object.assign(e,{name:"",email:"",subject:"",message:""})):alert(o.message||"发送失败，请重试")}catch(i){console.error("提交表单失败:",i),alert("网络错误，请检查网络连接或稍后重试")}finally{t.value=!1}}};return(i,s)=>(dt(),vt("section",VT,[W("div",zT,[s[4]||(s[4]=El('<div class="floating-shapes" data-v-80377d51><div class="shape shape-1" data-v-80377d51></div><div class="shape shape-2" data-v-80377d51></div><div class="shape shape-3" data-v-80377d51></div><div class="shape shape-4" data-v-80377d51></div><div class="shape shape-5" data-v-80377d51></div></div>',1)),W("div",HT,[(dt(),vt(qi,null,ur(15,o=>W("div",{class:"petal",key:o,style:Xs({left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*2}s`})},null,4)),64))])]),W("div",GT,[s[27]||(s[27]=El('<div class="section-header" data-v-80377d51><h2 class="section-title" data-v-80377d51><span class="title-icon" data-v-80377d51>✦</span> ~~Contact~~ <span class="title-icon" data-v-80377d51>✦</span></h2><p class="section-subtitle" data-v-80377d51>有项目想讨论？欢迎联系！</p><div class="title-decoration" data-v-80377d51><span class="deco-line" data-v-80377d51></span><span class="deco-star" data-v-80377d51>✦</span><span class="deco-line" data-v-80377d51></span></div></div>',1)),W("div",WT,[W("div",XT,[W("div",qT,[s[11]||(s[11]=W("div",{class:"card-header"},[W("h3",null,"通过右边可以发送到我QQ邮箱")],-1)),s[12]||(s[12]=W("p",{class:"info-description"},"如果您有项目想法或需要帮助，请随时与我联系。我通常会在一日内回复。",-1)),W("div",YT,[W("div",$T,[W("div",jT,[s[5]||(s[5]=W("div",{class:"icon-bg"},null,-1)),W("div",KT,[Qt(Kt(Q_),{size:20})])]),s[6]||(s[6]=W("div",{class:"method-info"},[W("h4",null,"邮箱"),W("p",null,"3258664928@qq.com")],-1))]),W("div",ZT,[W("div",JT,[s[7]||(s[7]=W("div",{class:"icon-bg"},null,-1)),W("div",QT,[Qt(Kt(e0),{size:20})])]),s[8]||(s[8]=W("div",{class:"method-info"},[W("h4",null,"电话"),W("p",null,"+86 181 3686 5751")],-1))]),W("div",eb,[W("div",tb,[s[9]||(s[9]=W("div",{class:"icon-bg"},null,-1)),W("div",nb,[Qt(Kt(t0),{size:20})])]),s[10]||(s[10]=W("div",{class:"method-info"},[W("h4",null,"地址"),W("p",null,"中国，汕头市")],-1))])])])]),W("form",{class:"contact-form",onSubmit:mi(n,["prevent"])},[s[26]||(s[26]=W("div",{class:"form-header"},[W("h3",null,"发送消息")],-1)),W("div",ib,[s[15]||(s[15]=W("label",{for:"name"}," 姓名 * ",-1)),W("div",rb,[$a(W("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=o=>e.name=o),disabled:t.value,required:"",placeholder:"请输入您的姓名"},null,8,sb),[[$l,e.name]]),s[13]||(s[13]=W("div",{class:"input-border"},null,-1)),s[14]||(s[14]=W("div",{class:"input-highlight"},null,-1))])]),W("div",ob,[s[18]||(s[18]=W("label",{for:"email"}," 邮箱 * ",-1)),W("div",ab,[$a(W("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=o=>e.email=o),disabled:t.value,required:"",placeholder:"请输入您的邮箱"},null,8,lb),[[$l,e.email]]),s[16]||(s[16]=W("div",{class:"input-border"},null,-1)),s[17]||(s[17]=W("div",{class:"input-highlight"},null,-1))])]),W("div",cb,[s[21]||(s[21]=W("label",{for:"subject"}," 主题 * ",-1)),W("div",ub,[$a(W("input",{type:"text",id:"subject","onUpdate:modelValue":s[2]||(s[2]=o=>e.subject=o),disabled:t.value,required:"",placeholder:"请输入主题"},null,8,hb),[[$l,e.subject]]),s[19]||(s[19]=W("div",{class:"input-border"},null,-1)),s[20]||(s[20]=W("div",{class:"input-highlight"},null,-1))])]),W("div",db,[s[24]||(s[24]=W("label",{for:"message"}," 消息 * ",-1)),W("div",fb,[$a(W("textarea",{id:"message",rows:"5","onUpdate:modelValue":s[3]||(s[3]=o=>e.message=o),disabled:t.value,required:"",placeholder:"请输入您的消息..."},null,8,pb),[[$l,e.message]]),s[22]||(s[22]=W("div",{class:"input-border"},null,-1)),s[23]||(s[23]=W("div",{class:"input-highlight"},null,-1))])]),W("button",{type:"submit",class:"btn btn-submit",disabled:t.value},[t.value?(dt(),vt("span",gb,"发送中...")):(dt(),vt("span",_b,"发送消息")),s[25]||(s[25]=W("div",{class:"btn-shine"},null,-1))],8,mb)],32)])])]))}}),xb=Yr(vb,[["__scopeId","data-v-80377d51"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="183",Mb=0,Gm=1,yb=2,Jc=1,Sb=2,il=3,Gr=0,ti=1,Oi=2,Br=0,na=1,Wm=2,Xm=3,qm=4,Tb=5,Gs=100,bb=101,Eb=102,Ab=103,wb=104,Rb=200,Cb=201,Pb=202,Ib=203,Bd=204,kd=205,Lb=206,Db=207,Nb=208,Ob=209,Ub=210,Fb=211,Bb=212,kb=213,Vb=214,Vd=0,zd=1,Hd=2,pa=3,Gd=4,Wd=5,Xd=6,qd=7,Fv=0,zb=1,Hb=2,_r=0,Bv=1,kv=2,Vv=3,zv=4,Hv=5,Gv=6,Wv=7,Ym="attached",Gb="detached",Xv=300,uo=301,ma=302,dh=303,fh=304,Bu=306,ga=1e3,pr=1001,Mu=1002,Mn=1003,qv=1004,rl=1005,yn=1006,Qc=1007,Nr=1008,yi=1009,Yv=1010,$v=1011,Ul=1012,_p=1013,Mr=1014,Bi=1015,Wr=1016,vp=1017,xp=1018,Fl=1020,jv=35902,Kv=35899,Zv=1021,Jv=1022,ki=1023,Xr=1026,js=1027,Mp=1028,yp=1029,_a=1030,Sp=1031,Tp=1033,eu=33776,tu=33777,nu=33778,iu=33779,Yd=35840,$d=35841,jd=35842,Kd=35843,Zd=36196,Jd=37492,Qd=37496,ef=37488,tf=37489,nf=37490,rf=37491,sf=37808,of=37809,af=37810,lf=37811,cf=37812,uf=37813,hf=37814,df=37815,ff=37816,pf=37817,mf=37818,gf=37819,_f=37820,vf=37821,xf=36492,Mf=36494,yf=36495,Sf=36283,Tf=36284,bf=36285,Ef=36286,Wb=2200,Xb=2201,qb=2202,Bl=2300,kl=2301,ph=2302,$m=2303,$o=2400,jo=2401,yu=2402,bp=2500,Yb=2501,$b=0,Qv=1,Af=2,jb=3200,Ep=0,Kb=1,cs="",In="srgb",ni="srgb-linear",Su="linear",zt="srgb",Mo=7680,jm=519,Zb=512,Jb=513,Qb=514,Ap=515,eE=516,tE=517,wp=518,nE=519,wf=35044,iE=35048,Km="300 es",mr=2e3,Vl=2001;function rE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oE(){const r=zl("canvas");return r.style.display="block",r}const Zm={};function Tu(...r){const e="THREE."+r.shift();console.log(e,...r)}function ex(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function it(...r){r=ex(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ht(...r){r=ex(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function bu(...r){const e=r.join(" ");e in Zm||(Zm[e]=!0,it(...r))}function aE(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const lE={[Vd]:zd,[Hd]:Xd,[Gd]:qd,[pa]:Wd,[zd]:Vd,[Xd]:Hd,[qd]:Gd,[Wd]:pa};class fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jm=1234567;const Sl=Math.PI/180,va=180/Math.PI;function ji(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function Rp(r,e){return(r%e+e)%e}function cE(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function uE(r,e,t){return r!==e?(t-r)/(e-r):0}function Tl(r,e,t){return(1-t)*r+t*e}function hE(r,e,t,n){return Tl(r,e,1-Math.exp(-t*n))}function dE(r,e=1){return e-Math.abs(Rp(r,e*2)-e)}function fE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function pE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function mE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function gE(r,e){return r+Math.random()*(e-r)}function _E(r){return r*(.5-Math.random())}function vE(r){r!==void 0&&(Jm=r);let e=Jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xE(r){return r*Sl}function ME(r){return r*va}function yE(r){return(r&r-1)===0&&r!==0}function SE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function TE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bE(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const an={DEG2RAD:Sl,RAD2DEG:va,generateUUID:ji,clamp:Rt,euclideanModulo:Rp,mapLinear:cE,inverseLerp:uE,lerp:Tl,damp:hE,pingpong:dE,smoothstep:fE,smootherstep:pE,randInt:mE,randFloat:gE,randFloatSpread:_E,seededRandom:vE,degToRad:xE,radToDeg:ME,isPowerOfTwo:yE,ceilPowerOfTwo:SE,floorPowerOfTwo:TE,setQuaternionFromProperEuler:bE,normalize:Ht,denormalize:Yi};class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);g=Math.sin(g*v)/y,a=Math.sin(a*v)/y,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new F,Qm=new pt;class ot{constructor(e,t,n,i,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],y=i[4],x=i[7],S=i[2],E=i[5],A=i[8];return s[0]=o*_+a*v+l*S,s[3]=o*m+a*y+l*E,s[6]=o*g+a*x+l*A,s[1]=c*_+u*v+h*S,s[4]=c*m+u*y+h*E,s[7]=c*g+u*x+h*A,s[2]=d*_+f*v+p*S,s[5]=d*m+f*y+p*E,s[8]=d*g+f*x+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new ot,eg=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EE(){const r={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===zt&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===zt&&(i.r=ia(i.r),i.g=ia(i.g),i.b=ia(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Su:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return bu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return bu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ni]:{primaries:e,whitePoint:n,transfer:Su,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:zt,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const It=EE();function kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yo;class AE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yo===void 0&&(yo=zl("canvas")),yo.width=e.width,yo.height=e.height;const i=yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=kr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class Cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_h(i[o].image)):s.push(_h(i[o]))}else s=_h(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let RE=0;const vh=new F;class Rn extends fo{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,n=pr,i=pr,s=yn,o=Nr,a=ki,l=yi,c=Rn.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=ji(),this.name="",this.source=new Cp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ga:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ga:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Xv;Rn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,S=(g+1)/2,E=(u+d)/4,A=(h+_)/4,M=(p+m)/4;return y>x&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=A/n):x>S?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends fo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Rn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Cp(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends CE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tx extends Rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PE extends Rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,p,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/So.setFromMatrixColumn(e,0).length(),s=1/So.setFromMatrixColumn(e,1).length(),o=1/So.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IE,e,LE)}lookAt(e,t,n){const i=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Jr.crossVectors(n,di),Jr.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Jr.crossVectors(n,di)),Jr.normalize(),lc.crossVectors(di,Jr),i[0]=Jr.x,i[4]=lc.x,i[8]=di.x,i[1]=Jr.y,i[5]=lc.y,i[9]=di.y,i[2]=Jr.z,i[6]=lc.z,i[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],y=n[7],x=n[11],S=n[15],E=i[0],A=i[4],M=i[8],b=i[12],N=i[1],I=i[5],D=i[9],X=i[13],Y=i[2],$=i[6],G=i[10],z=i[14],J=i[3],Z=i[7],P=i[11],he=i[15];return s[0]=o*E+a*N+l*Y+c*J,s[4]=o*A+a*I+l*$+c*Z,s[8]=o*M+a*D+l*G+c*P,s[12]=o*b+a*X+l*z+c*he,s[1]=u*E+h*N+d*Y+f*J,s[5]=u*A+h*I+d*$+f*Z,s[9]=u*M+h*D+d*G+f*P,s[13]=u*b+h*X+d*z+f*he,s[2]=p*E+_*N+m*Y+g*J,s[6]=p*A+_*I+m*$+g*Z,s[10]=p*M+_*D+m*G+g*P,s[14]=p*b+_*X+m*z+g*he,s[3]=v*E+y*N+x*Y+S*J,s[7]=v*A+y*I+x*$+S*Z,s[11]=v*M+y*D+x*G+S*P,s[15]=v*b+y*X+x*z+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*f-c*d,y=a*f-c*h,x=a*d-l*h,S=o*f-c*u,E=o*d-l*u,A=o*h-a*u;return t*(_*v-m*y+g*x)-n*(p*v-m*S+g*E)+i*(p*y-_*S+g*A)-s*(p*x-_*E+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*a-n*o,y=t*l-i*o,x=t*c-s*o,S=n*l-i*a,E=n*c-s*a,A=i*c-s*l,M=u*_-h*p,b=u*m-d*p,N=u*g-f*p,I=h*m-d*_,D=h*g-f*_,X=d*g-f*m,Y=v*X-y*D+x*I+S*N-E*b+A*M;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/Y;return e[0]=(a*X-l*D+c*I)*$,e[1]=(i*D-n*X-s*I)*$,e[2]=(_*A-m*E+g*S)*$,e[3]=(d*E-h*A-f*S)*$,e[4]=(l*N-o*X-c*b)*$,e[5]=(t*X-i*N+s*b)*$,e[6]=(m*x-p*A-g*y)*$,e[7]=(u*A-d*x+f*y)*$,e[8]=(o*D-a*N+c*M)*$,e[9]=(n*N-t*D-s*M)*$,e[10]=(p*E-_*x+g*v)*$,e[11]=(h*x-u*E-f*v)*$,e[12]=(a*b-o*I-l*M)*$,e[13]=(t*I-n*b+i*M)*$,e[14]=(_*y-p*S-m*v)*$,e[15]=(u*S-h*y+d*v)*$,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,_=o*u,m=o*h,g=a*h,v=l*c,y=l*u,x=l*h,S=n.x,E=n.y,A=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+x)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+g))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+y)*A,i[9]=(m-v)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=So.set(i[0],i[1],i[2]).length();const a=So.set(i[4],i[5],i[6]).length(),l=So.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Hi.copy(this);const c=1/o,u=1/a,h=1/l;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=u,Hi.elements[5]*=u,Hi.elements[6]*=u,Hi.elements[8]*=h,Hi.elements[9]*=h,Hi.elements[10]*=h,t.setFromRotationMatrix(Hi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=mr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===mr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=mr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===mr)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Vl)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const So=new F,Hi=new ct,IE=new F(0,0,0),LE=new F(1,1,1),Jr=new F,lc=new F,di=new F,ng=new ct,ig=new pt;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const rg=new F,To=new pt,br=new ct,cc=new F,Da=new F,NE=new F,OE=new pt,sg=new F(1,0,0),og=new F(0,1,0),ag=new F(0,0,1),lg={type:"added"},UE={type:"removed"},bo={type:"childadded",child:null},xh={type:"childremoved",child:null};class $t extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new F,t=new Ri,n=new pt,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new ot}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cc.copy(e):cc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(Da,cc,this.up):br.lookAt(cc,Da,this.up),this.quaternion.setFromRotationMatrix(br),i&&(br.extractRotation(i.matrixWorld),To.setFromRotationMatrix(br),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),bo.child=e,this.dispatchEvent(bo),bo.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UE),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bi extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},uc={h:0,s:0,l:0};function yh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=Rp(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yh(o,s,e+1/3),this.g=yh(o,s,e),this.b=yh(o,s,e-1/3)}return It.colorSpaceToWorking(this,i),this}setStyle(e,t=In){function n(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=ix[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return It.workingToColorSpace(Un.copy(this),e),Math.round(Rt(Un.r*255,0,255))*65536+Math.round(Rt(Un.g*255,0,255))*256+Math.round(Rt(Un.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Un.copy(this),t);const n=Un.r,i=Un.g,s=Un.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=In){It.workingToColorSpace(Un.copy(this),e);const t=Un.r,n=Un.g,i=Un.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(uc);const n=Tl(Qr.h,uc.h,t),i=Tl(Qr.s,uc.s,t),s=Tl(Qr.l,uc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new st;st.NAMES=ix;class BE extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new F,Er=new F,Sh=new F,Ar=new F,Eo=new F,Ao=new F,cg=new F,Th=new F,bh=new F,Eh=new F,Ah=new Zt,wh=new Zt,Rh=new Zt;class $i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gi.subVectors(e,t),i.cross(Gi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gi.subVectors(i,t),Er.subVectors(n,t),Sh.subVectors(e,t);const o=Gi.dot(Gi),a=Gi.dot(Er),l=Gi.dot(Sh),c=Er.dot(Er),u=Er.dot(Sh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ah.setScalar(0),wh.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ah,s.x),o.addScaledVector(wh,s.y),o.addScaledVector(Rh,s.z),o}static isFrontFacing(e,t,n,i){return Gi.subVectors(n,t),Er.subVectors(e,t),Gi.cross(Er).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Gi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return $i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Eo.subVectors(i,n),Ao.subVectors(s,n),Th.subVectors(e,n);const l=Eo.dot(Th),c=Ao.dot(Th);if(l<=0&&c<=0)return t.copy(n);bh.subVectors(e,i);const u=Eo.dot(bh),h=Ao.dot(bh);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Eo,o);Eh.subVectors(e,s);const f=Eo.dot(Eh),p=Ao.dot(Eh);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ao,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return cg.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(cg,a);const g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(Eo,o).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $r{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),dc.subVectors(this.max,Na),wo.subVectors(e.a,Na),Ro.subVectors(e.b,Na),Co.subVectors(e.c,Na),es.subVectors(Ro,wo),ts.subVectors(Co,Ro),Rs.subVectors(wo,Co);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,es.z,0,-es.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-es.y,es.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!Ch(t,wo,Ro,Co,dc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,wo,Ro,Co,dc))?!1:(fc.crossVectors(es,ts),t=[fc.x,fc.y,fc.z],Ch(t,wo,Ro,Co,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new F,new F,new F,new F,new F,new F,new F,new F],Wi=new F,hc=new $r,wo=new F,Ro=new F,Co=new F,es=new F,ts=new F,Rs=new F,Na=new F,dc=new F,fc=new F,Cs=new F;function Ch(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cs.fromArray(r,s);const a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fn=new F,pc=new bt;let kE=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wf&&(e.usage=this.usage),e}}class rx extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sx extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}const VE=new $r,Oa=new F,Ph=new F;class yr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):VE.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Ph)),this.expandByPoint(Oa.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zE=0;const Ci=new ct,Ih=new $t,Po=new F,fi=new $r,Ua=new $r,En=new F;class rn extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rE(e)?sx:rx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ua.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(fi.min,Ua.min),fi.expandByPoint(En),En.addVectors(fi.max,Ua.max),fi.expandByPoint(En)):(fi.expandByPoint(Ua.min),fi.expandByPoint(Ua.max))}fi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)En.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(En));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)En.fromBufferAttribute(a,c),l&&(Po.fromBufferAttribute(e,c),En.add(Po)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new F,l[M]=new F;const c=new F,u=new F,h=new F,d=new bt,f=new bt,p=new bt,_=new F,m=new F;function g(M,b,N){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,N),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,N),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),a[M].add(_),a[b].add(_),a[N].add(_),l[M].add(m),l[b].add(m),l[N].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,b=v.length;M<b;++M){const N=v[M],I=N.start,D=N.count;for(let X=I,Y=I+D;X<Y;X+=3)g(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new F,x=new F,S=new F,E=new F;function A(M){S.fromBufferAttribute(i,M),E.copy(S);const b=a[M];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),x.crossVectors(E,b);const I=x.dot(l[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,I)}for(let M=0,b=v.length;M<b;++M){const N=v[M],I=N.start,D=N.count;for(let X=I,Y=I+D;X<Y;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new Ft(d,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wf,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new F;class Xl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let HE=0;class Ki extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=na,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(n.blending=this.blending),this.side!==Gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bd&&(n.blendSrc=this.blendSrc),this.blendDst!==kd&&(n.blendDst=this.blendDst),this.blendEquation!==Gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rr=new F,Lh=new F,mc=new F,ns=new F,Dh=new F,gc=new F,Nh=new F;class ku{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lh.copy(e).add(t).multiplyScalar(.5),mc.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Lh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mc),a=ns.dot(this.direction),l=-ns.dot(mc),c=ns.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Lh).addScaledVector(mc,d),f}intersectSphere(e,t){Rr.subVectors(e.center,this.origin);const n=Rr.dot(this.direction),i=Rr.dot(Rr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,i,s){Dh.subVectors(t,e),gc.subVectors(n,e),Nh.crossVectors(Dh,gc);let o=this.direction.dot(Nh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const l=a*this.direction.dot(gc.crossVectors(ns,gc));if(l<0)return null;const c=a*this.direction.dot(Dh.cross(ns));if(c<0||l+c>o)return null;const u=-a*ns.dot(Nh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Or extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ug=new ct,Ps=new ku,_c=new yr,hg=new F,vc=new F,xc=new F,Mc=new F,Oh=new F,yc=new F,dg=new F,Sc=new F;class Gn extends $t{constructor(e=new rn,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){yc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Oh.fromBufferAttribute(h,e),o?yc.addScaledVector(Oh,u):yc.addScaledVector(Oh.sub(t),u))}t.add(yc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),Ps.copy(e.ray).recast(e.near),!(_c.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(_c,hg)===null||Ps.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(ug),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const E=a.getX(x),A=a.getX(x+1),M=a.getX(x+2);i=Tc(this,g,e,n,c,u,h,E,A,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Tc(this,o,e,n,c,u,h,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const E=x,A=x+1,M=x+2;i=Tc(this,g,e,n,c,u,h,E,A,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const v=m,y=m+1,x=m+2;i=Tc(this,o,e,n,c,u,h,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function GE(r,e,t,n,i,s,o,a){let l;if(e.side===ti?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Gr,a),l===null)return null;Sc.copy(a),Sc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Sc);return c<t.near||c>t.far?null:{distance:c,point:Sc.clone(),object:r}}function Tc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,vc),r.getVertexPosition(l,xc),r.getVertexPosition(c,Mc);const u=GE(r,e,t,n,vc,xc,Mc,dg);if(u){const h=new F;$i.getBarycoord(dg,vc,xc,Mc,h),i&&(u.uv=$i.getInterpolatedAttribute(i,a,l,c,h,new bt)),s&&(u.uv1=$i.getInterpolatedAttribute(s,a,l,c,h,new bt)),o&&(u.normal=$i.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};$i.getNormal(vc,xc,Mc,d.normal),u.face=d,u.barycoord=h}return u}const fg=new F,pg=new Zt,mg=new Zt,WE=new F,gg=new ct,bc=new F,Uh=new yr,_g=new ct,Fh=new ku;class ox extends Gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ym,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $r),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bc),this.boundingBox.expandByPoint(bc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bc),this.boundingSphere.expandByPoint(bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(i),e.ray.intersectsSphere(Uh)!==!1&&(_g.copy(i).invert(),Fh.copy(e.ray).applyMatrix4(_g),!(this.boundingBox!==null&&Fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ym?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gb?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pg.fromBufferAttribute(i.attributes.skinIndex,e),mg.fromBufferAttribute(i.attributes.skinWeight,e),fg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=mg.getComponent(s);if(o!==0){const a=pg.getComponent(s);gg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(WE.copy(fg).applyMatrix4(gg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ax extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ip extends Rn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Mn,u=Mn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vg=new ct,XE=new ct;class Ta{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:XE;vg.multiplyMatrices(a,t[s]),vg.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ta(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ip(t,e,e,ki,Bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(it("Skeleton: No bone found with UUID:",s),o=new ax),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rf extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Io=new ct,xg=new ct,Ec=[],Mg=new $r,qE=new ct,Fa=new Gn,Ba=new yr;class YE extends Gn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rf(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Io),Mg.copy(e.boundingBox).applyMatrix4(Io),this.boundingBox.union(Mg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Io),Ba.copy(e.boundingSphere).applyMatrix4(Io),this.boundingSphere.union(Ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(n),e.ray.intersectsSphere(Ba)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Io),xg.multiplyMatrices(n,Io),Fa.matrixWorld=xg,Fa.raycast(e,Ec);for(let o=0,a=Ec.length;o<a;o++){const l=Ec[o];l.instanceId=s,l.object=this,t.push(l)}Ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ip(new Float32Array(i*this.count),i,this.count,Mp,Bi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bh=new F,$E=new F,jE=new ot;class zs{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bh.subVectors(n,t).cross($E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jE.getNormalMatrix(e),i=this.coplanarPoint(Bh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new yr,KE=new bt(.5,.5),Ac=new F;class Lp{constructor(e=new zs,t=new zs,n=new zs,i=new zs,s=new zs,o=new zs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],v=s[12],y=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-o,f-u,g-p,S-v).normalize(),i[1].setComponents(c+o,f+u,g+p,S+v).normalize(),i[2].setComponents(c+a,f+h,g+_,S+y).normalize(),i[3].setComponents(c-a,f-h,g-_,S-y).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,g-m,S-x).normalize();else if(i[4].setComponents(c-l,f-d,g-m,S-x).normalize(),t===mr)i[5].setComponents(c+l,f+d,g+m,S+x).normalize();else if(t===Vl)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=KE.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ac.x=i.normal.x>0?e.max.x:e.min.x,Ac.y=i.normal.y>0?e.max.y:e.min.y,Ac.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class po extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new F,Au=new F,yg=new ct,ka=new ku,wc=new yr,kh=new F,Sg=new F;class Vu extends $t{constructor(e=new rn,t=new po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Eu.fromBufferAttribute(t,i-1),Au.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Eu.distanceTo(Au);e.setAttribute("lineDistance",new Hn(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(i),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;yg.copy(i).invert(),ka.copy(e.ray).applyMatrix4(yg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=u.getX(_),v=u.getX(_+1),y=Rc(this,e,ka,l,g,v,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(f),g=Rc(this,e,ka,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=Rc(this,e,ka,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Rc(this,e,ka,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rc(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Eu.fromBufferAttribute(a,i),Au.fromBufferAttribute(a,s),t.distanceSqToSegment(Eu,Au,kh,Sg)>n)return;kh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(kh);if(!(c<e.near||c>e.far))return{distance:c,point:Sg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Tg=new F,bg=new F;class ql extends Vu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Tg.fromBufferAttribute(t,i),bg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tg.distanceTo(bg);e.setAttribute("lineDistance",new Hn(n,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZE extends Vu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lx extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eg=new ct,Cf=new ku,Cc=new yr,Pc=new F;class JE extends $t{constructor(e=new rn,t=new lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(i),Cc.radius+=s,e.ray.intersectsSphere(Cc)===!1)return;Eg.copy(i).invert(),Cf.copy(e.ray).applyMatrix4(Eg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const m=c.getX(p);Pc.fromBufferAttribute(h,m),Ag(Pc,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Pc.fromBufferAttribute(h,p),Ag(Pc,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ag(r,e,t,n,i,s,o){const a=Cf.distanceSqToPoint(r);if(a<t){const l=new F;Cf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cx extends Rn{constructor(e=[],t=uo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hl extends Rn{constructor(e,t,n=Mr,i,s,o,a=Mn,l=Mn,c,u=Xr,h=1){if(u!==Xr&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class QE extends Hl{constructor(e,t=Mr,n=uo,i,s,o=Mn,a=Mn,l,c=Xr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ux extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends rn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(h,2));function p(_,m,g,v,y,x,S,E,A,M,b){const N=x/A,I=S/M,D=x/2,X=S/2,Y=E/2,$=A+1,G=M+1;let z=0,J=0;const Z=new F;for(let P=0;P<G;P++){const he=P*I-X;for(let fe=0;fe<$;fe++){const He=fe*N-D;Z[_]=He*v,Z[m]=he*y,Z[g]=Y,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[g]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(fe/A),h.push(1-P/M),z+=1}}for(let P=0;P<M;P++)for(let he=0;he<A;he++){const fe=d+he+$*P,He=d+he+$*(P+1),Ge=d+(he+1)+$*(P+1),Xe=d+(he+1)+$*P;l.push(fe,He,Xe),l.push(He,Ge,Xe),J+=6}a.addGroup(f,J,b),f+=J,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zu extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*d-o;for(let y=0;y<c;y++){const x=y*h-s;p.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const y=v+c*g,x=v+c*(g+1),S=v+1+c*(g+1),E=v+1+c*g;f.push(y,x,E),f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dp extends rn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,d=new F,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],y=g/n;let x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const E=S/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-y),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const y=u[g][v+1],x=u[g][v],S=u[g+1][v],E=u[g+1][v+1];(g!==0||o>0)&&f.push(y,x,E),(g!==n-1||l<Math.PI)&&f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yn(r){const e={};for(let t=0;t<r.length;t++){const n=xa(r[t]);for(const i in n)e[i]=n[i]}return e}function eA(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const dx={clone:xa,merge:Yn};var tA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tA,this.fragmentShader=nA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=eA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iA extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hu extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sr extends Hu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rA extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sA extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ic(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function oA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function fx(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ba{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class aA extends ba{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jo:s=e,a=2*t-n;break;case yu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:o=e,l=2*n-t;break;case yu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let S=0;S!==a;++S)s[S]=g*o[u+S]+v*o[c+S]+y*o[l+S]+x*o[h+S];return s}}class px extends ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class lA extends ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class cA extends ba{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==a;++g)s[g]=o[c+g]*m+o[l+g]*_;return s}const f=a*2,p=e-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],v=p*f+_*2,y=d[v],x=d[v+1],S=e*f+_*2,E=h[S],A=h[S+1];let M=(n-t)/(i-t),b,N,I,D,X;for(let Y=0;Y<8;Y++){b=M*M,N=b*M,I=1-M,D=I*I,X=D*I;const G=X*t+3*D*M*y+3*I*b*E+N*i-n;if(Math.abs(G)<1e-10)break;const z=3*D*(y-t)+6*I*M*(E-y)+3*b*(i-E);if(Math.abs(z)<1e-10)break;M=M-G/z,M=Math.max(0,Math.min(1,M))}s[_]=X*m+3*D*M*x+3*I*b*A+N*g}return s}}class Qi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ic(t,this.TimeBufferType),this.values=Ic(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ic(e.times,Array),values:Ic(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new cA(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Bl:t=this.InterpolantFactoryMethodDiscrete;break;case kl:t=this.InterpolantFactoryMethodLinear;break;case ph:t=this.InterpolantFactoryMethodSmooth;break;case $m:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bl;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return ph;case this.InterpolantFactoryMethodBezier:return $m}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){ht("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ht("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&sE(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){ht("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ph,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qi.prototype.ValueTypeName="";Qi.prototype.TimeBufferType=Float32Array;Qi.prototype.ValueBufferType=Float32Array;Qi.prototype.DefaultInterpolation=kl;class Ea extends Qi{constructor(e,t,n){super(e,t,n)}}Ea.prototype.ValueTypeName="bool";Ea.prototype.ValueBufferType=Array;Ea.prototype.DefaultInterpolation=Bl;Ea.prototype.InterpolantFactoryMethodLinear=void 0;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;class mx extends Qi{constructor(e,t,n,i){super(e,t,n,i)}}mx.prototype.ValueTypeName="color";class Ma extends Qi{constructor(e,t,n,i){super(e,t,n,i)}}Ma.prototype.ValueTypeName="number";class uA extends ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)pt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ya extends Qi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new uA(this.times,this.values,this.getValueSize(),e)}}ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;class Aa extends Qi{constructor(e,t,n){super(e,t,n)}}Aa.prototype.ValueTypeName="string";Aa.prototype.ValueBufferType=Array;Aa.prototype.DefaultInterpolation=Bl;Aa.prototype.InterpolantFactoryMethodLinear=void 0;Aa.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends Qi{constructor(e,t,n,i){super(e,t,n,i)}}Sa.prototype.ValueTypeName="vector";class Pf{constructor(e="",t=-1,n=[],i=bp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(dA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Qi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=oA(l);l=wg(l,1,u),c=wg(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ma(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(it("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ht("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,_){if(f.length!==0){const m=[],g=[];fx(f,m,g,p),m.length!==0&&_.push(new h(d,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let v=0;v!==d[p].morphTargets.length;++v){const y=d[p];m.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new Ma(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Sa,f+".position",d,"pos",i),n(ya,f+".quaternion",d,"rot",i),n(Sa,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function hA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return Sa;case"color":return mx;case"quaternion":return ya;case"bool":case"boolean":return Ea;case"string":return Aa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function dA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hA(r.type);if(r.times===void 0){const t=[],n=[];fx(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Rg(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Rg(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Rg(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fA{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pA=new fA;class wa{constructor(e){this.manager=e!==void 0?e:pA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class mA extends Error{constructor(e,t){super(e),this.response=t}}class gx extends wa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ur.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:n,onError:i});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cr[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){v();function v(){h.read().then(({done:y,value:x})=>{if(y)g.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let E=0,A=u.length;E<A;E++){const M=u[E];M.onProgress&&M.onProgress(S)}g.enqueue(x),v()}},y=>{g.error(y)})}}});return new Response(m)}else throw new mA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ur.add(`file:${e}`,c);const u=Cr[e];delete Cr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Cr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Lo=new WeakMap;class _x extends wa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ur.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Lo.get(o);h===void 0&&(h=[],Lo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=zl("img");function l(){u(),t&&t(this);const h=Lo.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Lo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Ur.remove(`image:${e}`);const d=Lo.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Lo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ur.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class gA extends wa{constructor(e){super(e)}load(e,t,n,i){const s=new Rn,o=new _x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Gu extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Vh=new ct,Cg=new F,Pg=new F;class Np{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lp,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cg),Pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pg),t.updateMatrixWorld(),Vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Vl||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new F,Dc=new pt,tr=new F;class vx extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=mr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Dc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Lc,Dc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new F,Ig=new bt,Lg=new bt;class Jn extends vx{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Ig,Lg),t.subVectors(Lg,Ig)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _A extends Np{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=va*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vA extends Gu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _A}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class xA extends Np{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class MA extends Gu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wu extends vx{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yA extends Np{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ru extends Gu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new yA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class SA extends Gu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zh=new WeakMap;class TA extends wa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ur.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(zh.has(o)===!0)i&&i(zh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ur.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zh.set(l,c),Ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ur.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Do=-90,No=1;class bA extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jn(Do,No,e,t);i.layers=this.layers,this.add(i);const s=new Jn(Do,No,e,t);s.layers=this.layers,this.add(s);const o=new Jn(Do,No,e,t);o.layers=this.layers,this.add(o);const a=new Jn(Do,No,e,t);a.layers=this.layers,this.add(a);const l=new Jn(Do,No,e,t);l.layers=this.layers,this.add(l);const c=new Jn(Do,No,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===mr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class EA extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class AA{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){pt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;pt.multiplyQuaternionsFlat(e,o,e,t,e,n),pt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Op="\\[\\]\\.:\\/",wA=new RegExp("["+Op+"]","g"),Up="[^"+Op+"]",RA="[^"+Op.replace("\\.","")+"]",CA=/((?:WC+[\/:])*)/.source.replace("WC",Up),PA=/(WCOD+)?/.source.replace("WCOD",RA),IA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Up),LA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Up),DA=new RegExp("^"+CA+PA+IA+LA+"$"),NA=["material","materials","bones","map"];class OA{constructor(e,t,n){const i=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Vt{constructor(e,t,n){this.path=t,this.parsedPath=n||Vt.parseTrackName(t),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,t,n):new Vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wA,"")}static parseTrackName(e){const t=DA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);NA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=OA;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class UA{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:$o,endingEnd:$o};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xb,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Yb:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case bp:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===qb;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Wb){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=jo,i.endingEnd=jo):(e?i.endingStart=this.zeroSlopeAtStart?jo:$o:i.endingStart=yu,t?i.endingEnd=this.zeroSlopeAtEnd?jo:$o:i.endingEnd=yu)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const FA=new Float32Array(1);class BA extends fo{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new AA(Vt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new px(new Float32Array(2),new Float32Array(2),1,FA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Pf.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bp),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new UA(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Pf.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Dg{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class kA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class VA extends ql{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new rn;i.setAttribute("position",new Hn(t,3)),i.setAttribute("color",new Hn(n,3));const s=new po({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new st,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ng(r,e,t,n){const i=zA(n);switch(t){case Zv:return r*e;case Mp:return r*e/i.components*i.byteLength;case yp:return r*e/i.components*i.byteLength;case _a:return r*e*2/i.components*i.byteLength;case Sp:return r*e*2/i.components*i.byteLength;case Jv:return r*e*3/i.components*i.byteLength;case ki:return r*e*4/i.components*i.byteLength;case Tp:return r*e*4/i.components*i.byteLength;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $d:case Kd:return Math.max(r,16)*Math.max(e,8)/4;case Yd:case jd:return Math.max(r,8)*Math.max(e,8)/2;case Zd:case Jd:case ef:case tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qd:case nf:case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xf:case Mf:case yf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sf:case Tf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bf:case Ef:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zA(r){switch(r){case yi:case Yv:return{byteLength:1,components:1};case Ul:case $v:case Wr:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case Mr:case _p:case Bi:return{byteLength:4,components:1};case jv:case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xx(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function HA(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var GA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WA=`#ifdef USE_ALPHAHASH
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
#endif`,XA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jA=`#ifdef USE_AOMAP
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
#endif`,KA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZA=`#ifdef USE_BATCHING
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
#endif`,JA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nw=`#ifdef USE_IRIDESCENCE
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
#endif`,iw=`#ifdef USE_BUMPMAP
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dw=`#define PI 3.141592653589793
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
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pw=`vec3 transformedNormal = objectNormal;
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
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pw=`#ifdef USE_GRADIENTMAP
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
}`,Iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nw=`uniform bool receiveShadow;
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
#endif`,Ow=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vw=`PhysicalMaterial material;
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
#endif`,zw=`uniform sampler2D dfgLUT;
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
}`,Hw=`
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jw=`#if defined( USE_POINTS_UV )
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
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`#ifdef USE_MORPHTARGETS
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
#endif`,sR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hR=`#ifdef USE_NORMALMAP
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
#endif`,dR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gR=`#ifdef OPAQUE
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
}`,vR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wR=`float getShadowMask() {
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
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,PR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IR=`#ifdef USE_SKINNING
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
#endif`,LR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OR=`#ifndef saturate
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
#endif`,FR=`#ifdef USE_TRANSMISSION
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
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GR=`uniform sampler2D t2D;
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
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`#include <common>
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
}`,jR=`#if DEPTH_PACKING == 3200
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
}`,KR=`#define DISTANCE
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
}`,ZR=`#define DISTANCE
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
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`uniform float scale;
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
}`,tC=`uniform vec3 diffuse;
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
}`,nC=`#include <common>
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
}`,iC=`uniform vec3 diffuse;
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
}`,rC=`#define LAMBERT
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
}`,sC=`#define LAMBERT
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
}`,oC=`#define MATCAP
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
}`,aC=`#define MATCAP
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
}`,lC=`#define NORMAL
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
}`,cC=`#define NORMAL
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
}`,uC=`#define PHONG
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
}`,hC=`#define PHONG
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
}`,dC=`#define STANDARD
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
}`,fC=`#define STANDARD
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
}`,pC=`#define TOON
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
}`,mC=`#define TOON
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
}`,gC=`uniform float size;
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
}`,vC=`#include <common>
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
}`,xC=`uniform vec3 color;
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
}`,MC=`uniform float rotation;
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
}`,yC=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:GA,alphahash_pars_fragment:WA,alphamap_fragment:XA,alphamap_pars_fragment:qA,alphatest_fragment:YA,alphatest_pars_fragment:$A,aomap_fragment:jA,aomap_pars_fragment:KA,batching_pars_vertex:ZA,batching_vertex:JA,begin_vertex:QA,beginnormal_vertex:ew,bsdfs:tw,iridescence_fragment:nw,bumpmap_pars_fragment:iw,clipping_planes_fragment:rw,clipping_planes_pars_fragment:sw,clipping_planes_pars_vertex:ow,clipping_planes_vertex:aw,color_fragment:lw,color_pars_fragment:cw,color_pars_vertex:uw,color_vertex:hw,common:dw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:pw,displacementmap_pars_vertex:mw,displacementmap_vertex:gw,emissivemap_fragment:_w,emissivemap_pars_fragment:vw,colorspace_fragment:xw,colorspace_pars_fragment:Mw,envmap_fragment:yw,envmap_common_pars_fragment:Sw,envmap_pars_fragment:Tw,envmap_pars_vertex:bw,envmap_physical_pars_fragment:Ow,envmap_vertex:Ew,fog_vertex:Aw,fog_pars_vertex:ww,fog_fragment:Rw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Pw,lightmap_pars_fragment:Iw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Dw,lights_pars_begin:Nw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Fw,lights_phong_fragment:Bw,lights_phong_pars_fragment:kw,lights_physical_fragment:Vw,lights_physical_pars_fragment:zw,lights_fragment_begin:Hw,lights_fragment_maps:Gw,lights_fragment_end:Ww,logdepthbuf_fragment:Xw,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:$w,map_fragment:jw,map_pars_fragment:Kw,map_particle_fragment:Zw,map_particle_pars_fragment:Jw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:eR,morphinstance_vertex:tR,morphcolor_vertex:nR,morphnormal_vertex:iR,morphtarget_pars_vertex:rR,morphtarget_vertex:sR,normal_fragment_begin:oR,normal_fragment_maps:aR,normal_pars_fragment:lR,normal_pars_vertex:cR,normal_vertex:uR,normalmap_pars_fragment:hR,clearcoat_normal_fragment_begin:dR,clearcoat_normal_fragment_maps:fR,clearcoat_pars_fragment:pR,iridescence_pars_fragment:mR,opaque_fragment:gR,packing:_R,premultiplied_alpha_fragment:vR,project_vertex:xR,dithering_fragment:MR,dithering_pars_fragment:yR,roughnessmap_fragment:SR,roughnessmap_pars_fragment:TR,shadowmap_pars_fragment:bR,shadowmap_pars_vertex:ER,shadowmap_vertex:AR,shadowmask_pars_fragment:wR,skinbase_vertex:RR,skinning_pars_vertex:CR,skinning_vertex:PR,skinnormal_vertex:IR,specularmap_fragment:LR,specularmap_pars_fragment:DR,tonemapping_fragment:NR,tonemapping_pars_fragment:OR,transmission_fragment:UR,transmission_pars_fragment:FR,uv_pars_fragment:BR,uv_pars_vertex:kR,uv_vertex:VR,worldpos_vertex:zR,background_vert:HR,background_frag:GR,backgroundCube_vert:WR,backgroundCube_frag:XR,cube_vert:qR,cube_frag:YR,depth_vert:$R,depth_frag:jR,distance_vert:KR,distance_frag:ZR,equirect_vert:JR,equirect_frag:QR,linedashed_vert:eC,linedashed_frag:tC,meshbasic_vert:nC,meshbasic_frag:iC,meshlambert_vert:rC,meshlambert_frag:sC,meshmatcap_vert:oC,meshmatcap_frag:aC,meshnormal_vert:lC,meshnormal_frag:cC,meshphong_vert:uC,meshphong_frag:hC,meshphysical_vert:dC,meshphysical_frag:fC,meshtoon_vert:pC,meshtoon_frag:mC,points_vert:gC,points_frag:_C,shadow_vert:vC,shadow_frag:xC,sprite_vert:MC,sprite_frag:yC},Ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},cr={basic:{uniforms:Yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Yn([Ce.points,Ce.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Yn([Ce.common,Ce.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Yn([Ce.sprite,Ce.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Yn([Ce.lights,Ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};cr.physical={uniforms:Yn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Nc={r:0,b:0,g:0},Ls=new Ri,SC=new ct;function TC(r,e,t,n,i,s){const o=new st(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const x=v.backgroundBlurriness>0;y=e.get(y,x)}return y}function p(v){let y=!1;const x=f(v);x===null?m(o,a):x&&x.isColor&&(m(x,1),y=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,y){const x=f(y);x&&(x.isCubeTexture||x.mapping===Bu)?(c===void 0&&(c=new Gn(new Yl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:xa(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ls.copy(y.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SC.makeRotationFromEuler(Ls)),c.material.toneMapped=It.getTransfer(x.colorSpace)!==zt,(u!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Gn(new zu(2,2),new Ji({name:"BackgroundMaterial",uniforms:xa(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=It.getTransfer(x.colorSpace)!==zt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Nc,hx(r)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,y,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function bC(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(I,D,X,Y,$){let G=!1;const z=h(I,Y,X,D);s!==z&&(s=z,c(s.object)),G=f(I,Y,X,$),G&&p(I,Y,X,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(I,D,X,Y),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function h(I,D,X,Y){const $=Y.wireframe===!0;let G=n[D.id];G===void 0&&(G={},n[D.id]=G);const z=I.isInstancedMesh===!0?I.id:0;let J=G[z];J===void 0&&(J={},G[z]=J);let Z=J[X.id];Z===void 0&&(Z={},J[X.id]=Z);let P=Z[$];return P===void 0&&(P=d(l()),Z[$]=P),P}function d(I){const D=[],X=[],Y=[];for(let $=0;$<t;$++)D[$]=0,X[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:Y,object:I,attributes:{},index:null}}function f(I,D,X,Y){const $=s.attributes,G=D.attributes;let z=0;const J=X.getAttributes();for(const Z in J)if(J[Z].location>=0){const he=$[Z];let fe=G[Z];if(fe===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),he===void 0||he.attribute!==fe||fe&&he.data!==fe.data)return!0;z++}return s.attributesNum!==z||s.index!==Y}function p(I,D,X,Y){const $={},G=D.attributes;let z=0;const J=X.getAttributes();for(const Z in J)if(J[Z].location>=0){let he=G[Z];he===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(he=I.instanceColor));const fe={};fe.attribute=he,he&&he.data&&(fe.data=he.data),$[Z]=fe,z++}s.attributes=$,s.attributesNum=z,s.index=Y}function _(){const I=s.newAttributes;for(let D=0,X=I.length;D<X;D++)I[D]=0}function m(I){g(I,0)}function g(I,D){const X=s.newAttributes,Y=s.enabledAttributes,$=s.attributeDivisors;X[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),$[I]!==D&&(r.vertexAttribDivisor(I,D),$[I]=D)}function v(){const I=s.newAttributes,D=s.enabledAttributes;for(let X=0,Y=D.length;X<Y;X++)D[X]!==I[X]&&(r.disableVertexAttribArray(X),D[X]=0)}function y(I,D,X,Y,$,G,z){z===!0?r.vertexAttribIPointer(I,D,X,$,G):r.vertexAttribPointer(I,D,X,Y,$,G)}function x(I,D,X,Y){_();const $=Y.attributes,G=X.getAttributes(),z=D.defaultAttributeValues;for(const J in G){const Z=G[J];if(Z.location>=0){let P=$[J];if(P===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),P!==void 0){const he=P.normalized,fe=P.itemSize,He=e.get(P);if(He===void 0)continue;const Ge=He.buffer,Xe=He.type,ie=He.bytesPerElement,V=Xe===r.INT||Xe===r.UNSIGNED_INT||P.gpuType===_p;if(P.isInterleavedBufferAttribute){const Q=P.data,oe=Q.stride,ue=P.offset;if(Q.isInstancedInterleavedBuffer){for(let xe=0;xe<Z.locationSize;xe++)g(Z.location+xe,Q.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<Z.locationSize;xe++)m(Z.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let xe=0;xe<Z.locationSize;xe++)y(Z.location+xe,fe/Z.locationSize,Xe,he,oe*ie,(ue+fe/Z.locationSize*xe)*ie,V)}else{if(P.isInstancedBufferAttribute){for(let Q=0;Q<Z.locationSize;Q++)g(Z.location+Q,P.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Q=0;Q<Z.locationSize;Q++)m(Z.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Q=0;Q<Z.locationSize;Q++)y(Z.location+Q,fe/Z.locationSize,Xe,he,fe*ie,fe/Z.locationSize*Q*ie,V)}}else if(z!==void 0){const he=z[J];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(Z.location,he);break;case 3:r.vertexAttrib3fv(Z.location,he);break;case 4:r.vertexAttrib4fv(Z.location,he);break;default:r.vertexAttrib1fv(Z.location,he)}}}}v()}function S(){b();for(const I in n){const D=n[I];for(const X in D){const Y=D[X];for(const $ in Y){const G=Y[$];for(const z in G)u(G[z].object),delete G[z];delete Y[$]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const D=n[I.id];for(const X in D){const Y=D[X];for(const $ in Y){const G=Y[$];for(const z in G)u(G[z].object),delete G[z];delete Y[$]}}delete n[I.id]}function A(I){for(const D in n){const X=n[D];for(const Y in X){const $=X[Y];if($[I.id]===void 0)continue;const G=$[I.id];for(const z in G)u(G[z].object),delete G[z];delete $[I.id]}}}function M(I){for(const D in n){const X=n[D],Y=I.isInstancedMesh===!0?I.id:0,$=X[Y];if($!==void 0){for(const G in $){const z=$[G];for(const J in z)u(z[J].object),delete z[J];delete $[G]}delete X[Y],Object.keys(X).length===0&&delete n[D]}}}function b(){N(),o=!0,s!==i&&(s=i,c(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function EC(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AC(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ki&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const M=A===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bi&&!M)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:E}}function wC(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zs,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let x=g.clippingState||null;l.value=x,x=u(p,d,y,f);for(let S=0;S!==y;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const ms=4,Og=[.125,.215,.35,.446,.526,.582],Ws=20,RC=256,Va=new Wu,Ug=new st;let Hh=null,Gh=0,Wh=0,Xh=!1;const CC=new F;class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=CC}=s;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Wh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Wr,format:ki,colorSpace:ni,depthBuffer:!1},i=Bg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PC(s)),this._blurMaterial=LC(s,e,t),this._ggxMaterial=IC(s,e,t)}return i}_compileMaterial(e){const t=new Gn(new rn,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i,s){const l=new Jn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ug),h.toneMapping=_r,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gn(new Yl,new Or({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(Ug),g=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const S=this._cubeSize;Oo(i,x*S,y>2?S:0,S,S),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===uo||e.mapping===ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ms?n-p+ms:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Oo(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,Va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Oo(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(a,Va)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Ws;m>Ws&&it(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const g=[];let v=0;for(let A=0;A<Ws;++A){const M=A/_,b=Math.exp(-M*M/2);g.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const x=this._sizeLods[i],S=3*x*(i>y-ms?i-y+ms:0),E=4*(this._cubeSize-x);Oo(t,S,E,3*x,2*x),l.setRenderTarget(t),l.render(h,Va)}}function PC(r){const e=[],t=[],n=[];let i=r;const s=r-ms+1+Og.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ms?l=Og[o-r+ms-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*f),y=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,M=E>2?0:-1,b=[A,M,0,A+2/3,M,0,A+2/3,M+1,0,A,M,0,A+2/3,M+1,0,A,M+1,0];v.set(b,_*p*E),y.set(d,m*p*E);const N=[E,E,E,E,E,E];x.set(N,g*p*E)}const S=new rn;S.setAttribute("position",new Ft(v,_)),S.setAttribute("uv",new Ft(y,m)),S.setAttribute("faceIndex",new Ft(x,g)),n.push(new Gn(S,null)),i>ms&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bg(r,e,t){const n=new vr(r,e,t);return n.texture.mapping=Bu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function IC(r,e,t){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function LC(r,e,t){const n=new Float32Array(Ws),i=new F(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function kg(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Vg(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}class Mx extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cx(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yl(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:Br});s.uniforms.tEquirect.value=t;const o=new Gn(i,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=yn),new bA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function DC(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===dh||f===fh)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Mx(p.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===dh||f===fh,_=f===uo||f===ma;if(p||_){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Fg(r)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Fg(r)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===dh?d.mapping=uo:f===fh&&(d.mapping=ma),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function NC(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&bu("WebGLRenderer: "+n+" extension not supported."),i}}}function OC(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const S=v[y+0],E=v[y+1],A=v[y+2];d.push(S,E,E,A,A,S)}}else{const v=p.array;_=p.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const S=y+0,E=y+1,A=y+2;d.push(S,E,E,A,A,S)}}const m=new(p.count>=65535?sx:rx)(d,1);m.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function UC(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function h(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v]*_[v];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function FC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function BC(r,e,t){const n=new WeakMap,i=new Zt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*S*4*h),A=new tx(E,x,S,h);A.type=Bi,A.needsUpdate=!0;const M=y*4;for(let N=0;N<h;N++){const I=m[N],D=g[N],X=v[N],Y=x*S*4*N;for(let $=0;$<I.count;$++){const G=$*M;f===!0&&(i.fromBufferAttribute(I,$),E[Y+G+0]=i.x,E[Y+G+1]=i.y,E[Y+G+2]=i.z,E[Y+G+3]=0),p===!0&&(i.fromBufferAttribute(D,$),E[Y+G+4]=i.x,E[Y+G+5]=i.y,E[Y+G+6]=i.z,E[Y+G+7]=0),_===!0&&(i.fromBufferAttribute(X,$),E[Y+G+8]=i.x,E[Y+G+9]=i.y,E[Y+G+10]=i.z,E[Y+G+11]=X.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new bt(x,S)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function kC(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const VC={[Bv]:"LINEAR_TONE_MAPPING",[kv]:"REINHARD_TONE_MAPPING",[Vv]:"CINEON_TONE_MAPPING",[zv]:"ACES_FILMIC_TONE_MAPPING",[Gv]:"AGX_TONE_MAPPING",[Wv]:"NEUTRAL_TONE_MAPPING",[Hv]:"CUSTOM_TONE_MAPPING"};function zC(r,e,t,n,i){const s=new vr(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new vr(e,t,{type:Wr,depthBuffer:!1,stencilBuffer:!1}),a=new rn;a.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const l=new iA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Gn(a,l),u=new Wu(-1,1,1,-1,0,1);let h=null,d=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(v,y){s.setSize(v,y),o.setSize(v,y);for(let x=0;x<m.length;x++){const S=m[x];S.setSize&&S.setSize(v,y)}},this.setEffects=function(v){m=v,g=m.length>0&&m[0].isRenderPass===!0;const y=s.width,x=s.height;for(let S=0;S<m.length;S++){const E=m[S];E.setSize&&E.setSize(y,x)}},this.begin=function(v,y){if(f||v.toneMapping===_r&&m.length===0)return!1;if(_=y,y!==null){const x=y.width,S=y.height;(s.width!==x||s.height!==S)&&this.setSize(x,S)}return g===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=_r,!0},this.hasRenderPass=function(){return g},this.end=function(v,y){v.toneMapping=p,f=!0;let x=s,S=o;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(v,S,x,y),A.needsSwap!==!1)){const M=x;x=S,S=M}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,l.defines={},It.getTransfer(h)===zt&&(l.defines.SRGB_TRANSFER="");const E=VC[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const yx=new Rn,If=new Hl(1,1),Sx=new tx,Tx=new PE,bx=new cx,zg=[],Hg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function Ra(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=zg[i];if(s===void 0&&(s=new Float32Array(i),zg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qu(r,e){let t=Hg[e];t===void 0&&(t=new Int32Array(e),Hg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function HC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function GC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2fv(this.addr,e),Tn(t,e)}}function WC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;r.uniform3fv(this.addr,e),Tn(t,e)}}function XC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4fv(this.addr,e),Tn(t,e)}}function qC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Xg.set(n),r.uniformMatrix2fv(this.addr,!1,Xg),Tn(t,n)}}function YC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Wg.set(n),r.uniformMatrix3fv(this.addr,!1,Wg),Tn(t,n)}}function $C(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Gg.set(n),r.uniformMatrix4fv(this.addr,!1,Gg),Tn(t,n)}}function jC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function KC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2iv(this.addr,e),Tn(t,e)}}function ZC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3iv(this.addr,e),Tn(t,e)}}function JC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4iv(this.addr,e),Tn(t,e)}}function QC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function e2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2uiv(this.addr,e),Tn(t,e)}}function t2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3uiv(this.addr,e),Tn(t,e)}}function n2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4uiv(this.addr,e),Tn(t,e)}}function i2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(If.compareFunction=t.isReversedDepthBuffer()?wp:Ap,s=If):s=yx,t.setTexture2D(e||s,i)}function r2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tx,i)}function s2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bx,i)}function o2(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sx,i)}function a2(r){switch(r){case 5126:return HC;case 35664:return GC;case 35665:return WC;case 35666:return XC;case 35674:return qC;case 35675:return YC;case 35676:return $C;case 5124:case 35670:return jC;case 35667:case 35671:return KC;case 35668:case 35672:return ZC;case 35669:case 35673:return JC;case 5125:return QC;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return o2}}function l2(r,e){r.uniform1fv(this.addr,e)}function c2(r,e){const t=Ra(e,this.size,2);r.uniform2fv(this.addr,t)}function u2(r,e){const t=Ra(e,this.size,3);r.uniform3fv(this.addr,t)}function h2(r,e){const t=Ra(e,this.size,4);r.uniform4fv(this.addr,t)}function d2(r,e){const t=Ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function f2(r,e){const t=Ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function p2(r,e){const t=Ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function m2(r,e){r.uniform1iv(this.addr,e)}function g2(r,e){r.uniform2iv(this.addr,e)}function _2(r,e){r.uniform3iv(this.addr,e)}function v2(r,e){r.uniform4iv(this.addr,e)}function x2(r,e){r.uniform1uiv(this.addr,e)}function M2(r,e){r.uniform2uiv(this.addr,e)}function y2(r,e){r.uniform3uiv(this.addr,e)}function S2(r,e){r.uniform4uiv(this.addr,e)}function T2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=If:o=yx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function b2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Tx,s[o])}function E2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bx,s[o])}function A2(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);Sn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sx,s[o])}function w2(r){switch(r){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return h2;case 35674:return d2;case 35675:return f2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return _2;case 35669:case 35673:return v2;case 5125:return x2;case 36294:return M2;case 36295:return y2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return A2}}class R2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a2(t.type)}}class C2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w2(t.type)}}class P2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function qg(r,e){r.seq.push(e),r.map[e.id]=e}function I2(r,e,t){const n=r.name,i=n.length;for(qh.lastIndex=0;;){const s=qh.exec(n),o=qh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qg(t,c===void 0?new R2(a,r,e):new C2(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new P2(a),qg(t,h)),t=h}}}class su{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);I2(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const L2=37297;let D2=0;function N2(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $g=new ot;function O2(r){It._getMatrix($g,It.workingColorSpace,r);const e=`mat3( ${$g.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(r)){case Su:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+N2(r.getShaderSource(e),a)}else return s}function U2(r,e){const t=O2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const F2={[Bv]:"Linear",[kv]:"Reinhard",[Vv]:"Cineon",[zv]:"ACESFilmic",[Gv]:"AgX",[Wv]:"Neutral",[Hv]:"Custom"};function B2(r,e){const t=F2[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new F;function k2(){It.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function z2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H2(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function sl(r){return r!==""}function Kg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(r){return r.replace(G2,X2)}const W2=new Map;function X2(r,e){let t=Mt[e];if(t===void 0){const n=W2.get(e);if(n!==void 0)t=Mt[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(r){return r.replace(q2,Y2)}function Y2(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const $2={[Jc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function j2(r){return $2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K2={[uo]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function Z2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":K2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const J2={[ma]:"ENVMAP_MODE_REFRACTION"};function Q2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":J2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e3={[Fv]:"ENVMAP_BLENDING_MULTIPLY",[zb]:"ENVMAP_BLENDING_MIX",[Hb]:"ENVMAP_BLENDING_ADD"};function t3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":e3[r.combine]||"ENVMAP_BLENDING_NONE"}function n3(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i3(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=j2(t),c=Z2(t),u=Q2(t),h=t3(t),d=n3(t),f=V2(t),p=z2(s),_=i.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sl).join(`
`),g.length>0&&(g+=`
`)):(m=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),g=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?Mt.tonemapping_pars_fragment:"",t.toneMapping!==_r?B2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,U2("linearToOutputTexel",t.outputColorSpace),k2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sl).join(`
`)),o=Lf(o),o=Kg(o,t),o=Zg(o,t),a=Lf(a),a=Kg(a,t),a=Zg(a,t),o=Jg(o),a=Jg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+m+o,x=v+g+a,S=Yg(i,i.VERTEX_SHADER,y),E=Yg(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",X=i.getShaderInfoLog(S)||"",Y=i.getShaderInfoLog(E)||"",$=D.trim(),G=X.trim(),z=Y.trim();let J=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,E);else{const P=jg(i,S,"vertex"),he=jg(i,E,"fragment");ht("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+P+`
`+he)}else $!==""?it("WebGLProgram: Program Info Log:",$):(G===""||z==="")&&(Z=!1);Z&&(I.diagnostics={runnable:J,programLog:$,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:g}})}i.deleteShader(S),i.deleteShader(E),M=new su(i,_),b=H2(i,_)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(_,L2)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let r3=0;class s3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o3(e),t.set(e,n)),n}}class o3{constructor(e){this.id=r3++,this.code=e,this.usedTimes=0}}function a3(r,e,t,n,i,s){const o=new nx,a=new s3,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function _(M,b,N,I,D){const X=I.fog,Y=D.geometry,$=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,z=e.get(M.envMap||$,G),J=z&&z.mapping===Bu?z.image.height:null,Z=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&it("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,he=P!==void 0?P.length:0;let fe=0;Y.morphAttributes.position!==void 0&&(fe=1),Y.morphAttributes.normal!==void 0&&(fe=2),Y.morphAttributes.color!==void 0&&(fe=3);let He,Ge,Xe,ie;if(Z){const Ne=cr[Z];He=Ne.vertexShader,Ge=Ne.fragmentShader}else He=M.vertexShader,Ge=M.fragmentShader,a.update(M),Xe=a.getVertexShaderID(M),ie=a.getFragmentShaderID(M);const V=r.getRenderTarget(),Q=r.state.buffers.depth.getReversed(),oe=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,xe=!!M.map,Re=!!M.matcap,pe=!!z,ge=!!M.aoMap,Ae=!!M.lightMap,ke=!!M.bumpMap,K=!!M.normalMap,k=!!M.displacementMap,ut=!!M.emissiveMap,at=!!M.metalnessMap,Ze=!!M.roughnessMap,Ue=M.anisotropy>0,L=M.clearcoat>0,T=M.dispersion>0,H=M.iridescence>0,ae=M.sheen>0,le=M.transmission>0,re=Ue&&!!M.anisotropyMap,we=L&&!!M.clearcoatMap,ve=L&&!!M.clearcoatNormalMap,Ve=L&&!!M.clearcoatRoughnessMap,Fe=H&&!!M.iridescenceMap,Me=H&&!!M.iridescenceThicknessMap,ye=ae&&!!M.sheenColorMap,Te=ae&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,be=!!M.specularColorMap,Je=!!M.specularIntensityMap,O=le&&!!M.transmissionMap,Se=le&&!!M.thicknessMap,_e=!!M.gradientMap,Ee=!!M.alphaMap,me=M.alphaTest>0,se=!!M.alphaHash,ze=!!M.extensions;let Qe=_r;M.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const yt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:Ge,defines:M.defines,customVertexShaderID:Xe,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:oe,instancingColor:oe&&D.instanceColor!==null,instancingMorph:oe&&D.morphTexture!==null,outputColorSpace:V===null?r.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ni,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:Re,envMap:pe,envMapMode:pe&&z.mapping,envMapCubeUVHeight:J,aoMap:ge,lightMap:Ae,bumpMap:ke,normalMap:K,displacementMap:k,emissiveMap:ut,normalMapObjectSpace:K&&M.normalMapType===Kb,normalMapTangentSpace:K&&M.normalMapType===Ep,metalnessMap:at,roughnessMap:Ze,anisotropy:Ue,anisotropyMap:re,clearcoat:L,clearcoatMap:we,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:H,iridescenceMap:Fe,iridescenceThicknessMap:Me,sheen:ae,sheenColorMap:ye,sheenRoughnessMap:Te,specularMap:Pe,specularColorMap:be,specularIntensityMap:Je,transmission:le,transmissionMap:O,thicknessMap:Se,gradientMap:_e,opaque:M.transparent===!1&&M.blending===na&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:me,alphaHash:se,combine:M.combine,mapUv:xe&&p(M.map.channel),aoMapUv:ge&&p(M.aoMap.channel),lightMapUv:Ae&&p(M.lightMap.channel),bumpMapUv:ke&&p(M.bumpMap.channel),normalMapUv:K&&p(M.normalMap.channel),displacementMapUv:k&&p(M.displacementMap.channel),emissiveMapUv:ut&&p(M.emissiveMap.channel),metalnessMapUv:at&&p(M.metalnessMap.channel),roughnessMapUv:Ze&&p(M.roughnessMap.channel),anisotropyMapUv:re&&p(M.anisotropyMap.channel),clearcoatMapUv:we&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(M.sheenRoughnessMap.channel),specularMapUv:Pe&&p(M.specularMap.channel),specularColorMapUv:be&&p(M.specularColorMap.channel),specularIntensityMapUv:Je&&p(M.specularIntensityMap.channel),transmissionMapUv:O&&p(M.transmissionMap.channel),thicknessMapUv:Se&&p(M.thicknessMap.channel),alphaMapUv:Ee&&p(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(K||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Y.attributes.uv&&(xe||Ee),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Y.attributes.normal===void 0&&K===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Q,skinning:D.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&It.getTransfer(M.map.colorSpace)===zt,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&It.getTransfer(M.emissiveMap.colorSpace)===zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oi,flipSided:M.side===ti,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)b.push(N),b.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(g(b,M),v(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function g(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const b=f[M.type];let N;if(b){const I=cr[b];N=dx.clone(I.uniforms)}else N=M.uniforms;return N}function x(M,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new i3(r,b,M,i),c.push(N),u.set(b,N)),N}function S(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:A}}function l3(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function c3(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function e_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function t_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function l(d,f,p,_,m,g){const v=a(d,f,p,_,m,g);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(d,f,p,_,m,g){const v=a(d,f,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||c3),n.length>1&&n.sort(f||e_),i.length>1&&i.sort(f||e_)}function h(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function u3(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new t_,r.set(n,[o])):i>=s.length?(o=new t_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function h3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new st};break;case"SpotLight":t={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function d3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let f3=0;function p3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function m3(r){const e=new h3,t=d3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new ct,o=new ct;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,v=0,y=0,x=0,S=0,E=0,A=0;c.sort(p3);for(let b=0,N=c.length;b<N;b++){const I=c[b],D=I.color,X=I.intensity,Y=I.distance;let $=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_a?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=D.r*X,h+=D.g*X,d+=D.b*X;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],X);A++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,J=t.get(I);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(D).multiplyScalar(X),G.distance=Y,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;const z=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,z.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const J=t.get(I);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=$,x++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(D).multiplyScalar(X),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const z=I.shadow,J=t.get(I);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=G,p++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(X),G.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[g]=G,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==f||M.pointLength!==p||M.spotLength!==_||M.rectAreaLength!==m||M.hemiLength!==g||M.numDirectionalShadows!==v||M.numPointShadows!==y||M.numSpotShadows!==x||M.numSpotMaps!==S||M.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,M.directionalLength=f,M.pointLength=p,M.spotLength=_,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=v,M.numPointShadows=y,M.numSpotShadows=x,M.numSpotMaps=S,M.numLightProbes=A,n.version=f3++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const y=c[g];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function n_(r){const e=new m3(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function g3(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new n_(r),e.set(i,[a])):s>=o.length?(a=new n_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v3=`uniform sampler2D shadow_pass;
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
}`,x3=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],M3=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],i_=new ct,za=new F,Yh=new F;function y3(r,e,t){let n=new Lp;const i=new bt,s=new bt,o=new Zt,a=new rA,l=new sA,c={},u=t.maxTextureSize,h={[Gr]:ti,[ti]:Gr,[Oi]:Oi},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:_3,fragmentShader:v3}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new rn;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let g=this.type;this.render=function(E,A,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Sb&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const b=r.getRenderTarget(),N=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Br),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=g!==this.type;X&&A.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach($=>$.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,$=E.length;Y<$;Y++){const G=E[Y],z=G.shadow;if(z===void 0){it("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();i.multiply(J),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,z.mapSize.y=s.y));const Z=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===il){if(G.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new vr(i.x,i.y,{format:_a,type:Wr,minFilter:yn,magFilter:yn,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Hl(i.x,i.y,Bi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Xr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mn,z.map.depthTexture.magFilter=Mn}else G.isPointLight?(z.map=new Mx(i.x),z.map.depthTexture=new QE(i.x,Mr)):(z.map=new vr(i.x,i.y),z.map.depthTexture=new Hl(i.x,i.y,Mr)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Xr,this.type===Jc?(z.map.depthTexture.compareFunction=Z?wp:Ap,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mn,z.map.depthTexture.magFilter=Mn);z.camera.updateProjectionMatrix()}const P=z.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<P;he++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,he),r.clear();else{he===0&&(r.setRenderTarget(z.map),r.clear());const fe=z.getViewport(he);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),D.viewport(o)}if(G.isPointLight){const fe=z.camera,He=z.matrix,Ge=G.distance||fe.far;Ge!==fe.far&&(fe.far=Ge,fe.updateProjectionMatrix()),za.setFromMatrixPosition(G.matrixWorld),fe.position.copy(za),Yh.copy(fe.position),Yh.add(x3[he]),fe.up.copy(M3[he]),fe.lookAt(Yh),fe.updateMatrixWorld(),He.makeTranslation(-za.x,-za.y,-za.z),i_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(i_,fe.coordinateSystem,fe.reversedDepth)}else z.updateMatrices(G);n=z.getFrustum(),x(A,M,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===il&&v(z,M),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(b,N,I)};function v(E,A){const M=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vr(i.x,i.y,{format:_a,type:Wr})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,M,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,M,f,_,null)}function y(E,A,M,b){let N=null;const I=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)N=I;else if(N=M.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=N.uuid,X=A.uuid;let Y=c[D];Y===void 0&&(Y={},c[D]=Y);let $=Y[X];$===void 0&&($=N.clone(),Y[X]=$,A.addEventListener("dispose",S)),N=$}if(N.visible=A.visible,N.wireframe=A.wireframe,b===il?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const D=r.properties.get(N);D.light=M}return N}function x(E,A,M,b,N){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===il)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const X=e.update(E),Y=E.material;if(Array.isArray(Y)){const $=X.groups;for(let G=0,z=$.length;G<z;G++){const J=$[G],Z=Y[J.materialIndex];if(Z&&Z.visible){const P=y(E,Z,b,N);E.onBeforeShadow(r,E,A,M,X,P,J),r.renderBufferDirect(M,null,X,P,E,J),E.onAfterShadow(r,E,A,M,X,P,J)}}}else if(Y.visible){const $=y(E,Y,b,N);E.onBeforeShadow(r,E,A,M,X,$,null),r.renderBufferDirect(M,null,X,$,E,null),E.onAfterShadow(r,E,A,M,X,$,null)}}const D=E.children;for(let X=0,Y=D.length;X<Y;X++)x(D[X],A,M,b,N)}function S(E){E.target.removeEventListener("dispose",S);for(const M in c){const b=c[M],N=E.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function S3(r,e){function t(){let O=!1;const Se=new Zt;let _e=null;const Ee=new Zt(0,0,0,0);return{setMask:function(me){_e!==me&&!O&&(r.colorMask(me,me,me,me),_e=me)},setLocked:function(me){O=me},setClear:function(me,se,ze,Qe,yt){yt===!0&&(me*=Qe,se*=Qe,ze*=Qe),Se.set(me,se,ze,Qe),Ee.equals(Se)===!1&&(r.clearColor(me,se,ze,Qe),Ee.copy(Se))},reset:function(){O=!1,_e=null,Ee.set(-1,0,0,0)}}}function n(){let O=!1,Se=!1,_e=null,Ee=null,me=null;return{setReversed:function(se){if(Se!==se){const ze=e.get("EXT_clip_control");se?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Se=se;const Qe=me;me=null,this.setClear(Qe)}},getReversed:function(){return Se},setTest:function(se){se?V(r.DEPTH_TEST):Q(r.DEPTH_TEST)},setMask:function(se){_e!==se&&!O&&(r.depthMask(se),_e=se)},setFunc:function(se){if(Se&&(se=lE[se]),Ee!==se){switch(se){case Vd:r.depthFunc(r.NEVER);break;case zd:r.depthFunc(r.ALWAYS);break;case Hd:r.depthFunc(r.LESS);break;case pa:r.depthFunc(r.LEQUAL);break;case Gd:r.depthFunc(r.EQUAL);break;case Wd:r.depthFunc(r.GEQUAL);break;case Xd:r.depthFunc(r.GREATER);break;case qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=se}},setLocked:function(se){O=se},setClear:function(se){me!==se&&(me=se,Se&&(se=1-se),r.clearDepth(se))},reset:function(){O=!1,_e=null,Ee=null,me=null,Se=!1}}}function i(){let O=!1,Se=null,_e=null,Ee=null,me=null,se=null,ze=null,Qe=null,yt=null;return{setTest:function(Ne){O||(Ne?V(r.STENCIL_TEST):Q(r.STENCIL_TEST))},setMask:function(Ne){Se!==Ne&&!O&&(r.stencilMask(Ne),Se=Ne)},setFunc:function(Ne,$e,ft){(_e!==Ne||Ee!==$e||me!==ft)&&(r.stencilFunc(Ne,$e,ft),_e=Ne,Ee=$e,me=ft)},setOp:function(Ne,$e,ft){(se!==Ne||ze!==$e||Qe!==ft)&&(r.stencilOp(Ne,$e,ft),se=Ne,ze=$e,Qe=ft)},setLocked:function(Ne){O=Ne},setClear:function(Ne){yt!==Ne&&(r.clearStencil(Ne),yt=Ne)},reset:function(){O=!1,Se=null,_e=null,Ee=null,me=null,se=null,ze=null,Qe=null,yt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,v=null,y=null,x=null,S=null,E=null,A=new st(0,0,0),M=0,b=!1,N=null,I=null,D=null,X=null,Y=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=z>=2);let Z=null,P={};const he=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),He=new Zt().fromArray(he),Ge=new Zt().fromArray(fe);function Xe(O,Se,_e,Ee){const me=new Uint8Array(4),se=r.createTexture();r.bindTexture(O,se),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<_e;ze++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Se,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(Se+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return se}const ie={};ie[r.TEXTURE_2D]=Xe(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Xe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Xe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Xe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(r.DEPTH_TEST),o.setFunc(pa),ke(!1),K(Gm),V(r.CULL_FACE),ge(Br);function V(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function Q(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function oe(O,Se){return h[O]!==Se?(r.bindFramebuffer(O,Se),h[O]=Se,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Se),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Se),!0):!1}function ue(O,Se){let _e=f,Ee=!1;if(O){_e=d.get(Se),_e===void 0&&(_e=[],d.set(Se,_e));const me=O.textures;if(_e.length!==me.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let se=0,ze=me.length;se<ze;se++)_e[se]=r.COLOR_ATTACHMENT0+se;_e.length=me.length,Ee=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(_e)}function xe(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const Re={[Gs]:r.FUNC_ADD,[bb]:r.FUNC_SUBTRACT,[Eb]:r.FUNC_REVERSE_SUBTRACT};Re[Ab]=r.MIN,Re[wb]=r.MAX;const pe={[Rb]:r.ZERO,[Cb]:r.ONE,[Pb]:r.SRC_COLOR,[Bd]:r.SRC_ALPHA,[Ub]:r.SRC_ALPHA_SATURATE,[Nb]:r.DST_COLOR,[Lb]:r.DST_ALPHA,[Ib]:r.ONE_MINUS_SRC_COLOR,[kd]:r.ONE_MINUS_SRC_ALPHA,[Ob]:r.ONE_MINUS_DST_COLOR,[Db]:r.ONE_MINUS_DST_ALPHA,[Fb]:r.CONSTANT_COLOR,[Bb]:r.ONE_MINUS_CONSTANT_COLOR,[kb]:r.CONSTANT_ALPHA,[Vb]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(O,Se,_e,Ee,me,se,ze,Qe,yt,Ne){if(O===Br){_===!0&&(Q(r.BLEND),_=!1);return}if(_===!1&&(V(r.BLEND),_=!0),O!==Tb){if(O!==m||Ne!==b){if((g!==Gs||x!==Gs)&&(r.blendEquation(r.FUNC_ADD),g=Gs,x=Gs),Ne)switch(O){case na:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFunc(r.ONE,r.ONE);break;case Xm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ht("WebGLState: Invalid blending: ",O);break}else switch(O){case na:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Xm:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qm:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",O);break}v=null,y=null,S=null,E=null,A.set(0,0,0),M=0,m=O,b=Ne}return}me=me||Se,se=se||_e,ze=ze||Ee,(Se!==g||me!==x)&&(r.blendEquationSeparate(Re[Se],Re[me]),g=Se,x=me),(_e!==v||Ee!==y||se!==S||ze!==E)&&(r.blendFuncSeparate(pe[_e],pe[Ee],pe[se],pe[ze]),v=_e,y=Ee,S=se,E=ze),(Qe.equals(A)===!1||yt!==M)&&(r.blendColor(Qe.r,Qe.g,Qe.b,yt),A.copy(Qe),M=yt),m=O,b=!1}function Ae(O,Se){O.side===Oi?Q(r.CULL_FACE):V(r.CULL_FACE);let _e=O.side===ti;Se&&(_e=!_e),ke(_e),O.blending===na&&O.transparent===!1?ge(Br):ge(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ee=O.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?V(r.SAMPLE_ALPHA_TO_COVERAGE):Q(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(O){N!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),N=O)}function K(O){O!==Mb?(V(r.CULL_FACE),O!==I&&(O===Gm?r.cullFace(r.BACK):O===yb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Q(r.CULL_FACE),I=O}function k(O){O!==D&&(G&&r.lineWidth(O),D=O)}function ut(O,Se,_e){O?(V(r.POLYGON_OFFSET_FILL),(X!==Se||Y!==_e)&&(X=Se,Y=_e,o.getReversed()&&(Se=-Se),r.polygonOffset(Se,_e))):Q(r.POLYGON_OFFSET_FILL)}function at(O){O?V(r.SCISSOR_TEST):Q(r.SCISSOR_TEST)}function Ze(O){O===void 0&&(O=r.TEXTURE0+$-1),Z!==O&&(r.activeTexture(O),Z=O)}function Ue(O,Se,_e){_e===void 0&&(Z===null?_e=r.TEXTURE0+$-1:_e=Z);let Ee=P[_e];Ee===void 0&&(Ee={type:void 0,texture:void 0},P[_e]=Ee),(Ee.type!==O||Ee.texture!==Se)&&(Z!==_e&&(r.activeTexture(_e),Z=_e),r.bindTexture(O,Se||ie[O]),Ee.type=O,Ee.texture=Se)}function L(){const O=P[Z];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function ae(){try{r.texSubImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function le(){try{r.texSubImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function ve(){try{r.texStorage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Ve(){try{r.texStorage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function Fe(){try{r.texImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Me(){try{r.texImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function ye(O){He.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function Te(O){Ge.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Ge.copy(O))}function Pe(O,Se){let _e=c.get(Se);_e===void 0&&(_e=new WeakMap,c.set(Se,_e));let Ee=_e.get(O);Ee===void 0&&(Ee=r.getUniformBlockIndex(Se,O.name),_e.set(O,Ee))}function be(O,Se){const Ee=c.get(Se).get(O);l.get(Se)!==Ee&&(r.uniformBlockBinding(Se,Ee,O.__bindingPointIndex),l.set(Se,Ee))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Z=null,P={},h={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,v=null,y=null,x=null,S=null,E=null,A=new st(0,0,0),M=0,b=!1,N=null,I=null,D=null,X=null,Y=null,He.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:V,disable:Q,bindFramebuffer:oe,drawBuffers:ue,useProgram:xe,setBlending:ge,setMaterial:Ae,setFlipSided:ke,setCullFace:K,setLineWidth:k,setPolygonOffset:ut,setScissorTest:at,activeTexture:Ze,bindTexture:Ue,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:H,texImage2D:Fe,texImage3D:Me,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:ve,texStorage3D:Ve,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:re,compressedTexSubImage3D:we,scissor:ye,viewport:Te,reset:Je}}function T3(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return f?new OffscreenCanvas(L,T):zl("canvas")}function _(L,T,H){let ae=1;const le=Ue(L);if((le.width>H||le.height>H)&&(ae=H/Math.max(le.width,le.height)),ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ae*le.width),we=Math.floor(ae*le.height);h===void 0&&(h=p(re,we));const ve=T?p(re,we):h;return ve.width=re,ve.height=we,ve.getContext("2d").drawImage(L,0,0,re,we),it("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+we+")."),ve}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function m(L){return L.generateMipmaps}function g(L){r.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,T,H,ae,le=!1){if(L!==null){if(r[L]!==void 0)return r[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=T;if(T===r.RED&&(H===r.FLOAT&&(re=r.R32F),H===r.HALF_FLOAT&&(re=r.R16F),H===r.UNSIGNED_BYTE&&(re=r.R8)),T===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(re=r.R8UI),H===r.UNSIGNED_SHORT&&(re=r.R16UI),H===r.UNSIGNED_INT&&(re=r.R32UI),H===r.BYTE&&(re=r.R8I),H===r.SHORT&&(re=r.R16I),H===r.INT&&(re=r.R32I)),T===r.RG&&(H===r.FLOAT&&(re=r.RG32F),H===r.HALF_FLOAT&&(re=r.RG16F),H===r.UNSIGNED_BYTE&&(re=r.RG8)),T===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(re=r.RG8UI),H===r.UNSIGNED_SHORT&&(re=r.RG16UI),H===r.UNSIGNED_INT&&(re=r.RG32UI),H===r.BYTE&&(re=r.RG8I),H===r.SHORT&&(re=r.RG16I),H===r.INT&&(re=r.RG32I)),T===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(re=r.RGB8UI),H===r.UNSIGNED_SHORT&&(re=r.RGB16UI),H===r.UNSIGNED_INT&&(re=r.RGB32UI),H===r.BYTE&&(re=r.RGB8I),H===r.SHORT&&(re=r.RGB16I),H===r.INT&&(re=r.RGB32I)),T===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),H===r.UNSIGNED_INT&&(re=r.RGBA32UI),H===r.BYTE&&(re=r.RGBA8I),H===r.SHORT&&(re=r.RGBA16I),H===r.INT&&(re=r.RGBA32I)),T===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(re=r.R11F_G11F_B10F)),T===r.RGBA){const we=le?Su:It.getTransfer(ae);H===r.FLOAT&&(re=r.RGBA32F),H===r.HALF_FLOAT&&(re=r.RGBA16F),H===r.UNSIGNED_BYTE&&(re=we===zt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(L,T){let H;return L?T===null||T===Mr||T===Fl?H=r.DEPTH24_STENCIL8:T===Bi?H=r.DEPTH32F_STENCIL8:T===Ul&&(H=r.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mr||T===Fl?H=r.DEPTH_COMPONENT24:T===Bi?H=r.DEPTH_COMPONENT32F:T===Ul&&(H=r.DEPTH_COMPONENT16),H}function S(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mn&&L.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){const T=L.target;T.removeEventListener("dispose",E),M(T),T.isVideoTexture&&u.delete(T)}function A(L){const T=L.target;T.removeEventListener("dispose",A),N(T)}function M(L){const T=n.get(L);if(T.__webglInit===void 0)return;const H=L.source,ae=d.get(H);if(ae){const le=ae[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(L),Object.keys(ae).length===0&&d.delete(H)}n.remove(L)}function b(L){const T=n.get(L);r.deleteTexture(T.__webglTexture);const H=L.source,ae=d.get(H);delete ae[T.__cacheKey],o.memory.textures--}function N(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let le=0;le<T.__webglFramebuffer[ae].length;le++)r.deleteFramebuffer(T.__webglFramebuffer[ae][le]);else r.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)r.deleteFramebuffer(T.__webglFramebuffer[ae]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=L.textures;for(let ae=0,le=H.length;ae<le;ae++){const re=n.get(H[ae]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(H[ae])}n.remove(L)}let I=0;function D(){I=0}function X(){const L=I;return L>=i.maxTextures&&it("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),I+=1,L}function Y(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function $(L,T){const H=n.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){const ae=L.image;if(ae===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(H,L,T);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+T)}function G(L,T){const H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ie(H,L,T);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+T)}function z(L,T){const H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){ie(H,L,T);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+T)}function J(L,T){const H=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){V(H,L,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+T)}const Z={[ga]:r.REPEAT,[pr]:r.CLAMP_TO_EDGE,[Mu]:r.MIRRORED_REPEAT},P={[Mn]:r.NEAREST,[qv]:r.NEAREST_MIPMAP_NEAREST,[rl]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[Qc]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},he={[Zb]:r.NEVER,[nE]:r.ALWAYS,[Jb]:r.LESS,[Ap]:r.LEQUAL,[Qb]:r.EQUAL,[wp]:r.GEQUAL,[eE]:r.GREATER,[tE]:r.NOTEQUAL};function fe(L,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===Qc||T.magFilter===rl||T.magFilter===Nr||T.minFilter===yn||T.minFilter===Qc||T.minFilter===rl||T.minFilter===Nr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Z[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Z[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Z[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mn||T.minFilter!==rl&&T.minFilter!==Nr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function He(L,T){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));const ae=T.source;let le=d.get(ae);le===void 0&&(le={},d.set(ae,le));const re=Y(T);if(re!==L.__cacheKey){le[re]===void 0&&(le[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[re].usedTimes++;const we=le[L.__cacheKey];we!==void 0&&(le[L.__cacheKey].usedTimes--,we.usedTimes===0&&b(T)),L.__cacheKey=re,L.__webglTexture=le[re].texture}return H}function Ge(L,T,H){return Math.floor(Math.floor(L/H)/T)}function Xe(L,T,H,ae){const re=L.updateRanges;if(re.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,H,ae,T.data);else{re.sort((Me,ye)=>Me.start-ye.start);let we=0;for(let Me=1;Me<re.length;Me++){const ye=re[we],Te=re[Me],Pe=ye.start+ye.count,be=Ge(Te.start,T.width,4),Je=Ge(ye.start,T.width,4);Te.start<=Pe+1&&be===Je&&Ge(Te.start+Te.count-1,T.width,4)===be?ye.count=Math.max(ye.count,Te.start+Te.count-ye.start):(++we,re[we]=Te)}re.length=we+1;const ve=r.getParameter(r.UNPACK_ROW_LENGTH),Ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Fe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Me=0,ye=re.length;Me<ye;Me++){const Te=re[Me],Pe=Math.floor(Te.start/4),be=Math.ceil(Te.count/4),Je=Pe%T.width,O=Math.floor(Pe/T.width),Se=be,_e=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Je,O,Se,_e,H,ae,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ve),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function ie(L,T,H){let ae=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=r.TEXTURE_3D);const le=He(L,T),re=T.source;t.bindTexture(ae,L.__webglTexture,r.TEXTURE0+H);const we=n.get(re);if(re.version!==we.__version||le===!0){t.activeTexture(r.TEXTURE0+H);const ve=It.getPrimaries(It.workingColorSpace),Ve=T.colorSpace===cs?null:It.getPrimaries(T.colorSpace),Fe=T.colorSpace===cs||ve===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let Me=_(T.image,!1,i.maxTextureSize);Me=Ze(T,Me);const ye=s.convert(T.format,T.colorSpace),Te=s.convert(T.type);let Pe=y(T.internalFormat,ye,Te,T.colorSpace,T.isVideoTexture);fe(ae,T);let be;const Je=T.mipmaps,O=T.isVideoTexture!==!0,Se=we.__version===void 0||le===!0,_e=re.dataReady,Ee=S(T,Me);if(T.isDepthTexture)Pe=x(T.format===js,T.type),Se&&(O?t.texStorage2D(r.TEXTURE_2D,1,Pe,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Pe,Me.width,Me.height,0,ye,Te,null));else if(T.isDataTexture)if(Je.length>0){O&&Se&&t.texStorage2D(r.TEXTURE_2D,Ee,Pe,Je[0].width,Je[0].height);for(let me=0,se=Je.length;me<se;me++)be=Je[me],O?_e&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,be.width,be.height,ye,Te,be.data):t.texImage2D(r.TEXTURE_2D,me,Pe,be.width,be.height,0,ye,Te,be.data);T.generateMipmaps=!1}else O?(Se&&t.texStorage2D(r.TEXTURE_2D,Ee,Pe,Me.width,Me.height),_e&&Xe(T,Me,ye,Te)):t.texImage2D(r.TEXTURE_2D,0,Pe,Me.width,Me.height,0,ye,Te,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Pe,Je[0].width,Je[0].height,Me.depth);for(let me=0,se=Je.length;me<se;me++)if(be=Je[me],T.format!==ki)if(ye!==null)if(O){if(_e)if(T.layerUpdates.size>0){const ze=Ng(be.width,be.height,T.format,T.type);for(const Qe of T.layerUpdates){const yt=be.data.subarray(Qe*ze/be.data.BYTES_PER_ELEMENT,(Qe+1)*ze/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,Qe,be.width,be.height,1,ye,yt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,Me.depth,ye,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Pe,be.width,be.height,Me.depth,0,be.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?_e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,Me.depth,ye,Te,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,Pe,be.width,be.height,Me.depth,0,ye,Te,be.data)}else{O&&Se&&t.texStorage2D(r.TEXTURE_2D,Ee,Pe,Je[0].width,Je[0].height);for(let me=0,se=Je.length;me<se;me++)be=Je[me],T.format!==ki?ye!==null?O?_e&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(r.TEXTURE_2D,me,Pe,be.width,be.height,0,be.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?_e&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,be.width,be.height,ye,Te,be.data):t.texImage2D(r.TEXTURE_2D,me,Pe,be.width,be.height,0,ye,Te,be.data)}else if(T.isDataArrayTexture)if(O){if(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Pe,Me.width,Me.height,Me.depth),_e)if(T.layerUpdates.size>0){const me=Ng(Me.width,Me.height,T.format,T.type);for(const se of T.layerUpdates){const ze=Me.data.subarray(se*me/Me.data.BYTES_PER_ELEMENT,(se+1)*me/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,Me.width,Me.height,1,ye,Te,ze)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ye,Te,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Me.width,Me.height,Me.depth,0,ye,Te,Me.data);else if(T.isData3DTexture)O?(Se&&t.texStorage3D(r.TEXTURE_3D,Ee,Pe,Me.width,Me.height,Me.depth),_e&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ye,Te,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,Me.width,Me.height,Me.depth,0,ye,Te,Me.data);else if(T.isFramebufferTexture){if(Se)if(O)t.texStorage2D(r.TEXTURE_2D,Ee,Pe,Me.width,Me.height);else{let me=Me.width,se=Me.height;for(let ze=0;ze<Ee;ze++)t.texImage2D(r.TEXTURE_2D,ze,Pe,me,se,0,ye,Te,null),me>>=1,se>>=1}}else if(Je.length>0){if(O&&Se){const me=Ue(Je[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Pe,me.width,me.height)}for(let me=0,se=Je.length;me<se;me++)be=Je[me],O?_e&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ye,Te,be):t.texImage2D(r.TEXTURE_2D,me,Pe,ye,Te,be);T.generateMipmaps=!1}else if(O){if(Se){const me=Ue(Me);t.texStorage2D(r.TEXTURE_2D,Ee,Pe,me.width,me.height)}_e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Te,Me)}else t.texImage2D(r.TEXTURE_2D,0,Pe,ye,Te,Me);m(T)&&g(ae),we.__version=re.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function V(L,T,H){if(T.image.length!==6)return;const ae=He(L,T),le=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+H);const re=n.get(le);if(le.version!==re.__version||ae===!0){t.activeTexture(r.TEXTURE0+H);const we=It.getPrimaries(It.workingColorSpace),ve=T.colorSpace===cs?null:It.getPrimaries(T.colorSpace),Ve=T.colorSpace===cs||we===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!Fe&&!Me?ye[se]=_(T.image[se],!0,i.maxCubemapSize):ye[se]=Me?T.image[se].image:T.image[se],ye[se]=Ze(T,ye[se]);const Te=ye[0],Pe=s.convert(T.format,T.colorSpace),be=s.convert(T.type),Je=y(T.internalFormat,Pe,be,T.colorSpace),O=T.isVideoTexture!==!0,Se=re.__version===void 0||ae===!0,_e=le.dataReady;let Ee=S(T,Te);fe(r.TEXTURE_CUBE_MAP,T);let me;if(Fe){O&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Je,Te.width,Te.height);for(let se=0;se<6;se++){me=ye[se].mipmaps;for(let ze=0;ze<me.length;ze++){const Qe=me[ze];T.format!==ki?Pe!==null?O?_e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,Qe.width,Qe.height,Pe,Qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,Je,Qe.width,Qe.height,0,Qe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,Qe.width,Qe.height,Pe,be,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,Je,Qe.width,Qe.height,0,Pe,be,Qe.data)}}}else{if(me=T.mipmaps,O&&Se){me.length>0&&Ee++;const se=Ue(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Je,se.width,se.height)}for(let se=0;se<6;se++)if(Me){O?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Pe,be,ye[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,ye[se].width,ye[se].height,0,Pe,be,ye[se].data);for(let ze=0;ze<me.length;ze++){const yt=me[ze].image[se].image;O?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,yt.width,yt.height,Pe,be,yt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,Je,yt.width,yt.height,0,Pe,be,yt.data)}}else{O?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,be,ye[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Pe,be,ye[se]);for(let ze=0;ze<me.length;ze++){const Qe=me[ze];O?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,Pe,be,Qe.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,Je,Pe,be,Qe.image[se])}}}m(T)&&g(r.TEXTURE_CUBE_MAP),re.__version=le.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Q(L,T,H,ae,le,re){const we=s.convert(H.format,H.colorSpace),ve=s.convert(H.type),Ve=y(H.internalFormat,we,ve,H.colorSpace),Fe=n.get(T),Me=n.get(H);if(Me.__renderTarget=T,!Fe.__hasExternalTextures){const ye=Math.max(1,T.width>>re),Te=Math.max(1,T.height>>re);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,re,Ve,ye,Te,T.depth,0,we,ve,null):t.texImage2D(le,re,Ve,ye,Te,0,we,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ut(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,le,Me.__webglTexture,0,k(T)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,le,Me.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(L,T,H){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const ae=T.depthTexture,le=ae&&ae.isDepthTexture?ae.type:null,re=x(T.stencilBuffer,le),we=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ut(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),re,T.width,T.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),re,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,re,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,L)}else{const ae=T.textures;for(let le=0;le<ae.length;le++){const re=ae[le],we=s.convert(re.format,re.colorSpace),ve=s.convert(re.type),Ve=y(re.internalFormat,we,ve,re.colorSpace);ut(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),Ve,T.width,T.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),Ve,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(L,T,H){const ae=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(T.depthTexture);if(le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae){if(le.__webglInit===void 0&&(le.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),le.__webglTexture===void 0){le.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),fe(r.TEXTURE_CUBE_MAP,T.depthTexture);const Fe=s.convert(T.depthTexture.format),Me=s.convert(T.depthTexture.type);let ye;T.depthTexture.format===Xr?ye=r.DEPTH_COMPONENT24:T.depthTexture.format===js&&(ye=r.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ye,T.width,T.height,0,Fe,Me,null)}}else $(T.depthTexture,0);const re=le.__webglTexture,we=k(T),ve=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,Ve=T.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Xr)ut(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ve,ve,re,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Ve,ve,re,0);else if(T.depthTexture.format===js)ut(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ve,ve,re,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Ve,ve,re,0);else throw new Error("Unknown depthTexture format")}function xe(L){const T=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ae=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const le=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",le)};ae.addEventListener("dispose",le),T.__depthDisposeCallback=le}T.__boundDepthTexture=ae}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let ae=0;ae<6;ae++)ue(T.__webglFramebuffer[ae],L,ae);else{const ae=L.texture.mipmaps;ae&&ae.length>0?ue(T.__webglFramebuffer[0],L,0):ue(T.__webglFramebuffer,L,0)}else if(H){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=r.createRenderbuffer(),oe(T.__webglDepthbuffer[ae],L,!1);else{const le=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,re)}}else{const ae=L.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),oe(T.__webglDepthbuffer,L,!1);else{const le=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,re)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(L,T,H){const ae=n.get(L);T!==void 0&&Q(ae.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&xe(L)}function pe(L){const T=L.texture,H=n.get(L),ae=n.get(T);L.addEventListener("dispose",A);const le=L.textures,re=L.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=T.version,o.memory.textures++),re){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)H.__webglFramebuffer[ve][Ve]=r.createFramebuffer()}else H.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)H.__webglFramebuffer[ve]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(we)for(let ve=0,Ve=le.length;ve<Ve;ve++){const Fe=n.get(le[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&ut(L)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Ve=le[ve];H.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const Fe=s.convert(Ve.format,Ve.colorSpace),Me=s.convert(Ve.type),ye=y(Ve.internalFormat,Fe,Me,Ve.colorSpace,L.isXRRenderTarget===!0),Te=k(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ye,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),fe(r.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Q(H.__webglFramebuffer[ve][Ve],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve);else Q(H.__webglFramebuffer[ve],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(T)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ve=0,Ve=le.length;ve<Ve;ve++){const Fe=le[ve],Me=n.get(Fe);let ye=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,Me.__webglTexture),fe(ye,Fe),Q(H.__webglFramebuffer,L,Fe,r.COLOR_ATTACHMENT0+ve,ye,0),m(Fe)&&g(ye)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,ae.__webglTexture),fe(ve,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Q(H.__webglFramebuffer[Ve],L,T,r.COLOR_ATTACHMENT0,ve,Ve);else Q(H.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,ve,0);m(T)&&g(ve),t.unbindTexture()}L.depthBuffer&&xe(L)}function ge(L){const T=L.textures;for(let H=0,ae=T.length;H<ae;H++){const le=T[H];if(m(le)){const re=v(L),we=n.get(le).__webglTexture;t.bindTexture(re,we),g(re),t.unbindTexture()}}}const Ae=[],ke=[];function K(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,H=L.width,ae=L.height;let le=r.COLOR_BUFFER_BIT;const re=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(L),ve=T.length>1;if(ve)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);const Me=n.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,H,ae,0,0,H,ae,le,r.NEAREST),l===!0&&(Ae.length=0,ke.length=0,Ae.push(r.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(re),ke.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ke)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);const Me=n.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(L){return Math.min(i.maxSamples,L.samples)}function ut(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function at(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ze(L,T){const H=L.colorSpace,ae=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==ni&&H!==cs&&(It.getTransfer(H)===zt?(ae!==ki||le!==yi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",H)),T}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=Re,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function b3(r,e){function t(n,i=cs){let s;const o=It.getTransfer(i);if(n===yi)return r.UNSIGNED_BYTE;if(n===vp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yv)return r.BYTE;if(n===$v)return r.SHORT;if(n===Ul)return r.UNSIGNED_SHORT;if(n===_p)return r.INT;if(n===Mr)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===Wr)return r.HALF_FLOAT;if(n===Zv)return r.ALPHA;if(n===Jv)return r.RGB;if(n===ki)return r.RGBA;if(n===Xr)return r.DEPTH_COMPONENT;if(n===js)return r.DEPTH_STENCIL;if(n===Mp)return r.RED;if(n===yp)return r.RED_INTEGER;if(n===_a)return r.RG;if(n===Sp)return r.RG_INTEGER;if(n===Tp)return r.RGBA_INTEGER;if(n===eu||n===tu||n===nu||n===iu)if(o===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===eu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===eu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===iu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yd||n===$d||n===jd||n===Kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zd||n===Jd||n===Qd||n===ef||n===tf||n===nf||n===rf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zd||n===Jd)return o===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qd)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ef)return s.COMPRESSED_R11_EAC;if(n===tf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===nf)return s.COMPRESSED_RG11_EAC;if(n===rf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sf||n===of||n===af||n===lf||n===cf||n===uf||n===hf||n===df||n===ff||n===pf||n===mf||n===gf||n===_f||n===vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===of)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===af)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===df)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ff)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_f)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vf)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xf||n===Mf||n===yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xf)return o===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sf||n===Tf||n===bf||n===Ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const E3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A3=`
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

}`;class w3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ux(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ji({vertexShader:E3,fragmentShader:A3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new zu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R3 extends fo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new w3,g={},v=t.getContextAttributes();let y=null,x=null;const S=[],E=[],A=new bt;let M=null;const b=new Jn;b.viewport=new Zt;const N=new Jn;N.viewport=new Zt;const I=[b,N],D=new EA;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let V=S[ie];return V===void 0&&(V=new Mh,S[ie]=V),V.getTargetRaySpace()},this.getControllerGrip=function(ie){let V=S[ie];return V===void 0&&(V=new Mh,S[ie]=V),V.getGripSpace()},this.getHand=function(ie){let V=S[ie];return V===void 0&&(V=new Mh,S[ie]=V),V.getHandSpace()};function $(ie){const V=E.indexOf(ie.inputSource);if(V===-1)return;const Q=S[V];Q!==void 0&&(Q.update(ie.inputSource,ie.frame,c||o),Q.dispatchEvent({type:ie.type,data:ie.inputSource}))}function G(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",z);for(let ie=0;ie<S.length;ie++){const V=E[ie];V!==null&&(E[ie]=null,S[ie].disconnect(V))}X=null,Y=null,m.reset();for(const ie in g)delete g[ie];e.setRenderTarget(y),f=null,d=null,h=null,i=null,x=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",G),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,oe=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=v.stencil?js:Xr,oe=v.stencil?Fl:Mr);const xe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new vr(d.textureWidth,d.textureHeight,{format:ki,type:yi,depthTexture:new Hl(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new vr(f.framebufferWidth,f.framebufferHeight,{format:ki,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(ie){for(let V=0;V<ie.removed.length;V++){const Q=ie.removed[V],oe=E.indexOf(Q);oe>=0&&(E[oe]=null,S[oe].disconnect(Q))}for(let V=0;V<ie.added.length;V++){const Q=ie.added[V];let oe=E.indexOf(Q);if(oe===-1){for(let xe=0;xe<S.length;xe++)if(xe>=E.length){E.push(Q),oe=xe;break}else if(E[xe]===null){E[xe]=Q,oe=xe;break}if(oe===-1)break}const ue=S[oe];ue&&ue.connect(Q)}}const J=new F,Z=new F;function P(ie,V,Q){J.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(Q.matrixWorld);const oe=J.distanceTo(Z),ue=V.projectionMatrix.elements,xe=Q.projectionMatrix.elements,Re=ue[14]/(ue[10]-1),pe=ue[14]/(ue[10]+1),ge=(ue[9]+1)/ue[5],Ae=(ue[9]-1)/ue[5],ke=(ue[8]-1)/ue[0],K=(xe[8]+1)/xe[0],k=Re*ke,ut=Re*K,at=oe/(-ke+K),Ze=at*-ke;if(V.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ze),ie.translateZ(at),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ue[10]===-1)ie.projectionMatrix.copy(V.projectionMatrix),ie.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Ue=Re+at,L=pe+at,T=k-Ze,H=ut+(oe-Ze),ae=ge*pe/L*Ue,le=Ae*pe/L*Ue;ie.projectionMatrix.makePerspective(T,H,ae,le,Ue,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,V){V===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(V.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let V=ie.near,Q=ie.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),D.near=N.near=b.near=V,D.far=N.far=b.far=Q,(X!==D.near||Y!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,Y=D.far),D.layers.mask=ie.layers.mask|6,b.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const oe=ie.parent,ue=D.cameras;he(D,oe);for(let xe=0;xe<ue.length;xe++)he(ue[xe],oe);ue.length===2?P(D,b,N):D.projectionMatrix.copy(b.projectionMatrix),fe(ie,D,oe)};function fe(ie,V,Q){Q===null?ie.matrix.copy(V.matrixWorld):(ie.matrix.copy(Q.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(V.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(V.projectionMatrix),ie.projectionMatrixInverse.copy(V.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=va*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(ie){return g[ie]};let He=null;function Ge(ie,V){if(u=V.getViewerPose(c||o),p=V,u!==null){const Q=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;Q.length!==D.cameras.length&&(D.cameras.length=0,oe=!0);for(let pe=0;pe<Q.length;pe++){const ge=Q[pe];let Ae=null;if(f!==null)Ae=f.getViewport(ge);else{const K=h.getViewSubImage(d,ge);Ae=K.viewport,pe===0&&(e.setRenderTargetTextures(x,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(x))}let ke=I[pe];ke===void 0&&(ke=new Jn,ke.layers.enable(pe),ke.viewport=new Zt,I[pe]=ke),ke.matrix.fromArray(ge.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ge.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),pe===0&&(D.matrix.copy(ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),oe===!0&&D.cameras.push(ke)}const ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const pe=h.getDepthInformation(Q[0]);pe&&pe.isValid&&pe.texture&&m.init(pe,i.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let pe=0;pe<Q.length;pe++){const ge=Q[pe].camera;if(ge){let Ae=g[ge];Ae||(Ae=new ux,g[ge]=Ae);const ke=h.getCameraImage(ge);Ae.sourceTexture=ke}}}}for(let Q=0;Q<S.length;Q++){const oe=E[Q],ue=S[Q];oe!==null&&ue!==void 0&&ue.update(oe,V,c||o)}He&&He(ie,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),p=null}const Xe=new xx;Xe.setAnimationLoop(Ge),this.setAnimationLoop=function(ie){He=ie},this.dispose=function(){}}}const Ds=new Ri,C3=new ct;function P3(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,hx(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,y,x){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ti&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ti&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ds.copy(x),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(C3.makeRotationFromEuler(Ds)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ti&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I3(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(p(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(v,S);const E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function u(v){const y=h();v.__bindingPointIndex=y;const x=r.createBuffer(),S=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,S,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,A=x.length;E<A;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,N=M.length;b<N;b++){const I=M[b];if(f(I,E,b,S)===!0){const D=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let $=0;$<X.length;$++){const G=X[$],z=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,D+Y,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,x,S){const E=v.value,A=y+"_"+x;if(S[A]===void 0)return typeof E=="number"||typeof E=="boolean"?S[A]=E:S[A]=E.clone(),!0;{const M=S[A];if(typeof E=="number"||typeof E=="boolean"){if(M!==E)return S[A]=E,!0}else if(M.equals(E)===!1)return M.copy(E),!0}return!1}function p(v){const y=v.uniforms;let x=0;const S=16;for(let A=0,M=y.length;A<M;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let N=0,I=b.length;N<I;N++){const D=b[N],X=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,$=X.length;Y<$;Y++){const G=X[Y],z=_(G),J=x%S,Z=J%z.boundary,P=J+Z;x+=Z,P!==0&&S-P<z.storage&&(x+=S-P),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=z.storage}}}const E=x%S;return E>0&&(x+=S-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}const L3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function D3(){return nr===null&&(nr=new Ip(L3,16,16,_a,Wr),nr.name="DFG_LUT",nr.minFilter=yn,nr.magFilter=yn,nr.wrapS=pr,nr.wrapT=pr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class N3{constructor(e={}){const{canvas:t=oE(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,m=new Set([Tp,Sp,yp]),g=new Set([yi,Mr,Ul,Fl,vp,xp]),v=new Uint32Array(4),y=new Int32Array(4);let x=null,S=null;const E=[],A=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=In;let I=0,D=0,X=null,Y=-1,$=null;const G=new Zt,z=new Zt;let J=null;const Z=new st(0);let P=0,he=t.width,fe=t.height,He=1,Ge=null,Xe=null;const ie=new Zt(0,0,he,fe),V=new Zt(0,0,he,fe);let Q=!1;const oe=new Lp;let ue=!1,xe=!1;const Re=new ct,pe=new F,ge=new Zt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function K(){return X===null?He:1}let k=n;function ut(w,q){return t.getContext(w,q)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",yt,!1),k===null){const q="webgl2";if(k=ut(q,w),k===null)throw ut(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ht("WebGLRenderer: "+w.message),w}let at,Ze,Ue,L,T,H,ae,le,re,we,ve,Ve,Fe,Me,ye,Te,Pe,be,Je,O,Se,_e,Ee;function me(){at=new NC(k),at.init(),Se=new b3(k,at),Ze=new AC(k,at,e,Se),Ue=new S3(k,at),Ze.reversedDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),L=new FC(k),T=new l3,H=new T3(k,at,Ue,T,Ze,Se,L),ae=new DC(b),le=new HA(k),_e=new bC(k,le),re=new OC(k,le,L,_e),we=new kC(k,re,le,_e,L),be=new BC(k,Ze,H),ye=new wC(T),ve=new a3(b,ae,at,Ze,_e,ye),Ve=new P3(b,T),Fe=new u3,Me=new g3(at),Pe=new TC(b,ae,Ue,we,p,l),Te=new y3(b,we,Ze),Ee=new I3(k,L,Ze,Ue),Je=new EC(k,at,L),O=new UC(k,at,L),L.programs=ve.programs,b.capabilities=Ze,b.extensions=at,b.properties=T,b.renderLists=Fe,b.shadowMap=Te,b.state=Ue,b.info=L}me(),_!==yi&&(M=new zC(_,t.width,t.height,i,s));const se=new R3(b,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(w){w!==void 0&&(He=w,this.setSize(he,fe,!1))},this.getSize=function(w){return w.set(he,fe)},this.setSize=function(w,q,ne=!0){if(se.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}he=w,fe=q,t.width=Math.floor(w*He),t.height=Math.floor(q*He),ne===!0&&(t.style.width=w+"px",t.style.height=q+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(he*He,fe*He).floor()},this.setDrawingBufferSize=function(w,q,ne){he=w,fe=q,He=ne,t.width=Math.floor(w*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(_===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,q,ne,te){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,q,ne,te),Ue.viewport(G.copy(ie).multiplyScalar(He).round())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,q,ne,te){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,q,ne,te),Ue.scissor(z.copy(V).multiplyScalar(He).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){Ue.setScissorTest(Q=w)},this.setOpaqueSort=function(w){Ge=w},this.setTransparentSort=function(w){Xe=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,ne=!0){let te=0;if(w){let ee=!1;if(X!==null){const Le=X.texture.format;ee=m.has(Le)}if(ee){const Le=X.texture.type,Be=g.has(Le),De=Pe.getClearColor(),qe=Pe.getClearAlpha(),We=De.r,_t=De.g,St=De.b;Be?(v[0]=We,v[1]=_t,v[2]=St,v[3]=qe,k.clearBufferuiv(k.COLOR,0,v)):(y[0]=We,y[1]=_t,y[2]=St,y[3]=qe,k.clearBufferiv(k.COLOR,0,y))}else te|=k.COLOR_BUFFER_BIT}q&&(te|=k.DEPTH_BUFFER_BIT),ne&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Pe.dispose(),Fe.dispose(),Me.dispose(),T.dispose(),ae.dispose(),we.dispose(),_e.dispose(),Ee.dispose(),ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",B),se.removeEventListener("sessionend",ce),j.stop()};function ze(w){w.preventDefault(),Tu("WebGLRenderer: Context Lost."),N=!0}function Qe(){Tu("WebGLRenderer: Context Restored."),N=!1;const w=L.autoReset,q=Te.enabled,ne=Te.autoUpdate,te=Te.needsUpdate,ee=Te.type;me(),L.autoReset=w,Te.enabled=q,Te.autoUpdate=ne,Te.needsUpdate=te,Te.type=ee}function yt(w){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const q=w.target;q.removeEventListener("dispose",Ne),$e(q)}function $e(w){ft(w),T.remove(w)}function ft(w){const q=T.get(w).programs;q!==void 0&&(q.forEach(function(ne){ve.releaseProgram(ne)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ne,te,ee,Le){q===null&&(q=Ae);const Be=ee.isMesh&&ee.matrixWorld.determinant()<0,De=gt(w,q,ne,te,ee);Ue.setMaterial(te,Be);let qe=ne.index,We=1;if(te.wireframe===!0){if(qe=re.getWireframeAttribute(ne),qe===void 0)return;We=2}const _t=ne.drawRange,St=ne.attributes.position;let rt=_t.start*We,Gt=(_t.start+_t.count)*We;Le!==null&&(rt=Math.max(rt,Le.start*We),Gt=Math.min(Gt,(Le.start+Le.count)*We)),qe!==null?(rt=Math.max(rt,0),Gt=Math.min(Gt,qe.count)):St!=null&&(rt=Math.max(rt,0),Gt=Math.min(Gt,St.count));const cn=Gt-rt;if(cn<0||cn===1/0)return;_e.setup(ee,te,De,ne,qe);let sn,Wt=Je;if(qe!==null&&(sn=le.get(qe),Wt=O,Wt.setIndex(sn)),ee.isMesh)te.wireframe===!0?(Ue.setLineWidth(te.wireframeLinewidth*K()),Wt.setMode(k.LINES)):Wt.setMode(k.TRIANGLES);else if(ee.isLine){let Nn=te.linewidth;Nn===void 0&&(Nn=1),Ue.setLineWidth(Nn*K()),ee.isLineSegments?Wt.setMode(k.LINES):ee.isLineLoop?Wt.setMode(k.LINE_LOOP):Wt.setMode(k.LINE_STRIP)}else ee.isPoints?Wt.setMode(k.POINTS):ee.isSprite&&Wt.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)bu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Nn=ee._multiDrawStarts,et=ee._multiDrawCounts,hi=ee._multiDrawCount,Ot=qe?le.get(qe).bytesPerElement:1,zi=T.get(te).currentProgram.getUniforms();for(let er=0;er<hi;er++)zi.setValue(k,"_gl_DrawID",er),Wt.render(Nn[er]/Ot,et[er])}else if(ee.isInstancedMesh)Wt.renderInstances(rt,cn,ee.count);else if(ne.isInstancedBufferGeometry){const Nn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,et=Math.min(ne.instanceCount,Nn);Wt.renderInstances(rt,cn,et)}else Wt.render(rt,cn)};function R(w,q,ne){w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=ti,w.needsUpdate=!0,Dt(w,q,ne),w.side=Gr,w.needsUpdate=!0,Dt(w,q,ne),w.side=Oi):Dt(w,q,ne)}this.compile=function(w,q,ne=null){ne===null&&(ne=w),S=Me.get(ne),S.init(q),A.push(S),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),w!==ne&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights();const te=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Le=ee.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const De=Le[Be];R(De,ne,ee),te.add(De)}else R(Le,ne,ee),te.add(Le)}),S=A.pop(),te},this.compileAsync=function(w,q,ne=null){const te=this.compile(w,q,ne);return new Promise(ee=>{function Le(){if(te.forEach(function(Be){T.get(Be).currentProgram.isReady()&&te.delete(Be)}),te.size===0){ee(w);return}setTimeout(Le,10)}at.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let C=null;function U(w){C&&C(w)}function B(){j.stop()}function ce(){j.start()}const j=new xx;j.setAnimationLoop(U),typeof self<"u"&&j.setContext(self),this.setAnimationLoop=function(w){C=w,se.setAnimationLoop(w),w===null?j.stop():j.start()},se.addEventListener("sessionstart",B),se.addEventListener("sessionend",ce),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const ne=se.enabled===!0&&se.isPresenting===!0,te=M!==null&&(X===null||ne)&&M.begin(b,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(q),q=se.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,q,X),S=Me.get(w,A.length),S.init(q),A.push(S),Re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),oe.setFromProjectionMatrix(Re,mr,q.reversedDepth),xe=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,xe),x=Fe.get(w,E.length),x.init(),E.push(x),se.enabled===!0&&se.isPresenting===!0){const Be=b.xr.getDepthSensingMesh();Be!==null&&de(Be,q,-1/0,b.sortObjects)}de(w,q,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Ge,Xe),ke=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ke&&Pe.addToRenderList(x,w),this.info.render.frame++,ue===!0&&ye.beginShadows();const ee=S.state.shadowsArray;if(Te.render(ee,w,q),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&M.hasRenderPass())===!1){const Be=x.opaque,De=x.transmissive;if(S.setupLights(),q.isArrayCamera){const qe=q.cameras;if(De.length>0)for(let We=0,_t=qe.length;We<_t;We++){const St=qe[We];Oe(Be,De,w,St)}ke&&Pe.render(w);for(let We=0,_t=qe.length;We<_t;We++){const St=qe[We];Ie(x,w,St,St.viewport)}}else De.length>0&&Oe(Be,De,w,q),ke&&Pe.render(w),Ie(x,w,q)}X!==null&&D===0&&(H.updateMultisampleRenderTarget(X),H.updateRenderTargetMipmap(X)),te&&M.end(b),w.isScene===!0&&w.onAfterRender(b,w,q),_e.resetDefaultState(),Y=-1,$=null,A.pop(),A.length>0?(S=A[A.length-1],ue===!0&&ye.setGlobalState(b.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function de(w,q,ne,te){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){te&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const Be=we.update(w),De=w.material;De.visible&&x.push(w,Be,De,ne,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){const Be=we.update(w),De=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ge.copy(Be.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(De)){const qe=Be.groups;for(let We=0,_t=qe.length;We<_t;We++){const St=qe[We],rt=De[St.materialIndex];rt&&rt.visible&&x.push(w,Be,rt,ne,ge.z,St)}}else De.visible&&x.push(w,Be,De,ne,ge.z,null)}}const Le=w.children;for(let Be=0,De=Le.length;Be<De;Be++)de(Le[Be],q,ne,te)}function Ie(w,q,ne,te){const{opaque:ee,transmissive:Le,transparent:Be}=w;S.setupLightsView(ne),ue===!0&&ye.setGlobalState(b.clippingPlanes,ne),te&&Ue.viewport(G.copy(te)),ee.length>0&&tt(ee,q,ne),Le.length>0&&tt(Le,q,ne),Be.length>0&&tt(Be,q,ne),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Oe(w,q,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[te.id]===void 0){const rt=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[te.id]=new vr(1,1,{generateMipmaps:!0,type:rt?Wr:yi,minFilter:Nr,samples:Math.max(4,Ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Le=S.state.transmissionRenderTarget[te.id],Be=te.viewport||G;Le.setSize(Be.z*b.transmissionResolutionScale,Be.w*b.transmissionResolutionScale);const De=b.getRenderTarget(),qe=b.getActiveCubeFace(),We=b.getActiveMipmapLevel();b.setRenderTarget(Le),b.getClearColor(Z),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear(),ke&&Pe.render(ne);const _t=b.toneMapping;b.toneMapping=_r;const St=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),S.setupLightsView(te),ue===!0&&ye.setGlobalState(b.clippingPlanes,te),tt(w,ne,te),H.updateMultisampleRenderTarget(Le),H.updateRenderTargetMipmap(Le),at.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Gt=0,cn=q.length;Gt<cn;Gt++){const sn=q[Gt],{object:Wt,geometry:Nn,material:et,group:hi}=sn;if(et.side===Oi&&Wt.layers.test(te.layers)){const Ot=et.side;et.side=ti,et.needsUpdate=!0,je(Wt,ne,te,Nn,et,hi),et.side=Ot,et.needsUpdate=!0,rt=!0}}rt===!0&&(H.updateMultisampleRenderTarget(Le),H.updateRenderTargetMipmap(Le))}b.setRenderTarget(De,qe,We),b.setClearColor(Z,P),St!==void 0&&(te.viewport=St),b.toneMapping=_t}function tt(w,q,ne){const te=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Le=w.length;ee<Le;ee++){const Be=w[ee],{object:De,geometry:qe,group:We}=Be;let _t=Be.material;_t.allowOverride===!0&&te!==null&&(_t=te),De.layers.test(ne.layers)&&je(De,q,ne,qe,_t,We)}}function je(w,q,ne,te,ee,Le){w.onBeforeRender(b,q,ne,te,ee,Le),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(b,q,ne,te,w,Le),ee.transparent===!0&&ee.side===Oi&&ee.forceSinglePass===!1?(ee.side=ti,ee.needsUpdate=!0,b.renderBufferDirect(ne,q,te,ee,w,Le),ee.side=Gr,ee.needsUpdate=!0,b.renderBufferDirect(ne,q,te,ee,w,Le),ee.side=Oi):b.renderBufferDirect(ne,q,te,ee,w,Le),w.onAfterRender(b,q,ne,te,ee,Le)}function Dt(w,q,ne){q.isScene!==!0&&(q=Ae);const te=T.get(w),ee=S.state.lights,Le=S.state.shadowsArray,Be=ee.state.version,De=ve.getParameters(w,ee.state,Le,q,ne),qe=ve.getProgramCacheKey(De);let We=te.programs;te.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const _t=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;te.envMap=ae.get(w.envMap||te.environment,_t),te.envMapRotation=te.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Ne),We=new Map,te.programs=We);let St=We.get(qe);if(St!==void 0){if(te.currentProgram===St&&te.lightsStateVersion===Be)return Ke(w,De),St}else De.uniforms=ve.getUniforms(w),w.onBeforeCompile(De,b),St=ve.acquireProgram(De,qe),We.set(qe,St),te.uniforms=De.uniforms;const rt=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(rt.clippingPlanes=ye.uniform),Ke(w,De),te.needsLights=lt(w),te.lightsStateVersion=Be,te.needsLights&&(rt.ambientLightColor.value=ee.state.ambient,rt.lightProbe.value=ee.state.probe,rt.directionalLights.value=ee.state.directional,rt.directionalLightShadows.value=ee.state.directionalShadow,rt.spotLights.value=ee.state.spot,rt.spotLightShadows.value=ee.state.spotShadow,rt.rectAreaLights.value=ee.state.rectArea,rt.ltc_1.value=ee.state.rectAreaLTC1,rt.ltc_2.value=ee.state.rectAreaLTC2,rt.pointLights.value=ee.state.point,rt.pointLightShadows.value=ee.state.pointShadow,rt.hemisphereLights.value=ee.state.hemi,rt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,rt.spotLightMatrix.value=ee.state.spotLightMatrix,rt.spotLightMap.value=ee.state.spotLightMap,rt.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=St,te.uniformsList=null,St}function mt(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=su.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Ke(w,q){const ne=T.get(w);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function gt(w,q,ne,te,ee){q.isScene!==!0&&(q=Ae),H.resetTextureUnits();const Le=q.fog,Be=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,De=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ni,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=ae.get(te.envMap||Be,qe),_t=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,St=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),rt=!!ne.morphAttributes.position,Gt=!!ne.morphAttributes.normal,cn=!!ne.morphAttributes.color;let sn=_r;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(sn=b.toneMapping);const Wt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Nn=Wt!==void 0?Wt.length:0,et=T.get(te),hi=S.state.lights;if(ue===!0&&(xe===!0||w!==$)){const bn=w===$&&te.id===Y;ye.setState(te,w,bn)}let Ot=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==hi.state.version||et.outputColorSpace!==De||ee.isBatchedMesh&&et.batching===!1||!ee.isBatchedMesh&&et.batching===!0||ee.isBatchedMesh&&et.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&et.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&et.instancing===!1||!ee.isInstancedMesh&&et.instancing===!0||ee.isSkinnedMesh&&et.skinning===!1||!ee.isSkinnedMesh&&et.skinning===!0||ee.isInstancedMesh&&et.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&et.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&et.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&et.instancingMorph===!1&&ee.morphTexture!==null||et.envMap!==We||te.fog===!0&&et.fog!==Le||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ye.numPlanes||et.numIntersection!==ye.numIntersection)||et.vertexAlphas!==_t||et.vertexTangents!==St||et.morphTargets!==rt||et.morphNormals!==Gt||et.morphColors!==cn||et.toneMapping!==sn||et.morphTargetsCount!==Nn)&&(Ot=!0):(Ot=!0,et.__version=te.version);let zi=et.currentProgram;Ot===!0&&(zi=Dt(te,q,ee));let er=!1,Es=!1,mo=!1;const Xt=zi.getUniforms(),Pn=et.uniforms;if(Ue.useProgram(zi.program)&&(er=!0,Es=!0,mo=!0),te.id!==Y&&(Y=te.id,Es=!0),er||$!==w){Ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Xt.setValue(k,"projectionMatrix",w.projectionMatrix),Xt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Kr=Xt.map.cameraPosition;Kr!==void 0&&Kr.setValue(k,pe.setFromMatrixPosition(w.matrixWorld)),Ze.logarithmicDepthBuffer&&Xt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Xt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,Es=!0,mo=!0)}if(et.needsLights&&(hi.state.directionalShadowMap.length>0&&Xt.setValue(k,"directionalShadowMap",hi.state.directionalShadowMap,H),hi.state.spotShadowMap.length>0&&Xt.setValue(k,"spotShadowMap",hi.state.spotShadowMap,H),hi.state.pointShadowMap.length>0&&Xt.setValue(k,"pointShadowMap",hi.state.pointShadowMap,H)),ee.isSkinnedMesh){Xt.setOptional(k,ee,"bindMatrix"),Xt.setOptional(k,ee,"bindMatrixInverse");const bn=ee.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Xt.setValue(k,"boneTexture",bn.boneTexture,H))}ee.isBatchedMesh&&(Xt.setOptional(k,ee,"batchingTexture"),Xt.setValue(k,"batchingTexture",ee._matricesTexture,H),Xt.setOptional(k,ee,"batchingIdTexture"),Xt.setValue(k,"batchingIdTexture",ee._indirectTexture,H),Xt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Xt.setValue(k,"batchingColorTexture",ee._colorsTexture,H));const jr=ne.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&be.update(ee,ne,zi),(Es||et.receiveShadow!==ee.receiveShadow)&&(et.receiveShadow=ee.receiveShadow,Xt.setValue(k,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(Pn.envMapIntensity.value=q.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=D3()),Es&&(Xt.setValue(k,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&nt(Pn,mo),Le&&te.fog===!0&&Ve.refreshFogUniforms(Pn,Le),Ve.refreshMaterialUniforms(Pn,te,He,fe,S.state.transmissionRenderTarget[w.id]),su.upload(k,mt(et),Pn,H)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(su.upload(k,mt(et),Pn,H),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Xt.setValue(k,"center",ee.center),Xt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),Xt.setValue(k,"normalMatrix",ee.normalMatrix),Xt.setValue(k,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const bn=te.uniformsGroups;for(let Kr=0,go=bn.length;Kr<go;Kr++){const zp=bn[Kr];Ee.update(zp,zi),Ee.bind(zp,zi)}}return zi}function nt(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function lt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,q,ne){const te=T.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=q,T.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ne,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const ne=T.get(w);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const xt=k.createFramebuffer();this.setRenderTarget=function(w,q=0,ne=0){X=w,I=q,D=ne;let te=null,ee=!1,Le=!1;if(w){const De=T.get(w);if(De.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(k.FRAMEBUFFER,De.__webglFramebuffer),G.copy(w.viewport),z.copy(w.scissor),J=w.scissorTest,Ue.viewport(G),Ue.scissor(z),Ue.setScissorTest(J),Y=-1;return}else if(De.__webglFramebuffer===void 0)H.setupRenderTarget(w);else if(De.__hasExternalTextures)H.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const _t=w.depthTexture;if(De.__boundDepthTexture!==_t){if(_t!==null&&T.has(_t)&&(w.width!==_t.image.width||w.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(w)}}const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const We=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[q])?te=We[q][ne]:te=We[q],ee=!0):w.samples>0&&H.useMultisampledRTT(w)===!1?te=T.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[ne]:te=We,G.copy(w.viewport),z.copy(w.scissor),J=w.scissorTest}else G.copy(ie).multiplyScalar(He).floor(),z.copy(V).multiplyScalar(He).floor(),J=Q;if(ne!==0&&(te=xt),Ue.bindFramebuffer(k.FRAMEBUFFER,te)&&Ue.drawBuffers(w,te),Ue.viewport(G),Ue.scissor(z),Ue.setScissorTest(J),ee){const De=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,ne)}else if(Le){const De=q;for(let qe=0;qe<w.textures.length;qe++){const We=T.get(w.textures[qe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+qe,We.__webglTexture,ne,De)}}else if(w!==null&&ne!==0){const De=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,De.__webglTexture,ne)}Y=-1},this.readRenderTargetPixels=function(w,q,ne,te,ee,Le,Be,De=0){if(!(w&&w.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe){Ue.bindFramebuffer(k.FRAMEBUFFER,qe);try{const We=w.textures[De],_t=We.format,St=We.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+De),!Ze.textureFormatReadable(_t)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(St)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-te&&ne>=0&&ne<=w.height-ee&&k.readPixels(q,ne,te,ee,Se.convert(_t),Se.convert(St),Le)}finally{const We=X!==null?T.get(X).__webglFramebuffer:null;Ue.bindFramebuffer(k.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,q,ne,te,ee,Le,Be,De=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe)if(q>=0&&q<=w.width-te&&ne>=0&&ne<=w.height-ee){Ue.bindFramebuffer(k.FRAMEBUFFER,qe);const We=w.textures[De],_t=We.format,St=We.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+De),!Ze.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,Le.byteLength,k.STREAM_READ),k.readPixels(q,ne,te,ee,Se.convert(_t),Se.convert(St),0);const Gt=X!==null?T.get(X).__webglFramebuffer:null;Ue.bindFramebuffer(k.FRAMEBUFFER,Gt);const cn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await aE(k,cn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Le),k.deleteBuffer(rt),k.deleteSync(cn),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,ne=0){const te=Math.pow(2,-ne),ee=Math.floor(w.image.width*te),Le=Math.floor(w.image.height*te),Be=q!==null?q.x:0,De=q!==null?q.y:0;H.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,Be,De,ee,Le),Ue.unbindTexture()};const Nt=k.createFramebuffer(),ii=k.createFramebuffer();this.copyTextureToTexture=function(w,q,ne=null,te=null,ee=0,Le=0){let Be,De,qe,We,_t,St,rt,Gt,cn;const sn=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(ne!==null)Be=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,qe=ne.isBox3?ne.max.z-ne.min.z:1,We=ne.min.x,_t=ne.min.y,St=ne.isBox3?ne.min.z:0;else{const Pn=Math.pow(2,-ee);Be=Math.floor(sn.width*Pn),De=Math.floor(sn.height*Pn),w.isDataArrayTexture?qe=sn.depth:w.isData3DTexture?qe=Math.floor(sn.depth*Pn):qe=1,We=0,_t=0,St=0}te!==null?(rt=te.x,Gt=te.y,cn=te.z):(rt=0,Gt=0,cn=0);const Wt=Se.convert(q.format),Nn=Se.convert(q.type);let et;q.isData3DTexture?(H.setTexture3D(q,0),et=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),et=k.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),et=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const hi=k.getParameter(k.UNPACK_ROW_LENGTH),Ot=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zi=k.getParameter(k.UNPACK_SKIP_PIXELS),er=k.getParameter(k.UNPACK_SKIP_ROWS),Es=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,sn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,sn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,We),k.pixelStorei(k.UNPACK_SKIP_ROWS,_t),k.pixelStorei(k.UNPACK_SKIP_IMAGES,St);const mo=w.isDataArrayTexture||w.isData3DTexture,Xt=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Pn=T.get(w),jr=T.get(q),bn=T.get(Pn.__renderTarget),Kr=T.get(jr.__renderTarget);Ue.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ue.bindFramebuffer(k.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let go=0;go<qe;go++)mo&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(w).__webglTexture,ee,St+go),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(q).__webglTexture,Le,cn+go)),k.blitFramebuffer(We,_t,Be,De,rt,Gt,Be,De,k.DEPTH_BUFFER_BIT,k.NEAREST);Ue.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||T.has(w)){const Pn=T.get(w),jr=T.get(q);Ue.bindFramebuffer(k.READ_FRAMEBUFFER,Nt),Ue.bindFramebuffer(k.DRAW_FRAMEBUFFER,ii);for(let bn=0;bn<qe;bn++)mo?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pn.__webglTexture,ee,St+bn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pn.__webglTexture,ee),Xt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jr.__webglTexture,Le,cn+bn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jr.__webglTexture,Le),ee!==0?k.blitFramebuffer(We,_t,Be,De,rt,Gt,Be,De,k.COLOR_BUFFER_BIT,k.NEAREST):Xt?k.copyTexSubImage3D(et,Le,rt,Gt,cn+bn,We,_t,Be,De):k.copyTexSubImage2D(et,Le,rt,Gt,We,_t,Be,De);Ue.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Xt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(et,Le,rt,Gt,cn,Be,De,qe,Wt,Nn,sn.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(et,Le,rt,Gt,cn,Be,De,qe,Wt,sn.data):k.texSubImage3D(et,Le,rt,Gt,cn,Be,De,qe,Wt,Nn,sn):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Le,rt,Gt,Be,De,Wt,Nn,sn.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Le,rt,Gt,sn.width,sn.height,Wt,sn.data):k.texSubImage2D(k.TEXTURE_2D,Le,rt,Gt,Be,De,Wt,Nn,sn);k.pixelStorei(k.UNPACK_ROW_LENGTH,hi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zi),k.pixelStorei(k.UNPACK_SKIP_ROWS,er),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Es),Le===0&&q.generateMipmaps&&k.generateMipmap(et),Ue.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&H.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?H.setTextureCube(w,0):w.isData3DTexture?H.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?H.setTexture2DArray(w,0):H.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){I=0,D=0,X=null,Ue.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}function r_(r,e){if(e===$b)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Af||e===Qv){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Af)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function O3(r){const e=new Map,t=new Map,n=r.clone();return Ex(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ex(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Ex(r.children[n],e.children[n],t)}class U3 extends wa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new z3(t)}),this.register(function(t){return new H3(t)}),this.register(function(t){return new Z3(t)}),this.register(function(t){return new J3(t)}),this.register(function(t){return new Q3(t)}),this.register(function(t){return new W3(t)}),this.register(function(t){return new X3(t)}),this.register(function(t){return new q3(t)}),this.register(function(t){return new Y3(t)}),this.register(function(t){return new V3(t)}),this.register(function(t){return new $3(t)}),this.register(function(t){return new G3(t)}),this.register(function(t){return new K3(t)}),this.register(function(t){return new j3(t)}),this.register(function(t){return new B3(t)}),this.register(function(t){return new s_(t,wt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new s_(t,wt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new eP(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=bl.extractUrlBase(e);o=bl.resolveURL(c,this.path)}else o=bl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new gx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ax){try{o[wt.KHR_BINARY_GLTF]=new tP(e)}catch(h){i&&i(h);return}s=JSON.parse(o[wt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new pP(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case wt.KHR_MATERIALS_UNLIT:o[h]=new k3;break;case wt.KHR_DRACO_MESH_COMPRESSION:o[h]=new nP(s,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:o[h]=new iP;break;case wt.KHR_MESH_QUANTIZATION:o[h]=new rP;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function F3(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function dn(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class B3{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new st(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ni);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ru(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new MA(u),c.distance=h;break;case"spot":c=new vA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),or(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class k3{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Or}extendParams(e,t,n){const i=[];e.color=new st(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ni),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,In))}return Promise.all(i)}}class V3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class z3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new bt(s,s)}return Promise.all(i)}}class H3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class G3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class W3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ni)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,In)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class X3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class q3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(s[0],s[1],s[2],ni),Promise.all(i)}}class Y3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class $3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(s[0],s[1],s[2],ni),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,In)),Promise.all(i)}}class j3{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class K3{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Sr:null}extendMaterialParams(e,t){const n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Z3{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class J3{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Q3{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class s_{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class eP{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Li.TRIANGLES&&c.mode!==Li.TRIANGLE_STRIP&&c.mode!==Li.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const p of h){const _=new ct,m=new F,g=new pt,v=new F(1,1,1),y=new YE(p.geometry,p.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,g,v));for(const x in l)if(x==="_COLOR_0"){const S=l[x];y.instanceColor=new Rf(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,l[x]);$t.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Ax="glTF",Ha=12,o_={JSON:1313821514,BIN:5130562};class tP{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ax)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ha,s=new DataView(e,Ha);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===o_.JSON){const c=new Uint8Array(e,Ha+o,a);this.content=n.decode(c)}else if(l===o_.BIN){const c=Ha+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Df[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Df[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ra[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(f)},a,c,ni,d)})})}}class iP{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rP{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}}class wx extends ba{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,v=1-m,y=g-d+h;for(let x=0;x!==a;x++){const S=o[_+x+a],E=o[_+x+l]*u,A=o[p+x+a],M=o[p+x]*u;s[x]=v*S+y*E+m*A+g*M}return s}}const sP=new pt;class oP extends wx{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return sP.fromArray(s).normalize().toArray(s),s}}const Li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},a_={9728:Mn,9729:yn,9984:qv,9985:Qc,9986:rl,9987:Nr},l_={33071:pr,33648:Mu,10497:ga},$h={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Df={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aP={CUBICSPLINE:void 0,LINEAR:kl,STEP:Bl},jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lP(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Hu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gr})),r.DefaultMaterial}function Ns(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function or(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cP(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function uP(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hP(r){let e;const t=r.extensions&&r.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=r.indices+":"+Kh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Kh(r.targets[n]);return e}function Kh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Nf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dP(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fP=new ct;class pP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new gA(this.options.manager):this.textureLoader=new TA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ns(s,a,i),or(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(bl.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$h[i.type],a=ra[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ft(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=$h[i.type],c=ra[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==h){const g=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let y=t.cache.get(v);y||(_=new c(a,g*f,i.count*f/u),y=new Pp(_,f/u),t.cache.add(v,y)),m=new Xl(y,l,d%f/u,p)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Ft(_,l,p);if(i.sparse!==void 0){const g=$h.SCALAR,v=ra[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new v(o[1],y,i.sparse.count*g),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,M=S.length;A<M;A++){const b=S[A];if(m.setX(b,E[A*l]),l>=2&&m.setY(b,E[A*l+1]),l>=3&&m.setZ(b,E[A*l+2]),l>=4&&m.setW(b,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=a_[d.magFilter]||yn,u.minFilter=a_[d.minFilter]||Nr,u.wrapS=l_[d.wrapS]||ga,u.wrapT=l_[d.wrapT]||ga,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Mn&&u.minFilter!==yn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const m=new Rn(_);m.needsUpdate=!0,d(m)}),t.load(bl.resolveURL(h,s.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),or(h,o),h.userData.mimeType=o.mimeType||dP(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[wt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lx,Ki.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new po,Ki.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[wt.KHR_MATERIALS_UNLIT]){const h=i[wt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new st(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ni),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,In)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Oi);const u=s.alphaMode||jh.OPAQUE;if(u===jh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===jh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Or&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new bt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Or&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Or){const h=s.emissiveFactor;a.emissive=new st().setRGB(h[0],h[1],h[2],ni)}return s.emissiveTexture!==void 0&&o!==Or&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,In)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),or(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ns(i,h,s),h})}createUniqueName(e){const t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return c_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=hP(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=c_(new rn,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?lP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const _=u[f],m=o[f];let g;const v=c[f];if(m.mode===Li.TRIANGLES||m.mode===Li.TRIANGLE_STRIP||m.mode===Li.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new ox(_,v):new Gn(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Li.TRIANGLE_STRIP?g.geometry=r_(g.geometry,Qv):m.mode===Li.TRIANGLE_FAN&&(g.geometry=r_(g.geometry,Af));else if(m.mode===Li.LINES)g=new ql(_,v);else if(m.mode===Li.LINE_STRIP)g=new Vu(_,v);else if(m.mode===Li.LINE_LOOP)g=new ZE(_,v);else if(m.mode===Li.POINTS)g=new JE(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&uP(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),or(g,s),m.extensions&&Ns(i,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Ns(i,h[0],s),h[0];const d=new bi;s.extensions&&Ns(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jn(an.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),or(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ct;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ta(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let y=0,x=d.length;y<x;y++){const S=d[y],E=f[y],A=p[y],M=_[y],b=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const N=n._createAnimationTracks(S,E,A,M,b);if(N)for(let I=0;I<N.length;I++)g.push(N[I])}const v=new Pf(s,void 0,g);return or(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fP)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,p=h[0];u.pivot=new F().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ax:c.length>1?u=new bi:c.length===1?u=c[0]:u=new $t,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),or(u,s),s.extensions&&Ns(n,u,s),s.matrix!==void 0){const h=new ct;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new bi;n.name&&(s.name=i.createUniqueName(n.name)),or(s,n),n.extensions&&Ns(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?s.add(O3(d)):s.add(d)}const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Ki||d instanceof Rn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];rs[s.path]===rs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(rs[s.path]){case rs.weights:c=Ma;break;case rs.rotation:c=ya;break;case rs.translation:case rs.scale:c=Sa;break;default:switch(n.itemSize){case 1:c=Ma;break;case 2:case 3:default:c=Sa;break}break}const u=i.interpolation!==void 0?aP[i.interpolation]:kl,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+rs[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ya?oP:wx;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mP(r,e,t){const n=e.attributes,i=new $r;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=Nf(ra[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Nf(ra[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new yr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function c_(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Df[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return It.workingColorSpace!==ni&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),or(r,e),mP(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cP(r,e.targets,t):r})}/*!
 * @pixiv/three-vrm v3.5.1
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Uc=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Ut=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),u_=class extends $t{constructor(r){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${r}`,this.expressionName=r,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(r){this._binds.push(r)}deleteBind(r){const e=this._binds.indexOf(r);e>=0&&this._binds.splice(e,1)}applyWeight(r){var e;let t=this.outputWeight;t*=(e=r?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(r=>r.clearAppliedWeight())}};function Rx(r,e,t){var n,i;const s=r.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(i=s.meshes)==null?void 0:i[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function h_(r,e){return Ut(this,null,function*(){const t=yield r.parser.getDependency("node",e);return Rx(r,e,t)})}function d_(r){return Ut(this,null,function*(){const e=yield r.parser.getDependencies("node"),t=new Map;return e.forEach((n,i)=>{const s=Rx(r,i,n);s!=null&&t.set(i,s)}),t})}var Of={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Cx(r){return Math.max(Math.min(r,1),0)}var f_=class Px{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(Of));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)&&(e[n]=i)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(Of));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)||(e[n]=i)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Px().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Cx(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const i=t.expressionName;this.blinkExpressionNames.indexOf(i)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(i)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(i)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(i=>{e-=i.overrideBlinkAmount,t-=i.overrideLookAtAmount,n-=i.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Ga={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},gP={_Color:Ga.Color,_EmissionColor:Ga.EmissionColor,_ShadeColor:Ga.ShadeColor,_RimColor:Ga.RimColor,_OutlineColor:Ga.OutlineColor},_P=new st,Ix=class Lx{constructor({material:e,type:t,targetValue:n,targetAlpha:i}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=i??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:i,deltaValue:s}=t,o=this.material[i];o?.add(_P.copy(s).multiplyScalar(e))}if(n!=null){const{propertyName:i,deltaValue:s}=n;this.material[i]!=null&&(this.material[i]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:i}=e,s=this.material[n];s?.copy(i)}if(t!=null){const{propertyName:n,initialValue:i}=t;this.material[n]!=null&&(this.material[n]=i)}}_initColorBindState(){var e,t,n;const{material:i,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const u=i[l].clone(),h=new st(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,n;const{material:i,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=i[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Lx._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Ix._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var p_=Ix,wu=class{constructor({primitives:r,index:e,weight:t}){this.primitives=r,this.index=e,this.weight=t}applyWeight(r){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*r)})}clearAppliedWeight(){this.primitives.forEach(r=>{var e;((e=r.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(r.morphTargetInfluences[this.index]=0)})}},m_=new bt,Dx=class Nx{constructor({material:e,scale:t,offset:n}){var i,s;this.material=e,this.scale=t,this.offset=n;const o=(i=Object.entries(Nx._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:i[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(m_.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(m_.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Dx._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var g_=Dx,vP=new Set(["1.0","1.0-beta"]),Ox=class Ux{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Ut(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Ut(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return Ut(this,null,function*(){var t,n;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!vP.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(Of)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});const h=new f_;return yield Promise.all(Array.from(u.entries()).map(d=>Ut(this,[d],function*([f,p]){var _,m,g,v,y,x,S;const E=new u_(f);if(e.scene.add(E),E.isBinary=(_=p.isBinary)!=null?_:!1,E.overrideBlink=(m=p.overrideBlink)!=null?m:"none",E.overrideLookAt=(g=p.overrideLookAt)!=null?g:"none",E.overrideMouth=(v=p.overrideMouth)!=null?v:"none",(y=p.morphTargetBinds)==null||y.forEach(A=>Ut(this,null,function*(){var M;if(A.node===void 0||A.index===void 0)return;const b=yield h_(e,A.node),N=A.index;if(!b.every(I=>Array.isArray(I.morphTargetInfluences)&&N<I.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${p.name} attempts to index morph #${N} but not found.`);return}E.addBind(new wu({primitives:b,index:N,weight:(M=A.weight)!=null?M:1}))})),p.materialColorBinds||p.textureTransformBinds){const A=[];e.scene.traverse(M=>{const b=M.material;b&&(Array.isArray(b)?A.push(...b):A.push(b))}),(x=p.materialColorBinds)==null||x.forEach(M=>Ut(this,null,function*(){A.filter(N=>{var I;const D=(I=this.parser.associations.get(N))==null?void 0:I.materials;return M.material===D}).forEach(N=>{E.addBind(new p_({material:N,type:M.type,targetValue:new st().fromArray(M.targetValue),targetAlpha:M.targetValue[3]}))})})),(S=p.textureTransformBinds)==null||S.forEach(M=>Ut(this,null,function*(){A.filter(N=>{var I;const D=(I=this.parser.associations.get(N))==null?void 0:I.materials;return M.material===D}).forEach(N=>{var I,D;E.addBind(new g_({material:N,offset:new bt().fromArray((I=M.offset)!=null?I:[0,0]),scale:new bt().fromArray((D=M.scale)!=null?D:[1,1])}))})}))}h.registerExpression(E)}))),h})}_v0Import(e){return Ut(this,null,function*(){var t;const n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;const s=i.blendShapeMaster;if(!s)return null;const o=new f_,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>Ut(this,null,function*(){var u;const h=c.presetName,d=h!=null&&Ux.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);const p=new u_(f);e.scene.add(p),p.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(m=>Ut(this,null,function*(){var g;if(m.mesh===void 0||m.index===void 0)return;const v=[];(g=n.nodes)==null||g.forEach((x,S)=>{x.mesh===m.mesh&&v.push(S)});const y=m.index;yield Promise.all(v.map(x=>Ut(this,null,function*(){var S;const E=yield h_(e,x);if(!E.every(A=>Array.isArray(A.morphTargetInfluences)&&y<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${y}th morph but not found.`);return}p.addBind(new wu({primitives:E,index:y,weight:.01*((S=m.weight)!=null?S:100)}))})))}));const _=c.materialValues;_&&_.length!==0&&_.forEach(m=>{if(m.materialName===void 0||m.propertyName===void 0||m.targetValue===void 0)return;const g=[];e.scene.traverse(y=>{if(y.material){const x=y.material;Array.isArray(x)?g.push(...x.filter(S=>(S.name===m.materialName||S.name===m.materialName+" (Outline)")&&g.indexOf(S)===-1)):x.name===m.materialName&&g.indexOf(x)===-1&&g.push(x)}});const v=m.propertyName;g.forEach(y=>{if(v==="_MainTex_ST"){const S=new bt(m.targetValue[0],m.targetValue[1]),E=new bt(m.targetValue[2],m.targetValue[3]);E.y=1-E.y-S.y,p.addBind(new g_({material:y,scale:S,offset:E}));return}const x=gP[v];if(x){p.addBind(new p_({material:y,type:x,targetValue:new st().fromArray(m.targetValue),targetAlpha:m.targetValue[3]}));return}console.warn(v+" is not supported")})}),o.registerExpression(p)}))),o})}};Ox.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var xP=Ox,Fp=class Go{constructor(e,t){this._firstPersonOnlyLayer=Go.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Go.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Go(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Go.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Go.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(i=>{n.type==="firstPersonOnly"?(i.layers.set(this._firstPersonOnlyLayer),i.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(i.layers.set(this._thirdPersonOnlyLayer),i.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(i)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,i){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&i.includes(h[0])||u[1]>0&&i.includes(h[1])||u[2]>0&&i.includes(h[2])||u[3]>0&&i.includes(h[3]))continue;const d=t[l],f=n[l];if(d[0]>0&&i.includes(f[0])||d[1]>0&&i.includes(f[1])||d[2]>0&&i.includes(f[2])||d[3]>0&&i.includes(f[3]))continue;const p=t[c],_=n[c];p[0]>0&&i.includes(_[0])||p[1]>0&&i.includes(_[1])||p[2]>0&&i.includes(_[2])||p[3]>0&&i.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const n=new ox(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const i=n.geometry,s=i.getAttribute("skinIndex"),o=s instanceof Dg?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);const l=i.getAttribute("skinWeight"),c=l instanceof Dg?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);const h=i.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),p=[];for(let _=0;_<f;_++)p[_]=d[_];return i.setIndex(p),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ta(e.skeleton.bones,e.skeleton.boneInverses),new ct),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const i=this._createErasedMesh(t,n);e.add(i)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new bi;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const i=n;this._createHeadlessModelForSkinnedMesh(t,i)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Fp.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Fp.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var __=Fp,MP=new Set(["1.0","1.0-beta"]),yP=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(r){this.parser=r}afterRoot(r){return Ut(this,null,function*(){const e=r.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");r.userData.vrmFirstPerson=yield this._import(r,e)}})}_import(r,e){return Ut(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(r,e);if(t)return t;const n=yield this._v0Import(r,e);return n||null})}_v1Import(r,e){return Ut(this,null,function*(){var t,n;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!MP.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson,c=[],u=yield d_(r);return Array.from(u.entries()).forEach(([h,d])=>{var f,p;const _=(f=l?.meshAnnotations)==null?void 0:f.find(m=>m.node===h);c.push({meshes:d,type:(p=_?.type)!=null?p:"auto"})}),new __(e,c)})}_v0Import(r,e){return Ut(this,null,function*(){var t;const n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;const s=i.firstPerson;if(!s)return null;const o=[],a=yield d_(r);return Array.from(a.entries()).forEach(([l,c])=>{const u=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new __(e,o)})}_convertV0FlagToV1Type(r){return r==="FirstPersonOnly"?"firstPersonOnly":r==="ThirdPersonOnly"?"thirdPersonOnly":r==="Both"?"both":"auto"}},v_=new F,x_=new F,SP=new pt,M_=class extends bi{constructor(r){super(),this.vrmHumanoid=r,this._boneAxesMap=new Map,Object.values(r.humanBones).forEach(e=>{const t=new VA(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(r=>{r.geometry.dispose(),r.material.dispose()})}updateMatrixWorld(r){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(v_,SP,x_);const n=v_.set(.1,.1,.1).divide(x_);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(r)}},Zh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],TP={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Fx(r){return r.invert?r.invert():r.inverse(),r}var Os=new F,Us=new pt,Uf=class{constructor(r){this.humanBones=r,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const r={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(Os.copy(n.position),Us.copy(n.quaternion),r[t]={position:Os.toArray(),rotation:Us.toArray()})}),r}getPose(){const r={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;Os.set(0,0,0),Us.identity();const i=this.restPose[t];i?.position&&Os.fromArray(i.position).negate(),i?.rotation&&Fx(Us.fromArray(i.rotation)),Os.add(n.position),Us.premultiply(n.quaternion),r[t]={position:Os.toArray(),rotation:Us.toArray()}}),r}setPose(r){Object.entries(r).forEach(([e,t])=>{const n=e,i=this.getBoneNode(n);if(!i)return;const s=this.restPose[n];s&&(t?.position&&(i.position.fromArray(t.position),s.position&&i.position.add(Os.fromArray(s.position))),t?.rotation&&(i.quaternion.fromArray(t.rotation),s.rotation&&i.quaternion.multiply(Us.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([r,e])=>{const t=this.getBoneNode(r);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(r){var e;return(e=this.humanBones[r])!=null?e:void 0}getBoneNode(r){var e,t;return(t=(e=this.humanBones[r])==null?void 0:e.node)!=null?t:null}},Jh=new F,bP=new pt,EP=new F,y_=class Bx extends Uf{static _setupTransforms(e){const t=new $t;t.name="VRMHumanoidRig";const n={},i={},s={};Zh.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=new F,h=new pt;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(u,h,Jh),n[a]=u,i[a]=c.quaternion.clone();const d=new pt;(l=c.parent)==null||l.matrixWorld.decompose(Jh,d,Jh),s[a]=d}});const o={};return Zh.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=n[a];let h=a,d;for(;d==null&&(h=TP[h],h!=null);)d=n[h];const f=new $t;f.name="Normalized_"+c.name,(h?(l=o[h])==null?void 0:l.node:t).add(f),f.position.copy(u),d&&f.position.sub(d),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:i}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:i,boneRotations:s}=Bx._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=i,this._boneRotations=s}update(){Zh.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),i=this._parentWorldRotations[e],s=bP.copy(i).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(i).premultiply(s).multiply(o),e==="hips"){const a=n.getWorldPosition(EP);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},S_=class kx{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new Uf(e),this._normalizedHumanBones=new y_(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Uf(e.humanBones),this._normalizedHumanBones=new y_(this._rawHumanBones),this}clone(){return new kx(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},AP={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},wP=new Set(["1.0","1.0-beta"]),T_={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},RP=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(r){return Ut(this,null,function*(){r.userData.vrmHumanoid=yield this._import(r)})}_import(r){return Ut(this,null,function*(){const e=yield this._v1Import(r);if(e)return e;const t=yield this._v0Import(r);return t||null})}_v1Import(r){return Ut(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!wP.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>Ut(this,[h],function*([d,f]){let p=d;const _=f.node;if(l){const g=T_[p];g!=null&&(p=g)}const m=yield this.parser.getDependency("node",_);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${p} (index = ${_}) does not exist`);return}c[p]={node:m}}))));const u=new S_(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){const h=new M_(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(r){return Ut(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const i=n.humanoid;if(!i)return null;const s={};i.humanBones!=null&&(yield Promise.all(i.humanBones.map(a=>Ut(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;const u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const h=T_[l],d=h??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:u}}))));const o=new S_(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(r.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new M_(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(r){const e=Object.values(AP).filter(t=>r[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return r}},b_=class extends rn{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Ft(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ft(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,r=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let r=0;r<64;r++){const e=r/63*this._currentTheta;this._attrPos.setXYZ(r+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<63;r++)this._attrIndex.setXYZ(r*3,0,r+1,r+2);this._attrIndex.needsUpdate=!0}},CP=class extends rn{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new F,this._currentTail=new F,this._attrPos=new Ft(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ft(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,r=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){const e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Fc=new pt,E_=new pt,Wa=new F,A_=new F,w_=Math.sqrt(2)/2,PP=new pt(0,0,-w_,w_),IP=new F(0,1,0),LP=class extends bi{constructor(r){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=r;{const e=new b_;e.radius=.5;const t=new Or({color:65280,transparent:!0,opacity:.5,side:Oi,depthTest:!1,depthWrite:!1});this._meshPitch=new Gn(e,t),this.add(this._meshPitch)}{const e=new b_;e.radius=.5;const t=new Or({color:16711680,transparent:!0,opacity:.5,side:Oi,depthTest:!1,depthWrite:!1});this._meshYaw=new Gn(e,t),this.add(this._meshYaw)}{const e=new CP;e.radius=.1;const t=new po({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new ql(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(r){const e=an.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=an.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Wa),this.vrmLookAt.getLookAtWorldQuaternion(Fc),Fc.multiply(this.vrmLookAt.getFaceFrontQuaternion(E_)),this._meshYaw.position.copy(Wa),this._meshYaw.quaternion.copy(Fc),this._meshPitch.position.copy(Wa),this._meshPitch.quaternion.copy(Fc),this._meshPitch.quaternion.multiply(E_.setFromAxisAngle(IP,e)),this._meshPitch.quaternion.multiply(PP);const{target:n,autoUpdate:i}=this.vrmLookAt;n!=null&&i&&(n.getWorldPosition(A_).sub(Wa),this._lineTarget.geometry.tail.copy(A_),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Wa)),super.updateMatrixWorld(r)}},DP=new F,NP=new F;function Ff(r,e){return r.matrixWorld.decompose(DP,e,NP),e}function ou(r){return[Math.atan2(-r.z,r.x),Math.atan2(r.y,Math.sqrt(r.x*r.x+r.z*r.z))]}function R_(r){const e=Math.round(r/2/Math.PI);return r-2*Math.PI*e}var C_=new F(0,0,1),OP=new F,UP=new F,FP=new F,BP=new pt,Qh=new pt,P_=new pt,kP=new pt,ed=new Ri,Vx=class zx{constructor(e,t){this.offsetFromHeadBone=new F,this.autoUpdate=!0,this.faceFront=new F(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new pt)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Ri)}getEuler(e){return e.set(an.DEG2RAD*this._pitch,an.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new zx(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Ff(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(C_)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=ou(this.faceFront);return ed.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(ed).premultiply(kP.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Qh),this.getFaceFrontQuaternion(P_),e.copy(C_).applyQuaternion(Qh).applyQuaternion(P_).applyEuler(this.getEuler(ed))}lookAt(e){const t=BP.copy(this._restHeadWorldQuaternion).multiply(Fx(this.getLookAtWorldQuaternion(Qh))),n=this.getLookAtWorldPosition(UP),i=FP.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=ou(this.faceFront),[a,l]=ou(i),c=R_(a-s),u=R_(o-l);this._yaw=an.RAD2DEG*c,this._pitch=an.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(OP)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Vx.EULER_ORDER="YXZ";var VP=Vx,zP=new F(0,0,1),ir=new pt,Uo=new pt,Pi=new Ri(0,0,0,"YXZ"),au=class{constructor(r,e,t,n,i){this.humanoid=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i,this.faceFront=new F(0,0,1),this._restQuatLeftEye=new pt,this._restQuatRightEye=new pt,this._restLeftEyeParentWorldQuat=new pt,this._restRightEyeParentWorldQuat=new pt;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Ff(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Ff(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(r,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),i=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Pi.x=-an.DEG2RAD*this.rangeMapVerticalDown.map(-e):Pi.x=an.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Pi.y=-an.DEG2RAD*this.rangeMapHorizontalInner.map(-r):Pi.y=an.DEG2RAD*this.rangeMapHorizontalOuter.map(r),ir.setFromEuler(Pi),this._getWorldFaceFrontQuat(Uo),i.quaternion.copy(Uo).multiply(ir).multiply(Uo.invert()),ir.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(i.quaternion).multiply(ir).premultiply(ir.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Pi.x=-an.DEG2RAD*this.rangeMapVerticalDown.map(-e):Pi.x=an.DEG2RAD*this.rangeMapVerticalUp.map(e),r<0?Pi.y=-an.DEG2RAD*this.rangeMapHorizontalOuter.map(-r):Pi.y=an.DEG2RAD*this.rangeMapHorizontalInner.map(r),ir.setFromEuler(Pi),this._getWorldFaceFrontQuat(Uo),s.quaternion.copy(Uo).multiply(ir).multiply(Uo.invert()),ir.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(ir).premultiply(ir.invert()).multiply(this._restQuatRightEye))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=an.RAD2DEG*r.y,t=an.RAD2DEG*r.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(r){if(this.faceFront.distanceToSquared(zP)<.01)return r.identity();const[e,t]=ou(this.faceFront);return Pi.set(0,.5*Math.PI+e,t,"YZX"),r.setFromEuler(Pi)}};au.type="bone";var Bf=class{constructor(r,e,t,n,i){this.expressions=r,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i}applyYawPitch(r,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),r<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-r))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(r)))}lookAt(r){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=an.RAD2DEG*r.y,t=an.RAD2DEG*r.x;this.applyYawPitch(e,t)}};Bf.type="expression";var I_=class{constructor(r,e){this.inputMaxValue=r,this.outputScale=e}map(r){return this.outputScale*Cx(r/this.inputMaxValue)}},HP=new Set(["1.0","1.0-beta"]),Bc=.01,GP=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(r,e){this.parser=r,this.helperRoot=e?.helperRoot}afterRoot(r){return Ut(this,null,function*(){const e=r.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=r.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");r.userData.vrmLookAt=yield this._import(r,e,t)}})}_import(r,e,t){return Ut(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(r,e,t);if(n)return n;const i=yield this._v0Import(r,e,t);return i||null})}_v1Import(r,e,t){return Ut(this,null,function*(){var n,i,s;const o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const l=(i=o.extensions)==null?void 0:i.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!HP.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const u=l.lookAt;if(!u)return null;const h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),p=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),_=this._v1ImportRangeMap(u.rangeMapVerticalUp,h);let m;u.type==="expression"?m=new Bf(t,d,f,p,_):m=new au(e,d,f,p,_);const g=this._importLookAt(e,m);return g.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),g})}_v1ImportRangeMap(r,e){var t,n;let i=(t=r?.inputMaxValue)!=null?t:90;const s=(n=r?.outputScale)!=null?n:e;return i<Bc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),i=Bc),new I_(i,s)}_v0Import(r,e,t){return Ut(this,null,function*(){var n,i,s,o;const l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),p=this._v0ImportDegreeMap(c.lookAtVerticalUp,u);let _;c.lookAtTypeName==="BlendShape"?_=new Bf(t,h,d,f,p):_=new au(e,h,d,f,p);const m=this._importLookAt(e,_);return c.firstPersonBoneOffset?m.offsetFromHeadBone.set((i=c.firstPersonBoneOffset.x)!=null?i:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):m.offsetFromHeadBone.set(0,.06,0),m.faceFront.set(0,0,-1),_ instanceof au&&_.faceFront.set(0,0,-1),m})}_v0ImportDegreeMap(r,e){var t,n;const i=r?.curve;JSON.stringify(i)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=r?.xRange)!=null?t:90;const o=(n=r?.yRange)!=null?n:e;return s<Bc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=Bc),new I_(s,o)}_importLookAt(r,e){const t=new VP(r,e);if(this.helperRoot){const n=new LP(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function WP(r,e){return typeof r!="string"||r===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(r)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(r)||/^data:.*,.*$/i.test(r)||/^blob:.*$/i.test(r)?r:e+r)}var XP=new Set(["1.0","1.0-beta"]),qP=class{get name(){return"VRMMetaLoaderPlugin"}constructor(r,e){var t,n,i;this.parser=r,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(i=e?.acceptV0Meta)!=null?i:!0}afterRoot(r){return Ut(this,null,function*(){r.userData.vrmMeta=yield this._import(r)})}_import(r){return Ut(this,null,function*(){const e=yield this._v1Import(r);if(e!=null)return e;const t=yield this._v0Import(r);return t??null})}_v1Import(r){return Ut(this,null,function*(){var e,t,n;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!XP.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(r){return Ut(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const i=n.meta;if(!i)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&i.texture!=null&&i.texture!==-1&&(s=yield this.parser.getDependency("texture",i.texture)),{metaVersion:"0",allowedUserName:i.allowedUserName,author:i.author,commercialUssageName:i.commercialUssageName,contactInformation:i.contactInformation,licenseName:i.licenseName,otherLicenseUrl:i.otherLicenseUrl,otherPermissionUrl:i.otherPermissionUrl,reference:i.reference,sexualUssageName:i.sexualUssageName,texture:s??void 0,title:i.title,version:i.version,violentUssageName:i.violentUssageName}})}_extractGLTFImage(r){return Ut(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[r];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image doesn't exist`),null;let i=n.uri;if(n.bufferView!=null){const o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});i=URL.createObjectURL(a)}return i==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${r}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new _x().loadAsync(WP(i,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},YP=class{constructor(r){this.scene=r.scene,this.meta=r.meta,this.humanoid=r.humanoid,this.expressionManager=r.expressionManager,this.firstPerson=r.firstPerson,this.lookAt=r.lookAt}update(r){this.humanoid.update(),this.lookAt&&this.lookAt.update(r),this.expressionManager&&this.expressionManager.update()}},$P=class extends YP{constructor(r){super(r),this.materials=r.materials,this.springBoneManager=r.springBoneManager,this.nodeConstraintManager=r.nodeConstraintManager}update(r){super.update(r),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(r),this.materials&&this.materials.forEach(e=>{e.update&&e.update(r)})}},jP=Object.defineProperty,L_=Object.getOwnPropertySymbols,KP=Object.prototype.hasOwnProperty,ZP=Object.prototype.propertyIsEnumerable,D_=(r,e,t)=>e in r?jP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,N_=(r,e)=>{for(var t in e||(e={}))KP.call(e,t)&&D_(r,t,e[t]);if(L_)for(var t of L_(e))ZP.call(e,t)&&D_(r,t,e[t]);return r},Ks=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),JP={"":3e3,srgb:3001};function QP(r,e){parseInt(co,10)>=152?r.colorSpace=e:r.encoding=JP[e]}var eI=class{get pending(){return Promise.all(this._pendings)}constructor(r,e){this._parser=r,this._materialParams=e,this._pendings=[]}assignPrimitive(r,e){e!=null&&(this._materialParams[r]=e)}assignColor(r,e,t){if(e!=null){const n=new st().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[r]=n}}assignTexture(r,e,t){return Ks(this,null,function*(){const n=Ks(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,r,e),t&&QP(this._materialParams[r],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(r,e,t){return Ks(this,null,function*(){return this.assignTexture(r,e!=null?{index:e}:void 0,t)})}},tI=`// #define PHONG

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

}`,nI=`// #define PHONG

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
`,iI={None:"none"},O_={None:"none",ScreenCoordinates:"screenCoordinates"},rI={3e3:"",3001:"srgb"};function td(r){return parseInt(co,10)>=152?r.colorSpace:rI[r.encoding]}var sI=class extends Ji{constructor(r={}){var e;super({vertexShader:tI,fragmentShader:nI}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Ep,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=iI.None,this._outlineWidthMode=O_.None,this._isOutline=!1,r.transparentWithZWrite&&(r.depthWrite=!0),delete r.transparentWithZWrite,r.fog=!0,r.lights=!0,r.clipping=!0,this.uniforms=dx.merge([Ce.common,Ce.normalmap,Ce.emissivemap,Ce.fog,Ce.lights,{litFactor:{value:new st(1,1,1)},mapUvTransform:{value:new ot},colorAlpha:{value:1},normalMapUvTransform:{value:new ot},shadeColorFactor:{value:new st(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new ot},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new ot},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new st(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new ot},parametricRimColorFactor:{value:new st(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new ot},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new st(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new ot},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new ot},outlineWidthFactor:{value:0},outlineColorFactor:{value:new st(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new ot},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=r.uniforms)!=null?e:{}]),this.setValues(r),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${td(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${td(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${td(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(co,10),i=Object.entries(N_(N_({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=i+t.vertexShader,t.fragmentShader=i+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(r){this.uniforms.litFactor.value=r}get map(){return this.uniforms.map.value}set map(r){this.uniforms.map.value=r}get normalMap(){return this.uniforms.normalMap.value}set normalMap(r){this.uniforms.normalMap.value=r}get normalScale(){return this.uniforms.normalScale.value}set normalScale(r){this.uniforms.normalScale.value=r}get emissive(){return this.uniforms.emissive.value}set emissive(r){this.uniforms.emissive.value=r}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(r){this.uniforms.emissiveIntensity.value=r}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(r){this.uniforms.emissiveMap.value=r}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(r){this.uniforms.shadeColorFactor.value=r}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(r){this.uniforms.shadeMultiplyTexture.value=r}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(r){this.uniforms.shadingShiftFactor.value=r}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(r){this.uniforms.shadingShiftTexture.value=r}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(r){this.uniforms.shadingShiftTextureScale.value=r}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(r){this.uniforms.shadingToonyFactor.value=r}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(r){this.uniforms.giEqualizationFactor.value=r}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(r){this.uniforms.matcapFactor.value=r}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(r){this.uniforms.matcapTexture.value=r}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(r){this.uniforms.parametricRimColorFactor.value=r}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(r){this.uniforms.rimMultiplyTexture.value=r}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(r){this.uniforms.rimLightingMixFactor.value=r}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(r){this.uniforms.parametricRimFresnelPowerFactor.value=r}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(r){this.uniforms.parametricRimLiftFactor.value=r}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(r){this.uniforms.outlineWidthMultiplyTexture.value=r}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(r){this.uniforms.outlineWidthFactor.value=r}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(r){this.uniforms.outlineColorFactor.value=r}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(r){this.uniforms.outlineLightingMixFactor.value=r}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(r){this.uniforms.uvAnimationMaskTexture.value=r}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(r){this.uniforms.uvAnimationScrollXOffset.value=r}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(r){this.uniforms.uvAnimationScrollYOffset.value=r}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(r){this.uniforms.uvAnimationRotationPhase.value=r}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(r){this._ignoreVertexColor=r,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(r){this._v0CompatShade=r,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(r){this._debugMode=r,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(r){this._outlineWidthMode=r,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(r){this._isOutline=r,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(r){this._uploadUniformsWorkaround(),this._updateUVAnimation(r)}copy(r){return super.copy(r),this.map=r.map,this.normalMap=r.normalMap,this.emissiveMap=r.emissiveMap,this.shadeMultiplyTexture=r.shadeMultiplyTexture,this.shadingShiftTexture=r.shadingShiftTexture,this.matcapTexture=r.matcapTexture,this.rimMultiplyTexture=r.rimMultiplyTexture,this.outlineWidthMultiplyTexture=r.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=r.uvAnimationMaskTexture,this.normalMapType=r.normalMapType,this.uvAnimationScrollXSpeedFactor=r.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=r.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=r.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=r.ignoreVertexColor,this.v0CompatShade=r.v0CompatShade,this.debugMode=r.debugMode,this.outlineWidthMode=r.outlineWidthMode,this.isOutline=r.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(r){this.uniforms.uvAnimationScrollXOffset.value+=r*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=r*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=r*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const r=parseInt(co,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:r,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===O_.ScreenCoordinates}}_updateTextureMatrix(r,e){r.value&&(r.value.matrixAutoUpdate&&r.value.updateMatrix(),e.value.copy(r.value.matrix))}},oI=new Set(["1.0","1.0-beta"]),Hx=class lu{get name(){return lu.EXTENSION_NAME}constructor(e,t={}){var n,i,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:sI,this.renderOrderOffset=(i=t.renderOrderOffset)!=null?i:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ks(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ks(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Ks(this,null,function*(){var t;const n=this.parser,s=(t=n.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n?.map((i,s)=>{var o;this._getMToonExtension(s)&&((o=i.extensions)!=null&&o.KHR_materials_unlit)&&delete i.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[lu.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!oI.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${lu.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return Ks(this,null,function*(){var n;delete t.metalness,delete t.roughness;const i=new eI(this.parser,t);i.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),i.assignColor("shadeColorFactor",e.shadeColorFactor),i.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),i.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),i.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),i.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),i.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),i.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),i.assignColor("matcapFactor",e.matcapFactor),i.assignTexture("matcapTexture",e.matcapTexture,!0),i.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),i.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),i.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),i.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),i.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),i.assignPrimitive("outlineWidthMode",e.outlineWidthMode),i.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),i.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),i.assignColor("outlineColorFactor",e.outlineColorFactor),i.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),i.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),i.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),i.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),i.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),i.assignPrimitive("v0CompatShade",this.v0CompatShade),i.assignPrimitive("debugMode",this.debugMode),yield i.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const i=this._parseRenderOrder(n);e.renderOrder=i+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Ki)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=ti,e.material.push(n);const i=e.geometry,s=i.index?i.index.count:i.attributes.position.count/3;i.addGroup(0,s,0),i.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(i=>n.add(i)):n.add(t);for(const i of n)this._mToonMaterialSet.add(i)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Hx.EXTENSION_NAME="VRMC_materials_mtoon";var aI=Hx,lI=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),Gx=class kf{get name(){return kf.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return lI(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const i=n.emissiveMultiplier;t.emissiveIntensity=i})}_getHDREmissiveMultiplierExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[kf.EXTENSION_NAME];if(a!=null)return a}};Gx.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var cI=Gx,uI=Object.defineProperty,hI=Object.defineProperties,dI=Object.getOwnPropertyDescriptors,U_=Object.getOwnPropertySymbols,fI=Object.prototype.hasOwnProperty,pI=Object.prototype.propertyIsEnumerable,F_=(r,e,t)=>e in r?uI(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,rr=(r,e)=>{for(var t in e||(e={}))fI.call(e,t)&&F_(r,t,e[t]);if(U_)for(var t of U_(e))pI.call(e,t)&&F_(r,t,e[t]);return r},B_=(r,e)=>hI(r,dI(e)),mI=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});function Fo(r){return Math.pow(r,2.2)}var gI=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(r){var e;this.parser=r,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return mI(this,null,function*(){var r;const e=this.parser.json,t=(r=e.extensions)==null?void 0:r.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((i,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(i.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(i,l);e.materials[s]=c}else if((a=i.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(i,l);e.materials[s]=c}else i.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${i.shader}`)}))})}_parseV0MToonProperties(r,e){var t,n,i,s,o,a,l,c,u,h,d,f,p,_,m,g,v,y,x,S,E,A,M,b,N,I,D,X,Y,$,G,z,J,Z,P,he,fe,He,Ge,Xe,ie,V,Q,oe,ue,xe,Re,pe,ge,Ae,ke,K,k,ut,at;const Ze=(n=(t=r.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,L=((i=r.floatProperties)==null?void 0:i._ZWrite)===1&&Ze,T=this._v0ParseRenderQueue(r),H=(o=(s=r.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,ae=Ze?"BLEND":H?"MASK":"OPAQUE",le=H?(l=(a=r.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,we=((u=(c=r.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,ve=this._portTextureTransform(r),Ve=((d=(h=r.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((Nt,ii)=>ii===3?Nt:Fo(Nt)),Fe=(f=r.textureProperties)==null?void 0:f._MainTex,Me=Fe!=null?{index:Fe,extensions:rr({},ve)}:void 0,ye=(_=(p=r.floatProperties)==null?void 0:p._BumpScale)!=null?_:1,Te=(m=r.textureProperties)==null?void 0:m._BumpMap,Pe=Te!=null?{index:Te,scale:ye,extensions:rr({},ve)}:void 0,be=((v=(g=r.vectorProperties)==null?void 0:g._EmissionColor)!=null?v:[0,0,0,1]).map(Fo),Je=(y=r.textureProperties)==null?void 0:y._EmissionMap,O=Je!=null?{index:Je,extensions:rr({},ve)}:void 0,Se=((S=(x=r.vectorProperties)==null?void 0:x._ShadeColor)!=null?S:[.97,.81,.86,1]).map(Fo),_e=(E=r.textureProperties)==null?void 0:E._ShadeTexture,Ee=_e!=null?{index:_e,extensions:rr({},ve)}:void 0;let me=(M=(A=r.floatProperties)==null?void 0:A._ShadeShift)!=null?M:0,se=(N=(b=r.floatProperties)==null?void 0:b._ShadeToony)!=null?N:.9;se=an.lerp(se,1,.5+.5*me),me=-me-(1-se);const ze=(D=(I=r.floatProperties)==null?void 0:I._IndirectLightIntensity)!=null?D:.1,Qe=ze?1-ze:void 0,yt=(X=r.textureProperties)==null?void 0:X._SphereAdd,Ne=yt!=null?[1,1,1]:void 0,$e=yt!=null?{index:yt}:void 0,ft=($=(Y=r.floatProperties)==null?void 0:Y._RimLightingMix)!=null?$:0,R=(G=r.textureProperties)==null?void 0:G._RimTexture,C=R!=null?{index:R,extensions:rr({},ve)}:void 0,U=((J=(z=r.vectorProperties)==null?void 0:z._RimColor)!=null?J:[0,0,0,1]).map(Fo),B=(P=(Z=r.floatProperties)==null?void 0:Z._RimFresnelPower)!=null?P:1,ce=(fe=(he=r.floatProperties)==null?void 0:he._RimLift)!=null?fe:0,j=["none","worldCoordinates","screenCoordinates"][(Ge=(He=r.floatProperties)==null?void 0:He._OutlineWidthMode)!=null?Ge:0];let de=(ie=(Xe=r.floatProperties)==null?void 0:Xe._OutlineWidth)!=null?ie:0;de=.01*de;const Ie=(V=r.textureProperties)==null?void 0:V._OutlineWidthTexture,Oe=Ie!=null?{index:Ie,extensions:rr({},ve)}:void 0,tt=((oe=(Q=r.vectorProperties)==null?void 0:Q._OutlineColor)!=null?oe:[0,0,0]).map(Fo),Dt=((xe=(ue=r.floatProperties)==null?void 0:ue._OutlineColorMode)!=null?xe:0)===1?(pe=(Re=r.floatProperties)==null?void 0:Re._OutlineLightingMix)!=null?pe:1:0,mt=(ge=r.textureProperties)==null?void 0:ge._UvAnimMaskTexture,Ke=mt!=null?{index:mt,extensions:rr({},ve)}:void 0,gt=(ke=(Ae=r.floatProperties)==null?void 0:Ae._UvAnimScrollX)!=null?ke:0;let nt=(k=(K=r.floatProperties)==null?void 0:K._UvAnimScrollY)!=null?k:0;nt!=null&&(nt=-nt);const lt=(at=(ut=r.floatProperties)==null?void 0:ut._UvAnimRotation)!=null?at:0,xt={specVersion:"1.0",transparentWithZWrite:L,renderQueueOffsetNumber:T,shadeColorFactor:Se,shadeMultiplyTexture:Ee,shadingShiftFactor:me,shadingToonyFactor:se,giEqualizationFactor:Qe,matcapFactor:Ne,matcapTexture:$e,rimLightingMixFactor:ft,rimMultiplyTexture:C,parametricRimColorFactor:U,parametricRimFresnelPowerFactor:B,parametricRimLiftFactor:ce,outlineWidthMode:j,outlineWidthFactor:de,outlineWidthMultiplyTexture:Oe,outlineColorFactor:tt,outlineLightingMixFactor:Dt,uvAnimationMaskTexture:Ke,uvAnimationScrollXSpeedFactor:gt,uvAnimationScrollYSpeedFactor:nt,uvAnimationRotationSpeedFactor:lt};return B_(rr({},e),{pbrMetallicRoughness:{baseColorFactor:Ve,baseColorTexture:Me},normalTexture:Pe,emissiveTexture:O,emissiveFactor:be,alphaMode:ae,alphaCutoff:le,doubleSided:we,extensions:{VRMC_materials_mtoon:xt}})}_parseV0UnlitProperties(r,e){var t,n,i,s,o;const a=r.shader==="VRM/UnlitTransparentZWrite",l=r.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(r),u=r.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=r.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(r),p=((s=(i=r.vectorProperties)==null?void 0:i._Color)!=null?s:[1,1,1,1]).map(Fo),_=(o=r.textureProperties)==null?void 0:o._MainTex,m=_!=null?{index:_,extensions:rr({},f)}:void 0,g={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:p,shadeMultiplyTexture:m};return B_(rr({},e),{pbrMetallicRoughness:{baseColorFactor:p,baseColorTexture:m},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:g}})}_portTextureTransform(r){var e,t,n,i,s;const o=(e=r.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(i=o?.[2])!=null?i:1,(s=o?.[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(r){var e,t;const n=r.shader==="VRM/UnlitTransparentZWrite",i=((e=r.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||r.shader==="VRM/UnlitTransparent"||n,s=((t=r.floatProperties)==null?void 0:t._ZWrite)===1||n;let o=0;if(i){const a=r.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(r){const e=new Set,t=new Set;r.forEach(n=>{var i,s;const o=n.shader==="VRM/UnlitTransparentZWrite",a=((i=n.keywordMap)==null?void 0:i._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,i)=>{const s=Math.min(Math.max(i-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,i)=>{const s=Math.min(Math.max(i,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},k_=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),ss=new F,nd=class extends bi{constructor(r){super(),this._attrPosition=new Ft(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(iE);const e=new rn;e.setAttribute("position",this._attrPosition);const t=new po({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Vu(e,t),this.add(this._line),this.constraint=r}updateMatrixWorld(r){ss.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,ss.x,ss.y,ss.z),this.constraint.source&&ss.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,ss.x,ss.y,ss.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(r)}};function V_(r,e){return e.set(r.elements[12],r.elements[13],r.elements[14])}var _I=new F,vI=new F;function xI(r,e){return r.decompose(_I,e,vI),e}function Ru(r){return r.invert?r.invert():r.inverse(),r}var Bp=class{constructor(r,e){this.destination=r,this.source=e,this.weight=1}},MI=new F,yI=new F,SI=new F,TI=new pt,bI=new pt,EI=new pt,AI=class extends Bp{get aimAxis(){return this._aimAxis}set aimAxis(r){this._aimAxis=r,this._v3AimAxis.set(r==="PositiveX"?1:r==="NegativeX"?-1:0,r==="PositiveY"?1:r==="NegativeY"?-1:0,r==="PositiveZ"?1:r==="NegativeZ"?-1:0)}get dependencies(){const r=new Set([this.source]);return this.destination.parent&&r.add(this.destination.parent),r}constructor(r,e){super(r,e),this._aimAxis="PositiveX",this._v3AimAxis=new F(1,0,0),this._dstRestQuat=new pt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const r=TI.identity(),e=bI.identity();this.destination.parent&&(xI(this.destination.parent.matrixWorld,r),Ru(e.copy(r)));const t=MI.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(r),n=V_(this.source.matrixWorld,yI).sub(V_(this.destination.matrixWorld,SI)).normalize(),i=EI.setFromUnitVectors(t,n).premultiply(e).multiply(r).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}};function wI(r,e){const t=[r];let n=r.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}var RI=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(r){this._constraints.add(r);let e=this._objectConstraintsMap.get(r.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(r.destination,e)),e.add(r)}deleteConstraint(r){this._constraints.delete(r),this._objectConstraintsMap.get(r.destination).delete(r)}setInitState(){const r=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,r,e,n=>n.setInitState())}update(){const r=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,r,e,n=>n.update())}_processConstraint(r,e,t,n){if(t.has(r))return;if(e.has(r))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(r);const i=r.dependencies;for(const s of i)wI(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,n)});n(r),t.add(r)}},CI=new pt,PI=new pt,II=class extends Bp{get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._dstRestQuat=new pt,this._invSrcRestQuat=new pt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Ru(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const r=CI.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=PI.copy(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},LI=new F,DI=new pt,NI=new pt,OI=class extends Bp{get rollAxis(){return this._rollAxis}set rollAxis(r){this._rollAxis=r,this._v3RollAxis.set(r==="X"?1:0,r==="Y"?1:0,r==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(r,e){super(r,e),this._rollAxis="X",this._v3RollAxis=new F(1,0,0),this._dstRestQuat=new pt,this._invDstRestQuat=new pt,this._invSrcRestQuatMulDstRestQuat=new pt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Ru(this._invDstRestQuat.copy(this._dstRestQuat)),Ru(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const r=DI.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=LI.copy(this._v3RollAxis).applyQuaternion(r),n=NI.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(r);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},UI=new Set(["1.0","1.0-beta"]),Wx=class ol{get name(){return ol.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return k_(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return k_(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(ol.EXTENSION_NAME))!==-1))return null;const s=new RI,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const u=n.nodes[l],h=(c=u?.extensions)==null?void 0:c[ol.EXTENSION_NAME];if(h==null)return;const d=h.specVersion;if(!UI.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${ol.EXTENSION_NAME} specVersion "${d}"`);return}const f=h.constraint;if(f.roll!=null){const p=this._importRollConstraint(a,o,f.roll);s.addConstraint(p)}else if(f.aim!=null){const p=this._importAimConstraint(a,o,f.aim);s.addConstraint(p)}else if(f.rotation!=null){const p=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(p)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){const{source:i,rollAxis:s,weight:o}=n,a=t[i],l=new OI(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new nd(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){const{source:i,aimAxis:s,weight:o}=n,a=t[i],l=new AI(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new nd(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){const{source:i,weight:s}=n,o=t[i],a=new II(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new nd(a);this.helperRoot.add(l)}return a}};Wx.EXTENSION_NAME="VRMC_node_constraint";var FI=Wx,kc=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())}),kp=class{},id=new F,Fs=new F,Xx=class extends kp{get type(){return"capsule"}constructor(r){var e,t,n,i;super(),this.offset=(e=r?.offset)!=null?e:new F(0,0,0),this.tail=(t=r?.tail)!=null?t:new F(0,0,0),this.radius=(n=r?.radius)!=null?n:0,this.inside=(i=r?.inside)!=null?i:!1}calculateCollision(r,e,t,n){id.setFromMatrixPosition(r),Fs.subVectors(this.tail,this.offset).applyMatrix4(r),Fs.sub(id);const i=Fs.lengthSq();n.copy(e).sub(id);const s=Fs.dot(n);s<=0||(i<=s||Fs.multiplyScalar(s/i),n.sub(Fs));const o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},rd=new F,z_=new ot,qx=class extends kp{get type(){return"plane"}constructor(r){var e,t;super(),this.offset=(e=r?.offset)!=null?e:new F(0,0,0),this.normal=(t=r?.normal)!=null?t:new F(0,0,1)}calculateCollision(r,e,t,n){n.setFromMatrixPosition(r),n.negate().add(e),z_.getNormalMatrix(r),rd.copy(this.normal).applyNormalMatrix(z_).normalize();const i=n.dot(rd)-t;return n.copy(rd),i}},BI=new F,Yx=class extends kp{get type(){return"sphere"}constructor(r){var e,t,n;super(),this.offset=(e=r?.offset)!=null?e:new F(0,0,0),this.radius=(t=r?.radius)!=null?t:0,this.inside=(n=r?.inside)!=null?n:!1}calculateCollision(r,e,t,n){n.subVectors(e,BI.setFromMatrixPosition(r));const i=n.length(),s=this.inside?this.radius-t-i:i-t-this.radius;return s<0&&(n.multiplyScalar(1/i),this.inside&&n.negate()),s}},sr=new F,kI=class extends rn{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new F,this._currentTail=new F,this._shape=r,this._attrPos=new Ft(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ft(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0);const t=sr.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),r=!0),r&&this._buildPosition()}_buildPosition(){sr.copy(this._currentTail).sub(this._currentOffset);const r=sr.length()/this._currentRadius;for(let n=0;n<=16;n++){const i=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(i),-Math.cos(i),0),this._attrPos.setXYZ(17+n,r+Math.sin(i),Math.cos(i),0),this._attrPos.setXYZ(34+n,-Math.sin(i),0,-Math.cos(i)),this._attrPos.setXYZ(51+n,r+Math.sin(i),0,Math.cos(i))}for(let n=0;n<32;n++){const i=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(i),Math.cos(i)),this._attrPos.setXYZ(100+n,r,Math.sin(i),Math.cos(i))}const e=Math.atan2(sr.y,Math.sqrt(sr.x*sr.x+sr.z*sr.z)),t=-Math.atan2(sr.z,sr.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<34;r++){const e=(r+1)%34;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(68+r*2,34+r,34+e)}for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(136+r*2,68+r,68+e),this._attrIndex.setXY(200+r*2,100+r,100+e)}this._attrIndex.needsUpdate=!0}},VI=class extends rn{constructor(r){super(),this.worldScale=1,this._currentOffset=new F,this._currentNormal=new F,this._shape=r,this._attrPos=new Ft(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ft(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),r=!0),r&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},zI=class extends rn{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new F,this._shape=r,this._attrPos=new Ft(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ft(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){const e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.needsUpdate=!0}},HI=new F,sd=class extends bi{constructor(r){if(super(),this.matrixAutoUpdate=!1,this.collider=r,this.collider.shape instanceof Yx)this._geometry=new zI(this.collider.shape);else if(this.collider.shape instanceof Xx)this._geometry=new kI(this.collider.shape);else if(this.collider.shape instanceof qx)this._geometry=new VI(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new po({color:16711935,depthTest:!1,depthWrite:!1});this._line=new ql(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=HI.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},GI=class extends rn{constructor(r){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new F,this._springBone=r,this._attrPos=new Ft(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ft(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let r=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,r=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),r=!0),r&&this._buildPosition()}_buildPosition(){for(let r=0;r<32;r++){const e=r/16*Math.PI;this._attrPos.setXYZ(r,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+r,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+r,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let r=0;r<32;r++){const e=(r+1)%32;this._attrIndex.setXY(r*2,r,e),this._attrIndex.setXY(64+r*2,32+r,32+e),this._attrIndex.setXY(128+r*2,64+r,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},WI=new F,XI=class extends bi{constructor(r){super(),this.matrixAutoUpdate=!1,this.springBone=r,this._geometry=new GI(this.springBone);const e=new po({color:16776960,depthTest:!1,depthWrite:!1});this._line=new ql(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(r){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=WI.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(r)}},od=class extends $t{constructor(r){super(),this.colliderMatrix=new ct,this.shape=r}updateWorldMatrix(r,e){super.updateWorldMatrix(r,e),qI(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function qI(r,e,t){const n=e.elements;r.copy(e),t&&(r.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],r.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],r.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var YI=new ct;function $I(r){return r.invert?r.invert():r.getInverse(YI.copy(r)),r}var jI=class{constructor(r){this._inverseCache=new ct,this._shouldUpdateInverse=!0,this.matrix=r;const e={set:(t,n,i)=>(this._shouldUpdateInverse=!0,t[n]=i,!0)};this._originalElements=r.elements,r.elements=new Proxy(r.elements,e)}get inverse(){return this._shouldUpdateInverse&&($I(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},ad=new ct,Bo=new F,Xa=new F,qa=new F,Ya=new F,KI=new ct,ZI=class{constructor(r,e,t={},n=[]){this._currentTail=new F,this._prevTail=new F,this._boneAxis=new F,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new ct,this._initialLocalRotation=new pt,this._initialLocalChildPosition=new F;var i,s,o,a,l,c;this.bone=r,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(i=t.hitRadius)!=null?i:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new F(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){const r=new Set,e=this.bone.parent;e&&r.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)r.add(this.colliderGroups[t].colliders[n]);return r}get center(){return this._center}set center(r){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=r,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new jI(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:ad}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const r=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(r),this._prevTail.copy(this._currentTail)}update(r){if(r<=0)return;this._calcWorldSpaceBoneLength();const e=Xa.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Ya.copy(this._currentTail).add(Bo.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*r).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*r),qa.setFromMatrixPosition(this.bone.matrixWorld),Ya.sub(qa).normalize().multiplyScalar(this._worldSpaceBoneLength).add(qa),this._collision(Ya),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ya).applyMatrix4(this._getMatrixWorldToCenter());const t=KI.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Bo.copy(Ya).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(r){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const n=this.colliderGroups[e].colliders[t],i=n.shape.calculateCollision(n.colliderMatrix,r,this.settings.hitRadius,Bo);if(i<0){r.addScaledVector(Bo,-i),r.sub(qa);const s=r.length();r.multiplyScalar(this._worldSpaceBoneLength/s).add(qa)}}}_calcWorldSpaceBoneLength(){Bo.setFromMatrixPosition(this.bone.matrixWorld),this.child?Xa.setFromMatrixPosition(this.child.matrixWorld):(Xa.copy(this._initialLocalChildPosition),Xa.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Bo.sub(Xa).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:ad}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:ad}};function JI(r,e){const t=[];let n=r;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}function Vf(r,e){r.children.forEach(t=>{e(t)||Vf(t,e)})}function QI(r){var e;const t=new Map;for(const n of r){let i=n;do{const s=((e=t.get(i))!=null?e:0)+1;if(s===r.size)return i;t.set(i,s),i=i.parent}while(i!==null)}return null}var H_=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const r=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{r.add(t)})}),Array.from(r)}get colliders(){const r=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{r.add(t)})}),Array.from(r)}addJoint(r){this._joints.add(r);let e=this._objectSpringBonesMap.get(r.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(r.bone,e)),e.add(r),this._isSortedJointsDirty=!0}addSpringBone(r){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(r)}deleteJoint(r){this._joints.delete(r),this._objectSpringBonesMap.get(r.bone).delete(r),this._isSortedJointsDirty=!0}deleteSpringBone(r){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(r)}setInitState(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){const e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let r=0;r<this._sortedJoints.length;r++){const e=this._sortedJoints[r];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(r){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(r),Vf(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const r=[],e=new Set,t=new Set,n=new Set;for(const s of this._joints)this._insertJointSort(s,e,t,r,n);this._sortedJoints=r;const i=QI(n);this._ancestors=[],i&&(this._ancestors.push(i),Vf(i,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(r,e,t,n,i){if(t.has(r))return;if(e.has(r)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(r);const s=r.dependencies;for(const o of s){let a=!1,l=null;JI(o,c=>{const u=this._objectSpringBonesMap.get(c);if(u)for(const h of u)a=!0,this._insertJointSort(h,e,t,n,i);else a||(l=c)}),l&&i.add(l)}n.push(r),t.add(r)}_relevantChildrenUpdated(r){var e,t;return((t=(e=this._objectSpringBonesMap.get(r))==null?void 0:e.size)!=null?t:0)>0?!0:(r.updateWorldMatrix(!1,!1),!1)}},G_="VRMC_springBone_extended_collider",eL=new Set(["1.0","1.0-beta"]),tL=new Set(["1.0"]),$x=class Wo{get name(){return Wo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return kc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return kc(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return kc(this,null,function*(){var t,n,i,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Wo.EXTENSION_NAME))!==-1))return null;const c=new H_,u=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[Wo.EXTENSION_NAME];if(!h)return null;const d=h.specVersion;if(!eL.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Wo.EXTENSION_NAME} specVersion "${d}"`),null;const f=(i=h.colliders)==null?void 0:i.map((_,m)=>{var g,v,y,x,S,E,A,M,b,N,I,D,X,Y,$;const G=u[_.node];if(G==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${m} attempted to use the node #${_.node} but not found`),null;const z=_.shape,J=(g=_.extensions)==null?void 0:g[G_];if(this.useExtendedColliders&&J!=null){const Z=J.specVersion;if(!tL.has(Z))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${G_} specVersion "${Z}". Fallbacking to the ${Wo.EXTENSION_NAME} definition`);else{const P=J.shape;if(P.sphere)return this._importSphereCollider(G,{offset:new F().fromArray((v=P.sphere.offset)!=null?v:[0,0,0]),radius:(y=P.sphere.radius)!=null?y:0,inside:(x=P.sphere.inside)!=null?x:!1});if(P.capsule)return this._importCapsuleCollider(G,{offset:new F().fromArray((S=P.capsule.offset)!=null?S:[0,0,0]),radius:(E=P.capsule.radius)!=null?E:0,tail:new F().fromArray((A=P.capsule.tail)!=null?A:[0,0,0]),inside:(M=P.capsule.inside)!=null?M:!1});if(P.plane)return this._importPlaneCollider(G,{offset:new F().fromArray((b=P.plane.offset)!=null?b:[0,0,0]),normal:new F().fromArray((N=P.plane.normal)!=null?N:[0,0,1])})}}if(z.sphere)return this._importSphereCollider(G,{offset:new F().fromArray((I=z.sphere.offset)!=null?I:[0,0,0]),radius:(D=z.sphere.radius)!=null?D:0,inside:!1});if(z.capsule)return this._importCapsuleCollider(G,{offset:new F().fromArray((X=z.capsule.offset)!=null?X:[0,0,0]),radius:(Y=z.capsule.radius)!=null?Y:0,tail:new F().fromArray(($=z.capsule.tail)!=null?$:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${m} has no valid shape`)}),p=(s=h.colliderGroups)==null?void 0:s.map((_,m)=>{var g;return{colliders:((g=_.colliders)!=null?g:[]).flatMap(y=>{const x=f?.[y];return x??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${m} attempted to use a collider #${y} but not found`),[])}),name:_.name}});return(o=h.springs)==null||o.forEach((_,m)=>{var g;const v=_.joints,y=(g=_.colliderGroups)==null?void 0:g.map(E=>{const A=p?.[E];if(A==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${E} but not found`);return A}),x=_.center!=null?u[_.center]:void 0;let S;v.forEach(E=>{if(S){const A=S.node,M=u[A],b=E.node,N=u[b],I={hitRadius:S.hitRadius,dragForce:S.dragForce,gravityPower:S.gravityPower,stiffness:S.stiffness,gravityDir:S.gravityDir!=null?new F().fromArray(S.gravityDir):void 0},D=this._importJoint(M,N,I,y);x&&(D.center=x),c.addJoint(D)}S=E})}),c.setInitState(),c})}_v0Import(e){return kc(this,null,function*(){var t,n,i;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(n=s.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;const c=l?.boneGroups;if(!c)return null;const u=new H_,h=yield e.parser.getDependencies("node"),d=(i=l.colliderGroups)==null?void 0:i.map(f=>{var p;const _=h[f.node];return{colliders:((p=f.colliders)!=null?p:[]).map((g,v)=>{var y,x,S;const E=new F(0,0,0);return g.offset&&E.set((y=g.offset.x)!=null?y:0,(x=g.offset.y)!=null?x:0,g.offset.z?-g.offset.z:0),this._importSphereCollider(_,{offset:E,radius:(S=g.radius)!=null?S:0,inside:!1})})}});return c?.forEach((f,p)=>{const _=f.bones;_&&_.forEach(m=>{var g,v,y,x;const S=h[m],E=new F;f.gravityDir?E.set((g=f.gravityDir.x)!=null?g:0,(v=f.gravityDir.y)!=null?v:0,(y=f.gravityDir.z)!=null?y:0):E.set(0,-1,0);const A=f.center!=null?h[f.center]:void 0,M={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:E},b=(x=f.colliderGroups)==null?void 0:x.map(N=>{const I=d?.[N];if(I==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${N} but not found`);return I});S.traverse(N=>{var I;const D=(I=N.children[0])!=null?I:null,X=this._importJoint(N,D,M,b);A&&(X.center=A),u.addJoint(X)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,i){const s=new ZI(e,t,n,i);if(this.jointHelperRoot){const o=new XI(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const n=new Yx(t),i=new od(n);if(e.add(i),this.colliderHelperRoot){const s=new sd(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importCapsuleCollider(e,t){const n=new Xx(t),i=new od(n);if(e.add(i),this.colliderHelperRoot){const s=new sd(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importPlaneCollider(e,t){const n=new qx(t),i=new od(n);if(e.add(i),this.colliderHelperRoot){const s=new sd(i);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return i}};$x.EXTENSION_NAME="VRMC_springBone";var nL=$x,iL=class{get name(){return"VRMLoaderPlugin"}constructor(r,e){var t,n,i,s,o,a,l,c,u,h;this.parser=r;const d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new xP(r),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new yP(r),this.humanoidPlugin=(i=e?.humanoidPlugin)!=null?i:new RP(r,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e?.lookAtPlugin)!=null?s:new GP(r,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new qP(r),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new aI(r),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new cI(r),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new gI(r),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new nL(r,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new FI(r,{helperRoot:d})}beforeRoot(){return Uc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(r){return Uc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(r)})}getMaterialType(r){const e=this.mtoonMaterialPlugin.getMaterialType(r);return e??null}extendMaterialParams(r,e){return Uc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(r,e),yield this.mtoonMaterialPlugin.extendMaterialParams(r,e)})}afterRoot(r){return Uc(this,null,function*(){yield this.metaPlugin.afterRoot(r),yield this.humanoidPlugin.afterRoot(r),yield this.expressionPlugin.afterRoot(r),yield this.lookAtPlugin.afterRoot(r),yield this.firstPersonPlugin.afterRoot(r),yield this.springBonePlugin.afterRoot(r),yield this.nodeConstraintPlugin.afterRoot(r),yield this.mtoonMaterialPlugin.afterRoot(r);const e=r.userData.vrmMeta,t=r.userData.vrmHumanoid;if(e&&t){const n=new $P({scene:r.scene,expressionManager:r.userData.vrmExpressionManager,firstPerson:r.userData.vrmFirstPerson,humanoid:t,lookAt:r.userData.vrmLookAt,meta:e,materials:r.userData.vrmMToonMaterials,springBoneManager:r.userData.vrmSpringBoneManager,nodeConstraintManager:r.userData.vrmNodeConstraintManager});r.userData.vrm=n}})}};function rL(r){const e=new Set;return r.traverse(t=>{if(!t.isMesh)return;const n=t;e.add(n)}),e}function W_(r,e,t){if(e.size===1){const o=e.values().next().value;if(o.weight===1)return r[o.index]}const n=new Float32Array(r[0].count*3);let i=0;if(t)i=1;else for(const o of e)i+=o.weight;for(const o of e){const a=r[o.index],l=o.weight/i;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new Ft(n,3)}function sL(r){var e;const t=rL(r.scene),n=new Map,i=(e=r.expressionManager)==null?void 0:e.expressionMap;if(i!=null)for(const[s,o]of Object.entries(i)){const a=new Set;for(const l of o.binds)if(l instanceof wu){if(l.weight!==0)for(const c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(const l of a)o.deleteBind(l)}for(const s of t){const o=n.get(s);if(o==null)continue;const a=s.geometry.morphAttributes;s.geometry.morphAttributes={};const l=s.geometry.clone();s.geometry=l;const c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},p=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let _=0;for(const[m,g]of o)u&&(d.position[_]=W_(a.position,g,c)),h&&(d.normal[_]=W_(a.normal,g,c)),i?.[m].addBind(new wu({index:_,weight:1,primitives:[s]})),f[m]=_,p.push(0),_++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=p}}function Cu(r,e,t){if(r.getComponent)return r.getComponent(e,t);{let n=r.array[e*r.itemSize+t];return r.normalized&&(n=an.denormalize(n,r.array)),n}}function jx(r,e,t,n){r.setComponent?r.setComponent(e,t,n):(r.normalized&&(n=an.normalize(n,r.array)),r.array[e*r.itemSize+t]=n)}function oL(r){var e;const t=aL(r),n=new Set;for(const h of t)n.has(h.geometry)&&(h.geometry=fL(h.geometry)),n.add(h.geometry);const i=new Map;for(const h of n){const d=h.getAttribute("skinIndex"),f=(e=i.get(d))!=null?e:new Map;i.set(d,f);const p=h.getAttribute("skinWeight"),_=lL(d,p);f.set(p,_)}const s=new Map;for(const h of t){const d=cL(h,i);s.set(h,d)}const o=[];for(const[h,d]of s){let f=!1;for(const p of o)if(uL(d,p.boneInverseMap)){f=!0,p.meshes.add(h);for(const[m,g]of d)p.boneInverseMap.set(m,g);break}f||o.push({boneInverseMap:d,meshes:new Set([h])})}const a=new Map,l=new ld,c=new ld,u=new ld;for(const h of o){const{boneInverseMap:d,meshes:f}=h,p=Array.from(d.keys()),_=Array.from(d.values()),m=new Ta(p,_),g=c.getOrCreate(m);for(const v of f){const y=v.geometry.getAttribute("skinIndex"),x=l.getOrCreate(y),S=v.skeleton.bones,E=S.map(b=>u.getOrCreate(b)).join(","),A=`${x};${g};${E}`;let M=a.get(A);M==null&&(M=y.clone(),hL(M,S,p),a.set(A,M)),v.geometry.setAttribute("skinIndex",M)}for(const v of f)v.bind(m,new ct)}}function aL(r){const e=new Set;return r.traverse(t=>{if(!t.isSkinnedMesh)return;const n=t;e.add(n)}),e}function lL(r,e){const t=new Set;for(let n=0;n<r.count;n++)for(let i=0;i<r.itemSize;i++){const s=Cu(r,n,i);Cu(e,n,i)!==0&&t.add(s)}return t}function cL(r,e){const t=new Map,n=r.skeleton,i=r.geometry,s=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight"),a=e.get(s),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function uL(r,e){for(const[t,n]of r.entries()){const i=e.get(t);if(i!=null&&!dL(n,i))return!1}return!0}function hL(r,e,t){const n=new Map;for(const s of e)n.set(s,n.size);const i=new Map;for(const[s,o]of t.entries()){const a=n.get(o);i.set(a,s)}for(let s=0;s<r.count;s++)for(let o=0;o<r.itemSize;o++){const a=Cu(r,s,o),l=i.get(a);jx(r,s,o,l)}r.needsUpdate=!0}function dL(r,e,t){if(t=t||1e-4,r.elements.length!=e.elements.length)return!1;for(let n=0,i=r.elements.length;n<i;n++)if(Math.abs(r.elements[n]-e.elements[n])>t)return!1;return!0}var ld=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(r){return this._objectIndexMap.get(r)}getOrCreate(r){let e=this._objectIndexMap.get(r);return e==null&&(e=this._index,this._objectIndexMap.set(r,e),this._index++),e}};function fL(r){var e,t,n,i;const s=new rn;s.name=r.name,s.setIndex(r.index);for(const[o,a]of Object.entries(r.attributes))s.setAttribute(o,a);for(const[o,a]of Object.entries(r.morphAttributes)){const l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=r.morphTargetsRelative,s.groups=[];for(const o of r.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=r.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(i=(n=r.boundingBox)==null?void 0:n.clone())!=null?i:null,s.drawRange.start=r.drawRange.start,s.drawRange.count=r.drawRange.count,s.userData=r.userData,s}function X_(r){if(Object.values(r).forEach(e=>{e?.isTexture&&e.dispose()}),r.isShaderMaterial){const e=r.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n?.isTexture&&n.dispose()})}r.dispose()}function pL(r){const e=r.geometry;e&&e.dispose();const t=r.skeleton;t&&t.dispose();const n=r.material;n&&(Array.isArray(n)?n.forEach(i=>X_(i)):n&&X_(n))}function mL(r){r.traverse(pL)}function gL(r,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const i=(t=e?.experimentalSameBoneCounts)!=null?t:!1,s=[];r.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});const o=new Map;let a=0;for(const l of s){const u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;const h=new Map,d=new Map;for(let f=0;f<u.count;f++)for(let p=0;p<u.itemSize;p++){const _=Cu(u,f,p);let m=h.get(_);m==null&&(m=h.size,h.set(_,m),d.set(m,_)),jx(u,f,p,m)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(const l of s){const u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],f=[],p=i?a:h.size;for(let m=0;m<p;m++){const g=(n=h.get(m))!=null?n:0;d.push(l.skeleton.bones[g]),f.push(l.skeleton.boneInverses[g])}const _=new Ta(d,f);l.bind(_,new ct)}}function _L(r,e){const t=r.position.count,n=new Array(t);let i=0;const s=e.array;for(let o=0;o<s.length;o++){const a=s[o];n[a]||(n[a]=!0,i++)}return{isVertexUsed:n,vertexCount:t,verticesUsed:i}}function vL(r){const e=[],t=[];let n=0;for(let i=0;i<r.length;i++)if(r[i]){const s=n++;e[i]=s,t[s]=i}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function xL(r,e){var t,n,i,s;e.name=r.name,e.morphTargetsRelative=r.morphTargetsRelative,r.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(n=(t=r.boundingBox)==null?void 0:t.clone())!=null?n:null,e.boundingSphere=(s=(i=r.boundingSphere)==null?void 0:i.clone())!=null?s:null,e.setDrawRange(r.drawRange.start,r.drawRange.count),e.userData=r.userData}function ML(r,e,t){const n=e.array,i=new n.constructor(n.length);for(let s=0;s<n.length;s++){const o=n[s];i[s]=t[o]}r.setIndex(new Ft(i,e.itemSize,e.normalized))}function Pu(r,e,t){const n=r.constructor,i=new n(e.length*t);let s=!0;for(let o=0;o<e.length;o++){const l=e[o]*t,c=o*t;for(let u=0;u<t;u++){const h=r[l+u];i[c+u]=h,s=s&&h===0}}return[i,s]}function yL(r){var e;const t=new Map,n=[];for(const[i,s]of Object.entries(r))if(s.isInterleavedBufferAttribute){const o=s,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([i,o])}else{const o=s;n.push([i,o])}return[t,n]}function SL(r,e,t){const[n,i]=yL(e);for(const[s,o]of n){const a=s.array,{stride:l}=s,[c]=Pu(a,t,l),u=new Pp(c,l);u.setUsage(s.usage);for(const[h,d]of o){const{itemSize:f,offset:p,normalized:_}=d,m=new Xl(u,f,p,_);r.setAttribute(h,m)}}for(const[s,o]of i){const a=o.array,{itemSize:l,normalized:c}=o,[u]=Pu(a,t,l);r.setAttribute(s,new Ft(u,l,c))}}function TL(r){var e;const t=new Map,n=[];for(const[i,s]of Object.entries(r)){const o=i;for(let a=0;a<s.length;a++){const l=s[a];if(l.isInterleavedBufferAttribute){const c=l,u=c.data,h=(e=t.get(u))!=null?e:[];t.set(u,h),h.push([o,a,c])}else{const c=l;n.push([o,a,c])}}}return[t,n]}function bL(r,e,t){var n,i;let s=!0;const[o,a]=TL(e),l={};for(const[c,u]of o){const h=c.array,{stride:d}=c,[f,p]=Pu(h,t,d);s=s&&p;const _=new Pp(f,d);_.setUsage(c.usage);for(const[m,g,v]of u){const{itemSize:y,offset:x,normalized:S}=v,E=new Xl(_,y,x,S);(n=l[m])!=null||(l[m]=[]),l[m][g]=E}}for(const[c,u,h]of a){const d=h,f=d.array,{itemSize:p,normalized:_}=d,[m,g]=Pu(f,t,p);s=s&&g,(i=l[c])!=null||(l[c]=[]),l[c][u]=new Ft(m,p,_)}r.morphAttributes=s?{}:l}function EL(r){const e=new Map;r.traverse(t=>{if(!t.isMesh)return;const n=t,i=n.geometry,s=i.index;if(s==null)return;const o=e.get(i);if(o!=null){n.geometry=o;return}const{isVertexUsed:a,vertexCount:l,verticesUsed:c}=_L(i.attributes,s);if(c===l)return;const{originalIndexNewIndexMap:u,newIndexOriginalIndexMap:h}=vL(a),d=new rn;xL(i,d),e.set(i,d),ML(d,s,u),SL(d,i.attributes,h),bL(d,i.morphAttributes,h),n.geometry=d}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function AL(r){var e;((e=r.meta)==null?void 0:e.metaVersion)==="0"&&(r.scene.rotation.y=Math.PI)}var Ts=class{constructor(){}};Ts.combineMorphs=sL;Ts.combineSkeletons=oL;Ts.deepDispose=mL;Ts.removeUnnecessaryJoints=gL;Ts.removeUnnecessaryVertices=EL;Ts.rotateVRM0=AL;/*!
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
 */const wL={key:0,class:"loading-state"},RL={key:1,class:"error-state"},CL={class:"error-message"},PL={key:2,class:"drag-hint"},IL={__name:"VRoidViewer",setup(r){const e=Pt(null),t=Pt(!0),n=Pt(null);let i,s,o,a,l,c,u=0,h=!1,d=!1,f={x:0},p=0,_=0,m=0,g=0,v=!1,y=null,x=null,S=0,E=0,A=0,M=0;qr(()=>{I(),D(),G(),Y(),b()}),Hf(()=>{x&&cancelAnimationFrame(x),y&&y.disconnect(),o&&o.dispose(),a&&a.scene.traverse(J=>{J.isMesh&&(J.geometry.dispose(),J.material.map&&J.material.map.dispose(),J.material.dispose())})});function b(){e.value&&(y=new ResizeObserver(()=>{N()}),y.observe(e.value))}function N(){if(!e.value||!o)return;const J=e.value.getBoundingClientRect(),Z=Math.min(J.width,J.height)||200;o.setSize(Z,Z),s.aspect=1,s.updateProjectionMatrix()}function I(){i=new BE,s=new Jn(30,1,.1,20),s.position.set(0,1.35,3.2),o=new N3({alpha:!0,antialias:!0}),o.setSize(200,200),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,e.value&&e.value.appendChild(o.domElement);const J=new ru(16774632,1.3);J.position.set(1,1.5,1.5),i.add(J);const Z=new ru(13162239,.5);Z.position.set(-.8,.6,-.5),i.add(Z);const P=new ru(16777215,.6);P.position.set(0,1.2,-1.5),i.add(P);const he=new SA(16777215,.5);i.add(he),c=new kA}function D(){const J=new U3;J.register(P=>new iL(P));const Z=new URL("/assets/loi-a3H-fH4W.vrm",import.meta.url).href;J.load(Z,P=>{if(a=P.userData.vrm,!a){n.value="VRM 数据未找到，请确保文件是 VRM 格式",t.value=!1;return}if(Ts.removeUnnecessaryVertices(P.scene),Ts.combineSkeletons(P.scene),a.scene.rotation.y=0,a.scene.position.y=.6,i.add(a.scene),l=new BA(a.scene),a.blendShapeProxy){const he=a.blendShapeProxy.getPresetNames();console.log("可用 BlendShapes:",he);const fe=["joy","fun","happy","smile","laugh","grin","Joy","Fun","Happy","Smile"];let He=!1;for(const Ge of fe)try{a.blendShapeProxy.setValue(Ge,.25),console.log("✅ 成功设置表情:",Ge),He=!0;break}catch{}He||console.log("❌ 未找到笑脸表情，可用列表:",he)}t.value=!1},P=>{Math.round(P.loaded/P.total*100)},P=>{n.value="请将 .vroid 文件转换为 .vrm 格式",t.value=!1,X()})}function X(){const J=new Dp(.5,32,32),Z=new Hu({color:6514417,wireframe:!0}),P=new Gn(J,Z);P.position.y=0,i.add(P);const he=()=>{x=requestAnimationFrame(he),P&&(P.rotation.y+=.01,P.rotation.x+=.005)};he()}function Y(){const J=o.domElement;J.addEventListener("mousedown",Z=>{h=!0,_=0,f={x:Z.clientX,y:Z.clientY}}),J.addEventListener("mousemove",Z=>{if(a){if(h)_=(Z.clientX-f.x)*.01,p+=_,f={x:Z.clientX,y:Z.clientY};else if(d){const P=J.getBoundingClientRect(),he=P.left+P.width/2,fe=P.top+P.height/2;S=(Z.clientY-fe)/(P.height/2)*.08,E=(Z.clientX-he)/(P.width/2)*.12}}}),J.addEventListener("mouseup",()=>{h=!1}),J.addEventListener("mouseenter",()=>{d=!0}),J.addEventListener("mouseleave",()=>{h=!1,d=!1,S=0,E=0}),J.addEventListener("touchstart",Z=>{h=!0,_=0,f={x:Z.touches[0].clientX,y:Z.touches[0].clientY}}),J.addEventListener("touchmove",Z=>{if(!h||!a)return;_=(Z.touches[0].clientX-f.x)*.01,p+=_,f={x:Z.touches[0].clientX,y:Z.touches[0].clientY}}),J.addEventListener("touchend",()=>{h=!1})}function $(J){const Z=Math.sin(J*1.57),P=Math.sin(J*3.14+1.2)*.25;return Math.pow(Math.abs((Z+1)/2),.7)*2-1+P*.15}function G(){requestAnimationFrame(G);const J=Math.min(c.getDelta(),.1);if(u+=J,l&&l.update(J),a){a.update(J);const Z=a.humanoid.getNormalizedBoneNode("leftUpperArm"),P=a.humanoid.getNormalizedBoneNode("rightUpperArm"),he=a.humanoid.getNormalizedBoneNode("leftLowerArm"),fe=a.humanoid.getNormalizedBoneNode("rightLowerArm"),He=a.humanoid.getNormalizedBoneNode("leftUpperLeg"),Ge=a.humanoid.getNormalizedBoneNode("rightUpperLeg"),Xe=a.humanoid.getNormalizedBoneNode("leftLowerLeg"),ie=a.humanoid.getNormalizedBoneNode("rightLowerLeg"),V=a.humanoid.getNormalizedBoneNode("spine"),Q=a.humanoid.getNormalizedBoneNode("head"),oe=a.humanoid.getNormalizedBoneNode("hips"),ue=$(u),xe=Math.sin(u*2.1+.7)*.25,Re=Math.sin(u*1.3)*.7+Math.sin(u*.7+1.8)*.3,pe=Math.sin(u*.55+1.2)*.6+Math.sin(u*.35+3.1)*.4,ge=Math.sin(u*4.3+.3)*.025,Ae=Math.sin(u*5.1+1.7)*.02,ke=Math.sin(u*3.7+2.9)*.018;if(z(J),Q){const Fe=Math.sin(u*.7)*.05+Math.sin(u*1.3+.8)*.03,Me=Math.sin(u*.55+.5)*.07+Math.sin(u*1.1+2.1)*.04,ye=Math.sin(u*.45+1)*.03+Math.sin(u*1.6)*.02,Te=u*.15,Pe=(Math.sin(Te)+1)/2,be=Math.pow(Math.max(0,Pe-.85)*6.67,3),Je=Math.sin(u*1.8+.3)*.08*be,O=Math.cos(u*1.5+.7)*.12*be;Q.rotation.x=Fe+Je+ge,Q.rotation.y=Me+O,Q.rotation.z=ye+ke*.5}V&&(V.rotation.x=ue*.05+xe*.02,V.rotation.z=Re*.035+pe*.025,V.rotation.y=Re*.025),oe&&(oe.rotation.z=Re*.05+pe*.035,oe.rotation.x=ue*.025);const K=a.humanoid.getNormalizedBoneNode("leftIndexProximal"),k=a.humanoid.getNormalizedBoneNode("leftMiddleProximal"),ut=a.humanoid.getNormalizedBoneNode("leftRingProximal"),at=a.humanoid.getNormalizedBoneNode("leftLittleProximal"),Ze=a.humanoid.getNormalizedBoneNode("leftThumbProximal"),Ue=a.humanoid.getNormalizedBoneNode("rightIndexProximal"),L=a.humanoid.getNormalizedBoneNode("rightMiddleProximal"),T=a.humanoid.getNormalizedBoneNode("rightRingProximal"),H=a.humanoid.getNormalizedBoneNode("rightLittleProximal"),ae=a.humanoid.getNormalizedBoneNode("rightThumbProximal"),le=Math.sin(u*3)*.1,re=Math.sin(u*3+Math.PI)*.1,we=Math.sin(u*2.2)*.06,ve=Math.cos(u*2.2)*.06,Ve=Math.sin(u*2)*.07;if(P&&(P.rotation.z=.65+re+Re*.03+ue*.015+Ae,P.rotation.x=-.45+we*.5-Re*.02+ue*.02+ke,P.rotation.y=-.18+ve*.5+Re*.02+ge),fe&&(fe.rotation.x=-.9+re*.5-Re*.03+ue*.015+Ae,fe.rotation.z=.5+le+ge*.3,fe.rotation.y=-.1+ve+Ae*.3),Z&&(Z.rotation.z=-.65+le+Re*.04+ue*.015+ge,Z.rotation.x=-.45+we*.5+Re*.03+ue*.02+Ae,Z.rotation.y=.18+ve*.5+Re*.02+ke),he&&(he.rotation.x=-.9+le*.5+Re*.03+ue*.015+ke,he.rotation.z=-.5+re+ge*.3,he.rotation.y=.1+ve+Ae*.3),K&&(K.rotation.x=.05+Ve+ge*.2),k&&(k.rotation.x=.05+Ve+Ae*.2),ut&&(ut.rotation.x=1.2-Ve*.5+ke*.2),at&&(at.rotation.x=1.2-Ve*.5+ge*.2),Ze&&(Ze.rotation.x=.6+Ve*.3,Ze.rotation.z=.3),Ue&&(Ue.rotation.x=.05+Ve+Ae*.2),L&&(L.rotation.x=.05+Ve+ke*.2),T&&(T.rotation.x=1.2-Ve*.5+ge*.2),H&&(H.rotation.x=1.2-Ve*.5+Ae*.2),ae&&(ae.rotation.x=.6+Ve*.3,ae.rotation.z=-.3),He&&(He.rotation.x=Re*.04+pe*.03+ge*.5,He.rotation.z=Re*.02+Ae*.5),Ge&&(Ge.rotation.x=-Re*.04-pe*.03+Ae*.5,Ge.rotation.z=-Re*.02+ke*.5),Xe&&(Xe.rotation.x=Re*.02+ke*.3),ie&&(ie.rotation.x=-Re*.02+ge*.3),!h&&Math.abs(_)>1e-4?(p+=_,_*=.94):!h&&Math.abs(_)<=1e-4&&(_=0),a.scene.rotation.y+=(p-a.scene.rotation.y)*.06,!h&&Math.abs(_)<5e-4&&(a.scene.rotation.y+=Math.sin(u*.35+1.5)*6e-4),A+=(S-A)*.05,M+=(E-M)*.05,Math.abs(A)>.001||Math.abs(M)>.001?(a.scene.rotation.x=A,a.scene.rotation.y+=M*.3):h||(a.scene.rotation.x+=(0-a.scene.rotation.x)*.03),a.scene.position.y=.6+ue*.025,a.blendShapeProxy)try{a.blendShapeProxy.setValue("joy",1)}catch{}}o.render(i,s)}function z(J){if(!(!a||!a.blendShapeProxy)){if(m+=J,!v&&m>=g&&(v=!0,m=0),v){const P=Math.min(m/.15,1);let he;if(P<.35)he=Math.sin(P/.35*Math.PI*.5);else if(P<.5)he=1;else{const fe=(P-.5)/.5;he=1-Math.sin(fe*Math.PI*.5)}try{a.blendShapeProxy.setValue("blink",he)}catch{}if(P>=1){v=!1,m=0,g=2+Math.random()*4;try{a.blendShapeProxy.setValue("blink",0)}catch{}}}g===0&&(g=1+Math.random()*3)}}return(J,Z)=>(dt(),vt("div",{ref_key:"container",ref:e,class:"vroid-viewer"},[t.value?(dt(),vt("div",wL,[...Z[0]||(Z[0]=[W("div",{class:"spinner"},null,-1),W("p",null,"加载模型中...",-1)])])):Zs("",!0),n.value?(dt(),vt("div",RL,[Z[1]||(Z[1]=W("p",null,"模型加载失败",-1)),W("p",CL,mn(n.value),1)])):Zs("",!0),!t.value&&!n.value?(dt(),vt("div",PL,"↔ 拖拽旋转")):Zs("",!0)],512))}},LL=Yr(IL,[["__scopeId","data-v-ca3036ec"]]),DL={class:"footer"},NL={class:"container"},OL={class:"footer-content"},UL={class:"footer-section"},FL={class:"footer-description-wrapper"},BL={class:"footer-section"},kL={class:"contact-info"},VL={__name:"Footer",setup(r){return(e,t)=>(dt(),vt("footer",DL,[W("div",NL,[W("div",OL,[W("div",UL,[t[0]||(t[0]=W("h3",{class:"footer-logo"},"Portfolio",-1)),W("div",FL,[Qt(LL)])]),W("div",BL,[t[4]||(t[4]=W("h3",null,"联系信息",-1)),W("div",kL,[W("p",null,[Qt(Kt(Q_),{size:16,class:"inline-icon"}),t[1]||(t[1]=ls(" 3258664928@qq.com",-1))]),W("p",null,[Qt(Kt(e0),{size:16,class:"inline-icon"}),t[2]||(t[2]=ls(" +86 183 1686 5751",-1))]),W("p",null,[Qt(Kt(t0),{size:16,class:"inline-icon"}),t[3]||(t[3]=ls(" 中国，汕头市",-1))])]),t[5]||(t[5]=El('<div class="footer-social" data-v-f6c58a9e><a href="https://github.com/ContinueYN" class="social-icon" data-v-f6c58a9e>GitHub</a><a href="https://blog.csdn.net" class="social-icon" data-v-f6c58a9e>CSDN</a><a href="127.0.0.1" class="social-icon" data-v-f6c58a9e>Telegram</a></div><br data-v-f6c58a9e><h3 data-v-f6c58a9e>友情链接</h3><div class="friend-links" data-v-f6c58a9e><a href="https://qqhamburger.top" class="friend-link" target="_blank" rel="noopener" data-v-f6c58a9e>QQ</a><a href="https://mypresentboxes.com" class="friend-link" target="_blank" rel="noopener" data-v-f6c58a9e>PresentBox</a></div>',4))])]),t[6]||(t[6]=W("div",{class:"footer-bottom"},[W("p",null,"© 2025 余诺个人作品集. 保留所有权利.")],-1))])]))}},zL=Yr(VL,[["__scopeId","data-v-f6c58a9e"]]),q_=1.9,HL=Gl({__name:"ArtBackground",props:{particleCount:{default:80},connectDistance:{default:100},isDark:{type:Boolean,default:!1}},setup(r){const e=r,t=Pt(null),n=si(()=>({position:"fixed",top:"0",left:"0",width:"100%",height:"100%",zIndex:"-1",pointerEvents:"none"}));let i=null,s=0,o=0,a=0,l=1,c=0,u=0;const h=Pt(!1),d=typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,f=(R,C)=>R+Math.random()*(C-R),p=(R,C,U)=>Math.min(U,Math.max(C,R)),_=(R,C,U)=>R+(C-R)*U;function m(R){return R[Math.floor(Math.random()*R.length)]}function g(R){const C=R.replace("#","");return[parseInt(C.slice(0,2),16),parseInt(C.slice(2,4),16),parseInt(C.slice(4,6),16)]}function v(R,C){const[U,B,ce]=g(R);return`rgba(${U}, ${B}, ${ce}, ${C})`}const y=new Map;function x(R,C){const U=document.createElement("canvas");U.width=R,U.height=R;const B=U.getContext("2d");return B&&C(B,R),U}function S(R,C=128){const U=`glow:${R}:${C}`;let B=y.get(U);return B||(B=x(C,(ce,j)=>{const de=ce.createRadialGradient(j/2,j/2,0,j/2,j/2,j/2);de.addColorStop(0,v(R,1)),de.addColorStop(.28,v(R,.5)),de.addColorStop(1,v(R,0)),ce.fillStyle=de,ce.fillRect(0,0,j,j)}),y.set(U,B),B)}function E(R,C=256){const U=`ring:${R}:${C}`;let B=y.get(U);return B||(B=x(C,(ce,j)=>{const de=j/2,Ie=ce.createRadialGradient(de,de,0,de,de,j*.22);Ie.addColorStop(0,v(R,.3)),Ie.addColorStop(1,v(R,0)),ce.fillStyle=Ie,ce.fillRect(0,0,j,j);const Oe=[{f:.24,w:3,a:.12},{f:.33,w:4,a:.24},{f:.42,w:5.5,a:.45}];ce.lineCap="round";for(const tt of Oe)ce.strokeStyle=v(R,tt.a),ce.lineWidth=tt.w,ce.beginPath(),ce.arc(de,de,j*tt.f,0,Math.PI*2),ce.stroke()}),y.set(U,B),B)}let A=null;function M(){if(A)return A;A=document.createElement("canvas"),A.width=320,A.height=140;const R=A.getContext("2d");if(!R)return A;const C=[[120,74,90,42],[200,68,70,36],[60,80,55,32],[255,84,45,30],[160,58,60,30]];for(const[U,B,ce,j]of C){const de=R.createRadialGradient(U,B,0,U,B,ce);de.addColorStop(0,"rgba(255,255,255,0.85)"),de.addColorStop(.7,"rgba(255,255,255,0.35)"),de.addColorStop(1,"rgba(255,255,255,0)"),R.save(),R.translate(U,B),R.scale(1,(j??30)/(ce??40)),R.translate(-U,-B),R.fillStyle=de,R.beginPath(),R.arc(U,B,ce,0,Math.PI*2),R.fill(),R.restore()}return A}let b=null;function N(){return b||(b=x(360,(C,U)=>{const B=U/2,ce=U*.21,j=C.createRadialGradient(B,B,ce*.5,B,B,U*.5);j.addColorStop(0,"rgba(253, 230, 160, 0.34)"),j.addColorStop(.4,"rgba(253, 230, 160, 0.13)"),j.addColorStop(1,"rgba(253, 230, 160, 0)"),C.fillStyle=j,C.fillRect(0,0,U,U),C.lineCap="round",C.strokeStyle="rgba(253, 235, 175, 0.16)",C.lineWidth=5,C.beginPath(),C.arc(B,B,U*.33,0,Math.PI*2),C.stroke(),C.strokeStyle="rgba(253, 235, 175, 0.09)",C.lineWidth=8,C.beginPath(),C.arc(B,B,U*.4,0,Math.PI*2),C.stroke();const de=C.createRadialGradient(B-ce*.25,B-ce*.3,ce*.1,B,B,ce);de.addColorStop(0,"#fffef7"),de.addColorStop(.65,"#fdf0c8"),de.addColorStop(1,"#f3cf7a"),C.fillStyle=de,C.beginPath(),C.arc(B,B,ce,0,Math.PI*2),C.fill(),C.globalAlpha=.14,C.fillStyle="#d9a94e";const Ie=[[B-ce*.28,B-ce*.12,ce*.16],[B+ce*.18,B+ce*.24,ce*.13],[B+ce*.32,B-ce*.3,ce*.09],[B-ce*.05,B+ce*.38,ce*.07]];for(const[Oe,tt,je]of Ie)C.beginPath(),C.arc(Oe,tt,je,0,Math.PI*2),C.fill();C.globalAlpha=1,C.strokeStyle="rgba(255, 250, 225, 0.5)",C.lineWidth=1.5,C.beginPath(),C.arc(B,B,ce*.98,0,Math.PI*2),C.stroke()}),b)}function I(R,C=256){const U=`pstar:${R}:${C}`;let B=y.get(U);return B||(B=x(C,(ce,j)=>{const de=j/2,Ie=ce.createRadialGradient(de,de,0,de,de,j*.48);Ie.addColorStop(0,v(R,.9)),Ie.addColorStop(.25,v(R,.4)),Ie.addColorStop(1,v(R,0)),ce.fillStyle=Ie,ce.fillRect(0,0,j,j),ce.strokeStyle=v(R,.3),ce.lineWidth=1.6,ce.beginPath(),ce.arc(de,de,j*.3,0,Math.PI*2),ce.stroke(),ce.strokeStyle=v(R,.16),ce.lineWidth=1,ce.beginPath(),ce.arc(de,de,j*.38,0,Math.PI*2),ce.stroke()}),y.set(U,B),B)}function D(){const R=document.createElement("canvas");R.width=Math.max(1,Math.round(o*l)),R.height=Math.max(1,Math.round(a*l));const C=R.getContext("2d");return C?(C.setTransform(l,0,0,l,0,0),R):null}const X=["#ffd27a","#8ee8e0","#f5b5c8","#b7e9a8","#a9c8f0"],Y=["#fff1c4","#bff0e8","#ffd9a0"];let $=null,G=[],z=[],J=[],Z=[],P=[],he=0,fe=.66;function He(){const R=D();if(!R)return;const C=R.getContext("2d"),U=o,B=a;fe=.66;const ce=C.createLinearGradient(0,0,0,B*.72);ce.addColorStop(0,"#fdf9f0"),ce.addColorStop(.45,"#e7f3f1"),ce.addColorStop(.72,"#fcecd9"),C.fillStyle=ce,C.fillRect(0,0,U,B*.74);const j=U*.78,de=B*.17,Ie=Math.min(U,B)*.4,Oe=C.createRadialGradient(j,de,0,j,de,Ie);Oe.addColorStop(0,"rgba(255, 236, 180, 0.5)"),Oe.addColorStop(.4,"rgba(255, 236, 180, 0.16)"),Oe.addColorStop(1,"rgba(255, 236, 180, 0)"),C.fillStyle=Oe,C.fillRect(j-Ie,de-Ie,Ie*2,Ie*2);const tt=[{base:.47,amp:.05,f1:1.4,f2:3.1,p1:.6,p2:1.9,color:"#cfe8e9",alpha:.75},{base:.56,amp:.06,f1:1.1,f2:2.6,p1:2.4,p2:.8,color:"#bcdcdd",alpha:.8},{base:.64,amp:.05,f1:.9,f2:2.2,p1:4.1,p2:3.2,color:"#a8cfd3",alpha:.85}];for(const Ke of tt){const nt=[];for(let xt=0;xt<=48;xt++){const Nt=xt/48*U,ii=B*(Ke.base+Ke.amp*(Math.sin(Nt*Ke.f1/U*Math.PI*2+Ke.p1)+.6*Math.sin(Nt*Ke.f2/U*Math.PI*2+Ke.p2)));nt.push([Nt,ii])}const lt=C.createLinearGradient(0,B*.45,0,B);lt.addColorStop(0,v(Ke.color,Ke.alpha*.25)),lt.addColorStop(1,v(Ke.color,Ke.alpha)),C.fillStyle=lt,C.beginPath(),C.moveTo(0,B);for(const[xt,Nt]of nt)C.lineTo(xt,Nt);C.lineTo(U,B),C.closePath(),C.fill()}const je=B*fe,Dt=C.createLinearGradient(0,je,0,B);Dt.addColorStop(0,"rgba(255, 250, 235, 0.85)"),Dt.addColorStop(.25,"rgba(226, 240, 240, 0.75)"),Dt.addColorStop(1,"rgba(206, 230, 234, 0.8)"),C.fillStyle=Dt,C.fillRect(0,je,U,B-je);const mt=C.createLinearGradient(0,je-3,0,je+3);mt.addColorStop(0,"rgba(255,255,255,0)"),mt.addColorStop(.5,"rgba(255,255,255,0.55)"),mt.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=mt,C.fillRect(0,je-3,U,6);for(let Ke=0;Ke<7;Ke++){const gt=je+(B-je)*(.12+Ke*.13),nt=3+Ke%3*2,lt=C.createLinearGradient(0,gt-nt-4,0,gt+nt+4);lt.addColorStop(0,"rgba(255,255,255,0)"),lt.addColorStop(.5,`rgba(255, 255, 255, ${.1+Ke%2*.05})`),lt.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=lt,C.fillRect(0,gt-nt-4,U,nt*2+8)}C.globalAlpha=.16;for(let Ke=0;Ke<3;Ke++){const gt=U*(.18+Ke*.26),nt=U*.2,lt=je+(B-je)*.14,xt=C.createLinearGradient(0,je,0,lt);xt.addColorStop(0,v("#b9d6d9",.5)),xt.addColorStop(1,v("#b9d6d9",0)),C.fillStyle=xt,C.beginPath(),C.moveTo(gt-nt/2,je+2),C.lineTo(gt+nt/2,je+2),C.quadraticCurveTo(gt,je+2,gt,lt),C.quadraticCurveTo(gt,je+2,gt-nt/2,je+2),C.fill()}C.globalAlpha=1,$=R}function Ge(){He();const R=Math.round(p(e.particleCount*.5*(d?.6:1),20,46));J=[];for(let C=0;C<R;C++){const U=f(.3,1);J.push({x:f(0,o),y:f(0,a*.85),r:f(.8,2.2)*U+.4,vx:0,vy:-f(4,12)*U,phase:f(0,Math.PI*2),phaseSpeed:f(.4,1.4),color:m(X),alpha:f(.3,.66)*U,depth:U})}G=[];for(let C=0;C<3;C++)G.push({x:f(-.1,1.1)*o,y:f(.08,.42)*a,s:f(.5,1),vx:f(4,10)});Z=[],P=[],he=f(6,10),z=[];for(let C=0;C<3;C++)z.push({x:f(0,o),y:a*(fe+f(.05,.3)),r:f(120,200),vx:f(-14,14),vy:f(-8,8),phase:f(0,Math.PI*2),color:m(Y),alpha:f(.05,.09)})}function Xe(R,C,U=1){Z.length>22&&Z.shift();const B=p(e.connectDistance/100,.8,1.4);Z.push({x:R,y:C,r:3,speed:f(70,110)*U,alpha:f(.32,.46)*U,maxR:Math.min(o,a)*f(.2,.3)*B,seed:f(0,Math.PI*2)})}function ie(R){for(const C of J)C.phase+=C.phaseSpeed*R,C.x+=(C.vx+Math.cos(C.phase)*7*C.depth)*R,C.y+=C.vy*R,C.vx*=Math.max(0,1-2.6*R),C.vy*=Math.max(0,1-2*R),C.y<-26&&(C.y=a*.85+26,C.x=f(0,o)),C.x<-32?C.x=o+32:C.x>o+32&&(C.x=-32);for(const C of G)C.x+=C.vx*R,C.x>o+160&&(C.x=-160,C.y=f(.08,.42)*a);for(let C=Z.length-1;C>=0;C--){const U=Z[C];U&&(U.r+=U.speed*R,U.speed*=Math.max(.25,1-.55*R),U.alpha*=Math.max(0,1-.6*R),(U.r>=U.maxR||U.alpha<.014)&&Z.splice(C,1))}for(const C of Z)for(const B of J){const ce=B.x-C.x,j=B.y-C.y,de=Math.hypot(ce,j);if(de<1)continue;const Ie=Math.abs(de-C.r);if(Ie<30&&C.r>10){const Oe=(1-Ie/30)*5.4*(1-C.r/C.maxR);B.vx+=ce/de*Oe*B.depth,B.vy+=j/de*Oe*B.depth-.8*B.depth}}for(let C=P.length-1;C>=0;C--){const U=P[C];U&&(U.life-=R,U.life<=0&&P.splice(C,1))}d||(he-=R,he<=0&&(Xe(f(0,o),a*(fe+f(.05,.35)),f(.5,.75)),he=f(8,14)));for(const C of z){C.x+=C.vx*R,C.y+=C.vy*R,C.phase+=R*.35;const U=C.r+60;C.x<-U?C.x=o+U:C.x>o+U&&(C.x=-U),C.y<a*fe-20?C.y=a*(fe+.3):C.y>a+U&&(C.y=a*(fe+.05))}}function V(){const R=i;if(!R)return;R.clearRect(0,0,o,a),$&&R.drawImage($,0,0,o,a),R.globalCompositeOperation="lighter";const C=M();for(const B of G){const ce=320*B.s;R.globalAlpha=.5*B.s,R.drawImage(C,B.x-ce/2,B.y-ce/4,ce,ce*.44)}R.globalAlpha=1,R.globalCompositeOperation="lighter";for(const B of z){const ce=.7+.3*Math.sin(B.phase),j=B.r*2;R.globalAlpha=B.alpha*ce,R.drawImage(S(B.color),B.x-j/2,B.y-j/2,j,j)}R.globalAlpha=1;for(const B of J){const ce=.62+.38*Math.sin(B.phase*1.6),j=B.r*9;R.globalAlpha=B.alpha*ce*.5,R.drawImage(S(B.color),B.x-j/2,B.y-j/2,j,j),R.globalAlpha=B.alpha*ce,R.fillStyle=v(B.color,1),R.beginPath(),R.arc(B.x,B.y,Math.max(.6,B.r*.5),0,Math.PI*2),R.fill()}R.globalAlpha=1;const U=E("#d89a4e");for(const B of Z){const ce=1-B.r/B.maxR;if(ce<=0)continue;const j=Math.max(6,B.r*.5);R.globalAlpha=B.alpha*.3*ce,R.drawImage(S("#fff3d6"),B.x-j/2,B.y-j/2,j,j);const de=B.r/.42;R.globalAlpha=B.alpha*(.5+.5*ce),R.save(),R.translate(B.x,B.y),R.rotate(B.seed),R.scale(1,.9+.1*Math.sin(B.seed*7)),R.drawImage(U,-de/2,-de/2,de,de),R.restore()}R.globalAlpha=1,R.globalCompositeOperation="lighter";for(const B of P){const ce=B.life/.8,j=16+34*ce;R.globalAlpha=.11*ce,R.drawImage(S("#ffe9b8"),B.x-j/2,B.y-j/2,j,j)}Te.inWindow&&(R.globalAlpha=.06,R.drawImage(S("#fff7e0"),Pe-210/2,be-210/2,210,210)),R.globalAlpha=1,R.globalCompositeOperation="source-over"}const Q=["#ffffff","#e8ecff","#c4b5fd","#fde68a","#93c5fd"],oe=["#ffffff","#e8ecff","#c7d2fe","#a5b4fc","#fde68a"],ue={x:0,y:0,r:40};let xe=null,Re=null,pe=null,ge=[],Ae=[],ke=null,K=[],k=[],ut=[],at=0,Ze=0,Ue=0,L=0,T=200;function H(){const R=D();if(!R)return;const C=R.getContext("2d"),U=o,B=a,ce=C.createLinearGradient(0,0,0,B);ce.addColorStop(0,"#060a1c"),ce.addColorStop(.45,"#10162f"),ce.addColorStop(.8,"#1c1a44"),ce.addColorStop(1,"#241f52"),C.fillStyle=ce,C.fillRect(0,0,U,B);const j=U*.5,de=B*.5,Ie=-.42,Oe=Math.hypot(U,B)*.95;C.save(),C.translate(j,de),C.rotate(Ie),C.globalCompositeOperation="lighter";const tt=["rgba(178, 170, 255,","rgba(140, 210, 235,","rgba(255, 220, 170,"],je=Math.round(p(Oe/240,6,12));for(let Ke=0;Ke<je;Ke++){const gt=-Oe/2+Ke/(je-1)*Oe+f(-Oe*.06,Oe*.06),nt=f(-1,1)*Oe*.05,lt=f(Oe*.06,Oe*.14),xt=m(tt),Nt=C.createRadialGradient(gt,nt,0,gt,nt,lt);Nt.addColorStop(0,`${xt} ${f(.05,.1)})`),Nt.addColorStop(1,`${xt} 0)`),C.fillStyle=Nt,C.fillRect(gt-lt,nt-lt,lt*2,lt*2)}const Dt=Math.round(p(Oe/4,120,260));for(let Ke=0;Ke<Dt;Ke++){const gt=f(-Oe/2,Oe/2),nt=f(-1,1)*Oe*.055,lt=f(.2,.7);C.fillStyle=`rgba(255, 255, 255, ${lt})`,C.fillRect(gt,nt,f(.5,1.4),f(.5,1.4))}C.restore(),C.globalCompositeOperation="source-over",C.globalCompositeOperation="lighter";const mt=[[U*.18,B*.22,Math.min(U,B)*.3,"#5b21b6",.05],[U*.82,B*.42,Math.min(U,B)*.34,"#155e75",.045],[U*.55,B*.78,Math.min(U,B)*.3,"#4c1d95",.05]];for(const[Ke,gt,nt,lt,xt]of mt){const Nt=C.createRadialGradient(Ke,gt,0,Ke,gt,nt);Nt.addColorStop(0,v(lt,xt)),Nt.addColorStop(1,v(lt,0)),C.fillStyle=Nt,C.fillRect(Ke-nt,gt-nt,nt*2,nt*2)}C.globalCompositeOperation="source-over",xe=R}function ae(){const R=D();if(!R)return;const C=R.getContext("2d"),U=Math.round(p(o*a/3600,150,480)*(d?.7:1)),B=["#ffffff","#dfe6ff","#cbd5e1","#f5f3ff","#fde68a"];for(let ce=0;ce<U;ce++)C.fillStyle=v(m(B),f(.1,.5)),C.beginPath(),C.arc(f(0,o),f(0,a),f(.4,1.5),0,Math.PI*2),C.fill();Re=R}function le(){const R=D();if(!R)return;const C=R.getContext("2d"),U=o,B=a,ce=B*.78;C.fillStyle="#0d1230",C.beginPath(),C.moveTo(0,B);for(let de=0;de<=30;de++){const Ie=de/30*U,Oe=ce+B*.06*Math.sin(de*.55+1.2);C.lineTo(Ie,Oe)}C.lineTo(U,B),C.closePath(),C.fill(),C.fillStyle="#080c22",C.beginPath(),C.moveTo(0,B);for(let de=0;de<=30;de++){const Ie=de/30*U,Oe=ce+B*.13+B*.05*Math.sin(de*.4+4);C.lineTo(Ie,Oe)}C.lineTo(U,B),C.closePath(),C.fill();const j=Math.round(p(U/160,8,14));for(let de=0;de<j;de++){const Ie=f(.05,.95)*U,Oe=ce+B*.13+B*.05*Math.sin(Ie/U*30*.4+4)+f(-6,10),tt=S("#fbbf24"),je=f(14,26);C.globalAlpha=f(.35,.6),C.drawImage(tt,Ie-je/2,Oe-je/2,je,je),C.globalAlpha=1,C.fillStyle="rgba(255, 232, 170, 0.95)",C.fillRect(Ie-1,Oe-1,2.2,2.2)}pe=R}function re(){Ue=o*.45,L=a*.26,T=Math.min(o,a)*.34*p(e.connectDistance/100,.85,1.1);const R=Math.ceil(T*2.2),C=document.createElement("canvas");C.width=R,C.height=R;const U=C.getContext("2d");if(!U)return;const B=R/2,ce=R/2,j=R*.46,de=q_,Ie=2,Oe=j*.16,tt=U.createRadialGradient(B,ce,0,B,ce,Oe*3);tt.addColorStop(0,"rgba(205, 212, 255, 0.55)"),tt.addColorStop(.35,"rgba(150, 160, 245, 0.18)"),tt.addColorStop(1,"rgba(150, 160, 245, 0)"),U.fillStyle=tt,U.fillRect(0,0,R,R);const je=Math.round(64*(d?.7:1)),Dt=Math.round(110*(d?.6:1));for(let Ke=0;Ke<Ie;Ke++){for(let gt=0;gt<je;gt++){const nt=Math.pow(Math.random(),.85),lt=Ke*Math.PI+.4+nt*de*Math.PI*2,xt=j*Math.pow(nt,1.3),Nt=j*(.012+nt*.03)*(Math.random()*2-1),ii=B+Math.cos(lt)*(xt+Nt),w=ce+Math.sin(lt)*(xt+Nt),q=_(.5,1.6,nt)*(.6+Math.random()*.8),ne=_(.85,.35,nt)*(.6+Math.random()*.4);U.fillStyle=v(m(oe),ne),U.beginPath(),U.arc(ii,w,q,0,Math.PI*2),U.fill()}for(let gt=0;gt<Dt;gt++){const nt=Math.pow(Math.random(),.8),lt=Ke*Math.PI+.4+nt*de*Math.PI*2,xt=j*Math.pow(nt,1.3),Nt=j*(.02+nt*.045)*(Math.random()*2-1),ii=B+Math.cos(lt)*(xt+Nt),w=ce+Math.sin(lt)*(xt+Nt);U.fillStyle=`rgba(255, 255, 255, ${f(.12,.38)})`,U.fillRect(ii,w,f(.4,.9),f(.4,.9))}}ke=C,K=[];const mt=Math.round(10*(d?.5:1));for(let Ke=0;Ke<mt;Ke++)K.push({t:f(.05,.95),arm:Math.random()<.5?0:1,speed:f(.05,.11),size:f(1.2,2.4)})}function we(){H(),ae(),le();const R=Math.round(p(e.particleCount*.42*(d?.6:1),26,58));ge=[];for(let B=0;B<R;B++)ge.push({x:f(0,o),y:f(0,a*.86),r:f(.5,1.9)+(Math.random()<.06?.9:0),phase:f(0,Math.PI*2),period:f(1.2,4.2),color:m(Q),flare:Math.random()<.07,baseAlpha:f(.3,.85)});Ae=[];const C=["#fde68a","#ffffff","#e9d5ff"],U=Math.round(p(e.particleCount/24,4,7));for(let B=0;B<U;B++)Ae.push({x:f(.08,.92)*o,y:f(.05,.5)*a,r:f(16,30),phase:f(0,Math.PI*2),color:m(C)});re(),k=[],at=f(1.2,3.2),ut=[],Ze=0,ue.x=o*.78,ue.y=a*.16,ue.r=Math.max(32,Math.min(o,a)*.055)}function ve(R=0){const C=Math.random()<.08,U=f(0,o),B=f(-40,a*.22),ce=f(.42,1.05),j=C?f(320,430):f(460,700),de=Math.max(.5,f(.9,1.5)-R),Ie=Math.random(),Oe=Ie<.68?"#ffffff":Ie<.88?"#ffe9b8":"#d9c9ff";k.push({x:U,y:B,vx:Math.cos(ce)*j,vy:Math.sin(ce)*j,life:de,maxLife:de,len:C?f(280,420):f(160,260),hue:Oe,fireball:C})}function Ve(){ut.length>20&&ut.shift();const R=f(-1.7,1.7),C=f(6,22),U=f(.35,.7);ut.push({x:Pe,y:be,vx:Math.cos(R)*C*.7,vy:Math.sin(R)*C*.7-6,life:U,maxLife:U,r:f(.7,1.7),color:Math.random()<.72?"#c4b5fd":"#ffffff"})}function Fe(R){for(const C of ge)C.phase+=R*Math.PI*2/C.period;for(const C of Ae)C.phase+=R*1.4;for(const C of K)C.t+=C.speed*R,C.t>1&&(C.t=.03);if(!d&&(at-=R,at<=0)){const C=Math.random()<.1?2:1;for(let U=0;U<C;U++)ve(U*.1);at=f(2.6,5.4)}for(let C=k.length-1;C>=0;C--){const U=k[C];if(U){if(U.x+=U.vx*R,U.y+=U.vy*R,U.life-=R,!d&&Math.random()<R*26){ut.length>36&&ut.shift();const B=Math.hypot(U.vx,U.vy)||1;ut.push({x:U.x-U.vx/B*10,y:U.y-U.vy/B*10,vx:U.vx*.12+f(-20,20),vy:U.vy*.12+f(-20,20)-6,life:f(.3,.6),maxLife:.6,r:f(.6,1.5),color:U.hue})}(U.life<=0||U.x<-U.len-60||U.x>o+U.len+60||U.y>a+U.len+60)&&k.splice(C,1)}}!d&&Te.inWindow&&(Ze-=R,Ze<=0&&(Math.random()<.55&&Ve(),Ze=.045));for(let C=ut.length-1;C>=0;C--){const U=ut[C];U&&(U.x+=U.vx*R,U.y+=U.vy*R,U.life-=R,U.life<=0&&ut.splice(C,1))}}function Me(R){const C=c*(d?.004:.045);if(R.globalCompositeOperation="lighter",ke){const B=ke.width;R.save(),R.translate(Ue,L),R.rotate(C),R.drawImage(ke,-B/2,-B/2),R.restore()}const U=T*1.05;for(const B of K){const ce=B.arm*Math.PI+.4+B.t*q_*Math.PI*2+C,j=U*Math.pow(B.t,1.3),de=Ue+Math.cos(ce)*j,Ie=L+Math.sin(ce)*j,Oe=Math.sin(B.t*Math.PI)*.9,tt=B.size*6;R.globalAlpha=Oe*.5,R.drawImage(S("#dfe6ff"),de-tt/2,Ie-tt/2,tt,tt),R.globalAlpha=Oe*.9,R.fillStyle="#ffffff",R.beginPath(),R.arc(de,Ie,B.size*.45,0,Math.PI*2),R.fill()}R.globalAlpha=1}function ye(){const R=i;if(!R)return;const C=o,U=a;R.clearRect(0,0,C,U),xe&&R.drawImage(xe,0,0,C,U),Re&&R.drawImage(Re,0,0,C,U),Me(R),R.globalCompositeOperation="lighter";for(const j of Ae){const de=Math.sin(j.phase)*.5+.5,Ie=j.r*5;R.globalAlpha=.6+.4*de,R.drawImage(I(j.color),j.x-Ie/2,j.y-Ie/2,Ie,Ie),R.globalAlpha=.95,R.fillStyle="#ffffff",R.beginPath(),R.arc(j.x,j.y,j.r*.16,0,Math.PI*2),R.fill()}R.globalAlpha=1,R.globalCompositeOperation="lighter";for(const j of ge){const de=Math.sin(j.phase)*.5+.5,Ie=j.baseAlpha*(.35+.65*de);if(j.r>1.5){const Oe=j.r*8;R.globalAlpha=Ie*.5,R.drawImage(S(j.color),j.x-Oe/2,j.y-Oe/2,Oe,Oe),R.globalAlpha=1}if(R.fillStyle=v(j.color,Ie),R.beginPath(),R.arc(j.x,j.y,j.r,0,Math.PI*2),R.fill(),j.flare&&Ie>.3){const Oe=j.r*5;R.strokeStyle=v(j.color,Ie*.45),R.lineWidth=.8,R.beginPath(),R.moveTo(j.x-Oe,j.y),R.lineTo(j.x+Oe,j.y),R.moveTo(j.x,j.y-Oe),R.lineTo(j.x,j.y+Oe),R.stroke()}}const B=1+.015*Math.sin(c*.5),ce=ue.r*4.8*B;R.globalAlpha=1,R.drawImage(N(),ue.x-ce/2,ue.y-ce/2,ce,ce),pe&&R.drawImage(pe,0,0,C,U),R.lineCap="round";for(const j of k){const de=p(j.life/j.maxLife,0,1);if(Math.hypot(j.vx,j.vy)<1||de<=.01)continue;const Oe=Math.atan2(j.vy,j.vx),tt=j.len*(.6+.4*de),je=j.fireball?5.5:3.2;R.save(),R.translate(j.x,j.y),R.rotate(Oe);const Dt=R.createLinearGradient(0,0,-tt,0);Dt.addColorStop(0,v(j.hue,de*.3)),Dt.addColorStop(.55,v(j.hue,de*.08)),Dt.addColorStop(1,v(j.hue,0)),R.strokeStyle=Dt,R.lineWidth=j.fireball?9:6,R.beginPath(),R.moveTo(0,0),R.lineTo(-tt,0),R.stroke();const mt=R.createLinearGradient(0,0,-tt*.6,0);mt.addColorStop(0,v(j.hue,de*.9)),mt.addColorStop(1,v(j.hue,0)),R.strokeStyle=mt,R.lineWidth=j.fireball?3.2:1.9,R.beginPath(),R.moveTo(0,0),R.lineTo(-tt*.6,0),R.stroke(),R.restore();const Ke=je*6*de;R.globalAlpha=de*.95,R.drawImage(S(j.hue),j.x-Ke/2,j.y-Ke/2,Ke,Ke),R.globalAlpha=de,R.fillStyle="#ffffff",R.beginPath(),R.arc(j.x,j.y,je*de*.5+.4,0,Math.PI*2),R.fill()}R.globalAlpha=1;for(const j of ut){const de=p(j.life/j.maxLife,0,1),Ie=j.r*7;R.globalAlpha=de*.55,R.drawImage(S(j.color),j.x-Ie/2,j.y-Ie/2,Ie,Ie),R.globalAlpha=de*.9,R.fillStyle=v(j.color,1),R.beginPath(),R.arc(j.x,j.y,Math.max(.5,j.r*.5),0,Math.PI*2),R.fill()}Te.inWindow&&(R.globalAlpha=.045,R.drawImage(S("#8b7cf6"),Pe-220/2,be-220/2,220,220)),R.globalAlpha=1,R.globalCompositeOperation="source-over"}const Te={x:-9999,y:-9999,inWindow:!1};let Pe=-9999,be=-9999,Je=-9999,O=-9999,Se=0,_e=0,Ee=0;function me(R){const C=R.clientX,U=R.clientY;if(Te.x=C,Te.y=U,Te.inWindow=!0,!e.isDark){const B=C-Je,ce=U-O,j=Math.hypot(B,ce),de=performance.now();Je<-500?(Xe(C,U,.8),Se=0,_e=de):j>0&&(Se+=j,Se>=20&&de-_e>28&&(Xe(C,U,p(j/46,.6,1.4)),Se=0,_e=de),Ee+=j,Ee>=26&&(P.length>16&&P.shift(),P.push({x:C,y:U,life:.8}),Ee=0))}Je=C,O=U}function se(){Te.x=-9999,Te.y=-9999,Te.inWindow=!1,Je=-9999,O=-9999,Se=0,Ee=0}function ze(R){const C=R.touches[0];if(!C)return;const U=C.clientX,B=C.clientY;Te.x=U,Te.y=B,Te.inWindow=!0,e.isDark||(Xe(U,B,1),Se=0,_e=performance.now()),Je=U,O=B}function Qe(R){const C=R.touches[0];if(!C)return;const U=C.clientX,B=C.clientY;if(Te.x=U,Te.y=B,Te.inWindow=!0,!e.isDark){const ce=U-Je,j=B-O,de=Math.hypot(ce,j),Ie=performance.now();Se+=de,Se>=20&&Ie-_e>30&&(Xe(U,B,1),Se=0,_e=Ie)}Je=U,O=B}function yt(){const R=t.value;R&&(o=window.innerWidth,a=window.innerHeight,l=Math.min(window.devicePixelRatio||1,1.75),R.width=Math.round(o*l),R.height=Math.round(a*l),i=R.getContext("2d"),i&&i.setTransform(l,0,0,l,0,0))}function Ne(){e.isDark?we():Ge()}function $e(){yt(),Ne()}function ft(R){if(s=requestAnimationFrame(ft),document.hidden)return;u===0&&(u=R);const C=Math.min(R-u,50);u=R;const U=C/1e3;if(c+=U,Te.inWindow){Pe<-500&&(Pe=Te.x,be=Te.y);const B=Math.min(1,7*U);Pe+=(Te.x-Pe)*B,be+=(Te.y-be)*B}h.value||(e.isDark?(Fe(U),ye()):(ie(U),V()))}return Iu(()=>e.isDark,(R,C)=>{if(R===C)return;h.value=!0;const U=t.value;U&&(U.style.opacity="0"),window.setTimeout(()=>{Ne(),U&&(U.style.opacity="1"),h.value=!1},260)}),qr(()=>{yt(),Ne(),u=performance.now(),s=requestAnimationFrame(ft),window.addEventListener("resize",$e),window.addEventListener("mousemove",me),window.addEventListener("mouseleave",se),window.addEventListener("touchstart",ze,{passive:!0}),window.addEventListener("touchmove",Qe,{passive:!0})}),Qx(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",$e),window.removeEventListener("mousemove",me),window.removeEventListener("mouseleave",se),window.removeEventListener("touchstart",ze),window.removeEventListener("touchmove",Qe)}),(R,C)=>(dt(),vt("canvas",{ref_key:"canvasRef",ref:t,class:"particle-canvas","aria-hidden":"true",style:Xs(n.value)},null,4))}}),GL=Yr(HL,[["__scopeId","data-v-626fdc6e"]]);var WL=SM();const Y_=TM(WL),$_={get(r,e){try{const t=localStorage.getItem(r);return t?JSON.parse(t):e}catch{return e}},set(r,e){localStorage.setItem(r,JSON.stringify(e))},remove(r){localStorage.removeItem(r)}},j_={THEME:"theme"};function XL(){const r=Pt(!1),e=()=>{r.value=!r.value,$_.set(j_.THEME,r.value?"dark":"light"),document.documentElement.classList.toggle("dark",r.value)},t=()=>{const n=$_.get(j_.THEME,null),i=window.matchMedia("(prefers-color-scheme: dark)").matches;r.value=n?n==="dark":i,document.documentElement.classList.toggle("dark",r.value)};return qr(()=>{t()}),{isDark:r,toggleTheme:e}}const qL=Gl({__name:"App",setup(r){const{isDark:e,toggleTheme:t}=XL(),n=RM(),i=Pt(!1),s=Pt(!1),o=si(()=>n.path.startsWith("/blog"));return zc("theme",{isDark:e,toggleTheme:t}),qr(()=>{const a=window,l=()=>{i.value=!0,zf(()=>{requestAnimationFrame(()=>{s.value=!0,Y_.init({duration:600,offset:50,once:!0,mirror:!1,easing:"ease-out",delay:0,throttleDelay:99})})})};a.__loadingComplete?l():window.addEventListener("loading-complete",l)}),Iu(n,()=>{setTimeout(()=>{Y_.refresh()},300)}),(a,l)=>{const c=eM("router-view");return dt(),vt("div",{id:"app",class:Vr({dark:Kt(e)})},[Qt(GL,{"particle-count":Kt(e)?120:60,"connect-distance":Kt(e)?150:100,"is-dark":Kt(e)},null,8,["particle-count","connect-distance","is-dark"]),o.value?(dt(),al(c,{key:0},{default:Hs(({Component:u})=>[Qt(tM,{name:"fade",mode:"out-in"},{default:Hs(()=>[(dt(),al(Hc(u)))]),_:2},1024)]),_:1})):i.value?(dt(),vt("div",{key:1,class:Vr(["home-content",{"content-ready":s.value}])},[Qt(Hy,{isDark:Kt(e),onToggleTheme:Kt(t)},null,8,["isDark","onToggleTheme"]),W("main",null,[Qt(nS),Qt(fS),Qt(GS),Qt(kT),Qt(xb)]),Qt(zL)],2)):(dt(),vt(qi,{key:2},[],64))],2)}}}),YL="modulepreload",$L=function(r){return"/"+r},K_={},Vc=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=$L(c),c in K_)return;K_[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":YL,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},jL=[{path:"/",name:"Home",component:()=>Vc(()=>import("./Home-BcbT4aiz.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"/blog",name:"Blog",component:()=>Vc(()=>import("./Blog-DYGbpVtr.js"),__vite__mapDeps([5,6,1,2,3,7]))},{path:"/blog/:id",name:"BlogPost",component:()=>Vc(()=>import("./BlogPost-BQcAulCe.js"),__vite__mapDeps([8,6,1,2,3,9])),props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Vc(()=>import("./NotFound-C8yA51Li.js"),__vite__mapDeps([10,1,2,3,11]))}],KL=Py({history:cy(),routes:jL,scrollBehavior(r,e,t){return t||{top:0}}});function cd(r){const e=document.documentElement;e.classList.remove("theme-day","theme-night"),e.classList.add(r?"theme-night":"theme-day")}if(window.matchMedia){const r=window.matchMedia("(prefers-color-scheme: dark)");cd(r.matches);const e=t=>cd("matches"in t?t.matches:r.matches);typeof r.addEventListener=="function"?r.addEventListener("change",e):typeof r.addListener=="function"&&r.addListener(e)}else cd(!1);const Vp=nM(qL);Vp.config.errorHandler=(r,e,t)=>{console.error("Global error:",r),console.error("Error info:",t),console.error("Vue instance:",e)};Vp.use(KL);Vp.mount("#app");export{GL as A,xb as C,zL as F,Hy as H,kT as P,Vo as R,GS as S,Yr as _,nS as a,fS as b,eD as c,RM as d,Gy as e,XL as u};
