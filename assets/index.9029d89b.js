import{g as R,h as p}from"./moment.e19e169e.js";import{d as w,r as O,u as y,o as D,c as o,a as r,b as U,F as L,i as N,_ as F}from"./index.4c9305dc.js";import{u as V}from"./detail.7553b181.js";import{_ as C}from"./index.vue_vue_type_script_lang.014ee790.js";import{u as j}from"./setting.9a11b130.js";function E(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!N(n)}const I=w({setup(){const n=V(),l=j(),a=O({list:[],active:0}),{DEV:u}={BASE_URL:"/YourShould..github.io/",MODE:"production",DEV:!1,PROD:!0};let i=JSON.parse(window.localStorage.getItem("read")||"[]");const c=y();D(()=>{_()});const g=e=>{let t=e.split("/");return t[2]?t=t[2]:t="",t},f=()=>{var e;l.domain&&((e=a.list)==null||e.forEach(t=>{var s;t.imgURL=(s=t.imgURL)==null?void 0:s.replace(g(t.imgURL),l.domain)}))},_=()=>{R().then(e=>{const t=JSON.parse(decodeURIComponent(e.data));console.log(t,123),a.list=t.sort(h("date","asc")),f()})},v=()=>{c.push({name:"new"})},S=e=>{n.item=e,window.sessionStorage.setItem("item",JSON.stringify(e));const{title:t}=e,s=t.split("_")[0];i.push(s),i=Array.from(new Set(i)),c.push({name:"detail"}),window.localStorage.setItem("read",JSON.stringify(i)),c.push({name:"detail"})},h=(e,t="desc")=>(s,x)=>{const d=p(s[e]).valueOf(),m=p(x[e]).valueOf();return t==="desc"?d-m:m-d},b=e=>{const t=e==null?void 0:e.split("_");return i.some(s=>s===t[0])};return()=>{let e;return o(L,null,[o("div",{class:"flexbox column box"},[o(r("van-nav-bar"),{title:"\u6700\u65B0","right-text":"\u66F4\u591A",onClickRight:v},null),o("div",{class:"flex content"},[o(r("van-grid"),{border:!1,"column-num":2},E(e=a.list.slice(0,10).map(t=>o(r("van-grid-item"),{onClick:()=>S(t)},{default:()=>[o(r("van-image"),{class:"img",src:u?"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg":t.imgURL},null),o("p",{class:"title"},[b(t.title)&&o(r("van-tag"),{class:"mr10",plain:!0,type:"warning"},{default:()=>[U("\u5DF2\u9605")]}),u?t.title2:t.title]),o("div",{class:"date"},[t.date])]})))?e:{default:()=>[e]})]),o(C,{modelValue:a.active,"onUpdate:modelValue":t=>a.active=t},null)])])}}});const P=F(I,[["__scopeId","data-v-53056cbc"]]);export{P as default};
