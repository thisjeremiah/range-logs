'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeInRange = exports.formatDate = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatDate = exports.formatDate = function formatDate(dateValue) {
  return (0, _moment2.default)(dateValue).format('MMM DD hh:mm:ss');
};

var rangeInRange = exports.rangeInRange = (0, _ramda.curry)(function (start, end, start2, end2) {
  var s = (0, _moment2.default)(start);
  var e = (0, _moment2.default)(end);
  return (0, _moment2.default)(start2).isBetween(s, e) && (0, _moment2.default)(end2).isBetween(s, e);
});