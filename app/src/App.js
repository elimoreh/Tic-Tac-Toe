import React from 'react';
import './App.css';
import Boxes from './Boxes.js';
import GameChecker from './GameChecker.js';
 

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      board : Array(9).fill(0),
      next : 1,
    }
  }

  selectBox(newBoard, newNext){
      this.setState({
         next : newNext, 
         board : newBoard
      });
  };

  reset(){
    this.setState({
      board : Array(9).fill(0),
      next : 1,
    });
  };
  
  render () {
      return (
      <div>
        <div className="container"> 
          <h1 id="header">Tic Tac Toe</h1>
          <Boxes board={this.state.board} next={this.state.next} selectBox={this.selectBox.bind(this)}/>
        </div>
        <div className="gamechecker"> 
          <GameChecker board={this.state.board} reset ={this.reset.bind(this)}/>
        </div>
      </div> 
      
    )
  }; 
};



export default App;


{/* <div className="gamechecker">
<GameChecker board={this.state.board} reset={this.reset.bind(this)}/>
</div> */}