document.addEventListener('DOMContentLoaded', function () {
    new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    new Swiper(".swiper-hmenu", {
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto",
        effect: "slide",
        speed: 400,
        initialSlide: 0
    })

    new Swiper(".mySwiper3", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    new Swiper(".swiper-news", {
        spaceBetween: 30,
        //centeredSlides: true,
        loop: false,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        breakpoints: {
            310: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });


    new Mmenu("#menu", {
        "navbar": {
            "title": "<div class='navbar-brand'><img class=\"logo mw-100\" src=\"https://src.guap.ru/logos/guap/guap-desc-line.svg\" alt=\"\"></div>"
        },
        "offCanvas": {
            position: "left-front"
        },
        "theme": "white",
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<a target=\"_blank\" href=\"https://vk.com/guap_ru\">\n" +
                    "                    <img src=\"https://src.guap.ru/_old/Files/logos/vk_32.svg\" alt=\"vk\">\n" +
                    "                </a>",
                    "<a target=\"_blank\" href=\"https://rutube.ru/channel/23832078/\">\n" +
                    "                    <img src=\"https://src.guap.ru/_old/Files/logos/rutub_32_blue_2.svg\" alt=\"rutube\">\n" +
                    "                </a>",
                    "<a target=\"_blank\" href=\"https://t.me/new_guap\">\n" +
                    "                    <img src=\"https://src.guap.ru/_old/Files/logos/tlg_32.svg\" alt=\"telegram\">\n" +
                    "                </a>",
                    "<a class=\"question-link\" href=\"/faq\">\n" +
                    "                    <i class=\"fa fa-question-circle\"></i>\n" +
                    "                </a>"
                ]
            }
        ]
    }, {});
})