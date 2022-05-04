/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Users = require("../models/Users");

const list = (req, res) => {
  let data = Users.find();
  res.json({ data });
};

module.exports = {
  list,
};
