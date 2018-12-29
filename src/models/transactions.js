/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    serial_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spent: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    balance: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'transactions'
  });
};
