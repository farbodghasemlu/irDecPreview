$(document).ready(function () {
    $(".xzoom, .xzoom-gallery").xzoom({
      position: "#xzoom-id",
      lens: "#ffffff4d",
      // zoomClass: 'zoom'
    });

    //If not touch device
    $("#xzoom-magnific").bind("click", function (event) {
      var xzoom = $(this).data("xzoom");
      xzoom.closezoom();
      var gallery = xzoom.gallery().cgallery;
      var i,
        images = new Array();
      for (i in gallery) {
        images[i] = { src: gallery[i] };
      }
      $.magnificPopup.open({
        items: images,
        type: "image",
        gallery: { enabled: true },
      });
      event.preventDefault();
    });
  });