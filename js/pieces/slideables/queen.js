(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Queen = JSChess.Queen = function (options) {
      this.className = options.className;
      JSChess.SlideDiag.call(this, options)
      JSChess.SlideHoriz.call(this, options)
  };
    JSChess.Util.inherits(Queen, JSChess.SlideHoriz);
    JSChess.Util.inherits(Queen, JSChess.SlideDiag);

    Queen.prototype.validMove = function (oldPos, pos) {

      return (
        oldPos[0] == pos[0] ||
        oldPos[1] == pos[1]
    )
  };


})();
