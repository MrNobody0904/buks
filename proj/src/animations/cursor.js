import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
if(matchMedia('(pointer:fine)').matches&&!RM){document.body.classList.add('fine');const c=$('#cur');c.classList.add('on');const qx=gsap.quickTo(c,'x',{duration:.25}),qy=gsap.quickTo(c,'y',{duration:.25});addEventListener('pointermove',e=>{qx(e.clientX);qy(e.clientY)});
 document.querySelectorAll('a,button,.st,canvas,[contenteditable]').forEach(el=>{el.addEventListener('pointerenter',()=>gsap.to(c,{scale:1.8,backgroundColor:'rgba(198,244,50,.25)',duration:.25}));el.addEventListener('pointerleave',()=>gsap.to(c,{scale:1,backgroundColor:'rgba(198,244,50,0)',duration:.25}))});
 document.querySelectorAll('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.3,duration:.3})});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'}))})}
}
