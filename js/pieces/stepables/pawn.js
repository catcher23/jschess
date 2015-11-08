(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Pawn = JSChess.Pawn = function (options) {
    this.className = options.className;
    JSChess.Stepable.call(this, options)
  };
    JSChess.Util.inherits(Pawn, JSChess.Stepable);
})();
