'use strict';

/**
 * Use prototypes:
 *    HTMLElement.{remove|addClass|removeClass|hasClass}
 */

window.addEventListener('load', IndexController);
window.addEventListener('DOMContentLoaded', IndexController);

function IndexController(Params) {
  window.removeEventListener('load', IndexController);
  window.removeEventListener('DOMContentLoaded', IndexController);

  if(!(this instanceof IndexController)) {
    return new IndexController(Params);
  }

  // Constants -------------------------------------------------------------- //
  var DOMRoot = document.querySelector('.root');

  // Properties ------------------------------------------------------------- //
  var Language = 'en'; // en - default

  var ThreeController;

  // Instance --------------------------------------------------------------- //
  function Instance() {
    return Instance;
  }

  // Consructor ------------------------------------------------------------- //
  return (function() {
    UpdInstance();
    InitLanguageController();
    InitSlideController();
    InitThreeController();

    var event = new Event('index-controller');
    event.Controller = Instance;
    window.dispatchEvent(event);

    return Instance;
  })();

  // Methods ---------------------------------------------------------------- //
  function UpdInstance() {
    Object.defineProperties(Instance, {
      DOMRoot: { enumerable: true, value: DOMRoot },
    });

    return this;
  }


  function InitLanguageController() { /* FOLD */

    var DOMButtonLanguageList = document.querySelectorAll('.language button');
    if(!DOMButtonLanguageList || !DOMButtonLanguageList.length) { return; }

    var LanguageList = Object.keys(window.Texts);

    var ButtonByLanguage = {};

    // Detect
    var FoundLanguage = (LanguageList.includes(window.localStorage.Language) ? window.localStorage.Language : null);
    !FoundLanguage && window.navigator.languages.every(function(lang) {
      lang = lang.toLowerCase();
      LanguageList.includes(lang) && (FoundLanguage = lang);
      return !FoundLanguage;
    });

    Language = (FoundLanguage || Language || 'en');

    // Add change listeners
    DOMButtonLanguageList.forEach(function(button) {
      ButtonByLanguage[button.dataset.lang] = button;

      button.addEventListener('click', function(event) {
        window.localStorage.Language
          = Language
          = this.dataset.lang
        ;

        Upd();
      });
    });

    // Launch
    Upd();

    // Updater
    function Upd() {
      var current = document.querySelector('.language button.current');
      current && current.removeClass('current');
      ButtonByLanguage[Language].addClass('current');

      var DOMTextList = document.querySelectorAll('text[key]');

      DOMTextList.forEach(function(t) {
        var key = t.getAttribute('key');
        var index = key.replace(/^.*?\[(\d+)\]$/, '$1');

        key = key.replace(/^(.*?)\[\d+\]$/, '$1');

        var text = window.Texts[Language][key];
        text = (text instanceof Array ? text[index] : text);

        // console.debug(key, index, text);

        t.innerHTML = text;
      });
    }

    return this;
  }

  function InitSlideController() { /* FOLD */
    // Slide elements
    var DOMSlideList = DOMRoot.querySelector('.slide-list');
    if(!DOMSlideList) { return; }

    var DOMSlideIndicatorList = DOMRoot.querySelector('.slide-indicator-list');
    var DOMGoToSlideList = DOMRoot.querySelectorAll('*[goto-slide]');

    // Indicator item template
    var SlideIndicatorItemTemplate = DOMSlideIndicatorList.querySelector('.slide-indicator-item.template');
    SlideIndicatorItemTemplate.remove().removeClass('template');

    //
    var SlideList = DOMSlideList.querySelectorAll('.slide-item');
    var SlideByOffsetTop = {};
    var IndicatorList = [];
    var IndicatorBySlideId = [];
    var IndicatorActive;
    var SlideCurrentId;

    // Create indicators & slides ids from slides elements
    SlideList.forEach(function(DOMSlideItem, index) {
      var SlideName = DOMSlideItem.querySelector('slide-name');
      var SlideId = (DOMSlideItem.id = (DOMSlideItem.id || ('Slide'+ index.toString().padStart(2, '0'))));

      SlideByOffsetTop[window[SlideId].offsetTop] = window[SlideId];

      var Indicator = SlideIndicatorItemTemplate.cloneNode(true);
      var IndicatorTitle = Indicator.querySelector('.title');

      if(SlideName && SlideName.children[0]) {
        IndicatorTitle.appendChild(SlideName.children[0]);
      } else {
        IndicatorTitle.innerHTML = ('#'+ SlideId);
      }

      Indicator.Slide = window[SlideId];
      IndicatorBySlideId[SlideId] = Indicator;
      Indicator.addEventListener('click', function() {
        window.scroll({
          top: this.Slide.offsetTop,
          behavior: 'smooth',
        });
      });

      DOMSlideIndicatorList.appendChild(Indicator);
    });

    SlideCurrentId = SlideList[0].id;


    Object.defineProperties(IndicatorList, {
      Upd: { enumerable: true, value: function Upd() {
        // console.debug(window.scrollY);

        var current, fxShow;
        Object.entries(SlideByOffsetTop).forEach(function([ offset, slide ]) {
          offset = parseFloat(offset);
          // console.debug(offset, slide);

          var halfHeight = (slide.offsetHeight / 2);
          var quarterHeight = (slide.offsetHeight / 4);
          var offsetTop = slide.offsetTop;
          var offsetMiddle = (offsetTop + halfHeight);
          var offsetBottom = (offsetTop + slide.offsetHeight);

          // console.debug('offsetTop, offsetMiddle, offsetBottom', offsetTop, offsetMiddle, offsetBottom);

          if(window.scrollY >= (offsetTop - halfHeight)) {
            current = slide;
          }

          if(window.scrollY >= (offsetTop - quarterHeight)) {
            fxShow = slide;
          }
        });

        if(current) {
          IndicatorActive && IndicatorActive.removeClass('active');
          IndicatorActive = IndicatorBySlideId[current.id]
          IndicatorActive.addClass('active');

          fxShow && RunFXShow(fxShow);
        }
      } },
    });

    IndicatorList.Upd();
    window.addEventListener('scroll', function() {
      IndicatorList.Upd();
    });


    DOMGoToSlideList.forEach(function(button) {
      button.addEventListener('click', function(event) {
        var SlideId = this.getAttribute('goto-slide');
        var Slide = window[SlideId];

        if(!Slide) { return; }

        window.scroll({
          top: Slide.offsetTop,
          behavior: 'smooth',
        });
      });
    });

    // window.addEventListener('wheel', function(event) {
    //   var newTop;
    //   (event.deltaY < 0 || event.deltaY > 0) && (newTop = (window.scrollY + (event.deltaY * 100)));

    //   newTop && window.scroll({
    //     top: newTop,
    //     behavior: 'smooth',
    //   });
    // });

    return this;
  }

  function InitThreeController() { /* FOLD */
    if(!window.ThreeController) { return; }

    ThreeController = new window.ThreeController({
      IndexController: Instance,
    });

    return this;
  }


  function RunFXShow(Slide) { /* FOLD */
    if(Slide.FXShowComplete) {
      return;
    }

    Slide.FXShowComplete = true;

    (function recursion(ItemList, parentTime) {
      if(!ItemList) { return; }

      parentTime = (parentTime || 0);

      ItemList.forEach(function(item) {
        parentTime += (item.hasAttribute('fx-show-up') ? (250 * parseInt(item.getAttribute('fx-show-up') || 1)) : 0);

        var itemTime = (parentTime + parseInt(item.getAttribute('fx-show') || 0));


        // var itemTime = (time + parseInt(item.getAttribute('fx-show') || 0));

        if(!item.showTimeout) {
          item.showTimeout = setTimeout(function() {
            item.addClass('fx-show-active');
          }, itemTime);
        }

        recursion(item.querySelectorAll('.fx-show'), itemTime);
      });
    })(Slide.querySelectorAll('.fx-show'));

    return this;
  }

  // Events ----------------------------------------------------------------- //

  // Helpers ---------------------------------------------------------------- //

}
