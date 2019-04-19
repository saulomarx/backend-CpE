// TODO uncomment this when using sequelize
// const Database = require('../config/database');

// const { models: { Product } } = Database();

const Database  = require('../config/database.js');

module.exports = {
  async getProducts() {
    const conection = await Database();
    return conection.query('SELECT nome from Especialista');
  }
};
