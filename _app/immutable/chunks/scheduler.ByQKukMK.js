function N(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function X(){return Object.create(null)}function T(t){t.forEach(D)}function B(t){return typeof t=="function"}function Y(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function Z(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function $(t,n){return t!=t?n==n:t!==n}function tt(t){return Object.keys(t).length===0}function A(t,...n){if(t==null){for(const i of n)i(void 0);return N}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function nt(t){let n;return A(t,e=>n=e)(),n}function et(t,n,e){t.$$.on_destroy.push(A(n,e))}function it(t,n,e,i){if(t){const r=j(t,n,e,i);return t[0](r)}}function j(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function rt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function ct(t,n,e,i,r,u){if(r){const c=j(n,e,i,u);t.p(c,r)}}function lt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function st(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ut(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function ot(t){return t??""}function at(t){return t&&B(t.destroy)?t.destroy:N}let p=!1;function ft(){p=!0}function _t(){p=!1}function L(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:L(1,r,P=>n[e[P]].claim_order,o))-1;i[l]=e[a]+1;const E=a+1;e[E]=l,r=Math.max(E,r)}const u=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[l],a)}}function H(t,n){if(p){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){p&&!e?H(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ht(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function I(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function pt(){return w(" ")}function yt(){return w("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){n.target===this&&t.call(this,n)}}function F(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const U=["width","height"];function xt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set&&U.indexOf(i)===-1?t[i]=n[i]:F(t,i,n[i])}function vt(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,n,e,i,r=!1){W(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function O(t,n,e,i){return S(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return O(t,n,e,I)}function kt(t,n,e){return O(t,n,e,z)}function G(t,n){return S(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>w(n),!0)}function Nt(t){return G(t," ")}function At(t,n){n=""+n,t.data!==n&&(t.data=n)}function jt(t,n){t.value=n??""}function St(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function Ot(t,n,e){t.classList.toggle(n,!!e)}function J(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function qt(t,n){return new t(n)}let m;function g(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Pt(t){y().$$.on_mount.push(t)}function Ct(t){y().$$.after_update.push(t)}function Dt(t){y().$$.on_destroy.push(t)}function Tt(){const t=y();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=J(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],k=[];let _=[];const x=[],q=Promise.resolve();let v=!1;function K(){v||(v=!0,q.then(R))}function Bt(){return K(),q}function Q(t){_.push(t)}function Lt(t){x.push(t)}const b=new Set;let f=0;function R(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,g(n),V(n.$$)}}catch(n){throw d.length=0,f=0,n}for(g(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;x.length;)x.pop()();v=!1,b.clear(),g(t)}function V(t){if(t.fragment!==null){t.update(),T(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}function Mt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{ot as $,tt as A,Q as B,Mt as C,m as D,g as E,D as F,d as G,K as H,ft as I,_t as J,z as K,kt as L,$ as M,vt as N,Lt as O,it as P,Ot as Q,ct as R,lt as S,rt as T,C as U,Tt as V,mt as W,gt as X,Z as Y,Dt as Z,nt as _,pt as a,bt as a0,xt as a1,jt as a2,at as a3,ut as a4,st as a5,wt as b,Et as c,G as d,I as e,ht as f,Nt as g,H as h,dt as i,At as j,et as k,yt as l,Ct as m,N as n,Pt as o,F as p,St as q,k as r,Y as s,w as t,qt as u,Bt as v,T as w,X as x,R as y,B as z};
