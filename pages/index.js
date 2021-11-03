import React from 'react'; //Importando o react
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/pagesTitle';

const fetcher = (...args) => fetch(...args).then((res) => res.json()); //Passando os argumentos separados e após a requisição devolvendo eles em formato Json
//Criando componente
const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher); //Indicando a url que eu quero pegar
  return (
    <div className="container mx-auto">
      <PageTitle title="Seja Bem-Vindo" />
      <h1 className="mt-6 text-center font-bold">
        Score Albúm - Avalie e ganhe descontos!
      </h1>
      <p className="mt-12 text-center">
        A loja sempre busca atender o cliente da melhor forma possivel.
        <br />
        Por isso estamos sempre abertos a ouvir sua opinião.
      </p>
      <img className="mx-auto m-6" src="./muse-album.png" alt="Muse Albúm" />
      <p className="mt-12 text-center">
        Avalie o albúm acima e o nosso atendimento, e receba um cupom de 10% de
        desconto na sua próxima compra!
      </p>
      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className="bg-blue-400 px-10 py-4 font-bold rounded-lg shadow-lg hover:shadow">
            Fazer avaliação
          </a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className="mt-12 text-center">{data.message}</p>
      )}
    </div>
  );
};

export default Index;
