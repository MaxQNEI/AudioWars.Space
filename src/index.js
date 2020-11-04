import './index.scss';

class Root {
  static DOM;

  constructor() {
    this.InitDOMElement();
  }

  InitDOMElement() {
    Root.DOM = document.createElement('div');
    Root.DOM.classList.add('root');
    document.body.appendChild(Root.DOM);
  }
}

window.addEventListener('load', () => new Root);
