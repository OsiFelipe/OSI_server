const salesService = require("../services/sales");

const getSales = async (req, res) => {
  try {
    const result = await salesService.getSales();
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const addSales = async (req, res) => {
  try {
    const result = await salesService.addSales(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const editSales = async (req, res) => {
  try {
    const {
      params: { idSales },
    } = req;
    const result = await salesService.editSales(idSales, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  getSales,
  addSales,
  editSales,
};
