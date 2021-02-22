'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class podcast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      models.podcast.belongsToMany(models.category, {through: "categoriesPodcasts"});
    }
  };
  podcast.init({
    podcastName: DataTypes.STRING,
    podcastUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'podcast',
  });
  return podcast;
};