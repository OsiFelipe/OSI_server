const productService = require("../services/product");

const getProduct = async (req, res) => {
  try {
    const result = await productService.getProduct();
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const addProduct = async (req, res) => {
  try {
    const result = await productService.addProduct(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const editProduct = async (req, res) => {
  try {
    const {
      params: { idProduct },
    } = req;
    console.log(idProduct);
    console.log(req.body);
    const result = await productService.editProduct(idProduct, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {
      params: { idProduct },
    } = req;
    if (idProduct === "undefined") {
      throw "Missing Property";
    }
    const result = await productService.deleteProduct({ id: idProduct });
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
