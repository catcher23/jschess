(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }

var Util = JSChess.Util = {};

var inherits = Util.inherits = function (ChildClass, BaseClass) {
    function Surrogate () { this.constructor = ChildClass };
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  };
}
)();
