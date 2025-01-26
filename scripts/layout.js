$(document).ready(function () {
  // Cache frequently used elements
  const $header = $("header.navbar__main-section");
  const $navMenuWrapper = $(".navbar__nav-menu-ext-wrap");
  const $navbar = $(".navbar__main-menu-container");
  const $overlayToggler = $(".category__overlay-toggler");
  const $bottomNav = $(".bottom-navigation__container");
  const $footerToggle = $('.footer__content-toggle');
  const $footerContent = $('.footer__content-mobile');
  const $searchInput = $('#search');
  const $searchDropdown = $('.search-dropdown');

  // Function to handle scroll events
  function handleScroll() {
      const headerRect = $header[0].getBoundingClientRect();
      const scrollTop = $(window).scrollTop();
      const navbarOffset = $navbar.offset().top;

      if ($(window).width() < 768) {
          if (!$navbar.hasClass("categories-open")) {
              if (scrollTop >= navbarOffset) {
                  if (scrollTop > lastScrollTop) {
                      $navbar.removeClass("header-scroll");
                  } else {
                      $navbar.addClass("header-scroll");
                  }
              } else {
                  $navbar.removeClass("header-scroll");
              }
          }
      } else {
          $navbar.removeClass("header-scroll categories-open");
      }

      if (headerRect.bottom <= 0) {
          $navMenuWrapper.addClass("header-scroll");
      } else {
          $navMenuWrapper.removeClass("header-scroll");
      }

      lastScrollTop = scrollTop;
  }

  // Attach the scroll event listener
  $(window).on("scroll", handleScroll);

  // Handle hover events for mega menu
  $(".navbar__nav-menu-ext-wrap .navbar__menu-level-top").hover(
      function () {
          const megaMenu = $("#megamenu");
          if (megaMenu.length) {
              megaMenu.css({ display: "block", opacity: 1, visibility: "visible" });
          }
      },
      function () {
          const megaMenu = $("#megamenu");;
          if (megaMenu.length) {
              megaMenu.css({ display: "none", opacity: 0, visibility: "hidden" });
          }
      }
  );

  // Handle search input focus and blur
  $searchInput.on('focus', function() {
      $searchDropdown.show();
  });

  $(document).on('click', function(event) {
      if (!$searchInput.is(event.target) && !$searchDropdown.is(event.target) && $searchDropdown.has(event.target).length === 0) {
          $searchDropdown.hide();
      }
  });

  // Handle footer toggle click
  $footerToggle.click(function() {
      $footerContent.toggle();
      $footerToggle.text($footerContent.is(':visible') ? 'نمایش کمتر' : 'نمایش بیشتر');
  });

  // Handle overlay toggler click
  $overlayToggler.click(function () {
      if ($(window).width() < 768) {
          $navbar.toggleClass("categories-open");
          $bottomNav.toggleClass("categories-open");
          if ($navbar.hasClass("categories-open")) {
              $navbar.addClass("header-scroll");
          }
      }
  });

  // Handle window resize
  $(window).resize(function () {
      if ($(window).width() >= 768) {
          $navbar.removeClass("header-scroll categories-open");
      }
  });

  // Initialize lastScrollTop
  let lastScrollTop = 0;
});