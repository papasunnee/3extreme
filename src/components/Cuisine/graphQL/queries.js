// Get logic middleware
// const { authAccess } = require('../utils/authentication');

// const { addPost } = require('../resolvers/mutations');

const { CuisineTC } = require('./typeComposers');

module.exports = {
  cuisines: CuisineTC.getResolver('findMany'),
  cuisineOne: CuisineTC.getResolver('findOne'),
  cuisineCount: CuisineTC.getResolver('count'),
};
