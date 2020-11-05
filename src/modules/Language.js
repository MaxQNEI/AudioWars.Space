import '../styles/language.styl';
import PugLanguage from '../views/language.pug';

import ModuleRoot from './Root.js';
import Texts from '../assets/Texts.js';

export default class ModuleLanguage {
  LanguageElement;

  Language = 'en';
  LanguageList = Object.keys(Texts);

  ButtonByLanguage = {};

  constructor({ ParentElement }) {
    this.LanguageElement = HTML2DOM(PugLanguage.call(this, {
      // Variables
    }), ParentElement)[0];


    this.Detect();
    this.AddListeners();
    this.UpdateTexts();

    setTimeout(() => {
      this.UpdateTexts();
    }, 2000);
  }

  Detect() {
    // // Detect
    var Found = (this.LanguageList.includes(window.localStorage.Language) ? window.localStorage.Language : null);
    !Found && window.navigator.languages.every(function(lang) {
      lang = lang.toLowerCase();
      this.LanguageList.includes(lang) && (Found = lang);
      return !Found;
    });

    this.Language = (Found || this.Language);
  }

  AddListeners() {
    const ButtonList = this.LanguageElement.querySelectorAll('button');

    ButtonList.forEach((button) => {
      this.ButtonByLanguage[button.dataset.lang] = button;

      button.addEventListener('click', (event) => {
        if(this.Language === event.target.dataset.lang) {
          return;
        }

        event.preventDefault();

        window.localStorage.Language
          = this.Language
          = event.target.dataset.lang
        ;

        this.UpdateTexts();
      });
    });
  }

  UpdateTexts() {
    const current = this.LanguageElement.querySelector('button.current');
    current && current.classList.remove('current');
    this.ButtonByLanguage[this.Language].classList.add('current');

    const TextElementList = ModuleRoot.RootElement.querySelectorAll('text[key]');

    TextElementList.forEach((TextElement) => {
      var key = TextElement.getAttribute('key');
      var text = Texts[this.Language][key];

      TextElement.innerHTML = text;
    });
  }
}
