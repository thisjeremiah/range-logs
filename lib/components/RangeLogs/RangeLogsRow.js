'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ';'], ['', ';']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsTachyons = require('styled-components-tachyons');

var _styledComponentsTachyons2 = _interopRequireDefault(_styledComponentsTachyons);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject, _styledComponentsTachyons2.default);

var RangeLogsRow = function RangeLogsRow(_ref) {
  var style = _ref.style,
      rangeStart = _ref.rangeStart,
      rangeEnd = _ref.rangeEnd,
      message = _ref.message;
  return _react2.default.createElement(
    Div,
    {
      bb: true,
      bw1: true,
      flex: true,
      justify_between: true,
      items_center: true,
      style: style,
      className: 'RangeLogs__Row'
    },
    _react2.default.createElement(
      Div,
      { className: 'RangeLogs__Date', pl1: true },
      rangeStart === rangeEnd ? (0, _utils.formatDate)(rangeStart) : (0, _utils.formatDate)(rangeStart) + ' - ' + (0, _utils.formatDate)(rangeEnd)
    ),
    _react2.default.createElement(
      Div,
      { className: 'RangeLogs__Message', pr1: true },
      message
    )
  );
};

RangeLogsRow.propTypes = {
  style: _propTypes2.default.object.isRequired,
  rangeStart: _propTypes2.default.number.isRequired,
  rangeEnd: _propTypes2.default.number.isRequired,
  message: _propTypes2.default.string.isRequired
};

exports.default = RangeLogsRow;