(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Rook = JSChess.Rook = function (options) {
    this.className = options.className;
    this.className = options.className;
    JSChess.SlideHoriz.call(this, options)
};
  JSChess.Util.inherits(Rook, JSChess.SlideHoriz);

    Rook.prototype.validMove = function (oldPos, pos) {
    };


})();
