


gsap.to("#downText img", {
    opacity: 0,
    duration: 0.7, 
    scrollTrigger: {
        trigger: "#downText img",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 62%",
        scrub: true
    }
})


// gsap.to("#contentpage1", {
//     y: -70,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#contentpage1",
//         scroller: "body",
//         markers: true,
//         start: "top 17%",
//         end: "top 0%",
//     }
// })


gsap.to("#contentpage1", {
    y: -70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#contentpage1",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -30%",
    }
})

gsap.from("#contentpage1", {
    y: 400,
    duration: 0.7,
})

gsap.from("#contentpage2", {
    y: -70,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#contentpage1",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -30%",
    }
})

gsap.to(".scroll", {
    opacity: -30,
    duration: 0.7, 
    scrollTrigger: {
        trigger: "#contentpage1",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -30%",
    }
})

// gsap.to("#contentpage2", {
//     y: -70,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#contentpage1",
//         scroller: "body",
//         markers: true,
//         start: "top 17%",
//         end: "top 0%",
//         onStart: function() {
//             console.log("onStart fired!");
//             gsap.set("#contentpage2", { display: "none" });
//         },
//     }
// })