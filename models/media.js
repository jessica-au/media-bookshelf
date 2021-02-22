'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.media.belongsToMany(models.category, {through: 'categoriesMedias'});
      models.media.belongsToMany(models.category, {through: "categoriesMedias"});
      // models.category.belongsToMany(models.media, { through: "categoriesMedias"});
    }
  };
  media.init({
    mediaName: DataTypes.STRING,
    mediaUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'media',
  });
  return media;
};