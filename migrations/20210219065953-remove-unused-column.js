'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('media', 'categoryId', Sequelize.INTEGER)
    await queryInterface.removeColumn('categories', 'mediaId', Sequelize.INTEGER)
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('media', 'categoryId', Sequelize.INTEGER)
    await queryInterface.addColumn('categories', 'mediaId', Sequelize.INTEGER)
  }
};