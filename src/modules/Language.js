import '../styles/language.styl';
import PugLanguage from '../views/language.pug';

import Texts from '../assets/Texts.js';

export default class ModuleLanguage {
  static LanguageElement;

  static Language = 'en';
  static LanguageList = Object.keys(Texts);

  static ButtonByLanguage = {};

  constructor({ ParentElement }) {
    ModuleLanguage.LanguageElement = HTML2DOM(PugLanguage.call(this, {
      // Variables
    }), ParentElement)[0];


    this.Detect();
    this.AddListeners();
    this.UpdateTexts();
  }

  Detect() {
    // // Detect
    var Found = (ModuleLanguage.LanguageList.includes(window.localStorage.Language) ? window.localStorage.Language : null);
    !Found && window.navigator.languages.every(function(lang) {
      lang = lang.toLowerCase();
      ModuleLanguage.LanguageList.includes(lang) && (Found = lang);
      return !Found;
    });

    ModuleLanguage.Language = (Found || ModuleLanguage.Language);
  }

  AddListeners() {
    const ButtonList = ModuleLanguage.LanguageElement.querySelectorAll('button');
    ButtonList.forEach((button) => {
      ModuleLanguage.ButtonByLanguage[button.dataset.lang] = button;

      button.addEventListener('click', (event) => {
        if(ModuleLanguage.Language === event.target.dataset.lang) {
          return;
        }

        event.preventDefault();

        window.localStorage.Language
          = ModuleLanguage.Language
          = event.target.dataset.lang
        ;

        this.UpdateTexts();
      });
    });
  }

  UpdateTexts() {
    const current = ModuleLanguage.LanguageElement.querySelector('button.current');
    current && current.classList.remove('current');
    ModuleLanguage.ButtonByLanguage[ModuleLanguage.Language].classList.add('current');

    const TextElementList = ModuleLanguage.LanguageElement.querySelectorAll('text[key]');

    TextElementList.forEach(function(TextElement) {
      var key = TextElement.getAttribute('key');
      var text = Texts[ModuleLanguage.Language][key];

      TextElement.innerHTML = text;
    });
  }
}
