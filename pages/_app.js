import React from 'react' //Importando o react
import Layout from '../components/Layout'
import '../css/styles.css'

//Criando componente
const Myapp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Myapp
