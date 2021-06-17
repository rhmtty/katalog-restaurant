const NavbarInitiator = {
  init({ header }) {
    window.addEventListener('scroll', () => {
      this._openNavbar(header);
    });
  },

  _openNavbar(header) {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  },
};

export default NavbarInitiator;
