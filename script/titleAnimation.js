const myText = new SplitType('#mainTitle');

gsap.to(".char", {
    y: 0,
    stagger: 1,
    delay: 1,
    onComplete: () => {
        gsap.to("#mainTitle", {
            rotation: 720, 
            duration: 1.5,
            ease: "power2.inOut"
        });
    }
});
