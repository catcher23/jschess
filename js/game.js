(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }


var Game = JSChess.Game = function (p1, p2) {
  this.board = new JSChess.Board();
  this.currentPlayer = p1;
  this.pieceSelected = false;
};

Game.prototype.playMove = function (pos) {
  if (this.pieceSelected) {
  this.board.placePiece(pos, this.currentPlayer);
  this.pieceSelected = false;
  this.swapTurn();
}else{
  this.board.getPiece(pos, this.currentPlayer);
  this.pieceSelected = true;
}

};




Game.prototype.swapTurn = function () {
  if (this.currentPlayer === this.p1) {
    this.currentPlayer = this.p2;
  } else {
    this.currentPlayer = this.p1;
  }
};

Game.prototype.run = function () {

};

Game.prototype.isOver = function () {
  return this.board.checkMate();
};

})();
