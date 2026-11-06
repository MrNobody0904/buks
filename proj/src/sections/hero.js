import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
if(!RM)gsap.from('.hero h1,.hero .l,.hero .row,.tag',{y:40,opacity:0,duration:1,stagger:.12,ease:'power3.out',delay:1.5});
const hi=$('#hi');if(hi&&!RM){gsap.to(hi,{y:-10,repeat:-1,yoyo:true,duration:3,ease:'sine.inOut'});addEventListener('pointermove',e=>gsap.to(hi,{rotationY:(e.clientX/innerWidth-.5)*8,rotationX:-(e.clientY/innerHeight-.5)*5,transformPerspective:900,duration:.8}))}
}
