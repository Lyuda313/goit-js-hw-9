var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:n,amount:t}=e.currentTarget.elements;if(o.value<0||n.value<0||t.value<=0)return void i.Notify.warning("Please, enter valid data!");let l=Number(o.value);for(let e=1;e<=t.value;e+=1)r(e,l).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),l+=Number(n.value)}));
//# sourceMappingURL=03-promises.b50991b8.js.map
