gsap.registerPlugin(ScrollToPlugin);

// gsap.to(".circle-1", {
//   y: 50,
//   duration: 0.7,
//   repeat: -1,
//   yoyo: true,
//   ease: "slow(0.7, 0.7, false)",
// });
// gsap.to(".circle-2", {
//   y: 50,
//   duration: 0.7,
//   repeat: -1,
//   yoyo: true,
//   delay: 0.3,
//   ease: "slow(0.7, 0.7, false)",
// });

// gsap.to(".circle-1", {
//   y: 100,
//   duration: 5,
//   ease: "slow(0.7, 0.7, false)",
// });

// const playBtn = document.querySelector(".play");
// const bothBtn = document.querySelector(".both");
// const reverseBtn = document.querySelector(".reverse");

// const timeline = gsap.timeline();

// timeline
//   .to(".circle-1", { y: 100, duration: 1 })
//   .to(".circle-2", { x: -100, duration: 1 })
//   .to(".circle-1", { x: -100, duration: 1 })
//   .to(".circle", 4, { opacity: 0, stagger: 5 });

// timeline.fromTo(
//   "ul li",
//   { opacity: 0, x: 200 },
//   { opacity: 1, x: 0, duration: 0.4, stagger: 0.3 }
// );

// playBtn.addEventListener("click", () => {
//   timeline.play();
// });

// reverseBtn.addEventListener("click", () => {
//   timeline.reverse();
// });

// bothBtn.addEventListener("click", () => {
//   if (timeline.reversed() && !timeline.isActive()) {
//     timeline.play();
//   }
//   if (!timeline.reversed() && !timeline.isActive()) {
//     timeline.reverse();
//   }
// });

// const hamburgerBtn = document.querySelector(".menuIcon");
// const timeline = gsap.timeline({ reversed: true });
// timeline
//   .fromTo(
//     ".overlay",
//     0.1,
//     { display: "none", opacity: 0 },
//     { display: "block", opacity: 1 }
//   )
//   .to(".sideMenu", { left: 0, duration: 0.2 })
//   .fromTo(
//     "ul li",
//     { y: 50, opacity: 0 },
//     { y: 0, opacity: 1, stagger: 0.1, duration: 0.1 }
//   );

// hamburgerBtn.addEventListener("click", () => {
//   if (timeline.reversed()) {
//     timeline.play();
//   } else {
//     timeline.reverse();
//   }
// });

// document.querySelector(".overlay").addEventListener("click", () => {
//   timeline.reverse();
// });

document.querySelector(".orange-btn").addEventListener("click", () => {
  gsap.to(window, { duration: 2, scrollTo: ".orange" });
});

document.querySelector(".red-btn").addEventListener("click", () => {
  gsap.to(window, { duration: 2, scrollTo: ".red" });
});

document.querySelector(".purple-btn").addEventListener("click", () => {
  gsap.to(window, { duration: 2, scrollTo: ".purple" });
});

document.querySelector(".brown-btn").addEventListener("click", () => {
  gsap.to(window, { duration: 2, scrollTo: ".brown" });
});
