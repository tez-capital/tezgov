import{E as l,j as u,k as w,l as h,O as a}from"./main-0e7f43b8.js";import{S as y}from"./SessionBase-d217152b.js";import{connect_beacon_wallet as _,disconnect_beacon_wallet as d}from"./beacon-ce4d5280.js";import"./taquito-utils.es6-2790dd94.js";import"./_commonjsHelpers-6dff16f2.js";import"./taquito.es6-14c09632.js";import"./index-9aada285.js";import"./DAppClient-e2aae175.js";class c extends y{constructor(t,e,o,s,n){super(t,o,s,n),this.wallet=e}get AccountType(){return l.Beacon}get Icon(){return new u("/assets/svg/beacon-wallet-icon.svg",w.raw)}static async create(t,e){const o=h[t];if(!o)throw new Error("Invalid network specification!");const{account:s,tezos:n,forger:r,managerKey:i,wallet:p}=await _(o.id??t,{...e,rpc:(e==null?void 0:e.rpc)??o.rpc});return new c(s??"",p,n,r,{networkId:t,managerKey:i})}static async create_from_cache(){}logout(){d()}async switch_wallet(){return c.create(this.NetworkId,{rpc:this.Tezos.rpc.getRpcUrl(),useCached:!1})}async vote(t){const e=await this.forge_ballot(t),o=async()=>{const s=this.Tezos.wallet.context,n=await this.wallet.sendOperations([e]);return s.operationFactory.createOperation(n)};return new a(o,"Vote",{account:this.Account,ballot:t})}async propose(t){const e=await this.forge_proposals(t),o=async()=>{const s=this.Tezos.wallet.context,n=await this.wallet.sendOperations([e]);return s.operationFactory.createOperation(n)};return new a(o,"Propose",{account:this.Account,proposals:t})}async set_deposits_limit(t){const e=await this.forge_set_deposit_op(t),o=async()=>{const s=this.Tezos.wallet.context,n=await this.wallet.sendOperations([e]);return s.operationFactory.createOperation(n)};return new a(o,"Set Deposit",{account:this.Account,limit:t.toString()})}async update_consensus_key(t){const e=await this.forge_update_consensus_key_op(t),o=async()=>{const s=this.Tezos.wallet.context,n=await this.wallet.sendOperations([e]);return s.operationFactory.createOperation(n)};return new a(o,"Set Deposit",{account:this.Account,"Consensus Key":t})}}export{c as BeaconSession};