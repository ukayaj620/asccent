export default {
  load(name) {
    switch (name) {
      case 'background':
        return require('../assets/background.svg');
      default:
        return null;
    };
  },
};