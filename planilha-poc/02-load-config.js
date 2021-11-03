const { GoogleSpreadsheet } = require('google-spreadsheet'); //Importando o google spread sheet
const credentials = require('./credentials.json'); //Importando minha credencial json

const doc = new GoogleSpreadsheet(
  '1Nrm1IIhbHMrh1zPai9NvPz16lVbPLhC4SEvkOoIQbGM',
); //Pegando o número da minha planilha

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials); //fazendo a autenticação das minhas credenciais
    await doc.loadInfo(); //se ele conseguir fazer a requisição de credencial, eu vou carregar as informações da planilha
    console.log(doc.title);

    const sheet = doc.sheetsByIndex[2]; //Pegando a planilha desejada, no caso a 2(configurações)
    await sheet.loadCells('A3:B3'); //Carregando apenas as celulas que eu quero
    console.log(sheet.title); //Verificando se estou na planilha certa
    const mostrarPromocaoCell = sheet.getCell(2, 0); //Pegando as informações da linha e coluna desejada
    console.log(mostrarPromocaoCell.value); //Mostrando o valor que há nessas celulas
    const textoCell = sheet.getCell(2, 1);
    console.log(textoCell.value);
  } catch (err) {
    console.log(err);
  }
};
run();
