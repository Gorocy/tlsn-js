!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var _=e();for(var t in _)("object"==typeof exports?exports:n)[t]=_[t]}}(this,(()=>(()=>{"use strict";var n={45:(n,e,_)=>{n.exports=_.p+"08ca4b1d05d61b448ac0.wasm"},377:(n,e,_)=>{let t,r;const o=new Array(128).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let c=0,b=null;function a(){return null!==b&&b.buffer===r.memory.buffer||(b=new Uint8Array(r.memory.buffer)),b}const u="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},f=function(n,e){const _=u.encode(n);return e.set(_),{read:n.length,written:_.length}};function w(n,e,_){if(void 0===_){const _=u.encode(n),t=e(_.length,1)>>>0;return a().subarray(t,t+_.length).set(_),c=_.length,t}let t=n.length,r=e(t,1)>>>0;const o=a();let i=0;for(;i<t;i++){const e=n.charCodeAt(i);if(e>127)break;o[r+i]=e}if(i!==t){0!==i&&(n=n.slice(i)),r=_(r,t,t=i+3*n.length,1)>>>0;const e=a().subarray(r+i,r+t);i+=f(n,e).written,r=_(r,t,i,1)>>>0}return c=i,r}function s(n){return null==n}let g=null;function d(){return null!==g&&g.buffer===r.memory.buffer||(g=new Int32Array(r.memory.buffer)),g}let l=o.length;function y(n){const e=i(n);return function(n){n<132||(o[n]=l,l=n)}(n),e}const p="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};function m(n,e){return n>>>=0,p.decode(a().slice(n,n+e))}function h(n){l===o.length&&o.push(o.length+1);const e=l;return l=o[e],o[e]=n,e}"undefined"!=typeof TextDecoder&&p.decode();let v=null,A=null;function k(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let _="[";e>0&&(_+=k(n[0]));for(let t=1;t<e;t++)_+=", "+k(n[t]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(n));let t;if(!(_.length>1))return toString.call(n);if(t=_[1],"Object"==t)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:t}const x="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>{r.__wbindgen_export_3.get(n.dtor)(n.a,n.b)}));function R(n,e,_,t){const o={a:n,b:e,cnt:1,dtor:_},i=(...n)=>{o.cnt++;const e=o.a;o.a=0;try{return t(e,o.b,...n)}finally{0==--o.cnt?(r.__wbindgen_export_3.get(o.dtor)(e,o.b),x.unregister(o)):o.a=e}};return i.original=o,x.register(i,o,o),i}function z(n,e){r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h55b2cafb95688ebd(n,e)}function F(n,e,_){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd2e6f08741139974(n,e,h(_))}function j(n,e,_){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6f377bea5980efdf(n,e,h(_))}function M(n,e,_){r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h71d6551dc02f3cc7(n,e,h(_))}function O(n,e){return n>>>=0,a().subarray(n/1,n/1+e)}function S(n,e){const _=e(1*n.length,1)>>>0;return a().set(n,_/1),c=n.length,_}function W(n,e){try{return n.apply(this,e)}catch(n){r.__wbindgen_exn_store(h(n))}}const T="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>r.__wbg_notarizedsession_free(n>>>0)));class E{static __wrap(n){n>>>=0;const e=Object.create(E.prototype);return e.__wbg_ptr=n,T.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,T.unregister(this),n}free(){const n=this.__destroy_into_raw();r.__wbg_notarizedsession_free(n)}proof(n){try{const t=r.__wbindgen_add_to_stack_pointer(-16);r.notarizedsession_proof(t,this.__wbg_ptr,h(n));var e=d()[t/4+0],_=d()[t/4+1];if(d()[t/4+2])throw y(_);return q.__wrap(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}transcript(){return y(r.notarizedsession_transcript(this.__wbg_ptr))}serialize(){try{const t=r.__wbindgen_add_to_stack_pointer(-16);r.notarizedsession_serialize(t,this.__wbg_ptr);var n=d()[t/4+0],e=d()[t/4+1],_=O(n,e).slice();return r.__wbindgen_free(n,1*e,1),_}finally{r.__wbindgen_add_to_stack_pointer(16)}}static deserialize(n){try{const t=r.__wbindgen_add_to_stack_pointer(-16),o=S(n,r.__wbindgen_malloc),i=c;r.notarizedsession_deserialize(t,o,i);var e=d()[t/4+0],_=d()[t/4+1];if(d()[t/4+2])throw y(_);return E.__wrap(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}}"undefined"==typeof FinalizationRegistry||new FinalizationRegistry((n=>r.__wbg_prover_free(n>>>0)));const U="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>r.__wbg_tlsproof_free(n>>>0)));class q{static __wrap(n){n>>>=0;const e=Object.create(q.prototype);return e.__wbg_ptr=n,U.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,U.unregister(this),n}free(){const n=this.__destroy_into_raw();r.__wbg_tlsproof_free(n)}serialize(){try{const t=r.__wbindgen_add_to_stack_pointer(-16);r.tlsproof_serialize(t,this.__wbg_ptr);var n=d()[t/4+0],e=d()[t/4+1],_=O(n,e).slice();return r.__wbindgen_free(n,1*e,1),_}finally{r.__wbindgen_add_to_stack_pointer(16)}}static deserialize(n){try{const t=r.__wbindgen_add_to_stack_pointer(-16),o=S(n,r.__wbindgen_malloc),i=c;r.tlsproof_deserialize(t,o,i);var e=d()[t/4+0],_=d()[t/4+1];if(d()[t/4+2])throw y(_);return q.__wrap(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}verify(n){try{const t=this.__destroy_into_raw(),o=r.__wbindgen_add_to_stack_pointer(-16);r.tlsproof_verify(o,t,h(n));var e=d()[o/4+0],_=d()[o/4+1];if(d()[o/4+2])throw y(_);return y(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}}"undefined"==typeof FinalizationRegistry||new FinalizationRegistry((n=>r.__wbg_verifier_free(n>>>0)));const C="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>r.__wbg_wbg_rayon_poolbuilder_free(n>>>0)));class I{static __wrap(n){n>>>=0;const e=Object.create(I.prototype);return e.__wbg_ptr=n,C.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,C.unregister(this),n}free(){const n=this.__destroy_into_raw();r.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){r.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function B(){const n={wbg:{}};return n.wbg.__wbg_notarizedsession_new=function(n){return h(E.__wrap(n))},n.wbg.__wbindgen_string_get=function(n,e){const _=i(e),t="string"==typeof _?_:void 0;var o=s(t)?0:w(t,r.__wbindgen_malloc,r.__wbindgen_realloc),b=c;d()[n/4+1]=b,d()[n/4+0]=o},n.wbg.__wbindgen_object_drop_ref=function(n){y(n)},n.wbg.__wbindgen_is_object=function(n){const e=i(n);return"object"==typeof e&&null!==e},n.wbg.__wbindgen_error_new=function(n,e){return h(new Error(m(n,e)))},n.wbg.__wbindgen_boolean_get=function(n){const e=i(n);return"boolean"==typeof e?e?1:0:2},n.wbg.__wbindgen_is_bigint=function(n){return"bigint"==typeof i(n)},n.wbg.__wbindgen_number_get=function(n,e){const _=i(e),t="number"==typeof _?_:void 0;(null!==v&&v.buffer===r.memory.buffer||(v=new Float64Array(r.memory.buffer)),v)[n/8+1]=s(t)?0:t,d()[n/4+0]=!s(t)},n.wbg.__wbindgen_in=function(n,e){return i(n)in i(e)},n.wbg.__wbindgen_bigint_from_i64=function(n){return h(n)},n.wbg.__wbindgen_jsval_eq=function(n,e){return i(n)===i(e)},n.wbg.__wbindgen_bigint_from_u64=function(n){return h(BigInt.asUintN(64,n))},n.wbg.__wbindgen_is_undefined=function(n){return void 0===i(n)},n.wbg.__wbindgen_object_clone_ref=function(n){return h(i(n))},n.wbg.__wbindgen_is_string=function(n){return"string"==typeof i(n)},n.wbg.__wbindgen_cb_drop=function(n){const e=y(n).original;return 1==e.cnt--&&(e.a=0,!0)},n.wbg.__wbindgen_string_new=function(n,e){return h(m(n,e))},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return h(new Error)},n.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const _=w(i(e).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),t=c;d()[n/4+1]=t,d()[n/4+0]=_},n.wbg.__wbg_error_f851667af71bcfc6=function(n,e){let _,t;try{_=n,t=e,console.error(m(n,e))}finally{r.__wbindgen_free(_,t,1)}},n.wbg.__wbindgen_number_new=function(n){return h(n)},n.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=function(n){queueMicrotask(i(n))},n.wbg.__wbindgen_link_fc1eedd35dc7e0a6=function(n){const e=w("data:application/javascript,"+encodeURIComponent("onmessage = function (ev) {\n            let [ia, index, value] = ev.data;\n            ia = new Int32Array(ia.buffer);\n            let result = Atomics.wait(ia, index, value);\n            postMessage(result);\n        };\n        "),r.__wbindgen_malloc,r.__wbindgen_realloc),_=c;d()[n/4+1]=_,d()[n/4+0]=e},n.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=function(n){return h(i(n).queueMicrotask)},n.wbg.__wbindgen_is_function=function(n){return"function"==typeof i(n)},n.wbg.__wbg_waitAsync_5d743fc9058ba01a=function(){return h(Atomics.waitAsync)},n.wbg.__wbg_waitAsync_46d5c36955b71a79=function(n,e,_){return h(Atomics.waitAsync(i(n),e,_))},n.wbg.__wbg_async_19c0400d97cc72fe=function(n){return i(n).async},n.wbg.__wbg_value_571d60108110e917=function(n){return h(i(n).value)},n.wbg.__wbg_timeOrigin_5c8b9e35719de799=function(n){return i(n).timeOrigin},n.wbg.__wbg_performance_a1b8bde2ee512264=function(n){return h(i(n).performance)},n.wbg.__wbg_now_abd80e969af37148=function(n){return i(n).now()},n.wbg.__wbg_debug_5fb96680aecf5dc8=function(n){console.debug(i(n))},n.wbg.__wbg_debug_7d879afce6cf56cb=function(n,e,_,t){console.debug(i(n),i(e),i(_),i(t))},n.wbg.__wbg_error_8e3928cfb8a43e2b=function(n){console.error(i(n))},n.wbg.__wbg_error_696630710900ec44=function(n,e,_,t){console.error(i(n),i(e),i(_),i(t))},n.wbg.__wbg_info_530a29cb2e4e3304=function(n){console.info(i(n))},n.wbg.__wbg_info_80803d9a3f0aad16=function(n,e,_,t){console.info(i(n),i(e),i(_),i(t))},n.wbg.__wbg_warn_63bbae1730aead09=function(n){console.warn(i(n))},n.wbg.__wbg_warn_5d3f783b0bae8943=function(n,e,_,t){console.warn(i(n),i(e),i(_),i(t))},n.wbg.__wbg_instanceof_Blob_83ad3dd4c9c406f0=function(n){let e;try{e=i(n)instanceof Blob}catch(n){e=!1}return e},n.wbg.__wbg_data_3ce7c145ca4fbcdc=function(n){return h(i(n).data)},n.wbg.__wbg_code_bddcff79610894cf=function(n){return i(n).code},n.wbg.__wbg_url_1ac02c9add50c527=function(n,e){const _=w(i(e).url,r.__wbindgen_malloc,r.__wbindgen_realloc),t=c;d()[n/4+1]=t,d()[n/4+0]=_},n.wbg.__wbg_readyState_1c157e4ea17c134a=function(n){return i(n).readyState},n.wbg.__wbg_setonopen_ce7a4c51e5cf5788=function(n,e){i(n).onopen=i(e)},n.wbg.__wbg_setonerror_39a785302b0cd2e9=function(n,e){i(n).onerror=i(e)},n.wbg.__wbg_setonclose_b9929b1c1624dff3=function(n,e){i(n).onclose=i(e)},n.wbg.__wbg_setonmessage_2af154ce83a3dc94=function(n,e){i(n).onmessage=i(e)},n.wbg.__wbg_setbinaryType_b0cf5103cd561959=function(n,e){i(n).binaryType=y(e)},n.wbg.__wbg_new_6c74223c77cfabad=function(){return W((function(n,e){return h(new WebSocket(m(n,e)))}),arguments)},n.wbg.__wbg_newwithstrsequence_9bc178264d955680=function(){return W((function(n,e,_){return h(new WebSocket(m(n,e),i(_)))}),arguments)},n.wbg.__wbg_close_acd9532ff5c093ea=function(){return W((function(n){i(n).close()}),arguments)},n.wbg.__wbg_send_70603dff16b81b66=function(){return W((function(n,e,_){i(n).send(m(e,_))}),arguments)},n.wbg.__wbg_send_d095a7ab85cfc836=function(){return W((function(n,e){i(n).send(i(e))}),arguments)},n.wbg.__wbg_instanceof_Window_f401953a2cf86220=function(n){let e;try{e=i(n)instanceof Window}catch(n){e=!1}return e},n.wbg.__wbg_wasClean_8222e9acf5c5ad07=function(n){return i(n).wasClean},n.wbg.__wbg_code_5ee5dcc2842228cd=function(n){return i(n).code},n.wbg.__wbg_reason_5ed6709323849cb1=function(n,e){const _=w(i(e).reason,r.__wbindgen_malloc,r.__wbindgen_realloc),t=c;d()[n/4+1]=t,d()[n/4+0]=_},n.wbg.__wbg_setonmessage_503809e5bb51bd33=function(n,e){i(n).onmessage=i(e)},n.wbg.__wbg_new_d1187ae36d662ef9=function(){return W((function(n,e){return h(new Worker(m(n,e)))}),arguments)},n.wbg.__wbg_postMessage_7380d10e8b8269df=function(){return W((function(n,e){i(n).postMessage(i(e))}),arguments)},n.wbg.__wbg_crypto_1d1f22824a6a080c=function(n){return h(i(n).crypto)},n.wbg.__wbg_process_4a72847cc503995b=function(n){return h(i(n).process)},n.wbg.__wbg_versions_f686565e586dd935=function(n){return h(i(n).versions)},n.wbg.__wbg_node_104a2ff8d6ea03a2=function(n){return h(i(n).node)},n.wbg.__wbg_require_cca90b1a94a0255b=function(){return W((function(){return h(module.require)}),arguments)},n.wbg.__wbg_msCrypto_eb05e62b530a1508=function(n){return h(i(n).msCrypto)},n.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return W((function(n,e){i(n).randomFillSync(y(e))}),arguments)},n.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return W((function(n,e){i(n).getRandomValues(i(e))}),arguments)},n.wbg.__wbindgen_jsval_loose_eq=function(n,e){return i(n)==i(e)},n.wbg.__wbindgen_as_number=function(n){return+i(n)},n.wbg.__wbg_String_b9412f8799faab3e=function(n,e){const _=w(String(i(e)),r.__wbindgen_malloc,r.__wbindgen_realloc),t=c;d()[n/4+1]=t,d()[n/4+0]=_},n.wbg.__wbg_getwithrefkey_edc2c8960f0f1191=function(n,e){return h(i(n)[i(e)])},n.wbg.__wbg_set_f975102236d3c502=function(n,e,_){i(n)[y(e)]=y(_)},n.wbg.__wbg_get_bd8e338fbd5f5cc8=function(n,e){return h(i(n)[e>>>0])},n.wbg.__wbg_length_cd7af8117672b8b8=function(n){return i(n).length},n.wbg.__wbg_new_16b304a2cfa7ff4a=function(){return h(new Array)},n.wbg.__wbg_newnoargs_e258087cd0daa0ea=function(n,e){return h(new Function(m(n,e)))},n.wbg.__wbg_next_40fc327bfc8770e6=function(n){return h(i(n).next)},n.wbg.__wbg_next_196c84450b364254=function(){return W((function(n){return h(i(n).next())}),arguments)},n.wbg.__wbg_done_298b57d23c0fc80c=function(n){return i(n).done},n.wbg.__wbg_value_d93c65011f51a456=function(n){return h(i(n).value)},n.wbg.__wbg_iterator_2cee6dadfd956dfa=function(){return h(Symbol.iterator)},n.wbg.__wbg_get_e3c254076557e348=function(){return W((function(n,e){return h(Reflect.get(i(n),i(e)))}),arguments)},n.wbg.__wbg_call_27c0f87801dedf93=function(){return W((function(n,e){return h(i(n).call(i(e)))}),arguments)},n.wbg.__wbg_new_72fb9a18b5ae2624=function(){return h(new Object)},n.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return W((function(){return h(self.self)}),arguments)},n.wbg.__wbg_window_c6fb939a7f436783=function(){return W((function(){return h(window.window)}),arguments)},n.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return W((function(){return h(globalThis.globalThis)}),arguments)},n.wbg.__wbg_global_207b558942527489=function(){return W((function(){return h(global.global)}),arguments)},n.wbg.__wbg_set_d4638f722068f043=function(n,e,_){i(n)[e>>>0]=y(_)},n.wbg.__wbg_isArray_2ab64d95e09ea0ae=function(n){return Array.isArray(i(n))},n.wbg.__wbg_of_6a70eed8d41f469c=function(n,e,_){return h(Array.of(i(n),i(e),i(_)))},n.wbg.__wbg_push_a5b05aedc7234f9f=function(n,e){return i(n).push(i(e))},n.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2=function(n){let e;try{e=i(n)instanceof ArrayBuffer}catch(n){e=!1}return e},n.wbg.__wbg_new_132e2fd5dfe036c3=function(n){return h(new ArrayBuffer(n>>>0))},n.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return W((function(n,e,_){return h(i(n).call(i(e),i(_)))}),arguments)},n.wbg.__wbg_instanceof_Map_87917e0a7aaf4012=function(n){let e;try{e=i(n)instanceof Map}catch(n){e=!1}return e},n.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2=function(n){return Number.isSafeInteger(i(n))},n.wbg.__wbg_now_3014639a94423537=function(){return Date.now()},n.wbg.__wbg_entries_95cc2c823b285a09=function(n){return h(Object.entries(i(n)))},n.wbg.__wbg_new_81740750da40724f=function(n,e){try{var _={a:n,b:e};const t=new Promise(((n,e)=>{const t=_.a;_.a=0;try{return function(n,e,_,t){r.wasm_bindgen__convert__closures__invoke2_mut__h0a86b19f1fa78a2d(n,e,h(_),h(t))}(t,_.b,n,e)}finally{_.a=t}}));return h(t)}finally{_.a=_.b=0}},n.wbg.__wbg_resolve_b0083a7967828ec8=function(n){return h(Promise.resolve(i(n)))},n.wbg.__wbg_then_0c86a60e8fcfe9f6=function(n,e){return h(i(n).then(i(e)))},n.wbg.__wbg_buffer_12d079cc21e14bdb=function(n){return h(i(n).buffer)},n.wbg.__wbg_new_8cccba86b0f574cb=function(n){return h(new Int32Array(i(n)))},n.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=function(n,e,_){return h(new Uint8Array(i(n),e>>>0,_>>>0))},n.wbg.__wbg_new_63b92bc8671ed464=function(n){return h(new Uint8Array(i(n)))},n.wbg.__wbg_set_a47bac70306a19a7=function(n,e,_){i(n).set(i(e),_>>>0)},n.wbg.__wbg_length_c20a40f15020d68a=function(n){return i(n).length},n.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6=function(n){let e;try{e=i(n)instanceof Uint8Array}catch(n){e=!1}return e},n.wbg.__wbg_newwithlength_e9b4878cebadb3d3=function(n){return h(new Uint8Array(n>>>0))},n.wbg.__wbg_subarray_a1f73cd4b5b42fe1=function(n,e,_){return h(i(n).subarray(e>>>0,_>>>0))},n.wbg.__wbindgen_bigint_get_as_i64=function(n,e){const _=i(e),t="bigint"==typeof _?_:void 0;(null!==A&&A.buffer===r.memory.buffer||(A=new BigInt64Array(r.memory.buffer)),A)[n/8+1]=s(t)?BigInt(0):t,d()[n/4+0]=!s(t)},n.wbg.__wbindgen_debug_string=function(n,e){const _=w(k(i(e)),r.__wbindgen_malloc,r.__wbindgen_realloc),t=c;d()[n/4+1]=t,d()[n/4+0]=_},n.wbg.__wbindgen_throw=function(n,e){throw new Error(m(n,e))},n.wbg.__wbindgen_rethrow=function(n){throw y(n)},n.wbg.__wbindgen_module=function(){return h($.__wbindgen_wasm_module)},n.wbg.__wbindgen_memory=function(){return h(r.memory)},n.wbg.__wbg_startWorkers_2ee336a9694dda13=function(n,e,r){return h(async function(n,e,r){if(0===r.numThreads())throw new Error("num_threads must be > 0.");const o={module:n,memory:e,receiver:r.receiver()};t=await Promise.all(Array.from({length:r.numThreads()},(async()=>{const n=new Worker(new URL(_.p+_.u(377),_.b),{type:void 0});return n.postMessage(o),await new Promise((e=>n.addEventListener("message",e,{once:!0}))),n}))),r.build()}(y(n),y(e),I.__wrap(r)))},n.wbg.__wbindgen_closure_wrapper3391=function(n,e,_){return h(R(n,e,1128,z))},n.wbg.__wbindgen_closure_wrapper3393=function(n,e,_){return h(R(n,e,1128,F))},n.wbg.__wbindgen_closure_wrapper3853=function(n,e,_){return h(R(n,e,1428,j))},n.wbg.__wbindgen_closure_wrapper5184=function(n,e,_){return h(R(n,e,2256,M))},n.wbg.__wbindgen_closure_wrapper5185=function(n,e,_){return h(R(n,e,2256,M))},n}async function $(n,e){if(void 0!==r)return r;void 0===n&&(n=new URL(_(45),_.b));const t=B();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),function(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:99,maximum:16384,shared:!0})}(t,e);const{instance:o,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const _=await n.arrayBuffer();return await WebAssembly.instantiate(_,e)}{const _=await WebAssembly.instantiate(n,e);return _ instanceof WebAssembly.Instance?{instance:_,module:n}:_}}(await n,t);return function(n,e){return r=n.exports,$.__wbindgen_wasm_module=e,A=null,v=null,g=null,b=null,r.__wbindgen_start(),r}(o,i)}const D=$;onmessage=async({data:{module:n,memory:e,receiver:_}})=>{await D(n,e),postMessage(!0),function(n){r.wbg_rayon_start_worker(n)}(_)}}},e={};function _(t){var r=e[t];if(void 0!==r)return r.exports;var o=e[t]={exports:{}};return n[t](o,o.exports,_),o.exports}return _.m=n,_.u=n=>n+".js",_.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),_.p="",_.b=self.location+"",_(377)})()));
//# sourceMappingURL=377.js.map