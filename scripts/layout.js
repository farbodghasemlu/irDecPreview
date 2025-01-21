$(document).ready(function () {
    // Get the header and the navbar menu wrapper
    const $header = $("header.navbar__main-section");
    const $navMenuWrapper = $(".navbar__nav-menu-ext-wrap");
  
    if ($header.length && $navMenuWrapper.length) {
      // Function to handle scroll events
      function handleScroll() {
        // Get the bounding rectangle of the header
        const headerRect = $header[0].getBoundingClientRect();
  
        // Check if the user has scrolled past the header
        if (headerRect.bottom <= 0) {
          // Add the header-scroll class to the navbar menu wrapper
          $navMenuWrapper.addClass("header-scroll");
        } else {
          // Remove the header-scroll class from the navbar menu wrapper
          $navMenuWrapper.removeClass("header-scroll");
        }
      }
  
      // Attach the scroll event listener
      $(window).on("scroll", handleScroll);
    } else {
      console.error("Required elements not found in the DOM.");
    }
    $(".navbar__menu-level-top").hover(
        function () {
          // Find the mega menu inside the current .navbar__menu-level-top
          const megaMenu = $(this).find(".navbar__menu-dropdown");
          console.log(megaMenu); // Debug: Check if the element is found
    
          if (megaMenu.length) {
            // Show the mega menu
            megaMenu.css({
              display: "block",
              opacity: 1,
              visibility: "visible",
            });
          } else {
            console.error("Mega menu not found!");
          }
        },
        function () {
          // Find the mega menu inside the current .navbar__menu-level-top
          const megaMenu = $(this).find(".navbar__menu-dropdown");
    
          if (megaMenu.length) {
            // Hide the mega menu
            megaMenu.css({
              display: "none",
              opacity: 0,
              visibility: "hidden",
            });
          }
        }
      );
      $(document).ready(function() {
        const $searchInput = $('#search');
        const $searchDropdown = $('.search-dropdown');
      
        // Show dropdown on input focus
        $searchInput.on('focus', function() {
          $searchDropdown.show();
        });
      
        // Hide dropdown when clicking outside
        $(document).on('click', function(event) {
          if (!$searchInput.is(event.target) && !$searchDropdown.is(event.target) && $searchDropdown.has(event.target).length === 0) {
            $searchDropdown.hide();
          }
        });
      });
  });
  $(document).ready(function() {
    const $menuItems = $('.navbar__menu-list-item');
    const $megaMenu = $('#megamenu');
  
    // Show mega menu on hover
    $menuItems.hover(
      function() {
        $megaMenu.stop(true, true).fadeIn(200); // Fade in the mega menu
      },
      function() {
        $megaMenu.stop(true, true).fadeOut(200); // Fade out the mega menu
      }
    );
  
    // Optional: Keep mega menu visible when hovering over it
    $megaMenu.hover(
      function() {
        $(this).stop(true, true).fadeIn(200); // Keep it visible
      },
      function() {
        $(this).stop(true, true).fadeOut(200); // Hide it when leaving
      }
    );
  });