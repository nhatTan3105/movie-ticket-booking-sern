'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      movieID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      movieName: {
        type: Sequelize.STRING
      },
      movieGenre: {
        type: Sequelize.STRING
      },
      movieDuration: {
        type: Sequelize.INTEGER
      },
      movieDirector: {
        type: Sequelize.STRING
      },
      movieDescription: {
        type: Sequelize.STRING
      },
      movieReleaseDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};