// mobile nav toggle
const primaryHeader = document.querySelector('.primary-header');
var navToggle = document.querySelector('.mobile-nav-toggle');
var nav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', function () {
  nav.hasAttribute('data-visible') ? nav.setAttribute('aria-visible', true) : nav.setAttribute('aria-visible', false);
  nav.toggleAttribute('data-visible');

  primaryHeader.toggleAttribute('data-overlay');
});

