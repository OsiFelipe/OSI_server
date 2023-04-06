module.exports = (sequelize, Sequelize) => {
  const Sales = sequelize.define(
    "sales",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      quoteNumber: {
        type: Sequelize.STRING,
      },
      client: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      stateZip: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      po: {
        type: Sequelize.STRING,
      },
      needBy: {
        type: Sequelize.DATE,
      },
      wellName: {
        type: Sequelize.STRING,
      },
      directions: {
        type: Sequelize.STRING,
      },
      deliveryContact: {
        type: Sequelize.STRING,
      },
      salesmanContact: {
        type: Sequelize.STRING,
      },
      specialNotes: {
        type: Sequelize.STRING,
      },
      productList: {
        type: Sequelize.JSONB,
      },
    },
    {
      tableName: "tbSales",
    }
  );

  return Sales;
};
