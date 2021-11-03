import React, { useState } from 'react'; //Importando o react//
import PageTitle from '../components/pagesTitle';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Atendimento: 0,
    Album: 0,
  });
  const onChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name; //Pegando o name do input
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };
  const atendimento = [0, 1, 2, 3, 4, 5];
  const album = [0, 1, 2, 3, 4, 5];
  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const save = async () => {
    //Quando o usuário clicar em salvar eu quero mandar esses dados para a minha Api//
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await response.json(); //Espera o final da requisição do response e transforma o resultado em Json
      setSucess(true);
      setRetorno(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="text-center font-bold my-4 text-2xl">
        Críticas e sugestões
      </h1>
      <p className="text-center mb-6">
        A loja sempre busca atender o cliente da melhor forma possivel.
        <br />
        Por isso estamos sempre abertos a ouvir sua opinião.
      </p>
      {!sucess && (
        <div className="w-1/5 mx-auto">
          <label className="font-bold">Seu nome:</label>
          <input
            type="text"
            className="p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Nome"
            onChange={onChange}
            name="Nome"
            value={form.Nome}
          />
          <label className="font-bold">Email:</label>
          <input
            type="text"
            className="p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Email"
            onChange={onChange}
            name="Email"
            value={form.Email}
          />
          <label className="font-bold">Whatsapp:</label>
          <input
            type="text"
            className="p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Whatsapp"
            onChange={onChange}
            name="Whatsapp"
            value={form.Whatsapp}
          />
          <label className="font-bold">Nota Atendimento:</label>
          <div className="flex py-4">
            {atendimento.map((notaAtendimento) => {
              return (
                <label className="block w-1/6 ">
                  {notaAtendimento}
                  <br />
                  <input
                    type="radio"
                    name="Atendimento"
                    value={notaAtendimento}
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>
          <label className="font-bold">Nota Albúm:</label>
          <div className="flex py-4">
            {album.map((notaAlbum) => {
              return (
                <label className="block w-1/6 ">
                  {notaAlbum}
                  <br />
                  <input
                    type="radio"
                    name="Album"
                    value={notaAlbum}
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>
          <button
            className="bg-blue-400 px-10 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-6"
            onClick={save}
          >
            Salvar
          </button>
        </div>
      )}
      {sucess && (
        <div className="w-1/5 mx-auto">
          <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
            Obrigado por contribuir com sua sugestão ou crítica.
          </p>
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-4">
              seu cupom: <br />
              <span className="font-bold text-2xl">{retorno.Cupom}</span>
            </div>
          )}
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-4">
              <span className="font-bold block mb-2">{retorno.Promo}</span>
              <br />
              <span className="italic">
                Tire um print desta tela e apresente em sua próxima compra!
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pesquisa;
