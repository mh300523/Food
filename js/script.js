$(document).ready(function() {

    if ($(window).width() <= 991) {

        $(".user-icon").on("click", ".acccount-user", function(e) {
            e.preventDefault();
            $(this).next(".account-list").toggleClass("active");
        });
    };

    ///////// ** categories Slider** /////////
    var categories = new Swiper('.categories-row .swiper', {
        speed: 1000,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 4.5,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 6.5,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 7.5,
                spaceBetween: 30,
            },
        },
    });

    // Filtering Logic
    const buttons = document.querySelectorAll(".cat-item");
    const gridItems = document.querySelectorAll(".pro-item");

    // Automatically click the first category button on load
    if (buttons.length > 0) {
        const firstCategoryButton = buttons[0];
        const firstCategoryFilter = firstCategoryButton.getAttribute("id");

        firstCategoryButton.classList.add("active");

        // Filter items to show only the first category products
        gridItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-filter");
        item.classList.toggle("hidden", itemCategory !== firstCategoryFilter);
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
        const filter = button.getAttribute("id");

        // Add 'active' class to the clicked button and remove it from others
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter items based on the clicked category
        gridItems.forEach((item) => {
            const itemCategory = item.getAttribute("data-filter");
            item.classList.toggle("hidden", itemCategory !== filter);
        });
        });
    });

    ///////// **main Slider** /////////
    var mainSlider = new Swiper('.main-slider .swiper', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 1,
        preloadImages: false,
        updateOnWindowResize: true,
            
        // If we need pagination
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        // Navigation arrows   
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });

});
 