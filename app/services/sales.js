const db = require("../models");
const { sales, well } = db;

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
  orderDate,
  quoteNumber,
  client,
  city,
  stateZip,
  country,
  phoneNumber,
  email,
  contact,
  po,
  needBy,
  wellName,
  directions,
  deliveryContact,
  salesmanContact,
  specialNotes,
  productList,
  wellId,
  userId,
}) => {
  try {
    const result = await sales.create({
      orderDate,
      quoteNumber,
      client,
      city,
      stateZip,
      country,
      phoneNumber,
      email,
      contact,
      po,
      needBy,
      wellName,
      directions,
      deliveryContact,
      salesmanContact,
      specialNotes,
      productList,
      wellId,
      userId,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getSaleById = async ({ id }) => {
  try {
    const result = await sales.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const editSales = async (
  idSales,
  {
    orderDate,
    quoteNumber,
    client,
    city,
    stateZip,
    country,
    phoneNumber,
    email,
    contact,
    po,
    needBy,
    wellName,
    directions,
    deliveryContact,
    salesmanContact,
    specialNotes,
    productList,
    wellId,
    userId,
  }
) => {
  try {
    const result = await sales.update(
      {
        orderDate,
        quoteNumber,
        client,
        city,
        stateZip,
        country,
        phoneNumber,
        email,
        contact,
        po,
        needBy,
        wellName,
        directions,
        deliveryContact,
        salesmanContact,
        specialNotes,
        productList,
        wellId,
        userId,
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
  getSaleById,
  editSales,
  addSales,
};
