import React from 'react'
import "./Main.scss";


function Main({children}) {
   return <div className="main">{children}</div>
  
}

export default Main;

/*Le code définit un composant React appelé Main. Ce composant accepte une prop nommée children, 
qui est un terme spécial en React qui représente les éléments enfants rendus à l'intérieur du composant Main.*/