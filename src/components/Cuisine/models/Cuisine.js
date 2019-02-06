/* eslint-disable func-names */
const {
  List,
  Field: { Types },
} = require('keystone');

/**
 * Cuisine Model
 * =============
 */

const Cuisine = new List('Cuisine');

Cuisine.add({
  name: { type: Types.Text, required: true, initial: true },
  description: { type: Types.Textarea, initial: true },
  createdAt: { type: Date, default: Date.now },
});

// Cuisine.schema.pre('save', function (next) {
//   this.wasNew = this.isNew;
//   next();
// });

// Cuisine.schema.post('save', async function () {
//   if (this.wasNew) {
//     (await this.getNotificationEmail()).send();
//   }
// });

// const {
//   getNotificationEmail,
// } = require('../methods');

// Cuisine.schema.methods.getNotificationEmail = getNotificationEmail;

Cuisine.defaultSort = '-createdAt';
Cuisine.defaultColumns = 'name, description, createdAt';
Cuisine.register();
