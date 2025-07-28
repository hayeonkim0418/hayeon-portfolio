export const Ani = () => {
  const tl1 = gsap.timeline();

  tl1.from(".sec-wrap p", {
    opacity: 0,
    y: -50,
    stagger: 0.3,
  });

  const tl2 = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
      // duration: 0.8,
    },
  });
  const animation = tl2
    .from(".about-me .s-con-title p", {
      opacity: 0,
      y: -50,
      stagger: 0.3,
    })
    .from(".about-me .s-con-text p", {
      opacity: 0,
      x: -50,
    })
    .from(".about-me .s-con-text a", {
      opacity: 0,
      x: -50,
    })
    .from(".about-me .img img", {
      width: 0,
      height: 0,
    });

  ScrollTrigger.create({
    trigger: ".about-me",
    // markers: true,
    start: "top 80%",
    animation: animation,
  });

  const tl3 = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
      // duration: 0.8,
    },
  });
  const animation2 = tl3
    .from(".contact-div .s-con-title p", {
      opacity: 0,
      y: -50,
      stagger: 0.3,
    })
    .from(".contact-txt span", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
    })
    .from(".contact-call", {
      opacity: 0,
      x: 50,
    });
  ScrollTrigger.create({
    trigger: ".contact-div",
    // markers: true,
    start: "top 80%",
    animation: animation2,
  });

  //   gsap.registerPlugin(ScrollSmoother);
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     smoothTouch: 0.1, // 속도정의
  //   });
};
