import React from 'react'; //Importando o react
import Link from 'next/link';
import PageTitle from '../components/pagesTitle';

const Contato = () => {
  return (
    <div>
      <PageTitle title="Contato" />
      <div className="w-1/6 mx-auto mb-10 text-center">
        <h1 className="text-center font-bold my-4 text-2xl mb-10">
          Fale Conosco:
        </h1>
        <a
          className="bg-green-500 px-20 py-5 font-bold rounded-lg shadow-lg hover:shadow "
          href="https://api.whatsapp.com/send?phone=11966644002&text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato"
        >
          Whatsapp
        </a>
      </div>
      <div>
        <Link href="/">
          <a className="font-bold">Voltar</a>
        </Link>
      </div>
    </div>
  );
};

export default Contato;
