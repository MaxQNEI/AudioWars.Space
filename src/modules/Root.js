import '../styles/root.styl';
import PugRoot from '../views/root.pug';

import ModuleBackground from './Background.js'
import ModuleLanguage from './Language.js'
import ModuleSlide from './Slide.js'

export default class ModuleRoot {
  static RootElement;

  Modules = [
    ModuleSlide,
    ModuleLanguage,
    ModuleBackground,
  ];

  constructor({ ParentElement }) {
    ModuleRoot.RootElement = HTML2DOM(PugRoot.call(this, {
      // Variables
    }), ParentElement)[0];

    this.InvokeModules();
  }

  InvokeModules() {
    const ToModules = { ParentElement: ModuleRoot.RootElement };

    this.Modules.forEach((module) => {
      new module(ToModules);
    });
  }
}
