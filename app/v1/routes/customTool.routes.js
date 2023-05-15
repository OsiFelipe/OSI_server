const express = require("express");
const customToolController = require("../../controllers/customTool.controller");
const router = express.Router();

module.exports = (app) => {
  router
    .route("/custom-tool/:idProduct")
    .put(customToolController.editCustomTool);

  app.use(process.env.URI_API, router);
};
