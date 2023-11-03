


gsap.to("#downText", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#downText",
        scroller: "body",
        // markers: true,
        start: "top 57%",
        end: "top 53%",
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
        start: "top -40%",
        end: "top -55%",
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
        start: "top -40%",
        end: "top -55%",
    }
})

gsap.to("#contentButton", {
    backgroundColor: "#fff",
    color: "#000",
    scrollTrigger: {
        trigger: "#contentButton",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top 0%",
        scrub: true
    }
})

gsap.to(".scroll", {
    opacity: -30,
    duration: 0.7, 
    scrollTrigger: {
        trigger: "#contentpage1",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -55%",
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