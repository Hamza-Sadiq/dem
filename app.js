

// fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=dollar").then(res)



const bars = document.getElementById("bars");
const nav_items = document.getElementById("nav-items");
const money = document.getElementById("mon");
const t = document.getElementById("transaction")
const child = document.getElementById("child");
const nodes = document.getElementById("nodes");
const child3 = document.getElementById("child3");
const child2 = document.getElementById("child2");
const lol = document.getElementById("lol");
const trendup = document.getElementsByClassName("trendup")[0];
const trenddown = document.getElementsByClassName("trenddown")[0];
const dollor = document.getElementById("dollor");
const landing = document.getElementById("landig-page");
const cross = document.getElementsByClassName("cross")[0];

const build = document.getElementById("build");
const mainlogbody = document.getElementById("mainlogbody");





build.addEventListener("click",()=>{
    mainlogbody.style.display = "flex";
    mainlogbody.style.zIndex = "1"
    gsap.from("form",{
        duration:1.4,
        scale:0,
        ease:"bounce",
        delay:1
    })
    gsap.from(".shape1",{
        duration:1.5,
        x:500,
        ease:"elastic",
    })
    gsap.from(".shape2",{
        duration:1.5,
        y:500,
        ease:"elastic",
        delay:0.5
    })
})

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({scrollTrigger:{
    trigger:"#section3",
    toggleActions:"restart pause none none",
    start:"50px 90%",
  }})
  .from(".text1",{
      opacity:0,
      x:-400

  }).from(".t",{
      opacity:1,
      x:700,
      scale:0.6
  }).from(".btnpink",{
      scale:0.5,
      duration:1,
      opacity:0
  })

let t2 = gsap.timeline({scrollTrigger:{
    trigger:".section4",
    top:"200px",
    toggleActions:"restart pause none none",

}}).from(".vid2",{
    scale:0.5,
    duration:1
}).from(".polygon",{
    x:900,
    duration:1
})

let t3 = gsap.timeline({scrollTrigger:{
    trigger:".section5",
    top:"200px",
    toggleActions:"restart pause none none"
}}).from(".mainhead h1",{
    duration:0.9,
    x:-600,
    opacity:0,
    stagger:0.4,
    scale:0
}).from(".section5para",{
    scale:0,
    opacity:0
})

let t4 = gsap.timeline({scrollTrigger:{
    trigger:".section6",
    top:"500px",
    toggleActions:"restart pause none none"
}}).from("img",{
    duration:0.9,
    
    opacity:0,
    scale:0
})

let t5 = gsap.timeline({scrollTrigger:{
    trigger:".section7",
    top:"100px",
    toggleActions:"restart pause none none"
}}).from(".card",{
    duration:0.9,
    stagger:0.5,
    opacity:0,
    scale:0
})

let t6 = gsap.timeline({scrollTrigger:{
    trigger:".section8",
    top:"680px",
    toggleActions:"restart pause none none"
}}).from(".sec8img",{
    duration:0.9,
    
    opacity:0,
    scale:0
})


let t7 = gsap.timeline({scrollTrigger:{
    trigger:".section9",
    top:"600px",
    toggleActions:"restart pause none none"
}}).from(".sec9card",{
    y:-500,
    duration:0.9,
    stagger:1,
    opacity:0,
    scale:0
})

let t8 = gsap.timeline({scrollTrigger:{
    trigger:".section10",
    top:"600px",
    toggleActions:"restart pause none none"
}}).from(".sec10head",{
    scale:"0"
}).from(".l a",{

    duration:0.2,
    stagger:0.1,
    opacity:0,
    scale:0
})
if (window.matchMedia("(max-width: 600px)").matches) {
 

}


cross.addEventListener("click",()=>{
    mainlogbody.style.display = "none";
})
bars.addEventListener("click", ()=>{
    nav_items.classList.toggle("active");
    nav_items.style.transition = "all 0.5s";
    bars.style.zIndex = "1";
    nav_items.style.zIndex = "1";
    gsap.from("li",{
        opacity:0,
        duration:1,
        stagger:0.5,
        scale:0.3,
        x:-500,

    }) 

})

function inter(){
    setInterval(() => {
        nodes.innerText = 100;
        nodes.innerHTML +=randomNodes();
    }, 3000);
}


function random(){
    return ((Math.random().toFixed(5)));
}
function randomNodes(){
    return Math.floor(((Math.random()*10)));
}
let count = 1000;

window.addEventListener('DOMContentLoaded', () => {
    let counter = money.innerHTML;
    setInterval(() => {
        t.innerHTML = random();
        let y = parseFloat(t.innerHTML);
        if(y<0.50000){
            trenddown.style.transition = "all 0.25s"
            t.style.color = "red";
            trenddown.style.display = "flex";
            trenddown.style.color = "red";
            trendup.style.display = "none";
            dollor.style.color = "red"


        }else{
            t.style.color = "#008000";
            trendup.style.display = "flex";
            trenddown.style.display = "none";
            trendup.style.color = "#008000";
            dollor.style.color = "#008000"
            


        }
    }, 1000);
    setInterval(() => {
        money.innerHTML = counter;
        counter++;
    }, 100);
   
    setInterval(() => {
        nodes.innerText = 100;
        nodes.innerHTML +=randomNodes();
        let x = parseInt(nodes.innerHTML);
    }, 3000);
   


    
});

