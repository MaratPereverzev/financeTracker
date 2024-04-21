const { DataTypes } = require("sequelize");

module.exports = (db, modelName, options) => {
  const model = db.define(
    modelName,
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    options
  );

  model.associate = (models) => {
    model.hasMany(models.word, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
  };

  return model;
};