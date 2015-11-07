(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Knight = JSChess.Knight = function (options) {
    this.className = options.className;

  };

  Knight.prototype.validMove = function (pos) {
    Math.abs(pos[0]) + Math.abs(pos[1]) == 3;
  };


    JSChess.Util.inherits(Knight, JSChess.Stepable);
})();
