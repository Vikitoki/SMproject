function DynamicAdapt(e){this.type=e}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".ibg").forEach((e=>{let t=e.querySelector("img");e.style.cssText=`\n\t\t\tbackground: url(${t.getAttribute("src")}) center no-repeat;\n\t\t\tbackground-size : cover;\n\t\t`,t.style.display="none"}));const e=document.querySelector(".header__burger"),t=document.querySelector(".intro__wrapper"),i=document.querySelector(".intro__menu"),n=document.querySelector(".intro__background"),r=document.querySelector(".header");e.addEventListener("click",(function(e){this.classList.toggle("active"),t.classList.toggle("active"),i.classList.toggle("active"),n.classList.toggle("active"),r.classList.toggle("active"),document.body.classList.toggle("lock")}));const a=document.querySelector(".main-form__input_default"),s=document.querySelector(".main-form__ways"),o=document.querySelector(".feedback");a.addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("active"),this.classList.toggle("active")})),o.addEventListener("click",(function(e){e.preventDefault(),e.target&&!e.target.closest(".main-form__select")&&s.classList.remove("active")}))})),DynamicAdapt.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-move]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],i=t.dataset.move.trim().split(","),n={};n.element=t,n.parent=t.parentNode,n.destination=document.querySelector(i[0].trim()),n.breakpoint=i[1]?i[1].trim():"767",n.place=i[2]?i[2].trim():"last",n.index=this.indexInParent(n.parent,n.element),this.оbjects.push(n)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,i){return Array.prototype.indexOf.call(i,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const i=this.mediaQueries[t],n=String.prototype.split.call(i,","),r=window.matchMedia(n[0]),a=n[1],s=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===a}));r.addListener((function(){e.mediaHandler(r,s)})),this.mediaHandler(r,s)}},DynamicAdapt.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const i=t[e];i.index=this.indexInParent(i.parent,i.element),this.moveTo(i.place,i.element,i.destination)}else for(let e=0;e<t.length;e++){const i=t[e];i.element.classList.contains(this.daClassname)&&this.moveBack(i.parent,i.element,i.index)}},DynamicAdapt.prototype.moveTo=function(e,t,i){t.classList.add(this.daClassname),"last"===e||e>=i.children.length?i.insertAdjacentElement("beforeend",t):"first"!==e?i.children[e].insertAdjacentElement("beforebegin",t):i.insertAdjacentElement("afterbegin",t)},DynamicAdapt.prototype.moveBack=function(e,t,i){t.classList.remove(this.daClassname),void 0!==e.children[i]?e.children[i].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},DynamicAdapt.prototype.indexInParent=function(e,t){const i=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(i,t)},DynamicAdapt.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};const da=new DynamicAdapt("max");da.init();let sliders=document.querySelectorAll(".swiper");if(sliders.length>0&&sliders.forEach((e=>{if(!e.classList.contains("swiper-bild")){let t=e.children,i=document.createElement("div");i.classList.add("swiper-wrapper");for(let e=0;e<t.length;e++){let n=t[e],r=document.createElement("div");r.className="swiper-slide";let a=document.createElement("div");a.className=n.getAttribute("class"),a.innerHTML=n.innerHTML,r.append(a),i.append(r)}e.innerHTML="",e.append(i),e.classList.add("swiper-bild")}})),document.querySelector(".services__slider")){new Swiper(".services__slider",{loop:!0,speed:800,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:3,grabCursor:!1,slideToClickedSlide:!1,navigation:{nextEl:".pagination-services__arrow_prev",prevEl:".pagination-services__arrow_next"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},992:{slidesPerView:2},1180:{slidesPerView:3}}});const e=document.querySelectorAll(".item-services__image"),t=document.querySelectorAll(".item-services__row_main"),i=[];t.forEach((e=>{let t=getComputedStyle(e).height;i.push(parseInt(t))}));let n=Math.max(...i);e.forEach((e=>{e.style.height=`${n}px`}))}if(document.querySelector(".slider-blog")){new Swiper(".slider-blog__container",{loop:!0,speed:800,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:1,grabCursor:!1,slideToClickedSlide:!1,effect:"fade",pagination:{el:".slider-blog__pagination",type:"bullets",clickable:!0},autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!0}})}let windowWith=document.documentElement.clientWidth;const sliderItemImages=document.querySelectorAll(".slider-blog__item img"),paginationItems=document.querySelectorAll(".slider-blog__pagination span");function takeBackgroundToPagination(e){e>480?paginationItems.forEach(((e,t)=>{let i=sliderItemImages[t].src;e.style.backgroundImage=`url(${i})`})):paginationItems.forEach((e=>{e.style.backgroundImage=""}))}window.addEventListener("resize",(function(e){windowWith=document.documentElement.clientWidth,takeBackgroundToPagination(windowWith)})),takeBackgroundToPagination(windowWith);