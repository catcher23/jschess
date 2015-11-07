(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Bishop = JSChess.Bishop = function (options) {
      this.className = options.className;
  };
    JSChess.Util.inherits(Bishop, JSChess.Slideable);
})();
