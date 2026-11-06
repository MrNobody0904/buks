import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
import {FORM_ENDPOINT,SOCIAL} from '../config.js';
export function init(){
document.querySelectorAll('[data-s]').forEach(a=>{const u=SOCIAL[a.dataset.s];if(u){a.href=u;a.target='_blank';a.rel='noopener'}});
// ---- form ----
const f=$('#f');f.onsubmit=async e=>{e.preventDefault();let bad=0;const d=Object.fromEntries(new FormData(f));
 const rules={name:v=>v.trim().length>1||'Enter your full name.',email:v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)||'Enter a valid work email.',org:v=>v.trim()||'Enter your organization.',type:v=>v||'Choose an enquiry type.',msg:v=>v.trim().length>9||'Write at least 10 characters.'};
 for(const k in rules){const r=rules[k](d[k]||''),el=f.elements[k].parentNode.querySelector('.er');el.textContent=r===true?'':r;if(r!==true)bad++}
 if(bad)return;const b=$('#sb');b.disabled=true;b.textContent='Sending…';const ok=$('#ok');ok.style.display='none';
 try{if(FORM_ENDPOINT){const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;ok.textContent='Enquiry sent. We’ll reply to '+d.email+'.'}
 else{await new Promise(r=>setTimeout(r,900));ok.textContent='Demo mode: your enquiry was validated but not sent. Set FORM_ENDPOINT in the page script to connect your backend.'}
 f.reset()}catch(_){ok.textContent='Could not send your enquiry. Check your connection and try again.'}
 ok.style.display='block';b.disabled=false;b.textContent='Send enquiry'};
}
