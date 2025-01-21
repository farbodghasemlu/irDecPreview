$(document).ready(function () {
  var owl = $(".stores__cities");
  owl.owlCarousel({
    loop: true,
    margin: 20, // Space between items
    nav: false, // Disable default navigation
    dots: false, // Disable dots
    rtl: true, // Right-to-left direction
    responsive: {
      0: {
        items: 1, // 1 item on small screens
      }, 
      600: {
        items: 2, // 2 items on medium screens
      },
      1000: {
        items: 3, // 3 items on large screens
      },
    },
  });

  // Custom navigation
  $(".next-slide").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-slide").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".stores__banner-carousel").owlCarousel({ items: 1, rtl: true });
  $(".stores__events-carousel").owlCarousel({ rtl: true, autoplay: true });
  $(".stores__popular-cities-carousel").owlCarousel({
    margin: 12, // Space between items
    responsive: {
      0: {
        items: 2, // 1 item on small screens
      },
      600: {
        items: 4, // 2 items on medium screens
      },
      1000: {
        items: 6, // 3 items on large screens
      },
    },
  });
  $(".xzoom, .xzoom-gallery").xzoom({
    position: "#xzoom-id",
    lens: "#ffffff4d",
    // zoomClass: 'zoom'
  });
});
