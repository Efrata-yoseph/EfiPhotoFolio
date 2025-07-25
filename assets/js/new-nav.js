document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Mobile nav toggle
   */
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('body').classList.toggle('mobile-nav-active');

      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  /**
   * Hide mobile nav on same-page/same-hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        document.querySelector('body').classList.remove('mobile-nav-active');
        let navbarToggle = document.querySelector('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navmenu .toggle-dropdown');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      this.parentElement.classList.toggle('active');
      this.parentElement.nextElementSibling.classList.toggle('dropdown-active');
    });
  });

});
