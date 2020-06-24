$('.owl-carousel').owlCarousel({
    autoplay: true,
    // autoplayTimeout: 5,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        }
    }
});