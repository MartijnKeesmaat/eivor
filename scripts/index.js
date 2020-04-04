const introTL = gsap.timeline();

introTL.to('.one-one', {
  x: -500,
  duration: 2,
  ease: 'power4.out',
  delay: 1,
});

introTL.to(
  '.one-two',
  {
    x: 500,
    duration: 2,
    ease: 'power4.out',
  },
  '-=2'
);

introTL.to(
  '.one-three',
  {
    x: -500,
    duration: 2,
    ease: 'power4.out',
  },
  '-=2'
);

introTL.to('.one-one', {
  x: 700,
  duration: 2,
  ease: 'power4.out',
});

introTL.to(
  '.one-two',
  {
    x: -700,
    duration: 2,
    ease: 'power4.out',
  },
  '-=2'
);

introTL.to(
  '.one-three',
  {
    x: 700,
    duration: 2,
    ease: 'power4.out',
  },
  '-=2'
);

introTL.to('.one', { autoAlpha: 0, duration: 0.12 });
introTL.to('.two-one', { autoAlpha: 1, duration: 0.12 });
introTL.to('.two-one', { autoAlpha: 0, duration: 0.12 });
introTL.to('.two-two', { autoAlpha: 1, duration: 0.12 });
introTL.to('.two-two', { autoAlpha: 0, duration: 0.12 });
introTL.to('.two-three', { autoAlpha: 1, duration: 0.12 });
introTL.to('.two-three', { autoAlpha: 0, duration: 0 });
introTL.to('.two-four', { autoAlpha: 1, duration: 2 });
introTL.to('.two-five', { autoAlpha: 1, duration: 0 }, '-=1.3');
introTL.to('.two-five', { scale: 2, duration: 2 }, '-=1.3');
introTL.to('.two-six', { autoAlpha: 1, duration: 1 });

introTL.to('.two-seven', { autoAlpha: 1, duration: 1 });
introTL.to('.two-eight', { autoAlpha: 1, duration: 1 });

// TWO
// introTL.to(
//   '.two-one',
//   {
//     x: 300,
//     duration: 2,
//     ease: 'power4.out',
//   },
//   '-=2'
// );

// function pageTransition() {
//   var tl = gsap.timeline();
//   tl.to('ul.transition li', {
//     duration: 0.5,
//     scaleY: 1,
//     transformOrigin: 'bottom left',
//     stagger: 0.2
//   });
//   tl.to('ul.transition li', {
//     duration: 0.5,
//     scaleY: 0,
//     transformOrigin: 'bottom left',
//     stagger: 0.1,
//     delay: 0.1
//   });
// }

// function contentAnimation() {
//   var tl = gsap.timeline();
//   tl.from('main', {
//     duration: 0.5,
//     y: -20,
//     autoAlpha: 0,
//     delay: 0.3
//   });
// }

// function delay(n) {
//   n = n || 2000;
//   return new Promise(done => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// barba.init({
//   sync: true,

//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();

//         pageTransition();
//         await delay(1000);
//         done();
//       },

//       async enter(data) {
//         contentAnimation();
//       },

//       async once(data) {
//         contentAnimation();
//       }
//     }
//   ]
// });
