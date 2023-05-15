module.exports = (sequelize, Sequelize) => {
  const Proposal = sequelize.define(
    "proposal",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      sla: {
        type: Sequelize.INTEGER,
        allowNull: true,
        values: [1, 2, 3],
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
        allowNull: false,
      },
      wbdDesign: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      sandSolution: {
        type: Sequelize.BOOLEAN,
      },
      gasSolution: {
        type: Sequelize.BOOLEAN,
      },
      chemSolution: {
        type: Sequelize.BOOLEAN,
      },
      pressureSolution: {
        type: Sequelize.BOOLEAN,
      },
      simulator: {
        type: Sequelize.JSONB,
        default: null,
      },
      sandSimulator: {
        type: Sequelize.JSONB,
        default: null,
      },
      gasSimulator: {
        type: Sequelize.JSONB,
        default: null,
      },
      chemSimulator: {
        type: Sequelize.JSONB,
        default: null,
      },
      pressureSimulator: {
        type: Sequelize.JSONB,
        default: null,
      },
      wellboreImage: {
        type: Sequelize.TEXT,
        default: null,
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
      tableName: "tbProposal",
    }
  );

  return Proposal;
};
