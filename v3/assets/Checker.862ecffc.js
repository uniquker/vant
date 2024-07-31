import{e as g,h as v}from"./use-translate.d2900b8c.js";import{d as P,t as S,u as k,m as z,n as D}from"./with-install.19a35764.js";import{I as x}from"./index.b70c9b40.js";import{z as y,C as B,D as r,e as t}from"./vue-libs.b44bc779.js";const I={name:k,shape:z("round"),disabled:Boolean,iconSize:D,modelValue:k,checkedColor:String,labelPosition:String,labelDisabled:Boolean},q=y({props:g({},I,{bem:P(Function),role:String,parent:Object,checked:Boolean,bindGroup:S}),emits:["click","toggle"],setup(e,{emit:s,slots:c}){const u=B(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},o=r(()=>l("disabled")||e.disabled),f=r(()=>l("direction")),h=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!o.value)return{borderColor:n,backgroundColor:n}}),C=n=>{const{target:i}=n,a=u.value,d=a===i||(a==null?void 0:a.contains(i));!o.value&&(d||!e.labelDisabled)&&s("toggle"),s("click",n)},b=()=>{const{bem:n,shape:i,checked:a}=e,d=e.iconSize||l("iconSize");return t("div",{ref:u,class:n("icon",[i,{disabled:o.value,checked:a}]),style:{fontSize:v(d)}},[c.icon?c.icon({checked:a,disabled:o.value}):t(x,{name:"success",style:h.value},null)])},m=()=>{if(c.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:o.value}])},[c.default()])};return()=>{const n=e.labelPosition==="left"?[m(),b()]:[b(),m()];return t("div",{role:e.role,class:e.bem([{disabled:o.value,"label-disabled":e.labelDisabled},f.value]),tabindex:o.value?void 0:0,"aria-checked":e.checked,onClick:C},[n])}}});export{q as C,I as c};
