'use strict';
module.exports = (sequelize, DataTypes) => {
  const show = sequelize.define('show', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    rating: DataTypes.DECIMAL
  }, {});
  show.associate = function(models) {
    // associations can be defined here
  };
  return show;
};