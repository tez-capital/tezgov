import{E as v,j as S,k as T,l as z,O as l,y as O}from"./main-0e7f43b8.js";import{S as K}from"./SessionBase-d217152b.js";import{p as o,n as A,V as U,u as R,d as I,O as B,Q as F,r as g,R as w,S as N,T as P,l as k,U as $,a as _,c as D,_ as V}from"./taquito-utils.es6-2790dd94.js";import{H,c as b,S as y}from"./taquito.es6-14c09632.js";import"./_commonjsHelpers-6dff16f2.js";import"./DAppClient-e2aae175.js";import"./index-9aada285.js";function u(a,t,e,s){function i(n){return n instanceof e?n:new e(function(r){r(n)})}return new(e||(e=Promise))(function(n,r){function c(p){try{d(s.next(p))}catch(f){r(f)}}function h(p){try{d(s.throw(p))}catch(f){r(f)}}function d(p){p.done?n(p.value):i(p.value).then(c,h)}d((s=s.apply(a,t||[])).next())})}class m extends Error{constructor(t,e){super(t),this.message=t,this.innerException=e,this.name="KeyNotFoundError"}}class j extends Error{constructor(t,e){super(t),this.message=t,this.innerException=e,this.name="OperationNotAuthorized"}}class q extends Error{constructor(t,e,s){super(t),this.message=t,this.innerException=e,this.data=s,this.name="BadSigningData"}}class L extends Error{constructor(t,e){super(`Requested public key hash does not match the initialized public key hash: {
        requested: ${t},
        initialized: ${e}
      }`),this.requested=t,this.name="PublicKeyMismatch"}}class C extends Error{constructor(t,e){super(`
        Signature failed verification against public key: 
        {
          bytes: ${t},
          signature: ${e}
        }
      `),this.bytes=t,this.signature=e,this.name="SignatureVerificationFailedError"}}const E={ed:{pk:o.edpk,sk:o.edsk,pkh:o.tz1,sig:o.edsig},p2:{pk:o.p2pk,sk:o.p2sk,pkh:o.tz3,sig:o.p2sig},sp:{pk:o.sppk,sk:o.spsk,pkh:o.tz2,sig:o.spsig}};class M{constructor(t,e,s={},i=new H){if(this.pkh=t,this.rootUrl=e,this.options=s,this.http=i,A(this.pkh)!==U.VALID)throw new R(this.pkh)}publicKeyHash(){return u(this,void 0,void 0,function*(){return this.pkh})}createURL(t){return`${this.rootUrl.replace(/\/+$/g,"")}${t}`}publicKey(){return u(this,void 0,void 0,function*(){try{const{public_key:t}=yield this.http.createRequest({url:this.createURL(`/keys/${this.pkh}`),method:"GET",headers:this.options.headers});return t}catch(t){throw t instanceof b&&t.status===y.NOT_FOUND?new m(`Key not found: ${this.pkh}`,t):t}})}secretKey(){return u(this,void 0,void 0,function*(){throw new I("Secret key cannot be exposed")})}sign(t,e){return u(this,void 0,void 0,function*(){try{let s=B(t);typeof e<"u"&&(s=F(e,s));const i=g(w(s)),{signature:n}=yield this.http.createRequest({url:this.createURL(`/keys/${this.pkh}`),method:"POST",headers:this.options.headers},i),r=n.startsWith("sig")?n.substring(0,3):n.substring(0,5);if(!N(r))throw new P(n,"Unsupported signature given by remote signer");const c=k(n,o[r]),h=yield this.publicKey();if(yield this.verifyPublicKey(h),!$(i,h,n))throw new C(i,n);return{bytes:t,sig:_(c,o.sig),prefixSig:n,sbytes:t+g(w(c))}}catch(s){if(s instanceof b){if(s.status===y.NOT_FOUND)throw new m(`Key not found: ${this.pkh}`,s);if(s.status===y.FORBIDDEN)throw new j("Signing Operation not authorized",s);if(s.status===y.BAD_REQUEST)throw new q("Invalid data",s,{bytes:t,watermark:e})}throw s}})}verifyPublicKey(t){return u(this,void 0,void 0,function*(){const e=t.substring(0,2),s=k(t,E[e].pk),i=_(D.hash(s,20),E[e].pkh);if(i!==this.pkh)throw new L(i,this.pkh)})}}const Q=async(a,t,e)=>{const{create_toolkit:s}=await V(()=>import("./taquito-cd2f90fd.js"),["assets/taquito-cd2f90fd.js","assets/taquito.es6-14c09632.js","assets/taquito-utils.es6-2790dd94.js","assets/_commonjsHelpers-6dff16f2.js","assets/index-9aada285.js"]),{tezos:i,forger:n}=await s(e.rpc),r=new M(a,t);i.setSignerProvider(r);const c=a,h=c?await i.rpc.getManagerKey(c):void 0;return{account:c,tezos:i,forger:n,managerKey:h==null?void 0:h.toString()}},{request_ledger_setup:W}=O();class x extends K{constructor(t,e,s,i,n){super(t,s,i,n),this.url=e}get AccountType(){return v.Remote}get Icon(){return new S("cloud",T.icon)}get IsAccountSwitchSupported(){return!1}static async create(t,e,s,i){const n=z[s];if(!n)throw new Error("Invalid network specification!");const{tezos:r,forger:c,managerKey:h}=await Q(t,e,{...i,rpc:(i==null?void 0:i.rpc)??n.rpc});return new x(t,e,r,c,{networkId:s,managerKey:h})}static async create_from_cache(){}logout(){}async switch_wallet(){const t=await W({networkId:this.NetworkId,rpc:this.Tezos.rpc.getRpcUrl()});if(!t)throw new Error("Aborted.");return t}async vote(t){const e=await this.forge_ballot_op(t),s=async()=>{const i=this.Tezos.wallet.context,n=await this.Tezos.signer.sign(e,new Uint8Array([3])),r=await this.Tezos.rpc.injectOperation(n.sbytes);return i.operationFactory.createOperation(r)};return new l(s,"Vote",{account:this.Account,ballot:t})}async propose(t){const e=await this.forge_proposals_op(t),s=async()=>{const i=this.Tezos.wallet.context,n=await this.Tezos.signer.sign(e,new Uint8Array([3])),r=await this.Tezos.rpc.injectOperation(n.sbytes);return i.operationFactory.createOperation(r)};return new l(s,"Propose",{account:this.Account,proposals:t})}async set_deposits_limit(t){const e=await this.forge_set_deposit_op(t),s=async()=>{const i=this.Tezos.wallet.context,n=await this.Tezos.signer.sign(e,new Uint8Array([3])),r=await this.Tezos.rpc.injectOperation(n.sbytes);return i.operationFactory.createOperation(r)};return new l(s,"Propose",{account:this.Account,limit:t.toString()})}async update_consensus_key(t){const e=await this.forge_update_consensus_key_op(t),s=async()=>{const i=this.Tezos.wallet.context,n=await this.Tezos.signer.sign(e,new Uint8Array([3])),r=await this.Tezos.rpc.injectOperation(n.sbytes);return i.operationFactory.createOperation(r)};return new l(s,"Propose",{account:this.Account,"Consensus Key":t})}}export{x as RemoteSession};
