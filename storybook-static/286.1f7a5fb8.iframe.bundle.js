"use strict";(self.webpackChunkmandi_frontend=self.webpackChunkmandi_frontend||[]).push([[286],{"./node_modules/@headlessui/react/dist/components/dialog/dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lG:()=>Pt,Xi:()=>ct,Lj:()=>$e,L3:()=>je});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function E(n,e,a,t){let i=(0,use_latest_value.Y)(a);(0,react.useEffect)((()=>{function r(o){i.current(o)}return(n=null!=n?n:window).addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)}),[n,e,t])}var use_is_top_layer=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");var use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_inert_others=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-inert-others.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");var use_on_disappear=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");let a=(0,react.createContext)(null);function O({children:l,node:n}){let[o,r]=(0,react.useState)(null),u=use_root_containers_b(null!=n?n:o);return react.createElement(a.Provider,{value:u},l,null===u&&react.createElement(internal_hidden.j,{features:internal_hidden.u.Hidden,ref:t=>{var i,c;if(t)for(let e of null!=(c=null==(i=(0,owner.T)(t))?void 0:i.querySelectorAll("html > *, body > *"))?c:[])if(e!==document.body&&e!==document.head&&e instanceof HTMLElement&&null!=e&&e.contains(t)){r(e);break}}}))}function use_root_containers_b(l=null){var n;return null!=(n=(0,react.useContext)(a))?n:l}var use_scroll_lock=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js"),use_server_handoff_complete=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");let e=(0,react.createContext)((()=>{}));function close_provider_u({value:o,children:t}){return react.createElement(e.Provider,{value:o},t)}var r,open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),portal_force_root=__webpack_require__("./node_modules/@headlessui/react/dist/internal/portal-force-root.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),description=__webpack_require__("./node_modules/@headlessui/react/dist/components/description/description.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_is_mounted=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js"),use_on_unmount=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js"),use_window_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-window-event.js"),use_tab_direction_a=((r=use_tab_direction_a||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function m(u,t){let e=(0,react.useRef)([]),r=(0,use_event._)(u);(0,react.useEffect)((()=>{let o=[...e.current];for(let[a,l]of t.entries())if(e.current[a]!==l){let n=r(t,o);return e.current=t,n}}),[r,...t])}var focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js");let active_element_history_r=[];!function t(n){function e(){"loading"!==document.readyState&&(n(),document.removeEventListener("DOMContentLoaded",e))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",e),e())}((()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||active_element_history_r[0]===t.target)return;let n=t.target;n=n.closest(focus_management.Uo),active_element_history_r.unshift(null!=n?n:t.target),active_element_history_r=active_element_history_r.filter((o=>null!=o&&o.isConnected)),active_element_history_r.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}));var micro_task=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function U(o){if(!o)return new Set;if("function"==typeof o)return new Set(o());let e=new Set;for(let t of o.current)t.current instanceof HTMLElement&&e.add(t.current);return e}var n,x=((n=x||{})[n.None=0]="None",n[n.InitialFocus=1]="InitialFocus",n[n.TabLock=2]="TabLock",n[n.FocusLock=4]="FocusLock",n[n.RestoreFocus=8]="RestoreFocus",n[n.AutoFocus=16]="AutoFocus",n);let $=(0,render.FX)((function Z(o,e){let t=(0,react.useRef)(null),r=(0,use_sync_refs.P)(t,e),{initialFocus:s,initialFocusFallback:a,containers:n,features:u=15,...f}=o;(0,use_server_handoff_complete.g)()||(u=0);let l=(0,use_owner.g)(t);!function w(o,{ownerDocument:e}){let t=!!(8&o),r=function D(o=!0){let e=(0,react.useRef)(active_element_history_r.slice());return m((([t],[r])=>{!0===r&&!1===t&&(0,micro_task._)((()=>{e.current.splice(0)})),!1===r&&!0===t&&(e.current=active_element_history_r.slice())}),[o,active_element_history_r,e]),(0,use_event._)((()=>{var t;return null!=(t=e.current.find((r=>null!=r&&r.isConnected)))?t:null}))}(t);m((()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,focus_management.pW)(r())}),[t]),(0,use_on_unmount.X)((()=>{t&&(0,focus_management.pW)(r())}))}(u,{ownerDocument:l});let i=function ee(o,{ownerDocument:e,container:t,initialFocus:r,initialFocusFallback:s}){let a=(0,react.useRef)(null),n=(0,use_is_top_layer.S)(!!(1&o),"focus-trap#initial-focus"),u=(0,use_is_mounted.a)();return m((()=>{if(0===o)return;if(!n)return void(null!=s&&s.current&&(0,focus_management.pW)(s.current));let f=t.current;f&&(0,micro_task._)((()=>{if(!u.current)return;let l=null==e?void 0:e.activeElement;if(null!=r&&r.current){if((null==r?void 0:r.current)===l)return void(a.current=l)}else if(f.contains(l))return void(a.current=l);if(null!=r&&r.current)(0,focus_management.pW)(r.current);else{if(16&o){if((0,focus_management.CU)(f,focus_management.BD.First|focus_management.BD.AutoFocus)!==focus_management.Me.Error)return}else if((0,focus_management.CU)(f,focus_management.BD.First)!==focus_management.Me.Error)return;if(null!=s&&s.current&&((0,focus_management.pW)(s.current),(null==e?void 0:e.activeElement)===s.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}a.current=null==e?void 0:e.activeElement}))}),[s,n,o]),a}(u,{ownerDocument:l,container:t,initialFocus:s,initialFocusFallback:a});!function te(o,{ownerDocument:e,container:t,containers:r,previousActiveElement:s}){let a=(0,use_is_mounted.a)(),n=!!(4&o);E(null==e?void 0:e.defaultView,"focus",(u=>{if(!n||!a.current)return;let f=U(r);t.current instanceof HTMLElement&&f.add(t.current);let l=s.current;if(!l)return;let i=u.target;i&&i instanceof HTMLElement?I(f,i)?(s.current=i,(0,focus_management.pW)(i)):(u.preventDefault(),u.stopPropagation(),(0,focus_management.pW)(l)):(0,focus_management.pW)(s.current)}),!0)}(u,{ownerDocument:l,container:t,containers:n,previousActiveElement:i});let R=function use_tab_direction_u(){let e=(0,react.useRef)(0);return(0,use_window_event.M)(!0,"keydown",(r=>{"Tab"===r.key&&(e.current=r.shiftKey?1:0)}),!0),e}(),g=(0,use_event._)((c=>{let m=t.current;m&&(0,match.Y)(R.current,{[use_tab_direction_a.Forwards]:()=>{(0,focus_management.CU)(m,focus_management.BD.First,{skipElements:[c.relatedTarget,a]})},[use_tab_direction_a.Backwards]:()=>{(0,focus_management.CU)(m,focus_management.BD.Last,{skipElements:[c.relatedTarget,a]})}})})),v=(0,use_is_top_layer.S)(!!(2&u),"focus-trap#tab-lock"),N=(0,use_disposables.L)(),F=(0,react.useRef)(!1),k={ref:r,onKeyDown(c){"Tab"==c.key&&(F.current=!0,N.requestAnimationFrame((()=>{F.current=!1})))},onBlur(c){if(!(4&u))return;let m=U(n);t.current instanceof HTMLElement&&m.add(t.current);let d=c.relatedTarget;d instanceof HTMLElement&&"true"!==d.dataset.headlessuiFocusGuard&&(I(m,d)||(F.current?(0,focus_management.CU)(t.current,(0,match.Y)(R.current,{[use_tab_direction_a.Forwards]:()=>focus_management.BD.Next,[use_tab_direction_a.Backwards]:()=>focus_management.BD.Previous})|focus_management.BD.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&(0,focus_management.pW)(c.target)))}};return react.createElement(react.Fragment,null,v&&react.createElement(internal_hidden.j,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:internal_hidden.u.Focusable}),(0,render.XX)({ourProps:k,theirProps:f,defaultTag:"div",name:"FocusTrap"}),v&&react.createElement(internal_hidden.j,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:internal_hidden.u.Focusable}))})),Fe=Object.assign($,{features:x});function I(o,e){for(let t of o)if(t.contains(e))return!0;return!1}var portal=__webpack_require__("./node_modules/@headlessui/react/dist/components/portal/portal.js"),use_transition=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-transition.js"),class_names=__webpack_require__("./node_modules/@headlessui/react/dist/utils/class-names.js");function le(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||(null!=(t=e.as)?t:ue)!==react.Fragment||1===react.Children.count(e.children)}let V=(0,react.createContext)(null);V.displayName="TransitionContext";var xe=(i=>(i.Visible="visible",i.Hidden="hidden",i))(xe||{});let transition_w=(0,react.createContext)(null);function M(e){return"children"in e?M(e.children):e.current.filter((({el:t})=>null!==t.current)).filter((({state:t})=>"visible"===t)).length>0}function ae(e,t){let i=(0,use_latest_value.Y)(e),l=(0,react.useRef)([]),S=(0,use_is_mounted.a)(),E=(0,use_disposables.L)(),u=(0,use_event._)(((s,r=render.mK.Hidden)=>{let n=l.current.findIndex((({el:o})=>o===s));-1!==n&&((0,match.Y)(r,{[render.mK.Unmount](){l.current.splice(n,1)},[render.mK.Hidden](){l.current[n].state="hidden"}}),E.microTask((()=>{var o;!M(l)&&S.current&&(null==(o=i.current)||o.call(i))})))})),y=(0,use_event._)((s=>{let r=l.current.find((({el:n})=>n===s));return r?"visible"!==r.state&&(r.state="visible"):l.current.push({el:s,state:"visible"}),()=>u(s,render.mK.Unmount)})),c=(0,react.useRef)([]),f=(0,react.useRef)(Promise.resolve()),p=(0,react.useRef)({enter:[],leave:[]}),m=(0,use_event._)(((s,r,n)=>{c.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter((([o])=>o!==s))),null==t||t.chains.current[r].push([s,new Promise((o=>{c.current.push(o)}))]),null==t||t.chains.current[r].push([s,new Promise((o=>{Promise.all(p.current[r].map((([R,x])=>x))).then((()=>o()))}))]),"enter"===r?f.current=f.current.then((()=>null==t?void 0:t.wait.current)).then((()=>n(r))):n(r)})),C=(0,use_event._)(((s,r,n)=>{Promise.all(p.current[r].splice(0).map((([o,R])=>R))).then((()=>{var o;null==(o=c.current.shift())||o()})).then((()=>n(r)))}));return(0,react.useMemo)((()=>({children:l,register:y,unregister:u,onStart:m,onStop:C,wait:f,chains:p})),[y,u,l,m,C,p,f])}transition_w.displayName="NestingContext";let ue=react.Fragment,Te=render.Ac.RenderStrategy;let transition_J=(0,render.FX)((function He(e,t){let{show:i,appear:l=!1,unmount:S=!0,...E}=e,u=(0,react.useRef)(null),y=le(e),c=(0,use_sync_refs.P)(...y?[u,t]:null===t?[]:[t]);(0,use_server_handoff_complete.g)();let f=(0,open_closed.O_)();if(void 0===i&&null!==f&&(i=(f&open_closed.Uw.Open)===open_closed.Uw.Open),void 0===i)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,m]=(0,react.useState)(i?"visible":"hidden"),C=ae((()=>{i||m("hidden")})),[s,r]=(0,react.useState)(!0),n=(0,react.useRef)([i]);(0,use_iso_morphic_effect.s)((()=>{!1!==s&&n.current[n.current.length-1]!==i&&(n.current.push(i),r(!1))}),[n,i]);let o=(0,react.useMemo)((()=>({show:i,appear:l,initial:s})),[i,l,s]);(0,use_on_disappear.O)(i,u,(()=>m("hidden"))),(0,use_iso_morphic_effect.s)((()=>{i?m("visible"):!M(C)&&null!==u.current&&m("hidden")}),[i,C]);let R={unmount:S},x=(0,use_event._)((()=>{var h;s&&r(!1),null==(h=e.beforeEnter)||h.call(e)})),T=(0,use_event._)((()=>{var h;s&&r(!1),null==(h=e.beforeLeave)||h.call(e)}));return react.createElement(transition_w.Provider,{value:C},react.createElement(V.Provider,{value:o},(0,render.XX)({ourProps:{...R,as:react.Fragment,children:react.createElement(de,{ref:c,...R,...E,beforeEnter:x,beforeLeave:T})},theirProps:{},defaultTag:react.Fragment,features:Te,visible:"visible"===p,name:"Transition"})))})),de=(0,render.FX)((function De(e,t){var Z,$;let{transition:i=!0,beforeEnter:l,afterEnter:S,beforeLeave:E,afterLeave:u,enter:y,enterFrom:c,enterTo:f,entered:p,leave:m,leaveFrom:C,leaveTo:s,...r}=e,n=(0,react.useRef)(null),o=le(e),R=(0,use_sync_refs.P)(...o?[n,t]:null===t?[]:[t]),x=null==(Z=r.unmount)||Z?render.mK.Unmount:render.mK.Hidden,{show:T,appear:h,initial:X}=function Ne(){let e=(0,react.useContext)(V);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[g,U]=(0,react.useState)(T?"visible":"hidden"),z=function _e(){let e=(0,react.useContext)(transition_w);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:A,unregister:I}=z;(0,use_iso_morphic_effect.s)((()=>A(n)),[A,n]),(0,use_iso_morphic_effect.s)((()=>{if(x===render.mK.Hidden&&n.current)return T&&"visible"!==g?void U("visible"):(0,match.Y)(g,{hidden:()=>I(n),visible:()=>A(n)})}),[g,n,A,I,T,x]);let j=(0,use_server_handoff_complete.g)();(0,use_iso_morphic_effect.s)((()=>{if(o&&j&&"visible"===g&&null===n.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[n,g,j,o]);let fe=X&&!h,K=h&&T&&X,G=(0,react.useRef)(!1),F=ae((()=>{G.current||(U("hidden"),I(n))}),z),Q=(0,use_event._)((B=>{G.current=!0;let L=B?"enter":"leave";F.onStart(n,L,(D=>{"enter"===D?null==l||l():"leave"===D&&(null==E||E())}))})),Y=(0,use_event._)((B=>{let L=B?"enter":"leave";G.current=!1,F.onStop(n,L,(D=>{"enter"===D?null==S||S():"leave"===D&&(null==u||u())})),"leave"===L&&!M(F)&&(U("hidden"),I(n))}));(0,react.useEffect)((()=>{o&&i||(Q(T),Y(T))}),[T,o,i]);let me=!(!i||!o||!j||fe),[,a]=(0,use_transition.p)(me,n,T,{start:Q,end:Y}),ce=(0,render.oE)({ref:R,className:(null==($=(0,class_names.x)(r.className,K&&y,K&&c,a.enter&&y,a.enter&&a.closed&&c,a.enter&&!a.closed&&f,a.leave&&m,a.leave&&!a.closed&&C,a.leave&&a.closed&&s,!a.transition&&T&&p))?void 0:$.trim())||void 0,...(0,use_transition.B)(a)}),_=0;return"visible"===g&&(_|=open_closed.Uw.Open),"hidden"===g&&(_|=open_closed.Uw.Closed),a.enter&&(_|=open_closed.Uw.Opening),a.leave&&(_|=open_closed.Uw.Closing),react.createElement(transition_w.Provider,{value:F},react.createElement(open_closed.El,{value:_},(0,render.XX)({ourProps:ce,theirProps:r,defaultTag:ue,features:Te,visible:"visible"===g,name:"Transition.Child"})))})),Ie=(0,render.FX)((function Ae(e,t){let i=null!==(0,react.useContext)(V),l=null!==(0,open_closed.O_)();return react.createElement(react.Fragment,null,!i&&l?react.createElement(transition_J,{ref:t,...e}):react.createElement(de,{ref:t,...e}))})),Xe=Object.assign(transition_J,{Child:Ie,Root:transition_J});var o,dialog_console=__webpack_require__("./node_modules/console-browserify/index.js"),Le=((o=Le||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),Oe=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(Oe||{});let he={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},dialog_w=(0,react.createContext)(null);function L(e){let t=(0,react.useContext)(dialog_w);if(null===t){let o=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,L),o}return t}function Se(e,t){return(0,match.Y)(t.type,he,e,t)}dialog_w.displayName="DialogContext";let X=(0,render.FX)((function(t,o){let a=(0,react.useId)(),{id:l=`headlessui-dialog-${a}`,open:i,onClose:p,initialFocus:d,role:s="dialog",autoFocus:c=!0,__demoMode:f=!1,unmount:D=!1,...O}=t,h=(0,react.useRef)(!1);s="dialog"===s||"alertdialog"===s?s:(h.current||(h.current=!0,dialog_console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog");let P=(0,open_closed.O_)();void 0===i&&null!==P&&(i=(P&open_closed.Uw.Open)===open_closed.Uw.Open);let u=(0,react.useRef)(null),V=(0,use_sync_refs.P)(u,o),F=(0,use_owner.g)(u),T=i?0:1,[b,q]=(0,react.useReducer)(Se,{titleId:null,descriptionId:null,panelRef:(0,react.createRef)()}),g=(0,use_event._)((()=>p(!1))),G=(0,use_event._)((r=>q({type:0,id:r}))),m=!!(0,use_server_handoff_complete.g)()&&0===T,[z,Q]=(0,portal.k2)(),Z={get current(){var r;return null!=(r=b.panelRef.current)?r:u.current}},v=use_root_containers_b(),{resolveContainers:S}=function R({defaultContainers:l=[],portals:n,mainTreeNode:o}={}){let r=(0,use_owner.g)(o),u=(0,use_event._)((()=>{var i,c;let t=[];for(let e of l)null!==e&&(e instanceof HTMLElement?t.push(e):"current"in e&&e.current instanceof HTMLElement&&t.push(e.current));if(null!=n&&n.current)for(let e of n.current)t.push(e);for(let e of null!=(i=null==r?void 0:r.querySelectorAll("html > *, body > *"))?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(o&&(e.contains(o)||e.contains(null==(c=null==o?void 0:o.getRootNode())?void 0:c.host))||t.some((m=>e.contains(m)))||t.push(e));return t}));return{resolveContainers:u,contains:(0,use_event._)((t=>u().some((i=>i.contains(t)))))}}({mainTreeNode:v,portals:z,defaultContainers:[Z]}),k=null!==P&&(P&open_closed.Uw.Closing)===open_closed.Uw.Closing;(0,use_inert_others.v)(!f&&!k&&m,{allowed:(0,use_event._)((()=>{var r,U;return[null!=(U=null==(r=u.current)?void 0:r.closest("[data-headlessui-portal]"))?U:null]})),disallowed:(0,use_event._)((()=>{var r;return[null!=(r=null==v?void 0:v.closest("body > *:not(#headlessui-portal-root)"))?r:null]}))}),(0,use_outside_click.j)(m,S,(r=>{r.preventDefault(),g()})),function use_escape_a(o,r=("undefined"!=typeof document?document.defaultView:null),t){let n=(0,use_is_top_layer.S)(o,"escape");E(r,"keydown",(e=>{n&&(e.defaultPrevented||e.key===keyboard.D.Escape&&t(e))}))}(m,null==F?void 0:F.defaultView,(r=>{r.preventDefault(),r.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur(),g()})),(0,use_scroll_lock.K)(!f&&!k&&m,F,S),(0,use_on_disappear.O)(m,u,g);let[ee,te]=(0,description.rU)(),oe=(0,react.useMemo)((()=>[{dialogState:T,close:g,setTitleId:G,unmount:D},b]),[T,b,g,G,D]),B=(0,react.useMemo)((()=>({open:0===T})),[T]),ne={ref:V,id:l,role:s,tabIndex:-1,"aria-modal":f?void 0:0===T||void 0,"aria-labelledby":b.titleId,"aria-describedby":ee,unmount:D},re=!function use_is_touch_device_f(){var t;let[e]=(0,react.useState)((()=>"undefined"!=typeof window&&"function"==typeof window.matchMedia?window.matchMedia("(pointer: coarse)"):null)),[o,c]=(0,react.useState)(null!=(t=null==e?void 0:e.matches)&&t);return(0,use_iso_morphic_effect.s)((()=>{if(e)return e.addEventListener("change",n),()=>e.removeEventListener("change",n);function n(r){c(r.matches)}}),[e]),o}(),y=x.None;return m&&!f&&(y|=x.RestoreFocus,y|=x.TabLock,c&&(y|=x.AutoFocus),re&&(y|=x.InitialFocus)),react.createElement(open_closed.$x,null,react.createElement(portal_force_root.a,{force:!0},react.createElement(portal.ZL,null,react.createElement(dialog_w.Provider,{value:oe},react.createElement(portal.Ee,{target:u},react.createElement(portal_force_root.a,{force:!1},react.createElement(te,{slot:B},react.createElement(Q,null,react.createElement(Fe,{initialFocus:d,initialFocusFallback:u,containers:S,features:y},react.createElement(close_provider_u,{value:g},(0,render.XX)({ourProps:ne,theirProps:O,slot:B,defaultTag:dialog_Ie,features:Me,visible:0===T,name:"Dialog"})))))))))))})),dialog_Ie="div",Me=render.Ac.RenderStrategy|render.Ac.Static;let We=(0,render.FX)((function we(e,t){let{transition:o=!1,open:a,...l}=e,i=(0,open_closed.O_)(),p=e.hasOwnProperty("open")||null!==i,d=e.hasOwnProperty("onClose");if(!p&&!d)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!p)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!d)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!i&&"boolean"!=typeof e.open)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if("function"!=typeof e.onClose)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return void 0===a&&!o||l.static?react.createElement(O,null,react.createElement(X,{ref:t,open:a,...l})):react.createElement(O,null,react.createElement(Xe,{show:a,transition:o,unmount:l.unmount},react.createElement(X,{ref:t,...l})))})),$e=(0,render.FX)((function ke(e,t){let o=(0,react.useId)(),{id:a=`headlessui-dialog-panel-${o}`,transition:l=!1,...i}=e,[{dialogState:p,unmount:d},s]=L("Dialog.Panel"),c=(0,use_sync_refs.P)(t,s.panelRef),f=(0,react.useMemo)((()=>({open:0===p})),[p]),O={ref:c,id:a,onClick:(0,use_event._)((u=>{u.stopPropagation()}))};return react.createElement(l?Ie:react.Fragment,{...l?{unmount:d}:{}},(0,render.XX)({ourProps:O,theirProps:i,slot:f,defaultTag:"div",name:"Dialog.Panel"}))})),ct=(0,render.FX)((function Ue(e,t){let{transition:o=!1,...a}=e,[{dialogState:l,unmount:i}]=L("Dialog.Backdrop"),p=(0,react.useMemo)((()=>({open:0===l})),[l]),d={ref:t,"aria-hidden":!0};return react.createElement(o?Ie:react.Fragment,{...o?{unmount:i}:{}},(0,render.XX)({ourProps:d,theirProps:a,slot:p,defaultTag:"div",name:"Dialog.Backdrop"}))})),je=(0,render.FX)((function dialog_Ne(e,t){let o=(0,react.useId)(),{id:a=`headlessui-dialog-title-${o}`,...l}=e,[{dialogState:i,setTitleId:p}]=L("Dialog.Title"),d=(0,use_sync_refs.P)(t);(0,react.useEffect)((()=>(p(a),()=>p(null))),[a,p]);let s=(0,react.useMemo)((()=>({open:0===i})),[i]);return(0,render.XX)({ourProps:{ref:d,id:a},theirProps:l,slot:s,defaultTag:"h2",name:"Dialog.Title"})})),Pt=Object.assign(We,{Panel:$e,Title:je,Description:description.VY})},"./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>f});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.s)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},"./node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>T,u:()=>s});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let T=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.FX)((function l(t,r){var n;let{features:d=1,...e}=t,o={ref:r,"aria-hidden":!(2&~d)||(null!=(n=e["aria-hidden"])?n:void 0),hidden:!(4&~d)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~d)&&!!(2&~d)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.XX)({ourProps:o,theirProps:e,slot:{},defaultTag:"span",name:"Hidden"})}))}}]);