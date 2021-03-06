"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _alertReducer = _interopRequireDefault(require("./alert-reducer"));

var _loginReducer = _interopRequireDefault(require("./login-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  alerts: _alertReducer.default,
  auth: _loginReducer.default
});

exports.default = _default;