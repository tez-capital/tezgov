import{p as f,P as p,c as x,d as R,e as U,_ as A}from"./taquito-utils.es6-82c03c39.js";import{d as G,u as H,r as m,w as M,c as O,s as Q,o as I,a as F,b as h,e as S,C as W,f as T,S as z,g as D,I as Z,h as C,t as j,F as K,n as L,L as Y,T as $,p as X,i as q,_ as J,j as ee}from"./main-043506b6.js";function P(t,e,i,r){function s(n){return n instanceof i?n:new i(function(a){a(n)})}return new(i||(i=Promise))(function(n,a){function l(u){try{c(r.next(u))}catch(g){a(g)}}function E(u){try{c(r.throw(u))}catch(g){a(g)}}function c(u){u.done?n(u.value):s(u.value).then(l,E)}c((r=r.apply(t,e||[])).next())})}const w=230;function B(t){const e=[];t.split("/").forEach(s=>{let n=parseInt(s,10);Number.isNaN(n)||(s.length>1&&s[s.length-1]==="'"&&(n+=2147483648),e.push(n))});const r=Buffer.alloc(1+e.length*4);return r[0]=e.length,e.forEach((s,n)=>{r.writeUInt32BE(s,1+4*n)}),r}function te(t,e){return e===0||e===3?t=t.slice(1):(t[0]=2+(t[64]&1),t=t.slice(0,33)),t}function ie(t,e){let i=t;return typeof e<"u"&&(i=Buffer.from(e).toString("hex").concat(t)),i}function re(t,e){let i=0;for(;i!==e.length;){const r=i+w>=e.length?e.length-i:w,s=Buffer.alloc(r);e.copy(s,0,i,i+r),t.push(s),i+=r}return t}function se(t){let e=!0;t[0]!==49&&t[0]!==48&&(e=!1),t[1]+4!==t.length&&(e=!1),t[2]!==2&&(e=!1);const i=t[3];t[4+i]!==2&&(e=!1);const r=5+i,s=t[r];return r+1+s+2!==t.length&&(e=!1),e}function k(t,e){const i=Buffer.alloc(32);i.fill(0);let r=e[t],s=t+1;return r>32&&(s+=r-32,r=32),e.copy(i,32-r,s,s+r),{buffer:i,idxValueStart:s,length:r}}class ne extends Error{constructor(e){super(e),this.message=e,this.name="InvalidLedgerResponseError"}}class oe extends Error{constructor(){super("Unable to retrieve Public Key from Ledger"),this.name="PublicKeyRetrievalError"}}class ae extends Error{constructor(){super("Unable to retrieve Public Key Hash from Ledger"),this.name="PublicKeyHashRetrievalError"}}var o;(function(t){t[t.ED25519=0]="ED25519",t[t.SECP256K1=1]="SECP256K1",t[t.P256=2]="P256",t[t.BIP32_ED25519=3]="BIP32_ED25519"})(o||(o={}));class le extends Error{constructor(e){super(`The derivation type ${e} is invalid. The derivation type must be DerivationType.ED25519, DerivationType.SECP256K1, DerivationType.P256 or DerivationType.BIP32_ED25519`),this.derivationType=e,this.name="InvalidDerivationTypeError"}}class ce extends Error{constructor(e){super(`The derivation path ${e} is invalid. The derivation path must start with 44'/1729`),this.derivationPath=e,this.name="InvalidDerivationPathError"}}class be{constructor(e,i="44'/1729'/0'/0'",r=!0,s=o.ED25519){if(this.transport=e,this.path=i,this.prompt=r,this.derivationType=s,this.CLA=128,this.INS_GET_PUBLIC_KEY=2,this.INS_PROMPT_PUBLIC_KEY=3,this.INS_SIGN=4,this.FIRST_MESSAGE_SEQUENCE=0,this.LAST_MESSAGE_SEQUENCE=129,this.OTHER_MESSAGE_SEQUENCE=1,this.transport.setScrambleKey("XTZ"),!i.startsWith("44'/1729'"))throw new ce(i);if(!Object.values(o).includes(s))throw new le(s.toString())}publicKeyHash(){return P(this,void 0,void 0,function*(){if(this._publicKeyHash||(yield this.publicKey()),this._publicKeyHash)return this._publicKeyHash;throw new ae})}publicKey(){return P(this,void 0,void 0,function*(){if(this._publicKey)return this._publicKey;const e=yield this.getLedgerPublicKey(),i=e[0],r=e.slice(1,1+i),s=te(r,this.derivationType),n=this.getPrefixes(),a=x(s,n.prefPk),l=x(R.hash(s,20),n.prefPkh);return this._publicKey=a,this._publicKeyHash=l,a})}getLedgerPublicKey(){return P(this,void 0,void 0,function*(){try{let e=this.INS_PROMPT_PUBLIC_KEY;return this.prompt===!1&&(e=this.INS_GET_PUBLIC_KEY),yield this.transport.send(this.CLA,e,this.FIRST_MESSAGE_SEQUENCE,this.derivationType,B(this.path))}catch{throw new oe}})}secretKey(){return P(this,void 0,void 0,function*(){throw new U("Secret key cannot be exposed")})}sign(e,i){return P(this,void 0,void 0,function*(){const r=ie(e,i),s=Buffer.from(r,"hex");let n=[];n.push(B(this.path)),n=re(n,s);const a=yield this.signWithLedger(n);let l;if(this.derivationType===o.ED25519||this.derivationType===o.BIP32_ED25519)l=a.slice(0,a.length-2).toString("hex");else{if(!se(a))throw new ne("Cannot parse ledger response");const c=k(3,a),u=c.idxValueStart+c.length+1,g=k(u,a);l=Buffer.concat([c.buffer,g.buffer]).toString("hex")}return{bytes:e,sig:x(l,f[p.SIG]),prefixSig:x(l,this.getPrefixes().prefSig),sbytes:e+l}})}signWithLedger(e){return P(this,void 0,void 0,function*(){let i=yield this.transport.send(this.CLA,this.INS_SIGN,this.FIRST_MESSAGE_SEQUENCE,this.derivationType,e[0]);for(let r=1;r<e.length;r++){const s=r===e.length-1?this.LAST_MESSAGE_SEQUENCE:this.OTHER_MESSAGE_SEQUENCE;i=yield this.transport.send(this.CLA,this.INS_SIGN,s,this.derivationType,e[r])}return i})}getPrefixes(){return this.derivationType===o.ED25519||this.derivationType===o.BIP32_ED25519?{prefPk:f[p.EDPK],prefPkh:f[p.TZ1],prefSig:f[p.EDSIG]}:this.derivationType===o.SECP256K1?{prefPk:f[p.SPPK],prefPkh:f[p.TZ2],prefSig:f[p.SPSIG]}:{prefPk:f[p.P2PK],prefPkh:f[p.TZ3],prefSig:f[p.P2SIG]}}}const b=t=>(X("data-v-6c393358"),t=t(),q(),t),ue={class:"center"},de={class:"card z-depth-2"},he={class:"content"},fe=b(()=>h("div",{class:"icon-wrap center pv-2"},[h("img",{src:J,width:"50"})],-1)),pe=b(()=>h("div",{class:"headline pv-3"},"Connect your Ledger",-1)),ve={key:0,class:"deriv-path"},_e=b(()=>h("div",{class:"pt-1 space-1"},null,-1)),Ee={key:1,class:"error-text pt-2"},ge=b(()=>h("div",{class:"pv-2 space-2",style:{"grid-row":"9","grid-colum":"1"}},null,-1)),Se={class:"buttons pt-0 pb-2"},Pe=G({__name:"LedgerDialog",props:{context:null},emits:["cancel","confirm"],setup(t,{emit:e}){const i=t,r=H("Derivation Path"),s=[{id:o.ED25519,label:o[o.ED25519]},{id:o.SECP256K1,label:o[o.SECP256K1]},{id:o.P256,label:o[o.P256]},{id:o.BIP32_ED25519,label:o[o.BIP32_ED25519]}],n=m(!1),a=m(s[0]),l=m("44'/1729'/0'/0'"),E=m(void 0),c=m(!1);let u=!1;M(()=>i.context.active,_=>{if(_)u=!1;else{c.value=!1,E.value=void 0;return}});const g=O(()=>c.value||Q(r.value,_=>_(l.value)!==!0));let v;const N=async()=>{try{c.value=!0;const{LedgerSession:_}=await A(()=>import("./LedgerSession-22a7358f.js"),["assets/LedgerSession-22a7358f.js","assets/main-043506b6.js","assets/taquito-utils.es6-82c03c39.js","assets/_commonjsHelpers-6dff16f2.js","assets/index-bf468514.css","assets/SessionBase-d64d9027.js","assets/taquito.es6-a47a8eec.js","assets/index-9aada285.js","assets/index-6f227088.js","assets/DAppClient-8558df6f.js"]);v=await _.create_transport();const d=await _.create(v,i.context.networkId,{rpc:i.context.rpc,derivationType:a.value.id,derivationPath:l.value});if(u&&d){d.logout();return}typeof i.context.confirm=="function"&&i.context.confirm(d),e("confirm",d)}catch(_){E.value=`Failed to login with ledger!
Error: ${_.message}`,v==null||v.close()}finally{c.value=!1}},V=()=>{u=!0,v==null||v.close(),typeof i.context.cancel=="function"&&i.context.cancel(),e("cancel")};return(_,d)=>(I(),F($,{to:"#dialog"},[h("div",{class:L(["modal",{"modal-active":t.context.active}]),key:"ledgerDialog"},[h("div",ue,[h("div",de,[h("div",he,[fe,pe,S(W,{class:"custom-hd pb-2",label:"Use custom HD derivation path",modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=y=>n.value=y)},null,8,["modelValue"]),n.value?(I(),T("div",ve,[S(z,{portaled:"",label:"Derivation Type",items:s,modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=y=>a.value=y)},null,8,["modelValue"]),S(Z,{modelValue:l.value,"onUpdate:modelValue":d[2]||(d[2]=y=>l.value=y),label:"Derivation Path",rules:D(r),"capitalize-label":!0},null,8,["modelValue","rules"])])):C("",!0),_e,E.value?(I(),T("div",Ee,j(E.value),1)):C("",!0),ge,h("div",Se,[S(K,{onClick:V,label:"Cancel"}),S(K,{class:L(["confirm-btn",{disabled:D(g)}]),onClick:N,label:"Connect"},null,8,["class"])])]),h("div",{class:L(["loader-wrap",{"loader-hidden":!c.value}])},[S(Y,{class:"loader","is-indeterminate":!0,label:"Please confirm operation on your ledger..."})],2)])])],2)]))}});const ye=ee(Pe,[["__scopeId","data-v-6c393358"]]),Ie=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{be as L,Ie as a};
