document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>document.querySelector(".page-loader")?.classList.add("hide"),450);document.querySelectorAll(".accordion-trigger").forEach(b=>b.addEventListener("click",()=>{let i=b.closest(".accordion-item"),p=i.querySelector(".accordion-panel"),o=i.classList.toggle("open");p.style.maxHeight=o?p.scrollHeight+"px":"0";b.setAttribute("aria-expanded",o)}));document.querySelectorAll("form[data-demo]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();let ok=true;f.querySelectorAll("[required]").forEach(x=>{let er=x.parentElement.querySelector(".error");if(!x.value.trim()){ok=false;if(er)er.textContent="Required field"}else if(er)er.textContent=""});let em=f.querySelector('input[type="email"]');if(em&&em.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){ok=false;em.parentElement.querySelector(".error").textContent="Enter a valid email"}if(ok){f.reset();showToast("Thanks — your demo enquiry has been submitted.")}}))});
function showToast(m) {
  let t=document.querySelector(".toast");
  if(!t)return;
  t.textContent=m;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),3200)
}
