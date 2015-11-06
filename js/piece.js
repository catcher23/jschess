(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

var Piece = JSChess.Piece = function (options) {
  this.pos = options.pos;
  this.color = options.color;
  this.game = options.game;
};

Piece.prototype.move = function () {

};

Piece.prototype.remove = function () {
  this.game.remove(this);
};

})();
