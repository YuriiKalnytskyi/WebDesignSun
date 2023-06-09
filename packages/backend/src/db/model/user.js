const Sequelize = require('sequelize');

module.exports = class Users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        fullName: DataTypes.STRING,
        password: DataTypes.STRING,
        accessToken: DataTypes.TEXT,
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        sequelize
      }
    );
  }

  static associate() {}
};
