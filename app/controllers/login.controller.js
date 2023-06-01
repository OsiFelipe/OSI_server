const loginService = require("../services/login");

const login = async (req, res) => {
  try {
    const { user } = req.body;
    const hashPass2 = req.body.password;
    const hashPass1 = Buffer.from(hashPass2, "base64").toString("ascii");
    const password = Buffer.from(hashPass1, "base64").toString("ascii");
    const token = await loginService.login(user, password);
    if (token) {
      res.send({ success: true, data: { token } });
    } else {
      res
        .status(401)
        .send({ success: false, data: { error: "Not Authorized!" } });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  login,
};
