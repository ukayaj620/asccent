export default {
  load(name) {
    switch (name) {
      case 'bg_home':
        return require('../assets/backgrounds/home.png');
      case 'bg_contact':
        return require('../assets/backgrounds/contact_us.png');
      case 'bg_about':
        return require('../assets/backgrounds/about_us.png')
      case 'brand':
        return require('../assets/asccent.svg');
      case 'brand-white':
        return require('../assets/asccent-transparent.svg');
      case 'menu-active':
        return require('../assets/menu-active.svg');
      case 'menu-unactive':
        return require('../assets/menu-unactive.svg');
      case 'cross':
        return require('../assets/x.svg');
      default:
        return null;
    };
  },
};