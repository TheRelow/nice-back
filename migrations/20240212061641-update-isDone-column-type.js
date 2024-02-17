'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('tasks', 'isDone', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false // Устанавливаем значение по умолчанию для существующих записей
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('tasks', 'isDone', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
