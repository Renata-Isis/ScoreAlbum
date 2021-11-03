import { GoogleSpreadsheet } from 'google-spreadsheet'; //Importando o google spread sheet

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID); //Pegando o número da minha planilha

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      //Variaveis de ambiente
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY,
    });
    await doc.loadInfo(); //se ele conseguir fazer a requisição de credencial, eu vou carregar as informações da planilha

    const sheet = doc.sheetsByIndex[2]; //Pegando a planilha desejada, no caso a 2(configurações)
    await sheet.loadCells('A3:B3'); //Carregando apenas as celulas que eu quero

    const mostrarPromocaoCell = sheet.getCell(2, 0); //Pegando as informações da linha e coluna desejada
    const textoCell = sheet.getCell(2, 1);
    res.end(
      JSON.stringify({
        showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
        message: textoCell.value,
      }),
    );
  } catch (err) {
    //Em caso de erro não mostra nada
    res.end(
      JSON.stringify({
        showCoupon: false,
        message: '',
      }),
    );
  }
};
