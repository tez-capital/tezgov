var Et=Object.defineProperty;var Rt=(e,t,r)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var me=(e,t,r)=>(Rt(e,typeof t!="symbol"?t+"":t,r),r);import{K as mt,_ as vt,E as Nt,q as yt,v as It,O as ve,N as wt,x as bt}from"./main.e52d1d5f.js";import{S as Pt}from"./SessionBase.e24999c5.js";import{p,e as Lt,V as Ot,I as gt,a as xt,h as _t,m as At,f as Ne,t as ye,i as qt,g as kt,c as Ie,j as Bt,b as we}from"./taquito-utils.es6.9aabf825.js";import{b as Ft}from"./index.6de06ee2.js";import"./DAppClient.94b42220.js";var Te={exports:{}},ue={exports:{}},Ue=function(t,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(r,n)}},Mt=Ue,I=Object.prototype.toString;function ce(e){return Array.isArray(e)}function ie(e){return typeof e>"u"}function Ht(e){return e!==null&&!ie(e)&&e.constructor!==null&&!ie(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Ze(e){return I.call(e)==="[object ArrayBuffer]"}function $t(e){return I.call(e)==="[object FormData]"}function jt(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ze(e.buffer),t}function Vt(e){return typeof e=="string"}function zt(e){return typeof e=="number"}function Se(e){return e!==null&&typeof e=="object"}function F(e){if(I.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Gt(e){return I.call(e)==="[object Date]"}function Kt(e){return I.call(e)==="[object File]"}function Yt(e){return I.call(e)==="[object Blob]"}function et(e){return I.call(e)==="[object Function]"}function Ct(e){return Se(e)&&et(e.pipe)}function Qt(e){return I.call(e)==="[object URLSearchParams]"}function Dt(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Jt(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function fe(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}function ae(){var e={};function t(n,i){F(e[i])&&F(n)?e[i]=ae(e[i],n):F(n)?e[i]=ae({},n):ce(n)?e[i]=n.slice():e[i]=n}for(var r=0,s=arguments.length;r<s;r++)fe(arguments[r],t);return e}function Wt(e,t,r){return fe(t,function(n,i){r&&typeof n=="function"?e[i]=Mt(n,r):e[i]=n}),e}function Xt(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var E={isArray:ce,isArrayBuffer:Ze,isBuffer:Ht,isFormData:$t,isArrayBufferView:jt,isString:Vt,isNumber:zt,isObject:Se,isPlainObject:F,isUndefined:ie,isDate:Gt,isFile:Kt,isBlob:Yt,isFunction:et,isStream:Ct,isURLSearchParams:Qt,isStandardBrowserEnv:Jt,forEach:fe,merge:ae,extend:Wt,trim:Dt,stripBOM:Xt},L=E;function be(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var tt=function(t,r,s){if(!r)return t;var n;if(s)n=s(r);else if(L.isURLSearchParams(r))n=r.toString();else{var i=[];L.forEach(r,function(f,d){f===null||typeof f>"u"||(L.isArray(f)?d=d+"[]":f=[f],L.forEach(f,function(u){L.isDate(u)?u=u.toISOString():L.isObject(u)&&(u=JSON.stringify(u)),i.push(be(d)+"="+be(u))}))}),n=i.join("&")}if(n){var a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+n}return t},Tt=E;function $(){this.handlers=[]}$.prototype.use=function(t,r,s){return this.handlers.push({fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};$.prototype.forEach=function(t){Tt.forEach(this.handlers,function(s){s!==null&&t(s)})};var Ut=$,Zt=E,St=function(t,r){Zt.forEach(t,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(t[r]=n,delete t[i])})},rt=function(t,r,s,n,i){return t.config=r,s&&(t.code=s),t.request=n,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t},nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},K,Pe;function st(){if(Pe)return K;Pe=1;var e=rt;return K=function(r,s,n,i,a){var o=new Error(r);return e(o,s,n,i,a)},K}var Y,Le;function er(){if(Le)return Y;Le=1;var e=st();return Y=function(r,s,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?r(n):s(e("Request failed with status code "+n.status,n.config,null,n.request,n))},Y}var C,Oe;function tr(){if(Oe)return C;Oe=1;var e=E;return C=e.isStandardBrowserEnv()?function(){return{write:function(s,n,i,a,o,f){var d=[];d.push(s+"="+encodeURIComponent(n)),e.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),e.isString(a)&&d.push("path="+a),e.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),C}var Q,ge;function rr(){return ge||(ge=1,Q=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}),Q}var D,xe;function nr(){return xe||(xe=1,D=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t}),D}var J,_e;function sr(){if(_e)return J;_e=1;var e=rr(),t=nr();return J=function(s,n){return s&&!e(n)?t(s,n):n},J}var W,Ae;function ir(){if(Ae)return W;Ae=1;var e=E,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return W=function(s){var n={},i,a,o;return s&&e.forEach(s.split(`
`),function(d){if(o=d.indexOf(":"),i=e.trim(d.substr(0,o)).toLowerCase(),a=e.trim(d.substr(o+1)),i){if(n[i]&&t.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([a]):n[i]=n[i]?n[i]+", "+a:a}}),n},W}var X,qe;function ar(){if(qe)return X;qe=1;var e=E;return X=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function i(a){var o=a;return r&&(s.setAttribute("href",o),o=s.href),s.setAttribute("href",o),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=i(window.location.href),function(o){var f=e.isString(o)?i(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),X}var T,ke;function j(){if(ke)return T;ke=1;function e(t){this.message=t}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,T=e,T}var U,Be;function Fe(){if(Be)return U;Be=1;var e=E,t=er(),r=tr(),s=tt,n=sr(),i=ir(),a=ar(),o=st(),f=nt,d=j();return U=function(u){return new Promise(function(R,x){var _=u.data,A=u.headers,q=u.responseType,b;function he(){u.cancelToken&&u.cancelToken.unsubscribe(b),u.signal&&u.signal.removeEventListener("abort",b)}e.isFormData(_)&&delete A["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var dt=u.auth.username||"",ht=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";A.Authorization="Basic "+btoa(dt+":"+ht)}var pe=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),s(pe,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Ee(){if(!!l){var v="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,P=!q||q==="text"||q==="json"?l.responseText:l.response,w={data:P,status:l.status,statusText:l.statusText,headers:v,config:u,request:l};t(function(G){R(G),he()},function(G){x(G),he()},w),l=null}}if("onloadend"in l?l.onloadend=Ee:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Ee)},l.onabort=function(){!l||(x(o("Request aborted",u,"ECONNABORTED",l)),l=null)},l.onerror=function(){x(o("Network Error",u,null,l)),l=null},l.ontimeout=function(){var P=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",w=u.transitional||f;u.timeoutErrorMessage&&(P=u.timeoutErrorMessage),x(o(P,u,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",l)),l=null},e.isStandardBrowserEnv()){var Re=(u.withCredentials||a(pe))&&u.xsrfCookieName?r.read(u.xsrfCookieName):void 0;Re&&(A[u.xsrfHeaderName]=Re)}"setRequestHeader"in l&&e.forEach(A,function(P,w){typeof _>"u"&&w.toLowerCase()==="content-type"?delete A[w]:l.setRequestHeader(w,P)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),q&&q!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(b=function(v){!l||(x(!v||v&&v.type?new d("canceled"):v),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(b),u.signal&&(u.signal.aborted?b():u.signal.addEventListener("abort",b))),_||(_=null),l.send(_)})},U}var h=E,Me=St,or=rt,ur=nt,cr={"Content-Type":"application/x-www-form-urlencoded"};function He(e,t){!h.isUndefined(e)&&h.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function fr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Fe()),e}function lr(e,t,r){if(h.isString(e))try{return(t||JSON.parse)(e),h.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(e)}var V={transitional:ur,adapter:fr(),transformRequest:[function(t,r){return Me(r,"Accept"),Me(r,"Content-Type"),h.isFormData(t)||h.isArrayBuffer(t)||h.isBuffer(t)||h.isStream(t)||h.isFile(t)||h.isBlob(t)?t:h.isArrayBufferView(t)?t.buffer:h.isURLSearchParams(t)?(He(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):h.isObject(t)||r&&r["Content-Type"]==="application/json"?(He(r,"application/json"),lr(t)):t}],transformResponse:[function(t){var r=this.transitional||V.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&h.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?or(a,this,"E_JSON_PARSE"):a}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(t){V.headers[t]={}});h.forEach(["post","put","patch"],function(t){V.headers[t]=h.merge(cr)});var le=V,dr=E,hr=le,pr=function(t,r,s){var n=this||hr;return dr.forEach(s,function(a){t=a.call(n,t,r)}),t},Z,$e;function it(){return $e||($e=1,Z=function(t){return!!(t&&t.__CANCEL__)}),Z}var je=E,S=pr,Er=it(),Rr=le,mr=j();function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mr("canceled")}var vr=function(t){ee(t),t.headers=t.headers||{},t.data=S.call(t,t.data,t.headers,t.transformRequest),t.headers=je.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),je.forEach(["delete","get","head","post","put","patch","common"],function(n){delete t.headers[n]});var r=t.adapter||Rr.adapter;return r(t).then(function(n){return ee(t),n.data=S.call(t,n.data,n.headers,t.transformResponse),n},function(n){return Er(n)||(ee(t),n&&n.response&&(n.response.data=S.call(t,n.response.data,n.response.headers,t.transformResponse))),Promise.reject(n)})},m=E,at=function(t,r){r=r||{};var s={};function n(c,u){return m.isPlainObject(c)&&m.isPlainObject(u)?m.merge(c,u):m.isPlainObject(u)?m.merge({},u):m.isArray(u)?u.slice():u}function i(c){if(m.isUndefined(r[c])){if(!m.isUndefined(t[c]))return n(void 0,t[c])}else return n(t[c],r[c])}function a(c){if(!m.isUndefined(r[c]))return n(void 0,r[c])}function o(c){if(m.isUndefined(r[c])){if(!m.isUndefined(t[c]))return n(void 0,t[c])}else return n(void 0,r[c])}function f(c){if(c in r)return n(t[c],r[c]);if(c in t)return n(void 0,t[c])}var d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return m.forEach(Object.keys(t).concat(Object.keys(r)),function(u){var y=d[u]||i,R=y(u);m.isUndefined(R)&&y!==f||(s[u]=R)}),s},te,Ve;function ot(){return Ve||(Ve=1,te={version:"0.26.1"}),te}var Nr=ot().version,de={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){de[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});var ze={};de.transitional=function(t,r,s){function n(i,a){return"[Axios v"+Nr+"] Transitional option '"+i+"'"+a+(s?". "+s:"")}return function(i,a,o){if(t===!1)throw new Error(n(a," has been removed"+(r?" in "+r:"")));return r&&!ze[a]&&(ze[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,a,o):!0}};function yr(e,t,r){if(typeof e!="object")throw new TypeError("options must be an object");for(var s=Object.keys(e),n=s.length;n-- >0;){var i=s[n],a=t[i];if(a){var o=e[i],f=o===void 0||a(o,i,e);if(f!==!0)throw new TypeError("option "+i+" must be "+f);continue}if(r!==!0)throw Error("Unknown option "+i)}}var Ir={assertOptions:yr,validators:de},ut=E,wr=tt,Ge=Ut,Ke=vr,z=at,ct=Ir,O=ct.validators;function B(e){this.defaults=e,this.interceptors={request:new Ge,response:new Ge}}B.prototype.request=function(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=z(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&ct.assertOptions(s,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(r)===!1||(i=i&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var a=[];this.interceptors.response.forEach(function(R){a.push(R.fulfilled,R.rejected)});var o;if(!i){var f=[Ke,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(a),o=Promise.resolve(r);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=r;n.length;){var c=n.shift(),u=n.shift();try{d=c(d)}catch(y){u(y);break}}try{o=Ke(d)}catch(y){return Promise.reject(y)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};B.prototype.getUri=function(t){return t=z(this.defaults,t),wr(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};ut.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(r,s){return this.request(z(s||{},{method:t,url:r,data:(s||{}).data}))}});ut.forEach(["post","put","patch"],function(t){B.prototype[t]=function(r,s,n){return this.request(z(n||{},{method:t,url:r,data:s}))}});var br=B,re,Ye;function Pr(){if(Ye)return re;Ye=1;var e=j();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(a){s=a});var n=this;this.promise.then(function(i){if(!!n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](i);n._listeners=null}}),this.promise.then=function(i){var a,o=new Promise(function(f){n.subscribe(f),a=f}).then(i);return o.cancel=function(){n.unsubscribe(a)},o},r(function(a){n.reason||(n.reason=new e(a),s(n.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},t.prototype.unsubscribe=function(s){if(!!this._listeners){var n=this._listeners.indexOf(s);n!==-1&&this._listeners.splice(n,1)}},t.source=function(){var s,n=new t(function(a){s=a});return{token:n,cancel:s}},re=t,re}var ne,Ce;function Lr(){return Ce||(Ce=1,ne=function(t){return function(s){return t.apply(null,s)}}),ne}var se,Qe;function Or(){if(Qe)return se;Qe=1;var e=E;return se=function(r){return e.isObject(r)&&r.isAxiosError===!0},se}var De=E,gr=Ue,M=br,xr=at,_r=le;function ft(e){var t=new M(e),r=gr(M.prototype.request,t);return De.extend(r,M.prototype,t),De.extend(r,t),r.create=function(n){return ft(xr(e,n))},r}var N=ft(_r);N.Axios=M;N.Cancel=j();N.CancelToken=Pr();N.isCancel=it();N.VERSION=ot().version;N.all=function(t){return Promise.all(t)};N.spread=Lr();N.isAxiosError=Or();ue.exports=N;ue.exports.default=N;(function(e){e.exports=ue.exports})(Te);const Je=mt(Te.exports);function Ar(e,t,r,s){function n(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function o(c){try{d(s.next(c))}catch(u){a(u)}}function f(c){try{d(s.throw(c))}catch(u){a(u)}}function d(c){c.done?i(c.value):n(c.value).then(o,f)}d((s=s.apply(e,t||[])).next())})}var g;(function(e){e[e.CONTINUE=100]="CONTINUE",e[e.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",e[e.PROCESSING=102]="PROCESSING",e[e.OK=200]="OK",e[e.CREATED=201]="CREATED",e[e.ACCEPTED=202]="ACCEPTED",e[e.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",e[e.NO_CONTENT=204]="NO_CONTENT",e[e.RESET_CONTENT=205]="RESET_CONTENT",e[e.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",e[e.MULTI_STATUS=207]="MULTI_STATUS",e[e.ALREADY_REPORTED=208]="ALREADY_REPORTED",e[e.IM_USED=226]="IM_USED",e[e.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",e[e.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",e[e.FOUND=302]="FOUND",e[e.SEE_OTHER=303]="SEE_OTHER",e[e.NOT_MODIFIED=304]="NOT_MODIFIED",e[e.USE_PROXY=305]="USE_PROXY",e[e.SWITCH_PROXY=306]="SWITCH_PROXY",e[e.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",e[e.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",e[e.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",e[e.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",e[e.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",e[e.CONFLICT=409]="CONFLICT",e[e.GONE=410]="GONE",e[e.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",e[e.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",e[e.PAYLOAD_TOO_LARGE=413]="PAYLOAD_TOO_LARGE",e[e.URI_TOO_LONG=414]="URI_TOO_LONG",e[e.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",e[e.RANGE_NOT_SATISFIABLE=416]="RANGE_NOT_SATISFIABLE",e[e.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",e[e.I_AM_A_TEAPOT=418]="I_AM_A_TEAPOT",e[e.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",e[e.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",e[e.LOCKED=423]="LOCKED",e[e.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",e[e.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",e[e.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",e[e.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",e[e.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",e[e.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e[e.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",e[e.BAD_GATEWAY=502]="BAD_GATEWAY",e[e.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",e[e.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",e[e.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",e[e.VARIANT_ALSO_NEGOTIATES=506]="VARIANT_ALSO_NEGOTIATES",e[e.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",e[e.LOOP_DETECTED=508]="LOOP_DETECTED",e[e.NOT_EXTENDED=510]="NOT_EXTENDED",e[e.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"})(g||(g={}));var H;(function(e){e.TEXT="text",e.JSON="json"})(H||(H={}));class oe extends Error{constructor(t,r,s,n,i){super(t),this.message=t,this.status=r,this.statusText=s,this.body=n,this.url=i,this.name="HttpResponse"}}class qr extends Error{constructor(t){super(t),this.message=t,this.name="HttpRequestFailed"}}class kr{constructor(t=3e4){this.timeout=t}serialize(t){if(!t)return"";const r=[];for(const n in t)if(t.hasOwnProperty(n)&&typeof t[n]<"u"){const i=typeof t[n].toJSON=="function"?t[n].toJSON():t[n];if(i===null){r.push(encodeURIComponent(n));continue}if(Array.isArray(i)){i.forEach(a=>{r.push(encodeURIComponent(n)+"="+encodeURIComponent(a))});continue}r.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}const s=r.join("&");return s?`?${s}`:""}createRequest({url:t,method:r,timeout:s=this.timeout,query:n,headers:i={},json:a=!0},o){return Ar(this,void 0,void 0,function*(){let f,d;i["Content-Type"]||(i["Content-Type"]="application/json"),a?f=H.JSON:(f=H.TEXT,d=[c=>c]);try{return(yield Je.request({url:t+this.serialize(n),method:r!=null?r:"GET",headers:i,responseType:f,transformResponse:d,timeout:s,data:o})).data}catch(c){if(Je.isAxiosError(c)&&c.response){let u;throw typeof c.response.data=="object"?u=JSON.stringify(c.response.data):u=c.response.data,new oe(`Http error response: (${c.response.status}) ${u}`,c.response.status,c.response.statusText,u,t+this.serialize(n))}else throw new qr(`${r} ${t+this.serialize(n)} ${String(c)}`)}})}}function k(e,t,r,s){function n(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function o(c){try{d(s.next(c))}catch(u){a(u)}}function f(c){try{d(s.throw(c))}catch(u){a(u)}}function d(c){c.done?i(c.value):n(c.value).then(o,f)}d((s=s.apply(e,t||[])).next())})}class We extends Error{constructor(t,r){super(t),this.message=t,this.innerException=r,this.name="KeyNotFoundError"}}class Br extends Error{constructor(t,r){super(t),this.message=t,this.innerException=r,this.name="OperationNotAuthorized"}}class Fr extends Error{constructor(t,r,s){super(t),this.message=t,this.innerException=r,this.data=s,this.name="BadSigningData"}}class Mr extends Error{constructor(t,r){super(`Requested public key hash does not match the initialized public key hash: {
        requested: ${t},
        initialized: ${r}
      }`),this.requested=t,this.name="PublicKeyMismatch"}}class Hr extends Error{constructor(t,r){super(`
        Signature failed verification against public key: 
        {
          bytes: ${t},
          signature: ${r}
        }
      `),this.bytes=t,this.signature=r,this.name="SignatureVerificationFailedError"}}const Xe={ed:{pk:p.edpk,sk:p.edsk,pkh:p.tz1,sig:p.edsig},p2:{pk:p.p2pk,sk:p.p2sk,pkh:p.tz3,sig:p.p2sig},sp:{pk:p.sppk,sk:p.spsk,pkh:p.tz2,sig:p.spsig}};class $r{constructor(t,r,s={},n=new kr){if(this.pkh=t,this.rootUrl=r,this.options=s,this.http=n,Lt(this.pkh)!==Ot.VALID)throw new gt(this.pkh)}publicKeyHash(){return k(this,void 0,void 0,function*(){return this.pkh})}createURL(t){return`${this.rootUrl.replace(/\/+$/g,"")}${t}`}publicKey(){return k(this,void 0,void 0,function*(){try{const{public_key:t}=yield this.http.createRequest({url:this.createURL(`/keys/${this.pkh}`),method:"GET",headers:this.options.headers});return t}catch(t){throw t instanceof oe&&t.status===g.NOT_FOUND?new We(`Key not found: ${this.pkh}`,t):t}})}secretKey(){return k(this,void 0,void 0,function*(){throw new xt("Secret key cannot be exposed")})}sign(t,r){return k(this,void 0,void 0,function*(){try{let s=_t(t);typeof r<"u"&&(s=At(r,s));const n=Ne(ye(s)),{signature:i}=yield this.http.createRequest({url:this.createURL(`/keys/${this.pkh}`),method:"POST",headers:this.options.headers},n),a=i.startsWith("sig")?i.substring(0,3):i.substring(0,5);if(!qt(a))throw new kt(i,"Unsupported signature given by remote signer");const o=Ie(i,p[a]),f=yield this.publicKey();if(yield this.verifyPublicKey(f),!Bt(n,f,i))throw new Hr(n,i);return{bytes:t,sig:we(o,p.sig),prefixSig:i,sbytes:t+Ne(ye(o))}}catch(s){if(s instanceof oe){if(s.status===g.NOT_FOUND)throw new We(`Key not found: ${this.pkh}`,s);if(s.status===g.FORBIDDEN)throw new Br("Signing Operation not authorized",s);if(s.status===g.BAD_REQUEST)throw new Fr("Invalid data",s,{bytes:t,watermark:r})}throw s}})}verifyPublicKey(t){return k(this,void 0,void 0,function*(){const r=t.substring(0,2),s=Ie(t,Xe[r].pk),n=we(Ft.hash(s,20),Xe[r].pkh);if(n!==this.pkh)throw new Mr(n,this.pkh)})}}const jr=async(e,t,r)=>{const{create_toolkit:s}=await vt(()=>import("./taquito.7fb04662.js"),["assets/taquito.7fb04662.js","assets/taquito.es6.4a9111d7.js","assets/main.e52d1d5f.js","assets/index.c9857bd5.css","assets/taquito-utils.es6.9aabf825.js","assets/index.6de06ee2.js"]),{tezos:n,forger:i}=await s(r.rpc),a=new $r(e,t);n.setSignerProvider(a);const o=e,f=o?await n.rpc.getManagerKey(o):void 0;return{account:o,tezos:n,forger:i,managerKey:f==null?void 0:f.toString()}},{request_ledger_setup:Vr}=wt();class lt extends Pt{constructor(r,s,n,i,a){super(r,n,i,a);me(this,"url");this.url=s}get AccountType(){return Nt.Remote}get Icon(){return new yt("cloud",It.icon)}get IsAccountSwitchSupported(){return!1}static async create(r,s,n,i){var c;const a=bt[n];if(!a)throw new Error("Invalid network specification!");const{tezos:o,forger:f,managerKey:d}=await jr(r,s,{...i,rpc:(c=i==null?void 0:i.rpc)!=null?c:a.rpc});return new lt(r,s,o,f,{networkId:n,managerKey:d})}static async create_from_cache(){}logout(){}async switch_wallet(){const r=await Vr({networkId:this.NetworkId,rpc:this.Tezos.rpc.getRpcUrl()});if(!r)throw new Error("Aborted.");return r}async vote(r){const s=await this.forge_ballot_op(r),n=async()=>{const i=this.Tezos.wallet.context,a=await this.Tezos.signer.sign(s,new Uint8Array([3])),o=await this.Tezos.rpc.injectOperation(a.sbytes);return i.operationFactory.createOperation(o)};return new ve(n,"Vote",{account:this.Account,ballot:r})}async propose(r){const s=await this.forge_proposals_op(r),n=async()=>{const i=this.Tezos.wallet.context,a=await this.Tezos.signer.sign(s,new Uint8Array([3])),o=await this.Tezos.rpc.injectOperation(a.sbytes);return i.operationFactory.createOperation(o)};return new ve(n,"Propose",{account:this.Account,proposals:r})}}export{lt as RemoteSession};