import React from 'react';
import './App.css';
import Boxes from './Boxes.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      board : Array(9).fill(0),
      next : 1,
    }
  }

  selectBox(index){
    if(this.board[index] === 0 ){
      if(this.state.next === 1){
        
      } else {

      }
    }
    
  }
  
  render () {
      return (
      <div className="container"> 
        <h1 id="header">Tic Tac Toe</h1>
        <Boxes board={this.state.board}/>
      </div>
    )
  }; 
};



export default App;
