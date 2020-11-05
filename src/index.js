import './styles/index.styl';
import './assets/HTML2DOM.js';
import ModuleRoot from './modules/Root.js';

window.addEventListener('load', () => {
  new ModuleRoot({ ParentElement: document.body });
});
