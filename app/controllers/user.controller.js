const userService = require("../services/user");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.send({ success: true, data: users });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await userService.addUser(req.body);
    res.send({ success: true, data: newUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const editUser = async (req, res) => {
  try {
    const {
      params: { idUser },
    } = req;
    const result = await userService.editUser(idUser, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const deleteUser = async (req, res) => {
  try {
    const {
      params: { idUser },
    } = req;
    if (idUser === "undefined") {
      throw "Missing Property";
    }
    const result = await userService.deleteUser({ id: idUser });
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  getUsers,
  addUser,
  editUser,
  deleteUser,
};
