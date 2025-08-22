gsap.from("#page1 #box", {
  duration: 2,
  scale: 0,
  delay: 1,
  rotate: 360
});
gsap.from("#page2 #box", {
  duration: 2,
  scale: 0,
  delay: 1,
  rotate: 360,
  ease: "back.out(1.7)"
});
gsap.from("#page3 #box", {
  duration: 2,
  scale: 0,
  rotate: 360,
  delay: 0.5,
  ease: "back.out(1.7)"
});