'use strict';

(function() {
  if(HTMLElement.prototype.hasOwnProperty('addClass')) { return; }
  if(HTMLElement.prototype.hasOwnProperty('removeClass')) { return; }
  if(HTMLElement.prototype.hasOwnProperty('hasClass')) { return; }

  return Object.defineProperties(HTMLElement.prototype, {
    addClass: { enumerable: true, value: addClass },
    removeClass: { enumerable: true, value: removeClass },
    hasClass: { enumerable: true, value: hasClass },
  });



  function addClass(className) {
    var _this = this;
    className.split(' ').forEach(function(className) {
      _this.classList.add(className);
    });

    return _this;
  }

  function removeClass(className) {
    var _this = this;
    className.split(' ').forEach(function(className) {
      _this.classList.remove(className);
    });

    return _this;
  }

  function hasClass(className) {
    var _this = this;
    var hasAll = true;

    var existsClassList = Object.values(_this.classList);
    className.split(' ').every(function(className) {
      return (hasAll = existsClassList.includes(className));
    });

    return hasAll;
  }
})();
