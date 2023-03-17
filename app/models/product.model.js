module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      partNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      inUse: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      topThreadConnection: {
        type: Sequelize.STRING,
      },
      bottomThreadConnection: {
        type: Sequelize.STRING,
      },
      maxOD: {
        type: Sequelize.STRING,
      },
      bodyOD: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      pathToImage: {
        type: Sequelize.TEXT,
        default: null,
      },
    },
    {
      tableName: "tbProduct",
    }
  );

  return Product;
};
