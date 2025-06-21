// Mobile Navbar //
const menu = document.getElementById("mobile-menu");
const toggle = document.getElementById("menu-toggle");

toggle.addEventListener("click", () => {
   menu.classList.toggle("-translate-x-full");
   menu.classList.toggle("translate-x-0");
});


// custom cursor js //
const cursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", (e) => {
   gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out"
   });
});

// custom cursor js End //

   
// Gasp //

// Hero Section Content //
gsap.from(".animate-hero", {
   opacity: 0,
   y: 50,
   duration: 1,
   delay: 0.5,
   stagger: 0.3,
   ease: "power3.out",
});

// Hero Section Image //

gsap.from("#heroImage", {
   opacity: 0,
   x: 100,
   duration: 1,
   delay: 1,
   ease: "power2.out"
})

// About Section Content //

gsap.from("#page2 .aboutHeading", {
   opacity: 0,
   duration: 1,
   delay: 0.5,
   x: -100,
   scrollTrigger: {
      trigger: "#page2 .aboutHeading",
      scroller: "body",
   }
})

// About Grid Boxes
gsap.from("#page2 .aboutBoxes", {
   opacity: 0,
   duration: 1,
   delay: 0.5,
   x: 100,
   scrollTrigger: {
      trigger: "#page2 .aboutHeading",
      scroller: "body",
   }
});

// About I  mages

// About Image 1st //
gsap.from("#page2 #aboutImagesTop", {
   opacity: 0,
   duration: 1.2,
   delay: 0.5,
   y: 100,
   ease: "power3.out",
   scrollTrigger: {
      trigger: "#page2 #aboutImagesTop",
      scroller: "body",
   }
})

// About Image 2nd //
gsap.from("#page2 #aboutImagesBottom", {
   opacity: 0,
   duration: 1.2,
   delay: 0.5,
   y: 100,
   ease: "power3.out",
   scrollTrigger: {
      trigger: "#page2 #aboutImagesBottom",
      scroller: "body",
   }
})


// Gallery Section //

// Gallery Text
gsap.from("#page3 #galleryText", {
   opacity: 0,
   duration: 0.8,
   delay: 0.2,
   y: 10,
   scrollTrigger: {
      trigger: "#page3 #galleryText",
      scroller: "body",
   }
})


// Gallery Cards
gsap.from("#page3 .galleryCardTop", {
   opacity: 0,
   y: 50,
   rotateZ: 3,
   duration: 1,
   ease: "power3.out",
   stagger: 0.2,
   scrollTrigger: {
      trigger: "#page3 .galleryCardTop",
      scroller: "body",
      toggleActions: "play none none none",
   }
});

gsap.from("#page3 .galleryCardBottom", {
   opacity: 0,
   y: -50,
   rotateZ: 3,
   duration: 1,
   ease: "power3.out",
   stagger: 0.2,
   scrollTrigger: {
      trigger: "#page3 .galleryCardBottom",
      scroller: "body",
      toggleActions: "play none none none",
   }
});

// Gallery section End //

// Matches Section Start //

gsap.from("#page4 #matchesHeading", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 #matchesHeading",
      scroller: "body"
   }
})

// Matches Section End  //


// 1st Team Start 

// 1st Team Img Left //
gsap.from("#page4 .teamImgLeft", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 .teamImgLeft",
      scroller: "body"
   }
})

// 1st Team Img Right //
gsap.from("#page4 .teamImgRight", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: 100,
   scrollTrigger: {
      trigger: "#page4 .teamImgRight",
      scroller: "body"
   }
})


// 1st Team Content //

gsap.from("#page4 #teamContentFirst", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   y: 100,
   scrollTrigger: {
      trigger: "#page4 #teamContentFirst",
      scroller: "body"
   }
})

// 1st Team Buttons
gsap.from("#page4 #teamButtons", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 #teamButtons",
      scroller: "body"
   }
})

// 1st Team End Here //


// 2nd Team Start //


// 2nd Team Img Left //

gsap.from("#page4 .secondTeamImgLeft", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 .secondTeamImgLeft",
      scroller: "body"
   }
})

// 2nd Team Img Right //
gsap.from("#page4 .secondTeamImgRight", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: 100,
   scrollTrigger: {
      trigger: "#page4 .secondTeamImgRight",
      scroller: "body"
   }
})


// 2nd Team Content //

gsap.from("#page4 #teamContentSecond", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   y: 100,
   scrollTrigger: {
      trigger: "#page4 #teamContentSecond",
      scroller: "body"
   }
})

// 2nd Team Buttons
gsap.from("#page4 #secondTeamButtons", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 #secondTeamButtons",
      scroller: "body"
   }
})

// 2nd Team End Here //



// 3rd Team Img Left //

gsap.from("#page4 .thirdTeamImgLeft", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 .thirdTeamImgLeft",
      scroller: "body"
   }
})

// 3rd Team Img Right //
gsap.from("#page4 .thirdTeamImgRight", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: 100,
   scrollTrigger: {
      trigger: "#page4 .thirdTeamImgRight",
      scroller: "body"
   }
})


// 3rd Team Content //

gsap.from("#page4 #teamContentThird", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   y: 100,
   scrollTrigger: {
      trigger: "#page4 #teamContentThird",
      scroller: "body"
   }
})

// 3rd Team Buttons
gsap.from("#page4 #thirdTeamButtons", {
   opacity: 0,
   duration: 1,
   delay: 0.3,
   x: -100,
   scrollTrigger: {
      trigger: "#page4 #thirdTeamButtons",
      scroller: "body",
   }
})

// 3rd Team End Here //


// Gaming Site Start //

gsap.from(["#page5 .gamingSiteH5", "#page5 .gamingSiteH2", "#page5 .gamingSitePara"], {
   opacity: 0,
   duration: 1,
   y: 100,
   stagger: 0.3,
   delay: 0.3,
   scrollTrigger: {
      trigger: "#page5 .gamingSiteH5", // use a deeper/first visible element
      scroller: "body",
      start: "top 85%", // triggers when element reaches 85% of viewport
      toggleActions: "play none none reverse"
   }
})


// Boxes & Button - SCROLL TRIGGERED PROPERLY
gsap.from(["#page5 .gamingSiteBoxes", "#page5 .gamingSiteBtn"], {
   opacity: 0,
   duration: 1,
   y: 100,
   stagger: 0.3,
   delay: 0.3,
   scrollTrigger: {
      trigger: "#page5 .gamingSiteBoxes",
      scroller: "body",
      start: "top 80%",
      // toggleActions: "play none none reverse"
   }
})

// Gaming Site End //

// Download Section start //

gsap.from("#page5 .downloadSectionContent", {
   opacity: 0,
   // duration: 1,
   // delay: 0.3,
   scale: 0.9,
   y: 50,
   ease: "power2.out",
   scrollTrigger: {
      trigger: "#page5 .downloadSectionContent",
      // scroller: "body",
      scrub: true,
      // start: "top 80%",
      // toggleActions: "play none none reverse",
      // markers: true
   }
});




