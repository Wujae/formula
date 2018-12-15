"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sort;

var _isarray = _interopRequireDefault(require("./isarray"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// SORT an array of objects.
//
// sort(reference(reference: Array, ...criteria : List<string>)
//
// The list<string> will also be reduced into a single function which
// interprets the strings as pairs. The odd items are fields and the
// even ones are direction (ASC|DESC).
function sort(ref) {
  for (var _len = arguments.length, criteria = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    criteria[_key - 1] = arguments[_key];
  }

  // reduce the criteria array into a function
  var makeComparer = function makeComparer() {
    return function (a, b) {
      var result = 0;

      for (var i = 0; i < criteria.length; i = i + 2) {
        if (result !== 0) continue;
        var field = typeof criteria[i] === "string" ? criteria[i] : criteria[i] - 1,
            order = criteria[i + 1];

        if (a[field] < b[field]) {
          result = order ? -1 : 1;
        }

        if (a[field] > b[field]) {
          result = order ? 1 : -1;
        }
      }

      return result;
    };
  };

  if (!(0, _isarray.default)(ref)) {
    return _error.ERRORTYPES.na;
  }

  return ref.sort(makeComparer());
}