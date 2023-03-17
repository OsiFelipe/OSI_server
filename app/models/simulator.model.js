module.exports = (sequelize, Sequelize) => {
  const Simulator = sequelize.define(
    "simulator",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pathToFile: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "tbSimulator",
    }
  );

  return Simulator;
};
