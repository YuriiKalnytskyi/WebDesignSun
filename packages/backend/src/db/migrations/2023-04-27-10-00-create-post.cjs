module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Posts', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      author: Sequelize.STRING,
      title: Sequelize.STRING,
      direction: Sequelize.STRING,
      image: Sequelize.STRING,
      description: Sequelize.TEXT,

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('Posts'),
};
