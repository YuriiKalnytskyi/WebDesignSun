const Sequelize = require('sequelize');

module.exports = class Posts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        author: DataTypes.STRING,
        title: DataTypes.STRING,
        direction: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
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
