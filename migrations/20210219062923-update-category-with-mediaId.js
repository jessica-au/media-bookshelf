'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'mediaId', Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('categories', 'mediaId', Sequelize.INTEGER)
  }
};
