import '../styles/background.styl';
import Background from '../views/background.pug';

export default class ModuleBackground {
  BackgroundElement;

  constructor({ ParentElement }) {
    this.BackgroundElement = HTML2DOM(Background.call(this, {
      // Variables
    }), ParentElement);


  }
}
