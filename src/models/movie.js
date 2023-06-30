'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    movieName: DataTypes.STRING,
    movieGenre: DataTypes.STRING,
    movieDuration: DataTypes.INTEGER,
    movieDirector: DataTypes.STRING,
    movieDescription: DataTypes.STRING,
    movieReleaseDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};