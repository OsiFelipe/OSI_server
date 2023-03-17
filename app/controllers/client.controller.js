const clientService = require("../services/client");

const getClient = async (req, res) => {
  try {
    const result = await clientService.getClient();
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const addClient = async (req, res) => {
  try {
    const result = await clientService.addClient(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const editClient = async (req, res) => {
  try {
    const {
      params: { idClient },
    } = req;
    const result = await clientService.editClient(idClient, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const deleteClient = async (req, res) => {
  try {
    const {
      params: { idClient },
    } = req;
    if (idClient === "undefined") {
      throw "Missing Property";
    }
    const result = await clientService.deleteClient({ id: idClient });
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  getClient,
  addClient,
  editClient,
  deleteClient,
};
