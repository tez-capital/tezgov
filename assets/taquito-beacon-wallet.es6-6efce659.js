import{D as p,S as d,P as v}from"./DAppClient-2a387e18.js";import{a6 as m,Z as P,$ as w,a0 as S,a1 as A,al as O}from"./main-5a3da669.js";import{d as I,e as E,f as T,g as D}from"./taquito.es6-2b3fad54.js";let o;const q=(c,e)=>(o&&e&&(o.disconnect(),o=void 0),o||(o||(o=new p(c)),o));function n(c,e,t,i){function s(r){return r instanceof t?r:new t(function(l){l(r)})}return new(t||(t=Promise))(function(r,l){function y(a){try{u(i.next(a))}catch(f){l(f)}}function g(a){try{u(i.throw(a))}catch(f){l(f)}}function u(a){a.done?r(a.value):s(a.value).then(y,g)}u((i=i.apply(c,e||[])).next())})}class h extends m{constructor(){super(),this.name="BeaconWalletNotInitialized",this.message='BeaconWallet needs to be initialized by calling `await BeaconWallet.requestPermissions({network: {type: "chosen_network"}})` first.'}}class R extends m{constructor(e){super(),this.requiredScopes=e,this.name="MissingRequiredScopes",this.message=`Required permissions scopes: ${e.join(",")} were not granted.`}}const B={commitHash:"b85fc404e34545a518215e449b3f1253f4520eec",version:"17.2.0"};class N{constructor(e){this.client=q(e)}validateRequiredScopesOrFail(e,t){const i=new Set(t);for(const s of e)i.has(s)&&i.delete(s);if(i.size>0)throw new R(Array.from(i))}requestPermissions(e){return n(this,void 0,void 0,function*(){yield this.client.requestPermissions(e)})}getPKH(){return n(this,void 0,void 0,function*(){const e=yield this.client.getActiveAccount();if(!e)throw new h;return e.address})}mapTransferParamsToWalletParams(e){return n(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield I(this.formatParameters(t)))})}mapIncreasePaidStorageWalletParams(e){return n(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield E(this.formatParameters(t)))})}mapOriginateParamsToWalletParams(e){return n(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield T(this.formatParameters(t)))})}mapDelegateParamsToWalletParams(e){return n(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield D(this.formatParameters(t)))})}formatParameters(e){return e.fee&&(e.fee=e.fee.toString()),e.storageLimit&&(e.storageLimit=e.storageLimit.toString()),e.gasLimit&&(e.gasLimit=e.gasLimit.toString()),e}removeDefaultParams(e,t){return e.fee||delete t.fee,e.storageLimit||delete t.storage_limit,e.gasLimit||delete t.gas_limit,t}sendOperations(e){return n(this,void 0,void 0,function*(){const t=yield this.client.getActiveAccount();if(!t)throw new h;const i=t.scopes;this.validateRequiredScopesOrFail(i,[v.OPERATION_REQUEST]);const{transactionHash:s}=yield this.client.requestOperation({operationDetails:e});return s})}disconnect(){return n(this,void 0,void 0,function*(){yield this.client.destroy()})}clearActiveAccount(){return n(this,void 0,void 0,function*(){yield this.client.setActiveAccount()})}sign(e,t){return n(this,void 0,void 0,function*(){let i=P(e);typeof t<"u"&&(i=w(t,i));const s=S(A(i)),r=this.getSigningType(t);if(r!==d.OPERATION)throw new O(`Taquito Beacon Wallet currently only supports signing operations, not ${r}`);const{signature:l}=yield this.client.requestSignPayload({payload:s,signingType:r});return l})}getSigningType(e){if(!e||e.length===0)return d.RAW;if(e.length===1){if(e[0]===5)return d.MICHELINE;if(e[0]===3)return d.OPERATION}throw new Error(`Invalid watermark ${JSON.stringify(e)}`)}getPK(){return n(this,void 0,void 0,function*(){const e=yield this.client.getActiveAccount();if(!e)throw new h;return e==null?void 0:e.publicKey})}}export{N as BeaconWallet,h as BeaconWalletNotInitialized,R as MissingRequiredScopes,B as VERSION};
