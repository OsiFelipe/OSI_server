const express = require("express");
const wellController = require("../../controllers/well.controller");
const router = express.Router();

module.exports = (app) => {
  router
    .route("/well")
    .get(wellController.getWell)
    .post(wellController.addWell);

  router
    .route("/well/:idWell")
    .put(wellController.editWell)
    .delete(wellController.deleteWell);

  router.route("/well/client/:clientId").get(wellController.getWellByClientId);

  router.route("/well-detail/:idWell").get(wellController.getWellDetail);

  app.use(process.env.URI_API, router);
};
