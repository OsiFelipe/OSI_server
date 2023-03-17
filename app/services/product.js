const db = require("../models");
const { product } = db;

const getProduct = async () => {
  try {
    const result = await product.findAll({
      where: { inUse: true },
      limit: 10,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const addProduct = async ({
  partNumber,
  name,
  description,
  topThreadConnection,
  bottomThreadConnection,
  maxOD,
  bodyOD,
  length,
  weight,
}) => {
  try {
    const result = await product.create({
      partNumber,
      name,
      description,
      topThreadConnection,
      bottomThreadConnection,
      maxOD,
      bodyOD,
      length,
      weight,
      inUse: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const editProduct = async (
  idProduct,
  {
    partNumber,
    name,
    description,
    topThreadConnection,
    bottomThreadConnection,
    maxOD,
    bodyOD,
    length,
    weight,
  }
) => {
  try {
    const result = await product.update(
      {
        partNumber,
        name,
        description,
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

const deleteProduct = async (id) => {
  try {
    const result = await product.update(
      {
        inUse: false,
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
  getProduct,
  editProduct,
  addProduct,
  deleteProduct,
};
