import{c as i,b as x,e as h,u as C}from"./use-translate.8b8ccbb1.js";import{t as P,w as c}from"./with-install.994557f3.js";import{z as u,e as l,C as s}from"./vue-libs.bf80eadf.js";import{u as S}from"./use-expose.6f045672.js";import{r as y,u as I}from"./use-route.9fd68ea8.js";import{B as _}from"./index.7164eac0.js";const[p,N]=i("action-bar"),m=Symbol(p),k={safeAreaInsetBottom:P};var w=u({name:p,props:k,setup(n,{slots:e}){const{linkChildren:a}=x(m);return a(),()=>{var o;return l("div",{class:[N(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(o=e.default)==null?void 0:o.call(e)])}}});const Y=c(w),[z,E]=i("action-bar-button"),R=h({},y,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var $=u({name:z,props:R,setup(n,{slots:e}){const a=I(),{parent:o,index:r}=C(m),d=s(()=>{if(o){const t=o.children[r.value-1];return!(t&&"isButton"in t)}}),B=s(()=>{if(o){const t=o.children[r.value+1];return!(t&&"isButton"in t)}});return S({isButton:!0}),()=>{const{type:t,icon:f,text:b,color:v,loading:A,disabled:g}=n;return l(_,{class:E([t,{last:B.value,first:d.value}]),size:"large",type:t,icon:f,color:v,loading:A,disabled:g,onClick:a},{default:()=>[e.default?e.default():b]})}}});const j=c($);export{m as A,Y as a,j as b};