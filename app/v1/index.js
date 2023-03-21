"use strict";
var fs = require("fs");
var path = require("path");
var basename = path.basename(__filename);

const routes = [
  require("./routes/client.routes"),
  require("./routes/user.routes"),
  require("./routes/well.routes"),
  require("./routes/proposal.routes"),
  require("./routes/tally.routes"),
  require("./routes/product.routes"),
  require("./routes/sales.routes"),
];

module.exports = function router(app) {
  try {
    return (
      routes &&
      routes.forEach((route) => {
        route(app);
      })
    );
  } catch (e) {
    throw e;
  }
};
