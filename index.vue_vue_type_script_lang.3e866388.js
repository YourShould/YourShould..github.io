import{d as r,u as m,c as a,a as t,b as u}from"./index.fdf04471.js";const i=r({props:{value:{type:Number,default:0}},setup(o){const n=m(),s=e=>{e===0&&n.push({name:"home"}),e===1&&n.push({name:"hot"}),e===2&&n.push({name:"setting"})};return()=>a(t("van-tabbar"),{value:o.value,"onUpdate:value":e=>o.value=e,fixed:!1,onChange:s},{default:()=>[a(t("van-tabbar-item"),{icon:"new-o"},{default:()=>[u("\u6700\u65B0")]}),a(t("van-tabbar-item"),{icon:"thumb-circle-o"},{default:()=>[u("\u70ED\u95E8")]}),a(t("van-tabbar-item"),{icon:"setting-o"},{default:()=>[u("\u8BBE\u7F6E")]})]})}});export{i as _};
