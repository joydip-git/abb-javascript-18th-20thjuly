define(["exports", "../repository/personRepository"], function (_exports, _personRepository) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.doesPersonExist = doesPersonExist;
  _exports.getPersonIndex = getPersonIndex;

  function doesPersonExist(pid) {
    return _personRepository.people.find(function (p) {
      return p.id === pid;
    });
  }

  function getPersonIndex(pid) {
    return _personRepository.people.findIndex(function (p) {
      return p.id === pid;
    });
  }
});