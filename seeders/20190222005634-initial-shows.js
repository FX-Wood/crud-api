'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shows', [
      {
        name: "The Good Place",
        description: "After waking up in heaven, ____ discovers that not everything is as it seems",
        rating: 5.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Star Trek Voyager",
        description: "Stranded in the Delta Quadrant, the crew of USS Voyager face a multitude of challenges as they slowly warp home",
        rating: 4.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Breaking Bad",
        description: "Walther White follows his instincts and finds himself far from his high-school chemistry roots",
        rating: 3.7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shows', null, {})
  }
};
