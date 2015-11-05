var Board = require("./board");

function Game () {
  this.board = new Board();
  this.currentPlayer = p1;
};

Game.prototype.playMove = function (pos) {
  this.board.getPiece(pos, this.currentPlayer);
  this.board.placePiece(pos, this.currentPlayer);
  this.swapTurn();
};

Game.prototype.swapTurn = function () {
  if (this.currentPlayer === Board.colors[0]) {
    this.currentPlayer = Board.colors[1];
  } else {
    this.currentPlayer = Board.colors[0];
  }

Game.prototype.run = function () {

};

};
