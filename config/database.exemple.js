// TODO uncomment this when using sequelize

// const Sequelize = require('sequelize') ;
// const fs = require('fs');
// const path = require('path');
//
// const { development: config } = require('./config.json');
//
// let database = null;
//
// const loadModels = (sequelize) => {
//   const dir = path.join(__dirname, '../models');
//   const models = [];
//   fs.readdirSync(dir).forEach(file => {
//     const modelDir = path.join(dir, file);
//     const model = sequelize.import(modelDir);
//     models[model.name] = model;
//   });
//   return models;
// };
//
// module.exports = () => {
//   if (!database) {
//     const sequelize = new Sequelize(config);
//
//     database = {
//       sequelize,
//       Sequelize,
//       models: {},
//     };
//
//     database.models = loadModels(sequelize);
//   }
//
//   return database;
// }
