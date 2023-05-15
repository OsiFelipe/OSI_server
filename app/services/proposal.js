const db = require("../models");
const { proposal, client, product, well, customTool } = db;

const getProposal = async () => {
  try {
    const result = await proposal.findAll({
      where: { active: true },
      order: [["date", "DESC"]],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getProposalDetail = async () => {
  try {
    const result = await proposal.findAll({
      where: { active: true },
      attributes: ["id", "customName", "date"],
      include: {
        model: well,
        attributes: ["name"],
        include: { model: client, attributes: ["name"] },
      },
      order: [["date", "DESC"]],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getProposalById = async ({ id }) => {
  try {
    const foundProposal = await proposal.findByPk(id, { raw: true });
    const result = {
      ...foundProposal,
      solution: {
        sandSolution: foundProposal.sandSolution,
        gasSolution: foundProposal.gasSolution,
        chemSolution: foundProposal.chemSolution,
        pressureSolution: foundProposal.pressureSolution,
        sandSimulator: foundProposal.sandSimulator,
        gasSimulator: foundProposal.gasSimulator,
        chemSimulator: foundProposal.chemSimulator,
        pressureSimulator: foundProposal.pressureSimulator,
      },
    };
    return result;
  } catch (error) {
    throw error;
  }
};

const getInfoSolTechProposalById = async ({ id }) => {
  try {
    const foundProposal = await proposal.findByPk(id, { raw: true });
    const result = {
      sandSolution: foundProposal.sandSolution,
      gasSolution: foundProposal.gasSolution,
      chemSolution: foundProposal.chemSolution,
      sandSimulator: foundProposal.sandSimulator,
      gasSimulator: foundProposal.gasSimulator,
      chemSimulator: foundProposal.chemSimulator,
      simulator: foundProposal.simulator,
    };
    return result;
  } catch (error) {
    throw error;
  }
};

const getInfoTechProposal = async () => {
  try {
    const clients = await client.findAll({
      where: { active: true },
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    const products = await product.findAll({
      where: { inUse: true },
      order: [["id", "ASC"]],
    });
    const customTools = await customTool.findAll({
      order: [["name", "ASC"]],
    });
    return {
      clients,
      products,
      customTools,
    };
  } catch (error) {
    throw error;
  }
};

const addProposal = async ({
  basicInfo,
  tallyDesign,
  wbdDesign,
  wellboreImage,
  simulator,
  solution: {
    sandSolution,
    gasSolution,
    chemSolution,
    pressureSolution,
    sandSimulator,
    gasSimulator,
    chemSimulator,
    pressureSimulator,
  },
}) => {
  try {
    const result = await proposal.create({
      sla: basicInfo.sla.id,
      customName: basicInfo.customName,
      basicInfo,
      wellId: basicInfo.well.id,
      tallyDesign,
      simulator,
      sandSolution,
      gasSolution,
      chemSolution,
      pressureSolution,
      sandSimulator,
      gasSimulator,
      chemSimulator,
      pressureSimulator,
      wellboreImage,
      wbdDesign,
      date: new Date(),
      active: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const editProposal = async (
  { id },
  {
    basicInfo,
    tallyDesign,
    wbdDesign,
    wellboreImage,
    simulator,
    solution: {
      sandSolution,
      gasSolution,
      chemSolution,
      pressureSolution,
      sandSimulator,
      gasSimulator,
      chemSimulator,
      pressureSimulator,
    },
  }
) => {
  try {
    const result = await proposal.update(
      {
        sla: basicInfo.sla.id,
        customName: basicInfo.customName,
        basicInfo,
        wellId: basicInfo.well.id,
        tallyDesign,
        wbdDesign,
        simulator,
        sandSolution,
        gasSolution,
        chemSolution,
        pressureSolution,
        sandSimulator,
        gasSimulator,
        chemSimulator,
        wellboreImage,
        pressureSimulator,
      },
      { where: { id } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteProposal = async ({ id }) => {
  try {
    const result = await proposal.update(
      {
        active: false,
      },
      { where: { id } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getProposal,
  getProposalById,
  getInfoSolTechProposalById,
  getProposalDetail,
  editProposal,
  addProposal,
  getInfoTechProposal,
  deleteProposal,
};
