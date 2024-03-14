"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[617],{4617:(e,l,a)=>{a.r(l),a.d(l,{default:()=>c});var s=a(5043),r=a(2339),n=a(3216),i=a(9269),d=a(9959),t=a(1379),o=a(579);const c=()=>{const[e,l]=(0,s.useState)(""),[a,c]=(0,s.useState)(""),[m,u]=(0,s.useState)(""),v=(0,n.Zp)(),h=(0,n.g)(),{data:f}=(0,t.ff)(null===h||void 0===h?void 0:h.id),[p,{error:j,isSuccess:x}]=(0,t.H7)();(0,s.useEffect)((()=>{var e,a,s;null!==f&&void 0!==f&&f.user&&(l(null===f||void 0===f||null===(e=f.user)||void 0===e?void 0:e.name),c(null===f||void 0===f||null===(a=f.user)||void 0===a?void 0:a.email),u(null===f||void 0===f||null===(s=f.user)||void 0===s?void 0:s.role))}),[f]),(0,s.useEffect)((()=>{var e;j&&r.oR.error(null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.message);x&&(r.oR.success("User Updated"),v("/admin/users"))}),[j,x,v]);return(0,o.jsxs)(d.A,{children:[(0,o.jsx)(i.A,{title:"Update User"}),(0,o.jsx)("div",{className:"row wrapper",children:(0,o.jsx)("div",{className:"col-10 col-lg-8",children:(0,o.jsxs)("form",{className:"shadow-lg",onSubmit:l=>{l.preventDefault();const s={name:e,email:a,role:m};p({id:null===h||void 0===h?void 0:h.id,body:s})},children:[(0,o.jsx)("h2",{className:"mb-4",children:"Update User"}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"name_field",className:"form-label",children:"Name"}),(0,o.jsx)("input",{type:"name",id:"name_field",className:"form-control",name:"name",value:e,onChange:e=>l(e.target.value)})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"email_field",className:"form-label",children:"Email"}),(0,o.jsx)("input",{type:"email",id:"email_field",className:"form-control",name:"email",value:a,onChange:e=>c(e.target.value)})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"role_field",className:"form-label",children:"Role"}),(0,o.jsxs)("select",{id:"role_field",className:"form-select",name:"role",value:m,onChange:e=>u(e.target.value),children:[(0,o.jsx)("option",{value:"user",children:"user"}),(0,o.jsx)("option",{value:"admin",children:"admin"})]})]}),(0,o.jsx)("button",{type:"submit",className:"btn update-btn w-100 py-2",children:"Update"})]})})})]})}},9959:(e,l,a)=>{a.d(l,{A:()=>n});a(5043);var s=a(2190),r=a(579);const n=e=>{let{children:l}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mt-2 mb-4 py-4",children:(0,r.jsx)("h2",{className:"text-center fw-bolder",children:"Admin Dashboard"})}),(0,r.jsxs)("div",{className:"row justify-content-around",children:[(0,r.jsx)("div",{className:"col-12 col-lg-3",children:(0,r.jsx)(s.A,{menuItems:[{name:"Dashboard",url:"/admin/dashboard",icon:"fas fa-tachometer-alt"},{name:"New Product",url:"/admin/product/new",icon:"fas fa-plus"},{name:"Products",url:"/admin/products",icon:"fab fa-product-hunt"},{name:"Orders",url:"/admin/orders",icon:"fas fa-receipt"},{name:"Users",url:"/admin/users",icon:"fas fa-user"},{name:"Reviews",url:"/admin/reviews",icon:"fas fa-star"}]})}),(0,r.jsx)("div",{className:"col-12 col-lg-8 user-dashboard",children:l})]})]})}},9269:(e,l,a)=>{a.d(l,{A:()=>n});a(5043);var s=a(1591),r=a(579);const n=e=>{let{title:l}=e;return(0,r.jsx)(s.m,{children:(0,r.jsx)("title",{children:"".concat(l," - Elite Shop")})})}},2190:(e,l,a)=>{a.d(l,{A:()=>d});var s=a(5043),r=a(3216),n=a(5475),i=a(579);const d=e=>{let{menuItems:l}=e;const a=(0,r.zy)(),[d,t]=(0,s.useState)(a.pathname);return(0,i.jsx)("div",{className:"list-group mt-5 pl-4",children:null===l||void 0===l?void 0:l.map(((e,l)=>(0,i.jsxs)(n.N_,{to:e.url,className:"fw-bold list-group-item list-group-item-action ".concat(d.includes(e.url)?"active":""),onClick:()=>{return l=e.url,void t(l);var l},"aria-current":d.includes(e.url)?"true":"false",children:[(0,i.jsx)("i",{className:"".concat(e.icon," fa-fw pe-2")})," ",e.name]},l)))})}}}]);
//# sourceMappingURL=617.d80ca4c8.chunk.js.map