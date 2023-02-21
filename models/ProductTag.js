const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
   id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },
   product_id: {
    type: INTEGER,
   },
   tag_id: {
    type: INTEGER,
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
