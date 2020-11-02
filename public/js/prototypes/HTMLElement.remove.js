'use strict';

(function() {
  if(HTMLElement.prototype.hasOwnProperty('remove')) { return; }

  return Object.defineProperties(HTMLElement.prototype, {
    remove: { enumerable: true, value: remove },
  });

  function remove() {
    this.parentElement && this.parentElement.removeChild(this);
    return this;
  }
})();
