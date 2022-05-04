const UsersController = require("../api/controllers/UsersController");
const Users = require("../api/models/Users");

module.exports.routes = {
  "/": { view: "pages/homepage" },
  "GET users/list": "UsersController.list",
};
