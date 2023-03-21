const db = require("../models");
const { sales, well, user } = db;

const getSales = async () => {
  try {
    const result = await sales.findAll({
      include: well,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const addSales = async ({
  items,
  description,
  city,
  state,
  country,
  salesContact,
  orderDate,
  deliveryDate,
  deliveryTime,
  wellId,
  specialNotes,
  userId,
}) => {
  try {
    const result = await sales.create({
      items,
      description,
      city,
      state,
      country,
      salesContact,
      orderDate,
      deliveryDate,
      deliveryTime,
      specialNotes,
      wellId,
      userId,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const editSales = async (
  idSales,
  {
    items,
    description,
    city,
    state,
    country,
    salesContact,
    orderDate,
    deliveryDate,
    deliveryTime,
    wellId,
    specialNotes,
  }
) => {
  try {
    const result = await sales.update(
      {
        items,
        description,
        city,
        state,
        country,
        salesContact,
        orderDate,
        deliveryDate,
        deliveryTime,
        wellId,
        specialNotes,
      },
      {
        where: { id: idSales },
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSales,
  editSales,
  addSales,
};
