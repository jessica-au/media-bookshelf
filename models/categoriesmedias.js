'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoriesMedias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.categoriesMedias.belongsTo(models.category)
      // models.media.belongsToMany(models.category, { through: models.categoriesMedias});
      // models.category.belongsToMany(models.media, { through: models.categoriesMedias});
      
      // models.categoriesMedias.belongsTo(models.user)
    }
  };
  categoriesMedias.init({
    mediaId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'categoriesMedias',
  });
  return categoriesMedias;
};