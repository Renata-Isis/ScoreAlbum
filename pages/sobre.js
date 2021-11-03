import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/pagesTitle';

const Sobre = () => {
  return (
    <div>
      <PageTitle title="Sobre" />
      <h1 className="text-center font-bold my-4 text-2xl">Sobre nós:</h1>
      <p className="text-center mb-6 w-3/5 mx-auto">
        O album score surgiu em 2010 pela nossa paixão por disco de vinil, e
        pela dificuldade que encontrávamos para comprar os discos, tanto os
        usados quanto os novos. ( E também precisávamos de uma boa desculpa para
        podermos ficar pertinho dos discos !!!)
      </p>

      <p className="text-center mb-6 w-3/5 mx-auto">
        Foram horas e mais horas enfiados em sebo e muita decepção nas compras
        pela Internet. Fora a chateação com os importados que não chegavam
        nunca.
      </p>

      <p className="text-center mb-6 w-3/5 mx-auto">
        Então decidimos ter uma loja de disco, mas tinha que ser diferente. E
        para conseguirmos isto desenhamos nosso projeto para que o cliente tenha
        uma outra experiência, que ele conte com uma loja em que confia.
      </p>
      <div>
        <Link href="/">
          <a className="font-bold">Voltar</a>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
