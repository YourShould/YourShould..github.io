import{g as L,h as S}from"./moment.e19e169e.js";import{u as N}from"./detail.7553b181.js";import{e as O,d as b,u as y,r as R,o as U,c as o,a as s,b as I,i as V,_ as C}from"./index.4c9305dc.js";import{u as E}from"./setting.9a11b130.js";const j=O("new",{state:()=>({page:window.localStorage.getItem("newPageNum")||1})});function F(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!V(r)}const J=b({setup(){const r=N(),l=E(),c=y(),u=j(),a=R({currentPage:+u.page,total:999,list:[],allData:[]}),{DEV:d}={BASE_URL:"/YourShould..github.io/",MODE:"production",DEV:!1,PROD:!0},g=10;let i=JSON.parse(window.localStorage.getItem("read")||"[]");U(()=>{D()});const _=t=>{let e=t.split("/");return e[2]?e=e[2]:e="",e},w=()=>{var t;l.domain&&((t=a.allData)==null||t.forEach(e=>{var n;e.imgURL=(n=e.imgURL)==null?void 0:n.replace(_(e.imgURL),l.domain)}))},D=()=>{L().then(t=>{const e=JSON.parse(decodeURIComponent(t.data));a.allData=e.sort(v("date","desc")),w(),a.total=a.allData.length,m()})},m=()=>{const t=(a.currentPage-1)*g;a.list=a.allData.slice(t,a.currentPage*g),u.page=a.currentPage,window.localStorage.setItem("newPageNum",a.currentPage)},h=t=>{r.item=t,window.sessionStorage.setItem("item",JSON.stringify(t));const{title:e}=t,n=e.split("_")[0];i.push(n),i=Array.from(new Set(i)),window.localStorage.setItem("read",JSON.stringify(i)),c.push({name:"detail"})},v=(t,e="desc")=>(n,P)=>{const p=S(n[t]).valueOf(),f=S(P[t]).valueOf();return e==="desc"?p-f:f-p},x=t=>{const e=t==null?void 0:t.split("_");return i.some(n=>n===e[0])};return()=>{let t;return o("div",{class:"flexbox column box"},[o(s("van-nav-bar"),{title:"\u6700\u65B0","left-text":"\u8FD4\u56DE","left-arrow":!0,onClickLeft:()=>c.go(-1)},null),o("div",{class:"flex content"},[o(s("van-grid"),{border:!1,"column-num":2},F(t=a.list.map(e=>o(s("van-grid-item"),{onClick:()=>h(e)},{default:()=>[o(s("van-image"),{class:"img",src:d?"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg":e.imgURL},null),o("p",{class:"title"},[x(e.title)&&o(s("van-tag"),{class:"mr10",plain:!0,type:"warning"},{default:()=>[I("\u5DF2\u9605")]}),d?e.title2:e.title]),o("div",{class:"date"},[e.date])]})))?t:{default:()=>[t]})]),o(s("van-pagination"),{modelValue:a.currentPage,"onUpdate:modelValue":e=>a.currentPage=e,"total-items":a.total,"show-page-size":5,"force-ellipses":!0,onChange:m},null)])}}});const M=C(J,[["__scopeId","data-v-3883e8ff"]]);export{M as default};