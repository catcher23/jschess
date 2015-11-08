(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Queen = JSChess.Queen = function (options) {
      this.className = options.className;
  };
    JSChess.Util.inherits(Queen, JSChess.Slideable);

    Queen.prototype.validMove = function (oldPos, pos) {
      
      return (
        oldPos[0] == pos[0] ||
        oldPos[1] == pos[1]
    )
  };


})();
