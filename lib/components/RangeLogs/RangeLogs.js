'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _recompose = require('recompose');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = require('react-virtualized');

require('styled-components-tachyons/variables.css');

var _RangeLogsRow = require('./RangeLogsRow');

var _RangeLogsRow2 = _interopRequireDefault(_RangeLogsRow);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propContains = (0, _ramda.curry)(function (name, value, obj) {
  return (0, _ramda.propSatisfies)((0, _ramda.contains)(value), name, obj);
});

var inRange = (0, _ramda.curry)(function (_ref, _ref2) {
  var start = _ref.start,
      end = _ref.end;
  var rangeStart = _ref2.rangeStart,
      rangeEnd = _ref2.rangeEnd;
  return (0, _utils.rangeInRange)(start, end, rangeStart, rangeEnd);
});

var withRowRenderer = function withRowRenderer(list) {
  return function (_ref3) {
    var key = _ref3.key,
        index = _ref3.index,
        isScrolling = _ref3.isScrolling,
        isVisible = _ref3.isVisible,
        style = _ref3.style;
    return _react2.default.createElement(_RangeLogsRow2.default, _extends({ key: key, style: style }, list[index]));
  };
};

var RangeLogs = function RangeLogs(props) {
  return _react2.default.createElement(
    _reactVirtualized.AutoSizer,
    null,
    function (_ref4) {
      var width = _ref4.width,
          height = _ref4.height;
      return _react2.default.createElement(_reactVirtualized.List, {
        className: 'RangeLogs',
        width: width,
        height: height,
        rowCount: props.logs.length,
        rowHeight: 40,
        rowRenderer: withRowRenderer(props.logs)
      });
    }
  );
};

RangeLogs.propTypes = {
  logs: _propTypes2.default.array.isRequired,
  range: _propTypes2.default.shape({
    start: _propTypes2.default.number.isRequired,
    end: _propTypes2.default.number.isRequired
  }),
  filter: _propTypes2.default.string
};

var enhance = (0, _recompose.withProps)(function (_ref5) {
  var logs = _ref5.logs,
      filter = _ref5.filter,
      range = _ref5.range;
  return {
    logs: filter ? range ? logs.filter(propContains('message', filter)).filter(inRange(range)) : logs.filter(propContains('message', filter)) : range ? logs.filter(inRange(range)) : logs
  };
});

exports.default = enhance(RangeLogs);