(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var King = JSChess.King = function (options) {
    this.className = options.className;
  };
    JSChess.Util.inherits(King, JSChess.Stepable);
})();
