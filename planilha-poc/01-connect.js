const { GoogleSpreadsheet } = require('google-spreadsheet'); //Importando o google spread sheet
const credentials = require('./credentials.json'); //Importando minha credencial json

const doc = new GoogleSpreadsheet(
  '1Nrm1IIhbHMrh1zPai9NvPz16lVbPLhC4SEvkOoIQbGM',
); //Pegando o número da minha planilha

const run = async () => {
  await doc.useServiceAccountAuth(credentials); //fazendo a autenticação das minhas credenciais
  await doc.loadInfo(); //se ele conseguir fazer a requisição de credencial, eu vou carregar as informações da planilha
  console.log(doc.title);
};
run();
