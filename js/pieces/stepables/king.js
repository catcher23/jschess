(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var King = JSChess.King = function (options) {
    this.className = options.className;
    JSChess.Stepable.call(this, options)
  };
    JSChess.Util.inherits(King, JSChess.Stepable);

    King.prototype.validMove = function (oldPos, pos) {
      return (
        (Math.abs(oldPos[0] - pos[0]) == 1 && Math.abs(oldPos[1] - pos[1]) == 1) ||
        (Math.abs(oldPos[0] - pos[0]) == 1 && oldPos[1] == pos[1]) ||
        (Math.abs(oldPos[1] - pos[1]) == 1 && oldPos[0] == pos[0])
    )};

})();
