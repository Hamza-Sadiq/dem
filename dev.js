gsap.from(".dev1, .dev2,.dev3,.dev4", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.9,
    scale: 0.3
});
gsap.from(".img", {
    duration: 2,
    x: 200,
    delay: 2,
    ease: "bounce",
    opacity: 0,
    stagger: 0.8
});
gsap.from(".name", {
    duration: 3,
    y: 100,
    delay: 2,
    ease: "elastic",
    opacity: 0
})
gsap.from(".intro", {
    duration: 1,
    y: 100,
    delay: 4,
    ease: "power",
    opacity: 0
});
gsap.from(".l", {
    duration: 2,
    delay: 2,
    opacity: 0,
    y: 400,
    stagger: 0.1,
    ease:"bounce"
})
gsap.from(".work", {
    duration: 1,
    delay: 2,
    opacity: 0,
    y: 4000,
    stagger: 0.1
})




