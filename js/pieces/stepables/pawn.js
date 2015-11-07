(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Pawn = JSChess.Pawn = function (options) {
    this.className = options.className;
  };
    JSChess.Util.inherits(Pawn, JSChess.Stepable);
})();
