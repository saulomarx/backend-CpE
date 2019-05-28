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

function createWhere(query, fieldName){
  const vet = query.split(' ');
  const maped = fieldName.map(field => {
    const temp = vet.map(nome => ` ${field} LIKE '%${nome}%' OR`).join(' ')
    return `(${temp.substring(0,temp.length-2)}) OR`
    }
  ).join(' ')

  return `${maped.substring(0,maped.length-3)};`
}

module.exports = {
  async getPesquisadores(query) {
    const conection = await Database();
    const where = query.nome ? await createWhere(query.nome, ["Especialista.nome"]): '';
    return conection.query(`SELECT Especialista.id, Especialista.nome FROM Especialista WHERE ${where}`);
  },

  async getPesquisadoresAdvanced(query) {
    const conection = await Database();
    const where = query.nome ? await createWhere(query.nome, ['Especialista.nome','Artigo.titulo']): '';
    const dbQuery = `
        SELECT DISTINCT Especialista.id, Especialista.nome FROM Especialista
        INNER JOIN Artigo ON Artigo.id_esp = Especialista.id
        WHERE ${where}
      `
    return conection.query(dbQuery);
  },

  async get(id) {
    const conection = await Database();
    return conection.query(`SELECT * FROM Especialista WHERE id = ${id}`);
  }

};
