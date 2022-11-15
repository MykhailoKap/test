// $(function () {
// 	$('.slider__body, .block-slider__body').slick({
// 		arrows: false,
// 		dots: true,
// 		fade: true,
// 		autoplay: true,
// 		autoplaySpeed: 2500,
// 	});
// });


// if (5 > 4) {
// 	console.log(3 + 1);
// }


// let userInfo = {
// 	name: 'Misha',
// 	age: 34,
// 	'likes JS': true,
// 	adress: {
// 		city: 'Oswiecim',
// 		street: 'Skarbka',
// 	}
// }

// for (let key in userInfo) {
// 	console.log(key);
// 	console.log(userInfo[key]);
// }

// for (let key in userInfo.adress) {
// 	console.log(key);
// 	console.log(userInfo.adress[key]);
// }


$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__block').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
