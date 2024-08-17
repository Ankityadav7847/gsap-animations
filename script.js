gsap.from(".page1 .box", {
  scale: 0,
  duration: 1,
});

gsap.from(".page2 .box", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.to(".page3 h1", {
  transform: "translateX(-170%)",
  scrollTrigger: {
    trigger: ".page3",
    scroll: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

gsap.from(".page4 .box", {
  scale: 0,
  opacity: 0,
  rotate: -360,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4 .box",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 2,
  },
});
