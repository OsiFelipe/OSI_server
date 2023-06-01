const db = require("../models");
const { client, well } = db;

const getClient = async () => {
  try {
    const result = await client.findAll({
      where: { active: true },
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const addClient = async ({ name }) => {
  try {
    const result = await client.create({
      name,
      active: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const editClient = async (idClient, { name }) => {
  try {
    const result = await client.update(
      {
        name,
      },
      { where: { id: idClient } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteClient = async (id) => {
  try {
    const result = await client.update(
      {
        active: false,
      },
      { where: { id: idClient } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getClient,
  editClient,
  addClient,
  deleteClient,
};
