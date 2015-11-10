(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }


var Game = JSChess.Game = function (p1, p2) {
  this.board = new JSChess.Board(this);
  this.players = [p1, p2];
  this.p1 = p1;
  p2.game = this;
  this.currentPlayer = p1;
  this.p2 = p2;
  this.pieceSelected = false;

};

Game.prototype.playMove = function (pos) {
  if (this.pieceSelected) {
    this.board.placePiece(pos);
    this.pieceSelected = false;

  }else{
    this.board.getPiece(pos);
    if (this.board.grid[pos[0]][pos[1]] !== null) {
      this.pieceSelected = true;
    }
  }
};


Game.prototype.swapTurn = function () {
  if (this.currentPlayer == this.p1) {
    this.currentPlayer = this.p2;
  console.log('changed to p2');
    this.currentPlayer.makeMove();
  } else {

    this.currentPlayer = this.p1;
      console.log('changed to p1');
  }
};



Game.prototype.isOver = function () {
  alert('Check Mate!');
  console.log('gameover here');
  this.board.reset();
  this.swapTurn();
};

})();
