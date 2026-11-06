import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
const ld=$('#ld');if(RM)ld.remove();else{document.body.style.overflow='hidden';gsap.timeline().to('#ld s',{width:'100%',duration:1.1,ease:'power2.inOut'}).to(ld,{yPercent:-100,duration:.8,ease:'power3.inOut'}).add(()=>{ld.remove();document.body.style.overflow=''})}
}
