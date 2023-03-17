const jwt = require("jsonwebtoken");
const db = require("./../config/database");

// ==========================
// Verfy Token
// ==========================
let verificaToken = (req, res, next) => {
  let token = req.get("token");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        error: {
          message: "No valid token",
        },
      });
    }
    req.userUuid = decoded.userUuid;
    db.UserClientAux.findOne({ where: { userUuid: req.userUuid } })
      .then((userClientAux) => {
        if (!userClientAux) {
          db.UserClient.findOne({
            where: { userUuid: req.userUuid },
          })
            .then((userClient) => {
              req.clientUuid = userClient.clientUuid;
              next();
            })
            .catch((error) => {
              return res.status(401).json({
                ok: false,
                error,
              });
            });
        } else {
          req.clientUuid = userClientAux.clientUuid;
          next();
        }
      })
      .catch((error) => {
        return res.status(401).json({
          ok: false,
          error,
        });
      });
  });
};

// ==========================
// Verify Role
// ==========================
let verifyRole = (roles) => {
  return async (req, res, next) => {
    let user = req.userUuid;

    const userApp = await db.User.findByPk(user);
    req.roleId = userApp.dataValues.roleId;
    if (userApp.dataValues.roleId === 3) {
      next();
    } else {
      if (roles.includes(userApp.dataValues.roleId)) {
        next();
      } else {
        return res.json({
          ok: false,
          error: {
            message: "Not authorize for this resource!",
          },
        });
      }
    }
  };
};

module.exports = {
  verificaToken,
  verifyRole,
};
