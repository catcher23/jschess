(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var inherits = Util.inherits = function (ChildClass, BaseClass) {
    function Surrogate () { this.constructor = ChildClass };
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  };
  å
)();
