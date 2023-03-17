module.exports = (sequelize, Sequelize) => {
  const Rol = sequelize.define(
    "rol",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "tbRol",
    }
  );

  return Rol;
};
