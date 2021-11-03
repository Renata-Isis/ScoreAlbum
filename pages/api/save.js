import { GoogleSpreadsheet } from 'google-spreadsheet'; //Importando o google spread sheet
import moment from 'moment';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID); //Pegando o número da minha planilha

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS'))
    .toString(16)
    .toUpperCase();
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
};
export default async (req, res) => {
  //Aqui eu passo os dados para a planilha
  try {
    await doc.useServiceAccountAuth({
      //Variaveis de ambiente
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY,
    });
    await doc.loadInfo(); //se ele conseguir fazer a requisição de credencial, eu vou carregar as informações da planilha
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body); //Dados da planilha

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);

    let Cupom = '';
    let Promo = '';
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = genCupom();
      Promo = textoCell.value;
    }
    await sheet.addRow({
      //add linha na minha planilha com os dados
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Atendimento: parseInt(data.Atendimento),
      Album: parseInt(data.Album),
      'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
      Cupom,
      Promo,
    });
    res.end(
      JSON.stringify({
        showCoupon: Cupom !== '',
        Cupom,
        Promo,
      }),
    ); //Passando o body como requisição para minha resposta
  } catch (err) {
    console.log(err);
  }
};
