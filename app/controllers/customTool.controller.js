const customToolService = require("../services/customTool");

const editCustomTool = async (req, res) => {
  try {
    const {
      params: { idProduct },
    } = req;
    const result = await customToolService.editCustomTool(idProduct, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  editCustomTool,
};
