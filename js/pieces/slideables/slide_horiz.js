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
  SlideHoriz.prototype.allMoves = function (pos) {
    var moves = [];
  
    return moves.concat(this.horizMoves());
  };

  SlideHoriz.prototype.horizMoves = function (pos) {
    var horizMoves = [];
    var move = '';

    var dx = this.pos[0];
    var dy = this.pos[1];
    while (dy < 8) {
      move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        horizMoves.push(move);
        console.log(move);
        dy += 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        horizMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dy += 1;
        continue;
      } else {
        break;
      }
    }

    dx = this.pos[0];
    dy = this.pos[1];
    while (dx < 8) {
      move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        horizMoves.push(move);
        console.log(move);
        dx += 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        horizMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx += 1;
        continue;
      } else {
        break;
      }
    }

    dx = this.pos[0];
    dy = this.pos[1];
    while (dx >= 0) {
      move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        horizMoves.push(move);
        console.log(move);
        dx -= 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        horizMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx -= 1;
        continue;
      } else {
        break;
      }
    }

    dx = this.pos[0];
    dy = this.pos[1];
    while (dy >= 0) {
      move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        horizMoves.push(move);
        console.log(move);
        dy -= 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        horizMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dy -= 1;
        continue;
      } else {
        break;
      }
    }
    return horizMoves;
  };
})();
