(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Stepable = JSChess.Stepable = function (options) {
    this.game = options.game;
    this.pos = options.pos;
    this.board = options.board;
    JSChess.Piece.call(this, options)
  };
  
    JSChess.Util.inherits(Stepable, JSChess.Piece);
})();
