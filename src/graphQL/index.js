const baseTypeComposers = require('./core/composers');

// Add resolvers to Type Composers
require('./core/resolvers');

const baseQueries = require('./core/queries');
const baseMutations = require('./core/mutations');

module.exports = {
  queries: { ...baseQueries },
  mutations: { ...baseMutations },
  subscriptions: {},
  typeComposers: { ...baseTypeComposers },
  nav: {},
  _relationships: [],
};
