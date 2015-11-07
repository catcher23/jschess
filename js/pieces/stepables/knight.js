(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Knight = JSChess.Knight = function (options) {
    this.className = options.className;
    this.game = options.game;
    this.pos = options.pos;
    JSChess.Stepable.call(this, options)

  };
    JSChess.Util.inherits(Knight, JSChess.Stepable);

  Knight.prototype.validMove = function (oldPos, pos) {
    return Math.abs(oldPos[0] - pos[0]) + Math.abs(oldPos[1]- pos[1]) == 3;
  };
})();
