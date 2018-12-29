/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('after_sale', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(40),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    skuId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'after_sale'
  });
};
