// eslint-disable-next-line
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=({text:e,length:t})=>e.length>=t,s=({text:e,length:t})=>e.length<=t,o=({text:e})=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(e),u=({text:e})=>/^\+\d{2}[(]\d{3}[)]\d{3}-\d{2}-\d{2}$/.test(e),l=({text:e,min:t,max:r})=>e>=t&&e<=r,a=document.querySelector(".name"),i=document.querySelector(".lastName"),c=document.querySelector(".email"),d=document.querySelector(".phone"),m=document.querySelector(".age"),v=document.querySelector(".form"),f=document.querySelector(".error-msg"),p=document.querySelector(".succes");v.addEventListener("submit",e=>{e.preventDefault();const t=[];""===a.value||null==a.value?(t.push("Name is required"),a.classList.add("error")):n({text:a.value,length:2})?s({text:a.value,length:20})?a.classList.remove("error"):(t.push("To long name"),a.classList.add("error")):(t.push("To short name"),a.classList.add("error")),""===i.value||null==i.value?(t.push("Last name is required"),i.classList.add("error")):n({text:i.value,length:2})?s({text:i.value,length:20})?i.classList.remove("error"):(t.push("To long Last name"),i.classList.add("error")):(t.push("To short Last name"),i.classList.add("error")),""===c.value||null==c.value?(t.push("Email is required"),c.classList.add("error")):o({text:c.value})?c.classList.remove("error"):(t.push("Email is not valid"),c.classList.add("error")),""===d.value||null==d.value?(t.push("Phone number is required"),d.classList.add("error")):u({text:d.value})?d.classList.remove("error"):(t.push("Phone number is not valid"),d.classList.add("error")),m.value&&(l({text:m.value,min:18,max:120})?m.classList.remove("error"):(t.push("Age is not valid"),m.classList.add("error"))),t.length>0?f.innerText=t.join(", "):(p.innerText="Validation successful!",f.innerText="")})}]);
