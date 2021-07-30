"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloClient = require("apollo-client");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloLinkHttp = require("apollo-link-http");

var cache = new _apolloCacheInmemory.InMemoryCache();
var link = new _apolloLinkHttp.HttpLink({
  //   uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
  uri: "https://koleeum-admin.herokuapp.com/graphql"
});
var client = new _apolloClient.ApolloClient({
  cache: cache,
  link: link,
  connectToDevTools: true
});
var _default = client;
exports["default"] = _default;