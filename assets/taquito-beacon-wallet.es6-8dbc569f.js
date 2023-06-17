import{D as v,P}from"./DAppClient-3841790b.js";import{a5 as f}from"./main-653d6738.js";import{d as w,e as g,f as p,g as S}from"./taquito.es6-e44d04e4.js";let n;const O=(o,e)=>(n&&e&&(n.disconnect(),n=void 0),n||(n||(n=new v(o)),n));function r(o,e,t,i){function a(c){return c instanceof t?c:new t(function(l){l(c)})}return new(t||(t=Promise))(function(c,l){function m(s){try{d(i.next(s))}catch(h){l(h)}}function y(s){try{d(i.throw(s))}catch(h){l(h)}}function d(s){s.done?c(s.value):a(s.value).then(m,y)}d((i=i.apply(o,e||[])).next())})}class u extends f{constructor(){super(),this.name="BeaconWalletNotInitialized",this.message='BeaconWallet needs to be initialized by calling `await BeaconWallet.requestPermissions({network: {type: "chosen_network"}})` first.'}}class A extends f{constructor(e){super(),this.requiredScopes=e,this.name="MissingRequiredScopes",this.message=`Required permissions scopes: ${e.join(",")} were not granted.`}}const W={commitHash:"b357541c90c2168d48216d62a07de5dd3baab9a0",version:"17.0.0"};class L{constructor(e){this.client=O(e)}validateRequiredScopesOrFail(e,t){const i=new Set(t);for(const a of e)i.has(a)&&i.delete(a);if(i.size>0)throw new A(Array.from(i))}requestPermissions(e){return r(this,void 0,void 0,function*(){yield this.client.requestPermissions(e)})}getPKH(){return r(this,void 0,void 0,function*(){const e=yield this.client.getActiveAccount();if(!e)throw new u;return e.address})}mapTransferParamsToWalletParams(e){return r(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield w(this.formatParameters(t)))})}mapIncreasePaidStorageWalletParams(e){return r(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield g(this.formatParameters(t)))})}mapOriginateParamsToWalletParams(e){return r(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield p(this.formatParameters(t)))})}mapDelegateParamsToWalletParams(e){return r(this,void 0,void 0,function*(){let t;yield this.client.showPrepare();try{t=yield e()}catch(i){throw yield this.client.hideUI(),i}return this.removeDefaultParams(t,yield S(this.formatParameters(t)))})}formatParameters(e){return e.fee&&(e.fee=e.fee.toString()),e.storageLimit&&(e.storageLimit=e.storageLimit.toString()),e.gasLimit&&(e.gasLimit=e.gasLimit.toString()),e}removeDefaultParams(e,t){return e.fee||delete t.fee,e.storageLimit||delete t.storage_limit,e.gasLimit||delete t.gas_limit,t}sendOperations(e){return r(this,void 0,void 0,function*(){const t=yield this.client.getActiveAccount();if(!t)throw new u;const i=t.scopes;this.validateRequiredScopesOrFail(i,[P.OPERATION_REQUEST]);const{transactionHash:a}=yield this.client.requestOperation({operationDetails:e});return a})}disconnect(){return r(this,void 0,void 0,function*(){yield this.client.destroy()})}clearActiveAccount(){return r(this,void 0,void 0,function*(){yield this.client.setActiveAccount()})}}export{L as BeaconWallet,u as BeaconWalletNotInitialized,A as MissingRequiredScopes,W as VERSION};
