// TODO uncomment this when using sequelize
// const Database = require('../config/database');

// const { models: { Product } } = Database();

//ARTIGO, trabalho em even

//TODO
// Artigo -> titulo
// CapLivro -> titulo
// Doutorado -> titulo_tese
// Especialista -> resumo, nome
// Livro -> titulo
// Mestrado ->  titulo_tese
// PosDoutorado -> titulo_tese
// Projeto -> titulo, descrição
// TrabEvento -> titulo



const Database  = require('../config/database.js');

function createWhere(query){
  const vet = query.split(' ');
  const maped = vet.map(nome => ` nome LIKE '%${nome}%' AND`).join(' ');

  return `WHERE ${maped.substring(0,maped.length-3)};`
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
