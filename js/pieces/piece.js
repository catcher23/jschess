(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

var Piece = JSChess.Piece = function (options) {
  this.pos = options.pos;
  this.color = options.color;
  this.game = options.game;
};

Piece.prototype.allMoves = function (pos) {
  var moves = [];

  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <= 7; j++) {
      if (this.validMove(this.pos, [i,j])) {
        moves.push([i,j]);
      }
    }
  };
  
  return moves;
};



Piece.prototype.remove = function () {
  this.game.remove(this);
};

})();
