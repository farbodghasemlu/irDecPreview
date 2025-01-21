$(document).ready(function () {
  $('[data-rule="dialog"]').click(function (e) {
    e.preventDefault(); // Prevent default behavior (if any)
    e.stopPropagation(); // Stop event propagation
    // Get the target element using the data-target attribute
    const target = $(this).attr("data-target");
    const targetEl = $(`[data-toggler="${target}"]`);

    // Toggle the "open" class on the target element
    console.log(!targetEl.hasClass("open"), targetEl);
    if (!targetEl.hasClass("open")) targetEl.addClass("open");
    else targetEl.removeClass("open");
  });
  // Toggle accordion panels
  $(".panel-heading").click(function () {
    // Toggle the active class on the clicked panel heading
    $(this).toggleClass("active");

    // Toggle the visibility of the associated panel body
    $(this).next(".panel-body").slideToggle();
  });
  $(document).click(function (e) {
    const targetEl = $("[data-toggler].open");
    if (targetEl.length && !$(e.target).closest("[data-toggler].open").length) {
      targetEl.removeClass("open");
    }
  });
  // Close all other panels when one is opened (optional)
  $(".panel-heading").click(function () {
    $(".panel-heading").not(this).removeClass("active");
    $(".panel-body").not($(this).next(".panel-body")).slideUp();
  });

  // Toggle dropdown visibility
  $(".menu__btn").click(function () {
    // Close all other dropdowns
    $(".menu__main").not($(this).siblings(".menu__main")).hide();

    // Toggle the current dropdown
    $(this).siblings(".menu__main").toggle();
  });

  // Close dropdown when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest(".menu__wrapper").length) {
      $(".menu__main").hide();
    }
  });

  // Handle dropdown item selection
  $(".menu__list li").click(function () {
    // Update the dropdown button text with the selected item's text
    const selectedText = $(this).text();
    $(this).closest(".menu__wrapper").find(".select-btn").text(selectedText);

    // Hide the dropdown after selection
    $(this).closest(".menu__main").hide();
  });
});
