(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

var Board = JSChess.Board = function (game) {
  this.grid = Board.makeGrid();
  this.game = game;
  this.populate();
}

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

Board.prototype.populate = function () {

  this.grid[0][1] = new JSChess.Knight({
    className: 'bn',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[0][6] = new JSChess.Knight({
    className: 'bn',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[7][1] = new JSChess.Knight({
    className: 'wn',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[7][6] = new JSChess.Knight({
    className: 'wn',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[0][0] = new JSChess.Rook({
    className: 'br',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[0][7] = new JSChess.Rook({
    className: 'br',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[7][0] = new JSChess.Rook({
    className: 'wr',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[7][7] = new JSChess.Rook({
    className: 'wr',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[0][2] = new JSChess.Bishop({
    className: 'bb',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[0][5] = new JSChess.Bishop({
    className: 'bb',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[7][2] = new JSChess.Bishop({
    className: 'wb',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[7][5] = new JSChess.Bishop({
    className: 'wb',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[0][3] = new JSChess.Queen({
    className: 'bq',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[0][4] = new JSChess.King({
    className: 'bk',
    board: this,
    game: this.game,
    color: 'black'
  });
  this.grid[7][3] = new JSChess.Queen({
    className: 'wq',
    board: this,
    game: this.game,
    color: 'white'
  });
  this.grid[7][4] = new JSChess.King({
    className: 'wk',
    board: this,
    game: this.game,
    color: 'white'
  });

};

Board.prototype.getPiece = function (pos) {
  var gottenPiece = this.grid[pos[0]][pos[1]];
  if (gottenPiece !== null) {
    gottenPiece.pos = pos;
    gottenPiece.allMoves(pos);
    this.gottenPiece = gottenPiece
    this.oldPos = pos;

  } else {
    this.selectValid();
  }

console.log(this.grid[pos[0]][pos[1]]);
console.log('getPiece');
console.log(pos);

};

Board.prototype.placePiece = function (pos) {

  var includesMove = false
  this.gottenPiece.allMoves().forEach(function(move){
  if (pos[0] == move[0] && pos[1] == move[1]) {
    includesMove = true
    };
  });

  if (this.oldPos !== pos && includesMove) {
    this.grid[pos[0]][pos[1]] = this.gottenPiece;
    this.grid[this.oldPos[0]][this.oldPos[1]] = null;
  } else {
    this.selectValid();
}
console.log(this.grid[pos[0]][pos[1]]);
console.log('placePiece');
console.log(pos);

};



Board.prototype.selectValid = function () {
  var that = this;
  $('div.selectValid').fadeIn("linear");
  setTimeout(function(){
    $('div.selectValid').fadeOut("linear");
  }, 1600)
};

Board.prototype.checkMate = function () {

};


})();
