import React from 'react';
import "./Weapon.css";


export default class Weapon extends React.Component{

  state={
    nome:''
  }

  clicou=() =>{
    alert("Sua arma se chama "+this.state.nome)
  }
    render(){
        return ( 
          <div className="Weapon">
            <header className="Weapon-header">
            <h1>Crie sua arma!</h1>
            <fieldset>
            <label> Nome:<input onChange={e => this.setState({nome: e.target.value})} ></input></label>
            <button  onClick={this.clicou}>INICIAR</button>
            </fieldset>
            </header>  
          </div>
    );
    }
}