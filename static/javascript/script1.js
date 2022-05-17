let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.sofa',10 ,{y: -300})
    .to('.chair',10, {y:-200}, "-=10")
    .fromTo('.title',{y:0}, {y:0, duration:10 }, "-=10")
    .to('.content', 10, {top: "0%" }, "-=10")
    .fromTo(".content-images", { opacity:0 }, { opacity: 1, duration: 3 })
    .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });


let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "80%",
    triggerHook: 0,
})

.setTween(timeline)
.addTo(controller)
.setPin("section");