const express = require("express");
const router = express.Router();

const getTest = async (req, res) => {
  try {
    res.send({
      success: true,
      data: "Server is working fine, you're the problem",
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = (app) => {
  router.route("/test").get(getTest);

  app.use(process.env.URI_API, router);
};
