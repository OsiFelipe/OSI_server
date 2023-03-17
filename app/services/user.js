const db = require("../models");
const { user: User } = db;

const getUsers = async () => {
  try {
    const result = await User.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

const addUser = async ({ name, email, idRol }) => {
  try {
    const newUser = await User.create({
      name,
      email,
      idRol,
      active: true,
      password: "Odsep1234!",
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

const editUser = async (idUser, { name, email, password }) => {
  try {
    const result = await User.updateOne(
      { _id: idUser },
      {
        name,
        email,
        password,
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const result = await User.updateOne(
      { id },
      {
        active: false,
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  editUser,
  addUser,
  deleteUser,
};
