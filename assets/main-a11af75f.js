import{i,S as h}from"./vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=a=>a.reduce((t,{tags:s,webformatURL:n,largeImageURL:e,likes:r,views:o,comments:u,downloads:d})=>t+`<li class="container">
      <a href=${e} class="card-link js-card-link">
          <img class="photo" src="${n}" alt="${s}" >
      </a>
      <div class="info">
          <div>
              <span class="names">Likes</span>
              <span >${r}</span>
          </div>
          <div >
              <span class="names">Views</span>
              <span >${o}</span>
          </div>
          <div >
              <span class="names">Comments</span>
              <span >${u}</span>
          </div>
          <div >
              <span class="names">Downloads</span>
              <span >${d}</span>
          </div>
      </div>
  </li>
      `,""),p="43978521-a6e17b35cb4219b57205c3217",f="https://pixabay.com/api/",y=a=>{const t=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}/?${t}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})},c=document.querySelector(".gallery"),g=document.querySelector(".form"),l=document.querySelector(".loader");function v(a){a.preventDefault();const t=a.target.elements.searchKeyword.value.trim();if(t==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML="",l.classList.remove("is-hidden"),y(t).then(s=>{s.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=m(s.hits),new h(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(s=>console.log(s)).finally(()=>{a.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",v);
//# sourceMappingURL=main-a11af75f.js.map
