function Board () {
  this.grid = Board.makeGrid()
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
      grid[i].push(null);s
    }
  }
  return grid;
};

Board.colors = ["W", "B"];

Board.prototype.checkMate = function () {

};

Board.prototype.getPiece = function (callback) {

};

Board.prototype.placePiece = function () {

};
