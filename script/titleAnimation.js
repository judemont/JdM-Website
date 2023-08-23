const myText = new SplitType('#mainTitle');

gsap.to(".char", {
    y: 0,
    stagger: 1,
    delay: 1,
    onComplete: () => {
        gsap.to("#mainTitle", {
            rotation: 360, 
            duration: 1.7,
            ease: "power2.inOut"
        });
    }
});
