(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return a},default:function(){return u}});let r=n(8754),o=(n(7294),r._(n(8976)));function i(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){let n=o.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let u=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=u?u().then(i):Promise.resolve(i(()=>null))}):(delete r.webpack,delete r.modules,a(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let r=n(8754),o=r._(n(7294)),i=o.default.createContext(null)},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),o=r._(n(7294)),i=n(2254),a=[],u=[],s=!1;function l(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){let t=new c(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!s){let e=n.webpack?n.webpack():n.modules;e&&u.push(t=>{for(let n of e)if(t.includes(n))return a()})}function l(e,t){!function(){a();let e=o.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let u=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>{var t;return u.loading||u.error?o.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?o.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return l.preload=()=>a(),l.displayName="LoadableComponent",o.default.forwardRef(l)}(l,e)}function f(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return f(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{f(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(s=!0,t());f(u,e).then(n,n)})),window.__NEXT_PRELOADREADY=d.preloadReady;let y=d},5152:function(e,t,n){e.exports=n(5677)},9929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Unity=void 0;var r=n(7294),o=n(7294),i=n(25),a=n(5421),u=n(8396),s=n(2340),l=(0,o.forwardRef)(function(e,t){var n=(0,o.useRef)(null),l=(0,i.useUnityCanvasId)(),c=(0,u.useUnityArguments)(e),d=(0,s.useUnityLoader)(e.unityProvider.unityConfig.loaderUrl);return(0,a.useUnityInstance)(d,n.current,c,e.unityProvider),(0,r.useImperativeHandle)(t,function(){return n.current}),(0,r.createElement)("canvas",{ref:n,id:l,style:e.style,className:e.className,tabIndex:e.tabIndex})});t.Unity=l},9090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=void 0,t.errorMessages={genericNoUnityInstance:"No Unity Instance found.",requestFullscreenNoUnityInstance:"Unable to Set Fullscreen while Unity is not Instantiated.",requestPointerLockNoUnityInstanceOrCanvas:"Unable to Request Pointer Lock while Unity is not Instantiated or the Canvas is not found.",sendMessageNoUnityInstance:"Unable to Send Message while Unity is not Instantiated.",quitNoUnityInstance:"Unable to Quit Unity while Unity is not Instantiated.",screenshotNoUnityInstanceOrCanvas:"Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.",noEventListener:"Unable to find Event Listener in Event System for Event"}},1539:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowserEnvironment=void 0,t.isBrowserEnvironment="undefined"!=typeof window&&"undefined"!=typeof document},3896:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),t.UnityLoaderStatus=void 0,(r=n||(n={})).Idle="Idle",r.Loading="Loading",r.Loaded="Loaded",r.Error="Error",t.UnityLoaderStatus=n},7442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityContext=t.Unity=void 0;var r=n(9929);Object.defineProperty(t,"Unity",{enumerable:!0,get:function(){return r.Unity}});var o=n(7102);Object.defineProperty(t,"useUnityContext",{enumerable:!0,get:function(){return o.useUnityContext}})},5118:function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.useEventSystem=void 0;var o=n(7294),i=n(9090),a=n(1539),u=[];!0===a.isBrowserEnvironment&&(window.dispatchReactUnityEvent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=void 0;return u.forEach(function(n){o=n.apply(void 0,r([e],t,!1))}),o}),t.useEventSystem=function(){var e=(0,o.useRef)([]),t=(0,o.useCallback)(function(t,n){e.current=r(r([],e.current,!0),[{eventName:t,callback:n}],!1)},[e]),n=(0,o.useCallback)(function(t,n){e.current=e.current.filter(function(e){return e.eventName!==t&&e.callback!==n})},[e]),a=(0,o.useCallback)(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=e.current.find(function(e){return e.eventName===t});if(void 0===o){console.warn(i.errorMessages.noEventListener,{eventName:t});return}return o.callback.apply(o,n)},[e]);return(0,o.useEffect)(function(){return u.push(a),function(){u.splice(u.indexOf(a),1)}},[a]),{addEventListener:t,removeEventListener:n}}},2345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useNullableState=void 0;var r=n(7294);t.useNullableState=function(e){return(0,r.useState)(e||null)}},8396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityArguments=void 0;var r=n(7294);t.useUnityArguments=function(e){return(0,r.useMemo)(function(){return{dataUrl:e.unityProvider.unityConfig.dataUrl,frameworkUrl:e.unityProvider.unityConfig.frameworkUrl,codeUrl:e.unityProvider.unityConfig.codeUrl,streamingAssetsUrl:e.unityProvider.unityConfig.streamingAssetsUrl,memoryUrl:e.unityProvider.unityConfig.memoryUrl,symbolsUrl:e.unityProvider.unityConfig.symbolsUrl,companyName:e.unityProvider.unityConfig.companyName,productName:e.unityProvider.unityConfig.productName,productVersion:e.unityProvider.unityConfig.productVersion,webglContextAttributes:e.unityProvider.unityConfig.webglContextAttributes||{},cacheControl:e.unityProvider.unityConfig.cacheControl||function(){return"must-revalidate"},devicePixelRatio:e.devicePixelRatio||1,matchWebGLToCanvasSize:e.matchWebGLToCanvasSize||!0,disabledCanvasEvents:e.disabledCanvasEvents||["contextmenu","dragstart"],print:function(e){},printErr:function(e){}}},[])}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityCanvasId=void 0;var r=n(7294),o=0;t.useUnityCanvasId=function(){return(0,r.useMemo)(function(){return["react-unity-webgl-canvas",++o].join("-")},[])}},7102:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,u)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityContext=void 0;var i=n(7294),a=n(9090),u=n(5118),s=n(2345);t.useUnityContext=function(e){var t=(0,s.useNullableState)(),n=t[0],l=t[1],c=(0,i.useState)(0),d=c[0],f=c[1],y=(0,i.useState)(!1),v=y[0],p=y[1],b=(0,s.useNullableState)(),h=b[0],m=b[1],_=(0,u.useEventSystem)(),g=(0,i.useRef)({setLoadingProgression:f,setInitialisationError:m,setUnityInstance:l,setIsLoaded:p,unityConfig:e}),U=(0,i.useCallback)(function(e){if(null===n){console.warn(a.errorMessages.requestFullscreenNoUnityInstance);return}n.SetFullscreen(!0===e?1:0)},[n]),w=(0,i.useCallback)(function(){if(null===n||void 0===n.Module.canvas){console.warn(a.errorMessages.requestPointerLockNoUnityInstanceOrCanvas);return}return n.Module.canvas.requestPointerLock()},[n]),C=(0,i.useCallback)(function(e,t,r){if(null===n){console.warn(a.errorMessages.sendMessageNoUnityInstance);return}n.SendMessage(e,t,r)},[n]),E=(0,i.useCallback)(function(e,t){if(null===n||void 0===n.Module.canvas){console.warn(a.errorMessages.screenshotNoUnityInstanceOrCanvas);return}return n.Module.canvas.toDataURL(e,t)},[n]),P=(0,i.useCallback)(function(){return null===n?(console.warn(a.errorMessages.quitNoUnityInstance),Promise.reject()):n.Quit()},[n]),L=(0,i.useCallback)(function(){return r(void 0,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:if(null===n||void 0===n.Module.canvas)return console.warn(a.errorMessages.genericNoUnityInstance),[2,Promise.reject()];return e=n.Module.canvas,document.body.appendChild(e),e.style.display="none",[4,P()];case 1:return t.sent(),e.remove(),[2]}})})},[n]);return(0,i.useEffect)(function(){p(1===d)},[d]),{unityProvider:g.current,loadingProgression:d,initialisationError:h,isLoaded:v,UNSAFE__unityInstance:n,requestFullscreen:U,requestPointerLock:w,sendMessage:C,unload:P,takeScreenshot:E,addEventListener:_.addEventListener,removeEventListener:_.removeEventListener,UNSAFE__detachAndUnloadImmediate:L}}},5421:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,u)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityInstance=void 0;var i=n(7294),a=n(3896),u=n(1539);t.useUnityInstance=function(e,t,n,s){(0,i.useEffect)(function(){r(void 0,void 0,void 0,function(){var r,i;return o(this,function(o){switch(o.label){case 0:if(!1===u.isBrowserEnvironment)return[2];if(e!==a.UnityLoaderStatus.Loaded||null===t)return s.setUnityInstance(null),s.setInitialisationError(null),[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,window.createUnityInstance(t,n,s.setLoadingProgression)];case 2:return r=o.sent(),s.setUnityInstance(r),s.setInitialisationError(null),[3,4];case 3:return i=o.sent(),s.setUnityInstance(null),s.setInitialisationError(i),[3,4];case 4:return[2]}})})},[e,t,n,s])}},2340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUnityLoader=void 0;var r=n(7294),o=n(1539),i=n(3896);t.useUnityLoader=function(e){var t=(0,r.useState)(i.UnityLoaderStatus.Loading),n=t[0],a=t[1];return(0,r.useEffect)(function(){if(!1!==o.isBrowserEnvironment){if(null===e){a(i.UnityLoaderStatus.Idle);return}var t=window.document.querySelector('script[src="'.concat(e,'"]'));null===t?((t=window.document.createElement("script")).type="text/javascript",t.src=e,t.async=!0,t.setAttribute("data-status","loading"),window.document.body.appendChild(t),t.addEventListener("load",function(){return null==t?void 0:t.setAttribute("data-status","loaded")}),t.addEventListener("error",function(){return null==t?void 0:t.setAttribute("data-status","error")})):a("loaded"===t.getAttribute("data-status")?i.UnityLoaderStatus.Loaded:i.UnityLoaderStatus.Error);var n=function(e){return a("load"===e.type?i.UnityLoaderStatus.Loaded:i.UnityLoaderStatus.Error)};return t.addEventListener("load",n),t.addEventListener("error",n),function(){null!==t&&(t.removeEventListener("load",n),t.removeEventListener("error",n),window.document.body.removeChild(t))}}},[e]),n}}}]);