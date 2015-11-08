(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var SlideDiag = JSChess.SlideDiag = function (options) {
    this.game = options.game;
    this.pos = options.pos;
    this.board = options.board
    JSChess.Piece.call(this, options)
  };
    JSChess.Util.inherits(SlideDiag, JSChess.Piece);

    SlideDiag.prototype.allMoves = function (pos) {
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
      return moves.concat(this.diagMoves());
    };

    SlideDiag.prototype.diagMoves = function (pos) {
      var diagMoves = [];
      var move = '';

      var dx = this.pos[0]
      var dy = this.pos[1]
      while (dx >= 0 && dy >= 0) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          diagMoves.push(move);
          dx -= 1;
          dy -= 1;
        } else if (this.board.grid[dx][dy].color !== this.color) {
          diagMoves.push(move);
          break;
        } else if (this.board.grid[dx][dy].pos == this.pos) {
          dx -= 1;
          dy -= 1;
          continue;
        } else {
          break;
        }
      }

      dx = this.pos[0]
      dy = this.pos[1]
      while (dx < 8 && dy < 8) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          diagMoves.push(move);
          dx += 1;
          dy += 1;
        } else if (this.board.grid[dx][dy].color !== this.color) {
          diagMoves.push(move);
          break;
        } else if (this.board.grid[dx][dy].pos == this.pos) {
          dx += 1;
          dy += 1;
          continue;
        } else {
          break;
        }
      }

      dx = this.pos[0]
      dy = this.pos[1]

      while (dy < 8 && dx >= 0) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          diagMoves.push(move);
          dx -= 1;
          dy += 1;
        } else if (this.board.grid[dx][dy].color !== this.color) {
          diagMoves.push(move);
          break;
        } else if (this.board.grid[dx][dy].pos == this.pos) {
          dx -= 1;
          dy += 1;
          continue;
        } else {
          break;
        }
      }

      dx = this.pos[0]
      dy = this.pos[1]
      while (dx < 8 && dy >= 0) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          diagMoves.push(move);
          dx += 1;
          dy -= 1;
        } else if (this.board.grid[dx][dy].color !== this.color) {
          diagMoves.push(move);
          break;
        } else if (this.board.grid[dx][dy].pos == this.pos) {
          dx += 1;
          dy -= 1;
          continue;
        } else {
          break;
        }
      }
      return diagMoves;
    };
})();
