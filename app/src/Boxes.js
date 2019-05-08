import React from 'react';
import Boxcreator from './Boxcreator.js';

var Boxes = function(props){

return (<div className= "board"> 
    {props.board.map((value, index) => (<Boxcreator  index={index} value={value} next={props.next} board={props.board} selectBox={props.selectBox}/>)) }
</div>)
}

export default Boxes;