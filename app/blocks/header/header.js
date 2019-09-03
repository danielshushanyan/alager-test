/* eslint-disable no-unused-expressions */
'use strict';

import $ from 'jquery';
import Fullpage from 'fullpage.js/dist/fullpage.min';

export default function () {
	new Fullpage('#fullpage', {
		anchors: ['home', 'technologies', 'solutions'],
		navigation: true,
		navigationTooltips: ['01', '02', '03'],
		onLeave(origin, destination) {
			const header = $('.header');
			const navLink = $('.nav__link');
			const fullPageNav = $('#fp-nav');

			navLink.removeClass('active');

			origin.index === 0 && (header.addClass('sticky'));
			destination.index === 0 && (header.removeClass('sticky'));

			$(`.nav__link[href='#${destination.anchor}']`).addClass('active');

			destination.anchor === 'technologies' ? fullPageNav.addClass('light-theme') : fullPageNav.removeClass('light-theme');
		}
	});
}

