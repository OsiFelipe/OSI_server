module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define(
    "image",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
        default: null,
      },
    },
    {
      tableName: "tbImage",
    }
  );

  return Image;
};
