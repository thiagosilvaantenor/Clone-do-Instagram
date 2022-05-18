import React from "react";
import "./Story.css";

function Story({name, image}) {
  return (
    <div className="story">
  <div className="p-[4px]"> 
  <img src={image} alt='' className="w-14 h-14 border border-red-500 cursor-pointer p-[2px] rounded-full"/>
  <h5 class="nome_usuario" className="text-xs w-16 truncate text-center flex">{name}</h5>
  </div>
  </div>
  );
}

export default Story;