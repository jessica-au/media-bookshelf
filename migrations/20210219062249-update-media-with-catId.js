'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('media', 'categoryId', Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('media', 'categoryId', Sequelize.INTEGER)
  }
};
