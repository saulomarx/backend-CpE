// TODO uncomment this when using sequelize
// const Database = require('../config/database');

// const { models: { Product } } = Database();

const Database  = require('../config/database.js');

function createWhere(query){
  const vet = query.split(' ');
  const maped = vet.map(nome => ` nome LIKE '%${nome}%' OR`).join(' ');

  return `WHERE ${maped.substring(0,maped.length-2)};`
}

module.exports = {
  async getPesquisadores(query) {
    const conection = await Database();
    const where = query.nome ? await createWhere(query.nome): '';
    return conection.query(`SELECT id, nome FROM Especialista ${where}`);
  },

  async get(id) {
    const conection = await Database();
    return conection.query(`SELECT * FROM Especialista WHERE id = ${id}`);
  }

};
