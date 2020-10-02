export default {
  load(name) {
    switch (name) {
      case 'background':
        return require('../assets/background.svg');
      case 'brand':
        return require('../assets/asccent.svg');
      case 'brand-white':
        return require('../assets/asccent-transparent.svg');
      default:
        return null;
    };
  },
};