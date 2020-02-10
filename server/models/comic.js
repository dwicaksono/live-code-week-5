'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Comic extends Model { }
  Comic.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, { sequelize })

  // const Comic = sequelize.define('Comic', {
  //   title: DataTypes.STRING,
  //   author: DataTypes.STRING,
  //   imageUrl: DataTypes.STRING
  // }, {});

  Comic.associate = function (models) {
    // associations can be defined here
    // Comic.belongsTo(models.User)
  };
  return Comic;
};