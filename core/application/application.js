"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _menuPrincipal = _interopRequireDefault(require("../components/menus/menu-principal"));

var _routes = _interopRequireDefault(require("../routes/routes"));

var _alertProvider = _interopRequireDefault(require("../components/alerts/alert-provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application(props) {
  return _react.default.createElement(_reactRedux.Provider, {
    store: props.store
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: props.language,
    messages: props.messages
  }, _react.default.createElement(_reactRouter.Router, {
    history: props.history
  }, _react.default.createElement("div", null, _react.default.createElement(_alertProvider.default, null), _react.default.createElement(_menuPrincipal.default, {
    menu: props.menu
  }), _react.default.createElement(_routes.default, {
    routes: props.routes,
    pageReviews: props.pageReviews
  })))));
};

Application.propTypes = {
  store: _propTypes.default.object,
  language: _propTypes.default.string,
  messages: _propTypes.default.object,
  history: _propTypes.default.object,
  menu: _propTypes.default.array,
  routes: _propTypes.default.array,
  pageReviews: _propTypes.default.array
};
var _default = Application;
exports.default = _default;