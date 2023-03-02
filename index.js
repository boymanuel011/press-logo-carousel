
/**
 * Initialization and options for Splide js
 */

function slider() {
    const slideTop = document.querySelector('.js-slide-top');
    const thumbSlide = document.querySelector('.js-slide')

    if(slideTop && thumbSlide) {
      const main = new Splide( slideTop, {
        type      : 'fade',
        rewind    : false,
        pagination: false,
        arrows    : false,
      } );
    
    const autoSlide = new Splide( thumbSlide, {
      type: 'loop',
      autoWidth : true,
      drag   : false,
      focus    : 'center',
      gap       : 30,
      autoplay : true,
      updateOnMove: true,
      pagination: false,
      breakpoints: {
        767: {
          fixedHeight : '40px',
          gap       : 15,
          autoScroll: {
            speed: 0.4,
          }
        },
      }
    } );
    main.sync( autoSlide );
    main.mount();
    // autoSlide.mount(window.splide.Extensions);
    autoSlide.mount();
  }
}
slider();

    
