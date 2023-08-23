const myText = new SplitType('#mainTitle');

gsap.to(".char", {
    y: 0,
    stagger: 1,
    delay: 1,
    onComplete: () => {
        gsap.to("#mainTitle", {
            rotation: 720, // Angle de rotation en degrés
            duration: 1,   // Durée de l'animation de rotation
            ease: "power2.inOut" // Type d'interpolation pour l'animation
        });
    }
});
