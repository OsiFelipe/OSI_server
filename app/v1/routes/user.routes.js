const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();

module.exports = (app) => {
  router
    .route("/user")
    .get(userController.getUsers)
    .post(userController.addUser);

  router
    .route("/user/:idUser")
    .put(userController.editUser)
    .delete(userController.deleteUser);

  app.use(process.env.URI_API, router);
};
