(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))u(x);new MutationObserver(x=>{for(const q of x)if(q.type==="childList")for(const te of q.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&u(te)}).observe(document,{childList:!0,subtree:!0});function A(x){const q={};return x.integrity&&(q.integrity=x.integrity),x.referrerPolicy&&(q.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?q.credentials="include":x.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function u(x){if(x.ep)return;x.ep=!0;const q=A(x);fetch(x.href,q)}})();function Pu(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var hl={exports:{}},_i={};var wu;function cm(){if(wu)return _i;wu=1;var f=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function A(u,x,q){var te=null;if(q!==void 0&&(te=""+q),x.key!==void 0&&(te=""+x.key),"key"in x){q={};for(var F in x)F!=="key"&&(q[F]=x[F])}else q=x;return x=q.ref,{$$typeof:f,type:u,key:te,ref:x!==void 0?x:null,props:q}}return _i.Fragment=z,_i.jsx=A,_i.jsxs=A,_i}var _u;function dm(){return _u||(_u=1,hl.exports=cm()),hl.exports}var T=dm(),ul={exports:{}},I={};var Su;function hm(){if(Su)return I;Su=1;var f=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),te=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),$=Symbol.iterator;function pe(d){return d===null||typeof d!="object"?null:(d=$&&d[$]||d["@@iterator"],typeof d=="function"?d:null)}var Te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ke=Object.assign,_n={};function Ge(d,_,j){this.props=d,this.context=_,this.refs=_n,this.updater=j||Te}Ge.prototype.isReactComponent={},Ge.prototype.setState=function(d,_){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,_,"setState")},Ge.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Sn(){}Sn.prototype=Ge.prototype;function je(d,_,j){this.props=d,this.context=_,this.refs=_n,this.updater=j||Te}var Ie=je.prototype=new Sn;Ie.constructor=je,ke(Ie,Ge.prototype),Ie.isPureReactComponent=!0;var dn=Array.isArray;function Ne(){}var K={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function ve(d,_,j){var E=j.ref;return{$$typeof:f,type:d,key:_,ref:E!==void 0?E:null,props:j}}function Tn(d,_){return ve(d.type,_,d.props)}function hn(d){return typeof d=="object"&&d!==null&&d.$$typeof===f}function Ke(d){var _={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(j){return _[j]})}var Tt=/\/+/g;function Nn(d,_){return typeof d=="object"&&d!==null&&d.key!=null?Ke(""+d.key):_.toString(36)}function zn(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Ne,Ne):(d.status="pending",d.then(function(_){d.status==="pending"&&(d.status="fulfilled",d.value=_)},function(_){d.status==="pending"&&(d.status="rejected",d.reason=_)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function k(d,_,j,E,L){var J=typeof d;(J==="undefined"||J==="boolean")&&(d=null);var ie=!1;if(d===null)ie=!0;else switch(J){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(d.$$typeof){case f:case z:ie=!0;break;case O:return ie=d._init,k(ie(d._payload),_,j,E,L)}}if(ie)return L=L(d),ie=E===""?"."+Nn(d,0):E,dn(L)?(j="",ie!=null&&(j=ie.replace(Tt,"$&/")+"/"),k(L,_,j,"",function(ja){return ja})):L!=null&&(hn(L)&&(L=Tn(L,j+(L.key==null||d&&d.key===L.key?"":(""+L.key).replace(Tt,"$&/")+"/")+ie)),_.push(L)),1;ie=0;var Le=E===""?".":E+":";if(dn(d))for(var we=0;we<d.length;we++)E=d[we],J=Le+Nn(E,we),ie+=k(E,_,j,J,L);else if(we=pe(d),typeof we=="function")for(d=we.call(d),we=0;!(E=d.next()).done;)E=E.value,J=Le+Nn(E,we++),ie+=k(E,_,j,J,L);else if(J==="object"){if(typeof d.then=="function")return k(zn(d),_,j,E,L);throw _=String(d),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return ie}function M(d,_,j){if(d==null)return d;var E=[],L=0;return k(d,E,"","",function(J){return _.call(j,J,L++)}),E}function G(d){if(d._status===-1){var _=d._result;_=_(),_.then(function(j){(d._status===0||d._status===-1)&&(d._status=1,d._result=j)},function(j){(d._status===0||d._status===-1)&&(d._status=2,d._result=j)}),d._status===-1&&(d._status=0,d._result=_)}if(d._status===1)return d._result.default;throw d._result}var re=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},he={map:M,forEach:function(d,_,j){M(d,function(){_.apply(this,arguments)},j)},count:function(d){var _=0;return M(d,function(){_++}),_},toArray:function(d){return M(d,function(_){return _})||[]},only:function(d){if(!hn(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return I.Activity=C,I.Children=he,I.Component=Ge,I.Fragment=A,I.Profiler=x,I.PureComponent=je,I.StrictMode=u,I.Suspense=D,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,I.__COMPILER_RUNTIME={__proto__:null,c:function(d){return K.H.useMemoCache(d)}},I.cache=function(d){return function(){return d.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(d,_,j){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var E=ke({},d.props),L=d.key;if(_!=null)for(J in _.key!==void 0&&(L=""+_.key),_)!B.call(_,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&_.ref===void 0||(E[J]=_[J]);var J=arguments.length-2;if(J===1)E.children=j;else if(1<J){for(var ie=Array(J),Le=0;Le<J;Le++)ie[Le]=arguments[Le+2];E.children=ie}return ve(d.type,L,E)},I.createContext=function(d){return d={$$typeof:te,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:q,_context:d},d},I.createElement=function(d,_,j){var E,L={},J=null;if(_!=null)for(E in _.key!==void 0&&(J=""+_.key),_)B.call(_,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(L[E]=_[E]);var ie=arguments.length-2;if(ie===1)L.children=j;else if(1<ie){for(var Le=Array(ie),we=0;we<ie;we++)Le[we]=arguments[we+2];L.children=Le}if(d&&d.defaultProps)for(E in ie=d.defaultProps,ie)L[E]===void 0&&(L[E]=ie[E]);return ve(d,J,L)},I.createRef=function(){return{current:null}},I.forwardRef=function(d){return{$$typeof:F,render:d}},I.isValidElement=hn,I.lazy=function(d){return{$$typeof:O,_payload:{_status:-1,_result:d},_init:G}},I.memo=function(d,_){return{$$typeof:S,type:d,compare:_===void 0?null:_}},I.startTransition=function(d){var _=K.T,j={};K.T=j;try{var E=d(),L=K.S;L!==null&&L(j,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(Ne,re)}catch(J){re(J)}finally{_!==null&&j.types!==null&&(_.types=j.types),K.T=_}},I.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},I.use=function(d){return K.H.use(d)},I.useActionState=function(d,_,j){return K.H.useActionState(d,_,j)},I.useCallback=function(d,_){return K.H.useCallback(d,_)},I.useContext=function(d){return K.H.useContext(d)},I.useDebugValue=function(){},I.useDeferredValue=function(d,_){return K.H.useDeferredValue(d,_)},I.useEffect=function(d,_){return K.H.useEffect(d,_)},I.useEffectEvent=function(d){return K.H.useEffectEvent(d)},I.useId=function(){return K.H.useId()},I.useImperativeHandle=function(d,_,j){return K.H.useImperativeHandle(d,_,j)},I.useInsertionEffect=function(d,_){return K.H.useInsertionEffect(d,_)},I.useLayoutEffect=function(d,_){return K.H.useLayoutEffect(d,_)},I.useMemo=function(d,_){return K.H.useMemo(d,_)},I.useOptimistic=function(d,_){return K.H.useOptimistic(d,_)},I.useReducer=function(d,_,j){return K.H.useReducer(d,_,j)},I.useRef=function(d){return K.H.useRef(d)},I.useState=function(d){return K.H.useState(d)},I.useSyncExternalStore=function(d,_,j){return K.H.useSyncExternalStore(d,_,j)},I.useTransition=function(){return K.H.useTransition()},I.version="19.2.5",I}var Tu;function kl(){return Tu||(Tu=1,ul.exports=hm()),ul.exports}var Ye=kl();const um=Pu(Ye);var pl={exports:{}},Si={},gl={exports:{}},ml={};var zu;function pm(){return zu||(zu=1,(function(f){function z(k,M){var G=k.length;k.push(M);e:for(;0<G;){var re=G-1>>>1,he=k[re];if(0<x(he,M))k[re]=M,k[G]=he,G=re;else break e}}function A(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var M=k[0],G=k.pop();if(G!==M){k[0]=G;e:for(var re=0,he=k.length,d=he>>>1;re<d;){var _=2*(re+1)-1,j=k[_],E=_+1,L=k[E];if(0>x(j,G))E<he&&0>x(L,j)?(k[re]=L,k[E]=G,re=E):(k[re]=j,k[_]=G,re=_);else if(E<he&&0>x(L,G))k[re]=L,k[E]=G,re=E;else break e}}return M}function x(k,M){var G=k.sortIndex-M.sortIndex;return G!==0?G:k.id-M.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;f.unstable_now=function(){return q.now()}}else{var te=Date,F=te.now();f.unstable_now=function(){return te.now()-F}}var D=[],S=[],O=1,C=null,$=3,pe=!1,Te=!1,ke=!1,_n=!1,Ge=typeof setTimeout=="function"?setTimeout:null,Sn=typeof clearTimeout=="function"?clearTimeout:null,je=typeof setImmediate<"u"?setImmediate:null;function Ie(k){for(var M=A(S);M!==null;){if(M.callback===null)u(S);else if(M.startTime<=k)u(S),M.sortIndex=M.expirationTime,z(D,M);else break;M=A(S)}}function dn(k){if(ke=!1,Ie(k),!Te)if(A(D)!==null)Te=!0,Ne||(Ne=!0,Ke());else{var M=A(S);M!==null&&zn(dn,M.startTime-k)}}var Ne=!1,K=-1,B=5,ve=-1;function Tn(){return _n?!0:!(f.unstable_now()-ve<B)}function hn(){if(_n=!1,Ne){var k=f.unstable_now();ve=k;var M=!0;try{e:{Te=!1,ke&&(ke=!1,Sn(K),K=-1),pe=!0;var G=$;try{n:{for(Ie(k),C=A(D);C!==null&&!(C.expirationTime>k&&Tn());){var re=C.callback;if(typeof re=="function"){C.callback=null,$=C.priorityLevel;var he=re(C.expirationTime<=k);if(k=f.unstable_now(),typeof he=="function"){C.callback=he,Ie(k),M=!0;break n}C===A(D)&&u(D),Ie(k)}else u(D);C=A(D)}if(C!==null)M=!0;else{var d=A(S);d!==null&&zn(dn,d.startTime-k),M=!1}}break e}finally{C=null,$=G,pe=!1}M=void 0}}finally{M?Ke():Ne=!1}}}var Ke;if(typeof je=="function")Ke=function(){je(hn)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Nn=Tt.port2;Tt.port1.onmessage=hn,Ke=function(){Nn.postMessage(null)}}else Ke=function(){Ge(hn,0)};function zn(k,M){K=Ge(function(){k(f.unstable_now())},M)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(k){k.callback=null},f.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<k?Math.floor(1e3/k):5},f.unstable_getCurrentPriorityLevel=function(){return $},f.unstable_next=function(k){switch($){case 1:case 2:case 3:var M=3;break;default:M=$}var G=$;$=M;try{return k()}finally{$=G}},f.unstable_requestPaint=function(){_n=!0},f.unstable_runWithPriority=function(k,M){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var G=$;$=k;try{return M()}finally{$=G}},f.unstable_scheduleCallback=function(k,M,G){var re=f.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,k){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=G+he,k={id:O++,callback:M,priorityLevel:k,startTime:G,expirationTime:he,sortIndex:-1},G>re?(k.sortIndex=G,z(S,k),A(D)===null&&k===A(S)&&(ke?(Sn(K),K=-1):ke=!0,zn(dn,G-re))):(k.sortIndex=he,z(D,k),Te||pe||(Te=!0,Ne||(Ne=!0,Ke()))),k},f.unstable_shouldYield=Tn,f.unstable_wrapCallback=function(k){var M=$;return function(){var G=$;$=M;try{return k.apply(this,arguments)}finally{$=G}}}})(ml)),ml}var Au;function gm(){return Au||(Au=1,gl.exports=pm()),gl.exports}var fl={exports:{}},Oe={};var Cu;function mm(){if(Cu)return Oe;Cu=1;var f=kl();function z(D){var S="https://react.dev/errors/"+D;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)S+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+D+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var u={d:{f:A,r:function(){throw Error(z(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},x=Symbol.for("react.portal");function q(D,S,O){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:C==null?null:""+C,children:D,containerInfo:S,implementation:O}}var te=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function F(D,S){if(D==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Oe.createPortal=function(D,S){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(z(299));return q(D,S,null,O)},Oe.flushSync=function(D){var S=te.T,O=u.p;try{if(te.T=null,u.p=2,D)return D()}finally{te.T=S,u.p=O,u.d.f()}},Oe.preconnect=function(D,S){typeof D=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,u.d.C(D,S))},Oe.prefetchDNS=function(D){typeof D=="string"&&u.d.D(D)},Oe.preinit=function(D,S){if(typeof D=="string"&&S&&typeof S.as=="string"){var O=S.as,C=F(O,S.crossOrigin),$=typeof S.integrity=="string"?S.integrity:void 0,pe=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;O==="style"?u.d.S(D,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:C,integrity:$,fetchPriority:pe}):O==="script"&&u.d.X(D,{crossOrigin:C,integrity:$,fetchPriority:pe,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Oe.preinitModule=function(D,S){if(typeof D=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var O=F(S.as,S.crossOrigin);u.d.M(D,{crossOrigin:O,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&u.d.M(D)},Oe.preload=function(D,S){if(typeof D=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var O=S.as,C=F(O,S.crossOrigin);u.d.L(D,O,{crossOrigin:C,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Oe.preloadModule=function(D,S){if(typeof D=="string")if(S){var O=F(S.as,S.crossOrigin);u.d.m(D,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:O,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else u.d.m(D)},Oe.requestFormReset=function(D){u.d.r(D)},Oe.unstable_batchedUpdates=function(D,S){return D(S)},Oe.useFormState=function(D,S,O){return te.H.useFormState(D,S,O)},Oe.useFormStatus=function(){return te.H.useHostTransitionStatus()},Oe.version="19.2.5",Oe}var Mu;function fm(){if(Mu)return fl.exports;Mu=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(z){console.error(z)}}return f(),fl.exports=mm(),fl.exports}var ju;function bm(){if(ju)return Si;ju=1;var f=gm(),z=kl(),A=fm();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function q(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function te(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function F(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function D(e){if(q(e)!==e)throw Error(u(188))}function S(e){var n=e.alternate;if(!n){if(n=q(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return D(i),e;if(o===a)return D(i),n;o=o.sibling}throw Error(u(188))}if(t.return!==a.return)t=i,a=o;else{for(var s=!1,r=i.child;r;){if(r===t){s=!0,t=i,a=o;break}if(r===a){s=!0,a=i,t=o;break}r=r.sibling}if(!s){for(r=o.child;r;){if(r===t){s=!0,t=o,a=i;break}if(r===a){s=!0,a=o,t=i;break}r=r.sibling}if(!s)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function O(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=O(e),n!==null)return n;e=e.sibling}return null}var C=Object.assign,$=Symbol.for("react.element"),pe=Symbol.for("react.transitional.element"),Te=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),_n=Symbol.for("react.strict_mode"),Ge=Symbol.for("react.profiler"),Sn=Symbol.for("react.consumer"),je=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),dn=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),Tn=Symbol.for("react.memo_cache_sentinel"),hn=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=hn&&e[hn]||e["@@iterator"],typeof e=="function"?e:null)}var Tt=Symbol.for("react.client.reference");function Nn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case Ge:return"Profiler";case _n:return"StrictMode";case dn:return"Suspense";case Ne:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Te:return"Portal";case je:return e.displayName||"Context";case Sn:return(e._context.displayName||"Context")+".Consumer";case Ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:Nn(e.type)||"Memo";case B:n=e._payload,e=e._init;try{return Nn(e(n))}catch{}}return null}var zn=Array.isArray,k=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},re=[],he=-1;function d(e){return{current:e}}function _(e){0>he||(e.current=re[he],re[he]=null,he--)}function j(e,n){he++,re[he]=e.current,e.current=n}var E=d(null),L=d(null),J=d(null),ie=d(null);function Le(e,n){switch(j(J,n),j(L,e),j(E,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yh(n),e=Kh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(E),j(E,e)}function we(){_(E),_(L),_(J)}function ja(e){e.memoizedState!==null&&j(ie,e);var n=E.current,t=Kh(n,e.type);n!==t&&(j(L,e),j(E,t))}function Ci(e){L.current===e&&(_(E),_(L)),ie.current===e&&(_(ie),yi._currentValue=G)}var Wo,vl;function zt(e){if(Wo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wo=n&&n[1]||"",vl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wo+e+vl}var Vo=!1;function Qo(e,n){if(!e||Vo)return"";Vo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(b){var m=b}Reflect.construct(e,[],w)}else{try{w.call()}catch(b){m=b}e.call(w.prototype)}}else{try{throw Error()}catch(b){m=b}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(b){if(b&&m&&typeof b.stack=="string")return[b.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),s=o[0],r=o[1];if(s&&r){var l=s.split(`
`),g=r.split(`
`);for(i=a=0;a<l.length&&!l[a].includes("DetermineComponentFrameRoot");)a++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(a===l.length||i===g.length)for(a=l.length-1,i=g.length-1;1<=a&&0<=i&&l[a]!==g[i];)i--;for(;1<=a&&0<=i;a--,i--)if(l[a]!==g[i]){if(a!==1||i!==1)do if(a--,i--,0>i||l[a]!==g[i]){var y=`
`+l[a].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=a&&0<=i);break}}}finally{Vo=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?zt(t):""}function Gu(e,n){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==n&&n!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Qo(e.type,!1);case 11:return Qo(e.type.render,!1);case 1:return Qo(e.type,!0);case 31:return zt("Activity");default:return""}}function wl(e){try{var n="",t=null;do n+=Gu(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Xo=Object.prototype.hasOwnProperty,Zo=f.unstable_scheduleCallback,Fo=f.unstable_cancelCallback,Iu=f.unstable_shouldYield,Lu=f.unstable_requestPaint,$e=f.unstable_now,Uu=f.unstable_getCurrentPriorityLevel,_l=f.unstable_ImmediatePriority,Sl=f.unstable_UserBlockingPriority,Mi=f.unstable_NormalPriority,Yu=f.unstable_LowPriority,Tl=f.unstable_IdlePriority,Ku=f.log,Ju=f.unstable_setDisableYieldValue,xa=null,en=null;function Fn(e){if(typeof Ku=="function"&&Ju(e),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(xa,e)}catch{}}var nn=Math.clz32?Math.clz32:Qu,Wu=Math.log,Vu=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(Wu(e)/Vu|0)|0}var ji=256,xi=262144,Di=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~o,a!==0?i=At(a):(s&=r,s!==0?i=At(s):t||(t=r&~e,t!==0&&(i=At(t))))):(r=a&~o,r!==0?i=At(r):s!==0?i=At(s):t||(t=a&~e,t!==0&&(i=At(t)))),i===0?0:n!==0&&n!==i&&(n&o)===0&&(o=i&-i,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:i}function Da(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xu(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zl(){var e=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),e}function $o(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ba(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zu(e,n,t,a,i,o){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,l=e.expirationTimes,g=e.hiddenUpdates;for(t=s&~t;0<t;){var y=31-nn(t),w=1<<y;r[y]=0,l[y]=-1;var m=g[y];if(m!==null)for(g[y]=null,y=0;y<m.length;y++){var b=m[y];b!==null&&(b.lane&=-536870913)}t&=~w}a!==0&&Al(e,a,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~n))}function Al(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-nn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Cl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-nn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function Ml(e,n){var t=n&-n;return t=(t&42)!==0?1:es(t),(t&(e.suspendedLanes|n))!==0?0:t}function es(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jl(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:gu(e.type))}function xl(e,n){var t=M.p;try{return M.p=e,n()}finally{M.p=t}}var $n=Math.random().toString(36).slice(2),Ee="__reactFiber$"+$n,Je="__reactProps$"+$n,Kt="__reactContainer$"+$n,ts="__reactEvents$"+$n,Fu="__reactListeners$"+$n,$u="__reactHandles$"+$n,Dl="__reactResources$"+$n,Na="__reactMarker$"+$n;function as(e){delete e[Ee],delete e[Je],delete e[ts],delete e[Fu],delete e[$u]}function Jt(e){var n=e[Ee];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Kt]||t[Ee]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fh(e);e!==null;){if(t=e[Ee])return t;e=Fh(e)}return n}e=t,t=e.parentNode}return null}function Wt(e){if(e=e[Ee]||e[Kt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ea(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Vt(e){var n=e[Dl];return n||(n=e[Dl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(e){e[Na]=!0}var Bl=new Set,Nl={};function Ct(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Nl[e]=n,e=0;e<n.length;e++)Bl.add(n[e])}var ep=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),El={},Hl={};function np(e){return Xo.call(Hl,e)?!0:Xo.call(El,e)?!1:ep.test(e)?Hl[e]=!0:(El[e]=!0,!1)}function Ni(e,n,t){if(np(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Ei(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function En(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tp(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function is(e){if(!e._valueTracker){var n=Rl(e)?"checked":"value";e._valueTracker=tp(e,n,""+e[n])}}function ql(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Rl(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ap=/[\n"\\]/g;function pn(e){return e.replace(ap,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function os(e,n,t,a,i,o,s,r){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?ss(e,s,un(n)):t!=null?ss(e,s,un(t)):a!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+un(r):e.removeAttribute("name")}function Pl(e,n,t,a,i,o,s,r){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){is(e);return}t=t!=null?""+un(t):"",n=n!=null?""+un(n):t,r||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),is(e)}function ss(e,n,t){n==="number"&&Hi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Xt(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+un(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ol(e,n,t){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+un(t):""}function Gl(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(zn(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=un(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),is(e)}function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ip=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Il(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||ip.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Ll(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&Il(e,i,a)}else for(var o in n)n.hasOwnProperty(o)&&Il(e,o,n[o])}function rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return sp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hn(){}var ls=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ft=null,$t=null;function Ul(e){var n=Wt(e);if(n&&(e=n.stateNode)){var t=e[Je]||null;e:switch(e=n.stateNode,n.type){case"input":if(os(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[Je]||null;if(!i)throw Error(u(90));os(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&ql(a)}break e;case"textarea":Ol(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Xt(e,!!t.multiple,n,!1)}}}var ds=!1;function Yl(e,n,t){if(ds)return e(n,t);ds=!0;try{var a=e(n);return a}finally{if(ds=!1,(Ft!==null||$t!==null)&&(To(),Ft&&(n=Ft,e=$t,$t=Ft=null,Ul(n),e)))for(n=0;n<e.length;n++)Ul(e[n])}}function Ha(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Je]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=!1;if(Rn)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{hs=!1}var et=null,us=null,qi=null;function Kl(){if(qi)return qi;var e,n=us,t=n.length,a,i="value"in et?et.value:et.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[o-a];a++);return qi=i.slice(e,1<a?1-a:void 0)}function Pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Jl(){return!1}function We(e){function n(t,a,i,o,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(o):o[r]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oi:Jl,this.isPropagationStopped=Jl,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=We(Mt),qa=C({},Mt,{view:0,detail:0}),rp=We(qa),ps,gs,Pa,Ii=C({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pa&&(Pa&&e.type==="mousemove"?(ps=e.screenX-Pa.screenX,gs=e.screenY-Pa.screenY):gs=ps=0,Pa=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:gs}}),Wl=We(Ii),lp=C({},Ii,{dataTransfer:0}),cp=We(lp),dp=C({},qa,{relatedTarget:0}),ms=We(dp),hp=C({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),up=We(hp),pp=C({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=We(pp),mp=C({},Mt,{data:0}),Vl=We(mp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yp[e])?!!n[e]:!1}function fs(){return kp}var vp=C({},qa,{key:function(e){if(e.key){var n=fp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wp=We(vp),_p=C({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ql=We(_p),Sp=C({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),Tp=We(Sp),zp=C({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=We(zp),Cp=C({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=We(Cp),jp=C({},Mt,{newState:0,oldState:0}),xp=We(jp),Dp=[9,13,27,32],bs=Rn&&"CompositionEvent"in window,Oa=null;Rn&&"documentMode"in document&&(Oa=document.documentMode);var Bp=Rn&&"TextEvent"in window&&!Oa,Xl=Rn&&(!bs||Oa&&8<Oa&&11>=Oa),Zl=" ",Fl=!1;function $l(e,n){switch(e){case"keyup":return Dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ea=!1;function Np(e,n){switch(e){case"compositionend":return ec(n);case"keypress":return n.which!==32?null:(Fl=!0,Zl);case"textInput":return e=n.data,e===Zl&&Fl?null:e;default:return null}}function Ep(e,n){if(ea)return e==="compositionend"||!bs&&$l(e,n)?(e=Kl(),qi=us=et=null,ea=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xl&&n.locale!=="ko"?null:n.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hp[e.type]:n==="textarea"}function tc(e,n,t,a){Ft?$t?$t.push(a):$t=[a]:Ft=a,n=Do(n,"onChange"),0<n.length&&(t=new Gi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ga=null,Ia=null;function Rp(e){Ph(e,0)}function Li(e){var n=Ea(e);if(ql(n))return e}function ac(e,n){if(e==="change")return n}var ic=!1;if(Rn){var ys;if(Rn){var ks="oninput"in document;if(!ks){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),ks=typeof oc.oninput=="function"}ys=ks}else ys=!1;ic=ys&&(!document.documentMode||9<document.documentMode)}function sc(){Ga&&(Ga.detachEvent("onpropertychange",rc),Ia=Ga=null)}function rc(e){if(e.propertyName==="value"&&Li(Ia)){var n=[];tc(n,Ia,e,cs(e)),Yl(Rp,n)}}function qp(e,n,t){e==="focusin"?(sc(),Ga=n,Ia=t,Ga.attachEvent("onpropertychange",rc)):e==="focusout"&&sc()}function Pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Ia)}function Op(e,n){if(e==="click")return Li(n)}function Gp(e,n){if(e==="input"||e==="change")return Li(n)}function Ip(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var tn=typeof Object.is=="function"?Object.is:Ip;function La(e,n){if(tn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Xo.call(n,i)||!tn(e[i],n[i]))return!1}return!0}function lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,n){var t=lc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lc(t)}}function dc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Hi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hi(e.document)}return n}function vs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Lp=Rn&&"documentMode"in document&&11>=document.documentMode,na=null,ws=null,Ua=null,_s=!1;function uc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_s||na==null||na!==Hi(a)||(a=na,"selectionStart"in a&&vs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&La(Ua,a)||(Ua=a,a=Do(ws,"onSelect"),0<a.length&&(n=new Gi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=na)))}function jt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ta={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionrun:jt("Transition","TransitionRun"),transitionstart:jt("Transition","TransitionStart"),transitioncancel:jt("Transition","TransitionCancel"),transitionend:jt("Transition","TransitionEnd")},Ss={},pc={};Rn&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function xt(e){if(Ss[e])return Ss[e];if(!ta[e])return e;var n=ta[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in pc)return Ss[e]=n[t];return e}var gc=xt("animationend"),mc=xt("animationiteration"),fc=xt("animationstart"),Up=xt("transitionrun"),Yp=xt("transitionstart"),Kp=xt("transitioncancel"),bc=xt("transitionend"),yc=new Map,Ts="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ts.push("scrollEnd");function An(e,n){yc.set(e,n),Ct(n,[e])}var Ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gn=[],aa=0,zs=0;function Yi(){for(var e=aa,n=zs=aa=0;n<e;){var t=gn[n];gn[n++]=null;var a=gn[n];gn[n++]=null;var i=gn[n];gn[n++]=null;var o=gn[n];if(gn[n++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}o!==0&&kc(t,i,o)}}function Ki(e,n,t,a){gn[aa++]=e,gn[aa++]=n,gn[aa++]=t,gn[aa++]=a,zs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function As(e,n,t,a){return Ki(e,n,t,a),Ji(e)}function Dt(e,n){return Ki(e,null,null,n),Ji(e)}function kc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,o=e.return;o!==null;)o.childLanes|=t,a=o.alternate,a!==null&&(a.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&n!==null&&(i=31-nn(t),e=o.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),o):null}function Ji(e){if(50<hi)throw hi=0,Hr=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ia={};function Jp(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,t,a){return new Jp(e,n,t,a)}function Cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qn(e,n){var t=e.alternate;return t===null?(t=an(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function vc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Wi(e,n,t,a,i,o){var s=0;if(a=e,typeof e=="function")Cs(e)&&(s=1);else if(typeof e=="string")s=Zg(e,t,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=an(31,t,n,i),e.elementType=ve,e.lanes=o,e;case ke:return Bt(t.children,i,o,n);case _n:s=8,i|=24;break;case Ge:return e=an(12,t,n,i|2),e.elementType=Ge,e.lanes=o,e;case dn:return e=an(13,t,n,i),e.elementType=dn,e.lanes=o,e;case Ne:return e=an(19,t,n,i),e.elementType=Ne,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:s=10;break e;case Sn:s=9;break e;case Ie:s=11;break e;case K:s=14;break e;case B:s=16,a=null;break e}s=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=an(s,t,n,i),n.elementType=e,n.type=a,n.lanes=o,n}function Bt(e,n,t,a){return e=an(7,e,a,n),e.lanes=t,e}function Ms(e,n,t){return e=an(6,e,null,n),e.lanes=t,e}function wc(e){var n=an(18,null,null,0);return n.stateNode=e,n}function js(e,n,t){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _c=new WeakMap;function mn(e,n){if(typeof e=="object"&&e!==null){var t=_c.get(e);return t!==void 0?t:(n={value:e,source:n,stack:wl(n)},_c.set(e,n),n)}return{value:e,source:n,stack:wl(n)}}var oa=[],sa=0,Vi=null,Ya=0,fn=[],bn=0,nt=null,jn=1,xn="";function Pn(e,n){oa[sa++]=Ya,oa[sa++]=Vi,Vi=e,Ya=n}function Sc(e,n,t){fn[bn++]=jn,fn[bn++]=xn,fn[bn++]=nt,nt=e;var a=jn;e=xn;var i=32-nn(a)-1;a&=~(1<<i),t+=1;var o=32-nn(n)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,jn=1<<32-nn(n)+i|t<<i|a,xn=o+e}else jn=1<<o|t<<i|a,xn=e}function xs(e){e.return!==null&&(Pn(e,1),Sc(e,1,0))}function Ds(e){for(;e===Vi;)Vi=oa[--sa],oa[sa]=null,Ya=oa[--sa],oa[sa]=null;for(;e===nt;)nt=fn[--bn],fn[bn]=null,xn=fn[--bn],fn[bn]=null,jn=fn[--bn],fn[bn]=null}function Tc(e,n){fn[bn++]=jn,fn[bn++]=xn,fn[bn++]=nt,jn=n.id,xn=n.overflow,nt=e}var He=null,ge=null,Z=!1,tt=null,yn=!1,Bs=Error(u(519));function at(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ka(mn(n,e)),Bs}function zc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[Ee]=e,n[Je]=a,t){case"dialog":V("cancel",n),V("close",n);break;case"iframe":case"object":case"embed":V("load",n);break;case"video":case"audio":for(t=0;t<pi.length;t++)V(pi[t],n);break;case"source":V("error",n);break;case"img":case"image":case"link":V("error",n),V("load",n);break;case"details":V("toggle",n);break;case"input":V("invalid",n),Pl(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":V("invalid",n);break;case"textarea":V("invalid",n),Gl(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Lh(n.textContent,t)?(a.popover!=null&&(V("beforetoggle",n),V("toggle",n)),a.onScroll!=null&&V("scroll",n),a.onScrollEnd!=null&&V("scrollend",n),a.onClick!=null&&(n.onclick=Hn),n=!0):n=!1,n||at(e,!0)}function Ac(e){for(He=e.return;He;)switch(He.tag){case 5:case 31:case 13:yn=!1;return;case 27:case 3:yn=!0;return;default:He=He.return}}function ra(e){if(e!==He)return!1;if(!Z)return Ac(e),Z=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Xr(e.type,e.memoizedProps)),t=!t),t&&ge&&at(e),Ac(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ge=Zh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ge=Zh(e)}else n===27?(n=ge,bt(e.type)?(e=nl,nl=null,ge=e):ge=n):ge=He?vn(e.stateNode.nextSibling):null;return!0}function Nt(){ge=He=null,Z=!1}function Ns(){var e=tt;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),tt=null),e}function Ka(e){tt===null?tt=[e]:tt.push(e)}var Es=d(null),Et=null,On=null;function it(e,n,t){j(Es,n._currentValue),n._currentValue=t}function Gn(e){e._currentValue=Es.current,_(Es)}function Hs(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Rs(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;e:for(;o!==null;){var r=o;o=i;for(var l=0;l<n.length;l++)if(r.context===n[l]){o.lanes|=t,r=o.alternate,r!==null&&(r.lanes|=t),Hs(o.return,t,e),a||(s=null);break e}o=r.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(u(341));s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),Hs(s,t,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function la(e,n,t,a){e=null;for(var i=n,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var r=i.type;tn(i.pendingProps.value,s.value)||(e!==null?e.push(r):e=[r])}}else if(i===ie.current){if(s=i.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}i=i.return}e!==null&&Rs(n,e,t,a),n.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!tn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ht(e){Et=e,On=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return Cc(Et,e)}function Xi(e,n){return Et===null&&Ht(e),Cc(e,n)}function Cc(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},On===null){if(e===null)throw Error(u(308));On=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else On=On.next=n;return t}var Wp=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Vp=f.unstable_scheduleCallback,Qp=f.unstable_NormalPriority,ze={$$typeof:je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new Wp,data:new Map,refCount:0}}function Ja(e){e.refCount--,e.refCount===0&&Vp(Qp,function(){e.controller.abort()})}var Wa=null,Ps=0,ca=0,da=null;function Xp(e,n){if(Wa===null){var t=Wa=[];Ps=0,ca=Ir(),da={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ps++,n.then(Mc,Mc),n}function Mc(){if(--Ps===0&&Wa!==null){da!==null&&(da.status="fulfilled");var e=Wa;Wa=null,ca=0,da=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zp(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var jc=k.S;k.S=function(e,n){uh=$e(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xp(e,n),jc!==null&&jc(e,n)};var Rt=d(null);function Os(){var e=Rt.current;return e!==null?e:ue.pooledCache}function Zi(e,n){n===null?j(Rt,Rt.current):j(Rt,n.pool)}function xc(){var e=Os();return e===null?null:{parent:ze._currentValue,pool:e}}var ha=Error(u(460)),Gs=Error(u(474)),Fi=Error(u(542)),$i={then:function(){}};function Dc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Hn,Hn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ec(e),e;default:if(typeof n.status=="string")n.then(Hn,Hn);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ec(e),e}throw Pt=n,ha}}function qt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Pt=t,ha):t}}var Pt=null;function Nc(){if(Pt===null)throw Error(u(459));var e=Pt;return Pt=null,e}function Ec(e){if(e===ha||e===Fi)throw Error(u(483))}var ua=null,Va=0;function eo(e){var n=Va;return Va+=1,ua===null&&(ua=[]),Bc(ua,e,n)}function Qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function no(e,n){throw n.$$typeof===$?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hc(e){function n(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function t(h,c){if(!e)return null;for(;c!==null;)n(h,c),c=c.sibling;return null}function a(h){for(var c=new Map;h!==null;)h.key!==null?c.set(h.key,h):c.set(h.index,h),h=h.sibling;return c}function i(h,c){return h=qn(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=67108866,c):p):(h.flags|=67108866,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function r(h,c,p,v){return c===null||c.tag!==6?(c=Ms(p,h.mode,v),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,v){var R=p.type;return R===ke?y(h,c,p.props.children,v,p.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===B&&qt(R)===c.type)?(c=i(c,p.props),Qa(c,p),c.return=h,c):(c=Wi(p.type,p.key,p.props,null,h.mode,v),Qa(c,p),c.return=h,c)}function g(h,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=js(p,h.mode,v),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function y(h,c,p,v,R){return c===null||c.tag!==7?(c=Bt(p,h.mode,v,R),c.return=h,c):(c=i(c,p),c.return=h,c)}function w(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ms(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pe:return p=Wi(c.type,c.key,c.props,null,h.mode,p),Qa(p,c),p.return=h,p;case Te:return c=js(c,h.mode,p),c.return=h,c;case B:return c=qt(c),w(h,c,p)}if(zn(c)||Ke(c))return c=Bt(c,h.mode,p,null),c.return=h,c;if(typeof c.then=="function")return w(h,eo(c),p);if(c.$$typeof===je)return w(h,Xi(h,c),p);no(h,c)}return null}function m(h,c,p,v){var R=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return R!==null?null:r(h,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pe:return p.key===R?l(h,c,p,v):null;case Te:return p.key===R?g(h,c,p,v):null;case B:return p=qt(p),m(h,c,p,v)}if(zn(p)||Ke(p))return R!==null?null:y(h,c,p,v,null);if(typeof p.then=="function")return m(h,c,eo(p),v);if(p.$$typeof===je)return m(h,c,Xi(h,p),v);no(h,p)}return null}function b(h,c,p,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return h=h.get(p)||null,r(c,h,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:return h=h.get(v.key===null?p:v.key)||null,l(c,h,v,R);case Te:return h=h.get(v.key===null?p:v.key)||null,g(c,h,v,R);case B:return v=qt(v),b(h,c,p,v,R)}if(zn(v)||Ke(v))return h=h.get(p)||null,y(c,h,v,R,null);if(typeof v.then=="function")return b(h,c,p,eo(v),R);if(v.$$typeof===je)return b(h,c,p,Xi(c,v),R);no(c,v)}return null}function N(h,c,p,v){for(var R=null,ee=null,H=c,Y=c=0,X=null;H!==null&&Y<p.length;Y++){H.index>Y?(X=H,H=null):X=H.sibling;var ne=m(h,H,p[Y],v);if(ne===null){H===null&&(H=X);break}e&&H&&ne.alternate===null&&n(h,H),c=o(ne,c,Y),ee===null?R=ne:ee.sibling=ne,ee=ne,H=X}if(Y===p.length)return t(h,H),Z&&Pn(h,Y),R;if(H===null){for(;Y<p.length;Y++)H=w(h,p[Y],v),H!==null&&(c=o(H,c,Y),ee===null?R=H:ee.sibling=H,ee=H);return Z&&Pn(h,Y),R}for(H=a(H);Y<p.length;Y++)X=b(H,h,Y,p[Y],v),X!==null&&(e&&X.alternate!==null&&H.delete(X.key===null?Y:X.key),c=o(X,c,Y),ee===null?R=X:ee.sibling=X,ee=X);return e&&H.forEach(function(_t){return n(h,_t)}),Z&&Pn(h,Y),R}function P(h,c,p,v){if(p==null)throw Error(u(151));for(var R=null,ee=null,H=c,Y=c=0,X=null,ne=p.next();H!==null&&!ne.done;Y++,ne=p.next()){H.index>Y?(X=H,H=null):X=H.sibling;var _t=m(h,H,ne.value,v);if(_t===null){H===null&&(H=X);break}e&&H&&_t.alternate===null&&n(h,H),c=o(_t,c,Y),ee===null?R=_t:ee.sibling=_t,ee=_t,H=X}if(ne.done)return t(h,H),Z&&Pn(h,Y),R;if(H===null){for(;!ne.done;Y++,ne=p.next())ne=w(h,ne.value,v),ne!==null&&(c=o(ne,c,Y),ee===null?R=ne:ee.sibling=ne,ee=ne);return Z&&Pn(h,Y),R}for(H=a(H);!ne.done;Y++,ne=p.next())ne=b(H,h,Y,ne.value,v),ne!==null&&(e&&ne.alternate!==null&&H.delete(ne.key===null?Y:ne.key),c=o(ne,c,Y),ee===null?R=ne:ee.sibling=ne,ee=ne);return e&&H.forEach(function(lm){return n(h,lm)}),Z&&Pn(h,Y),R}function de(h,c,p,v){if(typeof p=="object"&&p!==null&&p.type===ke&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case pe:e:{for(var R=p.key;c!==null;){if(c.key===R){if(R=p.type,R===ke){if(c.tag===7){t(h,c.sibling),v=i(c,p.props.children),v.return=h,h=v;break e}}else if(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===B&&qt(R)===c.type){t(h,c.sibling),v=i(c,p.props),Qa(v,p),v.return=h,h=v;break e}t(h,c);break}else n(h,c);c=c.sibling}p.type===ke?(v=Bt(p.props.children,h.mode,v,p.key),v.return=h,h=v):(v=Wi(p.type,p.key,p.props,null,h.mode,v),Qa(v,p),v.return=h,h=v)}return s(h);case Te:e:{for(R=p.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(h,c.sibling),v=i(c,p.children||[]),v.return=h,h=v;break e}else{t(h,c);break}else n(h,c);c=c.sibling}v=js(p,h.mode,v),v.return=h,h=v}return s(h);case B:return p=qt(p),de(h,c,p,v)}if(zn(p))return N(h,c,p,v);if(Ke(p)){if(R=Ke(p),typeof R!="function")throw Error(u(150));return p=R.call(p),P(h,c,p,v)}if(typeof p.then=="function")return de(h,c,eo(p),v);if(p.$$typeof===je)return de(h,c,Xi(h,p),v);no(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(t(h,c.sibling),v=i(c,p),v.return=h,h=v):(t(h,c),v=Ms(p,h.mode,v),v.return=h,h=v),s(h)):t(h,c)}return function(h,c,p,v){try{Va=0;var R=de(h,c,p,v);return ua=null,R}catch(H){if(H===ha||H===Fi)throw H;var ee=an(29,H,null,h.mode);return ee.lanes=v,ee.return=h,ee}}}var Ot=Hc(!0),Rc=Hc(!1),ot=!1;function Is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ls(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function st(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ae&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=Ji(e),kc(e,null,t),n}return Ki(e,a,n,t),Ji(e)}function Xa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Cl(e,t)}}function Us(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Ys=!1;function Za(){if(Ys){var e=da;if(e!==null)throw e}}function Fa(e,n,t,a){Ys=!1;var i=e.updateQueue;ot=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var l=r,g=l.next;l.next=null,s===null?o=g:s.next=g,s=l;var y=e.alternate;y!==null&&(y=y.updateQueue,r=y.lastBaseUpdate,r!==s&&(r===null?y.firstBaseUpdate=g:r.next=g,y.lastBaseUpdate=l))}if(o!==null){var w=i.baseState;s=0,y=g=l=null,r=o;do{var m=r.lane&-536870913,b=m!==r.lane;if(b?(Q&m)===m:(a&m)===m){m!==0&&m===ca&&(Ys=!0),y!==null&&(y=y.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var N=e,P=r;m=n;var de=t;switch(P.tag){case 1:if(N=P.payload,typeof N=="function"){w=N.call(de,w,m);break e}w=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,m=typeof N=="function"?N.call(de,w,m):N,m==null)break e;w=C({},w,m);break e;case 2:ot=!0}}m=r.callback,m!==null&&(e.flags|=64,b&&(e.flags|=8192),b=i.callbacks,b===null?i.callbacks=[m]:b.push(m))}else b={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},y===null?(g=y=b,l=w):y=y.next=b,s|=m;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;b=r,r=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);y===null&&(l=w),i.baseState=l,i.firstBaseUpdate=g,i.lastBaseUpdate=y,o===null&&(i.shared.lanes=0),ut|=s,e.lanes=s,e.memoizedState=w}}function qc(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Pc(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)qc(t[e],n)}var pa=d(null),to=d(0);function Oc(e,n){e=Qn,j(to,e),j(pa,n),Qn=e|n.baseLanes}function Ks(){j(to,Qn),j(pa,pa.current)}function Js(){Qn=to.current,_(pa),_(to)}var on=d(null),kn=null;function lt(e){var n=e.alternate;j(_e,_e.current&1),j(on,e),kn===null&&(n===null||pa.current!==null||n.memoizedState!==null)&&(kn=e)}function Ws(e){j(_e,_e.current),j(on,e),kn===null&&(kn=e)}function Gc(e){e.tag===22?(j(_e,_e.current),j(on,e),kn===null&&(kn=e)):ct()}function ct(){j(_e,_e.current),j(on,on.current)}function sn(e){_(on),kn===e&&(kn=null),_(_e)}var _e=d(0);function ao(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||$r(t)||el(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var In=0,U=null,le=null,Ae=null,io=!1,ga=!1,Gt=!1,oo=0,$a=0,ma=null,Fp=0;function be(){throw Error(u(321))}function Vs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!tn(e[t],n[t]))return!1;return!0}function Qs(e,n,t,a,i,o){return In=o,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,k.H=e===null||e.memoizedState===null?Sd:dr,Gt=!1,o=t(a,i),Gt=!1,ga&&(o=Lc(n,t,a,i)),Ic(e),o}function Ic(e){k.H=ti;var n=le!==null&&le.next!==null;if(In=0,Ae=le=U=null,io=!1,$a=0,ma=null,n)throw Error(u(300));e===null||Ce||(e=e.dependencies,e!==null&&Qi(e)&&(Ce=!0))}function Lc(e,n,t,a){U=e;var i=0;do{if(ga&&(ma=null),$a=0,ga=!1,25<=i)throw Error(u(301));if(i+=1,Ae=le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Td,o=n(t,a)}while(ga);return o}function $p(){var e=k.H,n=e.useState()[0];return n=typeof n.then=="function"?ei(n):n,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(U.flags|=1024),n}function Xs(){var e=oo!==0;return oo=0,e}function Zs(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Fs(e){if(io){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}io=!1}In=0,Ae=le=U=null,ga=!1,$a=oo=0,ma=null}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?U.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Se(){if(le===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=Ae===null?U.memoizedState:Ae.next;if(n!==null)Ae=n,le=e;else{if(e===null)throw U.alternate===null?Error(u(467)):Error(u(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},Ae===null?U.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var n=$a;return $a+=1,ma===null&&(ma=[]),e=Bc(ma,e,n),n=U,(Ae===null?n.memoizedState:Ae.next)===null&&(n=n.alternate,k.H=n===null||n.memoizedState===null?Sd:dr),e}function ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===je)return Re(e)}throw Error(u(438,String(e)))}function $s(e){var n=null,t=U.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=U.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=so(),U.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=Tn;return n.index++,t}function Ln(e,n){return typeof n=="function"?n(e):n}function lo(e){var n=Se();return er(n,le,e)}function er(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var i=e.baseQueue,o=a.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,a.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{n=i.next;var r=s=null,l=null,g=n,y=!1;do{var w=g.lane&-536870913;if(w!==g.lane?(Q&w)===w:(In&w)===w){var m=g.revertLane;if(m===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),w===ca&&(y=!0);else if((In&m)===m){g=g.next,m===ca&&(y=!0);continue}else w={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},l===null?(r=l=w,s=o):l=l.next=w,U.lanes|=m,ut|=m;w=g.action,Gt&&t(o,w),o=g.hasEagerState?g.eagerState:t(o,w)}else m={lane:w,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},l===null?(r=l=m,s=o):l=l.next=m,U.lanes|=w,ut|=w;g=g.next}while(g!==null&&g!==n);if(l===null?s=o:l.next=r,!tn(o,e.memoizedState)&&(Ce=!0,y&&(t=da,t!==null)))throw t;e.memoizedState=o,e.baseState=s,e.baseQueue=l,a.lastRenderedState=o}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function nr(e){var n=Se(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);tn(o,n.memoizedState)||(Ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function Uc(e,n,t){var a=U,i=Se(),o=Z;if(o){if(t===void 0)throw Error(u(407));t=t()}else t=n();var s=!tn((le||i).memoizedState,t);if(s&&(i.memoizedState=t,Ce=!0),i=i.queue,ir(Jc.bind(null,a,i,e),[e]),i.getSnapshot!==n||s||Ae!==null&&Ae.memoizedState.tag&1){if(a.flags|=2048,fa(9,{destroy:void 0},Kc.bind(null,a,i,t,n),null),ue===null)throw Error(u(349));o||(In&127)!==0||Yc(a,n,t)}return t}function Yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n=so(),U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Kc(e,n,t,a){n.value=t,n.getSnapshot=a,Wc(n)&&Vc(e)}function Jc(e,n,t){return t(function(){Wc(n)&&Vc(e)})}function Wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!tn(e,t)}catch{return!0}}function Vc(e){var n=Dt(e,2);n!==null&&Fe(n,e,2)}function tr(e){var n=Ue();if(typeof e=="function"){var t=e;if(e=t(),Gt){Fn(!0);try{t()}finally{Fn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:e},n}function Qc(e,n,t,a){return e.baseState=t,er(e,le,typeof a=="function"?a:Ln)}function eg(e,n,t,a,i){if(uo(e))throw Error(u(485));if(e=n.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};k.T!==null?t(!0):o.isTransition=!1,a(o),t=n.pending,t===null?(o.next=n.pending=o,Xc(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Xc(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var o=k.T,s={};k.T=s;try{var r=t(i,a),l=k.S;l!==null&&l(s,r),Zc(e,n,r)}catch(g){ar(e,n,g)}finally{o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}else try{o=t(i,a),Zc(e,n,o)}catch(g){ar(e,n,g)}}function Zc(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Fc(e,n,a)},function(a){return ar(e,n,a)}):Fc(e,n,t)}function Fc(e,n,t){n.status="fulfilled",n.value=t,$c(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Xc(e,t)))}function ar(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,$c(n),n=n.next;while(n!==a)}e.action=null}function $c(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ed(e,n){return n}function nd(e,n){if(Z){var t=ue.formState;if(t!==null){e:{var a=U;if(Z){if(ge){n:{for(var i=ge,o=yn;i.nodeType!==8;){if(!o){i=null;break n}if(i=vn(i.nextSibling),i===null){i=null;break n}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){ge=vn(i.nextSibling),a=i.data==="F!";break e}}at(a)}a=!1}a&&(n=t[0])}}return t=Ue(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ed,lastRenderedState:n},t.queue=a,t=vd.bind(null,U,a),a.dispatch=t,a=tr(!1),o=cr.bind(null,U,!1,a.queue),a=Ue(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=eg.bind(null,U,i,o,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function td(e){var n=Se();return ad(n,le,e)}function ad(e,n,t){if(n=er(e,n,ed)[0],e=lo(Ln)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=ei(n)}catch(s){throw s===ha?Fi:s}else a=n;n=Se();var i=n.queue,o=i.dispatch;return t!==n.memoizedState&&(U.flags|=2048,fa(9,{destroy:void 0},ng.bind(null,i,t),null)),[a,o,e]}function ng(e,n){e.action=n}function id(e){var n=Se(),t=le;if(t!==null)return ad(n,t,e);Se(),n=n.memoizedState,t=Se();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function fa(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=U.updateQueue,n===null&&(n=so(),U.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function od(){return Se().memoizedState}function co(e,n,t,a){var i=Ue();U.flags|=e,i.memoizedState=fa(1|n,{destroy:void 0},t,a===void 0?null:a)}function ho(e,n,t,a){var i=Se();a=a===void 0?null:a;var o=i.memoizedState.inst;le!==null&&a!==null&&Vs(a,le.memoizedState.deps)?i.memoizedState=fa(n,o,t,a):(U.flags|=e,i.memoizedState=fa(1|n,o,t,a))}function sd(e,n){co(8390656,8,e,n)}function ir(e,n){ho(2048,8,e,n)}function tg(e){U.flags|=4;var n=U.updateQueue;if(n===null)n=so(),U.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function rd(e){var n=Se().memoizedState;return tg({ref:n,nextImpl:e}),function(){if((ae&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function ld(e,n){return ho(4,2,e,n)}function cd(e,n){return ho(4,4,e,n)}function dd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hd(e,n,t){t=t!=null?t.concat([e]):null,ho(4,4,dd.bind(null,n,e),t)}function or(){}function ud(e,n){var t=Se();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Vs(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function pd(e,n){var t=Se();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Vs(n,a[1]))return a[0];if(a=e(),Gt){Fn(!0);try{e()}finally{Fn(!1)}}return t.memoizedState=[a,n],a}function sr(e,n,t){return t===void 0||(In&1073741824)!==0&&(Q&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=gh(),U.lanes|=e,ut|=e,t)}function gd(e,n,t,a){return tn(t,n)?t:pa.current!==null?(e=sr(e,t,a),tn(e,n)||(Ce=!0),e):(In&42)===0||(In&1073741824)!==0&&(Q&261930)===0?(Ce=!0,e.memoizedState=t):(e=gh(),U.lanes|=e,ut|=e,n)}function md(e,n,t,a,i){var o=M.p;M.p=o!==0&&8>o?o:8;var s=k.T,r={};k.T=r,cr(e,!1,n,t);try{var l=i(),g=k.S;if(g!==null&&g(r,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var y=Zp(l,a);ni(e,n,y,cn(e))}else ni(e,n,a,cn(e))}catch(w){ni(e,n,{then:function(){},status:"rejected",reason:w},cn())}finally{M.p=o,s!==null&&r.types!==null&&(s.types=r.types),k.T=s}}function ag(){}function rr(e,n,t,a){if(e.tag!==5)throw Error(u(476));var i=fd(e).queue;md(e,i,n,G,t===null?ag:function(){return bd(e),t(a)})}function fd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:G},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bd(e){var n=fd(e);n.next===null&&(n=e.alternate.memoizedState),ni(e,n.next.queue,{},cn())}function lr(){return Re(yi)}function yd(){return Se().memoizedState}function kd(){return Se().memoizedState}function ig(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=cn();e=st(t);var a=rt(n,e,t);a!==null&&(Fe(a,n,t),Xa(a,n,t)),n={cache:qs()},e.payload=n;return}n=n.return}}function og(e,n,t){var a=cn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},uo(e)?wd(n,t):(t=As(e,n,t,a),t!==null&&(Fe(t,e,a),_d(t,n,a)))}function vd(e,n,t){var a=cn();ni(e,n,t,a)}function ni(e,n,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(uo(e))wd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,r=o(s,t);if(i.hasEagerState=!0,i.eagerState=r,tn(r,s))return Ki(e,n,i,0),ue===null&&Yi(),!1}catch{}if(t=As(e,n,i,a),t!==null)return Fe(t,e,a),_d(t,n,a),!0}return!1}function cr(e,n,t,a){if(a={lane:2,revertLane:Ir(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uo(e)){if(n)throw Error(u(479))}else n=As(e,t,a,2),n!==null&&Fe(n,e,2)}function uo(e){var n=e.alternate;return e===U||n!==null&&n===U}function wd(e,n){ga=io=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _d(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Cl(e,t)}}var ti={readContext:Re,use:ro,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};ti.useEffectEvent=be;var Sd={readContext:Re,use:ro,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:sd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,co(4194308,4,dd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return co(4194308,4,e,n)},useInsertionEffect:function(e,n){co(4,2,e,n)},useMemo:function(e,n){var t=Ue();n=n===void 0?null:n;var a=e();if(Gt){Fn(!0);try{e()}finally{Fn(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Ue();if(t!==void 0){var i=t(n);if(Gt){Fn(!0);try{t(n)}finally{Fn(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=og.bind(null,U,e),[a.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:function(e){e=tr(e);var n=e.queue,t=vd.bind(null,U,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:or,useDeferredValue:function(e,n){var t=Ue();return sr(t,e,n)},useTransition:function(){var e=tr(!1);return e=md.bind(null,U,e.queue,!0,!1),Ue().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=U,i=Ue();if(Z){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),ue===null)throw Error(u(349));(Q&127)!==0||Yc(a,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,sd(Jc.bind(null,a,o,e),[e]),a.flags|=2048,fa(9,{destroy:void 0},Kc.bind(null,a,o,t,n),null),t},useId:function(){var e=Ue(),n=ue.identifierPrefix;if(Z){var t=xn,a=jn;t=(a&~(1<<32-nn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=oo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Fp++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lr,useFormState:nd,useActionState:nd,useOptimistic:function(e){var n=Ue();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=cr.bind(null,U,!0,t),t.dispatch=n,[e,n]},useMemoCache:$s,useCacheRefresh:function(){return Ue().memoizedState=ig.bind(null,U)},useEffectEvent:function(e){var n=Ue(),t={impl:e};return n.memoizedState=t,function(){if((ae&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},dr={readContext:Re,use:ro,useCallback:ud,useContext:Re,useEffect:ir,useImperativeHandle:hd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:pd,useReducer:lo,useRef:od,useState:function(){return lo(Ln)},useDebugValue:or,useDeferredValue:function(e,n){var t=Se();return gd(t,le.memoizedState,e,n)},useTransition:function(){var e=lo(Ln)[0],n=Se().memoizedState;return[typeof e=="boolean"?e:ei(e),n]},useSyncExternalStore:Uc,useId:yd,useHostTransitionStatus:lr,useFormState:td,useActionState:td,useOptimistic:function(e,n){var t=Se();return Qc(t,le,e,n)},useMemoCache:$s,useCacheRefresh:kd};dr.useEffectEvent=rd;var Td={readContext:Re,use:ro,useCallback:ud,useContext:Re,useEffect:ir,useImperativeHandle:hd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:pd,useReducer:nr,useRef:od,useState:function(){return nr(Ln)},useDebugValue:or,useDeferredValue:function(e,n){var t=Se();return le===null?sr(t,e,n):gd(t,le.memoizedState,e,n)},useTransition:function(){var e=nr(Ln)[0],n=Se().memoizedState;return[typeof e=="boolean"?e:ei(e),n]},useSyncExternalStore:Uc,useId:yd,useHostTransitionStatus:lr,useFormState:id,useActionState:id,useOptimistic:function(e,n){var t=Se();return le!==null?Qc(t,le,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:$s,useCacheRefresh:kd};Td.useEffectEvent=rd;function hr(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:C({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ur={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=cn(),i=st(a);i.payload=n,t!=null&&(i.callback=t),n=rt(e,i,a),n!==null&&(Fe(n,e,a),Xa(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=cn(),i=st(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=rt(e,i,a),n!==null&&(Fe(n,e,a),Xa(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=cn(),a=st(t);a.tag=2,n!=null&&(a.callback=n),n=rt(e,a,t),n!==null&&(Fe(n,e,t),Xa(n,e,t))}};function zd(e,n,t,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!La(t,a)||!La(i,o):!0}function Ad(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ur.enqueueReplaceState(n,n.state,null)}function It(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=C({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function Cd(e){Ui(e)}function Md(e){console.error(e)}function jd(e){Ui(e)}function po(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function xd(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function pr(e,n,t){return t=st(t),t.tag=3,t.payload={element:null},t.callback=function(){po(e,n)},t}function Dd(e){return e=st(e),e.tag=3,e}function Bd(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var o=a.value;e.payload=function(){return i(o)},e.callback=function(){xd(n,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){xd(n,t,a),typeof i!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function sg(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&la(n,t,i,!0),t=on.current,t!==null){switch(t.tag){case 31:case 13:return kn===null?zo():t.alternate===null&&ye===0&&(ye=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===$i?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Pr(e,a,i)),!1;case 22:return t.flags|=65536,a===$i?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Pr(e,a,i)),!1}throw Error(u(435,t.tag))}return Pr(e,a,i),zo(),!1}if(Z)return n=on.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==Bs&&(e=Error(u(422),{cause:a}),Ka(mn(e,t)))):(a!==Bs&&(n=Error(u(423),{cause:a}),Ka(mn(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=mn(a,t),i=pr(e.stateNode,a,i),Us(e,i),ye!==4&&(ye=2)),!1;var o=Error(u(520),{cause:a});if(o=mn(o,t),di===null?di=[o]:di.push(o),ye!==4&&(ye=2),n===null)return!0;a=mn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=pr(t.stateNode,a,e),Us(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(pt===null||!pt.has(o))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Dd(i),Bd(i,e,t,a),Us(t,i),!1}t=t.return}while(t!==null);return!1}var gr=Error(u(461)),Ce=!1;function qe(e,n,t,a){n.child=e===null?Rc(n,null,t,a):Ot(n,e.child,t,a)}function Nd(e,n,t,a,i){t=t.render;var o=n.ref;if("ref"in a){var s={};for(var r in a)r!=="ref"&&(s[r]=a[r])}else s=a;return Ht(n),a=Qs(e,n,t,s,o,i),r=Xs(),e!==null&&!Ce?(Zs(e,n,i),Un(e,n,i)):(Z&&r&&xs(n),n.flags|=1,qe(e,n,a,i),n.child)}function Ed(e,n,t,a,i){if(e===null){var o=t.type;return typeof o=="function"&&!Cs(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,Hd(e,n,o,a,i)):(e=Wi(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!_r(e,i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:La,t(s,a)&&e.ref===n.ref)return Un(e,n,i)}return n.flags|=1,e=qn(o,a),e.ref=n.ref,e.return=n,n.child=e}function Hd(e,n,t,a,i){if(e!==null){var o=e.memoizedProps;if(La(o,a)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=a=o,_r(e,i))(e.flags&131072)!==0&&(Ce=!0);else return n.lanes=e.lanes,Un(e,n,i)}return mr(e,n,t,a,i)}function Rd(e,n,t,a){var i=a.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~o}else a=0,n.child=null;return qd(e,n,o,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(n,o!==null?o.cachePool:null),o!==null?Oc(n,o):Ks(),Gc(n);else return a=n.lanes=536870912,qd(e,n,o!==null?o.baseLanes|t:t,t,a)}else o!==null?(Zi(n,o.cachePool),Oc(n,o),ct(),n.memoizedState=null):(e!==null&&Zi(n,null),Ks(),ct());return qe(e,n,i,t),n.child}function ai(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qd(e,n,t,a,i){var o=Os();return o=o===null?null:{parent:ze._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Zi(n,null),Ks(),Gc(n),e!==null&&la(e,n,a,!0),n.childLanes=i,null}function go(e,n){return n=fo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pd(e,n,t){return Ot(n,e.child,null,t),e=go(n,n.pendingProps),e.flags|=2,sn(n),n.memoizedState=null,e}function rg(e,n,t){var a=n.pendingProps,i=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Z){if(a.mode==="hidden")return e=go(n,a),n.lanes=536870912,ai(null,e);if(Ws(n),(e=ge)?(e=Xh(e,yn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:nt!==null?{id:jn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},t=wc(e),t.return=n,n.child=t,He=n,ge=null)):e=null,e===null)throw at(n);return n.lanes=536870912,null}return go(n,a)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ws(n),i)if(n.flags&256)n.flags&=-257,n=Pd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(Ce||la(e,n,t,!1),i=(t&e.childLanes)!==0,Ce||i){if(a=ue,a!==null&&(s=Ml(a,t),s!==0&&s!==o.retryLane))throw o.retryLane=s,Dt(e,s),Fe(a,e,s),gr;zo(),n=Pd(e,n,t)}else e=o.treeContext,ge=vn(s.nextSibling),He=n,Z=!0,tt=null,yn=!1,e!==null&&Tc(n,e),n=go(n,a),n.flags|=4096;return n}return e=qn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function mo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function mr(e,n,t,a,i){return Ht(n),t=Qs(e,n,t,a,void 0,i),a=Xs(),e!==null&&!Ce?(Zs(e,n,i),Un(e,n,i)):(Z&&a&&xs(n),n.flags|=1,qe(e,n,t,i),n.child)}function Od(e,n,t,a,i,o){return Ht(n),n.updateQueue=null,t=Lc(n,a,t,i),Ic(e),a=Xs(),e!==null&&!Ce?(Zs(e,n,o),Un(e,n,o)):(Z&&a&&xs(n),n.flags|=1,qe(e,n,t,o),n.child)}function Gd(e,n,t,a,i){if(Ht(n),n.stateNode===null){var o=ia,s=t.contextType;typeof s=="object"&&s!==null&&(o=Re(s)),o=new t(a,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ur,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=a,o.state=n.memoizedState,o.refs={},Is(n),s=t.contextType,o.context=typeof s=="object"&&s!==null?Re(s):ia,o.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(hr(n,t,s,a),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&ur.enqueueReplaceState(o,o.state,null),Fa(n,a,o,i),Za(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){o=n.stateNode;var r=n.memoizedProps,l=It(t,r);o.props=l;var g=o.context,y=t.contextType;s=ia,typeof y=="object"&&y!==null&&(s=Re(y));var w=t.getDerivedStateFromProps;y=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function",r=n.pendingProps!==r,y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r||g!==s)&&Ad(n,o,a,s),ot=!1;var m=n.memoizedState;o.state=m,Fa(n,a,o,i),Za(),g=n.memoizedState,r||m!==g||ot?(typeof w=="function"&&(hr(n,t,w,a),g=n.memoizedState),(l=ot||zd(n,t,l,a,m,g,s))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=g),o.props=a,o.state=g,o.context=s,a=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Ls(e,n),s=n.memoizedProps,y=It(t,s),o.props=y,w=n.pendingProps,m=o.context,g=t.contextType,l=ia,typeof g=="object"&&g!==null&&(l=Re(g)),r=t.getDerivedStateFromProps,(g=typeof r=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==w||m!==l)&&Ad(n,o,a,l),ot=!1,m=n.memoizedState,o.state=m,Fa(n,a,o,i),Za();var b=n.memoizedState;s!==w||m!==b||ot||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof r=="function"&&(hr(n,t,r,a),b=n.memoizedState),(y=ot||zd(n,t,y,a,m,b,l)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,b,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,b,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=b),o.props=a,o.state=b,o.context=l,a=y):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return o=a,mo(e,n),a=(n.flags&128)!==0,o||a?(o=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&a?(n.child=Ot(n,e.child,null,i),n.child=Ot(n,null,t,i)):qe(e,n,t,i),n.memoizedState=o.state,e=n.child):e=Un(e,n,i),e}function Id(e,n,t,a){return Nt(),n.flags|=256,qe(e,n,t,a),n.child}var fr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function br(e){return{baseLanes:e,cachePool:xc()}}function yr(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ln),e}function Ld(e,n,t){var a=n.pendingProps,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),s&&(i=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(Z){if(i?lt(n):ct(),(e=ge)?(e=Xh(e,yn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:nt!==null?{id:jn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},t=wc(e),t.return=n,n.child=t,He=n,ge=null)):e=null,e===null)throw at(n);return el(e)?n.lanes=32:n.lanes=536870912,null}var r=a.children;return a=a.fallback,i?(ct(),i=n.mode,r=fo({mode:"hidden",children:r},i),a=Bt(a,i,t,null),r.return=n,a.return=n,r.sibling=a,n.child=r,a=n.child,a.memoizedState=br(t),a.childLanes=yr(e,s,t),n.memoizedState=fr,ai(null,a)):(lt(n),kr(n,r))}var l=e.memoizedState;if(l!==null&&(r=l.dehydrated,r!==null)){if(o)n.flags&256?(lt(n),n.flags&=-257,n=vr(e,n,t)):n.memoizedState!==null?(ct(),n.child=e.child,n.flags|=128,n=null):(ct(),r=a.fallback,i=n.mode,a=fo({mode:"visible",children:a.children},i),r=Bt(r,i,t,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,Ot(n,e.child,null,t),a=n.child,a.memoizedState=br(t),a.childLanes=yr(e,s,t),n.memoizedState=fr,n=ai(null,a));else if(lt(n),el(r)){if(s=r.nextSibling&&r.nextSibling.dataset,s)var g=s.dgst;s=g,a=Error(u(419)),a.stack="",a.digest=s,Ka({value:a,source:null,stack:null}),n=vr(e,n,t)}else if(Ce||la(e,n,t,!1),s=(t&e.childLanes)!==0,Ce||s){if(s=ue,s!==null&&(a=Ml(s,t),a!==0&&a!==l.retryLane))throw l.retryLane=a,Dt(e,a),Fe(s,e,a),gr;$r(r)||zo(),n=vr(e,n,t)}else $r(r)?(n.flags|=192,n.child=e.child,n=null):(e=l.treeContext,ge=vn(r.nextSibling),He=n,Z=!0,tt=null,yn=!1,e!==null&&Tc(n,e),n=kr(n,a.children),n.flags|=4096);return n}return i?(ct(),r=a.fallback,i=n.mode,l=e.child,g=l.sibling,a=qn(l,{mode:"hidden",children:a.children}),a.subtreeFlags=l.subtreeFlags&65011712,g!==null?r=qn(g,r):(r=Bt(r,i,t,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,ai(null,a),a=n.child,r=e.child.memoizedState,r===null?r=br(t):(i=r.cachePool,i!==null?(l=ze._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=xc(),r={baseLanes:r.baseLanes|t,cachePool:i}),a.memoizedState=r,a.childLanes=yr(e,s,t),n.memoizedState=fr,ai(e.child,a)):(lt(n),t=e.child,e=t.sibling,t=qn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function kr(e,n){return n=fo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function fo(e,n){return e=an(22,e,null,n),e.lanes=0,e}function vr(e,n,t){return Ot(n,e.child,null,t),e=kr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ud(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Hs(e.return,n,t)}function wr(e,n,t,a,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:o}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=o)}function Yd(e,n,t){var a=n.pendingProps,i=a.revealOrder,o=a.tail;a=a.children;var s=_e.current,r=(s&2)!==0;if(r?(s=s&1|2,n.flags|=128):s&=1,j(_e,s),qe(e,n,a,t),a=Z?Ya:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ud(e,t,n);else if(e.tag===19)Ud(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ao(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),wr(n,!1,i,t,o,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}wr(n,!0,t,null,o,a);break;case"together":wr(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ut|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(la(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _r(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Qi(e)))}function lg(e,n,t){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),it(n,ze,e.memoizedState.cache),Nt();break;case 27:case 5:ja(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:it(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ws(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(lt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Ld(e,n,t):(lt(n),e=Un(e,n,t),e!==null?e.sibling:null);lt(n);break;case 19:var i=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(la(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return Yd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(_e,_e.current),a)break;return null;case 22:return n.lanes=0,Rd(e,n,t,n.pendingProps);case 24:it(n,ze,e.memoizedState.cache)}return Un(e,n,t)}function Kd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ce=!0;else{if(!_r(e,t)&&(n.flags&128)===0)return Ce=!1,lg(e,n,t);Ce=(e.flags&131072)!==0}else Ce=!1,Z&&(n.flags&1048576)!==0&&Sc(n,Ya,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=qt(n.elementType),n.type=e,typeof e=="function")Cs(e)?(a=It(e,a),n.tag=1,n=Gd(null,n,e,a,t)):(n.tag=0,n=mr(null,n,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===Ie){n.tag=11,n=Nd(null,n,e,a,t);break e}else if(i===K){n.tag=14,n=Ed(null,n,e,a,t);break e}}throw n=Nn(e)||e,Error(u(306,n,""))}}return n;case 0:return mr(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=It(a,n.pendingProps),Gd(e,n,a,i,t);case 3:e:{if(Le(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var o=n.memoizedState;i=o.element,Ls(e,n),Fa(n,a,null,t);var s=n.memoizedState;if(a=s.cache,it(n,ze,a),a!==o.cache&&Rs(n,[ze],t,!0),Za(),a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Id(e,n,a,t);break e}else if(a!==i){i=mn(Error(u(424)),n),Ka(i),n=Id(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ge=vn(e.firstChild),He=n,Z=!0,tt=null,yn=!0,t=Rc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),a===i){n=Un(e,n,t);break e}qe(e,n,a,t)}n=n.child}return n;case 26:return mo(e,n),e===null?(t=tu(n.type,null,n.pendingProps,null))?n.memoizedState=t:Z||(t=n.type,e=n.pendingProps,a=Bo(J.current).createElement(t),a[Ee]=n,a[Je]=e,Pe(a,t,e),De(a),n.stateNode=a):n.memoizedState=tu(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ja(n),e===null&&Z&&(a=n.stateNode=$h(n.type,n.pendingProps,J.current),He=n,yn=!0,i=ge,bt(n.type)?(nl=i,ge=vn(a.firstChild)):ge=i),qe(e,n,n.pendingProps.children,t),mo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Z&&((i=a=ge)&&(a=Pg(a,n.type,n.pendingProps,yn),a!==null?(n.stateNode=a,He=n,ge=vn(a.firstChild),yn=!1,i=!0):i=!1),i||at(n)),ja(n),i=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,Xr(i,o)?a=null:s!==null&&Xr(i,s)&&(n.flags|=32),n.memoizedState!==null&&(i=Qs(e,n,$p,null,null,t),yi._currentValue=i),mo(e,n),qe(e,n,a,t),n.child;case 6:return e===null&&Z&&((e=t=ge)&&(t=Og(t,n.pendingProps,yn),t!==null?(n.stateNode=t,He=n,ge=null,e=!0):e=!1),e||at(n)),null;case 13:return Ld(e,n,t);case 4:return Le(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Ot(n,null,a,t):qe(e,n,a,t),n.child;case 11:return Nd(e,n,n.type,n.pendingProps,t);case 7:return qe(e,n,n.pendingProps,t),n.child;case 8:return qe(e,n,n.pendingProps.children,t),n.child;case 12:return qe(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,it(n,n.type,a.value),qe(e,n,a.children,t),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Ht(n),i=Re(i),a=a(i),n.flags|=1,qe(e,n,a,t),n.child;case 14:return Ed(e,n,n.type,n.pendingProps,t);case 15:return Hd(e,n,n.type,n.pendingProps,t);case 19:return Yd(e,n,t);case 31:return rg(e,n,t);case 22:return Rd(e,n,t,n.pendingProps);case 24:return Ht(n),a=Re(ze),e===null?(i=Os(),i===null&&(i=ue,o=qs(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=t),i=o),n.memoizedState={parent:a,cache:i},Is(n),it(n,ze,i)):((e.lanes&t)!==0&&(Ls(e,n),Fa(n,null,null,t),Za()),i=e.memoizedState,o=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),it(n,ze,a)):(a=o.cache,it(n,ze,a),a!==i.cache&&Rs(n,[ze],t,!0))),qe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Yn(e){e.flags|=4}function Sr(e,n,t,a,i){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(yh())e.flags|=8192;else throw Pt=$i,Gs}else e.flags&=-16777217}function Jd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ru(n))if(yh())e.flags|=8192;else throw Pt=$i,Gs}function bo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?zl():536870912,e.lanes|=n,va|=n)}function ii(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function me(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function cg(e,n,t){var a=n.pendingProps;switch(Ds(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(n),null;case 1:return me(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gn(ze),we(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ra(n)?Yn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ns())),me(n),null;case 26:var i=n.type,o=n.memoizedState;return e===null?(Yn(n),o!==null?(me(n),Jd(n,o)):(me(n),Sr(n,i,null,a,t))):o?o!==e.memoizedState?(Yn(n),me(n),Jd(n,o)):(me(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yn(n),me(n),Sr(n,i,e,a,t)),null;case 27:if(Ci(n),t=J.current,i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Yn(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return me(n),null}e=E.current,ra(n)?zc(n):(e=$h(i,a,t),n.stateNode=e,Yn(n))}return me(n),null;case 5:if(Ci(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Yn(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return me(n),null}if(o=E.current,ra(n))zc(n);else{var s=Bo(J.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}o[Ee]=n,o[Je]=a;e:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=o;e:switch(Pe(o,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yn(n)}}return me(n),Sr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Yn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=J.current,ra(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=He,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ee]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Lh(e.nodeValue,t)),e||at(n,!0)}else e=Bo(e).createTextNode(a),e[Ee]=n,n.stateNode=e}return me(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=ra(n),t!==null){if(e===null){if(!a)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ee]=n}else Nt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;me(n),e=!1}else t=Ns(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(sn(n),n):(sn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return me(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ra(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ee]=n}else Nt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;me(n),i=!1}else i=Ns(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(sn(n),n):(sn(n),null)}return sn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==i&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),bo(n,n.updateQueue),me(n),null);case 4:return we(),e===null&&Kr(n.stateNode.containerInfo),me(n),null;case 10:return Gn(n.type),me(n),null;case 19:if(_(_e),a=n.memoizedState,a===null)return me(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)ii(a,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=ao(e),o!==null){for(n.flags|=128,ii(a,!1),e=o.updateQueue,n.updateQueue=e,bo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)vc(t,e),t=t.sibling;return j(_e,_e.current&1|2),Z&&Pn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&$e()>_o&&(n.flags|=128,i=!0,ii(a,!1),n.lanes=4194304)}else{if(!i)if(e=ao(o),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,bo(n,e),ii(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Z)return me(n),null}else 2*$e()-a.renderingStartTime>_o&&t!==536870912&&(n.flags|=128,i=!0,ii(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(e=a.last,e!==null?e.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,t=_e.current,j(_e,i?t&1|2:t&1),Z&&Pn(n,a.treeForkCount),e):(me(n),null);case 22:case 23:return sn(n),Js(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(me(n),n.subtreeFlags&6&&(n.flags|=8192)):me(n),t=n.updateQueue,t!==null&&bo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&_(Rt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Gn(ze),me(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function dg(e,n){switch(Ds(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gn(ze),we(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ci(n),null;case 31:if(n.memoizedState!==null){if(sn(n),n.alternate===null)throw Error(u(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(sn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _(_e),null;case 4:return we(),null;case 10:return Gn(n.type),null;case 22:case 23:return sn(n),Js(),e!==null&&_(Rt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gn(ze),null;case 25:return null;default:return null}}function Wd(e,n){switch(Ds(n),n.tag){case 3:Gn(ze),we();break;case 26:case 27:case 5:Ci(n);break;case 4:we();break;case 31:n.memoizedState!==null&&sn(n);break;case 13:sn(n);break;case 19:_(_e);break;case 10:Gn(n.type);break;case 22:case 23:sn(n),Js(),e!==null&&_(Rt);break;case 24:Gn(ze)}}function oi(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var o=t.create,s=t.inst;a=o(),s.destroy=a}t=t.next}while(t!==i)}}catch(r){se(n,n.return,r)}}function dt(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){var s=a.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,i=n;var l=t,g=r;try{g()}catch(y){se(i,l,y)}}}a=a.next}while(a!==o)}}catch(y){se(n,n.return,y)}}function Vd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Pc(n,t)}catch(a){se(e,e.return,a)}}}function Qd(e,n,t){t.props=It(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){se(e,n,a)}}function si(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){se(e,n,i)}}function Dn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){se(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){se(e,n,i)}else t.current=null}function Xd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){se(e,e.return,i)}}function Tr(e,n,t){try{var a=e.stateNode;Bg(a,e.type,t,n),a[Je]=n}catch(i){se(e,e.return,i)}}function Zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bt(e.type)||e.tag===4}function zr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ar(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Hn));else if(a!==4&&(a===27&&bt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Ar(e,n,t),e=e.sibling;e!==null;)Ar(e,n,t),e=e.sibling}function yo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&bt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(yo(e,n,t),e=e.sibling;e!==null;)yo(e,n,t),e=e.sibling}function Fd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Pe(n,a,t),n[Ee]=e,n[Je]=t}catch(o){se(e,e.return,o)}}var Kn=!1,Me=!1,Cr=!1,$d=typeof WeakSet=="function"?WeakSet:Set,Be=null;function hg(e,n){if(e=e.containerInfo,Vr=Oo,e=hc(e),vs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,r=-1,l=-1,g=0,y=0,w=e,m=null;n:for(;;){for(var b;w!==t||i!==0&&w.nodeType!==3||(r=s+i),w!==o||a!==0&&w.nodeType!==3||(l=s+a),w.nodeType===3&&(s+=w.nodeValue.length),(b=w.firstChild)!==null;)m=w,w=b;for(;;){if(w===e)break n;if(m===t&&++g===i&&(r=s),m===o&&++y===a&&(l=s),(b=w.nextSibling)!==null)break;w=m,m=w.parentNode}w=b}t=r===-1||l===-1?null:{start:r,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qr={focusedElem:e,selectionRange:t},Oo=!1,Be=n;Be!==null;)if(n=Be,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Be=e;else for(;Be!==null;){switch(n=Be,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,i=o.memoizedProps,o=o.memoizedState,a=t.stateNode;try{var N=It(t.type,i);e=a.getSnapshotBeforeUpdate(N,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(P){se(t,t.return,P)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Fr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Be=e;break}Be=n.return}}function eh(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Wn(e,t),a&4&&oi(5,t);break;case 1:if(Wn(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){se(t,t.return,s)}else{var i=It(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){se(t,t.return,s)}}a&64&&Vd(t),a&512&&si(t,t.return);break;case 3:if(Wn(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Pc(e,n)}catch(s){se(t,t.return,s)}}break;case 27:n===null&&a&4&&Fd(t);case 26:case 5:Wn(e,t),n===null&&a&4&&Xd(t),a&512&&si(t,t.return);break;case 12:Wn(e,t);break;case 31:Wn(e,t),a&4&&ah(e,t);break;case 13:Wn(e,t),a&4&&ih(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=vg.bind(null,t),Gg(e,t))));break;case 22:if(a=t.memoizedState!==null||Kn,!a){n=n!==null&&n.memoizedState!==null||Me,i=Kn;var o=Me;Kn=a,(Me=n)&&!o?Vn(e,t,(t.subtreeFlags&8772)!==0):Wn(e,t),Kn=i,Me=o}break;case 30:break;default:Wn(e,t)}}function nh(e){var n=e.alternate;n!==null&&(e.alternate=null,nh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&as(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,Ve=!1;function Jn(e,n,t){for(t=t.child;t!==null;)th(e,n,t),t=t.sibling}function th(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(xa,t)}catch{}switch(t.tag){case 26:Me||Dn(t,n),Jn(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Me||Dn(t,n);var a=fe,i=Ve;bt(t.type)&&(fe=t.stateNode,Ve=!1),Jn(e,n,t),mi(t.stateNode),fe=a,Ve=i;break;case 5:Me||Dn(t,n);case 6:if(a=fe,i=Ve,fe=null,Jn(e,n,t),fe=a,Ve=i,fe!==null)if(Ve)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(t.stateNode)}catch(o){se(t,n,o)}else try{fe.removeChild(t.stateNode)}catch(o){se(t,n,o)}break;case 18:fe!==null&&(Ve?(e=fe,Vh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ma(e)):Vh(fe,t.stateNode));break;case 4:a=fe,i=Ve,fe=t.stateNode.containerInfo,Ve=!0,Jn(e,n,t),fe=a,Ve=i;break;case 0:case 11:case 14:case 15:dt(2,t,n),Me||dt(4,t,n),Jn(e,n,t);break;case 1:Me||(Dn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Qd(t,n,a)),Jn(e,n,t);break;case 21:Jn(e,n,t);break;case 22:Me=(a=Me)||t.memoizedState!==null,Jn(e,n,t),Me=a;break;default:Jn(e,n,t)}}function ah(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ma(e)}catch(t){se(n,n.return,t)}}}function ih(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ma(e)}catch(t){se(n,n.return,t)}}function ug(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $d),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $d),n;default:throw Error(u(435,e.tag))}}function ko(e,n){var t=ug(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var i=wg.bind(null,e,a);a.then(i,i)}})}function Qe(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],o=e,s=n,r=s;e:for(;r!==null;){switch(r.tag){case 27:if(bt(r.type)){fe=r.stateNode,Ve=!1;break e}break;case 5:fe=r.stateNode,Ve=!1;break e;case 3:case 4:fe=r.stateNode.containerInfo,Ve=!0;break e}r=r.return}if(fe===null)throw Error(u(160));th(o,s,i),fe=null,Ve=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)oh(n,e),n=n.sibling}var Cn=null;function oh(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(n,e),Xe(e),a&4&&(dt(3,e,e.return),oi(3,e),dt(5,e,e.return));break;case 1:Qe(n,e),Xe(e),a&512&&(Me||t===null||Dn(t,t.return)),a&64&&Kn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=Cn;if(Qe(n,e),Xe(e),a&512&&(Me||t===null||Dn(t,t.return)),a&4){var o=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Na]||o[Ee]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(a),i.head.insertBefore(o,i.querySelector("head > title"))),Pe(o,a,t),o[Ee]=e,De(o),a=o;break e;case"link":var s=ou("link","href",i).get(a+(t.href||""));if(s){for(var r=0;r<s.length;r++)if(o=s[r],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(r,1);break n}}o=i.createElement(a),Pe(o,a,t),i.head.appendChild(o);break;case"meta":if(s=ou("meta","content",i).get(a+(t.content||""))){for(r=0;r<s.length;r++)if(o=s[r],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(r,1);break n}}o=i.createElement(a),Pe(o,a,t),i.head.appendChild(o);break;default:throw Error(u(468,a))}o[Ee]=e,De(o),a=o}e.stateNode=a}else su(i,e.type,e.stateNode);else e.stateNode=iu(i,a,e.memoizedProps);else o!==a?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,a===null?su(i,e.type,e.stateNode):iu(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Tr(e,e.memoizedProps,t.memoizedProps)}break;case 27:Qe(n,e),Xe(e),a&512&&(Me||t===null||Dn(t,t.return)),t!==null&&a&4&&Tr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Qe(n,e),Xe(e),a&512&&(Me||t===null||Dn(t,t.return)),e.flags&32){i=e.stateNode;try{Zt(i,"")}catch(N){se(e,e.return,N)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Tr(e,i,t!==null?t.memoizedProps:i)),a&1024&&(Cr=!0);break;case 6:if(Qe(n,e),Xe(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(N){se(e,e.return,N)}}break;case 3:if(Ho=null,i=Cn,Cn=No(n.containerInfo),Qe(n,e),Cn=i,Xe(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ma(n.containerInfo)}catch(N){se(e,e.return,N)}Cr&&(Cr=!1,sh(e));break;case 4:a=Cn,Cn=No(e.stateNode.containerInfo),Qe(n,e),Xe(e),Cn=a;break;case 12:Qe(n,e),Xe(e);break;case 31:Qe(n,e),Xe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ko(e,a)));break;case 13:Qe(n,e),Xe(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(wo=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ko(e,a)));break;case 22:i=e.memoizedState!==null;var l=t!==null&&t.memoizedState!==null,g=Kn,y=Me;if(Kn=g||i,Me=y||l,Qe(n,e),Me=y,Kn=g,Xe(e),a&8192)e:for(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(t===null||l||Kn||Me||Lt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){l=t=n;try{if(o=l.stateNode,i)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=l.stateNode;var w=l.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){se(l,l.return,N)}}}else if(n.tag===6){if(t===null){l=n;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(N){se(l,l.return,N)}}}else if(n.tag===18){if(t===null){l=n;try{var b=l.stateNode;i?Qh(b,!0):Qh(l.stateNode,!1)}catch(N){se(l,l.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,ko(e,t))));break;case 19:Qe(n,e),Xe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ko(e,a)));break;case 30:break;case 21:break;default:Qe(n,e),Xe(e)}}function Xe(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Zd(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var i=t.stateNode,o=zr(e);yo(e,o,i);break;case 5:var s=t.stateNode;t.flags&32&&(Zt(s,""),t.flags&=-33);var r=zr(e);yo(e,r,s);break;case 3:case 4:var l=t.stateNode.containerInfo,g=zr(e);Ar(e,g,l);break;default:throw Error(u(161))}}catch(y){se(e,e.return,y)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eh(e,n.alternate,n),n=n.sibling}function Lt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dt(4,n,n.return),Lt(n);break;case 1:Dn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Qd(n,n.return,t),Lt(n);break;case 27:mi(n.stateNode);case 26:case 5:Dn(n,n.return),Lt(n);break;case 22:n.memoizedState===null&&Lt(n);break;case 30:Lt(n);break;default:Lt(n)}e=e.sibling}}function Vn(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=e,o=n,s=o.flags;switch(o.tag){case 0:case 11:case 15:Vn(i,o,t),oi(4,o);break;case 1:if(Vn(i,o,t),a=o,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){se(a,a.return,g)}if(a=o,i=a.updateQueue,i!==null){var r=a.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)qc(l[i],r)}catch(g){se(a,a.return,g)}}t&&s&64&&Vd(o),si(o,o.return);break;case 27:Fd(o);case 26:case 5:Vn(i,o,t),t&&a===null&&s&4&&Xd(o),si(o,o.return);break;case 12:Vn(i,o,t);break;case 31:Vn(i,o,t),t&&s&4&&ah(i,o);break;case 13:Vn(i,o,t),t&&s&4&&ih(i,o);break;case 22:o.memoizedState===null&&Vn(i,o,t),si(o,o.return);break;case 30:break;default:Vn(i,o,t)}n=n.sibling}}function Mr(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ja(t))}function jr(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ja(e))}function Mn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rh(e,n,t,a),n=n.sibling}function rh(e,n,t,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Mn(e,n,t,a),i&2048&&oi(9,n);break;case 1:Mn(e,n,t,a);break;case 3:Mn(e,n,t,a),i&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ja(e)));break;case 12:if(i&2048){Mn(e,n,t,a),e=n.stateNode;try{var o=n.memoizedProps,s=o.id,r=o.onPostCommit;typeof r=="function"&&r(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){se(n,n.return,l)}}else Mn(e,n,t,a);break;case 31:Mn(e,n,t,a);break;case 13:Mn(e,n,t,a);break;case 23:break;case 22:o=n.stateNode,s=n.alternate,n.memoizedState!==null?o._visibility&2?Mn(e,n,t,a):ri(e,n):o._visibility&2?Mn(e,n,t,a):(o._visibility|=2,ba(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),i&2048&&Mr(s,n);break;case 24:Mn(e,n,t,a),i&2048&&jr(n.alternate,n);break;default:Mn(e,n,t,a)}}function ba(e,n,t,a,i){for(i=i&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,s=n,r=t,l=a,g=s.flags;switch(s.tag){case 0:case 11:case 15:ba(o,s,r,l,i),oi(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?ba(o,s,r,l,i):ri(o,s):(y._visibility|=2,ba(o,s,r,l,i)),i&&g&2048&&Mr(s.alternate,s);break;case 24:ba(o,s,r,l,i),i&&g&2048&&jr(s.alternate,s);break;default:ba(o,s,r,l,i)}n=n.sibling}}function ri(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:ri(t,a),i&2048&&Mr(a.alternate,a);break;case 24:ri(t,a),i&2048&&jr(a.alternate,a);break;default:ri(t,a)}n=n.sibling}}var li=8192;function ya(e,n,t){if(e.subtreeFlags&li)for(e=e.child;e!==null;)lh(e,n,t),e=e.sibling}function lh(e,n,t){switch(e.tag){case 26:ya(e,n,t),e.flags&li&&e.memoizedState!==null&&Fg(t,Cn,e.memoizedState,e.memoizedProps);break;case 5:ya(e,n,t);break;case 3:case 4:var a=Cn;Cn=No(e.stateNode.containerInfo),ya(e,n,t),Cn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=li,li=16777216,ya(e,n,t),li=a):ya(e,n,t));break;default:ya(e,n,t)}}function ch(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ci(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Be=a,hh(a,e)}ch(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dh(e),e=e.sibling}function dh(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&dt(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,vo(e)):ci(e);break;default:ci(e)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Be=a,hh(a,e)}ch(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dt(8,n,n.return),vo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,vo(n));break;default:vo(n)}e=e.sibling}}function hh(e,n){for(;Be!==null;){var t=Be;switch(t.tag){case 0:case 11:case 15:dt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Be=a;else e:for(t=e;Be!==null;){a=Be;var i=a.sibling,o=a.return;if(nh(a),a===t){Be=null;break e}if(i!==null){i.return=o,Be=i;break e}Be=o}}}var pg={getCacheForType:function(e){var n=Re(ze),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Re(ze).controller.signal}},gg=typeof WeakMap=="function"?WeakMap:Map,ae=0,ue=null,W=null,Q=0,oe=0,rn=null,ht=!1,ka=!1,xr=!1,Qn=0,ye=0,ut=0,Ut=0,Dr=0,ln=0,va=0,di=null,Ze=null,Br=!1,wo=0,uh=0,_o=1/0,So=null,pt=null,xe=0,gt=null,wa=null,Xn=0,Nr=0,Er=null,ph=null,hi=0,Hr=null;function cn(){return(ae&2)!==0&&Q!==0?Q&-Q:k.T!==null?Ir():jl()}function gh(){if(ln===0)if((Q&536870912)===0||Z){var e=xi;xi<<=1,(xi&3932160)===0&&(xi=262144),ln=e}else ln=536870912;return e=on.current,e!==null&&(e.flags|=32),ln}function Fe(e,n,t){(e===ue&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(_a(e,0),mt(e,Q,ln,!1)),Ba(e,t),((ae&2)===0||e!==ue)&&(e===ue&&((ae&2)===0&&(Ut|=t),ye===4&&mt(e,Q,ln,!1)),Bn(e))}function mh(e,n,t){if((ae&6)!==0)throw Error(u(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Da(e,n),i=a?bg(e,n):qr(e,n,!0),o=a;do{if(i===0){ka&&!a&&mt(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!mg(t)){i=qr(e,n,!1),o=!1;continue}if(i===2){if(o=n,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var r=e;i=di;var l=r.current.memoizedState.isDehydrated;if(l&&(_a(r,s).flags|=256),s=qr(r,s,!1),s!==2){if(xr&&!l){r.errorRecoveryDisabledLanes|=o,Ut|=o,i=4;break e}o=Ze,Ze=i,o!==null&&(Ze===null?Ze=o:Ze.push.apply(Ze,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){_a(e,0),mt(e,n,0,!0);break}e:{switch(a=e,o=i,o){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:mt(a,n,ln,!ht);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(i=wo+300-$e(),10<i)){if(mt(a,n,ln,!ht),Bi(a,0,!0)!==0)break e;Xn=n,a.timeoutHandle=Jh(fh.bind(null,a,t,Ze,So,Br,n,ln,Ut,va,ht,o,"Throttled",-0,0),i);break e}fh(a,t,Ze,So,Br,n,ln,Ut,va,ht,o,null,-0,0)}}break}while(!0);Bn(e)}function fh(e,n,t,a,i,o,s,r,l,g,y,w,m,b){if(e.timeoutHandle=-1,w=n.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},lh(n,o,w);var N=(o&62914560)===o?wo-$e():(o&4194048)===o?uh-$e():0;if(N=$g(w,N),N!==null){Xn=o,e.cancelPendingCommit=N(Th.bind(null,e,n,o,t,a,i,s,r,l,y,w,null,m,b)),mt(e,o,s,!g);return}}Th(e,n,o,t,a,i,s,r,l)}function mg(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],o=i.getSnapshot;i=i.value;try{if(!tn(o(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mt(e,n,t,a){n&=~Dr,n&=~Ut,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var o=31-nn(i),s=1<<o;a[o]=-1,i&=~s}t!==0&&Al(e,t,n)}function To(){return(ae&6)===0?(ui(0),!1):!0}function Rr(){if(W!==null){if(oe===0)var e=W.return;else e=W,On=Et=null,Fs(e),ua=null,Va=0,e=W;for(;e!==null;)Wd(e.alternate,e),e=e.return;W=null}}function _a(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Hg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Xn=0,Rr(),ue=e,W=t=qn(e.current,null),Q=n,oe=0,rn=null,ht=!1,ka=Da(e,n),xr=!1,va=ln=Dr=Ut=ut=ye=0,Ze=di=null,Br=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var i=31-nn(a),o=1<<i;n|=e[i],a&=~o}return Qn=n,Yi(),t}function bh(e,n){U=null,k.H=ti,n===ha||n===Fi?(n=Nc(),oe=3):n===Gs?(n=Nc(),oe=4):oe=n===gr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,rn=n,W===null&&(ye=1,po(e,mn(n,e.current)))}function yh(){var e=on.current;return e===null?!0:(Q&4194048)===Q?kn===null:(Q&62914560)===Q||(Q&536870912)!==0?e===kn:!1}function kh(){var e=k.H;return k.H=ti,e===null?ti:e}function vh(){var e=k.A;return k.A=pg,e}function zo(){ye=4,ht||(Q&4194048)!==Q&&on.current!==null||(ka=!0),(ut&134217727)===0&&(Ut&134217727)===0||ue===null||mt(ue,Q,ln,!1)}function qr(e,n,t){var a=ae;ae|=2;var i=kh(),o=vh();(ue!==e||Q!==n)&&(So=null,_a(e,n)),n=!1;var s=ye;e:do try{if(oe!==0&&W!==null){var r=W,l=rn;switch(oe){case 8:Rr(),s=6;break e;case 3:case 2:case 9:case 6:on.current===null&&(n=!0);var g=oe;if(oe=0,rn=null,Sa(e,r,l,g),t&&ka){s=0;break e}break;default:g=oe,oe=0,rn=null,Sa(e,r,l,g)}}fg(),s=ye;break}catch(y){bh(e,y)}while(!0);return n&&e.shellSuspendCounter++,On=Et=null,ae=a,k.H=i,k.A=o,W===null&&(ue=null,Q=0,Yi()),s}function fg(){for(;W!==null;)wh(W)}function bg(e,n){var t=ae;ae|=2;var a=kh(),i=vh();ue!==e||Q!==n?(So=null,_o=$e()+500,_a(e,n)):ka=Da(e,n);e:do try{if(oe!==0&&W!==null){n=W;var o=rn;n:switch(oe){case 1:oe=0,rn=null,Sa(e,n,o,1);break;case 2:case 9:if(Dc(o)){oe=0,rn=null,_h(n);break}n=function(){oe!==2&&oe!==9||ue!==e||(oe=7),Bn(e)},o.then(n,n);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:Dc(o)?(oe=0,rn=null,_h(n)):(oe=0,rn=null,Sa(e,n,o,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var r=W;if(s?ru(s):r.stateNode.complete){oe=0,rn=null;var l=r.sibling;if(l!==null)W=l;else{var g=r.return;g!==null?(W=g,Ao(g)):W=null}break n}}oe=0,rn=null,Sa(e,n,o,5);break;case 6:oe=0,rn=null,Sa(e,n,o,6);break;case 8:Rr(),ye=6;break e;default:throw Error(u(462))}}yg();break}catch(y){bh(e,y)}while(!0);return On=Et=null,k.H=a,k.A=i,ae=t,W!==null?0:(ue=null,Q=0,Yi(),ye)}function yg(){for(;W!==null&&!Iu();)wh(W)}function wh(e){var n=Kd(e.alternate,e,Qn);e.memoizedProps=e.pendingProps,n===null?Ao(e):W=n}function _h(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Od(t,n,n.pendingProps,n.type,void 0,Q);break;case 11:n=Od(t,n,n.pendingProps,n.type.render,n.ref,Q);break;case 5:Fs(n);default:Wd(t,n),n=W=vc(n,Qn),n=Kd(t,n,Qn)}e.memoizedProps=e.pendingProps,n===null?Ao(e):W=n}function Sa(e,n,t,a){On=Et=null,Fs(n),ua=null,Va=0;var i=n.return;try{if(sg(e,i,n,t,Q)){ye=1,po(e,mn(t,e.current)),W=null;return}}catch(o){if(i!==null)throw W=i,o;ye=1,po(e,mn(t,e.current)),W=null;return}n.flags&32768?(Z||a===1?e=!0:ka||(Q&536870912)!==0?e=!1:(ht=e=!0,(a===2||a===9||a===3||a===6)&&(a=on.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sh(n,e)):Ao(n)}function Ao(e){var n=e;do{if((n.flags&32768)!==0){Sh(n,ht);return}e=n.return;var t=cg(n.alternate,n,Qn);if(t!==null){W=t;return}if(n=n.sibling,n!==null){W=n;return}W=n=e}while(n!==null);ye===0&&(ye=5)}function Sh(e,n){do{var t=dg(e.alternate,e);if(t!==null){t.flags&=32767,W=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){W=e;return}W=e=t}while(e!==null);ye=6,W=null}function Th(e,n,t,a,i,o,s,r,l){e.cancelPendingCommit=null;do Co();while(xe!==0);if((ae&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(o=n.lanes|n.childLanes,o|=zs,Zu(e,t,o,s,r,l),e===ue&&(W=ue=null,Q=0),wa=n,gt=e,Xn=t,Nr=o,Er=i,ph=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_g(Mi,function(){return jh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,i=M.p,M.p=2,s=ae,ae|=4;try{hg(e,n,t)}finally{ae=s,M.p=i,k.T=a}}xe=1,zh(),Ah(),Ch()}}function zh(){if(xe===1){xe=0;var e=gt,n=wa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=k.T,k.T=null;var a=M.p;M.p=2;var i=ae;ae|=4;try{oh(n,e);var o=Qr,s=hc(e.containerInfo),r=o.focusedElem,l=o.selectionRange;if(s!==r&&r&&r.ownerDocument&&dc(r.ownerDocument.documentElement,r)){if(l!==null&&vs(r)){var g=l.start,y=l.end;if(y===void 0&&(y=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(y,r.value.length);else{var w=r.ownerDocument||document,m=w&&w.defaultView||window;if(m.getSelection){var b=m.getSelection(),N=r.textContent.length,P=Math.min(l.start,N),de=l.end===void 0?P:Math.min(l.end,N);!b.extend&&P>de&&(s=de,de=P,P=s);var h=cc(r,P),c=cc(r,de);if(h&&c&&(b.rangeCount!==1||b.anchorNode!==h.node||b.anchorOffset!==h.offset||b.focusNode!==c.node||b.focusOffset!==c.offset)){var p=w.createRange();p.setStart(h.node,h.offset),b.removeAllRanges(),P>de?(b.addRange(p),b.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),b.addRange(p))}}}}for(w=[],b=r;b=b.parentNode;)b.nodeType===1&&w.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<w.length;r++){var v=w[r];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Oo=!!Vr,Qr=Vr=null}finally{ae=i,M.p=a,k.T=t}}e.current=n,xe=2}}function Ah(){if(xe===2){xe=0;var e=gt,n=wa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=k.T,k.T=null;var a=M.p;M.p=2;var i=ae;ae|=4;try{eh(e,n.alternate,n)}finally{ae=i,M.p=a,k.T=t}}xe=3}}function Ch(){if(xe===4||xe===3){xe=0,Lu();var e=gt,n=wa,t=Xn,a=ph;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xe=5:(xe=0,wa=gt=null,Mh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(pt=null),ns(t),n=n.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(xa,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=k.T,i=M.p,M.p=2,k.T=null;try{for(var o=e.onRecoverableError,s=0;s<a.length;s++){var r=a[s];o(r.value,{componentStack:r.stack})}}finally{k.T=n,M.p=i}}(Xn&3)!==0&&Co(),Bn(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===Hr?hi++:(hi=0,Hr=e):hi=0,ui(0)}}function Mh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ja(n)))}function Co(){return zh(),Ah(),Ch(),jh()}function jh(){if(xe!==5)return!1;var e=gt,n=Nr;Nr=0;var t=ns(Xn),a=k.T,i=M.p;try{M.p=32>t?32:t,k.T=null,t=Er,Er=null;var o=gt,s=Xn;if(xe=0,wa=gt=null,Xn=0,(ae&6)!==0)throw Error(u(331));var r=ae;if(ae|=4,dh(o.current),rh(o,o.current,s,t),ae=r,ui(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(xa,o)}catch{}return!0}finally{M.p=i,k.T=a,Mh(e,n)}}function xh(e,n,t){n=mn(t,n),n=pr(e.stateNode,n,2),e=rt(e,n,2),e!==null&&(Ba(e,2),Bn(e))}function se(e,n,t){if(e.tag===3)xh(e,e,t);else for(;n!==null;){if(n.tag===3){xh(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pt===null||!pt.has(a))){e=mn(t,e),t=Dd(2),a=rt(n,t,2),a!==null&&(Bd(t,a,n,e),Ba(a,2),Bn(a));break}}n=n.return}}function Pr(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new gg;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(xr=!0,i.add(t),e=kg.bind(null,e,n,t),n.then(e,e))}function kg(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ue===e&&(Q&t)===t&&(ye===4||ye===3&&(Q&62914560)===Q&&300>$e()-wo?(ae&2)===0&&_a(e,0):Dr|=t,va===Q&&(va=0)),Bn(e)}function Dh(e,n){n===0&&(n=zl()),e=Dt(e,n),e!==null&&(Ba(e,n),Bn(e))}function vg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dh(e,t)}function wg(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),Dh(e,t)}function _g(e,n){return Zo(e,n)}var Mo=null,Ta=null,Or=!1,jo=!1,Gr=!1,ft=0;function Bn(e){e!==Ta&&e.next===null&&(Ta===null?Mo=Ta=e:Ta=Ta.next=e),jo=!0,Or||(Or=!0,Tg())}function ui(e,n){if(!Gr&&jo){Gr=!0;do for(var t=!1,a=Mo;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var o=0;else{var s=a.suspendedLanes,r=a.pingedLanes;o=(1<<31-nn(42|e)+1)-1,o&=i&~(s&~r),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Hh(a,o))}else o=Q,o=Bi(a,a===ue?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Da(a,o)||(t=!0,Hh(a,o));a=a.next}while(t);Gr=!1}}function Sg(){Bh()}function Bh(){jo=Or=!1;var e=0;ft!==0&&Eg()&&(e=ft);for(var n=$e(),t=null,a=Mo;a!==null;){var i=a.next,o=Nh(a,n);o===0?(a.next=null,t===null?Mo=i:t.next=i,i===null&&(Ta=t)):(t=a,(e!==0||(o&3)!==0)&&(jo=!0)),a=i}xe!==0&&xe!==5||ui(e),ft!==0&&(ft=0)}function Nh(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-nn(o),r=1<<s,l=i[s];l===-1?((r&t)===0||(r&a)!==0)&&(i[s]=Xu(r,n)):l<=n&&(e.expiredLanes|=r),o&=~r}if(n=ue,t=Q,t=Bi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Fo(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Da(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Fo(a),ns(t)){case 2:case 8:t=Sl;break;case 32:t=Mi;break;case 268435456:t=Tl;break;default:t=Mi}return a=Eh.bind(null,e),t=Zo(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Fo(a),e.callbackPriority=2,e.callbackNode=null,2}function Eh(e,n){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Co()&&e.callbackNode!==t)return null;var a=Q;return a=Bi(e,e===ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(mh(e,a,n),Nh(e,$e()),e.callbackNode!=null&&e.callbackNode===t?Eh.bind(null,e):null)}function Hh(e,n){if(Co())return null;mh(e,n,!0)}function Tg(){Rg(function(){(ae&6)!==0?Zo(_l,Sg):Bh()})}function Ir(){if(ft===0){var e=ca;e===0&&(e=ji,ji<<=1,(ji&261888)===0&&(ji=256)),ft=e}return ft}function Rh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function qh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function zg(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var o=Rh((i[Je]||null).action),s=a.submitter;s&&(n=(n=s[Je]||null)?Rh(n.formAction):s.getAttribute("formAction"),n!==null&&(o=n,s=null));var r=new Gi("action","action",null,a,i);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ft!==0){var l=s?qh(i,s):new FormData(i);rr(t,{pending:!0,data:l,method:i.method,action:o},null,l)}}else typeof o=="function"&&(r.preventDefault(),l=s?qh(i,s):new FormData(i),rr(t,{pending:!0,data:l,method:i.method,action:o},o,l))},currentTarget:i}]})}}for(var Lr=0;Lr<Ts.length;Lr++){var Ur=Ts[Lr],Ag=Ur.toLowerCase(),Cg=Ur[0].toUpperCase()+Ur.slice(1);An(Ag,"on"+Cg)}An(gc,"onAnimationEnd"),An(mc,"onAnimationIteration"),An(fc,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Up,"onTransitionRun"),An(Yp,"onTransitionStart"),An(Kp,"onTransitionCancel"),An(bc,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pi));function Ph(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var r=a[s],l=r.instance,g=r.currentTarget;if(r=r.listener,l!==o&&i.isPropagationStopped())break e;o=r,i.currentTarget=g;try{o(i)}catch(y){Ui(y)}i.currentTarget=null,o=l}else for(s=0;s<a.length;s++){if(r=a[s],l=r.instance,g=r.currentTarget,r=r.listener,l!==o&&i.isPropagationStopped())break e;o=r,i.currentTarget=g;try{o(i)}catch(y){Ui(y)}i.currentTarget=null,o=l}}}}function V(e,n){var t=n[ts];t===void 0&&(t=n[ts]=new Set);var a=e+"__bubble";t.has(a)||(Oh(n,e,2,!1),t.add(a))}function Yr(e,n,t){var a=0;n&&(a|=4),Oh(t,e,a,n)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[xo]){e[xo]=!0,Bl.forEach(function(t){t!=="selectionchange"&&(Mg.has(t)||Yr(t,!1,e),Yr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xo]||(n[xo]=!0,Yr("selectionchange",!1,n))}}function Oh(e,n,t,a){switch(gu(n)){case 2:var i=tm;break;case 8:i=am;break;default:i=sl}t=i.bind(null,n,t,e),i=void 0,!hs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Jr(e,n,t,a,i){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var r=a.stateNode.containerInfo;if(r===i)break;if(s===4)for(s=a.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;r!==null;){if(s=Jt(r),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){a=o=s;continue e}r=r.parentNode}}a=a.return}Yl(function(){var g=o,y=cs(t),w=[];e:{var m=yc.get(e);if(m!==void 0){var b=Gi,N=e;switch(e){case"keypress":if(Pi(t)===0)break e;case"keydown":case"keyup":b=wp;break;case"focusin":N="focus",b=ms;break;case"focusout":N="blur",b=ms;break;case"beforeblur":case"afterblur":b=ms;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Tp;break;case gc:case mc:case fc:b=up;break;case bc:b=Ap;break;case"scroll":case"scrollend":b=rp;break;case"wheel":b=Mp;break;case"copy":case"cut":case"paste":b=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ql;break;case"toggle":case"beforetoggle":b=xp}var P=(n&4)!==0,de=!P&&(e==="scroll"||e==="scrollend"),h=P?m!==null?m+"Capture":null:m;P=[];for(var c=g,p;c!==null;){var v=c;if(p=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||p===null||h===null||(v=Ha(c,h),v!=null&&P.push(gi(c,v,p))),de)break;c=c.return}0<P.length&&(m=new b(m,N,null,t,y),w.push({event:m,listeners:P}))}}if((n&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&t!==ls&&(N=t.relatedTarget||t.fromElement)&&(Jt(N)||N[Kt]))break e;if((b||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,b?(N=t.relatedTarget||t.toElement,b=g,N=N?Jt(N):null,N!==null&&(de=q(N),P=N.tag,N!==de||P!==5&&P!==27&&P!==6)&&(N=null)):(b=null,N=g),b!==N)){if(P=Wl,v="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=Ql,v="onPointerLeave",h="onPointerEnter",c="pointer"),de=b==null?m:Ea(b),p=N==null?m:Ea(N),m=new P(v,c+"leave",b,t,y),m.target=de,m.relatedTarget=p,v=null,Jt(y)===g&&(P=new P(h,c+"enter",N,t,y),P.target=p,P.relatedTarget=de,v=P),de=v,b&&N)n:{for(P=jg,h=b,c=N,p=0,v=h;v;v=P(v))p++;v=0;for(var R=c;R;R=P(R))v++;for(;0<p-v;)h=P(h),p--;for(;0<v-p;)c=P(c),v--;for(;p--;){if(h===c||c!==null&&h===c.alternate){P=h;break n}h=P(h),c=P(c)}P=null}else P=null;b!==null&&Gh(w,m,b,P,!1),N!==null&&de!==null&&Gh(w,de,N,P,!0)}}e:{if(m=g?Ea(g):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var ee=ac;else if(nc(m))if(ic)ee=Gp;else{ee=Pp;var H=qp}else b=m.nodeName,!b||b.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?g&&rs(g.elementType)&&(ee=ac):ee=Op;if(ee&&(ee=ee(e,g))){tc(w,ee,t,y);break e}H&&H(e,m,g),e==="focusout"&&g&&m.type==="number"&&g.memoizedProps.value!=null&&ss(m,"number",m.value)}switch(H=g?Ea(g):window,e){case"focusin":(nc(H)||H.contentEditable==="true")&&(na=H,ws=g,Ua=null);break;case"focusout":Ua=ws=na=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,uc(w,t,y);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":uc(w,t,y)}var Y;if(bs)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else ea?$l(e,t)&&(X="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(X="onCompositionStart");X&&(Xl&&t.locale!=="ko"&&(ea||X!=="onCompositionStart"?X==="onCompositionEnd"&&ea&&(Y=Kl()):(et=y,us="value"in et?et.value:et.textContent,ea=!0)),H=Do(g,X),0<H.length&&(X=new Vl(X,e,null,t,y),w.push({event:X,listeners:H}),Y?X.data=Y:(Y=ec(t),Y!==null&&(X.data=Y)))),(Y=Bp?Np(e,t):Ep(e,t))&&(X=Do(g,"onBeforeInput"),0<X.length&&(H=new Vl("onBeforeInput","beforeinput",null,t,y),w.push({event:H,listeners:X}),H.data=Y)),zg(w,e,g,t,y)}Ph(w,n)})}function gi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Do(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Ha(e,t),i!=null&&a.unshift(gi(e,i,o)),i=Ha(e,n),i!=null&&a.push(gi(e,i,o))),e.tag===3)return a;e=e.return}return[]}function jg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gh(e,n,t,a,i){for(var o=n._reactName,s=[];t!==null&&t!==a;){var r=t,l=r.alternate,g=r.stateNode;if(r=r.tag,l!==null&&l===a)break;r!==5&&r!==26&&r!==27||g===null||(l=g,i?(g=Ha(t,o),g!=null&&s.unshift(gi(t,g,l))):i||(g=Ha(t,o),g!=null&&s.push(gi(t,g,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var xg=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function Ih(e){return(typeof e=="string"?e:""+e).replace(xg,`
`).replace(Dg,"")}function Lh(e,n){return n=Ih(n),Ih(e)===n}function ce(e,n,t,a,i,o){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Zt(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Zt(e,""+a);break;case"className":Ei(e,"class",a);break;case"tabIndex":Ei(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ei(e,t,a);break;case"style":Ll(e,a,o);break;case"data":if(n!=="object"){Ei(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ri(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&ce(e,n,"name",i.name,i,null),ce(e,n,"formEncType",i.formEncType,i,null),ce(e,n,"formMethod",i.formMethod,i,null),ce(e,n,"formTarget",i.formTarget,i,null)):(ce(e,n,"encType",i.encType,i,null),ce(e,n,"method",i.method,i,null),ce(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ri(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Hn);break;case"onScroll":a!=null&&V("scroll",e);break;case"onScrollEnd":a!=null&&V("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Ri(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":V("beforetoggle",e),V("toggle",e),Ni(e,"popover",a);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ni(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=op.get(t)||t,Ni(e,t,a))}}function Wr(e,n,t,a,i,o){switch(t){case"style":Ll(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Zt(e,a):(typeof a=="number"||typeof a=="bigint")&&Zt(e,""+a);break;case"onScroll":a!=null&&V("scroll",e);break;case"onScrollEnd":a!=null&&V("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nl.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),n=t.slice(2,i?t.length-7:void 0),o=e[Je]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,i),typeof a=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ni(e,t,a)}}}function Pe(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",e),V("load",e);var a=!1,i=!1,o;for(o in t)if(t.hasOwnProperty(o)){var s=t[o];if(s!=null)switch(o){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ce(e,n,o,s,t,null)}}i&&ce(e,n,"srcSet",t.srcSet,t,null),a&&ce(e,n,"src",t.src,t,null);return;case"input":V("invalid",e);var r=o=s=i=null,l=null,g=null;for(a in t)if(t.hasOwnProperty(a)){var y=t[a];if(y!=null)switch(a){case"name":i=y;break;case"type":s=y;break;case"checked":l=y;break;case"defaultChecked":g=y;break;case"value":o=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(137,n));break;default:ce(e,n,a,y,t,null)}}Pl(e,o,r,l,g,s,i,!1);return;case"select":V("invalid",e),a=s=o=null;for(i in t)if(t.hasOwnProperty(i)&&(r=t[i],r!=null))switch(i){case"value":o=r;break;case"defaultValue":s=r;break;case"multiple":a=r;default:ce(e,n,i,r,t,null)}n=o,t=s,e.multiple=!!a,n!=null?Xt(e,!!a,n,!1):t!=null&&Xt(e,!!a,t,!0);return;case"textarea":V("invalid",e),o=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(r=t[s],r!=null))switch(s){case"value":a=r;break;case"defaultValue":i=r;break;case"children":o=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:ce(e,n,s,r,t,null)}Gl(e,a,i,o);return;case"option":for(l in t)t.hasOwnProperty(l)&&(a=t[l],a!=null)&&(l==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ce(e,n,l,a,t,null));return;case"dialog":V("beforetoggle",e),V("toggle",e),V("cancel",e),V("close",e);break;case"iframe":case"object":V("load",e);break;case"video":case"audio":for(a=0;a<pi.length;a++)V(pi[a],e);break;case"image":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"embed":case"source":case"link":V("error",e),V("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in t)if(t.hasOwnProperty(g)&&(a=t[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ce(e,n,g,a,t,null)}return;default:if(rs(n)){for(y in t)t.hasOwnProperty(y)&&(a=t[y],a!==void 0&&Wr(e,n,y,a,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(a=t[r],a!=null&&ce(e,n,r,a,t,null))}function Bg(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,s=null,r=null,l=null,g=null,y=null;for(b in t){var w=t[b];if(t.hasOwnProperty(b)&&w!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":l=w;default:a.hasOwnProperty(b)||ce(e,n,b,null,a,w)}}for(var m in a){var b=a[m];if(w=t[m],a.hasOwnProperty(m)&&(b!=null||w!=null))switch(m){case"type":o=b;break;case"name":i=b;break;case"checked":g=b;break;case"defaultChecked":y=b;break;case"value":s=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(137,n));break;default:b!==w&&ce(e,n,m,b,a,w)}}os(e,s,r,l,g,y,o,i);return;case"select":b=s=r=m=null;for(o in t)if(l=t[o],t.hasOwnProperty(o)&&l!=null)switch(o){case"value":break;case"multiple":b=l;default:a.hasOwnProperty(o)||ce(e,n,o,null,a,l)}for(i in a)if(o=a[i],l=t[i],a.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case"value":m=o;break;case"defaultValue":r=o;break;case"multiple":s=o;default:o!==l&&ce(e,n,i,o,a,l)}n=r,t=s,a=b,m!=null?Xt(e,!!t,m,!1):!!a!=!!t&&(n!=null?Xt(e,!!t,n,!0):Xt(e,!!t,t?[]:"",!1));return;case"textarea":b=m=null;for(r in t)if(i=t[r],t.hasOwnProperty(r)&&i!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ce(e,n,r,null,a,i)}for(s in a)if(i=a[s],o=t[s],a.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case"value":m=i;break;case"defaultValue":b=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==o&&ce(e,n,s,i,a,o)}Ol(e,m,b);return;case"option":for(var N in t)m=t[N],t.hasOwnProperty(N)&&m!=null&&!a.hasOwnProperty(N)&&(N==="selected"?e.selected=!1:ce(e,n,N,null,a,m));for(l in a)m=a[l],b=t[l],a.hasOwnProperty(l)&&m!==b&&(m!=null||b!=null)&&(l==="selected"?e.selected=m&&typeof m!="function"&&typeof m!="symbol":ce(e,n,l,m,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in t)m=t[P],t.hasOwnProperty(P)&&m!=null&&!a.hasOwnProperty(P)&&ce(e,n,P,null,a,m);for(g in a)if(m=a[g],b=t[g],a.hasOwnProperty(g)&&m!==b&&(m!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(137,n));break;default:ce(e,n,g,m,a,b)}return;default:if(rs(n)){for(var de in t)m=t[de],t.hasOwnProperty(de)&&m!==void 0&&!a.hasOwnProperty(de)&&Wr(e,n,de,void 0,a,m);for(y in a)m=a[y],b=t[y],!a.hasOwnProperty(y)||m===b||m===void 0&&b===void 0||Wr(e,n,y,m,a,b);return}}for(var h in t)m=t[h],t.hasOwnProperty(h)&&m!=null&&!a.hasOwnProperty(h)&&ce(e,n,h,null,a,m);for(w in a)m=a[w],b=t[w],!a.hasOwnProperty(w)||m===b||m==null&&b==null||ce(e,n,w,m,a,b)}function Uh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ng(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],o=i.transferSize,s=i.initiatorType,r=i.duration;if(o&&r&&Uh(s)){for(s=0,r=i.responseEnd,a+=1;a<t.length;a++){var l=t[a],g=l.startTime;if(g>r)break;var y=l.transferSize,w=l.initiatorType;y&&Uh(w)&&(l=l.responseEnd,s+=y*(l<r?1:(r-g)/(l-g)))}if(--a,n+=8*(o+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vr=null,Qr=null;function Bo(e){return e.nodeType===9?e:e.ownerDocument}function Yh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zr=null;function Eg(){var e=window.event;return e&&e.type==="popstate"?e===Zr?!1:(Zr=e,!0):(Zr=null,!1)}var Jh=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(qg)}:Jh;function qg(e){setTimeout(function(){throw e})}function bt(e){return e==="head"}function Vh(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),Ma(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")mi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,mi(t);for(var o=t.firstChild;o;){var s=o.nextSibling,r=o.nodeName;o[Na]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=s}}else t==="body"&&mi(e.ownerDocument.body);t=i}while(t);Ma(n)}function Qh(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Fr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Fr(t),as(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Pg(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Na])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=vn(e.nextSibling),e===null)break}return null}function Og(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vn(e.nextSibling),e===null))return null;return e}function Xh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vn(e.nextSibling),e===null))return null;return e}function $r(e){return e.data==="$?"||e.data==="$~"}function el(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nl=null;function Zh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return vn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Fh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function $h(e,n,t){switch(n=Bo(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function mi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);as(e)}var wn=new Map,eu=new Set;function No(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zn=M.d;M.d={f:Ig,r:Lg,D:Ug,C:Yg,L:Kg,m:Jg,X:Vg,S:Wg,M:Qg};function Ig(){var e=Zn.f(),n=To();return e||n}function Lg(e){var n=Wt(e);n!==null&&n.tag===5&&n.type==="form"?bd(n):Zn.r(e)}var za=typeof document>"u"?null:document;function nu(e,n,t){var a=za;if(a&&typeof n=="string"&&n){var i=pn(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),eu.has(i)||(eu.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Pe(n,"link",e),De(n),a.head.appendChild(n)))}}function Ug(e){Zn.D(e),nu("dns-prefetch",e,null)}function Yg(e,n){Zn.C(e,n),nu("preconnect",e,n)}function Kg(e,n,t){Zn.L(e,n,t);var a=za;if(a&&e&&n){var i='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+pn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+pn(t.imageSizes)+'"]')):i+='[href="'+pn(e)+'"]';var o=i;switch(n){case"style":o=Aa(e);break;case"script":o=Ca(e)}wn.has(o)||(e=C({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),wn.set(o,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(fi(o))||n==="script"&&a.querySelector(bi(o))||(n=a.createElement("link"),Pe(n,"link",e),De(n),a.head.appendChild(n)))}}function Jg(e,n){Zn.m(e,n);var t=za;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+pn(a)+'"][href="'+pn(e)+'"]',o=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ca(e)}if(!wn.has(o)&&(e=C({rel:"modulepreload",href:e},n),wn.set(o,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(bi(o)))return}a=t.createElement("link"),Pe(a,"link",e),De(a),t.head.appendChild(a)}}}function Wg(e,n,t){Zn.S(e,n,t);var a=za;if(a&&e){var i=Vt(a).hoistableStyles,o=Aa(e);n=n||"default";var s=i.get(o);if(!s){var r={loading:0,preload:null};if(s=a.querySelector(fi(o)))r.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":n},t),(t=wn.get(o))&&tl(e,t);var l=s=a.createElement("link");De(l),Pe(l,"link",e),l._p=new Promise(function(g,y){l.onload=g,l.onerror=y}),l.addEventListener("load",function(){r.loading|=1}),l.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Eo(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:r},i.set(o,s)}}}function Vg(e,n){Zn.X(e,n);var t=za;if(t&&e){var a=Vt(t).hoistableScripts,i=Ca(e),o=a.get(i);o||(o=t.querySelector(bi(i)),o||(e=C({src:e,async:!0},n),(n=wn.get(i))&&al(e,n),o=t.createElement("script"),De(o),Pe(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function Qg(e,n){Zn.M(e,n);var t=za;if(t&&e){var a=Vt(t).hoistableScripts,i=Ca(e),o=a.get(i);o||(o=t.querySelector(bi(i)),o||(e=C({src:e,async:!0,type:"module"},n),(n=wn.get(i))&&al(e,n),o=t.createElement("script"),De(o),Pe(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function tu(e,n,t,a){var i=(i=J.current)?No(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Aa(t.href),t=Vt(i).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Aa(t.href);var o=Vt(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(fi(e)))&&!o._p&&(s.instance=o,s.state.loading=5),wn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},wn.set(e,t),o||Xg(i,e,t,s.state))),n&&a===null)throw Error(u(528,""));return s}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ca(t),t=Vt(i).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Aa(e){return'href="'+pn(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function au(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Xg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Pe(n,"link",t),De(n),e.head.appendChild(n))}function Ca(e){return'[src="'+pn(e)+'"]'}function bi(e){return"script[async]"+e}function iu(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+pn(t.href)+'"]');if(a)return n.instance=a,De(a),a;var i=C({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),De(a),Pe(a,"style",i),Eo(a,t.precedence,e),n.instance=a;case"stylesheet":i=Aa(t.href);var o=e.querySelector(fi(i));if(o)return n.state.loading|=4,n.instance=o,De(o),o;a=au(t),(i=wn.get(i))&&tl(a,i),o=(e.ownerDocument||e).createElement("link"),De(o);var s=o;return s._p=new Promise(function(r,l){s.onload=r,s.onerror=l}),Pe(o,"link",a),n.state.loading|=4,Eo(o,t.precedence,e),n.instance=o;case"script":return o=Ca(t.src),(i=e.querySelector(bi(o)))?(n.instance=i,De(i),i):(a=t,(i=wn.get(o))&&(a=C({},t),al(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),De(i),Pe(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Eo(a,t.precedence,e));return n.instance}function Eo(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,o=i,s=0;s<a.length;s++){var r=a[s];if(r.dataset.precedence===n)o=r;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function tl(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function al(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ho=null;function ou(e,n,t){if(Ho===null){var a=new Map,i=Ho=new Map;i.set(t,a)}else i=Ho,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var o=t[i];if(!(o[Na]||o[Ee]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(n)||"";s=e+s;var r=a.get(s);r?r.push(o):a.set(s,[o])}}return a}function su(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Zg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ru(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fg(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Aa(a.href),o=n.querySelector(fi(i));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ro.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,De(o);return}o=n.ownerDocument||n,a=au(a),(i=wn.get(i))&&tl(a,i),o=o.createElement("link"),De(o);var s=o;s._p=new Promise(function(r,l){s.onload=r,s.onerror=l}),Pe(o,"link",a),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Ro.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var il=0;function $g(e,n){return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&il===0&&(il=62500*Ng());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>il?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qo=null;function Po(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qo=new Map,n.forEach(em,e),qo=null,Ro.call(e))}function em(e,n){if(!(n.state.loading&4)){var t=qo.get(e);if(t)var a=t.get(null);else{t=new Map,qo.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var s=i[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=n.instance,s=i.getAttribute("data-precedence"),o=t.get(s)||a,o===a&&t.set(null,i),t.set(s,i),this.count++,a=Ro.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var yi={$$typeof:je,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function nm(e,n,t,a,i,o,s,r,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function lu(e,n,t,a,i,o,s,r,l,g,y,w){return e=new nm(e,n,t,s,l,g,y,w,r),n=1,o===!0&&(n|=24),o=an(3,null,null,n),e.current=o,o.stateNode=e,n=qs(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:a,isDehydrated:t,cache:n},Is(o),e}function cu(e){return e?(e=ia,e):ia}function du(e,n,t,a,i,o){i=cu(i),a.context===null?a.context=i:a.pendingContext=i,a=st(n),a.payload={element:t},o=o===void 0?null:o,o!==null&&(a.callback=o),t=rt(e,a,n),t!==null&&(Fe(t,e,n),Xa(t,e,n))}function hu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ol(e,n){hu(e,n),(e=e.alternate)&&hu(e,n)}function uu(e){if(e.tag===13||e.tag===31){var n=Dt(e,67108864);n!==null&&Fe(n,e,67108864),ol(e,67108864)}}function pu(e){if(e.tag===13||e.tag===31){var n=cn();n=es(n);var t=Dt(e,n);t!==null&&Fe(t,e,n),ol(e,n)}}var Oo=!0;function tm(e,n,t,a){var i=k.T;k.T=null;var o=M.p;try{M.p=2,sl(e,n,t,a)}finally{M.p=o,k.T=i}}function am(e,n,t,a){var i=k.T;k.T=null;var o=M.p;try{M.p=8,sl(e,n,t,a)}finally{M.p=o,k.T=i}}function sl(e,n,t,a){if(Oo){var i=rl(a);if(i===null)Jr(e,n,a,Go,t),mu(e,a);else if(om(i,e,n,t,a))a.stopPropagation();else if(mu(e,a),n&4&&-1<im.indexOf(e)){for(;i!==null;){var o=Wt(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=At(o.pendingLanes);if(s!==0){var r=o;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var l=1<<31-nn(s);r.entanglements[1]|=l,s&=~l}Bn(o),(ae&6)===0&&(_o=$e()+500,ui(0))}}break;case 31:case 13:r=Dt(o,2),r!==null&&Fe(r,o,2),To(),ol(o,2)}if(o=rl(a),o===null&&Jr(e,n,a,Go,t),o===i)break;i=o}i!==null&&a.stopPropagation()}else Jr(e,n,a,null,t)}}function rl(e){return e=cs(e),ll(e)}var Go=null;function ll(e){if(Go=null,e=Jt(e),e!==null){var n=q(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=te(n),e!==null)return e;e=null}else if(t===31){if(e=F(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Go=e,null}function gu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uu()){case _l:return 2;case Sl:return 8;case Mi:case Yu:return 32;case Tl:return 268435456;default:return 32}default:return 32}}var cl=!1,yt=null,kt=null,vt=null,ki=new Map,vi=new Map,wt=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mu(e,n){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":ki.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(n.pointerId)}}function wi(e,n,t,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Wt(n),n!==null&&uu(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function om(e,n,t,a,i){switch(n){case"focusin":return yt=wi(yt,e,n,t,a,i),!0;case"dragenter":return kt=wi(kt,e,n,t,a,i),!0;case"mouseover":return vt=wi(vt,e,n,t,a,i),!0;case"pointerover":var o=i.pointerId;return ki.set(o,wi(ki.get(o)||null,e,n,t,a,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,wi(vi.get(o)||null,e,n,t,a,i)),!0}return!1}function fu(e){var n=Jt(e.target);if(n!==null){var t=q(n);if(t!==null){if(n=t.tag,n===13){if(n=te(t),n!==null){e.blockedOn=n,xl(e.priority,function(){pu(t)});return}}else if(n===31){if(n=F(t),n!==null){e.blockedOn=n,xl(e.priority,function(){pu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=rl(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);ls=a,t.target.dispatchEvent(a),ls=null}else return n=Wt(t),n!==null&&uu(n),e.blockedOn=t,!1;n.shift()}return!0}function bu(e,n,t){Io(e)&&t.delete(n)}function sm(){cl=!1,yt!==null&&Io(yt)&&(yt=null),kt!==null&&Io(kt)&&(kt=null),vt!==null&&Io(vt)&&(vt=null),ki.forEach(bu),vi.forEach(bu)}function Lo(e,n){e.blockedOn===n&&(e.blockedOn=null,cl||(cl=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,sm)))}var Uo=null;function yu(e){Uo!==e&&(Uo=e,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){Uo===e&&(Uo=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(ll(a||t)===null)continue;break}var o=Wt(t);o!==null&&(e.splice(n,3),n-=3,rr(o,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function Ma(e){function n(l){return Lo(l,e)}yt!==null&&Lo(yt,e),kt!==null&&Lo(kt,e),vt!==null&&Lo(vt,e),ki.forEach(n),vi.forEach(n);for(var t=0;t<wt.length;t++){var a=wt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wt.length&&(t=wt[0],t.blockedOn===null);)fu(t),t.blockedOn===null&&wt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],o=t[a+1],s=i[Je]||null;if(typeof o=="function")s||yu(t);else if(s){var r=null;if(o&&o.hasAttribute("formAction")){if(i=o,s=o[Je]||null)r=s.formAction;else if(ll(i)!==null)continue}else r=s.action;typeof r=="function"?t[a+1]=r:(t.splice(a,3),a-=3),yu(t)}}}function ku(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function n(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),i!==null&&(i(),i=null)}}}function dl(e){this._internalRoot=e}Yo.prototype.render=dl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=cn();du(t,a,e,n,null,null)},Yo.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;du(e.current,2,null,e,null,null),To(),n[Kt]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var n=jl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wt.length&&n!==0&&n<wt[t].priority;t++);wt.splice(t,0,e),t===0&&fu(e)}};var vu=z.version;if(vu!=="19.2.5")throw Error(u(527,vu,"19.2.5"));M.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=S(n),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var rm={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{xa=Ko.inject(rm),en=Ko}catch{}}return Si.createRoot=function(e,n){if(!x(e))throw Error(u(299));var t=!1,a="",i=Cd,o=Md,s=jd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=lu(e,1,!1,null,null,t,a,null,i,o,s,ku),e[Kt]=n.current,Kr(e),new dl(n)},Si.hydrateRoot=function(e,n,t){if(!x(e))throw Error(u(299));var a=!1,i="",o=Cd,s=Md,r=jd,l=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(l=t.formState)),n=lu(e,1,!0,n,t??null,a,i,l,o,s,r,ku),n.context=cu(null),t=n.current,a=cn(),a=es(a),i=st(a),i.callback=null,rt(t,i,a),t=a,n.current.lanes=t,Ba(n,t),Bn(n),e[Kt]=n.current,Kr(e),new Yo(n)},Si.version="19.2.5",Si}var xu;function ym(){if(xu)return pl.exports;xu=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(z){console.error(z)}}return f(),pl.exports=bm(),pl.exports}var km=ym();const vm=Pu(km),wm="modulepreload",_m=function(f){return"/"+f},Du={},Sm=function(z,A,u){let x=Promise.resolve();if(A&&A.length>0){let S=function(O){return Promise.all(O.map(C=>Promise.resolve(C).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};var te=S;document.getElementsByTagName("link");const F=document.querySelector("meta[property=csp-nonce]"),D=F?.nonce||F?.getAttribute("nonce");x=S(A.map(O=>{if(O=_m(O),O in Du)return;Du[O]=!0;const C=O.endsWith(".css"),$=C?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${O}"]${$}`))return;const pe=document.createElement("link");if(pe.rel=C?"stylesheet":wm,C||(pe.as="script"),pe.crossOrigin="",pe.href=O,D&&pe.setAttribute("nonce",D),document.head.appendChild(pe),C)return new Promise((Te,ke)=>{pe.addEventListener("load",Te),pe.addEventListener("error",()=>ke(new Error(`Unable to preload CSS for ${O}`)))})}))}function q(F){const D=new Event("vite:preloadError",{cancelable:!0});if(D.payload=F,window.dispatchEvent(D),!D.defaultPrevented)throw F}return x.then(F=>{for(const D of F||[])D.status==="rejected"&&q(D.reason);return z().catch(q)})};function Tm(f={}){const{immediate:z=!1,onNeedRefresh:A,onOfflineReady:u,onRegistered:x,onRegisteredSW:q,onRegisterError:te}=f;let F,D;const S=async(C=!0)=>{await D};async function O(){if("serviceWorker"in navigator){if(F=await Sm(async()=>{const{Workbox:C}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:C}},[]).then(({Workbox:C})=>new C("/sw.js",{scope:"/",type:"classic"})).catch(C=>{te?.(C)}),!F)return;F.addEventListener("activated",C=>{(C.isUpdate||C.isExternal)&&window.location.reload()}),F.addEventListener("installed",C=>{C.isUpdate||u?.()}),F.register({immediate:z}).then(C=>{q?q("/sw.js",C):x?.(C)}).catch(C=>{te?.(C)})}}return D=O(),S}const zm=`---
title: "Asparagus-Feta Pasta"
source: "https://cooking.nytimes.com/recipes/1024185-asparagus-feta-pasta?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "4 to 6 servings"
prep_time: "PT15M"
cook_time: "PT10M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - asparagus
  - feta
  - garlic
  - greek yogurt
  - lemon juice
  - mint
  - orecchiette
  - pasta salad
  - spring
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2023/05/10/multimedia/10apperex2-pasta-mgvf/10apperex2-pasta-mgvf-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Asparagus-Feta Pasta

> Source: https://cooking.nytimes.com/recipes/1024185-asparagus-feta-pasta?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A sauce of tangy feta and Greek yogurt (inspired by a recipe from Yotam Ottolenghi and Sami Tamimi) anchors the components of this creamy, vegetable-filled pasta, and the combination of asparagus and peas makes it especially colorful and perfect for spring. Although the textures are at their most supple when served hot or warm, this dish also works well at room temperature, served as a pasta salad.

## Ingredients
- 8 tablespoons olive oil, plus more for drizzling
- 2 cups plain Greek yogurt
- 1 cup frozen green peas, thawed
- 7 garlic cloves (3 finely grated or minced, 4 thinly sliced)
- 1 teaspoon kosher salt (Diamond Crystal), plus more as needed
- 1 pound short pasta, such as campanelle, shells, fusilli or orecchiette
- 1/2 teaspoon red-pepper flakes, plus more to taste
- 1 bunch asparagus (about 1 pound), trimmed and cut into 1/2-inch pieces
- 8 ounces feta, crumbled into large chunks
- Juice of 1/2 lemon, plus more to taste
- 1/4 cup mint leaves, torn
- 3 scallions, trimmed and thinly sliced

## Instructions
1. In the bowl of a food processor or blender, combine 5 tablespoons olive oil, the yogurt, 2/3 cup peas, the grated garlic and 1 teaspoon salt. Pulse until the sauce is no longer chunky, scraping the sides with a rubber spatula. Transfer to a large bowl and set aside.
2. Bring a large pot of well-salted water to boil. Add pasta and cook until al dente according to the package directions. Drain.
3. While the pasta is boiling, add the sliced garlic to a large skillet, along with the remaining 3 tablespoons olive oil, 1/4 teaspoon red-pepper flakes and a big pinch of salt, and place over medium heat. Cook, stirring occasionally, until the garlic turns golden at the edges, 2 to 5 minutes.
4. Add the asparagus and remaining 1/3 cup peas to the skillet and sauté until just cooked through, 2 to 3 minutes. If the pan looks dry, add a tablespoon or two of water.
5. After draining, add the warm pasta to the yogurt mixture in batches, stirring in between, so the sauce doesn’t curdle. Stir in the asparagus mixture, feta, remaining 1/4 teaspoon red-pepper flakes and the lemon juice. Taste and add more salt, red-pepper flakes, or lemon juice if needed. Drizzle with olive oil, garnish with mint leaves and scallions, and serve warm.

## Tags
- asparagus
- feta
- garlic
- greek yogurt
- lemon juice
- mint
- orecchiette
- pasta salad
- spring
- vegetarian

## Notes
`,Am=`---
title: "Asparagus, Goat Cheese and Tarragon Tart"
source: "https://cooking.nytimes.com/recipes/1020920-asparagus-goat-cheese-and-tarragon-tart?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "6 to 8 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - weeknight
  - appetizer
tags:
  - asparagus
  - ck-mccormick-0526-sponsor
  - crème fraîche
  - goat cheese
  - party
  - puff pastry
  - tarragon
  - tart
  - spring
  - vegetarian
  - French
cuisine: "french"
image: "https://static01.nyt.com/images/2021/04/12/dining/06apperex-tart/06apperex-tart-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Asparagus, Goat Cheese and Tarragon Tart

> Source: https://cooking.nytimes.com/recipes/1020920-asparagus-goat-cheese-and-tarragon-tart?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Because you don’t have to make your own crust, this gorgeous asparagus-striped tart is so easy it almost feels like cheating. But it’s not. It’s just simple yet stunning, effortlessly chic and company-ready. As there are so few ingredients in this recipe that each one makes an impact, be sure to buy a good all-butter brand of puff pastry. If you can manage to serve this tart warm, within an hour of baking, it will be at its absolute best, with crisp pastry that shatters into buttery bits when you bite down and still-runny cheese. But it’s also excellent a few hours later, should you want to get all your baking done before your guests arrive. If tarragon isn’t your favorite herb, you can use chives, basil or mint instead. And if you can manage to trim all the asparagus to the same length, this tart will be especially neat and orderly looking.

## Ingredients
- 1 cup soft goat cheese, at room temperature (4 ounces)
- 1 large egg, lightly beaten, at room temperature
- 1 large garlic clove, finely grated or minced
- 1 1/2 tablespoons chopped fresh tarragon leaves, plus more for serving
- 1/2 tablespoon finely grated lemon zest
- 1/2 teaspoon fine sea salt, plus more for sprinkling
- Pinch of freshly grated nutmeg
- 1 cup crème fraîche, at room temperature (8 ounces)
- All-purpose flour, for dusting the work surface
- 1 sheet or square all-butter puff pastry, thawed if frozen (about 9 to 14 ounces; brands vary)
- 8 ounces thin asparagus, woody ends trimmed
- Extra-virgin olive oil
- 2 tablespoons grated Parmesan
- Freshly ground black pepper
- Red-pepper flakes (optional)
- 1 1/2 ounces Parmesan, shaved with a vegetable peeler (about 1/2 cup)

## Instructions
1. Heat oven to 425 degrees. In a medium bowl, use a fork or a wooden spoon to mash together the goat cheese, egg, garlic, tarragon, lemon zest, salt and nutmeg until smooth. Switch to a whisk and beat in the crème fraîche until smooth.
2. On a lightly floured surface, roll out puff pastry into a 13-by-11-inch rectangle about 1/8-inch thick. Transfer the dough to a parchment-lined cookie sheet. With a sharp knife, lightly score a 1/2-inch border around the edges of the puff pastry.
3. Spread the crème fraîche mixture evenly inside the scored border. Line up the asparagus spears on top, and brush them with olive oil. Sprinkle some salt and the grated Parmesan over the asparagus.
4. Bake until the pastry is puffed and golden, 25 to 30 minutes. Let it cool on the cookie sheet for at least 15 minutes or up to 4 hours before serving. Then sprinkle black pepper, red-pepper flakes (if using), the shaved Parmesan and tarragon leaves. Drizzle a little oil on top.

## Tags
- asparagus
- ck-mccormick-0526-sponsor
- crème fraîche
- goat cheese
- party
- puff pastry
- tarragon
- tart
- spring
- vegetarian
- French

## Notes
`,Cm=`---
title: "Asparagus Gomaae With Chilled Tofu"
source: "https://cooking.nytimes.com/recipes/1026712-asparagus-gomaae-with-chilled-tofu?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT15M"
total_time: "PT20M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - vegetables
  - appetizer
  - main course
tags:
  - asparagus
  - budget
  - sesame seed
  - silken tofu
  - small plate
  - stovetop
  - dairy-free
  - gluten-free
  - healthy
  - vegan
  - vegetarian
  - spring
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2025/05/13/multimedia/hm-asparagus-gomae-jqgt/hm-asparagus-gomae-jqgt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Asparagus Gomaae With Chilled Tofu

> Source: https://cooking.nytimes.com/recipes/1026712-asparagus-gomaae-with-chilled-tofu?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
The classic Japanese side dish gomaae typically features blanched spinach coated in a sesame dressing, but here, the nutty sauce pairs beautifully with earthy asparagus. The asparagus is seared just briefly to unlock its buttery sweetness and juiciness; make sure the pan is hot when the asparagus makes contact to ensure the outside chars, even with a short cook time. The asparagus goma-ae is served atop chilled tofu, which serves as a creamy, refreshing backdrop for the bold umami of the sesame sauce. Eat this as a light meal, or partner it with rice or noodles.

## Ingredients
- 1/3 cup toasted white sesame seeds
- 1/4 cup tamari or soy sauce
- 2 tablespoons sugar
- 1 tablespoon rice vinegar
- 1 tablespoon vegetable or sunflower oil
- 1 pound asparagus, woody stems removed, cut into 1-inch pieces
- Salt and pepper
- 2 (14- to 16-ounce) packages silken tofu
- 2 scallions, thinly sliced
- Cooked rice or noodles (optional)

## Instructions
1. Make the goma sauce: Place the sesame seeds in a spice grinder, blender, small food processor or mortar, and grind or blend until coarsely ground, leaving lots of texture. Transfer the crushed sesame seeds to a medium bowl, add the tamari, sugar and vinegar, and mix to form a paste. Set aside.
2. Heat a large skillet over medium-high for 2 minutes. Drizzle with oil and add the asparagus. Season with salt and pepper, and toss until asparagus is bright green and just tender, 2 to 3 minutes. Transfer to another medium bowl and immediately add half of the sesame sauce. Toss to coat, then set aside to cool for 5 minutes.
3. Carefully drain the liquid from the packages of tofu and gently tip the blocks onto a kitchen towel. (Try to keep each block in one piece, if possible, but don’t worry if they fall apart.) Pat with another clean kitchen towel, removing as much liquid as possible. Transfer the blocks to one large rimmed plate (or shallow bowl) or two smaller ones — leave whole or cut into 1-inch blocks — and spoon over the remaining sesame sauce, dividing it evenly between the two blocks.
4. Top the tofu with the asparagus, ensuring it is evenly distributed. Top with scallions and serve with rice or noodles on the side, if using.

## Tags
- asparagus
- budget
- sesame seed
- silken tofu
- small plate
- stovetop
- dairy-free
- gluten-free
- healthy
- vegan
- vegetarian
- spring
- summer

## Notes
`,Mm=`---
title: "Asparagus-Potato Hash With Goat Cheese and Eggs"
source: "https://cooking.nytimes.com/recipes/1021186-asparagus-potato-hash-with-goat-cheese-and-eggs?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Lidey Heuck"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - breakfast
  - brunch
  - dinner
  - weeknight
  - vegetables
  - main course
tags:
  - asparagus
  - egg
  - leek
  - lemon
  - potato
  - spring
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2020/06/17/dining/lh-veggie-hash/merlin_173545866_9d3717f2-70fc-429c-8f6d-272552dd70d6-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Asparagus-Potato Hash With Goat Cheese and Eggs

> Source: https://cooking.nytimes.com/recipes/1021186-asparagus-potato-hash-with-goat-cheese-and-eggs?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This colorful one-pan breakfast can be easily adapted to use up whatever vegetables you have in the crisper: Use shallots or yellow onion instead of leeks, or substitute green beans, snap peas or even broccoli for the asparagus. Just make sure everything is diced into 1/2-inch pieces so the vegetables cook evenly and quickly. Serve as part of an elegant brunch spread, with toast for a hearty (and vegetarian!) weekend breakfast, or eat it straight from the skillet with a glass of white wine as a quick, clean-out-the-fridge dinner.

## Ingredients
- 3 tablespoons olive oil, plus more as needed
- 1 1/4 pounds Yukon Gold or red new potatoes, scrubbed and diced into 1/2-inch pieces
- Kosher salt and black pepper
- 1/2 large fennel bulb, diced into 1/2-inch pieces (about 1 cup), fennel fronds reserved
- 1 leek, trimmed, halved lengthwise and sliced 1/4-inch thick (about 1 cup chopped leeks)
- 1/2 pound asparagus (10 to 12 spears), trimmed and cut into 1/2-inch pieces
- 1 tablespoon fresh lemon juice, plus lemon zest and more juice for serving (optional)
- 4 large eggs
- 3 tablespoons crumbled plain goat cheese
- 1 tablespoon chopped fresh dill, mint or parsley

## Instructions
1. Heat the oven to 400 degrees. In a large (12-inch) ovenproof skillet, heat the olive oil over medium-high. Add the potatoes, spreading them out into an even layer, and season with 1/2 teaspoon salt and a few grinds of black pepper. Cook, tossing occasionally and scraping the bottom of the pan, until potatoes are nicely browned, 7 to 9 minutes.
2. Lower the heat to medium, add the fennel and leek, and cook, tossing occasionally, until leeks are translucent, 3 to 5 minutes. If the skillet looks dry at any point, add a splash of olive oil.
3. Add the asparagus, along with 1/2 teaspoon salt and a few more grinds of black pepper. Cook, tossing occasionally, until the asparagus, fennel and potatoes are tender, about 5 minutes.
4. Off the heat, add the lemon juice and toss, scraping up any brown bits from the bottom of the pan.
5. Use a spoon to create 4 small hollows in the hash. Carefully crack an egg into each, season the eggs with salt and pepper and bake for 5 to 7 minutes, until the egg whites are just set. (Don’t overcook.)
6. Sprinkle with goat cheese, herbs, fennel fronds and lemon zest, if using. Sprinkle with additional lemon juice, if desired, and a pinch of salt, and serve hot. (A spatula works best for serving.)

## Tags
- asparagus
- egg
- leek
- lemon
- potato
- spring
- summer

## Notes
`,jm=`---
title: "Avocado and Onion Salad"
source: "https://cooking.nytimes.com/recipes/1023944-avocado-and-onion-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT10M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - appetizer
  - side dish
tags:
  - avocado
  - five ingredient
  - lime juice
  - red wine vinegar
  - salad
  - white onion
  - vegan
  - Caribbean
  - South American
cuisine: "caribbean, south american"
image: "https://static01.nyt.com/images/2023/02/17/multimedia/-as-avocado-salad-wmfp/-as-avocado-salad-wmfp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Avocado and Onion Salad

> Source: https://cooking.nytimes.com/recipes/1023944-avocado-and-onion-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Avocado, onion, oil and vinegar are all that’s needed for ensalada de aguacate y cebolla, with rich, creamy avocado against the assertive crunch of onion, plus oil and vinegar accentuating the contrast. According to “Gran Cocina Latina: The Food of Latin America” (W. W. Norton, 2012) by Maricel Presilla, this combination is found in many Caribbean and Andean traditions, served as a starter or alongside almost any dish but especially rich stews and meats. Florida avocados are larger and can taste greener than buttery Hass avocados; when they’re in season, use them for this salad. While sometimes embellished with tomato, watercress, tropical fruits or seafood, start with the simple recipe below, and see why it’s a mainstay on so many tables.

## Ingredients
- 2 large Florida (West Indian) or 4 Hass avocados
- Salt and pepper
- 1 small white onion, thinly sliced into rings
- 3 tablespoons red wine vinegar or lime juice, plus more as needed
- 1 tablespoon extra-virgin olive oil, plus more as needed

## Instructions
1. For clean avocado wedges, halve each avocado and remove the pit. Place the halves cut sides down, then cut through the skin into 1-inch thick wedges. Peel the skin off. Arrange the avocado on a platter or plates. Sprinkle with salt. Separate the rings of the onion and arrange them on top of the avocado. (You may not need all the onion.) Season with salt and pepper, then drizzle with vinegar and olive oil. Take a bite of avocado and onion together and adjust seasonings with more salt, pepper, oil and vinegar until the combination is rich with a slight pucker. Eat right away.

## Tags
- avocado
- five ingredient
- lime juice
- red wine vinegar
- salad
- white onion
- vegan
- Caribbean
- South American

## Notes
`,xm=`---
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
`,Dm=`---
title: "Baasto iyo Suugo Tuuna (Pasta and Spiced Tuna Sauce)"
source: "https://cooking.nytimes.com/recipes/1024650-baasto-iyo-suugo-tuuna-pasta-and-spiced-tuna-sauce"
author: "Ifrah F. Ahmed"
yield: "2 to 4 servings"
prep_time: "PT5M"
cook_time: "PT30M"
total_time: "PT35M"
categories:
  - dinner
  - easy
  - for two
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - budget
  - canned tuna
  - cilantro
  - marinara sauce
  - somali
  - spaghetti
  - stovetop
  - tomato sauce
cuisine: ""
image: "https://static01.nyt.com/images/2023/09/21/multimedia/IA-baasto-tuuna-mgzf/IA-baasto-tuuna-mgzf-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Baasto iyo Suugo Tuuna (Pasta and Spiced Tuna Sauce)

> Source: https://cooking.nytimes.com/recipes/1024650-baasto-iyo-suugo-tuuna-pasta-and-spiced-tuna-sauce

## Description
Thanks to Somalia’s exposure to the ocean — it has the longest coastline in mainland Africa — seafood is an abundant resource. Topped with a rich, spiced tuna suugo (tomato sauce), this pasta dish is a staple in many Somali households, and comes together easily thanks to canned tuna and store-bought marinara sauce. Pasta is a culinary relic of Italian colonialism in Somalia that Somalis have long reimagined into their own new thing. This dish also has different spellings throughout Somalia, including “tuuna” after the English word or “toonno” following the Italian word “tonno.” This pasta sauce gets its unique taste from the addition of fresh cilantro and warm spices, including xawaash, a seven-spice mix that incorporates bold flavors like turmeric, cardamom and cumin. Serve with a salad or enjoy the baasto on its own.

## Ingredients
- 4 teaspoons ground cumin
- 1 teaspoon ground coriander
- ½ teaspoon ground black pepper
- ⅛ teaspoon ground cloves
- ⅛ teaspoon ground cinnamon
- ⅛ teaspoon ground cardamom
- ½ teaspoon ground turmeric
- 8 to 16 ounces spaghetti
- Fine sea salt, as needed
- 2 tablespoons olive oil
- 1 small white onion, diced
- 3 to 4 garlic cloves, minced
- 1 (5-ounce) can tuna in olive oil
- 1 handful of cilantro leaves, washed and roughly chopped
- 1 (24-ounce) jar tomato sauce or marinara

## Instructions
1. Prepare the xawaash (or proceed to Step 2, if using store-bought): Add the cumin, coriander, pepper, cloves, cinnamon and cardamom to a small nonstick pan. Toast over low heat, stirring continuously, for 1 minute or until the spice mix becomes fragrant, then stir in the turmeric. Set aside.
2. In a medium pot, bring salted water to a boil over high heat. When the pot of water comes to a boil, add your spaghetti and cook to desired level of doneness.
3. Meanwhile, in a medium nonstick skillet, warm up the oil over medium-high heat. Once the oil is shimmering, add the onion and stir occasionally until soft, 6 to 7 minutes. Once the onion finishes cooking, add the garlic and cook, stirring occasionally, until it softens, 2 to 3 minutes.
4. Once the garlic has softened, stir in the tuna with its oil, the cilantro, xawaash and ¾ teaspoon salt. Once the tuna mixture has heated through, stir in the tomato sauce. Simmer, covered, over medium-low heat, stirring occasionally, until the sauce has thickened slightly and the spaghetti is ready. Stir in a splash of pasta water for a looser sauce, if desired. Taste and add more salt, if you’d like.
5. Drain spaghetti and divide it among plates or bowls. Top with the sauce. (The sauce can last up to 4 days in the refrigerator.)

## Tags
- budget
- canned tuna
- cilantro
- marinara sauce
- somali
- spaghetti
- stovetop
- tomato sauce

## Notes
`,Bm=`---
title: "Baked Spanakopita Pasta With Greens and Feta"
source: "https://cooking.nytimes.com/recipes/1020778-baked-spanakopita-pasta-with-greens-and-feta"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - dinner
  - casseroles
  - pastas
  - main course
tags:
  - arugula
  - cream cheese
  - dill
  - feta
  - great leftovers
  - mozzarella
  - parsley
  - rigatoni
  - spinach
  - swiss chard
  - watercress
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2021/05/16/dining/as-spanakopita-pasta/as-spanakopita-pasta-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Baked Spanakopita Pasta With Greens and Feta

> Source: https://cooking.nytimes.com/recipes/1020778-baked-spanakopita-pasta-with-greens-and-feta

## Description
This baked pasta is inspired by spanakopita, the classic Greek spinach and feta pie. This loose interpretation combines pasta with gooey mozzarella, briny feta, plenty of greens and a rich cream sauce, which is then piled into a dish and baked until golden. The key to this dish is in the greens: Use at least three kinds — a mellow one, a peppery one and a fresh herb or two — to create an exciting mix of flavors. No need to sauté them; just salt and massage them until they wilt slightly. This cozy dish might be the best way to eat your greens all year long.

## Ingredients
- Salt and black pepper
- 4 cups chopped spinach, Swiss chard or other mild greens (tough stems removed)
- 4 cups chopped arugula, watercress or other peppery greens
- 1 cup chopped fresh dill or parsley leaves and tender stems, or a combination
- 6 scallions, trimmed and thinly sliced, whites and dark green parts separated
- 1 pound tubular or curvy pasta, like rigatoni or fusilli
- 2 tablespoons unsalted butter
- 4 garlic cloves, peeled and thinly sliced
- 8 ounces cream cheese (1 cup), cut into 1/2-inch cubes
- 4 ounces mozzarella, grated (1 cup)
- 4 ounces crumbled feta (1 cup)

## Instructions
1. Bring a large pot of salted water to a boil. Heat the oven to 450 degrees.
2. In a 3-quart/9-by-13-inch baking dish, toss the chopped spinach, arugula, herbs and scallion greens with 2 teaspoons salt and a few grinds of black pepper. Squeeze the mixture with your hands to wilt, then set aside.
3. Cook the pasta in the boiling water until 2 minutes shy of al dente; reserve 1 cup pasta water, then drain pasta and set aside. Return the pot to the stove.
4. Melt the butter in the pot over medium heat. Add the scallion whites, garlic and a pinch of salt, and cook until softened, 4 to 5 minutes. Add the cream cheese and pasta water and stir until smooth. Stir in the wilted greens, half the mozzarella and half the feta until combined. Stir in the pasta until combined. Taste and adjust seasonings as needed.
5. Transfer the pasta to the baking dish, then top with remaining mozzarella and feta. Bake until the sauce has thickened and turned bubbly, and the top has browned in spots, 10 to 15 minutes. If you like a crisper top, broil for a few minutes.

## Tags
- arugula
- cream cheese
- dill
- feta
- great leftovers
- mozzarella
- parsley
- rigatoni
- spinach
- swiss chard
- watercress
- vegetarian

## Notes
`,Nm=`---
title: "Baked Taco Pasta"
source: "https://cooking.nytimes.com/recipes/1019853-baked-skillet-pasta-with-cheddar-and-spiced-onions"
author: "Melissa Clark"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - dinner
  - weeknight
  - pastas
  - main course
tags:
  - budget
  - cheddar
  - onion
  - parmesan
  - pasta
  - tomato
  - ziti
  - fall
  - winter
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/11/multimedia/MC-Baked-Skillet-Pasta-Cheddar-onions-vjhm/MC-Baked-Skillet-Pasta-Cheddar-onions-vjhm-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Baked Taco Pasta

> Source: https://cooking.nytimes.com/recipes/1019853-baked-skillet-pasta-with-cheddar-and-spiced-onions

## Description
In this warming skillet pasta bake, onions — sautéed with cumin, coriander and allspice until golden and aromatic — do double duty.

## Ingredients
- 6 tablespoons extra-virgin olive oil
- 3 large onions, thinly sliced
- 1 large bay leaf
- 1 1/2 teaspoons ground coriander
- 1 teaspoon ground cumin
- Pinch of cayenne, plus more to taste
- 1 1/4 teaspoons fine sea salt, plus more as needed
- 3 fat garlic cloves, minced
- 1 teaspoon cumin seeds
- 1 teaspoon black pepper
- 1/8 teaspoon ground allspice
- 1 (15-ounce) can whole peeled plum tomatoes
- 1 pound small pasta, such as rotini or shells
- 3/4 cup chopped parsley or cilantro (or use a combination of cilantro and parsley), plus more for serving
- 8 ounces shredded Cheddar
- 1/2 cup grated Parmesan
- Hot sauce, for serving (optional)

## Instructions
1. Heat 1/4 cup oil in a 12-inch skillet over high heat. Add onions and bay leaf, and cook, stirring frequently, until softened and browned in spots, 12 to 20 minutes. (Reduce heat if the pan starts to scorch.) Lower heat to medium, and stir in coriander, ground cumin, cayenne and 1/4 teaspoon salt; cook 1 more minute. Transfer half the onions to a bowl and reserve (leave the bay leaf in the skillet).
2. Add garlic, cumin seeds, pepper and allspice to the skillet, and stir. Cook until fragrant, about 1 minute. Pour in the juice from the canned tomatoes. Use your hands or kitchen scissors to squish or cut the tomatoes into pieces and add to pan. Fill the empty tomato can with water, and pour into the skillet. Add remaining 2 tablespoons oil and remaining 1 teaspoon salt, and bring mixture to a simmer. Simmer until thickened, about 20 minutes. Taste, and add more salt and cayenne if you like. Remove bay leaf.
3. As mixture cooks, heat oven to 400 degrees and bring a large pot of salted water to a boil. Cook pasta until just about 2 minutes shy of al dente. Reserve 1 cup pasta water, and drain pasta.
4. Stir pasta, reserved pasta water, and parsley into skillet with tomato sauce. Top with reserved browned onions, Cheddar and Parmesan. Transfer to oven and bake until golden and bubbly, 20 to 25 minutes. If you like, you can run the pan under the broil to brown the top, or leave it as is. Let cool slightly, top with more parsley, if desired, and serve with hot sauce, if you like.

## Tags
- budget
- cheddar
- onion
- parmesan
- pasta
- tomato
- ziti
- fall
- winter
- vegetarian

## Notes
`,Em=`---
title: "Baked Tofu With Peanut Sauce and Coconut-Lime Rice"
source: "https://cooking.nytimes.com/recipes/1020530-baked-tofu-with-peanut-sauce-and-coconut-lime-rice"
author: "Yewande Komolafe"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - quick
  - weeknight
  - beans
  - main course
tags:
  - basmati rice
  - bell pepper
  - coconut milk
  - extra-firm tofu
  - jasmine rice
  - kid-friendly
  - lime juice
  - miso
  - peanut butter
  - kwanzaa
  - African
cuisine: "african"
image: "https://static01.nyt.com/images/2021/02/07/dining/yk-tofu-mafe/yk-tofu-mafe-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Baked Tofu With Peanut Sauce and Coconut-Lime Rice

> Source: https://cooking.nytimes.com/recipes/1020530-baked-tofu-with-peanut-sauce-and-coconut-lime-rice

## Description
A spicy, fragrant peanut sauce reminiscent of the groundnut stews that are popular across West Africa anchors this recipe. Any protein would be lucky to be doused and marinated in it, but tofu soaks up the peanut sauce’s flavors and chars up nicely upon roasting. The tofu’s neutral flavor allows the other flavors in the dish to break through. Red miso and fish sauce provide umami, honey lends a subtle sweetness and the lime zest in the coconut rice brightens it all. Finished with pickled peppers and fresh sliced scallions, this dish comes together to make an exciting but quick weeknight dinner.

## Ingredients
- 2 tablespoons peanut or vegetable oil, plus more for brushing the pan and drizzling
- 2/3 cup lime juice (from about 5 limes), and zest of 1 lime
- Kosher salt
- 8 baby bell peppers or 1 medium bell pepper (any color will do), stemmed and thinly sliced lengthwise
- Black pepper
- 1 cup long-grain rice like jasmine or basmati
- 1/2 cup full-fat coconut milk
- 1 cup smooth, natural peanut butter
- 1 tablespoon red miso
- 1 tablespoon grated ginger
- 1 tablespoon fish sauce (optional)
- 2 teaspoons chopped habanero pepper, stem and seeds removed, or 1 tablespoon sambal
- 2 tablespoons buckwheat honey or molasses
- 2 (14-ounce) packages extra-firm tofu, drained and sliced crosswise, 1/4-inch thick
- 3 cups peppery greens, like arugula, mizuna or baby mustard greens
- 2 scallions, trimmed and thinly sliced

## Instructions
1. Heat the oven to 450 degrees and lightly brush a large rimmed sheet pan with oil.
2. In a small bowl, stir 4 tablespoons lime juice with 1/2 teaspoon salt until salt dissolves. Add the sliced peppers, a few cracks of black pepper and set aside.
3. In a small pot, combine the rice with 1 cup water and the coconut milk. Season with salt and bring to a simmer. Cover and cook over medium-low until the rice is just tender, 12 to 15 minutes. Remove from the heat and let sit, covered, until ready to serve.
4. In a medium bowl, whisk 4 tablespoons lime juice with the peanut butter, miso, ginger, fish sauce (if using), habanero, 2 tablespoons oil, 1 tablespoon honey and 3/4 cup water. Stir until smooth and season to taste with salt.
5. Arrange the tofu pieces in a single layer on the oiled baking sheet and season with salt. Spoon about 2 tablespoons of the peanut sauce over each, covering the top and allowing the sauce to run down and coat the sides. Drizzle the tops with some oil, and roast until glaze is set, deep brown and caramelized along the edges, 18 to 20 minutes. Add the remaining lime juice and 1 tablespoon honey to the leftover peanut sauce in the bowl to make the dressing; set aside.
6. Divide the greens among bowls. Add the lime zest and half the sliced scallions to the rice, then fluff with a fork. Top the greens with the rice, then the tofu. Spoon the peanut dressing over everything, and garnish with the drained pickled peppers and remaining sliced scallions.

## Tags
- basmati rice
- bell pepper
- coconut milk
- extra-firm tofu
- jasmine rice
- kid-friendly
- lime juice
- miso
- peanut butter
- kwanzaa
- African

## Notes
`,Hm=`---
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
`,Rm=`---
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
`,qm=`---
title: "Bean and Vegetable Japanese Curry"
source: "https://cooking.nytimes.com/recipes/771598372-bean-and-vegetable-japanese-curry?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Eric Kim"
yield: "2 to 4 servings"
prep_time: "PT0H15M"
cook_time: "PT0H30M"
total_time: "PT0H45M"
categories:
  - Curry
  - Dinner
  - Main Course
tags:
  - Eggplant
  - Carrot
  - Chickpea
  - Spinach
  - For Two
  - Dutch Oven
  - Lima Bean
  - Quick
  - Weeknight
  - Freezer Friendly
  - Great Leftovers
  - Stovetop
  - Make-Ahead
  - One Pot
  - Budget
  - Easy
  - Simmer
  - Vegetarian
cuisine: "Japanese Inspired"
image: "https://static01.nyt.com/images/2026/02/24/multimedia/EK-Bean-and-Vegetable-Japanese-Curry-qcvp/EK-Bean-and-Vegetable-Japanese-Curry-qcvp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Bean and Vegetable Japanese Curry

> Source: https://cooking.nytimes.com/recipes/771598372-bean-and-vegetable-japanese-curry?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this lovely, warming curry, canned beans give you protein and a soft, starchy bite. Japanese curry is essentially a stew, so add to it what you like: Here, eggplant and spinach melt into the sauce, giving you roughage, then canned beans are stirred through for appearances and chew. Served over rice or noodles, this dish is a veritable weeknight meal with restaurant appeal, and freezes beautifully (see Tips).

## Ingredients
- 2 tablespoons unsalted butter or olive oil
- 1 large yellow onion, diced
- Salt
- 1 medium globe eggplant, peeled and cut into 1-inch pieces
- 2 large carrots, peeled and cut into 1-inch pieces
- 1 (3- to 4-ounce) brick Japanese curry, such as Golden Curry (see Tips)
- 1 (15-ounce) can chickpeas, butter beans or other large, sturdy beans, drained and rinsed
- 1 (10-ounce) package baby spinach
- Basic white rice or cooked fresh udon noodles, for serving

## Instructions
1. In a large Dutch oven, heat the butter over medium-high. Add the onion, season with salt and cook, stirring occasionally, until translucent and starting to brown, 6 to 8 minutes.
2. Add 3 cups of water, scraping the bottom of the pot to pick up any stuck-on bits. Add the eggplant and carrots, then bring to a boil. Reduce the heat, cover and simmer, stirring occasionally, until the vegetables are fork tender, 15 to 20 minutes.
3. Ladle some of the hot liquid from the pot into a liquid measuring cup or small bowl, then add the curry brick. Let it melt, about a minute, before whisking to blend. Stir the curry mixture into the stew.
4. Add the chickpeas and spinach, bring back to a simmer and cook, stirring constantly, until the spinach is wilted and the curry has thickened but is still brothy, about 5 minutes. Taste and add salt as needed.
5. Serve over rice or noodles. (See Tip for make-ahead freezing instructions.)

## Tags
- Eggplant
- Carrot
- Chickpea
- Spinach
- For Two
- Dutch Oven
- Lima Bean
- Quick
- Weeknight
- Freezer Friendly
- Great Leftovers
- Stovetop
- Make-Ahead
- One Pot
- Budget
- Easy
- Simmer
- Vegetarian

## Notes
`,Pm=`---
title: "Beef Tagine With Green Beans and Olives"
source: "https://cooking.nytimes.com/recipes/1025869-beef-tagine-with-green-beans-and-olives?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Nargisse Benkabbou"
yield: "6 to 8 servings"
prep_time: "PT15M"
cook_time: "PT2H"
total_time: "PT2H15M"
categories:
  - dinner
  - tagine
  - main course
tags:
  - beef stew meat
  - cilantro
  - green bean
  - ground ginger
  - ground turmeric
  - olive
  - preserved lemon
  - stovetop
  - fall
  - Moroccan
cuisine: "moroccan"
image: "https://static01.nyt.com/images/2024/10/10/multimedia/NB-Beef-Green-Bean-Tagine-Olives-Preserved-Lemonrex-fjzv/NB-Beef-Green-Bean-Tagine-Olives-Preserved-Lemonrex-fjzv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Beef Tagine With Green Beans and Olives

> Source: https://cooking.nytimes.com/recipes/1025869-beef-tagine-with-green-beans-and-olives?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This hearty tagine is a staple family meal in many Moroccan homes, cooked in the traditional m’qualli style with garlic, ground ginger and ground turmeric. The comforting, earthy flavors of the meat, spices and green beans create a satisfying dinner perfect for sharing or meal prepping. The cozy, fragrant stew is packed with pops of flavor from tangy preserved lemon and briny olives. The green beans are added towards the end when the meat is almost cooked. For a variation, consider substituting or adding peas or chopped carrots, or a combination (see Tip).

## Ingredients
- 3 tablespoons olive oil
- 2 medium onions, diced (about 3 cups)
- 3 garlic cloves, minced or pressed
- 1 teaspoon ground turmeric
- 1 teaspoon ground ginger
- 1 small pinch saffron (optional)
- Fine sea salt and black pepper
- 2 1/2 pounds boneless beef chuck or other stewing beef, trimmed of excess fat and cut into 2-inch pieces
- 3/4 cup vegetable or beef stock, or water, plus more if needed
- 1 cup cilantro leaves and tender stems, finely chopped, plus more for serving
- 1 1/2 pounds green beans, trimmed
- 2 to 3 tablespoons seeded and finely chopped preserved lemon (about 1/2 lemon), plus more to taste
- 1/2 cup pitted Castelvetrano or Kalamata olives, for serving
- Bread, for serving

## Instructions
1. Heat oil in a large pot over medium-low. Add onions, garlic, turmeric, ginger, saffron (if using), 3/4 teaspoon salt and 1/4 teaspoon pepper. Cook, stirring frequently, until the onions begin to soften, 5 to 7 minutes.
2. Add the beef, adjust heat to medium and cook, stirring occasionally, until the meat is lightly browned, about 7 minutes.
3. Add stock (or water) and cilantro, and bring to a boil over high heat.
4. Cover the pot, adjust heat to low and simmer for about 1 1/2 hours, until the beef has partially softened (when pressed with a fork it should feel soft but not fall apart).
5. Stir in the green beans and preserved lemon, adjust heat to high and bring to a boil. The green beans should be partially submerged in the liquid; add stock or water as needed. Turn down to low, cover and simmer until the green beans are tender, 15 to 20 minutes. Stir occasionally to make sure the beans cook evenly.
6. Taste and add more preserved lemon or salt as necessary. Garnish with olives and more cilantro, and serve with bread.

## Tags
- beef stew meat
- cilantro
- green bean
- ground ginger
- ground turmeric
- olive
- preserved lemon
- stovetop
- fall
- Moroccan

## Notes
`,Om=`---
title: "Black Pepper Beef and Cabbage Stir-Fry"
source: "https://cooking.nytimes.com/recipes/1020506-black-pepper-beef-and-cabbage-stir-fry"
author: "Sue Li"
yield: "2 to 4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - easy
  - for two
  - quick
  - weeknight
  - main course
tags:
  - black peppercorn
  - cast iron
  - cornstarch
  - green cabbage
  - partial-access-ic
  - sesame seed
  - sirloin steak
  - Asian
cuisine: "asian"
image: "https://static01.nyt.com/images/2020/12/06/dining/sl-cabbage-stir-fry/sl-cabbage-stir-fry-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Black Pepper Beef and Cabbage Stir-Fry

> Source: https://cooking.nytimes.com/recipes/1020506-black-pepper-beef-and-cabbage-stir-fry

## Description
Coarsely crushed black peppercorns star in this quick weeknight dish, which is built primarily from pantry staples. Don’t be shy about adding the entire tablespoon of pepper, as it balances out the richness of the beef and adds a lightly spicy bite to the dish. A quick rub of garlic, brown sugar, salt, pepper and cornstarch seasons the beef; the cornstarch helps tenderize the beef and later imparts a silky texture to the sauce. Feel free to marinate the beef up to 8 hours ahead and cook when you're ready. If leftovers remain, tuck them into a crunchy baguette or roll them into a wrap.

## Ingredients
- 1 tablespoon whole black peppercorns, coarsely crushed with the bottom of a cup or pan
- 3 garlic cloves, grated
- 2 teaspoons light brown sugar
- 1 teaspoon cornstarch
- Kosher salt
- 3/4 pound sirloin steak, thinly sliced crosswise
- 3 tablespoons sunflower oil or other neutral oil
- 2 tablespoons soy sauce
- 1/2 head small green cabbage (about 8 ounces), thinly sliced
- 1 tablespoon sherry vinegar
- 1 tablespoon toasted sesame seeds, crushed with your fingertips
- 2 scallions, thinly sliced
- Cooked rice, for serving

## Instructions
1. Add peppercorns, garlic, brown sugar, cornstarch and 1 teaspoon salt to a medium bowl and stir to combine. Add sliced steak and toss to coat.
2. Heat the oil in a large cast-iron skillet over medium-high. Add steak and cook, stirring frequently, until some of the edges are lightly browned, 3 to 4 minutes. Add soy sauce and toss beef to coat, about 1 minute. Using a slotted spoon, transfer beef to a bowl or plate.
3. Add cabbage to skillet, spread in an even layer and let cook, undisturbed, for 1 minute so that some pieces caramelize in the pan. Toss and cook cabbage, stirring occasionally, until crisp-tender, 4 to 6 minutes. Stir in vinegar and season with salt.
4. Add steak and any juices back to the skillet, and stir until well combined with the cabbage and warmed through, about 1 minute. Top with toasted sesame seeds and scallions; serve with rice.

## Tags
- black peppercorn
- cast iron
- cornstarch
- green cabbage
- partial-access-ic
- sesame seed
- sirloin steak
- Asian

## Notes
`,Gm=`---
title: "Blistered Broccoli Pasta With Walnuts, Pecorino and Mint"
source: "https://cooking.nytimes.com/recipes/1020997-blistered-broccoli-pasta-with-walnuts-pecorino-and-mint"
author: "Dawn Perry"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT15M"
categories:
  - dinner
  - easy
  - weeknight
  - pastas
  - vegetables
  - main course
tags:
  - broccoli
  - lemon
  - mint
  - pasta
  - walnut
  - vegetarian
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/05/24/dining/15Pasta-Broccoli-a/merlin_171317121_793618ff-68ff-4a5f-908f-2b79c9453cc1-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Blistered Broccoli Pasta With Walnuts, Pecorino and Mint

> Source: https://cooking.nytimes.com/recipes/1020997-blistered-broccoli-pasta-with-walnuts-pecorino-and-mint

## Description
The trick to creating deeply browned, pan-seared broccoli involves two things: high heat and no touching. Allowing your florets and stems to sear in an even layer, undisturbed, gives them time to blister without cooking all the way through, so they retain some crunch. While many pasta sauces are finished with starchy pasta water, this one isn’t, since the hot water would strip the broccoli of that color and crunch you worked so hard to achieve. Instead, toss the cooked pasta in the skillet with the broccoli, walnuts and cheese. A drizzle of olive oil and a squeeze of lemon will provide any additional moisture you need.

## Ingredients
- Kosher salt and black pepper
- 12 ounces riccioli, fusilli or other short pasta
- 1/2 cup olive oil, plus more for drizzling
- 1/2 cup walnuts or pecans, chopped
- 1/4 to 1/2 teaspoon red-pepper flakes (optional)
- 1 bunch broccoli or cauliflower (about 1 1/2 pounds untrimmed), florets roughly chopped and stalks peeled and sliced 1/4-inch thick
- 1 lemon, zested (about 1 teaspoon) then quartered
- 1/2 cup grated Pecorino Romano or Parmesan, plus more for serving
- 1 cup packed fresh mint leaves or parsley leaves

## Instructions
1. Bring a large pot of salted water to a boil. Add the pasta and cook according to package instructions until al dente.
2. Meanwhile, heat the oil in a large skillet over medium-high. Add the walnuts and red-pepper flakes, if using, and cook, stirring, until golden and fragrant, about 1 minute. Using a slotted spoon, transfer walnuts and red-pepper flakes to a small bowl. Season walnuts with a little salt and pepper.
3. Add the broccoli to the skillet and toss to coat in the oil. Shake the skillet so broccoli settles in an even layer. Cook, undisturbed, 2 minutes. Toss and shake to arrange in an even layer again and cook, undisturbed, another 2 to 3 minutes; season with salt and pepper and remove from heat.
4. Drain pasta and add to the skillet along with the lemon zest, cheese, toasted walnuts and half the mint; toss to combine. Divide among plates or bowls and top with remaining mint, more cheese and a drizzle of olive oil. Serve with lemon wedges, squeezing juice on top, if desired.

## Tags
- broccoli
- lemon
- mint
- pasta
- walnut
- vegetarian
- American

## Notes
`,Im=`---
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
`,Lm=`---
title: "Broccoli and White Bean Caesar"
source: "https://cooking.nytimes.com/recipes/773768265-broccoli-and-white-bean-caesar?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Kristina Felix"
yield: "4 servings"
prep_time: "PT0H5M"
cook_time: "PT0H25M"
total_time: "PT0H30M"
categories:
  - Salad
  - Beans
  - Dinner
  - Lunch
  - Main Course
tags:
  - Broccoli
  - Baguette
  - White Bean
  - Parmesan
  - Anchovy
  - Easy
  - Sheet-Pan
  - Weeknight
  - Quick
  - Make-Ahead
  - Great Leftovers
  - Roast
cuisine: ""
image: "https://static01.nyt.com/images/2026/03/17/multimedia/KF-Broccoli-and-White-Bean-Caesar-bzgq/KF-Broccoli-and-White-Bean-Caesar-bzgq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Broccoli and White Bean Caesar

> Source: https://cooking.nytimes.com/recipes/773768265-broccoli-and-white-bean-caesar?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
With components of both panzanella and Caesar salad, this meal gets extra heft from charred broccoli and a couple cans of white beans. The beans do double duty here: Some of them get smashed into a creamy, lemony, and anchovy-rich Caesar dressing, made right in the serving bowl, while others are tossed with broccoli and bread cubes that roast together in the oven until golden, charred and crunchy. This is a salad for people who think they don’t like salads.

## Ingredients
- 2 broccoli crowns (about 1½ pounds)
- ½ baguette
- 3 garlic cloves, peeled
- 2 (15-ounce) cans white beans, such as cannellini, drained and shaken dry
- ½ cup avocado or olive oil
- Kosher salt (such as Diamond Crystal)
- 1 teaspoon crushed red pepper, plus more for serving
- ¼ cup grated Parmesan, divided
- 4 anchovies packed in oil
- 1 medium lemon
- 1 tablespoon Dijon mustard

## Instructions
1. Arrange two oven racks in the upper and lower thirds of the oven and heat to 425 degrees.
2. While the oven heats, cut the broccoli crowns into spears by cutting through the large stem lengthwise and through each floret so at least one side of the floret is flat. Place them in a large salad bowl as you go, along with any bits that might fall from the broccoli.
3. Crush one of the garlic cloves with the side of your knife and rub it all over the outside of the baguette, then roughly chop the garlic clove and place it in the bowl. Tear the baguette into bite-size pieces and add to the bowl. Toss with ¼ cup oil, 1½ teaspoons salt, the crushed red pepper and half of the Parmesan, until the broccoli is evenly coated.
4. Divide the contents of the bowl between two sheet pans, making sure to get all the bits, and distribute ingredients evenly in one layer (set the bowl aside for making the dressing). Roast until the broccoli is charred and the bread is very crispy, 12 to 16 minutes, swapping the positions of the pans on the racks and rotating each pan halfway through.
5. While the broccoli roasts, make your dressing. On a cutting board, crush the remaining garlic cloves with the side of your knife and sprinkle them with ½ teaspoon salt. Stack the anchovies on top and chop the garlic and anchovies together until you make a paste. Scrape the paste into the large bowl. Zest the lemon into the bowl, then cut it in half and juice it through your hands to catch any seeds.
6. Add the mustard to the bowl and whisk in the remaining ¼ cup oil vigorously until the dressing turns creamy, about 2 minutes. Add half of the beans to the bowl and mash them into the dressing. Taste for salt.
7. When the vegetables come out of the oven, scrape them into the bowl, making sure to get any crunchy Parmesan bits, add the remaining Parmesan and beans, and toss everything until well combined. Taste for salt. Serve in shallow bowls with more crushed red pepper, if desired.

## Tags
- Broccoli
- Baguette
- White Bean
- Parmesan
- Anchovy
- Easy
- Sheet-Pan
- Weeknight
- Quick
- Make-Ahead
- Great Leftovers
- Roast

## Notes
`,Um=`---
title: "Broccoli Cheddar Beans"
source: "https://cooking.nytimes.com/recipes/775578481-broccoli-cheddar-beans?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Christian Reynoso"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H30M"
total_time: "PT0H40M"
categories:
  - Stew
  - Beans
  - Dinner
  - Main Course
  - Kid-Friendly
tags:
  - Sharp Cheddar
  - Dijon Mustard
  - Broccoli
  - White Bean
  - Easy
  - Weeknight
  - Great Leftovers
  - Milk
  - Budget
  - Simmer
  - Vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/08/multimedia/CR-Broccoli-Cheddar-Beans-cbjq/CR-Broccoli-Cheddar-Beans-cbjq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Broccoli Cheddar Beans

> Source: https://cooking.nytimes.com/recipes/775578481-broccoli-cheddar-beans?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Cheddar and broccoli are a classic for a reason: the rich, tangy cheese makes this often underappreciated vegetable sing. Here, tender white beans turn the duo into a protein-forward, stewy bowl that’s cozy but lively. To finish, Cheddar croutons add a deeper cheesy crunch, ideal for dunking into the creamy broth.

## Ingredients
- 3 (½-inch-thick) slices of bread (any kind)
- 8 ounces extra-sharp Cheddar, coarsely grated
- 1 tablespoon olive oil
- 4 tablespoons unsalted butter
- 1 large yellow onion (about 12 ounces), finely chopped
- 3 garlic cloves, chopped
- Salt and freshly ground black pepper
- 4 tablespoons all-purpose flour
- 3 tablespoons Dijon mustard
- 2 cups whole milk
- 1½ pounds broccoli, florets and stems, chopped into bite-size pieces (about 8 cups)
- 2 (15-ounce) cans white beans, drained

## Instructions
1. Heat the oven to 350 degrees. Line a sheet pan with parchment. Tear the bread into chunks in a range of sizes, 1 to 3 inches or so and add to the pan. Add about one-fourth of the Cheddar to the pan, drizzle with the olive oil and toss it all together so the cheese sticks to the bread as much as possible. Spread the pieces apart and bake, tossing halfway through, until the cheese has melted and the bread is crispy and golden brown, 15 to 20 minutes.
2. Meanwhile, in a medium Dutch oven or saucepan, melt the butter over medium. Add the onion and garlic and season with ½ teaspoon each salt and black pepper. Cook, stirring occasionally, until the onion is slightly softened and translucent, about 5 minutes.
3. Add the flour and the mustard and whisk into the onions for about 30 seconds. While still whisking, slowly pour in the milk so it is absorbed into the flour mixture (take your time here — working slowly and steadily will help to avoid clumps of flour).
4. Bring the sauce to a simmer, stir in the broccoli and season with salt and pepper. (The sauce might seem very thick at this point, but the broccoli will release its liquid as it cooks, thinning the sauce.) Cook, stirring occasionally, until broccoli is bright green and just tender, 7 to 9 minutes.
5. Stir in the remaining Cheddar and once it’s fully melted, stir in the beans. Bring to a simmer and then season with salt and pepper to taste.
6. To serve, ladle the broccoli mixture into bowls. Place Cheddar croutons on top and sprinkle with more black pepper, if desired.

## Tags
- Sharp Cheddar
- Dijon Mustard
- Broccoli
- White Bean
- Easy
- Weeknight
- Great Leftovers
- Milk
- Budget
- Simmer
- Vegetarian

## Notes
`,Ym=`---
title: "Broccoli-Walnut Pesto Pasta"
source: "https://cooking.nytimes.com/recipes/1019642-broccoli-walnut-pesto-pasta"
author: "Genevieve Ko"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - lunch
  - weeknight
  - pastas
  - main course
tags:
  - broccoli florets
  - mint
  - pasta
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/20/multimedia/GK-Broccoli-walnut-pesto-pasta-phfj/GK-Broccoli-walnut-pesto-pasta-phfj-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Broccoli-Walnut Pesto Pasta

> Source: https://cooking.nytimes.com/recipes/1019642-broccoli-walnut-pesto-pasta

## Description
Pesto becomes more full-bodied with the addition of broccoli that’s blanched in the same pot as the pasta and fresher with the combination of mint and lemon. For a sauce that's light and loose, use only the florets — not the stems. Raw walnuts have a welcome natural sweetness and nice crunch that complement the pesto, but you can leave them out or substitute sunflower seeds if you have a tree-nut allergy.

## Ingredients
- Kosher salt (such as Diamond Crystal)
- 4 cups broccoli florets (10 ounces from 2 crowns)
- 1 pound cut pasta, such as medium shells
- 1 large garlic clove, smashed
- 2 packed cups fresh mint leaves (about 2 ounces from one small bunch)
- Black pepper
- 1/2 cup extra-virgin olive oil, plus more for serving
- 1 lemon, zested and juiced
- Parmigiano-Reggiano, for serving
- 1/2 cup walnuts, chopped

## Instructions
1. Bring a large saucepan of water to a boil over high heat. Add 1/4 cup salt, then add the broccoli. Cook, stirring occasionally, until bright green and just tender, about 5 minutes. Use a spider or slotted spoon to transfer to a food processor; keep the water boiling.
2. Drop the pasta into the boiling water and cook according to the package’s directions for al dente. Reserve 1/2 cup pasta cooking water.
3. Meanwhile, add the garlic to the broccoli and pulse, scraping the bowl occasionally, until smooth. Add the mint, 1 teaspoon salt and 1/2 teaspoon pepper. Pulse until smooth, then add the oil with the machine running.
4. Drain the pasta well and transfer to a large bowl. Stir in the pesto. Add 2 tablespoons lemon juice and 1/2 teaspoon each salt and pepper and toss until the pasta is evenly coated. If the mixture seems thick, fold in the reserved pasta water, 1 tablespoon at a time. The mixture will thicken as it cools, so you want it to be saucy. Season to taste with salt and pepper.
5. Divide among serving dishes and top with lemon zest, then grate cheese over. Sprinkle with the walnuts, grind more black pepper on top, then drizzle with olive oil. Serve hot, warm or room temperature.

## Tags
- broccoli florets
- mint
- pasta
- vegetarian

## Notes
`,Km=`---
title: "Brown Butter Cornmeal Cake"
source: "https://cooking.nytimes.com/recipes/1027643-brown-butter-cornmeal-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "10 to 12 servings"
prep_time: "PT15M"
cook_time: "PT1H30M"
total_time: "PT13H45M"
categories:
  - cakes
  - project
  - dessert
tags:
  - brown butter
  - cornmeal
  - egg white
  - french inspired
  - make-ahead
  - plan-ahead
  - skillet
  - sweet cherry
  - turbinado sugar
  - gluten-free
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/01/28/multimedia/28FD-KOMOLAFEREX-YK-Brown-Butter-Cornmeal-Cake-qthg/23FD-KOMOLAFEREX-YK-Brown-Butter-Cornmeal-Cake-qthg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Brown Butter Cornmeal Cake

> Source: https://cooking.nytimes.com/recipes/1027643-brown-butter-cornmeal-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
At the popular Radio Bakery in Brooklyn, a version of this unassuming brown butter cake, based on the classic French financier, sits among the fruit-forward stunners. The chef Kelly Mencin uses farmer-ground coarse cornmeal in place of the traditional ground almond, then scooped into individual portions, sprinkled with turbinado sugar and baked. The result is a perfect combination of salty-sweet that’s tender, chewy and nutty all at once. Made in a skillet here, it retains the depth of browned butter, crispiness of cornmeal and the caramelized crunch of sugar. Cherries are added for their tartness and fleshy juiciness; fresh or frozen sour Bing or dark sweet cherries will work, depending on the season. This lively bake is a commitment that won't disappoint: Enjoy slices warm or room temperature, alongside cool, soft whipped cream or topped with a scoop of your favorite ice cream.

## Ingredients
- 1 cup/224 grams unsalted butter, cut into 1-inch cubes, plus 1 tablespoon softened butter for skillet
- 2 cups/385 grams turbinado sugar, plus ¼ cup/50 grams for sprinkling, divided
- 1 1/4 cup/185 grams medium coarse cornmeal
- 1/2 cup/64 grams cornstarch, plus 2 tablespoon for coating cherries
- 1 tablespoon kosher salt (such as Diamond Crystal), plus ¼ teaspoon for cherries
- 8 large egg whites
- 1 cup/125 grams frozen sweet cherries, quartered (do not defrost)
- Whipped cream or ice cream, for serving

## Instructions
1. Set a small, deep pot over medium heat and add the butter. Heat until the melted butter begins to foam at the edges, about 5 minutes. Continue to cook, stirring consistently until the milk solids begin to turn golden brown, 2 to 4 minutes. Cook until the butter is deep brown in color and nutty, stirring constantly toward the end, 3 to 4 minutes. Set aside to cool slightly.
2. Add 2 cups turbinado sugar to a food processor or blender and pulse about 20 times (about 10 seconds per pulse) until the sugar is a fine powder. (You'll still notice some coarse bits, and that’s OK.) Set aside.
3. In a medium bowl, whisk to combine the cornmeal, cornstarch and 1 tablespoon kosher salt. Set aside.
4. In the bowl of a stand mixer fitted with the whisk attachment or using a hand mixer, pour in the egg whites. Begin on medium speed and whip to soft peaks, 5 to 6 minutes. Sprinkle in all the turbinado sugar a tablespoon at a time, and mix until the egg whites are tinged a light brown, about 4 minutes. Once all the sugar is in, whip on medium-high speed to medium peaks, until glossy (like a Swiss meringue), 5 to 6 minutes. Turn off the mixer and scrape down the sides with a rubber spatula.
5. Switch to the paddle attachment of the mixer, and mix on a slightly lower speed, sprinkling in the dry ingredients until everything is just combined, about 3 minutes. Slowly stream in the warm butter and mix until the batter is smooth and cohesive, about 5 minutes. Mix until fluffy and creamy, another 5 minutes. Move the batter to an airtight container with a lid. Cover and refrigerate for at least 12 hours and up to 3 days to hydrate the batter.
6. To bake, heat the oven to 375 degrees. Line a sheet pan with parchment paper and take out a cooling rack.
7. Move the frozen cherries to a small bowl, and sprinkle with 2 tablespoons cornstarch and ¼ teaspoon salt. Toss together to fully coat the cherries.
8. Generously coat the base and sides of a 10- to 12-inch cast-iron or steel skillet that’s 2 inches deep with 1 tablespoon softened butter. Sprinkle 2 tablespoons turbinado sugar up and along the buttered sides. With the flat side of a small offset spatula, evenly spread the batter in the skillet. Top the surface with the prepared cherries and sprinkle the remaining 2 tablespoons turbinado sugar all over the top.
9. Bake until the cake edges are set and the cherries have sunk into the cake, about 30 minutes. The center should be soft but should reveal an imprint when touched with your fingertip. Rotate the pan and continue to cook until slightly puffed in the center, golden brown and edges are crisp and deep brown, another 6 to 10 minutes. A cake tester or tip of a knife inserted in the center should come out with a few crumbs or clean.
10. Remove cake from oven and allow it to cool slightly in the pan, about 10 minutes. Run an offset spatula along the skillet edge, place the parchment-lined sheet pan over the skillet, and flip cake onto the pan. Then, place the baking rack over the cake and flip the cake again onto the rack. Move to a cooling rack or large plate and peel off the parchment. Cool completely.
11. Serve wedges with a dollop of whipped cream or a scoop of ice cream. Leftover cake can be stored in an airtight container at room temperature for up to 3 days or refrigerated for up to 7 days.

## Tags
- brown butter
- cornmeal
- egg white
- french inspired
- make-ahead
- plan-ahead
- skillet
- sweet cherry
- turbinado sugar
- gluten-free
- vegetarian

## Notes
`,Jm=`---
title: "Bruschetta With Cabbage Braised in Wine"
source: "https://cooking.nytimes.com/recipes/1016005-bruschetta-with-cabbage-braised-in-wine"
author: "Martha Rose Shulman"
yield: "6 bruschetta, serving 3 to 6"
prep_time: ""
cook_time: ""
total_time: "PT35M"
categories:
  - quick
  - weeknight
  - appetizer
  - side dish
tags:
  - cabbage
  - parmesan
  - wine
  - healthy
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2014/01/28/health/28recipehealth/28recipehealth-facebookJumbo-v2.jpg"
date_saved: "2026-04-16"
---

# Bruschetta With Cabbage Braised in Wine

> Source: https://cooking.nytimes.com/recipes/1016005-bruschetta-with-cabbage-braised-in-wine

## Description
Long-simmered cabbage provides a sweet flavor for this bruschetta. The wine-braised cabbage is adapted from a recipe in “Cooking From an Italian Garden,” by Paola Scaravelli and Jon Cohen. If you don’t cook with wine, substitute vegetable stock, chicken stock or water for the wine. You could also top the bruschetta with a simpler cabbage sauté, but I love the sweet flavor of the long-simmered cabbage.

## Ingredients
- 2 tablespoons extra virgin olive oil
- 2 leeks, white and light green parts only, halved, cleaned and thinly sliced
- 2 garlic cloves, 1 minced, 1 cut in half
- 1 teaspoon chopped fresh rosemary
- 1 medium head cabbage, cored and shredded or chopped
- Salt to taste
- 1 tablespoon tomato paste dissolved in 2 tablespoons water
- 1/2 teaspoon paprika
- 1 cup dry white wine
- 1 Parmesan rind
- Freshly ground pepper
- 1 tablespoon chopped fresh dill (optional)
- 6 thick slices whole wheat country bread
- 3 tablespoons freshly grated Parmesan

## Instructions
1. Heat olive oil over medium heat in a large, heavy skillet and add leeks. Cook, stirring, until they begin to soften, about 3 minutes. Add minced garlic and rosemary and cook, stirring, for another 30 seconds to a minute, until fragrant. Stir in cabbage and a generous pinch of salt and cook, stirring often, until it begins to soften, about 5 minutes. Add dissolved tomato paste and paprika and stir together. Add white wine, Parmesan rind and salt to taste, bring to a simmer, cover and reduce heat to low. Cook, stirring from time to time, for about 20 to 25 minutes, until cabbage is soft and sweet. Remove Parmesan rind. Add freshly ground pepper, taste and adjust salt. Remove from heat.
2. Lightly toast the bread and rub with the cut clove of garlic. Top with the cabbage, sprinkle with Parmesan and with dill if desired, and serve.

## Tags
- cabbage
- parmesan
- wine
- healthy
- vegetarian

## Notes
`,Wm=`---
title: "Burẹ́dì Ágẹ̀gẹ (Soft Pull-Apart Rolls)"
source: "https://cooking.nytimes.com/recipes/773691128-bur-di-ag-g-soft-pull-apart-rolls"
author: "Yewande Komolafe"
yield: "12 to 16 servings"
prep_time: "PT10M"
cook_time: "PT5H"
total_time: "PT5H10M"
categories:
  - Breakfast
  - Lunch
  - Dinner
  - Snack
  - Roll and Bun
  - Side Dish
tags:
  - Active Dry Yeast
  - Unsalted Butter
  - Make-Ahead
  - Project
  - Vegetarian
  - Party
  - Nigerian
cuisine: "Nigerian"
image: "https://static01.nyt.com/images/2026/03/16/multimedia/16FD-KOMOLAFE-GATHERING-SSREX-YK-Buredi-Agege-Soft-Pull-Apart-Ro-jhtk/16FD-KOMOLAFE-GATHERING-SSREX-YK-Buredi-Agege-Soft-Pull-Apart-Ro-jhtk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Burẹ́dì Ágẹ̀gẹ (Soft Pull-Apart Rolls)

> Source: https://cooking.nytimes.com/recipes/773691128-bur-di-ag-g-soft-pull-apart-rolls

## Description
Slightly sweet, plush and tender, this yeast-risen bread is often dipped and dragged through saucy dishes, used as a vessel to deliver food to the mouth. In Lagos, Nigeria, it is known as ágẹ̀gẹ bread, named for the large industrial bakery that relocated to the city of Ágẹ̀gẹ in the 1960s to sell hot loaves to eager commuters. Here, the buns provide a smaller, portable version of the loaf. The dense yet cloudlike bread is dipped in milk tea, sandwiched with akara (fried bean fritters) or served alongside any soup or stew. For this recipe, protein-rich milk powder, along with eggs and cold butter, provide the structure and fat that creates the bread’s signature richness. Kneading, either by hand or using a stand mixer, is also essential for its structure. Any shape pan (round, square or rectangular) that’s 8 to 10 inches in diameter or length can be used here. After the final brushing of softened butter, you can top the warm rolls with flakes of sea salt or a drizzle of honey.

## Ingredients
- 1 cup/240 grams lukewarm water or milk (98 to 105 degrees)
- 1 tablespoon/14 grams active dry yeast
- ⅓ cup/67 grams sugar
- 4 cups/515 grams all-purpose flour, plus more for sprinkling
- ¾ cup/58 grams nonfat dry milk powder
- ½ teaspoon ground allspice
- 2 teaspoons kosher salt (such as Diamond Crystal)
- 1 large egg, whisked
- 6 tablespoons/84 grams unsalted butter, at room temperature, plus 1 to 2 tablespoons for greasing pan and brushing rolls
- Large-flake sea salt or honey, optional, for sprinkling and drizzling

## Instructions
1. In the bowl of a stand mixer fitted with the dough hook, combine the warm water, yeast and sugar. Whisk together to dissolve the sugar and let sit undisturbed until foamy (yeast granules will expand, forming a cap that will resemble a cappuccino’s foam), about 10 minutes.
2. In a separate bowl, whisk together the flour, milk powder, allspice and salt.
3. Once the yeast is foamy, stir the egg into the yeast mixture and, using a silicone spatula, add in the flour mixture all at once and mix until combined. Add the butter and stir using a wooden spoon until the dough is shaggy (damp and surrounded by pockets of flour), 2 to 3 minutes.
4. Transfer the bowl to the stand mixer fitted with a dough hook and set to low speed. Knead the dough, intermittently stopping the mixer to scrape down the hook and sides and gather the dough back in the center of the bowl, until smooth and tacky but not too sticky to handle, 13 to 14 minutes. (Kneading develops gluten strands, giving the dough a springiness and a chewy mochi-like result).
5. Remove the hook, and use your hands to shape the dough into a smooth ball. Move dough to a large clean metal bowl and cover with a kitchen towel. Let stand undisturbed until doubled in size, 1 ½ to 2 hours. (Dough can be left to rise, covered and refrigerated, for 9 hours and up to 2 days. Once ready to bake, remove dough from the refrigerator, proceed with the steps below.)
6. Generously butter the bottom and sides of a 9-by-13-inch baking pan and set aside. Punch the dough to deflate and transfer to a clean work surface sprinkled with flour to prevent sticking. Use a sharp knife to cut the dough into 24 even-size pieces (about 40 to 45 grams/1.6 ounces each). It's OK if you end up with fewer or more here. Use your thumb to create a dimple in the center of each piece of dough and cover the dough balls with a kitchen towel to rest for about 10 minutes.
7. Shape each piece by placing it on the floured work surface, dimple side up. Stretch any corners over and up toward the center. Flip dough so that the folded edges lay seam side down on your work surface. Keep the other pieces of dough covered as you work.
8. Cup your palm on top of the dough portion, and move the dough in a circular motion while pressing down slightly. Keep your hand cupped and your thumb steady around the edge of your palm to control the movement. You should have a tight ball with the seam side tucked and sealed. Transfer each ball, seam side down, onto the buttered baking pan, about ½ inch apart. Repeat this rolling step until all the dough pieces have been rolled and placed in the pan.
9. Cover the pan with a clean dish towel and allow the dough to rise again until it's just slightly above the edge of the pan, 45 minutes to 1 hour, depending on your kitchen temperature.
10. Heat the oven to 325 degrees. Place racks in the center and bottom of your oven. Slide a rimmed baking sheet on the bottom rack of the oven, and pour a cup of water in it to create some steam. Transfer the 9-by-13-inch baking dish to the center rack of the oven.
11. Bake until the top of the rolls are pale toward the center and brown at the edges, 15 to 20 minutes. Rotate the baking pan, add another 1 cup water to the steam pan, if necessary, and continue to bake until the rolls begin to sound hollow when the surface is tapped, 15 to 20 minutes more. The rolls will pull away slightly from the pan, and an instant-read thermometer inserted in the center should read 185 to 200 degrees.
12. Remove the rolls from the oven and allow the bread to cool slightly in the pan, 8 to 10 minutes. While still warm, brush the surface with softened butter and, if you like, sprinkle with flaky salt or drizzle with honey. Serve immediately or at room temperature, alongside milk tea, sandwiched with akara (fried bean fritters) or paired with any stew or soup.

## Tags
- Active Dry Yeast
- Unsalted Butter
- Make-Ahead
- Project
- Vegetarian
- Party
- Nigerian

## Notes
`,Vm=`---
title: "Butter Shortbread Dough"
source: "https://cooking.nytimes.com/recipes/1023720-butter-shortbread-dough?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "1 batch of dough (enough for 2 cookie recipes)"
prep_time: ""
cook_time: ""
total_time: "PT10M"
categories:
  - easy
  - quick
tags:
  - christmas
  - dough
  - egg yolk
  - freezer friendly
  - make-ahead
  - shortbread
cuisine: ""
image: "https://static01.nyt.com/images/2022/12/07/multimedia/YK-shortbread-dough-1-1b57/YK-shortbread-dough-1-1b57-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Butter Shortbread Dough

> Source: https://cooking.nytimes.com/recipes/1023720-butter-shortbread-dough?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Shortbread dough is renowned for its simplicity, versatility and forgiving nature. With the right ratio of flour to butter — and egg yolks for moisture and binding — this dough delivers crisp and crumbly cookies that melt just after the first bite. Six different types of cookies can be crafted from just three batches of this basic dough. You can certainly take on just one of these recipes at a time, but in a single day you can make all six: Sparkling Shortbread Cookies, Strawberry Jam Bars With Cardamom, Spiced Chocolate Marble Shortbread, Cheddar Chive Crisps, Salted Caramel and Peanut Butter Shortbread and Peppermint Patty Shortbreads. The dough can be divided, wrapped and refrigerated (or frozen) ahead of time and brought out as needed.

## Ingredients
- 2 cups/460 grams unsalted butter, at room temperature
- 2 teaspoons kosher salt (such as Diamond Crystal)
- 2 cups/415 grams granulated sugar
- 2 large egg yolks
- 5 cups/654 grams all-purpose flour (see Tip)

## Instructions
1. In the bowl of a stand mixer fitted with the paddle attachment, combine the butter, salt and sugar. Beat on low speed until incorporated and smooth, scraping down the sides of the bowl as needed, about 3 minutes. (Do not beat until fluffy, you don’t need to incorporate air into the dough.) Add the yolks and mix until just combined. Turn the mixer off and scrape down the sides of the bowl.
2. Add the flour to the bowl all at once and scrape the bottom and sides of the bowl. Turn the mixer speed to low and beat until flour is fully incorporated, scraping the bowl again if needed, about 30 seconds. The dough will be in large crumbles. Wrap and refrigerate for later use, or divide the crumbles in half and proceed with Sparkling Shortbread Cookies, Strawberry Jam Bars With Cardamom, Spiced Chocolate Marble Shortbread, Cheddar Chive Crisps, Salted Caramel and Peanut Butter Shortbread or Peppermint Patty Shortbreads.

## Tags
- christmas
- dough
- egg yolk
- freezer friendly
- make-ahead
- shortbread

## Notes
`,Qm=`---
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
`,Xm=`---
title: "Cabbage Parm"
source: "https://cooking.nytimes.com/recipes/1025927-cabbage-parm"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT45M"
total_time: "PT50M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - vegetables
  - main course
tags:
  - full-access-ic-2026-01
  - green cabbage
  - mozzarella
  - sheet-pan
  - tomato sauce
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/09/26/multimedia/hm-cabbage-parmrex-lhzb/hm-cabbage-parmrex-lhzb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cabbage Parm

> Source: https://cooking.nytimes.com/recipes/1025927-cabbage-parm

## Description
Cabbage confirms its status as one of the vegetable kingdom’s most versatile ingredients in this untraditional yet deeply comforting dish. Roasted at high temperature, the cabbage becomes sweet and smoky, providing a complex vegetarian foundation for the classic parmesan treatment often applied to eggplant or mushrooms. The traditional bread crumbs are replaced with chunky croutons, which deliver a textural crunch — and it’s a good idea to make extra, for soaking up the sauce or even just for snacking. Experiment with different varieties of cabbage; conical Caraflex will deliver a sweeter finish, while savoy, with its looser leaf structure, has a milder flavor and can cook in less time.

## Ingredients
- 7 tablespoons extra-virgin olive oil, plus more for serving
- 1 medium green cabbage (about 2 1/2 pounds), cut into 2-inch wedges
- Salt and pepper
- 1/2 pound bread, such as sourdough or ciabatta, torn into1-inch chunks
- 1 garlic clove, grated
- 3 cups/24 ounces store-bought or homemade tomato sauce
- 2 cups/8 ounces grated low-moisture mozzarella
- Basil leaves, for topping

## Instructions
1. Heat the oven to 450 degrees and arrange racks in the middle and bottom of the oven.
2. Drizzle a sheet pan with 2 tablespoons olive oil and then arrange the cabbage wedges on the pan, setting each one flat. Drizzle the top and sides of the cabbage with 3 tablespoons olive oil and season with salt and pepper. Place onto the middle rack of the oven and roast until tender and golden, 25 to 35 minutes.
3. Place the bread on another sheet pan. Add the garlic, drizzle with the remaining 2 tablespoons olive oil, season with salt and pepper and toss well to coat evenly. Place on the bottom rack of the oven and cook for 5 minutes. Remove from the oven, toss the croutons and return to the oven until golden and crispy, 8 to 10 minutes.
4. Remove the cabbage from the oven and spoon the tomato sauce on top. Top with the mozzarella and return to the oven until the cheese is melted and golden, 10 to 15 minutes.
5. To serve, scatter croutons and basil leaves on top and drizzle with more olive oil. Serve immediately.

## Tags
- full-access-ic-2026-01
- green cabbage
- mozzarella
- sheet-pan
- tomato sauce
- vegetarian

## Notes
`,Zm=`---
title: "Cabbage, Potato and Cheese Dumplings With Dill"
source: "https://cooking.nytimes.com/recipes/1027694-cabbage-potato-and-cheese-dumplings-with-dill"
author: "Kay Chun"
yield: "About 4 dozen dumplings"
prep_time: "PT30M"
cook_time: "PT1H20M"
total_time: "PT1H50M"
categories:
  - brunch
  - dinner
  - lunch
  - dumplings
  - project
  - appetizer
  - main course
tags:
  - dill
  - dumpling week 2026
  - freezer friendly
  - leek
  - lunar new year
  - napa cabbage
  - parmesan
  - party
  - sauerkraut
  - small plate
  - swiss cheese
  - yukon gold potato
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/02/16/multimedia/16FD-DUMPLING-WEEKREX-KC-Cabbage-Potato-and-Cheese-Dumplings-W-hgmc/16FD-DUMPLING-WEEKREX-KC-Cabbage-Potato-and-Cheese-Dumplings-W-hgmc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cabbage, Potato and Cheese Dumplings With Dill

> Source: https://cooking.nytimes.com/recipes/1027694-cabbage-potato-and-cheese-dumplings-with-dill

## Description
These dumplings are inspired by my mom’s comforting cabbage-potato soup and other classic cabbage and potato dishes, like pierogi and knishes. The savory filling combines creamy mashed potatoes and caramelized cabbage, seasoned with tangy sauerkraut, fragrant caraway, Parmesan and fresh dill. These dumplings are equally delicious boiled and tender or pan-fried and crisp. Leftovers can be cooked with veggies in broth for a quick and satisfying soup.

## Ingredients
- 12 ounces Yukon Gold or yellow potatoes (from about 2 medium potatoes), peeled and cut into ½-inch dice
- Salt and pepper
- 4 tablespoons unsalted butter, divided
- 1 cup finely chopped leek (from 1 medium leek), white and light green parts only
- 4 cups finely chopped napa cabbage (about 11 ounces)
- ¼ cup drained sauerkraut, finely chopped
- 2 tablespoons finely chopped scallions
- ½ cup finely shredded Emmenthaler or Swiss cheese (about 2 ounces)
- ¼ cup finely grated Parmesan (about 1 ounce)
- 2 tablespoons finely chopped dill
- ½ teaspoon caraway seeds, crushed
- 1 (12-ounce) package frozen square wonton skins, thawed
- Unsalted butter and sunflower or other neutral-tasting oil
- Freshly grated Parmesan and chopped or torn fresh dill, optional (for serving)

## Instructions
1. Prepare the filling: In a medium saucepan, combine potatoes and enough water to completely cover them by at least 1 inch and bring to a boil. Season the water with salt and cook, skimming off the foam that rises to the top, until potatoes are tender, about 10 minutes. Drain, then return potatoes to the hot saucepan; let stand for 5 minutes to allow them to dry out. Transfer potatoes to a large bowl, season with salt and pepper and mash with a fork until smooth. Cool to room temperature, about 15 minutes.
2. Meanwhile, in a 12-inch nonstick skillet over medium heat, melt 2 tablespoons of the butter. And the leek and cook, stirring occasionally, until softened and starting to brown, about 5 minutes. Push the leek to one side of the skillet and melt the remaining 2 tablespoons butter in the empty side. Add the cabbage, season with salt and pepper and mix with the leek until well combined. Increase heat to medium-high and cook, stirring occasionally, until the cabbage is softened, about 3 minutes. Continue to cook, undisturbed, until any excess liquid has been absorbed and the mixture is lightly caramelized underneath, 2 minutes longer. Transfer the cabbage mixture to a plate and cool until lukewarm, about 15 minutes.
3. Add the cabbage mixture to the mashed potatoes and fold until well incorporated. Add the sauerkraut, scallions, both of the cheeses, dill and caraway and season with salt and pepper. Fold just until the mixture is well blended.
4. Prepare a dumpling assembly station: Line a baking sheet with parchment paper. Fill a small bowl with water. Keep the wrappers covered with a damp paper towel or kitchen towel.
5. Place 1 level tablespoon of the filling in the center of a wrapper. Dip a fingertip in the water and lightly moisten the wrapper edges. Bring the bottom edge of the wrapper up to fold the dumpling in half and enclose the filling and form a rectangle shape, pushing out any air bubbles. Firmly press the edges together to seal, with the filling as compact as possible (the filling should mimic the shape of the rectangle). Bring together the two bottom corners, creating a small indentation in the middle of the dumpling. Dab one corner with water and place the other corner on top, pressing to seal (the dumpling will resemble a rosebud). Transfer dumpling onto the prepared sheet. Repeat with the remaining wrappers and filling, keeping them covered with a damp kitchen towel to keep them from drying out.
6. Cook the dumplings: To boil a dozen dumplings (see next step if you prefer to pan-fry them), bring a large saucepan of water to a boil. (To cook more than a dozen at a time, use a large pot. For every 12 dumplings, you’ll need 1 tablespoon of butter to finish cooking.) Add 12 dumplings and cook until the filling is hot throughout and the wrappers are tender, 4 to 5 minutes. Drain, then return the dumplings to the hot saucepan off the heat and add 1 tablespoon of butter. Swirl the pan and gently toss the dumplings until the butter melts and coats the dumplings, then transfer to a serving plate. Top with cheese, dill or both, if using. Serve warm.
7. To pan-fry a dozen dumplings instead of boiling, heat 1 tablespoon of butter and 1 tablespoon of oil in a 10-inch, lidded nonstick skillet over medium-low until the butter is melted. Add 12 dumplings and cook until golden brown underneath, about 3 minutes. Add 2 tablespoons of water to the skillet, quickly cover the pan and cook until all of the water is absorbed, the filling is hot and the dumpling wrappers are tender, about 3 minutes longer. Arrange them on a serving platter and serve warm. (Clean the skillet and repeat with 1 tablespoon butter, 1 tablespoon oil and 12 dumplings as many times as desired.)

## Tags
- dill
- dumpling week 2026
- freezer friendly
- leek
- lunar new year
- napa cabbage
- parmesan
- party
- sauerkraut
- small plate
- swiss cheese
- yukon gold potato
- vegetarian

## Notes
`,Fm=`---
title: "Caramelized Brussels Sprouts Pasta With Toasted Chickpeas"
source: "https://cooking.nytimes.com/recipes/1021475-caramelized-brussels-sprouts-pasta-with-toasted-chickpeas"
author: "Kay Chun"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - lunch
  - weeknight
  - beans
  - noodles
  - pastas
  - vegetables
  - main course
tags:
  - brussels sprout
  - caper
  - chickpea
  - parmesan
  - pasta
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/10/19/dining/kc-brussels-sprouts-pasta/merlin_178199862_edaaba28-6613-4d5c-b5e3-c11d03e2f2b6-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Caramelized Brussels Sprouts Pasta With Toasted Chickpeas

> Source: https://cooking.nytimes.com/recipes/1021475-caramelized-brussels-sprouts-pasta-with-toasted-chickpeas

## Description
This fast and satisfying vegetarian weeknight pasta packs in a whole pound of brussels sprouts. The mountain of shredded sprouts may seem like a lot, but like spinach, it will cook down. As the sprouts soften, they caramelize and naturally sweeten, losing any hints of bitterness. Chickpeas are toasted in olive oil until deep golden brown, crispy in spots and super toasty. They bring a nutty, earthy flavor to the dish, complementing the tangy capers and lemony sauce. Leftovers are tasty enjoyed cold like pasta salad, added to a frittata, or sautéed in olive oil until golden and topped with a fried egg.

## Ingredients
- Kosher salt and black pepper
- 6 tablespoons extra-virgin olive oil
- 1 (15-ounce) can chickpeas, rinsed and patted dry
- 2 tablespoons unsalted butter
- 3 garlic cloves, thinly sliced
- 1 pound brussels sprouts, trimmed and very thinly sliced (about 5 tightly packed cups)
- 8 ounces dried tagliatelle pasta
- 1/2 cup freshly grated Parmesan (about 1 1/2 ounces), plus more for serving
- 2 tablespoons drained capers
- 2 tablespoons lemon juice
- 1/2 teaspoon red-pepper flakes
- 1/4 cup chopped fresh chives

## Instructions
1. Bring a pot of salted water to a boil.
2. Meanwhile, in a Dutch oven or a large, deep skillet, heat 2 tablespoons of the oil over medium. Add chickpeas, season with salt and pepper and cook, stirring occasionally, until deep golden and well toasted, about 5 minutes. Transfer the chickpeas to a paper towel-lined plate.
3. Add the butter, garlic and 2 tablespoons of the oil to the Dutch oven and cook, stirring, until fragrant, about 1 minute. Add brussels sprouts, season with salt and pepper, and cook, stirring occasionally, until tender and lightly caramelized, about 10 minutes.
4. Meanwhile, cook pasta according to package directions in the boiling water until al dente. Drain, reserving 2 cups of the pasta water.
5. Add the pasta, 1 cup reserved pasta water, about 3/4 of the toasted chickpeas and the remaining 2 tablespoons oil to the Dutch oven. Stir in the Parmesan, capers, lemon juice, red-pepper flakes and half the chives until well incorporated and saucy, 1 to 2 minutes. Season with salt and pepper. Add more pasta water if a thinner sauce is desired.
6. Divide pasta among bowls. Top with remaining toasted chickpeas and chives. Garnish with more black pepper and Parmesan.

## Tags
- brussels sprout
- caper
- chickpea
- parmesan
- pasta
- American

## Notes
`,$m=`---
title: "Caramelized Cabbage and Walnut Pasta"
source: "https://cooking.nytimes.com/recipes/1022935-caramelized-cabbage-and-walnut-pasta?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - weeknight
  - pastas
  - main course
tags:
  - green cabbage
  - leek
  - pecorino
  - spaghetti
  - walnut
  - vegetarian
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2022/01/25/dining/hm-cabbage-leek-walnut-pasta/merlin_200287722_fc9201ff-c6c4-458f-8df2-0ad0b8a5a1b5-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Caramelized Cabbage and Walnut Pasta

> Source: https://cooking.nytimes.com/recipes/1022935-caramelized-cabbage-and-walnut-pasta?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A single, modest cabbage goes a long way in this recipe. Green cabbage (though you could also use Savoy) becomes jammy and sweet when cooked with aromatic leeks and garlic for 15 minutes, a practically effortless concoction to toss with pasta. Cumin seeds add just the right amount of earthiness along with a subtle citrus tone; add more if you want a pronounced flavor, or substitute with fennel seeds or caraway. The walnuts balance out the sweetness of the cabbage and leeks, and introduce a slight bitterness and crunch. Store-bought roasted walnuts are a time saver here, but if you want them extra dark and crispy, toast them for 6 to 8 minutes in a 325-degree oven until deeply golden. If you have chives or scallions on hand, toss these in at the end for a lively finish.

## Ingredients
- 1/4 cup olive oil
- 3 tablespoon unsalted butter
- 2 teaspoon cumin seeds
- 2 leeks, white and tender green parts, thinly sliced into rings
- 4 garlic cloves, finely chopped
- 2 pounds finely sliced green cabbage
- Kosher salt (Diamond Crystal)
- 1 pound spaghetti or other long pasta
- 4 ounces pecorino, grated, plus more for serving
- 2 to 3 teaspoons freshly ground black pepper, plus more as needed
- 3 to 4 tablespoons lemon juice (from 1 large lemon)
- 1 to 1½ cups toasted walnuts, roughly chopped
- Handful of chopped chives (optional)

## Instructions
1. Heat a large Dutch oven or pot over medium. Add the olive oil and butter. When the butter has melted, add cumin seeds and bloom for 15 seconds, then add the leeks, garlic, cabbage and 2 teaspoons salt, and stir for 3 to 4 minutes until wilted. Cover, reduce heat to medium-low and cook for 10 minutes without stirring. Check every few minutes to make sure the bottom is not burning. If needed, give it a stir.
2. After 10 minutes, remove the lid from the cabbage and stir. Cover and cook for another 4 to 5 minutes, until it is supersweet and tender. Taste and season with kosher salt.
3. Meanwhile, bring a large pot of salted water to a boil. Add the spaghetti and cook according to package instructions. When the pasta is ready, do not drain, but use tongs to drag the pasta out of its cooking water and straight into the pot with the cabbage. Add about 1 cup of pasta cooking water, along with the pecorino and the black pepper. Toss well to combine.
4. Add lemon juice. Taste, adjusting seasonings with more salt, pepper or lemon, if needed. To serve, scatter with walnuts and finish with more pecorino and chopped chives, if using.

## Tags
- green cabbage
- leek
- pecorino
- spaghetti
- walnut
- vegetarian
- winter

## Notes
`,ef=`---
title: "Carrot Cake Butter Mochi"
source: "https://cooking.nytimes.com/recipes/774286808-carrot-cake-butter-mochi?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Vaughn Vreeland"
yield: "12 servings"
prep_time: "PT0H20M"
cook_time: "PT2H10M"
total_time: "PT2H30M"
categories:
  - Dessert
  - Carrot Cake
tags:
  - Carrot
  - Coconut Milk
  - Cream Cheese
  - Crystalized Ginger
  - Party
  - Easy
  - Rice Flour
  - Unsweetened Coconut
  - Golden Raisin
  - Spring
  - Brown Butter
  - Easter
  - Bake
  - Gluten-Free
  - Vegetarian
  - American
cuisine: "American"
image: "https://static01.nyt.com/images/2026/03/26/multimedia/VV-Carrot-Cake-Butter-Mochi-1-tzgq/VV-Carrot-Cake-Butter-Mochi-1-tzgq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Carrot Cake Butter Mochi

> Source: https://cooking.nytimes.com/recipes/774286808-carrot-cake-butter-mochi?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This party-size dessert, with the distinct flavors of carrot cake and the unique squishy texture of butter mochi, is a mashup made in heaven. Butter mochi is a treat that’s on the table of just about any celebration in Hawaii and many families have their own safeguarded recipes. The gentle buttery flavor is quite versatile, lending itself to customization, like this generously spiced version that’s packed with toasted coconut, grated carrots and golden raisins. The tart cream cheese glaze gets showered in crystallized ginger and more toasted coconut, echoing their warm notes in the cake. Mochi’s going to be softest the same day it’s made, but keeps really well in the fridge for up to 4 days.

## Ingredients
- 6 tablespoons/84 grams unsalted butter, plus more for greasing the pan
- 1 cup/90 grams shredded unsweetened coconut
- 3 cups/454 grams mochiko (sweet rice flour), such as Koda Farms brand (see Tip)
- 1½ cups/300 grams sugar
- 2 teaspoons baking powder
- 1½ teaspoons ground cinnamon
- 1 teaspoon kosher salt (such as Diamond Crystal) or ½ teaspoon fine salt
- ½ teaspoon ground ginger
- ½ teaspoon ground cardamom
- 1 (13.5-ounce) can/about 1⅔ cups full-fat coconut milk
- 2 large eggs, at room temperature
- 1 tablespoon vanilla extract
- 1 tablespoon freshly grated peeled ginger
- 2 cups/180 grams coarsely grated carrots (from about 3 medium carrots, peeled)
- ¾ cup/124 grams golden raisins
- 4 ounces/113 grams cream cheese, cut into pieces and softened
- 1 cup/123 grams powdered sugar, sifted
- 1 tablespoon lemon juice, plus more as needed
- ¼ teaspoon kosher salt (such as Diamond Crystal) or a pinch of fine salt
- ¼ cup/40 grams chopped crystallized ginger

## Instructions
1. Heat the oven to 350 degrees and arrange a rack in the center. Butter a 9-by-13-inch baking pan then line with parchment paper. In a medium saucepan over medium-low heat, toast the shredded coconut for about 5 minutes, stirring constantly, until it starts to become lightly golden and fragrant. Immediately scrape into a bowl to cool completely. Wipe out the saucepan.
2. In the same medium saucepan, heat the butter over medium until it bubbles rapidly. Continue to cook for 3 to 4 minutes, stirring occasionally with a wooden spoon, until the bubbles become foamy and toasty brown flecks appear. Take it off the heat and use the spoon to scrape and release any browned bits off the bottom. Pour the browned butter into a medium heat-safe bowl and let cool slightly.
3. In a large bowl, whisk together the mochiko, sugar, baking powder, cinnamon, salt, ground ginger, cardamom and ½ cup/45 grams of the toasted coconut (reserve the remaining for the top). Make a small well in the center and set aside.
4. To the bowl with the browned butter, add the coconut milk, eggs, vanilla and grated ginger and whisk until evenly combined. Pour the wet ingredients into the well of the dry ingredients, and whisk thoroughly until no lumps or dry pockets remain. Using a flexible spatula, fold in the grated carrots and raisins until evenly distributed.
5. Pour the batter into the prepared pan, spread evenly and bake for 1 hour 10 minutes to 1 hour 20 minutes, until the top is crackly and golden brown, and the sides start to pull away from the pan.
6. Let cool in the pan for 20 minutes, then flip it over onto a cutting board, remove the parchment and flip again onto a wire rack so the top is facing up to cool completely, 30 to 45 minutes.
7. In a medium bowl, mix together the cream cheese, powdered sugar, lemon juice and salt, starting slowly until everything comes together, then whisking more vigorously until no lumps remain and the glaze is the texture of plain yogurt. (If the glaze is too thick, add a teaspoon of lemon juice at a time and whisk to desired texture.) Pour the glaze over the cooled cake and smooth it into an even layer, then top with the reserved toasted coconut and the chopped crystallized ginger.
8. Cut the mochi into squares and serve immediately. Store any leftovers in the fridge for up to 4 days.

## Tags
- Carrot
- Coconut Milk
- Cream Cheese
- Crystalized Ginger
- Party
- Easy
- Rice Flour
- Unsweetened Coconut
- Golden Raisin
- Spring
- Brown Butter
- Easter
- Bake
- Gluten-Free
- Vegetarian
- American

## Notes
`,nf=`---
title: "Chana Masala"
source: "https://cooking.nytimes.com/recipes/1024429-chana-masala"
author: "Zainab Shah"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT30M"
total_time: "PT40M"
categories:
  - dinner
  - easy
  - quick
  - beans
  - one pot
  - main course
tags:
  - chickpea
  - chile powder
  - garam masala
  - ginger
  - internal-open-access-search
  - plum tomato
  - stovetop
  - vegan
  - vegetarian
  - Indian
  - Pakistani
cuisine: "indian, pakistani"
image: "https://static01.nyt.com/images/2023/10/13/multimedia/ZS-chana-masala-gltv/ZS-chana-masala-gltv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chana Masala

> Source: https://cooking.nytimes.com/recipes/1024429-chana-masala

## Description
Variations of chana masala, which means spiced chickpeas, are found across South Asia. This version, particularly common in Punjab, calls for a simple spiced onion and tomato mixture, which serves as the foundation for the humble chickpea. The nutty and buttery legume benefits from both dried chile powder and fresh chiles, coriander and the spice blend garam masala. Thinly sliced ginger and cilantro, added upon serving, add freshness. Both canned and dried chickpeas work for this dish, and in the case of the former, the resulting bowl of comfort feels nothing short of a miracle in under 30 minutes.

## Ingredients
- 2 tablespoons ghee or neutral oil
- 1 tablespoon garlic paste or freshly grated garlic
- 1 tablespoon ginger paste or freshly grated ginger (from a peeled 2-inch piece), plus more fresh ginger, peeled and sliced into matchsticks, for serving
- 1 medium red onion, peeled and finely chopped
- 2 Thai green or bird’s eye chiles, chopped
- 1 teaspoon cumin seeds
- 1/4 teaspoon ground turmeric
- 1/2 teaspoon ground coriander
- 1 teaspoon Kashmiri or other hot red chile powder
- 4 Roma tomatoes, finely chopped
- 3/4 teaspoon fine sea salt
- 2 (15-ounce) cans of chickpeas, drained, or 3 cups of cooked chickpeas (see Tip)
- 2 cups unsalted chicken or vegetable stock, or water
- 3/4 teaspoon garam masala
- 2 tablespoons chopped cilantro leaves and tender stems
- Rice or roti and lemon wedges, for serving (optional)

## Instructions
1. In a medium pot, melt ghee on medium heat. Once melted, stir in the garlic, ginger and onion. Continue cooking, stirring occasionally, until the onion softens, 5 to 7 minutes. Stir in the green chiles, cumin, turmeric, coriander and chile powder. Continue stirring for 30 seconds so the spices don’t burn. Add the tomatoes and their juices and salt. Increase the heat to high and cook, stirring often, until the mixture is jammy, 5 to 7 minutes.
2. Stir in the chickpeas and stock. Bring to a boil, then reduce heat and simmer until the mixture has thickened slightly, 5 to 7 minutes. With the back of a spoon, smash some of the chickpeas against the inside of the pot to thicken the mixture; continue smashing until it reaches the desired thickness.
3. Sprinkle with garam masala and top with cilantro and ginger. If desired, serve rice or roti and lemon wedges alongside.

## Tags
- chickpea
- chile powder
- garam masala
- ginger
- internal-open-access-search
- plum tomato
- stovetop
- vegan
- vegetarian
- Indian
- Pakistani

## Notes
`,tf=`---
title: "Charred Bok Choy and Cannellini Bean Salad"
source: "https://cooking.nytimes.com/recipes/1025398-charred-bok-choy-and-cannellini-bean-salad"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT15M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - beans
  - vegetables
  - main course
  - side dish
tags:
  - bok choy
  - cannellini bean
  - cilantro
  - fresh ginger
  - maple syrup
  - salad
  - sesame oil
  - stovetop
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/05/14/multimedia/hm-bok-choy-white-bean-salad-gkvp/hm-bok-choy-white-bean-salad-gkvp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Charred Bok Choy and Cannellini Bean Salad

> Source: https://cooking.nytimes.com/recipes/1025398-charred-bok-choy-and-cannellini-bean-salad

## Description
This recipe breaks bok choy out of its steamed and stir-fried box, demonstrating how well it responds to charring. Don’t be afraid to cook bok choy aggressively; the stalks are robust and remain crisp, while becoming smoky and sweet. Baby bok choy can be used too, but the leaves are much smaller and more tender, so simply slice them through the middle lengthwise. Other sturdy greens like gai lan (sometimes called Chinese broccoli) or cabbages will also work. The punchy dressing is sweet and acidic, given heat and spice from the grated ginger, while tart rice vinegar cuts through the richness of the maple syrup. Keep this dressing in mind for similar salads; it is equally lovely with cold soba noodles.

## Ingredients
- 1 (1-inch) piece fresh ginger, finely grated
- 1 garlic clove, grated
- 2 tablespoons rice vinegar
- 2 tablespoons maple syrup
- 4 teaspoons sesame oil
- Salt and black pepper
- 2 pounds bok choy (about 2 large bunches), rinsed and patted dry
- Extra-virgin olive oil
- 2 (15-ounce) cans cannellini beans, rinsed
- 1 big handful cilantro, chopped
- 1/4 to 1/2 teaspoon crushed red pepper
- 1 to 2 tablespoons toasted white sesame seeds

## Instructions
1. Make the dressing: Place the ginger, garlic, rice vinegar, maple syrup and sesame oil in a small bowl; whisk to combine. Season well with salt and pepper.
2. Prepare the bok choy: Trim the base of the bok choy and separate the white stalks from the green leaves. Slice the stalks into 1-inch pieces and roughly chop the leaves, keeping them separate from the stalks.
3. Heat a large (12-inch) skillet over medium-high for 2 minutes. Drizzle in about 1 tablespoon of oil, add the stalks, season well with salt and pepper and toss to combine. Leave to cook, undisturbed, until the bottoms of the stalks are charred, 2 to 3 minutes. Toss and then cook for another 3 to 4 minutes, tossing often, until the stalks are charred and crisp-tender. Transfer the bok choy from the pan and to a large serving bowl. Return the skillet to the heat.
4. Drizzle 1 tablespoon of oil into the skillet and add the bok choy leaves. Season with salt and pepper and cook, tossing often, until the leaves are charred and the water has cooked out, 3 to 4 minutes. Remove the leaves from the pan and add to the stalks.
5. Add the cannellini beans to the bok choy and pour in the dressing. Add the cilantro and toss to combine. Taste and season with salt and pepper. To serve, top with crushed red pepper and sesame seeds.

## Tags
- bok choy
- cannellini bean
- cilantro
- fresh ginger
- maple syrup
- salad
- sesame oil
- stovetop
- vegan
- vegetarian

## Notes
`,af=`---
title: "Cheesy Baked Orzo With Marinara"
source: "https://cooking.nytimes.com/recipes/1020823-cheesy-baked-orzo-with-marinara"
author: "Lidey Heuck"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - dinner
  - casseroles
  - pastas
  - main course
tags:
  - basil
  - great leftovers
  - kid-friendly
  - marinara sauce
  - mozzarella
  - orzo
  - parmesan
  - spinach
  - vegetarian
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/10/11/dining/lh-baked-orzo/lh-baked-orzo-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cheesy Baked Orzo With Marinara

> Source: https://cooking.nytimes.com/recipes/1020823-cheesy-baked-orzo-with-marinara

## Description
A vegetarian weeknight pasta that’s as comforting as it is easy, this dish will win over adults and kids alike (red-pepper flakes optional!). While fresh mozzarella can become tough and chewy when baked, shredded low-moisture mozzarella melts beautifully. Serve this with a simple, lemony arugula salad&nbsp;or a Caesar salad for ultimate weeknight comfort.

## Ingredients
- Kosher salt and black pepper
- 1 cup orzo
- 1 tablespoon olive oil
- 2 teaspoons minced garlic (about 2 cloves)
- 1/4 teaspoon red-pepper flakes
- 5 ounces fresh baby spinach (about 7 cups)
- 1 (24- to 25-ounce) jar marinara sauce
- 1/2 cup chopped fresh basil leaves, plus torn or sliced basil for serving
- 1 cup shredded low-moisture mozzarella cheese (about 4 ounces)
- 1/3 cup grated Parmesan cheese

## Instructions
1. Heat the oven to 375 degrees and bring a large pot of salted water to boil. Add the orzo and cook according to package instructions until just al dente. Drain the orzo and set aside.
2. Meanwhile, in a very large (12-inch) ovenproof skillet, heat the olive oil over medium. Add the garlic and red-pepper flakes and cook until fragrant (don't let the garlic burn), about 30 seconds to 1 minute. Add the spinach and a pinch of salt and cook, tossing often, until wilted, about 2 minutes. Add the marinara, basil, 1/2 teaspoon salt and 1/4 teaspoon black pepper. Bring to a simmer over medium heat, stirring occasionally, then remove from heat.
3. Stir the cooked orzo into the sauce. Stir in the mozzarella, sprinkle the Parmesan on top, and bake, uncovered, until the Parmesan is melted and the pasta is heated through, 15 to 20 minutes. Sprinkle with additional basil, and serve warm.

## Tags
- basil
- great leftovers
- kid-friendly
- marinara sauce
- mozzarella
- orzo
- parmesan
- spinach
- vegetarian
- American

## Notes
`,of=`---
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
`,sf=`---
title: "Cherry Karpatka"
source: "https://cooking.nytimes.com/recipes/1027151-cherry-karpatka?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Nicola Lamb"
yield: "8 to 12 servings"
prep_time: "PT15M"
cook_time: "PT1H45M"
total_time: "PT2H"
categories:
  - cakes
  - project
  - dessert
tags:
  - all-purpose flour
  - cherry
  - cornstarch
  - egg
  - heavy cream
  - make-ahead
  - milk
  - party
  - polish
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/09/09/multimedia/nl-cherry-karpatka-qzfb/nl-cherry-karpatka-qzfb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cherry Karpatka

> Source: https://cooking.nytimes.com/recipes/1027151-cherry-karpatka?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Karpatka, also known as Polish Mountain cake, gets its name from the Carpathian Mountains, a 1,500-kilometer range that stretches from the Czech Republic to Romania. Visually dramatic, this dessert is a staple in Polish bakeries, its layers of airy choux pastry giving way to a creamy custard filling. Here, the custard is finished with cream instead of the usual butter and the untraditional addition of a juicy cherry compote delivers a bright hit of fruit flavor amidst the richness, making this a total showstopper.

## Ingredients
- 9 3/4 ounces/275 grams ripe sweet cherries, halved and pitted (about 2 cups)
- 3 tablespoons granulated or caster (superfine) sugar
- 1 tablespoon cornstarch
- 2 teaspoons lemon juice
- 1 large egg
- 1 large egg yolk
- 1/2 cup/100 grams granulated or caster (superfine) sugar
- 3 tablespoons cornstarch
- 1 tablespoon vanilla extract
- Pinch of fine sea salt
- 1 1/2 cups/360 milliliters whole milk
- 9 tablespoons/126 grams cold unsalted butter, cut into 1 1/2-inch pieces
- ½ cup/120milliliters heavy cream
- 4 tablespoons/55 grams unsalted butter
- 1 teaspoon granulated sugar or caster (superfine) sugar
- 1/4 teaspoon fine sea salt
- 3/4 cup/90 grams all-purpose flour
- 1/2 teaspoon baking powder
- 3 large eggs
- Powdered sugar, for serving

## Instructions
1. Make the cherry compote: Combine the cherries, sugar and 1 tablespoon water in a saucepan. Bring to a simmer, then cover and cook for 3 minutes on low. In a small bowl, mix together the cornstarch and lemon juice. Pour into the boiling cherry liquid, then cook, stirring occasionally, until thick and shiny, 1 to 2 minutes. Pour into a clean container then leave to cool completely.
2. Start the custard: Whisk together the egg, egg yolk, sugar, cornstarch, vanilla and salt in a small saucepan until well combined, then whisk in the milk. Take care to make sure it is smooth, paying extra attention to the edges of the saucepan.
3. Cook the custard over medium heat, whisking continuously, until thickened, about 5 minutes. Once boiling, turn the heat down to low and whisk for 30 seconds longer. Whisk in the cold butter pieces 1 at a time, waiting until each piece is almost completely melted before adding the next. Pour into a heatproof container and press plastic wrap or parchment paper directly against its surface to prevent a skin from forming. Once cool to the touch, refrigerate to cool completely.
4. While the custard chills, make the choux: Heat the oven to 425 degrees. Line the bottoms of two 8-inch round cake pans with parchment paper. If you only have one pan, fill and bake one at a time.
5. In a medium saucepan, combine the butter, sugar, salt and 1/2 cup/120 milliliters water. Heat over medium until all the butter has melted and the mixture is just simmering. Adjust the heat to low, then sift over the flour and baking powder. Immediately stir to form a very thick paste. Raise the heat to medium and continue stirring for 30 to 60 seconds. The mixture should be dry and leave a crusty film in the pan.
6. Transfer to the bowl of a stand mixer and leave to cool for 10 to 15 minutes, stirring every now and again to help the steam release. Using the paddle attachment, beat in the eggs one by one, mixing until completely smooth and combined each time. (Or, beat in the eggs by hand.)
7. Divide the mixture evenly between the prepared pans (200 to 225 grams per pan) and spread with an offset spatula or spoon, leaving the tops slightly rough and wavy.
8. Bake for 20 minutes, then turn the oven down to 400 degrees and bake until well peaked, golden and crisp, 15 to 20 minutes more. Leave to cool completely in the pans on a cooling rack.
9. Assemble the karpatka: Once cool, remove the less wiggly choux from the pan. If you have an 8-inch springform pan, use it for assembly to make removal easier later, lining the bottom and sides with parchment. Otherwise, use the pan from which you removed the choux. The bottom should still be lined; replace the bottom parchment if needed then line the sides with parchment so it extends an inch above the rim. Place the choux in the lined pan bottom side down. If it doesn’t have a flat bottom, gently press the choux down flat against the pan. This is your base and where you’ll build the karpatka.
10. Finish the custard: In a large bowl, beat the cooled custard with a spatula until smooth and shiny. In a separate bowl, whisk the cream until it forms soft peaks. When a spoonful of the whipped cream is picked up and flopped back down into the bowl, the cream should just about hold its own weight. It is important to not overwhip the cream before folding it into the custard or it will end up grainy. Fold the whipped cream into the custard in two batches by scraping around the sides of the bowl and then through the middle while rotating the bowl to maintain the airiness of the cream until evenly incorporated. The custard will be thick and shiny.
11. To build the karpatka: Spread about two-thirds of the custard onto the choux base, followed by all of the cooled cherry compote. Flip the second choux over so the bottom is facing up and fill any deep craters with cream. Spread any remaining cream on top of the cherries. Turn the top choux right side up and place it, flat side down, on top of the cream and cherries. Press it down gently to adhere then leave the karpatka to set in the refrigerator for at least 2 hours and up to 2 days.
12. Remove the karpatka from the tin and slide it onto a plate (removing the bottom paper) then dust with powdered sugar just before serving.

## Tags
- all-purpose flour
- cherry
- cornstarch
- egg
- heavy cream
- make-ahead
- milk
- party
- polish
- vegetarian

## Notes
`,rf=`---
title: "Chewy Brown Butter Cookies"
source: "https://cooking.nytimes.com/recipes/1026187-chewy-brown-butter-cookies?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Genevieve Ko"
yield: "Makes 1 dozen"
prep_time: "PT5M"
cook_time: "PT1H30M"
total_time: "PT1H35M"
categories:
  - easy
  - dessert
tags:
  - brown butter
  - cookie
  - freezer friendly
  - light brown sugar
  - make-ahead
  - maple syrup
  - pecan
  - rolled oat
  - fall
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2024/10/29/multimedia/KOrex-chewy-brown-butter-cookiesrex-mhzb/KOrex-chewy-brown-butter-cookiesrex-mhzb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chewy Brown Butter Cookies

> Source: https://cooking.nytimes.com/recipes/1026187-chewy-brown-butter-cookies?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Chewy, yes, but these big cookies still have that essential crisp ring around the edge and also include crunchy bits of pecans throughout. Cooked in browned butter, the nuts take on a toasty depth and taste even richer if you start with Elliot pecans, a sweeter, fattier variety grown primarily in Georgia. It’s worth seeking out very dark maple syrup too, which is labeled as such. Intense and complex, it’s ideal for baking because it’s strong enough in taste to act as a seasoning. Even with standard pecans and other shades of syrup, these thoughtfully salted cookies come out caramelly.

## Ingredients
- 8 tablespoons/114 grams unsalted butter, room temperature
- 1 cup/112 grams chopped pecans
- 1 3/4 cups/166 grams old-fashioned rolled oats
- 1 teaspoon fine salt
- 3/4 cup/98 grams all-purpose flour
- 1/4 teaspoon baking soda
- 1 cup/175 grams packed light brown sugar
- 1 large egg
- 2 tablespoons/35 grams pure maple syrup, preferably very dark
- Flaky or coarse salt, for sprinkling

## Instructions
1. Melt 2 tablespoons/28 grams butter in a large saucepan over medium heat, stirring until the milk solid bits are tan and smell toasty, 3 to 5 minutes total.
2. Add the pecans and stir until the milk solid bits are dark brown and the nuts smell toasty, 2 to 3 minutes. Turn off the heat and stir in the oats and salt until the oats have soaked up the butter. Cool until ready to use.
3. Whisk the flour and baking soda in a small bowl; set aside. Using a stand mixer fitted with the paddle or a large bowl and wooden spoon, beat the brown sugar and remaining 6 tablespoons/86 grams butter until the mixture looks like a mound of wet sand. Add the egg and maple syrup and beat until evenly blended in.
4. Add the flour mixture and mix on low speed (or gently by hand) just until incorporated, then add the pecan-oat mixture, being sure to scrape in all the salt and bits from the pan. Mix until evenly dispersed.
5. Form the dough into 12 even balls using an ice cream or large cookie scoop (or your hands). Place on a large plate (it’s OK if they’re touching) and refrigerate until firm, at least 30 minutes. The dough can be chilled, covered or in an airtight container, for up to 3 days, or frozen for up to 1 month.
6. When ready to bake, heat the oven to 350 degrees. Line 1 large or 2 regular baking sheets with parchment paper. Arrange the cold dough balls 3 inches apart on the prepared sheet(s) and flatten slightly if chilled for longer than an hour. Sprinkle the tops with flaky salt.
7. Bake until golden brown around the edges, 15 to 18 minutes. (If baking from frozen, the cookies will need a few more minutes). Cool completely on the sheets. The cookies will keep in an airtight container for up to 5 days at room temperature or up to a month in the freezer.

## Tags
- brown butter
- cookie
- freezer friendly
- light brown sugar
- make-ahead
- maple syrup
- pecan
- rolled oat
- fall
- American

## Notes
`,lf=`---
title: "Chewy Earl Grey Sugar Cookies"
source: "https://cooking.nytimes.com/recipes/1022535-chewy-earl-grey-sugar-cookies?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yossy Arefi"
yield: "About 20 cookies"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dessert
tags:
  - earl grey tea
  - freezer friendly
  - make-ahead
  - sugar cookie
cuisine: ""
image: "https://static01.nyt.com/images/2021/09/23/dining/ya-chewy-earl-grey-sugar-cookies/merlin_194732559_955be33c-82ea-4611-b9a3-66f3cfaa37f8-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chewy Earl Grey Sugar Cookies

> Source: https://cooking.nytimes.com/recipes/1022535-chewy-earl-grey-sugar-cookies?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Floral and citrusy Earl Grey tea livens up these chewy sugar cookies. Instead of adding the leaves to the dough, the tea is steeped in melted butter for maximum flavor. If you are using loose leaf tea instead of tea from bags, use a mortar and pestle or spice grinder to finely grind it before adding it to the butter. Try adding a handful of chopped chocolate shards to the dough to make these cookies even more special.

## Ingredients
- 1 1/4 cups/250 grams granulated sugar
- 14 tablespoons/198 grams unsalted butter
- 1 tablespoon finely ground Earl Grey tea leaves, from about 3 tea bags
- 1/2 cup/100 grams light brown sugar
- 3/4 teaspoon kosher salt (such as Diamond Crystal)
- 1/2 teaspoon finely grated orange zest
- 1 large egg
- 2 teaspoons vanilla extract
- 2 1/2 cups/320 grams all-purpose flour
- 1/2 teaspoon baking powder
- 1/2 teaspoon baking soda

## Instructions
1. Heat oven to 350 degrees and line two half-sheet pans with parchment paper. Put 1/2 cup/100 grams granulated sugar in a small bowl or shallow dish and set aside.
2. Combine the butter and tea leaves in a small saucepan set over medium heat. Melt the butter, stirring occasionally, until it just begins to sizzle around the edges. Remove from the heat and let cool for 5 minutes.
3. Add the tea butter to a large bowl, then add brown sugar, salt, orange zest and remaining ¾ cup/150 grams granulated sugar. Use an electric mixer on medium speed or a whisk to combine for about 30 seconds; the mixture will be grainy and separated. Add the egg and vanilla, and mix until combined and smooth, about 30 seconds.
4. Add the flour, baking powder and baking soda to the bowl, and mix on low speed or with a rubber spatula until just combined. Use the spatula to scrape the sides and bottom of the bowl to ensure the dough is evenly mixed.
5. Use a 2 tablespoon cookie scoop to portion the cookies. Alternatively, measure 2 tablespoons of dough with a measuring spoon. Roll each dough ball in the reserved granulated sugar, then place on the baking sheets 2 inches apart.
6. Bake the cookies until set, light golden around and crackled on top, 16 to 19 minutes, rotating the sheets from top to bottom and front to back in the oven halfway through the baking time. Remove cookies from the oven and let cool on the baking sheets. Store extra cookies in an airtight container at room temperature for up to 3 days, or for a few weeks in the freezer.

## Tags
- earl grey tea
- freezer friendly
- make-ahead
- sugar cookie

## Notes
`,cf=`---
title: "Chicken and Herb Salad With Nuoc Cham"
source: "https://cooking.nytimes.com/recipes/1022445-chicken-and-herb-salad-with-nuoc-cham"
author: "Yewande Komolafe"
yield: "4 servings"
prep_time: "PT30M"
cook_time: ""
total_time: "PT35M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - main course
tags:
  - cabbage
  - chicken
  - nuoc cham
  - salad
cuisine: ""
image: "https://static01.nyt.com/images/2021/07/30/dining/yk-chicken-herb-salad/yk-chicken-herb-salad-videoSixteenByNineJumbo1600-v3.jpg"
date_saved: "2026-04-16"
---

# Chicken and Herb Salad With Nuoc Cham

> Source: https://cooking.nytimes.com/recipes/1022445-chicken-and-herb-salad-with-nuoc-cham

## Description
Nuoc cham, a Vietnamese sauce bright with lime juice and chile, is tossed into this simple, satisfying salad to give it a salty-sweet finish. Thinly sliced bell pepper and shaved cabbage provide crunch, while meat pulled from a store-bought rotisserie chicken — or any leftover chicken — soaks up the dressing. Serve this by itself, or alongside steamed rice or room-temperature cooked rice vermicelli.

## Ingredients
- 2 tablespoons granulated sugar
- 1 garlic clove, minced
- 1 bird’s-eye chile or other small hot chile, minced with seeds
- 1/4 cup fresh lime juice (from 2 limes)
- 3 tablespoons fish sauce
- 3 loosely packed cups chicken meat (12 ounces, pulled from store-bought rotisserie chicken or roast chicken)
- 2 cups thinly sliced red or green cabbage
- 1 small English cucumber, thinly sliced (about 1 1/2 cups)
- 1 medium bell pepper (any color), thinly sliced
- 1 1/2 cups peppery leafy greens, such as watercress with tender stems, arugula or mizuna
- 1 loosely packed cup Thai or sweet basil leaves
- 1 loosely packed cup mint leaves
- 1/2 cup crispy fried shallots or onions, store-bought or homemade

## Instructions
1. In a large bowl, combine the sugar and 1/4 cup water. Whisk to dissolve the sugar. Add the garlic, chile, lime juice and fish sauce. Stir to combine.
2. Add the chicken, cabbage, cucumbers and bell pepper to the dressing. Toss to coat. Add the leafy greens and the basil and mint leaves. Toss to combine.
3. Divide the salad among bowls, garnish with the crispy shallots and serve immediately.

## Tags
- cabbage
- chicken
- nuoc cham
- salad

## Notes
`,df=`---
title: "Chicken Manchurian"
source: "https://cooking.nytimes.com/recipes/1023892-chicken-manchurian?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Zainab Shah"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - weeknight
  - poultry
  - main course
tags:
  - chicken breast
  - chile
  - cornstarch
  - egg
  - ketchup
  - Chinese
  - Indian
  - Pakistani
cuisine: "chinese, indian, pakistani"
image: "https://static01.nyt.com/images/2023/03/10/multimedia/zs-chicken-manchurian-hqkz/zs-chicken-manchurian-hqkz-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chicken Manchurian

> Source: https://cooking.nytimes.com/recipes/1023892-chicken-manchurian?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A stalwart of Desi Chinese cooking, chicken Manchurian is immensely popular at Chinese restaurants across South Asia. Nelson Wang, a third generation Chinese chef who was born in Kolkata (formerly Calcutta), is credited with inventing the dish in Mumbai in the 1970s. This recipe comes from attempts at recreating the version served at Hsin Kuang in Lahore, Pakistan, in the late ’90s. At restaurants it’s almost always served on a sizzler platter, the tangy, sweet-and-sour sauce bubbling and thickening on its way to the table. Making it at home doesn’t compromise any of the punchy flavors. Velveting the chicken in egg and cornstarch means it’ll stay tender through the short cooking process; bell pepper and spring onions add freshness and crunch to the otherwise intense flavors from ketchup and chile-garlic sauce.

## Ingredients
- 1 egg
- 4 tablespoons plus 1 teaspoon cornstarch
- 1 teaspoon garlic paste or freshly grated garlic
- 1 teaspoon black pepper
- Fine sea salt
- 1 1/2 pounds boneless, skinless chicken breast, cut into 3/4-inch cubes
- 1/3 cup vegetable oil
- 3 whole dried dundicut chiles or bird’s-eye chiles
- 1/2 cup ketchup
- 1/4 cup chile-garlic sauce
- 2 tablespoons light soy sauce (or regular soy sauce)
- 1 cup chicken stock (optional)
- 1 bell pepper, halved, seeded and cut into 3/4-inch pieces
- 3 spring onions or 1 medium scallion, trimmed and thinly sliced
- Cooked white rice or fried rice, for serving

## Instructions
1. Velvet the chicken: In a medium bowl, whisk the egg. Continue whisking and gradually add 4 tablespoons of cornstarch until there are no lumps. Stir in garlic, black pepper and 1/2 teaspoon salt. Add the chicken pieces and stir until well coated. Cover and set aside for 30 minutes.
2. In a large wok or deep, high-sided skillet, heat oil on medium for 45 seconds. Add chicken (in batches, if necessary to avoid crowding) and cook until it starts turning white, 1 to 2 minutes. Flip the pieces and continue cooking until the chicken starts to turn golden, 2 to 3 minutes. Using a slotted spoon, remove chicken and set aside.
3. Add dried chiles and cook on medium for about 1 minute, stirring occasionally.
4. Meanwhile, in a small bowl, stir together ketchup, chile-garlic sauce, soy sauce, ½ teaspoon salt and, if using, chicken stock (if not using chicken stock, stir in 1 cup water). Add to mixture in pan along with bell pepper and stir to combine.
5. Separately, mix the remaining 1 teaspoon cornstarch with 1/4 cup water until smooth. Stir it into the wok and simmer until the sauce thickens and starts to turn glossy, 3 to 4 minutes. Add chicken and stir to combine. Top with spring onions. Serve with rice.

## Tags
- chicken breast
- chile
- cornstarch
- egg
- ketchup
- Chinese
- Indian
- Pakistani

## Notes
`,hf=`---
title: "Chicken With Peas and Mint"
source: "https://cooking.nytimes.com/recipes/775244489-chicken-with-peas-and-mint?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Carolina Gelen"
yield: "4 servings"
prep_time: "PT0H5M"
cook_time: "PT0H30M"
total_time: "PT0H35M"
categories:
  - Poultry
  - Dinner
  - Main Course
tags:
  - Chicken Thigh
  - Frozen Pea
  - Chicken Broth
  - Mint
  - Skillet
  - Cast Iron
  - Easy
  - One Pot
  - Weeknight
  - Spring
  - Quick
  - Budget
  - Pan-Fry
  - Dairy-Free
  - Gluten-Free
  - Broil
  - Healthy
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/03/multimedia/CG-One-Skillet-Chicken-with-Peas-and-Mint-qhpg/CG-One-Skillet-Chicken-with-Peas-and-Mint-qhpg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chicken With Peas and Mint

> Source: https://cooking.nytimes.com/recipes/775244489-chicken-with-peas-and-mint?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Crispy, golden chicken thighs, nesting among brothy mashed peas and showered in fresh mint leaves, make an irresistible one-skillet dinner. The recipe starts by partially cooking the thighs in a cast-iron skillet, extracting their savory schmaltz, which becomes the foundation for the peas. A reliable freezer staple, frozen peas are simmered alongside sweet, slightly charred shallots in chicken stock, with the seared thighs nestled into the mixture until everything cooks through. For a silky bite, some of the peas get mashed and stirred in the broth, slightly thickening the mixture. Pop the skillet under the broiler to crisp up the chicken skin, top with fresh mint leaves and a splash of vinegar for brightness, and dinner is done. Serve as is or with some crusty, toasted bread, chewy pearled couscous, or boiled-then-seared potatoes on the side to soak up all those flavors. Anything hearty and starchy would make a lovely pairing.

## Ingredients
- 2 pounds bone-in, skin-on chicken thighs
- Salt and black pepper
- 2 tablespoons extra-virgin olive oil
- 2 shallots, thinly sliced
- 2 (12-ounce) bags frozen peas
- 2½ cups chicken stock
- 6 garlic cloves, crushed and peeled
- 2 tablespoons rice vinegar
- ½ cup fresh mint leaves

## Instructions
1. Pat dry the chicken on all sides using a paper towel. Season with salt and pepper on all sides.
2. To a 12-inch cast-iron skillet over medium-high heat, add the oil. Place the chicken skin-side down and cook, undisturbed, for 6 minutes, until the skin is lightly golden and crispy.
3. Flip the chicken. Add the shallots to the skillet. Cook, stirring the shallots occasionally, until softened and beginning to brown, about 4 minutes. Transfer the chicken to a plate.
4. To the skillet, still on medium-high, add the peas, chicken stock and garlic. Season with a generous pinch of salt and a few cracks of black pepper. Cover and bring to a vigorous simmer. Nestle the chicken, skin-side up, among the peas. Partially cover with a lid and simmer for 15 minutes.
5. Reduce the heat to medium. Scoop out about 1½ cups of peas and garlic using a measuring cup. Using a mortar and pestle (or potato masher), carefully crush into a coarse paste. Transfer the crushed peas to the skillet and stir into the remaining peas to thicken. (Alternatively, crush the peas against the edge of the skillet, using a wooden spoon or spatula, for similar results.)
6. Place an oven rack underneath the broiler. Set the broiler to high. Place the skillet in the oven and broil for 5 minutes, until the chicken skin is crispy.
7. Drizzle the vinegar over the peas, sprinkle the mint leaves all over and serve.

## Tags
- Chicken Thigh
- Frozen Pea
- Chicken Broth
- Mint
- Skillet
- Cast Iron
- Easy
- One Pot
- Weeknight
- Spring
- Quick
- Budget
- Pan-Fry
- Dairy-Free
- Gluten-Free
- Broil
- Healthy

## Notes
`,uf=`---
title: "Chile Crisp Cheese Crackers"
source: "https://cooking.nytimes.com/recipes/1027668-chile-crisp-cheese-crackers"
author: "Helen Goh"
yield: "About 25 crackers"
prep_time: "PT10M"
cook_time: "PT1H30M"
total_time: "PT1H40M"
categories:
  - crackers and chips
  - appetizer
tags:
  - chile crisp
  - egg yolk
  - food processor
  - make-ahead
  - parmesan
  - party
  - scallion
  - sesame seed
  - valentine’s day
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/02/11/multimedia/09FD-VALENTINE-BAKINGREX-JM-Chile-Crisp-Cheese-Crackers-ljmc/09FD-VALENTINE-BAKINGREX-JM-Chile-Crisp-Cheese-Crackers-ljmc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Chile Crisp Cheese Crackers

> Source: https://cooking.nytimes.com/recipes/1027668-chile-crisp-cheese-crackers

## Description
With its complex, savory flavors, chile crisp can be used in so many ways — as a condiment, a marinade, a dipping sauce. As it turns out, it also adds a fantastic spicy kick to these cheese crackers, from my cookbook “Baking and the Meaning of Life” (Abrams, 2025). Chile crisp’s umami richness complements the buttery dough and sharp cheese so well, and adds an appealing crunch to the biscuits. Serve these with drinks and watch them disappear.

## Ingredients
- 2 tablespoons black or white sesame seeds (or a combination)
- 1 cup plus 3 tablespoons/150 grams all-purpose flour
- 2/3 cup/70 grams finely grated Parmesan
- 1 teaspoon granulated sugar
- ¾ teaspoon fine sea salt
- 6 tablespoons/80 grams unsalted butter, cold and diced
- 2 tablespoons chile crisp (with as little oil as possible; see Tip), store-bought or homemade
- 1 large egg yolk
- 1½ teaspoons lemon juice
- 1/2 cup/40 grams thinly sliced scallions (from 2 to 4 scallions)

## Instructions
1. Place the sesame seeds on a baking sheet and set aside.
2. Place the flour, Parmesan, sugar and salt in a food processor and pulse a few times to combine. Add the butter and process until the mixture is crumbly, then add the chile crisp, egg yolk and lemon juice. Pulse until the mixture is the consistency of wet sand, then tip it into a large bowl and add the scallions. Stir to incorporate, then knead gently to form a ball.
3. On a clean work surface, roll the dough into a log that’s about 10 inches long and 1½ inches in diameter. Place the log on the sheet with the sesame seeds, then roll the log until it is covered in the seeds. Wrap the log in plastic wrap and refrigerate for 30 minutes. Don’t worry if the dough is slightly soft and misshapen for now.
4. After the stint in the fridge, remove the dough and, without removing the plastic wrap, roll it into a more even log, then refrigerate until firm — about 45 minutes (or up to 3 days).
5. When ready to bake, line a baking sheet with parchment paper and heat the oven to 350 degrees.
6. Slice the log into coins that are 1/3 inch thick and place them 1 inch apart on the lined baking sheet. If they break, just smoosh them back together. Bake for about 20 minutes, until golden brown. The bottoms of the crackers will be a deeper reddish-brown from the chile oil as well as the direct contact with the heat of the sheet — this is as it should be.
7. The crackers are soft when warm, but will crisp up when they cool down.

## Tags
- chile crisp
- egg yolk
- food processor
- make-ahead
- parmesan
- party
- scallion
- sesame seed
- valentine’s day
- vegetarian

## Notes
`,pf=`---
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
`,gf=`---
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
`,mf=`---
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
`,ff=`---
title: "Classic Kouign-Amann"
source: "https://cooking.nytimes.com/recipes/1023855-classic-kouign-amann?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "1 (12-inch) kouign-amann"
prep_time: ""
cook_time: ""
total_time: "PT8H30M"
categories:
  - breakfast
  - brunch
  - snack
  - pastries
  - project
  - dessert
tags:
  - cardamom
  - clove
  - ground cinnamon
  - ground ginger
  - instant yeast
  - orange zest
  - unsalted butter
  - French
cuisine: "french"
image: "https://static01.nyt.com/images/2023/01/25/multimedia/20komolaferex-kouign-jcbg/20komolaferex-kouign-jcbg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Classic Kouign-Amann

> Source: https://cooking.nytimes.com/recipes/1023855-classic-kouign-amann?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A yeast-risen pastry with soft layers, deep buttery flavor and a chewy, caramelized top, this recipe, adapted from Nicolas Henry of the Montreal patisserie Au Kouign-Amann, celebrates the classic Breton kouign-amann, traditionally made as a round skillet cake and served as slices. There’s no shortcut and no substitute for the repetition needed to perfect this pastry. But you are in good hands: The process is a series of simple steps, with plenty of opportunities to make ahead. And the results of your efforts are sure to please, whether it accompanies your morning coffee, serves as a delightful afternoon snack or stunningly ends a meal. You’ll need an oven-safe nonstick skillet for this cake. A cast-iron skillet will work, but will produce a deeper, more caramelized result.

## Ingredients
- 1 1/3 cups/320 grams warm water (110 degrees)
- 3 (1/4-ounce) packets/21 grams instant dry yeast
- 3 3/4 cups/495 grams all-purpose flour, plus more for work surface
- 1 1/2 teaspoons fine salt (such as Morton’s table salt), plus more for sprinkling
- 1/4 cup/60 grams unsalted butter, at room temperature, plus more for greasing the pan
- 2 teaspoons toasted sesame oil (optional)
- 1 3/4 cups/395 grams unsalted butter, at room temperature
- 1 1/4 cups/250 grams granulated sugar
- 1 teaspoon fine salt (such as Morton’s table salt)
- 1/2 cup/100 grams granulated sugar
- 1 tablespoon orange zest
- 1/2 teaspoon ground cinnamon
- 1/2 teaspoon ground ginger
- 2 to 3 cardamom pods, crushed
- 2 to 3 whole cloves, crushed

## Instructions
1. Make the dough: In the bowl of a stand mixer fitted with the dough hook, add the warm water and sprinkle in the yeast. Add 2 tablespoons/15 grams flour from the measured amount and stir to combine. Let stand until foamy, about 6 minutes.
2. Add the remaining flour and the salt, and, using a wooden spoon or spatula, stir the mixture just until it forms a shaggy dough. Add the butter and sesame oil (if using), and turn the mixer to the lowest speed. Mix, scraping down the dough hook as needed, until the dough is smooth and elastic, 5 minutes. Transfer the dough to a bowl or freezer bag. Cover or seal and transfer to the refrigerator. Allow the dough to slowly rise until doubled in size, 5 hours and up to 12.
3. While the dough rises, prepare the butter for lamination: In the bowl of the stand mixer fitted with the paddle attachment, mix the butter, sugar and salt on low speed until incorporated, about 3 minutes. Transfer the butter mixture to a sheet of parchment paper and, using an offset or rubber spatula, spread into a 10-inch round. Cover with another sheet of parchment, wrap and transfer to the refrigerator to chill while the dough rises.
4. Make the syrup: In a small pot over low heat, combine the sugar, 1/2 cup/110 grams water, orange zest, cinnamon, ginger, cardamom and cloves. Bring to a gentle simmer and cook for 2 minutes. Remove from the heat and allow to cool completely while the spices steep and infuse the syrup. Strain out the solids before use. At this point, the syrup can be refrigerated for up to 1 week.
5. Generously butter the bottom and sides of the inside of a 12-inch ovenproof nonstick skillet. Ladle 2 tablespoons/40 grams cooled syrup onto the bottom of the pan and swirl.
6. About 15 minutes before you’re ready to start rolling your dough, remove the butter round from the refrigerator. Transfer the dough from the refrigerator to a lightly floured work surface. Flour the top and use a rolling pin to roll the dough into a 12-inch round.
7. Unwrap the butter round and center it on the dough round. Fold 2 sides of the dough, along with the butter over itself so the dough meets in the center of the butter layer. Using your fingers, tap down lightly on the folded edges, just enough to adhere the dough to the butter. Fold the remaining 2 sides so they meet in the center, sealing the butter like an envelope. Press down on the folded edges again to adhere. At this point, you should have what looks like an 8-inch-square dough package.
8. Flour the work surface beneath the dough, and lightly flour the top of the dough. Roll the dough out into a 12-by-18-inch rectangle.
9. Fold the top short side of the dough a third of the way down the length of the dough. Fold the bottom of the dough up and over the remaining two-thirds of the dough so the short sides meet. Using your fingers, tap the folded edge just enough so it adheres. This is the first fold.
10. Turn the dough so that the short sides are parallel to you. Lightly flour the surface and top of the dough again. Roll the dough into a 12-by-18-inch rectangle. Fold the top short side of the dough one-third of the way down the length of the dough. Fold the bottom of the dough up and over the remaining two-thirds of the dough so the short sides meet. Using your fingers, tap the folded edge just enough so it adheres. This is the second fold. Return the folded dough, wrapped in a sheet of parchment, to chill in the refrigerator for 10 minutes if you find the butter is beginning to melt between steps.
11. Turn the dough so that the short sides are parallel to you. Roll the dough out into a 14-inch square. Fold the edges on the top half of the dough over in such a way that the top 2 corners meet in the center of the dough, forming what looks like a triangle at the top. Fold the bottom in such a way that the 2 corners meet in the middle. You should have a square dough with a cross cutting through the center to the edges. Roll it into a 14-inch square.
12. Lift and pull the corners in to round out the edges. Flip the dough so that the cross side is down. Pat the dough down to even out the round shape, you should have a roughly 12-inch circle at this point. Using your hand to support the bottom, transfer the dough cross-side down to the prepared skillet. Using the tip of a paring knife, poke holes, 1-inch apart, all around the dough. Ladle 2 tablespoons/40 grams of syrup over the top and spread across the surface of the dough using your fingers. Cover with a clean kitchen towel and allow to rest at room temperature until the surface springs back slightly when you press it with a finger, about 30 minutes.
13. Heat the oven to 350 degrees. Dimple the dough by pressing down all over the surface with your fingers. Bake until light golden brown, 45 minutes.
14. Flip the kouign-amann onto a board or the underside of a baking sheet without a lip. Pour 2 tablespoons/40 grams syrup over the bottom of the skillet and slide the kouign-amann back into the pan, cross side up. Brush some syrup over the top, sprinkle with a pinch of fine salt and return to the oven. Bake until you can hear the butter bubbling at the edges and the surface is golden brown, 20 to 25 minutes. Remove from the oven and let sit in the pan for 5 minutes. Run an offset spatula or a knife along the edges to release them. Set a baking rack in a baking sheet, and flip the kouign-amann onto it, brush with the remaining syrup, sprinkle the top with a pinch of fine salt, and allow to cool slightly. Slide to a serving platter with the cross side down.
15. Serve the kouign-amann in wedges while still warm. Use an offset spatula or a knife along the bottom of the pastry to release and lift each wedge from the plate. The kouign-amann will last, wrapped, at room temperature, for 1 to 2 days, or frozen for up to 2 weeks. Toast slices in a 400-degree oven for a few minutes before serving.

## Tags
- cardamom
- clove
- ground cinnamon
- ground ginger
- instant yeast
- orange zest
- unsalted butter
- French

## Notes
`,bf=`---
title: "Classic Okonomiyaki (Japanese Cabbage and Pork Pancakes)"
source: "https://cooking.nytimes.com/recipes/1020172-classic-okonomiyaki-japanese-cabbage-and-pork-pancakes?action=click&module=Global%20Search%20Recipe%20Card&pgType=search&rank=71"
author: "Kay Chun"
yield: "Two 7-inch pancakes"
prep_time: ""
cook_time: ""
total_time: "PT50M"
categories:
  - pancakes
  - project
  - appetizer
  - main course
tags:
  - cabbage
  - dashi
  - green cabbage
  - pickled red ginger
  - pork belly
  - scallion
  - Japanese
cuisine: "japanese"
image: "https://static01.nyt.com/images/2019/04/11/dining/kc-okonomiyaki/kc-okonomiyaki-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Classic Okonomiyaki (Japanese Cabbage and Pork Pancakes)

> Source: https://cooking.nytimes.com/recipes/1020172-classic-okonomiyaki-japanese-cabbage-and-pork-pancakes?action=click&module=Global%20Search%20Recipe%20Card&pgType=search&rank=71

## Description
Crisp on the outside and custardy in the center, okonomiyaki are pan-fried Japanese pancakes that traditionally feature a filling of cabbage and pork belly. Here, bacon can be substituted for the pork belly, replaced with shrimp or omitted entirely. You can find the more unusual toppings like hondashi, Kewpie mayonnaise, okonomi sauce and dried bonito at any Japanese market. Similar to Worcestershire sauce but sweeter and less salty, the okonomi sauce is combined with Kewpie mayonnaise and umami-rich bonito flakes for a playful topping. This adaptable recipe is a great way to use up leftovers or other vegetables, such as shredded carrots, bean sprouts or chopped snap peas.

## Ingredients
- 1 teaspoon hondashi (bonito soup stock) or instant dashi
- 2 large eggs
- 3/4 cup all-purpose flour
- 1 1/2 teaspoons kosher salt
- 1/2 teaspoon baking powder
- 1/4 teaspoon baking soda
- 4 cups finely shredded green cabbage (about 1/2 pound)
- 1 cup thinly sliced scallions (about 5 scallions)
- 1 tablespoon drained pickled red ginger (or finely chopped pickled sushi ginger)
- 1/4 cup safflower or canola oil
- 3 ounces sliced pork belly or bacon, cut crosswise into 5-inch pieces
- Okonomi sauce, Kewpie mayonnaise, dried shaved bonito and shredded nori, for serving

## Instructions
1. In a large bowl, combine hondashi with 1 cup water and whisk until dissolved. Whisk in eggs until well combined. Add flour, salt, baking powder and baking soda and whisk until smooth. Fold in cabbage, scallions and ginger until well incorporated.
2. In an 8-inch nonstick skillet, heat 2 tablespoons oil. Add half the batter, spreading cabbage mixture into an even 6-inch round about 1-inch thick (resist the urge to push down on the mixture). Arrange half the pork belly over the cabbage, slightly overlapping. Cook over medium-low until pancake is set and golden brown underneath, 8 to 10 minutes. Reduce heat to low and carefully flip pancake by inverting onto a plate then slipping back into the skillet.
3. Cook until golden brown on second side, pancake is cooked through in center and pork is lightly golden, about 8 minutes. Transfer pancake, pork side up, onto a large plate. Wipe out skillet and repeat with remaining oil, batter and pork belly.
4. Drizzle pancakes with okonomi sauce and Kewpie mayonnaise, then top with a handful of shaved bonito and nori. Serve warm.

## Tags
- cabbage
- dashi
- green cabbage
- pickled red ginger
- pork belly
- scallion
- Japanese

## Notes
`,yf=`---
title: "Coronation Cauliflower and Chickpeas"
source: "https://cooking.nytimes.com/recipes/1027344-coronation-cauliflower-and-chickpeas?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT15M"
cook_time: "PT35M"
total_time: "PT50M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - beans
  - vegetables
  - main course
  - side dish
tags:
  - budget
  - cauliflower
  - chickpea
  - curry powder
  - dried apricot
  - great leftovers
  - greek yogurt
  - make-ahead
  - party
  - salad
  - dairy-free
  - gluten-free
  - healthy
  - vegan
  - vegetarian
  - British
cuisine: "british"
image: "https://static01.nyt.com/images/2025/09/25/multimedia/25FD-FALL-PARTY4-coronation-cauliflower-cmzv/25FD-FALL-PARTY4-coronation-cauliflower-cmzv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Coronation Cauliflower and Chickpeas

> Source: https://cooking.nytimes.com/recipes/1027344-coronation-cauliflower-and-chickpeas?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Served at a luncheon for the coronation of Queen Elizabeth II, coronation chicken (or Poulet Reine Elizabeth, as it was written on the official menu) is a salad of cold chicken coated in a creamy curry sauce. In this regal vegan take, adapted from my cookbook “Linger: Salads, Sweets and Stories” (Knopf, 2025), cauliﬂower and chickpeas step in for the chicken. While classic recipes typically feature cream and mayonnaise, coconut yogurt lightens things up and adds sweetness and a tropical tang that pairs well with the curry ﬂavor. Dried fruit is a common addition to “coronation-style” dishes, with some recipes calling for dried apricots or raisins; this one opts for the former, along with optional mango chutney for liveliness and subtle spice. This salad tastes even better the next day — and any leftovers make a stellar sandwich — so feel free to prep ahead.

## Ingredients
- 3 to 4 teaspoons curry powder (to your liking)
- 1 teaspoon garlic powder, or 1 small garlic clove, grated
- 1/4 cup extra-virgin olive oil
- 1 small head cauliﬂower (about 1 ½ pounds), cut into small ﬂorets
- 2 (15-ounce) cans chickpeas, rinsed
- Sea salt and black pepper
- 1/2 small red onion, ﬁnely diced
- 1/2 cup coconut or whole-milk Greek yogurt
- 2 tablespoons mango chutney (optional)
- 2 celery stalks, ﬁnely diced
- 12 dried apricots, ﬁnely chopped
- Juice of ½ lemon
- Handful of fresh cilantro leaves, roughly chopped
- 1/2 cup toasted sliced almonds

## Instructions
1. Heat the oven to 425 degrees.
2. In a small bowl, place the curry powder, garlic powder and ¼ cup olive oil; stir to combine.
3. Place the cauliﬂower and chickpeas on a baking sheet and pour the curry oil on top. Season with 1½ teaspoons salt and a generous amount of pepper and toss to combine.
4. Roast until the cauliﬂower is tender and golden and the chickpeas are crispy, 25 to 30 minutes.
5. Meanwhile, place the onion in a small bowl and cover with water. Let soak for 10 minutes to mellow out the raw ﬂavor and bite. Drain.
6. Transfer the cooked chickpeas and cauliﬂower (and any seasonings left on the baking sheet) to a large serving bowl. Add the yogurt, chutney (if using), celery, apricots, lemon juice, cilantro and red onion, and toss to combine. Season well with salt and pepper. (This salad can be made a day ahead and stored in an airtight container in the fridge.)
7. Top with the almonds and serve.

## Tags
- budget
- cauliflower
- chickpea
- curry powder
- dried apricot
- great leftovers
- greek yogurt
- make-ahead
- party
- salad
- dairy-free
- gluten-free
- healthy
- vegan
- vegetarian
- British

## Notes
`,kf=`---
title: "Cottage Cheese Bread"
source: "https://cooking.nytimes.com/recipes/760726543-cottage-cheese-bread?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Carolina Gelen"
yield: "10 servings"
prep_time: "PT0H5M"
cook_time: "PT2H30M"
total_time: "PT2H35M"
categories:
  - Breads
  - Snack
tags:
  - Active Dry Yeast
  - Egg White
  - Cottage Cheese
  - Bread Flour
  - Five Ingredient
  - Freezer Friendly
  - Bake
  - Vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/10/21/multimedia/CG-Cottage-Cheese-Bread-cftv/CG-Cottage-Cheese-Bread-cftv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cottage Cheese Bread

> Source: https://cooking.nytimes.com/recipes/760726543-cottage-cheese-bread?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Incorporating cottage cheese and egg whites into a classic white bread recipe delivers a tender crumb, as well as a hefty boost of protein. This versatile loaf is perfect for sandwiches, toasts and more. The process is similar to making any sandwich bread: The wet ingredients are stirred with the flour, kneaded into a smooth dough, then proofed, shaped, proofed again and baked. Whisking the cottage cheese and egg whites with the wet mixture is the only difference. This recipe is bread-machine friendly, as long as the cottage cheese and egg whites are blended until smooth before being added to the machine. Thanks to the added fat and moisture from the cottage cheese, the bread should stay moist and soft for a few days at room temperature, but freezing the sliced loaf is the best way to extend its shelf life. Simply toast frozen slices before serving. (Watch Carolina make this recipe on YouTube.)

## Ingredients
- 1 ½ teaspoons/5 grams active dry yeast
- ⅓ cup/75 grams lukewarm water
- 1 cup/250 grams egg whites (from 7 to 8 large egg whites)
- 1 cup/255 grams cottage cheese
- 4 ⅔ cups/582 grams bread flour, plus more for dusting
- 1 tablespoon kosher salt (such as Diamond Crystal) or 1 ½ teaspoons fine salt
- Oil (preferably avocado or sunflower oil), as needed

## Instructions
1. In a large mixing bowl, combine the active dry yeast and lukewarm water and set aside to hydrate.
2. In a blender or food processor, combine the egg whites and cottage cheese and blend until smooth. Add the blended mixture to the yeast mixture and whisk to combine.
3. Whisk the flour with a dry whisk in its container to remove any lumps and aerate the flour. Measure it and add it, along with the salt, to the wet ingredients. Stir to combine into a shaggy, sticky dough.
4. Dust a work surface with flour and dump the dough on it. Dust your hands with flour to prevent them from sticking to the dough (or oil your hands with a little bit of oil). Knead the dough, using a bench scraper to help lift the sticky dough from your work surface as needed, for 5 to 6 minutes, or until it starts looking smooth. You can also knead the dough until smooth using a stand mixer or bread machine.
5. Shape the dough into a ball and place it back in the mixing bowl. Cover and let rise in a warm spot for 1 hour, or until almost doubled in size.
6. Line a 9-by-5-inch or similar size loaf pan with parchment paper.
7. After the dough has doubled in size, punch it down to deflate it. Roll it into a log, then pinch the dough along the seam together. Place in the prepared pan, seam side down.
8. Let the dough sit in the loaf pan for 20 to 25 minutes, or until visibly risen and puffed up.
9. In the meantime, heat the oven to 400 degrees.
10. After the dough’s second rise, make a slit along the middle using a sharp knife or razor blade.
11. Bake for 40 to 45 minutes, or until it sounds hollow after a gentle tap on the crust. The top of the bread will brown pretty quickly. To prevent it from burning, cover loosely with a sheet of aluminum foil as soon as it turns crusty and brown.
12. Cool completely, then slice and serve. (Slices can be stored in the freezer in a ziptop bag, then toasted before serving.)

## Tags
- Active Dry Yeast
- Egg White
- Cottage Cheese
- Bread Flour
- Five Ingredient
- Freezer Friendly
- Bake
- Vegetarian

## Notes
`,vf=`---
title: "Cottage Cheese Egg Bites"
source: "https://cooking.nytimes.com/recipes/1026338-cottage-cheese-egg-bites?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Naz Deravian"
yield: "12 egg bites"
prep_time: "PT10M"
cook_time: "PT30M"
total_time: "PT40M"
categories:
  - breakfast
  - brunch
  - easy
  - quick
  - snack
  - main course
tags:
  - budget
  - cheddar
  - cottage cheese
  - egg
  - egg dish
  - freezer friendly
  - great leftovers
  - gruyère
  - make-ahead
  - monterey jack cheese
  - mozzarella
  - gluten-free
  - healthy
  - high protein
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/18/multimedia/18FD-STRETCH-EGGSREX-ND-Cottage-Cheese-Egg-Bites-cgjv/18FD-STRETCH-EGGSREX-ND-Cottage-Cheese-Egg-Bites-cgjv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Cottage Cheese Egg Bites

> Source: https://cooking.nytimes.com/recipes/1026338-cottage-cheese-egg-bites?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Egg bites are a perfect, protein-rich snack to have on hand for busy mornings. Blending eggs with cottage cheese and shredded cheese, dividing the mixture among muffin cups and baking in a water bath result in a soft, delicate texture. For the right consistency, use a blender to combine all the ingredients until just smooth and frothy. You can add any fillings that you like (leftover cooked vegetables are a great addition). Use any of the shredded cheeses suggested or a combination, and finish with a sprinkling of Parmesan if you like. The water bath creates steam, which ensures the eggs bake gently and remain fluffy (see Tip). For best results, use a silicone muffin pan, so the egg bites pop right out.

## Ingredients
- Nonstick cooking spray
- 8 large eggs
- 1 cup (8 ounces) full-fat cottage cheese
- 1 1/2 cups (6 ounces) shredded Gruyère, Cheddar, mozzarella or Monterey Jack (or a combination)
- 1/2 teaspoon kosher salt (such as Diamond Crystal)
- 1/4 teaspoon black pepper
- Raw chopped vegetables (optional), such as onion, scallions, bell pepper or spinach (or a combination)
- Cooked chopped vegetables (optional), such as mushrooms, broccoli, roasted red pepper, cauliflower, potato, sweet potato or butternut squash (or a combination)
- Cooked chopped bacon or sausage (optional)
- Finely chopped herbs (optional), such as basil, parsley, chives or cilantro
- Dashes of hot sauce (optional)

## Instructions
1. Heat the oven to 325 degrees with the rack in the center position. In a kettle or a medium saucepan, bring 3 cups of water to a boil and keep at a simmer. Thoroughly coat a 12-cup muffin pan (preferably silicone or nonstick) with nonstick cooking spray.
2. Place the eggs, cottage cheese, 1 cup of the shredded cheese, and the salt and pepper in a blender. Blend on high for 8 to 10 seconds, just until the mixture is smooth and frothy. (Don’t overblend, as too much air could make the egg bites collapse as they bake.)
3. Place the muffin pan on a sheet pan. Pour the egg mixture into the muffin cups, filling each three-quarters of the way. If using any optional mix-ins, add them on top of each cup and, using a chopstick or small spoon, gently stir them into the mixture. Top with the remaining 1/2 cup shredded cheese and transfer to the oven. Carefully pour the hot water into the sheet pan just to cover the very bottom of the muffin cups. (You can also skip the water bath; see Tip.)
4. Bake for 25 to 30 minutes, until the egg bites have set. Remove the muffin pan from the sheet pan of water in the oven and set aside for 5 minutes, then remove the bites from the pan. If using a silicone pan, they should pop right out. If not, use a butter knife or small offset spatula to run along the sides of the cups and gently lift them out. Egg bites will keep covered in the fridge for up to 3 days and in the freezer for up to 3 months. Reheat in a microwave or a 300-degree oven until warmed through.

## Tags
- budget
- cheddar
- cottage cheese
- egg
- egg dish
- freezer friendly
- great leftovers
- gruyère
- make-ahead
- monterey jack cheese
- mozzarella
- gluten-free
- healthy
- high protein
- vegetarian

## Notes
`,wf=`---
title: "Creamy Asparagus Pasta"
source: "https://cooking.nytimes.com/recipes/1022038-creamy-asparagus-pasta"
author: "Eric Kim"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - quick
  - weeknight
  - pastas
tags:
  - asparagus
  - gim
  - kelp
  - kombu
  - rigatoni
  - seaweed
  - sesame oil
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/12/multimedia/EK-Creamy-Asparagus-Pasta-kgbt/EK-Creamy-Asparagus-Pasta-kgbt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Creamy Asparagus Pasta

> Source: https://cooking.nytimes.com/recipes/1022038-creamy-asparagus-pasta

## Description
In this quick pasta dinner, umami-rich seaweed stars twice: first, in the form of dasima (dried kelp), which seasons the pasta water and sauce with seaside savor; second, as gim (roasted seaweed), which lends deep nuttiness and some salty crunch, too. The pasta finishes cooking in a blush of heavy cream and a splash of the dasima broth, transforming into a dreamy emulsion balanced by rice vinegar. In this recipe’s final moments, a rich glug of sesame oil glosses the chewy rigatoni and echoes the toasted flavor of the gim, which sings.

## Ingredients
- 20 grams gim, often labeled as roasted seaweed
- 2 (4-inch) squares dasima or kombu (dried kelp)
- 1 tablespoon kosher salt
- 1 pound rigatoni
- 1 1/2 cups heavy cream
- 1 small red onion, halved and thinly sliced
- 2 large garlic cloves, finely grated
- 1 teaspoon freshly ground black pepper, plus more to taste
- 1 teaspoon rice vinegar
- 1/2 pound asparagus, thinly sliced at an angle
- 1 tablespoon toasted sesame oil
- Flaky sea salt, for serving

## Instructions
1. Fold the gim in half and, with very sharp kitchen shears or a chef’s knife, slice into thin strips. Set aside for serving.
2. In a large pot, combine 1 dasima square with 8 cups cold tap water. Bring the water to a boil and season with the kosher salt. Tumble in the pasta and cook for half the time the package tells you is al dente. Reserve 1 cup of the pasta water. Drain the pasta, then add it back to the pot. (Discard the dasima.)
3. Add the remaining dasima square, cream, red onion, garlic, black pepper and reserved pasta water to the pasta. Bring to a boil over high heat, then immediately reduce the heat to a gentle simmer. Stirring occasionally, cook the pasta until the onion-infused cream has thickened significantly, thinly coating the noodles, 4 to 5 minutes.
4. Turn off the heat. Add the vinegar and asparagus, and stir to combine for 1 minute. The residual heat from the pasta will gently cook the asparagus to tender-crisp. Stir in the sesame oil and season with more black pepper, if desired. Divide the pasta among serving dishes, discarding the dasima, and shower with the reserved gim and sprinkle with flaky sea salt. Serve immediately, before the gim wilts and turns soggy.

## Tags
- asparagus
- gim
- kelp
- kombu
- rigatoni
- seaweed
- sesame oil
- vegetarian

## Notes
`,_f=`---
title: "Creamy Chickpea Pasta With Spinach and Rosemary"
source: "https://cooking.nytimes.com/recipes/1020529-creamy-chickpea-pasta-with-spinach-and-rosemary"
author: "Alexa Weibel"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - chickpea
  - heavy cream
  - rosemary
  - spaghetti
  - spinach
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2021/10/26/dining/aw-creamy-chickpea-pasta/aw-creamy-chickpea-pasta-videoSixteenByNineJumbo1600-v3.jpg"
date_saved: "2026-04-16"
---

# Creamy Chickpea Pasta With Spinach and Rosemary

> Source: https://cooking.nytimes.com/recipes/1020529-creamy-chickpea-pasta-with-spinach-and-rosemary

## Description
Luxurious and hearty, cheap and easy, this vegetarian pasta uses mostly pantry staples, requiring just a few fresh ingredients, like baby spinach, rosemary and heavy cream. Canned chickpeas form the foundation of the dish: They’re cooked until crisp and caramelized. Half are then saved as a garnish, while the rest are simmered until they break down and thicken the sauce. You can swap out your greens or beans, and if you want to experiment with flavor, raid your spice cabinet: Ground coriander, toasted fennel seeds, coarsely crumbled pink peppercorns or a sprinkle of smoked paprika perk up the dish.

## Ingredients
- Kosher salt
- 1/4 cup olive oil
- 1 (14-ounce) can chickpeas, rinsed and drained
- 2 teaspoons finely chopped fresh rosemary, plus more for garnish
- 1/2 teaspoon Aleppo pepper, or 1/4 to 1/2 teaspoon red-pepper flakes (optional)
- Black pepper
- 1 large shallot, finely chopped
- 2 garlic cloves, finely chopped
- 1 cup heavy cream
- 1 (6-ounce) bag baby spinach
- 12 ounces spaghetti or bucatini
- 1/2 cup finely grated Parmesan
- Lemon wedges, for serving

## Instructions
1. Bring a large pot of salted water to a boil over high.
2. In a wide, deep skillet, heat the oil over medium-high. Add the chickpeas, rosemary and Aleppo pepper, if using. Season generously with salt and pepper, and cook, stirring occasionally, until chickpeas start to caramelize at their edges and pop, 5 to 7 minutes. Using a slotted spoon, transfer about half the chickpeas to a bowl. Reserve for garnish.
3. Reduce the heat to medium, add the shallots and garlic to the skillet, and season with salt and pepper. Cook, stirring occasionally, until shallots are softened, about 3 minutes. Add the heavy cream and cook until slightly thickened, about 3 minutes. Turn off the heat, stir in the spinach and season to taste with salt and pepper.
4. Add the pasta to the boiling water and reduce the heat to medium. Cook the pasta until a couple minutes short of al dente according to package instructions, about 5 minutes. Do not drain the pasta, but using tongs, transfer the pasta directly from the pot to the spinach and cream sauce. Add 1 cup pasta cooking water and the Parmesan, and cook over medium-high, stirring vigorously with the tongs, until the sauce is thickened and the noodles are al dente, about 2 minutes. Add a splash of pasta water to loosen sauce, if needed.
5. Transfer to bowls, and top with reserved chickpeas, rosemary and black pepper. Serve immediately, with lemon wedges for squeezing on top.

## Tags
- chickpea
- heavy cream
- rosemary
- spaghetti
- spinach
- vegetarian

## Notes
`,Sf=`---
title: "Creamy Cottage Cheese Basil Pasta"
source: "https://cooking.nytimes.com/recipes/774974792-creamy-cottage-cheese-basil-pasta?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "4 to 6 servings"
prep_time: "PT0H15M"
cook_time: "PT0H20M"
total_time: "PT0H35M"
categories:
  - Pastas
  - Dinner
  - Main Course
  - Noodles
tags:
  - Cottage Cheese
  - Basil
  - Parmesan
  - Spaghetti
  - Quick
  - Stovetop
  - Weeknight
  - Budget
  - Easy
  - Vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/02/multimedia/AS-Creamy-Cottage-Cheese-Basil-Pasta-pmgq/AS-Creamy-Cottage-Cheese-Basil-Pasta-pmgq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Creamy Cottage Cheese Basil Pasta

> Source: https://cooking.nytimes.com/recipes/774974792-creamy-cottage-cheese-basil-pasta?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This one-pot pasta marries the vivid herbaceousness of pesto with the creaminess of Alfredo. Instead of heavy cream, however, this pasta’s silkiness comes from blending cottage cheese with plenty of Parmesan. You’ll want to use a high-speed blender or food processor to whirl the cheeses and greens into a smooth and glossy sauce, and if you have a scale, use it to make quick work of measuring the sauce’s ingredients.

## Ingredients
- Salt
- 1 lemon
- 8 ounces whole-milk cottage cheese (1 cup), at room temperature
- 3½ ounces grated Parmesan (1 cup), plus more for serving (see Tip)
- 2 tablespoons extra-virgin olive oil, plus more for serving
- 1 garlic clove, smashed and peeled
- 3 ounces baby spinach (3 big handfuls)
- 2½ ounces torn basil leaves (2 packed cups)
- 1 pound spaghetti or other long pasta

## Instructions
1. Bring a large pot of salted water to a boil. Meanwhile, zest and juice the lemon into a high-powered blender or food processor. Add the cottage cheese, Parmesan, oil, garlic, spinach and basil. Blend until very smooth. (in a food processor, this can take up to five minutes.)

## Tags
- Cottage Cheese
- Basil
- Parmesan
- Spaghetti
- Quick
- Stovetop
- Weeknight
- Budget
- Easy
- Vegetarian

## Notes
`,Tf=`---
title: "Creamy Vegan Cabbage Pasta"
source: "https://cooking.nytimes.com/recipes/769793550-creamy-vegan-cabbage-pasta"
author: "Nisha Vora"
yield: "4 to 6 servings"
prep_time: "PT0H15M"
cook_time: "PT0H35M"
total_time: "PT0H50M"
categories:
  - Pastas
  - Dinner
  - Main Course
tags:
  - Green Cabbage
  - Oat Milk
  - Nutritional Yeast
  - Walnut
  - Weeknight
  - Rigatoni
  - Cashew Milk
  - Winter
  - Stovetop
  - Saute
  - Boil
  - Vegan
  - Vegetarian
  - Dairy-Free
cuisine: ""
image: "https://static01.nyt.com/images/2026/01/23/multimedia/NV-Creamy-Vegan-Cabbage-Pasta-zgfk/NV-Creamy-Vegan-Cabbage-Pasta-zgfk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Creamy Vegan Cabbage Pasta

> Source: https://cooking.nytimes.com/recipes/769793550-creamy-vegan-cabbage-pasta

## Description
Green cabbage, plant-based milk, olive oil and walnuts come together in this surprisingly creamy, dairy-free pasta. When thinly sliced and sauteéd, cabbage softens into silky strands with a buttery sweetness, making it an ideal partner to mingle with pasta. To echo the rich savoriness of a classic white sauce without using cream or cheese, oat or cashew milk is mixed with olive oil, umami-rich nutritional yeast and finely ground walnuts. As it coats the pasta, the sauce naturally thickens while the cabbage practically melts into the pasta. Finish with fresh basil and lemon for a luxurious yet weeknight-friendly meal. (Watch Nisha make this recipe on YouTube.)

## Ingredients
- 1 small green cabbage (about 1½ pounds)
- 5 tablespoons extra-virgin olive oil, divided
- Kosher salt (such as Diamond Crystal) and black pepper
- 4 fat garlic cloves, sliced as thinly as possible
- 1 tablespoon fresh thyme leaves, roughly chopped
- ½ teaspoon crushed red pepper
- 1 pound bucatini (or rigatoni, see Tip)
- 1¼ cups full-fat oat milk or cashew milk (see Tip)
- ½ cup nutritional yeast
- ¾ cup walnuts (3 ounces), crushed into a coarse powder with a spice grinder or food processor (see Tip)
- 1 tablespoon fresh lemon juice
- 1 cup fresh basil, chopped or slivered
- Flaky sea salt, to finish

## Instructions
1. Bring a large pot of water to a boil for the pasta.
2. Slice the cabbage into quarters, then slice out the core. Use a mandoline or sharp knife to thinly slice or shred the cabbage to get about 10 cups of cabbage.
3. Heat a 12-inch sauté pan over medium-high with 3 tablespoons of the olive oil. Once shimmering, add the cabbage, 1 teaspoon kosher salt and lots of black pepper. Use tongs to coat the cabbage in the oil. Cook for 10 minutes, stirring just occasionally, until tender, silky and starting to brown in spots. If the cabbage browns too quickly, deglaze with a splash of water and lower the heat to medium.
4. Add the garlic, thyme and crushed red pepper, and stir frequently for 2 minutes, or until aromatic and garlic is just turning color. Remove from the heat and set aside.
5. Once the water is boiling, salt it generously (2 to 3 tablespoons kosher salt). Add the pasta and cook for the minimum time the package instructs, until barely al dente. Scoop out a ladle of pasta water, then drain the pasta and return to its pot.
6. While the pasta cooks, make the sauce: In a measuring cup, whisk together the milk, nutritional yeast, ½ teaspoon kosher salt and remaining 2 tablespoons olive oil.
7. Add the sauce and crushed walnuts to the pasta. Over medium-high heat, toss well with tongs until the pasta is well-coated in the sauce and is al dente, 1 to 2 minutes. If needed, add a splash of pasta water to help the sauce cling to the pasta. Fold in the cabbage.
8. Remove from the heat and stir in the lemon juice and a generous amount of black pepper. Serve in bowls and garnish with the basil and a pinch of flaky sea salt. Refrigerate leftovers for 3 to 5 days.

## Tags
- Green Cabbage
- Oat Milk
- Nutritional Yeast
- Walnut
- Weeknight
- Rigatoni
- Cashew Milk
- Winter
- Stovetop
- Saute
- Boil
- Vegan
- Vegetarian
- Dairy-Free

## Notes
`,zf=`---
title: "Crisp Gnocchi With Sausage and Peas"
source: "https://cooking.nytimes.com/recipes/1024164-crisp-gnocchi-with-sausage-and-peas"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT20M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - one pot
  - pastas
  - main course
tags:
  - cast iron
  - dijon mustard
  - frozen pea
  - gnocchi
  - italian sausage
  - parmesan
  - partial-access-ic
  - skillet
  - stovetop
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2023/05/16/multimedia/as-gnocchi-sausage-and-peas-lghq/as-gnocchi-sausage-and-peas-lghq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Crisp Gnocchi With Sausage and Peas

> Source: https://cooking.nytimes.com/recipes/1024164-crisp-gnocchi-with-sausage-and-peas

## Description
This quick skillet dinner combines crisp gnocchi and brawny sausage with sweet pops of peas and herbs. It tastes like spring, but it can be prepared perennially — and without any chopping or waiting for water to boil. (That’s right, you don’t need to boil the gnocchi before searing.) Draped in a combination of mustard and melted Parmesan, the dish is creamy, with a salty bite like cacio e pepe. However, if plush Alfredo is what you’re craving, you could add a splash of heavy cream along with the browned gnocchi in Step 4.

## Ingredients
- 3 tablespoons extra-virgin olive oil, plus more as needed
- 1 (12- to 18-ounce) package shelf-stable potato gnocchi
- 1 pound hot or sweet Italian sausage, casings removed
- 2 cups/10 ounces frozen peas (no need to thaw)
- 1 tablespoon Dijon mustard
- 1/2 cup/1 ounce grated Parmesan, plus more for serving
- Salt and pepper
- 1/2 cup torn dill, mint or basil leaves, plus more for serving

## Instructions
1. In a large (12-inch) nonstick or well-seasoned cast-iron skillet, heat 1 tablespoon oil over medium-high. Break up any stuck-together gnocchi and add to the skillet in an even layer. Cover and cook, undisturbed, until the gnocchi are golden brown underneath and unstuck from skillet, 2 to 4 minutes. Cook, stirring, until crisp on both sides, 2 to 3 minutes. If the gnocchi are burning instead of browning or the skillet looks dry, add more oil. Transfer to a bowl or plate.
2. Add the remaining 2 tablespoons oil to the skillet, still over medium-high. Add the sausage and break into small pieces. Cook, undisturbed, until sausage is browned, 2 to 4 minutes. Stir and cook until the sausage is cooked through, another 2 to 4 minutes.
3. Stir in the peas, mustard and 1/2 cup water and scrape up the browned bits on the skillet. (It may not look like a lot of liquid, but the peas will release some as they cook.) Simmer until the peas are cooked through, 2 to 4 minutes.
4. Add the browned gnocchi and the Parmesan; stir until the cheese has melted. Season to taste with salt and pepper, then stir in the herbs. Serve topped with more herbs, Parmesan and black pepper as desired.

## Tags
- cast iron
- dijon mustard
- frozen pea
- gnocchi
- italian sausage
- parmesan
- partial-access-ic
- skillet
- stovetop
- spring

## Notes
`,Af=`---
title: "Crispy Artichoke Pasta"
source: "https://cooking.nytimes.com/recipes/1025509-crispy-artichoke-pasta"
author: "Andy Baraghani"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT25M"
total_time: "PT35M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - artichoke heart
  - budget
  - parmesan
  - rigatoni
  - stovetop
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/08/28/multimedia/ab-spicy-buttery-artichoke-pastarex-jphz/ab-spicy-buttery-artichoke-pastarex-jphz-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Crispy Artichoke Pasta

> Source: https://cooking.nytimes.com/recipes/1025509-crispy-artichoke-pasta

## Description
Fast enough for a Tuesday night mad dash to dinner, this pantry pasta tastes more like a restaurant dish — and no one has to deal with trimming and pruning a spiky artichoke. Instead, canned artichokes are brought to the peak of their crispy potential. The key is to remove as much water from the artichokes as possible by pressing them gently with paper towels (as you would tofu). Some of the artichokes are fried in olive oil until shatteringly crisp, then the rest cook gently in more oil, along with garlic and chile flakes, to soften. They’re all mixed with pasta and Parmesan into a stunning weeknight meal.

## Ingredients
- Salt and black pepper
- 1 pound short cut pasta, such as rigatoni or gemelli
- Two (14-ounce) cans whole or quartered artichoke hearts
- 1/2 cup extra-virgin olive oil
- 4 garlic cloves, thinly sliced
- 1 teaspoon crushed red pepper flakes
- 3 tablespoons unsalted butter, cut into small pieces
- 1/2 cup finely grated Parmesan, plus more for serving
- 1/3 cup finely chopped parsley

## Instructions
1. Bring a large pot of water to a boil, then season generously with salt. Cook the pasta until a bit firmer than al dente, about 2 minutes less than listed on the package. (It’ll finish cooking in the sauce.) Reserve 2 cups of pasta water, then drain.
2. While the water comes to a boil, drain the artichokes and place on a clean kitchen towel (or paper towels). Cover with another kitchen towel (or paper towels), and gently press down to remove the excess water. Give the artichokes a rough chop.
3. Line a plate with paper towels. Set another large pot over medium-high heat, and pour in 1/4 cup oil. When the oil is hot, after 1 to 2 minutes, add one-third of the artichokes and cook, stirring occasionally, until deeply brown and crisp in most spots, 3 to 5 minutes. Using a slotted spoon, scoop out the artichokes, transfer to the lined plate and season with salt.
4. Adjust heat to medium, add the remaining 1/4 cup oil and the remaining artichokes to the pot, along with the garlic and red pepper. Season with salt and pepper and cook, stirring occasionally, until the garlic begins to soften and everything smells very good, 2 to 3 minutes.
5. Add the drained pasta and 1 1/2 cups of the pasta water and bring to a simmer, still over medium heat. (This may seem like a lot of liquid, but it will thicken when the remaining ingredients are added.) Add the butter and sprinkle in the Parmesan and continue to cook, tossing vigorously, until the cheese is melted and the sauce is creamy and clings to the pasta, 2 to 3 minutes. If the sauce looks too thick, add more pasta water, 1 to 2 tablespoons at a time. Turn off the heat and stir in the parsley. Season to taste with salt and pepper.
6. Divide among bowls or plates. Sprinkle the reserved crispy artichokes and more Parmesan on top before serving.

## Tags
- artichoke heart
- budget
- parmesan
- rigatoni
- stovetop
- vegetarian

## Notes
`,Cf=`---
title: "Crispy Bean Cakes With Harissa, Lemon and Herbs"
source: "https://cooking.nytimes.com/recipes/1021370-crispy-bean-cakes-with-harissa-lemon-and-herbs?algo=identity&fellback=true&imp_id=8636435037254635&req_id=7301829923915963&surface=cooking-search-web&variant=0_relevance_reranking"
author: "Yewande Komolafe"
yield: "4 servings (10 bean cakes)"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - lunch
  - weeknight
  - beans
  - vegetables
  - appetizer
  - main course
  - side dish
tags:
  - bean
  - cilantro
  - coriander
  - cumin
  - dill
  - egg
  - harissa
  - kid-friendly
  - lemon
  - scallion
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2020/12/06/dining/yk-crispy-bean-cakes/yk-crispy-bean-cakes-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Crispy Bean Cakes With Harissa, Lemon and Herbs

> Source: https://cooking.nytimes.com/recipes/1021370-crispy-bean-cakes-with-harissa-lemon-and-herbs?algo=identity&fellback=true&imp_id=8636435037254635&req_id=7301829923915963&surface=cooking-search-web&variant=0_relevance_reranking

## Description
This recipe embraces any beans you’ve got in your pantry. Canned beans are easiest, but fresh shelled beans can be ready to go with a quick blanching, and dried beans can be used, too, if they’ve been soaked and cooked in advance. Toss the well-drained beans with harissa (or any red chile paste), scallions, herbs, lemon zest, cornstarch and a lightly whipped egg white. (The egg white and cornstarch give these bean cakes their crispness.) Shape them into patties for frying, and slice some lemon wedges for serving. Eat the patties as a vegetarian main dish, a side to roast chicken or fish, or as a snack with a dash of harissa.

## Ingredients
- 2 (15-ounce) cans beans, such as black-eyed peas, chickpeas, pinto, kidney or black beans, drained (about 3 cups)
- 1/2 cup fresh cilantro leaves and tender stems, chopped, plus more for garnish
- 1/4 cup fresh dill, chopped, plus more for garnish
- 1/4 cup sliced scallions
- 3 tablespoons cornstarch
- 1 tablespoon harissa, plus more for serving
- 3/4 teaspoon ground coriander
- 1/2 teaspoon ground cumin
- 2 teaspoons kosher salt
- 1 teaspoon black pepper
- 1 lemon, zested and cut into wedges
- 1 egg white
- 6 tablespoons olive oil, plus more as needed
- Labneh or full-fat Greek yogurt, for serving (optional)

## Instructions
1. Place the drained beans in a large bowl and crush using a fork or your fingers until coarsely mashed. Add the cilantro, dill, scallions, cornstarch, harissa, coriander, cumin, salt and pepper. Add the lemon zest and stir to incorporate. Alternatively, you can incorporate ingredients using a food processor and pulse to combine.
2. In a small bowl, whisk the egg white until foamy and fold it into the bean mixture. Cover the mixture and refrigerate to chill slightly, at least 15 minutes, before shaping and frying.
3. Heat 3 tablespoons oil in a medium (10-inch) nonstick skillet or a well-seasoned cast-iron skillet over medium-high. Working in batches, use a 1/4-cup measure to scoop portions of the bean mixture into the oil. Using the flat surface of the cup, press each scooped portion to tightly pack and shape it into a 1/4-inch-thick patty. Cook until the bottom is golden brown, about 3 minutes. Turn using a wide spatula, and brown the other side, about 2 minutes.
4. Remove cooked cakes from oil and drain on a plate lined with paper towels or a cooling rack on a baking sheet. Repeat until all the bean mixture is used, adding the remaining oil and removing any loose bits from the skillet as necessary. Return the bowl to the refrigerator in between batches to keep the mixture chilled.
5. Serve lemon wedges alongside the crispy cakes for squeezing. Garnish with dollops of labneh, if using, additional fresh herbs and harissa for dipping.

## Tags
- bean
- cilantro
- coriander
- cumin
- dill
- egg
- harissa
- kid-friendly
- lemon
- scallion
- vegetarian

## Notes
`,Mf=`---
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
`,jf=`---
title: "Crispy Tofu and Cabbage Stir-Fry"
source: "https://cooking.nytimes.com/recipes/1022830-crispy-tofu-and-cabbage-stir-fry"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - weeknight
tags:
  - cilantro
  - coriander seed
  - green cabbage
  - red onion
  - tofu
cuisine: ""
image: "https://static01.nyt.com/images/2021/12/14/dining/as-tofu-cabbage-stir-fry/merlin_198057885_bc87e5bd-53f9-456a-b839-5ebea5093712-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Crispy Tofu and Cabbage Stir-Fry

> Source: https://cooking.nytimes.com/recipes/1022830-crispy-tofu-and-cabbage-stir-fry

## Description
This tumble of crisp tofu, charred cabbage and citrusy coriander includes a couple tricks you’ll want to employ in other dishes. The flavor of the stir-fry is propelled by using the coriander plant multiple ways: Combining coriander seeds with fresh stems and leaves — also known as cilantro — creates a range of complex but related flavors. Then there’s what might be the quickest — and your new favorite — way to cook cabbage: When large pieces of cabbage are cooked undisturbed in a hot pan, they don’t have a chance to turn to mush. Instead, the cabbage becomes sweet and crisp-tender, with a smoky edge. Eat the stir-fry with grains or noodles, like rice noodles or soba. To get vegetarian recipes like this one delivered to your inbox, sign up for The Veggie newsletter.

## Ingredients
- 1 small red onion, thinly sliced
- Kosher salt
- 1/4 cup cornstarch
- 1 (14-ounce) package extra-firm tofu, patted dry and torn into 1-inch pieces (see Tip)
- 1/4 cup neutral oil (such as canola or grapeseed), plus more as needed
- About 1 1/2 pounds green or red cabbage, cored and cut into 1-inch pieces, leaves separated
- 1 tablespoon low-sodium soy sauce or liquid aminos, plus more to taste
- 1 tablespoon coriander seeds, crushed
- 1/2 cup coarsely chopped cilantro leaves and stems
- 2 tablespoons lime juice (from 1 large lime)

## Instructions
1. In a large bowl, sprinkle the red onion with salt and stir to combine. In a medium bowl, stir together the cornstarch and 1 teaspoon salt. Add the tofu and toss to coat.
2. Heat 2 tablespoons of oil in a large (12-inch) cast-iron skillet over medium-high. Add the cabbage and cook, undisturbed, until charred underneath, 3 to 4 minutes. Stir, spread into an even layer, and cook, undisturbed, until charred in spots and crisp-tender, another 3 to 4 minutes. Stir in the soy sauce, and season with salt. Transfer to the bowl of red onions.
3. In the same skillet, heat the remaining 2 tablespoons of oil over medium-high. Add the tofu and cook until golden on all sides, 2 to 3 minutes per side, adding more oil and scraping the bottom of the pan as necessary. Remove from heat, add the coriander seeds and stir gently until fragrant and toasted, 1 to 2 minutes. Add the cabbage-onion mixture and stir to combine, then stir in the cilantro and lime juice. Season to taste with soy sauce.

## Tags
- cilantro
- coriander seed
- green cabbage
- red onion
- tofu

## Notes
`,xf=`---
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
`,Df=`---
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
`,Bf=`---
title: "Cucumber-Avocado Salad"
source: "https://cooking.nytimes.com/recipes/1022411-cucumber-avocado-salad?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT15M"
categories:
  - weeknight
  - side dish
tags:
  - avocado
  - cucumber
  - five ingredient
  - salad
  - summer
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2021/07/13/dining/as-cucumber-avocado-saladd/as-cucumber-avocado-saladd-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Cucumber-Avocado Salad

> Source: https://cooking.nytimes.com/recipes/1022411-cucumber-avocado-salad?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Crunchy cucumbers and creamy avocados are the stars of this simple five-ingredient salad. Peeling the cucumbers in alternating stripes helps them soak up seasonings while maintaining their shape. After being cut into bite-size pieces, they are combined with salt to draw out moisture, concentrating their flavor. Cubed avocado is tossed with lemon juice or vinegar to prevent browning, then everything is stirred together vigorously so that the avocado breaks down a bit to add a glossy coating. Finish with a hit of red-pepper flakes for heat, or embellish with herbs, lettuces, beans, soft-boiled eggs, feta, nuts and so on.

## Ingredients
- 2 scallions, trimmed then sliced crosswise 1/4-inch-thick
- Ice
- 1 pound cucumbers (such as 6 Persian or mini seedless, or 1 English)
- Kosher salt
- 2 very ripe avocados
- 2 tablespoons fresh lemon or lime juice, or unseasoned rice vinegar, plus more as needed
- Red-pepper flakes or hot sauce, for serving

## Instructions
1. Transfer the scallions to a small bowl of ice water to crisp.
2. Peel the cucumbers in alternating strips and trim ends. If desired, halve lengthwise and scoop out the seeds. Cut cucumbers into bite-size pieces (thin slices, 1/2-inch cubes, or smashed into irregular shapes), then transfer to a colander set in the sink. Toss with 1 teaspoon salt and set aside to drain, at least 5 minutes or up to 15.
3. When you’re ready to eat, halve the avocados and remove the pits. Using a spoon, remove the flesh from the skins, then cut the flesh into 1/2-inch cubes. Transfer to a large bowl, add the lemon juice and season with salt. Stir to combine.
4. Shake the cucumbers in the colander to get rid of any excess moisture, then transfer to the bowl with the avocado. Drain and shake the scallions in the colander. Add the scallions to the bowl.
5. Stir the salad ingredients vigorously just until the avocado breaks down a bit. The cucumbers should be glossed with avocado but the majority of the avocado pieces should still remain cubed. Season to taste with salt, lemon and red-pepper flakes or hot sauce.

## Tags
- avocado
- cucumber
- five ingredient
- salad
- summer
- vegan
- vegetarian

## Notes
`,Nf=`---
title: "Dan Dan Noodle Salad"
source: "https://cooking.nytimes.com/recipes/1027352-dan-dan-noodle-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
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
  - noodles
  - main course
  - side dish
tags:
  - bok choy
  - budget
  - chile crisp
  - chile oil
  - chinese inspired
  - corn
  - party
  - ramen noodle
  - salad
  - sesame paste
  - stovetop
  - dairy-free
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/09/25/multimedia/25FD-FALL-PARTYrex5-dandan-salad-tqwf/25FD-FALL-PARTYrex5-dandan-salad-tqwf-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Dan Dan Noodle Salad

> Source: https://cooking.nytimes.com/recipes/1027352-dan-dan-noodle-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Turns out, dan dan noodles work well as a salad, in this recipe adapted from my cookbook “Linger: Salads, Sweets and Stories to Savor” (Knopf, 2025), as the signature punchy sauce made with sesame paste and chile oil transforms nicely into an assertive dressing. Curly and chewy ramen noodles cling perfectly to the sauce, but you could really use any noodle you like, including instant noodles, udon or thick rice noodles. Adapt this salad throughout the year by adding seasonal vegetables such as mushrooms, broccoli, cauliﬂower, sugar snap peas, snow peas, spinach or green beans.

## Ingredients
- Sea salt
- 10 ounces baby bok choy (about 4)
- 10 ounces fresh or frozen ramen noodles
- 2 cups/10 ounces fresh or canned corn kernels (or thawed from frozen)
- 2 tablespoons toasted white sesame seeds
- 2 scallions, thinly sliced
- 2 tablespoons Chinese sesame paste or tahini
- 2 tablespoons chile oil or chile crisp, plus more for serving
- 1 tablespoon soy sauce or tamari
- 2 teaspoons black or rice vinegar
- 2 teaspoons sugar
- 1 garlic clove, grated
- 2 to 3 tablespoons unsweetened nondairy milk (such as soy or oat) or water

## Instructions
1. Bring a large pot of salted water to a boil.
2. Separate the white and green parts of the baby bok choy. Slice the white parts into thick pieces. Place in a colander and rinse well to remove any dirt or sediments. Drain.
3. Add the ramen to the boiling water and cook until al dente according to packet directions. About 1½ minutes before the noodles are ready, add the white parts of the baby bok choy and the corn. Just before everything is ready, throw in the green bok choy leaves and blanch until they are wilted, about 20 seconds. Drain immediately and refresh under cold running water, then leave to drain again. Let cool while you make the dressing.
4. Make the dan dan dressing: In a small bowl, whisk together the sesame paste, chile oil, soy sauce, vinegar, sugar and garlic until a chunky paste forms. Add 2 tablespoons of the milk and whisk, adding another tablespoon if needed, until the dressing is smooth and pourable. The dressing should be the consistency of cream. (The dressing can be prepared up to 2 days ahead and stored in a sealed jar or airtight container in the fridge. It will thicken up, so add a splash or two of milk or water to loosen it up before adding to the noodles.)
5. In a large shallow bowl, place the ramen noodles, greens and corn. Add the dressing and toss to coat. Top with the sesame seeds, scallions and a few drops of chile oil. Taste and season with salt if needed. Serve at room temperature.

## Tags
- bok choy
- budget
- chile crisp
- chile oil
- chinese inspired
- corn
- party
- ramen noodle
- salad
- sesame paste
- stovetop
- dairy-free
- vegan
- vegetarian

## Notes
`,Ef=`---
title: "Dan Dan Noodles"
source: "https://cooking.nytimes.com/recipes/1027503-dan-dan-noodles?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Genevieve Ko"
yield: "4 to 6 servings"
prep_time: "PT10M"
cook_time: "PT20M"
total_time: "PT30M"
categories:
  - dinner
  - weeknight
  - noodles
  - main course
tags:
  - chile crisp
  - ground pork
  - noodle
  - sesame paste
  - stovetop
  - dairy-free
  - Chinese
cuisine: "chinese"
image: "https://static01.nyt.com/images/2025/11/10/multimedia/10FD-KOREX-GK-dan-dan-noodles-vjpk/10FD-KOREX-GK-dan-dan-noodles-vjpk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Dan Dan Noodles

> Source: https://cooking.nytimes.com/recipes/1027503-dan-dan-noodles?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A specialty from Sichuan, a province in the southwest of China, vendors once balanced baskets of noodles and sauce on their shoulder poles and cried out “dan dan mian!” to hawk their wares. Dan dan refers to those bamboo shoulder poles and mian means noodles, but there’s no one way to prepare them. Nowadays in the Western diaspora, the dish is associated with a few essentials, namely chile oil and sesame paste, but another is worth adding: preserved vegetables. Salty and a little sweet with the sour oomph of fermentation, pickled mustard greens give the soothing noodles an umami zing. These noodles are especially rich with sesame, but you can adjust all of the seasonings to your taste. Toasty and salty, tangy on the cliff of funk, chewy with pops of peanut, dan dan noodles are a bowl of contentment.

## Ingredients
- 1/4 cup well-stirred Chinese sesame paste or tahini (see Tips)
- 2 tablespoons soy sauce
- 1 tablespoon sesame oil
- 1 to 2 tablespoons chile crisp, preferably Sichuanese, plus more for serving
- 2 to 3 teaspoons brown sugar
- 1/2 teaspoon Chinkiang vinegar or balsamic vinegar
- 2 tablespoons vegetable oil
- 1/2 cup ya cai (Sichuan preserved mustard greens) or other finely chopped Chinese pickled or preserved mustard vegetables (see Tips)
- 1 large garlic clove, finely chopped
- 8 ounces ground pork
- 1 tablespoon Shaoxing wine or other rice wine
- 1 tablespoon soy sauce
- 2 teaspoons tian mian jiang (sweet wheat sauce) or hoisin
- 1 pound fresh Chinese wheat noodles (see Tips)
- 8 to 12 bok choy or gai lan (Chinese broccoli), optional
- Chopped roasted, salted peanuts, ground Sichuan peppercorns and finely sliced scallions, for topping

## Instructions
1. Start the sauce: Set a large pot of water to a boil. Meanwhile, mix the sesame paste, soy sauce, sesame oil, chile crisp, brown sugar and vinegar in a large bowl. The mixture will be thick. Taste and add more chile oil or brown sugar (or other seasonings) to your liking.
2. Make the meat: Heat 1 tablespoon oil in a wok or large, deep skillet over high. Add the ya cai and cook, stirring, until softened and fragrant, about 1 minute. Scrape half into the sauce bowl. Add the remaining oil to the wok. When it’s hot, add the garlic and stir until fragrant, about 30 seconds. Add the pork and cook, smashing it into the vegetables and stirring to break it into tiny bits. When its pinkness fades after a few minutes, add the wine, soy sauce and tian mian jiang, and stir until the pork is cooked through. Keep warm over low.
3. Finish the sauce: Scoop 1/4 cup boiling water from the pot and add to the sauce. Stir until smooth. The sauce should run off the spoon. If it doesn’t, add more boiling water a tablespoon at a time.
4. Make the noodles: Drop the noodles into the pot of boiling water, stir and cook until there’s still a bite in the center, 1 to 2 minutes. Add the bok choy and cook until bright green and the noodles are just tender, about 1 minute longer. Drain and run under hot tap water to rinse excess starch off the noodles.
5. Slide the noodles and bok choy over the sauce, scrape the pork and its sauce on top, then sprinkle with peanuts and scallions if you want. Top with more chile crisp if you’d like. Mix well and enjoy immediately.

## Tags
- chile crisp
- ground pork
- noodle
- sesame paste
- stovetop
- dairy-free
- Chinese

## Notes
`,Hf=`---
title: "Easy Banana Bread"
source: "https://cooking.nytimes.com/recipes/1024420-easy-banana-bread?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Lidey Heuck"
yield: "8 servings (1 loaf)"
prep_time: "PT20M"
cook_time: "PT1H5M"
total_time: "PT1H25M"
categories:
  - snack
  - dessert
tags:
  - banana
  - banana bread
  - ck-mccormick-0526-sponsor
  - great leftovers
  - internal-open-access-search
  - make-ahead
  - sour cream
cuisine: ""
image: "https://static01.nyt.com/images/2025/12/10/multimedia/banana-bread-wpkt/banana-bread-wpkt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Easy Banana Bread

> Source: https://cooking.nytimes.com/recipes/1024420-easy-banana-bread?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This recipe makes a simple and classic banana bread — lightly spiced with a hint of cinnamon, and incredibly tender thanks to a dollop of sour cream in the batter. For best results, use very ripe bananas, but know the recipe will still work if yours are not yet at the speckly stage. While banana bread is, of course, delicious when it’s warm from the oven, the flavor and texture are actually the best on the second day (if you can wait that long). Feel free to mix 1 cup chopped walnuts or chocolate chips, or a combination, into the batter for this easy, everyday treat.

## Ingredients
- Nonstick spray, for greasing
- 2 large eggs
- 1 3/4 cups mashed bananas (about 4 medium ripe bananas)
- 1/2 cup/115 grams unsalted butter (1 stick), melted and slightly cooled
- 3/4 cup/165 grams light brown sugar, packed
- 1 teaspoon vanilla extract
- 1/4 cup/57 grams sour cream
- 2 cups/256 grams all-purpose flour
- 1 teaspoon baking soda
- 1/2 teaspoon kosher salt (such as Diamond Kosher)
- 1/2 teaspoon ground cinnamon

## Instructions
1. Heat the oven to 350 degrees. Grease an 8- or 9-inch loaf pan with nonstick spray and line the bottom with parchment paper.
2. In a large bowl, whisk together the eggs, bananas, butter, brown sugar and vanilla until smooth (a few lumps of banana are OK). Stir in the sour cream.
3. In a medium bowl, whisk together the flour, baking soda, salt and cinnamon.
4. Add the dry ingredients to the wet ingredients and mix just until the flour is fully incorporated, making sure to scrape the bottom of the bowl.
5. Transfer the batter to the prepared pan, smoothing the surface into an even layer with a spatula, and bake for 55 to 65 minutes, until a toothpick inserted into the center of the loaf comes out clean.
6. Cool for 20 minutes in the pan. Run a paring knife around the sides of the banana bread and remove the loaf, transferring it to a wire rack to finish cooling. Peel off the parchment paper before slicing. Serve warm or at room temperature. Banana bread will keep for up to 3 days, covered, at room temperature.

## Tags
- banana
- banana bread
- ck-mccormick-0526-sponsor
- great leftovers
- internal-open-access-search
- make-ahead
- sour cream

## Notes
`,Rf=`---
title: "Easy Skillet Brownies"
source: "https://cooking.nytimes.com/recipes/1024690-easy-skillet-brownies?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "8 to 12 brownies"
prep_time: "PT10M"
cook_time: "PT30M"
total_time: "PT40M"
categories:
  - easy
  - quick
  - snack
  - dessert
tags:
  - bittersweet chocolate
  - brownie
  - kid-friendly
  - one bowl
  - skillet
  - father’s day
  - mother’s day
cuisine: ""
image: "https://static01.nyt.com/images/2023/10/10/multimedia/10APPETITErex-vqjf/10APPETITErex-vqjf-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Easy Skillet Brownies

> Source: https://cooking.nytimes.com/recipes/1024690-easy-skillet-brownies?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
These simple brownies are mixed and baked in the same skillet. Chewy and fudgy, they’re everything you want in a brownie but faster and with less mess to clean up. If you don’t have an ovenproof nonstick skillet (preferably ceramic, or you could try this in a very well-seasoned cast-iron pan), pour the batter into a greased 9-inch square pan for baking. You can let the brownies cool and cut them into wedges or squares. Or, serve them warm from the oven and straight from the pan, preferably with a scoop of ice cream plopped on top.

## Ingredients
- 3/4 cup/185 grams unsalted butter
- 6 ounces bittersweet chocolate, coarsely chopped (about 1 cup)
- 1/2 teaspoon fine sea or table salt
- 1 1/2 cups/300 grams granulated sugar
- 3 large eggs
- 2 teaspoons vanilla extract
- 3/4 cup/95 grams all-purpose flour
- 3/4 cup/110 grams walnut or pecan pieces (optional)
- Flaky sea salt (optional)
- Ice cream, for serving (optional)

## Instructions
1. Heat oven to 350 degrees. In an ovenproof 10- or 11-inch nonstick skillet (preferably ceramic nonstick) set over medium-low heat, combine the butter, chocolate and salt. Let butter and chocolate melt, stirring occasionally. Turn off the heat.
2. Carefully whisk in sugar until smooth, then whisk in eggs and vanilla. Finally, whisk in flour until no streaks remain. Using a spatula, fold in the nuts, if using. Smooth top and sprinkle lightly with flaky sea salt if you like.
3. Bake until the top is set, the center is soft and the edges are firm and start to pull away from the pan, 20 to 27 minutes. (A toothpick inserted into the center will come out gooey.) Transfer to a wire rack to cool. You can serve these still a little warm and straight from the pan, with ice cream on top if you like. Or, let cool completely before slicing into wedges or bars.

## Tags
- bittersweet chocolate
- brownie
- kid-friendly
- one bowl
- skillet
- father’s day
- mother’s day

## Notes
`,qf=`---
title: "Egg and Cheese Quesadilla"
source: "https://cooking.nytimes.com/recipes/774974663-egg-and-cheese-quesadilla?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "1 to 2 servings"
prep_time: "PT0H5M"
cook_time: "PT0H5M"
total_time: "PT0H10M"
categories:
  - Quesadilla
  - Egg Dish
  - Breakfast
  - Brunch
  - Lunch
  - Main Course
  - Kid-Friendly
  - Dinner
tags:
  - Egg
  - Cheese
  - Skillet
  - Easy
  - Five Ingredient
  - One Pot
  - Quick
  - Weeknight
  - Flour Tortilla
  - For One
  - Budget
  - Stovetop
  - Vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/04/02/multimedia/AS-Egg-and-Cheese-Quesadillas-bhwj/AS-Egg-and-Cheese-Quesadillas-bhwj-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Egg and Cheese Quesadilla

> Source: https://cooking.nytimes.com/recipes/774974663-egg-and-cheese-quesadilla?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
With its soft, gooey inside and toasted outside, this egg and cheese quesadilla is as satisfying to eat as it is fun to make. The trick is to use the barely set eggs and melted cheese to secure the fillings to the tortilla, so that when it’s time to flip, the whole quesadilla cleanly moves together. As the tortilla toasts, add another round of cheese and sprinkle some on the perimeter so it melts into a crisp, brown, lacy edge. If you’d like to add chopped vegetables like peppers, onions or kale, sauté them in the butter before adding the eggs.

## Ingredients
- 2 large eggs
- Salt
- ½ tablespoon unsalted or salted butter
- Scant ½ cup grated Cheddar or Mexican cheese blend (scant 2 ounces)
- 1 (8-inch) flour tortilla

## Instructions
1. In a small bowl, beat the eggs and a pinch of salt with a fork until homogenous.

## Tags
- Egg
- Cheese
- Skillet
- Easy
- Five Ingredient
- One Pot
- Quick
- Weeknight
- Flour Tortilla
- For One
- Budget
- Stovetop
- Vegetarian

## Notes
`,Pf=`---
title: "Espagueti Verde (Creamy Roasted Poblano Pasta)"
source: "https://cooking.nytimes.com/recipes/1025909-espagueti-verde-creamy-roasted-poblano-pasta"
author: "Paola Briseño-González"
yield: "4 to 6 servings"
prep_time: "PT10M"
cook_time: "PT35M"
total_time: "PT45M"
categories:
  - dinner
  - noodles
  - pastas
  - main course
  - side dish
tags:
  - parsley
  - party
  - poblano
  - queso fresco
  - sour cream
  - spaghetti
  - vegetarian
  - Mexican
cuisine: "mexican"
image: "https://static01.nyt.com/images/2024/12/03/multimedia/PBG-Espagueti-Verde-tqvh/PBG-Espagueti-Verde-tqvh-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Espagueti Verde (Creamy Roasted Poblano Pasta)

> Source: https://cooking.nytimes.com/recipes/1025909-espagueti-verde-creamy-roasted-poblano-pasta

## Description
At weddings, baptisms and other special occasions across Mexico, pots of spaghetti coated in creamy green sauce sit on most every banquet table. Smoky with charred peppers and tangy with crema, it’s the dish everyone loves. Throughout the country, the herbs in it change — there may be epazote, cilantro or parsley — but there are always roasted poblanos. Traditionally, the chiles are pureed into a sauce to coat the pasta, but you can skip that step to highlight even more of their flavor and texture. Cream, Mexican crema and queso fresco temper any lingering heat and round out the whole dish to a tangy finish.

## Ingredients
- 6 medium poblano chiles (about 1 1/4 pounds), see Tip
- 3 tablespoons extra-virgin olive oil
- 4 garlic cloves, finely chopped
- Salt and black pepper
- 1 cup finely chopped flat-leaf parsley, plus parsley leaves for garnish
- 1/3 cup crema Mexicana or sour cream
- 1/4 cup heavy cream
- 1 pound bucatini, spaghetti or other long pasta
- 1 lemon, halved
- 4 ounces queso fresco (or other soft but firm cheese, such as ricotta salata), thinly sliced

## Instructions
1. Using tongs, set each poblano directly on the grates of a gas stovetop over a medium flame. Cook, turning occasionally, until skin is blackened on all sides, 2 to 3 minutes per side. (Alternatively, broil the poblanos on a baking sheet about 5 inches from the heat until charred, 6 to 8 minutes per side.)
2. Place charred poblanos in a large bowl; cover with a plate and let steam for 10 minutes to loosen skins. On a work surface, run the dull side of a paring knife across each chile to scrape off the blackened, papery skin. (It’s OK if a bit of the skin remains.) Discard skins, stems and seeds. Return poblanos to the bowl and rinse under cold running water. Any remaining seeds and papery skins will float to the surface. (This rinsing step, while unusual for charred chiles, helps remove almost all the bitter skin that would stand out against the creamy sauce.) Drain chiles well. Cut poblanos in half, then slice lengthwise into very thin strips.
3. Heat oil in a large Dutch oven or other large heavy-bottomed pot over medium-low. Add poblanos and garlic, and season with salt and pepper. Cook, stirring occasionally, until poblanos soften and break down, about 15 minutes. Add chopped parsley, crema and heavy cream, and stir to combine. Remove from heat and cover to keep warm if needed.
4. While poblanos cook, bring a large pot of water to a boil and season with salt. Add the pasta, give it a stir and cook until just al dente. Just before draining, reserve 1 cup pasta water.
5. Drain the pasta and transfer it to the Dutch oven with the poblano mixture, along with 1/2 cup reserved pasta water. Toss until the sauce coats the pasta evenly. If needed, add a little more of the pasta water.
6. Squeeze in juice from 1/2 lemon, taste and squeeze in the juice of the other half, if you like. Season with salt and pepper to taste. Toss one more time before serving, coating pasta with the sauce at the bottom of the pot. Serve topped with queso fresco and parsley leaves.

## Tags
- parsley
- party
- poblano
- queso fresco
- sour cream
- spaghetti
- vegetarian
- Mexican

## Notes
`,Of=`---
title: "Everything Bagel Cottage-Cheese Dip"
source: "https://cooking.nytimes.com/recipes/760134628-everything-bagel-cottage-cheese-dip?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT0H5M"
cook_time: "PT0H5M"
total_time: "PT0H10M"
categories:
  - Dips and Spreads
  - Snack
  - Breakfast
  - Appetizer
tags:
  - Cottage Cheese
  - Arugula
  - Easy
  - Quick
  - Make-Ahead
  - Caper
  - Vegetarian
  - Healthy
  - No Cook
cuisine: ""
image: "https://static01.nyt.com/images/2025/10/14/multimedia/AS-Everything-Bagel-Cottage-Cheese-Dip-pgbc/AS-Everything-Bagel-Cottage-Cheese-Dip-pgbc-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Everything Bagel Cottage-Cheese Dip

> Source: https://cooking.nytimes.com/recipes/760134628-everything-bagel-cottage-cheese-dip?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Creamy, tangy and full of pep, this quick snack brings new life to your cottage cheese. Scallions, capers and everything bagel seasoning are stirred into cottage cheese, then torn arugula is scattered on top for a peppery crunch. Scoop into it with any combination of crackers, pretzels, toast and raw vegetables like cucumbers or celery — or eat it on a toasted bagel or English muffin. A batch, minus the arugula, keeps for up to two days in the fridge, so keep it on hand for anytime you need a pick-me-up.

## Ingredients
- 16 ounces cottage cheese
- 3 scallions, thinly sliced
- 2 tablespoons drained capers
- 2 teaspoons everything bagel seasoning, regular or no-salt, plus more for serving (see Tip)
- Salt and black pepper
- 1 packed cup baby arugula
- Crackers, toast, pretzels, bagel chips or raw sliced vegetables, or a combination, for serving

## Instructions
1. In a medium bowl, stir together the cottage cheese, scallions, capers and everything bagel seasoning. Season to taste with salt and pepper. (You can refrigerate this mixture for up to two days.)
2. When ready to eat, rip the arugula into bite-size pieces and sprinkle on top of the cottage cheese, along with more everything bagel seasoning. Eat with crackers, toast, pretzels, bagel chips and/or vegetables.

## Tags
- Cottage Cheese
- Arugula
- Easy
- Quick
- Make-Ahead
- Caper
- Vegetarian
- Healthy
- No Cook

## Notes
`,Gf=`---
title: "Extra-Green Pasta Salad"
source: "https://cooking.nytimes.com/recipes/1025507-extra-green-pasta-salad"
author: "Andy Baraghani"
yield: "4 to 6 servings"
prep_time: "PT10M"
cook_time: "PT20M"
total_time: "PT30M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - main course
  - side dish
tags:
  - basil
  - make-ahead
  - miso
  - parmesan
  - pasta salad
  - pea
  - picnic
  - rigatoni
  - spinach
  - stovetop
  - sugar snap pea
  - spring
  - summer
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/06/20/multimedia/ab-extra-green-pasta-saladrex-mfqv/ab-extra-green-pasta-saladrex-mfqv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Extra-Green Pasta Salad

> Source: https://cooking.nytimes.com/recipes/1025507-extra-green-pasta-salad

## Description
This vibrant green pasta salad gets its color from a combination of spinach and basil, but you can swap the spinach for arugula for a more peppery finish. (Some of us need a little bite in our lives!). The miso in the sauce does a lot of the heavy lifting, imparting a salty, almost Parmesan-like quality. You can eat the salad immediately or chilled for a summer picnic. If making it a day ahead, don’t add the basil garnish and cheese until you’re ready to serve.

## Ingredients
- Salt and pepper
- 1 pound short-cut pasta (such as rigatoni, campanelle or fusilli)
- 3 cups/8 ounces sugar snap peas
- 1 cup frozen English peas
- 3 packed cups/3 1/2 ounces baby spinach
- 2 packed cups/1 1/2 ounces basil leaves, plus more for serving
- 1/2 cup extra-virgin olive oil
- 2 tablespoons white miso
- 1 garlic clove, crushed
- Zest and juice from 1 lemon
- 4 ounces Parmesan (or other firm salty cheese, such as feta or aged Gouda), thinly sliced

## Instructions
1. Bring a large pot of water to a boil, then throw in a handful of salt. Add the pasta, give it a stir and cook until al dente. Just before draining, add the snap peas and English peas to the boiling water to barely soften, 20 to 30 seconds. Drain the pasta and peas, and rinse lightly with cold water; set aside.
2. While the pasta water comes to a boil, place the spinach, basil, oil, miso, garlic, and lemon zest and juice in a blender. Blend to a bright green purée. Taste and adjust seasoning with salt and a few grinds of pepper, then blend again.
3. Transfer the purée to a large bowl that is big enough to toss all the pasta. Add the pasta and peas, and toss until coated. Season to taste with salt and pepper. Add the Parmesan and more basil leaves. Toss once more before serving.

## Tags
- basil
- make-ahead
- miso
- parmesan
- pasta salad
- pea
- picnic
- rigatoni
- spinach
- stovetop
- sugar snap pea
- spring
- summer
- vegetarian

## Notes
`,If=`---
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
`,Lf=`---
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
`,Uf=`---
title: "Fresh Lemon and Chile Pasta"
source: "https://cooking.nytimes.com/recipes/1025508-fresh-lemon-and-chile-pasta"
author: "Andy Baraghani"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT15M"
total_time: "PT20M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - noodles
  - pastas
  - main course
  - side dish
tags:
  - heavy cream
  - lemon
  - parmesan
  - serrano
  - spaghetti
  - stovetop
  - spring
  - summer
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/07/30/multimedia/ab-lemon-chile-pasta-hkbj/ab-lemon-chile-pasta-hkbj-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Fresh Lemon and Chile Pasta

> Source: https://cooking.nytimes.com/recipes/1025508-fresh-lemon-and-chile-pasta

## Description
This quick, deeply comforting pasta is creamy, but balanced by the zing of fresh lemon. Loosely based on Italy’s pasta al limone, this simple recipe combines butter, Parmesan and lemon juice with some reserved pasta water to form a velvety sauce that comes together in the pasta pan along with everyday heroes: garlic, green chile and some cream. To squeeze as much tang from a single lemon as possible, zest is also added to the vibrant sauce, giving the dish a wonderful, sunny scent. The lemon cuts through the richness and keeps your fork twirling for more. Serve this bright and easy pasta dish on its own to perk up a weeknight or with chicken piccata or simple roast chicken for a special dinner, ideally eaten outside in the late-setting sun.

## Ingredients
- Salt and freshly ground black pepper
- 1 pound long pasta, such as spaghetti or bucatini
- 5 tablespoons unsalted butter
- 2 garlic cloves, thinly sliced
- 1 small green chile, such as serrano, thinly sliced
- 1 lemon
- 1/2 cup heavy cream
- 2 cups finely grated Parmesan (3 1/2 ounces), plus more for serving

## Instructions
1. Bring a large pot of water to a boil, then throw in a handful of salt. Cook the pasta until a bit firmer than al dente, about 2 minutes less than package directions. (It’ll finish cooking in the sauce.) Reserve 2 cups pasta water, then drain.
2. While the water comes to a boil, add the butter to another large pot or Dutch oven and melt over medium heat. Add the garlic, chile and 1 teaspoon pepper, and cook, stirring occasionally, until the garlic has softened slightly and the whole mixture is incredibly fragrant, about 2 minutes. Zest the lemon into the pot (reserve the lemon), then pour in the heavy cream and stir to combine. Season with salt and bring to a gentle simmer over medium.
3. Add the drained pasta and 1 cup of the pasta water to the pot. Cook, tossing often with tongs while gradually sprinkling in the Parmesan, 2 to 3 minutes. The cheese will melt, and the sauce will become creamy and cling to the pasta. It should be saucy because it will thicken as it cools. If the sauce looks too thick, add more pasta water 1 to 2 tablespoons at a time.
4. Turn off the heat, and halve the zested lemon. Squeeze the juice from 1 lemon half into the pot. Taste a noodle or two and add more juice from the remaining lemon half if you’d like more tang. Season with salt and pepper as needed. Divide among shallow bowls or plates. Sprinkle with Parmesan and pepper, then pluck any chile slices clinging to the pot and serve them on top.

## Tags
- heavy cream
- lemon
- parmesan
- serrano
- spaghetti
- stovetop
- spring
- summer
- vegetarian

## Notes
`,Yf=`---
title: "Frito Pie"
source: "https://cooking.nytimes.com/recipes/1024854-frito-pie?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Kia Damon"
yield: "6 to 8 servings"
prep_time: "PT10M"
cook_time: "PT35M"
total_time: "PT45M"
categories:
  - dinner
  - easy
  - quick
  - casseroles
  - appetizer
tags:
  - cheddar
  - great leftovers
  - ground beef
  - party
  - pinto bean
  - tex mex
  - labor day
  - memorial day
  - super bowl
cuisine: ""
image: "https://static01.nyt.com/images/2024/02/01/multimedia/01fritorex-vblg/01fritorex-vblg-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Frito Pie

> Source: https://cooking.nytimes.com/recipes/1024854-frito-pie?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Not quite nachos, and not quite pie, this comforting casserole is a cheesy and crunchy delight that is thought to have roots in both Texas and New Mexico. In its most classic (and some might say best) form, a small bag of Fritos corn chips is split down the middle, placed in a paper boat and piled high with chili, topped with cheese, diced onion, pickled jalapeños, sour cream and pico de gallo, then eaten with a plastic fork. (It is often called a “walking taco,” because it’s eaten on-the-go, at sporting events and fairs.) This version is adapted to feed a crowd: The Fritos, Cheddar and chili — made with ground beef, pinto beans, taco seasoning and enchilada sauce — are layered in a casserole dish, baked, then topped with a frenzy of fun toppings. For maximum crunch, save a cup of Fritos for topping as you eat.

## Ingredients
- 1 tablespoon olive or vegetable oil
- 1 pound ground beef, preferably 20-percent fat
- 1 medium yellow onion, diced
- 1 (1-ounce) packet taco seasoning (or 3 tablespoons of a homemade taco seasoning)
- 2 (15-ounce) cans pinto beans, drained and rinsed
- 1 (19-ounce) can red enchilada sauce (or 2 1/2 cups of homemade enchilada sauce)
- 2 (9-ounce) packages or 1 (18-ounce) package Fritos, 1 cup reserved for serving (8 to 10 cups)
- 8 ounces shredded Cheddar (about 2 cups)
- Diced white onion, sliced scallions, pickled jalapeños, sour cream or pico de gallo, or a combination, for serving (optional)

## Instructions
1. Heat the oven to 400 degrees. Coat a 9-by-13-inch baking dish with cooking spray.
2. In a large Dutch oven or heavy-bottomed skillet, heat the oil over medium-high. Add the beef and onion, breaking up the meat with a wooden spoon. Cook, stirring occasionally, until the meat is browned and the onion is translucent, 8 to 10 minutes. Lower the heat if the meat is browning too quickly.
3. Sprinkle the taco seasoning over the meat mixture and pour in 3/4 cup of water; mix well. Bring to a simmer and cook until the liquid thickens and coats the pan, scraping up any browned bits, 2 to 3 minutes. Add the beans and enchilada sauce, stirring until combined. Bring to a simmer and cook for 5 minutes.
4. Assemble the pie: Sprinkle half of the Fritos in the prepared baking dish, followed by half of the Cheddar. Cover with all of the meat filling. Finally, add the remaining Fritos (minus the reserved cup) and Cheddar.
5. Bake until the cheese is melted and bubbly, 7 to 10 minutes. Rest for 5 minutes, then add the desired toppings to the casserole, or spoon into individual bowls and have eaters top as they please. Add reserved Fritos for more crunch, if desired.

## Tags
- cheddar
- great leftovers
- ground beef
- party
- pinto bean
- tex mex
- labor day
- memorial day
- super bowl

## Notes
`,Kf=`---
title: "Garlic Tahini Sauce"
source: "https://cooking.nytimes.com/recipes/1017913-garlic-tahini-sauce?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "The New York Times"
yield: "1 scant cup"
prep_time: ""
cook_time: ""
total_time: "PT10M"
categories:
  - dips and spreads
  - side dish
tags:
  - five ingredient
  - sesame tahini
cuisine: ""
image: "https://static01.nyt.com/images/2016/01/06/dining/06JPRECIPELAB2/06JPRECIPELAB2-facebookJumbo.jpg"
date_saved: "2026-04-16"
---

# Garlic Tahini Sauce

> Source: https://cooking.nytimes.com/recipes/1017913-garlic-tahini-sauce?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Many sauces complement roasted cauliflower; this one, from Martha Rose Shulman, is included in her recipe for roasted broccoli. As a matter of inspiration, it comes full circle: Ms. Shulman says she got the idea from one of her favorite Middle Eastern mezes, in which garlic tahini is served with cauliflower — deep-fried this time, rather than roasted.

## Ingredients
- 1 garlic clove, cut in half, green shoots removed
- Salt to taste
- 1/3 cup sesame tahini
- 2 to 4 tablespoons fresh lemon juice (more to taste)
- Aleppo pepper or red pepper flakes for sprinkling

## Instructions
1. In a mortar and pestle, mash the garlic clove to a purée with a generous pinch of salt.
2. Transfer to a bowl and whisk in the sesame tahini. Whisk in the lemon juice, beginning with the smaller amount. The mixture will stiffen up.
3. Gradually whisk in up to 1/3 cup water, until the sauce has the consistency of thick cream or runny yogurt. Taste and adjust salt. Sprinkle in pepper.

## Tags
- five ingredient
- sesame tahini

## Notes
`,Jf=`---
title: "Gingery Cabbage Rolls With Pork and Rice"
source: "https://cooking.nytimes.com/recipes/1021583-gingery-cabbage-rolls-with-pork-and-rice"
author: "Sue Li"
yield: "12 cabbage rolls (4 to 6 servings)"
prep_time: ""
cook_time: ""
total_time: "PT4H"
categories:
  - dinner
  - meat
  - vegetables
  - main course
tags:
  - cabbage
  - chicken broth
  - ginger
  - ground pork
  - rice
  - scallion
  - soy sauce
  - fall
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2020/12/16/dining/sl-simmered-cabbage-rolls/merlin_180213450_c6901a06-dbf1-4ee4-8d02-908a13564e4a-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Gingery Cabbage Rolls With Pork and Rice

> Source: https://cooking.nytimes.com/recipes/1021583-gingery-cabbage-rolls-with-pork-and-rice

## Description
These fork-tender cabbage rolls, filled with savory pork, rice and ginger, are the ultimate comfort food — perfect to serve as a cozy meal on a cold night. When assembling the rolls, you can simply fold the cabbage leaf onto itself as you would fold a burrito — and don’t worry if the cabbage leaves tear. If there are any leftovers, reheat them with more chicken broth. They are good the day they are made, but even better the next day.

## Ingredients
- Kosher salt and black pepper
- 1 medium head savoy cabbage
- 1 1/2 pounds ground pork
- 1/3 cup uncooked short-grain white rice
- 1 large egg, lightly beaten
- 6 scallions, finely chopped (about 1 cup)
- 2 tablespoons finely chopped fresh ginger (from a 2-inch piece)
- 2 tablespoons soy sauce
- 2 cups chicken broth
- Sesame oil, for serving

## Instructions
1. Heat oven to 350 degrees. Bring a large pot of water to a boil and season with salt.
2. Prepare the cabbage: Remove about 12 large outer leaves, reserving the rest of the cabbage for another use. Once the water boils, lower the heat to medium so that the water reaches a gentle boil. Add the cabbage leaves, about 4 at a time, and cook until tender and flexible but leaves remain intact and maintain their crunch, about 2 minutes. Transfer to a towel-lined plate and set aside to cool slightly while you make the filling. Repeat with remaining cabbage leaves.
3. Prepare the filling: In a large bowl, combine pork, rice, egg, scallions, ginger and soy sauce with 2 teaspoons salt and 1 teaspoon pepper.
4. Assemble the cabbage rolls: Working with one cooked cabbage leaf at a time, place it on a cutting board or other flat surface with its stem end at the bottom. Spoon a heaping 1/4 cup of the pork mixture in the center and mold the mixture into a rough 2- to 3-inch log. Pull the stem end over the meat mixture, and fold the right and left sides of the leaf over and roll tightly to the very top. Place the cabbage rolls seam-side down in a large Dutch oven or ovenproof, straight-sided saucepan. Repeat with the remaining cabbage and pork filling.
5. Pour the chicken broth over the cabbage rolls and bring to a boil over medium. Cover the pan, transfer to the oven, and bake until cabbage rolls are fork tender and the meat mixture is cooked through, 40 to 45 minutes. Serve with ladles of broth over the rolls and a drizzle of sesame oil.

## Tags
- cabbage
- chicken broth
- ginger
- ground pork
- rice
- scallion
- soy sauce
- fall
- winter

## Notes
`,Wf=`---
title: "Gochujang Tofu, Squash and Brussels Sprouts Bowls"
source: "https://cooking.nytimes.com/recipes/771966116-gochujang-tofu-and-veggie-bowls"
author: "Ali Slagle"
yield: "2 to 4 servings"
prep_time: "PT0H15M"
cook_time: "PT0H45M"
total_time: "PT1H0M"
categories:
  - Grain Bowl
  - Lunch
  - Dinner
  - Main Course
  - Tofu Dish
tags:
  - Brussels Sprout
  - Butternut Squash
  - Apple
  - Gochujang
  - Gochugaru
  - Cider Vinegar
  - Easy
  - Extra-Firm Tofu
  - Sheet-Pan
  - Vegetarian
  - Vegan
  - Dairy-Free
  - Roast
  - Healthy
cuisine: "Korean Inspired"
image: "https://static01.nyt.com/images/2026/02/24/multimedia/AS-Roasted-Tofu-and-Vegetable-Bowls-with-Gochujang-Vinaigrette-mhkb/AS-Roasted-Tofu-and-Vegetable-Bowls-with-Gochujang-Vinaigrette-mhkb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Gochujang Tofu, Squash and Brussels Sprouts Bowls

> Source: https://cooking.nytimes.com/recipes/771966116-gochujang-tofu-and-veggie-bowls

## Description
This roasted sheet-pan take on bibimbap drapes golden squash, brussels sprouts and tofu in a gochujang-apple cider vinaigrette, then piles everything on top of nutty whole grains. Tossing the vegetables and tofu in the sauce, as opposed to spooning the sauce over bowls, ensures every nook soaks up the spicy tang. Thin slices of apple and shallot are in there too, for bites of crisp freshness. And while the recipe calls for pre-cubed butternut squash for ease, you can use any winter squash you have. Just cut it into ½-inch wedges or 1-inch cubes, and feel free to leave the peel on for another layer of texture.

## Ingredients
- 1 (15-ounce) block extra-firm tofu
- 1 pound 1-inch cubes butternut squash (peeled or unpeeled)
- Salt
- 7 tablespoons extra-virgin olive oil
- 1 pound brussels sprouts
- ½ cup apple cider vinegar
- 2 to 4 tablespoons gochujang
- 1 teaspoon gochugaru or other crushed red pepper, plus more to taste
- 1 crisp apple, like Honeycrisp, Fuji, or Pink Lady
- 1 shallot
- 4 cups cooked whole grains (such as farro or brown rice), warm or room temperature
- Toasted sesame seeds and cilantro, for serving (both optional)

## Instructions
1. Arrange a rack in the bottom of the oven and heat to 425 degrees. Cut the tofu in half lengthwise, then slice crosswise into 6 sections. (You’ll have 12 squares total.) Pat dry and transfer to a sheet pan.
2. Add the squash to the tofu and toss to coat with salt and 2 tablespoons oil. Spread in an even layer and roast for 10 minutes.
3. Meanwhile, trim and halve the brussels sprouts, or quarter if large.
4. In a large bowl, whisk together ¼ cup oil, vinegar, gochujang and gochugaru. Thinly slice the apple and shallot and add to the dressing, then taste a piece of apple and adjust seasonings with gochujang, gochugaru and salt until savory and spicy to your liking.
5. To the sheet pan, add the brussels sprouts, 1 tablespoon oil and a pinch of salt. Use a spoon or spatula to spread into a single layer, arranging the sprouts cut sides down. Roast until the vegetables are tender and golden underneath, another 20 to 25 minutes.
6. Add everything on the sheet pan to the bowl of dressing. Toss to coat, then eat on top of grains, with a spoonful of the vinaigrette, plus sesame seeds and cilantro if you like.

## Tags
- Brussels Sprout
- Butternut Squash
- Apple
- Gochujang
- Gochugaru
- Cider Vinegar
- Easy
- Extra-Firm Tofu
- Sheet-Pan
- Vegetarian
- Vegan
- Dairy-Free
- Roast
- Healthy

## Notes
`,Vf=`---
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
`,Qf=`---
title: "Green Curry Salmon With Coconut Rice"
source: "https://cooking.nytimes.com/recipes/1023826-green-curry-salmon-with-coconut-rice?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - dinner
  - easy
  - seafood
  - main course
tags:
  - cilantro
  - coconut milk
  - coconut oil
  - dutch oven
  - green curry paste
  - one pot
  - salmon fillet
  - scallion
  - spinach
  - sushi rice
cuisine: ""
image: "https://static01.nyt.com/images/2023/01/18/multimedia/11Apperex-Salmon-wqhp/11Apperex-Salmon-wqhp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Green Curry Salmon With Coconut Rice

> Source: https://cooking.nytimes.com/recipes/1023826-green-curry-salmon-with-coconut-rice?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Sweet coconut milk tempers the fiery pungency of Thai green curry paste in this easy one-pot salmon and rice meal. Fresh scallions and cilantro add herbal freshness, while chopped baby spinach makes the whole thing even greener. Note that different brands of rice absorb different amounts of water, so don’t be afraid to add more water as needed.

## Ingredients
- 1 1/4 to 1 1/2 pounds skinless salmon fillets
- Fine sea salt and freshly ground black pepper
- 4 tablespoons green curry paste
- 2 tablespoons virgin coconut oil (or use a neutral oil, such as canola)
- 1 bunch scallions, whites and greens, thinly sliced
- 2 garlic cloves, finely grated or minced
- 1 (14 1/2-ounce) can unsweetened, full-fat coconut milk
- 1 3/4 cups sushi rice or other short-grain rice, rinsed well
- 2 cups chopped baby spinach
- 1 cup chopped cilantro leaves and tender stems
- Lime wedges, for serving

## Instructions
1. Lightly season salmon with salt and pepper, and spread 1 tablespoon curry paste all over the fillets. Set aside.
2. Heat oil in a 5- or 6-quart Dutch oven over medium. Stir in scallion whites and most of the greens, reserving 2 tablespoons scallion greens for garnish. Cook until golden brown, about 3 minutes. Stir in garlic and a pinch of salt, and cook until fragrant, about 1 minute longer.
3. Stir in coconut milk, remaining 3 tablespoons green curry, 1 1/2 cups water and 1 1/2 teaspoons salt. Stir in rinsed rice and reduce heat to low. Let simmer, covered and stirring occasionally, for 20 minutes. Using a wooden spoon, gently fold in spinach, cilantro and a pinch of salt. If the rice looks dry and threatens to stick to the bottom of the pot, stir in 2 to 4 tablespoons more water.
4. Place salmon filets on top of rice, raise heat to medium-low and cook, covered, until salmon is just cooked through, 12 to 20 minutes, depending on thickness.
5. Remove from heat and taste rice for doneness. If the salmon is done before the rice, gently remove the fish from the pan using a metal spatula, transfer to a plate and tent with an overturned bowl or foil to keep warm, then continue to cook rice until tender, adding more water if the rice seems dry. Taste and season with salt as needed. Squeeze a lime wedge over the salmon and serve immediately, garnished with reserved scallions and more lime wedges on the side.

## Tags
- cilantro
- coconut milk
- coconut oil
- dutch oven
- green curry paste
- one pot
- salmon fillet
- scallion
- spinach
- sushi rice

## Notes
`,Xf=`---
title: "Green Goddess Chicken Meatballs"
source: "https://cooking.nytimes.com/recipes/774383717-green-goddess-chicken-meatballs?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Dan Pelosi"
yield: "18 servings"
prep_time: "PT0H5M"
cook_time: "PT0H20M"
total_time: "PT0H25M"
categories:
  - Meatballs
  - Breakfast
  - Lunch
  - Dinner
  - Appetizer
  - Main Course
  - Poultry
tags:
  - Panko
  - Scallion
  - Lemon Zest
  - Ground Chicken
  - Easy
  - Make-Ahead
  - Freezer Friendly
  - Quick
  - Weeknight
  - Spring
  - Bake
cuisine: ""
image: "https://static01.nyt.com/images/2026/03/24/multimedia/DP-Green-Goddess-Chicken-Meatballs-wfkm/DP-Green-Goddess-Chicken-Meatballs-wfkm-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Green Goddess Chicken Meatballs

> Source: https://cooking.nytimes.com/recipes/774383717-green-goddess-chicken-meatballs?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Herby, creamy green goddess dressing is a perfect way to both flavor and fatten up chicken meatballs, ensuring they are juicy and delicious. Whether using homemade or store-bought dressing, these meatballs come together fast and would be welcome on your plate at breakfast with eggs, at lunch on a salad or sandwich, or at dinner with pasta or rice. Perhaps their peak usage, though, is as an appetizer, with plenty of extra dressing for dipping. (Watch Dan Pelosi make this recipe in this video.)

## Ingredients
- ¾ cup homemade or store-bought green goddess dressing, plus more for serving
- ¾ cup panko bread crumbs
- 1 large egg
- 4 scallions, thinly sliced
- 2 garlic cloves, grated
- Grated zest of 1 lemon
- Salt and black pepper
- 1 pound ground chicken
- Olive oil, for forming the meatballs

## Instructions
1. Heat the oven to 400 degrees.
2. Add dressing, panko, egg, scallions, garlic, lemon zest and 1 teaspoon each salt and black pepper to a bowl and mix to combine, ensuring the panko is fully moistened. Add chicken and mix until just combined, being careful not to overmix.
3. Using a bit of oil on your hands, form the meat mixture into 18 small balls (about 2 tablespoons each) and place onto a baking sheet. Bake meatballs for 10 minutes, until the bottoms of the meatballs are browned and cooked through, and release easily from the pan. Remove from the oven and let rest for 5 minutes.
4. Serve with extra dressing on the side. Cooked meatballs can be refrigerated for up to 5 days and frozen for up to 3 months.

## Tags
- Panko
- Scallion
- Lemon Zest
- Ground Chicken
- Easy
- Make-Ahead
- Freezer Friendly
- Quick
- Weeknight
- Spring
- Bake

## Notes
`,Zf=`---
title: "Green Goddess Dressing"
source: "https://cooking.nytimes.com/recipes/1019286-green-goddess-dressing?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Samin Nosrat"
yield: "1 1/2 cups"
prep_time: ""
cook_time: ""
total_time: "PT10M"
categories:
  - weeknight
tags:
  - anchovy
  - basil
  - chive
  - food processor
  - greek yogurt
  - lemon
  - mayonnaise
  - parsley
  - salad dressing
  - tarragon
cuisine: ""
image: "https://static01.nyt.com/images/2018/04/29/magazine/29mag-eat3/29mag-eat3-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Green Goddess Dressing

> Source: https://cooking.nytimes.com/recipes/1019286-green-goddess-dressing?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Unlike more complicated versions of green goddess, this one, adapted from the cookbook author Jessica Battilana, comes together quickly in a food processor.&nbsp;Mayonnaise and full-fat Greek yogurt give the dressing richness and tang, while parsley, basil and tarragon lend the springtime perfume of fine herbs. Two anchovy fillets offer salt and a rumor of umami. The recipe is so mouth-smackingly perfect that it doesn’t require any adjusting. Serve with this greenest-green salad. Use leftover dressing as a dip, alongside carrots, cucumbers and radishes, or as an accompaniment to grilled fish or chicken.&nbsp;&nbsp;

## Ingredients
- 2 oil-packed anchovy fillets
- 1/2 cup mayonnaise, preferably Hellmann’s/Best Foods
- 1/3 cup full-fat Greek yogurt
- 1/2 cup parsley leaves
- 1/3 cup basil leaves
- 1 to 2 tablespoons lemon juice
- 2 tablespoons finely chopped fresh tarragon leaves
- 3 tablespoons minced chives
- Salt
- Freshly ground black pepper

## Instructions
1. In a food processor, combine the anchovies, mayonnaise, yogurt, parsley, basil and 1 tablespoon lemon juice. Process until smooth and uniformly green. Transfer to a lidded jar, and stir in the tarragon and chives. Adjust seasoning as needed with salt, pepper and lemon juice.

## Tags
- anchovy
- basil
- chive
- food processor
- greek yogurt
- lemon
- mayonnaise
- parsley
- salad dressing
- tarragon

## Notes
`,Ff=`---
title: "Harissa Puttanesca With Toasted Almonds"
source: "https://cooking.nytimes.com/recipes/1025564-harissa-puttanesca-with-toasted-almonds"
author: "Nargisse Benkabbou"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT25M"
total_time: "PT35M"
categories:
  - dinner
  - quick
  - weeknight
  - noodles
  - pastas
  - main course
tags:
  - almond
  - anchovy
  - black olive
  - caper
  - crushed canned tomato
  - harissa
  - parsley
  - spaghetti
  - stovetop
cuisine: ""
image: "https://static01.nyt.com/images/2025/05/29/multimedia/nb-harissa-puttanesca-bright-tcvh/nb-harissa-puttanesca-bright-tcvh-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Harissa Puttanesca With Toasted Almonds

> Source: https://cooking.nytimes.com/recipes/1025564-harissa-puttanesca-with-toasted-almonds

## Description
Pasta puttanesca, a classic Italian dish, gets a vibrant makeover with the addition of harissa, a spiced North African chile paste. In this version, harissa replaces the usual crushed red pepper, adding a smoky depth and complex warmth. Olives, anchovies and capers, classic puttanesca ingredients, deliver their signature briny punch, while toasted almonds add a satisfying crunch and a welcome protein boost. Perfect for busy weeknights, this dish made with pantry staples is both flavorful and comforting. While the recipe calls for spaghetti, any other type of long pasta will work just as well.

## Ingredients
- 1 tablespoon olive oil
- 1 cup sliced almonds
- 1/4 teaspoon dried oregano, plus more to taste
- 1/8 teaspoon fine sea salt, plus more to taste
- Fine sea salt and black pepper
- 1 pound spaghetti
- 1/4 cup extra-virgin olive oil
- 5 garlic cloves, minced or crushed
- 6 anchovy fillets, minced
- 2 tablespoons harissa paste, plus more to taste
- 2 tablespoons capers, roughly chopped
- 1 tablespoon tomato paste
- 1 (14-ounce) can crushed tomatoes
- 1/2 cup pitted black olives, quartered
- 1 cup parsley leaves and tender stems, finely chopped
- 1 1/2 teaspoons dried oregano
- 1/2 teaspoon honey or sugar, plus more to taste

## Instructions
1. Make the toasted almonds: Heat the olive oil in a small (8- to 9-inch) pan over medium-low and add the almonds. Cook, stirring frequently to ensure they brown evenly, 8 to 10 minutes. Remove the pan from the heat, and mix in the oregano and salt. Taste and adjust seasoning as desired. Set aside until ready to serve. Alternatively, store the almonds, cooled, in an airtight container at room temperature for up to a week.
2. Make the pasta: Place a large pot of water over high, add 1 teaspoon salt and let come to a boil. Cook the spaghetti in the boiling salted water until almost al dente according to the package instructions. Reserve about 1/2 cup of the cooking water before straining the pasta.
3. Meanwhile, heat the extra-virgin olive oil in a large frying pan over low to medium-low. Add the garlic and cook, stirring frequently, until fragrant and golden on the edges, about 1 minute. Add the anchovies, harissa, capers and tomato paste, mixing to combine with the garlic. Cook for 2 minutes to allow the flavors to meld.
4. Mix in the crushed tomatoes, olives, parsley, oregano, honey, 1/8 teaspoon salt and 1/4 teaspoon black pepper. Bring to a simmer over medium, cover, adjust heat to medium-low and simmer gently for 10 to 15 minutes.
5. Taste the simmering sauce and add more harissa, salt or honey if desired. Transfer the strained pasta to the sauce along with 1/4 cup cooking water and toss to combine. If necessary, add a couple more tablespoons of cooking water to obtain a sauce that coats all the pasta. Stir until the pasta is al dente, about 2 minutes. Serve immediately with the toasted almonds on top.

## Tags
- almond
- anchovy
- black olive
- caper
- crushed canned tomato
- harissa
- parsley
- spaghetti
- stovetop

## Notes
`,$f=`---
title: "Herb-Marinated Seared Tofu"
source: "https://cooking.nytimes.com/recipes/1023447-herb-marinated-seared-tofu"
author: "Ali Slagle"
yield: "2 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - easy
  - for two
  - lunch
  - weeknight
  - beans
  - main course
tags:
  - budget
  - extra-firm tofu
  - make-ahead
  - parsley
  - shallot
  - tofu
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2022/09/08/dining/as-herby-tofu/as-herby-tofu-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Herb-Marinated Seared Tofu

> Source: https://cooking.nytimes.com/recipes/1023447-herb-marinated-seared-tofu

## Description
Pan-seared tofu, torn into chunks then soaked in a bright, herby sauce, makes a great addition to many meals: Pile it on top of grains, salad greens, noodles or yogurt; tuck it into a pita; or toss it with chunks of roasted squash. The herbs and seasonings used in this sauce can shift, depending on what you have on hand and what sounds good. Add capers, anchovies or olives for brininess; or harissa, fresh chile or ginger for spice. You can even use wilted herbs and hearty greens. For additional texture, add nuts and seeds, or tomatoes, thinly sliced celery or avocado. Eat it right away or refrigerate for another day. It’s a practical yet vibrant dish that you’ll make on repeat.

## Ingredients
- 3 tablespoons finely chopped shallot (from 1 small shallot)
- 2 tablespoons fresh lemon or lime juice or red or white wine vinegar, plus more as needed
- Kosher salt (such as Diamond Crystal)
- 1 1/2 tablespoons plus 1/2 cup extra-virgin olive oil
- 1 (14- to 16-ounce) block extra-firm tofu, sliced 1/2-inch thick and patted dry
- 1/2 cup finely chopped fresh parsley (see Tip)
- 1/4 cup finely chopped fresh cilantro, mint, dill, chives, chervil, celery leaves, fennel or carrot tops, or a mix
- 1 tablespoon fresh thyme, oregano, marjoram or tarragon leaves (optional)
- 1/2 teaspoon red-pepper flakes

## Instructions
1. In a large bowl, stir together the shallot, lemon juice and a pinch of salt; set aside.
2. In a large (12-inch) nonstick skillet, heat 1 1/2 tablespoons olive oil over medium-high. Season the tofu all over with salt, then add to the skillet and cook until golden brown, 3 to 5 minutes per side. Transfer to a plate or cutting board and let cool slightly
3. Meanwhile, to the shallot mixture, add the remaining 1/2 cup olive oil, all the fresh herbs you’re using and the red-pepper flakes. Season generously with salt and stir to combine. (For a smoother sauce, blitz everything in a food processor.)
4. When the tofu is cool enough to handle, rip it into 1/2-inch pieces and add to the sauce. Stir to combine. Eat right away, let sit at room temperature for up to 2 hours, or refrigerate for up to 3 days. Re-season with salt and lemon juice as needed, as flavors shift from the fridge.

## Tags
- budget
- extra-firm tofu
- make-ahead
- parsley
- shallot
- tofu
- vegan
- vegetarian

## Notes
`,eb=`---
title: "Herby Skillet Chicken With Greens"
source: "https://cooking.nytimes.com/recipes/1025170-herby-skillet-chicken-with-greens?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT30M"
total_time: "PT45M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - one pot
  - poultry
  - main course
tags:
  - chicken thigh
  - fresh herb
  - lemon zest
  - scallion
  - skillet
  - sturdy greens
cuisine: ""
image: "https://static01.nyt.com/images/2024/03/12/multimedia/13APPETITErex-chicken-lqpt/13APPETITErex-chicken-lqpt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Herby Skillet Chicken With Greens

> Source: https://cooking.nytimes.com/recipes/1025170-herby-skillet-chicken-with-greens?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this easy skillet meal, seared boneless chicken thighs are nestled on a bed of herbs, browned whole garlic cloves and greens before the pan is popped into the oven to roast until golden. Just before serving, butter, lemon zest and (optional) olives or capers are tossed into the pan drippings, adding creaminess and a tangy, salty spark to the sauce. Serve this over rice or with roasted or mashed potatoes, or with bread for soaking up the drippings.

## Ingredients
- 6 garlic cloves, 5 smashed and peeled, 1 finely grated or minced
- 1 teaspoon kosher salt (Diamond Crystal, or use ½ teaspoon Morton), more as needed
- 1 teaspoon ground coriander
- Large pinch of red-pepper flakes
- 1½ to 1¾ pounds boneless, skinless chicken thighs (see Tip)
- 1 bunch scallions
- About 1 large or 2 small bunches kale, collard greens, mustard greens, mature spinach or other hardy greens (12 ounces)
- 2 tablespoons extra-virgin olive oil, more as needed
- 1 cup chicken stock or water
- 1 cup chopped soft herbs, such as cilantro, dill, mint or basil, or a combination, more for serving
- 2 tablespoons unsalted butter
- 1 lemon, zested and halved
- 1 to 3 tablespoons chopped olives or capers (optional)

## Instructions
1. Heat oven to 425 degrees. In a small bowl, stir together grated garlic, 1 teaspoon salt, coriander and red-pepper flakes. Rub all over chicken, then set aside to rest at room temperature while you prepare vegetables.
2. Thinly slice the scallions, separating the white and green parts. Pull the leaves off the greens and coarsely chop them (discard stems or save for another use). You should have 8 to 9 cups.
3. Heat a 10-inch ovenproof skillet over medium-high. Add oil and smashed garlic cloves, stirring to coat garlic in oil, then add chicken. Cook, stirring the garlic occasionally, until chicken is deeply browned on one side, 4 to 5 minutes. Turn chicken and cook for 1 to 2 minutes on the other side, just until no longer pink (the chicken will still be very raw inside). Transfer chicken to a plate but leave garlic in the pan.
4. Stir in scallion whites (save the greens for later) and a pinch of salt. Cook, stirring, until softened and lightly browned, 1 to 2 minutes. Stir in stock, greens, herbs, another pinch of salt and a drizzle of oil. Bring liquid to a simmer, tossing to wilt the greens (you might have to add the greens in batches, adding more as they wilt down).
5. When the greens are wilted, nestle chicken into skillet, browned side up, and pour in any juices from the chicken plate. Transfer skillet to oven and cook, uncovered, until chicken is cooked through, 20 to 25 minutes. Remove pan from oven and transfer chicken to a plate.
6. If pan juices are watery, bring to a simmer over high heat and cook until thickened slightly. Add scallion greens, butter, lemon zest, and olives or capers (if using) to the pan, stirring until the butter melts. Squeeze in a little lemon juice, then taste and add more salt and lemon juice if needed. Return chicken to the pan and toss with the saucy greens. Top with more herbs and serve.

## Tags
- chicken thigh
- fresh herb
- lemon zest
- scallion
- skillet
- sturdy greens

## Notes
`,nb=`---
title: "Hilary Duff’s Cilantro Chicken Soup"
source: "https://cooking.nytimes.com/recipes/775247424-hilary-duffs-cilantro-chicken-soup?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "The New York Times"
yield: "6 to 8 servings"
prep_time: "PT0H10M"
cook_time: "PT1H35M"
total_time: "PT1H45M"
categories:
  - Chicken Soup
  - Dinner
  - Lunch
  - Main Course
tags:
  - Whole Chicken
  - Corn
  - Cilantro
  - Stovetop
  - Lime Juice
  - Great Leftovers
  - Simmer
  - Gluten-Free
  - Healthy
  - Dairy-Free
cuisine: "Mexican Inspired"
image: "https://static01.nyt.com/images/2026/04/06/multimedia/HD-Hilary-Duffs-Cilantro-Chicken-Soup-mpkg/HD-Hilary-Duffs-Cilantro-Chicken-Soup-mpkg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Hilary Duff’s Cilantro Chicken Soup

> Source: https://cooking.nytimes.com/recipes/775247424-hilary-duffs-cilantro-chicken-soup?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
The singer Hilary Duff grew up eating this cozy yet bright chicken soup enlivened with citrus and cilantro. Her mother, Susan, would make it for her, especially when she was sick, and now Ms. Duff craves it whenever she’s under the weather. The recipe isn’t strict: The ingredients are flexible and you can use water in place of the chicken stock, try orzo instead of corn or, if you’re short on time, start with a rotisserie chicken. Ms. Duff’s only non-negotiables are lots of lime juice and plenty of cilantro.

## Ingredients
- 1 whole chicken (3 ½ to 4 pounds), giblets removed but neck included if available
- 2 quarts low-sodium chicken stock
- 1 (3- to 4-inch) piece fresh ginger (optional), peeled and cut into large coins
- 4 to 6 sprigs fresh herbs, such as rosemary and thyme, and 1 to 2 bay leaves, tied into a bouquet with kitchen string if you like
- Salt and black pepper
- 1 large onion
- 5 to 6 large celery stalks
- 6 to 8 large carrots
- 3 to 5 garlic cloves
- 2 tablespoons butter or olive oil
- 2 to 3 ears of corn
- 2 large jalapeños (optional)
- 1 tablespoon chicken bouillon (optional)
- 1 large bunch cilantro, leaves and tender stems torn or roughly chopped
- 2 to 3 limes, plus wedges for serving
- Sliced avocado, for serving

## Instructions
1. In a large stock pot set over medium-high heat, combine the chicken, chicken neck (if using), chicken stock and enough cold water to cover. Add the ginger (if using), the herbs, a couple of large pinches of salt and a generous amount of black pepper. Cover and bring to a boil, then reduce heat to maintain a brisk simmer and simmer until the chicken is very tender, 30 to 45 minutes.
2. Carefully transfer the cooked chicken to a rimmed baking sheet or baking dish and set aside to cool. Skim and discard any foam from the top of the broth; cover and continue simmering the broth.
3. While the chicken is cooking and cooling, dice the onion and cut the celery and carrots into large chunks. Mince or crush the garlic with a press.
4. Heat butter in a large skillet on medium. Add the onion, celery and carrots and season with salt. Cook, stirring occasionally, until onion is softened, 5 to 8 minutes. Add the garlic and cook, stirring occasionally, until fragrant, about 2 minutes. Transfer the vegetables to the simmering broth.
5. When the chicken is cool enough to handle, remove the chicken skin and pull the meat off the bones into small pieces or shreds.
6. Husk the corn and cut the cobs crosswise into 2-inch pieces (see Tip). If using jalapeños, halve them lengthwise and remove the ribs and seeds. Add the corn and jalapeños to the broth. Taste the broth and season with salt and pepper. Add the bouillon, if using, and the shredded chicken and continue to simmer the broth until the vegetables are cooked to your liking. Discard the herbs, ginger and chicken neck, if used. Reserve some cilantro for garnish and add the rest to the soup. Add the juice from 2 to 3 limes, to taste.
7. Ladle the soup into serving bowls. Garnish with avocado, seasoning it with salt and pepper, and top with more cilantro. Serve with lime wedges for squeezing.

## Tags
- Whole Chicken
- Corn
- Cilantro
- Stovetop
- Lime Juice
- Great Leftovers
- Simmer
- Gluten-Free
- Healthy
- Dairy-Free

## Notes
`,tb=`---
title: "Hot Slaw, Mexican-Style"
source: "https://cooking.nytimes.com/recipes/1018884-hot-slaw-mexican-style"
author: "Sam Sifton"
yield: "Serves 6-8"
prep_time: ""
cook_time: ""
total_time: "PT1H"
tags:
  - adobo sauce
  - green cabbage
  - purple cabbage
cuisine: ""
image: "https://static01.nyt.com/images/2017/08/06/magazine/06eat2/06eat1-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Hot Slaw, Mexican-Style

> Source: https://cooking.nytimes.com/recipes/1018884-hot-slaw-mexican-style

## Description
Put a couple of whole cabbages over a hot fire on a grill, and leave them there, turning every few minutes when you get a chance, until they look like something tragic and ruined. You don’t need to season them, or oil them, or remove the thick outer leaves the way you’d do if you were cooking them lightly or shredding them raw. You just need to burn them, slowly and deeply, so that they soften within and take on the flavor of fire. When you’ve got the cabbages good and blistered, put them on a cutting board, remove the charred exteriors and cut out the cores, then slice the remaining cabbage into shreds. Dress with crema, store-bought or home-made, along with chopped cilantro, some chipotle en adobo and lime juice. It makes for a slaw that goes with almost anything grilled.

## Ingredients
- 1 small purple cabbage
- 1 small green cabbage
- 1 small bunch cilantro, the leaves cleaned and roughly chopped, approximately ½ cup
- 1 cup crema, or to taste
- 1 tablespoon freshly squeezed lime juice, or to taste
- 1 tablespoon adobo from a can of chipotles en adobo, or hot pepper sauce to taste (optional)
- Kosher salt and freshly ground black pepper, to taste

## Instructions
1. Make the crema the night before, or many nights before, the day you want to cook.
2. When you are ready to make the slaw, build a fire in your grill, leaving about 1/3 of grill free of coals, or set one burner of a gas grill to high. When the fire is ready, place the cabbages, whole, onto the fire or over the open burner, and allow them to roast in the heat of the open flames, turning them every few minutes and allowing them to rest occasionally on the cooler side of the grill, until they are blackened, blistered and a little soft to the touch, approximately 30 to 45 minutes. You are not looking to incinerate them so much as to cook them aggressively. You will discard most of the burned exterior.
3. Meanwhile, make the dressing. Whisk the cilantro into the crema in a bowl, and add the lime juice and, if you’re using, adobo or hot sauce to taste, along with a little salt and pepper.
4. When the cabbages are blackened and have softened to the point where you can insert a knife into each one fairly easily, remove them to a cutting board. Once they have cooled slightly, take off most of the blackened exterior leaves. Cut each cabbage in half, then use your knife to remove the cores. Slice the cabbage into thin strips, as for a coleslaw, and add them to a large serving bowl.
5. Apply about 1/2 a cup of the crema to the sliced cabbage, and toss to combine. Continue adding crema until you have enough to coat all the cabbage, then taste and adjust seasonings. (You can save the rest of the crema for another use, keeping it in a closed jar in the refrigerator.) Serve with grilled meats or alone.

## Tags
- adobo sauce
- green cabbage
- purple cabbage

## Notes
`,ab=`---
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
`,ib=`---
title: "Kale Caesar Pasta Salad"
source: "https://cooking.nytimes.com/recipes/1027092-kale-caesar-pasta-salad?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Dan Pelosi"
yield: "6 to 8 servings, about 12 cups"
prep_time: "PT10M"
cook_time: "PT35M"
total_time: "PT45M"
categories:
  - dinner
  - lunch
  - main course
  - side dish
tags:
  - anchovy
  - great leftovers
  - kale
  - make-ahead
  - mayonnaise
  - panko
  - parmesan
  - party
  - pasta salad
  - plan-ahead
  - rigatoni
  - stovetop
  - fourth of july
  - labor day
  - memorial day
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2025/07/23/multimedia/dp-kale-caesar-pasta-salad-zpjl/dp-kale-caesar-pasta-salad-zpjl-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Kale Caesar Pasta Salad

> Source: https://cooking.nytimes.com/recipes/1027092-kale-caesar-pasta-salad?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Caesar salad meets pasta salad in this comfort food mash-up. Crisp and sturdy kale leaves hold their own alongside al dente pasta when tossed in a thick and creamy Caesar-inspired, mayonnaise-based dressing. Crunchy, lemony breadcrumbs and salty Parmesan shavings are added just before serving, for extra texture and flavor. Served cold, this recipe is perfect for make-ahead entertaining or meal prep. For those looking for extra protein, cooked chicken or crispy chickpeas are welcome additions. Of course, feel free to swap in romaine lettuce and croutons, if preferred.

## Ingredients
- Salt and black pepper
- 1 pound mezze rigatoni or other short pasta
- 1 cup panko or homemade bread crumbs
- Zest of 2 lemons (reserve the lemons for the dressing)
- 2 garlic cloves, grated
- 3 tablespoons olive oil, divided
- 4 cups packed baby kale leaves (5 ounces) or 1-inch Tuscan kale ribbons, stems removed (from 1 large bunch)
- 1 1/2 ounces Parmesan shavings (about 1/3 cup)
- 1 cup mayonnaise
- 1 cup freshly grated Parmesan (about 2 1/2 ounces)
- 1 (2-ounce) can anchovy fillets, drained (about 12 anchovies)
- 4 large garlic cloves
- Juice of 2 lemons (1/3 cup)
- 4 teaspoons Dijon mustard
- Salt and pepper

## Instructions
1. Prepare the salad: Bring a large pot of salted water to a boil. Add pasta and cook until al dente (according to package instructions). Drain the pasta and spread it out on a tray or sheet pan in a single layer, allowing steam to escape and the pasta to cool faster. Set aside.
2. Place a medium skillet on your stovetop over medium heat. Add bread crumbs, lemon zest, garlic, 2 tablespoons oil and a big pinch each of salt and pepper. Stir to mix, then continue to stir until the garlic is fragrant and the bread crumbs are evenly browned, 4 to 5 minutes. Remove from the pan and set aside to cool. To store, transfer cooled breadcrumbs to an airtight container and keep at room temperature for up to 2 days.
3. Meanwhile, make the dressing: In the bowl of a blender or food processor, combine mayonnaise, grated Parmesan, anchovies, garlic, lemon juice, mustard and a pinch each of salt and pepper. Blend on low speed until smooth, about 1 minute. Taste for seasoning and add salt and pepper as needed. If not using immediately, transfer to an airtight container and refrigerate for up to 5 days.
4. Finish the salad: In a large bowl, use your hands to massage kale with remaining 1 tablespoon olive oil until just tender. Add cooled pasta and 1 1/2 cups of the dressing and toss until well mixed. Cover and refrigerate for at least 4 hours or up to overnight.
5. Before serving, add Parmesan shavings, half of the breadcrumbs and extra dressing as needed, and stir until just combined. Garnish with the rest of the breadcrumbs and serve immediately. Leftovers will last for 5 days in the refrigerator.

## Tags
- anchovy
- great leftovers
- kale
- make-ahead
- mayonnaise
- panko
- parmesan
- party
- pasta salad
- plan-ahead
- rigatoni
- stovetop
- fourth of july
- labor day
- memorial day
- summer

## Notes
`,ob=`---
title: "Lane Cake"
source: "https://cooking.nytimes.com/recipes/1020718-lane-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "8 to 10 servings"
prep_time: ""
cook_time: ""
total_time: "PT4H"
categories:
  - snack
  - dessert
tags:
  - bourbon
  - butter
  - cake flour
  - currant
  - layer cake
  - pecan
  - shredded coconut
  - unsweetened coconut flakes
  - christmas
  - thanksgiving
  - winter
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2019/12/12/dining/yk-lane-cake/yk-lane-cake-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Lane Cake

> Source: https://cooking.nytimes.com/recipes/1020718-lane-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This version of the classic Southern cake takes all of fruitcake’s best elements — bourbon-soaked dried fruit, toasty pecans and shredded coconut — and weaves them into a rich, custardy filling set between three layers of tender vanilla cake. It’s a special occasion dessert and a nightcap, all rolled into one. Acetate strips (see Tip) are useful for holding the layers in place while assembling, but if finding them is too much of a bother, use parchment or follow the instructions to assemble the cake without the strips. The flavor of this cake improves with time, so allow a few hours — or even a few days — before slicing and enjoying.

## Ingredients
- 1 cup/225 grams unsalted butter (2 sticks), at room temperature, plus more for greasing
- 2 1/4 cups/450 grams granulated sugar
- 6 egg whites, at room temperature
- 1 teaspoon vanilla extract
- 2 3/4 cups/355 grams cake flour, sifted
- 2 1/2 teaspoons baking powder
- 1 1/4 teaspoons kosher salt
- 1 cup/240 milliliters whole milk
- 1 cup/225 grams unsalted butter (2 sticks)
- 1 1/3 cups/270 grams granulated sugar
- 14 egg yolks
- 1 1/2 teaspoons kosher salt
- 2 cups/135 grams finely shredded unsweetened coconut
- 1 1/4 cups/200 grams currants
- 1 cup/100 grams pecans, chopped
- 1/2 cup/120 milliliters bourbon
- 1/2 cup/100 grams granulated sugar
- 2 tablespoons bourbon

## Instructions
1. Make the cake: Heat the oven to 325 degrees. Lightly grease the bottom and sides of an 13-by-18-inch baking sheet and line the bottom with a sheet of parchment. Cut 2 strips of acetate, each about 3 inches wide and 26 inches long. Set aside. (These will be used to help assemble the cake in Step 10.)
2. In the bowl of a stand mixer fitted with the paddle attachment, cream the butter and sugar on medium-high speed until light and fluffy, 3 to 4 minutes. In a small bowl, combine the egg whites and vanilla extract. Reduce speed to medium, then pour the egg mixture into the creamed butter in three additions, beating to incorporate after each and scraping the bowl as needed.
3. In a medium bowl, whisk together the cake flour, baking powder and kosher salt. Add the flour mixture all at once into the creamed butter and stir on low speed until just combined. Add the milk; use a rubber spatula or wooden spoon to fold in the milk.
4. Pour batter into the prepared pan and bake until cake is a pale golden brown and the surface is springy to the touch, 35 to 40 minutes. Allow the cake to cool completely before using. (The uncut cake can be made up to 1 day ahead, wrapped tightly in plastic or stored frozen for up to 2 weeks.)
5. Make the filling: In a large saucepan, melt the butter over low heat. Turn off the heat and stir in the sugar, yolks and salt. Whisk together to fully incorporate. Turn the heat back on low and, stirring continuously, cook to 155 degrees or until the mixture thickens and turns a slightly more pale yellow, 6 to 8 minutes.
6. Remove the pan from the heat. Add the coconut, currants, pecans and bourbon, and fold them in using a rubber spatula. Let the filling cool completely. (Filling can be made ahead and stored refrigerated for up to 2 weeks.)
7. Make the bourbon soak: In a small saucepan, combine the sugar with 1/2 cup/120 milliliters water and bring to a boil over medium heat. Stir until sugar dissolves, remove from heat and add the bourbon; set aside to cool.
8. Assemble the cake: Run an offset spatula along the sides of the cake to loosen the edges. Place a piece of parchment over the top and unmold the cake by flipping it upside-down onto a baking rack or large cutting board. Peel off and discard the parchment layer on top.
9. Orienting the cake vertically and starting with an 8-inch metal cake ring on the top left corner, punch out a full circle for the top layer. Move the ring to the bottom left corner and punch out the second layer. Move the cake ring to the top right corner of the cake, punch out a half circle and repeat the half circle on the bottom right corner. These half circles will form your bottom layer. (If you don’t have a cake ring, use a closed 8-inch springform pan without the bottom as a guide, and cut out the cake layers with a paring knife.) Reserve the leftover cake to fill in any gaps.
10. Wipe the cake ring clean. Place a 9-inch cardboard cake circle on a cake stand or plate and place the metal cake ring or a closed springform pan without the bottom on top. Line the inside of the cake ring with one of the acetate strips. Spread a tablespoon of filling around the middle of the cake board. (This will help the cake stick to the surface.) Move the cake half-circles to the inside of the cake ring, pushing them to the outer edges of the ring, and fill any gaps with cake scraps. Press down on any scraps to create a snug, flat layer.
11. Brush the bottom layer with the bourbon soak. Using a large spoon or an ice cream scoop, add three to four dollops of the filling, about 1 cup total. Spread evenly with the back of an offset spatula. If the entire layer is not covered and spread to the edges, add more filling.
12. Gently move the second cake layer and slide it into the ring. Press down gently on the cake layer to make sure it sits firmly on top of the filling. Brush the cake with simple syrup and cover with filling, repeating the process above.
13. Guide a second acetate strip between the cake ring and the top 1/4 inch of the first strip, allowing slight overlap. Together, the rings should be about 5 to 6 inches tall. This will support the top layers of the cake when finished.
14. Add the third cake layer and press down into the filling to set. Brush your third layer with simple syrup and top with remaining filling. (If assembling the cake without acetate strips, once all the cake layers are in place, run the flat side of your offset spatula around the outside of the layer above the cake ring to create a smooth finish.) Cover with a sheet of plastic wrap and allow to sit at room temperature until ready to serve.
15. To serve, slide the cake ring upward and remove it. Peel off the acetate layers and discard. (To remove the cake ring without acetate strips, remove the plastic film and run a warm knife or spatula between the ring and the cake. Slide the metal ring upward to remove.) Using a clean knife, cut the cake into desired number of slices and serve.

## Tags
- bourbon
- butter
- cake flour
- currant
- layer cake
- pecan
- shredded coconut
- unsweetened coconut flakes
- christmas
- thanksgiving
- winter
- American

## Notes
`,sb=`---
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
`,rb=`---
title: "Lemon-Tahini Slaw"
source: "https://cooking.nytimes.com/recipes/1022215-lemon-tahini-slaw"
author: "Ali Slagle"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT15M"
categories:
  - dinner
  - easy
  - lunch
  - slaws
  - side dish
tags:
  - dijon mustard
  - green cabbage
  - lemon juice
  - lemon zest
  - make-ahead
  - picnic
  - tahini
  - fourth of july
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2021/05/10/dining/as-lemony-tahini-slaw/merlin_187482165_ea352120-cad8-4c0d-82fd-bc5c6ab7d911-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Lemon-Tahini Slaw

> Source: https://cooking.nytimes.com/recipes/1022215-lemon-tahini-slaw

## Description
This vegan recipe fulfills the need for a creamy slaw that can sit out in the sun. Instead of dairy and raw egg yolks, this slaw is slicked with tahini and mustard. Capers, lemon zest and scallions are smashed into a coarse paste, then massaged into the cabbage to lend umami and a salty punch. Snap peas and radishes add crunch, but feel free to swap in celery, jicama, fennel or other vegetables. This is a decidedly savory slaw; if you want some sweetness, add honey to the dressing, to taste. The slaw can sit out — poolside, deskside, at a picnic — for up to 3 hours, and it keeps for 3 days in the fridge.

## Ingredients
- 2 tablespoons capers
- 1 tablespoon fresh lemon zest plus 5 tablespoons lemon juice (from 2 to 3 lemons)
- 6 scallions, thinly sliced
- 1 medium Savoy or other green cabbage (1 1/2 to 2 pounds), cored and thinly sliced
- Kosher salt and black pepper
- 1/4 cup tahini
- 1 tablespoon Dijon mustard, plus more to taste
- 8 ounces snap peas, thinly sliced lengthwise
- 3 large or 6 small radishes, cut into matchsticks

## Instructions
1. Chop and smash the capers, lemon zest and half the scallions together into a coarse, wet paste. In a large bowl, combine the cabbage, 1 tablespoon lemon juice, 1 teaspoon salt and the scallion-caper mixture. Massage with your hands until the cabbage is slightly wilted.
2. Prepare the dressing: In a liquid measuring cup, stir together the remaining 1/4 cup lemon juice, the tahini and mustard. Add water until thick but pourable (about 3 tablespoons depending on tahini brand). Season to taste with salt and pepper and another teaspoon of mustard for more kick, if desired.
3. Add the snap peas, radishes and remaining scallions to the cabbage, then stir in enough dressing to lightly coat. (Leftover dressing will keep for up to a week; thin with water as needed.) Season slaw to taste with salt and pepper.

## Tags
- dijon mustard
- green cabbage
- lemon juice
- lemon zest
- make-ahead
- picnic
- tahini
- fourth of july
- vegan
- vegetarian

## Notes
`,lb=`---
title: "Lemony Orzo With Asparagus and Garlic Bread Crumbs"
source: "https://cooking.nytimes.com/recipes/1021068-lemony-orzo-with-asparagus-and-garlic-bread-crumbs"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - brunch
  - dinner
  - lunch
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - asparagus
  - kid-friendly
  - lemon juice
  - orzo
  - panko
  - spring
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/07/multimedia/AS-Lemony-Orzo-with-Asparagus-pgmk/AS-Lemony-Orzo-with-Asparagus-pgmk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Lemony Orzo With Asparagus and Garlic Bread Crumbs

> Source: https://cooking.nytimes.com/recipes/1021068-lemony-orzo-with-asparagus-and-garlic-bread-crumbs

## Description
Every spoonful of this pasta has a happy jumble of lemony orzo, grassy asparagus, garlicky bread crumbs, fresh herbs and salty Parmesan. The pasta and thinly sliced asparagus cook together in the same pot, then rest in a lemony dressing while the garlic bread crumbs are toasted, so the pasta has time to absorb as much flavor as possible.

## Ingredients
- Salt and black pepper
- 1 cup orzo
- 1 pound asparagus, trimmed and thinly sliced on a diagonal (about 1/4-inch thick)
- 5 tablespoons extra-virgin olive oil
- 1 teaspoon lemon zest plus 3 tablespoons lemon juice, plus more as needed (from about 1 large lemon)
- 1/2 cup panko or homemade bread crumbs
- 1 small garlic clove, finely grated
- 1/4 cup finely grated Parmesan, plus more for serving
- 1/2 cup fresh dill, mint or parsley leaves (or any combination), torn if large

## Instructions
1. Bring a medium pot of salted water to a boil. Add the orzo and cook until al dente according to package directions. Two minutes before the orzo is done, add the asparagus. Drain the orzo and asparagus. Wipe out and reserve the pot.
2. While the orzo and asparagus cook, make the dressing: In a large bowl, stir together 3 tablespoons oil and the lemon zest and juice; season to taste with salt and pepper. Add the drained orzo and asparagus and toss to coat. Set aside while you toast the bread crumbs.
3. In the reserved pot, heat the remaining 2 tablespoons oil over medium. Add the panko and cook, stirring, until golden brown, 3 to 5 minutes. Remove from heat, then stir in the garlic and season with salt and pepper.
4. Stir the Parmesan and herbs into the orzo, taste, then season with salt, pepper and additional lemon juice, if desired. Top with the toasted bread crumbs and more Parmesan if you like. Serve warm or at room temperature.

## Tags
- asparagus
- kid-friendly
- lemon juice
- orzo
- panko
- spring
- vegetarian

## Notes
`,cb=`---
title: "Liberian Stewed Greens Dip With Plantain Chips"
source: "https://cooking.nytimes.com/recipes/773692736-liberian-stewed-greens-dip-with-plantain-chips"
author: "Yewande Komolafe"
yield: "10 to 12 servings"
prep_time: "PT30M"
cook_time: "PT1H"
total_time: "PT1H30M"
categories:
  - Dinner
  - Dips and Spreads
  - Vegetables
  - Appetizer
  - Side Dish
tags:
  - Collard Greens
  - Kale
  - Mustard Greens
  - Scotch Bonnet
  - Bell Pepper
  - Food Processor
  - Stovetop
  - Make-Ahead
  - Freezer Friendly
  - Great Leftovers
  - Dandelion Greens
  - Dairy-Free
  - Gluten-Free
  - Party
  - West African
cuisine: "West African"
image: "https://static01.nyt.com/images/2026/03/16/multimedia/16FD-KOMOLAFE-GATHERING-SSREX-YK-Liberian-Greens-and-Plantain-Chips-tgkf/16FD-KOMOLAFE-GATHERING-SSREX-YK-Liberian-Greens-and-Plantain-Chips-tgkf-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Liberian Stewed Greens Dip With Plantain Chips

> Source: https://cooking.nytimes.com/recipes/773692736-liberian-stewed-greens-dip-with-plantain-chips

## Description
A staple vegetable in Liberia, collard greens are cooked in a variety of ways across the West African nation and its vast diaspora. Whole leaves wrap an array of proteins for gentle steaming, and shredded leaves with their stems are added to various soups and stews. Stewed greens are the most popular preparation, known for being robust and deep in flavor with a lot of nuance. This recipe is adapted from Ope Amosu, the chef of Houston’s ChòpnBlok restaurants, who serves the stewed greens as a dip for plantain chips. He combines sturdy greens, bell peppers, onions and prawns with fermented, smoked and dried ingredients. Over a long simmer, the vegetables slowly relax, yielding to the broth and absorbing the surrounding flavors. Serve as a dip for chips or fritters, or alongside xaawash braised lamb shanks, crispy suya-spiced salmon or a starchy swallow.

## Ingredients
- 1 (1-inch) piece fresh ginger, scrubbed and chopped
- 10 garlic cloves, smashed and peeled
- 1 bunch scallions, thinly sliced, white and green parts separated
- 3 Scotch bonnet or habanero peppers, stemmed, seeded if you like
- 1 small yellow onion, cut into 1-inch chunks
- 2 medium bell peppers, any color, quartered and seeded
- 1 bunch collards or any chard greens, stems and leaves separated and chopped
- 1 bunch kale, stems and leaves separated and chopped
- 1 bunch mustard or dandelion greens, stems and leaves separated and chopped
- ½ cup neutral-flavored oil, such as canola, safflower or grapeseed
- 2 tablespoons dried írù (dried, fermented locust beans), soaked in warm water to soften, then rinsed and drained, see Tip
- 2 tablespoons ground dried crayfish, or tiny dried shrimp (soaked in warm water for 5 minutes to soften, then drained), see Tip
- 2 (7-ounce) pieces ẹja panla (cold-smoked hake, see Tip) or smoked white fish fillet, skin off and picked of any bones, flakes broken into 1-inch pieces
- 1 ¼ teaspoons baking soda
- Kosher salt (such as Diamond Crystal)
- 2 teaspoons stock concentrate, meat or vegetable, plus more to taste (optional)
- 1 tablespoon grated lemon zest (from 2 lemons)
- ¼ cup fresh purple or Thai basil leaves or fresh scent leaves (see Tip), chopped
- Plantain chips, for serving

## Instructions
1. In the bowl of a food processor, pulse the ginger, garlic, scallion whites, Scotch bonnets, onion, bell peppers, collard stems, kale stems and mustard green stems to break up, then process for 1 minute to form a coarse purée. Scrape down the sides of the bowl and move the mixture to a large bowl.
2. Working in batches if needed, add the collard, kale and mustard green leaves to the food processor and pulse twice to break up. Scrape down the sides of the bowl, and process again until the leaves are in small, even pieces, similar to confetti, about 30 seconds. Add to the large bowl. Once all the ingredients have been chopped, combine with your hands.
3. Place a large heavy-bottomed pot or Dutch oven over medium-low heat. Add the oil and warm for 1 to 2 minutes. Add the írù, ground crayfish and smoked fish. Cook, stirring often to evenly distribute, until fragrant and light golden brown, 30 to 60 seconds.
4. Increase the heat to medium, add the leafy green mix and sprinkle in the baking soda. Stir to evenly coat the mix with the seasoned oil and cook for 2 to 3 minutes. Add 2 teaspoons salt and the stock concentrate, if using. Stir to combine.
5. Reduce the heat to low, cover with the lid cracked and continue to cook, stirring occasionally, until the greens release their liquid, the mixture is simmering, and the vegetables are softened, 22 to 25 minutes. Remove the lid, taste and add salt, if necessary.
6. Continue to cook, stirring frequently to loosen any stuck bits and prevent the sauce from sticking, about 15 minutes. Continue to cook, stirring occasionally, until all of the vegetables have collapsed into a cohesive sauce and everything is slicked with golden, glistening oil, 10 minutes. There should be visible puddles of sauce on the surface and along the edge of the pot. The sauce should stay in place with some pooling of oil when a spatula is dragged through.
7. Add the lemon zest, basil and scallion greens, stir to combine and cook until just warm, 1 to 2 minutes. Remove from the heat and transfer to a serving bowl. Serve warm or at room temperature with plantain chips for dipping. (Once cooled, the sauce can be stored in an airtight container and refrigerated for up to 3 days or frozen for up to 3 months.)

## Tags
- Collard Greens
- Kale
- Mustard Greens
- Scotch Bonnet
- Bell Pepper
- Food Processor
- Stovetop
- Make-Ahead
- Freezer Friendly
- Great Leftovers
- Dandelion Greens
- Dairy-Free
- Gluten-Free
- Party
- West African

## Notes
`,db=`---
title: "Loaded Sweet Potatoes With Black Beans and Cheddar"
source: "https://cooking.nytimes.com/recipes/1019600-loaded-sweet-potatoes-with-black-beans-and-cheddar?algo=identity&fellback=true&imp_id=5850989359143130&req_id=8685741788950034&surface=cooking-search-web&variant=0_relevance_reranking"
author: "Sarah Jampel"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT50M"
categories:
  - vegetables
  - main course
  - side dish
tags:
  - black bean
  - cheddar
  - five ingredient
  - sweet potato
  - fall
  - winter
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2018/09/21/dining/sj-sweet-pots-bb-cheddar/sj-sweet-pots-bb-cheddar-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Loaded Sweet Potatoes With Black Beans and Cheddar

> Source: https://cooking.nytimes.com/recipes/1019600-loaded-sweet-potatoes-with-black-beans-and-cheddar?algo=identity&fellback=true&imp_id=5850989359143130&req_id=8685741788950034&surface=cooking-search-web&variant=0_relevance_reranking

## Description
To make a halved sweet potato into a more substantial side, load it with black beans and sharp Cheddar, then send it back into the oven until the cheese melts and sizzles. Pair it with something a bit lighter, like fish tacos or a green salad, or build it into its own meal by adding sliced avocado, torn cilantro, a squeeze of lime juice, or even a fried egg.

## Ingredients
- 2 medium sweet potatoes (8 to 10 ounces each), scrubbed and dried
- 1 tablespoon olive oil
- Kosher salt
- 1 cup cooked black beans (if canned, rinsed and drained)
- 1 cup shredded sharp Cheddar
- Black pepper

## Instructions
1. Heat the oven to 425 degrees and line a sheet pan with parchment paper. Halve sweet potatoes lengthwise, then brush all over with olive oil and sprinkle both sides with salt.
2. Place cut side down on prepared sheet and roast for 30 to 40 minutes, or until completely cooked through. Take sweet potatoes out of the oven, turn them over and let cool slightly. Use a fork to rough up the flesh and slightly flatten the potatoes. Season with salt and pepper.
3. Divide half the cheese among the potato halves. Spoon the black beans over them, then cover with the remaining cheese. Return the pan to the oven and bake for another 5 minutes, until the cheese has melted and the beans have warmed through. Season with salt and pepper. Serve warm.

## Tags
- black bean
- cheddar
- five ingredient
- sweet potato
- fall
- winter
- vegetarian

## Notes
`,hb=`---
title: "Madhur Jaffrey’s Goan Shrimp Curry"
source: "https://cooking.nytimes.com/recipes/1027130-madhur-jaffreys-goan-shrimp-curry"
author: "David Tanis"
yield: "4 to 6 servings"
prep_time: "PT10M"
cook_time: "PT10M"
total_time: "PT20M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - curry
  - one pot
  - seafood
  - main course
tags:
  - cayenne pepper
  - coconut milk
  - ground turmeric
  - hot paprika
  - make-ahead
  - party
  - shrimp
  - stovetop
  - dairy-free
  - gluten-free
  - summer
  - Indian
cuisine: "indian"
image: "https://static01.nyt.com/images/2025/08/13/multimedia/11FD-TANISREX-DT-Madhur-Jaffreys-Goan-Shrimp-Curry-vbpk/11FD-TANISREX-DT-Madhur-Jaffreys-Goan-Shrimp-Curry-vbpk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Madhur Jaffrey’s Goan Shrimp Curry

> Source: https://cooking.nytimes.com/recipes/1027130-madhur-jaffreys-goan-shrimp-curry

## Description
Madhur Jaffrey has published several iterations of this recipe in her cookbooks. This version, from her MasterClass course, is a full-flavored but very easy to prepare curry, perfect for a novice cook. The coconut milk-based sauce may be prepared in advance and the shrimp added just before serving.

## Ingredients
- 2 tablespoons olive oil or vegetable oil
- 2 medium shallots, finely chopped
- 2 teaspoons hot paprika or Kashmiri red chile powder
- 1/2 teaspoon ground turmeric
- 1/2 teaspoon freshly ground black pepper
- 1/4 teaspoon ground cayenne, or more if preferred
- 1 1/4 cups coconut milk (from a 13-ounce can)
- 1 1/2 pounds large or medium shrimp, peeled and deveined
- Salt
- 2 teaspoons lemon juice
- Steamed basmati or jasmine rice, for serving
- Cilantro sprigs, for garnish (optional)

## Instructions
1. Heat oil in a wide skillet over medium-high. When oil is wavy, add shallots and fry until lightly browned, about 2 minutes. Remove pan from heat and stir in paprika, turmeric, pepper and cayenne. Stir spices to make a paste.
2. Return pan to medium-high heat and add the (well-shaken) coconut milk. Bring mixture to a simmer, stirring well.
3. Add shrimp, season well with salt, and stir to coat. Add lemon juice and turn heat to low. Cook, stirring until shrimp are pink and opaque, 2 to 3 minutes. Taste sauce and adjust seasoning, then serve immediately with steamed basmati or jasmine rice and cilantro (if using).

## Tags
- cayenne pepper
- coconut milk
- ground turmeric
- hot paprika
- make-ahead
- party
- shrimp
- stovetop
- dairy-free
- gluten-free
- summer
- Indian

## Notes
`,ub=`---
title: "Malt Chocolate and Marshmallow Sandwiches"
source: "https://cooking.nytimes.com/recipes/1021713-malt-chocolate-and-marshmallow-sandwiches?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&q=malted%20chocolate&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "16 to 18 sandwiches"
prep_time: ""
cook_time: ""
total_time: "PT1H30M"
categories:
  - dessert
tags:
  - christmas
  - valentine’s day
  - cookie
  - dark chocolate
  - gelatin
  - honey
  - malted-milk powder
cuisine: ""
image: "https://static01.nyt.com/images/2020/12/08/dining/yk-malt-sandwich-cookies/merlin_180932466_22f6aec2-4c33-498d-9b35-57d9cb6d1bd1-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Malt Chocolate and Marshmallow Sandwiches

> Source: https://cooking.nytimes.com/recipes/1021713-malt-chocolate-and-marshmallow-sandwiches?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&q=malted%20chocolate&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
These cookies contain three distinct textures in each bite: a chocolate malt shortbread cookie, a soft marshmallow center, and a smooth dark chocolate ganache topping. They are sophisticated cookies, but the flavors are inspired by a favorite childhood treat: malted milk balls. The secret ingredient is malted chocolate drink powder such as in Ovaltine, Milo or Bournvita powder. The gold leaf or flaky sea salt topping is optional, but don’t hold back if you’re ready to dive into something that looks as exquisite as it tastes.

## Ingredients
- 2 cups/255 grams all-purpose flour, plus more for rolling the dough
- 1/2 cup/45 grams malted chocolate powder, such as Ovaltine
- 1/4 teaspoon baking powder
- 3/4 cup/170 grams unsalted butter (1 ½ sticks), at room temperature
- 1/2 cup/110 grams dark brown sugar
- 1 tablespoon honey
- 1/2 teaspoon kosher salt
- 2 tablespoons heavy whipping cream
- 4 ounces/115 grams 70 percent dark chocolate, chopped, or baking squares or pistoles
- 1/2 cup plus 2 tablespoons/150 milliliters heavy whipping cream
- Edible gold leaf, luster dust or flaky sea salt (optional)
- 1/2 cup/100 grams granulated sugar
- 1/4 cup/60 milliliters honey
- 1/4 teaspoon kosher salt
- 1 1/2 teaspoons powdered gelatin

## Instructions
1. Prepare the cookies: In a small bowl, whisk together the flour, malted chocolate powder and baking powder.
2. In the bowl of a stand mixer, combine the butter, brown sugar, honey and salt. Mix with the paddle attachment on low speed until completely incorporated, scraping down the sides of the bowl as necessary. Add the flour mixture and heavy cream. Mix on low speed until it comes together in a smooth dough. Transfer to a work surface and pat into a 1-inch disk. Wrap with plastic wrap and refrigerate for at least 30 minutes. Wash and dry the mixing bowl and set aside.
3. Prepare the ganache topping: Transfer the chocolate pieces to a small bowl. In a small pot, heat the cream gently over low heat until it just begins to steam, about 4 to 5 minutes. Pour the hot cream mixture over the chocolate pieces. Allow the chocolate and cream mixture to sit for 5 minutes. Stir until the chocolate is completely melted and the ganache is smooth. Set aside.
4. Position oven racks near the center and heat oven to 350 degrees.
5. Once the dough is chilled, unwrap and place the dough in the center of a sheet of parchment. Place the second sheet of parchment on top and roll the dough to 1/4-inch thickness. Peel off the top layer of parchment and use it to line one of the baking sheets. Line a second baking sheet with parchment. Using a 2-inch round biscuit cutter, cut out cookies and transfer them to the lined baking sheets, spacing them about 1 ½ inches apart. Press scraps together, and fold the remaining parchment over the dough. Reroll and cut out rounds. (You can reroll the dough up to 2 times.) Bake until the cookies are set and the tops lose their shine, about 12 minutes, rotating the pans and switching racks halfway through baking. Let cool on the baking sheets for 5 to 10 minutes before moving the cookies to a wire rack to cool completely.
6. Make the marshmallow filling: In a small pot, combine the sugar, honey, salt and 1/4 cup water. Stir to incorporate and cook over medium-high until the sugar dissolves and the temperature of the syrup reaches 240 degrees, about 5 minutes.
7. Add 1/4 cup water to the bowl of a stand mixer fitted with the whisk attachment. Sprinkle in the gelatin and gently stir to moisten the grains. Allow the gelatin to bloom, about 3 minutes, while the sugar mixture cooks.
8. When the sugar reaches 240 degrees and the gelatin has bloomed, turn the mixer on low, and slowly add the syrup in an even stream. Increase the speed to high and whip the mixture until the meringue is thick and doubled, about 5 to 7 minutes. Scoop the mixture into a piping bag, seal the top by twisting, snip the end and set aside.
9. Assemble the cookies: Pipe a 1-inch mound of meringue on the flat side of half the cookies, leaving a 1/8-inch border. Allow to set for 2 to 3 minutes, then top each with another cookie. Thoroughly stir the ganache until smooth. Spoon a tablespoon of ganache in the center of each top cookie and spread evenly over the surface, allowing the ganache to drip down the sides. (If your ganache is completely cooled and set at this point, you can stir and spread it like frosting, or see Tip below for loosening.) Once all the cookies have been topped with ganache, allow the ganache to set slightly, about 5 minutes, and top each with gold leaf accents or luster dust, if using. Allow the cookies to set before serving, about 15 minutes.

## Tags
- christmas
- valentine’s day
- cookie
- dark chocolate
- gelatin
- honey
- malted-milk powder

## Notes
`,pb=`---
title: "Miso-Chile Asparagus With Tofu"
source: "https://cooking.nytimes.com/recipes/1025327-miso-chile-asparagus-with-tofu?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "2 to 3 servings"
prep_time: "PT10M"
cook_time: "PT15M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - vegetables
  - main course
tags:
  - asparagus
  - firm tofu
  - mirin
  - miso
  - partial-access-ic
  - rice vinegar
  - sake
  - sesame oil
  - spring
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/04/24/multimedia/24BIG-APPETITErex1-tjbq/24BIG-APPETITErex1-tjbq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Miso-Chile Asparagus With Tofu

> Source: https://cooking.nytimes.com/recipes/1025327-miso-chile-asparagus-with-tofu?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Broiling asparagus gives it a charred exterior but still keeps the vegetables soft and sweet within. Here, the stalks share a pan with cubed tofu, and everything is glazed with a pungent miso sauce spiked with mirin, rice vinegar and a good hit of chile. Served over rice or noodles, it makes a salty, spicy and deeply flavored meal that’s ready in less than half an hour.

## Ingredients
- 1 (14- to 16-ounce) block firm tofu, well drained
- 1 pound asparagus (about 1 bunch), trimmed
- 3 tablespoons neutral-flavored oil (such as grapeseed or peanut oil)
- Salt
- 2 garlic cloves, finely chopped
- 1/2 teaspoon red-pepper flakes, plus more for serving
- 2 tablespoons white or light miso
- 1 tablespoon sake (or use white wine or vermouth)
- 1 tablespoon rice vinegar
- 1 tablespoon mirin
- 1 teaspoon toasted sesame oil
- Sliced scallions, for garnish

## Instructions
1. Heat the broiler and place an oven rack about 6 inches from the heat source. Line a rimmed sheet pan with foil if you like (for easier clean-up). Cut tofu into 1-inch cubes, then dry with a clean kitchen towel or paper towels to absorb as much moisture as possible.
2. Put asparagus and tofu on the prepared pan and toss gently with 2 tablespoons oil. Spread everything out in one layer and season lightly with salt.
3. Slide pan under the broiler and broil until speckled lightly with brown, 3 to 6 minutes. Flip tofu and asparagus, then continue to broil until asparagus is tender and tofu is deeply browned in spots, 3 to 7 minutes longer, depending on the size of the asparagus and power of your broiler.
4. While the asparagus broils, make the miso-chile sauce. Heat a skillet over medium heat, then add remaining 1 tablespoon oil and heat until it thins out, about 30 seconds. Add garlic and red-pepper flakes to the pan; cook until fragrant, 30 seconds to 1 minute. Turn off the heat. Whisk in miso, sake, vinegar, mirin and sesame oil.
5. Remove pan from oven, slather miso mixture over the asparagus and tofu, and return to broiler for another 30 seconds to 2 minutes, until the miso mixture bubbles and glazes everything (watch carefully so nothing burns). Transfer asparagus and tofu to a serving platter and garnish with more red-pepper flakes, if you like, and sliced scallions. Serve hot or warm.

## Tags
- asparagus
- firm tofu
- mirin
- miso
- partial-access-ic
- rice vinegar
- sake
- sesame oil
- spring
- vegan
- vegetarian

## Notes
`,gb=`---
title: "Mushroom and Cottage Cheese Pasta"
source: "https://cooking.nytimes.com/recipes/1023691-mushroom-and-cottage-cheese-pasta?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - cottage cheese
  - cremini
  - penne
  - rigatoni
  - healthy
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2022/11/23/dining/hm-Mushroom-and-Cottage-Cheese-Pasta/merlin_216141078_3a19f9e4-d6b5-4035-bb47-f0a4499ca9f1-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Mushroom and Cottage Cheese Pasta

> Source: https://cooking.nytimes.com/recipes/1023691-mushroom-and-cottage-cheese-pasta?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This low-effort, intensely flavored pasta dish highlights the earthiness of mushrooms. First, the mushrooms are cooked to release moisture and to concentrate their flavor, then they are puréed into a velvety sauce. Cremini mushrooms are an excellent choice because they are accessible and have a bold mushroom taste, but other varieties also work. For even more mushroom flavor, add a few shiitake mushrooms or a small handful of rehydrated dried porcinis. Cottage cheese is perhaps the most underappreciated of the supermarket fresh cheeses. The curds melt through this pasta to add a feathery light, mildly sweet creaminess.

## Ingredients
- 2 tablespoons extra-virgin olive oil
- 1 1/2 pounds cremini mushrooms, cleaned, trimmed and roughly chopped (about 6 cups)
- 1 yellow or red onion, roughly chopped (about 2 cups)
- Kosher salt and black pepper
- 6 garlic cloves, roughly chopped
- 1 pound short pasta, such as rigatoni, penne or cavatappi
- 1 cup full-fat cottage cheese, plus more for serving
- 1/2 lemon
- 1 teaspoon red-pepper flakes (or to taste)
- Handful of parsley leaves, finely chopped

## Instructions
1. Heat a large (12-inch) skillet over medium-high. Drizzle with the olive oil and add the mushrooms, onion, 1 teaspoon salt and a big pinch of pepper. Cook, stirring occasionally, until the mushrooms have released some of their liquid, 4 to 5 minutes. Add the garlic and cook, stirring for another 7 to 8 minutes, until the mushrooms are completely soft, and golden in parts, and the liquid has cooked away. Turn off the heat.
2. Meanwhile, bring a large pot of salted water to a boil. Add the pasta and cook according to package instructions. Reserve 3 cups of the pasta cooking water, then drain the cooked pasta. Return the pasta to the pot.
3. Transfer the mushroom mixture to a blender or food processor and add 2 cups of the pasta cooking water. (Keep the rest, in case you need more to loosen the sauce.) Blend until silky. Taste, and add a touch more salt and pepper, if needed.
4. Pour the mushroom sauce onto the pasta, add the cottage cheese and toss to coat the pasta.
5. To serve, squeeze over some lemon juice; top with red-pepper flakes and chopped parsley. Finish with an additional dollop of cottage cheese, if you like.

## Tags
- cottage cheese
- cremini
- penne
- rigatoni
- healthy
- vegetarian

## Notes
`,mb=`---
title: "Mushroom Pasta Stir-Fry"
source: "https://cooking.nytimes.com/recipes/1022121-mushroom-pasta-stir-fry"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - weeknight
  - pastas
  - main course
tags:
  - broccolini
  - chile crisp
  - five-spice powder
  - kid-friendly
  - mushroom
  - oyster sauce
  - partial-access-ic
  - spaghetti
cuisine: ""
image: "https://static01.nyt.com/images/2021/04/25/dining/hm-pasta-stir-fry/hm-pasta-stir-fry-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Mushroom Pasta Stir-Fry

> Source: https://cooking.nytimes.com/recipes/1022121-mushroom-pasta-stir-fry

## Description
While stir-fries have long gone hand-in-hand with rice, this recipe shows the versatility of the dish. Here, a quick stir-fry is transformed into a flavorful, unconventional pasta sauce. Five spice is a Chinese seasoning that is said to incorporate all five tastes: sweet, sour, bitter, salty and umami. In this recipe, its blend of star anise, cloves, Chinese cinnamon, Sichuan peppercorns and fennel intensifies the robust flavor of the mushrooms. Don’t overcook the broccolini; it should be crisp, with a bright green vibrancy. You could easily substitute broccoli, green beans, snow peas or other crunchy greens. And don’t skip the butter (or use vegan butter, if you prefer), as it provides a beautiful richness which brings the sauce and ingredients together.

## Ingredients
- Kosher salt (such as Diamond Crystal) and black pepper
- 1 pound spaghetti or other long pasta
- 4 tablespoons neutral oil, such as grapeseed
- 1 pound mushrooms (any small variety), trimmed and cut into 1/4-inch-thick slices
- 2 garlic cloves, grated
- 1 1/4 teaspoons five-spice blend
- 3/4 pound broccolini, trimmed and cut into 3-inch pieces, thick stems halved lengthwise
- 3 tablespoons unsalted butter
- 2 scallions, thinly sliced
- 2 tablespoons oyster sauce (or vegetarian mushroom oyster sauce)
- 2 tablespoons maple syrup or brown sugar
- 1 tablespoon soy sauce
- 1 tablespoon sesame oil
- 1 tablespoon chile oil or chile crisp

## Instructions
1. Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions, until al dente. Reserve 1 cup of pasta cooking water, then drain the pasta.
2. Meanwhile, heat a large (12-inch), deep skillet over medium-high. When hot, add 2 tablespoons oil and the mushrooms. Cook for 7 to 8 minutes, giving it a stir every 2 minutes or so. The mushrooms will release lots of liquid, but it will evaporate as it cooks. When the mushrooms start to turn golden, add the garlic, five spice and 1/2 teaspoon each salt and black pepper, then cook for 1 minute. Transfer the mushrooms to a plate and set aside.
3. While the mushrooms are cooking, make the sauce: In a small bowl, whisk the oyster sauce, maple syrup, soy sauce, sesame oil and chile oil with 1/4 cup water until combined. Set aside.
4. Heat the same skillet back over medium-high. Add the remaining 2 tablespoons oil and the broccolini. Season with salt and pepper, and cook for 4 to 5 minutes, tossing occasionally, until the broccolini is tender but still quite crisp.
5. Add the pasta to the pan, along with the sauce and the butter. Using tongs, toss to combine, then add the reserved pasta cooking water, 1/4 cup at a time, just to loosen the sauce. When the butter has melted, add the mushrooms and toss again. Remove from the heat. Serve topped with scallions.

## Tags
- broccolini
- chile crisp
- five-spice powder
- kid-friendly
- mushroom
- oyster sauce
- partial-access-ic
- spaghetti

## Notes
`,fb=`---
title: "Mọin-Mọin for a Gathering (Savory Bean Pudding)"
source: "https://cooking.nytimes.com/recipes/773691081-m-in-m-in-for-a-gathering-savory-bean-pudding"
author: "Yewande Komolafe"
yield: "8 to 12 servings"
prep_time: "PT20M"
cook_time: "PT3H10M"
total_time: "PT3H30M"
categories:
  - Dinner
  - Beans
  - Custards and Puddings
  - Main Course
  - Side Dish
tags:
  - Black-Eyed Pea
  - Scotch Bonnet
  - Banana Leaf
  - Project
  - Party
  - Dairy-Free
  - Gluten-Free
  - West African
cuisine: "West African"
image: "https://static01.nyt.com/images/2026/03/16/multimedia/16FD-KOMOLAFE-GATHERING-SSREX-YK-Moin-Moin-Savory-Bean-Pudding-jmtz/16FD-KOMOLAFE-GATHERING-SSREX-YK-Moin-Moin-Savory-Bean-Pudding-jmtz-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Mọin-Mọin for a Gathering (Savory Bean Pudding)

> Source: https://cooking.nytimes.com/recipes/773691081-m-in-m-in-for-a-gathering-savory-bean-pudding

## Description
Thick and soft, this pudding of ẹ̀wà olóyin (a mildly sweet bean), onions, bell peppers and chiles gently cradles boiled eggs and smoked fish. In Yorùbá, one of the languages spoken across West Africa, the garnishes for this dish are often called ẹmi (lives or spirits), and can range from three to seven add-ons, such as chopped bits of cooked meat or fresh prawns. Wrapped in fragrant ewé mọin-mọin (banana leaves are a good alternative) and steamed, the bean batter and garnishes hold their robust flavors like a surprise gift. Dried crayfish and red palm oil are folded into the batter to add richness, and a whisked egg ensures a firmly set texture for this large-format version of mọin-mọin, which sometimes come in smaller cone-shaped, leaf-wrapped packages. Serve cut into wedges or scooped alongside jollof rice and èfọ́ rírò or any leafy green stew.

## Ingredients
- 1¼ cups dried, peeled black-eyed peas or ẹ̀wà olóyin (honey beans), see Tip
- 3 large banana leaves, cut into 10-inch squares, rinsed and wiped clean with a damp cloth (save trimmings to line the skillet)
- ¼ cup red palm oil (see Tip)
- ¼ cup vegetable oil
- ½ cup ground dried crayfish (see Tip), or tiny dried shrimp (soaked in warm water for 5 minutes to soften, then drained)
- 1 medium red bell pepper, coarsely chopped
- 1 small red or yellow onion, coarsely chopped
- 1 Scotch bonnet chile, stem off, seeded if you like
- 1 ½ teaspoons kosher salt (such as Diamond Crystal)
- 1 large egg, whisked for batter, plus 2 hard-boiled (7- to 8-minute) eggs, quartered, for garnish
- 2 (7-ounce) pieces ẹja panla (cold-smoked hake) or smoked white fish fillet, skin off and picked of any bones, flakes broken into 1-inch pieces, see Tip

## Instructions
1. Place the peeled black-eyed peas in a medium bowl and cover with about 2 inches of room-temperature water. Soak for 1½ to 2 hours, until black-eyed peas plump and rehydrate. (They should feel rubbery between your fingers, similar to a soaked cashew, and break when pressed without crumbling or turning to mush.) Drain the beans, rinse with fresh water and drain again. (The beans can also be soaked ahead of time, covered with water in an airtight container and refrigerated for up to 12 hours.)
2. As the black-eyed peas soak, line the bottom of a large (10- to 12-inch) stainless steel skillet, Dutch oven or cast-iron pan with the banana-leaf trimmings. Place a 10-inch square of banana leaf over the trimmings to hold everything in place. Arrange more 10-inch squares in the pan to come up the sides while overlapping in the center. Place the remaining 10-inch square of banana leaf over the others to hold everything in place. Trim off any overhang that extends more than 1 inch beyond the lip of the skillet.
3. Place a small (8-inch) skillet over medium heat. Add the red palm oil and vegetable oil, and gently warm up to melt and mix together. Add the ground crayfish (or soaked dried shrimp) and stir while frying until fragrant, sizzling and popping with foamy bubbles, expanding and creeping their way up the skillet, about 6 minutes. Pay attention here: This step happens quicker than expected, and the crayfish could burn if the oil gets too hot. Remove from heat.
4. Heat the oven to 325 degrees. Place racks in the center and bottom of your oven. Take out a 9-by-13-inch baking dish and set aside.
5. Working in batches, transfer half the drained beans to a blender, and add red bell pepper, onion, Scotch bonnet, salt and 1 cup water. Blend on low speed, gradually working up to high speed, until the mixture is completely smooth, about 3 minutes.
6. Add the rest of the beans and blend, increasing the speed from low to high once more, and adding a tablespoon of water to help the blender along if necessary, about 1 minute. The purée should be loose and whipped to a latte foam-like consistency with lots of tiny bubbles. Transfer to a medium bowl and use a spatula to gently stir in the raw egg and the oil-crayfish mixture.
7. Transfer the bean purée to the large skillet lined with banana leaves. Lay the hard-boiled egg pieces horizontally with the yolk visible, leaving half the egg submerged in the batter and half sticking out. Dot the surface with the pieces of flaked fish. Use a sheet of aluminum foil to cover the top of the pan, crimping the edges and sides to completely seal and create an insulated steam chamber. (Use 2 strips of foil, secured in an X shape to the pan's edge over the banana leaves, if necessary. If using thin foil, use extra if necessary to make a strong seal.)
8. Slide the 9-by-13-inch baking dish onto the bottom rack of the oven and pour 2 cups of water in to create some steam. Transfer the skillet to the center rack of the oven. Bake until the edges are just set but the center jiggles when moved back and forth, about 35 minutes. Remove the foil completely.
9. Continue to bake until the entire custard is set and jiggles more slowly when the pan is moved back and forth, 20 to 22 minutes. A toothpick or knife inserted in the center should come out with a bit of bean paste and crumbs stuck on. Let cool for 30 to 40 minutes (the pudding will continue to set once out of the oven). Cut into wedges or scoop out and serve from the pan at room temperature, alongside jollof rice and èfọ́ rírò.

## Tags
- Black-Eyed Pea
- Scotch Bonnet
- Banana Leaf
- Project
- Party
- Dairy-Free
- Gluten-Free
- West African

## Notes
`,bb=`---
title: "No-Cook Chili Bean Salad"
source: "https://cooking.nytimes.com/recipes/1026926-no-cook-chili-bean-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT15M"
cook_time: "PT10M"
total_time: "PT25M"
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
  - black bean
  - budget
  - chili
  - pinto bean
  - salad
  - tomato
  - dairy-free
  - gluten-free
  - vegan
  - vegetarian
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2025/06/20/multimedia/hm-smoky-bean-and-tomato-salad-vkgb/hm-smoky-bean-and-tomato-salad-vkgb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# No-Cook Chili Bean Salad

> Source: https://cooking.nytimes.com/recipes/1026926-no-cook-chili-bean-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
All the usual suspects found in a vegetarian bean chili appear in this salad — canned beans, tomato, bell pepper, red onion and spices — but there’s no cooking-with-heat required. The tomatoes are salted to tenderize and coax out their sweet, umami juices. Cumin, coriander, smoked paprika and dried oregano inject smoky earthiness and complexity. While black and pinto beans are used here, it is absolutely viable to use whatever beans you have on hand for this pantry-friendly recipe. Best of all, the salad can be dressed up with the usual chili toppings such as avocado, sour cream and cheese. Eat as is, or with tortillas or corn chips on the side.

## Ingredients
- 1 pound tomatoes, roughly chopped into 1-inch chunks
- 1/2 small red onion, finely diced
- 1 garlic clove, finely chopped
- 1 tablespoon red or white wine vinegar
- Salt and pepper
- 1 (15-ounce) can pinto beans, rinsed
- 1 (15-ounce) can black beans, rinsed
- 1 bell pepper, roughly chopped
- 1 teaspoon ground cumin
- 1 teaspoon ground coriander
- 1 teaspoon smoked paprika
- 1 teaspoon dried oregano
- 1/2 to 1 jalapeño, chopped
- Handful chopped cilantro leaves
- 1/4 cup extra-virgin olive oil, or more as needed
- 1 lime, quartered
- Any combination of corn chips, tortillas, sour cream, avocado and cheese (such as Cheddar, crumbled feta or queso blanco), for serving

## Instructions
1. Place the tomatoes, red onion, garlic, vinegar and 1 teaspoon salt in a bowl and toss to combine. Leave to marinate for 5 to 10 minutes. Using your hands, squeeze the tomatoes to crush them roughly, extracting juice and softening them.
2. To the tomatoes, add both types of beans, the bell pepper, cumin, coriander, smoked paprika, oregano, jalapeño, cilantro and 1/4 cup olive oil; toss to combine. Taste and season with salt and pepper and more olive oil, if you like.
3. Divide the salad among four serving bowls. Serve with lime wedges on the side, and top with desired toppings.

## Tags
- black bean
- budget
- chili
- pinto bean
- salad
- tomato
- dairy-free
- gluten-free
- vegan
- vegetarian
- summer

## Notes
`,yb=`---
title: "Noodle Okonomiyaki (Cabbage and Egg Pancakes)"
source: "https://cooking.nytimes.com/recipes/1026711-noodle-okonomiyaki-cabbage-and-egg-pancakes"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT40M"
total_time: "PT50M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - snack
  - weeknight
  - noodles
  - main course
tags:
  - budget
  - cabbage
  - egg
  - make-ahead
  - ramen noodle
  - stovetop
  - vegetable pancake
  - dairy-free
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/05/15/multimedia/hm-cabbage-and-noodle-pancakes-zvtm/hm-cabbage-and-noodle-pancakes-zvtm-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Noodle Okonomiyaki (Cabbage and Egg Pancakes)

> Source: https://cooking.nytimes.com/recipes/1026711-noodle-okonomiyaki-cabbage-and-egg-pancakes

## Description
These hearty, vegetarian main-meal pancakes have it all: noodles, eggs and big umami flavors. Loosely inspired by Hiroshima-style okonomiyaki, this weeknight-friendly recipe is a shortcut version, with cabbage and instant noodles tossed with seasoned eggs to make a thick, satisfying pancake. It provides a good chance to use up that leftover wedge of cabbage in your fridge, as a little cabbage goes a long way here. There’s room to experiment with other vegetables, too, such as carrots, bean sprouts, potato or broccoli. The egg seasonings — soy sauce, scallions and sesame oil — are also flexible: Try adding a dab of miso paste, a drizzle of chile crisp, Maggi seasoning or a spice paste like gochujang. For a gluten-free alternative, opt for glass noodles. This recipe shows that the best weeknight recipes are the ones that work with what’s available in your pantry.

## Ingredients
- 2 (3-ounce) instant-ramen noodle packages (seasoning packets discarded)
- Boiled water
- 8 large eggs
- 4 teaspoons soy sauce or tamari
- 4 teaspoons toasted sesame oil
- 4 scallions, thinly sliced
- Salt and pepper (preferably white pepper)
- 1/2 medium green, red or savoy cabbage (1 1/4 to 1 1/2 pounds), halved, core removed and thinly sliced crosswise
- Vegetable or sunflower oil
- Sriracha, for serving
- Mayonnaise (preferably Kewpie brand), for serving
- White sesame seeds, for serving

## Instructions
1. Place the instant noodles into a large, heatproof bowl, top with about 6 cups just-boiled water, and soak for 7 to 8 minutes.
2. Meanwhile, place the eggs into a large bowl and whisk to combine. Add the soy sauce, sesame oil and 3/4 of the scallions (keep some for garnish); season with about 1 teaspoon each of salt and pepper and whisk to combine.
3. Drain the noodles and loosen them up with tongs or your hands. Add the cabbage and the noodles to the eggs and toss well to make sure everything is coated.
4. Heat a small 6-inch or 8-inch nonstick skillet on medium-high. When hot, drizzle with vegetable oil and add 1/4 of the cabbage and noodle mixture. Use a spatula (a flexible fish spatula works well here) to tuck in the sides around the skillet. Reduce heat to medium and cover (if you don’t have a lid, use a large skillet or sheet pan) and leave to cook for 3 to 4 minutes, until the bottom is golden. Uncover and top the skillet with a plate that is slightly bigger than the skillet, then confidently flip the pancake so that the cooked side is facing up. Slide the pancake back into the skillet to cook the other side. Leave to cook on medium, uncovered, for another 3 to 4 minutes.
5. Transfer the pancake to a plate and continue cooking the other three pancakes, wiping the pan clean and adding another drizzle of vegetable oil between batches.
6. To serve, drizzle each pancake with Sriracha and mayonnaise, and scatter over the sesame seeds and remaining scallions. (Pancakes can be cooked ahead and stored in the fridge for up to 24 hours in an airtight container. Reheat in the skillet or microwave.)

## Tags
- budget
- cabbage
- egg
- make-ahead
- ramen noodle
- stovetop
- vegetable pancake
- dairy-free
- vegetarian

## Notes
`,kb=`---
title: "Olive Oil Cake"
source: "https://cooking.nytimes.com/recipes/1019986-olive-oil-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Samantha Seneviratne"
yield: "One 9-inch cake"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - cakes
  - dessert
tags:
  - ck-mccormick-0526-sponsor
  - extra virgin olive oil
  - lemon juice
  - lemon zest
  - make-ahead
  - thanksgiving
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2019/02/05/dining/ss-olive-oil-cake/ss-olive-oil-cake-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Olive Oil Cake

> Source: https://cooking.nytimes.com/recipes/1019986-olive-oil-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This simple, lemon-scented olive oil cake is an elegant treat all by itself or topped with whipped cream, fruit or ice cream. The olive oil contributes a pleasant fruity flavor while keeping the cake moister for longer than butter ever could. Make sure your olive oil tastes delicious and fresh. If you wouldn’t eat it on a salad, it won’t be good in your cake.

## Ingredients
- 1 cup/240 milliliters good-quality extra-virgin olive oil, plus more for the pan
- 2 cups/255 grams all-purpose flour, plus more for the pan
- 1 teaspoon kosher salt
- 1 teaspoon baking powder
- 1/4 teaspoon baking soda
- 1 1/2 cups/300 grams granulated sugar, plus about 2 tablespoons for sprinkling
- 3 large eggs, at room temperature
- 1 tablespoon freshly grated lemon zest plus 2 tablespoons fresh lemon juice
- 1 1/4 cups/295 milliliters whole milk, at room temperature

## Instructions
1. Heat the oven to 375 degrees. Grease a 9-inch round cake pan using extra-virgin olive oil and line the bottom with parchment paper. Oil the parchment and flour the pan, shaking out any excess flour.
2. In a large bowl, whisk together the flour, salt, baking powder and baking soda.
3. In the bowl of an electric mixer set on high, beat the sugar, eggs and lemon zest until very thick and fluffy, about 5 minutes. With the mixer still running, slowly drizzle in the oil and beat until incorporated, another 2 minutes. Reduce speed to low, and add milk and lemon juice. Gradually add the flour mixture and beat until just combined. Transfer the batter to the prepared pan, smooth the top using an offset spatula and sprinkle the top with about 2 tablespoons sugar.
4. Bake the cake until a skewer inserted into the center comes out clean, 40 to 45 minutes. Transfer to a rack to cool for 20 minutes, then run a knife around the edge to release the sides of the cake from the pan. Invert the cake onto a plate and then flip it back over onto the rack to cool completely. Store leftovers in an airtight container at room temperature for up to one week.

## Tags
- ck-mccormick-0526-sponsor
- extra virgin olive oil
- lemon juice
- lemon zest
- make-ahead
- thanksgiving
- Italian

## Notes
`,vb=`---
title: "One-Pan Crispy Chicken and Chickpeas"
source: "https://cooking.nytimes.com/recipes/1023862-one-pan-crispy-chicken-and-chickpeas"
author: "Yossy Arefi"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - poultry
  - main course
tags:
  - cast iron
  - chicken thigh
  - chickpea
  - lemon juice
  - skillet
  - spinach
cuisine: ""
image: "https://static01.nyt.com/images/2023/03/21/multimedia/-ya-skillet-chicken-chickpeas-and-spinach-zjgp/-ya-skillet-chicken-chickpeas-and-spinach-zjgp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# One-Pan Crispy Chicken and Chickpeas

> Source: https://cooking.nytimes.com/recipes/1023862-one-pan-crispy-chicken-and-chickpeas

## Description
This speedy, no-fuss meal comes together in one pan with a minimal ingredient list — and barely requires any chopping. The chicken skin crisps as it roasts and the chickpeas, garlic and spinach soak up any juices at the bottom of the pan. A squeeze of fresh lemon juice at the end brightens up the whole dish. Make sure to stir the chickpeas and spinach together gently at the end to avoid breaking up the chickpeas too much. For added flavor, you could dust the chicken with smoked paprika, ground turmeric or your favorite spice blend before cooking. Serve this dish with yogurt and hot sauce on the side, and flatbread, if you like.

## Ingredients
- 4 bone-in, skin-on chicken thighs (about 1 3/4 pounds)
- Kosher salt and pepper
- 2 teaspoons olive oil, plus more as needed
- 2 (15-ounce) cans of chickpeas, rinsed
- 4 large garlic cloves, thinly sliced
- 4 (packed) cups or 1 (5-ounce) package baby spinach
- 1 large lemon, halved
- Yogurt and hot sauce (both optional), for serving

## Instructions
1. Heat oven to 400 degrees with a rack in the center.
2. Pat the chicken dry and season both sides with salt and pepper. Heat 2 teaspoons of olive oil in a large cast-iron skillet over medium-high heat. Put the chicken thighs in the skillet, skin-side down, and cook for 4 to 5 minutes, until light golden brown. Flip and cook for 2 more minutes. Transfer the chicken to a plate.
3. Add the chickpeas and garlic to the skillet and stir to coat in the oil and juices. If the pan seems at all dry, drizzle in a bit of olive oil. Season with salt and pepper.
4. Place the chicken on top of the chickpeas, skin side up, in an even layer and transfer the pan to the oven. Bake for 30 minutes or until the chicken is deeply golden and cooked through.
5. Remove the chicken to a clean plate, put the pan back on the stovetop over medium heat and add the spinach to the chickpeas in the pan, one handful at a time, stirring it until just wilted. Add the chicken back to the pan and squeeze a lemon half over the top; cut the remaining lemon half into 4 wedges. Serve the chicken, chickpeas and spinach with the lemon wedges on the side, and yogurt and hot sauce for serving, if you like.

## Tags
- cast iron
- chicken thigh
- chickpea
- lemon juice
- skillet
- spinach

## Notes
`,wb=`---
title: "One-Pot Chicken Meatballs With Greens"
source: "https://cooking.nytimes.com/recipes/1025342-one-pot-chicken-meatballs-with-greens?algo=cooking_search_relevance_metric_ios_and_web&fellback=false&imp_id=6528533803415718&req_id=1339809576890030&surface=cooking-search-web&variant=0_relevance_reranking"
author: "Yasmin Fahr"
yield: "4 servings"
prep_time: "PT15M"
cook_time: "PT25M"
total_time: "PT40M"
categories:
  - dinner
  - quick
  - weeknight
  - meatballs
  - one pot
  - poultry
  - main course
tags:
  - budget
  - great leftovers
  - greek yogurt
  - ground chicken
  - panko
  - partial-access-ic
  - stovetop
  - swiss chard
  - healthy
cuisine: ""
image: "https://static01.nyt.com/images/2024/05/09/multimedia/yf-meatballs-and-greens-zcwb/yf-meatballs-and-greens-zcwb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# One-Pot Chicken Meatballs With Greens

> Source: https://cooking.nytimes.com/recipes/1025342-one-pot-chicken-meatballs-with-greens?algo=cooking_search_relevance_metric_ios_and_web&fellback=false&imp_id=6528533803415718&req_id=1339809576890030&surface=cooking-search-web&variant=0_relevance_reranking

## Description
An upside down take on typical skillet meatballs, these juicy garlic-and-herb filled ones are smothered in greens rather than being cooked on top or alongside them, an ingenious trick to streamline efforts for weeknight cooks. The meatballs first brown in the pot for both color and flavor, then are covered with a mound of greens, which achieves two feats: It gently finishes cooking the meatballs while the chard and lemon slices steam and collapse on top, draping themselves over these hidden delights. Scoop them up with a soup ladle, spooning the lemony pan sauce over everything.

## Ingredients
- 1/2 cup panko bread crumbs
- 1/3 cup full-fat thick yogurt (preferably Greek or Icelandic)
- 2 garlic cloves, minced or grated
- 2 scallions, white and light green parts thinly sliced
- 2 teaspoons dried oregano
- 1/4 teaspoon crushed red pepper
- Salt
- 1 pound ground chicken
- 1/4 cup olive oil, plus more as needed
- 1 pound rainbow or Swiss chard (1 large or 2 small bunches), tender stalks sliced and leaves cut into 1-inch ribbons
- 1 lemon, halved, 1/2 thinly sliced
- 1 teaspoon ground cumin

## Instructions
1. In a large bowl, combine the bread crumbs, yogurt, garlic, scallions, oregano, crushed red pepper and 1 teaspoon salt. Add the chicken and gently mix until fully combined.
2. Coat your palms in olive oil, then shape the meat into 14 medium meatballs (about 2 inches each), making sure each is lightly coated with oil by refreshing the coating on your hands. Set the meatballs directly on a sheet pan or on parchment paper.
3. Heat a 12-inch Dutch oven (or other heavy pot with a tight-fitting lid) over medium heat for 2 minutes until hot. Pour in 2 tablespoons of olive oil, tilting the pot to coat the surface, then add the meatballs. Let cook until they are golden halfway up the sides, occasionally turning them when they easily release, adding extra oil if needed, about 7 minutes.
4. Meanwhile, to another large bowl, add the greens, lemon slices, cumin and remaining 2 tablespoons olive oil, and season with salt; toss to coat the leaves, scrunching them up as needed.
5. Smother the meatballs with the greens and lemon slices. Cover, reduce the heat to medium, and cook until the meatballs are cooked through and the greens tender, 12 to 13 minutes.
6. Use a soup ladle to scoop up the meatballs, resting them on the greens, browned-side up and ladling any juices on top of the meatballs and greens. Cut the remaining lemon into wedges for serving, if desired.

## Tags
- budget
- great leftovers
- greek yogurt
- ground chicken
- panko
- partial-access-ic
- stovetop
- swiss chard
- healthy

## Notes
`,_b=`---
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
`,Sb=`---
title: "One-Pot Tortellini with Prosciutto and Peas"
source: "https://cooking.nytimes.com/recipes/1025271-one-pot-tortellini-with-prosciutto-and-peas"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT20M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - one pot
  - pastas
  - main course
tags:
  - budget
  - frozen pea
  - heavy cream
  - partial-access-ic
  - prosciutto
  - stovetop
  - tortellini
cuisine: ""
image: "https://static01.nyt.com/images/2024/04/11/multimedia/as-one-pot-tortellinirex-hwkq/as-one-pot-tortellinirex-hwkq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# One-Pot Tortellini with Prosciutto and Peas

> Source: https://cooking.nytimes.com/recipes/1025271-one-pot-tortellini-with-prosciutto-and-peas

## Description
Luxurious in the end result but not in process, this quick, one-pot pasta features crisp shards of salty prosciutto, soft pillows of tortellini and bright pops of sweet peas in a silky lemon cream sauce. The dish is inspired by pasta alla papalina, a more delicate carbonara that uses prosciutto instead of guanciale and Parmesan instead of Pecorino. While pasta alla papalina often uses long noodles, this dish uses tortellini and cooks them right in the broth and heavy cream: No waiting for a pot of water to boil, and the starch from the pasta helps the cream thicken into a sauce. Serve alongside an arugula salad or seared asparagus. You can use bacon instead of prosciutto, which will add some smokiness.

## Ingredients
- 1½ tablespoons unsalted butter, plus more if needed
- 4 slices prosciutto (about 2 ounces)
- 1 shallot, finely chopped
- 16 to 20 ounces refrigerated cheese tortellini
- 2 cups (10 ounces) frozen peas (no need to thaw)
- 1 cup chicken broth
- 1 cup heavy cream
- 1/4 teaspoon ground nutmeg (optional)
- Salt and black pepper
- Zest and juice of 1/2 lemon (about 1½ teaspoons zest plus 1½ tablespoons juice)

## Instructions
1. In a large nonstick skillet, melt the butter over medium. Add the prosciutto in a single layer and cook, flipping halfway through, until golden and crisp, 2 to 4 minutes. Press occasionally with a spatula to ensure even crisping and reducing the heat as necessary if the fat begins to smoke. Transfer the prosciutto to a plate, leaving the fat in the pan.
2. To the skillet, add the shallot and cook over medium until softened, 2 to 4 minutes, adding about ½ tablespoon butter if the pan is dry. Add the tortellini, peas, chicken broth, heavy cream and nutmeg (if using) and season with salt and pepper. Simmer over medium-high, stirring occasionally, until the pasta and peas are tender, 3 to 5 minutes. (The sauce will thicken as it cools.) Turn off the heat and stir in the lemon zest and juice. Season to taste with salt and pepper. Crumble the prosciutto on top.

## Tags
- budget
- frozen pea
- heavy cream
- partial-access-ic
- prosciutto
- stovetop
- tortellini

## Notes
`,Tb=`---
title: "Oven-Roasted Chicken Shawarma"
source: "https://cooking.nytimes.com/recipes/1017161-oven-roasted-chicken-shawarma?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Sam Sifton"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - lunch
  - poultry
  - main course
tags:
  - chicken thigh
  - kid-friendly
  - partial-access-ic
  - party
  - gluten-free
  - Turkish
cuisine: "turkish"
image: "https://static01.nyt.com/images/2023/03/19/multimedia/SS-Oven-Roasted-Chicken-Shawarma-phmt/SS-Oven-Roasted-Chicken-Shawarma-phmt-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Oven-Roasted Chicken Shawarma

> Source: https://cooking.nytimes.com/recipes/1017161-oven-roasted-chicken-shawarma?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Here is a recipe for an oven-roasted version of the flavorful street-side classic usually cooked on a rotisserie. It is perfect for an evening with family and friends. Serve with pita and tahini, chopped cucumbers and tomatoes, some olives, chopped parsley, some feta, fried eggplant, hummus swirled with harissa, rice or rice pilaf. You can make the white sauce that traditionally accompanies it by cutting plain yogurt with mayonnaise and lemon juice, and flecking it with garlic. For a red to offset it, simmer ketchup with crushed red pepper and a hit of red-wine vinegar until it goes syrupy and thick, or just use your favorite hot sauce instead.

## Ingredients
- 2 lemons, juiced
- 1/2 cup plus 1 tablespoon olive oil
- 6 cloves garlic, peeled, smashed and minced
- 1 teaspoon kosher salt
- 2 teaspoons freshly ground black pepper
- 2 teaspoons ground cumin
- 2 teaspoons paprika
- 1/2 teaspoon turmeric
- A pinch ground cinnamon
- Crushed red pepper, to taste
- 2 pounds boneless, skinless chicken thighs
- 1 large red onion, peeled and quartered
- 2 tablespoons chopped fresh parsley

## Instructions
1. Prepare a marinade for the chicken. Combine the lemon juice, 1/2 cup olive oil, garlic, salt, pepper, cumin, paprika, turmeric, cinnamon and crushed red pepper in a large bowl, then whisk to combine. Add the chicken and toss well to coat. Cover and store in refrigerator for at least 1 hour and up to 12 hours.
2. When ready to cook, heat oven to 425 degrees. Use the remaining tablespoon of olive oil to grease a rimmed sheet pan. Add the quartered onion to the chicken and marinade, and toss once to combine. Remove the chicken and onion from the marinade, and place on the pan, spreading everything evenly across it.
3. Put the chicken in the oven and roast until it is browned, crisp at the edges and cooked through, about 30 to 40 minutes. Remove from the oven, allow to rest 2 minutes, then slice into bits. (To make the chicken even more crisp, set a large pan over high heat, add a tablespoon of olive oil to the pan, then the sliced chicken, and sauté until everything curls tight in the heat.)
4. Scatter the parsley over the top and serve with tomatoes, cucumbers, pita, white sauce, hot sauce, olives, fried eggplant, feta, rice — really anything you desire.

## Tags
- chicken thigh
- kid-friendly
- partial-access-ic
- party
- gluten-free
- Turkish

## Notes
`,zb=`---
title: "Pan-Roasted Asparagus Soup"
source: "https://cooking.nytimes.com/recipes/5937-pan-roasted-asparagus-soup?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Mark Bittman"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - appetizer
tags:
  - asparagus
  - five ingredient
  - great leftovers
  - soup
  - gluten-free
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2017/02/28/dining/28COOKING-ROASTASPARAGUS-SOUP1/28COOKING-ROASTASPARAGUS-SOUP1-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pan-Roasted Asparagus Soup

> Source: https://cooking.nytimes.com/recipes/5937-pan-roasted-asparagus-soup?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This simple soup can be ready in under an hour and takes full advantage of the flavor of asparagus by pan-roasting it before puréeing. Fresh tarragon takes it up a notch.

## Ingredients
- 1 1/2 pounds thin asparagus (if only thick spears are available, peel them first)
- 2 tablespoons butter or extra virgin olive oil
- 10 fresh tarragon leaves, or 1/2 teaspoon dried tarragon
- 4 cups chicken or other stock
- Salt and pepper

## Instructions
1. Break off bottom part of each asparagus stalk, and discard. Coarsely chop the rest of stalks, leaving 12 or 16 of the flower ends whole. Put butter or oil in a large, deep skillet over medium-high heat. A minute later, add asparagus and tarragon, raise heat to high, and cook, stirring occasionally, until nicely browned, about 10 minutes. Remove whole flower ends; set aside.
2. Add stock and some salt and pepper; bring to a boil, reduce heat and simmer until asparagus is very tender, about 10 minutes. Cool at least a few minutes.
3. Pour soup into a blender, in batches if necessary, and carefully purée. Return to pan, and, over medium-low heat, reheat gently. When soup is hot, adjust seasoning. Put 3 or 4 asparagus flower ends in each of 4 bowls; ladle in soup, and serve.

## Tags
- asparagus
- five ingredient
- great leftovers
- soup
- gluten-free
- spring

## Notes
`,Ab=`---
title: "Panang Curry"
source: "https://cooking.nytimes.com/recipes/1024637-panang-curry"
author: "Naz Deravian"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT30M"
total_time: "PT35M"
categories:
  - dinner
  - quick
  - curry
  - main course
tags:
  - chicken breast
  - chicken thigh
  - coconut milk
  - fish sauce
  - great leftovers
  - makrut lime leaf
  - peanut
  - red curry paste
  - stovetop
  - Thai
cuisine: "thai"
image: "https://static01.nyt.com/images/2023/12/06/multimedia/ND-Panang-Curry-mqtv-copy/ND-Panang-Curry-mqtv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Panang Curry

> Source: https://cooking.nytimes.com/recipes/1024637-panang-curry

## Description
Rich with coconut milk and crushed peanuts, panang curry, also known as phanaeng or panaeng curry, is subtly spiced with coriander and cumin. This version is made with chicken, but you’ll often find it made with beef and sometimes prawns. Panang curry is sometimes mistakenly linked to Penang, a Malaysian island, but it actually originated in Thailand. According to Pim Techamuanvivit, the chef and owner of Nari and Kin Khao restaurants in San Francisco, and the executive chef of Nahm Bangkok in Bangkok, it’s important to use thick coconut milk for the creamiest results, and be sure to break the sauce by simmering until a layer of bright red oil shimmers on top. Purchase panang curry paste online or at an Asian market and add crushed peanuts to it if it doesn’t include them (not all of them do), or prepare your own paste, as is done here.

## Ingredients
- 1/2 teaspoon coriander seeds
- 1/2 teaspoon cumin seeds
- 1/4 cup/1 ounce dry-roasted, unsalted peanuts
- 2 to 4 tablespoons red curry paste, to taste (see Tip)
- 1 pound boneless, skinless chicken breasts or thighs
- 2 teaspoons fish sauce, plus more as needed
- 1 (13.5-ounce) can full-fat coconut milk (do not shake)
- 8 makrut lime leaves, deveined, 6 torn and 2 thinly sliced, or 1 teaspoon grated lime zest, for serving
- 1 1/2 teaspoons palm, granulated or brown sugar, plus more as needed
- 1 small, mild, thin-skinned pepper, such as a Fresno, Anaheim or banana pepper, or 1/2 small red bell pepper, thinly sliced
- Thai basil, thinly sliced, for serving (optional, if makrut lime leaves are not used)
- Rice, for serving

## Instructions
1. Prepare the curry paste: Heat a medium sauté pan over medium. Add the coriander and cumin. Swirl the pan around, or toss the seeds with a wooden spoon, and gently toast until fragrant, about 1 minute, taking care not to burn the spices. Transfer to a small plate and cool, then place in a spice grinder or mortar and pestle, and grind to a fine powder.
2. Add the peanuts and finely grind until smooth. Transfer the mixture to a small bowl, add the red curry paste and stir until mixed.
3. Thinly slice the chicken into 1 1/2-inch-long pieces. Place in a medium bowl, drizzle with the fish sauce and mix until coated.
4. Heat the same pan over medium-high. Scoop 4 tablespoons of the thick cream off the top of the coconut milk and add it to the pan; it will immediately sizzle. Stir until thickened and bubbling on the sides, about 30 seconds. Stir in the curry paste, to taste. Reduce to medium, and cook the paste, continuously stirring, until a thick paste forms and the coconut oil separates (the sauce “breaks”), 2 to 3 minutes. If it starts sticking, add a splash of coconut milk and scrape up anything from the bottom of the pan.
5. Add the torn lime leaves or zest and sugar. Cook, continuously stirring, to dissolve the sugar and infuse the flavors, about 2 minutes. Add the remaining coconut milk, increase to medium-high, bring to a boil and cook, continuously stirring, until the curry has thickened enough to coat the back of a spoon and has a layer of bright red oil on top, 4 to 8 minutes. The curry should be at a lively simmer; adjust the heat as necessary.
6. Add the chicken and cook, stirring frequently, until cooked through, 3 to 4 minutes. If using, stir in the peppers, saving a few for serving, and cook until just incorporated, about 1 minute. Taste and add more fish sauce and sugar, if needed. (Be mindful, this is not a sweet curry; the sweetness should hit a back note, not lead with it.)
7. Garnish with the sliced lime leaves or Thai basil and reserved peppers. Serve alongside rice.

## Tags
- chicken breast
- chicken thigh
- coconut milk
- fish sauce
- great leftovers
- makrut lime leaf
- peanut
- red curry paste
- stovetop
- Thai

## Notes
`,Cb=`---
title: "Parmesan Cabbage Soup"
source: "https://cooking.nytimes.com/recipes/1024002-parmesan-cabbage-soup"
author: "Melissa Clark"
yield: "4 to 6 servings"
prep_time: "PT15M"
cook_time: "PT40M"
total_time: "PT55M"
categories:
  - dinner
  - easy
  - lunch
  - weeknight
  - main course
tags:
  - cilantro
  - dill
  - freezer friendly
  - great leftovers
  - green cabbage
  - leek
  - parmesan
  - rice
  - soup
  - spring
  - winter
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2023/03/08/multimedia/03bigapperex3-cabbage-htjf/03bigapperex3-cabbage-htjf-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Parmesan Cabbage Soup

> Source: https://cooking.nytimes.com/recipes/1024002-parmesan-cabbage-soup

## Description
This warming, nourishing soup, thickened with rice, is full of soft strands of green cabbage. Parmesan is used here in two ways: The rinds are simmered in with the broth, and the cheese is grated and sprinkled on top, adding complexity and body. If you like a kick, you can increase the red-pepper flakes, or leave them out entirely for a supremely gentle broth. Add a squeeze of lemon right at the end if you like your soup on the tart side.

## Ingredients
- 2 tablespoons unsalted butter
- 2 medium leeks, white and light green parts only, halved lengthwise and thinly sliced
- 3 garlic cloves, minced or finely grated
- 1/8 teaspoon red-pepper flakes, plus more for serving (optional)
- 1 small head of green cabbage (about 1¼ pounds), cored and coarsely chopped (about 9 cups)
- 1 1/2 teaspoons fine sea or table salt, plus more to taste
- 1/2 teaspoon freshly ground black pepper, plus more to taste
- 2 quarts vegetable or chicken stock
- 1 cup long-grain rice
- 5 thyme sprigs
- 2 Parmesan rinds, or use another 2 tablespoons grated cheese
- 1 lemon
- 1/4 cup grated Parmesan, plus more for serving
- 1 cup chopped fresh dill or cilantro, or a combination

## Instructions
1. In a stock pot or large Dutch oven, melt butter over medium-high heat. Add leeks and cook, stirring occasionally, until soft and lightly golden, 5 to 7 minutes. Stir in garlic and red-pepper flakes (if using), and cook until fragrant, about 1 minute. Add cabbage, salt and pepper, and cook until cabbage wilts slightly and begins to caramelize, about 10 minutes.
2. Stir in stock, rice and thyme. If using the Parmesan rinds, add them now, and bring everything to a simmer. Cook, partly covered, over medium-low heat until cabbage and rice are very tender, 20 to 25 minutes.
3. Discard thyme sprigs and Parmesan rinds. Using a Microplane or other fine grater, grate in the zest from the lemon. Stir in grated Parmesan and dill.
4. Halve the lemon and squeeze in the juice from half of it. Cut the remaining lemon half into wedges for serving. Taste soup and add more salt and pepper, if needed. To serve, ladle into soup bowls, and garnish with more grated cheese, a lemon wedge and more red-pepper flakes, if you like.

## Tags
- cilantro
- dill
- freezer friendly
- great leftovers
- green cabbage
- leek
- parmesan
- rice
- soup
- spring
- winter
- vegetarian

## Notes
`,Mb=`---
title: "Pasta and Lentils (Pasta e Lenticchie)"
source: "https://cooking.nytimes.com/recipes/1023006-pasta-and-lentils-pasta-e-lenticchie"
author: "Ali Slagle"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - beans
  - one pot
  - pastas
tags:
  - budget
  - canned tomato
  - dutch oven
  - garlic
  - lentil
  - penne
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2022/02/28/dining/as-pasta-with-lentils/merlin_201335688_d8a69491-86df-4311-82e8-680aa7382f26-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pasta and Lentils (Pasta e Lenticchie)

> Source: https://cooking.nytimes.com/recipes/1023006-pasta-and-lentils-pasta-e-lenticchie

## Description
This classic Neapolitan dish’s heartiness comes from cooking pasta with lentils so that the starches thicken the liquid into something creamier and richer than a basic lentil soup. There are many versions of this peasant food, including ones with pancetta, carrots, parsley or Parmesan rinds; some also use a hodgepodge of pasta shapes from half-empty boxes — it’s a true pantry meal. Brown lentils will fall apart more quickly than green, but they’ll create a luscious sauce either way. Stir the pasta often, especially towards the end of cooking, and add more water if the pot is dry (the sauce will thicken as it cools). Leftovers will keep for up to 3 days refrigerated; warm over low heat and add water to loosen.

## Ingredients
- 3 tablespoons extra-virgin olive oil, plus more for serving
- 1 yellow onion, coarsely chopped
- 8 garlic cloves, smashed and peeled
- Kosher salt (Diamond Crystal) and black pepper
- 1 cup brown or green lentils
- 3 thyme sprigs (optional)
- 3 fresh or dried bay leaves (optional)
- 1 (28-ounce) can whole peeled tomatoes, cut in the can with scissors
- 10 ounces tubular or ridged pasta, like penne or radiatore (or use long noodles broken into pieces)
- 1/2 cup freshly grated Parmesan, plus more for serving

## Instructions
1. In a large pot or Dutch oven, heat the oil over medium-high. Add the onion and garlic, season with salt and pepper, and cook, stirring occasionally, until golden brown and tender, 5 to 7 minutes. Add 5 cups of water, the lentils, the thyme and bay leaves (if using). Partially cover, bring to a boil, then reduce heat and simmer, partially covered, until the lentils are al dente, 25 to 30 minutes.
2. Add the tomatoes and 1 teaspoon salt, and bring to a boil over high. Add the pasta and cook, stirring often to keep the pasta from sticking to the pot, until the pasta is al dente, 10 to 20 minutes. (It may take longer than the cook time on the package.) If the pot starts to look dry at any point, add more water, 1/4 cup at a time.
3. Turn off the heat, discard the thyme and bay leaves, then stir in the Parmesan. Cover and let sit for 3 minutes so the flavors meld and the sauce thickens. Season to taste with salt and pepper. Eat with more Parmesan and a drizzle of olive oil.

## Tags
- budget
- canned tomato
- dutch oven
- garlic
- lentil
- penne
- Italian

## Notes
`,jb=`---
title: "Pasta e Ceci (Italian Pasta and Chickpea Stew)"
source: "https://cooking.nytimes.com/recipes/1020860-pasta-e-ceci-italian-pasta-and-chickpea-stew?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Colu Henry"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - appetizer
  - main course
tags:
  - budget
  - canned tomato
  - chickpea
  - dutch oven
  - escarole
  - great leftovers
  - pasta
  - radicchio
  - vegetarian
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2020/08/23/dining/ch-pasta-e-ceci-soup/ch-pasta-e-ceci-soup-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pasta e Ceci (Italian Pasta and Chickpea Stew)

> Source: https://cooking.nytimes.com/recipes/1020860-pasta-e-ceci-italian-pasta-and-chickpea-stew?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
There is an incredible number of recipes for this classic Roman dish, and everyone has an opinion on how it should be prepared. This version is more stew than soup, but it can be loosened up with a bit more water if you prefer. It begins with sautéing onion, tomatoes, garlic and rosemary in olive oil, then tossing in the chickpeas, and smashing a few to give the stew a creamy texture. Water is added, then uncooked pasta, which cooks as the stew simmers (and results in one less dish for you wash). Escarole is folded in right before serving. This flexible stew can go in a number of directions, so tweak it as you see fit, but don’t forget to finish each bowl with grated pecorino and a drizzle of olive oil. Ciao.

## Ingredients
- 3 tablespoons olive oil, plus more for drizzling
- 1 medium yellow onion, finely chopped
- 3 garlic cloves, finely chopped
- 2 teaspoons chopped fresh rosemary
- 1/2 teaspoon red-pepper flakes
- Kosher salt and black pepper
- 1 packed cup canned whole tomatoes, drained
- 1 (15-ounce) can chickpeas, rinsed
- 1 cup ditalini
- 4 cups roughly chopped escarole, Tuscan kale or radicchio
- Grated pecorino, for serving

## Instructions
1. Heat the oil in a large stock pot or Dutch oven over medium. Add the onion and cook, stirring occasionally, until softened but not taking on any color, 4 to 5 minutes. Add the garlic, rosemary and red-pepper flakes, and cook 1 minute more. Season well with salt and pepper.
2. Stir in the tomatoes and the chickpeas, breaking up the tomatoes with the back of a spoon or spatula and smashing about 1/2 cup of the beans.
3. Add 3 cups water and bring to a boil over high. Add the pasta and simmer, stirring often to make sure nothing sticks to the bottom of the pan, until the pasta is al dente, about 10 minutes. The water will mostly be absorbed by the pasta, but if you prefer it brothier, you can add 1/2 to 1 cup water and simmer until warmed through, 1 minute more. Season to taste with salt and pepper.
4. Add the escarole and stir until wilted. Taste and adjust seasonings accordingly. Ladle into bowls and top with grated cheese and a drizzle of olive oil.

## Tags
- budget
- canned tomato
- chickpea
- dutch oven
- escarole
- great leftovers
- pasta
- radicchio
- vegetarian
- Italian

## Notes
`,xb=`---
title: "Pasta e Ceci Salad"
source: "https://cooking.nytimes.com/recipes/774978069-pasta-e-ceci-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H15M"
total_time: "PT0H25M"
categories:
  - Lunch
  - Dinner
  - Main Course
  - Green Salad
tags:
  - Orzo
  - Parmesan
  - Nutritional Yeast
  - Lemon Zest
  - Lemon Juice
  - Kale
  - Chickpea
  - Stovetop
  - Easy
  - Quick
  - Weeknight
  - Summer
  - Dairy-Free
  - Vegan
  - Vegetarian
cuisine: "Italian Inspired"
image: "https://static01.nyt.com/images/2026/03/31/multimedia/HM-Pasta-e-Ceci-Salad-ftwq/HM-Pasta-e-Ceci-Salad-ftwq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pasta e Ceci Salad

> Source: https://cooking.nytimes.com/recipes/774978069-pasta-e-ceci-salad?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Inspired by the timeless combination of chickpeas and short noodles in the classic Roman dish pasta e ceci, this lively leafy salad is just right for the warmer months. Keep things light with a generous ratio of chickpeas and greens to orzo, along with a tart, vivacious lemon dressing. No need to massage the kale; you can simply toss it into the dressing and let it soften while the orzo cooks. There’s Parmesan in the salad for saltiness, but vegans can use nutritional yeast instead. Cut down on your dishes by making the dressing in a mixing bowl that is large enough to fit the entire salad.

## Ingredients
- Salt and pepper
- 1 cup orzo
- ¼ cup finely grated Parmesan (or nutritional yeast), plus more for serving
- ¼ cup extra-virgin olive oil
- 1 teaspoon grated lemon zest, plus 2 tablespoons lemon juice (from 1 lemon)
- 4 cups torn lacinato or curly kale leaves (from 1 bunch)
- 2 (15-ounce) cans chickpeas, rinsed
- ½ to 1 teaspoon crushed red pepper
- Handful torn fresh parsley or basil leaves
- ½ cup slivered or sliced (flaked) almonds, toasted (see Tip)

## Instructions
1. Bring a medium pot of salted water to the boil. Add the orzo and cook according to package instructions until al dente. Drain the orzo, then rinse it under cold water and drain again.
2. Meanwhile, in a large mixing bowl, combine the Parmesan, olive oil, lemon zest and lemon juice; season generously with salt and pepper. Add the kale and toss to coat. Allow to soften for a few minutes until the orzo cooks.
3. Add the cooled pasta and chickpeas to the kale, along with the crushed red pepper and half the herbs, and toss to coat. Taste and season well with salt and pepper.
4. To serve, top with remaining herbs, more Parmesan and the almonds.

## Tags
- Orzo
- Parmesan
- Nutritional Yeast
- Lemon Zest
- Lemon Juice
- Kale
- Chickpea
- Stovetop
- Easy
- Quick
- Weeknight
- Summer
- Dairy-Free
- Vegan
- Vegetarian

## Notes
`,Db=`---
title: "Pasta Primavera With Asparagus and Peas"
source: "https://cooking.nytimes.com/recipes/1017392-pasta-primavera-with-asparagus-and-peas?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - lunch
  - quick
  - pastas
  - main course
tags:
  - asparagus
  - crème fraîche
  - fettuccine
  - greek yogurt
  - pea
  - sugar snap pea
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2021/05/02/dining/13BIGAPPETITE2/13BIGAPPETITE2-videoSixteenByNineJumbo1600-v3.jpg"
date_saved: "2026-04-16"
---

# Pasta Primavera With Asparagus and Peas

> Source: https://cooking.nytimes.com/recipes/1017392-pasta-primavera-with-asparagus-and-peas?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This simple pasta primavera uses a combination of the earliest vegetables available in spring — asparagus, peas and spring onions — making it a true celebration of the season. The sauce works best with springy egg pasta, preferably homemade or a good purchased brand. Make sure not to overcook it; you need the chewy bite to stand up to the gently cooked vegetables. If you can’t find good fresh English peas, you can substitute frozen peas, but don’t add them until the last minute of cooking.

## Ingredients
- 1/4 pound sugar snap peas, stems trimmed
- 1/2 pound asparagus, ends snapped
- 2 tablespoons unsalted butter
- 3/4 cup fresh English peas
- 1/4 cup thinly sliced spring onion, white part only (or use shallot)
- 2 garlic cloves, finely chopped
- 1/2 teaspoon fine sea salt, more as needed
- Black pepper, more as needed
- 12 ounces fettuccine or tagliatelle, preferably fresh (see recipe)
- 2/3 cup grated Parmigiano-Reggiano, at room temperature
- 1/2 cup crème fraîche or whole milk Greek yogurt, at room temperature
- 3 tablespoons finely chopped parsley
- 1 tablespoon finely chopped tarragon

## Instructions
1. Bring a large pot of heavily salted water to a boil over medium-high heat.
2. While the water is coming to a boil, slice snap peas and asparagus stems into 1/4-inch-thick pieces; leave asparagus tips whole.
3. Melt butter in a large skillet over medium-high heat. Add snap peas, asparagus, English peas and onion. Cook until vegetables are barely tender (but not too soft or mushy), 3 to 4 minutes. Stir in garlic and cook 1 minute more. Season with salt and pepper; set aside.
4. Drop pasta into boiling water and cook until al dente (1 to 3 minutes for fresh pasta, more for dried pasta). Drain well and transfer pasta to a large bowl. Immediately toss pasta with vegetables, Parmigiano-Reggiano, crème fraîche and herbs. Season generously with salt and pepper, if needed.

## Tags
- asparagus
- crème fraîche
- fettuccine
- greek yogurt
- pea
- sugar snap pea
- spring

## Notes
`,Bb=`---
title: "Pasta With Green Puttanesca"
source: "https://cooking.nytimes.com/recipes/1013619-pasta-with-green-puttanesca"
author: "Melissa Clark"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - anchovy
  - pasta
  - spinach
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2021/03/07/dining/mc-green-puttanesca/mc-green-puttanesca-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Pasta With Green Puttanesca

> Source: https://cooking.nytimes.com/recipes/1013619-pasta-with-green-puttanesca

## Description
Puttanesca is a sauce that plies its trade all year round, with ingredients — pantry staples like anchovies, garlic and olives — at the ready whenever the desire strikes. But this puttanesca takes advantage of spring greens, using fat green garlic cloves and baby spinach to lend a pungent verdancy to a tried-and-true dish. (If green garlic isn’t available, use regular, but use less.)

## Ingredients
- Salt
- 1 pound spaghettini or spaghetti
- 1/2 cup extra-virgin olive oil
- 10 anchovy fillets
- 1/4 cup drained capers
- 1 cup pitted and sliced green Cerignola or Picholine olives
- 10 fat green garlic cloves, peeled, sliced 1/4-inch thick or use 8 regular garlic cloves
- 1/3 cup chopped scallions including greens
- 1/2 teaspoon red-pepper flakes
- 12 cups baby spinach leaves (11 ounces)
- 1/2 cup torn basil leaves

## Instructions
1. Bring a large pot of heavily salted water to a boil. Add the pasta and cook until it is not quite al dente, 5 to 8 minutes. Reserve a cup of cooking water, then drain the pasta.
2. While the pasta is cooking, warm 1/4 cup oil in a large Dutch oven over medium-high heat. Add the anchovies and capers. Cook, stirring occasionally, until the capers start to brown, about 3 minutes. Add the remaining 1/4 cup oil, olives, garlic, scallions and red-pepper flakes; increase heat to high if using green garlic (leave it at medium-high for regular garlic) and cook until garlic is golden, 3 to 5 minutes. Add the spinach and cook until wilted, 1 to 2 minutes. Add the pasta and toss for 1 minute. Add a splash of pasta cooking water if the pasta seems dry. Season with salt, if necessary. Toss in the basil leaves.

## Tags
- anchovy
- pasta
- spinach
- Italian

## Notes
`,Nb=`---
title: "Pasta With Sausage, Caramelized Cabbage and Goat Cheese"
source: "https://cooking.nytimes.com/recipes/1021545-pasta-with-sausage-caramelized-cabbage-and-goat-cheese"
author: "Aaron Hutcherson"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - weeknight
  - pastas
  - main course
tags:
  - cabbage
  - goat cheese
  - italian sausage
  - pasta
  - sausage
  - thyme
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/11/17/dining/ah-sausage-and-cabbage-pasta/ah-sausage-and-cabbage-pasta-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Pasta With Sausage, Caramelized Cabbage and Goat Cheese

> Source: https://cooking.nytimes.com/recipes/1021545-pasta-with-sausage-caramelized-cabbage-and-goat-cheese

## Description
Pasta with cabbage is a common combination across much of Central and Eastern Europe. In this quick weeknight meal, an entire head of cabbage is cooked in the fat left behind by sweet Italian sausage. Goat cheese adds tang and helps create a cream sauce that ties everything together. Feel free to use this recipe as a guideline to come up with your own variation: Try it with your favorite shape of pasta, swap out the thyme for dill, parsley or another herb, or substitute the goat cheese for Parmesan.

## Ingredients
- Kosher salt and black pepper
- 8 ounces dry rotini or other shaped pasta
- 4 tablespoons extra-virgin olive oil
- 8 ounces sweet Italian sausage, casings removed
- 1 small head savoy cabbage (about 1 1/2 pounds), quartered, cored and thinly sliced
- 1 medium yellow onion, thinly sliced
- 1 teaspoon fresh thyme leaves
- 1 cup heavy cream
- 4 ounces goat cheese

## Instructions
1. Bring a large pot of heavily salted water to a boil. Add the pasta and cook, stirring occasionally, until al dente, about 7 minutes; drain.
2. Meanwhile, heat 2 tablespoons olive oil in a large skillet or Dutch oven over medium. Add the sausage and cook, breaking apart with a wooden spoon, until fully cooked and crumbled, about 5 minutes. Using a slotted spoon, transfer the sausage to a plate, leaving the fat in the pan.
3. Add the cabbage, onion, thyme, 1 teaspoon salt, 1/2 teaspoon pepper and the remaining 2 tablespoons olive oil to the skillet. Cover and cook, stirring regularly, until the cabbage has completely wilted and starts to brown, about 15 minutes.
4. Reduce the heat to low and stir in the heavy cream, goat cheese and reserved sausage until evenly combined. Stir in the pasta, season to taste with salt and pepper and serve.

## Tags
- cabbage
- goat cheese
- italian sausage
- pasta
- sausage
- thyme
- American

## Notes
`,Eb=`---
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
`,Hb=`---
title: "Polish Cottage Cheese Dip (Gzik)"
source: "https://cooking.nytimes.com/recipes/1019372-polish-cottage-cheese-dip-gzik?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Kim Severson"
yield: "About 2 cups"
prep_time: ""
cook_time: ""
total_time: "PT15M"
categories:
  - easy
  - quick
  - snack
  - dips and spreads
tags:
  - chive
  - cottage cheese
  - radish
  - Eastern European
cuisine: "eastern european"
image: "https://static01.nyt.com/images/2018/06/27/dining/27cottagerex/27cottagerex-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Polish Cottage Cheese Dip (Gzik)

> Source: https://cooking.nytimes.com/recipes/1019372-polish-cottage-cheese-dip-gzik?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This is a simple dip with infinite possibilities. The classic version, called gzik, comes from the Wielkopolska province in Poland. It’s built from a farmer’s cheese called twarog, which is essentially a dry version of what Americans know as cottage cheese. The cheese, which comes molded into a thick disc, is mashed with a fork, then loosened with a few tablespoons (or more, depending on the dryness of the cheese) of yogurt or cream. Radishes and some members of the allium family, most often chives or onions, add flavor; dill or other herbs sometimes make an appearance. The classic way to eat it is on boiled or baked potatoes still in their jackets, but gzik on buttered rye bread is a popular breakfast dish. Although you can use any style of cottage cheese for this recipe, smaller curds work better than large because the dip should be slightly smoother than cottage cheese.

## Ingredients
- 1 1/2 cups small-curd cottage cheese
- 1 to 3 tablespoons Greek-style yogurt or sour cream, if needed (add if the cottage cheese is not already creamy enough)
- 1/2 cup finely chopped radishes, the spicier the better
- 1/8 cup finely chopped chives
- 1/4 teaspoon salt
- A few grinds of black pepper

## Instructions
1. Mash the cottage cheese in a bowl using a fork, adding a tablespoon or two of yogurt or sour cream, if needed, to create a slightly smoother texture. Mix in the remaining ingredients.

## Tags
- chive
- cottage cheese
- radish
- Eastern European

## Notes
`,Rb=`---
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
`,qb=`---
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
`,Pb=`---
title: "Quick Pickles"
source: "https://cooking.nytimes.com/recipes/1018012-quick-pickles?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Martha Rose Shulman"
yield: "About 2 cups"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - easy
  - condiments
  - pickles
  - side dish
tags:
  - cucumber
  - rice vinegar
  - gluten-free
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2016/03/09/dining/09RAMEN5/09RAMEN5-facebookJumbo.jpg"
date_saved: "2026-04-16"
---

# Quick Pickles

> Source: https://cooking.nytimes.com/recipes/1018012-quick-pickles?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Keep this easy recipe in your back pocket for when you want to add crunchy, zingy punch to whatever you're serving. The flavor of the rice vinegar creates a pickle that goes particularly well with Asian dishes.

## Ingredients
- 4 small firm cucumbers, such as Kirby or Persian, peeled or scrubbed, sliced 1/8-inch thick
- 1 tablespoon sugar
- 1 1/2 teaspoons fine sea salt
- 1 tablespoon rice vinegar

## Instructions
1. Slice cucumbers 1/8-inch thick using a mandoline or a sharp knife. Toss with the sugar and salt and leave in a colander to drain for 20 to 30 minutes. Rinse well and drain.
2. In a bowl, toss cucumbers with the vinegar, tasting and adding more as desired. Store in a container in the refrigerator for up to a week.

## Tags
- cucumber
- rice vinegar
- gluten-free
- vegan
- vegetarian

## Notes
`,Ob=`---
title: "Quick Tomato, White Bean and Kale Soup"
source: "https://cooking.nytimes.com/recipes/1014524-quick-tomato-white-bean-and-kale-soup"
author: "Martha Rose Shulman"
yield: "Serves 4 to 6"
prep_time: ""
cook_time: ""
total_time: "PT55M"
categories:
  - dinner
  - weeknight
  - main course
tags:
  - canned tomato
  - freezer friendly
  - great leftovers
  - make-ahead
  - soup
  - vegetables
  - white bean
  - dairy-free
  - gluten-free
  - halal
  - healthy
  - high fiber
  - kosher
  - low cholesterol
  - low-fat
  - nut-free
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2018/12/11/dining/mrs-tomato-white-bean-kale-soup/mrs-tomato-white-bean-kale-soup-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Quick Tomato, White Bean and Kale Soup

> Source: https://cooking.nytimes.com/recipes/1014524-quick-tomato-white-bean-and-kale-soup

## Description
A hearty bean soup does not always require hours on the stove. Using the canned variety cuts the cook time down drastically for this colorful recipe, which takes no more than an hour start to finish. You can save even more time by tackling some prep while starting to sauté the soup.

## Ingredients
- 1 tablespoon extra virgin olive oil
- 1 medium onion, chopped
- 1 large carrot, chopped
- 1 stick celery, chopped (optional)
- Salt to taste
- 2 large garlic cloves, minced
- 1 14-ounce can chopped tomatoes, with juice
- 6 cups water
- 1 tablespoon tomato paste
- 1 teaspoon oregano
- 1 medium Yukon gold potato (about 6 ounces), diced
- A bouquet garni made with a bay leaf, a couple of sprigs each parsley and thyme, and a Parmesan rind (optional – but it does add flavor; use what you have for this)
- 1/2 pound kale, stemmed, washed thoroughly, and chopped or cut in slivers (4 cups chopped)
- 1 can white beans, drained and rinsed
- Freshly ground pepper
- Grated Parmesan for serving

## Instructions
1. Heat the olive oil over medium heat in a large, heavy soup pot and add the onion, carrot, and celery and a pinch of salt. Cook, stirring often, until the vegetables are tender, about 8 minutes. Add the garlic and cook, stirring, until fragrant, about 30 seconds. Stir in the tomatoes and juice from the can, add another pinch of salt and cook, stirring often, for 5 to 10 minutes, until the tomatoes have cooked down slightly.
2. Add the water, tomato paste, oregano, potato, and salt to taste. Bring to a boil, add the bouquet garni, cover and simmer 10 to 15 minutes, until the potatoes are just about tender.
3. Add the kale and simmer another 10 minutes, until the kale and potatoes are tender and the soup is fragrant. Taste, adjust salt, and add pepper. Stir in the beans and heat through for 5 minutes. Serve, sprinkling some Parmesan over each bowl.

## Tags
- canned tomato
- freezer friendly
- great leftovers
- make-ahead
- soup
- vegetables
- white bean
- dairy-free
- gluten-free
- halal
- healthy
- high fiber
- kosher
- low cholesterol
- low-fat
- nut-free
- vegan
- vegetarian

## Notes
`,Gb=`---
title: "Rasta Pasta With Jerk Chicken"
source: "https://cooking.nytimes.com/recipes/1021897-rasta-pasta-with-jerk-chicken"
author: "Millie Peartree"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - dinner
  - lunch
  - pastas
  - main course
tags:
  - bell pepper
  - chicken breast
  - green onion
  - jerk seasoning
  - Caribbean
cuisine: "caribbean"
image: "https://static01.nyt.com/images/2021/02/11/dining/mp-rasta-pasta/mp-rasta-pasta-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Rasta Pasta With Jerk Chicken

> Source: https://cooking.nytimes.com/recipes/1021897-rasta-pasta-with-jerk-chicken

## Description
Comforting and spicy in just the right way, Rasta pasta is popular in Jamaican communities across New York and beyond. This version gets its spice from jerk seasoning and a single Scotch bonnet. The bell peppers and green onions add not only texture, but a sweet crunch and brightness. You could swap salmon or shrimp for the chicken, or use fettuccine or rigatoni instead of the penne, if you like; just mind the cooking time. You could even halve the heavy cream, or substitute coconut milk for more depth of flavor. Feel free to refrigerate any leftovers, and either reheat or eat them cold the next day. This is a dish that gets better with a little time.

## Ingredients
- 2 tablespoons jerk seasoning
- 2 tablespoons extra-virgin olive oil
- 1 teaspoon garlic powder
- 1 teaspoon smoked paprika
- 2 boneless, skinless chicken breasts
- Kosher salt
- 1 pound penne pasta
- 3 bell peppers, preferably a mix of colors, thinly sliced
- 4 green onions, sliced, plus more for garnish
- 2 garlic cloves, minced
- 1/4 cup jerk seasoning
- 2 fresh thyme sprigs
- 1 Scotch bonnet pepper, pierced, not sliced (optional)
- 1/2 cup heavy cream
- 1/4 cup vegetable or chicken stock
- 1/2 cup grated Parmesan

## Instructions
1. Prepare the chicken: In a medium bowl, combine jerk seasoning, 1 tablespoon olive oil, garlic powder and smoked paprika. Add chicken and toss to coat. Cover bowl with plastic wrap and let sit in the refrigerator for 2 hours or up to 24 hours. Pull chicken out about 1 hour before cooking, so it comes to room temperature.
2. Heat oven to 400 degrees. Heat the remaining 1 tablespoon olive oil in a cast-iron skillet over medium. Add the chicken to the skillet, and sear chicken on both sides until browned, about 3 minutes per side.
3. Once chicken is seared, transfer the skillet to the oven and roast chicken until internal temperature reaches 165 degrees, 15 to 20 minutes. Transfer to a cutting board, let rest for about 10 minutes, and slice on a bias.
4. As chicken roasts, prepare the pasta: Set a pot of well-salted water to a boil over high heat. Add the pasta, and cook according to the package instructions. Drain and set aside.
5. Add 2 tablespoons oil to a heavy pot set over medium, and sauté bell peppers with green onions until peppers are barely softened, about 4 minutes. Add the minced garlic and cook until it’s fragrant, about another minute.
6. Add the 1/4 cup jerk seasoning to the pot and combine. Add the thyme and pierced pepper. Add heavy cream and vegetable stock and bring to a simmer. Mix in the Parmesan, then add pasta.
7. Top with the jerk chicken, and garnish with green onions. Serve hot.

## Tags
- bell pepper
- chicken breast
- green onion
- jerk seasoning
- Caribbean

## Notes
`,Ib=`---
title: "Red Cabbage With Walnuts and Feta"
source: "https://cooking.nytimes.com/recipes/1026235-red-cabbage-with-walnuts-and-feta"
author: "Melissa Clark"
yield: "6 to 8 servings"
prep_time: "PT10M"
cook_time: "PT45M"
total_time: "PT55M"
categories:
  - dinner
  - easy
  - vegetables
  - main course
  - side dish
tags:
  - fall
  - winter
  - feta
  - party
  - pomegranate seed
  - red cabbage
  - walnut
  - thanksgiving
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/11/15/multimedia/MC-Video-Red-Cabbage-Wedges-with-Walnuts-and-Fetarex-hfcq/MC-Video-Red-Cabbage-Wedges-with-Walnuts-and-Fetarex-hfcq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Red Cabbage With Walnuts and Feta

> Source: https://cooking.nytimes.com/recipes/1026235-red-cabbage-with-walnuts-and-feta

## Description
Roasting wedges of red cabbage intensifies their sweetness and caramelizes their edges. Here, they’re topped with bits of creamy feta, toasted walnuts for crunch and lemon zest and pomegranate seeds for a juicy tang. Serve these warm or at room temperature for a substantial side dish or light main course. This recipe will also work for a small head of green cabbage, though it may cook a bit faster.

## Ingredients
- 1 medium red cabbage (1¾ to 2 pounds)
- 3 tablespoons extra-virgin olive oil, plus more for drizzling
- 1/2 teaspoon fine sea or table salt, plus more for sprinkling
- 1 tablespoon apple cider vinegar, plus more to taste
- 1/2 teaspoon Dijon mustard
- 2/3 cup (3 ounces) crumbled feta
- 1/3 cup chopped walnuts, toasted
- Lemon zest, for sprinkling
- Pomegranate seeds, for sprinkling
- Chopped mint, parsley or dill, for serving (optional)

## Instructions
1. Heat oven to 425 degrees. Line a rimmed sheet pan with parchment paper if you like (it’ll make clean up easier).
2. Peel any damaged or tough outer leaves from the cabbage and then halve it lengthwise through the core. Cut each half into wedges 1 to 1½ inch thick, being careful to keep the layers together.
3. Place wedges on their sides on the prepared sheet pan. Drizzle with olive oil and sprinkle with salt. Roast for 30 to 40 minutes (flipping the cabbage after 20 minutes), or until the cores of the wedges are tender and the leaves have browned.
4. While the cabbage is roasting, prepare the vinaigrette: In a small bowl, whisk together apple cider vinegar, mustard and ½ teaspoon salt until the salt dissolves. Whisk in 3 tablespoons olive oil until the vinaigrette is emulsified. Taste for seasoning, adding more salt or vinegar if needed; it should be punchy and bright.
5. Arrange cabbage on a platter and drizzle with vinaigrette. Top with crumbled feta, toasted walnuts, lemon zest, pomegranate seeds and herbs if you like. Serve hot or at room temperature.

## Tags
- fall
- winter
- feta
- party
- pomegranate seed
- red cabbage
- walnut
- thanksgiving
- vegetarian

## Notes
`,Lb=`---
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
`,Ub=`---
title: "Rhubarb Crisp"
source: "https://cooking.nytimes.com/recipes/1013147-rhubarb-crisp?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Mark Bittman"
yield: "6 to 8 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - dessert
tags:
  - crisp
  - food processor
  - pecan
  - rhubarb
  - rolled oat
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2018/07/20/dining/bittman-rhubarb-crisp-horizontal/merlin_137567802_d4758259-042a-4b7e-8122-e634664add6d-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Rhubarb Crisp

> Source: https://cooking.nytimes.com/recipes/1013147-rhubarb-crisp?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
When you think of rhubarb you probably think of strawberry-rhubarb pie, a quintessential spring dessert, especially if it’s made by someone who makes good pies. I usually manage around one pie crust annually, so I need alternatives. Thus, when the spring’s first rhubarb shows up, I adjust the execution and produce a crisp. If rhubarb is young and fresh, you can trim it in seconds. If it has fibrous outer strings, peel them off as you would those of celery. Toss the rhubarb with orange or lemon juice and zest, and only a little sugar. (You can also substitute strawberries for some of the rhubarb if you want the classic combination.) Blend the ingredients for the crisp topping in a food processor, crumble the topping over the rhubarb mixture, and bake — it is nearly effortless and as good or better than a pie.

## Ingredients
- 6 tablespoons cold butter, cut into small pieces, plus more for greasing pan
- 2 1/2 to 3 pounds rhubarb, trimmed, tough strings removed, and cut into 1 1/2-inch pieces (about 5 to 6 cups)
- 1/4 cup white sugar
- 1 tablespoon orange or lemon juice
- 1 teaspoon orange or lemon zest
- 3/4 cup brown sugar
- 1/2 cup all-purpose flour
- 1/2 teaspoon cinnamon, or to taste
- Pinch salt
- 1/2 cup rolled oats
- 1/2 cup pecans

## Instructions
1. Heat oven to 375 degrees. Grease an 8- or 9-inch square baking or gratin dish with a little butter. Toss rhubarb with white sugar, orange or lemon juice and zest, and spread in baking dish.
2. Put the 6 tablespoons butter in a food processor along with brown sugar, flour, cinnamon and salt, and pulse for about 20 or 30 seconds, until it looks like small peas and just begins to clump together. Add oats and pecans and pulse just a few times to combine.
3. Crumble the topping over rhubarb and bake until golden and beginning to brown, 45 to 50 minutes.

## Tags
- crisp
- food processor
- pecan
- rhubarb
- rolled oat
- spring

## Notes
`,Yb=`---
title: "Rhubarb Crumble"
source: "https://cooking.nytimes.com/recipes/1023092-rhubarb-crumble?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "David Tanis"
yield: "6 to 8 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H30M"
categories:
  - dessert
tags:
  - ck-mccormick-0526-sponsor
  - crumble
  - pistachio
  - rhubarb
  - sugar
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2022/04/13/dining/08tanisrex3-crumble/merlin_204799545_d9d9cd08-7191-4f5b-aafc-e836bc51d1d9-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Rhubarb Crumble

> Source: https://cooking.nytimes.com/recipes/1023092-rhubarb-crumble?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this fruit crumble — a relative of other homey desserts like crisps and buckles, bright red rhubarb makes a brilliant show, though a combination of rhubarb and apple can be nice too. Pistachio in the topping is optional and could be replaced by walnuts or pecans. Serve with cold heavy cream, whipped cream or ice cream, if desired.

## Ingredients
- About 2 pounds rhubarb stalks, peeled and cut into 1-inch cubes (6½ cups/783 grams)
- 1 1/4 cups/251 grams granulated sugar
- 3 tablespoons all-purpose flour
- 1 cup/128 grams all-purpose flour
- 1/4 cup/52 grams granulated or brown sugar
- 1/4 teaspoon baking powder
- Pinch of salt
- Pinch of ground ginger
- Pinch of cinnamon
- 1/2 cup/113 grams cold unsalted butter, cut into very small pieces or grated on the big holes of a box grater
- 1/2 cup finely chopped or ground pistachios (optional)

## Instructions
1. Prepare the filling: Toss the rhubarb cubes with sugar and flour. Set aside and let macerate while you make the topping, about 20 minutes.
2. Make the topping: Put flour, sugar, baking powder, salt, ginger and cinnamon in a bowl, and stir together. Add butter and work into flour with fingers or a fork, as if making pie dough. The mixture will be loose and crumbly. Stir in the pistachios, if using.
3. Heat oven to 375 degrees. Transfer sugared rhubarb to a 9-inch baking dish, about 3 inches deep. Sprinkle topping loosely over fruit to a depth of about 1 inch.
4. Place dish on a baking sheet and bake for about 1 hour, until topping is golden and filling is visibly bubbling at the edges. Cool slightly before serving.

## Tags
- ck-mccormick-0526-sponsor
- crumble
- pistachio
- rhubarb
- sugar
- spring

## Notes
`,Kb=`---
title: "Rhubarb Roasted Salmon"
source: "https://cooking.nytimes.com/recipes/1024243-rhubarb-roasted-salmon?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT20M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - seafood
  - main course
tags:
  - rhubarb
  - salmon fillet
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2023/05/31/multimedia/31apperex-salmon-kfmc/31apperex-salmon-kfmc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Rhubarb Roasted Salmon

> Source: https://cooking.nytimes.com/recipes/1024243-rhubarb-roasted-salmon?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this speedy, rosy weeknight dinner, a tart ginger-rhubarb sauce lends brightness to rich, buttery roasted salmon fillets. It’s used in two ways here. First, it’s spooned over the fillets before roasting, allowing the bits of rhubarb to singe and caramelize in the oven’s high heat. Then, more sauce is served alongside for a fresher, zippier bite. To balance the rhubarb’s astringency, a few tablespoons of sugar are stirred into the sauce, but feel free to adjust the amount to taste. It should strike a balance between tangy and sweet. For the pinkest, prettiest sauce, seek out the reddest rhubarb stalks you can find.

## Ingredients
- 3 scallions, thinly sliced
- 2 tablespoons granulated sugar, more to taste
- 1 tablespoon rice vinegar, more for serving
- 1/2 teaspoon grated fresh ginger, more to taste
- Salt
- 6 ounces rhubarb, trimmed and sliced 1-inch-thick (1⅓ cups)
- 4 (6- to 8-ounce) skin-on salmon fillets
- Freshly ground black pepper
- 3 tablespoons unsalted butter, cubed
- Red-pepper flakes, for serving (optional)

## Instructions
1. Heat oven to 350 degrees. Line a rimmed baking sheet with parchment paper, if you like, for easier cleanup.
2. Set aside about 2 tablespoons of the scallion greens for serving. In a medium saucepan, combine remaining scallions, sugar, vinegar, ginger and a pinch of salt. Bring to a simmer over medium heat and simmer until the sugar has dissolved.
3. Add the rhubarb. Cover pan, and cook, stirring occasionally, until the rhubarb is just tender, about 5 minutes. Remove pan from heat and, using a spoon or fork, mash the mixture until it falls apart into a chunky purée. Taste and add more sugar, vinegar, ginger and salt if needed. It should taste balanced between sweet, tangy and salty.
4. Arrange salmon skin side down on the prepared baking sheet. Season lightly with salt and pepper. Spread half of the rhubarb mixture on top of the fillets (save remaining rhubarb for serving). Top fillets evenly with cubed butter. Roast for 8 to 13 minutes, or until the salmon is just cooked through.
5. Garnish the fillets with the reserved scallions, red-pepper flakes (if using) and, if you like, a drizzle of rice wine vinegar. Serve with the remaining rhubarb sauce.

## Tags
- rhubarb
- salmon fillet
- spring

## Notes
`,Jb=`---
title: "Ricotta Pasta Alla Vodka"
source: "https://cooking.nytimes.com/recipes/1024008-ricotta-pasta-alla-vodka"
author: "Eric Kim"
yield: "4 to 6 servings"
prep_time: "PT15M"
cook_time: "PT30M"
total_time: "PT45M"
categories:
  - dinner
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - italian american
  - penne
  - ricotta
  - rigatoni
  - tomato paste
  - vodka
cuisine: ""
image: "https://static01.nyt.com/images/2023/03/10/multimedia/EK-ricotta-pasta-alla-vodka-wfkh/EK-ricotta-pasta-alla-vodka-wfkh-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Ricotta Pasta Alla Vodka

> Source: https://cooking.nytimes.com/recipes/1024008-ricotta-pasta-alla-vodka

## Description
In a 1974 cookbook, the Italian actor Ugo Tognazzi published a recipe for pasta all’infuriata, "furious pasta," a chile-vodka-spiked tomato number. It’s one of the first written accounts of vodka in pasta. The alcohol is said to help fat disperse more evenly, keeping the sauce emulsion glossy and creamy, and to help you smell, and in turn taste, the sauce's flavors in a heightened way. The ricotta serving suggestion draws inspiration from the creamy tomato soup with three dollops of cool, sweet ricotta on top from the now-closed Caffe Falai in Manhattan’s NoLIta neighborhood. The ricotta lends coolness both in temperature and in flavor, offering relief between bites of spicy booziness.

## Ingredients
- Kosher salt
- 1 tablespoon olive oil
- 4 slices thick-cut bacon (6 ounces), coarsely chopped
- 1 1/2 teaspoons red-pepper flakes
- 1 teaspoon dried oregano
- 4 large garlic cloves, crushed but left whole
- 1 medium yellow onion, finely chopped
- Freshly ground black pepper
- 5 tablespoons tomato paste, preferably double-concentrated
- 3/4 to 1 cup vodka, depending on how boozy you want it
- 1 pound fusilli, penne or rigatoni
- 1 cup heavy cream
- 4 ounces Pecorino Romano or Parmesan, finely grated (1 cup)
- 1 cup/8 ounces whole-milk ricotta
- Finely chopped flat-leaf parsley or basil, for serving

## Instructions
1. Bring a large pot of salted water to a boil.
2. Heat a large, high-sided skillet over medium-high. Add the oil and bacon and cook, stirring occasionally, until the bacon is crispy at the edges, about 5 minutes. Carefully drain all but 3 tablespoons of the fat, reserving any excess for later.
3. Lower the heat to medium. Stir in the red-pepper flakes, oregano and garlic and cook, stirring constantly, until fragrant, just a few seconds. Add the onion, season generously with salt and pepper and cook over medium-high, stirring, until the onion is translucent, about 5 minutes. Add more bacon fat if the pan dries out. Add the tomato paste and stir constantly until slightly darker in color, about 3 minutes. Turn off the heat and stir in the vodka.
4. Add the pasta to the boiling water and cook according to package instructions until 2 minutes shy of al dente.
5. While the pasta cooks, turn the heat under the sauce to high and cook, stirring constantly, until reduced by three-quarters, about 2 minutes. Add the cream and bring to a simmer. Take off the heat.
6. Reserve 2 cups of the pasta water. Drain the pasta and add to the pan with the sauce, along with 1 cup pasta water and most of the pecorino. Cook over medium-high, stirring vigorously with one hand while moving the pan back and forth with the other, until the sauce glossily drapes the noodles, 5 to 7 minutes. Add more pasta water if the sauce looks dry. Fish out the garlic cloves. Taste and season with more salt and pepper, as desired.
7. Divide the pasta among plates, sprinkling with any remaining pecorino and dolloping each serving with three spoonfuls of ricotta. Top with the parsley, which adds necessary freshness to counter the richness.

## Tags
- italian american
- penne
- ricotta
- rigatoni
- tomato paste
- vodka

## Notes
`,Wb=`---
title: "Rigatoni With White Bolognese"
source: "https://cooking.nytimes.com/recipes/11111-rigatoni-with-white-bolognese"
author: "Amanda Hesser"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - dinner
  - main course
tags:
  - beef
  - pork
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2025/03/15/multimedia/AH-Rigatoni-White-Bolognese-gvtq/AH-Rigatoni-White-Bolognese-gvtq-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Rigatoni With White Bolognese

> Source: https://cooking.nytimes.com/recipes/11111-rigatoni-with-white-bolognese

## Description
White Bolognese, a meat sauce made without tomato, is a variation you rarely see in America.

## Ingredients
- Extra virgin olive oil
- 1/2 sweet onion, peeled and finely chopped
- 2 medium carrots, peeled and finely chopped
- 1 stalk celery, finely chopped
- Sea salt
- Freshly ground black pepper
- 1 pound mild Italian pork sausage meat, removed from casings
- 1 pound ground beef (not lean)
- 1 1/2 cups dry Italian white wine
- 1 cube beef bouillon dissolved in 2 cups simmering water
- 1 1/2 ounces dried porcini mushrooms rehydrated in 3 cups lukewarm water
- 1/3 cup heavy cream
- 1 pound rigatoni
- 3/4 cup freshly grated Parmigiano-Reggiano cheese

## Instructions
1. Add enough oil to a large, deep sauté pan to coat the base and place over medium-high heat. When the oil shimmers, add the onion, carrots and celery and sauté until glassy and just tender, about 5 minutes. Season lightly with salt and pepper. Add the sausage and beef to the pan, breaking it into walnut-size pieces, and brown well.
2. Pour in the wine and keep at a rapid simmer until the pan is almost dry. Then pour in 1 1/2 cups beef bouillon and lower the heat to medium. Simmer gently, uncovered, until the bouillon is nearly gone, stirring now and then. Meanwhile, chop the rehydrated porcini into small pieces, reserving the liquid.
3. Bring a large pot of salted water to a boil. Add mushroom liquid to the sauce to cover the meat halfway (about 1 cup) along with the porcini and continue simmering until the sauce is loose but not soupy, about 10 minutes. Taste and adjust salt and pepper; it should be highly seasoned. When the consistency is right, fold the cream in. Remove from the heat and cover.
4. When the pasta water is at a full boil, add the rigatoni and cook until still firm, but not hard, in the center. When the pasta is almost done, scoop out 1 cup of pasta water and reserve. Drain the pasta and then return it to the pot. Pour the pasta sauce on top and fold in with a wooden spoon. The pasta should not be dry. Add a little pasta water or mushroom liquid to loosen it. (It will continue to soak up sauce on the way to the table.) Serve in one large bowl or in individual bowls, passing the cheese at the table.

## Tags
- beef
- pork
- Italian

## Notes
`,Vb=`---
title: "Ritzy Cheddar Chicken Breasts"
source: "https://cooking.nytimes.com/recipes/1022240-ritzy-cheddar-chicken-breasts?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Eric Kim"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - weeknight
  - poultry
  - main course
tags:
  - chicken breast
  - egg white
  - kid-friendly
  - ritz cracker
  - sharp cheddar
  - sour cream
cuisine: ""
image: "https://static01.nyt.com/images/2021/06/04/dining/01-10Genius-Ritz-Cracker-Chicken-copy/01-10Genius-Ritz-Cracker-Chicken-copy-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Ritzy Cheddar Chicken Breasts

> Source: https://cooking.nytimes.com/recipes/1022240-ritzy-cheddar-chicken-breasts?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
They’re as good as they sound: cheesy chicken cutlets coated with buttery Ritz crackers. Skipping the usual flour-egg-bread crumb dredge, this recipe relies instead on a flavorful base layer of tangy sour cream, which has lactic acid that tenderizes boneless, skinless chicken breasts beautifully. When it comes to breaded white meat, thin cutlets are ideal, which you can buy from the store or achieve by slicing thick breasts in half horizontally (no pounding necessary). They cook more evenly this way, staying tender throughout as they’re quickly baked in a hot oven. Serve with something fresh — a big green salad, perhaps — to balance the wonderful richness of this nostalgic number.

## Ingredients
- 1 tablespoon olive oil, plus more for greasing wire rack
- 1/4 cup sour cream
- 1 large egg white
- 1 teaspoon Dijon mustard
- Kosher salt (Diamond Crystal)
- 2 large boneless, skinless chicken breasts (about 1 1/2 pounds total)
- 1 sleeve Ritz crackers (about 100 grams)
- 2 ounces extra-sharp Cheddar cheese, coarsely grated (about 1 cup)
- 1/2 teaspoon garlic powder
- 1/2 teaspoon onion powder

## Instructions
1. Position rack in the bottom third of the oven and heat oven to 450 degrees. Place an ovenproof wire rack over a sheet pan. Dab a folded-up paper towel with olive oil and rub it over the wire rack to grease it.
2. In a medium bowl, whisk together the sour cream, egg white and Dijon mustard until smooth. Season with salt. Lay the chicken flat on a cutting board and carve each breast in half horizontally so you end up with four thin cutlets. Add the chicken to the sour cream mixture, and using your hands, smear the sour cream all over the chicken.
3. In a large bowl, crush the Ritz crackers into coarse pieces with your fingers. Some crackers will turn to rubble while others turn to dust. Add the cheese, garlic powder, onion powder and olive oil. Season with 1/2 teaspoon salt and toss until evenly distributed. Holding one of the chicken cutlets by its thinner end, add to the bowl with the crumbs, and using your hands, pack the crumbs onto the chicken, pressing them in to create a thick coating. Transfer the breaded chicken to the rack in the sheet pan. Repeat with the remaining three cutlets.
4. Bake the cutlets until the outsides are crispy and the insides are no longer pink, 10 to 15 minutes. Let the chicken cool slightly so the coating can set, about 5 minutes, before transferring to plates and serving.

## Tags
- chicken breast
- egg white
- kid-friendly
- ritz cracker
- sharp cheddar
- sour cream

## Notes
`,Qb=`---
title: "Roasted Asparagus With Crispy Leeks and Capers"
source: "https://cooking.nytimes.com/recipes/1021977-roasted-asparagus-with-crispy-leeks-and-capers?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "3 to 4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - vegetables
  - side dish
tags:
  - asparagus
  - caper
  - dijon mustard
  - leek
  - passover
  - spring
  - vegan
cuisine: ""
image: "https://static01.nyt.com/images/2021/03/17/dining/12Apperex/merlin_184858497_fc38c5ab-b83d-4940-9698-9943b0e94909-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Roasted Asparagus With Crispy Leeks and Capers

> Source: https://cooking.nytimes.com/recipes/1021977-roasted-asparagus-with-crispy-leeks-and-capers?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this supremely springy recipe, thick asparagus stalks and thinly sliced leeks are glossed with olive oil and covered in salty capers. Everything is roasted in the same pan and emerges tender and golden-edged. Capers also make an appearance in the mustard sauce served alongside, which adds a tangy, mayonnaise-like richness. You can double the recipe, if you wish, though you may have to increase the roasting time by a few minutes to make up for a more-crowded pan. Serve this on its own as a first course, or as an accompaniment to roast chicken, braised meats or seared fish. Just don’t use thin asparagus: It’ll cook too quickly, before the leeks have a chance to turn golden. Stick with spears that are at least 1/2 inch in diameter.

## Ingredients
- 1 pound thick asparagus, ends trimmed
- 2 tablespoon extra-virgin olive oil
- Kosher salt and black pepper
- 1 large leek, white and light green parts, halved lengthwise and thinly sliced
- 2 tablespoons drained capers
- Lemon wedges, for serving
- 1/4 cup parsley, leaves and tender stems, torn
- 2 teaspoons Dijon mustard
- 2 teaspoons drained capers, finely chopped
- 1 small garlic clove, finely grated or minced
- 3 tablespoons extra-virgin olive oil

## Instructions
1. Heat oven to 425 degrees. Put asparagus on a rimmed sheet pan and toss with 1 tablespoon oil and 1/2 teaspoon salt until well coated.
2. In a small bowl, stir together leeks, remaining 1 tablespoon oil, and a pinch each of salt and pepper. Sprinkle leeks on top of asparagus, then sprinkle with capers. Roast until asparagus are tender and golden brown, about 12 to 18 minutes.
3. While the asparagus stalks roast, make the mustard sauce: In a small bowl, whisk together mustard, capers and garlic. Slowly whisk in olive oil a few drops at a time to create a thick, emulsified dressing. Season with salt and pepper to taste.
4. Once asparagus stalks are out of the oven, squeeze a lemon wedge over it and sprinkle parsley on top. Serve with mustard sauce and more lemon wedges on the side.

## Tags
- asparagus
- caper
- dijon mustard
- leek
- passover
- spring
- vegan

## Notes
`,Xb=`---
title: "Roasted Cabbage and Butter Beans"
source: "https://cooking.nytimes.com/recipes/1027365-roasted-cabbage-and-butter-beans"
author: "Dan Pelosi"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT55M"
total_time: "PT1H"
categories:
  - dinner
  - easy
  - lunch
  - weeknight
  - beans
  - main course
  - side dish
tags:
  - anchovy
  - budget
  - cabbage
  - five ingredient
  - lima bean
  - sheet-pan
  - dairy-free
  - gluten-free
  - healthy
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2025/09/18/multimedia/00FD-CHEAP-ONE-POT-ROUNDUP-REFRESH-cabbage-and-butter-beans-lgzm/00FD-CHEAP-ONE-POT-ROUNDUP-REFRESH-cabbage-and-butter-beans-lgzm-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Roasted Cabbage and Butter Beans

> Source: https://cooking.nytimes.com/recipes/1027365-roasted-cabbage-and-butter-beans

## Description
Ribbons of cabbage are roasted until they are sweet and caramelized then tossed with butter beans, garlic and anchovies and finished with fresh parsley; the details make this dish surprisingly flavorful for such a simple ingredient list. An easy and affordable way to get dinner on the table, this recipe makes a hearty main dish served with hunks of crusty bread, or a hardworking side dish next to your favorite protein. If you cannot find butter beans, cannellini beans make a perfect (though smaller) substitute. If you are seeking a vegetarian alternative, a few tablespoons of chopped capers make a great substitute for the flavor that the anchovies add.

## Ingredients
- 1 medium cabbage (about 2 1/2 pounds)
- Salt and pepper
- 1/4 cup extra-virgin olive oil, plus more for serving
- 2 (15-ounce) cans butter beans
- 4 anchovy fillets
- 2 garlic cloves
- 1/2 teaspoon crushed red pepper (optional)
- 1/4 cup roughly chopped parsley, for garnish
- 1 lemon (optional)

## Instructions
1. Heat the oven to 400 degrees.
2. Remove the outer layer of leaves from the cabbage, then cut off the stem end. Cut the cabbage into quarters through the core, then cut out the solid core from each piece. Slice each piece crosswise into 1/2-inch-thick slabs, then separate them with your hands into individual ribbons. Spread the ribbons onto a baking sheet and season with salt and pepper.
3. Roast the cabbage for 15 minutes. Drizzle the cabbage with 2 tablespoons olive oil and toss to coat, then roast for another 15 minutes.
4. Meanwhile, rinse and drain the butter beans. Finely mince the anchovies and grate the garlic.
5. Add the beans, anchovies, garlic, crushed red pepper (if using) and the remaining 2 tablespoons olive oil to the roasted cabbage and toss to coat evenly. Bake for a final 15 minutes, or longer if you prefer the cabbage to caramelize further.
6. Remove the cabbage from the oven. Sprinkle with the chopped parsley, drizzle with more olive oil, season with salt and pepper, and add a squeeze of lemon, if that suits you; gently toss to combine. Serve warm.

## Tags
- anchovy
- budget
- cabbage
- five ingredient
- lima bean
- sheet-pan
- dairy-free
- gluten-free
- healthy
- winter

## Notes
`,Zb=`---
title: "Roasted Cabbage With Capers and Garlic"
source: "https://cooking.nytimes.com/recipes/1026705-roasted-cabbage-with-capers-and-garlic"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT45M"
total_time: "PT55M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - vegetables
  - appetizer
  - side dish
tags:
  - budget
  - caper
  - green cabbage
  - lemon juice
  - lemon zest
  - party
  - sheet-pan
  - dairy-free
  - gluten-free
  - healthy
  - vegan
  - vegetarian
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2025/04/11/multimedia/hm-roasted-cabbage-gmcl/hm-roasted-cabbage-gmcl-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Roasted Cabbage With Capers and Garlic

> Source: https://cooking.nytimes.com/recipes/1026705-roasted-cabbage-with-capers-and-garlic

## Description
It sounds so simple — roasted cabbage with a garlicky caper oil — but the resulting dish is anything but plain. Sharp from briny capers and unapologetically pungent from the garlic, with a bold kick of zesty lemon, the flavored oil serves as both a marinade for the cabbage and a finishing glaze. As the cabbage roasts, it turns savory and caramelized while the capers develop a crunch. Make this dish heartier by roasting chickpeas alongside the cabbage, serve alongside a protein like quinoa or pan-fried tofu, toss through pasta, or simply serve with bread to mop up every last drop.

## Ingredients
- 1/2 cup extra-virgin olive oil, plus more for drizzling
- 1/4 cup capers, finely chopped
- 3 garlic cloves, finely chopped
- Zest of 1 lemon
- 1/4 cup lemon juice (from 1 to 2 lemons), or more as needed
- Salt and pepper
- 1 medium green cabbage (2½ to 3 pounds)
- Handful of chopped parsley or torn basil leaves

## Instructions
1. Heat the oven to 450 degrees.
2. Place the olive oil, capers, garlic, lemon zest and lemon juice into a small bowl and stir to combine. Season generously with salt and black pepper. Taste to make sure the oil is both very lemony and salty, adjusting seasonings as needed.
3. Prepare the cabbage: Remove any wilted outer leaves, then halve the cabbage through its core. Place both halves flat side down on a cutting board and slice through the core into 1½-inch-thick wedges.
4. Drizzle a rimmed sheet pan with olive oil and gently transfer the cabbage, keeping each wedge intact and placing them flat-side down in a single layer. Spoon about half of the garlicky caper oil evenly over the cabbage and, using your hands, gently massage it in, pressing the garlic and capers over and between the leaves. Season lightly with salt and pepper.
5. Roast the cabbage until tender, golden at the edges and caramelized, 25 to 30 minutes.
6. Transfer the cabbage to serving plates. Drizzle the remaining garlicky caper oil over each wedge, scatter with parsley or basil, and serve.

## Tags
- budget
- caper
- green cabbage
- lemon juice
- lemon zest
- party
- sheet-pan
- dairy-free
- gluten-free
- healthy
- vegan
- vegetarian
- winter

## Notes
`,Fb=`---
title: "Roasted Chicken With Caramelized Cabbage"
source: "https://cooking.nytimes.com/recipes/1022849-roasted-chicken-with-caramelized-cabbage"
author: "Eric Kim"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT2H20M"
categories:
  - dinner
  - main course
tags:
  - fennel seed
  - green cabbage
  - roast chicken
  - whole chicken
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2021/12/30/dining/30RESOLUTIONREX1-roast-chicken/merlin_199513131_70048097-2070-43c9-9ba8-9ca656c8a42d-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Roasted Chicken With Caramelized Cabbage

> Source: https://cooking.nytimes.com/recipes/1022849-roasted-chicken-with-caramelized-cabbage

## Description
Chicken roasted on a sheet pan develops gloriously crispy skin thanks to the increased hot airflow from the oven that passes over it. The extra space on the pan holds cabbage and onions, which roast around the chicken and soak up its juices while caramelizing. Fennel seeds, which are often found in sausage, lend their wonderful anise flavor to the dry brine on the bird and to the schmaltzy vegetables. If you can, dry-brine the chicken overnight for the most flavor and juiciness. Be sure to save the carcass to turn into stock later.

## Ingredients
- Kosher salt and freshly ground black pepper
- 2 teaspoons fennel seeds
- 1 tablespoon packed dark brown sugar
- 1 whole (3- to 4-pound) chicken
- 2 1/2 pounds green cabbage (about 1 large head), cored and cut into 1-inch pieces
- 1 large yellow onion, halved and thinly sliced
- 5 tablespoons olive oil
- 1 tablespoon sherry vinegar

## Instructions
1. In a small dish, stir together 1 1/2 tablespoons Diamond Crystal kosher salt or 1 tablespoon Morton’s coarse kosher salt, 1 teaspoon black pepper, 1 teaspoon fennel seeds and the brown sugar.
2. Place the chicken on a large plate or sheet pan and, with a paper towel, pat the surface of the chicken as dry as you can. Remove any giblets from the cavity and reserve for another time. Sprinkle a third of the spice mixture into the cavity of the chicken, focusing especially on the underside of the breasts. Use your hands to really rub the spices into the cavity. Now, sprinkle the rest of the spice mixture all over the surface of the chicken, including the bottom but especially the top, where the breasts are, and again, really rub it into the skin. If roasting right away, let the chicken sit at room temperature for at least 1 hour. Alternatively, you can place the chicken, uncovered, in the refrigerator to dry-brine for up to 24 hours; just be sure to let it sit out at room temperature for at least 1 hour before roasting.
3. While the chicken is coming to room temperature, position a rack on the bottom third of the oven and heat the oven to 425 degrees. On a large sheet pan, add the cabbage, onion, 4 tablespoons olive oil and the remaining 1 teaspoon fennel seeds. Season generously with salt and pepper, and toss until evenly combined. Push the cabbage and onions to the edges of the pan to make room for the chicken, and place the chicken in the center of the pan, breast side up; the chicken should have direct contact with the pan and not be sitting over any of the vegetables. Massage the remaining 1 tablespoon olive oil onto the chicken and give it a final generous sprinkling of salt and pepper (going lighter on the seasoning the longer the chicken has been dry-brined).
4. Roast the chicken, rotating the pan halfway through, until the skin is golden brown and crispy, and the thigh meat reaches 160 degrees on an instant-read thermometer (it will continue to cook as it rests), 40 to 55 minutes or 13 minutes per pound. Do not cut into it to check that the juices run clear. The cabbage and onions should be soft and slightly charred in spots.
5. Let the chicken rest for at least 15 minutes on the pan before transferring to a cutting board and carving into portions. Don’t forget to turn the carcass over and eat the two “oysters” on the bottom of the chicken where the back of the thighs meet the spine. It’s arguably the best part of the roast chicken experience, and the chef’s treat.
6. Add the vinegar to the cabbage and onions, toss until evenly distributed and taste for seasoning, adjusting with salt and pepper. Serve alongside the chicken.

## Tags
- fennel seed
- green cabbage
- roast chicken
- whole chicken
- winter

## Notes
`,$b=`---
title: "Roasted Lemony Fish With Brown Butter, Capers and Nori"
source: "https://cooking.nytimes.com/recipes/1022553-roasted-lemony-fish-with-brown-butter-capers-and-nori?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - quick
  - weeknight
  - seafood
  - main course
tags:
  - brown butter
  - caper
  - lemon
  - nori
  - parsley
  - white fish
cuisine: ""
image: "https://static01.nyt.com/images/2021/09/15/dining/10apperex/10apperex-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Roasted Lemony Fish With Brown Butter, Capers and Nori

> Source: https://cooking.nytimes.com/recipes/1022553-roasted-lemony-fish-with-brown-butter-capers-and-nori?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Drizzling a mild, white fish with a caper-spiked browned butter is classic for a reason. The butter adds richness to the lean fish, and the tanginess of capers and lemon perks up any mellowness. In this version, adapted from the chef Danielle Alvarez’s cookbook “Always Add Lemon” (Hardie Grant, 2020), nori oil adds another layer of umami flavor. It’s both bright and deep, with a silky texture that’s easy to achieve. Serve it with rice or bread to mop up all the saline, buttery juices.

## Ingredients
- 2 1/4 pounds/6 (6-ounce) fillets white fish, such as hake or cod
- Salt and freshly ground black pepper
- 1/4 cup extra-virgin olive oil
- 2 lemons
- 4 tablespoons unsalted butter
- 1 cup parsley leaves and tender stems, coarsely chopped
- 2 tablespoons capers, drained
- 10 nori seaweed snack sheets, crumbled (about 1/3 cup)

## Instructions
1. Heat oven to 475 degrees. Put fish on a rimmed baking sheet and season with salt and pepper; set aside.
2. Make the nori oil: Place crumbled seaweed snacks in a blender or mini food processor. With the motor running, drizzle in 1/4 cup of the olive oil and continue to blend until the oil is black, 1 to 3 minutes, scraping down the sides if needed. (Because there’s such a small amount of liquid, you may need to stir a lot in between pulses. If you like, you can double the ingredients and save some for next time; it will keep for at least a few weeks in the fridge.) When the oil is well blended, stir in a pinch each of salt and pepper and set aside.
3. Pour the remaining 1/4 cup olive oil all over fish. Thinly slice 1 1/2 lemons. (Save the other lemon half for serving.) Arrange lemon slices on top of the fish. Roast until the fish is opaque and just cooked through but not yet flaky, about 10 to 15 minutes, depending on the thickness of fish. Remove from oven and brush two-thirds of the nori oil on top of fish; set aside to rest while preparing the butter.
4. In a small saucepan, melt the butter over medium heat. Cook, swirling occasionally, until the foam subsides, the milk solids turn golden-brown and it smells nutty and toasty, 3 to 5 minutes. Add parsley and capers, and cook for another minute. (Be careful when adding capers, as they may splatter once they hit the hot butter.) Pour the sizzling butter mixture over the fish and squeeze a little lemon juice from the reserved half on top. Serve immediately with remaining nori oil on the side for more drizzling.

## Tags
- brown butter
- caper
- lemon
- nori
- parsley
- white fish

## Notes
`,ey=`---
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
`,ny=`---
title: "Roasted Rhubarb Cobbler"
source: "https://cooking.nytimes.com/recipes/1022095-roasted-rhubarb-cobbler?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "6 to 8 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H30M"
categories:
  - dessert
tags:
  - cobbler
  - rhubarb
  - vanilla
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2021/04/21/dining/16apperex/merlin_186367155_2c056245-c2c2-4626-9bfd-2c83f9f305d3-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Roasted Rhubarb Cobbler

> Source: https://cooking.nytimes.com/recipes/1022095-roasted-rhubarb-cobbler?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
In this buttery cobbler, slices of rhubarb are roasted with sugar before rounds of biscuit dough are added to the pan. This extra step allows the rhubarb juices to condense into a sweet-tart syrup and eliminates the need for a thickener like cornstarch or tapioca, which can muddy the flavors. The result is a bright-tasting, flaky cobbler that’s gently scented with vanilla and a little orange zest. Topped with a drizzle of heavy cream or a scoop of ice cream, it makes a rose-tinged dessert that’s both lighter and bolder than others of its kind.

## Ingredients
- 1 vanilla bean, split lengthwise (or use 1/2 teaspoon vanilla paste or 1 tablespoon vanilla extract)
- 2 pounds rhubarb, trimmed and cut into 1/2-inch pieces (about 7 cups)
- 3/4 cup/150 grams granulated sugar
- 1 teaspoon finely grated orange zest
- Pinch of kosher salt
- 3/4 cups/96 grams all-purpose flour, plus more for shaping
- 2 tablespoons granulated sugar
- 2 1/4 teaspoons baking powder
- 3 tablespoon cold unsalted butter, cut into 1/2-inch cubes
- 1/3 cup/79 milliliters plus 1 tablespoon heavy cream, plus more for serving, if you like
- Demerara sugar, for sprinkling
- Ice cream, for serving (optional)

## Instructions
1. Heat oven to 425 degrees. Using the tip of a paring knife, scrape the pulp out of the vanilla bean halves and add the pulp to a 1 1/2 quart gratin or baking dish or 9-by-9-inch pan along with the scraped-out pods. (Alternatively, add the paste or extract to the pan.) Add the rhubarb, sugar, zest and salt, and toss well. Let sit at room temperature to macerate while preparing the biscuit dough.
2. Make the biscuit dough: Put the flour, sugar, baking powder and salt in a food processor. Pulse to combine. Add cubed butter, then pulse until the mixture has formed lime bean-size pieces. Drizzle in 1/3 cup heavy cream and pulse until everything just clumps together, taking care not to overprocess. (To make the dough by hand, put the flour, sugar, baking powder and salt in a large bowl and whisk to combine. Add cubed butter, then mix it in with your hands, pinching and squeezing with your fingers — or use a pastry blender — until the largest pieces are the size of peas. Drizzle in 1/3 cup heavy cream a little at a time, mixing until the dough comes together.)
3. Dump the dough onto a lightly floured surface, and gently pat it together until it’s a cohesive lump. Using a small ice cream scoop or a large spoon, form dough into 6 evenly sized balls. Slightly flatten dough balls into thick rounds. Cover rounds with plastic wrap and chill for at least 30 minutes (and up to 6 hours).
4. Put the rhubarb in the oven and roast, stirring halfway through, until the rhubarb has softened and the liquid has formed a syrup, about 30 minutes.
5. Remove pan from oven and use tongs to remove the vanilla bean pods.
6. Lower oven temperature to 375 degrees. Arrange biscuit rounds on top of the rhubarb, leaving space in between them. Brush biscuits with remaining tablespoon of heavy cream and sprinkle with Demerara sugar.
7. Bake cobbler until biscuits are golden brown, about 25 to 35 minutes. Serve warm or at room temperature, with cream or ice cream, if you like.

## Tags
- cobbler
- rhubarb
- vanilla
- spring

## Notes
`,ty=`---
title: "Rotisserie Chicken and Greens Pasta"
source: "https://cooking.nytimes.com/recipes/1023870-rotisserie-chicken-and-greens-pasta"
author: "Christian Reynoso"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - pastas
  - main course
tags:
  - budget
  - chicken
  - kale
  - partial-access-ic
  - penne
  - rigatoni
  - spinach
  - swiss chard
  - ziti
cuisine: ""
image: "https://static01.nyt.com/images/2023/01/25/multimedia/cr-rotisserie-chicken-and-greens-pasta-lvbp/cr-rotisserie-chicken-and-greens-pasta-lvbp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Rotisserie Chicken and Greens Pasta

> Source: https://cooking.nytimes.com/recipes/1023870-rotisserie-chicken-and-greens-pasta

## Description
Rotisserie chicken, with its browned, crisp skin and juicy meat, provides a great leg up when there’s no time to roast one yourself. Add some pre-cut greens and it becomes the base for this rich, nourishing pasta sauce, which comes together while the noodles cook. Although convenient, rotisserie chicken meat can be underseasoned, so this recipe calls for seasoning it more. Look for baby cooking greens or chopped greens, like kale, spinach, chard or escarole, which will melt easily into the jammy onions and garlic. Fresh lemon juice rounds out this pasta, making it bright; cream is optional but highly endorsed. A sprinkle of Parmesan finishes this dish with even more depth and umami.

## Ingredients
- Salt and freshly ground black pepper
- 1 pound rigatoni, penne rigate, penne or ziti
- 1 small rotisserie chicken (about 1 3/4 pounds) or about 2 1/2 cups shredded cooked chicken
- 3 tablespoons unsalted butter
- 1 medium yellow onion, thinly sliced (about 2 packed cups)
- 5 large garlic cloves, finely chopped or grated
- 2 teaspoons Dijon mustard
- 1 cup chicken stock (see Tip)
- 1/2 cup heavy cream (optional)
- 8 to 10 ounces baby kale or spinach, or chopped chard or other cooking greens
- 1 juicy lemon, zested then halved
- Parmesan, for serving

## Instructions
1. Bring a large pot of water to a boil. Season generously with salt and cook the pasta until al dente, then drain pasta.
2. While the pasta cooks, prep the chicken: Separate the skin from the meat and separate the meat from the bones; discard the bones and shred the meat into bite-size pieces. Season the chicken meat with 1 1/2 teaspoons pepper and salt to taste. Gather the skin in a mound on a cutting board; slice it thinly, then finely chop, and set aside.
3. Place a Dutch oven or large heavy pot over medium heat and add the butter. Once melted and bubbling, add onions, season with salt and pepper and cook, stirring and pressing often with a spatula or wooden spoon to help them cook down faster, until very soft, translucent and almost jammy with golden brown edges, about 10 minutes. Stir in the garlic and mustard, and cook until very fragrant and softened, about 2 minutes.
4. Turn the heat up to high, add 3/4 cup stock and the heavy cream (if using) and scrape up any browned bits on the bottom of the pot. Bring to a simmer, then stir in the pasta, seasoned chicken and the skin. In small handfuls, add the greens, stirring until wilted and tender. Turn off the heat, add the lemon zest and juice the lemon halves over the top; stir again. Add the remaining 1/4 cup stock if more sauciness is desired.
5. Sprinkle with grated Parmesan. Serve immediately, with more pepper and salt to taste.

## Tags
- budget
- chicken
- kale
- partial-access-ic
- penne
- rigatoni
- spinach
- swiss chard
- ziti

## Notes
`,ay=`---
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
`,iy=`---
title: "Salted Caramel and Peanut Butter Shortbread"
source: "https://cooking.nytimes.com/recipes/1023717-salted-caramel-and-peanut-butter-shortbread?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yewande Komolafe"
yield: "About 3 dozen cookies"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - snack
  - dessert
tags:
  - christmas
  - christmas cookie
  - egg yolk
  - freezer friendly
  - make-ahead
  - peanut butter
  - shortbread
cuisine: ""
image: "https://static01.nyt.com/images/2022/12/07/multimedia/YK-caramel-peanut-butter-shortbread-1-1b50/YK-caramel-peanut-butter-shortbread-1-1b50-videoSixteenByNineJumbo1600-v3.jpg"
date_saved: "2026-04-16"
---

# Salted Caramel and Peanut Butter Shortbread

> Source: https://cooking.nytimes.com/recipes/1023717-salted-caramel-and-peanut-butter-shortbread?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Simple mix-ins of crushed hard caramels and smooth peanut butter create a soft baked cookie that is simple and distinct. The crushed candies melt when baked creating craters filled with chewy caramel, and the peanut butter swirl adds a nutty depth. This cookie will appeal to anyone who enjoys their dessert with a salty pop. You can prepare these ahead of time; just scoop and refrigerate the dough on a sheet pan, then bake the chilled dough to order, sprinkling with a little flaky salt to finish. (This cookie is one of six cookies that you can make with this Butter Shortbread Dough recipe. If you make that dough, you can make a double batch of the Caramel Peanut Butter Shortbread or try any of the other five recipes.)

## Ingredients
- 1 cup/230 grams unsalted butter, at room temperature, plus more for pan
- 1 cup/205 grams granulated sugar
- 1 teaspoon kosher salt (such as Diamond Crystal)
- 1 large egg yolk
- 2 1/2 cups/320 grams all-purpose flour (see Tip)
- 1 (5 1/2-ounce) bag caramel hard candies
- 1/4 cup natural creamy peanut butter
- 1 tablespoon flaky salt, for finishing

## Instructions
1. Heat the oven to 350 degrees. Line a sheet pan with parchment paper. Make the dough: In the bowl of a stand mixer fitted with the paddle attachment, combine the butter, sugar and salt. Beat on low speed until incorporated and smooth, scraping down the sides of the bowl as needed, about 3 minutes. (Do not beat until fluffy, you don’t need to incorporate air into the dough.) Add the yolk and mix until just combined. Turn the mixer off and scrape down the sides of the bowl.
2. Add the flour to the bowl all at once and scrape the bottom and sides of the bowl. Turn the mixer speed to low and beat until flour is fully incorporated, scraping the bowl again if needed, about 30 seconds. The dough will be in large crumbles.
3. (If you’re starting with a half batch of Butter Shortbread Dough, start here.) Crush the hard caramels: Place the unwrapped caramels in a freezer bag, wrap it in a kitchen towel, then hit the wrapped bag repeatedly with a rolling pin or the bottom of a wine bottle until the caramels are crushed into smaller pieces. You should end up with about 3/4 cup crushed caramels.
4. Add the crushed caramels to the dough crumbles and mix, using your fingers to incorporate into the dough. Stir in the peanut butter with a spatula until it’s streaked through the dough but not fully incorporated.
5. Use a 1/2-ounce cookie scoop, an ice cream scoop or a tablespoon measure to portion the dough right onto the prepared baking sheet, spacing at least 1 inch apart. At this point you can refrigerate the scooped dough, well wrapped, for up to 3 days, or chill, then freeze in resealable plastic bags for up to one month. Bake until the cookies are light golden brown at the bottom edges, rotating once halfway through baking, 12 minutes. (If baking from frozen, you may need to add a minute or two to the baking time.) Sprinkle cookies with salt after removing from the oven.

## Tags
- christmas
- christmas cookie
- egg yolk
- freezer friendly
- make-ahead
- peanut butter
- shortbread

## Notes
`,oy=`---
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
`,sy=`---
title: "Sausage and Cabbage"
source: "https://cooking.nytimes.com/recipes/1881-sausage-and-cabbage"
author: "Julia Moskin"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT3H"
categories:
  - dinner
  - weeknight
  - main course
tags:
  - five ingredient
  - italian pork sausage
  - savoy cabbage
cuisine: ""
image: "https://static01.nyt.com/images/2014/04/11/dining/sausageandcabbage/sausageandcabbage-videoSixteenByNineJumbo1600-v3.jpg"
date_saved: "2026-04-16"
---

# Sausage and Cabbage

> Source: https://cooking.nytimes.com/recipes/1881-sausage-and-cabbage

## Description
This recipe is an adaptation of one created by Tamasin Day-Lewis, the Stevie Nicks of British cookery. A casserole recipe that she credits to the British food writer Jane Grigson has just four ingredients — sausage, cabbage, butter and pepper — but after two and a half hours in the oven, it emerges mysterious and succulent.

## Ingredients
- Salt
- 3 tablespoons unsalted butter
- 2 pounds fresh sweet Italian pork sausages or bulk sausage
- 1 large green or Savoy cabbage, about 4 pounds, cored and thickly shredded
- Freshly ground black pepper
- Crusty bread and mustard, for serving

## Instructions
1. Heat oven to 300 degrees. Bring a large pot of salted water to a boil and butter a 9-by-13-by-2-inch baking dish. If using sausages, remove casings and discard them.
2. Place cabbage in boiling water, cover, and let water come back to the boil. Uncover and boil for 3 minutes. Drain cabbage in a colander and run cold water over it to stop cooking.
3. Put about 1/3 of the cabbage in buttered dish and cover with 1/2 the meat. Sprinkle with salt and pepper and dot with butter. Repeat, ending with a final layer of cabbage, and dot top with butter.
4. Cover dish tightly with a layer of parchment paper, then top with a lid or a layer of aluminum foil. Cook for about 2 1/2 hours, until cabbage is soft and sweet, and top is lightly browned. After 2 hours, uncover the dish: if there is a lot of liquid in the bottom, leave uncovered for the rest of the cooking time. If not, re-cover and finish cooking.

## Tags
- five ingredient
- italian pork sausage
- savoy cabbage

## Notes
`,ry=`---
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
`,ly=`---
title: "Sheet-Pan Chicken With Rhubarb and Red Onion"
source: "https://cooking.nytimes.com/recipes/1023186-sheet-pan-chicken-with-rhubarb-and-red-onion?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Melissa Clark"
yield: "3 to 4 servings"
prep_time: ""
cook_time: ""
total_time: "PT45M"
categories:
  - weeknight
  - poultry
  - main course
tags:
  - chicken drumstick
  - chicken thigh
  - red onion
  - rhubarb
  - spring
cuisine: ""
image: "https://static01.nyt.com/images/2022/05/18/dining/13apperex-chicken/13apperex-chicken-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Sheet-Pan Chicken With Rhubarb and Red Onion

> Source: https://cooking.nytimes.com/recipes/1023186-sheet-pan-chicken-with-rhubarb-and-red-onion?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This easy yet robust dish celebrates rhubarb’s savory side. Here, a bit of honey, some sliced sweet red onion and the rich juices of roasted chicken thighs and drumsticks temper its tartness. Serve this dish with a crackly baguette or some rice to catch the tangy sauce at the bottom of the pan. It’s the best part.

## Ingredients
- 1 3/4 pounds bone-in, skin-on chicken thighs and drumsticks (see Tip)
- 1 teaspoon ground coriander
- 1 teaspoon kosher salt (such as Diamond Crystal), plus more as needed
- 1/4 teaspoon freshly ground black pepper, plus more as needed
- 1 large red onion, cut into 1/2-inch-thick wedges
- 5 thyme sprigs
- 3 tablespoons extra-virgin olive oil, plus more as needed
- 8 ounces rhubarb stalks, sliced into 1/2-inch pieces (about 2 cups)
- 3 tablespoons honey, plus more to taste
- 1/2 cup cilantro or mint leaves and tender stems, torn

## Instructions
1. Heat oven to 425 degrees and line sheet pan with parchment paper. Pat chicken dry with paper towels and season all over with coriander, 1 teaspoon salt and 1/4 teaspoon pepper.
2. Place onion wedges on the prepared sheet pan and lightly season with more salt and pepper. Add chicken and thyme sprigs to the pan and drizzle 3 tablespoons oil over everything. Toss until well coated, then spread chicken and onions in a single layer. Roast for 10 minutes.
3. While the chicken is in the oven, combine rhubarb and 3 tablespoons honey in a medium bowl. Lightly drizzle with oil, add a pinch of salt and pepper, and toss until rhubarb is well coated.
4. Remove chicken from oven and carefully spoon rhubarb onto the hot pan around the onions and chicken. Continue roasting until the chicken is cooked through, and the rhubarb and onion are tender and caramelized, 25 to 35 minutes longer, tossing the rhubarb and onions (not the chicken) once about halfway through.
5. Stir the rhubarb and onions very well, making sure to incorporate all the browned bits and chicken juices from the bottom of the pan (this is the tastiest part). Then sample a piece of rhubarb. If it’s very tart, drizzle with a little more honey, tossing well. Serve chicken with rhubarb-onion mixture garnished with herbs.

## Tags
- chicken drumstick
- chicken thigh
- red onion
- rhubarb
- spring

## Notes
`,cy=`---
title: "Sheet-Pan Fish Tikka With Spinach"
source: "https://cooking.nytimes.com/recipes/1023493-sheet-pan-fish-tikka-with-spinach"
author: "Zainab Shah"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT20M"
categories:
  - dinner
  - easy
  - quick
  - seafood
  - main course
tags:
  - garam masala
  - partial-access-ic
  - sheet-pan
  - spinach
  - white fish
cuisine: ""
image: "https://static01.nyt.com/images/2022/09/20/dining/sheet-pan-fish-tikka/merlin_213164982_cd945d6e-69e7-445b-bb81-8c7f70f312fb-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Sheet-Pan Fish Tikka With Spinach

> Source: https://cooking.nytimes.com/recipes/1023493-sheet-pan-fish-tikka-with-spinach

## Description
Tikka marinade imbues meats and veggies with extreme flavor: Complex, layered heat comes from garam masala and red chiles, garlic adds a delicate depth and ginger a mellow freshness, while yogurt cools, tenderizes and extends flavors from the spices. Though traditionally anything with tikka marinade is cooked on coals for smokiness (see Tip), the flavors come together well in a home oven. This recipe calls for any fleshy white fish that can stand this mix of heady spices and maintain its structural integrity for 12 to 15 minutes in the oven. Lay the fish on a bed of spinach, and the marinade will flavor both. The preparation is simple for this recipe, but the flavorful results are anything but.

## Ingredients
- 1 1/2 pounds firm, white-fleshed fish (such as cod, basa or halibut, cut into chunks)
- 1/4 cup olive oil or any neutral oil
- 2 tablespoons full-fat Greek yogurt
- 1 tablespoon garam masala
- 1 teaspoon Kashmiri or other red chile powder
- 1 teaspoon ginger paste or freshly grated ginger
- 1 teaspoon garlic paste or freshly grated garlic
- 1 teaspoon ground coriander
- 1/2 teaspoon ground turmeric
- Fine sea salt
- 1 pound baby spinach (about 14 packed cups)
- Rice or roti, for serving

## Instructions
1. Heat the oven to 425 degrees. Pat the fish dry and set aside.
2. Combine the oil, yogurt, garam masala, chile powder, ginger, garlic, coriander, turmeric and 1 teaspoon salt in a large bowl and stir until the marinade is smooth.
3. Add the fish and coat evenly.
4. Arrange the spinach in an even layer on a large sheet pan. Place the fish on the spinach, dispersing it evenly.
5. Bake on the top rack for 10 to 12 minutes, or until the fish starts to turn golden.
6. Set the oven to broil and broil on high just until the fish turns golden brown, 3 to 4 minutes. Season to taste with additional salt. Serve with rice or roti, if desired.

## Tags
- garam masala
- partial-access-ic
- sheet-pan
- spinach
- white fish

## Notes
`,dy=`---
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
`,hy=`---
title: "Sheet-Pan Kielbasa With Cabbage and Beans"
source: "https://cooking.nytimes.com/recipes/1021649-sheet-pan-kielbasa-with-cabbage-and-beans"
author: "Ali Slagle"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT35M"
categories:
  - dinner
  - weeknight
  - sausages
  - vegetables
  - main course
tags:
  - cabbage
  - dill
  - kid-friendly
  - kielbasa
  - white bean
  - fall
  - winter
cuisine: ""
image: "https://static01.nyt.com/images/2020/11/11/dining/as-kielbasa-and-cabbage/as-kielbasa-and-cabbage-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Sheet-Pan Kielbasa With Cabbage and Beans

> Source: https://cooking.nytimes.com/recipes/1021649-sheet-pan-kielbasa-with-cabbage-and-beans

## Description
This sheet-pan dinner of roasted kielbasa, caramelized cabbage and white beans marinated in a dill-and-red wine vinaigrette comes together in about a half-hour. There are many different types of kielbasa, but the smoked version typically found at American grocery stores is horseshoe-shaped and, when roasted, tastes a little like pepperoni. Feel free to play around with substitutions: You can use green or red cabbage for the Savoy, though the leaves won’t get quite as frizzled and golden. Instead of dill, chives or parsley can bring freshness. Instead of shallot, use scallions, red-pepper flakes or grated garlic for sharp heat. Instead of mustard, you could use horseradish, chopped pickles or sauerkraut for briny acidity.

## Ingredients
- 1 medium Savoy cabbage (2 to 2 1/2 pounds), cut through the root into 1-inch-thick wedges
- 1/4 cup extra-virgin olive oil, plus more for tossing the cabbage
- Kosher salt (such as Diamond Crystal) and black pepper
- 8 ounces to 1 pound smoked kielbasa, diagonally sliced 1/4-inch thick
- 1/4 cup red wine vinegar
- 1/4 cup finely chopped fresh dill
- 1 shallot, finely chopped
- 4 teaspoons Dijon mustard
- 1 (14-ounce) can white beans, such as great Northern or cannellini, drained and rinsed

## Instructions
1. Heat oven to 450 degrees. Add the cabbage to a rimmed baking sheet and toss with olive oil, salt and pepper to coat. Arrange in an even layer, then scatter the kielbasa on top. Roast without flipping until cabbage is tender and charred in spots and the kielbasa is deeply golden, 25 to 30 minutes.
2. Meanwhile, in a medium bowl, stir together 1/4 cup olive oil with the vinegar, dill, shallot, mustard, 2 teaspoons salt and a few grinds of pepper. Add the beans and stir to combine.
3. Divide the cabbage and sausage among plates and spoon the beans and vinaigrette on top.

## Tags
- cabbage
- dill
- kid-friendly
- kielbasa
- white bean
- fall
- winter

## Notes
`,uy=`---
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
`,py=`---
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
`,gy=`---
title: "Skillet Gnocchi With Miso Butter and Asparagus"
source: "https://cooking.nytimes.com/recipes/1026745-skillet-gnocchi-with-miso-butter-and-asparagus?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "3 to 4 servings"
prep_time: "PT5M"
cook_time: "PT10M"
total_time: "PT15M"
categories:
  - dinner
  - easy
  - quick
  - weeknight
  - one pot
  - pastas
  - main course
tags:
  - arugula
  - asparagus
  - cast iron
  - gnocchi
  - miso
  - skillet
  - stovetop
  - spring
  - summer
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/04/04/multimedia/as-miso-butter-gnocchi-fhgp/as-miso-butter-gnocchi-fhgp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Skillet Gnocchi With Miso Butter and Asparagus

> Source: https://cooking.nytimes.com/recipes/1026745-skillet-gnocchi-with-miso-butter-and-asparagus?campaign_id=222&emc=edit_veg_20260409&instance_id=173819&nl=the-veggie&regi_id=197868639&segment_id=217978&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This skillet gnocchi recipe has a spring in its step: It takes just 10 minutes to cook and is loaded with sweet springtime asparagus and baby greens. But that doesn’t mean the flavor is fleeting: The combination of miso, butter and vinegar forms a silky, rich sauce that glosses the seared gnocchi and vegetables and anything else you wish to add. Perhaps that’s the crunch of sliced radishes or toasted pistachios, or the crispness of a fried egg or seared fish.

## Ingredients
- 1 tablespoon vegetable or canola oil
- 1 (16- to 18-ounce) package shelf-stable potato gnocchi
- 4 tablespoons unsalted butter, softened
- 2 tablespoons white miso
- 2 teaspoons sherry vinegar
- Black pepper
- 1 bunch asparagus (about 1 pound), tough ends trimmed, stalks cut into 1/2-inch lengths
- Salt
- 2 packed cups baby arugula, pea shoots or other tender greens

## Instructions
1. In a large nonstick or well-seasoned cast-iron skillet, heat the oil over medium-high. Break apart any stuck-together gnocchi and add to the skillet in an even layer. Cover and cook, undisturbed, until the gnocchi are golden brown underneath and no longer sticking to the skillet, 2 to 4 minutes.
2. Meanwhile, in a small bowl, smash together the butter, miso, vinegar and a few grinds of pepper until combined.
3. To the skillet, add the asparagus and a pinch of salt. Cook, stirring occasionally, until the asparagus are bright green and crisp-tender, 2 to 3 minutes. Turn off the heat and add the miso butter in spoonfuls. Stir until the butter has melted and gnocchi are glossed with sauce. Season to taste with salt and pepper, then stir in the arugula until combined. Serve right away.

## Tags
- arugula
- asparagus
- cast iron
- gnocchi
- miso
- skillet
- stovetop
- spring
- summer
- vegetarian

## Notes
`,my=`---
title: "Slow-Cooked Fish With Citrus and Herbs"
source: "https://cooking.nytimes.com/recipes/1026639-slow-cooked-fish-with-citrus-and-herbs?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Andy Baraghani"
yield: "6 servings"
prep_time: "PT10M"
cook_time: "PT35M"
total_time: "PT45M"
categories:
  - dinner
  - easy
  - quick
  - one pot
  - seafood
  - main course
tags:
  - cod
  - halibut
  - iranian
  - leek
  - meyer lemon
  - nowruz
  - orange
  - saffron
  - salmon fillet
  - skillet
  - dairy-free
  - gluten-free
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/19/multimedia/19NOWRUZREX-AB-Slow-Cooked-Fish-with-Citrus-and-Herbs-fbqz/14NOWRUZREX-AB-Slow-Cooked-Fish-with-Citrus-and-Herbs-fbqz-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Slow-Cooked Fish With Citrus and Herbs

> Source: https://cooking.nytimes.com/recipes/1026639-slow-cooked-fish-with-citrus-and-herbs?campaign_id=58&emc=edit_ck_20260410&instance_id=173830&nl=cooking&regi_id=197868639&segment_id=218026&user_id=3719b3bb012d2089287c9cc303193b83

## Description
During Nowruz, the Persian New Year, it’s customary to serve fish alongside sabzi polo, buttery herbed saffron rice, as a nod to renewal and prosperity. Traditionally, white fish is smoked or fried, but this dish brings in many of the same key ingredients — fragrant saffron, fresh herbs and citrus — while embracing a more effortless, slow-roasted approach. A flaky white fish like cod or halibut works beautifully here, but salmon also works and tastes especially luxurious when bathed in olive oil, garlic and dill.

## Ingredients
- 1 teaspoon saffron threads
- 3 medium leeks, trimmed
- 3/4 cup extra-virgin olive oil
- 6 garlic cloves, thinly sliced
- 1 lemon (preferably Meyer), very thinly sliced into rounds, seeds picked out
- 1 clementine or mandarin orange, very thinly sliced, seeds picked out
- Salt
- 2 1/2 pounds boneless, skinless halibut, cod or salmon, preferably one large center-cut piece
- 1/2 cup coarsely chopped dill or tarragon or a combination

## Instructions
1. Heat the oven to 325 degrees. Crush the saffron threads into a fine powder in a mortar and pestle. (If you don’t have a mortar and pestle, use a spoon to crush it as finely as you can.) Dump out the ground saffron into a small bowl and pour 3 tablespoons of warm water over it. Set aside.
2. Cut the leeks in half lengthwise then coarsely chop. Give the leeks a good rinse to get rid of any dirt or sand.
3. Heat 1/4 cup of oil in a large skillet over medium. Add the leeks and cook, stirring occasionally, until soft but not browned, 6 to 8 minutes. Add the garlic and all citrus slices, season with salt and cook, stirring occasionally, until the garlic and citrus have softened and everything smells very delicious, 2 to 3 minutes. Slide the skillet off the heat and scoop out half the leek mixture into a small bowl.
4. Generously season the fish with salt on all sides and place in the center of the skillet over the leeks. Pour the saffron water over and around the fish, then top with the remaining leek mixture. Scatter the dill all over and pour in the remaining 1/2 cup oil. Transfer the skillet to the oven.
5. Bake until the fish is opaque and easily flakes off with a fork around the thickest part, 25 to 30 minutes. Serve as is in the skillet or use two forks to tear the fish into large pieces and transfer to a platter. Spoon all the leeks, citrus and fat over, taste and season with more salt if needed, and serve.

## Tags
- cod
- halibut
- iranian
- leek
- meyer lemon
- nowruz
- orange
- saffron
- salmon fillet
- skillet
- dairy-free
- gluten-free

## Notes
`,fy=`---
title: "Snap Pea, Tofu and Herb Salad With Spicy Peanut Sauce"
source: "https://cooking.nytimes.com/recipes/1025401-snap-pea-tofu-and-herb-salad-with-spicy-peanut-sauce?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT20M"
cook_time: "PT10M"
total_time: "PT30M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - vegetables
  - appetizer
  - main course
  - side dish
tags:
  - basil
  - chile crisp
  - cilantro
  - extra-firm tofu
  - mint
  - peanut butter
  - salad
  - stovetop
  - sugar snap pea
  - spring
  - summer
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/05/28/dining/hm-tofu-herb-saladrex-bzcl/hm-tofu-herb-saladrex-bzcl-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Snap Pea, Tofu and Herb Salad With Spicy Peanut Sauce

> Source: https://cooking.nytimes.com/recipes/1025401-snap-pea-tofu-and-herb-salad-with-spicy-peanut-sauce?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
When the season gifts us sweet, juicy sugar snap (or snow) peas, use them raw in this textural salad. Slicing them in half diagonally not only unlocks their innate crispness, but also allows the inner peas to spill out, creating more texture. This salad is brazenly herb forward, and offers an excellent way to use up any leftover bundles in your fridge; mint, cilantro or basil can be used singularly or as a mix. The two-ingredient dressing is the simplest, and possibly tastiest, peanut sauce you’ll ever make: Peanut butter is whisked together with chile crisp and loosened with boiling water, which helps encourage it to emulsify, creating a smooth, creamy and intensely savory sauce. Looking for another shortcut? You can even skip pan-frying and use store-bought pre-baked firm tofu.

## Ingredients
- 1 (14- to 16-ounce) package of extra-firm tofu, drained, patted dry and cut into 1/2-inch slices
- Salt and pepper
- Extra-virgin olive oil
- 1/4 cup creamy peanut butter, stirred
- 1 tablespoon chile crisp (or more for more heat)
- 1/4 cup boiling water
- 12 ounces sugar snap peas or snow peas, trimmed and sliced diagonally in half
- 2 scallions, trimmed and thinly sliced
- 2 cups mint, cilantro, basil or Thai basil (or a mix of all), large leaves torn

## Instructions
1. Lay the tofu out on a cutting board and scatter with salt and pepper.
2. Heat a large skillet on medium-high for 2 minutes. Drizzle with olive oil then place the tofu, seasoned side down, onto the hot surface. Drizzle the top of the tofu with a little more oil and season with a little more salt and pepper. Cook until the bottom is golden, 2 to 3 minutes. Flip over and cook the other side until golden, another 2 minutes. Remove from the pan and set aside to cool.
3. To a medium bowl, add the peanut butter and chile crisp. Pour in the boiling water and whisk to combine. If it is too thick, add more room temperature water, 1 tablespoon at a time, until the sauce is smooth and pourable. Season with salt and pepper.
4. When the tofu is cool, slice lengthwise into thin strips.
5. Place the sugar snap peas into a large bowl. Add the tofu, scallions and herbs. Drizzle over half of the peanut sauce and toss to coat. Taste, season well with salt and pepper, and toss again. To finish, drizzle with the remaining peanut sauce, olive oil and serve.

## Tags
- basil
- chile crisp
- cilantro
- extra-firm tofu
- mint
- peanut butter
- salad
- stovetop
- sugar snap pea
- spring
- summer
- vegan
- vegetarian

## Notes
`,by=`---
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
`,yy=`---
title: "Spaghetti al Limone With Shrimp"
source: "https://cooking.nytimes.com/recipes/1022216-spaghetti-al-limone-with-shrimp"
author: "Lidey Heuck"
yield: "6 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - quick
  - pastas
  - main course
tags:
  - dry white wine
  - lemon
  - parmesan
  - shrimp
  - spaghetti
  - tarragon
  - Italian
cuisine: "italian"
image: "https://static01.nyt.com/images/2025/03/11/multimedia/lh-Spaghetti-al-Limone-With-Shrimp-plated-gfbc/lh-Spaghetti-al-Limone-With-Shrimp-plated-gfbc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spaghetti al Limone With Shrimp

> Source: https://cooking.nytimes.com/recipes/1022216-spaghetti-al-limone-with-shrimp

## Description
There are many interpretations of the classic Italian pasta dish, spaghetti al limone, or spaghetti with lemon. Some call for an Alfredo-like sauce made with heavy cream, butter and Parmesan, while others rely on just olive oil, lemon juice, Parmesan and starchy pasta water. This particular recipe, which adds sautéed shrimp, white wine and fresh tarragon to the mix, leans toward the simpler preparation. Without the addition of heavy cream, the sauce has a brighter lemon flavor, which works beautifully with the delicate brininess of the shrimp. Tarragon adds a fragrant note and a bit of complexity to an otherwise fairly straightforward dish. Finally, if there were a time to spring for freshly grated Parmigiano-Reggiano, this would be it. In an uncomplicated recipe like this one, the quality of each ingredient is paramount.

## Ingredients
- Kosher salt (such as Diamond Crystal) and black pepper
- 1 pound spaghetti
- 1 pound large shrimp (18 to 20 count), peeled and deveined, tails on or off
- 1/4 cup olive oil
- 2 lemons, zested (about 1 1/2 packed tablespoons), plus 3 tablespoons lemon juice
- 1 tablespoon chopped fresh tarragon, plus more for serving
- 1/2 cup dry white wine
- 3 tablespoons cold unsalted butter, diced
- 3/4 cup freshly grated Parmesan

## Instructions
1. Bring a large pot of salted water to boil. Add the spaghetti and cook according to package directions until al dente. Scoop out 1 cup of the cooking liquid, then drain the pasta and set aside.
2. While the pasta cooks, pat the shrimp dry and season them with salt and black pepper. Combine the olive oil, lemon zest (setting a few pinches aside for serving) and tarragon in a large skillet set over medium heat. When the oil begins to sizzle, cook for 1 more minute, until the zest and tarragon are fragrant but not browned.
3. Add the shrimp to the skillet and spread into an even layer. Cook for about 90 seconds on each side, or until just cooked through. Transfer the shrimp to a plate and set aside.
4. Add the wine, 1 teaspoon salt and a few grinds of black pepper to the skillet, and bring to a simmer, scraping any browned bits from the pan. Cook until the wine has reduced by about half, then set aside, off the heat, until the pasta has finished cooking.
5. Add the cooked pasta and reserved pasta water to the skillet. Cook over medium-low heat for 2 to 3 minutes, tossing often, until the liquid that has collected at the bottom of the skillet has reduced slightly. (The sauce should still be fairly loose at this point.)
6. Off the heat, add the butter and 1/2 cup Parmesan, sprinkling the cheese evenly over the pasta. Toss until the butter and cheese are melted and the sauce is smooth. Add the lemon juice and remaining 1/4 cup Parmesan, and toss until the sauce is thick and smooth.
7. Add the shrimp, toss, then season with more salt and black pepper to taste. Divide among shallow bowls and garnish with chopped fresh tarragon, lemon zest and black pepper.

## Tags
- dry white wine
- lemon
- parmesan
- shrimp
- spaghetti
- tarragon
- Italian

## Notes
`,ky=`---
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
`,vy=`---
title: "Spiced Chickpea Salad With Tahini and Pita Chips"
source: "https://cooking.nytimes.com/recipes/1020187-spiced-chickpea-salad-with-tahini-and-pita-chips?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Julia Moskin"
yield: "4 main-course servings"
prep_time: ""
cook_time: ""
total_time: "PT1H"
categories:
  - dinner
  - lunch
  - weeknight
  - main course
  - side dish
tags:
  - chickpea
  - extra virgin olive oil
  - greens
  - mint
  - pita
  - salad
  - tahini
  - dairy-free
  - healthy
  - high fiber
  - low cholesterol
  - vegan
  - vegetarian
  - Middle Eastern
cuisine: "middle eastern"
image: "https://static01.nyt.com/images/2020/09/27/dining/30faqrex1/30faqrex1-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spiced Chickpea Salad With Tahini and Pita Chips

> Source: https://cooking.nytimes.com/recipes/1020187-spiced-chickpea-salad-with-tahini-and-pita-chips?campaign_id=58&emc=edit_ck_20260409&instance_id=173767&nl=cooking&regi_id=197868639&segment_id=217972&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This main-course salad has all the fresh flavors of a great falafel sandwich — tahini, mint, paprika, cucumber, cumin, garlic — plus the crunch of pita and the satisfying heft of chickpeas. The vegetarian cookbook writer Hetty McKinnon created this recipe, and the amount of olive oil she calls for might seem excessive. Don’t hold back: After cooking the chickpeas, the oil becomes part of the garlicky, paprika-warmed dressing for the finished dish. You could make her recipe even easier by using salad greens instead of cooked greens as the base.

## Ingredients
- 2 (15-ounce) cans chickpeas, well drained, or 4 cups cooked chickpeas
- 3/4 to 1 cup extra-virgin olive oil
- 2 garlic cloves, minced
- 2 teaspoons ground cumin, or 1 teaspoon each ground cumin and ground coriander
- 1 teaspoon sweet paprika
- Salt and pepper
- 1/3 cup tahini
- Freshly squeezed juice of 1 lemon, plus more to taste
- 1 garlic clove, minced
- Warm water, as needed
- Olive oil, for cooking
- About 10 ounces kale, chard or spinach, well washed and thick stems removed
- 3 cups store-bought or homemade pita chips (see Tip)
- Handful of roughly chopped flat-leaf parsley
- Handful of roughly chopped mint
- 1 large or 2 small cucumbers, peeled and thinly sliced
- Lemon, cut into wedges

## Instructions
1. Make the chickpeas: Heat oven to 425 degrees. Pour the chickpeas into a small baking dish, about 6 inches by 8 inches. The chickpeas should be crowded together in a thick layer, not spread out. Pour in olive oil just until chickpeas are covered. (This will look like a lot, but don’t worry: It forms part of the dressing.)
2. Add garlic, cumin, paprika, and 2 big pinches each of salt and pepper. Stir gently to combine. Bake until oil is bubbling around the chickpeas and they are turning reddish-brown, 35 to 40 minutes. Set aside to cool.
3. Meanwhile, make tahini sauce: Pour tahini into a bowl and whisk in lemon juice and garlic. The tahini will thicken and clump. Slowly whisk in warm water, 1 tablespoon at a time, until sauce becomes smooth, creamy and pourable. Taste and season with salt, pepper and more lemon juice, if desired. Set aside.
4. Cook the greens: Place a large frying pan over medium heat and drizzle lightly with olive oil. When hot, add the greens in batches, along with a big pinch of salt. Stir until wilted and tender and set aside.
5. When ready to serve, in a large bowl, gently mix chickpeas and their cooking oil with the cooked greens, half the pita chips, and the chopped herbs. Mound chickpea mixture in 4 shallow bowls. Divide cucumber slices around chickpeas. Drizzle thickly with half the tahini sauce and scatter remaining pita chips on top. Place a lemon wedge on the side and serve, passing extra tahini sauce at the table.

## Tags
- chickpea
- extra virgin olive oil
- greens
- mint
- pita
- salad
- tahini
- dairy-free
- healthy
- high fiber
- low cholesterol
- vegan
- vegetarian
- Middle Eastern

## Notes
`,wy=`---
title: "Spiced Coconut Tapioca Pudding With Fruit"
source: "https://cooking.nytimes.com/recipes/773692364-spiced-coconut-tapioca-pudding-with-fruit"
author: "Yewande Komolafe"
yield: "8 to 10 servings"
prep_time: "PT0H20M"
cook_time: "PT0H40M"
total_time: "PT1H0M"
categories:
  - Custards and Puddings
  - Dessert
tags:
  - Lemongrass
  - Cinnamon Stick
  - Coconut Milk
  - Coconut Cream
  - Stovetop
  - Makrut Lime Leaf
  - Party
  - Make-Ahead
  - Simmer
  - Dairy-Free
  - Gluten-Free
  - Vegetarian
  - Vegan
cuisine: "Nigerian Inspired, Southeast Asian Inspired"
image: "https://static01.nyt.com/images/2026/03/16/multimedia/16FD-KOMOLAFE-GATHERING-SSREX-YK-Spiced-Coconut-Tapioca-Pudding-With-Fruit-qbgh/16FD-KOMOLAFE-GATHERING-SSREX-YK-Spiced-Coconut-Tapioca-Pudding-With-Fruit-qbgh-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spiced Coconut Tapioca Pudding With Fruit

> Source: https://cooking.nytimes.com/recipes/773692364-spiced-coconut-tapioca-pudding-with-fruit

## Description
Coconut and cassava are known for distinct qualities: Cassava, a tuber from which tapioca is made, is starchy and dense, and fresh coconut is crunchy and juicy. When eaten together, both hold complex nuances with vigor, each enabling the other to flourish. Throughout Nigeria, streetside vendors sell bags of steamed cassava chunks paired with shards of cracked, skin-on fresh coconut for snacking. Home cooks combine these two ingredients in a variety of cakes, crackers and puddings. Here, small tapioca pearls and coconut milk form a pudding version of this familiar pairing. Lemongrass, makrut lime leaves and spices steep in lightly sweetened coconut milk that infuses the tapioca as it simmers. A finishing splash of coconut cream makes for a brothy pudding. Fresh fruit, lightly toasted coconut flakes and molasses (or any syrup) top the creamy base. This is comfort in a bowl and can be enjoyed any time of the day, especially as a cool, puckery and melodic end to any flavorful meal.

## Ingredients
- 4 fresh lemongrass stalks, trimmed, cut in 2-inch pieces and crushed with the flat side of a knife (2 loosely packed cups)
- 4 fresh or dried makrut lime leaves, ¼ teaspoon ground makrut lime leaves, or use grated lime zest, then cut lime into wedges for serving
- 3 whole star anise
- 2 cinnamon sticks
- 1 (13 ½-ounce/400-milliliter) can unsweetened full-fat coconut milk, shaken before opening
- ¼ cup/60 grams granulated sugar
- 1½ teaspoons kosher salt (such as Diamond Crystal)
- ¼ teaspoon ground black pepper
- ¼ teaspoon ground allspice
- 1 cup/180 grams small or large pearl tapioca
- ¼ to ½ cup large unsweetened flake coconut or sliced almonds
- ½ cup/62 milliliters unsweetened coconut cream (from a 13 ½-ounce can), shaken before opening
- ½ cup fresh fruit (such as passionfruit pulp with seeds, mango or other fruit of choice), diced if needed
- ¼ cup molasses, dark honey or maple syrup

## Instructions
1.

## Tags
- Lemongrass
- Cinnamon Stick
- Coconut Milk
- Coconut Cream
- Stovetop
- Makrut Lime Leaf
- Party
- Make-Ahead
- Simmer
- Dairy-Free
- Gluten-Free
- Vegetarian
- Vegan

## Notes
`,_y=`---
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
`,Sy=`---
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
`,Ty=`---
title: "Spicy Tuna Salad With Crispy Rice"
source: "https://cooking.nytimes.com/recipes/1024471-spicy-tuna-salad-with-crispy-rice"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT30M"
total_time: "PT35M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - main course
tags:
  - budget
  - canned tuna
  - partial-access-ic
  - soy sauce
  - sriracha
  - stovetop
  - sushi rice
  - tuna salad
  - Japanese
cuisine: "japanese"
image: "https://static01.nyt.com/images/2023/08/02/multimedia/AS-Spicy-tuna-with-crispy-rice-clbg/AS-Spicy-tuna-with-crispy-rice-clbg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spicy Tuna Salad With Crispy Rice

> Source: https://cooking.nytimes.com/recipes/1024471-spicy-tuna-salad-with-crispy-rice

## Description
This recipe transforms the sushi-restaurant specialty of spicy tuna crispy rice — raw spicy tuna balanced atop bricks of seared rice — into a straightforward, pantry-friendly, any-night meal. Instead of portioning and frying rice, you can cook seasoned rice in a skillet until it crisps, then scoop it onto plates. The tuna stays spicy and creamy, but this recipe calls for humble canned tuna instead of raw. Sliced cucumbers add freshness, but feel free to embellish further with sprouts, avocado, nori sheets or jalapeño slices.

## Ingredients
- 1 1/2 cups sushi rice, rinsed well
- 1 tablespoon plus 2 teaspoons unseasoned rice vinegar
- 2 teaspoons granulated sugar
- Kosher salt (such as Diamond Crystal)
- 3 scallions, trimmed
- 2 Persian or mini seedless cucumbers
- 4 (5-ounce) cans water-packed tuna, drained
- 1/3 cup mayonnaise
- 1 1/2 tablespoons Sriracha, plus more to taste
- 2 teaspoons soy sauce
- 3 tablespoons neutral oil (such as grapeseed), plus more as needed

## Instructions
1. In a large nonstick skillet with a lid, stir together 2 cups water, the rice, 1 tablespoon rice vinegar, the sugar and 1 teaspoon salt. Bring to a boil over high heat, then cover, reduce heat to low and cook until rice is tender, 18 to 20 minutes.
2. Meanwhile, thinly slice the scallions and cucumbers. In a large bowl, stir together the scallions, tuna, mayonnaise, Sriracha, soy sauce and remaining 2 teaspoons rice vinegar. Taste and add more Sriracha for more heat. Refrigerate until the rice is ready (or up to 5 days).
3. Sprinkle the cucumbers with a pinch of salt.
4. Now crisp the rice: Make 4 or 5 small holes in the rice in the skillet, then pour the oil down the sides of the pan and into the divots. Increase heat to medium and cook until the rice is browned at the edges, 4 to 7 minutes. (You can lift the rice to check.) If you don’t see oil bubbling in the holes, add a teaspoon or two more oil.
5. Divide the rice, crispy side up, among bowls or plates and serve with a scoop of the spicy tuna and the cucumbers.

## Tags
- budget
- canned tuna
- partial-access-ic
- soy sauce
- sriracha
- stovetop
- sushi rice
- tuna salad
- Japanese

## Notes
`,zy=`---
title: "Spicy Turkey Stir-Fry With Crisp Garlic and Ginger"
source: "https://cooking.nytimes.com/recipes/1020222-spicy-turkey-stir-fry-with-crisp-garlic-and-ginger?algo=identity&fellback=true&imp_id=7329193559982866&req_id=4540029009768846&surface=cooking-search-web&variant=0_relevance_reranking"
author: "Melissa Clark"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - dinner
  - quick
  - weeknight
  - poultry
  - main course
tags:
  - cilantro
  - ginger
  - ground turkey
  - partial-access-ic
  - scallion
cuisine: ""
image: "https://static01.nyt.com/images/2019/05/15/dining/10apperex/10apperex-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Spicy Turkey Stir-Fry With Crisp Garlic and Ginger

> Source: https://cooking.nytimes.com/recipes/1020222-spicy-turkey-stir-fry-with-crisp-garlic-and-ginger?algo=identity&fellback=true&imp_id=7329193559982866&req_id=4540029009768846&surface=cooking-search-web&variant=0_relevance_reranking

## Description
This quick-cooking stir-fry is packed with umami from fish sauce and soy sauce, and heat from both red-pepper flakes and fresh chile. Pungent and herbal, it’s a terrific weeknight dish that’s fast but never bland. The key here is to let the turkey get deeply brown, so don’t move it around in the pan too much. Serve it over rice for a substantial meal, or a bed of crisp lettuce if you want something lighter.

## Ingredients
- 2 tablespoons neutral oil, such as safflower or grapeseed
- 4 garlic cloves, thinly sliced
- 1 (2-inch) knob ginger, cut into matchsticks
- Fine sea salt
- 2 tablespoons coconut oil or more neutral oil
- 3 scallions, white and green parts separated, thinly sliced
- 1/4 teaspoon red-pepper flakes, plus more to taste
- 1 pound ground turkey, preferably dark meat (or use ground pork)
- 2 tablespoons lime juice, plus more to taste
- 1 tablespoon fish sauce
- 1/2 teaspoon soy sauce, plus more to taste
- 1/2 teaspoon sugar or honey (optional)
- Cooked sticky or white rice, for serving
- 2/3 cup cilantro leaves and tender stems, for serving
- 1/3 cup torn basil leaves (or use more cilantro), for serving
- 1 fresh bird’s-eye or serrano chile, thinly sliced, for serving

## Instructions
1. In a cold 12-inch skillet, combine oil, garlic and ginger. Place over medium heat until sizzling, then continue to cook, stirring frequently, until garlic and ginger are golden brown, 5 to 7 minutes. Transfer with a slotted spoon to a paper towel-lined plate and sprinkle lightly with salt.
2. Add coconut oil to pan, then stir in scallion whites and cook until starting to brown, about 2 minutes. Stir in red-pepper flakes and cook for 1 minute.
3. Stir in turkey, raise heat to medium-high, and cook, breaking up meat with a spoon, until golden and crisp, about 7 minutes. Don’t stir the meat too much, so it can turn deep brown.
4. Remove pan from heat and stir in lime juice, fish sauce and soy sauce. Taste and add more lime juice, red-pepper flakes, soy sauce and sugar or honey if you like.
5. Gently mix about two-thirds of the fried garlic and ginger into the turkey. Serve turkey over rice, topped with cilantro, basil, scallion greens and fresh chile, and garnished with remaining fried ginger and garlic.

## Tags
- cilantro
- ginger
- ground turkey
- partial-access-ic
- scallion

## Notes
`,Ay=`---
title: "Spinach and Feta Lentil Bowls"
source: "https://cooking.nytimes.com/recipes/1026699-spinach-and-feta-lentil-bowls"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT35M"
total_time: "PT45M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - beans
  - main course
tags:
  - black lentil
  - budget
  - egg
  - feta
  - green lentil
  - make-ahead
  - spinach
  - stovetop
  - sturdy greens
  - gluten-free
  - healthy
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2025/03/28/multimedia/28FD-EASYLUNCHREX1-kpzg/28FD-EASYLUNCHREX1-kpzg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spinach and Feta Lentil Bowls

> Source: https://cooking.nytimes.com/recipes/1026699-spinach-and-feta-lentil-bowls

## Description
These satisfying bowls are heaped with silky greens, spicy lentils, jammy eggs and salty feta. The fact that all of the components are cooked in the same pot and can be refrigerated for the week is nice, too. The greens are cooked like horta, a Greek dish of boiled wild greens often finished with olive oil and lemon. Using a mix of spinach and bitter greens, like kale or mustard greens, creates a juicy and bittersweet combination. The lentils, dressed with oregano and crushed red pepper, provide a tender base for the toppings, but grains would work, too. And feel free to embellish further with sliced raw fennel or carrots, toasted nuts or a dollop of cottage cheese.

## Ingredients
- Salt
- 1 pound bitter greens, such as kale, mustard greens or escarole, tough stems removed, leaves sliced 1 inch thick (2 medium bunches or 1 large bunch, or use prechopped)
- 4 large eggs
- 1 pound mature spinach, stems removed, leaves sliced 1-inch thick (or use baby spinach)
- 1½ cups green or black lentils
- 2 teaspoons dried oregano, plus more for serving
- 1 teaspoon crushed red pepper, plus more for serving
- 2 tablespoons extra-virgin olive oil, plus more for serving
- 1 lemon, halved
- 6 to 8 ounces feta

## Instructions
1. Bring a very large pot of salted water to a boil. (The water should taste salty.) Add the bitter greens and eggs and boil for 4 minutes, then add the spinach. Continue to cook until the greens are softened and dark green, 2 more minutes. Use a slotted spoon to transfer the greens and eggs to a fine-mesh sieve to cool and drain; reserve the boiling water.
2. To the boiling water, add the lentils. Reduce heat and simmer until tender but not mushy, 10 to 20 minutes. When the lentils are just about done, transfer the eggs to a cutting board. Squeeze and press the greens to remove excess water, then transfer them to a bowl and set aside.
3. Drain the lentils in the fine-mesh sieve. Rinse the lentils under cold water and shake to dry. Right in the sieve, stir the oregano and crushed red pepper into the lentils; add more salt and crushed red pepper until the lentils are punchy.
4. Add the olive oil to the greens and stir to combine. Squeeze half the lemon over the greens and stir to combine. Season to taste with salt. Quarter the remaining lemon half for serving and slice or crumble the feta. If eating right away, peel the eggs.
5. Divide the lentils, greens, feta, eggs and lemon wedges among 4 bowls or airtight containers. Drizzle with oil, oregano and crushed red pepper. Serve immediately, or refrigerate in airtight containers for up to 4 days.

## Tags
- black lentil
- budget
- egg
- feta
- green lentil
- make-ahead
- spinach
- stovetop
- sturdy greens
- gluten-free
- healthy
- vegetarian

## Notes
`,Cy=`---
title: "Spinach Egg Bites"
source: "https://cooking.nytimes.com/recipes/1027633-spinach-egg-bites?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Eric Kim"
yield: "12 egg bites"
prep_time: "PT5M"
cook_time: "PT40M"
total_time: "PT45M"
categories:
  - breakfast
  - brunch
  - dinner
  - easy
  - lunch
  - quick
  - snack
  - main course
tags:
  - all-purpose flour
  - ck-mccormick-0526-sponsor
  - cottage cheese
  - egg
  - egg dish
  - freezer friendly
  - great leftovers
  - make-ahead
  - parmesan
  - scallion
  - spinach
  - healthy
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/01/14/multimedia/14FD-KIM-spinachsoufflesquares-wpcg/14FD-KIM-spinachsoufflesquares-wpcg-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Spinach Egg Bites

> Source: https://cooking.nytimes.com/recipes/1027633-spinach-egg-bites?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Lovers of the sweet, earthy flavor of leafy greens can rejoice in these fluffy egg bites, which are mostly spinach and scallions bound by a little egg. Many great dishes of the world start like this: Spanikopita, the savory Greek spinach and feta pie, comes to mind, as does kuku sabzi, the herby, frittata-like Persian dish. These egg bites are a great make-ahead breakfast or high-protein snack on their own, and they’re also a lovely lunch or light dinner alongside a green salad. They’re adaptable, too: You can swap out the scallions for dill or parsley, and the Parmesan for Cheddar or feta. Make them your own.

## Ingredients
- Olive oil, for greasing
- 2 (10-ounce) packages frozen chopped spinach, thawed
- 4 scallions, thinly sliced crosswise
- 6 large eggs
- 2 cups (16 ounces) cottage cheese
- 1/4 cup grated Parmesan
- Pinch of ground nutmeg
- Salt and freshly ground black pepper
- 6 tablespoons all-purpose flour
- 1 teaspoon baking powder

## Instructions
1. Arrange a rack in the center of the oven and heat to 375 degrees. Generously grease a 12-cup muffin tin with olive oil and place on a sheet pan.
2. With clean hands, squeeze the spinach over the sink to remove as much water as possible. Drain well and add to a large bowl, along with the scallions, eggs, cottage cheese, Parmesan and nutmeg. Season with salt and pepper. Stir until well combined. Add the flour and baking powder, and stir just until incorporated.
3. Fill the muffin tin with the spinach mixture — ⅓ cup each — and bake until set, 20 to 25 minutes. Allow to cool completely before running a sharp paring knife around the edges of each cup to help release the bites. (Alternatively, you could use a silicon muffin mold.)
4. These egg bites stay fresh in an airtight container in the refrigerator for up to 3 days and in the freezer for up to 3 months. To reheat, just microwave them for 10 seconds at a time until warmed through.

## Tags
- all-purpose flour
- ck-mccormick-0526-sponsor
- cottage cheese
- egg
- egg dish
- freezer friendly
- great leftovers
- make-ahead
- parmesan
- scallion
- spinach
- healthy
- vegetarian

## Notes
`,My=`---
title: "Spinach Gomaae"
source: "https://cooking.nytimes.com/recipes/1025296-spinach-gomaae?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Eric Kim"
yield: "4 servings"
prep_time: "PT2M"
cook_time: "PT18M"
total_time: "PT20M"
categories:
  - breakfast
  - dinner
  - easy
  - lunch
  - quick
  - vegetables
  - side dish
tags:
  - five ingredient
  - sesame seed
  - soy sauce
  - spinach
  - sugar
  - vegan
  - vegetarian
  - Japanese
cuisine: "japanese"
image: "https://static01.nyt.com/images/2024/04/16/multimedia/EK-gomaae-spinach-sesame-tjhk/EK-gomaae-spinach-sesame-tjhk-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Spinach Gomaae

> Source: https://cooking.nytimes.com/recipes/1025296-spinach-gomaae?campaign_id=90&emc=edit_fwd_20260407&instance_id=173574&nl=five-weeknight-dishes&regi_id=197868639&segment_id=217860&user_id=3719b3bb012d2089287c9cc303193b83

## Description
A nutty, savory-sweet sesame dressing coats spinach in this Japanese dish, horenso no gomaae. It comprises four impactful ingredients that taste especially great with a bowl of white rice or as part of a breakfast spread with soup and salmon. Gomaae, pronounced go-MAH-ae, means sesame sauce and is more than just a recipe: Toasted sesame seeds, ground to a tan powder and simply mixed with soy sauce and sugar, are an excellent flavor canvas for spinach and beyond. You can swap in any vegetable, really, but sprightly, crunchy ones like lightly boiled green beans, sugar snap peas and broccoli shine with this application.

## Ingredients
- 3 tablespoons toasted white sesame seeds (see Tip)
- 1 tablespoon soy sauce
- 2 teaspoons sugar
- 1 bunch mature spinach (8 to 10 ounces), ends trimmed

## Instructions
1. In a spice grinder or mortar, grind the toasted sesame seeds into a coarse powder. Or, crush the seeds with a heavy pot or skillet on a cutting board. Add to a medium bowl along with the soy sauce and sugar. Stir to combine.
2. Bring 4 cups of water to a boil in a kettle or saucepan. Wash and drain the spinach in a colander. With the colander in the sink, carefully pour the boiled water over the spinach to wilt it. Drain, then transfer the spinach to a clean kitchen towel and wring out any excess water or simply press with a spoon to expel water.
3. Add the spinach to the bowl with the sauce and toss to combine. Serve at room temperature or chilled.

## Tags
- five ingredient
- sesame seed
- soy sauce
- spinach
- sugar
- vegan
- vegetarian
- Japanese

## Notes
`,jy=`---
title: "Stewed Greens and Chickpeas With Toasted Garlic and Lemon"
source: "https://cooking.nytimes.com/recipes/1027678-stewed-greens-and-chickpeas-with-toasted-garlic-and-lemon"
author: "Yotam Ottolenghi"
yield: "4 to 6 servings"
prep_time: "PT20M"
cook_time: "PT35M"
total_time: "PT55M"
categories:
  - dinner
  - lunch
  - main course
tags:
  - chickpea
  - garlic
  - oregano
  - parsley
  - pasta
  - stovetop
  - swiss chard
  - fall
  - winter
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2026/02/25/multimedia/11FD-OTTOLENGHIREX-YO-Stewed-Greens-and-Chickpeas-With-Sour-Crea-hbtj/11FD-OTTOLENGHIREX-YO-Stewed-Greens-and-Chickpeas-With-Sour-Crea-hbtj-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Stewed Greens and Chickpeas With Toasted Garlic and Lemon

> Source: https://cooking.nytimes.com/recipes/1027678-stewed-greens-and-chickpeas-with-toasted-garlic-and-lemon

## Description
This stovetop stew leans into softness and ease, with greens, chickpeas and tiny pasta simmered in a light, savory broth until everything is tender and “stoupy.” The base starts with onions, fennel seeds, crushed red pepper and oregano gently cooked down in olive oil for depth, before the main ingredients are added and left to quietly come together. Just before serving, a dollop of sour cream brings a welcome tang, and a separate oregano and golden garlic oil is poured over the top to finish. The resulting stew is layered but unfussy; the steps create something warm, mellow and spoonable, with a nostalgic feel that makes it easy to love from the first bite.

## Ingredients
- ⅓ cup plus 3 tablespoons extra-virgin olive oil
- 2 yellow onions, finely chopped
- 2 teaspoons fennel seeds, lightly crushed
- ½ teaspoon crushed red pepper (optional)
- 1 cup loosely packed fresh oregano leaves (about 15 grams)
- Fine sea salt and black pepper
- 14 ounces chard (see Tip for additional options), stems and leaves cut into ½-inch pieces
- 1 scant cup tiny pasta shapes, such as stelline or pepe bucato
- 1 (14-ounce) can chickpeas (or cannellini beans) in their liquid
- 4 cups chicken (or vegetable) stock
- 1 1/2 cups roughly chopped fresh parsley leaves and tender stems
- 6 garlic cloves (1 minced and 5 thinly sliced)
- 1 lemon (1 teaspoon finely grated zest, plus wedges to serve)
- 1 cup sour cream

## Instructions
1. Add ⅓ cup oil, the onions, fennel seeds, crushed red pepper (if using), half the oregano, 1 teaspoon salt and a good grind of pepper to a large Dutch oven or other heavy pot on medium-high heat. Cook for about 10 minutes, stirring often, until the onions are soft and golden.
2. Add the chard, pasta, chickpeas and their liquid, stock, ¼ cup water and 1 teaspoon salt, and bring to a simmer. Turn the heat down to medium-low and cook, covered, for about 10 minutes more, stirring often, until the pasta has cooked, then stir through the parsley, minced garlic and lemon zest.
3. Heat the remaining 3 tablespoons of oil in a small saucepan on medium heat. Once hot, add the remaining oregano and sliced garlic, and cook for 3 to 5 minutes, stirring occasionally, until the garlic is lightly golden.
4. Divide stew among bowls; top with a spoonful of sour cream, the garlic oil and a good squeeze of lemon.

## Tags
- chickpea
- garlic
- oregano
- parsley
- pasta
- stovetop
- swiss chard
- fall
- winter
- vegetarian

## Notes
`,xy=`---
title: "Strawberry-Basil Cottage Cheese Bowls"
source: "https://cooking.nytimes.com/recipes/1026945-strawberry-basil-cottage-cheese-bowls?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Ali Slagle"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT20M"
total_time: "PT30M"
categories:
  - breakfast
  - easy
  - for one
  - for two
  - lunch
  - quick
  - snack
  - main course
tags:
  - basil
  - ck-mccormick-0526-sponsor
  - cottage cheese
  - make-ahead
  - red wine vinegar
  - strawberry
  - gluten-free
  - vegetarian
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2025/08/19/multimedia/AS-Strawberry-basil-cottage-cheese-bowls-qctf/AS-Strawberry-basil-cottage-cheese-bowls-qctf-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Strawberry-Basil Cottage Cheese Bowls

> Source: https://cooking.nytimes.com/recipes/1026945-strawberry-basil-cottage-cheese-bowls?campaign_id=58&emc=edit_ck_20260411&instance_id=173873&nl=cooking&regi_id=197868639&segment_id=218079&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This easy breakfast isn’t too sweet or too savory, and that’s what makes it enticing to eat. Combine strawberries with vinegar, honey, basil, salt, and pepper, then let them sit for 15 minutes or up to 1 day. The berries become sweeter, tarter and slightly spicy from the black pepper, and their released juices develop into a pink syrup that you spoon over cottage cheese. Accentuate the savoriness by adding arugula, watercress or prosciutto; or lean into sweet by adding a spoonful of jam or granola.

## Ingredients
- 1 pound strawberries, hulled and quartered
- 2 tablespoons red wine vinegar
- 2 teaspoons honey
- Salt and black pepper
- 1 large basil sprig
- 16 ounces (2 cups) cottage cheese
- 3 tablespoons roasted, salted pistachios, coarsely chopped

## Instructions
1. In a resealable container, stir together the strawberries, vinegar, honey and generous pinches of salt and pepper. Pluck the leaves from the basil sprig and rip them into small pieces; stir them into the strawberries. Let sit for 15 minutes at room temperature, or cover and refrigerate for up to 24 hours, gently swirling the container occasionally to distribute the juice.
2. When ready to eat, divide the cottage cheese among bowls. Top with the strawberries and a spoonful of their juices beneath. Sprinkle with the pistachios.

## Tags
- basil
- ck-mccormick-0526-sponsor
- cottage cheese
- make-ahead
- red wine vinegar
- strawberry
- gluten-free
- vegetarian
- summer

## Notes
`,Dy=`---
title: "Strawberry Drop Biscuits"
source: "https://cooking.nytimes.com/recipes/1021175-strawberry-drop-biscuits?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Jerrelle Guy"
yield: "6 biscuits"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - breakfast
  - brunch
  - snack
tags:
  - all-purpose flour
  - biscuit
  - butter
  - confectioners' sugar
  - heavy cream
  - strawberry
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/06/15/dining/jg-strawberry-biscuits/merlin_173545854_5ce343dc-28e8-43ce-8b32-86cb99c9b9fc-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Strawberry Drop Biscuits

> Source: https://cooking.nytimes.com/recipes/1021175-strawberry-drop-biscuits?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Somewhat of a cross between a muffin top and a biscuit, these sweet breakfast treats are foolproof and easy: No rolling or cutting is required, and everything is mixed in a single bowl. They bake up craggy and crunchy on the outside, but are tender once you break them open. The heavy cream adds richness, and the additional water creates just the right amount of steam while baking to keep the biscuits light and fluffy. Salted butter works nicely here, but if you’re using unsalted butter, just add 1/4 teaspoon or so of fine salt to the dry ingredients. If you don’t have strawberries, feel free to swap in the same amount of fresh blueberries, raspberries or diced stone fruit.

## Ingredients
- 1 1/2 cups/190 grams all-purpose flour
- 1/4 cup/50 grams granulated sugar
- 4 teaspoons baking powder
- 6 tablespoons/85 grams cold salted butter, cut into 1/2-inch cubes
- 4 medium strawberries, cut into small 1/4-inch or 1/2-inch pieces (about 2/3 cup/100 grams), or whole blueberries, raspberries or other diced stone fruit
- 6 tablespoons heavy cream, plus more if needed
- 1/4 cup/30 grams unsifted confectioners’ sugar

## Instructions
1. Arrange an oven rack in the center of the oven. Heat the oven to 425 degrees. Line a sheet pan with parchment. Set aside.
2. Whisk the flour, granulated sugar and baking powder together in a large mixing bowl. Toss the pieces of butter into the flour mixture to coat. Using a pastry cutter or your fingers, work the butter into the flour until the mixture is mealy and small pieces of pea-size butter remain.
3. Add the diced strawberries and toss with a fork to combine. Make a well in the center of the mixture and add 4 tablespoons of the heavy cream and 1/4 cup water. Continue tossing with the fork until the dough is just evenly damp and shaggy, being careful not to overwork the dough too much. Add 1 to 3 teaspoons more water, as needed, if the dough is still too dry to work with.
4. Drop 6 mounds of dough (each a generous 1/3 cup) onto the baking sheet, leaving at least 1 1/2 inches of space between each mound and gently padding any stray bits of dough back into place as you work. Lightly brush the tops with 1 tablespoon heavy cream and bake until deep golden brown and cooked through, about 15 minutes. Remove from the oven and transfer the biscuits to a wire rack to cool for 5 minutes.
5. Add the confectioners’ sugar to a small bowl, and whisk in the remaining 1 tablespoon heavy cream, adding more if needed to make a thick icing that is just thin enough to drizzle. Spoon over the warm biscuits; serve warm or at room temperature.

## Tags
- all-purpose flour
- biscuit
- butter
- confectioners' sugar
- heavy cream
- strawberry
- American

## Notes

`,By=`---
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
`,Ny=`---
title: "Strawberry Lassi"
source: "https://cooking.nytimes.com/recipes/1026600-strawberry-lassi?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Zaynab Issa"
yield: "4 servings"
prep_time: "PT5M"
cook_time: "PT5M"
total_time: "PT10M"
categories:
  - breakfast
  - easy
  - quick
  - snack
  - shakes and smoothies
tags:
  - cardamom
  - strawberry
  - yogurt
  - gluten-free
  - healthy
  - vegetarian
  - ramadan
  - summer
  - Indian
cuisine: "indian"
image: "https://static01.nyt.com/images/2025/02/26/multimedia/26RAMADAN-HYDRATIONREX2-ZI-Strawberry-Lassi-jqvw/26RAMADAN-HYDRATIONREX2-ZI-Strawberry-Lassi-jqvw-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Strawberry Lassi

> Source: https://cooking.nytimes.com/recipes/1026600-strawberry-lassi?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Strawberry lassi is a popular variation of lassi, the yogurt-based blended beverage with origins in the Punjab region of the Indian subcontinent. This refreshing drink is made with frozen strawberries instead of ice to add flavor while keeping it cool. Sugar is the traditional sweetener in lassi, but the maple syrup here adds a subtle earthiness and dissolves quickly while blending. South Asian dahi (yogurt) is ideal for achieving the drink’s characteristic tart creaminess, but plain whole-milk yogurt will also work well. (Greek yogurt and skyr can be too thick for lassi.)

## Ingredients
- 2 cups plain whole-milk yogurt, preferably South Asian dahi
- 2 to 3 tablespoons maple syrup, depending on desired sweetness
- 1/4 to 1/2 teaspoon kosher salt, such as Diamond Crystal
- 4 green cardamom pods, cracked open, seeds only (see Tip)
- 1 1/2 cups/about 8 ounces frozen whole strawberries

## Instructions
1. Add yogurt, maple syrup, salt, cardamom and strawberries to a blender. Blend, gradually increasing the speed, until smooth. For a thinner consistency, blend in 1 tablespoon of water at a time.
2. Pour into glasses and serve immediately.

## Tags
- cardamom
- strawberry
- yogurt
- gluten-free
- healthy
- vegetarian
- ramadan
- summer
- Indian

## Notes

`,Ey=`---
title: "Strawberry-Rhubarb Muffins"
source: "https://cooking.nytimes.com/recipes/1022124-strawberry-rhubarb-muffins?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Lidey Heuck"
yield: "12 muffins"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - breakfast
  - snack
  - dessert
tags:
  - cornmeal
  - great leftovers
  - muffin
  - rhubarb
  - strawberry
  - spring
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2021/04/19/dining/lh-strawberry-rhubarb-muffins/merlin_186367197_1768e82f-0cfe-4ad3-b165-7e790a4a6955-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Strawberry-Rhubarb Muffins

> Source: https://cooking.nytimes.com/recipes/1022124-strawberry-rhubarb-muffins?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
While rhubarb works wonderfully in baked goods, baking strawberries into scones or muffins can be a little bit more of a challenge. Though delightfully sweet and fragrant when fresh, baked strawberries have a tendency to become watery and bland. This recipe solves that problem by macerating the diced rhubarb and strawberries with sugar before folding them into the muffin batter. Doing so not only draws out excess moisture from the strawberries, but also gets a head start on breaking down the fibrous rhubarb. This recipe calls for an ample amount of sugar, which balances the tartness of the rhubarb and helps create wonderfully browned and chewy muffin tops. Finally, the cornmeal in this recipe adds great texture and gives the muffins a rustic finish. Opt for medium-grind or stone-ground cornmeal, if you can find it, but fine cornmeal works well, too.

## Ingredients
- Nonstick cooking spray (optional)
- 1 cup small-diced fresh strawberries (about 6 ounces/170 grams)
- 1 cup small-diced fresh rhubarb (about 4 ounces/113 grams)
- 1 1/4 cups/250 grams granulated sugar
- 8 tablespoons/113 grams unsalted butter (1 stick), melted and slightly cooled
- 2 large eggs, at room temperature
- 1 cup/227 grams sour cream
- 1 teaspoon vanilla extract
- Zest of 1 lemon
- 1 1/2 cups/192 grams all-purpose flour
- 1/2 cup/60 grams medium-grind or fine cornmeal
- 2 teaspoons baking powder
- 1 teaspoon kosher salt
- 3/4 teaspoon baking soda
- 1/4 teaspoon ground cinnamon
- 1 tablespoon Demerara or turbinado sugar, for sprinkling

## Instructions
1. Heat the oven to 400 degrees and line a standard muffin tin with paper liners. (If not using a nonstick pan, spray the exposed metal with nonstick cooking spray.)
2. Combine the strawberries and rhubarb in a medium bowl. Add 1 tablespoon sugar; toss and set aside. Place the rest of the sugar (1 cup plus 3 tablespoons), along with the melted butter and eggs, in a large bowl. Whisk vigorously for about 30 seconds, until the yolks are pale and the mixture is smooth and glossy. Add the sour cream, vanilla and lemon zest, and whisk just until smooth.
3. In another medium bowl, whisk together the flour, cornmeal, baking powder, salt, baking soda and cinnamon. Add the dry ingredients to the wet ingredients and mix until just combined. (Be careful not to overmix.)
4. Transfer the fruit mixture to a strainer set over a bowl or the sink. Toss with a spoon, allowing any excess liquid to drain. (The amount will vary depending on the ripeness of the berries.) Discard the liquid and add the fruit to the batter, folding it in until just combined.
5. Using an ice cream scoop or large spoon, divide the batter among the 12 muffin cups. (The cups will be very full and slightly heaping.) Sprinkle the tops with the Demerara sugar and bake for 18 to 23 minutes, until a toothpick comes out clean and the muffins spring back when lightly pressed.
6. Let the muffins cool for 10 minutes in the pan, then carefully transfer them to a rack to cool completely. The muffin tops may spread into each other slightly as they bake; simply cut the tops apart with a paring knife when the muffins come out of the oven and immediately run the knife very gently under the edges of the muffin tops to release them from the pan, being careful not to separate them from the bottoms.

## Tags
- cornmeal
- great leftovers
- muffin
- rhubarb
- strawberry
- spring
- summer

## Notes
`,Hy=`---
title: "Strawberry Spoon Cake"
source: "https://cooking.nytimes.com/recipes/1021174-strawberry-spoon-cake?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Jerrelle Guy"
yield: "4 servings"
prep_time: ""
cook_time: ""
total_time: "PT30M"
categories:
  - easy
  - quick
  - cakes
  - dessert
tags:
  - fourth of july
  - kwanzaa
  - labor day
  - memorial day
  - thanksgiving
  - full-access-ic-2024-06
  - strawberry
  - spring
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2021/02/21/dining/17Spoonbread-a/17Spoonbread-a-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Strawberry Spoon Cake

> Source: https://cooking.nytimes.com/recipes/1021174-strawberry-spoon-cake?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This unfussy cake with a top layer of jammy strawberries is so gooey it’s best to serve the whole thing with a spoon. The batter comes together quickly with minimal effort, using basic pantry ingredients and a small handful of berries — frozen or fresh. If you’re using frozen, be sure to defrost them in the microwave first. Extract as much juice as possible from the fruit by macerating and mashing it, so that it lends the cake additional moisture while baking. Add a dash of freshly ground cardamom or ground ginger on top before baking it off, if you like, or some ribbons of fresh basil once it’s hot out of the oven. Whatever embellishments you decide on, burrowing warm spoonfuls of this cake beside scoops of vanilla ice cream is the most important thing.

## Ingredients
- 1/2 cup/115 grams unsalted butter (1 stick), melted, plus more for greasing
- 5 ounces/145 grams frozen and thawed or fresh, hulled strawberries (about 1 cup)
- 2/3 cup/150 grams packed light brown sugar
- 1/2 cup/120 milliliters whole milk, at room temperature
- 1/2 teaspoon kosher salt
- 1 cup/130 grams all-purpose flour
- 1 teaspoon baking powder
- Vanilla ice cream, for serving

## Instructions
1. Heat oven to 350 degrees and grease an 8-inch (square or round) baking dish with butter. Set aside.
2. Using your hands or the back of a fork, mash the berries to release all their juices, and stir in 1/3 cup of the brown sugar. Set aside.
3. In a medium bowl, whisk together the melted butter, remaining 1/3 cup brown sugar, milk and salt, then add the flour and baking powder and continue whisking just until the batter is smooth. Transfer the batter (it’s not much) to the greased baking dish, and spread evenly into corners.
4. Spoon the strawberries and all their juices over the top of the cake batter. Place in the oven and bake for 20 to 25 minutes, or just when a toothpick comes out clean in the center. Remove from the oven and allow to cool for 3 to 5 minutes before spooning into bowls. Serve warm with ice cream.

## Tags
- fourth of july
- kwanzaa
- labor day
- memorial day
- thanksgiving
- full-access-ic-2024-06
- strawberry
- spring
- summer

## Notes
`,Ry=`---
title: "Stuffed Peppers"
source: "https://cooking.nytimes.com/recipes/1021007-stuffed-peppers"
author: "Lidey Heuck"
yield: "6 to 8 servings"
prep_time: ""
cook_time: ""
total_time: "PT1H15M"
categories:
  - dinner
  - weeknight
  - casseroles
  - main course
tags:
  - bell pepper
  - budget
  - fennel
  - garlic
  - ground beef
  - onion
  - oregano
  - parmesan
  - red pepper flake
  - rice
  - tomato
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/04/20/dining/lh-stuffed-peppers/lh-stuffed-peppers-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Stuffed Peppers

> Source: https://cooking.nytimes.com/recipes/1021007-stuffed-peppers

## Description
These classic stuffed peppers are as flexible as they are delicious: The filling combines lean ground beef with sautéed vegetables and cooked white rice (the perfect use for leftover takeout rice!), but ground turkey, chicken or pork can be substituted in its place. Topped with melty mozzarella, these peppers will feed a hungry crowd. For a speedy weeknight dinner, make the filling, stuff the peppers and refrigerate for up to 24 hours before baking.

## Ingredients
- 4 large red, orange or yellow bell peppers
- 2 tablespoons olive oil
- 1 cup finely chopped fennel bulb (about 1/2 a small bulb) or celery
- 1 cup finely chopped yellow onion (about 1 small)
- 3 garlic cloves, minced
- 1 teaspoon dried oregano
- 1/2 teaspoon red-pepper flakes
- 1 pound ground beef (at least 15 percent fat), turkey, chicken or pork
- 3/4 cup dry white wine, chicken broth or vegetable broth
- 1 (14-ounce) can diced fire-roasted tomatoes
- 1 1/2 teaspoons kosher salt, plus more to taste
- 1/2 teaspoon black pepper, plus more to taste
- 1 cup cooked white or brown rice
- 1/4 cup grated Parmesan
- 2 tablespoons minced fresh parsley, plus more for serving (optional)
- 1 cup shredded mozzarella, provolone or other semifirm cheese

## Instructions
1. Heat the oven to 400 degrees. Cut the peppers in half lengthwise and carefully remove core, seeds and ribs using a paring knife. Arrange the peppers, cut-sides up, in a 9-by-13-inch pan or other baking dish in which they fit snugly.
2. In a large (12-inch) skillet, heat the olive oil over medium. Add the fennel and onions and cook, stirring occasionally, until tender, 6 to 8 minutes. Stir in the garlic, oregano and red-pepper flakes, and cook until the garlic is fragrant, about 1 minute.
3. Add the beef and cook, breaking up the meat with a wooden spoon, for 3 to 5 minutes, until no longer pink.
4. Add 1/2 cup wine, increase the heat to medium-high and cook, scraping the bottom of the pan, until the liquid in the pan is reduced by about half.
5. Add the tomatoes and their juices, salt and pepper, and bring to a boil. Remove from the heat and stir in the rice, Parmesan and parsley, if using. Taste and adjust seasonings.
6. Divide the mixture among the peppers. Pour the remaining 1/4 cup wine into the bottom of the dish.
7. Wrap tightly with foil and bake for 35 to 40 minutes, until a paring knife easily pierces the peppers.
8. Remove the foil and spoon any juices that have accumulated in the bottom of the pan onto the peppers.
9. Sprinkle the mozzarella evenly onto the peppers and bake another 10 to 15 minutes, until the mozzarella is melted and beginning to brown. Allow the peppers to cool for 5 minutes, sprinkle with parsley, if using, and serve hot.

## Tags
- bell pepper
- budget
- fennel
- garlic
- ground beef
- onion
- oregano
- parmesan
- red pepper flake
- rice
- tomato
- American

## Notes
`,qy=`---
title: "Sweet and Sour Cauliflower"
source: "https://cooking.nytimes.com/recipes/1025452-sweet-and-sour-cauliflower"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT10M"
cook_time: "PT20M"
total_time: "PT30M"
categories:
  - dinner
  - quick
  - weeknight
  - vegetables
  - main course
tags:
  - air fry
  - cauliflower
  - chinese american
  - cornstarch
  - ketchup
  - small plate
  - vegan
  - vegetarian
cuisine: ""
image: "https://static01.nyt.com/images/2024/10/02/multimedia/hm-sweet-and-sour-cauliflowerrex-hpwq/hm-sweet-and-sour-cauliflowerrex-hpwq-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Sweet and Sour Cauliflower

> Source: https://cooking.nytimes.com/recipes/1025452-sweet-and-sour-cauliflower

## Description
Reminiscent of classic sweet and sour dishes served at Chinese American restaurants, cauliflower seamlessly steps in for pork or chicken here. For beautifully burnished florets with crispy edges, the cauliflower is treated to a simple dusting of cornstarch, applied in stages to create a more even coating, and a gentle lick of oil before baking or air-frying. Punchy and tart, this sweet and sour sauce is a keeper. Ketchup is the key ingredient, and it brings sourness, sweetness and umami to a simple blend of garlic, rice vinegar, soy sauce and sugar. Eat with rice, noodles or on top of pan-fried tofu.

## Ingredients
- 6 tablespoons cornstarch (for the cauliflower) plus 1 teaspoon (for the sauce)
- 1 large cauliflower (about 2 pounds), cut into bite-size florets
- Salt and pepper
- Extra-virgin olive oil
- 3 tablespoons ketchup
- 3 tablespoons sugar
- 2 tablespoons rice vinegar
- 2 tablespoons soy sauce or tamari
- 1 garlic clove, finely chopped
- 2 scallions, thinly sliced
- Rice or noodles, for serving

## Instructions
1. If using an oven, heat it to 425 degrees. If using an air fryer, heat it to 400 degrees, if preheating is recommended for your air fryer.
2. Place 3 tablespoons cornstarch in a large bowl. Add the cauliflower, season with a big pinch of salt and pepper, and toss to coat. Drizzle in 2 to 3 tablespoons oil and toss until well coated. Add 3 tablespoons cornstarch and toss. Drizzle in another 1 to 2 tablespoons oil and toss well again, making sure there is no dry cornstarch on the cauliflower.
3. If using an oven, grease a sheet pan with a drizzle of olive oil. Arrange the florets in a single layer on the baking sheet and roast for 10 minutes. Remove from the oven, flip the cauliflower to encourage even cooking, and return to the oven for another 8 to 10 minutes, cooking until it is tender and golden around the edges.
4. If using an air fryer, you may need to work in batches depending on the size of your machine. Arrange the cauliflower in a single layer on the rack, and air fry for 16 minutes, tossing the cauliflower halfway through, to encourage even crisping. Cook the remaining cauliflower.
5. While the cauliflower cooks, make the sweet and sour sauce: Place the ketchup, sugar, vinegar, soy sauce and garlic in a small pot. Heat over medium, stirring, until the sugar melts and the mixture starts bubbling around the edges, about 1 minute. Whisk the remaining 1 teaspoon cornstarch with 2 tablespoons of water, then slowly pour the cornstarch slurry into the pot, stirring constantly, until the mixture thickens, about 1 minute.
6. To serve, transfer the cauliflower to a bowl and drizzle the sweet and sour sauce over the florets. Top with scallions. Serve with rice or noodles.

## Tags
- air fry
- cauliflower
- chinese american
- cornstarch
- ketchup
- small plate
- vegan
- vegetarian

## Notes
`,Py=`---
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
`,Oy=`---
title: "Tofu and Sweet Potato Peanut Butter Curry"
source: "https://cooking.nytimes.com/recipes/767371284-tofu-and-sweet-potato-peanut-butter-curry"
author: "Hetty Lui McKinnon"
yield: "4 servings"
prep_time: "PT0H15M"
cook_time: "PT0H20M"
total_time: "PT0H35M"
categories:
  - Tofu Dish
  - Curry
  - Lunch
  - Dinner
  - Main Course
tags:
  - Sweet Potato
  - Peanut Butter
  - Coconut Milk
  - Extra-Firm Tofu
  - Quick
  - Weeknight
  - Curry Powder
  - Frozen Pea
  - Great Leftovers
  - Stovetop
  - One Pot
  - Easy
  - Budget
  - Vegan
  - Gluten-Free
cuisine: ""
image: "https://static01.nyt.com/images/2026/01/08/multimedia/hlm-Tofu-and-Sweet-Potato-Peanut-Butter-Curry-pfbl/hlm-Tofu-and-Sweet-Potato-Peanut-Butter-Curry-pfbl-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Tofu and Sweet Potato Peanut Butter Curry

> Source: https://cooking.nytimes.com/recipes/767371284-tofu-and-sweet-potato-peanut-butter-curry

## Description
This hearty curry delivers big flavors quickly, thanks to hardworking pantry staples. Humble yet bold, peanut butter is a true weeknight cooking hero, imparting sweet and toasty richness to this sauce while thickening it to add body. (You could substitute the peanut butter with other nut or seed butter butters such as almond, cashew or sunflower.) Curry powder comes in many varieties, with fluctuating degrees of heat and intensity, and while most will work here, opt for any with a vibrant golden color — and turmeric toward the front of the ingredient list — to give your dish a warm glow. While this stew is naturally sweet from the potatoes, peas and coconut milk, the addition of soy sauce instantly brings a sharp and salty balance.

## Ingredients
- 1 tablespoon vegetable oil
- 1 yellow onion, finely diced
- 4 garlic cloves, finely chopped
- 1 (1-inch) piece fresh ginger, peeled and finely chopped
- 1 tablespoon curry powder
- ½ to 1 teaspoon crushed red pepper
- 1 ½ pounds sweet potato (about 2 medium), peeled and cut into 1-inch chunks
- 1 cup vegetable stock or water
- ½ cup smooth peanut butter, stirred well
- 1 (13-ounce) can coconut milk, shaken well
- 1 (14- to 16-ounce) package extra-firm tofu, drained and cut into 1-inch pieces
- 1 cup/5 ounces frozen peas, unthawed
- 4 teaspoons soy sauce or tamari
- Salt and pepper
- Cooked rice, to serve
- Handful of cilantro leaves
- Handful of toasted peanuts, roughly chopped
- 1 lime, cut into 4 wedges

## Instructions
1. Heat a large Dutch oven or heavy pot on medium-high. Add the oil and onion and cook until softened, 2 minutes. Add the garlic, ginger, curry powder and crushed red pepper, and stir until fragrant, 1 minute.
2. Add the sweet potatoes and stock. Cover, reduce heat to medium-low and cook for 10 minutes.
3. Add the peanut butter and coconut milk and stir until the peanut butter is melted and well combined.
4. Increase heat to medium-high and add the tofu, peas and soy sauce, and cook until warmed through and the sauce is thick, 3 to 5 minutes. Taste and season with salt and pepper.
5. Serve over rice. Top with cilantro leaves and chopped peanuts, with lime wedges on the side.

## Tags
- Sweet Potato
- Peanut Butter
- Coconut Milk
- Extra-Firm Tofu
- Quick
- Weeknight
- Curry Powder
- Frozen Pea
- Great Leftovers
- Stovetop
- One Pot
- Easy
- Budget
- Vegan
- Gluten-Free

## Notes
`,Gy=`---
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
`,Iy=`---
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
`,Ly=`---
title: "Vanilla Bundt Cake"
source: "https://cooking.nytimes.com/recipes/1025495-vanilla-bundt-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Yossy Arefi"
yield: "10 to 12 servings"
prep_time: "PT5M"
cook_time: "PT1H55M"
total_time: "PT2H"
categories:
  - brunch
  - easy
  - dessert
tags:
  - bundt cake
  - make-ahead
  - picnic
  - vanilla extract
  - summer
cuisine: ""
image: "https://static01.nyt.com/images/2024/07/11/multimedia/YA-Bundt-Cakerex-pgwf-copy1/YA-Bundt-Cakerex-pgwf-copy1-videoSixteenByNineJumbo1600-v2.jpg"
date_saved: "2026-04-16"
---

# Vanilla Bundt Cake

> Source: https://cooking.nytimes.com/recipes/1025495-vanilla-bundt-cake?campaign_id=243&emc=edit_ntdc_20260411&instance_id=173892&nl=bake-time&regi_id=197868639&segment_id=218075&user_id=3719b3bb012d2089287c9cc303193b83

## Description
This classic Bundt cake is sturdy enough to hold the shape of your finest decorative pan and has a fine, buttery, tender crumb packed with lots of vanilla flavor. The thin, crackly glaze adds texture and intensifies the vanilla factor, but the cake is just as tasty with a dusting of powdered sugar instead. Either way, you’ll find yourself slicing off a tiny bit of cake every time you walk by the plate. Serve slices with a dollop of cream and some macerated berries for a dessert that is as delicious as it is simple.

## Ingredients
- 1 cup/226 grams unsalted butter (2 sticks), at room temperature, plus more for the pan
- 2 1/4 cups/290 grams all-purpose flour, plus more for the pan
- 1 teaspoon baking powder
- 1 1/4 teaspoons kosher salt (such as Diamond Crystal)
- 1 3/4 cups/350 grams granulated sugar
- 4 large eggs, at room temperature
- 3/4 cup/180 milliliters whole milk, at room temperature
- 1 tablespoon vanilla extract
- 1/2 teaspoon almond extract (optional)
- 1 1/2 cups/185 grams powdered sugar
- 2 tablespoons whole milk, plus more as needed
- 1/2 teaspoon kosher salt (such as Diamond Crystal)

## Instructions
1. Heat oven to 325 degrees. Butter and flour a 10- to 12-cup Bundt pan, making sure to get in every nook and cranny.
2. In a medium bowl, whisk together the flour, baking powder and salt; set aside.
3. To the bowl of a stand mixer fitted with the paddle attachment (or to a large bowl, if using an electric hand-mixer), add butter and granulated sugar. Mix on medium-high until light and fluffy, 5 minutes. Add the eggs one at a time, mixing well after each addition. Scrape down the sides of the bowl as needed to ensure even mixing.
4. Combine the milk, vanilla extract and almond extract (if using) in a measuring cup with a spout. Turn the mixer to low and alternately add half the flour mixture, then all the milk mixture, then the remaining flour mixture. Transfer the batter to the prepared pan and tap firmly on the counter a few times to release any large air bubbles.
5. Bake the cake until puffed and golden and a tester inserted into the center comes out clean, 60 to 70 minutes. Set the cake in the pan on a sheet tray lined with a rack to cool for 15 minutes, then turn the cake out onto the rack for the first glazing.
6. While the cake is baking, make the glaze: Whisk together the powdered sugar, milk, vanilla and salt. The glaze should be thick but runny, like honey. Add more milk, 1 tablespoon at a time, as needed. You should have about 3/4 cup of glaze.
7. Right after the cake is turned out of the pan, carefully brush the warm cake with about 1/4 cup of the glaze, creating a thin layer. Let the glaze set for about 15 minutes, then brush the cake with the remaining glaze. Let the cake cool to room temperature before serving.

## Tags
- bundt cake
- make-ahead
- picnic
- vanilla extract
- summer

## Notes
`,Uy=`---
title: "Vegan Caesar Salad With Crisp Chickpeas"
source: "https://cooking.nytimes.com/recipes/1020763-vegan-caesar-salad-with-crisp-chickpeas?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Becky Hughes"
yield: "2 to 4 servings"
prep_time: ""
cook_time: ""
total_time: "PT25M"
categories:
  - brunch
  - easy
  - for two
  - lunch
  - quick
  - weeknight
  - main course
  - side dish
tags:
  - cashew
  - chickpea
  - green salad
  - kale
  - lemon juice
  - miso
  - nutritional yeast
  - romaine
  - sourdough
  - the veggie
  - vegan
  - vegetarian
  - American
cuisine: "american"
image: "https://static01.nyt.com/images/2020/01/02/dining/bh-vegan-caesar/bh-vegan-caesar-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Vegan Caesar Salad With Crisp Chickpeas

> Source: https://cooking.nytimes.com/recipes/1020763-vegan-caesar-salad-with-crisp-chickpeas?campaign_id=222&emc=edit_veg_20260416&instance_id=174178&nl=the-veggie&regi_id=197868639&segment_id=218328&user_id=3719b3bb012d2089287c9cc303193b83

## Description
There are many ways to mimic the rich, creamy texture of emulsified, egg-based Caesar dressing: Tofu, vegan mayonnaise, aquafaba whipped with oil, the list goes on. Blended raw cashews prove themselves the best base in this version, which is fortified with garlic, mustard, miso paste and caper brine to achieve the tangy-salty-punchy balance found in the real deal. Crisp chickpeas and hand-torn croutons add a crunchiness that plays well with the velvety dressing.

## Ingredients
- 1/2 small loaf crusty bread, such as sourdough, torn into 1-inch pieces (about 2 cups)
- 1/4 cup extra-virgin olive oil
- Kosher salt and freshly ground black pepper
- 1 (14-ounce) can chickpeas, drained, rinsed and thoroughly dried
- 1 large bunch lacinato kale, stems removed and roughly chopped into 1-inch pieces (about 4 cups)
- 1 large head romaine lettuce, roughly chopped into 1-inch pieces (about 6 cups)
- 1 cup whole (unroasted) cashews
- 1 snack-size (2-by-3-inch) sheet roasted nori, crumbled (optional)
- 1/4 cup nutritional yeast, plus more for serving
- 1/4 cup fresh lemon juice (from 1 to 2 lemons)
- 3 garlic cloves
- 2 teaspoons brine from a jar of capers
- 1 teaspoon Dijon mustard
- 1 teaspoon white miso paste
- 3/4 teaspoon kosher salt
- 1/2 teaspoon freshly ground black pepper

## Instructions
1. Heat the oven to 400 degrees. On a medium baking sheet, toss the bread with 2 tablespoons olive oil; season generously with salt and pepper. On a second baking sheet, toss the chickpeas with remaining 2 tablespoons oil; season generously with salt and pepper. Bake both until chickpeas and croutons are browned and crisp, stirring both halfway through, about 10 minutes for the croutons and 20 minutes for the chickpeas. Set aside.
2. While the chickpeas and croutons roast, prepare your dressing: To a high-speed blender, add all the dressing ingredients, plus 3/4 teaspoon kosher salt, 1/2 teaspoon pepper and 3/4 cup water; blend until completely smooth, 3 to 4 minutes, scraping down the sides with a rubber spatula every now and again. Set dressing aside. (You should have 1 1/2 cups).
3. In a large bowl, add the kale and the dressing. Using your hands, massage the kale until slightly softened. Add the lettuce, croutons and half the roasted chickpeas; toss to coat and season to taste with salt and pepper. Sprinkle with additional nutritional yeast. Top with remaining roasted chickpeas; grind black pepper over, and serve immediately.

## Tags
- cashew
- chickpea
- green salad
- kale
- lemon juice
- miso
- nutritional yeast
- romaine
- sourdough
- the veggie
- vegan
- vegetarian
- American

## Notes
`,Yy=`---
title: "Vegetable Tortilla Soup"
source: "https://cooking.nytimes.com/recipes/1024047-vegetable-tortilla-soup"
author: "Ham El-Waylly"
yield: "4 to 6 servings"
prep_time: ""
cook_time: ""
total_time: "PT40M"
categories:
  - dinner
  - lunch
  - main course
tags:
  - budget
  - cabbage
  - chipotles in adobo
  - great leftovers
  - partial-access-ic
  - pinto bean
  - soup
  - sweet potato
  - tortilla chip
  - healthy
  - vegan
cuisine: ""
image: "https://static01.nyt.com/images/2023/05/05/multimedia/hew-vegetable-tortilla-soup-wgvp/hew-vegetable-tortilla-soup-wgvp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Vegetable Tortilla Soup

> Source: https://cooking.nytimes.com/recipes/1024047-vegetable-tortilla-soup

## Description
This vegetarian spin on tortilla soup gets its savory flavor from deeply caramelized cabbage, which brings sweetness, bitterness and earthiness. It uses tortillas in two ways: Pulverized tortilla chips add body and a delightful undercurrent of nutty flavor. (Grinding the tortilla finely ensures that it integrates into the soup without needing a final blend.) They are also sprinkled on top, adding a satisfying crunch while echoing the soup’s corn flavor. Treat this recipe as a template, and add whatever other vegetables you may have. As with other tortilla soups, the final garnishes are key to balancing the complex flavors. Don’t skimp on the lime, as its bracing acidity lifts all of the elements.

## Ingredients
- 3 tablespoons neutral oil, like grapeseed
- 1 small purple cabbage, halved, cored and finely shredded
- Salt and black pepper
- 1 large sweet potato, peeled and cut into 1/2-inch cubes
- 1 medium yellow onion, finely chopped
- 6 garlic cloves, finely chopped
- 1/2 packed cup tortilla chips, finely ground in a spice grinder or blender
- 2 cups tomato purée
- 3 canned chipotles in adobo, finely chopped
- 1 (15-ounce) can pinto beans, drained
- Lightly crushed tortilla chips, diced avocado, vegan sour cream or yogurt, chopped cilantro and yellow onion, lime wedges

## Instructions
1. Heat the oil in a large, heavy-bottomed pot over high. Add the cabbage, season with a large pinch of salt and cook, occasionally stirring, until softened, lightly charred in spots and smelling smoky, about 10 minutes. Add the sweet potato, onion, garlic and another pinch of salt and cook, stirring frequently, until the onion and garlic have softened, about 5 minutes.
2. Stir in the tortilla chips. Add the tomato purée and chipotles and bring to a simmer.
3. Add 5 cups of water and another large pinch of salt; bring to a boil. Reduce the heat to maintain a simmer and cook, stirring occasionally, until the soup is thickened and the sweet potatoes are cooked through, about 15 minutes.
4. Stir in the pinto beans; season to taste with salt and pepper.
5. Divide soup among bowls and serve with desired toppings.

## Tags
- budget
- cabbage
- chipotles in adobo
- great leftovers
- partial-access-ic
- pinto bean
- soup
- sweet potato
- tortilla chip
- healthy
- vegan

## Notes
`,Ky=`---
title: "White Bean Shakshuka"
source: "https://cooking.nytimes.com/recipes/765383424-white-bean-shakshuka"
author: "Ifrah F. Ahmed"
yield: "4 servings"
prep_time: "PT0H10M"
cook_time: "PT0H35M"
total_time: "PT0H45M"
categories:
  - Egg Dish
  - Brunch
  - Breakfast
  - Main Course
  - Lunch
  - Dinner
tags:
  - Cannellini Bean
  - Marinara Sauce
  - Egg
  - Tomato
  - Budget
  - Easy
  - White Bean
  - Stovetop
  - Skillet
  - Cast Iron
  - Quick
  - One Pot
  - Weeknight
  - Vegetarian
  - Dairy-Free
  - Gluten-Free
cuisine: "North African Inspired, Middle Eastern Inspired"
image: "https://static01.nyt.com/images/2025/12/11/multimedia/ifa-white-bean-shakshuka-hqvp/ifa-white-bean-shakshuka-hqvp-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# White Bean Shakshuka

> Source: https://cooking.nytimes.com/recipes/765383424-white-bean-shakshuka

## Description
This white bean shakshuka is heartier than the traditional version and takes advantage of two readily available pantry foods: white beans and jarred marinara sauce. While the beans stretch this meal and give it more protein, the marinara makes it a saucy dish that begs for a thick slice of sourdough on the side. This dish is perfect for any meal and can be eaten at any time of day. If bread isn’t your thing, then feel free to pair it with white rice, which works equally well with the saucy beans and jammy eggs for a filling dinner. For a lighter option, you can enjoy the shakshuka on its own with a side salad.

## Ingredients
- 2 tablespoons olive oil
- 1 large white onion, diced
- Fine sea salt
- 6 garlic cloves, minced
- 2 medium tomatoes, chopped
- 1 medium jalapeño, cut in half lengthwise
- 1 (15-ounce) can cannellini beans or other white beans, rinsed
- ½ cup store-bought or homemade marinara sauce
- 1 handful cilantro leaves, finely chopped, plus more for serving
- 2 teaspoons ground cumin
- ½ teaspoon dried oregano
- ¼ teaspoon paprika
- ⅛ teaspoon ground pepper
- 4 large eggs
- Toasted bread or cooked white rice (both optional), for serving

## Instructions
1. In a large cast-iron skillet, heat 1 tablespoon of oil over medium heat until shimmering, about 1 minute. Stir in the onion, season with salt, cover and cook, stirring occasionally, until the onions have softened a little, about 4 minutes.
2. Stir in the garlic and cook until the garlic is starting to lightly brown, about 2 minutes. Next, add the remaining 1 tablespoon of oil, the tomatoes and the jalapeño halves, cut sides down. Cook, covered, until the tomatoes begin to lose some body and break down, about 6 minutes.
3. Stir in the beans, marinara sauce, cilantro, cumin, oregano, paprika, pepper, 1 teaspoon salt and ½ cup water. Cook, covered, for 8 minutes, stirring occasionally.
4. Uncover and make 4 small divots in the sauce and crack the eggs into each of the little spaces. Top each egg off with a pinch of salt and cover the pan. Cook the eggs for 7 to 9 minutes, until the whites are cooked and yolks reach your desired level of doneness.
5. Take the skillet off the stove, sprinkle with additional cilantro and serve the eggs immediately, with the side of your choice.

## Tags
- Cannellini Bean
- Marinara Sauce
- Egg
- Tomato
- Budget
- Easy
- White Bean
- Stovetop
- Skillet
- Cast Iron
- Quick
- One Pot
- Weeknight
- Vegetarian
- Dairy-Free
- Gluten-Free

## Notes
`,Jy=`---
title: "Yamitsuki (Addictive Cabbage)"
source: "https://cooking.nytimes.com/recipes/1026314-yamitsuki-addictive-cabbage"
author: "Ligaya Mishan"
yield: "4 to 6 servings"
prep_time: "PT5M"
cook_time: "PT20M"
total_time: "PT25M"
categories:
  - dinner
  - easy
  - lunch
  - quick
  - weeknight
  - vegetables
  - side dish
tags:
  - cabbage
  - five ingredient
  - salt
  - sesame oil
  - sesame seed
  - small plate
  - vegan
  - vegetarian
  - Japanese
cuisine: "japanese"
image: "https://static01.nyt.com/images/2024/01/05/multimedia/05EATrex-wbtv/05EATrex-wbtv-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Yamitsuki (Addictive Cabbage)

> Source: https://cooking.nytimes.com/recipes/1026314-yamitsuki-addictive-cabbage

## Description
In Japanese, “yamitsuki” means addictive — a precise description of this seemingly humble side dish of cabbage, gently torn and simply anointed with sesame oil and seeds, garlic, black pepper and a fingerprint’s worth of salt. So few ingredients, so little time required, and you can’t stop eating it. Often served at izakayas, the Japanese equivalent of pubs, the cabbage is especially good for refreshing the palate and easing the stomach between bites of richer, fattier foods. Aiko Cascio, an instructor for the New York-based League of Kitchens cooking school, prefers tearing the leaves by hand rather than using a knife because the rougher edges absorb more of the sesame oil. This recipe, from “The League of Kitchens Cookbook” (Harvest, 2024) by Lisa Kyung Gross, Rachel Wharton and the women of the League of Kitchens cooking school, calls for flathead cabbage, also known as Taiwanese cabbage, which is soft and tender, with space between the ribs. If you can find only green, Ms. Cascio advises cutting it into smaller pieces and letting it rest a little longer in salt, for greater pliancy.

## Ingredients
- 1 pound Taiwanese flathead cabbage or Napa cabbage (about 1/2 cabbage), see Tip
- Kosher salt (such as Diamond Crystal) and pepper
- 2 medium garlic cloves
- 2 tablespoons toasted sesame oil
- 1 tablespoon untoasted sesame seeds

## Instructions
1. Prepare the cabbage: Peel away any damaged outer leaves from the cabbage. Trim any brown or oxidized bits, then halve the cabbage through its core and remove the solid white heart— you can usually do this just by cutting out a little triangle with the tip of a large knife.
2. Cut the leaves of the cabbage into rough 1 1/4-inch square pieces. If you spot any very thick pieces, like the parts of the leaves that were closer to the core, cut them not into squares but into thin slices about 1/4-inch wide.
3. Wash and drain the cut pieces of the cabbage in a colander in the sink. (They do not need to be totally dry.) Put the cabbage pieces in a very large bowl and sprinkle them with 3 tablespoons salt, then crunch and scrunch the leaves with your hands, making sure they’re all separated, well mixed in with the salt, and beginning to soften. Let the salted cabbage sit for 10 minutes.
4. Make the dressing: While the cabbage sits, finely grate the garlic into a smooth paste into a small bowl (you should have about 1/2 tablespoon). Whisk the sesame oil, 1/8 teaspoon salt and 1/4 teaspoon ground black pepper into the bowl with the garlic.
5. Check the cabbage: After 10 minutes, the cabbage should be slightly wilted and taste slightly salty. Test a leaf by rinsing it under running water and tasting it; it should taste like the leaf absorbed some salt. (If not, let it sit for 10 more minutes and then taste again.) Put the cabbage pieces in a colander or salad spinner, rinse off the salt under running water, then drain the cabbage as well as you can. (It won’t be bone dry, but it shouldn’t be sopping wet.) Let it sit until you are ready to dress the salad.
6. Dress the salad: When you’re ready to serve the dish, transfer the cabbage to a serving bowl, add the dressing and use two large spoons (or chopsticks) to toss until coated. Sprinkle the salad with the sesame seeds, again making sure everything is mixed together.
7. Serve the cabbage: You can either serve this family style in a large bowl on a table or you can give each diner a small bowl as part of a larger meal with rice. This is best eaten the day it’s made, as the garlic intensifies in the dressing over time.

## Tags
- cabbage
- five ingredient
- salt
- sesame oil
- sesame seed
- small plate
- vegan
- vegetarian
- Japanese

## Notes
`,Wy=`---
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
`,Vy=`---
title: "Za’atar Turkey Meatballs With Tahini Yogurt"
source: "https://cooking.nytimes.com/recipes/773758746-zaatar-turkey-meatballs-with-tahini-yogurt?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83"
author: "Sheela Prakash"
yield: "4 servings"
prep_time: "PT0H5M"
cook_time: "PT0H30M"
total_time: "PT0H35M"
categories:
  - Meatballs
  - Dinner
  - Lunch
  - Main Course
  - Appetizer
tags:
  - Greek Yogurt
  - Tahini
  - Ground Turkey
  - Panko
  - Za’atar
  - Easy
  - Quick
  - Weeknight
  - Great Leftovers
  - Healthy
  - Roast
cuisine: ""
image: "https://static01.nyt.com/images/2026/03/17/multimedia/SP-Zaatar-Turkey-Meatballs-with-Tahini-Yogurt-zmbg/SP-Zaatar-Turkey-Meatballs-with-Tahini-Yogurt-zmbg-videoSixteenByNineJumbo1600.jpg"
date_saved: "2026-04-16"
---

# Za’atar Turkey Meatballs With Tahini Yogurt

> Source: https://cooking.nytimes.com/recipes/773758746-zaatar-turkey-meatballs-with-tahini-yogurt?campaign_id=58&emc=edit_ck_20260408&instance_id=173710&nl=cooking&regi_id=197868639&segment_id=217913&user_id=3719b3bb012d2089287c9cc303193b83

## Description
Creamy tahini-spiked yogurt plays a dual role in these quick baked turkey meatballs: Half is combined with the ground meat and herby, earthy za’atar to ensure that the meatballs are extra juicy and tender, while the rest doubles as a drizzling and dipping sauce. How you choose to serve the duo of meatballs and tahini yogurt is up to you: Stuff them into split pita, serve them over cooked grains like rice or bulgur, or just sit them alongside a pile of garlicky greens.

## Ingredients
- ¾ cup plain, whole-milk Greek yogurt
- 3 tablespoons tahini
- 1 large garlic clove, grated or minced
- 2 tablespoons freshly squeezed lemon juice, divided
- 1 teaspoon plus a pinch kosher salt (such as Diamond Crystal), divided
- 1 large egg
- 1 pound ground turkey
- ½ cup panko bread crumbs
- ⅓ cup chopped fresh parsley, divided
- 3 tablespoons plus 1 teaspoon za’atar, divided
- Freshly ground black pepper
- Oil, for forming the meatballs

## Instructions
1. Heat oven to 400 degrees. Line a rimmed baking sheet with parchment paper.
2. In a large bowl, combine the yogurt, tahini, garlic, 1 tablespoon lemon juice and a pinch of salt. Transfer ½ cup of the tahini yogurt to a small bowl and reserve.
3. Crack the egg into the large bowl and, using a fork, lightly whisk it into the yogurt mixture. Add the turkey, panko, three-quarters of the parsley, 2 tablespoons za’atar, the remaining 1 teaspoon salt and several grinds of pepper; mix lightly just until combined. Using oiled hands, roll into 16 meatballs (about 2 tablespoons each) and place on the prepared baking sheet. (The mixture will be quite soft.) Bake until cooked through, about 10 minutes.
4. Stir in the remaining 1 tablespoon lemon juice and 1 tablespoon water to reserved tahini yogurt until thin enough to drizzle. (If it’s still too thick, add another 1 tablespoon water.)
5. Garnish the meatballs with the remaining parsley and za’atar and serve with the tahini yogurt.

## Tags
- Greek Yogurt
- Tahini
- Ground Turkey
- Panko
- Za’atar
- Easy
- Quick
- Weeknight
- Great Leftovers
- Healthy
- Roast

## Notes
`,Qy=Object.assign({"../../recipes/asparagus-feta-pasta.md":zm,"../../recipes/asparagus-goat-cheese-and-tarragon-tart.md":Am,"../../recipes/asparagus-gomaae-with-chilled-tofu.md":Cm,"../../recipes/asparagus-potato-hash-with-goat-cheese-and-eggs.md":Mm,"../../recipes/avocado-and-onion-salad.md":jm,"../../recipes/b-l-c-l-c-shaking-beef.md":xm,"../../recipes/baasto-iyo-suugo-tuuna-pasta-and-spiced-tuna-sauce.md":Dm,"../../recipes/baked-spanakopita-pasta-with-greens-and-feta.md":Bm,"../../recipes/baked-taco-pasta.md":Nm,"../../recipes/baked-tofu-with-peanut-sauce-and-coconut-lime-rice.md":Em,"../../recipes/baked-wild-salmon.md":Hm,"../../recipes/banana-cake-with-caramel-glaze.md":Rm,"../../recipes/bean-and-vegetable-japanese-curry.md":qm,"../../recipes/beef-tagine-with-green-beans-and-olives.md":Pm,"../../recipes/black-pepper-beef-and-cabbage-stir-fry.md":Om,"../../recipes/blistered-broccoli-pasta-with-walnuts-pecorino-and-mint.md":Gm,"../../recipes/braised-chicken-with-rosemary-and-crispy-artichokes.md":Im,"../../recipes/broccoli-and-white-bean-caesar.md":Lm,"../../recipes/broccoli-cheddar-beans.md":Um,"../../recipes/broccoli-walnut-pesto-pasta.md":Ym,"../../recipes/brown-butter-cornmeal-cake.md":Km,"../../recipes/bruschetta-with-cabbage-braised-in-wine.md":Jm,"../../recipes/burẹdì-ágẹgẹ-soft-pull-apart-rolls.md":Wm,"../../recipes/butter-shortbread-dough.md":Vm,"../../recipes/buttered-cabbage-and-eggs.md":Qm,"../../recipes/cabbage-parm.md":Xm,"../../recipes/cabbage-potato-and-cheese-dumplings-with-dill.md":Zm,"../../recipes/caramelized-brussels-sprouts-pasta-with-toasted-chickpeas.md":Fm,"../../recipes/caramelized-cabbage-and-walnut-pasta.md":$m,"../../recipes/carrot-cake-butter-mochi.md":ef,"../../recipes/chana-masala.md":nf,"../../recipes/charred-bok-choy-and-cannellini-bean-salad.md":tf,"../../recipes/cheesy-baked-orzo-with-marinara.md":af,"../../recipes/cheesy-gnocchi-with-corn-and-pesto.md":of,"../../recipes/cherry-karpatka.md":sf,"../../recipes/chewy-brown-butter-cookies.md":rf,"../../recipes/chewy-earl-grey-sugar-cookies.md":lf,"../../recipes/chicken-and-herb-salad-with-nuoc-cham.md":cf,"../../recipes/chicken-manchurian.md":df,"../../recipes/chicken-with-peas-and-mint.md":hf,"../../recipes/chile-crisp-cheese-crackers.md":uf,"../../recipes/chile-crisp-chicken-cutlets.md":pf,"../../recipes/citrus-salad-with-fennel-and-olives.md":gf,"../../recipes/citrusy-roasted-salmon-and-potatoes.md":mf,"../../recipes/classic-kouign-amann.md":ff,"../../recipes/classic-okonomiyaki-japanese-cabbage-and-pork-pancakes.md":bf,"../../recipes/coronation-cauliflower-and-chickpeas.md":yf,"../../recipes/cottage-cheese-bread.md":kf,"../../recipes/cottage-cheese-egg-bites.md":vf,"../../recipes/creamy-asparagus-pasta.md":wf,"../../recipes/creamy-chickpea-pasta-with-spinach-and-rosemary.md":_f,"../../recipes/creamy-cottage-cheese-basil-pasta.md":Sf,"../../recipes/creamy-vegan-cabbage-pasta.md":Tf,"../../recipes/crisp-gnocchi-with-sausage-and-peas.md":zf,"../../recipes/crispy-artichoke-pasta.md":Af,"../../recipes/crispy-bean-cakes-with-harissa-lemon-and-herbs.md":Cf,"../../recipes/crispy-gnocchi-with-spinach-and-feta.md":Mf,"../../recipes/crispy-tofu-and-cabbage-stir-fry.md":jf,"../../recipes/crispy-tofu-tacos.md":xf,"../../recipes/crispy-tofu-with-cashews-and-blistered-snap-peas.md":Df,"../../recipes/cucumber-avocado-salad.md":Bf,"../../recipes/dan-dan-noodle-salad.md":Nf,"../../recipes/dan-dan-noodles.md":Ef,"../../recipes/easy-banana-bread.md":Hf,"../../recipes/easy-skillet-brownies.md":Rf,"../../recipes/egg-and-cheese-quesadilla.md":qf,"../../recipes/espagueti-verde-creamy-roasted-poblano-pasta.md":Pf,"../../recipes/everything-bagel-cottage-cheese-dip.md":Of,"../../recipes/extra-green-pasta-salad.md":Gf,"../../recipes/fettuccine-alfredo.md":If,"../../recipes/five-ingredient-creamy-miso-pasta.md":Lf,"../../recipes/fresh-lemon-and-chile-pasta.md":Uf,"../../recipes/frito-pie.md":Yf,"../../recipes/garlic-tahini-sauce.md":Kf,"../../recipes/gingery-cabbage-rolls-with-pork-and-rice.md":Jf,"../../recipes/gochujang-tofu-squash-and-brussels-sprouts-bowls.md":Wf,"../../recipes/greek-lemon-potatoes.md":Vf,"../../recipes/green-curry-salmon-with-coconut-rice.md":Qf,"../../recipes/green-goddess-chicken-meatballs.md":Xf,"../../recipes/green-goddess-dressing.md":Zf,"../../recipes/harissa-puttanesca-with-toasted-almonds.md":Ff,"../../recipes/herb-marinated-seared-tofu.md":$f,"../../recipes/herby-skillet-chicken-with-greens.md":eb,"../../recipes/hilary-duffs-cilantro-chicken-soup.md":nb,"../../recipes/hot-slaw-mexican-style.md":tb,"../../recipes/jammy-eggs-with-asparagus-and-chipotle.md":ab,"../../recipes/kale-caesar-pasta-salad.md":ib,"../../recipes/lane-cake.md":ob,"../../recipes/lemon-bars.md":sb,"../../recipes/lemon-tahini-slaw.md":rb,"../../recipes/lemony-orzo-with-asparagus-and-garlic-bread-crumbs.md":lb,"../../recipes/liberian-stewed-greens-dip-with-plantain-chips.md":cb,"../../recipes/loaded-sweet-potatoes-with-black-beans-and-cheddar.md":db,"../../recipes/madhur-jaffreys-goan-shrimp-curry.md":hb,"../../recipes/malt-chocolate-and-marshmallow-sandwiches.md":ub,"../../recipes/miso-chile-asparagus-with-tofu.md":pb,"../../recipes/mushroom-and-cottage-cheese-pasta.md":gb,"../../recipes/mushroom-pasta-stir-fry.md":mb,"../../recipes/mọin-mọin-for-a-gathering-savory-bean-pudding.md":fb,"../../recipes/no-cook-chili-bean-salad.md":bb,"../../recipes/noodle-okonomiyaki-cabbage-and-egg-pancakes.md":yb,"../../recipes/olive-oil-cake.md":kb,"../../recipes/one-pan-crispy-chicken-and-chickpeas.md":vb,"../../recipes/one-pot-chicken-meatballs-with-greens.md":wb,"../../recipes/one-pot-creamy-pasta-and-greens.md":_b,"../../recipes/one-pot-tortellini-with-prosciutto-and-peas.md":Sb,"../../recipes/oven-roasted-chicken-shawarma.md":Tb,"../../recipes/pan-roasted-asparagus-soup.md":zb,"../../recipes/panang-curry.md":Ab,"../../recipes/parmesan-cabbage-soup.md":Cb,"../../recipes/pasta-and-lentils-pasta-e-lenticchie.md":Mb,"../../recipes/pasta-e-ceci-italian-pasta-and-chickpea-stew.md":jb,"../../recipes/pasta-e-ceci-salad.md":xb,"../../recipes/pasta-primavera-with-asparagus-and-peas.md":Db,"../../recipes/pasta-with-green-puttanesca.md":Bb,"../../recipes/pasta-with-sausage-caramelized-cabbage-and-goat-cheese.md":Nb,"../../recipes/pink-grapefruit-bars.md":Eb,"../../recipes/polish-cottage-cheese-dip-gzik.md":Hb,"../../recipes/pork-bulgogi-with-spring-vegetables.md":Rb,"../../recipes/pork-laab.md":qb,"../../recipes/quick-pickles.md":Pb,"../../recipes/quick-tomato-white-bean-and-kale-soup.md":Ob,"../../recipes/rasta-pasta-with-jerk-chicken.md":Gb,"../../recipes/red-cabbage-with-walnuts-and-feta.md":Ib,"../../recipes/red-curry-lentils-with-sweet-potatoes-and-spinach.md":Lb,"../../recipes/rhubarb-crisp.md":Ub,"../../recipes/rhubarb-crumble.md":Yb,"../../recipes/rhubarb-roasted-salmon.md":Kb,"../../recipes/ricotta-pasta-alla-vodka.md":Jb,"../../recipes/rigatoni-with-white-bolognese.md":Wb,"../../recipes/ritzy-cheddar-chicken-breasts.md":Vb,"../../recipes/roasted-asparagus-with-crispy-leeks-and-capers.md":Qb,"../../recipes/roasted-cabbage-and-butter-beans.md":Xb,"../../recipes/roasted-cabbage-with-capers-and-garlic.md":Zb,"../../recipes/roasted-chicken-with-caramelized-cabbage.md":Fb,"../../recipes/roasted-lemony-fish-with-brown-butter-capers-and-nori.md":$b,"../../recipes/roasted-mushroom-laab.md":ey,"../../recipes/roasted-rhubarb-cobbler.md":ny,"../../recipes/rotisserie-chicken-and-greens-pasta.md":ty,"../../recipes/salmon-with-avocado-and-cilantro-salad.md":ay,"../../recipes/salted-caramel-and-peanut-butter-shortbread.md":iy,"../../recipes/san-choy-bao-pork-lettuce-wraps.md":oy,"../../recipes/sausage-and-cabbage.md":sy,"../../recipes/sheet-pan-chicken-and-potatoes-with-feta-lemon-and-dill.md":ry,"../../recipes/sheet-pan-chicken-with-rhubarb-and-red-onion.md":ly,"../../recipes/sheet-pan-fish-tikka-with-spinach.md":cy,"../../recipes/sheet-pan-hot-honey-chicken.md":dy,"../../recipes/sheet-pan-kielbasa-with-cabbage-and-beans.md":hy,"../../recipes/sheet-pan-shrimp-tikka.md":uy,"../../recipes/shrimp-guisado-tacos.md":py,"../../recipes/skillet-gnocchi-with-miso-butter-and-asparagus.md":gy,"../../recipes/slow-cooked-fish-with-citrus-and-herbs.md":my,"../../recipes/snap-pea-tofu-and-herb-salad-with-spicy-peanut-sauce.md":fy,"../../recipes/snapper-escovitch.md":by,"../../recipes/spaghetti-al-limone-with-shrimp.md":yy,"../../recipes/spiced-chicken-with-sweet-potatoes.md":ky,"../../recipes/spiced-chickpea-salad-with-tahini-and-pita-chips.md":vy,"../../recipes/spiced-coconut-tapioca-pudding-with-fruit.md":wy,"../../recipes/spicy-broccoli-rabe-pasta.md":_y,"../../recipes/spicy-mushroom-and-tofu-mazemen.md":Sy,"../../recipes/spicy-tuna-salad-with-crispy-rice.md":Ty,"../../recipes/spicy-turkey-stir-fry-with-crisp-garlic-and-ginger.md":zy,"../../recipes/spinach-and-feta-lentil-bowls.md":Ay,"../../recipes/spinach-egg-bites.md":Cy,"../../recipes/spinach-gomaae.md":My,"../../recipes/stewed-greens-and-chickpeas-with-toasted-garlic-and-lemon.md":jy,"../../recipes/strawberry-basil-cottage-cheese-bowls.md":xy,"../../recipes/strawberry-drop-biscuits.md":Dy,"../../recipes/strawberry-galette.md":By,"../../recipes/strawberry-lassi.md":Ny,"../../recipes/strawberry-rhubarb-muffins.md":Ey,"../../recipes/strawberry-spoon-cake.md":Hy,"../../recipes/stuffed-peppers.md":Ry,"../../recipes/sweet-and-sour-cauliflower.md":qy,"../../recipes/tahini-and-chocolate-chunk-cake.md":Py,"../../recipes/tofu-and-sweet-potato-peanut-butter-curry.md":Oy,"../../recipes/tofu-laab.md":Gy,"../../recipes/tzatziki-chickpea-salad.md":Iy,"../../recipes/vanilla-bundt-cake.md":Ly,"../../recipes/vegan-caesar-salad-with-crisp-chickpeas.md":Uy,"../../recipes/vegetable-tortilla-soup.md":Yy,"../../recipes/white-bean-shakshuka.md":Ky,"../../recipes/yamitsuki-addictive-cabbage.md":Jy,"../../recipes/za-atar-roasted-tofu-with-chickpeas-tomatoes-and-lemony-tahini.md":Wy,"../../recipes/zaatar-turkey-meatballs-with-tahini-yogurt.md":Vy});function Xy(){return Object.entries(Qy).map(([f,z])=>Zy(f,z)).filter(Boolean).sort((f,z)=>f.title.localeCompare(z.title))}function Zy(f,z){if(typeof z!="string"||!z.trim())return null;const{frontmatter:A,body:u}=Fy(z),x=Yt(A.title||n1(u)||a1(f)),q=e1(u);return{id:t1(`${x}-${f}`),path:f,title:x,author:Yt(A.author||""),source:A.source||"",yield:A.yield||"",prepTime:bl(A.prep_time||""),cookTime:bl(A.cook_time||""),totalTime:bl(A.total_time||""),cuisine:Yt(A.cuisine||""),image:A.image||"",dateSaved:A.date_saved||"",categories:Hu(A.categories),tags:Hu(A.tags),description:q.description,ingredients:q.ingredients,instructions:q.instructions,notes:q.notes,raw:z}}function Fy(f){const z=f.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);return z?{frontmatter:$y(z[1]),body:z[2]}:{frontmatter:{},body:f}}function $y(f){const z={},A=f.split(/\r?\n/);let u="";for(const x of A){if(!x.trim())continue;const q=x.match(/^([A-Za-z0-9_]+):\s*(.*)$/);if(q){u=q[1];const F=q[2].trim();if(!F){z[u]=[];continue}z[u]=Bu(F);continue}const te=x.match(/^\s*-\s+(.*)$/);te&&u&&(Array.isArray(z[u])||(z[u]=[]),z[u].push(Bu(te[1])))}return z}function Bu(f){const z=f.trim();return z.startsWith('"')&&z.endsWith('"')||z.startsWith("'")&&z.endsWith("'")?z.slice(1,-1):z}function e1(f){const z={};let A="description";for(const u of f.split(/\r?\n/)){if(u.startsWith("# "))continue;const x=u.match(/^##\s+(.*)$/);if(x){A=x[1].trim().toLowerCase(),z[A]=[];continue}z[A]||(z[A]=[]),z[A].push(u)}return{description:Nu(z.description||[]),ingredients:Eu(z.ingredients||[]),instructions:Eu(z.instructions||[],!0),notes:Nu(z.notes||[])}}function Nu(f){return f.join(`
`).split(/\n\s*\n/).map(z=>z.replace(/^\s*>\s?/gm,"").trim()).filter(Boolean).map(Yt)}function Eu(f,z=!1){return f.map(A=>z?A.replace(/^\s*\d+\.\s+/,"").trim():A.replace(/^\s*[-*]\s+/,"").trim()).filter(Boolean).map(Yt)}function n1(f){const z=f.match(/^#\s+(.*)$/m);return z?z[1].trim():""}function Hu(f){return f?(Array.isArray(f)?f:[f]).map(A=>Yt(String(A))).filter(Boolean):[]}function bl(f){if(!f)return"";const z=Yt(String(f)),A=z.match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/i);if(!A)return z;const u=Number(A[1]||0),x=Number(A[2]||0),q=[];return u&&q.push(`${u} hr`),x&&q.push(`${x} min`),q.join(" ")}function t1(f){return f.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function a1(f){return f.split("/").pop()?.replace(/\.md$/i,"")||"recipe"}function Yt(f){if(!f||!/[ÃÂâ]/.test(f))return f;try{const z=new Uint8Array([...f].map(u=>u.charCodeAt(0)&255)),A=new TextDecoder("utf-8",{fatal:!1}).decode(z);return A.includes("�")?f:A}catch{return f}}const St=5,Ai="#/",yl="#/recipe/",Jo=Xy(),Ti=Ou(Jo,"tags"),zi=Ou(Jo,"categories");function i1(){const[f,z]=Ye.useState(""),[A,u]=Ye.useState(""),[x,q]=Ye.useState(""),[te,F]=Ye.useState(St),[D,S]=Ye.useState(St),[O,C]=Ye.useState(qu()),[$,pe]=Ye.useState(!1),[Te,ke]=Ye.useState(null),[_n,Ge]=Ye.useState(c1()),[Sn,je]=Ye.useState(!1);Ye.useEffect(()=>{const B=()=>C(qu());return window.addEventListener("hashchange",B),B(),()=>window.removeEventListener("hashchange",B)},[]),Ye.useEffect(()=>{O.type!=="list"&&pe(!1)},[O]),Ye.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[O]),Ye.useEffect(()=>{const B=Tn=>{Tn.preventDefault(),ke(Tn)},ve=()=>{ke(null),Ge(!0),je(!1)};return window.addEventListener("beforeinstallprompt",B),window.addEventListener("appinstalled",ve),()=>{window.removeEventListener("beforeinstallprompt",B),window.removeEventListener("appinstalled",ve)}},[]);const Ie=!_n,dn=d1();async function Ne(){if(Te){Te.prompt(),await Te.userChoice,ke(null);return}dn&&je(B=>!B)}const K=Jo.filter(B=>{const ve=!f||[B.title,B.author,B.cuisine,B.description.join(" "),B.tags.join(" "),B.categories.join(" "),B.ingredients.join(" ")].join(" ").toLowerCase().includes(f.toLowerCase()),Tn=!A||B.tags.includes(A),hn=!x||B.categories.includes(x);return ve&&Tn&&hn});if(O.type==="recipe"){const B=Jo.find(ve=>ve.id===O.recipeId)??null;return T.jsxs("div",{className:"shell",children:[T.jsxs("header",{className:"hero",children:[T.jsx("div",{className:"hero-spacer","aria-hidden":"true"}),T.jsx("a",{className:"hero-title-link",href:Ai,children:T.jsx("h1",{children:"Stovetop"})}),Ie?T.jsx("button",{type:"button",className:"install-button",onClick:Ne,children:"Install"}):T.jsx("div",{className:"hero-spacer","aria-hidden":"true"})]}),T.jsxs("main",{className:"page-layout",children:[Sn?T.jsx(Ru,{}):null,B?T.jsx(o1,{recipe:B}):T.jsx(s1,{})]})]})}return T.jsxs("div",{className:"shell",children:[T.jsxs("header",{className:"hero",children:[T.jsx("button",{type:"button",className:$?"hero-icon-button active":"hero-icon-button","aria-expanded":$,"aria-controls":"mobile-filters","aria-label":"Toggle search and filters",onClick:()=>pe(B=>!B),children:T.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.44 1.06-1.06-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",fill:"currentColor"})})}),T.jsx("a",{className:"hero-title-link",href:Ai,children:T.jsx("h1",{children:"Stovetop"})}),Ie?T.jsx("button",{type:"button",className:"install-button",onClick:Ne,children:"Install"}):T.jsx("div",{className:"hero-spacer","aria-hidden":"true"})]}),T.jsxs("main",{className:"page-layout",children:[Sn?T.jsx(Ru,{}):null,T.jsxs("section",{className:"sidebar library-page",children:[T.jsxs("div",{id:"mobile-filters",className:$?"filter-panel mobile-open":"filter-panel",children:[T.jsxs("label",{className:"search",children:[T.jsx("span",{children:"Search"}),T.jsx("input",{type:"search",value:f,onChange:B=>z(B.target.value),placeholder:"Search title, ingredient, tag..."})]}),T.jsxs("div",{className:"filter-group",children:[T.jsxs("div",{className:"filter-header",children:[T.jsx("h2",{children:"Categories"}),x?T.jsx("button",{type:"button",onClick:()=>q(""),children:"Clear"}):null]}),T.jsx("div",{className:"chips",children:zi.slice(0,D).map(({value:B,count:ve})=>T.jsxs("button",{type:"button",className:B===x?"chip active":"chip",onClick:()=>q(B===x?"":B),children:[T.jsx("span",{children:B}),T.jsx("span",{className:"chip-count",children:ve})]},B))}),zi.length>St?T.jsx("button",{type:"button",className:"show-more-button",onClick:()=>S(B=>B>=zi.length?St:Math.min(B+St,zi.length)),children:D>=zi.length?"Show Less":"Show More"}):null]}),T.jsxs("div",{className:"filter-group",children:[T.jsxs("div",{className:"filter-header",children:[T.jsx("h2",{children:"Tags"}),A?T.jsx("button",{type:"button",onClick:()=>u(""),children:"Clear"}):null]}),T.jsx("div",{className:"chips",children:Ti.slice(0,te).map(({value:B,count:ve})=>T.jsxs("button",{type:"button",className:B===A?"chip active":"chip",onClick:()=>u(B===A?"":B),children:[T.jsx("span",{children:B}),T.jsx("span",{className:"chip-count",children:ve})]},B))}),Ti.length>St?T.jsx("button",{type:"button",className:"show-more-button",onClick:()=>F(B=>B>=Ti.length?St:Math.min(B+St,Ti.length)),children:te>=Ti.length?"Show Less":"Show More"}):null]})]}),T.jsxs("section",{className:"recipe-list",children:[T.jsxs("div",{className:"filter-header",children:[T.jsx("h2",{children:"Recipes"}),T.jsx("span",{children:K.length})]}),K.length?T.jsx("div",{className:"recipe-card-grid",children:K.map(B=>T.jsxs("a",{className:"recipe-card",href:r1(B.id),onClick:l1,children:[T.jsx("div",{className:"recipe-card-image-frame",children:B.image?T.jsx("img",{className:"recipe-card-image",src:B.image,alt:B.title,loading:"lazy"}):T.jsx("div",{className:"recipe-card-image-placeholder",children:T.jsx("span",{children:B.cuisine||"Recipe"})})}),T.jsx("span",{className:"recipe-card-title",children:B.title})]},B.id))}):T.jsx("p",{className:"empty-state",children:"No recipes match the current filters."})]})]})]})]})}function o1({recipe:f}){return T.jsxs("article",{className:"recipe-detail recipe-page",children:[T.jsx("a",{className:"back-link",href:Ai,children:"Back to Recipes"}),T.jsxs("div",{className:"detail-header",children:[T.jsxs("div",{children:[T.jsx("p",{className:"eyebrow",children:f.cuisine||"Recipe"}),T.jsx("h2",{children:f.title}),T.jsx("p",{className:"detail-meta",children:[f.author,f.yield,f.prepTime&&`Prep ${f.prepTime}`,f.cookTime&&`Cook ${f.cookTime}`,f.totalTime&&`Total ${f.totalTime}`].filter(Boolean).join(" • ")})]}),f.image?T.jsx("div",{className:"recipe-image-frame",children:T.jsx("img",{className:"recipe-image",src:f.image,alt:f.title,loading:"lazy"})}):null]}),f.description.length?T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Description"}),f.description.map(z=>T.jsx("p",{children:z},z))]}):null,T.jsxs("div",{className:"detail-grid",children:[T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Ingredients"}),T.jsx("ul",{className:"ingredient-list",children:f.ingredients.map(z=>T.jsx("li",{children:z},z))})]}),T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Instructions"}),T.jsx("ol",{className:"instruction-list",children:f.instructions.map(z=>T.jsx("li",{children:z},z))})]})]}),f.notes.length?T.jsxs("section",{className:"content-section",children:[T.jsx("h3",{children:"Notes"}),f.notes.map(z=>T.jsx("p",{children:z},z))]}):null,T.jsxs("footer",{className:"detail-footer",children:[T.jsxs("div",{className:"chips",children:[f.categories.map(z=>T.jsx("span",{className:"chip static",children:z},z)),f.tags.map(z=>T.jsx("span",{className:"chip static",children:z},z))]}),T.jsxs("p",{className:"source-line",children:[f.source?T.jsx("a",{href:f.source,target:"_blank",rel:"noreferrer",children:"Original source"}):"No source URL",f.dateSaved?` • Saved ${f.dateSaved}`:""]})]})]})}function s1(){return T.jsxs("article",{className:"empty-library",children:[T.jsx("h2",{children:"Recipe not found"}),T.jsx("p",{children:"The requested recipe could not be found. Return to the library to choose another one."}),T.jsx("a",{className:"back-link",href:Ai,children:"Back to Library"})]})}function Ru(){return T.jsxs("section",{className:"install-help",children:[T.jsx("h2",{children:"Install Stovetop"}),T.jsx("p",{children:"On iPhone or iPad, open the browser share menu and choose Add to Home Screen."}),T.jsx("p",{children:"When installed from a proper HTTPS site, Stovetop opens as its own app window instead of a normal browser tab."})]})}function qu(){const f=window.location.hash||Ai;return f.startsWith(yl)?{type:"recipe",recipeId:decodeURIComponent(f.slice(yl.length))}:{type:"list"}}function r1(f){return`${yl}${encodeURIComponent(f)}`}function l1(){window.scrollTo({top:0,left:0,behavior:"auto"})}function c1(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function d1(){const f=window.navigator.userAgent||"";return/iPad|iPhone|iPod/.test(f)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1}function Ou(f,z){const A=new Map;for(const u of f)for(const x of u[z]||[])A.set(x,(A.get(x)||0)+1);return[...A.entries()].map(([u,x])=>({value:u,count:x})).sort((u,x)=>x.count-u.count||u.value.localeCompare(x.value))}Tm({immediate:!0});vm.createRoot(document.getElementById("root")).render(T.jsx(um.StrictMode,{children:T.jsx(i1,{})}));
