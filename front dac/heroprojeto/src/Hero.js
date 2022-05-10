import React from 'react';
import './Hero.css';
import video from "./video/Armor.mp4";


export default class Hero extends React.Component{
  render(){
    return ( 
      <div className="Hero">
        <header className="Hero-header">
        <iframe width="560" height="315" muted src="https://www.youtube.com/embed/qFXT1Xlx5gk" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <video id="background" autoPlay loop muted>
          <source src={video} type="video/mp4"/>
       </video>
       <h1>
         Inicie sua jornada!
       </h1>
       <p>
       Todos nós fazemos escolhas na vida,<br />
      mas no final nossas escolhas nos fazem.
       </p>
       
       <h2>
         Crie seu Héroi
       </h2>
      <fieldset>
        <legend>Informações do herói</legend>
        <label>Nome: <input></input></label><br/>
        <label>Classe: <input></input></label><br/>
        <label>Level: <input></input></label><br/>
        <label>Arma: <input></input></label><br/>
        <button  onClick={""}>INICIAR</button>
      </fieldset>


      <footer>
        Criado por Filipe Oliveira: Contato filipeoliver225@gmail.com
    </footer>

        </header>

        
      </div>
    );
  }
}
