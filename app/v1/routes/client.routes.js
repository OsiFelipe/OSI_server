const express = require("express");
const clientController = require("../../controllers/client.controller");
const router = express.Router();

module.exports = (app) => {
  router
    .route("/client")
    .get(clientController.getClient)
    .post(clientController.addClient);

  router
    .route("/client/:idClient")
    .put(clientController.editClient)
    .delete(clientController.deleteClient);

  router
    .route("/client-detail/:idClient")
    .get(clientController.getClientDetail);

  app.use(process.env.URI_API, router);
};
