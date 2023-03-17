const tallyService = require("../services/tally");

const getTally = async (req, res) => {
  try {
    const result = await tallyService.getTally();
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const getTallyDetail = async (req, res) => {
  try {
    const result = await tallyService.getTallyDetail();
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const getTallyById = async (req, res) => {
  try {
    const {
      params: { idTally },
    } = req;
    if (idTally === "undefined") {
      throw "Missing Property";
    }
    const result = await tallyService.getTallyById({ id: idTally });
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const addTally = async (req, res) => {
  try {
    const result = await tallyService.addTally(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const editTally = async (req, res) => {
  try {
    const {
      params: { idTally },
    } = req;
    const result = await tallyService.editTally(idTally, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const deleteTally = async (req, res) => {
  try {
    const {
      params: { idTally },
    } = req;
    if (idTally === "undefined") {
      throw "Missing Property";
    }
    const result = await tallyService.deleteTally({ id: idTally });
    res.send({ success: true, data: result });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  getTally,
  getTallyDetail,
  getTallyById,
  addTally,
  editTally,
  deleteTally,
};
