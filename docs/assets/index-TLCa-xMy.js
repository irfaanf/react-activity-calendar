import{g as P}from"./index-DRjF_FHU.js";import{N as b}from"./index-CMi5wrdH.js";var h="DARK_MODE",k=function t(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var n,a,o;if(Array.isArray(r)){if(n=r.length,n!=e.length)return!1;for(a=n;a--!==0;)if(!t(r[a],e[a]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(o=Object.keys(r),n=o.length,n!==Object.keys(e).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[a]))return!1;for(a=n;a--!==0;){var u=o[a];if(!t(r[u],e[u]))return!1}return!0}return r!==r&&e!==e};const S=P(k);function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(t)}var d;function _(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function A(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?_(Object(e),!0).forEach(function(n){C(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function C(t,r,e){return r=I(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function I(t){var r=M(t,"string");return s(r)==="symbol"?r:String(r)}function M(t,r){if(s(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r||"default");if(s(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function y(t){return L(t)||N(t)||K(t)||R()}function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(t,r){if(t){if(typeof t=="string")return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,r)}}function N(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L(t){if(Array.isArray(t))return g(t)}function g(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}const{global:U}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_CORE_EVENTS__;var j=U,q=j.document,m=j.window,T="sb-addon-themes-3";(d=m.matchMedia)===null||d===void 0||d.call(m,"(prefers-color-scheme: dark)");var v={classTarget:"body",dark:b.dark,darkClass:["dark"],light:b.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},w=function(r){m.localStorage.setItem(T,JSON.stringify(r))},x=function(r,e){var n=e.current,a=e.darkClass,o=a===void 0?v.darkClass:a,u=e.lightClass,i=u===void 0?v.lightClass:u;if(n==="dark"){var f,l;(f=r.classList).remove.apply(f,y(p(i))),(l=r.classList).add.apply(l,y(p(o)))}else{var c,O;(c=r.classList).remove.apply(c,y(p(o))),(O=r.classList).add.apply(O,y(p(i)))}},p=function(r){var e=[];return e.concat(r).map(function(n){return n})},B=function(r){var e=q.querySelector(r.classTarget);e&&x(e,r)},D=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=m.localStorage.getItem(T);if(typeof e=="string"){var n=JSON.parse(e);return r&&(r.dark&&!S(n.dark,r.dark)&&(n.dark=r.dark,w(n)),r.light&&!S(n.light,r.light)&&(n.light=r.light,w(n))),n}return A(A({},v),r)};B(D());function Y(t,r){return $(t)||W(t,r)||V(t,r)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(t,r){if(t){if(typeof t=="string")return E(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return E(t,r)}}function E(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function W(t,r){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var n,a,o,u,i=[],f=!0,l=!1;try{if(o=(e=e.call(t)).next,r!==0)for(;!(f=(n=o.call(e)).done)&&(i.push(n.value),i.length!==r);f=!0);}catch(c){l=!0,a=c}finally{try{if(!f&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw a}}return i}}function $(t){if(Array.isArray(t))return t}const{addons:G,useState:J,useEffect:F}=__STORYBOOK_MODULE_PREVIEW_API__;function X(){var t=J(D().current==="dark"),r=Y(t,2),e=r[0],n=r[1];return F(function(){var a=G.getChannel();return a.on(h,n),function(){return a.off(h,n)}},[]),e}export{h as D,X as u};
