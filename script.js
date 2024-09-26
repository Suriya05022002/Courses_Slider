
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

// <!-- Swiper JS -->
var swiper = new Swiper(".swiper-container", {
slidesPerView: 4, // Show 4 slides by default
spaceBetween: 25, // Space between slides
loop: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true, // Enable clickable dots
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
autoplay: {
    delay: 2000, // 2 seconds delay for autoplay
    disableOnInteraction: false,
},
breakpoints: {
    0: {
        slidesPerView: 1, // 1 slide for small screens
    },
    560: {
        slidesPerView: 2, // 2 slides for mid-sized screens
    },
    950: {
        slidesPerView: 3, // 3 slides for slightly larger screens
    },
    1200: {
        slidesPerView: 4, // 4 slides for large screens
    }
}
});


