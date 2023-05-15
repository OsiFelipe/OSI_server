const db = require("../models");
const { customTool } = db;

const editCustomTool = async (
  idProduct,
  {
    name,
    topThreadConnection,
    bottomThreadConnection,
    maxOD,
    bodyOD,
    length,
    weight,
  }
) => {
  try {
    const result = await customTool.update(
      {
        name,
        description: name,
        topThreadConnection,
        bottomThreadConnection,
        maxOD,
        bodyOD,
        length,
        weight,
      },
      {
        where: { id: idProduct },
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  editCustomTool,
};
