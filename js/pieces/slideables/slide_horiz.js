(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

  var SlideHoriz = JSChess.SlideHoriz = function (options) {
    this.game = options.game;
    this.pos = options.pos;
    this.board = options.board;
    JSChess.Piece.call(this, options)
  };

  JSChess.Util.inherits(SlideHoriz, JSChess.Piece);

  SlideHoriz.prototype.allMoves = function () {
    var moves = [];
  
    return moves.concat(this.horizMoves());
  };

  SlideHoriz.prototype.northMoves = function (dx, dy) {
    var northMoves = [];

    while (dy < 8) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        northMoves.push(move);
        dy += 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        northMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dy += 1;
      } else {
        break;
      }
    }

    return northMoves;
  };

  SlideHoriz.prototype.eastMoves = function (dx, dy) {
    var eastMoves = [];

    while (dx < 8) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        eastMoves.push(move);
        dx += 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        eastMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx += 1;
      } else {
        break;
      }
    }

    return eastMoves;
  };

  SlideHoriz.prototype.westMoves = function (dx, dy) {
    var westMoves = [];

    while (dx >= 0) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        westMoves.push(move);
        dx -= 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        westMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx -= 1;
      } else {
        break;
      }
    }

    return westMoves;
  };

  SlideHoriz.prototype.southMoves = function (dx, dy) {
    var southMoves = [];

    while (dy >= 0) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        southMoves.push(move);
        dy -= 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        southMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dy -= 1;
      } else {
        break;
      }
    }

    return southMoves;
  };

  SlideHoriz.prototype.horizMoves = function () {
    var horizMoves = [],
      dx = this.pos[0],
      dy = this.pos[1];

    var southMoves = this.southMoves(dx, dy),
      westMoves = this.westMoves(dx, dy),
      eastMoves = this.eastMoves(dx, dy),
      northMoves = this.northMoves(dx, dy);

    return horizMoves.concat(southMoves, westMoves, eastMoves, northMoves);
  };
})();
