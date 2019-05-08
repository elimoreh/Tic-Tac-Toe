import React from 'react';

var Boxcreator = function(props) {
   let p = props

   function handleClick(e) {
         console.log(props)
         if(p.board[p.index] === 0 ){
            let newBoard = p.board.slice();
            newBoard[p.index] = p.next
            let newNext = (p.next === 1) ? 10 : 1;
            p.selectBox(newBoard, newNext);
      }
   }
   
   let text;
   let className;
   
   if(p.board[p.index] === 0){
      text = ''
      className = "box"
   } else if (p.board[p.index] === 1) {
      text = 'X'
      className = "box unavailable"
   } else {
      text = 'O'
      className = "box unavailable"
   }


   return (<div className={className} onClick={handleClick}>{text}</div>)
}


export default Boxcreator