import{c as z,l as H,Y as O,v as D,U as I}from"./use-translate.4764287f.js";import{n as V,m as T,c as k,t as h,w as L}from"./with-install.bb994bce.js";import{e as n,z as B,C as K,D as M,x as N,j,v as E,T as _,Q as $,S as F}from"./vue-libs.7ad34eae.js";import{H as Q}from"./constant.80c6de18.js";import{u as U}from"./use-touch.79e2b006.js";import{L as Y}from"./index.eee57e92.js";const[Z,m]=z("key"),q=n("svg",{class:m("collapse-icon"),viewBox:"0 0 30 24"},[n("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),G=n("svg",{class:m("delete-icon"),viewBox:"0 0 32 22"},[n("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]),w=B({name:Z,props:{type:String,text:V,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:l,slots:r}){const c=K(!1),u=U(),v=s=>{u.start(s),c.value=!0},x=s=>{u.move(s),u.direction.value&&(c.value=!1)},f=s=>{c.value&&(r.default||H(s),c.value=!1,l("press",e.text,e.type))},d=()=>{if(e.loading)return n(Y,{class:m("loading-icon")},null);const s=r.default?r.default():e.text;switch(e.type){case"delete":return s||G;case"extra":return s||q;default:return s}};return()=>n("div",{class:m("wrapper",{wider:e.wider}),onTouchstartPassive:v,onTouchmovePassive:x,onTouchend:f,onTouchcancel:f},[n("div",{role:"button",tabindex:0,class:m([e.color,{large:e.large,active:c.value,delete:e.type==="delete"}])},[d()])])}});function J(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!$(e)}const[R,i]=z("number-keyboard"),W={show:Boolean,title:String,theme:T("default"),zIndex:V,teleport:[String,Object],maxlength:k(1/0),modelValue:T(""),transition:h,blurOnClose:h,showDeleteKey:h,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:h,safeAreaInsetBottom:h,extraKey:{type:[String,Array],default:""}};function X(e){for(let l=e.length-1;l>0;l--){const r=Math.floor(Math.random()*(l+1)),c=e[l];e[l]=e[r],e[r]=c}return e}const p=B({name:R,props:W,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:l,slots:r}){const c=K(),u=()=>{const t=Array(9).fill("").map((o,a)=>({text:a+1}));return e.randomKeyOrder&&X(t),t},v=()=>[...u(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],x=()=>{const t=u(),{extraKey:o}=e,a=Array.isArray(o)?o:[o];return a.length===1?t.push({text:0,wider:!0},{text:a[0],type:"extra"}):a.length===2&&t.push({text:a[0],type:"extra"},{text:0},{text:a[1],type:"extra"}),t},f=M(()=>e.theme==="custom"?x():v()),d=()=>{e.show&&l("blur")},s=()=>{l("close"),e.blurOnClose&&d()},C=()=>l(e.show?"show":"hide"),y=(t,o)=>{if(t===""){o==="extra"&&d();return}const a=e.modelValue;o==="delete"?(l("delete"),l("update:modelValue",a.slice(0,a.length-1))):o==="close"?s():a.length<e.maxlength&&(l("input",t),l("update:modelValue",a+t))},S=()=>{const{title:t,theme:o,closeButtonText:a}=e,g=r["title-left"],b=a&&o==="default";if(!!(t||b||g))return n("div",{class:i("header")},[g&&n("span",{class:i("title-left")},[g()]),t&&n("h2",{class:i("title")},[t]),b&&n("button",{type:"button",class:[i("close"),Q],onClick:s},[a])])},A=()=>f.value.map(t=>{const o={};return t.type==="delete"&&(o.default=r.delete),t.type==="extra"&&(o.default=r["extra-key"]),n(w,{key:t.text,text:t.text,type:t.type,wider:t.wider,color:t.color,onPress:y},o)}),P=()=>{if(e.theme==="custom")return n("div",{class:i("sidebar")},[e.showDeleteKey&&n(w,{large:!0,text:e.deleteButtonText,type:"delete",onPress:y},{delete:r.delete}),n(w,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:y},null)])};return N(()=>e.show,t=>{e.transition||l(t?"show":"hide")}),e.hideOnClickOutside&&O(c,d,{eventName:"touchstart"}),()=>{const t=S(),o=n(_,{name:e.transition?"van-slide-up":""},{default:()=>[j(n("div",{ref:c,style:D(e.zIndex),class:i({unfit:!e.safeAreaInsetBottom,"with-title":!!t}),onAnimationend:C,onTouchstartPassive:I},[t,n("div",{class:i("body")},[n("div",{class:i("keys")},[A()]),P()])]),[[E,e.show]])]});return e.teleport?n(F,{to:e.teleport},J(o)?o:{default:()=>[o]}):o}}}),ee=L(p),ce=ee;export{ce as V};