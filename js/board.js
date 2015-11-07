(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

var Board = JSChess.Board = function () {
  this.grid = Board.makeGrid()
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
  });
  this.grid[0][6] = new JSChess.Knight({
    className: 'bn',
  });

};


Board.prototype.checkMate = function () {

};

Board.prototype.getPiece = function (pos) {
console.log(this.grid[pos[0]][pos[1]]);
console.log('getPiece');
console.log(pos);

};

Board.prototype.placePiece = function (pos) {
console.log(this.grid[pos[0]][pos[1]]);
console.log('placePiece');
console.log(pos);

};


})();
