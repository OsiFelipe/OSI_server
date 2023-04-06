const db = require("../models");
const { tally, well, client } = db;

const getTally = async () => {
  try {
    const result = await tally.findAll({
      where: { active: true },
      order: [["date", "DESC"]],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getTallyDetail = async () => {
  try {
    const result = await tally.findAll({
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

const getTallyById = async ({ id }) => {
  try {
    const result = await tally.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const addTally = async ({ basicInfo, tallyDesign, wbdDesign }) => {
  try {
    const result = await tally.create({
      customName: basicInfo.customName,
      basicInfo,
      tallyDesign,
      wbdDesign,
      active: true,
      wellId: basicInfo.well.id,
      date: new Date(),
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const editTally = async (idTally, { basicInfo, tallyDesign, wbdDesign }) => {
  try {
    const result = await tally.update(
      {
        customName: basicInfo.customName,
        basicInfo,
        tallyDesign,
        wbdDesign,
        active: true,
        wellId: basicInfo.well.id,
      },
      { where: { id: idTally } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteTally = async ({ id }) => {
  try {
    const result = await tally.update(
      {
        active: false,
      },
      {
        where: { id },
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTally,
  getTallyDetail,
  getTallyById,
  editTally,
  addTally,
  deleteTally,
};
