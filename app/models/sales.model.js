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
      description: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
        default: "TX",
      },
      country: {
        type: Sequelize.STRING,
        default: "USA",
      },
      salesContact: {
        type: Sequelize.STRING,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      deliveryDate: {
        type: Sequelize.DATE,
      },
      deliveryTime: {
        type: Sequelize.STRING,
      },
      specialNotes: {
        type: Sequelize.STRING,
      },
      items: {
        type: Sequelize.JSONB,
      },
      sent: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      tableName: "tbSales",
    }
  );

  return Sales;
};
