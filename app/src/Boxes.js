import React from 'react';
import Boxcreator from './Boxcreator.js';

var Boxes = function(props){
return (<div className= "board"> 
    { props.board.map((value, index) => (<Boxcreator value={value} index={index}/>)) }
</div>)
}

export default Boxes;