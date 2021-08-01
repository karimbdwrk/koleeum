"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nquery AboutUS {\n    aboutUs {\n        title\n        text_content {\n          text\n        }\n        image {\n          url\n        }\n      \ttelephone\n      \temail\n        registration {\n            id\n            title\n            description\n        }\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ABOUT_PAGE_QUERY = (0, _graphqlTag["default"])(_templateObject());
var _default = ABOUT_PAGE_QUERY;
exports["default"] = _default;