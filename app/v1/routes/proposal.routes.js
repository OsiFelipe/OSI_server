const express = require("express");
const proposalController = require("../../controllers/proposal.controller");
const router = express.Router();

module.exports = (app) => {
  router
    .route("/proposal")
    .get(proposalController.getProposal)
    .post(proposalController.addProposal);

  router.route("/proposal-detail").get(proposalController.getProposalDetail);

  router
    .route("/proposal/:idProposal")
    .get(proposalController.getProposalById)
    .put(proposalController.editProposal)
    .delete(proposalController.deleteProposal);

  router.route("/tech-proposal").get(proposalController.getInfoTechProposal);

  app.use(process.env.URI_API, router);
};
