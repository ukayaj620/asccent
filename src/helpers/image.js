export default {
  load(name) {
    switch (name) {
      case 'background':
        return require('../assets/background.svg');
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