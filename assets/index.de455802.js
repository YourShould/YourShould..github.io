import{g as L,h as S}from"./moment.203bb257.js";import{u as N}from"./detail.1b2df0fa.js";import{e as O,d as b,u as y,r as R,o as U,c as o,a as s,b as I,i as V,_ as C}from"./index.2ad7c3cf.js";import{u as E}from"./setting.8c3d5d85.js";const j=O("new",{state:()=>({page:window.localStorage.getItem("newPageNum")||1})});function F(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!V(r)}const J=b({setup(){const r=N(),l=E(),c=y(),u=j(),a=R({currentPage:+u.page,total:999,list:[],allData:[]}),{DEV:d}={BASE_URL:"/YourShould..github.io/",MODE:"production",DEV:!1,PROD:!0},g=10;let i=JSON.parse(window.localStorage.getItem("read")||"[]");U(()=>{D()});const _=e=>{let t=e.split("/");return t[2]?t=t[2]:t="",t},w=()=>{var e;l.domain&&((e=a.allData)==null||e.forEach(t=>{var n;t.imgURL=(n=t.imgURL)==null?void 0:n.replace(_(t.imgURL),l.domain)}))},D=()=>{L().then(e=>{const t=JSON.parse(decodeURIComponent(e.data));a.allData=t.sort(v("date","desc")),w(),a.total=a.allData.length,m()})},m=()=>{const e=(a.currentPage-1)*g;a.list=a.allData.slice(e,a.currentPage*g),u.page=a.currentPage,window.localStorage.setItem("newPageNum",a.currentPage)},h=e=>{r.item=e,window.sessionStorage.setItem("item",JSON.stringify(e));const{title:t}=e,n=t.split("_")[0];i.push(n),i=Array.from(new Set(i)),window.localStorage.setItem("read",JSON.stringify(i)),c.push({name:"detail"})},v=(e,t="desc")=>(n,P)=>{const p=S(n[e]).valueOf(),f=S(P[e]).valueOf();return t==="desc"?p-f:f-p},x=e=>{const t=e.split("_");return i.some(n=>n===t[0])};return()=>{let e;return o("div",{class:"flexbox column box"},[o(s("van-nav-bar"),{title:"\u6700\u65B0","left-text":"\u8FD4\u56DE","left-arrow":!0,onClickLeft:()=>c.go(-1)},null),o("div",{class:"flex content"},[o(s("van-grid"),{border:!1,"column-num":2},F(e=a.list.map(t=>o(s("van-grid-item"),{onClick:()=>h(t)},{default:()=>[o(s("van-image"),{class:"img",src:d?"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg":t.imgURL},null),o("p",{class:"title"},[x(t.title)&&o(s("van-tag"),{class:"mr10",plain:!0,type:"warning"},{default:()=>[I("\u5DF2\u9605")]}),d?t.title2:t.title]),o("div",{class:"date"},[t.date])]})))?e:{default:()=>[e]})]),o(s("van-pagination"),{modelValue:a.currentPage,"onUpdate:modelValue":t=>a.currentPage=t,"total-items":a.total,"show-page-size":5,"force-ellipses":!0,onChange:m},null)])}}});const M=C(J,[["__scopeId","data-v-afc06d36"]]);export{M as default};
