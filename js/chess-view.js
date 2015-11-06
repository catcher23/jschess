(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

  var View = JSChess.View = function ($el) {
    this.$el = $el;

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
    var pos = $square.data("pos");
    var currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      var winner = this.game.winner();
      var $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass("winner-" + winner);
        $figcaption.html("You win, " + winner + "!");
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
  };

  View.prototype.setupBoard = function () {
    var $ul = $("<ul>");
    $ul.addClass("group");

    for (var rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (var colIdx = 0; colIdx < 8; colIdx++) {
        var $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  };
})();
