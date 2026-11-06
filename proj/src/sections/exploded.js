import {$,RM,cl,sm,gsap,ScrollTrigger,state} from '../core.js';
export function init(){
const FR=Array.from({length:95},(_,i)=>`/assets/frames/${String(i+1).padStart(3,'0')}.webp`);
const S=[['00','Complete station','The assembled BUCKSBIN prototype: touchscreen, QR reader, bottle slot and collection drawer.','Prototype · 12V supply'],
['—','Side panels and display','The enclosure panels and the touchscreen lift away to reveal the internals.','Enclosure'],
['01','QR scanner / camera','Reads the package’s unique ID and sends it for validation.','Camera · QR decode'],
['02','IR sensor','Detects when an object enters and monitors the bottle entry.','Object detection'],
['03','Load cell + HX711','Measures package weight to help validate expected packaging characteristics.','HX711 · 24-bit ADC'],
['04','Raspberry Pi 4/5','Edge controller that coordinates sensor inputs and machine operations.','Main controller · Wi-Fi'],
['05','Servo motor','Drives the mechanical gate that accepts or rejects the package.','Gate mechanism · PWM'],
['06','LCD display','Shows instructions and transaction status to the user.','Touchscreen / LCD'],
['07 / 08','Collection container + power & connectivity','The container stores accepted packaging. The power module manages supply and network.','12V supply · Wi-Fi / 4G'],
['—','Exploded engineering view','Every subsystem separated: sensing, compute, actuation, interface and storage.','8 components']];
const xc=$('#xc'),cx=xc.getContext('2d'),fr=FR.map(u=>{const i=new Image();i.src=u;i.onload=()=>{if(i===fr[cf])draw()};return i});
let P=0,cur=0,idx=-1,cf=-1;
function draw(){const i=fr[cf];if(!i||!i.complete||!i.naturalWidth)return;const W=xc.width,H=xc.height;cx.fillStyle='#e3e6e4';cx.fillRect(0,0,W,H);const s=(W>=H?Math.max:Math.min)(W/i.naturalWidth,H/i.naturalHeight),w=i.naturalWidth*s,h=i.naturalHeight*s;cx.drawImage(i,(W-w)/2,(H-h)/2,w,h)}
new ResizeObserver(()=>{const d=Math.min(devicePixelRatio,2);xc.width=xc.clientWidth*d;xc.height=xc.clientHeight*d;draw()}).observe(xc);
ScrollTrigger.create({trigger:'#xwrap',start:'top top',end:'+=450%',pin:true,scrub:true,onUpdate:s=>P=s.progress});
gsap.ticker.add(()=>{cur+=(P-cur)*.15;const f=Math.round(cur*(fr.length-1));if(f!==cf){cf=f;draw()}$('#pb').style.width=cur*100+'%';const i=Math.min(9,Math.floor(cur*10));
 if(i!==idx){idx=i;const s=S[i];$('#pnn').textContent=s[0]==='—'?'':'Component '+s[0];$('#pnt').textContent=s[1];$('#pnp').textContent=s[2];$('#pns').textContent=s[3];$('#sn').textContent=String(i+1).padStart(2,'0');gsap.fromTo('#pn',{opacity:.3,x:16},{opacity:1,x:0,duration:.4})}});
}
