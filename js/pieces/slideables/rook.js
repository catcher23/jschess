(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Rook = JSChess.Rook = function (options) {
    this.className = options.className;
  };
    JSChess.Util.inherits(Rook, JSChess.Slideable);
})();
