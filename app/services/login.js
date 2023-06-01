const jwt = require("jsonwebtoken");
const db = require("../models");
const sequelize = require("sequelize");
require("dotenv").config();
const { user } = db;

const SEED = process.env.SEED || "este-es-el-seed";
const CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || "48h";

const login = async (username, password) => {
  try {
    const result = await user.findOne({
      where: {
        email: username,
        password: sequelize.fn("crypt", password, sequelize.col("password")),
      },
      raw: true,
    });
    let token = null;
    if (result) {
      token = jwt.sign(
        {
          userId: result.id,
          name: result.name,
          user: result.email,
          idRol: result.idRol,
        },
        SEED,
        {
          expiresIn: CADUCIDAD_TOKEN,
        }
      );
    }
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
};
