// import './index.scss';

class Root {
  constructor() {
    console.debug('Root.constructor()', document.body);
  }
}

window.addEventListener('load', () => new Root);
