(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Knight = JSChess.Knight = function (options) {
    this.className = options.className;
    JSChess.Stepable.call(this, options)

  };
    JSChess.Util.inherits(Knight, JSChess.Stepable);

  Knight.prototype.validMove = function (oldPos, pos) {
    return (
      Math.abs(oldPos[0] - pos[0]) + Math.abs(oldPos[1]- pos[1]) == 3 &&
      oldPos[0] !== pos[0] &&
      oldPos[1] !== pos[1]
  )};


})();
