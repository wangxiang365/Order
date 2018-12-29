/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    create_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    update_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    good_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    extra: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    delete_flag: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    account_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aftersale_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'order',
    timestamps: false,
  });
};
