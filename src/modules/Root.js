import '../styles/root.styl';
import PugRoot from '../views/root.pug';

import ModuleBackground from './Background.js'
import ModuleLanguage from './Language.js'
// import ModuleSlideList from './SlideList.js'
// import ModuleSlideIndicatorList from './SlideIndicatorList.js'

export default class ModuleRoot {
  static RootElement;

  static Modules = [
    ModuleBackground,
    ModuleLanguage,
    // ModuleSlideList,
    // ModuleSlideIndicatorList,
  ];

  constructor({ ParentElement }) {
    ModuleRoot.RootElement = HTML2DOM(PugRoot.call(this, {
      // Variables
    }), ParentElement)[0];

    this.InvokeModules();
  }

  InvokeModules() {
    const ToModules = { ParentElement: ModuleRoot.RootElement };

    ModuleRoot.Modules.forEach((module) => {
      new module(ToModules);
    });
  }
}
