module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define(
    "client",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "tbClient",
    }
  );

  return Client;
};
