window. onload = function() {
ScrollReveal().reveal('.image1', {
    /* Locked Settings */
    delay: 500,
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.image2', {
    /* Locked Settings */
    delay: 500,
    opacity: 0,
    scale: 2,
    reset: true,

    /* Unique Settings */
    easing: 'ease-out',
    distance: '150px',
    origin: 'bottom',
    rotate: {
        x: 90,
        y: 0,
        z: 0,
    },
});

ScrollReveal().reveal('.image3', {
    /* Locked Settings */
    delay: 500,
    opacity: 0,
    scale: 2,
    reset: true,

    /* Unique Settings */
    easing: 'ease-in',
    distance: '300px',
    origin: 'left',
    rotate: {
        x: 0,
        y: 90,
        z: 0,
    },
});

ScrollReveal().reveal('.image4', {
    /* Locked Settings */
    delay: 500,
    opacity: 0,
    scale: 2,
    reset: true,

    /* Unique Settings */
    easing: 'ease-in-out',
    distance: '150px',
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 90,
    },
});

ScrollReveal().reveal('.image5', {
    /* Locked Settings */
    delay: 500,
    opacity: 0,
    scale: 2,
    reset: true,

    /* Unique Settings */
    easing: 'ease',
    distance: '300px',
    origin: 'right',
    rotate: {
        x: 0,
        y: 0,
        z: -180,
    },
});
}