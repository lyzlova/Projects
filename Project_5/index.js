import  './css/main.css';


$('.card').slick({
  dots: true,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        // slidesToShow: 3,
        // slidesToScroll: 3,
        slidesPerRow: 2,
        rows: 2,
        arrows: true,
        mobileFirst: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        rows: 2,
        slidesPerRow:2,
        arrows: true,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
        slidesPerRow:1,
            mobileFirst: true,
          }
        }
  ]
});
