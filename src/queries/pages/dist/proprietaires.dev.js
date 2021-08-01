"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query Proprietaires {\n        proprietaire {\n            title\n            description\n            page_section {\n                id\n                title\n                description\n                image {\n                    url\n                }\n            }\n            garanties {\n                id\n                title\n                description\n                logos {\n                    id\n                    title\n                    image {\n                        url\n                    }\n                }\n            }\n            last_section {\n                id\n                title\n                description\n                image {\n                    url\n                }\n            }\n            registration {\n                id\n                title\n                description\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PROPRIETAIRES_PAGE_QUERY = (0, _graphqlTag["default"])(_templateObject());
var _default = PROPRIETAIRES_PAGE_QUERY;
exports["default"] = _default;