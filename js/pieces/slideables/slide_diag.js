(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var SlideDiag = JSChess.SlideDiag = function (options) {
    this.game = options.game;
    this.pos = options.pos;
    this.board = options.board;
    JSChess.Piece.call(this, options)
  };
    JSChess.Util.inherits(SlideDiag, JSChess.Piece);

    SlideDiag.prototype.allMoves = function () {
      var moves = [];
      return moves.concat(this.diagMoves());
    };


    SlideDiag.prototype.southWestMoves = function (dx, dy) {
      var southWestMoves = [];
      while (dx >= 0 && dy >= 0) {
        var move = [dx, dy];
        if (this.board.grid[dx][dy] == null)  {
          southWestMoves.push(move);
          dx -= 1;
          dy -= 1;
        } else if (this.board.grid[dx][dy].color !== this.color) {
          southWestMoves.push(move);
          break;
        } else if (this.board.grid[dx][dy].pos == this.pos) {
          dx -= 1;
          dy -= 1;
        } else {
          break;
        }
      }
      return southWestMoves;
    };

  SlideDiag.prototype.northEastMoves = function (dx, dy) {
    var northEastMoves = [];
    while (dx < 8 && dy < 8) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        northEastMoves.push(move);
        dx += 1;
        dy += 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        northEastMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx += 1;
        dy += 1;
      } else {
        break;
      }
    }
    return northEastMoves;
  };

  SlideDiag.prototype.northWestMoves = function (dx, dy) {
    var northWestMoves = [];
    while (dy < 8 && dx >= 0) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        northWestMoves.push(move);
        dx -= 1;
        dy += 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        northWestMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx -= 1;
        dy += 1;
      } else {
        break;
      }
    }
    return northWestMoves;
  };

  SlideDiag.prototype.southEastMoves = function (dx, dy) {
    var southEastMoves = [];
    while (dx < 8 && dy >= 0) {
      var move = [dx, dy];
      if (this.board.grid[dx][dy] == null)  {
        southEastMoves.push(move);
        dx += 1;
        dy -= 1;
      } else if (this.board.grid[dx][dy].color !== this.color) {
        southEastMoves.push(move);
        break;
      } else if (this.board.grid[dx][dy].pos == this.pos) {
        dx += 1;
        dy -= 1;
      } else {
        break;
      }
    }
    return southEastMoves;
  };


  SlideDiag.prototype.diagMoves = function () {
    var diagMoves = [],
    dx = this.pos[0],
    dy = this.pos[1];

    var southEastMoves = this.southEastMoves(dx, dy),
    southWestMoves = this.southWestMoves(dx, dy),
    northEastMoves = this.northEastMoves(dx, dy),
    northWestMoves = this.northWestMoves(dx, dy);

    return diagMoves.concat(southEastMoves, southWestMoves, northEastMoves, northWestMoves);
  };
})();
