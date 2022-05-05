module.exports.routes = {
  "/": { view: "pages/homepage" },
  "GET /users/list": "UsersController.list",
  "GET /users/list/:id": "UsersController.userById",
  "POST /users/list/useradd": "UsersController.userAdd",
  "PUT /users/list/userupdate/:id": "UsersController.userUpdate",
  "DELETE /users/list/userremove/:id": "UsersController.userRemove",
};
