define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Person = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var Person = /*#__PURE__*/function () {
    function Person(pname, pid, psalary) {
      _classCallCheck(this, Person);

      this.name = pname;
      this.id = pid;
      this.salary = psalary;
    }

    _createClass(Person, [{
      key: "print",
      value: function print() {
        return this.name + ' ' + this.id + " " + this.salary;
      }
    }]);

    return Person;
  }();

  _exports.Person = Person;
});