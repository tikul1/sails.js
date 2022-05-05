/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const list = async (req, res) => {
  try {
    let data = await Users.find();
    res.status(200).json({ data });
    // console.log(data);
  } catch (e) {
    res.status(404).json({ msg: "an error occured => " + e });
  }
};
const userById = async (req, res) => {
  try {
    const listById = await Users.find({ id: req.param("id") });
    res.status(200).json(listById);
  } catch (error) {
    res.status(404).json({ msg: "An Error occured: " + error });
  }
};

const userAdd = async (req, res) => {
  try {
    const newUser = await Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }).fetch();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json("Error Occured => " + error);
  }
};

const userUpdate = async (req, res) => {
  try {
    const userId = await Users.updateOne({ id: req.param("id") }).set(req.body);
    res.status(200).json({ userId });
  } catch (err) {
    res.status(404).json({ msg: "An error occured" + err });
  }
};

const userRemove = async (req, res) => {
  try {
    const userId = await Users.destroy({ id: req.param("id") });
    res.status(200).json({ msg: "product removed sucessfully", userId });
  } catch (err) {
    res.status(404).json({ msg: "An error occured: " + err });
  }
};

module.exports = {
  list,
  userById,
  userAdd,
  userUpdate,
  userRemove,
};
