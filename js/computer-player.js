(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var computerPlayer = JSChess.computerPlayer = function (options) {
    this.color = 'black';

  };

  computerPlayer.prototype.makeMove = function () {

    var that = this;
    var grid = this.game.board.grid
    var computerPieces = [];
    var humanPieces = [];
    grid.forEach(function(row){
      row.forEach(function(piece){
        if(piece == null) {

        } else if(piece.color == 'black') {
        computerPieces.push(piece);
      } else {
        humanPieces.push(piece);
      }
      })
    });

    if (computerPieces.length == 0) {
      console.log('there');
      this.game.isOver();
    } else {
      this.isCheckMate(computerPieces);
      while (true) {
        piece = this.pickRandomPiece(computerPieces);

        if (piece.allMoves().length !== 0) {
          var randomIndex = Math.floor(Math.random() * (piece.allMoves().length))
          newMove = piece.allMoves()[randomIndex];
          grid[piece.pos[0]][piece.pos[1]] = null;
          piece.pos = newMove;

          return grid[newMove[0]][newMove[1]] = piece;
          if (that.isInCheck(humanPieces)) {
            alert('King is in Check');
          }
        }
      }
    }

  };

  computerPlayer.prototype.isInCheck = function (humanPieces) {

    kingPos = this.game.board.findKing(this.color);
    humanPieces.forEach(function(piece){
      piece.allMoves().forEach(function(move){

        if(move[0] == kingPos[0] && move[1] == kingPos[1]) {
          return true;
        }
      })
    });
    return false;
  };

  computerPlayer.prototype.isCheckMate = function (computerPieces) {
    var that = this;
    kingPos = this.game.board.findKing(this.color)

      if (kingPos == undefined) {
        that.game.isOver();
      }
    var everyMove = [];
      computerPieces.forEach(function(piece){
        everyMove = everyMove.concat(piece.allMoves());
      })

      if (everyMove.length == 0) {
        that.game.isOver();
      }
      return false;
    };


  computerPlayer.prototype.pickRandomPiece = function (computerPieces) {
    var randomIndex = Math.floor(Math.random() * (computerPieces.length))
    return computerPieces[randomIndex];
  };

})();
