(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

var Board = JSChess.Board = function (game) {
  this.grid = Board.makeGrid();
  this.game = game;
  this.populate();
};

Board.isValidPos = function (pos) {
  return (
    (0 <= pos[0]) && (pos[0] <= 7) && (0 <= pos[1]) && (pos[1] <= 7)
  );
};

Board.makeGrid = function () {
  var grid = [];

  for (var i = 0; i <= 7; i++) {
    grid.push([]);
    for (var j = 0; j <= 7; j++) {
      grid[i].push(null);
    }
  }
  return grid;
};

Board.colors = ["W", "B"];
Board.prototype.reset = function () {

  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <= 7; j++) {
      this.grid[i][j] = null;
    }
  }
  this.populate();
};

Board.prototype.populate = function () {
  var that = this;

    for (var i = 0; i < that.grid[1].length; i++) {
      that.grid[1][i] = new JSChess.Pawn({
        className: 'bp',
        board: that,
        game: that.game,
        color: 'black',
        pos: [1, i]
    });
  }

    for (var i = 0; i < that.grid[6].length; i++) {
      that.grid[6][i] = new JSChess.Pawn({
        className: 'wp',
        board: that,
        game: that.game,
        color: 'white',
        pos: [6, i]
    });
  }

  this.grid[0][1] = new JSChess.Knight({
    className: 'bn',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,1]
  });
  this.grid[0][6] = new JSChess.Knight({
    className: 'bn',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,6]
  });
  this.grid[7][1] = new JSChess.Knight({
    className: 'wn',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,1]
  });
  this.grid[7][6] = new JSChess.Knight({
    className: 'wn',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7, 6]
  });
  this.grid[0][0] = new JSChess.Rook({
    className: 'br',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,0]
  });
  this.grid[0][7] = new JSChess.Rook({
    className: 'br',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,7]
  });
  this.grid[7][0] = new JSChess.Rook({
    className: 'wr',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,0]
  });
  this.grid[7][7] = new JSChess.Rook({
    className: 'wr',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,7]
  });
  this.grid[0][2] = new JSChess.Bishop({
    className: 'bb',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,2]
  });
  this.grid[0][5] = new JSChess.Bishop({
    className: 'bb',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,5]
  });
  this.grid[7][2] = new JSChess.Bishop({
    className: 'wb',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,2]
  });
  this.grid[7][5] = new JSChess.Bishop({
    className: 'wb',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,5]
  });
  this.grid[0][3] = new JSChess.Queen({
    className: 'bq',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,3]
  });
  this.grid[0][4] = new JSChess.King({
    className: 'bk',
    board: this,
    game: this.game,
    color: 'black',
    pos: [0,4]
  });
  this.grid[7][3] = new JSChess.Queen({
    className: 'wq',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,3]
  });
  this.grid[7][4] = new JSChess.King({
    className: 'wk',
    board: this,
    game: this.game,
    color: 'white',
    pos: [7,4]
  });

};

Board.prototype.getPiece = function (pos) {
  var gottenPiece = this.grid[pos[0]][pos[1]];
  if (gottenPiece !== null && this.game.currentPlayer.color == gottenPiece.color) {
    
    gottenPiece.pos = pos;
    gottenPiece.allMoves(pos);
    this.gottenPiece = gottenPiece
    this.oldPos = pos;

  } else {
    this.selectValid();
  }
};

Board.prototype.placePiece = function (pos) {
var that = this;
  var includesMove = false
  this.gottenPiece.allMoves().forEach(function(move){
  if (pos[0] == move[0] && pos[1] == move[1]) {
    includesMove = true
    };
  });

  if (this.oldPos !== pos && includesMove) {
    this.grid[pos[0]][pos[1]] = this.gottenPiece;
    this.gottenPiece.pos = [pos[0], pos[1]];
    this.grid[this.oldPos[0]][this.oldPos[1]] = null;
    this.inCheck(this.gottenPiece.allMoves(), this.gottenPiece.color);

    this.game.swapTurn();
    this.game.swapTurn();
  } else {
    this.selectValid();
}

};

Board.prototype.selectValid = function () {
  var that = this;
  $('div.selectValid').fadeIn("linear");
  setTimeout(function(){
    $('div.selectValid').fadeOut("linear");
  }, 1600)
};

Board.prototype.checkMate = function (color) {
return false
};

Board.prototype.inCheck = function (allMoves, color) {
  var that = this;

  allMoves.forEach(function(move){
    if (move == that.findKing()){
      return true;
    }
  });
};

Board.prototype.findKing = function (color) {
  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <= 7; j++) {
      if(this.grid[i][j] instanceof JSChess.King &&
      this.grid[i][j].color == color) {
        return [i,j];
      }
    }
  }
};

})();
