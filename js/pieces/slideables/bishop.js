(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Bishop = JSChess.Bishop = function (options) {
    this.className = options.className;
    JSChess.SlideDiag.call(this, options)
  };

    JSChess.Util.inherits(Bishop, JSChess.SlideDiag);
    
})();
