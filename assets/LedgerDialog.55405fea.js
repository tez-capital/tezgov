import{c as V,d as U,r as P,w as A,s as G,o as I,a as H,b as h,e as S,C as M,f as T,S as O,u as C,I as Q,g as K,t as $,F as w,n as L,L as F,T as W,_ as z,p as Z,h as j,i as Y,j as X}from"./main.1aec21e3.js";import{p as f,P as p,b,a as q}from"./taquito-utils.es6.f2deb219.js";import{b as J}from"./index.011cf840.js";function m(t,e,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function l(u){try{c(r.next(u))}catch(g){o(g)}}function E(u){try{c(r.throw(u))}catch(g){o(g)}}function c(u){u.done?n(u.value):s(u.value).then(l,E)}c((r=r.apply(t,e||[])).next())})}const D=230;function k(t){const e=[];t.split("/").forEach(s=>{let n=parseInt(s,10);Number.isNaN(n)||(s.length>1&&s[s.length-1]==="'"&&(n+=2147483648),e.push(n))});const r=Buffer.alloc(1+e.length*4);return r[0]=e.length,e.forEach((s,n)=>{r.writeUInt32BE(s,1+4*n)}),r}function ee(t,e){return e===0?t=t.slice(1):(t[0]=2+(t[64]&1),t=t.slice(0,33)),t}function te(t,e){let i=t;return typeof e<"u"&&(i=Buffer.from(e).toString("hex").concat(t)),i}function ie(t,e){let i=0;for(;i!==e.length;){const r=i+D>=e.length?e.length-i:D,s=Buffer.alloc(r);e.copy(s,0,i,i+r),t.push(s),i+=r}return t}function re(t){let e=!0;t[0]!==49&&t[0]!==48&&(e=!1),t[1]+4!==t.length&&(e=!1),t[2]!==2&&(e=!1);const i=t[3];t[4+i]!==2&&(e=!1);const r=5+i,s=t[r];return r+1+s+2!==t.length&&(e=!1),e}function N(t,e){const i=Buffer.alloc(32);i.fill(0);let r=e[t],s=t+1;return r>32&&(s+=r-32,r=32),e.copy(i,32-r,s,s+r),{buffer:i,idxValueStart:s,length:r}}class se extends Error{constructor(e){super(e),this.message=e,this.name="InvalidLedgerResponseError"}}class ne extends Error{constructor(){super("Unable to retrieve Public Key from Ledger"),this.name="PublicKeyRetrievalError"}}class oe extends Error{constructor(){super("Unable to retrieve Public Key Hash from Ledger"),this.name="PublicKeyHashRetrievalError"}}var a;(function(t){t[t.ED25519=0]="ED25519",t[t.SECP256K1=1]="SECP256K1",t[t.P256=2]="P256"})(a||(a={}));class ae extends Error{constructor(e){super(`The derivation type ${e} is invalid. The derivation type must be DerivationType.ED25519, DerivationType.SECP256K1 or DerivationType.P256`),this.derivationType=e,this.name="InvalidDerivationTypeError"}}class le extends Error{constructor(e){super(`The derivation path ${e} is invalid. The derivation path must start with 44'/1729`),this.derivationPath=e,this.name="InvalidDerivationPathError"}}class Ie{constructor(e,i="44'/1729'/0'/0'",r=!0,s=a.ED25519){if(this.transport=e,this.path=i,this.prompt=r,this.derivationType=s,this.CLA=128,this.INS_GET_PUBLIC_KEY=2,this.INS_PROMPT_PUBLIC_KEY=3,this.INS_SIGN=4,this.FIRST_MESSAGE_SEQUENCE=0,this.LAST_MESSAGE_SEQUENCE=129,this.OTHER_MESSAGE_SEQUENCE=1,this.transport.setScrambleKey("XTZ"),!i.startsWith("44'/1729'"))throw new le(i);if(!Object.values(a).includes(s))throw new ae(s.toString())}publicKeyHash(){return m(this,void 0,void 0,function*(){if(this._publicKeyHash||(yield this.publicKey()),this._publicKeyHash)return this._publicKeyHash;throw new oe})}publicKey(){return m(this,void 0,void 0,function*(){if(this._publicKey)return this._publicKey;const e=yield this.getLedgerPublicKey(),i=e[0],r=e.slice(1,1+i),s=ee(r,this.derivationType),n=this.getPrefixes(),o=b(s,n.prefPk),l=b(J.hash(s,20),n.prefPkh);return this._publicKey=o,this._publicKeyHash=l,o})}getLedgerPublicKey(){return m(this,void 0,void 0,function*(){try{let e=this.INS_PROMPT_PUBLIC_KEY;return this.prompt===!1&&(e=this.INS_GET_PUBLIC_KEY),yield this.transport.send(this.CLA,e,this.FIRST_MESSAGE_SEQUENCE,this.derivationType,k(this.path))}catch{throw new ne}})}secretKey(){return m(this,void 0,void 0,function*(){throw new q("Secret key cannot be exposed")})}sign(e,i){return m(this,void 0,void 0,function*(){const r=te(e,i),s=Buffer.from(r,"hex");let n=[];n.push(k(this.path)),n=ie(n,s);const o=yield this.signWithLedger(n);let l;if(this.derivationType===a.ED25519)l=o.slice(0,o.length-2).toString("hex");else{if(!re(o))throw new se("Cannot parse ledger response");const c=N(3,o),u=c.idxValueStart+c.length+1,g=N(u,o);l=Buffer.concat([c.buffer,g.buffer]).toString("hex")}return{bytes:e,sig:b(l,f[p.SIG]),prefixSig:b(l,this.getPrefixes().prefSig),sbytes:e+l}})}signWithLedger(e){return m(this,void 0,void 0,function*(){let i=yield this.transport.send(this.CLA,this.INS_SIGN,this.FIRST_MESSAGE_SEQUENCE,this.derivationType,e[0]);for(let r=1;r<e.length;r++){const s=r===e.length-1?this.LAST_MESSAGE_SEQUENCE:this.OTHER_MESSAGE_SEQUENCE;i=yield this.transport.send(this.CLA,this.INS_SIGN,s,this.derivationType,e[r])}return i})}getPrefixes(){return this.derivationType===a.ED25519?{prefPk:f[p.EDPK],prefPkh:f[p.TZ1],prefSig:f[p.EDSIG]}:this.derivationType===a.SECP256K1?{prefPk:f[p.SPPK],prefPkh:f[p.TZ2],prefSig:f[p.SPSIG]}:{prefPk:f[p.P2PK],prefPkh:f[p.TZ3],prefSig:f[p.P2SIG]}}}const ce=t=>V(()=>[e=>!!e||`${t} can not be empty!`,e=>/^44\'\/1729(\'\/[0-9]+)+\'$/.test(e)||e==="44'/1729'"||`Invalid ${t}!`]),x=t=>(Z("data-v-22c4fa56"),t=t(),j(),t),ue={class:"center"},de={class:"card z-depth-2"},he={class:"content"},fe=x(()=>h("div",{class:"icon-wrap center pv-2"},[h("img",{src:Y,width:"50"})],-1)),pe=x(()=>h("div",{class:"headline pv-3"},"Connect your Ledger",-1)),ve={key:0,class:"deriv-path"},_e=x(()=>h("div",{class:"pt-1 space-1"},null,-1)),Ee={key:1,class:"error-text pt-2"},ge=x(()=>h("div",{class:"pv-2 space-2",style:{"grid-row":"9","grid-colum":"1"}},null,-1)),Se={class:"buttons pt-0 pb-2"},me=U({__name:"LedgerDialog",props:{context:null},emits:["cancel","confirm"],setup(t,{emit:e}){const i=t,r=ce("Derivation Path"),s=[{id:a.ED25519,label:a[a.ED25519]},{id:a.SECP256K1,label:a[a.SECP256K1]},{id:a.P256,label:a[a.P256]}],n=P(!1),o=P(s[0]),l=P("44'/1729'/0'/0'"),E=P(void 0),c=P(!1);let u=!1;A(()=>i.context.active,_=>{if(_)u=!1;else{c.value=!1,E.value=void 0;return}});const g=V(()=>c.value||G(r.value,_=>_(l.value)!==!0));let v;const B=async()=>{try{c.value=!0;const{LedgerSession:_}=await z(()=>import("./LedgerSession.5ec58d20.js"),["assets/LedgerSession.5ec58d20.js","assets/main.1aec21e3.js","assets/index.86d17c5f.css","assets/SessionBase.28583043.js","assets/taquito-utils.es6.f2deb219.js","assets/index.011cf840.js","assets/DAppClient.a4cfd41c.js"]);v=await _.create_transport();const d=await _.create(v,i.context.networkId,{rpc:i.context.rpc,derivationType:o.value.id,derivationPath:l.value});if(u&&d){d.logout();return}typeof i.context.confirm=="function"&&i.context.confirm(d),e("confirm",d)}catch(_){E.value=`Failed to login with ledger!
Error: ${_.message}`,v==null||v.close()}finally{c.value=!1}},R=()=>{u=!0,v==null||v.close(),typeof i.context.cancel=="function"&&i.context.cancel(),e("cancel")};return(_,d)=>(I(),H(W,{to:"#dialog"},[h("div",{class:L(["modal",{"modal-active":t.context.active}]),key:"ledgerDialog"},[h("div",ue,[h("div",de,[h("div",he,[fe,pe,S(M,{class:"custom-hd pb-2",label:"Use custom HD derivation path",modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=y=>n.value=y)},null,8,["modelValue"]),n.value?(I(),T("div",ve,[S(O,{portaled:"",label:"Derivation Type",items:s,modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=y=>o.value=y)},null,8,["modelValue"]),S(Q,{modelValue:l.value,"onUpdate:modelValue":d[2]||(d[2]=y=>l.value=y),label:"Derivation Path",rules:C(r),"capitalize-label":!0},null,8,["modelValue","rules"])])):K("",!0),_e,E.value?(I(),T("div",Ee,$(E.value),1)):K("",!0),ge,h("div",Se,[S(w,{onClick:R,label:"Cancel"}),S(w,{class:L(["confirm-btn",{disabled:C(g)}]),onClick:B,label:"Connect"},null,8,["class"])])]),h("div",{class:L(["loader-wrap",{"loader-hidden":!c.value}])},[S(F,{class:"loader","is-indeterminate":!0,label:"Please confirm operation on your ledger..."})],2)])])],2)]))}});const ye=X(me,[["__scopeId","data-v-22c4fa56"]]),Le=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{Ie as L,Le as a};