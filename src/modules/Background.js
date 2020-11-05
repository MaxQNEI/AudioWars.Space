import '../styles/background.styl';
import Background from '../views/background.pug';

export default class ModuleBackground {
  constructor({ ParentElement }) {
    ModuleBackground.BackgroundElement = HTML2DOM(Background.call(this, {
      // Variables
    }), ParentElement);


  }
}
