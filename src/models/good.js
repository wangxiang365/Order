/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('good', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    good_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    good_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sale_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    market_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stock: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sale_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'good'
  });
};
