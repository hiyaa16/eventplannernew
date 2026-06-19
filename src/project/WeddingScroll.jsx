import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./weddingScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function WeddingScroll(){

useEffect(()=>{

const frames=

gsap.utils.toArray(".frame");

const tl=gsap.timeline({

scrollTrigger:{

trigger:".wedding",

start:"top top",

end:"+=6000",

scrub:0.5,

pin:true

}

});

frames.forEach((frame,index)=>{

if(index>0){

tl.to(

frames[index-1],

{

opacity:0,

duration:0.15

}

);

}

tl.to(

frame,

{

opacity:1,

duration:0.15

},

"<"

);

});

return()=>{

ScrollTrigger.getAll()

.forEach(t=>t.kill());

};

},[]);

return(

<section className="wedding">

<div className="sequence">

<img className="frame" src="/1.png"/>

<img className="frame" src="/2.png"/>

<img className="frame" src="/3.png"/>

<img className="frame" src="/4.png"/>

<img className="frame" src="/5.png"/>

</div>

</section>

)

}