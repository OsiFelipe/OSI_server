module.exports = (sequelize, Sequelize) => {
  const Tally = sequelize.define(
    "tally",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      customName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      basicInfo: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      tallyDesign: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      wbdDesign: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      tableName: "tbTally",
    }
  );

  return Tally;
};
