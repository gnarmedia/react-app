const actions = require("./authentication.actions");
const routes = require("./authentication.routes");
const hooks = require("./authentication.hooks");
const models = require("./authentication.models");

module.exports = ({ app, bookshelf }) =>
  routes({ app, actions, hooks, models, bookshelf });
