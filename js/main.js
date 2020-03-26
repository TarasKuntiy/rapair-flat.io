			// файл для ініціалізації анімації
			new WOW().init();
			// початок налаштувань слайдера
			$(document).ready(function () {
				$('.slider').slick({
					slidesToShow: 3, //показуємо 3 картинки в слайді
					prevArrow: $('.arrows__left'), //присвоюємо стрілки-ліву,які вирізали
					nextArrow: $('.arrows__right'), //присвоюємо стрілки-праву, які вирізали
					//адаптивність слайдера:
					responsive: [{
							breakpoint: 1020,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true,
								dots: false
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
					]
				});

				$(".icon__close").on("click", (function (event) {
						event.preventDefault(), $("#modal-room, #second__modal-room, #callme, #last_form-modal, #last_form-modal_second, #last_form-modal_third, #last_form-modal_four").fadeOut()
					})),
					$("#bathroom__info").on("click", (function (event) {
						event.preventDefault(), $("#modal-room").fadeIn()
					})),
					$("#info-btn").on("click", (function (event) {
						event.preventDefault(), $("#callme").fadeIn()
					})),
					$("#second-bathroom__info").on("click", (function (event) {
						event.preventDefault(), $("#second__modal-room").fadeIn()
					})),
					$("#last-modal").on("click", (function (event) {
						event.preventDefault(), $("#last_form-modal").fadeIn()
					})),
					$("#last-modal_second").on("click", (function (event) {
						event.preventDefault(), $("#last_form-modal_second").fadeIn()
					})),
					$("#last-modal_third").on("click", (function (event) {
						event.preventDefault(), $("#last_form-modal_third").fadeIn()
					})),
					$("#last-modal_four").on("click", (function (event) {
						event.preventDefault(), $("#last_form-modal_four").fadeIn()
					})),
					$("input[name=user__phone]").mask("+7 (999)-999-9999")
			});