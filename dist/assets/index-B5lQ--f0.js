(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))h(D);new MutationObserver(D=>{for(const R of D)if(R.type==="childList")for(const ne of R.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&h(ne)}).observe(document,{childList:!0,subtree:!0});function A(D){const R={};return D.integrity&&(R.integrity=D.integrity),D.referrerPolicy&&(R.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?R.credentials="include":D.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function h(D){if(D.ep)return;D.ep=!0;const R=A(D);fetch(D.href,R)}})();function Uh(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var du={exports:{}},Si={};var kh;function rg(){if(kh)return Si;kh=1;var p=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function A(h,D,R){var ne=null;if(R!==void 0&&(ne=""+R),D.key!==void 0&&(ne=""+D.key),"key"in D){R={};for(var I in D)I!=="key"&&(R[I]=D[I])}else R=D;return D=R.ref,{$$typeof:p,type:h,key:ne,ref:D!==void 0?D:null,props:R}}return Si.Fragment=z,Si.jsx=A,Si.jsxs=A,Si}var Sh;function dg(){return Sh||(Sh=1,du.exports=rg()),du.exports}var T=dg(),hu={exports:{}},Y={};var wh;function hg(){if(wh)return Y;wh=1;var p=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),P=Symbol.iterator;function fe(r){return r===null||typeof r!="object"?null:(r=P&&r[P]||r["@@iterator"],typeof r=="function"?r:null)}var Te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ve=Object.assign,kt={};function Ge(r,S,j){this.props=r,this.context=S,this.refs=kt,this.updater=j||Te}Ge.prototype.isReactComponent={},Ge.prototype.setState=function(r,S){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,S,"setState")},Ge.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function St(){}St.prototype=Ge.prototype;function je(r,S,j){this.props=r,this.context=S,this.refs=kt,this.updater=j||Te}var Ye=je.prototype=new St;Ye.constructor=je,ve(Ye,Ge.prototype),Ye.isPureReactComponent=!0;var ct=Array.isArray;function Ne(){}var Z={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function _e(r,S,j){var x=j.ref;return{$$typeof:p,type:r,key:S,ref:x!==void 0?x:null,props:j}}function wt(r,S){return _e(r.type,S,r.props)}function rt(r){return typeof r=="object"&&r!==null&&r.$$typeof===p}function Ze(r){var S={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(j){return S[j]})}var Tn=/\/+/g;function Ct(r,S){return typeof r=="object"&&r!==null&&r.key!=null?Ze(""+r.key):S.toString(36)}function Tt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ne,Ne):(r.status="pending",r.then(function(S){r.status==="pending"&&(r.status="fulfilled",r.value=S)},function(S){r.status==="pending"&&(r.status="rejected",r.reason=S)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,S,j,x,L){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var ie=!1;if(r===null)ie=!0;else switch(V){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(r.$$typeof){case p:case z:ie=!0;break;case q:return ie=r._init,v(ie(r._payload),S,j,x,L)}}if(ie)return L=L(r),ie=x===""?"."+Ct(r,0):x,ct(L)?(j="",ie!=null&&(j=ie.replace(Tn,"$&/")+"/"),v(L,S,j,"",function(ja){return ja})):L!=null&&(rt(L)&&(L=wt(L,j+(L.key==null||r&&r.key===L.key?"":(""+L.key).replace(Tn,"$&/")+"/")+ie)),S.push(L)),1;ie=0;var Le=x===""?".":x+":";if(ct(r))for(var ke=0;ke<r.length;ke++)x=r[ke],V=Le+Ct(x,ke),ie+=v(x,S,j,V,L);else if(ke=fe(r),typeof ke=="function")for(r=ke.call(r),ke=0;!(x=r.next()).done;)x=x.value,V=Le+Ct(x,ke++),ie+=v(x,S,j,V,L);else if(V==="object"){if(typeof r.then=="function")return v(Tt(r),S,j,x,L);throw S=String(r),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return ie}function M(r,S,j){if(r==null)return r;var x=[],L=0;return v(r,x,"","",function(V){return S.call(j,V,L++)}),x}function G(r){if(r._status===-1){var S=r._result;S=S(),S.then(function(j){(r._status===0||r._status===-1)&&(r._status=1,r._result=j)},function(j){(r._status===0||r._status===-1)&&(r._status=2,r._result=j)}),r._status===-1&&(r._status=0,r._result=S)}if(r._status===1)return r._result.default;throw r._result}var se=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},de={map:M,forEach:function(r,S,j){M(r,function(){S.apply(this,arguments)},j)},count:function(r){var S=0;return M(r,function(){S++}),S},toArray:function(r){return M(r,function(S){return S})||[]},only:function(r){if(!rt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return Y.Activity=E,Y.Children=de,Y.Component=Ge,Y.Fragment=A,Y.Profiler=D,Y.PureComponent=je,Y.StrictMode=h,Y.Suspense=O,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Y.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Z.H.useMemoCache(r)}},Y.cache=function(r){return function(){return r.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(r,S,j){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var x=ve({},r.props),L=r.key;if(S!=null)for(V in S.key!==void 0&&(L=""+S.key),S)!C.call(S,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&S.ref===void 0||(x[V]=S[V]);var V=arguments.length-2;if(V===1)x.children=j;else if(1<V){for(var ie=Array(V),Le=0;Le<V;Le++)ie[Le]=arguments[Le+2];x.children=ie}return _e(r.type,L,x)},Y.createContext=function(r){return r={$$typeof:ne,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:R,_context:r},r},Y.createElement=function(r,S,j){var x,L={},V=null;if(S!=null)for(x in S.key!==void 0&&(V=""+S.key),S)C.call(S,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(L[x]=S[x]);var ie=arguments.length-2;if(ie===1)L.children=j;else if(1<ie){for(var Le=Array(ie),ke=0;ke<ie;ke++)Le[ke]=arguments[ke+2];L.children=Le}if(r&&r.defaultProps)for(x in ie=r.defaultProps,ie)L[x]===void 0&&(L[x]=ie[x]);return _e(r,V,L)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(r){return{$$typeof:I,render:r}},Y.isValidElement=rt,Y.lazy=function(r){return{$$typeof:q,_payload:{_status:-1,_result:r},_init:G}},Y.memo=function(r,S){return{$$typeof:w,type:r,compare:S===void 0?null:S}},Y.startTransition=function(r){var S=Z.T,j={};Z.T=j;try{var x=r(),L=Z.S;L!==null&&L(j,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(Ne,se)}catch(V){se(V)}finally{S!==null&&j.types!==null&&(S.types=j.types),Z.T=S}},Y.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Y.use=function(r){return Z.H.use(r)},Y.useActionState=function(r,S,j){return Z.H.useActionState(r,S,j)},Y.useCallback=function(r,S){return Z.H.useCallback(r,S)},Y.useContext=function(r){return Z.H.useContext(r)},Y.useDebugValue=function(){},Y.useDeferredValue=function(r,S){return Z.H.useDeferredValue(r,S)},Y.useEffect=function(r,S){return Z.H.useEffect(r,S)},Y.useEffectEvent=function(r){return Z.H.useEffectEvent(r)},Y.useId=function(){return Z.H.useId()},Y.useImperativeHandle=function(r,S,j){return Z.H.useImperativeHandle(r,S,j)},Y.useInsertionEffect=function(r,S){return Z.H.useInsertionEffect(r,S)},Y.useLayoutEffect=function(r,S){return Z.H.useLayoutEffect(r,S)},Y.useMemo=function(r,S){return Z.H.useMemo(r,S)},Y.useOptimistic=function(r,S){return Z.H.useOptimistic(r,S)},Y.useReducer=function(r,S,j){return Z.H.useReducer(r,S,j)},Y.useRef=function(r){return Z.H.useRef(r)},Y.useState=function(r){return Z.H.useState(r)},Y.useSyncExternalStore=function(r,S,j){return Z.H.useSyncExternalStore(r,S,j)},Y.useTransition=function(){return Z.H.useTransition()},Y.version="19.2.5",Y}var Th;function vu(){return Th||(Th=1,hu.exports=hg()),hu.exports}var Xe=vu();const fg=Uh(Xe);var fu={exports:{}},wi={},mu={exports:{}},gu={};var zh;function mg(){return zh||(zh=1,(function(p){function z(v,M){var G=v.length;v.push(M);e:for(;0<G;){var se=G-1>>>1,de=v[se];if(0<D(de,M))v[se]=M,v[G]=de,G=se;else break e}}function A(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var M=v[0],G=v.pop();if(G!==M){v[0]=G;e:for(var se=0,de=v.length,r=de>>>1;se<r;){var S=2*(se+1)-1,j=v[S],x=S+1,L=v[x];if(0>D(j,G))x<de&&0>D(L,j)?(v[se]=L,v[x]=G,se=x):(v[se]=j,v[S]=G,se=S);else if(x<de&&0>D(L,G))v[se]=L,v[x]=G,se=x;else break e}}return M}function D(v,M){var G=v.sortIndex-M.sortIndex;return G!==0?G:v.id-M.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;p.unstable_now=function(){return R.now()}}else{var ne=Date,I=ne.now();p.unstable_now=function(){return ne.now()-I}}var O=[],w=[],q=1,E=null,P=3,fe=!1,Te=!1,ve=!1,kt=!1,Ge=typeof setTimeout=="function"?setTimeout:null,St=typeof clearTimeout=="function"?clearTimeout:null,je=typeof setImmediate<"u"?setImmediate:null;function Ye(v){for(var M=A(w);M!==null;){if(M.callback===null)h(w);else if(M.startTime<=v)h(w),M.sortIndex=M.expirationTime,z(O,M);else break;M=A(w)}}function ct(v){if(ve=!1,Ye(v),!Te)if(A(O)!==null)Te=!0,Ne||(Ne=!0,Ze());else{var M=A(w);M!==null&&Tt(ct,M.startTime-v)}}var Ne=!1,Z=-1,C=5,_e=-1;function wt(){return kt?!0:!(p.unstable_now()-_e<C)}function rt(){if(kt=!1,Ne){var v=p.unstable_now();_e=v;var M=!0;try{e:{Te=!1,ve&&(ve=!1,St(Z),Z=-1),fe=!0;var G=P;try{t:{for(Ye(v),E=A(O);E!==null&&!(E.expirationTime>v&&wt());){var se=E.callback;if(typeof se=="function"){E.callback=null,P=E.priorityLevel;var de=se(E.expirationTime<=v);if(v=p.unstable_now(),typeof de=="function"){E.callback=de,Ye(v),M=!0;break t}E===A(O)&&h(O),Ye(v)}else h(O);E=A(O)}if(E!==null)M=!0;else{var r=A(w);r!==null&&Tt(ct,r.startTime-v),M=!1}}break e}finally{E=null,P=G,fe=!1}M=void 0}}finally{M?Ze():Ne=!1}}}var Ze;if(typeof je=="function")Ze=function(){je(rt)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Ct=Tn.port2;Tn.port1.onmessage=rt,Ze=function(){Ct.postMessage(null)}}else Ze=function(){Ge(rt,0)};function Tt(v,M){Z=Ge(function(){v(p.unstable_now())},M)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(v){v.callback=null},p.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<v?Math.floor(1e3/v):5},p.unstable_getCurrentPriorityLevel=function(){return P},p.unstable_next=function(v){switch(P){case 1:case 2:case 3:var M=3;break;default:M=P}var G=P;P=M;try{return v()}finally{P=G}},p.unstable_requestPaint=function(){kt=!0},p.unstable_runWithPriority=function(v,M){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var G=P;P=v;try{return M()}finally{P=G}},p.unstable_scheduleCallback=function(v,M,G){var se=p.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?se+G:se):G=se,v){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=G+de,v={id:q++,callback:M,priorityLevel:v,startTime:G,expirationTime:de,sortIndex:-1},G>se?(v.sortIndex=G,z(w,v),A(O)===null&&v===A(w)&&(ve?(St(Z),Z=-1):ve=!0,Tt(ct,G-se))):(v.sortIndex=de,z(O,v),Te||fe||(Te=!0,Ne||(Ne=!0,Ze()))),v},p.unstable_shouldYield=wt,p.unstable_wrapCallback=function(v){var M=P;return function(){var G=P;P=M;try{return v.apply(this,arguments)}finally{P=G}}}})(gu)),gu}var Ah;function gg(){return Ah||(Ah=1,mu.exports=mg()),mu.exports}var pu={exports:{}},qe={};var Eh;function pg(){if(Eh)return qe;Eh=1;var p=vu();function z(O){var w="https://react.dev/errors/"+O;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)w+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+O+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var h={d:{f:A,r:function(){throw Error(z(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},D=Symbol.for("react.portal");function R(O,w,q){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:E==null?null:""+E,children:O,containerInfo:w,implementation:q}}var ne=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function I(O,w){if(O==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,qe.createPortal=function(O,w){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(z(299));return R(O,w,null,q)},qe.flushSync=function(O){var w=ne.T,q=h.p;try{if(ne.T=null,h.p=2,O)return O()}finally{ne.T=w,h.p=q,h.d.f()}},qe.preconnect=function(O,w){typeof O=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,h.d.C(O,w))},qe.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},qe.preinit=function(O,w){if(typeof O=="string"&&w&&typeof w.as=="string"){var q=w.as,E=I(q,w.crossOrigin),P=typeof w.integrity=="string"?w.integrity:void 0,fe=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;q==="style"?h.d.S(O,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:E,integrity:P,fetchPriority:fe}):q==="script"&&h.d.X(O,{crossOrigin:E,integrity:P,fetchPriority:fe,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},qe.preinitModule=function(O,w){if(typeof O=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var q=I(w.as,w.crossOrigin);h.d.M(O,{crossOrigin:q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&h.d.M(O)},qe.preload=function(O,w){if(typeof O=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var q=w.as,E=I(q,w.crossOrigin);h.d.L(O,q,{crossOrigin:E,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},qe.preloadModule=function(O,w){if(typeof O=="string")if(w){var q=I(w.as,w.crossOrigin);h.d.m(O,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:q,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else h.d.m(O)},qe.requestFormReset=function(O){h.d.r(O)},qe.unstable_batchedUpdates=function(O,w){return O(w)},qe.useFormState=function(O,w,q){return ne.H.useFormState(O,w,q)},qe.useFormStatus=function(){return ne.H.useHostTransitionStatus()},qe.version="19.2.5",qe}var Mh;function yg(){if(Mh)return pu.exports;Mh=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(z){console.error(z)}}return p(),pu.exports=pg(),pu.exports}var jh;function bg(){if(jh)return wi;jh=1;var p=gg(),z=vu(),A=yg();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ne(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function I(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(R(e)!==e)throw Error(h(188))}function w(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return O(i),e;if(l===a)return O(i),t;l=l.sibling}throw Error(h(188))}if(n.return!==a.return)n=i,a=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,a=l;break}if(s===a){o=!0,a=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,a=i;break}if(s===a){o=!0,a=l,n=i;break}s=s.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==a)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=q(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,P=Symbol.for("react.element"),fe=Symbol.for("react.transitional.element"),Te=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),kt=Symbol.for("react.strict_mode"),Ge=Symbol.for("react.profiler"),St=Symbol.for("react.consumer"),je=Symbol.for("react.context"),Ye=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),wt=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var Tn=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case Ge:return"Profiler";case kt:return"StrictMode";case ct:return"Suspense";case Ne:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Te:return"Portal";case je:return e.displayName||"Context";case St:return(e._context.displayName||"Context")+".Consumer";case Ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var Tt=Array.isArray,v=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},se=[],de=-1;function r(e){return{current:e}}function S(e){0>de||(e.current=se[de],se[de]=null,de--)}function j(e,t){de++,se[de]=e.current,e.current=t}var x=r(null),L=r(null),V=r(null),ie=r(null);function Le(e,t){switch(j(V,t),j(L,e),j(x,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xd(t),e=Zd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(x),j(x,e)}function ke(){S(x),S(L),S(V)}function ja(e){e.memoizedState!==null&&j(ie,e);var t=x.current,n=Zd(t,e.type);t!==n&&(j(L,e),j(x,n))}function Ei(e){L.current===e&&(S(x),S(L)),ie.current===e&&(S(ie),bi._currentValue=G)}var Vl,_u;function zn(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||"",_u=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vl+e+_u}var Kl=!1;function Jl(e,t){if(!e||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(y){var g=y}Reflect.construct(e,[],k)}else{try{k.call()}catch(y){g=y}e.call(k.prototype)}}else{try{throw Error()}catch(y){g=y}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var u=o.split(`
`),m=s.split(`
`);for(i=a=0;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(a===u.length||i===m.length)for(a=u.length-1,i=m.length-1;1<=a&&0<=i&&u[a]!==m[i];)i--;for(;1<=a&&0<=i;a--,i--)if(u[a]!==m[i]){if(a!==1||i!==1)do if(a--,i--,0>i||u[a]!==m[i]){var b=`
`+u[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=i);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zn(n):""}function Gh(e,t){switch(e.tag){case 26:case 27:case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return e.child!==t&&t!==null?zn("Suspense Fallback"):zn("Suspense");case 19:return zn("SuspenseList");case 0:case 15:return Jl(e.type,!1);case 11:return Jl(e.type.render,!1);case 1:return Jl(e.type,!0);case 31:return zn("Activity");default:return""}}function ku(e){try{var t="",n=null;do t+=Gh(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Wl=Object.prototype.hasOwnProperty,Fl=p.unstable_scheduleCallback,$l=p.unstable_cancelCallback,Yh=p.unstable_shouldYield,Lh=p.unstable_requestPaint,Pe=p.unstable_now,Qh=p.unstable_getCurrentPriorityLevel,Su=p.unstable_ImmediatePriority,wu=p.unstable_UserBlockingPriority,Mi=p.unstable_NormalPriority,Xh=p.unstable_LowPriority,Tu=p.unstable_IdlePriority,Zh=p.log,Vh=p.unstable_setDisableYieldValue,Da=null,et=null;function $t(e){if(typeof Zh=="function"&&Vh(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Da,e)}catch{}}var tt=Math.clz32?Math.clz32:Wh,Kh=Math.log,Jh=Math.LN2;function Wh(e){return e>>>=0,e===0?32:31-(Kh(e)/Jh|0)|0}var ji=256,Di=262144,Oi=4194304;function An(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~l,a!==0?i=An(a):(o&=s,o!==0?i=An(o):n||(n=s&~e,n!==0&&(i=An(n))))):(s=a&~l,s!==0?i=An(s):o!==0?i=An(o):n||(n=a&~e,n!==0&&(i=An(n)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:i}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(){var e=Oi;return Oi<<=1,(Oi&62914560)===0&&(Oi=4194304),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $h(e,t,n,a,i,l){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(n=o&~n;0<n;){var b=31-tt(n),k=1<<b;s[b]=0,u[b]=-1;var g=m[b];if(g!==null)for(m[b]=null,b=0;b<g.length;b++){var y=g[b];y!==null&&(y.lane&=-536870913)}n&=~k}a!==0&&Au(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function Au(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-tt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-tt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Mu(e,t){var n=t&-t;return n=(n&42)!==0?1:Pl(n),(n&(e.suspendedLanes|t))!==0?0:n}function Pl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function eo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ju(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:mh(e.type))}function Du(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var It=Math.random().toString(36).slice(2),xe="__reactFiber$"+It,Ve="__reactProps$"+It,Zn="__reactContainer$"+It,to="__reactEvents$"+It,Ih="__reactListeners$"+It,Ph="__reactHandles$"+It,Ou="__reactResources$"+It,Na="__reactMarker$"+It;function no(e){delete e[xe],delete e[Ve],delete e[to],delete e[Ih],delete e[Ph]}function Vn(e){var t=e[xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zn]||n[xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Id(e);e!==null;){if(n=e[xe])return n;e=Id(e)}return t}e=n,n=e.parentNode}return null}function Kn(e){if(e=e[xe]||e[Zn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Jn(e){var t=e[Ou];return t||(t=e[Ou]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Oe(e){e[Na]=!0}var Cu=new Set,Nu={};function En(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(Nu[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var ef=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xu={},Hu={};function tf(e){return Wl.call(Hu,e)?!0:Wl.call(xu,e)?!1:ef.test(e)?Hu[e]=!0:(xu[e]=!0,!1)}function Ni(e,t,n){if(tf(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function xi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nf(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){if(!e._valueTracker){var t=Bu(e)?"checked":"value";e._valueTracker=nf(e,t,""+e[t])}}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Bu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var af=/[\n"\\]/g;function ht(e){return e.replace(af,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function io(e,t,n,a,i,l,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?lo(e,o,dt(t)):n!=null?lo(e,o,dt(n)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function Uu(e,t,n,a,i,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){ao(e);return}n=n!=null?""+dt(n):"",t=t!=null?""+dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ao(e)}function lo(e,t,n){t==="number"&&Hi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qu(e,t,n){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+dt(n):""}function Gu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(h(92));if(Tt(a)){if(1<a.length)throw Error(h(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=dt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ao(e)}function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||lf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Lu(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Yu(e,i,a)}else for(var l in t)t.hasOwnProperty(l)&&Yu(e,l,t[l])}function oo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bi(e){return sf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xt(){}var so=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var In=null,Pn=null;function Qu(e){var t=Kn(e);if(t&&(e=t.stateNode)){var n=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(io(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[Ve]||null;if(!i)throw Error(h(90));io(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ru(a)}break e;case"textarea":qu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}}}var co=!1;function Xu(e,t,n){if(co)return e(t,n);co=!0;try{var a=e(t);return a}finally{if(co=!1,(In!==null||Pn!==null)&&(wl(),In&&(t=In,e=Pn,Pn=In=null,Qu(t),e)))for(t=0;t<e.length;t++)Qu(e[t])}}function Ha(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ve]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=!1;if(Ht)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){ro=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{ro=!1}var Pt=null,ho=null,Ri=null;function Zu(){if(Ri)return Ri;var e,t=ho,n=t.length,a,i="value"in Pt?Pt.value:Pt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[l-a];a++);return Ri=i.slice(e,1<a?1-a:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Vu(){return!1}function Ke(e){function t(n,a,i,l,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qi:Vu,this.isPropagationStopped=Vu,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Ke(Mn),Ra=E({},Mn,{view:0,detail:0}),uf=Ke(Ra),fo,mo,Ua,Yi=E({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(fo=e.screenX-Ua.screenX,mo=e.screenY-Ua.screenY):mo=fo=0,Ua=e),fo)},movementY:function(e){return"movementY"in e?e.movementY:mo}}),Ku=Ke(Yi),cf=E({},Yi,{dataTransfer:0}),rf=Ke(cf),df=E({},Ra,{relatedTarget:0}),go=Ke(df),hf=E({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),ff=Ke(hf),mf=E({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=Ke(mf),pf=E({},Mn,{data:0}),Ju=Ke(pf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vf[e])?!!t[e]:!1}function po(){return _f}var kf=E({},Ra,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=Ke(kf),wf=E({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=Ke(wf),Tf=E({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),zf=Ke(Tf),Af=E({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=Ke(Af),Mf=E({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=Ke(Mf),Df=E({},Mn,{newState:0,oldState:0}),Of=Ke(Df),Cf=[9,13,27,32],yo=Ht&&"CompositionEvent"in window,qa=null;Ht&&"documentMode"in document&&(qa=document.documentMode);var Nf=Ht&&"TextEvent"in window&&!qa,Fu=Ht&&(!yo||qa&&8<qa&&11>=qa),$u=" ",Iu=!1;function Pu(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ea=!1;function xf(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(Iu=!0,$u);case"textInput":return e=t.data,e===$u&&Iu?null:e;default:return null}}function Hf(e,t){if(ea)return e==="compositionend"||!yo&&Pu(e,t)?(e=Zu(),Ri=ho=Pt=null,ea=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var Bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bf[e.type]:t==="textarea"}function nc(e,t,n,a){In?Pn?Pn.push(a):Pn=[a]:In=a,t=Dl(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ga=null,Ya=null;function Rf(e){Ud(e,0)}function Li(e){var t=xa(e);if(Ru(t))return e}function ac(e,t){if(e==="change")return t}var ic=!1;if(Ht){var bo;if(Ht){var vo="oninput"in document;if(!vo){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),vo=typeof lc.oninput=="function"}bo=vo}else bo=!1;ic=bo&&(!document.documentMode||9<document.documentMode)}function oc(){Ga&&(Ga.detachEvent("onpropertychange",sc),Ya=Ga=null)}function sc(e){if(e.propertyName==="value"&&Li(Ya)){var t=[];nc(t,Ya,e,uo(e)),Xu(Rf,t)}}function Uf(e,t,n){e==="focusin"?(oc(),Ga=t,Ya=n,Ga.attachEvent("onpropertychange",sc)):e==="focusout"&&oc()}function qf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Ya)}function Gf(e,t){if(e==="click")return Li(t)}function Yf(e,t){if(e==="input"||e==="change")return Li(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Lf;function La(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Wl.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var n=uc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uc(n)}}function rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qf=Ht&&"documentMode"in document&&11>=document.documentMode,ta=null,ko=null,Qa=null,So=!1;function hc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;So||ta==null||ta!==Hi(a)||(a=ta,"selectionStart"in a&&_o(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&La(Qa,a)||(Qa=a,a=Dl(ko,"onSelect"),0<a.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ta)))}function jn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var na={animationend:jn("Animation","AnimationEnd"),animationiteration:jn("Animation","AnimationIteration"),animationstart:jn("Animation","AnimationStart"),transitionrun:jn("Transition","TransitionRun"),transitionstart:jn("Transition","TransitionStart"),transitioncancel:jn("Transition","TransitionCancel"),transitionend:jn("Transition","TransitionEnd")},wo={},fc={};Ht&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function Dn(e){if(wo[e])return wo[e];if(!na[e])return e;var t=na[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fc)return wo[e]=t[n];return e}var mc=Dn("animationend"),gc=Dn("animationiteration"),pc=Dn("animationstart"),Xf=Dn("transitionrun"),Zf=Dn("transitionstart"),Vf=Dn("transitioncancel"),yc=Dn("transitionend"),bc=new Map,To="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");To.push("scrollEnd");function zt(e,t){bc.set(e,t),En(t,[e])}var Qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],aa=0,zo=0;function Xi(){for(var e=aa,t=zo=aa=0;t<e;){var n=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var l=ft[t];if(ft[t++]=null,a!==null&&i!==null){var o=a.pending;o===null?i.next=i:(i.next=o.next,o.next=i),a.pending=i}l!==0&&vc(n,i,l)}}function Zi(e,t,n,a){ft[aa++]=e,ft[aa++]=t,ft[aa++]=n,ft[aa++]=a,zo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ao(e,t,n,a){return Zi(e,t,n,a),Vi(e)}function On(e,t){return Zi(e,null,null,t),Vi(e)}function vc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-tt(n),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),l):null}function Vi(e){if(50<di)throw di=0,Hs=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ia={};function Kf(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,a){return new Kf(e,t,n,a)}function Eo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _c(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ki(e,t,n,a,i,l){var o=0;if(a=e,typeof e=="function")Eo(e)&&(o=1);else if(typeof e=="string")o=Im(e,n,x.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=at(31,n,t,i),e.elementType=_e,e.lanes=l,e;case ve:return Cn(n.children,i,l,t);case kt:o=8,i|=24;break;case Ge:return e=at(12,n,t,i|2),e.elementType=Ge,e.lanes=l,e;case ct:return e=at(13,n,t,i),e.elementType=ct,e.lanes=l,e;case Ne:return e=at(19,n,t,i),e.elementType=Ne,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:o=10;break e;case St:o=9;break e;case Ye:o=11;break e;case Z:o=14;break e;case C:o=16,a=null;break e}o=29,n=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=at(o,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function Cn(e,t,n,a){return e=at(7,e,a,t),e.lanes=n,e}function Mo(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function kc(e){var t=at(18,null,null,0);return t.stateNode=e,t}function jo(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sc=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var n=Sc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ku(t)},Sc.set(e,t),t)}return{value:e,source:t,stack:ku(t)}}var la=[],oa=0,Ji=null,Xa=0,gt=[],pt=0,en=null,Mt=1,jt="";function Rt(e,t){la[oa++]=Xa,la[oa++]=Ji,Ji=e,Xa=t}function wc(e,t,n){gt[pt++]=Mt,gt[pt++]=jt,gt[pt++]=en,en=e;var a=Mt;e=jt;var i=32-tt(a)-1;a&=~(1<<i),n+=1;var l=32-tt(t)+i;if(30<l){var o=i-i%5;l=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Mt=1<<32-tt(t)+i|n<<i|a,jt=l+e}else Mt=1<<l|n<<i|a,jt=e}function Do(e){e.return!==null&&(Rt(e,1),wc(e,1,0))}function Oo(e){for(;e===Ji;)Ji=la[--oa],la[oa]=null,Xa=la[--oa],la[oa]=null;for(;e===en;)en=gt[--pt],gt[pt]=null,jt=gt[--pt],gt[pt]=null,Mt=gt[--pt],gt[pt]=null}function Tc(e,t){gt[pt++]=Mt,gt[pt++]=jt,gt[pt++]=en,Mt=t.id,jt=t.overflow,en=e}var He=null,me=null,$=!1,tn=null,yt=!1,Co=Error(h(519));function nn(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(mt(t,e)),Co}function zc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[xe]=e,t[Ve]=a,n){case"dialog":J("cancel",t),J("close",t);break;case"iframe":case"object":case"embed":J("load",t);break;case"video":case"audio":for(n=0;n<fi.length;n++)J(fi[n],t);break;case"source":J("error",t);break;case"img":case"image":case"link":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"input":J("invalid",t),Uu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":J("invalid",t);break;case"textarea":J("invalid",t),Gu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ld(t.textContent,n)?(a.popover!=null&&(J("beforetoggle",t),J("toggle",t)),a.onScroll!=null&&J("scroll",t),a.onScrollEnd!=null&&J("scrollend",t),a.onClick!=null&&(t.onclick=xt),t=!0):t=!1,t||nn(e,!0)}function Ac(e){for(He=e.return;He;)switch(He.tag){case 5:case 31:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:He=He.return}}function sa(e){if(e!==He)return!1;if(!$)return Ac(e),$=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Fs(e.type,e.memoizedProps)),n=!n),n&&me&&nn(e),Ac(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));me=$d(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));me=$d(e)}else t===27?(t=me,yn(e.type)?(e=tu,tu=null,me=e):me=t):me=He?vt(e.stateNode.nextSibling):null;return!0}function Nn(){me=He=null,$=!1}function No(){var e=tn;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),tn=null),e}function Za(e){tn===null?tn=[e]:tn.push(e)}var xo=r(null),xn=null,Ut=null;function an(e,t,n){j(xo,t._currentValue),t._currentValue=n}function qt(e){e._currentValue=xo.current,S(xo)}function Ho(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Bo(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var s=l;l=i;for(var u=0;u<t.length;u++)if(s.context===t[u]){l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ho(l.return,n,e),a||(o=null);break e}l=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ho(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ua(e,t,n,a){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(h(387));if(o=o.memoizedProps,o!==null){var s=i.type;nt(i.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(i===ie.current){if(o=i.alternate,o===null)throw Error(h(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(bi):e=[bi])}i=i.return}e!==null&&Bo(t,e,n,a),t.flags|=262144}function Wi(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){xn=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return Ec(xn,e)}function Fi(e,t){return xn===null&&Hn(e),Ec(e,t)}function Ec(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ut===null){if(e===null)throw Error(h(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return n}var Jf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Wf=p.unstable_scheduleCallback,Ff=p.unstable_NormalPriority,ze={$$typeof:je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ro(){return{controller:new Jf,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&Wf(Ff,function(){e.controller.abort()})}var Ka=null,Uo=0,ca=0,ra=null;function $f(e,t){if(Ka===null){var n=Ka=[];Uo=0,ca=Ys(),ra={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Uo++,t.then(Mc,Mc),t}function Mc(){if(--Uo===0&&Ka!==null){ra!==null&&(ra.status="fulfilled");var e=Ka;Ka=null,ca=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function If(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var jc=v.S;v.S=function(e,t){hd=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$f(e,t),jc!==null&&jc(e,t)};var Bn=r(null);function qo(){var e=Bn.current;return e!==null?e:he.pooledCache}function $i(e,t){t===null?j(Bn,Bn.current):j(Bn,t.pool)}function Dc(){var e=qo();return e===null?null:{parent:ze._currentValue,pool:e}}var da=Error(h(460)),Go=Error(h(474)),Ii=Error(h(542)),Pi={then:function(){}};function Oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xt,xt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xc(e),e;default:if(typeof t.status=="string")t.then(xt,xt);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xc(e),e}throw Un=t,da}}function Rn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Un=n,da):n}}var Un=null;function Nc(){if(Un===null)throw Error(h(459));var e=Un;return Un=null,e}function xc(e){if(e===da||e===Ii)throw Error(h(483))}var ha=null,Ja=0;function el(e){var t=Ja;return Ja+=1,ha===null&&(ha=[]),Cc(ha,e,t)}function Wa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function tl(e,t){throw t.$$typeof===P?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hc(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function a(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=Bt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=67108866,c):f):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,c,f,_){return c===null||c.tag!==6?(c=Mo(f,d.mode,_),c.return=d,c):(c=i(c,f),c.return=d,c)}function u(d,c,f,_){var B=f.type;return B===ve?b(d,c,f.props.children,_,f.key):c!==null&&(c.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===C&&Rn(B)===c.type)?(c=i(c,f.props),Wa(c,f),c.return=d,c):(c=Ki(f.type,f.key,f.props,null,d.mode,_),Wa(c,f),c.return=d,c)}function m(d,c,f,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=jo(f,d.mode,_),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function b(d,c,f,_,B){return c===null||c.tag!==7?(c=Cn(f,d.mode,_,B),c.return=d,c):(c=i(c,f),c.return=d,c)}function k(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Mo(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fe:return f=Ki(c.type,c.key,c.props,null,d.mode,f),Wa(f,c),f.return=d,f;case Te:return c=jo(c,d.mode,f),c.return=d,c;case C:return c=Rn(c),k(d,c,f)}if(Tt(c)||Ze(c))return c=Cn(c,d.mode,f,null),c.return=d,c;if(typeof c.then=="function")return k(d,el(c),f);if(c.$$typeof===je)return k(d,Fi(d,c),f);tl(d,c)}return null}function g(d,c,f,_){var B=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return B!==null?null:s(d,c,""+f,_);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fe:return f.key===B?u(d,c,f,_):null;case Te:return f.key===B?m(d,c,f,_):null;case C:return f=Rn(f),g(d,c,f,_)}if(Tt(f)||Ze(f))return B!==null?null:b(d,c,f,_,null);if(typeof f.then=="function")return g(d,c,el(f),_);if(f.$$typeof===je)return g(d,c,Fi(d,f),_);tl(d,f)}return null}function y(d,c,f,_,B){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return d=d.get(f)||null,s(c,d,""+_,B);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fe:return d=d.get(_.key===null?f:_.key)||null,u(c,d,_,B);case Te:return d=d.get(_.key===null?f:_.key)||null,m(c,d,_,B);case C:return _=Rn(_),y(d,c,f,_,B)}if(Tt(_)||Ze(_))return d=d.get(f)||null,b(c,d,_,B,null);if(typeof _.then=="function")return y(d,c,f,el(_),B);if(_.$$typeof===je)return y(d,c,f,Fi(c,_),B);tl(c,_)}return null}function N(d,c,f,_){for(var B=null,ee=null,H=c,X=c=0,F=null;H!==null&&X<f.length;X++){H.index>X?(F=H,H=null):F=H.sibling;var te=g(d,H,f[X],_);if(te===null){H===null&&(H=F);break}e&&H&&te.alternate===null&&t(d,H),c=l(te,c,X),ee===null?B=te:ee.sibling=te,ee=te,H=F}if(X===f.length)return n(d,H),$&&Rt(d,X),B;if(H===null){for(;X<f.length;X++)H=k(d,f[X],_),H!==null&&(c=l(H,c,X),ee===null?B=H:ee.sibling=H,ee=H);return $&&Rt(d,X),B}for(H=a(H);X<f.length;X++)F=y(H,d,X,f[X],_),F!==null&&(e&&F.alternate!==null&&H.delete(F.key===null?X:F.key),c=l(F,c,X),ee===null?B=F:ee.sibling=F,ee=F);return e&&H.forEach(function(Sn){return t(d,Sn)}),$&&Rt(d,X),B}function U(d,c,f,_){if(f==null)throw Error(h(151));for(var B=null,ee=null,H=c,X=c=0,F=null,te=f.next();H!==null&&!te.done;X++,te=f.next()){H.index>X?(F=H,H=null):F=H.sibling;var Sn=g(d,H,te.value,_);if(Sn===null){H===null&&(H=F);break}e&&H&&Sn.alternate===null&&t(d,H),c=l(Sn,c,X),ee===null?B=Sn:ee.sibling=Sn,ee=Sn,H=F}if(te.done)return n(d,H),$&&Rt(d,X),B;if(H===null){for(;!te.done;X++,te=f.next())te=k(d,te.value,_),te!==null&&(c=l(te,c,X),ee===null?B=te:ee.sibling=te,ee=te);return $&&Rt(d,X),B}for(H=a(H);!te.done;X++,te=f.next())te=y(H,d,X,te.value,_),te!==null&&(e&&te.alternate!==null&&H.delete(te.key===null?X:te.key),c=l(te,c,X),ee===null?B=te:ee.sibling=te,ee=te);return e&&H.forEach(function(cg){return t(d,cg)}),$&&Rt(d,X),B}function re(d,c,f,_){if(typeof f=="object"&&f!==null&&f.type===ve&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case fe:e:{for(var B=f.key;c!==null;){if(c.key===B){if(B=f.type,B===ve){if(c.tag===7){n(d,c.sibling),_=i(c,f.props.children),_.return=d,d=_;break e}}else if(c.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===C&&Rn(B)===c.type){n(d,c.sibling),_=i(c,f.props),Wa(_,f),_.return=d,d=_;break e}n(d,c);break}else t(d,c);c=c.sibling}f.type===ve?(_=Cn(f.props.children,d.mode,_,f.key),_.return=d,d=_):(_=Ki(f.type,f.key,f.props,null,d.mode,_),Wa(_,f),_.return=d,d=_)}return o(d);case Te:e:{for(B=f.key;c!==null;){if(c.key===B)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),_=i(c,f.children||[]),_.return=d,d=_;break e}else{n(d,c);break}else t(d,c);c=c.sibling}_=jo(f,d.mode,_),_.return=d,d=_}return o(d);case C:return f=Rn(f),re(d,c,f,_)}if(Tt(f))return N(d,c,f,_);if(Ze(f)){if(B=Ze(f),typeof B!="function")throw Error(h(150));return f=B.call(f),U(d,c,f,_)}if(typeof f.then=="function")return re(d,c,el(f),_);if(f.$$typeof===je)return re(d,c,Fi(d,f),_);tl(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),_=i(c,f),_.return=d,d=_):(n(d,c),_=Mo(f,d.mode,_),_.return=d,d=_),o(d)):n(d,c)}return function(d,c,f,_){try{Ja=0;var B=re(d,c,f,_);return ha=null,B}catch(H){if(H===da||H===Ii)throw H;var ee=at(29,H,null,d.mode);return ee.lanes=_,ee.return=d,ee}}}var qn=Hc(!0),Bc=Hc(!1),ln=!1;function Yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function on(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ae&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Vi(e),vc(e,null,n),t}return Zi(e,a,t,n),Vi(e)}function Fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Eu(e,n)}}function Qo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xo=!1;function $a(){if(Xo){var e=ra;if(e!==null)throw e}}function Ia(e,t,n,a){Xo=!1;var i=e.updateQueue;ln=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,m=u.next;u.next=null,o===null?l=m:o.next=m,o=u;var b=e.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==o&&(s===null?b.firstBaseUpdate=m:s.next=m,b.lastBaseUpdate=u))}if(l!==null){var k=i.baseState;o=0,b=m=u=null,s=l;do{var g=s.lane&-536870913,y=g!==s.lane;if(y?(W&g)===g:(a&g)===g){g!==0&&g===ca&&(Xo=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var N=e,U=s;g=t;var re=n;switch(U.tag){case 1:if(N=U.payload,typeof N=="function"){k=N.call(re,k,g);break e}k=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=U.payload,g=typeof N=="function"?N.call(re,k,g):N,g==null)break e;k=E({},k,g);break e;case 2:ln=!0}}g=s.callback,g!==null&&(e.flags|=64,y&&(e.flags|=8192),y=i.callbacks,y===null?i.callbacks=[g]:y.push(g))}else y={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(m=b=y,u=k):b=b.next=y,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);b===null&&(u=k),i.baseState=u,i.firstBaseUpdate=m,i.lastBaseUpdate=b,l===null&&(i.shared.lanes=0),hn|=o,e.lanes=o,e.memoizedState=k}}function Rc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Uc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rc(n[e],t)}var fa=r(null),nl=r(0);function qc(e,t){e=Jt,j(nl,e),j(fa,t),Jt=e|t.baseLanes}function Zo(){j(nl,Jt),j(fa,fa.current)}function Vo(){Jt=nl.current,S(fa),S(nl)}var it=r(null),bt=null;function un(e){var t=e.alternate;j(Se,Se.current&1),j(it,e),bt===null&&(t===null||fa.current!==null||t.memoizedState!==null)&&(bt=e)}function Ko(e){j(Se,Se.current),j(it,e),bt===null&&(bt=e)}function Gc(e){e.tag===22?(j(Se,Se.current),j(it,e),bt===null&&(bt=e)):cn()}function cn(){j(Se,Se.current),j(it,it.current)}function lt(e){S(it),bt===e&&(bt=null),S(Se)}var Se=r(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ps(n)||eu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,Q=null,ue=null,Ae=null,il=!1,ma=!1,Gn=!1,ll=0,Pa=0,ga=null,Pf=0;function ye(){throw Error(h(321))}function Jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Wo(e,t,n,a,i,l){return Gt=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?wr:rs,Gn=!1,l=n(a,i),Gn=!1,ma&&(l=Lc(t,n,a,i)),Yc(e),l}function Yc(e){v.H=ni;var t=ue!==null&&ue.next!==null;if(Gt=0,Ae=ue=Q=null,il=!1,Pa=0,ga=null,t)throw Error(h(300));e===null||Ee||(e=e.dependencies,e!==null&&Wi(e)&&(Ee=!0))}function Lc(e,t,n,a){Q=e;var i=0;do{if(ma&&(ga=null),Pa=0,ma=!1,25<=i)throw Error(h(301));if(i+=1,Ae=ue=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}v.H=Tr,l=t(n,a)}while(ma);return l}function em(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?ei(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Q.flags|=1024),t}function Fo(){var e=ll!==0;return ll=0,e}function $o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Io(e){if(il){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}il=!1}Gt=0,Ae=ue=Q=null,ma=!1,Pa=ll=0,ga=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Q.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function we(){if(ue===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Ae===null?Q.memoizedState:Ae.next;if(t!==null)Ae=t,ue=e;else{if(e===null)throw Q.alternate===null?Error(h(467)):Error(h(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ae===null?Q.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var t=Pa;return Pa+=1,ga===null&&(ga=[]),e=Cc(ga,e,t),t=Q,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?wr:rs),e}function sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===je)return Be(e)}throw Error(h(438,String(e)))}function Po(e){var t=null,n=Q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ol(),Q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=wt;return t.index++,n}function Yt(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=we();return es(t,ue,e)}function es(e,t,n){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=n;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}t.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var s=o=null,u=null,m=t,b=!1;do{var k=m.lane&-536870913;if(k!==m.lane?(W&k)===k:(Gt&k)===k){var g=m.revertLane;if(g===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),k===ca&&(b=!0);else if((Gt&g)===g){m=m.next,g===ca&&(b=!0);continue}else k={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=k,o=l):u=u.next=k,Q.lanes|=g,hn|=g;k=m.action,Gn&&n(l,k),l=m.hasEagerState?m.eagerState:n(l,k)}else g={lane:k,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=g,o=l):u=u.next=g,Q.lanes|=k,hn|=k;m=m.next}while(m!==null&&m!==t);if(u===null?o=l:u.next=s,!nt(l,e.memoizedState)&&(Ee=!0,b&&(n=ra,n!==null)))throw n;e.memoizedState=l,e.baseState=o,e.baseQueue=u,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ts(e){var t=we(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);nt(l,t.memoizedState)||(Ee=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function Qc(e,t,n){var a=Q,i=we(),l=$;if(l){if(n===void 0)throw Error(h(407));n=n()}else n=t();var o=!nt((ue||i).memoizedState,n);if(o&&(i.memoizedState=n,Ee=!0),i=i.queue,is(Vc.bind(null,a,i,e),[e]),i.getSnapshot!==t||o||Ae!==null&&Ae.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},Zc.bind(null,a,i,n,t),null),he===null)throw Error(h(349));l||(Gt&127)!==0||Xc(a,t,n)}return n}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t=ol(),Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,a){t.value=n,t.getSnapshot=a,Kc(t)&&Jc(e)}function Vc(e,t,n){return n(function(){Kc(t)&&Jc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Jc(e){var t=On(e,2);t!==null&&Ie(t,e,2)}function ns(e){var t=Qe();if(typeof e=="function"){var n=e;if(e=n(),Gn){$t(!0);try{n()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Wc(e,t,n,a){return e.baseState=n,es(e,ue,typeof a=="function"?a:Yt)}function tm(e,t,n,a,i){if(dl(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};v.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,Fc(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Fc(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var l=v.T,o={};v.T=o;try{var s=n(i,a),u=v.S;u!==null&&u(o,s),$c(e,t,s)}catch(m){as(e,t,m)}finally{l!==null&&o.types!==null&&(l.types=o.types),v.T=l}}else try{l=n(i,a),$c(e,t,l)}catch(m){as(e,t,m)}}function $c(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ic(e,t,a)},function(a){return as(e,t,a)}):Ic(e,t,n)}function Ic(e,t,n){t.status="fulfilled",t.value=n,Pc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Fc(e,n)))}function as(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Pc(t),t=t.next;while(t!==a)}e.action=null}function Pc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function er(e,t){return t}function tr(e,t){if($){var n=he.formState;if(n!==null){e:{var a=Q;if($){if(me){t:{for(var i=me,l=yt;i.nodeType!==8;){if(!l){i=null;break t}if(i=vt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){me=vt(i.nextSibling),a=i.data==="F!";break e}}nn(a)}a=!1}a&&(t=n[0])}}return n=Qe(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:t},n.queue=a,n=_r.bind(null,Q,a),a.dispatch=n,a=ns(!1),l=cs.bind(null,Q,!1,a.queue),a=Qe(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=tm.bind(null,Q,i,l,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function nr(e){var t=we();return ar(t,ue,e)}function ar(e,t,n){if(t=es(e,t,er)[0],e=ul(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ei(t)}catch(o){throw o===da?Ii:o}else a=t;t=we();var i=t.queue,l=i.dispatch;return n!==t.memoizedState&&(Q.flags|=2048,pa(9,{destroy:void 0},nm.bind(null,i,n),null)),[a,l,e]}function nm(e,t){e.action=t}function ir(e){var t=we(),n=ue;if(n!==null)return ar(t,n,e);we(),t=t.memoizedState,n=we();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function pa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Q.updateQueue,t===null&&(t=ol(),Q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function lr(){return we().memoizedState}function cl(e,t,n,a){var i=Qe();Q.flags|=e,i.memoizedState=pa(1|t,{destroy:void 0},n,a===void 0?null:a)}function rl(e,t,n,a){var i=we();a=a===void 0?null:a;var l=i.memoizedState.inst;ue!==null&&a!==null&&Jo(a,ue.memoizedState.deps)?i.memoizedState=pa(t,l,n,a):(Q.flags|=e,i.memoizedState=pa(1|t,l,n,a))}function or(e,t){cl(8390656,8,e,t)}function is(e,t){rl(2048,8,e,t)}function am(e){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=ol(),Q.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function sr(e){var t=we().memoizedState;return am({ref:t,nextImpl:e}),function(){if((ae&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function ur(e,t){return rl(4,2,e,t)}function cr(e,t){return rl(4,4,e,t)}function rr(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dr(e,t,n){n=n!=null?n.concat([e]):null,rl(4,4,rr.bind(null,t,e),n)}function ls(){}function hr(e,t){var n=we();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Jo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function fr(e,t){var n=we();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Jo(t,a[1]))return a[0];if(a=e(),Gn){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[a,t],a}function os(e,t,n){return n===void 0||(Gt&1073741824)!==0&&(W&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=md(),Q.lanes|=e,hn|=e,n)}function mr(e,t,n,a){return nt(n,t)?n:fa.current!==null?(e=os(e,n,a),nt(e,t)||(Ee=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(W&261930)===0?(Ee=!0,e.memoizedState=n):(e=md(),Q.lanes|=e,hn|=e,t)}function gr(e,t,n,a,i){var l=M.p;M.p=l!==0&&8>l?l:8;var o=v.T,s={};v.T=s,cs(e,!1,t,n);try{var u=i(),m=v.S;if(m!==null&&m(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var b=If(u,a);ti(e,t,b,ut(e))}else ti(e,t,a,ut(e))}catch(k){ti(e,t,{then:function(){},status:"rejected",reason:k},ut())}finally{M.p=l,o!==null&&s.types!==null&&(o.types=s.types),v.T=o}}function im(){}function ss(e,t,n,a){if(e.tag!==5)throw Error(h(476));var i=pr(e).queue;gr(e,i,t,G,n===null?im:function(){return yr(e),n(a)})}function pr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:G},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yr(e){var t=pr(e);t.next===null&&(t=e.alternate.memoizedState),ti(e,t.next.queue,{},ut())}function us(){return Be(bi)}function br(){return we().memoizedState}function vr(){return we().memoizedState}function lm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ut();e=on(n);var a=sn(t,e,n);a!==null&&(Ie(a,t,n),Fa(a,t,n)),t={cache:Ro()},e.payload=t;return}t=t.return}}function om(e,t,n){var a=ut();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dl(e)?kr(t,n):(n=Ao(e,t,n,a),n!==null&&(Ie(n,e,a),Sr(n,t,a)))}function _r(e,t,n){var a=ut();ti(e,t,n,a)}function ti(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dl(e))kr(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,o))return Zi(e,t,i,0),he===null&&Xi(),!1}catch{}if(n=Ao(e,t,i,a),n!==null)return Ie(n,e,a),Sr(n,t,a),!0}return!1}function cs(e,t,n,a){if(a={lane:2,revertLane:Ys(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(t)throw Error(h(479))}else t=Ao(e,n,a,2),t!==null&&Ie(t,e,2)}function dl(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function kr(e,t){ma=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sr(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Eu(e,n)}}var ni={readContext:Be,use:sl,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ni.useEffectEvent=ye;var wr={readContext:Be,use:sl,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:or,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,cl(4194308,4,rr.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){cl(4,2,e,t)},useMemo:function(e,t){var n=Qe();t=t===void 0?null:t;var a=e();if(Gn){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Qe();if(n!==void 0){var i=n(t);if(Gn){$t(!0);try{n(t)}finally{$t(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=om.bind(null,Q,e),[a.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:function(e){e=ns(e);var t=e.queue,n=_r.bind(null,Q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ls,useDeferredValue:function(e,t){var n=Qe();return os(n,e,t)},useTransition:function(){var e=ns(!1);return e=gr.bind(null,Q,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Q,i=Qe();if($){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),he===null)throw Error(h(349));(W&127)!==0||Xc(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,or(Vc.bind(null,a,l,e),[e]),a.flags|=2048,pa(9,{destroy:void 0},Zc.bind(null,a,l,n,t),null),n},useId:function(){var e=Qe(),t=he.identifierPrefix;if($){var n=jt,a=Mt;n=(a&~(1<<32-tt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ll++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Pf++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:us,useFormState:tr,useActionState:tr,useOptimistic:function(e){var t=Qe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=cs.bind(null,Q,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return Qe().memoizedState=lm.bind(null,Q)},useEffectEvent:function(e){var t=Qe(),n={impl:e};return t.memoizedState=n,function(){if((ae&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},rs={readContext:Be,use:sl,useCallback:hr,useContext:Be,useEffect:is,useImperativeHandle:dr,useInsertionEffect:ur,useLayoutEffect:cr,useMemo:fr,useReducer:ul,useRef:lr,useState:function(){return ul(Yt)},useDebugValue:ls,useDeferredValue:function(e,t){var n=we();return mr(n,ue.memoizedState,e,t)},useTransition:function(){var e=ul(Yt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Qc,useId:br,useHostTransitionStatus:us,useFormState:nr,useActionState:nr,useOptimistic:function(e,t){var n=we();return Wc(n,ue,e,t)},useMemoCache:Po,useCacheRefresh:vr};rs.useEffectEvent=sr;var Tr={readContext:Be,use:sl,useCallback:hr,useContext:Be,useEffect:is,useImperativeHandle:dr,useInsertionEffect:ur,useLayoutEffect:cr,useMemo:fr,useReducer:ts,useRef:lr,useState:function(){return ts(Yt)},useDebugValue:ls,useDeferredValue:function(e,t){var n=we();return ue===null?os(n,e,t):mr(n,ue.memoizedState,e,t)},useTransition:function(){var e=ts(Yt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Qc,useId:br,useHostTransitionStatus:us,useFormState:ir,useActionState:ir,useOptimistic:function(e,t){var n=we();return ue!==null?Wc(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Po,useCacheRefresh:vr};Tr.useEffectEvent=sr;function ds(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ut(),i=on(a);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,a),t!==null&&(Ie(t,e,a),Fa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ut(),i=on(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,a),t!==null&&(Ie(t,e,a),Fa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),a=on(n);a.tag=2,t!=null&&(a.callback=t),t=sn(e,a,n),t!==null&&(Ie(t,e,n),Fa(t,e,n))}};function zr(e,t,n,a,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,o):t.prototype&&t.prototype.isPureReactComponent?!La(n,a)||!La(i,l):!0}function Ar(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Yn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function Er(e){Qi(e)}function Mr(e){console.error(e)}function jr(e){Qi(e)}function hl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Dr(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function fs(e,t,n){return n=on(n),n.tag=3,n.payload={element:null},n.callback=function(){hl(e,t)},n}function Or(e){return e=on(e),e.tag=3,e}function Cr(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){Dr(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Dr(t,n,a),typeof i!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function sm(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ua(t,n,i,!0),n=it.current,n!==null){switch(n.tag){case 31:case 13:return bt===null?Tl():n.alternate===null&&be===0&&(be=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Pi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Us(e,a,i)),!1;case 22:return n.flags|=65536,a===Pi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Us(e,a,i)),!1}throw Error(h(435,n.tag))}return Us(e,a,i),Tl(),!1}if($)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Co&&(e=Error(h(422),{cause:a}),Za(mt(e,n)))):(a!==Co&&(t=Error(h(423),{cause:a}),Za(mt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=mt(a,n),i=fs(e.stateNode,a,i),Qo(e,i),be!==4&&(be=2)),!1;var l=Error(h(520),{cause:a});if(l=mt(l,n),ri===null?ri=[l]:ri.push(l),be!==4&&(be=2),t===null)return!0;a=mt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=fs(n.stateNode,a,e),Qo(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(fn===null||!fn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Or(i),Cr(i,e,n,a),Qo(n,i),!1}n=n.return}while(n!==null);return!1}var ms=Error(h(461)),Ee=!1;function Re(e,t,n,a){t.child=e===null?Bc(t,null,n,a):qn(t,e.child,n,a)}function Nr(e,t,n,a,i){n=n.render;var l=t.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return Hn(t),a=Wo(e,t,n,o,l,i),s=Fo(),e!==null&&!Ee?($o(e,t,i),Lt(e,t,i)):($&&s&&Do(t),t.flags|=1,Re(e,t,a,i),t.child)}function xr(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!Eo(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Hr(e,t,l,a,i)):(e=Ki(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Ss(e,i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,a)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=Bt(l,a),e.ref=t.ref,e.return=t,t.child=e}function Hr(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(La(l,a)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=a=l,Ss(e,i))(e.flags&131072)!==0&&(Ee=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return gs(e,t,n,a,i)}function Br(e,t,n,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,t.child=null;return Rr(e,t,l,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$i(t,l!==null?l.cachePool:null),l!==null?qc(t,l):Zo(),Gc(t);else return a=t.lanes=536870912,Rr(e,t,l!==null?l.baseLanes|n:n,n,a)}else l!==null?($i(t,l.cachePool),qc(t,l),cn(),t.memoizedState=null):(e!==null&&$i(t,null),Zo(),cn());return Re(e,t,i,n),t.child}function ai(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rr(e,t,n,a,i){var l=qo();return l=l===null?null:{parent:ze._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&$i(t,null),Zo(),Gc(t),e!==null&&ua(e,t,a,!0),t.childLanes=i,null}function fl(e,t){return t=gl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ur(e,t,n){return qn(t,e.child,null,n),e=fl(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function um(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($){if(a.mode==="hidden")return e=fl(t,a),t.lanes=536870912,ai(null,e);if(Ko(t),(e=me)?(e=Fd(e,yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:Mt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},n=kc(e),n.return=t,t.child=n,He=t,me=null)):e=null,e===null)throw nn(t);return t.lanes=536870912,null}return fl(t,a)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(Ko(t),i)if(t.flags&256)t.flags&=-257,t=Ur(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ee||ua(e,t,n,!1),i=(n&e.childLanes)!==0,Ee||i){if(a=he,a!==null&&(o=Mu(a,n),o!==0&&o!==l.retryLane))throw l.retryLane=o,On(e,o),Ie(a,e,o),ms;Tl(),t=Ur(e,t,n)}else e=l.treeContext,me=vt(o.nextSibling),He=t,$=!0,tn=null,yt=!1,e!==null&&Tc(t,e),t=fl(t,a),t.flags|=4096;return t}return e=Bt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ml(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gs(e,t,n,a,i){return Hn(t),n=Wo(e,t,n,a,void 0,i),a=Fo(),e!==null&&!Ee?($o(e,t,i),Lt(e,t,i)):($&&a&&Do(t),t.flags|=1,Re(e,t,n,i),t.child)}function qr(e,t,n,a,i,l){return Hn(t),t.updateQueue=null,n=Lc(t,a,n,i),Yc(e),a=Fo(),e!==null&&!Ee?($o(e,t,l),Lt(e,t,l)):($&&a&&Do(t),t.flags|=1,Re(e,t,n,l),t.child)}function Gr(e,t,n,a,i){if(Hn(t),t.stateNode===null){var l=ia,o=n.contextType;typeof o=="object"&&o!==null&&(l=Be(o)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=hs,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},Yo(t),o=n.contextType,l.context=typeof o=="object"&&o!==null?Be(o):ia,l.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ds(t,n,o,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&hs.enqueueReplaceState(l,l.state,null),Ia(t,a,l,i),$a(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var s=t.memoizedProps,u=Yn(n,s);l.props=u;var m=l.context,b=n.contextType;o=ia,typeof b=="object"&&b!==null&&(o=Be(b));var k=n.getDerivedStateFromProps;b=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||m!==o)&&Ar(t,l,a,o),ln=!1;var g=t.memoizedState;l.state=g,Ia(t,a,l,i),$a(),m=t.memoizedState,s||g!==m||ln?(typeof k=="function"&&(ds(t,n,k,a),m=t.memoizedState),(u=ln||zr(t,n,u,a,g,m,o))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),l.props=a,l.state=m,l.context=o,a=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,Lo(e,t),o=t.memoizedProps,b=Yn(n,o),l.props=b,k=t.pendingProps,g=l.context,m=n.contextType,u=ia,typeof m=="object"&&m!==null&&(u=Be(m)),s=n.getDerivedStateFromProps,(m=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==k||g!==u)&&Ar(t,l,a,u),ln=!1,g=t.memoizedState,l.state=g,Ia(t,a,l,i),$a();var y=t.memoizedState;o!==k||g!==y||ln||e!==null&&e.dependencies!==null&&Wi(e.dependencies)?(typeof s=="function"&&(ds(t,n,s,a),y=t.memoizedState),(b=ln||zr(t,n,b,a,g,y,u)||e!==null&&e.dependencies!==null&&Wi(e.dependencies))?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),l.props=a,l.state=y,l.context=u,a=b):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,ml(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,n,i)):Re(e,t,n,i),t.memoizedState=l.state,e=t.child):e=Lt(e,t,i),e}function Yr(e,t,n,a){return Nn(),t.flags|=256,Re(e,t,n,a),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ys(e){return{baseLanes:e,cachePool:Dc()}}function bs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=st),e}function Lr(e,t,n){var a=t.pendingProps,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if($){if(i?un(t):cn(),(e=me)?(e=Fd(e,yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:Mt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},n=kc(e),n.return=t,t.child=n,He=t,me=null)):e=null,e===null)throw nn(t);return eu(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,i?(cn(),i=t.mode,s=gl({mode:"hidden",children:s},i),a=Cn(a,i,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=ys(n),a.childLanes=bs(e,o,n),t.memoizedState=ps,ai(null,a)):(un(t),vs(t,s))}var u=e.memoizedState;if(u!==null&&(s=u.dehydrated,s!==null)){if(l)t.flags&256?(un(t),t.flags&=-257,t=_s(e,t,n)):t.memoizedState!==null?(cn(),t.child=e.child,t.flags|=128,t=null):(cn(),s=a.fallback,i=t.mode,a=gl({mode:"visible",children:a.children},i),s=Cn(s,i,n,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,qn(t,e.child,null,n),a=t.child,a.memoizedState=ys(n),a.childLanes=bs(e,o,n),t.memoizedState=ps,t=ai(null,a));else if(un(t),eu(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;o=m,a=Error(h(419)),a.stack="",a.digest=o,Za({value:a,source:null,stack:null}),t=_s(e,t,n)}else if(Ee||ua(e,t,n,!1),o=(n&e.childLanes)!==0,Ee||o){if(o=he,o!==null&&(a=Mu(o,n),a!==0&&a!==u.retryLane))throw u.retryLane=a,On(e,a),Ie(o,e,a),ms;Ps(s)||Tl(),t=_s(e,t,n)}else Ps(s)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,me=vt(s.nextSibling),He=t,$=!0,tn=null,yt=!1,e!==null&&Tc(t,e),t=vs(t,a.children),t.flags|=4096);return t}return i?(cn(),s=a.fallback,i=t.mode,u=e.child,m=u.sibling,a=Bt(u,{mode:"hidden",children:a.children}),a.subtreeFlags=u.subtreeFlags&65011712,m!==null?s=Bt(m,s):(s=Cn(s,i,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,ai(null,a),a=t.child,s=e.child.memoizedState,s===null?s=ys(n):(i=s.cachePool,i!==null?(u=ze._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Dc(),s={baseLanes:s.baseLanes|n,cachePool:i}),a.memoizedState=s,a.childLanes=bs(e,o,n),t.memoizedState=ps,ai(e.child,a)):(un(t),n=e.child,e=n.sibling,n=Bt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function vs(e,t){return t=gl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gl(e,t){return e=at(22,e,null,t),e.lanes=0,e}function _s(e,t,n){return qn(t,e.child,null,n),e=vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qr(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ho(e.return,t,n)}function ks(e,t,n,a,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=i,o.treeForkCount=l)}function Xr(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var o=Se.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(Se,o),Re(e,t,a,n),a=$?Xa:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qr(e,n,t);else if(e.tag===19)Qr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ks(t,!1,i,n,l,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&al(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ks(t,!0,n,null,l,a);break;case"together":ks(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ss(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wi(e)))}function cm(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),an(t,ze,e.memoizedState.cache),Nn();break;case 27:case 5:ja(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:an(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ko(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(un(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lr(e,t,n):(un(t),e=Lt(e,t,n),e!==null?e.sibling:null);un(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ua(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Xr(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(Se,Se.current),a)break;return null;case 22:return t.lanes=0,Br(e,t,n,t.pendingProps);case 24:an(t,ze,e.memoizedState.cache)}return Lt(e,t,n)}function Zr(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ee=!0;else{if(!Ss(e,n)&&(t.flags&128)===0)return Ee=!1,cm(e,t,n);Ee=(e.flags&131072)!==0}else Ee=!1,$&&(t.flags&1048576)!==0&&wc(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Rn(t.elementType),t.type=e,typeof e=="function")Eo(e)?(a=Yn(e,a),t.tag=1,t=Gr(null,t,e,a,n)):(t.tag=0,t=gs(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===Ye){t.tag=11,t=Nr(null,t,e,a,n);break e}else if(i===Z){t.tag=14,t=xr(null,t,e,a,n);break e}}throw t=Ct(e)||e,Error(h(306,t,""))}}return t;case 0:return gs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Yn(a,t.pendingProps),Gr(e,t,a,i,n);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var l=t.memoizedState;i=l.element,Lo(e,t),Ia(t,a,null,n);var o=t.memoizedState;if(a=o.cache,an(t,ze,a),a!==l.cache&&Bo(t,[ze],n,!0),$a(),a=o.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Yr(e,t,a,n);break e}else if(a!==i){i=mt(Error(h(424)),t),Za(i),t=Yr(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=vt(e.firstChild),He=t,$=!0,tn=null,yt=!0,n=Bc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),a===i){t=Lt(e,t,n);break e}Re(e,t,a,n)}t=t.child}return t;case 26:return ml(e,t),e===null?(n=nh(t.type,null,t.pendingProps,null))?t.memoizedState=n:$||(n=t.type,e=t.pendingProps,a=Ol(V.current).createElement(n),a[xe]=t,a[Ve]=e,Ue(a,n,e),Oe(a),t.stateNode=a):t.memoizedState=nh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ja(t),e===null&&$&&(a=t.stateNode=Pd(t.type,t.pendingProps,V.current),He=t,yt=!0,i=me,yn(t.type)?(tu=i,me=vt(a.firstChild)):me=i),Re(e,t,t.pendingProps.children,n),ml(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$&&((i=a=me)&&(a=qm(a,t.type,t.pendingProps,yt),a!==null?(t.stateNode=a,He=t,me=vt(a.firstChild),yt=!1,i=!0):i=!1),i||nn(t)),ja(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Fs(i,l)?a=null:o!==null&&Fs(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Wo(e,t,em,null,null,n),bi._currentValue=i),ml(e,t),Re(e,t,a,n),t.child;case 6:return e===null&&$&&((e=n=me)&&(n=Gm(n,t.pendingProps,yt),n!==null?(t.stateNode=n,He=t,me=null,e=!0):e=!1),e||nn(t)),null;case 13:return Lr(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=qn(t,null,a,n):Re(e,t,a,n),t.child;case 11:return Nr(e,t,t.type,t.pendingProps,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,an(t,t.type,a.value),Re(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Hn(t),i=Be(i),a=a(i),t.flags|=1,Re(e,t,a,n),t.child;case 14:return xr(e,t,t.type,t.pendingProps,n);case 15:return Hr(e,t,t.type,t.pendingProps,n);case 19:return Xr(e,t,n);case 31:return um(e,t,n);case 22:return Br(e,t,n,t.pendingProps);case 24:return Hn(t),a=Be(ze),e===null?(i=qo(),i===null&&(i=he,l=Ro(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),t.memoizedState={parent:a,cache:i},Yo(t),an(t,ze,i)):((e.lanes&n)!==0&&(Lo(e,t),Ia(t,null,null,n),$a()),i=e.memoizedState,l=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),an(t,ze,a)):(a=l.cache,an(t,ze,a),a!==i.cache&&Bo(t,[ze],n,!0))),Re(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Qt(e){e.flags|=4}function ws(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(bd())e.flags|=8192;else throw Un=Pi,Go}else e.flags&=-16777217}function Vr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sh(t))if(bd())e.flags|=8192;else throw Un=Pi,Go}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zu():536870912,e.lanes|=t,_a|=t)}function ii(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function rm(e,t,n){var a=t.pendingProps;switch(Oo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(ze),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sa(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,No())),ge(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Qt(t),l!==null?(ge(t),Vr(t,l)):(ge(t),ws(t,i,null,a,n))):l?l!==e.memoizedState?(Qt(t),ge(t),Vr(t,l)):(ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Qt(t),ge(t),ws(t,i,e,a,n)),null;case 27:if(Ei(t),n=V.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return ge(t),null}e=x.current,sa(t)?zc(t):(e=Pd(i,a,n),t.stateNode=e,Qt(t))}return ge(t),null;case 5:if(Ei(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return ge(t),null}if(l=x.current,sa(t))zc(t);else{var o=Ol(V.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?o.createElement(i,{is:a.is}):o.createElement(i)}}l[xe]=t,l[Ve]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(Ue(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Qt(t)}}return ge(t),ws(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=V.current,sa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=He,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[xe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ld(e.nodeValue,n)),e||nn(t,!0)}else e=Ol(e).createTextNode(a),e[xe]=t,t.stateNode=e}return ge(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=sa(t),n!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[xe]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),e=!1}else n=No(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ge(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=sa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[xe]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else i=No(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),ge(t),null);case 4:return ke(),e===null&&Zs(t.stateNode.containerInfo),ge(t),null;case 10:return qt(t.type),ge(t),null;case 19:if(S(Se),a=t.memoizedState,a===null)return ge(t),null;if(i=(t.flags&128)!==0,l=a.rendering,l===null)if(i)ii(a,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=al(e),l!==null){for(t.flags|=128,ii(a,!1),e=l.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_c(n,e),n=n.sibling;return j(Se,Se.current&1|2),$&&Rt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Pe()>kl&&(t.flags|=128,i=!0,ii(a,!1),t.lanes=4194304)}else{if(!i)if(e=al(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),ii(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!$)return ge(t),null}else 2*Pe()-a.renderingStartTime>kl&&n!==536870912&&(t.flags|=128,i=!0,ii(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(e=a.last,e!==null?e.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pe(),e.sibling=null,n=Se.current,j(Se,i?n&1|2:n&1),$&&Rt(t,a.treeForkCount),e):(ge(t),null);case 22:case 23:return lt(t),Vo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&S(Bn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qt(ze),ge(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function dm(e,t){switch(Oo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(ze),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ei(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(h(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(Se),null;case 4:return ke(),null;case 10:return qt(t.type),null;case 22:case 23:return lt(t),Vo(),e!==null&&S(Bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(ze),null;case 25:return null;default:return null}}function Kr(e,t){switch(Oo(t),t.tag){case 3:qt(ze),ke();break;case 26:case 27:case 5:Ei(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:S(Se);break;case 10:qt(t.type);break;case 22:case 23:lt(t),Vo(),e!==null&&S(Bn);break;case 24:qt(ze)}}function li(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var l=n.create,o=n.inst;a=l(),o.destroy=a}n=n.next}while(n!==i)}}catch(s){oe(t,t.return,s)}}function rn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var u=n,m=s;try{m()}catch(b){oe(i,u,b)}}}a=a.next}while(a!==l)}}catch(b){oe(t,t.return,b)}}function Jr(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Uc(t,n)}catch(a){oe(e,e.return,a)}}}function Wr(e,t,n){n.props=Yn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){oe(e,t,a)}}function oi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){oe(e,t,i)}}function Dt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){oe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){oe(e,t,i)}else n.current=null}function Fr(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){oe(e,e.return,i)}}function Ts(e,t,n){try{var a=e.stateNode;Nm(a,e.type,n,t),a[Ve]=t}catch(i){oe(e,e.return,i)}}function $r(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yn(e.type)||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$r(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xt));else if(a!==4&&(a===27&&yn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}function yl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&yn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function Ir(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ue(t,a,n),t[xe]=e,t[Ve]=n}catch(l){oe(e,e.return,l)}}var Xt=!1,Me=!1,Es=!1,Pr=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function hm(e,t){if(e=e.containerInfo,Js=Ul,e=dc(e),_o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,m=0,b=0,k=e,g=null;t:for(;;){for(var y;k!==n||i!==0&&k.nodeType!==3||(s=o+i),k!==l||a!==0&&k.nodeType!==3||(u=o+a),k.nodeType===3&&(o+=k.nodeValue.length),(y=k.firstChild)!==null;)g=k,k=y;for(;;){if(k===e)break t;if(g===n&&++m===i&&(s=o),g===l&&++b===a&&(u=o),(y=k.nextSibling)!==null)break;k=g,g=k.parentNode}k=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ws={focusedElem:e,selectionRange:n},Ul=!1,Ce=t;Ce!==null;)if(t=Ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ce=e;else for(;Ce!==null;){switch(t=Ce,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var N=Yn(n.type,i);e=a.getSnapshotBeforeUpdate(N,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(U){oe(n,n.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Is(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Is(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ce=e;break}Ce=t.return}}function ed(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(e,n),a&4&&li(5,n);break;case 1:if(Vt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){oe(n,n.return,o)}else{var i=Yn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){oe(n,n.return,o)}}a&64&&Jr(n),a&512&&oi(n,n.return);break;case 3:if(Vt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Uc(e,t)}catch(o){oe(n,n.return,o)}}break;case 27:t===null&&a&4&&Ir(n);case 26:case 5:Vt(e,n),t===null&&a&4&&Fr(n),a&512&&oi(n,n.return);break;case 12:Vt(e,n);break;case 31:Vt(e,n),a&4&&ad(e,n);break;case 13:Vt(e,n),a&4&&id(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=km.bind(null,n),Ym(e,n))));break;case 22:if(a=n.memoizedState!==null||Xt,!a){t=t!==null&&t.memoizedState!==null||Me,i=Xt;var l=Me;Xt=a,(Me=t)&&!l?Kt(e,n,(n.subtreeFlags&8772)!==0):Vt(e,n),Xt=i,Me=l}break;case 30:break;default:Vt(e,n)}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&no(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pe=null,Je=!1;function Zt(e,t,n){for(n=n.child;n!==null;)nd(e,t,n),n=n.sibling}function nd(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 26:Me||Dt(n,t),Zt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Me||Dt(n,t);var a=pe,i=Je;yn(n.type)&&(pe=n.stateNode,Je=!1),Zt(e,t,n),gi(n.stateNode),pe=a,Je=i;break;case 5:Me||Dt(n,t);case 6:if(a=pe,i=Je,pe=null,Zt(e,t,n),pe=a,Je=i,pe!==null)if(Je)try{(pe.nodeType===9?pe.body:pe.nodeName==="HTML"?pe.ownerDocument.body:pe).removeChild(n.stateNode)}catch(l){oe(n,t,l)}else try{pe.removeChild(n.stateNode)}catch(l){oe(n,t,l)}break;case 18:pe!==null&&(Je?(e=pe,Jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ma(e)):Jd(pe,n.stateNode));break;case 4:a=pe,i=Je,pe=n.stateNode.containerInfo,Je=!0,Zt(e,t,n),pe=a,Je=i;break;case 0:case 11:case 14:case 15:rn(2,n,t),Me||rn(4,n,t),Zt(e,t,n);break;case 1:Me||(Dt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Wr(n,t,a)),Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:Me=(a=Me)||n.memoizedState!==null,Zt(e,t,n),Me=a;break;default:Zt(e,t,n)}}function ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ma(e)}catch(n){oe(t,t.return,n)}}}function id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ma(e)}catch(n){oe(t,t.return,n)}}function fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pr),t;default:throw Error(h(435,e.tag))}}function bl(e,t){var n=fm(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=Sm.bind(null,e,a);a.then(i,i)}})}function We(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(yn(s.type)){pe=s.stateNode,Je=!1;break e}break;case 5:pe=s.stateNode,Je=!1;break e;case 3:case 4:pe=s.stateNode.containerInfo,Je=!0;break e}s=s.return}if(pe===null)throw Error(h(160));nd(l,o,i),pe=null,Je=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}var At=null;function ld(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(t,e),Fe(e),a&4&&(rn(3,e,e.return),li(3,e),rn(5,e,e.return));break;case 1:We(t,e),Fe(e),a&512&&(Me||n===null||Dt(n,n.return)),a&64&&Xt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=At;if(We(t,e),Fe(e),a&512&&(Me||n===null||Dt(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Na]||l[xe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Ue(l,a,n),l[xe]=e,Oe(l),a=l;break e;case"link":var o=lh("link","href",i).get(a+(n.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break t}}l=i.createElement(a),Ue(l,a,n),i.head.appendChild(l);break;case"meta":if(o=lh("meta","content",i).get(a+(n.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(s,1);break t}}l=i.createElement(a),Ue(l,a,n),i.head.appendChild(l);break;default:throw Error(h(468,a))}l[xe]=e,Oe(l),a=l}e.stateNode=a}else oh(i,e.type,e.stateNode);else e.stateNode=ih(i,a,e.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?oh(i,e.type,e.stateNode):ih(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ts(e,e.memoizedProps,n.memoizedProps)}break;case 27:We(t,e),Fe(e),a&512&&(Me||n===null||Dt(n,n.return)),n!==null&&a&4&&Ts(e,e.memoizedProps,n.memoizedProps);break;case 5:if(We(t,e),Fe(e),a&512&&(Me||n===null||Dt(n,n.return)),e.flags&32){i=e.stateNode;try{$n(i,"")}catch(N){oe(e,e.return,N)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ts(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Es=!0);break;case 6:if(We(t,e),Fe(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(N){oe(e,e.return,N)}}break;case 3:if(xl=null,i=At,At=Cl(t.containerInfo),We(t,e),At=i,Fe(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(t.containerInfo)}catch(N){oe(e,e.return,N)}Es&&(Es=!1,od(e));break;case 4:a=At,At=Cl(e.stateNode.containerInfo),We(t,e),Fe(e),At=a;break;case 12:We(t,e),Fe(e);break;case 31:We(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bl(e,a)));break;case 13:We(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(_l=Pe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bl(e,a)));break;case 22:i=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,m=Xt,b=Me;if(Xt=m||i,Me=b||u,We(t,e),Me=b,Xt=m,Fe(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||u||Xt||Me||Ln(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(l=u.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=u.stateNode;var k=u.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(N){oe(u,u.return,N)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(N){oe(u,u.return,N)}}}else if(t.tag===18){if(n===null){u=t;try{var y=u.stateNode;i?Wd(y,!0):Wd(u.stateNode,!1)}catch(N){oe(u,u.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,bl(e,n))));break;case 19:We(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bl(e,a)));break;case 30:break;case 21:break;default:We(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if($r(a)){n=a;break}a=a.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var i=n.stateNode,l=zs(e);yl(e,l,i);break;case 5:var o=n.stateNode;n.flags&32&&($n(o,""),n.flags&=-33);var s=zs(e);yl(e,s,o);break;case 3:case 4:var u=n.stateNode.containerInfo,m=zs(e);As(e,m,u);break;default:throw Error(h(161))}}catch(b){oe(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function od(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;od(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ed(e,t.alternate,t),t=t.sibling}function Ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rn(4,t,t.return),Ln(t);break;case 1:Dt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Wr(t,t.return,n),Ln(t);break;case 27:gi(t.stateNode);case 26:case 5:Dt(t,t.return),Ln(t);break;case 22:t.memoizedState===null&&Ln(t);break;case 30:Ln(t);break;default:Ln(t)}e=e.sibling}}function Kt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Kt(i,l,n),li(4,l);break;case 1:if(Kt(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){oe(a,a.return,m)}if(a=l,i=a.updateQueue,i!==null){var s=a.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)Rc(u[i],s)}catch(m){oe(a,a.return,m)}}n&&o&64&&Jr(l),oi(l,l.return);break;case 27:Ir(l);case 26:case 5:Kt(i,l,n),n&&a===null&&o&4&&Fr(l),oi(l,l.return);break;case 12:Kt(i,l,n);break;case 31:Kt(i,l,n),n&&o&4&&ad(i,l);break;case 13:Kt(i,l,n),n&&o&4&&id(i,l);break;case 22:l.memoizedState===null&&Kt(i,l,n),oi(l,l.return);break;case 30:break;default:Kt(i,l,n)}t=t.sibling}}function Ms(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Va(n))}function js(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e))}function Et(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sd(e,t,n,a),t=t.sibling}function sd(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t,n,a),i&2048&&li(9,t);break;case 1:Et(e,t,n,a);break;case 3:Et(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e)));break;case 12:if(i&2048){Et(e,t,n,a),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){oe(t,t.return,u)}}else Et(e,t,n,a);break;case 31:Et(e,t,n,a);break;case 13:Et(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?Et(e,t,n,a):si(e,t):l._visibility&2?Et(e,t,n,a):(l._visibility|=2,ya(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Ms(o,t);break;case 24:Et(e,t,n,a),i&2048&&js(t.alternate,t);break;default:Et(e,t,n,a)}}function ya(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,s=n,u=a,m=o.flags;switch(o.tag){case 0:case 11:case 15:ya(l,o,s,u,i),li(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?ya(l,o,s,u,i):si(l,o):(b._visibility|=2,ya(l,o,s,u,i)),i&&m&2048&&Ms(o.alternate,o);break;case 24:ya(l,o,s,u,i),i&&m&2048&&js(o.alternate,o);break;default:ya(l,o,s,u,i)}t=t.sibling}}function si(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:si(n,a),i&2048&&Ms(a.alternate,a);break;case 24:si(n,a),i&2048&&js(a.alternate,a);break;default:si(n,a)}t=t.sibling}}var ui=8192;function ba(e,t,n){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)ud(e,t,n),e=e.sibling}function ud(e,t,n){switch(e.tag){case 26:ba(e,t,n),e.flags&ui&&e.memoizedState!==null&&Pm(n,At,e.memoizedState,e.memoizedProps);break;case 5:ba(e,t,n);break;case 3:case 4:var a=At;At=Cl(e.stateNode.containerInfo),ba(e,t,n),At=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ui,ui=16777216,ba(e,t,n),ui=a):ba(e,t,n));break;default:ba(e,t,n)}}function cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ce=a,dd(a,e)}cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rd(e),e=e.sibling}function rd(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&rn(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vl(e)):ci(e);break;default:ci(e)}}function vl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ce=a,dd(a,e)}cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rn(8,t,t.return),vl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vl(t));break;default:vl(t)}e=e.sibling}}function dd(e,t){for(;Ce!==null;){var n=Ce;switch(n.tag){case 0:case 11:case 15:rn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ce=a;else e:for(n=e;Ce!==null;){a=Ce;var i=a.sibling,l=a.return;if(td(a),a===n){Ce=null;break e}if(i!==null){i.return=l,Ce=i;break e}Ce=l}}}var mm={getCacheForType:function(e){var t=Be(ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Be(ze).controller.signal}},gm=typeof WeakMap=="function"?WeakMap:Map,ae=0,he=null,K=null,W=0,le=0,ot=null,dn=!1,va=!1,Ds=!1,Jt=0,be=0,hn=0,Qn=0,Os=0,st=0,_a=0,ri=null,$e=null,Cs=!1,_l=0,hd=0,kl=1/0,Sl=null,fn=null,De=0,mn=null,ka=null,Wt=0,Ns=0,xs=null,fd=null,di=0,Hs=null;function ut(){return(ae&2)!==0&&W!==0?W&-W:v.T!==null?Ys():ju()}function md(){if(st===0)if((W&536870912)===0||$){var e=Di;Di<<=1,(Di&3932160)===0&&(Di=262144),st=e}else st=536870912;return e=it.current,e!==null&&(e.flags|=32),st}function Ie(e,t,n){(e===he&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Sa(e,0),gn(e,W,st,!1)),Ca(e,n),((ae&2)===0||e!==he)&&(e===he&&((ae&2)===0&&(Qn|=n),be===4&&gn(e,W,st,!1)),Ot(e))}function gd(e,t,n){if((ae&6)!==0)throw Error(h(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),i=a?bm(e,t):Rs(e,t,!0),l=a;do{if(i===0){va&&!a&&gn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!pm(n)){i=Rs(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;i=ri;var u=s.current.memoizedState.isDehydrated;if(u&&(Sa(s,o).flags|=256),o=Rs(s,o,!1),o!==2){if(Ds&&!u){s.errorRecoveryDisabledLanes|=l,Qn|=l,i=4;break e}l=$e,$e=i,l!==null&&($e===null?$e=l:$e.push.apply($e,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){Sa(e,0),gn(e,t,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:gn(a,t,st,!dn);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(i=_l+300-Pe(),10<i)){if(gn(a,t,st,!dn),Ci(a,0,!0)!==0)break e;Wt=t,a.timeoutHandle=Vd(pd.bind(null,a,n,$e,Sl,Cs,t,st,Qn,_a,dn,l,"Throttled",-0,0),i);break e}pd(a,n,$e,Sl,Cs,t,st,Qn,_a,dn,l,null,-0,0)}}break}while(!0);Ot(e)}function pd(e,t,n,a,i,l,o,s,u,m,b,k,g,y){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xt},ud(t,l,k);var N=(l&62914560)===l?_l-Pe():(l&4194048)===l?hd-Pe():0;if(N=eg(k,N),N!==null){Wt=l,e.cancelPendingCommit=N(Td.bind(null,e,t,l,n,a,i,o,s,u,b,k,null,g,y)),gn(e,l,o,!m);return}}Td(e,t,l,n,a,i,o,s,u)}function pm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t,n,a){t&=~Os,t&=~Qn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var l=31-tt(i),o=1<<l;a[l]=-1,i&=~o}n!==0&&Au(e,n,t)}function wl(){return(ae&6)===0?(hi(0),!1):!0}function Bs(){if(K!==null){if(le===0)var e=K.return;else e=K,Ut=xn=null,Io(e),ha=null,Ja=0,e=K;for(;e!==null;)Kr(e.alternate,e),e=e.return;K=null}}function Sa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Bm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wt=0,Bs(),he=e,K=n=Bt(e.current,null),W=t,le=0,ot=null,dn=!1,va=Oa(e,t),Ds=!1,_a=st=Os=Qn=hn=be=0,$e=ri=null,Cs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-tt(a),l=1<<i;t|=e[i],a&=~l}return Jt=t,Xi(),n}function yd(e,t){Q=null,v.H=ni,t===da||t===Ii?(t=Nc(),le=3):t===Go?(t=Nc(),le=4):le=t===ms?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,K===null&&(be=1,hl(e,mt(t,e.current)))}function bd(){var e=it.current;return e===null?!0:(W&4194048)===W?bt===null:(W&62914560)===W||(W&536870912)!==0?e===bt:!1}function vd(){var e=v.H;return v.H=ni,e===null?ni:e}function _d(){var e=v.A;return v.A=mm,e}function Tl(){be=4,dn||(W&4194048)!==W&&it.current!==null||(va=!0),(hn&134217727)===0&&(Qn&134217727)===0||he===null||gn(he,W,st,!1)}function Rs(e,t,n){var a=ae;ae|=2;var i=vd(),l=_d();(he!==e||W!==t)&&(Sl=null,Sa(e,t)),t=!1;var o=be;e:do try{if(le!==0&&K!==null){var s=K,u=ot;switch(le){case 8:Bs(),o=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var m=le;if(le=0,ot=null,wa(e,s,u,m),n&&va){o=0;break e}break;default:m=le,le=0,ot=null,wa(e,s,u,m)}}ym(),o=be;break}catch(b){yd(e,b)}while(!0);return t&&e.shellSuspendCounter++,Ut=xn=null,ae=a,v.H=i,v.A=l,K===null&&(he=null,W=0,Xi()),o}function ym(){for(;K!==null;)kd(K)}function bm(e,t){var n=ae;ae|=2;var a=vd(),i=_d();he!==e||W!==t?(Sl=null,kl=Pe()+500,Sa(e,t)):va=Oa(e,t);e:do try{if(le!==0&&K!==null){t=K;var l=ot;t:switch(le){case 1:le=0,ot=null,wa(e,t,l,1);break;case 2:case 9:if(Oc(l)){le=0,ot=null,Sd(t);break}t=function(){le!==2&&le!==9||he!==e||(le=7),Ot(e)},l.then(t,t);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:Oc(l)?(le=0,ot=null,Sd(t)):(le=0,ot=null,wa(e,t,l,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var s=K;if(o?sh(o):s.stateNode.complete){le=0,ot=null;var u=s.sibling;if(u!==null)K=u;else{var m=s.return;m!==null?(K=m,zl(m)):K=null}break t}}le=0,ot=null,wa(e,t,l,5);break;case 6:le=0,ot=null,wa(e,t,l,6);break;case 8:Bs(),be=6;break e;default:throw Error(h(462))}}vm();break}catch(b){yd(e,b)}while(!0);return Ut=xn=null,v.H=a,v.A=i,ae=n,K!==null?0:(he=null,W=0,Xi(),be)}function vm(){for(;K!==null&&!Yh();)kd(K)}function kd(e){var t=Zr(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?zl(e):K=t}function Sd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qr(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=qr(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Io(t);default:Kr(n,t),t=K=_c(t,Jt),t=Zr(n,t,Jt)}e.memoizedProps=e.pendingProps,t===null?zl(e):K=t}function wa(e,t,n,a){Ut=xn=null,Io(t),ha=null,Ja=0;var i=t.return;try{if(sm(e,i,t,n,W)){be=1,hl(e,mt(n,e.current)),K=null;return}}catch(l){if(i!==null)throw K=i,l;be=1,hl(e,mt(n,e.current)),K=null;return}t.flags&32768?($||a===1?e=!0:va||(W&536870912)!==0?e=!1:(dn=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),wd(t,e)):zl(t)}function zl(e){var t=e;do{if((t.flags&32768)!==0){wd(t,dn);return}e=t.return;var n=rm(t.alternate,t,Jt);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);be===0&&(be=5)}function wd(e,t){do{var n=dm(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);be=6,K=null}function Td(e,t,n,a,i,l,o,s,u){e.cancelPendingCommit=null;do Al();while(De!==0);if((ae&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=zo,$h(e,n,l,o,s,u),e===he&&(K=he=null,W=0),ka=t,mn=e,Wt=n,Ns=l,xs=i,fd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wm(Mi,function(){return jd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,i=M.p,M.p=2,o=ae,ae|=4;try{hm(e,t,n)}finally{ae=o,M.p=i,v.T=a}}De=1,zd(),Ad(),Ed()}}function zd(){if(De===1){De=0;var e=mn,t=ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null;var a=M.p;M.p=2;var i=ae;ae|=4;try{ld(t,e);var l=Ws,o=dc(e.containerInfo),s=l.focusedElem,u=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&rc(s.ownerDocument.documentElement,s)){if(u!==null&&_o(s)){var m=u.start,b=u.end;if(b===void 0&&(b=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(b,s.value.length);else{var k=s.ownerDocument||document,g=k&&k.defaultView||window;if(g.getSelection){var y=g.getSelection(),N=s.textContent.length,U=Math.min(u.start,N),re=u.end===void 0?U:Math.min(u.end,N);!y.extend&&U>re&&(o=re,re=U,U=o);var d=cc(s,U),c=cc(s,re);if(d&&c&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var f=k.createRange();f.setStart(d.node,d.offset),y.removeAllRanges(),U>re?(y.addRange(f),y.extend(c.node,c.offset)):(f.setEnd(c.node,c.offset),y.addRange(f))}}}}for(k=[],y=s;y=y.parentNode;)y.nodeType===1&&k.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<k.length;s++){var _=k[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ul=!!Js,Ws=Js=null}finally{ae=i,M.p=a,v.T=n}}e.current=t,De=2}}function Ad(){if(De===2){De=0;var e=mn,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=v.T,v.T=null;var a=M.p;M.p=2;var i=ae;ae|=4;try{ed(e,t.alternate,t)}finally{ae=i,M.p=a,v.T=n}}De=3}}function Ed(){if(De===4||De===3){De=0,Lh();var e=mn,t=ka,n=Wt,a=fd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?De=5:(De=0,ka=mn=null,Md(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(fn=null),eo(n),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=v.T,i=M.p,M.p=2,v.T=null;try{for(var l=e.onRecoverableError,o=0;o<a.length;o++){var s=a[o];l(s.value,{componentStack:s.stack})}}finally{v.T=t,M.p=i}}(Wt&3)!==0&&Al(),Ot(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Hs?di++:(di=0,Hs=e):di=0,hi(0)}}function Md(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Va(t)))}function Al(){return zd(),Ad(),Ed(),jd()}function jd(){if(De!==5)return!1;var e=mn,t=Ns;Ns=0;var n=eo(Wt),a=v.T,i=M.p;try{M.p=32>n?32:n,v.T=null,n=xs,xs=null;var l=mn,o=Wt;if(De=0,ka=mn=null,Wt=0,(ae&6)!==0)throw Error(h(331));var s=ae;if(ae|=4,rd(l.current),sd(l,l.current,o,n),ae=s,hi(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Da,l)}catch{}return!0}finally{M.p=i,v.T=a,Md(e,t)}}function Dd(e,t,n){t=mt(n,t),t=fs(e.stateNode,t,2),e=sn(e,t,2),e!==null&&(Ca(e,2),Ot(e))}function oe(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fn===null||!fn.has(a))){e=mt(n,e),n=Or(2),a=sn(t,n,2),a!==null&&(Cr(n,a,t,e),Ca(a,2),Ot(a));break}}t=t.return}}function Us(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new gm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Ds=!0,i.add(n),e=_m.bind(null,e,t,n),t.then(e,e))}function _m(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,he===e&&(W&n)===n&&(be===4||be===3&&(W&62914560)===W&&300>Pe()-_l?(ae&2)===0&&Sa(e,0):Os|=n,_a===W&&(_a=0)),Ot(e)}function Od(e,t){t===0&&(t=zu()),e=On(e,t),e!==null&&(Ca(e,t),Ot(e))}function km(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Od(e,n)}function Sm(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Od(e,n)}function wm(e,t){return Fl(e,t)}var El=null,Ta=null,qs=!1,Ml=!1,Gs=!1,pn=0;function Ot(e){e!==Ta&&e.next===null&&(Ta===null?El=Ta=e:Ta=Ta.next=e),Ml=!0,qs||(qs=!0,zm())}function hi(e,t){if(!Gs&&Ml){Gs=!0;do for(var n=!1,a=El;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var o=a.suspendedLanes,s=a.pingedLanes;l=(1<<31-tt(42|e)+1)-1,l&=i&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Hd(a,l))}else l=W,l=Ci(a,a===he?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Oa(a,l)||(n=!0,Hd(a,l));a=a.next}while(n);Gs=!1}}function Tm(){Cd()}function Cd(){Ml=qs=!1;var e=0;pn!==0&&Hm()&&(e=pn);for(var t=Pe(),n=null,a=El;a!==null;){var i=a.next,l=Nd(a,t);l===0?(a.next=null,n===null?El=i:n.next=i,i===null&&(Ta=n)):(n=a,(e!==0||(l&3)!==0)&&(Ml=!0)),a=i}De!==0&&De!==5||hi(e),pn!==0&&(pn=0)}function Nd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-tt(l),s=1<<o,u=i[o];u===-1?((s&n)===0||(s&a)!==0)&&(i[o]=Fh(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}if(t=he,n=W,n=Ci(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&$l(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Oa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&$l(a),eo(n)){case 2:case 8:n=wu;break;case 32:n=Mi;break;case 268435456:n=Tu;break;default:n=Mi}return a=xd.bind(null,e),n=Fl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&$l(a),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Al()&&e.callbackNode!==n)return null;var a=W;return a=Ci(e,e===he?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(gd(e,a,t),Nd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Hd(e,t){if(Al())return null;gd(e,t,!0)}function zm(){Rm(function(){(ae&6)!==0?Fl(Su,Tm):Cd()})}function Ys(){if(pn===0){var e=ca;e===0&&(e=ji,ji<<=1,(ji&261888)===0&&(ji=256)),pn=e}return pn}function Bd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bi(""+e)}function Rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Am(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var l=Bd((i[Ve]||null).action),o=a.submitter;o&&(t=(t=o[Ve]||null)?Bd(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var s=new Gi("action","action",null,a,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pn!==0){var u=o?Rd(i,o):new FormData(i);ss(n,{pending:!0,data:u,method:i.method,action:l},null,u)}}else typeof l=="function"&&(s.preventDefault(),u=o?Rd(i,o):new FormData(i),ss(n,{pending:!0,data:u,method:i.method,action:l},l,u))},currentTarget:i}]})}}for(var Ls=0;Ls<To.length;Ls++){var Qs=To[Ls],Em=Qs.toLowerCase(),Mm=Qs[0].toUpperCase()+Qs.slice(1);zt(Em,"on"+Mm)}zt(mc,"onAnimationEnd"),zt(gc,"onAnimationIteration"),zt(pc,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(Xf,"onTransitionRun"),zt(Zf,"onTransitionStart"),zt(Vf,"onTransitionCancel"),zt(yc,"onTransitionEnd"),Wn("onMouseEnter",["mouseout","mouseover"]),Wn("onMouseLeave",["mouseout","mouseover"]),Wn("onPointerEnter",["pointerout","pointerover"]),Wn("onPointerLeave",["pointerout","pointerover"]),En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Ud(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var o=a.length-1;0<=o;o--){var s=a[o],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;l=s,i.currentTarget=m;try{l(i)}catch(b){Qi(b)}i.currentTarget=null,l=u}else for(o=0;o<a.length;o++){if(s=a[o],u=s.instance,m=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;l=s,i.currentTarget=m;try{l(i)}catch(b){Qi(b)}i.currentTarget=null,l=u}}}}function J(e,t){var n=t[to];n===void 0&&(n=t[to]=new Set);var a=e+"__bubble";n.has(a)||(qd(t,e,2,!1),n.add(a))}function Xs(e,t,n){var a=0;t&&(a|=4),qd(n,e,a,t)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Zs(e){if(!e[jl]){e[jl]=!0,Cu.forEach(function(n){n!=="selectionchange"&&(jm.has(n)||Xs(n,!1,e),Xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jl]||(t[jl]=!0,Xs("selectionchange",!1,t))}}function qd(e,t,n,a){switch(mh(t)){case 2:var i=ag;break;case 8:i=ig;break;default:i=ou}n=i.bind(null,t,n,e),i=void 0,!ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vs(e,t,n,a,i){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=a.return;o!==null;){var u=o.tag;if((u===3||u===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Vn(s),o===null)return;if(u=o.tag,u===5||u===6||u===26||u===27){a=l=o;continue e}s=s.parentNode}}a=a.return}Xu(function(){var m=l,b=uo(n),k=[];e:{var g=bc.get(e);if(g!==void 0){var y=Gi,N=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":y=Sf;break;case"focusin":N="focus",y=go;break;case"focusout":N="blur",y=go;break;case"beforeblur":case"afterblur":y=go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zf;break;case mc:case gc:case pc:y=ff;break;case yc:y=Ef;break;case"scroll":case"scrollend":y=uf;break;case"wheel":y=jf;break;case"copy":case"cut":case"paste":y=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wu;break;case"toggle":case"beforetoggle":y=Of}var U=(t&4)!==0,re=!U&&(e==="scroll"||e==="scrollend"),d=U?g!==null?g+"Capture":null:g;U=[];for(var c=m,f;c!==null;){var _=c;if(f=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||f===null||d===null||(_=Ha(c,d),_!=null&&U.push(mi(c,_,f))),re)break;c=c.return}0<U.length&&(g=new y(g,N,null,n,b),k.push({event:g,listeners:U}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==so&&(N=n.relatedTarget||n.fromElement)&&(Vn(N)||N[Zn]))break e;if((y||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,y?(N=n.relatedTarget||n.toElement,y=m,N=N?Vn(N):null,N!==null&&(re=R(N),U=N.tag,N!==re||U!==5&&U!==27&&U!==6)&&(N=null)):(y=null,N=m),y!==N)){if(U=Ku,_="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(U=Wu,_="onPointerLeave",d="onPointerEnter",c="pointer"),re=y==null?g:xa(y),f=N==null?g:xa(N),g=new U(_,c+"leave",y,n,b),g.target=re,g.relatedTarget=f,_=null,Vn(b)===m&&(U=new U(d,c+"enter",N,n,b),U.target=f,U.relatedTarget=re,_=U),re=_,y&&N)t:{for(U=Dm,d=y,c=N,f=0,_=d;_;_=U(_))f++;_=0;for(var B=c;B;B=U(B))_++;for(;0<f-_;)d=U(d),f--;for(;0<_-f;)c=U(c),_--;for(;f--;){if(d===c||c!==null&&d===c.alternate){U=d;break t}d=U(d),c=U(c)}U=null}else U=null;y!==null&&Gd(k,g,y,U,!1),N!==null&&re!==null&&Gd(k,re,N,U,!0)}}e:{if(g=m?xa(m):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var ee=ac;else if(tc(g))if(ic)ee=Yf;else{ee=qf;var H=Uf}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&oo(m.elementType)&&(ee=ac):ee=Gf;if(ee&&(ee=ee(e,m))){nc(k,ee,n,b);break e}H&&H(e,g,m),e==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&lo(g,"number",g.value)}switch(H=m?xa(m):window,e){case"focusin":(tc(H)||H.contentEditable==="true")&&(ta=H,ko=m,Qa=null);break;case"focusout":Qa=ko=ta=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,hc(k,n,b);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":hc(k,n,b)}var X;if(yo)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ea?Pu(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Fu&&n.locale!=="ko"&&(ea||F!=="onCompositionStart"?F==="onCompositionEnd"&&ea&&(X=Zu()):(Pt=b,ho="value"in Pt?Pt.value:Pt.textContent,ea=!0)),H=Dl(m,F),0<H.length&&(F=new Ju(F,e,null,n,b),k.push({event:F,listeners:H}),X?F.data=X:(X=ec(n),X!==null&&(F.data=X)))),(X=Nf?xf(e,n):Hf(e,n))&&(F=Dl(m,"onBeforeInput"),0<F.length&&(H=new Ju("onBeforeInput","beforeinput",null,n,b),k.push({event:H,listeners:F}),H.data=X)),Am(k,e,m,n,b)}Ud(k,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dl(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ha(e,n),i!=null&&a.unshift(mi(e,i,l)),i=Ha(e,t),i!=null&&a.push(mi(e,i,l))),e.tag===3)return a;e=e.return}return[]}function Dm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gd(e,t,n,a,i){for(var l=t._reactName,o=[];n!==null&&n!==a;){var s=n,u=s.alternate,m=s.stateNode;if(s=s.tag,u!==null&&u===a)break;s!==5&&s!==26&&s!==27||m===null||(u=m,i?(m=Ha(n,l),m!=null&&o.unshift(mi(n,m,u))):i||(m=Ha(n,l),m!=null&&o.push(mi(n,m,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Om=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function Yd(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Cm,"")}function Ld(e,t){return t=Yd(t),Yd(e)===t}function ce(e,t,n,a,i,l){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$n(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$n(e,""+a);break;case"className":xi(e,"class",a);break;case"tabIndex":xi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":xi(e,n,a);break;case"style":Lu(e,a,l);break;case"data":if(t!=="object"){xi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Bi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",i.name,i,null),ce(e,t,"formEncType",i.formEncType,i,null),ce(e,t,"formMethod",i.formMethod,i,null),ce(e,t,"formTarget",i.formTarget,i,null)):(ce(e,t,"encType",i.encType,i,null),ce(e,t,"method",i.method,i,null),ce(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Bi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=xt);break;case"onScroll":a!=null&&J("scroll",e);break;case"onScrollEnd":a!=null&&J("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Bi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":J("beforetoggle",e),J("toggle",e),Ni(e,"popover",a);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ni(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=of.get(n)||n,Ni(e,n,a))}}function Ks(e,t,n,a,i,l){switch(n){case"style":Lu(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof a=="string"?$n(e,a):(typeof a=="number"||typeof a=="bigint")&&$n(e,""+a);break;case"onScroll":a!=null&&J("scroll",e);break;case"onScrollEnd":a!=null&&J("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),l=e[Ve]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ni(e,n,a)}}}function Ue(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var o=n[l];if(o!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ce(e,t,l,o,n,null)}}i&&ce(e,t,"srcSet",n.srcSet,n,null),a&&ce(e,t,"src",n.src,n,null);return;case"input":J("invalid",e);var s=l=o=i=null,u=null,m=null;for(a in n)if(n.hasOwnProperty(a)){var b=n[a];if(b!=null)switch(a){case"name":i=b;break;case"type":o=b;break;case"checked":u=b;break;case"defaultChecked":m=b;break;case"value":l=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(h(137,t));break;default:ce(e,t,a,b,n,null)}}Uu(e,l,s,u,m,o,i,!1);return;case"select":J("invalid",e),a=o=l=null;for(i in n)if(n.hasOwnProperty(i)&&(s=n[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:ce(e,t,i,s,n,null)}t=l,n=o,e.multiple=!!a,t!=null?Fn(e,!!a,t,!1):n!=null&&Fn(e,!!a,n,!0);return;case"textarea":J("invalid",e),l=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":i=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:ce(e,t,o,s,n,null)}Gu(e,a,i,l);return;case"option":for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null)&&(u==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ce(e,t,u,a,n,null));return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(a=0;a<fi.length;a++)J(fi[a],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ce(e,t,m,a,n,null)}return;default:if(oo(t)){for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!==void 0&&Ks(e,t,b,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&ce(e,t,s,a,n,null))}function Nm(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,s=null,u=null,m=null,b=null;for(y in n){var k=n[y];if(n.hasOwnProperty(y)&&k!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":u=k;default:a.hasOwnProperty(y)||ce(e,t,y,null,a,k)}}for(var g in a){var y=a[g];if(k=n[g],a.hasOwnProperty(g)&&(y!=null||k!=null))switch(g){case"type":l=y;break;case"name":i=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":o=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:y!==k&&ce(e,t,g,y,a,k)}}io(e,o,s,u,m,b,l,i);return;case"select":y=o=s=g=null;for(l in n)if(u=n[l],n.hasOwnProperty(l)&&u!=null)switch(l){case"value":break;case"multiple":y=u;default:a.hasOwnProperty(l)||ce(e,t,l,null,a,u)}for(i in a)if(l=a[i],u=n[i],a.hasOwnProperty(i)&&(l!=null||u!=null))switch(i){case"value":g=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==u&&ce(e,t,i,l,a,u)}t=s,n=o,a=y,g!=null?Fn(e,!!n,g,!1):!!a!=!!n&&(t!=null?Fn(e,!!n,t,!0):Fn(e,!!n,n?[]:"",!1));return;case"textarea":y=g=null;for(s in n)if(i=n[s],n.hasOwnProperty(s)&&i!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ce(e,t,s,null,a,i)}for(o in a)if(i=a[o],l=n[o],a.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":g=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(h(91));break;default:i!==l&&ce(e,t,o,i,a,l)}qu(e,g,y);return;case"option":for(var N in n)g=n[N],n.hasOwnProperty(N)&&g!=null&&!a.hasOwnProperty(N)&&(N==="selected"?e.selected=!1:ce(e,t,N,null,a,g));for(u in a)g=a[u],y=n[u],a.hasOwnProperty(u)&&g!==y&&(g!=null||y!=null)&&(u==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":ce(e,t,u,g,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in n)g=n[U],n.hasOwnProperty(U)&&g!=null&&!a.hasOwnProperty(U)&&ce(e,t,U,null,a,g);for(m in a)if(g=a[m],y=n[m],a.hasOwnProperty(m)&&g!==y&&(g!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:ce(e,t,m,g,a,y)}return;default:if(oo(t)){for(var re in n)g=n[re],n.hasOwnProperty(re)&&g!==void 0&&!a.hasOwnProperty(re)&&Ks(e,t,re,void 0,a,g);for(b in a)g=a[b],y=n[b],!a.hasOwnProperty(b)||g===y||g===void 0&&y===void 0||Ks(e,t,b,g,a,y);return}}for(var d in n)g=n[d],n.hasOwnProperty(d)&&g!=null&&!a.hasOwnProperty(d)&&ce(e,t,d,null,a,g);for(k in a)g=a[k],y=n[k],!a.hasOwnProperty(k)||g===y||g==null&&y==null||ce(e,t,k,g,a,y)}function Qd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],l=i.transferSize,o=i.initiatorType,s=i.duration;if(l&&s&&Qd(o)){for(o=0,s=i.responseEnd,a+=1;a<n.length;a++){var u=n[a],m=u.startTime;if(m>s)break;var b=u.transferSize,k=u.initiatorType;b&&Qd(k)&&(u=u.responseEnd,o+=b*(u<s?1:(s-m)/(u-m)))}if(--a,t+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Js=null,Ws=null;function Ol(e){return e.nodeType===9?e:e.ownerDocument}function Xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function Hm(){var e=window.event;return e&&e.type==="popstate"?e===$s?!1:($s=e,!0):($s=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(e){return Kd.resolve(null).then(e).catch(Um)}:Vd;function Um(e){setTimeout(function(){throw e})}function yn(e){return e==="head"}function Jd(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),Ma(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")gi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,gi(n);for(var l=n.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[Na]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=o}}else n==="body"&&gi(e.ownerDocument.body);n=i}while(n);Ma(t)}function Wd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Is(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Is(n),no(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qm(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Na])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Gm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vt(e.nextSibling),e===null))return null;return e}function Fd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Ps(e){return e.data==="$?"||e.data==="$~"}function eu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ym(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tu=null;function $d(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Pd(e,t,n){switch(t=Ol(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);no(e)}var _t=new Map,eh=new Set;function Cl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=M.d;M.d={f:Lm,r:Qm,D:Xm,C:Zm,L:Vm,m:Km,X:Wm,S:Jm,M:Fm};function Lm(){var e=Ft.f(),t=wl();return e||t}function Qm(e){var t=Kn(e);t!==null&&t.tag===5&&t.type==="form"?yr(t):Ft.r(e)}var za=typeof document>"u"?null:document;function th(e,t,n){var a=za;if(a&&typeof t=="string"&&t){var i=ht(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),eh.has(i)||(eh.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Ue(t,"link",e),Oe(t),a.head.appendChild(t)))}}function Xm(e){Ft.D(e),th("dns-prefetch",e,null)}function Zm(e,t){Ft.C(e,t),th("preconnect",e,t)}function Vm(e,t,n){Ft.L(e,t,n);var a=za;if(a&&e&&t){var i='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+ht(n.imageSizes)+'"]')):i+='[href="'+ht(e)+'"]';var l=i;switch(t){case"style":l=Aa(e);break;case"script":l=Ea(e)}_t.has(l)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),_t.set(l,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(pi(l))||t==="script"&&a.querySelector(yi(l))||(t=a.createElement("link"),Ue(t,"link",e),Oe(t),a.head.appendChild(t)))}}function Km(e,t){Ft.m(e,t);var n=za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ht(a)+'"][href="'+ht(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ea(e)}if(!_t.has(l)&&(e=E({rel:"modulepreload",href:e},t),_t.set(l,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yi(l)))return}a=n.createElement("link"),Ue(a,"link",e),Oe(a),n.head.appendChild(a)}}}function Jm(e,t,n){Ft.S(e,t,n);var a=za;if(a&&e){var i=Jn(a).hoistableStyles,l=Aa(e);t=t||"default";var o=i.get(l);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(pi(l)))s.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=_t.get(l))&&nu(e,n);var u=o=a.createElement("link");Oe(u),Ue(u,"link",e),u._p=new Promise(function(m,b){u.onload=m,u.onerror=b}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Nl(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(l,o)}}}function Wm(e,t){Ft.X(e,t);var n=za;if(n&&e){var a=Jn(n).hoistableScripts,i=Ea(e),l=a.get(i);l||(l=n.querySelector(yi(i)),l||(e=E({src:e,async:!0},t),(t=_t.get(i))&&au(e,t),l=n.createElement("script"),Oe(l),Ue(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Fm(e,t){Ft.M(e,t);var n=za;if(n&&e){var a=Jn(n).hoistableScripts,i=Ea(e),l=a.get(i);l||(l=n.querySelector(yi(i)),l||(e=E({src:e,async:!0,type:"module"},t),(t=_t.get(i))&&au(e,t),l=n.createElement("script"),Oe(l),Ue(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function nh(e,t,n,a){var i=(i=V.current)?Cl(i):null;if(!i)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Aa(n.href),n=Jn(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Aa(n.href);var l=Jn(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(pi(e)))&&!l._p&&(o.instance=l,o.state.loading=5),_t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_t.set(e,n),l||$m(i,e,n,o.state))),t&&a===null)throw Error(h(528,""));return o}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ea(n),n=Jn(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Aa(e){return'href="'+ht(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function ah(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function $m(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ue(t,"link",n),Oe(t),e.head.appendChild(t))}function Ea(e){return'[src="'+ht(e)+'"]'}function yi(e){return"script[async]"+e}function ih(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ht(n.href)+'"]');if(a)return t.instance=a,Oe(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Oe(a),Ue(a,"style",i),Nl(a,n.precedence,e),t.instance=a;case"stylesheet":i=Aa(n.href);var l=e.querySelector(pi(i));if(l)return t.state.loading|=4,t.instance=l,Oe(l),l;a=ah(n),(i=_t.get(i))&&nu(a,i),l=(e.ownerDocument||e).createElement("link"),Oe(l);var o=l;return o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),Ue(l,"link",a),t.state.loading|=4,Nl(l,n.precedence,e),t.instance=l;case"script":return l=Ea(n.src),(i=e.querySelector(yi(l)))?(t.instance=i,Oe(i),i):(a=n,(i=_t.get(l))&&(a=E({},n),au(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Oe(i),Ue(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Nl(a,n.precedence,e));return t.instance}function Nl(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===t)l=s;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xl=null;function lh(e,t,n){if(xl===null){var a=new Map,i=xl=new Map;i.set(n,a)}else i=xl,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var l=n[i];if(!(l[Na]||l[xe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var s=a.get(o);s?s.push(l):a.set(o,[l])}}return a}function oh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Im(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pm(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Aa(a.href),l=t.querySelector(pi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Hl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,Oe(l);return}l=t.ownerDocument||t,a=ah(a),(i=_t.get(i))&&nu(a,i),l=l.createElement("link"),Oe(l);var o=l;o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),Ue(l,"link",a),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Hl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var iu=0;function eg(e,t){return e.stylesheets&&e.count===0&&Rl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Rl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&iu===0&&(iu=62500*xm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>iu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function Rl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,t.forEach(tg,e),Bl=null,Hl.call(e))}function tg(e,t){if(!(t.state.loading&4)){var n=Bl.get(e);if(n)var a=n.get(null);else{n=new Map,Bl.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}i=t.instance,o=i.getAttribute("data-precedence"),l=n.get(o)||a,l===a&&n.set(null,i),n.set(o,i),this.count++,a=Hl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var bi={$$typeof:je,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function ng(e,t,n,a,i,l,o,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Il(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.hiddenUpdates=Il(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function uh(e,t,n,a,i,l,o,s,u,m,b,k){return e=new ng(e,t,n,o,u,m,b,k,s),t=1,l===!0&&(t|=24),l=at(3,null,null,t),e.current=l,l.stateNode=e,t=Ro(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},Yo(l),e}function ch(e){return e?(e=ia,e):ia}function rh(e,t,n,a,i,l){i=ch(i),a.context===null?a.context=i:a.pendingContext=i,a=on(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=sn(e,a,t),n!==null&&(Ie(n,e,t),Fa(n,e,t))}function dh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){dh(e,t),(e=e.alternate)&&dh(e,t)}function hh(e){if(e.tag===13||e.tag===31){var t=On(e,67108864);t!==null&&Ie(t,e,67108864),lu(e,67108864)}}function fh(e){if(e.tag===13||e.tag===31){var t=ut();t=Pl(t);var n=On(e,t);n!==null&&Ie(n,e,t),lu(e,t)}}var Ul=!0;function ag(e,t,n,a){var i=v.T;v.T=null;var l=M.p;try{M.p=2,ou(e,t,n,a)}finally{M.p=l,v.T=i}}function ig(e,t,n,a){var i=v.T;v.T=null;var l=M.p;try{M.p=8,ou(e,t,n,a)}finally{M.p=l,v.T=i}}function ou(e,t,n,a){if(Ul){var i=su(a);if(i===null)Vs(e,t,a,ql,n),gh(e,a);else if(og(i,e,t,n,a))a.stopPropagation();else if(gh(e,a),t&4&&-1<lg.indexOf(e)){for(;i!==null;){var l=Kn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=An(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var u=1<<31-tt(o);s.entanglements[1]|=u,o&=~u}Ot(l),(ae&6)===0&&(kl=Pe()+500,hi(0))}}break;case 31:case 13:s=On(l,2),s!==null&&Ie(s,l,2),wl(),lu(l,2)}if(l=su(a),l===null&&Vs(e,t,a,ql,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Vs(e,t,a,null,n)}}function su(e){return e=uo(e),uu(e)}var ql=null;function uu(e){if(ql=null,e=Vn(e),e!==null){var t=R(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ne(t),e!==null)return e;e=null}else if(n===31){if(e=I(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ql=e,null}function mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qh()){case Su:return 2;case wu:return 8;case Mi:case Xh:return 32;case Tu:return 268435456;default:return 32}default:return 32}}var cu=!1,bn=null,vn=null,_n=null,vi=new Map,_i=new Map,kn=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gh(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(t.pointerId)}}function ki(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Kn(t),t!==null&&hh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function og(e,t,n,a,i){switch(t){case"focusin":return bn=ki(bn,e,t,n,a,i),!0;case"dragenter":return vn=ki(vn,e,t,n,a,i),!0;case"mouseover":return _n=ki(_n,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return vi.set(l,ki(vi.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,_i.set(l,ki(_i.get(l)||null,e,t,n,a,i)),!0}return!1}function ph(e){var t=Vn(e.target);if(t!==null){var n=R(t);if(n!==null){if(t=n.tag,t===13){if(t=ne(n),t!==null){e.blockedOn=t,Du(e.priority,function(){fh(n)});return}}else if(t===31){if(t=I(n),t!==null){e.blockedOn=t,Du(e.priority,function(){fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=su(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);so=a,n.target.dispatchEvent(a),so=null}else return t=Kn(n),t!==null&&hh(t),e.blockedOn=n,!1;t.shift()}return!0}function yh(e,t,n){Gl(e)&&n.delete(t)}function sg(){cu=!1,bn!==null&&Gl(bn)&&(bn=null),vn!==null&&Gl(vn)&&(vn=null),_n!==null&&Gl(_n)&&(_n=null),vi.forEach(yh),_i.forEach(yh)}function Yl(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,sg)))}var Ll=null;function bh(e){Ll!==e&&(Ll=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Ll===e&&(Ll=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(uu(a||n)===null)continue;break}var l=Kn(n);l!==null&&(e.splice(t,3),t-=3,ss(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Ma(e){function t(u){return Yl(u,e)}bn!==null&&Yl(bn,e),vn!==null&&Yl(vn,e),_n!==null&&Yl(_n,e),vi.forEach(t),_i.forEach(t);for(var n=0;n<kn.length;n++){var a=kn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)ph(n),n.blockedOn===null&&kn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],o=i[Ve]||null;if(typeof l=="function")o||bh(n);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[Ve]||null)s=o.formAction;else if(uu(i)!==null)continue}else s=o.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),bh(n)}}}function vh(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ru(e){this._internalRoot=e}Ql.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,a=ut();rh(n,a,e,t,null,null)},Ql.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rh(e.current,2,null,e,null,null),wl(),t[Zn]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&ph(e)}};var _h=z.version;if(_h!=="19.2.5")throw Error(h(527,_h,"19.2.5"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=w(t),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var ug={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Da=Xl.inject(ug),et=Xl}catch{}}return wi.createRoot=function(e,t){if(!D(e))throw Error(h(299));var n=!1,a="",i=Er,l=Mr,o=jr;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=uh(e,1,!1,null,null,n,a,null,i,l,o,vh),e[Zn]=t.current,Zs(e),new ru(t)},wi.hydrateRoot=function(e,t,n){if(!D(e))throw Error(h(299));var a=!1,i="",l=Er,o=Mr,s=jr,u=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=uh(e,1,!0,t,n??null,a,i,u,l,o,s,vh),t.context=ch(null),n=t.current,a=ut(),a=Pl(a),i=on(a),i.callback=null,sn(n,i,a),n=a,t.current.lanes=n,Ca(t,n),Ot(t),e[Zn]=t.current,Zs(e),new Ql(t)},wi.version="19.2.5",wi}var Dh;function vg(){if(Dh)return fu.exports;Dh=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(z){console.error(z)}}return p(),fu.exports=bg(),fu.exports}var _g=vg();const kg=Uh(_g),Sg="modulepreload",wg=function(p){return"/"+p},Oh={},Tg=function(z,A,h){let D=Promise.resolve();if(A&&A.length>0){let w=function(q){return Promise.all(q.map(E=>Promise.resolve(E).then(P=>({status:"fulfilled",value:P}),P=>({status:"rejected",reason:P}))))};var ne=w;document.getElementsByTagName("link");const I=document.querySelector("meta[property=csp-nonce]"),O=I?.nonce||I?.getAttribute("nonce");D=w(A.map(q=>{if(q=wg(q),q in Oh)return;Oh[q]=!0;const E=q.endsWith(".css"),P=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${q}"]${P}`))return;const fe=document.createElement("link");if(fe.rel=E?"stylesheet":Sg,E||(fe.as="script"),fe.crossOrigin="",fe.href=q,O&&fe.setAttribute("nonce",O),document.head.appendChild(fe),E)return new Promise((Te,ve)=>{fe.addEventListener("load",Te),fe.addEventListener("error",()=>ve(new Error(`Unable to preload CSS for ${q}`)))})}))}function R(I){const O=new Event("vite:preloadError",{cancelable:!0});if(O.payload=I,window.dispatchEvent(O),!O.defaultPrevented)throw I}return D.then(I=>{for(const O of I||[])O.status==="rejected"&&R(O.reason);return z().catch(R)})};function zg(p={}){const{immediate:z=!1,onNeedRefresh:A,onOfflineReady:h,onRegistered:D,onRegisteredSW:R,onRegisterError:ne}=p;let I,O;const w=async(E=!0)=>{await O};async function q(){if("serviceWorker"in navigator){if(I=await Tg(async()=>{const{Workbox:E}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:E}},[]).then(({Workbox:E})=>new E("/sw.js",{scope:"/",type:"classic"})).catch(E=>{ne?.(E)}),!I)return;I.addEventListener("activated",E=>{(E.isUpdate||E.isExternal)&&window.location.reload()}),I.addEventListener("installed",E=>{E.isUpdate||h?.()}),I.register({immediate:z}).then(E=>{R?R("/sw.js",E):D?.(E)}).catch(E=>{ne?.(E)})}}return O=q(),w}const Ag=`---
title: "BÃ² LÃºc Láº¯c (Shaking Beef)"
source: "https://cooking.nytimes.com/recipes/6961-bo-luc-l-c-shaking-beef?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Mark Bittman"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - easy
  - weeknight
  - times classics
  - main course
tags:
  - beef
  - beef tenderloin
  - fish sauce
  - lime
  - red onion
  - rice wine vinegar
  - soy sauce
  - watercress
  - Asian
cuisine: "asian"
image: "https://static01.nyt.com/images/2026/02/17/multimedia/17FD-shaking-beef-wvbk/17FD-shaking-beef-wvbk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# BÃ² LÃºc Láº¯c (Shaking Beef)

> Source: https://cooking.nytimes.com/recipes/6961-bo-luc-l-c-shaking-beef?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This savory-sweet stir-fry, known as bò lúc lắc or “dice” in Vietnamese, gets its English name from the constant shaking of the pan performed by the cook while browning the meat. It can be tough work to move the hot wok constantly, and the intense heat can burn the ingredients in a wink. This recipe, adapted from the one served at Slanted Door, Charles Phan’s immensely popular Vietnamese restaurant in San Francisco, has been simplified for the home cook. Once the meat is marinated, it is quick work – 20 minutes from start to finish – but don’t try to expedite matters further by dumping all of the meat into the wok at once. Cook the meat in two batches (a pound at a time) so you get a nice, crisp sear.

## Ingredients
- 1 1/2 to 2 pounds beef tenderloin (filet mignon), trimmed of excess fat and cut into 1-inch cubes
- 2 tablespoons chopped garlic
- 2 tablespoons sugar
- Salt and pepper
- 5 tablespoons neutral oil, like corn or canola
- 1/4 cup rice-wine vinegar
- 1/4 cup rice or white wine
- 3 tablespoons soy sauce
- 1 tablespoon fish sauce
- 1 red onion, peeled and sliced thin
- 3 scallions, trimmed and cut in 1-inch lengths
- 2 tablespoons butter
- 2 bunches watercress, washed and dried, or 1 head red leaf lettuce, washed, dried and separated into leaves
- 2 limes, cut into wedges

## Instructions
1. Marinate meat with garlic, half the sugar, 1 teaspoon salt, 1/4 teaspoon pepper and 1 tablespoon oil for about 2 hours. (Refrigerate if your kitchen is very warm.) Meanwhile, combine vinegar, remaining sugar, wine, soy sauce and fish sauce. Taste, and add salt and pepper if necessary. Mix about 1 tablespoon salt and 1 teaspoon pepper in a small bowl.
2. Divide the meat into 2 portions, and do the same with the onion and scallions. Put a wok or a large skillet over maximum heat, and add about 2 tablespoons oil. When the oil smokes, add the meat in one layer. Let it sit until a brown crust forms, and turn to brown the other side. Browning should take less than 5 minutes. Add half the onion and half the scallions, and cook, stirring, about 30 seconds. Add about half the vinegar mixture, and shake pan to release the beef, stirring if necessary. Add half the butter, and shake pan until butter melts. Remove meat, and repeat.
3. Serve beef over watercress or lettuce leaves, passing salt and pepper mixture and lime wedges at the table.

## Tags
- beef
- beef tenderloin
- fish sauce
- lime
- red onion
- rice wine vinegar
- soy sauce
- watercress
- Asian

## Notes
`,Eg=`---
title: "Baked Wild Salmon"
source: "https://cooking.nytimes.com/recipes/1025455-baked-wild-salmon?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT55M"
total_time: "PT1H"
categories:
  - brunch
  - dinner
  - lunch
  - weeknight
  - seafood
  - main course
tags:
  - five ingredient
  - wild salmon
cuisine: ""
image: "https://static01.nyt.com/images/2024/05/30/multimedia/30cookedwildsalmon-kqbt/as-baked-wild-salmon-kqbt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Baked Wild Salmon

> Source: https://cooking.nytimes.com/recipes/1025455-baked-wild-salmon?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This two-step method allows you to enjoy the robust flavor of wild salmon without fear of dry fish. Because it has more collagen and less fat than farmed salmon, wild salmon has firmer flesh and is easier to overcook. This method works for all sizes and types of wild salmon, including those long, gorgeous, red sides of sockeye, which can be tricky to maneuver in a skillet or over grill grates. Wild salmon can stand up to punchy accouterments or be adorned more simply; add juiciness with a squeeze of lemon, dollop of Greek yogurt or another sauce.

## Ingredients
- ¼ cup kosher salt (such as Diamond Crystal) or 2 tablespoons fine sea salt, plus more if needed
- 1½ pounds wild salmon, such as coho, king or sockeye, cut in fillets or kept whole
- Extra-virgin olive oil or unsalted butter, for greasing and cooking
- Black pepper
- Lemon wedges, plain Greek yogurt, flaky sea salt or a combination (optional), for serving

## Instructions
1. In a sheet pan or baking dish that fits your salmon, use a fork to stir together the salt and 4 cups water until the salt has dissolved. Add the salmon skin side up. If the flesh isn’t submerged, add another cup of water and tablespoon salt; it’s OK if the skin isn’t submerged. Let sit at room temperature for 15 to 30 minutes while you prepare the rest of your meal.
2. Heat the oven to 275 degrees.
3. Drain and pat dry the salmon and pan. Line or grease the pan, then add the salmon skin side down. Drizzle with olive oil or dot with a few thin slices of butter. Season with black pepper.
4. Bake for 10 to 35 minutes depending on the size and type of your fish; the fish should be opaque at the edges but still slightly wet and translucent in the center (the salmon will continue to cook out of the oven). The thickest part should register between 115 and 120 degrees. Serve with a squeeze of lemon, dollop of Greek yogurt or sprinkle of flaky salt, or a combination, as you like.

## Tags
- five ingredient
- wild salmon

## Notes
`,Mg=`---
title: "Banana Cake With Caramel Glaze"
source: "https://cooking.nytimes.com/recipes/775578478-banana-cake-with-caramel-glaze?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Kayla Hoang"
yield: "10 servings"
prep_time: "PT0H10M"
cook_time: "PT0H60M"
total_time: "PT1H10M"
categories:
  - Cake
  - Dessert
tags:
  - Banana
  - Buttermilk
  - Easy
  - One Bowl
  - Make-Ahead
  - Bake
  - Vegetarian
cuisine: "British Inspired"
image: "https://static01.nyt.com/images/2026/04/07/multimedia/KH-Banana-caramel-cake-1-vtcw/KH-Banana-caramel-cake-1-vtcw-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Banana Cake With Caramel Glaze

> Source: https://cooking.nytimes.com/recipes/775578478-banana-cake-with-caramel-glaze?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This plush banana cake is finished with a sticky, caramel-like glaze, nodding to the filling in banoffee pie. Similarly to the pie, canned or jarred dulce de leche stands in for homemade caramel and provides a softly sweet, milky flavor that pairs well with the fruity cake. The speedy one-bowl batter uses a combination of oil, buttermilk and dulce de leche to keep the cake moist. Powdered sugar and milk transform more dulce de leche into a glossy glaze while an extra splash of vanilla and salt amplifies its flavor. Though the cake holds its own, a nod to the pie in the form of a dollop of whipped cream and flourish of shaved chocolate wouldn’t be out of place.

## Ingredients
- ¼ cup/50 grams canola or vegetable oil, plus more for greasing the pan
- ⅔ cup/142 grams granulated sugar
- ½ teaspoon baking powder
- ¼ teaspoon baking soda
- Kosher salt, such as Diamond Crystal
- ½ cup/144 grams dulce de leche, divided
- ⅓ cup/70 grams buttermilk
- 1 large egg
- 1¾ teaspoons vanilla extract, divided
- ⅔ cup/175 grams mashed banana (from about 2 ripe bananas)
- 1¼ cups/162 grams all-purpose flour
- ¼ cup/28 grams powdered sugar
- 1¾ teaspoons milk (any kind)
- Whipped cream and chocolate shavings, for serving (optional)

## Instructions
1. Heat the oven to 350 degrees. Lightly grease an 8-inch round cake pan with oil and line the bottom with parchment paper.
2. In a large bowl, whisk together the granulated sugar, baking powder, baking soda and ¼ teaspoon salt. Add the oil, ¼ cup/72 grams dulce de leche, the buttermilk, egg and 1½ teaspoons vanilla and whisk until smooth. Add the mashed banana and whisk to combine.
3. Add the flour, sifting into the bowl if lumpy. Using a flexible spatula, fold until just combined and no dry bits remain. Scrape the batter into the prepared pan and smooth into an even layer.
4. Bake until a toothpick inserted into the center comes out clean (a few loose crumbs are OK, but not wet crumbs or batter), about 30 minutes. Cool the cake slightly in its pan on a wire rack, about 10 minutes. Run a thin paring knife or offset spatula around the cake to loosen it, then flip the cake out of the pan, remove the parchment and place it rounded-side up directly on the rack to cool completely.
5. While the cake cools, make the glaze: In a bowl or glass measuring cup with a spout, whisk together the powdered sugar, milk, a pinch of salt and the remaining ¼ cup/72 grams dulce de leche and ¼ teaspoon vanilla until smooth. (For a thicker glaze, start with 1 teaspoon milk. Add more milk, ¼ teaspoon at a time, until you reach your desired consistency.) Keep covered until ready to use.
6. Transfer the cake to a serving platter. Spoon and spread the dulce de leche glaze over the top of the cake, pushing it out to the edge and letting it drip down the sides as desired. Let set, about 10 minutes (the topping will remain sticky).
7. Serve in slices, with whipped cream and chocolate shavings if desired. Leftover cake can be stored covered in an airtight container or on a cake stand at room temperature for up to 4 days.

## Tags
- Banana
- Buttermilk
- Easy
- One Bowl
- Make-Ahead
- Bake
- Vegetarian

## Notes
`,jg=`---
title: "Braised Chicken With Rosemary and Crispy Artichokes"
source: "https://cooking.nytimes.com/recipes/1027735-braised-chicken-with-rosemary-and-crispy-artichokes?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "David Tanis"
yield: "6 servings"
prep_time: "PT40M"
cook_time: "PT1H30M"
total_time: "PT2H10M"
categories:
  - dinner
  - poultry
  - main course
tags:
  - baby artichoke
  - chicken leg
  - dry white wine
  - make-ahead
  - party
  - rosemary
  - dairy-free
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2026/03/05/multimedia/05FD-TANISREX2-DT-Chicken-with-artichokes-bkgq/05FD-TANISREX2-DT-Chicken-with-artichokes-bkgq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Braised Chicken With Rosemary and Crispy Artichokes

> Source: https://cooking.nytimes.com/recipes/1027735-braised-chicken-with-rosemary-and-crispy-artichokes?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Whole bone-in chicken legs make an impressive presentation for this flavorful braise. Baby artichokes, a springtime treat, can be found in the produce department of many supermarkets. Easy baked polenta makes an ideal accompaniment, but the chicken can also be served with rice or mashed potatoes.

## Ingredients
- 6 large chicken legs (leg and thigh attached)
- Salt and black pepper
- 3 tablespoons plus ¼ cup extra virgin olive oil
- 1 medium onion, diced
- 2 tablespoons tomato paste
- 4 large garlic cloves, minced
- 2 tablespoons all-purpose flour
- 2 cups dry white wine
- 4 cups chicken broth
- 3 rosemary sprigs
- 2 pounds baby artichokes, trimmed and halved or quartered, about 24 pieces
- 1 cup chopped parsley
- ¼ cup chopped mint
- 2 tablespoons chopped capers
- 2 tablespoons lemon zest (from about 2 large lemons)
- Pinch of crushed red pepper
- Baked polenta, optional, for serving

## Instructions
1. Season chicken legs with salt and pepper generously on both sides. Place in a roasting pan in one layer. Heat oven to 350 degrees.
2. Set a deep skillet over medium-high heat. Add 3 tablespoons olive oil. When oil is wavy, add onions and cook, stirring, until softened and lightly browned, 5 to 10 minutes. Stir in tomato paste, then garlic and flour. Cook, stirring until mixture dries out a bit, about 5 minutes.
3. Add white wine and raise heat. Stir as mixture thickens, then add chicken broth and bring to a brisk simmer. Pour contents of skillet to barely cover chicken in roasting pan. Scatter rosemary sprigs over the top.
4. Roast, uncovered — exposed chicken skin should brown — until meat is quite tender when probed with a fork and legs are mahogany colored, about 1 hour. Pan juices should have reduced to a gravylike consistency. If not, remove chicken to a platter and return roasting pan to oven until juices thicken. (Alternatively, pour juices into a saucepan and briefly reduce over high heat.)
5. Meanwhile, heat ¼ cup olive oil in a wide skillet over high. When oil is wavy, carefully add artichokes to pan, watching out for splatters. Turn heat to medium and cook, allowing artichokes to slowly crisp. Continue cooking, flipping and stirring until all are crisp and golden, 10 to 15 minutes. Remove artichoke and place on paper towels to drain. Sprinkle with salt.
6. Spoon sauce and artichokes over chicken.
7. Combine parsley, mint, capers and lemon zest. Add a pinch of salt and a pinch of crushed red pepper. Sprinkle mixture over everything. Serve with polenta.

## Tags
- baby artichoke
- chicken leg
- dry white wine
- make-ahead
- party
- rosemary
- dairy-free
- spring

## Notes
`,Dg=`---
title: "Buttered Cabbage and Eggs"
source: "https://cooking.nytimes.com/recipes/775157090-buttered-cabbage-and-eggs?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Christian Reynoso"
yield: "1 to 2 servings"
prep_time: "PT0H5M"
cook_time: "PT0H15M"
total_time: "PT0H20M"
categories:
  - Egg Dish
  - Vegetables
  - Breakfast
  - Lunch
  - Main Course
tags:
  - Unsalted Butter
  - Cabbage
  - Dill
  - Egg
  - For One
  - For Two
  - Skillet
  - Easy
  - Five Ingredient
  - One Pot
  - Quick
  - Weeknight
  - Budget
  - Stovetop
  - Saute
  - Gluten-Free
  - Vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/03/multimedia/CR-Eggs-in-Cabbage-jqpg/CR-Eggs-in-Cabbage-jqpg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Buttered Cabbage and Eggs

> Source: https://cooking.nytimes.com/recipes/775157090-buttered-cabbage-and-eggs?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Pure and light with a tender buttery crunch, this delicate breakfast or lunch starts with some pretty hearty ingredients. Salted cabbage is gently sautéed in butter until it softens and becomes glossy while keeping its color, then dill is stirred in for its gentle perfume. The eggs are cracked in and steamed, covered, until the whites are just set and the yolks are still somewhat runny, begging for buttered toast. If you want this to serve 4, double everything. If you only want to cook 1 egg, halve the recipe and use an 8-inch skillet.

## Ingredients
- 2 tablespoons unsalted butter
- 3 tightly packed cups thinly sliced cabbage, such as green, Napa or Savoy, (5 to 7 ounces)
- Salt
- 2 sprigs fresh dill, roughly torn
- 2 large eggs
- Freshly ground white or black pepper
- Flaky salt
- Lemon wedges, for serving

## Instructions
1. Add the butter to a medium (10-inch) skillet over medium heat and swirl the pan to help the butter melt. Once fully melted, add the cabbage and a big pinch of salt. With tongs, toss the cabbage well to gloss it with the butter.
2. Cook the cabbage, tossing frequently, until it’s translucent, mostly softened and a soft celery-green (not browned), 4 to 5 minutes. Stir in 2 tablespoons of water, then toss in the dill.
3. Using the tongs, make 2 wells in the cabbage. Crack an egg into each well. Adjust the heat to medium-low, cover and cook until the eggs are cooked to your liking, 4 to 7 minutes for medium with just a little bit of runny yolk. Remove from the heat. To serve, season with pepper and flaky salt and squeeze some lemon juice over everything.

## Tags
- Unsalted Butter
- Cabbage
- Dill
- Egg
- For One
- For Two
- Skillet
- Easy
- Five Ingredient
- One Pot
- Quick
- Weeknight
- Budget
- Stovetop
- Saute
- Gluten-Free
- Vegetarian

## Notes
`,Og=`---
title: "Cheesy Gnocchi With Corn and Pesto"
source: "https://cooking.nytimes.com/recipes/759796803-cheesy-gnocchi-with-corn-and-pesto"
author: "Carolina Gelen"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H15M"
total_time: "PT0H25M"
categories:
  - Casseroles
  - Dinner
  - Main Course
  - Pastas
  - Kid-Friendly
tags:
  - Gnocchi
  - Corn
  - Pesto
  - Mozzarella
  - Summer
  - Easy
  - Five Ingredient
  - Budget
  - Weeknight
  - Quick
  - One Pot
  - Skillet
  - Broil
  - Vegetarian
  - Sear
cuisine: ""
image: "https://static01.nyt.com/images/2025/10/07/multimedia/cg-cheesy-gnocchi-skillet-pzvk/cg-cheesy-gnocchi-skillet-pzvk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cheesy Gnocchi With Corn and Pesto

> Source: https://cooking.nytimes.com/recipes/759796803-cheesy-gnocchi-with-corn-and-pesto

## Description
Tasty and effortless, store-bought gnocchi offers a much-needed shortcut for busy weeknight dinners. You can bypass boiling a pot of water for the gnocchi, and instead simply give them a quick sear over high heat, which creates perfectly crispy edges. Toss the crispy gnocchi with lots of sweet, fresh corn kernels, prepared pesto and a hefty sprinkle of grated cheese, and broil until the cheese gets bubbly, gooey and slightly charred in spots. The molten cheese brings all the ingredients together, but a high ratio of corn to dumpling and the bright basil in the pesto keep this dish light enough for summer.

## Ingredients
- 3 tablespoons extra-virgin olive oil
- 1 pound shelf-stable gnocchi
- About 3 cups canned or fresh corn kernels (from two 15-ounce cans or about 4 fresh cobs)
- ½ cup store-bought or homemade pesto, plus more for topping
- Salt and pepper
- 8 ounces grated whole-milk, low-moisture mozzarella

## Instructions
1. In a 12-inch skillet over medium-high heat, heat the oil until sizzling hot, about 2 minutes. Add the gnocchi and sear, undisturbed, for 4 minutes, until crispy underneath.
2. Add the corn and cook, stirring occasionally, for 2 minutes, until softened. Remove from the heat.
3. Stir in the pesto. Season with salt as needed, and add a few cracks of black pepper.
4. Place an oven rack underneath the broiler. Set the broiler to high.
5. Top the gnocchi and corn with the cheese. Place the skillet underneath the broiler and broil for about 4 minutes, until the cheese is completely melted and slightly charred on top.
6. Top with more pesto and divide among bowls.

## Tags
- Gnocchi
- Corn
- Pesto
- Mozzarella
- Summer
- Easy
- Five Ingredient
- Budget
- Weeknight
- Quick
- One Pot
- Skillet
- Broil
- Vegetarian
- Sear

## Notes
`,Cg=`---
title: "Chile Crisp Chicken Cutlets"
source: "https://cooking.nytimes.com/recipes/1025207-chile-crisp-chicken-cutlets?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Christian Reynoso"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT30M"
total_time: "PT40M"
categories:
  - dinner
  - quick
  - weeknight
  - poultry
  - main course
tags:
  - chicken breast
  - chile crisp
  - panko
  - red wine vinegar
  - soy sauce
  - stovetop
cuisine: ""
image: "https://static01.nyt.com/images/2024/03/26/multimedia/CR-soy-chile-crisp-chicken-cutlets-pzth/CR-soy-chile-crisp-chicken-cutlets-pzth-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chile Crisp Chicken Cutlets

> Source: https://cooking.nytimes.com/recipes/1025207-chile-crisp-chicken-cutlets?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83

## Description
These savory, tangy, spicy chicken cutlets get their zest from an easy marinade of chile crisp, soy sauce and red wine vinegar. This recipe upgrades the standard breading procedure — flour, egg and bread crumbs — by whisking the excess marinade and eggs together, creating another layer of flavor before the chicken is encrusted in crunchy bread crumbs. If time permits, leave the breaded cutlets in the refrigerator for at least an hour before frying to help create a durable crust and allow the marinade to more fully season the chicken. If you like, serve with a vibrant side of lightly wilted spinach and wedges of lemon.

## Ingredients
- 3 tablespoons chile crisp (store-bought or homemade), plus more for serving&nbsp;&nbsp;
- 3 tablespoons soy sauce, plus more for serving
- 3 tablespoons red wine vinegar
- 2 tablespoons granulated sugar
- 2 teaspoons kosher salt (such as Diamond Crystal) or ¾ teaspoon fine sea salt
- 4 to 6 thin-sliced boneless, skinless chicken breasts (1¼ to 1½ pounds), see Tip
- 1 1/2 cups panko bread crumbs
- 1/2 cup all-purpose flour
- Canola, grapeseed or other high-heat-friendly oil, for frying
- 2 large eggs
- Wilted spinach and lemon wedges (both optional), for serving

## Instructions
1. In a medium bowl, whisk together the chile crisp, soy sauce, vinegar, sugar and salt to dissolve sugar and salt. Add the chicken to the bowl and turn to coat. (Chicken can sit refrigerated, covered, in the marinade for up to 8 hours.)
2. Meanwhile, place panko in a wide, shallow bowl or plate; place flour in another shallow dish. One at a time, lift a cutlet out of the bowl, let excess marinade drip back in, then dip in flour to coat all over.
3. Whisk eggs into remaining marinade. Working with one cutlet at a time, shake off excess flour then dip it in the eggy marinade to coat. Shake off excess, then dip both sides in panko and transfer to a rimmed baking sheet. Repeat with remaining cutlets.
4. In a 10-inch skillet, heat about 1/4 inch of oil over medium. Line a plate with paper towels. Once oil is hot (a piece of panko dropped into the pan should sizzle immediately), fry two cutlets at a time until golden-brown underneath, 2 to 3 minutes. Turn cutlets over and continue frying until golden-brown with an orange tint all over. Transfer to prepared plate and sprinkle lightly with salt all over. Repeat with the remaining cutlets.
5. Serve the cutlets hot, with wilted greens, lemon wedges and more chile crisp and soy, if desired.

## Tags
- chicken breast
- chile crisp
- panko
- red wine vinegar
- soy sauce
- stovetop

## Notes
`,Ng=`---
title: "Citrus Salad With Fennel and Olives"
source: "https://cooking.nytimes.com/recipes/1023877-citrus-salad-with-fennel-and-olives?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83"
author: "David Tanis"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - appetizer
tags:
  - citrus
  - fennel
  - grapefruit
  - olive
  - orange
  - party
  - red onion
  - salad
  - shallot
  - vegan
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2023/02/01/multimedia/25tanisrex1-salad-zlfw/25tanisrex1-salad-zlfw-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Citrus Salad With Fennel and Olives

> Source: https://cooking.nytimes.com/recipes/1023877-citrus-salad-with-fennel-and-olives?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83

## Description
An orange salad can be a simple affair. Add sliced oranges, a few black olives and a drizzle of oil, and it’s a winning combination, known throughout the eastern Mediterranean, southern Italy and perhaps especially in Morocco. You can up the interest factor in any number of ways. Add thinly sliced fennel and red onion, some arugula, mint or basil leaves, a sprinkling of red pepper, a pinch of wild oregano or a little flaky salt. The salad needn’t be restricted to only navel oranges. In season, blood oranges, Cara Cara oranges or grapefruit are welcome to join.

## Ingredients
- 4 navel oranges
- 4 blood oranges
- 2 small ruby or Oro Blanco grapefruits
- 2 large shallots or 1/2 small red onion, thinly sliced into rings
- 2 small fennel bulbs, trimmed and thinly sliced into rings
- 1/4 cup pitted olives, Moroccan oil-cured black or Castelvetrano green olives
- 6 tablespoons extra-virgin olive oil, plus more to taste
- 1 handful mint or basil leaves
- Pinch of red-pepper flakes, such as Marash
- Pinch of dried oregano, preferably wild
- Flaky salt, for finishing

## Instructions
1. To peel the citrus fruit, using a small serrated knife, cut off a thin slice of peel from the top and bottom of the orange, so it sits flat and securely on the cutting board. Cut from top to bottom, following the curve of the fruit. Remove only the peel and white pith, not the flesh of the orange. It should be perfectly spherical and naked.
2. Slice navels and blood oranges crosswise into thin slices, picking out seeds if needed. Use a paring knife to section the grapefruit into suprèmes, cutting between the membranes. Reserve any citrus juices obtained in the process.
3. To serve, arrange citrus on a serving platter or on individual plates. Scatter the shallot slices over the fruit, then add thinly sliced fennel and olives. Drizzle with olive oil, about 1 tablespoon per serving, and any reserved juices. Garnish with mint or basil leaves. Sprinkle with red pepper, oregano and a prudent amount of flaky salt.

## Tags
- citrus
- fennel
- grapefruit
- olive
- orange
- party
- red onion
- salad
- shallot
- vegan
- winter

## Notes
`,xg=`---
title: "Citrusy Roasted Salmon and Potatoes"
source: "https://cooking.nytimes.com/recipes/1023128-citrusy-roasted-salmon-and-potatoes?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Naz Deravian"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - brunch
  - dinner
  - lunch
  - seafood
  - main course
tags:
  - clementines
  - partial-access-ic
  - potato
  - salmon
cuisine: ""
image: "https://static01.nyt.com/images/2022/04/13/dining/nd-citrusy-roasted-salmon-and-potatoes/nd-citrusy-roasted-salmon-and-potatoes-videoSixteenByNineJumbo1600-v3.jpg"
date_saved: "2026-04-16"
---

# Citrusy Roasted Salmon and Potatoes

> Source: https://cooking.nytimes.com/recipes/1023128-citrusy-roasted-salmon-and-potatoes?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Citrus-dressed salmon roasted over potatoes is a quick, flavorful one-pan meal that is perfect for any night of the week. Skin-on Yukon Golds are thinly sliced, fanned out and generously drizzled with a citrus sauce to serve as the base for the meal. The salmon is placed directly on top of the potatoes after they’re briefly roasted, the fish is drizzled with more sauce, then everything roasts together until the salmon is tender and the potatoes are perfectly cooked through and irresistibly tangy. Feel free to swap out the cilantro for any fresh herb you prefer, such as dill or parsley.

## Ingredients
- 1/2 cup extra-virgin olive oil
- 1/3 cup fresh clementine or mandarin juice, plus 1 clementine or mandarin, sliced into ¼-inch-thick rounds, for garnish
- 1/4 cup fresh lime juice
- 1/4 cup chopped cilantro leaves and tender stems
- 1 shallot, chopped
- 2 large garlic cloves, finely grated
- 2 large Yukon Gold potatoes (about 1 pound)
- Kosher salt and black pepper
- Red-pepper flakes, to taste
- 1 1/2 pounds skin-on salmon fillet (preferably 1 single center-cut piece)

## Instructions
1. Set a rack in the center of the oven and heat the oven to 425 degrees.
2. In a medium bowl, combine the olive oil, clementine or mandarin juice, lime juice, cilantro, shallot and garlic; set aside citrus sauce.
3. Scrub the potatoes and slice them into ¼-inch-thick rounds. In a large (12-inch) cast-iron skillet (or similar oven-safe pan), fan out the potato rounds, overlapping them a little, to cover the surface of the skillet. Season well with salt (about 1 to 1½ teaspoons) and black pepper to taste. Sprinkle on a few red-pepper flakes. Stir the oil and citrus juice mixture to combine again, and spoon half of the sauce over the potatoes. Place the skillet in the oven and roast for 20 minutes, until the edges start to turn golden.
4. Remove the skillet from the oven, season the salmon well with salt (about 1½ teaspoons) and pepper to taste and place the salmon on top of the potatoes, skin side down. Sprinkle with a few more red-pepper flakes. Spoon the rest of the citrus sauce over the salmon and top the fish with the citrus slices. Place the skillet back in the oven and roast until the salmon is cooked through to your liking, 10 to 20 minutes, depending on the thickness of the salmon.

## Tags
- clementines
- partial-access-ic
- potato
- salmon

## Notes
`,Hg=`---
title: "Crispy Gnocchi With Spinach and Feta"
source: "https://cooking.nytimes.com/recipes/1025701-crispy-gnocchi-with-spinach-and-feta?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT20M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - one pot
  - pastas
  - main course
tags:
  - cast iron
  - feta
  - full-access-ic-2025-09
  - gnocchi
  - salad
  - skillet
  - spinach
  - stovetop
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/08/20/multimedia/hm-crispy-gnocchi-with-spinach-and-fetarex-wjzp/hm-crispy-gnocchi-with-spinach-and-fetarex-wjzp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Crispy Gnocchi With Spinach and Feta

> Source: https://cooking.nytimes.com/recipes/1025701-crispy-gnocchi-with-spinach-and-feta?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Inspired by the herbaceous and jaunty flavors of spanakopita, the savory, ever popular Greek pie, spinach and feta headline this textural gnocchi salad. The spinach is not cooked, but is simply massaged, which softens it while ensuring it maintains its leafy structure. Incorporating some feta to the spinach massage is a functional move — the salt in the feta helps to tenderize the leaves — but it also adds a hint of quiet luxury to this dish, as the leaves become coated with the creamy, briny cheese. Be heavy-handed with your herbs and lemon, as these bring boldness and freshness that play off the saltiness of the feta. Everyday shelf-stable gnocchi from your local supermarket is perfect for crisping in the pan; if you choose to use frozen variety, no defrosting is required.

## Ingredients
- 5 ounces baby spinach
- 6 ounces Greek feta, crumbled (about 1 cup)
- 1 lemon, halved
- 5 tablespoons extra-virgin olive oil
- Salt and pepper
- 1 (16- to 17-ounce) package potato gnocchi (shelf-stable, fresh or frozen)
- 1/4 to 1/2 teaspoon crushed red pepper
- 2 scallions, thinly sliced
- Big handful of chopped dill
- Big handful of chopped mint

## Instructions
1. Place the spinach into a large bowl. Add half of the feta, juice of 1/2 lemon, 1 tablespoon of olive oil and a big pinch of salt; rub the ingredients vigorously into the spinach to tenderize it. Leave to sit and soften further while you cook the gnocchi.
2. Heat a large (about 12-inch) cast-iron or nonstick skillet over medium-high; add 2 tablespoons of olive oil. Add the gnocchi to the pan, breaking up any that are stuck together. Cook for 8 to 10 minutes, tossing every 2 minutes, until golden and crispy all over. Allow to cool in the pan for 5 minutes; they will further crisp as they cool.
3. Add the gnocchi to the spinach, along with the red pepper, scallions, dill and mint. Drizzle with about 2 tablespoons of olive oil, add the remaining crumbled feta and toss to combine. Squeeze the remaining lemon juice over top and serve.

## Tags
- cast iron
- feta
- full-access-ic-2025-09
- gnocchi
- salad
- skillet
- spinach
- stovetop
- vegetarian

## Notes
`,Bg=`---
title: "Crispy Tofu Tacos"
source: "https://cooking.nytimes.com/recipes/1026900-crispy-tofu-tacos?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Alexa Weibel"
yield: "8 to 10 tacos"
prep_time: "PT15M"
cook_time: "PT1H"
total_time: "PT1H15M"
categories:
  - dinner
  - easy
  - weeknight
  - tacos
  - main course
tags:
  - dairy-free
  - healthy
  - vegetarian
  - firm tofu
  - tomato paste
  - tortilla
cuisine: ""
image: "https://static01.nyt.com/images/2025/05/28/multimedia/aw-crispy-tofu-tacos-vlbh/aw-crispy-tofu-tacos-vlbh-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Crispy Tofu Tacos

> Source: https://cooking.nytimes.com/recipes/1026900-crispy-tofu-tacos?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
There are plenty of crispy tofu recipes, but few truly deliver on the promise, since tofu has a tendency to steam because of its high moisture content. But time can do the trick in the oven, creating brittle edges and a chewy texture with little effort. Squeeze out as much excess liquid as you can from your block of tofu, grate it coarsely, season it fearlessly, then roast it until sizzling. The key step is to drizzle the tofu with a combination of olive oil and tomato paste toward the end of cooking, which crisps the edges and lends a deep umami flavor, so much so that this tofu could almost be mistaken for seasoned ground beef. A swipe of avocado mayo, loosened with lime juice and electrified with zest, adds richness and tang, and quite literally holds the tacos together. Choose your mayonnaise and tortillas wisely and the whole dish is vegan.

## Ingredients
- 2 (14- to 16-ounce) blocks firm tofu
- 1/4 cup plus 3 tablespoons olive oil, divided
- 2 tablespoons soy sauce
- 2 teaspoons ground cumin
- 1 teaspoon smoked paprika
- 1/2 teaspoon garlic powder
- 1/2 teaspoon onion powder
- 1/4 to 1/2 teaspoon ground cayenne (the lower end is mild; the higher end tingly but not spicy)
- Salt and black pepper
- 1/4 cup tomato paste
- 2 ripe avocados
- 2 tablespoons mayonnaise (vegan, if desired)
- 1/2 teaspoon finely grated lime zest and 3 tablespoons juice
- 8 flour or 10 corn tortillas, warmed
- Minced red onion, thinly sliced radishes and chopped cilantro, for serving

## Instructions
1. Heat the oven to 400 degrees.
2. Prepare your tofu: Drain it, squeezing out any excess moisture over the sink (your tofu may break into chunks). Coarsely grate the drained tofu onto two large (11-by-17-inch), foil-lined sheet pans. (The tofu will crumble chaotically, and that is fine!) Drizzle the tofu in each pan with 2 tablespoons olive oil and 1 tablespoon soy sauce. In a small bowl, mix the cumin, paprika, garlic powder, onion powder, cayenne, 1 teaspoon salt and 1 teaspoon pepper; sprinkle half the seasonings over each pan and toss to coat. Spread the mixture in an even layer.
3. Roast the tofu, stirring halfway through and rotating the pans, until the tofu sizzles, darkens and crisps, 30 to 35 minutes.
4. In a small bowl, mix together the tomato paste with the remaining 3 tablespoons oil. Drizzle the mixture over the tofu, adding half to each pan, then toss to combine, spread into an even layer and roast again until the tofu audibly crackles and develops a slight crunch, 10 to 15 minutes.
5. While the tofu roasts, prepare the avocado cream: In a small food processor (or blender), blend the avocados, mayo, lime zest and juice until creamy; season generously with salt.
6. Swipe the warmed tortillas with the avocado cream, then top with tofu mixture, red onion, radishes and cilantro. Serve immediately.

## Tags
- dairy-free
- healthy
- vegetarian
- firm tofu
- tomato paste
- tortilla

## Notes
`,Rg=`---
title: "Crispy Tofu With Cashews and Blistered Snap Peas"
source: "https://cooking.nytimes.com/recipes/1021200-crispy-tofu-with-cashews-and-blistered-snap-peas?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - weeknight
  - beans
  - main course
tags:
  - cashew
  - cast iron
  - coconut milk
  - extra-firm tofu
  - firm tofu
  - fresh ginger
  - skillet
  - sugar snap pea
  - dairy-free
  - vegan
  - vegetarian
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2020/07/01/dining/26tofurex1/26tofurex1-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Crispy Tofu With Cashews and Blistered Snap Peas

> Source: https://cooking.nytimes.com/recipes/1021200-crispy-tofu-with-cashews-and-blistered-snap-peas?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A ginger and coconut milk reduction can coat pretty much anything that browns nicely on its own. Here, it’s pieces of pan-seared tofu, but small morsels of chicken and pork will work just as well. The soy and the teaspoons of molasses give the sauce a little caramelization, and a little shine and gloss. For a fresh side, add some blistered snap peas, tossed with sliced scallions, a little mint and a splash of rice vinegar. Snow peas, green beans, broccoli or asparagus? If it’s fresh and green, it’ll work just fine.

## Ingredients
- 1 (14-ounce) block firm or extra-firm tofu, drained
- 3 tablespoons neutral oil, such as grapeseed, vegetable or canola, plus more as needed
- Kosher salt and black pepper
- 3/4 pound snap peas, trimmed
- 1 (2-inch) piece fresh ginger, peeled and grated (about 2 tablespoons)
- 2 garlic cloves, grated
- 1 (13-ounce) can unsweetened coconut milk (light or full-fat)
- 1 tablespoon soy sauce
- 2 teaspoons molasses, dark brown sugar or honey
- 1/2 cup toasted cashews
- 1 tablespoon rice vinegar
- 4 scallions, trimmed and thinly sliced
- 1/4 cup mint leaves, torn if large
- 1/2 to 1 teaspoon red-pepper flakes (optional)
- Rice or any steamed grain, for serving

## Instructions
1. Slice the tofu in half horizontally, and leave on paper towels to dry any excess liquid.
2. In a medium skillet or cast-iron pan, heat 1 tablespoon oil over medium-high until it shimmers. Season both sides of the tofu with salt and black pepper, place in the pan and sear without moving until tofu is browned and golden on both sides, turning once halfway through, about 8 minutes total. Move the tofu to a plate.
3. Add 1 tablespoon oil to the pan, and add the snap peas. Cook, stirring occasionally, until blistered and just tender, about 3 minutes. Season with salt and move to a bowl.
4. Heat the remaining 1 tablespoon oil, add the ginger and garlic, and cook until fragrant, about 30 seconds. Pour in the coconut milk, soy sauce and molasses. Simmer, stirring frequently until the sauce reduces and its color deepens to a dark brown, about 6 to 8 minutes. It should coat a spoon without running right off. Stir in the cashews, break the tofu into 1-inch pieces and toss in the pan to coat with sauce. Remove from heat, and taste and adjust seasoning, if necessary.
5. Toss the snap peas with the rice vinegar, scallions, mint and red-pepper flakes, if using. Divide among plates, along with the tofu and cashews. Serve with rice or any steamed grain.

## Tags
- cashew
- cast iron
- coconut milk
- extra-firm tofu
- firm tofu
- fresh ginger
- skillet
- sugar snap pea
- dairy-free
- vegan
- vegetarian
- spring

## Notes
`,Ug=`---
title: "Fettuccine Alfredo"
source: "https://cooking.nytimes.com/recipes/9025-elaines-fettuccine-alfredo?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Alex Witchel"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT15M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - egg yolk
  - fettuccine
  - heavy cream
  - kid-friendly
  - parmesan
  - fall
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2026/03/25/multimedia/25FD-elainesfettuccinialfredo-zqbc/25FD-elainesfettuccinialfredo-zqbc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Fettuccine Alfredo

> Source: https://cooking.nytimes.com/recipes/9025-elaines-fettuccine-alfredo?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This recipe came to The Times in a 2004 article about Elaine Kaufman, the founder and proprietress of the famed New York restaurant and celebrity hot spot that bore her name and where this dish was served. There is nothing fancy or complicated about it — it’s glorified macaroni and cheese, really — but it is delicious and deeply satisfying. (Fun fact: Jackie O. was a fan.)

## Ingredients
- Salt
- 2 tablespoons butter
- 1 small clove garlic, finely chopped
- 1 1/2 cups heavy cream
- 1 large egg yolk
- 1 pound fresh fettuccine
- 1 cup freshly grated Parmigiano-Reggiano
- Freshly ground pepper to taste

## Instructions
1. Bring 6 quarts generously salted water to a boil.
2. While the water heats, melt the butter in a large, deep skillet over medium-high heat. Add garlic; sauté until fragrant and sizzling, about 2 minutes. Whisk the cream with the egg yolk in a bowl until blended; pour into the garlic butter. Reduce heat to medium-low; stir until hot but not boiling. Keep warm over low heat.
3. Meanwhile, cook the pasta, partially covered, until al dente. (The pasta will float when it’s done.) Drain in a colander, shaking out excess water, but reserve a little cooking water. Pour hot pasta into the cream mixture and toss to coat (still over low heat). Add the cheese and keep tossing gently until cream is mostly absorbed. Season with salt and pepper. If sauce is absorbed too much, toss with a little pasta water. Serve in warm bowls.

## Tags
- egg yolk
- fettuccine
- heavy cream
- kid-friendly
- parmesan
- fall
- Italian

## Notes
`,qg=`---
title: "Five-Ingredient Creamy Miso Pasta"
source: "https://cooking.nytimes.com/recipes/1020979-five-ingredient-creamy-miso-pasta?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Alexa Weibel"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - one pot
  - pastas
  - main course
tags:
  - butter
  - five ingredient
  - linguine
  - miso
  - parmesan
  - spaghetti
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2020/04/17/dining/17help/aw-miso-pasta-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Five-Ingredient Creamy Miso Pasta

> Source: https://cooking.nytimes.com/recipes/1020979-five-ingredient-creamy-miso-pasta?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This one-pot pasta comes together in minutes, and requires zero prep and minimal cleanup. It builds on the classic combination of pasta, butter and cheese with a spoonful of miso paste for complexity. But you could experiment with using any other condiments or spices you have on hand, such as red pesto, curry paste or ground turmeric in place of the miso. To achieve a silky smooth pasta, you’ll need to put your cacio e pepe skills to work: Vigorously toss the pasta, grated cheese and pasta water together to achieve a properly emulsified sauce. Top with shrimp, edamame, frozen peas or any steamed vegetable. The optional nori or furikake imparts an unexpected flavor of the sea, and it’s worth using if you have it on hand.

## Ingredients
- Kosher salt
- 16 ounces spaghetti, linguine or bucatini
- 6 tablespoons unsalted butter
- 3 tablespoons white (or red) miso
- 4 ounces Parmesan, finely grated (1 packed cup)
- Kizami nori, furikake or thinly sliced seaweed snacks, for garnish (optional)

## Instructions
1. Bring a large pot of salted water to a boil. Add the pasta and cook, stirring occasionally, until al dente. Reserve 1 1/2 cups pasta water, then drain the pasta.
2. Add the butter, miso and 1 1/4 cups pasta water to the pot and whisk over medium heat until miso breaks down and liquid is uniform, 1 to 2 minutes. Add the pasta and Parmesan and cook, stirring vigorously with tongs until cheese is melted and sauce emulsifies. (The key word here is “vigorously.” To achieve a silky smooth pasta instead of a gloppy one, put your cacio e pepe skills to work.)
3. Divide among shallow bowls and sprinkle with nori or furikake, if using.

## Tags
- butter
- five ingredient
- linguine
- miso
- parmesan
- spaghetti
- vegetarian

## Notes
`,Gg=`---
title: "Greek Lemon Potatoes"
source: "https://cooking.nytimes.com/recipes/1020478-greek-lemon-potatoes?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - vegetables
  - side dish
tags:
  - chicken broth
  - five ingredient
  - lemon juice
  - olive oil
  - yukon gold potato
  - thanksgiving
  - Greek
cuisine: "greek"
image: "https://static01.nyt.com/images/2019/09/17/dining/as-lemon-potatoes/as-lemon-potatoes-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Greek Lemon Potatoes

> Source: https://cooking.nytimes.com/recipes/1020478-greek-lemon-potatoes?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83

## Description
For the dreamiest roasted potatoes — with creamy insides and very crispy outsides — follow this classic Greek method of roasting peeled potatoes in equal parts olive oil, lemon juice and chicken stock. The potatoes soak up the flavorful liquid, allowing the insides to remain tender while the outsides crisp in the oven’s high heat. You can follow the same method for russet potatoes, though the final result will be less moist.

## Ingredients
- 1/2 cup chicken broth or water
- 1/2 cup olive oil
- 1/2 cup freshly squeezed lemon juice (from 3 to 4 large lemons)
- 1 tablespoon kosher salt
- 3 pounds large Yukon Gold potatoes (about 6), peeled then halved lengthwise and crosswise
- 1 tablespoon dried oregano (optional)
- Flaky salt and black pepper, for serving

## Instructions
1. Heat the oven to 450 degrees. On a rimmed sheet pan, combine the chicken broth, olive oil, lemon juice and kosher salt. Toss the potatoes in the liquid to coat, then arrange the potatoes in an even layer, cut-sides down. Sprinkle the oregano over the potatoes, if using.
2. Roast the potatoes, flipping halfway through, until fork-tender, dark brown and crispy on top, 55 to 60 minutes. (If the potatoes are cooked through but not as crispy as you’d like, run them under the broiler for a few minutes.) Sprinkle with flaky salt and black pepper as desired.

## Tags
- chicken broth
- five ingredient
- lemon juice
- olive oil
- yukon gold potato
- thanksgiving
- Greek

## Notes
`,Yg=`---
title: "Jammy Eggs With Asparagus and Chipotle"
source: "https://cooking.nytimes.com/recipes/775587947-jammy-eggs-with-asparagus-and-chipotle?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yotam Ottolenghi"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H25M"
total_time: "PT0H35M"
categories:
  - Egg Dish
  - Appetizer
  - Breakfast
  - Brunch
  - Main Course
  - Dinner
  - Lunch
tags:
  - Egg
  - Asparagus
  - Chipotles in Adobo
  - Basil
  - Stovetop
  - Weeknight
  - Spring
  - Gluten-Free
  - Vegetarian
  - Boil
  - Saute
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/08/multimedia/08FD-OTTOLENGHIREX-YO-Jammy-Eggs-with-Asparagus-and-Chipotle-zlfc/08FD-OTTOLENGHIREX-YO-Jammy-Eggs-with-Asparagus-and-Chipotle-zlfc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Jammy Eggs With Asparagus and Chipotle

> Source: https://cooking.nytimes.com/recipes/775587947-jammy-eggs-with-asparagus-and-chipotle?campaign_id=58&emc=edit_ck_20260415&instance_id=174099&nl=cooking&regi_id=197868639&segment_id=218255&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This is a smoky, punchy alternative to deviled eggs, but less dainty and more bold. Soft-boiled eggs are torn open by hand and topped with garlicky asparagus that's been quickly sautéed, then dressed with chipotle in adobo for a hit of heat and depth. A handful of fresh basil brings brightness, while the yolks stay rich and jammy. It’s simple to throw together, served warm or at room temperature, and lands somewhere between a salad and a snack plate.

## Ingredients
- 8 large eggs
- 5 tablespoons olive oil, divided
- 12 ounces asparagus, woody ends removed, stalks cut into 3 even segments
- Fine sea salt
- 5 garlic cloves, thinly sliced
- 1 tablespoon finely chopped canned chipotle in adobo mixed with 1½ tablespoons adobo sauce
- 1 teaspoon maple syrup
- 1 heaping cup roughly chopped basil leaves
- ¼ cup finely grated Parmesan

## Instructions
1. Bring a medium saucepan of water to a boil. Carefully lower in the eggs and boil for 7 minutes. Drain and run under cold water until cool enough to handle, then peel and set aside.
2. Meanwhile, add 3 tablespoons of oil to a large frying pan on high heat. Once hot, add the asparagus and ¼ teaspoon salt and cook until deeply golden in spots, 1 to 2 minutes, then transfer to a bowl.
3. Add the remaining 2 tablespoons of oil and the garlic to the pan and cook for 1 minute more, until golden. Add to the bowl with the asparagus along with the chipotle and maple syrup, and stir to coat. Leave to cool for 10 minutes, then stir in the basil.
4. To serve, peel the eggs and tear or slice them in half. Arrange on a serving plate and spoon over the asparagus mixture, followed by the Parmesan.

## Tags
- Egg
- Asparagus
- Chipotles in Adobo
- Basil
- Stovetop
- Weeknight
- Spring
- Gluten-Free
- Vegetarian
- Boil
- Saute

## Notes
`,Lg=`---
title: "Lemon Bars"
source: "https://cooking.nytimes.com/recipes/1024410-lemon-bars?algo=cooking_search_relevance_metric_ios_and_web&campaign_id=58&emc=edit_ck_20260413&experiment_name=ALGO_CK_Search_9&fellback=false&imp_id=8998765726358348&instance_id=173891&nl=cooking&regi_id=197868639&req_id=142762339325137&segment_id=218159&surface=cooking-search&user_id=3719b3bb012d2089287c9cc303193b83&variant=0_relevance_reranking&variant_name=0_relevance_reranking"
author: "Genevieve Ko"
yield: "One 9-inch pan (12 to 24 bars)"
prep_time: "PT5M"
cook_time: "PT4H55M"
total_time: "PT5H"
categories:
  - easy
  - dessert
tags:
  - bar cookie
  - egg
  - lemon
  - make-ahead
  - one bowl
  - partial-access-ic
  - party
  - plan-ahead
  - unsalted butter
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2023/07/21/multimedia/24korex-lemon-vbtc/20korex-lemon-vbtc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Lemon Bars

> Source: https://cooking.nytimes.com/recipes/1024410-lemon-bars?algo=cooking_search_relevance_metric_ios_and_web&campaign_id=58&emc=edit_ck_20260413&experiment_name=ALGO_CK_Search_9&fellback=false&imp_id=8998765726358348&instance_id=173891&nl=cooking&regi_id=197868639&req_id=142762339325137&segment_id=218159&surface=cooking-search&user_id=3719b3bb012d2089287c9cc303193b83&variant=0_relevance_reranking&variant_name=0_relevance_reranking

## Description
The best lemon bars are just sweet enough to temper lemon’s acidity while heightening its heady tang. Adding zest to the curd would have detracted from its comforting smoothness with chewy bits. Instead, the wisps of lemon peel bake into the cookie, which is snappier than classic shortbread to provide a contrast to the filling’s softness. Rather than cutting cold butter into flour and powdered sugar for a crumbly bottom as many recipes do, this version combines melted butter with flour and granulated sugar for a sturdy — and simpler — dough. After setting in the oven, the base is covered with the just-as-simple lemon mixture while still hot. Doing so ensures that the layers meld together into a textural ombré so that each bite starts with melt-in-your-mouth curd and ends with a satisfying crispness.

## Ingredients
- Nonstick cooking spray
- 10 tablespoons/140 grams unsalted butter, melted and cooled
- 1/4 cup/50 grams granulated sugar
- 1 teaspoon vanilla extract
- 1 teaspoon fine sea salt
- 2 to 4 lemons
- 1 1/2 cups/200 grams all-purpose flour
- 1 1/4 cups/250 grams granulated sugar
- 1/4 cup/33 grams all-purpose flour
- 4 large eggs, room temperature
- 2/3 cup fresh lemon juice (from the lemons above)
- Powdered sugar, for dusting (optional)

## Instructions
1. Prepare the crust: Heat the oven to 350 degrees. Line the bottom and sides of a 9-inch square metal pan with foil. Lightly coat with nonstick cooking spray.
2. Combine the butter, sugar, vanilla and salt in a large bowl. Finely grate in the zest of 2 lemons (reserving the zested lemons for the lemon layer), then mix until well combined. While stirring, gradually add the flour and stir just until the dough comes together into a mass. Scrape into the prepared pan and gently press the dough into an even layer.
3. Bake until the center is dry and the edges are golden, 15 to 18 minutes.
4. While the crust bakes, make the lemon layer: Squeeze 2/3 cup juice from the zested lemons and more fruit if needed. In the same bowl used for the crust, whisk the sugar and flour. Whisk in the eggs until smooth, then whisk in the lemon juice just until incorporated.
5. When the crust comes out of the oven, whisk the lemon mixture again and then gently pour it over the hot crust. Turn the oven down to 300 degrees.
6. Bake until the lemon layer is set around the edges and jiggles a tiny bit in the center, about 20 minutes.
7. Cool completely in the pan, then refrigerate uncovered until cold and fully set, at least 3 hours. Use the foil to lift the bars out of the pan to slice. Serve cold or at room temperature. The bars can be refrigerated in an airtight container for up to 5 days. If you’d like, dust with powdered sugar right before serving.

## Tags
- bar cookie
- egg
- lemon
- make-ahead
- one bowl
- partial-access-ic
- party
- plan-ahead
- unsalted butter
- American

## Notes
`,Qg=`---
title: "One-Pot Creamy Pasta and Greens"
source: "https://cooking.nytimes.com/recipes/1021804-one-pot-creamy-pasta-and-greens?algo=cooking_search_relevance_metric_ios_and_web&campaign_id=58&emc=edit_ck_20260413&experiment_name=ALGO_CK_Search_9&fellback=false&imp_id=1226872795890436&instance_id=173891&nl=cooking&regi_id=197868639&req_id=370218804344353&segment_id=218159&surface=cooking-search&user_id=3719b3bb012d2089287c9cc303193b83&variant=0_relevance_reranking&variant_name=0_relevance_reranking"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - dinner
  - weeknight
  - pastas
  - main course
tags:
  - milk
  - parmesan
  - pasta
  - spinach
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2020/01/15/dining/as-creamy-greens-and-pasta/merlin_180930000_8b2c32d3-747d-4bd2-8696-396d0b317a18-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# One-Pot Creamy Pasta and Greens

> Source: https://cooking.nytimes.com/recipes/1021804-one-pot-creamy-pasta-and-greens?algo=cooking_search_relevance_metric_ios_and_web&campaign_id=58&emc=edit_ck_20260413&experiment_name=ALGO_CK_Search_9&fellback=false&imp_id=1226872795890436&instance_id=173891&nl=cooking&regi_id=197868639&req_id=370218804344353&segment_id=218159&surface=cooking-search&user_id=3719b3bb012d2089287c9cc303193b83&variant=0_relevance_reranking&variant_name=0_relevance_reranking

## Description
In this recipe, frozen spinach, pasta and a whole lot of milk come together to create a satisfying pasta dish that will remind you of the best creamed spinach you’ve ever had. Stir the mixture often and vigorously to help the pasta release its starch and create a rich sauce. The lemon peel provides a bright citrus flavor, but you can leave it out. If you’d like a spicy version, add a dash of red-pepper flakes along with the shallot and garlic. You can also substitute different greens: Instead of frozen spinach, you can use 2 cups of chopped dark leafy greens, like chard or kale.

## Ingredients
- 2 tablespoons unsalted butter
- 3 garlic cloves, finely chopped
- 1 shallot, finely chopped
- Kosher salt and black pepper
- 5 cups whole milk, plus more as needed
- 10 ounces frozen chopped spinach
- 2 wide lemon peel strips
- 10 ounces ditalini, orzo or pearl couscous
- 1/2 cup finely grated Parmesan, plus more for serving

## Instructions
1. In a large pot or Dutch oven, melt the butter over medium heat. Add the garlic and shallot, season with salt and pepper, and cook, stirring, until softened, 2 to 4 minutes.
2. Add the 5 cups milk, spinach, lemon peel and 2 teaspoons salt. Cook, stirring occasionally and breaking up the frozen spinach with your spoon, until the spinach is softened and the milk is just simmering, 5 to 10 minutes.
3. Add the pasta and cook, stirring often and vigorously, until the pasta is al dente, 20 to 25 minutes, adjusting the heat as needed to maintain a gentle simmer. If it looks dry at any point, add more milk. The mixture will continue to thicken as it sits, so it’s OK if the sauce looks a little soupy.
4. Once the pasta is cooked, turn off the heat, discard the lemon peels, and stir in the Parmesan until melted. Season to taste with salt and pepper, and serve with more Parmesan.

## Tags
- milk
- parmesan
- pasta
- spinach
- vegetarian

## Notes
`,Xg=`---
title: "Pink Grapefruit Bars"
source: "https://cooking.nytimes.com/recipes/1024098-pink-grapefruit-bars?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Jesse Szewczyk"
yield: "24 bars"
prep_time: "PT10M"
cook_time: "PT1H20M"
total_time: "PT8H10M"
categories:
  - dessert
tags:
  - bar cookie
  - egg
  - grapefruit
  - plan-ahead
  - easter
  - mother’s day
  - valentine’s day
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2023/04/14/multimedia/S-pink-grapefruit-bars-vpjk/S-pink-grapefruit-bars-vpjk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pink Grapefruit Bars

> Source: https://cooking.nytimes.com/recipes/1024098-pink-grapefruit-bars?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Think of these pink grapefruit bars as the ritzier, more alluring version of classic lemon bars. By swapping out the lemon for grapefruit juice, the bars take on a floral quality and bittersweet complexity. For the boldest flavor, avoid using store-bought grapefruit juice, which often contains added sugar to tame its tartness, and opt for juicing your own. To further enliven the bars, zest the grapefruits and massage the zest into the sugar for the filling. The oils in the zest will perfume the sugar and embolden the grapefruit flavor. For an eye-catching presentation, shower the bars in a blend of freeze-dried strawberries and confectioners’ sugar before serving. The dusting provides a subtle sweetness and a vibrant rosy hue that alludes to the flavor within.

## Ingredients
- Nonstick cooking spray
- 2 cups/255 grams all-purpose flour
- 1/2 cup/101 grams granulated sugar
- 1 teaspoon kosher salt (such as Diamond Crystal)
- 1 cup/227 grams unsalted butter (2 sticks), melted and cooled slightly
- 1 teaspoon vanilla extract
- 2 1/2 cups/503 grams granulated sugar
- 3 tablespoons finely grated pink grapefruit zest (from about 3 large grapefruits)
- 1/2 cup/64 grams all-purpose flour
- 8 large eggs
- 1 1/4 cups/296 milliliters freshly squeezed pink grapefruit juice (from 2 to 3 medium grapefruits)
- 2 teaspoons vanilla extract
- 1/2 teaspoon kosher salt (such as Diamond Crystal)
- 1 cup/about 24 grams freeze-dried strawberries
- 1/2 cup/62 grams confectioners’ sugar

## Instructions
1. Prepare the crust: Heat oven to 325 degrees. Coat a 9-by-13-inch baking pan with nonstick cooking spray and line with a strip of parchment paper that hangs over the long sides by about 2 inches to create a sling.
2. In a large bowl, combine the flour, granulated sugar and salt. Add the melted butter and vanilla extract and stir until a moist, crumbly dough forms. Transfer the dough into the prepared baking pan and press into an even layer using your hands or the bottom of a measuring cup. Prick the top of the dough all over with a fork and bake until the crust is deep golden brown in the center and slightly puffed, 40 to 45 minutes. Immediately use the bottom of a measuring cup or a flat metal spatula to press down the hot crust to compact it slightly. (This will help prevent the crust from crumbling when you cut it.)
3. While the crust is baking, prepare the grapefruit layer: Combine the granulated sugar and grapefruit zest in a large bowl and massage the zest into the sugar until very fragrant. Add the flour and whisk to incorporate it. Add the eggs, grapefruit juice, vanilla extract and salt; whisk until no streaks of unincorporated egg remain.
4. As soon as the crust comes out of the oven, pour the grapefruit mixture through a fine-mesh strainer directly on top of the hot crust, using a spatula to press it through. Discard the zest that’s left in the strainer, then bake the bars until the edges are completely set but the center jiggles ever so slightly when moved, 28 to 34 minutes. Set the bars in the baking pan on a wire rack at room temperature until completely cooled, about 1 hour, then chill in the refrigerator, uncovered, until completely cold and firm, at least 6 hours, but preferably overnight.
5. While the bars are chilling, make the pink dusting, if desired: In the bowl of a food processor or in a blender, combine the freeze-dried strawberries and confectioners’ sugar. Process until the mixture has the texture of very fine dust, 20 to 30 seconds.
6. Once the bars are cool, run a thin offset spatula or knife around the edges to help loosen them then, using the parchment paper, lift the bars out of the pan and transfer onto a cutting board. Dust the top of the bars with a generous, even layer of the pink dusting or plain confectioners’ sugar. (You might not need all of the pink dusting.)
7. Cut the bars into a 4-by-6 grid to make 24 squares, wiping your knife with a damp cloth between each cut, and serve immediately. Store leftover bars, in an airtight container in a single layer, in the fridge for up to 5 days. If desired, dust again before serving.

## Tags
- bar cookie
- egg
- grapefruit
- plan-ahead
- easter
- mother’s day
- valentine’s day
- spring

## Notes
`,Zg=`---
title: "Pork Bulgogi With Spring Vegetables"
source: "https://cooking.nytimes.com/recipes/1024135-pork-bulgogi-with-spring-vegetables?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT50M"
total_time: "PT1H"
categories:
  - dinner
  - weeknight
  - meat
  - main course
tags:
  - fresh ginger
  - gochujang
  - pork chop
  - radish
  - sesame seed
  - shiitake
  - snow pea
  - soy sauce
  - spring
  - Korean
cuisine: "korean"
image: "https://static01.nyt.com/images/2023/04/21/multimedia/21appetiterex-bulgogi-tmpk/21appetiterex-bulgogi-tmpk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pork Bulgogi With Spring Vegetables

> Source: https://cooking.nytimes.com/recipes/1024135-pork-bulgogi-with-spring-vegetables?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this easy recipe, a deeply flavored Korean bulgogi marinade is paired with sliced pork, which is seared in a skillet with snow peas, radishes and mushrooms. You can use the basic recipe as a template, substituting other proteins like chicken, tofu or, most traditionally, beef for the pork, and whatever quick-cooking vegetables you like: cherry tomatoes, zucchini, broccoli florets are all great options. Don’t worry about browning the pork here. The goal is to sear it long enough to just cook it through, while the sauce condenses and caramelizes, coating the meat and vegetables.

## Ingredients
- 1/2 cup soy sauce
- 1/4 cup gochujang
- 1/4 cup light brown sugar
- 1 tablespoon plus 1 teaspoon white sesame seeds, plus more for serving
- 2 tablespoons neutral oil, such as grapeseed, avocado or sunflower
- 1 teaspoon toasted sesame oil
- 2 cloves garlic, finely grated or minced
- 1 (2-inch) piece ginger, finely grated or minced
- 2 scallions, thinly sliced
- 1 pound boneless pork chops, tenderloin or loin, thinly sliced
- 1 tablespoon neutral oil, such as grapeseed, avocado or sunflower
- 4 ounces shiitake mushrooms, sliced (about 1 1/2 cups)
- 1/2 cup thinly sliced radishes (about 5)
- 8 ounces snow peas, strings removed and halved crosswise (about 2 1/2 cups)
- 6 scallions, white and green parts thinly sliced
- Cooked rice or lettuce leaves, for serving

## Instructions
1. Make the marinade: Add marinade ingredients to a medium bowl and whisk until combined. In a small bowl, reserve half the marinade at room temperature for serving.
2. Add pork to the marinade in the medium bowl and refrigerate for at least 30 minutes and up to 2 hours.
3. In a large skillet over medium-high heat, add neutral oil. Once the oil is hot, add mushrooms. Let sear, stirring once or twice, until just tender and caramelized, 4 to 7 minutes.
4. Raise heat to high. Add pork along with its marinade, radishes, snow peas and all but 2 tablespoons of the scallions (reserve for garnish) to pan. Let cook, stirring often, until the pork is just cooked through, about 3 to 5 minutes. (Take care not to overcook it; it won’t brown, and it may still look slightly pink inside).
5. Garnish with reserved scallions and sesame seeds, and serve hot over rice with reserved marinade for drizzling.

## Tags
- fresh ginger
- gochujang
- pork chop
- radish
- sesame seed
- shiitake
- snow pea
- soy sauce
- spring
- Korean

## Notes
`,Vg=`---
title: "Pork Laab"
source: "https://cooking.nytimes.com/recipes/1026919-pork-laab?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Sherry Rujikarn"
yield: "4 servings as part of a larger Thai meal, 2 servings as a main course"
prep_time: "PT10M"
cook_time: "PT15M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - meat
  - main course
tags:
  - budget
  - chile powder
  - cilantro
  - fish sauce
  - ground pork
  - jasmine rice
  - lime juice
  - mint
  - salad
  - small plate
  - stovetop
  - dairy-free
  - gluten-free
  - Thai
cuisine: "thai"
image: "https://static01.nyt.com/images/2025/05/29/multimedia/SR-pork-larb-moo-vtbg/SR-pork-larb-moo-vtbg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pork Laab

> Source: https://cooking.nytimes.com/recipes/1026919-pork-laab?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
The magic of pork laab (also known as moo larb or laap) lies in the simple yet strikingly effective combo of fresh herbs and toasted rice to season this ground meat salad. Cilantro, scallions and mint balance the richness of the meat, while the nutty flavor of the ground rice — an essential component of laab — complements the zingy lime juice. Many Thai recipes call for ingredients that can be tough to find in the U.S., but this northern Thai salad is an outlier. You can opt for dried Thai chiles, if you’ve got them, or you can achieve your desired heat level by grinding up crushed red pepper.

## Ingredients
- 3 tablespoons uncooked jasmine rice
- 1 pound ground pork
- 1 small shallot, thinly sliced
- 3 to 4 tablespoons lime juice (about 1½ limes)
- 2 tablespoons fish sauce
- ½ to 1½ teaspoons ground red chiles (preferably Thai; see Tip), to taste
- ¼ cup packed cilantro leaves and stems, chopped
- 2 scallions, thinly sliced
- ¼ cup packed fresh mint leaves, roughly torn, plus more for serving
- Raw green cabbage wedges, long beans, cucumber slices, and lettuce leaves, for serving

## Instructions
1. In a small, dry skillet, toast the rice on medium for 10 minutes until browned and fragrant, shaking or stirring often. Cool completely. Grind in a mortar and pestle or spice grinder until a coarse powder, like cornmeal.
2. In a medium saucepan, combine the pork and 1 tablespoon water. Cook on medium 5 minutes, until pork is cooked through but not browned, breaking up into small bits and stirring often. Remove from heat.
3. To the pork, add the shallot, lime juice, fish sauce and chile. Stir to combine. Add the cilantro and scallions.
4. Just before serving, stir in half of the toasted ground rice. Taste and add remaining rice for more crunch, if desired. Fold in the mint. Transfer to a serving dish. Garnish with more mint, if desired. Serve with cabbage wedges, long beans, cucumbers and lettuce leaves.

## Tags
- budget
- chile powder
- cilantro
- fish sauce
- ground pork
- jasmine rice
- lime juice
- mint
- salad
- small plate
- stovetop
- dairy-free
- gluten-free
- Thai

## Notes
`,Kg=`---
title: "Red Curry Lentils With Sweet Potatoes and Spinach"
source: "https://cooking.nytimes.com/recipes/1020766-red-curry-lentils-with-sweet-potatoes-and-spinach?algo=cooking_search_relevance_metric_ios_and_web&campaign_id=58&emc=edit_ck_20260415&experiment_name=ALGO_CK_Search_9&fellback=false&imp_id=5549938966903772&instance_id=174099&nl=cooking&regi_id=197868639&req_id=8804858224509005&segment_id=218255&surface=cooking-search&user_id=3719b3bb012d2089287c9cc303193b83&variant=0_relevance_reranking&variant_name=0_relevance_reranking"
author: "Lidey Heuck"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - dinner
  - easy
  - beans
  - one pot
  - main course
tags:
  - coconut milk
  - dutch oven
  - fresh ginger
  - red curry paste
  - red lentil
  - spinach
  - sweet potato
  - turmeric
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2020/01/02/dining/lh-red-lentils/lh-red-lentils-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Red Curry Lentils With Sweet Potatoes and Spinach

> Source: https://cooking.nytimes.com/recipes/1020766-red-curry-lentils-with-sweet-potatoes-and-spinach?algo=cooking_search_relevance_metric_ios_and_web&campaign_id=58&emc=edit_ck_20260415&experiment_name=ALGO_CK_Search_9&fellback=false&imp_id=5549938966903772&instance_id=174099&nl=cooking&regi_id=197868639&req_id=8804858224509005&segment_id=218255&surface=cooking-search&user_id=3719b3bb012d2089287c9cc303193b83&variant=0_relevance_reranking&variant_name=0_relevance_reranking

## Description
In this vegetarian main inspired by Indian dal, lentils are cooked with an aromatic blend of Thai spices — fresh ginger, turmeric, red curry paste and chile — then simmered in coconut milk until fall-apart tender. Browning the sweet potatoes before cooking them with the lentils brings out their sweetness, balancing the heat from the chile and curry paste, while baby spinach tossed in just before serving adds fresh flavor. Serve over steamed white or brown rice, or with toasted flatbread on the side.

## Ingredients
- 3 tablespoons olive oil
- 1 pound sweet potatoes (about 2 medium sweet potatoes), peeled and cut into 3/4-inch cubes
- 1 medium yellow onion, chopped
- 3 tablespoons Thai red curry paste
- 3 garlic cloves, minced (about 1 tablespoon)
- 1 (1-inch) piece fresh ginger, peeled and grated (about 1 tablespoon)
- 1 red chile, such as Fresno or serrano, halved, seeds and ribs removed, then minced
- 1 teaspoon ground turmeric
- 1 cup red lentils, rinsed
- 4 cups low-sodium vegetable stock
- 2 teaspoons kosher salt, plus more to taste
- 1 (13-ounce) can full-fat coconut milk
- 1 (4- to 5-ounce) bag baby spinach
- 1/2 lime, juiced
- Fresh cilantro leaves, for serving
- Toasted unsweetened coconut flakes, for serving (optional)

## Instructions
1. In a Dutch oven or pot, heat 2 tablespoons olive oil over medium-high. Add the sweet potatoes and cook, stirring occasionally, until browned all over, 5 to 7 minutes. Transfer the browned sweet potatoes to a plate and set aside.
2. Add the remaining 1 tablespoon olive oil to the pot and set the heat to medium-low. Add the onion and cook, stirring occasionally, until translucent, 4 to 6 minutes. Add the curry paste, garlic, ginger, chile and turmeric, and cook until fragrant, about 1 minute.
3. Add the lentils, stock, salt and browned sweet potatoes to the pot and bring to a boil over high. Lower the heat and simmer, uncovered, stirring occasionally, until the lentils are just tender, 20 to 25 minutes.
4. Add the coconut milk and simmer, stirring occasionally, until the liquid has reduced and the lentils are creamy and falling apart, 15 to 20 minutes.
5. Add the spinach and stir until just wilted, 2 to 3 minutes. Off the heat, stir in the lime juice and season with salt to taste.
6. Divide among shallow bowls and top with cilantro and coconut flakes, if using.

## Tags
- coconut milk
- dutch oven
- fresh ginger
- red curry paste
- red lentil
- spinach
- sweet potato
- turmeric
- vegan
- vegetarian

## Notes
`,Jg=`---
title: "Roasted Mushroom Laab"
source: "https://cooking.nytimes.com/recipes/1022592-roasted-mushroom-laab?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - weeknight
  - vegetables
  - main course
  - side dish
tags:
  - herbs
  - mushroom
  - rice
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2021/09/28/dining/YK-Mushroom-Larb/YK-Mushroom-Larb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Roasted Mushroom Laab

> Source: https://cooking.nytimes.com/recipes/1022592-roasted-mushroom-laab?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Earthy mushrooms replace meat in this take on laab. A dish popular in the northern and northeastern regions of Thailand, laab (also spelled larb) is often a lively combination of cooked minced meat, fresh herbs and a punchy dressing. In this recipe, mushrooms are roasted until golden brown and crispy around the edges, and, once cooled, tossed with a mix of cilantro, mint, basil and aromatics, including sliced scallions. Lime juice and soy sauce keep the dressing tangy and savory. A subtle, nutty crunch from toasted ground rice is an essential element of the salad, so don’t skip this step. Serve the dish with steamed rice and additional lime wedges for squeezing.
 
To get vegetarian recipes like this one delivered to your inbox, sign up for The Veggie newsletter.

## Ingredients
- 2 pounds mixed mushrooms, such as button, oyster, and shiitake, trimmed and quartered, or torn into 2-inch pieces if large
- 1/4 cup neutral oil, such as grapeseed or vegetable oil
- Salt
- 2 tablespoons uncooked glutinous or sweet rice
- 2 limes
- 1 tablespoon granulated sugar
- 2 tablespoons soy sauce or tamari
- 1 garlic clove, minced
- 2 bird’s eye chiles, sliced, or ½ teaspoon red-chile flakes
- 1/4 cup thinly sliced red onion
- 1/4 cup sliced scallions
- 1/4 cup chopped fresh cilantro leaves and tender stems
- 1/2 cup fresh mint leaves, torn
- 1/2 cup fresh Thai or sweet basil leaves, torn
- Steamed rice, for serving

## Instructions
1. Heat oven to 425 degrees.
2. Spread the mushrooms in an even layer on a sheet pan and drizzle with the oil. Season with salt and, using your fingers, toss to coat. Roast, turning the pan halfway through, until mushrooms are golden brown and crisp around the edges, about 25 minutes.
3. Meanwhile, toast the rice in a small skillet over medium, stirring often, until it begins to smell nutty and turn golden, about 4 minutes. Remove from heat and allow to cool slightly. Transfer to a mortar and pestle or a spice grinder and process to a medium-coarse powder.
4. Zest and juice 1 lime into a medium mixing bowl. Add the sugar, soy sauce, garlic and chile. Stir to dissolve the sugar. Add the roasted mushrooms to the bowl and toss to coat. Add the onion, scallions, cilantro, mint and basil. Stir to combine, then sprinkle on the toasted rice powder.
5. Cut the remaining lime into wedges. Serve the mushroom laab alongside steamed rice with lime wedges for squeezing.

## Tags
- herbs
- mushroom
- rice
- vegan
- vegetarian

## Notes
`,Wg=`---
title: "Salmon With Avocado and Cilantro Salad"
source: "https://cooking.nytimes.com/recipes/1025955-salmon-with-avocado-and-cilantro-salad?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yasmin Fahr"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT25M"
total_time: "PT35M"
categories:
  - brunch
  - dinner
  - easy
  - quick
  - weeknight
  - seafood
  - main course
tags:
  - arugula
  - avocado
  - cilantro
  - full-access-ic-2026-01
  - healthy
  - lime
  - party
  - salad
  - salmon fillet
  - spinach
  - watercress
cuisine: ""
image: "https://static01.nyt.com/images/2025/01/15/multimedia/yf-salmon-with-avocado-cpjh/yf-salmon-with-avocado-cpjh-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Salmon With Avocado and Cilantro Salad

> Source: https://cooking.nytimes.com/recipes/1025955-salmon-with-avocado-and-cilantro-salad?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
For nights when you need a sparkle of color, this dish is just that, in both appearance and taste. First, roast a side of salmon, rubbed with coriander and garlic, and topped with lime slices to infuse it with flavor. As it cooks, prepare this simple and bright avocado salad, spiked with lime juice, jalapeños and scallions, and tossed with gentle greens, to balance the richness of the salmon. Serve with lightly oiled pearled couscous or orzo, plain rice or cilantro rice, or crusty bread.

## Ingredients
- 1 (1½-pound) salmon fillet, skin on or off
- 2 limes (1 thinly sliced crosswise)
- 3 tablespoons olive oil
- 2 garlic cloves, grated or minced
- 1/2 teaspoon ground coriander
- Salt
- 2 scallions, trimmed and thinly sliced
- 1/4 teaspoon ground cumin
- 1 jalapeño or Fresno chile (optional), thinly sliced into rounds
- 2 avocados, halved, peeled and thinly sliced crosswise
- 3 packed cups watercress, baby arugula or baby spinach
- Torn fresh cilantro leaves and delicate small sprigs, for serving

## Instructions
1. Heat the oven to 400 degrees. On a sheet pan lined with parchment paper, set the salmon, skin side down, along with the lime slices. Drizzle all with 1 tablespoon olive oil. Rub the top of the salmon with the garlic and coriander; season with salt. Arrange the lime slices on top of the salmon in an even layer.
2. Roast until the salmon is just cooked through and the thickest part of the salmon can easily be pierced with a fork without meeting resistance, 15 to 20 minutes, depending on the thickness of the salmon. (The cooked lime slices can be eaten, or discarded after cooking.)
3. Meanwhile, zest and juice 1 lime into a medium mixing bowl. Add the scallions, cumin and remaining 2 tablespoons olive oil and mix to combine; add salt and jalapeño to taste, if using. Add the avocado slices to the bowl; season with salt and gently toss.
4. Remove the salmon from the oven and let cool slightly.
5. Add watercress to the bowl with the avocado salad and gently toss to coat; season to taste with salt. Transfer to a serving plate. Break the salmon apart into large chunks, separating from the skin if on, and transfer to the serving plate. Drizzle any liquid from the bowl on top.
6. Garnish with cilantro and serve immediately.

## Tags
- arugula
- avocado
- cilantro
- full-access-ic-2026-01
- healthy
- lime
- party
- salad
- salmon fillet
- spinach
- watercress

## Notes
`,Fg=`---
title: "San Choy Bao (Pork Lettuce Wraps)"
source: "https://cooking.nytimes.com/recipes/1027155-san-choy-bao-pork-lettuce-wraps?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Genevieve Ko"
yield: "4 to 6 servings"
prep_time: "PT20M"
cook_time: "PT15M"
total_time: "PT35M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - finger foods
  - appetizer
  - main course
tags:
  - dairy-free
  - ground chicken
  - ground pork
  - ground turkey
  - hoisin sauce
  - iceberg lettuce
  - party
  - rice noodle
  - small plate
  - Chinese
cuisine: "chinese"
image: "https://static01.nyt.com/images/2025/08/17/magazine/17EATrex-GK-lettuce-wraps/17EATrex-GK-lettuce-wraps-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# San Choy Bao (Pork Lettuce Wraps)

> Source: https://cooking.nytimes.com/recipes/1027155-san-choy-bao-pork-lettuce-wraps?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
San choy bao literally translates from Cantonese to “lettuce wrap,” and its contours are wide: cold iceberg lettuce, a stir-fry of finely diced vegetables and protein, and sweet Chinese bean sauce like hoisin. (The deep-fried noodles here aren’t essential, but they add a fantastic crackle to the juicy filling.) Unlike soft, warm comfort food, which lulls you, san choy bao wakes you up. It feels like a duel, with jabs of hot and cold, lunging back and forth between two worlds. The crunch of icy lettuce snaps into the filling’s steaming crisp bits, and if you can find fresh water chestnuts, you’ll be rewarded with their unique woodsy crunch.

## Ingredients
- Canola oil, for frying
- 2 ounces dried rice vermicelli, broken into smaller pieces
- 2 teaspoons cornstarch
- 3 tablespoons soy sauce
- 3 tablespoons hoisin sauce or tian mian jiang (sweet bean sauce), plus more for serving
- 1 1/2 tablespoons Shaoxing or other rice wine, or dry sherry
- 1 tablespoon toasted sesame oil
- 2 tablespoons canola oil
- 3 garlic cloves, finely chopped
- 1 (1-inch) piece fresh ginger, peeled and finely chopped
- 1 red Fresno chile or serrano chile, finely chopped (seeded for mild)
- 1/2 large yellow onion, finely diced
- 1 pound ground or very finely diced pork, chicken or turkey (see Tip)
- Freshly ground white or black pepper
- 2 celery stalks, finely diced, plus leaves for garnish
- 1 (8-ounce) can water chestnuts, drained and diced, or 3 fresh water chestnuts, peeled and diced
- 1 head iceberg lettuce, leaves separated for serving, chilled

## Instructions
1. Make the noodles (if you want): Set a paper towel-lined plate and slotted spoon or chopsticks next to the stovetop. Pour 1/2 inch of oil into a small saucepan. Heat over medium until shimmering, 2 to 3 minutes. Test the oil: When you drop in a noodle, the noodle should immediately puff and turn white. (If it turns brown and brittle, that means the oil is too hot. Turn down the heat slightly.)
2. Add a small bundle of noodles and cook just until they puff and turn white, about a second. Transfer immediately to the paper towels. Repeat with the remaining noodles.
3. Make the sauce: In a small bowl, stir the cornstarch into a tablespoon of water until it dissolves. Stir in the soy sauce, hoisin, wine and sesame oil.
4. Make the filling: Heat 2 tablespoons canola oil (if you made the noodles, use some of that oil) in a wok or large skillet over high. When it shimmers, add the garlic, ginger and chile, and stir until fragrant and shiny, 10 seconds. Add the onion and stir until translucent at the edges, 1 to 2 minutes.
5. Add the meat and spread and mash it into the aromatics. Generously grind pepper all over. Cook, stirring and breaking the meat into small chunks, until cooked through, 2 to 3 minutes.
6. Add the celery and water chestnuts and cook, stirring occasionally, until crisp-tender, 1 to 2 minutes. Stir the sauce, pour it into the wok and stir until everything is coated and the pan juices have thickened, 1 to 2 minutes. Transfer the filling to a large serving dish. If your celery had leaves, use them as garnish.
7. Set the filling next to a platter of the lettuce, a dish of hoisin and the plate of noodles, if using. To eat, swipe some sauce into a lettuce leaf, stuff it with filling and top with noodles

## Tags
- dairy-free
- ground chicken
- ground pork
- ground turkey
- hoisin sauce
- iceberg lettuce
- party
- rice noodle
- small plate
- Chinese

## Notes
`,$g=`---
title: "Sheet-Pan Chicken and Potatoes With Feta, Lemon and Dill"
source: "https://cooking.nytimes.com/recipes/1020726-sheet-pan-chicken-and-potatoes-with-feta-lemon-and-dill?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Lidey Heuck"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - easy
  - weeknight
  - main course
tags:
  - chicken thigh
  - dill
  - feta
  - lemon juice
  - party
  - roast chicken
  - sheet-pan
  - yukon gold potato
  - fall
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2020/11/15/dining/lh-chicken-and-potatoes/lh-chicken-and-potatoes-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Sheet-Pan Chicken and Potatoes With Feta, Lemon and Dill

> Source: https://cooking.nytimes.com/recipes/1020726-sheet-pan-chicken-and-potatoes-with-feta-lemon-and-dill?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this simple but elegant sheet-pan dinner, chicken thighs and potatoes roast together at a high temperature, coming out crispy and golden. A generous squeeze of lemon juice, along with a scattering of fresh dill and feta cheese, elevates this dish from weeknight meat and potatoes to dinner-party fare. While the chicken will still be delicious if marinated for just 30 minutes, marinating it for several hours will yield the best results.

## Ingredients
- 3 tablespoons olive oil
- 2 tablespoons lemon juice (from about half a lemon)
- 1 garlic clove, minced
- 1/2 teaspoon dried oregano
- Kosher salt and black pepper
- 1 1/2 to 2 pounds small bone-in, skin-on chicken thighs (4 to 6 thighs)
- 4 small Yukon gold potatoes (about 1 pound), cut into 3/4-inch pieces
- 2 ounces feta cheese, crumbled (about 1/2 cup)
- 2 tablespoons chopped fresh dill

## Instructions
1. In a medium bowl, whisk 2 tablespoons oil with 1 tablespoon lemon juice, the garlic, oregano, 1 teaspoon salt and 1/2 teaspoon pepper. Add the chicken thighs toss to coat. Let the chicken marinate for at least 30 minutes at room temperature, or up to 8 hours, covered, in the refrigerator.
2. Heat the oven to 425 degrees. On a sheet pan, drizzle the diced potatoes with the remaining 1 tablespoon oil and sprinkle with 1/2 teaspoon salt and 1/4 teaspoon pepper; toss well and move to one side of the pan. Pat the chicken thighs dry and place them, evenly spaced, on the other side of the pan.
3. Roast for 15 minutes, toss the potatoes, then return everything to the oven and roast until the chicken is cooked through, the skin is golden brown, and the potatoes are tender, 15 to 25 more minutes, depending on the size of the thighs. If the potatoes are not quite tender, remove the chicken thighs to a plate to rest, and return the potatoes to the oven to roast until tender, another 5 to 10 minutes.
4. Place the chicken and potatoes on a serving platter, and sprinkle them 1 tablespoon lemon juice. Scatter the feta and dill over the potatoes, sprinkle the whole dish with salt and pepper, and serve hot.

## Tags
- chicken thigh
- dill
- feta
- lemon juice
- party
- roast chicken
- sheet-pan
- yukon gold potato
- fall
- winter

## Notes
`,Ig=`---
title: "Sheet-Pan Hot Honey Chicken"
source: "https://cooking.nytimes.com/recipes/764709448-sheet-pan-hot-honey-chicken?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Sheela Prakash"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H20M"
total_time: "PT0H30M"
categories:
  - Poultry
  - Dinner
  - Main Course
tags:
  - Dijon Mustard
  - Honey
  - Chicken Breast
  - Cayenne Pepper
  - Broccoli
  - Sweet Potato
  - Sheet-Pan
  - Quick
  - Weeknight
  - Easy
  - Roast
  - Healthy
  - Dairy-Free
  - Gluten-Free
cuisine: ""
image: "https://static01.nyt.com/images/2025/12/02/multimedia/SP:-Sheet-Pan-Hot-Honey-Mustard-Chicken-with-Broccoli-and-Sweet-Potatoes-wtjp/SP:-Sheet-Pan-Hot-Honey-Mustard-Chicken-with-Broccoli-and-Sweet-Potatoes-wtjp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Sheet-Pan Hot Honey Chicken

> Source: https://cooking.nytimes.com/recipes/764709448-sheet-pan-hot-honey-chicken?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Equal parts hot honey and Dijon bring tangy spice and sweetness to this easy meal. No need to worry about not having a jar handy of the former: With just honey and cayenne, you can make your own. For a faster sheet pan dinner, crank up the oven’s temperature and slide the baking sheet in while it preheats so the chicken and vegetables immediately start roasting the second they hit the sizzling pan. Don’t worry that the heat is too high: Since everything cooks so fast, you’ll end up with juicy meat and perfectly tender vegetables. Serve the colorful combination over brown rice or farro and it becomes a simple and satisfying grain bowl.

## Ingredients
- ⅓ cup Dijon mustard
- ⅓ cup honey (see Tip)
- ½ teaspoon ground cayenne
- 1 ¼ pounds boneless, skinless chicken breasts, patted dry and cut into bite-size pieces
- 1 medium head broccoli (about 12 ounces), florets and stem cut into bite-size pieces
- 1 medium sweet potato (10 to 12 ounces), cut into bite-size pieces
- 1 small or ½ medium red onion, cut into bite-size pieces
- 3 tablespoons olive oil
- Salt and black pepper

## Instructions
1. Place a rimmed baking sheet in the oven and heat the oven to 500 degrees.

## Tags
- Dijon Mustard
- Honey
- Chicken Breast
- Cayenne Pepper
- Broccoli
- Sweet Potato
- Sheet-Pan
- Quick
- Weeknight
- Easy
- Roast
- Healthy
- Dairy-Free
- Gluten-Free

## Notes
`,Pg=`---
title: "Sheet-Pan Shrimp Tikka"
source: "https://cooking.nytimes.com/recipes/1026972-sheet-pan-shrimp-tikka?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Zainab Shah"
yield: "4 servings"
prep_time: "PT15M"
cook_time: "PT30M"
total_time: "PT45M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - curry
  - seafood
  - main course
tags:
  - bell pepper
  - cumin seed
  - garam masala
  - garlic
  - ginger
  - ground cumin
  - sheet-pan
  - shrimp
  - gluten-free
  - healthy
  - Indian
cuisine: "indian"
image: "https://static01.nyt.com/images/2025/06/17/multimedia/ZS-Sheet-Pan-Shrimp-Tikka-gwcv/ZS-Sheet-Pan-Shrimp-Tikka-gwcv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Sheet-Pan Shrimp Tikka

> Source: https://cooking.nytimes.com/recipes/1026972-sheet-pan-shrimp-tikka?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This quick, flavor-packed meal brings the smoky, tangy essence of tandoori-style cooking into the kitchen with minimal effort. The shrimp are marinated in spiced yogurt to infuse them with bold flavor before being roasted over a bed of vegetables in just minutes. Bell peppers and onions add sweetness and a bit of crunch, while a final blast under the broiler gives everything a slight char. Serve with warm naan, roti or fluffy basmati rice and a cooling raita for a complete meal.

## Ingredients
- 2 tablespoons Greek yogurt
- 1 tablespoon ginger paste or finely grated ginger (from a 1-inch piece)
- 1 tablespoon garlic paste or freshly grated garlic (3 to 6 cloves)
- 2 1/2 teaspoons ground cumin
- 2 1/2 teaspoons garam masala
- 1 1/2 teaspoons Kashmiri chile powder or other mild red chile powder
- 1 teaspoon ground coriander
- 1/2 teaspoon ground turmeric
- 2 tablespoons vegetable oil or other neutral oil, divided
- Salt
- 1 1/2 pounds large peeled and deveined shrimp
- 1 red bell pepper, cut into 1-inch pieces
- 1 yellow bell pepper, cut into 1-inch pieces
- 1 green bell pepper, cut into 1-inch pieces
- 1 small red onion, cut into 1-inch wedges
- 1 1/2 teaspoons cumin seeds
- Lemon wedges, for serving
- Naan, roti or basmati rice, for serving

## Instructions
1. Arrange one oven rack closest to the broiler and another on the middle position. Heat the oven to 450 degrees.
2. Marinate the shrimp: In a large bowl, whisk together the yogurt, ginger paste, garlic paste, ground cumin, garam masala, chile powder, coriander, turmeric, 1 tablespoon of oil and 1 teaspoon of salt. Add the shrimp and toss to coat. Set aside to marinate.
3. On a large sheet pan, toss all the bell peppers with the onion, the remaining 1 tablespoon of oil, the cumin seeds and 1/2 teaspoon salt. Roast the vegetables until tender and lightly browned, 20 minutes. Remove the sheet pan from the oven and flip over any especially browned vegetables. Arrange a rack 6 inches from the broiler and set the oven to broil on high.
4. Place the marinated shrimp in a single layer on top of the roasted vegetables. Broil until the shrimp start to char, 3 to 5 minutes. Carefully remove the sheet pan, flip the shrimp and broil for another 3 minutes.
5. Serve with naan, roti or rice, along with lemon wedges.

## Tags
- bell pepper
- cumin seed
- garam masala
- garlic
- ginger
- ground cumin
- sheet-pan
- shrimp
- gluten-free
- healthy
- Indian

## Notes
`,ep=`---
title: "Shrimp Guisado Tacos"
source: "https://cooking.nytimes.com/recipes/774538829-shrimp-guisado-tacos?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Kristina Felix"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H25M"
total_time: "PT0H35M"
categories:
  - Tacos
  - Stew
  - Seafood
  - Dinner
  - Main Course
  - Lunch
tags:
  - Green Bean
  - Serrano
  - Chickpea
  - Shrimp
  - Skillet
  - Cast Iron
  - Stovetop
  - Easy
  - Weeknight
  - Quick
  - One Pot
  - Great Leftovers
  - Dairy-Free
  - Healthy
  - Mexican
cuisine: "Mexican"
image: "https://static01.nyt.com/images/2026/03/25/multimedia/KF-Spicy-Shrimp-Chickpea-and-Green-Bean-Tacos-1-chlq/KF-Spicy-Shrimp-Chickpea-and-Green-Bean-Tacos-1-chlq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Shrimp Guisado Tacos

> Source: https://cooking.nytimes.com/recipes/774538829-shrimp-guisado-tacos?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Shrimp, chickpeas, and green beans stewed in a rich and spicy pan tomato sauce makes for an incredibly delicious and satisfying taco. Best of all, the filling comes together quickly enough for a casual weeknight and, because you serve it from the skillet, cleanup is a breeze. Make this as spicy as you’d like by adding more serrano chiles, or omit them entirely. The acidity of salsa verde goes well here but feel free to leave it out, as the juiciness of the pan sauce is substantial. Serve any leftovers over rice the next day.

## Ingredients
- 2 to 3 tablespoons avocado or olive oil
- ½ onion, thinly sliced
- 6 ounces green beans, cut into 1-inch pieces (1½ cups)
- 2 serrano chiles, seeds and stem removed, diced
- 2 Roma tomatoes, cut into 1-inch pieces
- 2 garlic cloves, thinly sliced
- Kosher salt (such as Diamond Crystal)
- 1 (15-ounce) can chickpeas, drained
- 12 ounces peeled, deveined large shrimp, chopped into 1-inch pieces
- 8 to 12 corn tortillas
- Minced cilantro, onion and lime wedges, for serving
- Salsa verde, for serving (optional)

## Instructions
1. Into a large cast-iron or other heavy skillet, pour enough oil to cover the bottom and heat over medium until shimmering but not smoking. Add the onion, green beans and chiles, and cook, stirring occasionally, until onion is soft, about 5 minutes. Add the tomatoes, garlic and 2 teaspoons salt. Cook, stirring occasionally, until tomatoes begin to break down, 10 to 12 minutes more.
2. Add the chickpeas and shrimp and cook, stirring occasionally, until shrimp turn pink, about 4 minutes. Taste for salt.
3. Meanwhile, heat a griddle or a second cast-iron skillet over medium-high. Heat each tortilla for 30 to 40 seconds each side and wrap it in a clean dish towel to steam further and stay warm. Repeat with the remaining tortillas.
4. To serve, bring the skillet of shrimp, warm tortillas, minced cilantro and onion, lime wedges and salsa verde, if using, to the table to make tacos.

## Tags
- Green Bean
- Serrano
- Chickpea
- Shrimp
- Skillet
- Cast Iron
- Stovetop
- Easy
- Weeknight
- Quick
- One Pot
- Great Leftovers
- Dairy-Free
- Healthy
- Mexican

## Notes
`,tp=`---
title: "Snapper Escovitch"
source: "https://cooking.nytimes.com/recipes/1023369-snapper-escovitch?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Millie Peartree"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - weeknight
  - seafood
  - main course
tags:
  - bell pepper
  - fish
  - dairy-free
cuisine: ""
image: "https://static01.nyt.com/images/2022/07/27/dining/mp-snapper-escovitch/mp-snapper-escovitch-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Snapper Escovitch

> Source: https://cooking.nytimes.com/recipes/1023369-snapper-escovitch?campaign_id=90&emc=edit_fwd_20260414&instance_id=174017&nl=five-weeknight-dishes&regi_id=197868639&segment_id=218204&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A Caribbean favorite, this light, tender and flaky fish is made with whole snapper, but you can also use fillets for ease. This recipe has a mellow spice to let the flavor of the fish shine through, but it’s open to adaptation: Feel free to add a little more hot pepper or allspice, if you like, for more intensity. If you’re in a hurry or low on spices, you can substitute Old Bay, jerk or Cajun seasoning blends for the spice mix in Step 1. Then, turn it into a sandwich (see Tip), paired with sweet plantain fries, or eat it as a light meal on its own.

## Ingredients
- 2 teaspoons fresh thyme leaves
- 1 teaspoon garlic powder
- 1/2 teaspoon ground ginger
- 1 teaspoon coarse kosher salt, plus more to taste
- 1 teaspoon black pepper
- 1/2 cup vegetable oil, plus more as needed
- 4 (6-ounce) skin-on snapper fillets or 2 pounds whole red snapper
- 1 dry bay leaf
- 1/2 teaspoon fresh ginger, grated
- 3 small bell peppers (red, yellow, green or one of each), thinly sliced
- 1 medium yellow onion, thinly sliced
- 1 medium carrot, peeled and cut into matchsticks
- 1 Scotch bonnet chile, pierced
- 1 tablespoon granulated sugar
- 1 tablespoon Worcestershire sauce
- 1 teaspoon allspice berries or pickling spice
- 4 garlic cloves, minced
- 3/4 cup red wine vinegar

## Instructions
1. Mix together 1 teaspoon thyme leaves, garlic powder, ginger, salt and pepper. Season the fish with the mixture.
2. In a large skillet over medium, heat oil until really hot but not smoking, about 3 to 5 minutes, and add the fish flesh-side down. Cook until the flesh gets a little color, about 5 minutes. Flip, then continue cooking until the skin is crisp. Remove fish and set aside on a serving platter. Drain oil, leaving about 2 to 3 tablespoons in the skillet.
3. Return the skillet to the stove. Add the bay leaf and fresh ginger, and sauté over medium heat until fragrant, about 30 seconds.
4. Add bell peppers, onion, carrots, Scotch bonnet chile, sugar, Worcestershire sauce, allspice and the remaining thyme leaves, and continue cooking, stirring, for about 2 to 3 minutes. Add garlic and sauté until fragrant, about 1 minute.
5. Add vinegar, and stir to combine all the ingredients. Taste and adjust seasoning as necessary. Let it simmer for about 2 minutes, until the vegetables soften but still retain bite, and spoon over fish. (Leave the allspice berries or pickling spice in the topping. Simply eat around them.)

## Tags
- bell pepper
- fish
- dairy-free

## Notes
`,np=`---
title: "Spiced Chicken With Sweet Potatoes"
source: "https://cooking.nytimes.com/recipes/1025055-spiced-chicken-with-sweet-potatoes?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yasmin Fahr"
yield: "4 servings"
prep_time: "PT15M"
cook_time: "PT1H"
total_time: "PT1H15M"
categories:
  - dinner
  - easy
  - poultry
  - main course
tags:
  - chicken thigh
  - oregano
  - sheet-pan
  - sweet potato
cuisine: ""
image: "https://static01.nyt.com/images/2024/03/06/multimedia/yf-spiced-chicken-with-sweet-potatoes-lgtj/yf-spiced-chicken-with-sweet-potatoes-lgtj-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spiced Chicken With Sweet Potatoes

> Source: https://cooking.nytimes.com/recipes/1025055-spiced-chicken-with-sweet-potatoes?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This sheet-pan recipe cooks chicken thighs much like roast chicken, setting the thighs in the center of a pan to cook slowly, seasoning the surrounding vegetables with their drippings as they turn golden. The chicken thus cooks in the oven, undisturbed — ideal for multitasking needs and tired nights — until the skin is impossibly crisp. It’s not necessary to push the vegetables around halfway, as the exposed parts might look crisped, but inside they are soft and full of delicious flavor as they cook in a light, mustard-flavored broth that ensures sauciness. Substitute other hearty vegetables like potatoes, brussels sprouts or mix and match with what you have lingering in the fridge.

## Ingredients
- 1 1/4 to 1 1/2 pounds sweet potatoes (2 small/medium), unpeeled and cut into 1- to 2-inch chunks
- 1 small red onion, halved then cut into 1/2-inch wedges
- 4 to 6 garlic cloves, smashed
- 2 tablespoons olive oil, plus more for drizzling
- Salt
- 1/2 cup low-sodium chicken broth or water
- 2 teaspoons Dijon mustard
- 2½ to 3 pounds bone-in, skin-on chicken thighs
- 1 tablespoon dried oregano
- 1 teaspoon smoked paprika
- 1 lime, halved
- 1/4 cup cilantro or parsley leaves and tender stems, gently torn or chopped

## Instructions
1. Heat the oven to 425 degrees. On a sheet pan, toss the sweet potatoes, onion and garlic with the olive oil and season lightly with salt.
2. In a measuring cup, whisk the broth and mustard together until mostly smooth. Add to the pan, mixing everything together so nothing looks dry.
3. Pat the chicken really, really dry, especially the skin. Nestle the chicken skin-side up between the vegetables so it has contact with the pan. (It’s OK if it’s crowded.) Season the skin with the oregano, paprika and some salt, patting them to adhere to the skin. Drizzle the chicken with olive oil.
4. Cook until the chicken skin is very crispy and the vegetables fork-tender, 50 minutes to 1 hour, depending on the size of the thighs. Rotate the pan halfway if some parts of the pan look dry.
5. Squeeze half a lime over everything, and cut the remaining lime half into wedges for serving. Garnish with the cilantro and serve, stirring and scraping up anything on the bottom of the pan to spoon over the chicken and vegetables.

## Tags
- chicken thigh
- oregano
- sheet-pan
- sweet potato

## Notes
`,ap=`---
title: "Spicy Broccoli Rabe Pasta"
source: "https://cooking.nytimes.com/recipes/774980183-spicy-creamy-broccoli-rabe-pasta?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Alexa Weibel"
yield: "4 to 6 servings"
prep_time: "PT0H10M"
cook_time: "PT0H30M"
total_time: "PT0H40M"
categories:
  - Dinner
  - Lunch
  - Main Course
  - Pastas
  - Noodles
  - Vegetables
tags:
  - Stovetop
  - Quick
  - Weeknight
  - Broccoli Rabe
  - Yellow Onion
  - Miso
  - Spaghetti
  - Linguine
  - Fall
  - Vegetarian
  - Vegan
  - Dairy-Free
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/03/multimedia/AW-Vegan-Spicy-Greens-Pasta-gkbc/AW-Vegan-Spicy-Greens-Pasta-gkbc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spicy Broccoli Rabe Pasta

> Source: https://cooking.nytimes.com/recipes/774980183-spicy-creamy-broccoli-rabe-pasta?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Luscious and glossy, this vegan broccoli rabe pasta makes the most of a restrained ingredient list and a classic technique of blending sautéed onions for a flavorful sauce, a versatile practice used in sunny Bangladeshi shrimp dopiaza and rich French soubise. Here, whizzing sautéed onions with miso and olive oil creates a silky sauce that adds umami — and a hint of sweetness — to the vegetable-packed pasta, which is really more greens than noodles. There’s plenty of texture in this dish, but if you’d like to fancy it up a bit, these nutritional yeast bread crumbs are a great addition, crisped in olive oil or butter. This recipe was created with vegans in mind, but it’s equally wonderful if you’re an omnivore who happens to be craving a delicious vegetable-heavy pasta on a weeknight.

## Ingredients
- Salt and pepper
- 2 bunches broccoli rabe (about ¾ pound each), trimmed
- 1 pound spaghetti or linguine
- ⅓ cup plus 2 tablespoons olive oil, divided, plus more for serving
- 2 medium yellow onions (about 8 ounces each), minced (about 2 ½ cups)
- 4 garlic cloves, chopped
- 1 to 2 teaspoons crushed red pepper (or chile crisp; see Tip)
- 3 tablespoons white miso paste
- 1 lemon, for serving

## Instructions
1. Bring a large pot of salted water to a boil over high. Add the broccoli rabe and cook until crisp-tender, about 1 minute. Using tongs, transfer the broccoli rabe to a colander, rinse with cold water to cool, then transfer to a cutting board and thinly slice it.
2. Let the water come back to a boil then add the pasta and cook according to package instructions until al dente, about 10 minutes. Reserve 1 ¾ cups pasta cooking water, then drain the pasta.
3. While the pasta cooks, prepare the sauce: Heat ⅓ cup olive oil in a large, deep skillet over medium. Add the onion, garlic and crushed red pepper, season with salt and pepper, cover and cook, stirring occasionally, until onions are totally soft, about 15 minutes. Transfer to a blender along with the miso and 1 cup of the pasta cooking water and blend until smooth, adding a few extra tablespoons pasta water if necessary for a silky texture.
4. Transfer the sauce to the skillet. Add the sliced broccoli rabe, season generously with salt and pepper and stir over medium for 2 minutes to allow flavors to meld. Add the cooked pasta, ½ cup pasta water and the remaining 2 tablespoons olive oil and toss vigorously until glossy. Season to taste with salt and pepper.
5. Transfer to serving plates or bowls, top with any broccoli rabe remaining in the pot. If you like, crown each bowl with a glug of olive oil, and zest some lemon over and spritz with a squeeze of lemon juice.

## Tags
- Stovetop
- Quick
- Weeknight
- Broccoli Rabe
- Yellow Onion
- Miso
- Spaghetti
- Linguine
- Fall
- Vegetarian
- Vegan
- Dairy-Free

## Notes
`,ip=`---
title: "Spicy Mushroom and Tofu Mazemen"
source: "https://cooking.nytimes.com/recipes/1025021-spicy-mushroom-and-tofu-mazemen?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT20M"
total_time: "PT30M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - noodles
  - main course
  - side dish
tags:
  - bok choy
  - chile crisp
  - extra-firm tofu
  - miso
  - mushroom
  - ramen noodle
  - sesame paste
  - stovetop
  - vegan
  - vegetarian
  - Japanese
cuisine: "japanese"
image: "https://static01.nyt.com/images/2024/03/20/multimedia/hm-mushroom-mazeman-gqmc/hm-mushroom-mazeman-gqmc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spicy Mushroom and Tofu Mazemen

> Source: https://cooking.nytimes.com/recipes/1025021-spicy-mushroom-and-tofu-mazemen?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Mazemen, sometimes known as mazesoba or abura soba, is a brothless ramen dish believed to have originated in Nagoya, Japan. Inspired by a punchier and spicier Taiwanese flavor profile, the soup is replaced with an intensely savory sauce. In this vegan take, this sesame paste-based sauce delivers a rich finish, bolstered with umami agents such as miso, soy sauce and chile crisp. Mazemen, which translates to mixed noodles in Japanese, should be tossed before eating, so that the sauce and the toppings distribute evenly through the noodles. While this recipe is vegan, an egg yolk or an onsen tamago (soft-cooked egg) is a common mazemen topping, which falls apart as it is tossed through the noodles, leaving a silky and creamy finish.

## Ingredients
- Canola or vegetable oil
- 8 ounces mushrooms (such as cremini, button or shiitake), sliced
- Salt and pepper
- 1 (14- to 16-ounce) package extrafirm tofu, drained and crumbled into 1/2-inch chunks
- 4 baby bok choy (about 12 ounces), each trimmed and cut into 4 pieces through the stem
- 12 ounces dried ramen noodles
- 2 scallions, thinly sliced
- 1/4 cup Chinese or Japanese sesame paste, or tahini
- 8 teaspoons chile crisp
- 4 teaspoons white (shiro) miso paste
- 4 teaspoons soy sauce
- Just-boiled water

## Instructions
1. Prepare the mazemen: Heat a large skillet on medium-high. When hot, add 1 to 2 tablespoons of oil, along with the mushrooms. Season with salt and pepper. Cook, tossing occasionally, until the mushrooms have softened, with golden edges, 4 to 5 minutes. Remove from the pan.
2. Drizzle the pan with another 2 tablespoons of oil, add the tofu and cook over medium-high, tossing occasionally, until golden, 5 to 7 minutes. (The tofu will break up more as you toss it, which is fine.)
3. Meanwhile, bring a large pot of salted water to a boil. Add the baby bok boy and cook for 1 1/2 to 2 minutes, until the stems are just tender and the leaves are bright green. Using tongs, remove the greens from the water and place in a colander.
4. To the same pot of water, add the ramen noodles and cook according to packet instructions, until just tender.
5. Meanwhile make the sauce: In a large bowl, add the sesame paste, chile crisp, miso paste, soy sauce and ½ cup just-boiled water; whisk to combine.
6. Drain the noodles. Add them to the sauce and, using tongs or chopsticks, toss everything together until the noodles are coated. (If the sauce is very thick, add another tablespoon or two of just-boiled water to help loosen up the noodles.)
7. Divide the noodles evenly among serving bowls and top each with the baby bok choy, mushrooms and tofu. Top with scallions, toss everything together and serve immediately.

## Tags
- bok choy
- chile crisp
- extra-firm tofu
- miso
- mushroom
- ramen noodle
- sesame paste
- stovetop
- vegan
- vegetarian
- Japanese

## Notes
`,lp=`---
title: "Strawberry Galette"
source: "https://cooking.nytimes.com/recipes/1023208-strawberry-galette?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Naz Deravian"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H30M"
categories:
  - dessert
tags:
  - almond flour
  - strawberry
  - tart
  - yogurt
  - fourth of july
  - labor day
  - memorial day
  - summer
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2022/05/20/dining/nd-strawberry-galette/merlin_206514768_d6616c67-27f9-44ef-afd0-c1506bf54c20-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Strawberry Galette

> Source: https://cooking.nytimes.com/recipes/1023208-strawberry-galette?campaign_id=58&emc=edit_ck_20260412&instance_id=173904&nl=cooking&regi_id=197868639&segment_id=218116&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A strawberry galette served with a side of fresh whipped cream or ice cream is a spring salve that is just as soothing to prepare for oneself as it is to share with others. Inspired by the baker Alice Medrich’s yogurt-butter pie dough, the dough in this recipe includes almond flour for a flaky, subtly nutty crust that comes together without much fuss. This dough is very forgiving and works well with the rustic charm of a galette. It’s OK if the edges of the crust crack and some juices leak. Even out-of-season strawberries would work, as there’s just enough sugar here to coax them back to life. Make sure you give the galette enough time to rest before slicing into it, so that the juices have time to set.

## Ingredients
- 1 cup/120 grams all-purpose flour, plus more for dusting
- 1/2 cup/50 grams almond flour (from blanched, skinless almonds, not almond meal)
- 8 tablespoons/113 grams very cold unsalted butter
- 1/4 cup/60 grams cold plain whole yogurt (not Greek)
- 1 tablespoon ice-cold water, plus up to 3 tablespoons more, if needed
- 1 teaspoon granulated sugar, plus more for sprinkling
- 1/2 teaspoon kosher salt (such as Diamond Crystal)
- 1 egg beaten with 1 teaspoon yogurt or water (for the egg wash)
- 1/2 to 3/4 cup/100 grams to 150 grams granulated sugar
- 1/2 teaspoon finely grated lemon zest
- 1 1/2 pounds stemmed strawberries (about 5 cups), sliced
- 3 tablespoons cornstarch
- Small pinch of salt

## Instructions
1. Make the crust: Whisk the all-purpose flour and the almond flour in a large bowl, then set aside. (It’s best to stick it in the freezer for about 15 minutes until ready to use, to ensure a well-chilled dough.)
2. Slice 3 tablespoons of the butter as thinly as possible without getting obsessive about it. (It’s OK if pieces break.) Cut the remaining 5 tablespoons of butter into 1/2-inch cubes. Keeping the sliced butter and cubed butter separate, set the butter in the fridge to chill until ready to use.
3. In a small bowl or measuring cup, mix the 1/4 cup yogurt with 1 tablespoon of the water and keep cold in the fridge until ready to use.
4. Whisk the flour mixture with the 1 teaspoon sugar and the salt. Spread the cubed butter pieces over the flour and cut the butter into the flour using a pastry blender or your fingers until the chunks look slightly smaller than pea size. Toss the butter slices with the flour mixture, separating them as you go, then gently press them into the flour between your fingers into flat sheets. (This extra step is helpful in creating pockets of steam, which will make for a flakier crust, an added bonus for pie dough makers of any skill!)
5. Drizzle the chilled yogurt over the flour and butter mixture. Use a spatula or a wooden spoon to toss and combine. If the dough seems dry, drizzle with 1 tablespoon of the ice water, and continue tossing and combining, incorporating any dry flour bits at the bottom of the bowl and scraping off the spatula as you go, until the mixture just comes together in a mound. If needed, drizzle more ice water, 1 tablespoon at a time, without allowing the dough to get too wet.
6. Transfer the dough to a large piece of plastic wrap, then press the dough into a 6-inch disk and wrap well. Refrigerate for at least 2 hours or up to 3 days.
7. Heat oven to 400 degrees with the rack in the center position. Line a sheet pan with parchment paper.
8. Prepare the filling: Place 1/2 cup sugar and the lemon zest in a large bowl and rub the lemon zest into the sugar with your fingertips. Add the strawberries, cornstarch and salt; mix well to combine, making sure the cornstarch is well incorporated. Add up to another 1/4 cup sugar if desired, depending on the sweetness of your strawberries and your desired level of sweetness.
9. Dust your countertop with flour, then transfer the chilled dough to it and sprinkle a little flour on top of the dough. Roll the dough out to a 12- to 14-inch round, lightly flouring as needed. (It’s OK if the edges break and the shape isn’t perfectly round.) Gently transfer the dough by rolling it over a rolling pin and onto the prepared baking sheet. (At this point, if you’ve forgotten something, like preparing the egg wash, or if your dough has warmed up slightly, place the sheet pan in the fridge for a few minutes.)
10. Mound the strawberries and their juices in the middle of the dough and leave a 2-inch border. Fold the border over the fruit, pleating as you fold and leaving the center of the galette exposed. Brush the crust with the egg wash and sprinkle with sugar.
11. Bake until the crust is golden and the strawberries are bubbling, about 35 minutes. It’s OK if some juices leak. Cool on a wire rack for 1 hour and serve.

## Tags
- almond flour
- strawberry
- tart
- yogurt
- fourth of july
- labor day
- memorial day
- summer
- American

## Notes
`,op=`---
title: "Tahini and Chocolate Chunk Cake"
source: "https://cooking.nytimes.com/recipes/775762235-tahini-and-chocolate-chunk-cake?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Samantha Seneviratne"
yield: "16 servings"
prep_time: "PT0H10M"
cook_time: "PT1H20M"
total_time: "PT1H30M"
categories:
  - Cake
  - Dessert
tags:
  - Tahini
  - Semisweet Chocolate
  - Sesame Seed
  - One Bowl
  - Easy
  - Freezer Friendly
  - Make-Ahead
  - Bake
  - Vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/09/multimedia/SS-Tahini-and-Chocolate-Chunk-Cake-1-wbpv/SS-Tahini-and-Chocolate-Chunk-Cake-1-wbpv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Tahini and Chocolate Chunk Cake

> Source: https://cooking.nytimes.com/recipes/775762235-tahini-and-chocolate-chunk-cake?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Tahini, a smooth paste made from ground sesame seeds, is nothing short of a pantry superstar — both sweet and savory dishes benefit from a healthy swig of the rich, creamy sauce. Here, tahini flavors a one-bowl yellow cake, giving it a pillowy texture and nutty flavor. Swirled with chocolate, it’s reminiscent of your favorite halvah candy. Be sure to use semisweet chocolate – anything darker is too sour and would clash with the sesame.

## Ingredients
- 2 tablespoons vegetable or canola oil, plus more for the pan
- ⅔ cup/170 grams tahini, well-stirred
- 1 large egg
- 1 large egg yolk
- ¾ cup/177 milliliters whole milk
- ¾ cup/150 grams plus 2 tablespoons sugar
- 1 tablespoon vanilla extract
- 1½ cups/192 grams all-purpose flour
- 2 teaspoons baking powder
- 1 teaspoon kosher salt (such as Diamond Crystal)
- 1 cup/115 grams coarsely chopped semisweet chocolate
- ¼ cup/30 grams plus 1 tablespoon sesame seeds, toasted (see Tip)

## Instructions
1. Heat the oven to 350. Oil a 9-inch square baking pan and line it with parchment, leaving a 2-inch overhang on two sides.
2. In a large bowl, whisk together the oil and tahini. Add the egg, egg yolk and milk and whisk until completely smooth. Whisk in ¾ cup sugar and the vanilla.
3. Add the flour, baking powder and salt and fold in with a rubber spatula. Reserve about 2 tablespoons of the chocolate and add the remainder to the batter. Fold in 1 tablespoon sesame seeds.
4. Transfer the batter to the prepared pan. Sprinkle the reserved chocolate, the remaining ¼ cup sesame seeds and remaining 2 tablespoons sugar evenly over the top. Bake until the cake is puffed and set and a toothpick inserted into the center comes out almost clean with a few moist crumbs attached, 25 to 30 minutes. Let cool 10 minutes in the pan, then lift the cake out of the pan using the parchment overhang and transfer to a wire rack to cool completely.
5. To serve, cut the cooled cake into 16 pieces. Store leftovers in an airtight container for up to 3 days or freeze for up to 3 months. Thaw uncovered at room temperature before serving.

## Tags
- Tahini
- Semisweet Chocolate
- Sesame Seed
- One Bowl
- Easy
- Freezer Friendly
- Make-Ahead
- Bake
- Vegetarian

## Notes
`,sp=`---
title: "Tofu Laab"
source: "https://cooking.nytimes.com/recipes/1022299-tofu-laab?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - lunch
  - quick
  - weeknight
  - beans
  - main course
tags:
  - butter lettuce
  - extra-firm tofu
  - jasmine rice
  - kid-friendly
  - lemongrass
  - shallot
  - vegan
  - vegetarian
  - Thai
cuisine: "thai"
image: "https://static01.nyt.com/images/2021/08/11/dining/11Veggie-tofu-larb-a/merlin_188546805_b6a2a32b-5635-46e5-82b6-b11b7ed5ac3f-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Tofu Laab

> Source: https://cooking.nytimes.com/recipes/1022299-tofu-laab?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Laab (also spelled larb), a ground meat dish seasoned with fresh herbs popular in the Northeastern and Northern regions of Thailand, originated in Laos. This vegan version requires minimal cooking and features crumbled extra-firm tofu, which soaks up the spicy, citrusy sauce like a sponge. Toasted ground rice is a traditional addition that adds a lovely aroma and nuttiness while thickening the sauce. Makrut lime leaves and crispy fried shallots can be found at Asian grocery stores, at some larger supermarket chains, or online, but both can be omitted. Crispy shallots bring a bit of crunch on top, but chopped, roasted peanuts would also work. Eat it with lettuce leaves for a light meal, or if you’re looking for something more substantial, serve it with sticky or regular rice. For those who are looking for even more spice, top with sliced fresh chiles.
 
To get vegetarian recipes like this one delivered to your inbox, sign up for The Veggie newsletter.

## Ingredients
- 3 tablespoons uncooked glutinous (sticky) or jasmine rice
- 2 (14-ounce) packages extra-firm tofu, drained and patted dry
- 1 tablespoon neutral oil, such as grapeseed or vegetable
- 1 lemongrass stem, outer layer removed, tender stem finely chopped
- 1 shallot, halved and thinly sliced
- 4 makrut lime leaves (optional), thinly sliced
- 1 cup mixed soft herbs, such as mint, Thai basil, basil, cilantro and chopped scallions
- 1 teaspoon kosher salt, plus more as needed
- 1 head butter lettuce, leaves separated
- 1/4 cup store-bought crispy fried shallots or onions
- 4 tablespoons fresh lime juice (from about 2 limes)
- 3 tablespoons dark or light brown sugar
- 2 tablespoons soy sauce or tamari
- 1/2 teaspoon red-pepper flakes or 1/2 to 1 red chile, such as bird’s eye, finely chopped

## Instructions
1. Make the toasted rice powder: Heat a medium (10-inch) skillet over medium-high. Add the rice and stir constantly for 4 to 6 minutes until golden, with a nutty aroma. Transfer rice to a mortar and pestle or spice grinder and grind until it is a coarse powder. (You don’t want it too fine; some texture is nice.) You should have about 3 1/2 tablespoons. Set rice powder aside.
2. Make the dressing: In a small bowl, combine the lime juice, brown sugar, soy sauce and red-pepper flakes; whisk until the sugar is dissolved.
3. Crumble the tofu into small chunks and place in a large bowl.
4. Heat the medium skillet over medium-high and add 1 tablespoon oil. Add the lemongrass and shallot and cook, stirring constantly, until softened and aromatic, about 2 minutes. Remove from heat and add to the tofu, along with the lime dressing, rice powder, makrut lime leaves, herbs and salt. Taste and add more salt if needed.
5. To serve, spoon the tofu laab into the lettuce leaves and garnish with crispy fried shallots.

## Tags
- butter lettuce
- extra-firm tofu
- jasmine rice
- kid-friendly
- lemongrass
- shallot
- vegan
- vegetarian
- Thai

## Notes
`,up=`---
title: "Tzatziki Chickpea Salad"
source: "https://cooking.nytimes.com/recipes/1025698-tzatziki-chickpea-salad?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT5M"
total_time: "PT15M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - beans
  - main course
  - side dish
tags:
  - chickpea
  - cucumber
  - dill
  - greek yogurt
  - mint
  - salad
  - summer
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/08/14/multimedia/hm-tzatziki-and-chickpea-saladrex-jwqc/hm-tzatziki-and-chickpea-saladrex-jwqc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Tzatziki Chickpea Salad

> Source: https://cooking.nytimes.com/recipes/1025698-tzatziki-chickpea-salad?campaign_id=58&emc=edit_ck_20260413&instance_id=173891&nl=cooking&regi_id=197868639&segment_id=218159&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Vibrant with the sharp creaminess of tzatziki, the Greek yogurt dip, this dish embodies the cool, easy eating of the warmer months. Crisp cucumbers and hearty chickpeas are dressed with a lemony and garlicky Greek yogurt mixture. A hint of honey brings harmony to the dressing; the hum of sweetness softens the tartness of the yogurt and introduces a richness to the dish. This no-cook salad is hearty enough for a standalone meal, but should you wish to dress it up, here are a few serving suggestions: Eat with flatbread, falafel, veggie skewers, or roasted Greek lemon potatoes.

## Ingredients
- 1 cup Greek yogurt
- 1 garlic clove, grated
- 2 tablespoons olive oil, plus more for serving
- 2 teaspoons honey
- 1 lemon, halved (or more, if desired, for seasoning)
- Salt and pepper
- 1 pound Persian cucumbers, halved lengthwise and cut into 1/2-inch pieces
- 2 (15-ounce) cans chickpeas, drained
- Big handful dill, chopped
- Big handful mint leaves, chopped
- 2 scallions, thinly sliced

## Instructions
1. To a large bowl, add the yogurt, garlic, olive oil, honey and the juice of 1/2 lemon; whisk to combine. If it seems too thick, loosen it up with a splash of water or more lemon juice. Season well with salt and pepper.
2. To the yogurt, add the cucumbers, chickpeas, dill, mint and scallions, and squeeze the remaining 1/2 lemon over the mixture. Toss to coat. Taste and season well with salt and pepper.
3. To serve, drizzle with additional olive oil.

## Tags
- chickpea
- cucumber
- dill
- greek yogurt
- mint
- salad
- summer
- vegetarian

## Notes
`,cp=`---
title: "Za’atar Roasted Tofu With Chickpeas, Tomatoes and Lemony Tahini"
source: "https://cooking.nytimes.com/recipes/1023630-zaatar-roasted-tofu-with-chickpeas-tomatoes-and-lemony-tahini?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - dinner
  - easy
  - lunch
  - beans
  - main course
tags:
  - cherry tomato
  - chickpea
  - firm tofu
  - leafy greens
  - sheet-pan
  - soy sauce
  - tahini
  - za’atar
  - healthy
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/03/17/multimedia/YK-ZAATAR-ROASTED-TOFU-vkpt/YK-ZAATAR-ROASTED-TOFU-vkpt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Za’atar Roasted Tofu With Chickpeas, Tomatoes and Lemony Tahini

> Source: https://cooking.nytimes.com/recipes/1023630-zaatar-roasted-tofu-with-chickpeas-tomatoes-and-lemony-tahini?campaign_id=58&emc=edit_ck_20260416&instance_id=174114&nl=cooking&regi_id=197868639&segment_id=218323&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Tofu and chickpeas form the hearty base for vibrant, woodsy za’atar, the popular Middle Eastern spice blend. The tomatoes, when roasted, become acidic, little bursts in the salad, a great complement to the earthiness of the other ingredients. The roasted vegetables, chickpeas and tofu and the tahini dressing will keep for days once refrigerated. Assemble your bowl to order, and enjoy it for lunch or as a light dinner.

## Ingredients
- 1 (14-ounce) package firm tofu, drained and patted dry
- 1 (15 1/2-ounce) can chickpeas, drained, rinsed and patted dry
- 1 pint cherry or grape tomatoes
- Salt and pepper
- 3 garlic cloves
- 2 lemons
- 1/2 cup extra-virgin olive oil
- 1 1/2 tablespoons za’atar dry spice mix (see Tip)
- 1 teaspoon dried oregano or marjoram
- 1/2 cup chopped flat-leaf parsley
- 2 tablespoons soy sauce
- 1/4 cup tahini
- 1 tablespoon honey
- 1 (8-ounce) bag leafy greens, such as baby spinach, baby kale or mixed greens

## Instructions
1. Heat oven to 425 degrees. Cut the tofu into 1/2-inch-thick slices and place them on a kitchen or paper towel to dry out.
2. Combine the chickpeas and tomatoes on a half-sheet pan and sprinkle with salt and black pepper to season.
3. Using a Microplane or other fine grater, grate the garlic cloves and zest 1 lemon into a large bowl. Squeeze 1/4 cup juice from the lemon (using the second lemon if needed) and reserve. Add the oil, za’atar, oregano and ¼ cup chopped parsley to the garlic mixture and stir to combine. Pour half of the marinade over the chickpeas and tomatoes, toss to combine and spread in an even layer. Roast until the tomatoes are just beginning to burst open and the chickpeas are warmed through, about 15 minutes.
4. Meanwhile, add the soy sauce to the remaining marinade and stir. Add the tofu slices to the bowl and carefully turn each piece to coat both sides. Allow the tofu to marinate while the chickpea mixture cooks, then nestle the tofu slices, topped with any leftover marinade in the bowl, among the chickpeas and tomatoes on the sheet pan.
5. Roast until the tofu begins to brown around the edges and top, the tomatoes have burst open releasing their juices and the chickpeas are golden brown and crunchy, about 15 minutes.
6. While the tofu roasts, whisk together the tahini, honey, reserved lemon juice and 2 tablespoons of water. Season to taste with salt and black pepper.
7. Divide the leafy greens among 4 bowls. Dress the tofu, chickpeas and tomatoes on the baking sheet with 4 tablespoons of the tahini mixture and sprinkle with the remaining ¼ cup parsley. Divide evenly among the bowls and spoon additional dressing all over everything.

## Tags
- cherry tomato
- chickpea
- firm tofu
- leafy greens
- sheet-pan
- soy sauce
- tahini
- za’atar
- healthy
- vegetarian

## Notes
`,rp=Object.assign({"../../recipes/b-l-c-l-c-shaking-beef.md":Ag,"../../recipes/baked-wild-salmon.md":Eg,"../../recipes/banana-cake-with-caramel-glaze.md":Mg,"../../recipes/braised-chicken-with-rosemary-and-crispy-artichokes.md":jg,"../../recipes/buttered-cabbage-and-eggs.md":Dg,"../../recipes/cheesy-gnocchi-with-corn-and-pesto.md":Og,"../../recipes/chile-crisp-chicken-cutlets.md":Cg,"../../recipes/citrus-salad-with-fennel-and-olives.md":Ng,"../../recipes/citrusy-roasted-salmon-and-potatoes.md":xg,"../../recipes/crispy-gnocchi-with-spinach-and-feta.md":Hg,"../../recipes/crispy-tofu-tacos.md":Bg,"../../recipes/crispy-tofu-with-cashews-and-blistered-snap-peas.md":Rg,"../../recipes/fettuccine-alfredo.md":Ug,"../../recipes/five-ingredient-creamy-miso-pasta.md":qg,"../../recipes/greek-lemon-potatoes.md":Gg,"../../recipes/jammy-eggs-with-asparagus-and-chipotle.md":Yg,"../../recipes/lemon-bars.md":Lg,"../../recipes/one-pot-creamy-pasta-and-greens.md":Qg,"../../recipes/pink-grapefruit-bars.md":Xg,"../../recipes/pork-bulgogi-with-spring-vegetables.md":Zg,"../../recipes/pork-laab.md":Vg,"../../recipes/red-curry-lentils-with-sweet-potatoes-and-spinach.md":Kg,"../../recipes/roasted-mushroom-laab.md":Jg,"../../recipes/salmon-with-avocado-and-cilantro-salad.md":Wg,"../../recipes/san-choy-bao-pork-lettuce-wraps.md":Fg,"../../recipes/sheet-pan-chicken-and-potatoes-with-feta-lemon-and-dill.md":$g,"../../recipes/sheet-pan-hot-honey-chicken.md":Ig,"../../recipes/sheet-pan-shrimp-tikka.md":Pg,"../../recipes/shrimp-guisado-tacos.md":ep,"../../recipes/snapper-escovitch.md":tp,"../../recipes/spiced-chicken-with-sweet-potatoes.md":np,"../../recipes/spicy-broccoli-rabe-pasta.md":ap,"../../recipes/spicy-mushroom-and-tofu-mazemen.md":ip,"../../recipes/strawberry-galette.md":lp,"../../recipes/tahini-and-chocolate-chunk-cake.md":op,"../../recipes/tofu-laab.md":sp,"../../recipes/tzatziki-chickpea-salad.md":up,"../../recipes/za-atar-roasted-tofu-with-chickpeas-tomatoes-and-lemony-tahini.md":cp});function dp(){return Object.entries(rp).map(([p,z])=>hp(p,z)).filter(Boolean).sort((p,z)=>p.title.localeCompare(z.title))}function hp(p,z){if(typeof z!="string"||!z.trim())return null;const{frontmatter:A,body:h}=fp(z),D=Xn(A.title||pp(h)||bp(p)),R=gp(h);return{id:yp(`${D}-${p}`),path:p,title:D,author:Xn(A.author||""),source:A.source||"",yield:A.yield||"",prepTime:yu(A.prep_time||""),cookTime:yu(A.cook_time||""),totalTime:yu(A.total_time||""),cuisine:Xn(A.cuisine||""),image:A.image||"",dateSaved:A.date_saved||"",categories:Hh(A.categories),tags:Hh(A.tags),description:R.description,ingredients:R.ingredients,instructions:R.instructions,notes:R.notes,raw:z}}function fp(p){const z=p.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);return z?{frontmatter:mp(z[1]),body:z[2]}:{frontmatter:{},body:p}}function mp(p){const z={},A=p.split(/\r?\n/);let h="";for(const D of A){if(!D.trim())continue;const R=D.match(/^([A-Za-z0-9_]+):\s*(.*)$/);if(R){h=R[1];const I=R[2].trim();if(!I){z[h]=[];continue}z[h]=Ch(I);continue}const ne=D.match(/^\s*-\s+(.*)$/);ne&&h&&(Array.isArray(z[h])||(z[h]=[]),z[h].push(Ch(ne[1])))}return z}function Ch(p){const z=p.trim();return z.startsWith('"')&&z.endsWith('"')||z.startsWith("'")&&z.endsWith("'")?z.slice(1,-1):z}function gp(p){const z={};let A="description";for(const h of p.split(/\r?\n/)){if(h.startsWith("# "))continue;const D=h.match(/^##\s+(.*)$/);if(D){A=D[1].trim().toLowerCase(),z[A]=[];continue}z[A]||(z[A]=[]),z[A].push(h)}return{description:Nh(z.description||[]),ingredients:xh(z.ingredients||[]),instructions:xh(z.instructions||[],!0),notes:Nh(z.notes||[])}}function Nh(p){return p.join(`
`).split(/\n\s*\n/).map(z=>z.replace(/^\s*>\s?/gm,"").trim()).filter(Boolean).map(Xn)}function xh(p,z=!1){return p.map(A=>z?A.replace(/^\s*\d+\.\s+/,"").trim():A.replace(/^\s*[-*]\s+/,"").trim()).filter(Boolean).map(Xn)}function pp(p){const z=p.match(/^#\s+(.*)$/m);return z?z[1].trim():""}function Hh(p){return p?(Array.isArray(p)?p:[p]).map(A=>Xn(String(A))).filter(Boolean):[]}function yu(p){if(!p)return"";const z=Xn(String(p)),A=z.match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/i);if(!A)return z;const h=Number(A[1]||0),D=Number(A[2]||0),R=[];return h&&R.push(`${h} hr`),D&&R.push(`${D} min`),R.join(" ")}function yp(p){return p.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function bp(p){return p.split("/").pop()?.replace(/\.md$/i,"")||"recipe"}function Xn(p){if(!p||!/[ÃÂâ]/.test(p))return p;try{const z=new Uint8Array([...p].map(h=>h.charCodeAt(0)&255)),A=new TextDecoder("utf-8",{fatal:!1}).decode(z);return A.includes("�")?p:A}catch{return p}}const wn=5,Ai="#/",bu="#/recipe/",Zl=dp(),Ti=qh(Zl,"tags"),zi=qh(Zl,"categories");function vp(){const[p,z]=Xe.useState(""),[A,h]=Xe.useState(""),[D,R]=Xe.useState(""),[ne,I]=Xe.useState(wn),[O,w]=Xe.useState(wn),[q,E]=Xe.useState(Rh()),[P,fe]=Xe.useState(!1),[Te,ve]=Xe.useState(null),[kt,Ge]=Xe.useState(Tp()),[St,je]=Xe.useState(!1);Xe.useEffect(()=>{const C=()=>E(Rh());return window.addEventListener("hashchange",C),C(),()=>window.removeEventListener("hashchange",C)},[]),Xe.useEffect(()=>{q.type!=="list"&&fe(!1)},[q]),Xe.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[q]),Xe.useEffect(()=>{const C=wt=>{wt.preventDefault(),ve(wt)},_e=()=>{ve(null),Ge(!0),je(!1)};return window.addEventListener("beforeinstallprompt",C),window.addEventListener("appinstalled",_e),()=>{window.removeEventListener("beforeinstallprompt",C),window.removeEventListener("appinstalled",_e)}},[]);const Ye=!kt,ct=zp();async function Ne(){if(Te){Te.prompt(),await Te.userChoice,ve(null);return}ct&&je(C=>!C)}const Z=Zl.filter(C=>{const _e=!p||[C.title,C.author,C.cuisine,C.description.join(" "),C.tags.join(" "),C.categories.join(" "),C.ingredients.join(" ")].join(" ").toLowerCase().includes(p.toLowerCase()),wt=!A||C.tags.includes(A),rt=!D||C.categories.includes(D);return _e&&wt&&rt});if(q.type==="recipe"){const C=Zl.find(_e=>_e.id===q.recipeId)??null;return T.jsxs("div",{className:"shell",children:[T.jsxs("header",{className:"hero",children:[T.jsx("div",{className:"hero-spacer","aria-hidden":"true"}),T.jsx("a",{className:"hero-title-link",href:Ai,children:T.jsx("h1",{children:"Stovetop"})}),Ye?T.jsx("button",{type:"button",className:"install-button",onClick:Ne,children:"Install"}):T.jsx("div",{className:"hero-spacer","aria-hidden":"true"})]}),T.jsxs("main",{className:"page-layout",children:[St?T.jsx(Bh,{}):null,C?T.jsx(_p,{recipe:C}):T.jsx(kp,{})]})]})}return T.jsxs("div",{className:"shell",children:[T.jsxs("header",{className:"hero",children:[T.jsx("button",{type:"button",className:P?"hero-icon-button active":"hero-icon-button","aria-expanded":P,"aria-controls":"mobile-filters","aria-label":"Toggle search and filters",onClick:()=>fe(C=>!C),children:T.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.44 1.06-1.06-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",fill:"currentColor"})})}),T.jsx("a",{className:"hero-title-link",href:Ai,children:T.jsx("h1",{children:"Stovetop"})}),Ye?T.jsx("button",{type:"button",className:"install-button",onClick:Ne,children:"Install"}):T.jsx("div",{className:"hero-spacer","aria-hidden":"true"})]}),T.jsxs("main",{className:"page-layout",children:[St?T.jsx(Bh,{}):null,T.jsxs("section",{className:"sidebar library-page",children:[T.jsxs("div",{id:"mobile-filters",className:P?"filter-panel mobile-open":"filter-panel",children:[T.jsxs("label",{className:"search",children:[T.jsx("span",{children:"Search"}),T.jsx("input",{type:"search",value:p,onChange:C=>z(C.target.value),placeholder:"Search title, ingredient, tag..."})]}),T.jsxs("div",{className:"filter-group",children:[T.jsxs("div",{className:"filter-header",children:[T.jsx("h2",{children:"Categories"}),D?T.jsx("button",{type:"button",onClick:()=>R(""),children:"Clear"}):null]}),T.jsx("div",{className:"chips",children:zi.slice(0,O).map(({value:C,count:_e})=>T.jsxs("button",{type:"button",className:C===D?"chip active":"chip",onClick:()=>R(C===D?"":C),children:[T.jsx("span",{children:C}),T.jsx("span",{className:"chip-count",children:_e})]},C))}),zi.length>wn?T.jsx("button",{type:"button",className:"show-more-button",onClick:()=>w(C=>C>=zi.length?wn:Math.min(C+wn,zi.length)),children:O>=zi.length?"Show Less":"Show More"}):null]}),T.jsxs("div",{className:"filter-group",children:[T.jsxs("div",{className:"filter-header",children:[T.jsx("h2",{children:"Tags"}),A?T.jsx("button",{type:"button",onClick:()=>h(""),children:"Clear"}):null]}),T.jsx("div",{className:"chips",children:Ti.slice(0,ne).map(({value:C,count:_e})=>T.jsxs("button",{type:"button",className:C===A?"chip active":"chip",onClick:()=>h(C===A?"":C),children:[T.jsx("span",{children:C}),T.jsx("span",{className:"chip-count",children:_e})]},C))}),Ti.length>wn?T.jsx("button",{type:"button",className:"show-more-button",onClick:()=>I(C=>C>=Ti.length?wn:Math.min(C+wn,Ti.length)),children:ne>=Ti.length?"Show Less":"Show More"}):null]})]}),T.jsxs("section",{className:"recipe-list",children:[T.jsxs("div",{className:"filter-header",children:[T.jsx("h2",{children:"Recipes"}),T.jsx("span",{children:Z.length})]}),Z.length?T.jsx("div",{className:"recipe-card-grid",children:Z.map(C=>T.jsxs("a",{className:"recipe-card",href:Sp(C.id),onClick:wp,children:[T.jsx("div",{className:"recipe-card-image-frame",children:C.image?T.jsx("img",{className:"recipe-card-image",src:C.image,alt:C.title,loading:"lazy"}):T.jsx("div",{className:"recipe-card-image-placeholder",children:T.jsx("span",{children:C.cuisine||"Recipe"})})}),T.jsx("span",{className:"recipe-card-title",children:C.title})]},C.id))}):T.jsx("p",{className:"empty-state",children:"No recipes match the current filters."})]})]})]})]})}function _p({recipe:p}){return T.jsxs("article",{className:"recipe-detail recipe-page",children:[T.jsx("a",{className:"back-link",href:Ai,children:"Back to Recipes"}),T.jsxs("div",{className:"detail-header",children:[T.jsxs("div",{children:[T.jsx("p",{className:"eyebrow",children:p.cuisine||"Recipe"}),T.jsx("h2",{children:p.title}),T.jsx("p",{className:"detail-meta",children:[p.author,p.yield,p.prepTime&&`Prep ${p.prepTime}`,p.cookTime&&`Cook ${p.cookTime}`,p.totalTime&&`Total ${p.totalTime}`].filter(Boolean).join(" • ")})]}),p.image?T.jsx("div",{className:"recipe-image-frame",children:T.jsx("img",{className:"recipe-image",src:p.image,alt:p.title,loading:"lazy"})}):null]}),p.description.length?T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Description"}),p.description.map(z=>T.jsx("p",{children:z},z))]}):null,T.jsxs("div",{className:"detail-grid",children:[T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Ingredients"}),T.jsx("ul",{className:"ingredient-list",children:p.ingredients.map(z=>T.jsx("li",{children:z},z))})]}),T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Instructions"}),T.jsx("ol",{className:"instruction-list",children:p.instructions.map(z=>T.jsx("li",{children:z},z))})]})]}),p.notes.length?T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Notes"}),p.notes.map(z=>T.jsx("p",{children:z},z))]}):null,T.jsxs("footer",{className:"detail-footer",children:[T.jsxs("div",{className:"chips",children:[p.categories.map(z=>T.jsx("span",{className:"chip static",children:z},z)),p.tags.map(z=>T.jsx("span",{className:"chip static",children:z},z))]}),T.jsxs("p",{className:"source-line",children:[p.source?T.jsx("a",{href:p.source,target:"_blank",rel:"noreferrer",children:"Original source"}):"No source URL",p.dateSaved?` • Saved ${p.dateSaved}`:""]})]})]})}function kp(){return T.jsxs("article",{className:"empty-library",children:[T.jsx("h2",{children:"Recipe not found"}),T.jsx("p",{children:"The requested recipe could not be found. Return to the library to choose another one."}),T.jsx("a",{className:"back-link",href:Ai,children:"Back to Library"})]})}function Bh(){return T.jsxs("section",{className:"install-help",children:[T.jsx("h2",{children:"Install Stovetop"}),T.jsx("p",{children:"On iPhone or iPad, open the browser share menu and choose Add to Home Screen."}),T.jsx("p",{children:"When installed from a proper HTTPS site, Stovetop opens as its own app window instead of a normal browser tab."})]})}function Rh(){const p=window.location.hash||Ai;return p.startsWith(bu)?{type:"recipe",recipeId:decodeURIComponent(p.slice(bu.length))}:{type:"list"}}function Sp(p){return`${bu}${encodeURIComponent(p)}`}function wp(){window.scrollTo({top:0,left:0,behavior:"auto"})}function Tp(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function zp(){const p=window.navigator.userAgent||"";return/iPad|iPhone|iPod/.test(p)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1}function qh(p,z){const A=new Map;for(const h of p)for(const D of h[z]||[])A.set(D,(A.get(D)||0)+1);return[...A.entries()].map(([h,D])=>({value:h,count:D})).sort((h,D)=>D.count-h.count||h.value.localeCompare(D.value))}zg({immediate:!0});kg.createRoot(document.getElementById("root")).render(T.jsx(fg.StrictMode,{children:T.jsx(vp,{})}));
