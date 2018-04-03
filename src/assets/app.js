document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  let $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Check if there are any navbar items
  if ($navbarItems.length > 0) {

    // Add a click event on each of them
    $navbarItems.forEach(function ($el) {

      $el.addEventListener('click', function () {
        const $navbarMenu = document.getElementById('navMenu');
        const $navbarBurger = document.getElementById('navBurger');

        $navbarMenu.classList.toggle('is-active');
        $navbarBurger.classList.toggle('is-active');
        reloadNavBarItems();
      });
    });
  }

  function reloadNavBarItems() {
    $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
  }



});
