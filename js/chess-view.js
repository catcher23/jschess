(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

  var View = JSChess.View = function (game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.handleClickEvent();
    $(window).on("keydown", this.handleKeyEvent.bind(this));
  };

  View.KEYS = {
  38: "up",
  39: "right",
  40: "down",
  37: "left",
  32: "select",
};

View.prototype.handleKeyEvent = function (event) {

  };

  View.prototype.handleClickEvent = function () {
    // install a handler on the `li` elements inside the board.
    this.$el.on("click", "li", (function (event) {
      var $square = $(event.currentTarget);
      this.makeMove($square);
    }).bind(this));
  };

  View.prototype.makeMove = function ($square) {
    var that = this;
    var pos = $square.data("pos");
    this.game.playMove(pos);
    this.render();
    if (this.game.pieceSelected) {
      var flatCoord = (pos[0] * 8) + pos[1];
      this.$li.eq(flatCoord).addClass('selected');

      pieceType = this.game.board.grid[pos[0]][pos[1]];
      pieceType.allMoves().forEach(function(move) {
        flatCoord = (move[0] * 8) + move[1];
        that.$li.eq(flatCoord).addClass('possibleMoves');
      });

    };
  };

  View.prototype.render = function () {

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if (this.game.board.grid[i][j] !== null) {
    className = this.game.board.grid[i][j].className;
    this.updateClasses([i,j], className);
  } else {
    this.removeClasses([i,j])
  }
  }
}
  };

  View.prototype.updateClasses = function(pos, className) {
    var flatCoord = (pos[0] * 8) + pos[1];
    this.$li.eq(flatCoord).removeClass();
    this.$li.eq(flatCoord).addClass(className);

  };

  View.prototype.removeClasses = function(pos) {
    var flatCoord = (pos[0] * 8) + pos[1];
    this.$li.eq(flatCoord).removeClass();
  };

  View.prototype.setupBoard = function () {
    var $ul = $("<ul>");
    $ul.addClass("group");

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var $li = $("<li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
    this.$li = this.$el.find("li")


    this.render();
  };
})();
