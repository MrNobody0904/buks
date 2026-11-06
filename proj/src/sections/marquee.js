import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
const mw=['Recycle & Earn.','Scan','Verify','Refund','Recycle'],mt=$('#mqt');mt.innerHTML=[...mw,...mw,...mw,...mw].map(x=>`<span>${x}</span>`).join('');
if(!RM){const tw=gsap.to(mt,{xPercent:-50,repeat:-1,ease:'none',duration:30});ScrollTrigger.create({onUpdate:s=>tw.timeScale(1+Math.min(6,Math.abs(s.getVelocity())/400))});gsap.ticker.add(()=>tw.timeScale(tw.timeScale()+(1-tw.timeScale())*.05))}
}
