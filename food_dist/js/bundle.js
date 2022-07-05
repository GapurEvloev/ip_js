(()=>{"use strict";function e(e){const t=document.querySelector(e);t.classList.remove("show"),t.classList.add("hide"),document.body.style.overflow="auto"}function t(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}document.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>t(".modal",o)),5e4);(function(e,t,o,n){const r=document.querySelectorAll(e),c=document.querySelectorAll(t),a=document.querySelector(o);function s(){c.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),r.forEach((e=>{e.classList.remove(n)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;c[e].classList.remove("hide"),c[e].classList.add("show","fade"),r[e].classList.add(n)}s(),i(),a.addEventListener("click",(e=>{const t=e.target;r.forEach(((e,o)=>{t&&t===e&&(s(),i(o))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(o,n,r){const c=document.querySelector(n);document.querySelectorAll(o).forEach((e=>{e.addEventListener("click",(()=>t(n,r)))})),c.addEventListener("click",(t=>{t.target!==c&&"close"!==t.target.getAttribute("data-modal")||e(n)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&c.classList.contains("show")&&e(n)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(n,r),window.removeEventListener("scroll",e))}))}("[data-modal='open']",".modal",o),function(e,t){function o(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const n=document.querySelector(e),r=n.querySelector("#days"),c=n.querySelector("#hours"),a=n.querySelector("#minutes"),s=n.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){let t,o,n,r;const c=Date.parse(e)-Date.parse(new Date);return c<=0?(t=0,o=0,n=0,r=0):(t=Math.floor(c/864e5),o=Math.floor(c/36e5%24),n=Math.floor(c/1e3/60%60),r=Math.floor(c/1e3%60)),{total:c,days:t,hours:o,minutes:n,seconds:r}}(t);r.innerHTML=o(e.days),c.innerHTML=o(e.hours),a.innerHTML=o(e.minutes),s.innerHTML=o(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)}(".timer","2022-07-11"),function(){class e{constructor(e,t){this.img=e.img,this.alt=e.alt,this.title=e.title,this.descr=e.descr,this.price=e.price,this.classes=e.classes,this.parentSelector=document.querySelector(t),this.transfer=29,this.changeToUAH()}changeToUAH(){this.price.total=this.price.total*this.transfer}render(){var e;let t=`\n        <div class="menu__item${null!==(e=this.classes)&&void 0!==e&&e.length?" "+this.classes.join(" "):""}">\n          <img src="${this.img}" alt="${this.alt}">\n          <h3 class="menu__item-subtitle">${this.title}</h3>\n          <div class="menu__item-descr">${this.descr}</div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n            <div class="menu__item-cost">${this.price.cost}:</div>\n            <div class="menu__item-total"><span>${this.price.total}</span> ${this.price.valute}</div>\n          </div>\n        </div>\n      `;this.parentSelector.innerHTML+=t}}document.querySelector(".menu__field .container").innerHTML="",(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Fetching ${e} failed, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.map((t=>{new e(t,".menu__field .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,o,n,r="female",c=1.375;function a(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("gender")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function s(){r&&t&&o&&n&&c?("female"===r&&(e.textContent=Math.round((447.6+9.2*o+3.1*t-4.3*n)*c)),"male"===r&&(e.textContent=Math.round((88.36+13.4*o+4.8*t-5.7*n)*c))):e.textContent="____"}function i(e,t){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(c=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",c)):(r=e.target.getAttribute("id"),localStorage.setItem("gender",r)),console.log(r,c),o.forEach((e=>{e.classList.remove(t)})),e.target.classList.add(t),s()}))}))}function l(e){const r=document.querySelector(e);r.addEventListener("input",(e=>{switch(r.value.match(/\D/g)?r.style.border="2px solid red":r.style.border="2px solid green",r.getAttribute("id")){case"height":t=+r.value;break;case"weight":o=+r.value;break;case"age":n=+r.value}s()}))}localStorage.getItem("gender")?r=localStorage.getItem("gender"):(r="female",localStorage.setItem("gender",r)),localStorage.getItem("ratio")?c=localStorage.getItem("ratio"):(c=1.375,localStorage.setItem("ratio",c)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),s(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(o,n){function r(o){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),t(".modal",n);const c=document.createElement("div");c.classList.add("modal__dialog"),c.innerHTML=`\n      <div class="modal__content">\n        <div data-modal="close" class="modal__close">&times;</div>\n        <div class="modal__title">${o}</div>\n      </div>\n    `,document.querySelector(".modal").append(c),setTimeout((()=>{c.remove(),r.classList.add("show"),r.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(o).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const o=document.createElement("img");o.src="img/form/spinner.svg",o.classList.add("loading"),t.querySelector("button").append(o);const n=new FormData(t);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),r("Success!"),o.remove()})).catch((()=>{r("Failure. Something went wrong...")})).finally((()=>{t.reset()}))}))}))}("form",o),function(e){let{container:t,slide:o,nextArrow:n,prevArrow:r,totalCounter:c,currentCounter:a,wrapper:s,field:i}=e;const l=document.querySelectorAll(o),d=document.querySelector(n),u=document.querySelector(r),m=document.querySelector(c),h=document.querySelector(a),g=document.querySelector(t),f=document.querySelector(s),v=document.querySelector(i),_=window.getComputedStyle(f).width;let y=1,p=0;function S(e){return+e.replace(/\D/g,"")}function L(e){e.forEach((e=>e.style.opacity=.5)),e[y-1].style.opacity=1}function w(){v.style.transform=`translateX(-${p}px)`}function E(){l.length<10?(m.textContent=`0${l.length}`,h.textContent=`0${y}`):(m.textContent=l.length,h.textContent=y)}E(),v.style.width=100*l.length+"%",l.forEach((e=>{e.style.width=_}));const q=document.createElement("ol"),b=[];q.classList.add("carousel-indicators"),g.append(q);for(let e=0;e<l.length;e++){const t=document.createElement("li");t.classList.add("dot"),t.setAttribute("data-slide-to",e+1),0===e&&(t.style.opacity=1),q.append(t),b.push(t)}u.addEventListener("click",(()=>{p===S(_)*(l.length-1)?p=0:p+=S(_),w(),y===l.length?y=1:y++,E(),L(b)})),d.addEventListener("click",(()=>{0===p?p=S(_)*(l.length-1):p-=S(_),w(),1===y?y=l.length:y--,E(),L(b)})),b.forEach((e=>{e.addEventListener("click",(t=>{const o=e.getAttribute("data-slide-to");y=o,p=S(_)*(o-1),w(),E(),L(b)}))}))}({container:".offer__slider",nextArrow:".offer__slider-prev",prevArrow:".offer__slider-next",slide:".offer__slide",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})();
//# sourceMappingURL=bundle.js.map