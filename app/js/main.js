$(document).ready(function () {

    $("form").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            alert("Спасибо! Мы свяжемся с вами в ближайшее время");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: 3000,
    slidesPerView: 1,
    sliderPerGroup: 1,
    lazy: {
      loadPrevNext: true,  
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})

document.querySelector('.header__link--contacts').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.footer').scrollIntoView({
        behavior: 'smooth'
    });
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let headerTop = document.querySelector('.header__top');
burger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});

function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    headerTop.classList.toggle('hidden');
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('html').classList.toggle('lock');
}
document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const menu_is_active = menu.classList.contains('active');

    if (!its_menu && menu_is_active) {
        toggleMenu();
    }
});