const { composeWithMongoose } = require('graphql-compose-mongoose');
const keystone = require('keystone');

/**
 * Mongoose Models
 */
const Cuisine = keystone.list('Cuisine').model;

const CuisineTC = composeWithMongoose(Cuisine);

/**
 * Exports
 */
module.exports = {
  CuisineTC,
};
