require('require-all')(`${__dirname}/models`);
const app = require('../../app');
const typeComposers = require('./graphQL/typeComposers');

// Add resolvers to Type Composers
require('./graphQL/resolvers');

const mutations = require('./graphQL/mutations');
const queries = require('./graphQL/queries');

app.registerComponent({
  name: 'Cuisine',
  graphQL: {
    typeComposers,
    mutations,
    queries,
  },
  admin: {
    nav: { cusines: 'Cuisine' },
  },
});
