!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("fuse.js")):"function"==typeof define&&define.amd?define(["fuse.js"],t):"object"==typeof exports?exports.conversorEstadoParaSiglaUf=t(require("fuse.js")):e.conversorEstadoParaSiglaUf=t(e.Fuse)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"Estado",function(){return i}),r.d(t,"UF",function(){return c}),r.d(t,"converterEstado",function(){return a}),r.d(t,"closest",function(){return A});var n=r(1),o=r.n(n),u=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(2),c=Object.entries(i).reduce(function(e,t){var r=u(t,2),n=r[0];return e[r[1]]=n,e},{}),f=(Object.keys(i),Object.values(i)),a=function(){var e=function(e){return t(e).toUpperCase()},t=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},r=f.map(function(t){return[e(t),c[t]]});return function(t){return r.find(function(r){return e(t)===r[0]})[1]}}(),A=function(){var e={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1},t=new o.a(f,e);return function(e){return t.search(e).map(function(e){return c[f[e]]})[0]}}()},function(t,r){t.exports=e},function(e,t){e.exports={AC:"ACRE",AL:"ALAGOAS",AP:"AMAPÁ",AM:"AMAZONAS",BA:"BAHIA",CE:"CEARÁ",DF:"DISTRITO FEDERAL",ES:"ESPÍRITO SANTO",GO:"GOIÁS",MA:"MARANHÃO",MT:"MATO GROSSO",MS:"MATO GROSSO DO SUL",MG:"MINAS GERAIS",PA:"PARÁ",PB:"PARAÍBA",PR:"PARANÁ",PE:"PERNAMBUCO",PI:"PIAUÍ",RJ:"RIO DE JANEIRO",RN:"RIO GRANDE DO NORTE",RS:"RIO GRANDE DO SUL",RO:"RONDÔNIA",RR:"RORAIMA",SC:"SANTA CATARINA",SP:"SÃO PAULO",SE:"SERGIPE",TO:"TOCANTINS"}}])});