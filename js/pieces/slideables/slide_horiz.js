(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var SlideHoriz = JSChess.SlideHoriz = function (options) {
    this.game = options.game;
    this.pos = options.pos;
    this.board = options.board
    JSChess.Piece.call(this, options)
  };
    JSChess.Util.inherits(SlideHoriz, JSChess.Piece);


})();
