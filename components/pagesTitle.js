import React from 'react'; //Importando o react//
import Head from 'next/head';

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - ScoreAlbúm</title>
    </Head>
  );
};

export default PageTitle;
