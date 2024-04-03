"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[490],{89:(e,s,i)=>{i.d(s,{A:()=>c});i(5043);var l=i(5475),a=i(579);const c=e=>{let{shipping:s,confirmOrder:i,payment:c}=e;return(0,a.jsxs)("div",{className:"checkout-progress d-flex justify-content-center mt-5",children:[s?(0,a.jsxs)(l.N_,{to:"/shipping",className:"float-right",children:[(0,a.jsx)("div",{className:"triangle2-active"}),(0,a.jsx)("div",{className:"step active-step",children:"Shipping"}),(0,a.jsx)("div",{className:"triangle-active"})]}):(0,a.jsxs)(l.N_,{to:"#!",className:"float-right",disabled:!0,children:[(0,a.jsx)("div",{className:"triangle2-incomplete"}),(0,a.jsx)("div",{className:"step incomplete",children:"Shipping"}),(0,a.jsx)("div",{className:"triangle-incomplete"})]}),i?(0,a.jsxs)(l.N_,{to:"/confirm_order",className:"float-right",children:[(0,a.jsx)("div",{className:"triangle2-active"}),(0,a.jsx)("div",{className:"step active-step",children:"Confirm Order"}),(0,a.jsx)("div",{className:"triangle-active"})]}):(0,a.jsxs)(l.N_,{to:"#!",className:"float-right",disabled:!0,children:[(0,a.jsx)("div",{className:"triangle2-incomplete"}),(0,a.jsx)("div",{className:"step incomplete",children:"Confirm Order"}),(0,a.jsx)("div",{className:"triangle-incomplete"})]}),c?(0,a.jsxs)(l.N_,{to:"/payment_method",className:"float-right",children:[(0,a.jsx)("div",{className:"triangle2-active"}),(0,a.jsx)("div",{className:"step active-step",children:"Payment"}),(0,a.jsx)("div",{className:"triangle-active"})]}):(0,a.jsxs)(l.N_,{to:"#!",className:"float-right",disabled:!0,children:[(0,a.jsx)("div",{className:"triangle2-incomplete"}),(0,a.jsx)("div",{className:"step incomplete",children:"Payment"}),(0,a.jsx)("div",{className:"triangle-incomplete"})]})]})}},2490:(e,s,i)=>{i.r(s),i.d(s,{default:()=>n});i(5043);var l=i(9269),a=i(3003),c=i(5475),r=i(8651),t=i(89),d=i(579);const n=()=>{const{cartItems:e,shippingInfo:s}=(0,a.d4)((e=>e.cart)),{user:i}=(0,a.d4)((e=>e.auth)),{itemsPrice:n,shippingPrice:o,taxPrice:m,totalPrice:h}=(0,r.Q)(e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{title:"Confirm Order Info"}),(0,d.jsx)(t.A,{shipping:!0,confirmOrder:!0}),(0,d.jsxs)("div",{className:"row d-flex justify-content-between",children:[(0,d.jsxs)("div",{className:"col-12 col-lg-8 mt-5 order-confirm",children:[(0,d.jsx)("h4",{className:"mb-3",children:"Shipping Info"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Name:"})," ",null===i||void 0===i?void 0:i.name]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Phone:"})," ",null===s||void 0===s?void 0:s.phoneNo]}),(0,d.jsxs)("p",{className:"mb-4",children:[(0,d.jsx)("b",{children:"Address:"})," ",null===s||void 0===s?void 0:s.address,", ",null===s||void 0===s?void 0:s.city,","," ",null===s||void 0===s?void 0:s.zipCode,", ",null===s||void 0===s?void 0:s.country]}),(0,d.jsx)("hr",{}),(0,d.jsx)("h4",{className:"mt-4",children:"Your Cart Items:"}),null===e||void 0===e?void 0:e.map((e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("hr",{}),(0,d.jsx)("div",{className:"cart-item my-1",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-4 col-lg-2",children:(0,d.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:"Laptop",height:"45",width:"65"})}),(0,d.jsx)("div",{className:"col-5 col-lg-6",children:(0,d.jsx)(c.N_,{to:"/product/".concat(e.product),children:null===e||void 0===e?void 0:e.name})}),(0,d.jsx)("div",{className:"col-4 col-lg-4 mt-4 mt-lg-0",children:(0,d.jsxs)("p",{children:[null===e||void 0===e?void 0:e.quantity," x $",null===e||void 0===e?void 0:e.price," ="," ",(0,d.jsxs)("b",{children:["$",((null===e||void 0===e?void 0:e.quantity)*e.price).toFixed(2)]})]})})]})}),(0,d.jsx)("hr",{})]})))]}),(0,d.jsx)("div",{className:"col-12 col-lg-3 my-4",children:(0,d.jsxs)("div",{id:"order_summary",children:[(0,d.jsx)("h4",{children:"Order Summary"}),(0,d.jsx)("hr",{}),(0,d.jsxs)("p",{children:["Subtotal:"," ",(0,d.jsxs)("span",{className:"order-summary-values",children:["$",n]})]}),(0,d.jsxs)("p",{children:["Shipping:"," ",(0,d.jsxs)("span",{className:"order-summary-values",children:["$",o]})]}),(0,d.jsxs)("p",{children:["Tax: ",(0,d.jsxs)("span",{className:"order-summary-values",children:["$",m]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("p",{children:["Total: ",(0,d.jsxs)("span",{className:"order-summary-values",children:["$",h]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(c.N_,{to:"/payment_method",id:"checkout_btn",className:"btn btn-primary w-100",children:"Proceed to Payment"})]})})]})]})}},8651:(e,s,i)=>{i.d(s,{Q:()=>a,c:()=>l});const l=(e,s,i)=>{const l=e.has(s);return i&&l?e.set(s,i):i?e.append(s,i):l&&e.delete(s),e},a=e=>{const s=null===e||void 0===e?void 0:e.reduce(((e,s)=>e+s.price*s.quantity),0),i=s>200?0:25,l=Number((.15*s).toFixed(2)),a=(s+i+l).toFixed(2);return{itemsPrice:Number(s).toFixed(2),shippingPrice:i,taxPrice:l,totalPrice:a}}},9269:(e,s,i)=>{i.d(s,{A:()=>c});i(5043);var l=i(1591),a=i(579);const c=e=>{let{title:s}=e;return(0,a.jsx)(l.m,{children:(0,a.jsx)("title",{children:"".concat(s," - Elite Shop")})})}}}]);
//# sourceMappingURL=490.d7f70e36.chunk.js.map