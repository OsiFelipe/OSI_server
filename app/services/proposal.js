const db = require("../models");
const { proposal, client, product, well } = db;

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
        sandImage: foundProposal.sandImage,
        gasImage: foundProposal.gasImage,
        chemImage: foundProposal.chemImage,
      },
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
    return {
      clients,
      products,
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
  solution: {
    sandSolution,
    gasSolution,
    chemSolution,
    sandImage,
    gasImage,
    chemImage,
  },
}) => {
  try {
    const result = await proposal.create({
      sla: basicInfo.sla.id,
      customName: basicInfo.customName,
      basicInfo,
      wellId: basicInfo.well.id,
      tallyDesign,
      sandSolution,
      gasSolution,
      chemSolution,
      sandImage,
      gasImage,
      chemImage,
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
    solution: {
      sandSolution,
      gasSolution,
      chemSolution,
      sandImage,
      gasImage,
      chemImage,
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
        sandSolution,
        gasSolution,
        chemSolution,
        sandImage,
        gasImage,
        chemImage,
        wellboreImage,
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
  getProposalDetail,
  editProposal,
  addProposal,
  getInfoTechProposal,
  deleteProposal,
};
