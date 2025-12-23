////// Tooltip //////
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();
$(window).scroll(function (event) {
  didScroll = true;
});
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var st = $(this).scrollTop();
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").addClass("short");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("short");
    }
  }
  lastScrollTop = st;
}
jQuery(document).on("scroll", function () {
  if (jQuery(document).scrollTop() >= 10) {
    jQuery(".site-header").addClass("header-scroll");
  } else {
    jQuery(".site-header").removeClass("header-scroll");
  }
});
/*Menu Hide Show jQuery*/
function darken_screen(yesno) {
  if (yesno == true) {
    document.querySelector(".screen-darken").classList.add("active");
  } else if (yesno == false) {
    document.querySelector(".screen-darken").classList.remove("active");
  }
}
function close_offcanvas() {
  darken_screen(false);
  document.querySelector(".mobile-offcanvas.show").classList.remove("show");
  document.body.classList.remove("offcanvas-active");
}
function show_offcanvas(offcanvas_id) {
  darken_screen(true);
  document.getElementById(offcanvas_id).classList.add("show");
  document.body.classList.add("offcanvas-active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-trigger]").forEach(function (everyelement) {
    let offcanvas_id = everyelement.getAttribute("data-trigger");
    everyelement.addEventListener("click", function (e) {
      e.preventDefault();
      show_offcanvas(offcanvas_id);
    });
  });
  document.querySelectorAll(".offcanvas-close").forEach(function (everybutton) {
    everybutton.addEventListener("click", function (e) {
      close_offcanvas();
    });
  });
  document
    .querySelector(".screen-darken")
    .addEventListener("click", function (event) {
      close_offcanvas();
    });
});
// Dropdown toggle click event
jQuery(".dropdown-toggle").click(function (e) {
  if (jQuery(window).width() < 992) {
    // Only for mobile
    e.preventDefault(); // Prevent default link behavior
    var $menu = jQuery(this).next(".dropdown-menu");

    if ($menu.hasClass("show")) {
      $menu.removeClass("show"); // Hide dropdown if already open
      jQuery(this).removeClass("active-toggle"); // Remove extra class from dropdown-toggle
    } else {
      jQuery(".dropdown-menu.show").removeClass("show"); // Close other dropdowns
      jQuery(".dropdown-toggle.active-toggle").removeClass("active-toggle"); // Remove class from other toggles
      $menu.addClass("show"); // Show clicked dropdown
      jQuery(this).addClass("active-toggle"); // Add extra class to dropdown-toggle
    }
  }
});
// Close dropdowns when clicking outside
jQuery(document).click(function (e) {
  if (!jQuery(e.target).closest(".dropdown").length) {
    jQuery(".dropdown-menu.show").removeClass("show");
    jQuery(".dropdown-toggle.active-toggle").removeClass("active-toggle");
  }
});
//Scroll back to top
var progressPath = document.querySelector(".top-progress-wrap path");
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  "stroke-dashoffset 10ms linear";
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;
};
updateProgress();
jQuery(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery(".top-progress-wrap").addClass("top-active-progress");
  } else {
    jQuery(".top-progress-wrap").removeClass("top-active-progress");
  }
});
jQuery(".top-progress-wrap").on("click", function (event) {
  event.preventDefault();
  jQuery("html, body").animate({ scrollTop: 0 }, duration);
  return false;
});
/* Whatsapp Icon */
jQuery(document).scroll(function () {
  if (jQuery(this).scrollTop() > 50) {
    jQuery(".whatsapp-icon").removeClass("bottom-16");
  } else {
    jQuery(".whatsapp-icon").addClass("bottom-16");
  }
});
/*Saerch bar Hide Show jQuery*/
jQuery("#showSearchBar").click(function () {
  jQuery("#searchBar").removeClass("hide opacity-0");
  //jQuery("#searchBar .form-control").focus();
});
jQuery("#hideSearchBar").click(function () {
  jQuery("#searchBar").addClass("hide opacity-0");
});
jQuery(document).on("keyup", function (e) {
  if (e.key == "Escape") jQuery("#hideSearchBar").click();
});

/* Extended: Input validation + animated search button */
jQuery(function () {
  const $submitBtn = jQuery("#showInnerSearchBar");
  const $input = jQuery("#user_data");

  // Initially hide the button
  $submitBtn.hide();

  $input.on("input", function () {
    const val = $input.val().trim();

    if (val.length >= 4) {
      if (!$submitBtn.is(":visible")) {
        $submitBtn.stop(true, true).fadeIn(200);
      }
      $input.removeClass("is-invalid");
    } else {
      if ($submitBtn.is(":visible")) {
        $submitBtn.stop(true, true).fadeOut(200);
      }
    }
  });

  jQuery("#headerglobal_form").on("submit", function (e) {
    const val = $input.val().trim();
    if (val.length < 4) {
      e.preventDefault();
      $input.addClass("is-invalid");
    }
  });
  jQuery("#hideSearchBar").on("click", function () {
    $input.removeClass("is-invalid");
    $submitBtn.stop(true, true).fadeOut(200);
  });
});

/* In view animation*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal); // 👈 THIS FIXES IT

/* Tabs */
jQuery(document).ready(function () {
  // Active tab indicator
  function updateIndicator(tab) {
    var tabElement = jQuery(tab);
    var width = tabElement.outerWidth();

    if (jQuery("html").attr("dir") === "rtl") {
      var rightOffset =
        tabElement.parent().width() - (tabElement.position().left + width);
      jQuery(".active-tab-indicator").css({
        width: width + "px",
        transform: "translateX(-" + rightOffset + "px)",
      });
    } else {
      var leftOffset = tabElement.position().left;
      jQuery(".active-tab-indicator").css({
        width: width + "px",
        transform: "translateX(" + leftOffset + "px)",
      });
    }
  }
  // Run only if tabs exist
  if (jQuery(".custom-tab .nav-link").length > 0) {
    var activeTab = jQuery(".custom-tab .nav-link.active");
    if (activeTab.length > 0) {
      updateIndicator(activeTab);
    }
    jQuery(".custom-tab .nav-link").on("shown.bs.tab", function () {
      updateIndicator(this);
    });
    jQuery(window).resize(function () {
      var currentTab = jQuery(".custom-tab .nav-link.active");
      if (currentTab.length > 0) {
        updateIndicator(currentTab);
      }
    });
  }
  // Mouse wheel horizontal scroll
  jQuery(".nav-tabs-container").on("wheel", function (e) {
    if (e.originalEvent.deltaY !== 0) {
      e.preventDefault();
      this.scrollLeft += e.originalEvent.deltaY;
    }
  });
  // Drag to scroll
  var isDown = false;
  var startX;
  var scrollLeft;
  var container = jQuery(".nav-tabs-container");
  container.on("mousedown", function (e) {
    isDown = true;
    container.addClass("dragging");
    startX = e.pageX - container.offset().left;
    scrollLeft = container.scrollLeft();
  });
  container.on("mouseleave mouseup", function () {
    isDown = false;
    container.removeClass("dragging");
  });
  container.on("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - container.offset().left;
    var walk = (x - startX) * 1.5;
    container.scrollLeft(scrollLeft - walk);
  });
});
