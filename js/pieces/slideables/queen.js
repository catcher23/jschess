(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Queen = JSChess.Queen = function (options) {
      this.className = options.className;
  };
    JSChess.Util.inherits(Queen, JSChess.Slideable);
})();
