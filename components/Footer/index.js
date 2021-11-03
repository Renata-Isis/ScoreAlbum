import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por : Renata Isis /{' '}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/renata-isis-906026156/"
        >
          {' '}
          Linkedin
        </a>{' '}
        /{' '}
        <a className="hover:underline" href="https://github.com/Renata-Isis">
          {' '}
          Github
        </a>
      </div>
    </div>
  )
}

export default Footer
