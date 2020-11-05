import '../styles/slide-list.styl';
import '../styles/slide-indicator.styl';
import PugSlideList from '../views/slide-list.pug';
import PugSlideIndicator from '../views/slide-indicator.pug';
import PugSlideIndicatorItem from '../views/slide-indicator-item.pug';

export default class ModuleSlide {
  SlideListElement;

  SlideItemList;
  SlideIndicatorWrap;
  SlideIndicatorList;
  SlideIndicatorItemTemplate;
  GoToElements;

  SlideByOffsetTop = {};
  IndicatorBySlideId = {};
  IndicatorActive;

  CurrentSlide;
  WaitScrollEnd;

  constructor({ ParentElement }) {
    this.SlideListElement = HTML2DOM(PugSlideList.call(this, {
      // Variables
    }), ParentElement)[0];

    this.SlideIndicatorWrap = HTML2DOM(PugSlideIndicator.call(this, {
      // Variables
    }), ParentElement)[0];

    this.SlideIndicatorItemTemplate = HTML2DOM(PugSlideIndicatorItem.call(this, {
      // Variables
    }))[0];


    this.FindElements();
    this.CreateIndicators();
    this.UpdateGoToElements();
  }

  FindElements() {
    this.SlideItemList = this.SlideListElement.querySelectorAll('.slide-item');
    this.SlideIndicatorList = this.SlideIndicatorWrap.querySelector('.slide-indicator-list');
    this.GoToElements = this.SlideListElement.querySelectorAll('*[goto-slide]');
  }

  CreateIndicators() {
    this.SlideItemList.forEach((SlideItemElement, index) => {
      var SlideName = SlideItemElement.querySelector('slide-name');
      var SlideId = (SlideItemElement.id = (SlideItemElement.id || ('Slide'+ index.toString().padStart(2, '0'))));

      this.SlideByOffsetTop[window[SlideId].offsetTop] = window[SlideId];

      var Indicator = this.SlideIndicatorItemTemplate.cloneNode(true);
      var IndicatorTitle = Indicator.querySelector('.title');

      if(SlideName && SlideName.children[0]) {
        IndicatorTitle.appendChild(SlideName.children[0]);
      } else {
        IndicatorTitle.innerHTML = ('#'+ SlideId);
      }

      Indicator.Slide = window[SlideId];
      this.IndicatorBySlideId[SlideId] = Indicator;
      Indicator.addEventListener('click', (event) => {
        // this.WaitScrollEnd = true;

        window.scroll({
          top: Indicator.Slide.offsetTop,
          behavior: 'smooth',
        });
      });

      this.SlideIndicatorList.appendChild(Indicator);
    });

    this.UpdateIndicators();
    window.addEventListener('scroll', () => {
      this.UpdateIndicators();
    });
  }

  UpdateIndicators() {
    var current, fxShow;

    // if(this.WaitScrollEnd) {
    //   this.WaitScrollEnd && clearTimeout(this.WaitScrollEnd);
    //   this.WaitScrollEnd = setTimeout(() => {
    //     this.WaitScrollEnd = null;
    //   }, 500);
    // }

    Object.entries(this.SlideByOffsetTop).forEach(function([ offset, slide ]) {
      offset = parseFloat(offset);

      var halfHeight = (slide.offsetHeight / 2);
      var quarterHeight = (slide.offsetHeight / 4);
      var offsetTop = slide.offsetTop;
      var offsetMiddle = (offsetTop + halfHeight);
      var offsetBottom = (offsetTop + slide.offsetHeight);

      if(window.scrollY >= (offsetTop - halfHeight)) {
        current = slide;
      }

      // if(window.scrollY >= (offsetTop - quarterHeight)) {
      if(window.scrollY >= (offsetTop - halfHeight)) {
        fxShow = slide;
      }
    });

    if(current) {
      const isNewSlide = (this.CurrentSlide !== current);
      this.CurrentSlide = current;

      this.IndicatorActive && this.IndicatorActive.classList.remove('active');
      this.IndicatorActive = this.IndicatorBySlideId[current.id]
      this.IndicatorActive.classList.add('active');

      fxShow && this.RunFXShow(fxShow);

      // if(!this.WaitScrollEnd) {
      //   isNewSlide && window.scroll({
      //     top: current.offsetTop,
      //     behavior: 'smooth',
      //   });
      // }
    }
  }

  UpdateGoToElements() {
    this.GoToElements.forEach((button) => {
      button.addEventListener('click', (event) => {
        var SlideId = button.getAttribute('goto-slide');
        var Slide = window[SlideId];

        if(!Slide) { return; }

        window.scroll({
          top: Slide.offsetTop,
          behavior: 'smooth',
        });
      });
    });
  }

  RunFXShow(Slide) {
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

        if(!item.showTimeout) {
          item.showTimeout = setTimeout(function() {
            item.classList.add('fx-show-active');
          }, itemTime);
        }

        recursion(item.querySelectorAll('.fx-show'), itemTime);
      });
    })(Slide.querySelectorAll('.fx-show'));
  }
}
