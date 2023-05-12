import React, {Component} from 'react';
import './style.css'
class App extends Component{

        constructor(props){
          super(props);
          this.state ={
            numero: 0,
            botao: "VAI"
          
          };
          this.timer= null;
          this.Vai = this.Vai.bind(this);
          this.Limpar = this.Limpar.bind(this);
        }
 
        Vai(){
          let state = this.state;

          if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao ='VAI'
          }else{
            this.timer = setInterval(()=>{
              let state = this.state
              state.numero += 0.1;
              this.setState(state);
            },100)
            state.botao = 'PAUSAR';
          }

          this.setState(state);
        }


        Limpar(){
          if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
          }
          let state = this.state;
          state.numero = 0;
          state.botao = 'VAI';
          this.setState(state);
        }
        
 
 
 
 
 
  render(){
    return(
      <div className='container'>
        <img src={require('./Assets/cronometro.png')} className='image'/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a >
        <div className='areaBtn'>
            <a className='botao' onClick={this.Vai}>{this.state.botao}</a>
            <a className='botao' onClick={this.Limpar}>Limpar</a>
        </div>
      </div>
    );
  } 
}

export default App;