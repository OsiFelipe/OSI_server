const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const db = require("./app/models");
const cors = require("cors");
const router = require("./app/v1");

const PORT = process.env.PORT || 4000;

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

router(app);

app.listen(PORT, () => {
  console.log(`🚀  Server is running on port ${PORT}.`);
});
