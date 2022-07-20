define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.add = void 0;

  //const add = (a, b) => a + b
  //Common JS format
  // module.exports = {
  //     // addFn: add
  //     add//add:add
  // }
  //ES6 module format
  //ES6 export keyword
  var add = function add(a, b) {
    return a + b;
  };

  _exports.add = add;
});