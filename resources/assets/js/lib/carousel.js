import Glide, { Controls, Breakpoints, Swipe, Images, Anchors } from '@glidejs/glide/dist/glide.modular.esm';

const sliders = document.querySelectorAll('.carousel');
for (let i = 0; i < sliders.length; i++) {

	const perView = sliders[i].getAttribute('data-carousel-view');
	const mobilePerView = sliders[i].getAttribute('data-carousel-mobile-view');

  const glide = new Glide(sliders[i], {
    type: 'carousel',
		perView: perView,
		breakpoints: {
			768: {
				perView: mobilePerView
			}
		}
  });
  glide.mount({ Controls, Breakpoints, Swipe, Images, Anchors })
}
