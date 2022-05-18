import React, { useState } from "react";

function Suggestions() {
  const [recomendados, setrecomendados] = useState ([
    {
     
      img: "https://miro.medium.com/fit/c/176/176/0*PBlCNCw6YheDhO-o.",
      name: "auroraseles"
    },
    {
     
      img: "https://i.pinimg.com/originals/ea/32/0f/ea320f270a3ffb070d6cb93beb958427.jpg",
      name: "inovalem_"
    },
    {
      
      img: "https://i.pinimg.com/originals/01/6f/a2/016fa2c0e3e828e7df89da2dfe59abe3.jpg",
    name: "dev_steph"
    },
    {
      
      img: "https://i.pinimg.com/originals/fb/20/bb/fb20bb92bf03f3e67baffa8aa0cc73dc.jpg",
    name: "9gag"
    },
    {
      
      img: "https://i.pinimg.com/originals/7d/49/8a/7d498a476297c2059b7cb11fb0953dbe.jpg",
    name: "pietroyasei"
    }
    ]);
    
  return (
    <div className="ml-7 mt-1">
      <div className="flex itens-center justify-between">
        <h1 className=" ml-12 mt-3 text-gray-400 font-medium text-sm">
          Sugestões para você
        </h1>
        <button className="text-sm">Ver tudo</button>
      </div>
      {
      recomendados.map(recomendados => (
        <div
          className="flex items-center justify-between mt-2 ml-5"
        >
          <img
            src={recomendados.img}
            className="w-10 h-10 rounded-full object-cover border p-[2px]"
          />
          <div className="flex-1 m-1 ml-2">
            <p className="font-medium text-sm">{recomendados.name}</p>
            <h1 className="text-sm text-gray-400">Sugestões para você</h1>
          </div>
          <div>
            <button className="text-sm text-blue-400">Seguir</button>
          </div>
        </div>
        
      ))
    }
    <div className="flex w-80 justify-start pt-10 pl-5 h-32">
      <a href="#" className="rodape text-xs text-[#c7c7c7] font-normal"> Sobre · Ajuda · Imprensa · API · Carreiras · Privacidade · <br />
Termos · Localizações · Principais contas · Hashtags · Idioma <br /><br /><br />
©2022 INSTAGRAM FROM META
 </a>
          </div>
    </div>
  )
  
  
}

export default Suggestions;
