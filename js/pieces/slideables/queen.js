(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Queen = JSChess.Queen = function (options) {
      this.className = options.className;
      JSChess.SlideDiag.call(this, options)
  };
    JSChess.Util.inherits(Queen, JSChess.SlideDiag);

    Queen.prototype.allMoves = function (pos) {
      var horizMoves = [];
      var move = '';

      var dx = this.pos[0]
      var dy = this.pos[1]
      while (dy < 8) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          horizMoves.push(move);
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

      dx = this.pos[0]
      dy = this.pos[1]
      while (dx < 8) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          horizMoves.push(move);
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

      dx = this.pos[0]
      dy = this.pos[1]
      while (dx >= 0) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          horizMoves.push(move);
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

      dx = this.pos[0]
      dy = this.pos[1]
      while (dy >= 0) {
        move = [dx, dy]
        if (this.board.grid[dx][dy] == null)  {
          horizMoves.push(move);
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
      return horizMoves.concat(this.diagMoves(pos));
    };

    Queen.prototype.validMove = function (oldPos, pos) {

  };


})();
