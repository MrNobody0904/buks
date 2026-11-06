import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
// ---- reveals ----
if(!RM)document.querySelectorAll('.grid4>div,.st,.sk,.rev li,.dash>div,.mv>div').forEach(el=>gsap.from(el,{y:30,opacity:0,duration:.8,scrollTrigger:{trigger:el,start:'top 90%'}}));
}
