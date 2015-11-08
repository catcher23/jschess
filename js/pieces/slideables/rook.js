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
      return (
        oldPos[0] == pos[0] || oldPos[1] == pos[1]
    )};

    Rook.prototype.allMoves = function (pos) {
      var moves = [];

      for (var i = 0; i <= 7; i++) {
        for (var j = 0; j <= 7; j++) {
          if (this.validMove(this.pos, [i,j]) &&
            (this.board.grid[i][j] == null ||
            this.board.grid[i][j].color !== this.color)) {
            moves.push([i,j]);
          }
        }
      };
      return moves;
    };

})();
