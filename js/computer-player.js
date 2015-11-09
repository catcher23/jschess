(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var computerPlayer = JSChess.computerPlayer = function (options) {
    this.color = 'black';



    JSChess.Game.call(this, options)
  };
    JSChess.Util.inherits(computerPlayer, JSChess.Game);
  computerPlayer.prototype.makeMove = function () {

  };

})();
