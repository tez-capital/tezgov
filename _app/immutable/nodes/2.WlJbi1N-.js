import{n as ie,U as Kt,g as m,V as Qt,W as Wt,a as be,X as st,e as I,t as R,b as S,c as D,d as E,f as P,h as T,u as b,A as F,j as N,k as o,Y as Ge,l as Z,T as fe,v as Ue,i as Xt,Q as Ze,R as qe,Z as Ae,m as xt}from"../chunks/scheduler.XKaPCPKR.js";import{S as we,i as Ie,b as J,d as K,m as Q,a as O,t as H,e as W,g as Ee,c as Ve}from"../chunks/index.-wwyGIMq.js";import{e as es,c as ts,t as He,g as ss,a as ht,m as gt,b as _t,d as mt,f as ls,h as pt,i as ns,C as Oe,S as he,w as et,j as de,u as rs,k as is,l as $t,p as as,n as os}from"../chunks/gov.JcSab1Da.js";import{s as cs}from"../chunks/state.UDlUDb_k.js";import{D as Ft}from"../chunks/constants.waxd6Cmu.js";import{g as fs}from"../chunks/entry.px22K4Op.js";const Yt=typeof window<"u";let us=Yt?()=>window.performance.now():()=>Date.now(),lt=Yt?l=>requestAnimationFrame(l):ie;const Me=new Set;function Gt(l){Me.forEach(e=>{e.c(l)||(Me.delete(e),e.f())}),Me.size!==0&&lt(Gt)}function ds(l){let e;return Me.size===0&&lt(Gt),{promise:new Promise(t=>{Me.add(e={c:l,f:t})}),abort(){Me.delete(e)}}}const Fe=new Map;let Ye=0;function vs(l){let e=5381,t=l.length;for(;t--;)e=(e<<5)-e^l.charCodeAt(t);return e>>>0}function hs(l,e){const t={stylesheet:Qt(e),rules:{}};return Fe.set(l,t),t}function gs(l,e,t,s,n,f,a,h=0){const d=16.666/s;let u=`{
`;for(let i=0;i<=1;i+=d){const w=e+(t-e)*f(i);u+=i*100+`%{${a(w,1-w)}}
`}const C=u+`100% {${a(t,1-t)}}
}`,g=`__svelte_${vs(C)}_${h}`,p=Kt(l),{stylesheet:_,rules:v}=Fe.get(p)||hs(p,l);v[g]||(v[g]=!0,_.insertRule(`@keyframes ${g} ${C}`,_.cssRules.length));const r=l.style.animation||"";return l.style.animation=`${r?`${r}, `:""}${g} ${s}ms linear ${n}ms 1 both`,Ye+=1,g}function _s(l,e){const t=(l.style.animation||"").split(", "),s=t.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),n=t.length-s.length;n&&(l.style.animation=s.join(", "),Ye-=n,Ye||ms())}function ms(){lt(()=>{Ye||(Fe.forEach(l=>{const{ownerNode:e}=l.stylesheet;e&&m(e)}),Fe.clear())})}function ps(l,e,t,s){if(!e)return ie;const n=l.getBoundingClientRect();if(e.left===n.left&&e.right===n.right&&e.top===n.top&&e.bottom===n.bottom)return ie;const{delay:f=0,duration:a=300,easing:h=Wt,start:d=us()+f,end:u=d+a,tick:C=ie,css:g}=t(l,{from:e,to:n},s);let p=!0,_=!1,v;function r(){g&&(v=gs(l,0,1,a,f,h,g)),f||(_=!0)}function i(){g&&_s(l,v),p=!1}return ds(w=>{if(!_&&w>=d&&(_=!0),_&&w>=u&&(C(1,0),i()),!p)return!1;if(_){const B=w-d,L=0+1*h(B/a);C(L,1-L)}return!0}),r(),C(0,1),i}function $s(l){const e=getComputedStyle(l);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,n=l.getBoundingClientRect();l.style.position="absolute",l.style.width=t,l.style.height=s,ks(l,n)}}function ks(l,e){const t=l.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(l),n=s.transform==="none"?"":s.transform;l.style.transform=`${n} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function bs(l,e,t){const s=ls(),n=t?.locale??s.locale??es,f=ts(l,e);if(isNaN(f))throw new RangeError("Invalid time value");const a=Object.assign({},t,{addSuffix:t?.addSuffix,comparison:f});let h,d;f>0?(h=He(e),d=He(l)):(h=He(l),d=He(e));const u=ss(t?.roundingMethod??"round"),C=d.getTime()-h.getTime(),g=C/pt,p=ht(d)-ht(h),_=(C-p)/pt,v=t?.unit;let r;if(v?r=v:g<1?r="second":g<60?r="minute":g<gt?r="hour":_<_t?r="day":_<mt?r="month":r="year",r==="second"){const i=u(C/1e3);return n.formatDistance("xSeconds",i,a)}else if(r==="minute"){const i=u(g);return n.formatDistance("xMinutes",i,a)}else if(r==="hour"){const i=u(g/60);return n.formatDistance("xHours",i,a)}else if(r==="day"){const i=u(_/gt);return n.formatDistance("xDays",i,a)}else if(r==="month"){const i=u(_/_t);return i===12&&v!=="month"?n.formatDistance("xYears",1,a):n.formatDistance("xMonths",i,a)}else{const i=u(_/mt);return n.formatDistance("xYears",i,a)}}function kt(l){return l?`${l.slice(0,10)}...${l.slice(-10)}`:"N/A"}function nt(l){return l<1e10?l*1e3:l}function bt(l){return l?(typeof l=="number"&&(l=nt(l)),new Date(l).toLocaleString()):"N/A"}function ke(l){return l?(typeof l=="number"&&(l=nt(l)),ns(new Date(l),new Date)):"N/A"}function wt(l){return l?(typeof l=="number"&&(l=nt(l)),bs(new Date(l),new Date,{addSuffix:!0})):"N/A"}function me(l){return typeof l=="bigint"&&(l=l.toString()),!l||typeof l!="string"?"N/A":l==="0"?"0 ꜩ":`${l.substring(0,l.length-6)}.${l.substring(l.length-6)} ꜩ`}function ws(l){let e,t="DISCONNECTED";return{c(){e=I("div"),e.textContent=t,this.h()},l(s){e=D(s,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-pgsnvc"&&(e.textContent=t),this.h()},h(){b(e,"class","disconnected-status svelte-1hc011x")},m(s,n){N(s,e,n)},p:ie,d(s){s&&m(e)}}}function Is(l){let e,t,s=l[0].block?.level_info.level+"",n,f,a,h,d=l[0].block?.level_info.cycle+"",u,C,g,p=kt(l[0].block?.hash??"")+"",_,v,r,i,w,B;return{c(){e=I("div"),t=I("div"),n=R(s),f=S(),a=I("div"),h=R("#"),u=R(d),C=S(),g=I("button"),_=R(p),v=S(),r=I("div"),i=R(l[2]),this.h()},l(L){e=D(L,"DIV",{class:!0});var M=E(e);t=D(M,"DIV",{class:!0});var k=E(t);n=P(k,s),f=T(k),a=D(k,"DIV",{class:!0});var V=E(a);h=P(V,"#"),u=P(V,d),V.forEach(m),k.forEach(m),C=T(M),g=D(M,"BUTTON",{class:!0});var c=E(g);_=P(c,p),c.forEach(m),v=T(M),r=D(M,"DIV",{class:!0});var $=E(r);i=P($,l[2]),$.forEach(m),M.forEach(m),this.h()},h(){b(a,"class","cycle svelte-1hc011x"),b(t,"class","level svelte-1hc011x"),b(g,"class","unstyle-button hash"),b(r,"class","timestamp"),b(e,"class","chain-state svelte-1hc011x")},m(L,M){N(L,e,M),o(e,t),o(t,n),o(t,f),o(t,a),o(a,h),o(a,u),o(e,C),o(e,g),o(g,_),o(e,v),o(e,r),o(r,i),w||(B=Ge(g,"click",l[4]),w=!0)},p(L,M){M&1&&s!==(s=L[0].block?.level_info.level+"")&&Z(n,s),M&1&&d!==(d=L[0].block?.level_info.cycle+"")&&Z(u,d),M&1&&p!==(p=kt(L[0].block?.hash??"")+"")&&Z(_,p),M&4&&Z(i,L[2])},d(L){L&&m(e),w=!1,B()}}}function It(l){let e,t,s,n,f,a,h=l[0].network_info?.connection_count+"",d,u,C;return t=new he({}),{c(){e=I("div"),J(t.$$.fragment),s=S(),n=I("div"),f=I("div"),a=I("div"),d=R(h),u=R(`\r
					connections`),this.h()},l(g){e=D(g,"DIV",{class:!0});var p=E(e);K(t.$$.fragment,p),p.forEach(m),s=T(g),n=D(g,"DIV",{class:!0});var _=E(n);f=D(_,"DIV",{class:!0});var v=E(f);a=D(v,"DIV",{class:!0});var r=E(a);d=P(r,h),r.forEach(m),u=P(v,`\r
					connections`),v.forEach(m),_.forEach(m),this.h()},h(){b(e,"class","bottom-separator svelte-1hc011x"),b(a,"class","value svelte-1hc011x"),b(f,"class","connections"),b(n,"class","network-info svelte-1hc011x")},m(g,p){N(g,e,p),Q(t,e,null),N(g,s,p),N(g,n,p),o(n,f),o(f,a),o(a,d),o(f,u),C=!0},p(g,p){(!C||p&1)&&h!==(h=g[0].network_info?.connection_count+"")&&Z(d,h)},i(g){C||(O(t.$$.fragment,g),C=!0)},o(g){H(t.$$.fragment,g),C=!1},d(g){g&&(m(e),m(s),m(n)),W(t)}}}function Ds(l){let e,t,s,n,f,a,h,d,u,C=l[0].address+"",g,p,_,v,r,i,w,B;_=new he({});function L(c,$){return c[0].connection_status==="connected"?Is:ws}let M=L(l),k=M(l),V=l[0].network_info&&It(l);return{c(){e=I("div"),t=I("div"),s=I("h5"),n=R(l[1]),f=S(),a=I("div"),h=I("div"),d=S(),u=I("button"),g=R(C),p=S(),J(_.$$.fragment),v=S(),k.c(),r=S(),V&&V.c(),this.h()},l(c){e=D(c,"DIV",{class:!0});var $=E(e);t=D($,"DIV",{class:!0});var j=E(t);s=D(j,"H5",{class:!0});var U=E(s);n=P(U,l[1]),f=T(U),a=D(U,"DIV",{class:!0});var se=E(a);h=D(se,"DIV",{class:!0}),E(h).forEach(m),se.forEach(m),U.forEach(m),d=T(j),u=D(j,"BUTTON",{class:!0});var q=E(u);g=P(q,C),q.forEach(m),j.forEach(m),p=T($),K(_.$$.fragment,$),v=T($),k.l($),r=T($),V&&V.l($),$.forEach(m),this.h()},h(){b(h,"class","connection-status-sign svelte-1hc011x"),F(h,"connected",l[0].connection_status==="connected"),b(a,"class","connection-status svelte-1hc011x"),b(s,"class","svelte-1hc011x"),b(u,"class","unstyle-button address svelte-1hc011x"),b(t,"class","title svelte-1hc011x"),b(e,"class","node-grid svelte-1hc011x")},m(c,$){N(c,e,$),o(e,t),o(t,s),o(s,n),o(s,f),o(s,a),o(a,h),o(t,d),o(t,u),o(u,g),o(e,p),Q(_,e,null),o(e,v),k.m(e,null),o(e,r),V&&V.m(e,null),i=!0,w||(B=Ge(u,"click",l[3]),w=!0)},p(c,$){(!i||$&2)&&Z(n,c[1]),(!i||$&1)&&F(h,"connected",c[0].connection_status==="connected"),(!i||$&1)&&C!==(C=c[0].address+"")&&Z(g,C),M===(M=L(c))&&k?k.p(c,$):(k.d(1),k=M(c),k&&(k.c(),k.m(e,r))),c[0].network_info?V?(V.p(c,$),$&1&&O(V,1)):(V=It(c),V.c(),O(V,1),V.m(e,null)):V&&(Ee(),H(V,1,1,()=>{V=null}),Ve())},i(c){i||(O(_.$$.fragment,c),O(V),i=!0)},o(c){H(_.$$.fragment,c),H(V),i=!1},d(c){c&&m(e),W(_),k.d(),V&&V.d(),w=!1,B()}}}function Cs(l){let e,t;return e=new Oe({props:{$$slots:{default:[Ds]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,[n]){const f={};n&71&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function Es(l,e,t){let s,{node:n}=e,{title:f="Node"}=e;const a=setInterval(()=>{t(2,s=wt(n.block?.timestamp??0))},500);st(()=>clearInterval(a));const h=()=>et(n.address??""),d=()=>et(n.block?.hash??"");return l.$$set=u=>{"node"in u&&t(0,n=u.node),"title"in u&&t(1,f=u.title)},l.$$.update=()=>{l.$$.dirty&1&&t(2,s=wt(n.block?.timestamp??0))},[n,f,s,h,d]}class Jt extends we{constructor(e){super(),Ie(this,e,Es,Cs,be,{node:0,title:1})}}function Dt(l){let e=BigInt(l.frozen_deposits_limit);e===0n&&(e=BigInt(l.full_balance));const t=BigInt(l.delegated_balance);return e*Ft-t}function Ct(l){let e=BigInt(l.frozen_deposits_limit);return e===0n&&(e=BigInt(l.full_balance)),e*Ft}function tt(l){let e=0;l.split("").forEach(s=>{e=s.charCodeAt(0)+((e<<5)-e)});let t="#";for(let s=0;s<3;s++){const n=e>>s*8&255;t+=n.toString(16).padStart(2,"0")}return t}function Et(l){const e=[];for(const[t,s]of Object.entries(l.rights))e.push({baker:t,blocks:s[0],attestations:s[1],realizedBlocks:s.length>2?s[2]:0,realizedAttestations:s.length>3?s[3]:0});return e}function Vt(l){let e,t='<div class="assigned-color-sign svelte-1ss8ow0"></div>';return{c(){e=I("div"),e.innerHTML=t,this.h()},l(s){e=D(s,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1eei28k"&&(e.innerHTML=t),this.h()},h(){b(e,"class","assigned-color svelte-1ss8ow0"),Ue(e,"--assigned-color-color",l[3])},m(s,n){N(s,e,n)},p(s,n){n&8&&Ue(e,"--assigned-color-color",s[3])},d(s){s&&m(e)}}}function Vs(l){let e,t,s,n,f,a,h,d,u,C,g,p,_="Balance",v,r,i=me(l[1].full_balance)+"",w,B,L,M="Frozen deposit limit",k,V,c=me(l[1].frozen_deposits_limit)+"",$,j,U,se="Staking",q,y,ne=me(l[1].staking_balance)+"",pe,ge,ae,x,le,Y,A="Staking Capacity",ee,z,oe=me(Ct(l[1]))+"",te,Be,_e,je="Free Space",Le,ce,ye=me(Dt(l[1]))+"",Ne,Je,Se,De,Ke,Ce,Te,ze=l[1].delegated_contracts.length-1+"",Re,Qe,ve,We,rt,re=l[2]&&Vt(l);return u=new he({}),ae=new he({}),De=new he({}),{c(){e=I("div"),t=I("div"),s=I("h5"),n=R(`Baker\r
				`),re&&re.c(),f=S(),a=I("button"),h=R(l[0]),d=S(),J(u.$$.fragment),C=S(),g=I("div"),p=I("div"),p.textContent=_,v=S(),r=I("div"),w=R(i),B=S(),L=I("div"),L.textContent=M,k=S(),V=I("div"),$=R(c),j=S(),U=I("div"),U.textContent=se,q=S(),y=I("div"),pe=R(ne),ge=S(),J(ae.$$.fragment),x=S(),le=I("div"),Y=I("div"),Y.textContent=A,ee=S(),z=I("div"),te=R(oe),Be=S(),_e=I("div"),_e.textContent=je,Le=S(),ce=I("div"),Ne=R(ye),Je=S(),Se=I("div"),J(De.$$.fragment),Ke=S(),Ce=I("div"),Te=I("div"),Re=R(ze),Qe=R(`\r
			delegators`),this.h()},l(X){e=D(X,"DIV",{class:!0});var G=E(e);t=D(G,"DIV",{class:!0});var Pe=E(t);s=D(Pe,"H5",{class:!0});var Xe=E(s);n=P(Xe,`Baker\r
				`),re&&re.l(Xe),Xe.forEach(m),f=T(Pe),a=D(Pe,"BUTTON",{class:!0});var it=E(a);h=P(it,l[0]),it.forEach(m),Pe.forEach(m),d=T(G),K(u.$$.fragment,G),C=T(G),g=D(G,"DIV",{class:!0});var ue=E(g);p=D(ue,"DIV",{class:!0,"data-svelte-h":!0}),fe(p)!=="svelte-3i2iop"&&(p.textContent=_),v=T(ue),r=D(ue,"DIV",{class:!0});var at=E(r);w=P(at,i),at.forEach(m),B=T(ue),L=D(ue,"DIV",{class:!0,"data-svelte-h":!0}),fe(L)!=="svelte-d5ljxy"&&(L.textContent=M),k=T(ue),V=D(ue,"DIV",{class:!0});var ot=E(V);$=P(ot,c),ot.forEach(m),j=T(ue),U=D(ue,"DIV",{class:!0,"data-svelte-h":!0}),fe(U)!=="svelte-dvuqts"&&(U.textContent=se),q=T(ue),y=D(ue,"DIV",{class:!0});var ct=E(y);pe=P(ct,ne),ct.forEach(m),ue.forEach(m),ge=T(G),K(ae.$$.fragment,G),x=T(G),le=D(G,"DIV",{class:!0});var $e=E(le);Y=D($e,"DIV",{class:!0,"data-svelte-h":!0}),fe(Y)!=="svelte-1wof6a"&&(Y.textContent=A),ee=T($e),z=D($e,"DIV",{class:!0});var ft=E(z);te=P(ft,oe),ft.forEach(m),Be=T($e),_e=D($e,"DIV",{class:!0,"data-svelte-h":!0}),fe(_e)!=="svelte-orjfej"&&(_e.textContent=je),Le=T($e),ce=D($e,"DIV",{class:!0});var ut=E(ce);Ne=P(ut,ye),ut.forEach(m),$e.forEach(m),Je=T(G),Se=D(G,"DIV",{class:!0});var dt=E(Se);K(De.$$.fragment,dt),dt.forEach(m),Ke=T(G),Ce=D(G,"DIV",{class:!0});var xe=E(Ce);Te=D(xe,"DIV",{class:!0});var vt=E(Te);Re=P(vt,ze),vt.forEach(m),Qe=P(xe,`\r
			delegators`),xe.forEach(m),G.forEach(m),this.h()},h(){b(s,"class","svelte-1ss8ow0"),b(a,"class","unstyle-button address svelte-1ss8ow0"),b(t,"class","title svelte-1ss8ow0"),b(p,"class","title svelte-1ss8ow0"),b(r,"class","value svelte-1ss8ow0"),b(L,"class","title svelte-1ss8ow0"),b(V,"class","value svelte-1ss8ow0"),b(U,"class","title svelte-1ss8ow0"),b(y,"class","value svelte-1ss8ow0"),b(g,"class","balances svelte-1ss8ow0"),b(Y,"class","title svelte-1ss8ow0"),b(z,"class","value svelte-1ss8ow0"),b(_e,"class","title svelte-1ss8ow0"),b(ce,"class","value svelte-1ss8ow0"),b(le,"class","balances svelte-1ss8ow0"),b(Se,"class","bottom-separator svelte-1ss8ow0"),b(Te,"class","value svelte-1ss8ow0"),b(Ce,"class","delegators svelte-1ss8ow0"),b(e,"class","baker-grid svelte-1ss8ow0")},m(X,G){N(X,e,G),o(e,t),o(t,s),o(s,n),re&&re.m(s,null),o(t,f),o(t,a),o(a,h),o(e,d),Q(u,e,null),o(e,C),o(e,g),o(g,p),o(g,v),o(g,r),o(r,w),o(g,B),o(g,L),o(g,k),o(g,V),o(V,$),o(g,j),o(g,U),o(g,q),o(g,y),o(y,pe),o(e,ge),Q(ae,e,null),o(e,x),o(e,le),o(le,Y),o(le,ee),o(le,z),o(z,te),o(le,Be),o(le,_e),o(le,Le),o(le,ce),o(ce,Ne),o(e,Je),o(e,Se),Q(De,Se,null),o(e,Ke),o(e,Ce),o(Ce,Te),o(Te,Re),o(Ce,Qe),ve=!0,We||(rt=Ge(a,"click",l[4]),We=!0)},p(X,G){X[2]?re?re.p(X,G):(re=Vt(X),re.c(),re.m(s,null)):re&&(re.d(1),re=null),(!ve||G&1)&&Z(h,X[0]),(!ve||G&2)&&i!==(i=me(X[1].full_balance)+"")&&Z(w,i),(!ve||G&2)&&c!==(c=me(X[1].frozen_deposits_limit)+"")&&Z($,c),(!ve||G&2)&&ne!==(ne=me(X[1].staking_balance)+"")&&Z(pe,ne),(!ve||G&2)&&oe!==(oe=me(Ct(X[1]))+"")&&Z(te,oe),(!ve||G&2)&&ye!==(ye=me(Dt(X[1]))+"")&&Z(Ne,ye),(!ve||G&2)&&ze!==(ze=X[1].delegated_contracts.length-1+"")&&Z(Re,ze)},i(X){ve||(O(u.$$.fragment,X),O(ae.$$.fragment,X),O(De.$$.fragment,X),ve=!0)},o(X){H(u.$$.fragment,X),H(ae.$$.fragment,X),H(De.$$.fragment,X),ve=!1},d(X){X&&m(e),re&&re.d(),W(u),W(ae),W(De),We=!1,rt()}}}function Bs(l){let e,t;return e=new Oe({props:{$$slots:{default:[Vs]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,[n]){const f={};n&47&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function Ls(l,e,t){let s,{baker:n}=e,{status:f}=e,{showColor:a=!1}=e;const h=()=>et(n);return l.$$set=d=>{"baker"in d&&t(0,n=d.baker),"status"in d&&t(1,f=d.status),"showColor"in d&&t(2,a=d.showColor)},l.$$.update=()=>{l.$$.dirty&1&&t(3,s=tt(n))},[n,f,a,s,h]}class Ss extends we{constructor(e){super(),Ie(this,e,Ls,Bs,be,{baker:0,status:1,showColor:2})}}function Ts(l){const e=l-1;return e*e*e+1}function Ms(l,{from:e,to:t},s={}){const n=getComputedStyle(l),f=n.transform==="none"?"":n.transform,[a,h]=n.transformOrigin.split(" ").map(parseFloat),d=e.left+e.width*a/t.width-(t.left+a),u=e.top+e.height*h/t.height-(t.top+h),{delay:C=0,duration:g=_=>Math.sqrt(_)*120,easing:p=Ts}=s;return{delay:C,duration:Xt(g)?g(Math.sqrt(d*d+u*u)):g,easing:p,css:(_,v)=>{const r=v*d,i=v*u,w=_+v*e.width/t.width,B=_+v*e.height/t.height;return`transform: ${f} translate(${r}px, ${i}px) scale(${w}, ${B});`}}}function js(l){let e,t;return{c(){e=Ze("svg"),t=Ze("path"),this.h()},l(s){e=qe(s,"svg",{xmlns:!0,viewBox:!0});var n=E(e);t=qe(n,"path",{d:!0}),E(t).forEach(m),n.forEach(m),this.h()},h(){b(t,"d","M 16 4.40625 L 15.59375 4.59375 L 5.59375 9.09375 L 5 9.34375 L 5 22.03125 L 5.5 22.3125 L 15.5 27.875 L 16 28.15625 L 16.5 27.875 L 26.5 22.3125 L 27 22.03125 L 27 9.34375 L 26.40625 9.09375 L 16.40625 4.59375 Z M 16 6.59375 L 23.6875 10.03125 L 16 13.875 L 8.3125 10.03125 Z M 7 11.625 L 15 15.625 L 15 25.28125 L 7 20.84375 Z M 25 11.625 L 25 20.84375 L 17 25.28125 L 17 15.625 Z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 32 32")},m(s,n){N(s,e,n),o(e,t)},p:ie,i:ie,o:ie,d(s){s&&m(e)}}}class ys extends we{constructor(e){super(),Ie(this,e,null,js,be,{})}}function zs(l){let e,t;return{c(){e=Ze("svg"),t=Ze("path"),this.h()},l(s){e=qe(s,"svg",{xmlns:!0,viewBox:!0});var n=E(e);t=qe(n,"path",{d:!0}),E(t).forEach(m),n.forEach(m),this.h()},h(){b(t,"d","M 16 4 C 13.75 4 12.234375 4.886719 10.875 5.625 C 9.515625 6.363281 8.28125 7 6 7 L 5 7 L 5 8 C 5 15.71875 7.609375 20.742188 10.25 23.78125 C 12.890625 26.820313 15.625 27.9375 15.625 27.9375 L 16 28.0625 L 16.375 27.9375 C 16.375 27.9375 19.109375 26.84375 21.75 23.8125 C 24.390625 20.78125 27 15.746094 27 8 L 27 7 L 26 7 C 23.730469 7 22.484375 6.363281 21.125 5.625 C 19.765625 4.886719 18.25 4 16 4 Z M 16 6 C 17.75 6 18.753906 6.613281 20.15625 7.375 C 21.339844 8.019531 22.910156 8.636719 24.9375 8.84375 C 24.746094 15.609375 22.507813 19.910156 20.25 22.5 C 18.203125 24.847656 16.484375 25.628906 16 25.84375 C 15.511719 25.625 13.796875 24.824219 11.75 22.46875 C 9.492188 19.871094 7.253906 15.578125 7.0625 8.84375 C 9.097656 8.636719 10.660156 8.019531 11.84375 7.375 C 13.246094 6.613281 14.25 6 16 6 Z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 32 32")},m(s,n){N(s,e,n),o(e,t)},p:ie,i:ie,o:ie,d(s){s&&m(e)}}}class As extends we{constructor(e){super(),Ie(this,e,null,zs,be,{})}}function Bt(l,e,t){const s=l.slice();return s[4]=e[t],s}function Lt(l,e,t){const s=l.slice();return s[7]=e[t],s}function St(l){let e,t='<div class="baker-assigned-color-sign svelte-uv3m6u"></div>';return{c(){e=I("div"),e.innerHTML=t,this.h()},l(s){e=D(s,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-3ub5hy"&&(e.innerHTML=t),this.h()},h(){b(e,"class","baker-assigned-color svelte-uv3m6u"),Ue(e,"--assigned-color-color",tt(l[7].baker))},m(s,n){N(s,e,n)},p(s,n){n&4&&Ue(e,"--assigned-color-color",tt(s[7].baker))},d(s){s&&m(e)}}}function Tt(l){let e,t=l[7].realizedBlocks*l[7].blocks+"",s;return{c(){e=R("/"),s=R(t)},l(n){e=P(n,"/"),s=P(n,t)},m(n,f){N(n,e,f),N(n,s,f)},p(n,f){f&4&&t!==(t=n[7].realizedBlocks*n[7].blocks+"")&&Z(s,t)},d(n){n&&(m(e),m(s))}}}function Mt(l){let e,t=l[7].realizedAttestations*l[7].attestations+"",s;return{c(){e=R("/"),s=R(t)},l(n){e=P(n,"/"),s=P(n,t)},m(n,f){N(n,e,f),N(n,s,f)},p(n,f){f&4&&t!==(t=n[7].realizedAttestations*n[7].attestations+"")&&Z(s,t)},d(n){n&&(m(e),m(s))}}}function jt(l){let e,t,s,n,f,a,h=l[7].blocks+"",d,u,C,g,p,_,v,r=l[7].attestations+"",i,w,B,L,M=l[3]&&St(l);n=new ys({});let k=l[0]==="past"&&Tt(l);p=new As({});let V=l[0]==="past"&&Mt(l);return{c(){M&&M.c(),e=S(),t=I("div"),s=I("div"),J(n.$$.fragment),f=S(),a=I("div"),d=R(h),u=S(),k&&k.c(),C=S(),g=I("div"),J(p.$$.fragment),_=S(),v=I("div"),i=R(r),w=S(),V&&V.c(),B=S(),this.h()},l(c){M&&M.l(c),e=T(c),t=D(c,"DIV",{class:!0});var $=E(t);s=D($,"DIV",{class:!0});var j=E(s);K(n.$$.fragment,j),j.forEach(m),f=T($),a=D($,"DIV",{class:!0});var U=E(a);d=P(U,h),u=T(U),k&&k.l(U),U.forEach(m),C=T($),g=D($,"DIV",{class:!0});var se=E(g);K(p.$$.fragment,se),se.forEach(m),_=T($),v=D($,"DIV",{class:!0});var q=E(v);i=P(q,r),w=T(q),V&&V.l(q),q.forEach(m),B=T($),$.forEach(m),this.h()},h(){b(s,"class","icon svelte-uv3m6u"),F(s,"no-rights",l[7].blocks===0),b(a,"class","value svelte-uv3m6u"),F(a,"no-rights",l[7].blocks===0),F(a,"warning",l[0]==="past"&&l[7].realizedBlocks===0),F(a,"success",l[0]==="past"&&l[7].realizedBlocks===1),b(g,"class","icon svelte-uv3m6u"),F(g,"no-rights",l[7].attestations===0),b(v,"class","value svelte-uv3m6u"),F(v,"no-rights",l[7].attestations===0),F(v,"warning",l[0]==="past"&&l[7].realizedAttestations===0),F(v,"success",l[0]==="past"&&l[7].realizedAttestations===1),b(t,"class","baker-block-rights svelte-uv3m6u")},m(c,$){M&&M.m(c,$),N(c,e,$),N(c,t,$),o(t,s),Q(n,s,null),o(t,f),o(t,a),o(a,d),o(a,u),k&&k.m(a,null),o(t,C),o(t,g),Q(p,g,null),o(t,_),o(t,v),o(v,i),o(v,w),V&&V.m(v,null),o(t,B),L=!0},p(c,$){c[3]?M?M.p(c,$):(M=St(c),M.c(),M.m(e.parentNode,e)):M&&(M.d(1),M=null),(!L||$&4)&&F(s,"no-rights",c[7].blocks===0),(!L||$&4)&&h!==(h=c[7].blocks+"")&&Z(d,h),c[0]==="past"?k?k.p(c,$):(k=Tt(c),k.c(),k.m(a,null)):k&&(k.d(1),k=null),(!L||$&4)&&F(a,"no-rights",c[7].blocks===0),(!L||$&5)&&F(a,"warning",c[0]==="past"&&c[7].realizedBlocks===0),(!L||$&5)&&F(a,"success",c[0]==="past"&&c[7].realizedBlocks===1),(!L||$&4)&&F(g,"no-rights",c[7].attestations===0),(!L||$&4)&&r!==(r=c[7].attestations+"")&&Z(i,r),c[0]==="past"?V?V.p(c,$):(V=Mt(c),V.c(),V.m(v,null)):V&&(V.d(1),V=null),(!L||$&4)&&F(v,"no-rights",c[7].attestations===0),(!L||$&5)&&F(v,"warning",c[0]==="past"&&c[7].realizedAttestations===0),(!L||$&5)&&F(v,"success",c[0]==="past"&&c[7].realizedAttestations===1)},i(c){L||(O(n.$$.fragment,c),O(p.$$.fragment,c),L=!0)},o(c){H(n.$$.fragment,c),H(p.$$.fragment,c),L=!1},d(c){c&&(m(e),m(t)),M&&M.d(c),W(n),k&&k.d(),W(p),V&&V.d()}}}function yt(l,e){let t,s,n=e[4].level+"",f,a,h,d,u,C=ie,g,p=de(Et(e[4])),_=[];for(let r=0;r<p.length;r+=1)_[r]=jt(Lt(e,p,r));const v=r=>H(_[r],1,1,()=>{_[r]=null});return{key:l,first:null,c(){t=I("div"),s=I("div"),f=R(n),a=S(),h=I("div");for(let r=0;r<_.length;r+=1)_[r].c();d=S(),this.h()},l(r){t=D(r,"DIV",{class:!0});var i=E(t);s=D(i,"DIV",{class:!0});var w=E(s);f=P(w,n),w.forEach(m),a=T(i),h=D(i,"DIV",{class:!0});var B=E(h);for(let L=0;L<_.length;L+=1)_[L].l(B);B.forEach(m),d=T(i),i.forEach(m),this.h()},h(){b(s,"class","level svelte-uv3m6u"),b(h,"class","block-rights-inner svelte-uv3m6u"),b(t,"class","block-rights svelte-uv3m6u"),this.first=t},m(r,i){N(r,t,i),o(t,s),o(s,f),o(t,a),o(t,h);for(let w=0;w<_.length;w+=1)_[w]&&_[w].m(h,null);o(t,d),g=!0},p(r,i){if(e=r,(!g||i&4)&&n!==(n=e[4].level+"")&&Z(f,n),i&13){p=de(Et(e[4]));let w;for(w=0;w<p.length;w+=1){const B=Lt(e,p,w);_[w]?(_[w].p(B,i),O(_[w],1)):(_[w]=jt(B),_[w].c(),O(_[w],1),_[w].m(h,null))}for(Ee(),w=p.length;w<_.length;w+=1)v(w);Ve()}},r(){u=t.getBoundingClientRect()},f(){$s(t),C()},a(){C(),C=ps(t,u,Ms,{})},i(r){if(!g){for(let i=0;i<p.length;i+=1)O(_[i]);g=!0}},o(r){_=_.filter(Boolean);for(let i=0;i<_.length;i+=1)H(_[i]);g=!1},d(r){r&&m(t),Ae(_,r)}}}function Os(l){let e,t,s,n,f,a,h,d,u=[],C=new Map,g;a=new he({});let p=de(l[2]);const _=v=>v[4].level;for(let v=0;v<p.length;v+=1){let r=Bt(l,p,v),i=_(r);C.set(i,u[v]=yt(i,r))}return{c(){e=I("div"),t=I("div"),s=I("h5"),n=R(l[1]),f=S(),J(a.$$.fragment),h=S(),d=I("div");for(let v=0;v<u.length;v+=1)u[v].c();this.h()},l(v){e=D(v,"DIV",{class:!0});var r=E(e);t=D(r,"DIV",{class:!0});var i=E(t);s=D(i,"H5",{class:!0});var w=E(s);n=P(w,l[1]),w.forEach(m),i.forEach(m),f=T(r),K(a.$$.fragment,r),h=T(r),d=D(r,"DIV",{class:!0});var B=E(d);for(let L=0;L<u.length;L+=1)u[L].l(B);B.forEach(m),r.forEach(m),this.h()},h(){b(s,"class","svelte-uv3m6u"),b(t,"class","title svelte-uv3m6u"),b(d,"class","block-rights-wrap svelte-uv3m6u"),b(e,"class","baker-rights svelte-uv3m6u")},m(v,r){N(v,e,r),o(e,t),o(t,s),o(s,n),o(e,f),Q(a,e,null),o(e,h),o(e,d);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(d,null);g=!0},p(v,r){if((!g||r&2)&&Z(n,v[1]),r&13){p=de(v[2]),Ee();for(let i=0;i<u.length;i+=1)u[i].r();u=rs(u,r,_,1,v,p,C,d,is,yt,null,Bt);for(let i=0;i<u.length;i+=1)u[i].a();Ve()}},i(v){if(!g){O(a.$$.fragment,v);for(let r=0;r<p.length;r+=1)O(u[r]);g=!0}},o(v){H(a.$$.fragment,v);for(let r=0;r<u.length;r+=1)H(u[r]);g=!1},d(v){v&&m(e),W(a);for(let r=0;r<u.length;r+=1)u[r].d()}}}function Ns(l){let e,t;return e=new Oe({props:{$$slots:{default:[Os]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,[n]){const f={};n&1039&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function Rs(l,e,t){let{mode:s}=e,{title:n="Baking Rights"}=e,{rights:f}=e,{showBakerColors:a=!1}=e;return l.$$set=h=>{"mode"in h&&t(0,s=h.mode),"title"in h&&t(1,n=h.title),"rights"in h&&t(2,f=h.rights),"showBakerColors"in h&&t(3,a=h.showBakerColors)},[s,n,f,a]}class zt extends we{constructor(e){super(),Ie(this,e,Rs,Ns,be,{mode:0,title:1,rights:2,showBakerColors:3})}}function At(l,e,t){const s=l.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function Ot(l,e,t){const s=l.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function Nt(l){let e,t,s,n,f=l[5]+"",a,h,d,u=l[6].status+"",C,g,p,_=(l[6].status==="running"?ke(l[6].started):"-")+"",v;return{c(){e=I("div"),t=I("div"),s=S(),n=I("div"),a=R(f),h=S(),d=I("div"),C=R(u),g=S(),p=I("div"),v=R(_),this.h()},l(r){e=D(r,"DIV",{class:!0});var i=E(e);t=D(i,"DIV",{class:!0}),E(t).forEach(m),i.forEach(m),s=T(r),n=D(r,"DIV",{class:!0});var w=E(n);a=P(w,f),w.forEach(m),h=T(r),d=D(r,"DIV",{class:!0});var B=E(d);C=P(B,u),B.forEach(m),g=T(r),p=D(r,"DIV",{class:!0});var L=E(p);v=P(L,_),L.forEach(m),this.h()},h(){b(t,"class","service-status-color-sign svelte-6puehf"),F(t,"success",l[6].status==="running"),b(e,"class","service-status-color svelte-6puehf"),b(n,"class","id svelte-6puehf"),b(d,"class","status svelte-6puehf"),b(p,"class","active svelte-6puehf")},m(r,i){N(r,e,i),o(e,t),N(r,s,i),N(r,n,i),o(n,a),N(r,h,i),N(r,d,i),o(d,C),N(r,g,i),N(r,p,i),o(p,v)},p(r,i){i&8&&F(t,"success",r[6].status==="running"),i&8&&f!==(f=r[5]+"")&&Z(a,f),i&8&&u!==(u=r[6].status+"")&&Z(C,u),i&8&&_!==(_=(r[6].status==="running"?ke(r[6].started):"-")+"")&&Z(v,_)},d(r){r&&(m(e),m(s),m(n),m(h),m(d),m(g),m(p))}}}function Rt(l){let e,t,s,n,f=l[5]+"",a,h,d,u=l[6].status+"",C,g,p,_=(l[6].status==="running"?ke(l[6].started):"-")+"",v,r;return{c(){e=I("div"),t=I("div"),s=S(),n=I("div"),a=R(f),h=S(),d=I("div"),C=R(u),g=S(),p=I("div"),v=R(_),r=S(),this.h()},l(i){e=D(i,"DIV",{class:!0});var w=E(e);t=D(w,"DIV",{class:!0}),E(t).forEach(m),w.forEach(m),s=T(i),n=D(i,"DIV",{class:!0});var B=E(n);a=P(B,f),B.forEach(m),h=T(i),d=D(i,"DIV",{class:!0});var L=E(d);C=P(L,u),L.forEach(m),g=T(i),p=D(i,"DIV",{class:!0});var M=E(p);v=P(M,_),r=T(M),M.forEach(m),this.h()},h(){b(t,"class","service-status-color-sign svelte-6puehf"),F(t,"success",l[6].status==="running"),b(e,"class","service-status-color svelte-6puehf"),b(n,"class","id svelte-6puehf"),b(d,"class","status svelte-6puehf"),b(p,"class","active svelte-6puehf")},m(i,w){N(i,e,w),o(e,t),N(i,s,w),N(i,n,w),o(n,a),N(i,h,w),N(i,d,w),o(d,C),N(i,g,w),N(i,p,w),o(p,v),o(p,r)},p(i,w){w&4&&F(t,"success",i[6].status==="running"),w&4&&f!==(f=i[5]+"")&&Z(a,f),w&4&&u!==(u=i[6].status+"")&&Z(C,u),w&4&&_!==(_=(i[6].status==="running"?ke(i[6].started):"-")+"")&&Z(v,_)},d(i){i&&(m(e),m(s),m(n),m(h),m(d),m(g),m(p))}}}function Ps(l){let e,t,s,n,f,a,h,d,u,C="Service",g,p,_="Status",v,r,i="Active",w,B,L,M,k,V,c,$,j,U,se,q,y,ne=bt(l[1].timestamp)+"",pe,ge;L=new he({});let ae=de(l[3]),x=[];for(let A=0;A<ae.length;A+=1)x[A]=Nt(Ot(l,ae,A));c=new he({});let le=de(l[2]),Y=[];for(let A=0;A<le.length;A+=1)Y[A]=Rt(At(l,le,A));return U=new he({}),{c(){e=I("div"),t=I("div"),s=I("h5"),n=R(l[0]),f=S(),a=I("div"),h=I("div"),d=S(),u=I("div"),u.textContent=C,g=S(),p=I("div"),p.textContent=_,v=S(),r=I("div"),r.textContent=i,w=S(),B=I("div"),J(L.$$.fragment),M=S();for(let A=0;A<x.length;A+=1)x[A].c();k=S(),V=I("div"),J(c.$$.fragment),$=S();for(let A=0;A<Y.length;A+=1)Y[A].c();j=S(),J(U.$$.fragment),se=S(),q=I("div"),y=I("div"),pe=R(ne),this.h()},l(A){e=D(A,"DIV",{class:!0});var ee=E(e);t=D(ee,"DIV",{class:!0});var z=E(t);s=D(z,"H5",{class:!0});var oe=E(s);n=P(oe,l[0]),oe.forEach(m),z.forEach(m),f=T(ee),a=D(ee,"DIV",{class:!0});var te=E(a);h=D(te,"DIV",{}),E(h).forEach(m),d=T(te),u=D(te,"DIV",{class:!0,"data-svelte-h":!0}),fe(u)!=="svelte-n2q9px"&&(u.textContent=C),g=T(te),p=D(te,"DIV",{class:!0,"data-svelte-h":!0}),fe(p)!=="svelte-1g4goyr"&&(p.textContent=_),v=T(te),r=D(te,"DIV",{class:!0,"data-svelte-h":!0}),fe(r)!=="svelte-hnieor"&&(r.textContent=i),w=T(te),B=D(te,"DIV",{class:!0});var Be=E(B);K(L.$$.fragment,Be),Be.forEach(m),M=T(te);for(let ce=0;ce<x.length;ce+=1)x[ce].l(te);k=T(te),V=D(te,"DIV",{class:!0});var _e=E(V);K(c.$$.fragment,_e),_e.forEach(m),$=T(te);for(let ce=0;ce<Y.length;ce+=1)Y[ce].l(te);te.forEach(m),j=T(ee),K(U.$$.fragment,ee),se=T(ee),q=D(ee,"DIV",{class:!0});var je=E(q);y=D(je,"DIV",{class:!0});var Le=E(y);pe=P(Le,ne),Le.forEach(m),je.forEach(m),ee.forEach(m),this.h()},h(){b(s,"class","svelte-6puehf"),b(t,"class","title svelte-6puehf"),b(u,"class","id svelte-6puehf"),b(p,"class","status svelte-6puehf"),b(r,"class","active svelte-6puehf"),b(B,"class","separator svelte-6puehf"),b(V,"class","separator svelte-6puehf"),b(a,"class","services-grid svelte-6puehf"),b(y,"class","value svelte-6puehf"),b(q,"class","timestamp svelte-6puehf"),b(e,"class","services svelte-6puehf")},m(A,ee){N(A,e,ee),o(e,t),o(t,s),o(s,n),o(e,f),o(e,a),o(a,h),o(a,d),o(a,u),o(a,g),o(a,p),o(a,v),o(a,r),o(a,w),o(a,B),Q(L,B,null),o(a,M);for(let z=0;z<x.length;z+=1)x[z]&&x[z].m(a,null);o(a,k),o(a,V),Q(c,V,null),o(a,$);for(let z=0;z<Y.length;z+=1)Y[z]&&Y[z].m(a,null);o(e,j),Q(U,e,null),o(e,se),o(e,q),o(q,y),o(y,pe),ge=!0},p(A,ee){if((!ge||ee&1)&&Z(n,A[0]),ee&8){ae=de(A[3]);let z;for(z=0;z<ae.length;z+=1){const oe=Ot(A,ae,z);x[z]?x[z].p(oe,ee):(x[z]=Nt(oe),x[z].c(),x[z].m(a,k))}for(;z<x.length;z+=1)x[z].d(1);x.length=ae.length}if(ee&4){le=de(A[2]);let z;for(z=0;z<le.length;z+=1){const oe=At(A,le,z);Y[z]?Y[z].p(oe,ee):(Y[z]=Rt(oe),Y[z].c(),Y[z].m(a,null))}for(;z<Y.length;z+=1)Y[z].d(1);Y.length=le.length}(!ge||ee&2)&&ne!==(ne=bt(A[1].timestamp)+"")&&Z(pe,ne)},i(A){ge||(O(L.$$.fragment,A),O(c.$$.fragment,A),O(U.$$.fragment,A),ge=!0)},o(A){H(L.$$.fragment,A),H(c.$$.fragment,A),H(U.$$.fragment,A),ge=!1},d(A){A&&m(e),W(L),Ae(x,A),W(c),Ae(Y,A),W(U)}}}function Hs(l){let e,t;return e=new Oe({props:{$$slots:{default:[Ps]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,[n]){const f={};n&2063&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function Us(l,e,t){let s,n,{title:f="Baker's Services"}=e,{services:a={timestamp:0,node_services:{},signer_services:{}}}=e;const h=setInterval(()=>{for(const[d,u]of s)u.formattedTimestamp=ke(u.started);for(const[d,u]of n)u.formattedTimestamp=ke(u.started);t(3,s=[...s]),t(2,n=[...n])},500);return st(()=>{clearInterval(h)}),l.$$set=d=>{"title"in d&&t(0,f=d.title),"services"in d&&t(1,a=d.services)},l.$$.update=()=>{l.$$.dirty&2&&t(3,s=Object.entries(a.node_services).map(d=>[d[0],{...d[1],formattedTimestamp:ke(d[1].started)}])),l.$$.dirty&2&&t(2,n=Object.entries(a.signer_services).map(d=>[d[0],{...d[1],formattedTimestamp:ke(d[1].started)}]))},[f,a,n,s]}class Zs extends we{constructor(e){super(),Ie(this,e,Us,Hs,be,{title:0,services:1})}}function qs(l){let e,t="NO DATA";return{c(){e=I("div"),e.textContent=t,this.h()},l(s){e=D(s,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-w3ecvk"&&(e.textContent=t),this.h()},h(){b(e,"class","no-data svelte-pdevj6")},m(s,n){N(s,e,n)},p:ie,i:ie,o:ie,d(s){s&&m(e)}}}function Fs(l){let e,t,s=l[0]?.voting_period.kind+"",n,f,a,h="period",d,u,C,g=l[0].voting_period.index+"",p,_,v,r,i,w,B,L,M;return v=new he({}),{c(){e=I("div"),t=I("div"),n=R(s),f=S(),a=I("div"),a.textContent=h,d=S(),u=I("div"),C=R("#"),p=R(g),_=S(),J(v.$$.fragment),r=S(),i=I("div"),w=R(`ends in\r
					`),B=I("div"),L=R(l[1]),this.h()},l(k){e=D(k,"DIV",{class:!0});var V=E(e);t=D(V,"DIV",{class:!0});var c=E(t);n=P(c,s),c.forEach(m),f=T(V),a=D(V,"DIV",{class:!0,"data-svelte-h":!0}),fe(a)!=="svelte-194js6r"&&(a.textContent=h),d=T(V),u=D(V,"DIV",{class:!0});var $=E(u);C=P($,"#"),p=P($,g),$.forEach(m),V.forEach(m),_=T(k),K(v.$$.fragment,k),r=T(k),i=D(k,"DIV",{class:!0});var j=E(i);w=P(j,`ends in\r
					`),B=D(j,"DIV",{class:!0});var U=E(B);L=P(U,l[1]),U.forEach(m),j.forEach(m),this.h()},h(){b(t,"class","kind svelte-pdevj6"),b(a,"class","period svelte-pdevj6"),b(u,"class","index svelte-pdevj6"),b(e,"class","period-info svelte-pdevj6"),b(B,"class","value svelte-pdevj6"),b(i,"class","remaining svelte-pdevj6")},m(k,V){N(k,e,V),o(e,t),o(t,n),o(e,f),o(e,a),o(e,d),o(e,u),o(u,C),o(u,p),N(k,_,V),Q(v,k,V),N(k,r,V),N(k,i,V),o(i,w),o(i,B),o(B,L),M=!0},p(k,V){(!M||V&1)&&s!==(s=k[0]?.voting_period.kind+"")&&Z(n,s),(!M||V&1)&&g!==(g=k[0].voting_period.index+"")&&Z(p,g),(!M||V&2)&&Z(L,k[1])},i(k){M||(O(v.$$.fragment,k),M=!0)},o(k){H(v.$$.fragment,k),M=!1},d(k){k&&(m(e),m(_),m(r),m(i)),W(v,k)}}}function Ys(l){let e,t,s='<h5 class="svelte-pdevj6">Governance</h5>',n,f,a,h,d,u;f=new he({});const C=[Fs,qs],g=[];function p(_,v){return _[0]?0:1}return h=p(l),d=g[h]=C[h](l),{c(){e=I("div"),t=I("div"),t.innerHTML=s,n=S(),J(f.$$.fragment),a=S(),d.c(),this.h()},l(_){e=D(_,"DIV",{class:!0});var v=E(e);t=D(v,"DIV",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-cr342v"&&(t.innerHTML=s),n=T(v),K(f.$$.fragment,v),a=T(v),d.l(v),v.forEach(m),this.h()},h(){b(t,"class","title svelte-pdevj6"),b(e,"class","governance svelte-pdevj6")},m(_,v){N(_,e,v),o(e,t),o(e,n),Q(f,e,null),o(e,a),g[h].m(e,null),u=!0},p(_,v){let r=h;h=p(_),h===r?g[h].p(_,v):(Ee(),H(g[r],1,1,()=>{g[r]=null}),Ve(),d=g[h],d?d.p(_,v):(d=g[h]=C[h](_),d.c()),O(d,1),d.m(e,null))},i(_){u||(O(f.$$.fragment,_),O(d),u=!0)},o(_){H(f.$$.fragment,_),H(d),u=!1},d(_){_&&m(e),W(f),g[h].d()}}}function Gs(l){let e,t,s,n,f;return t=new Oe({props:{class:"governance-card",$$slots:{default:[Ys]},$$scope:{ctx:l}}}),{c(){e=I("button"),J(t.$$.fragment),this.h()},l(a){e=D(a,"BUTTON",{class:!0});var h=E(e);K(t.$$.fragment,h),h.forEach(m),this.h()},h(){b(e,"class","unstyle-button governance-wrap svelte-pdevj6")},m(a,h){N(a,e,h),Q(t,e,null),s=!0,n||(f=Ge(e,"click",l[4]),n=!0)},p(a,[h]){const d={};h&67&&(d.$$scope={dirty:h,ctx:a}),t.$set(d)},i(a){s||(O(t.$$.fragment,a),s=!0)},o(a){H(t.$$.fragment,a),s=!1},d(a){a&&m(e),W(t),n=!1,f()}}}function Js(l,e,t){let s,{votingPeriodInfo:n}=e,{block:f}=e;const a=setInterval(()=>{t(1,s=$t(n,f))},500);st(()=>clearInterval(a));function h(){fs("/governance")}const d=()=>h();return l.$$set=u=>{"votingPeriodInfo"in u&&t(0,n=u.votingPeriodInfo),"block"in u&&t(3,f=u.block)},l.$$.update=()=>{l.$$.dirty&9&&t(1,s=$t(n,f))},[n,s,h,f,d]}class Ks extends we{constructor(e){super(),Ie(this,e,Js,Gs,be,{votingPeriodInfo:0,block:3})}}function Pt(l,e,t){const s=l.slice();return s[12]=e[t][0],s[13]=e[t][1],s}function Ht(l,e,t){const s=l.slice();return s[16]=e[t][0],s[13]=e[t][1],s}function Ut(l){let e,t;return e=new Zs({props:{title:"Baker's Services",services:l[2]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,n){const f={};n&4&&(f.services=s[2]),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function Zt(l){let e,t;return e=new Ss({props:{baker:l[16],status:l[13],showColor:l[10]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,n){const f={};n&8&&(f.baker=s[16]),n&8&&(f.status=s[13]),n&1024&&(f.showColor=s[10]),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function qt(l){let e,t;return e=new Jt({props:{node:l[13],title:l[12]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,n){Q(e,s,n),t=!0},p(s,n){const f={};n&1&&(f.node=s[13]),n&1&&(f.title=s[12]),e.$set(f)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function Qs(l){let e,t,s,n,f,a,h,d,u,C,g,p,_,v,r,i=l[6]&&Ut(l);n=new Jt({props:{node:l[1],title:"Baker's Node"}});let w=de(l[3]),B=[];for(let c=0;c<w.length;c+=1)B[c]=Zt(Ht(l,w,c));const L=c=>H(B[c],1,1,()=>{B[c]=null});h=new Ks({props:{votingPeriodInfo:l[5],block:l[4]}}),C=new zt({props:{mode:"upcoming",rights:l[8],showBakerColors:l[10],title:"Upcoming Baking Rights"}}),_=new zt({props:{mode:"past",rights:l[7],showBakerColors:l[10],title:"Past Baking Rights"}});let M=de(l[0]),k=[];for(let c=0;c<M.length;c+=1)k[c]=qt(Pt(l,M,c));const V=c=>H(k[c],1,1,()=>{k[c]=null});return{c(){e=I("div"),t=I("div"),i&&i.c(),s=S(),J(n.$$.fragment),f=S();for(let c=0;c<B.length;c+=1)B[c].c();a=S(),J(h.$$.fragment),d=S(),u=I("div"),J(C.$$.fragment),g=S(),p=I("div"),J(_.$$.fragment),v=S();for(let c=0;c<k.length;c+=1)k[c].c();this.h()},l(c){e=D(c,"DIV",{class:!0});var $=E(e);t=D($,"DIV",{class:!0});var j=E(t);i&&i.l(j),s=T(j),K(n.$$.fragment,j),f=T(j);for(let q=0;q<B.length;q+=1)B[q].l(j);a=T(j),K(h.$$.fragment,j),d=T(j),u=D(j,"DIV",{class:!0});var U=E(u);K(C.$$.fragment,U),U.forEach(m),g=T(j),p=D(j,"DIV",{class:!0});var se=E(p);K(_.$$.fragment,se),se.forEach(m),v=T(j);for(let q=0;q<k.length;q+=1)k[q].l(j);j.forEach(m),$.forEach(m),this.h()},h(){b(u,"class","baker-rights svelte-8i7cfr"),F(u,"expanded",l[9]),b(p,"class","baker-rights svelte-8i7cfr"),F(p,"expanded",l[9]),b(t,"class","dashboard-grid svelte-8i7cfr"),b(e,"class","dashboard-grid-wrap svelte-8i7cfr")},m(c,$){N(c,e,$),o(e,t),i&&i.m(t,null),o(t,s),Q(n,t,null),o(t,f);for(let j=0;j<B.length;j+=1)B[j]&&B[j].m(t,null);o(t,a),Q(h,t,null),o(t,d),o(t,u),Q(C,u,null),o(t,g),o(t,p),Q(_,p,null),o(t,v);for(let j=0;j<k.length;j+=1)k[j]&&k[j].m(t,null);r=!0},p(c,[$]){c[6]?i?(i.p(c,$),$&64&&O(i,1)):(i=Ut(c),i.c(),O(i,1),i.m(t,s)):i&&(Ee(),H(i,1,1,()=>{i=null}),Ve());const j={};if($&2&&(j.node=c[1]),n.$set(j),$&1032){w=de(c[3]);let y;for(y=0;y<w.length;y+=1){const ne=Ht(c,w,y);B[y]?(B[y].p(ne,$),O(B[y],1)):(B[y]=Zt(ne),B[y].c(),O(B[y],1),B[y].m(t,a))}for(Ee(),y=w.length;y<B.length;y+=1)L(y);Ve()}const U={};$&32&&(U.votingPeriodInfo=c[5]),$&16&&(U.block=c[4]),h.$set(U);const se={};$&256&&(se.rights=c[8]),$&1024&&(se.showBakerColors=c[10]),C.$set(se),(!r||$&512)&&F(u,"expanded",c[9]);const q={};if($&128&&(q.rights=c[7]),$&1024&&(q.showBakerColors=c[10]),_.$set(q),(!r||$&512)&&F(p,"expanded",c[9]),$&1){M=de(c[0]);let y;for(y=0;y<M.length;y+=1){const ne=Pt(c,M,y);k[y]?(k[y].p(ne,$),O(k[y],1)):(k[y]=qt(ne),k[y].c(),O(k[y],1),k[y].m(t,null))}for(Ee(),y=M.length;y<k.length;y+=1)V(y);Ve()}},i(c){if(!r){O(i),O(n.$$.fragment,c);for(let $=0;$<w.length;$+=1)O(B[$]);O(h.$$.fragment,c),O(C.$$.fragment,c),O(_.$$.fragment,c);for(let $=0;$<M.length;$+=1)O(k[$]);r=!0}},o(c){H(i),H(n.$$.fragment,c),B=B.filter(Boolean);for(let $=0;$<B.length;$+=1)H(B[$]);H(h.$$.fragment,c),H(C.$$.fragment,c),H(_.$$.fragment,c),k=k.filter(Boolean);for(let $=0;$<k.length;$+=1)H(k[$]);r=!1},d(c){c&&m(e),i&&i.d(),W(n),Ae(B,c),W(h),W(C),W(_),Ae(k,c)}}}function Ws(l,e,t){let s,n,f,a,h,d,u,C,g,p,_,v;return xt(l,cs,r=>t(11,v=r)),l.$$.update=()=>{l.$$.dirty&2048&&t(1,s=v.baker_node),l.$$.dirty&2048&&t(0,n=Object.entries(v.nodes).sort((r,i)=>r[0]>i[0]?1:-1)),l.$$.dirty&2048&&t(3,f=Object.entries(v.bakers.bakers).sort((r,i)=>r[0]>i[0]?1:-1)),l.$$.dirty&8&&t(10,a=f.length>1),l.$$.dirty&8&&t(9,h=f.length>1),l.$$.dirty&2048&&t(8,d=v.rights.rights.filter(r=>r.level>v.rights.level)),l.$$.dirty&2048&&t(7,u=v.rights.rights.filter(r=>r.level<=v.rights.level).sort((r,i)=>r.level<i.level?1:-1)),l.$$.dirty&2048&&t(2,C=v.services),l.$$.dirty&4&&t(6,g=Object.keys(C.node_services).length>0||Object.keys(C.signer_services).length>0),l.$$.dirty&3&&t(5,p=as([s,...n.map(r=>r[1])])),l.$$.dirty&3&&t(4,_=os([s,...n.map(r=>r[1])]))},[n,s,C,f,_,p,g,u,d,h,a,v]}class nl extends we{constructor(e){super(),Ie(this,e,Ws,Qs,be,{})}}export{nl as component};