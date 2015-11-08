(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Slideable = JSChess.Slideable = function (options) {

  };
    JSChess.Util.inherits(Slideable, JSChess.Piece);

    Slideable.prototype.allMoves = function (pos) {
      var moves = [];

      for (var i = 0; i <= 7; i++) {
        for (var j = 0; j <= 7; j++) {
          if (this.validMove(this.pos, [i,j])) {
            moves.push([i,j]);
          }
        }
      };
      return moves.concat(this.diagMoves());
    };

    Slideable.prototype.diagMoves = function (pos) {
      var diagMoves = [];
      var move = '';

      var dx = this.pos[0] - 1
      var dy = this.pos[1] - 1
      while (dx >= 0 && dy >= 0) {
        move = [dx, dy]
        diagMoves.push(move);
        dx -= 1;
        dy -= 1;
      }

      dx = this.pos[0] + 1
      dy = this.pos[1] + 1
      while (dx < 8 && dy < 8) {
        move = [dx, dy]
        diagMoves.push(move);
        dx += 1;
        dy += 1;
      }

      dx = this.pos[0] + 1
      dy = this.pos[1] - 1
      while (dy < 8 && dx >= 0) {
        move = [dx, dy]
        diagMoves.push(move);
        dx -= 1;
        dy += 1;
      }

      dx = this.pos[0] - 1
      dy = this.pos[1] + 1
      while (dx < 8 && dy >= 0) {
        move = [dx, dy]
        diagMoves.push(move);
        dx += 1;
        dy -= 1;
      }
      return diagMoves;
    };
})();
