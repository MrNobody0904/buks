import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
const bs=t=>()=>$('#bs').textContent=t,R=()=>{gsap.set('#bt',{x:70,y:90,opacity:1});gsap.set('#cn',{x:470,y:150,opacity:0});gsap.set('#ck,#pr,#pk,#sc',{opacity:0});bs('Step 1 · Buy with deposit')()};R();
if(RM){gsap.set('#pr,#pk',{opacity:1});bs('Refunded through UPI · rewards updated')()}else{
 const tl=gsap.timeline({repeat:-1,repeatDelay:1.2,paused:true,onRepeat:R});
 tl.to({},{duration:.8}).to('#bt',{x:270,y:75,duration:1.2,ease:'power2.inOut'}).call(bs('Step 2 · Recycle and scan the package ID')).set('#sc',{opacity:1}).fromTo('#sc',{attr:{y:72}},{attr:{y:110},duration:.5,repeat:3,yoyo:true}).set('#sc',{opacity:0}).call(bs('Verifying weight and blocking duplicates')).to('#ck',{opacity:1,duration:.4}).to({},{duration:.7}).call(bs('Gate opens · bottle collected')).to('#bt',{x:330,opacity:0,duration:.6}).call(bs('Step 3 · Withdraw and earn: UPI refund sent')).set('#cn',{opacity:1}).to('#cn',{x:690,y:130,duration:1.1,ease:'power2.inOut'}).to('#cn',{opacity:0,duration:.2}).to('#pr',{opacity:1,duration:.4}).call(bs('Reward credits updated')).to('#pk',{opacity:1,duration:.4}).to({},{duration:1.5});
 ScrollTrigger.create({trigger:'#fl',start:'top 70%',end:'bottom 20%',onToggle:s=>s.isActive?tl.play():tl.pause()});$('#fs').onclick=()=>{R();tl.restart()}}
}
