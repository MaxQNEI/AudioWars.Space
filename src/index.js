import './index.styl';
import PugIndex from './index.pug';

class Root {
  static DOM;

  constructor() {
    document.body.innerHTML = PugIndex.call(this, {
      HW: 'Hello World!',
    });
  }
}

window.addEventListener('load', () => new Root);
