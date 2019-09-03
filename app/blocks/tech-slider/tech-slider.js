'use strict';

import $ from 'jquery';
import Swiper from 'swiper';

export default function () {
	const tab = $('.technologies-section__tab');

	const swiper = new Swiper('.tech-slider', {
		slidesPerView: 1,
		effect: 'fade',
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev'
		},
		fadeEffect: {
			crossFade: true
		},
		on: {
			slideChange: () => {
				tab.removeClass('active');
				$(`.technologies-section__tab[data-anchor='${swiper.activeIndex}']`).addClass('active');
			}
		}
	});

	$(`.technologies-section__tab[data-anchor='${swiper.activeIndex}']`).addClass('active');

	tab.on('click', function () {
		const index = $(this).data('anchor');
		swiper.slideTo(index);
	});
}

