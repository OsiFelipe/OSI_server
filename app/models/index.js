var fs = require("fs");
var path = require("path");
const dbConfig = require("../config/db.config.js");
var basename = path.basename(__filename);
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false,
});

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    db[file.split(".")[0]] = require("./" + file)(sequelize, Sequelize);
  });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models relation
/**
 * Client-well
 */
db.client.hasMany(db.well, { foreignKey: "clientId" });
db.well.belongsTo(db.client);

/**
 * Well-Proposal
 */
db.well.hasMany(db.proposal, { foreignKey: "wellId" });
db.proposal.belongsTo(db.well);

/**
 * Well-Tally
 */
db.well.hasMany(db.tally, { foreignKey: "wellId" });
db.tally.belongsTo(db.well);

/**
 * Well-Sales
 */
db.well.hasMany(db.sales, { foreignKey: "wellId" });
db.sales.belongsTo(db.well);

/**
 * User-Sales
 */
db.user.hasMany(db.sales, { foreignKey: "userId" });
db.sales.belongsTo(db.user);

/**
 * Product-Image
 */
db.image.belongsToMany(db.product, { through: "imageId" });
module.exports = db;
