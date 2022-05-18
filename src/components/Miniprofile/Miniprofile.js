import React from 'react'
import Perfil from '../header/imagens/perfil.jpg'

function Miniprofile() {
  return ( 
  <div className=" mt-20 ml-10 flex items-center justify-between">
    <img
      src={Perfil}
      className=" rounded-full w-16 h-16 object-cover border p-[2px]"/>
      <div className="mx-5">
        <h1 className='text-base'>thiago_django</h1>
        <p className='font-sm text-gray-500 text-sm'>Thiago Antenor</p>
      </div>
      <button className='text-blue-400 text-sm ml-10'>Mudar</button>
  </div>
  );
}

export default Miniprofile
