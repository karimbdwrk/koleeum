"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nquery Locataires {\n    locataire {\n        title\n        description\n        cards {\n          id\n          description\n        }\n        page_sections {\n          id\n          title\n          description\n          image {\n            url\n          }\n        }\n        choose_us {\n          id\n          title\n          description\n          image {\n            url\n          }\n          card {\n            id\n            title\n            icon {\n              url\n            }\n          }\n          button{\n            id\n            title\n            link\n          }\n        }\n        registration {\n            id\n            title\n            description\n        }\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LOCATAIRES_PAGE_QUERY = (0, _graphqlTag["default"])(_templateObject());
var _default = LOCATAIRES_PAGE_QUERY;
exports["default"] = _default;