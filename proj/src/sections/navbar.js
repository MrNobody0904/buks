import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
const lenis=state.lenis;
document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{const h=a.getAttribute('href');if(h.length<2)return e.preventDefault();const t=$(h);if(!t)return;e.preventDefault();$('#menu').classList.remove('o');go(t)});
$('#bg').onclick=()=>$('#menu').classList.toggle('o');
addEventListener('scroll',()=>$('#nav').classList.toggle('s',scrollY>40),{passive:true});
function go(t){if(RM){t.scrollIntoView();return}gsap.timeline().fromTo('#wp',{yPercent:100},{yPercent:0,duration:.4,ease:'power3.in'}).add(()=>lenis?lenis.scrollTo(t,{immediate:true}):t.scrollIntoView()).to('#wp',{yPercent:-100,duration:.45,ease:'power3.out'})}
}
