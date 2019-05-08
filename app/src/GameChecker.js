import React from 'react';

var GameChecker = function (props) {
    let b = props.board

    let sums = [];

    for (var i = 0; i < b.length; i++) {
        if (i % 3 === 0) {
            sums.push(b[i] + b[i + 1] + b[i + 2])
        }

        if (i < 3) {
            sums.push(b[i] + b[i + 3] + b[i + 6])
        }

        if (i === 4) {
            sums.push(b[0] + b[4] + b[8])
        }

        if (i === 4) {
            sums.push(b[2] + b[4] + b[6])
        }
    }

    var result = sums.filter(el => (el === 30 || el === 3 ));
   
    var catsgame = b.filter(el => el !== 0)
    if(result[0] === 3){ 
        setTimeout(() => props.reset(),3000);
        return(<div>The Winner is X!</div>);
    }
    if(result[0] === 30){
        setTimeout(() => props.reset(),3000);
        return(<div>The Winner is O!</div>)
    }
    if(catsgame.length === 9){
        setTimeout(() => props.reset(),3000);
        return (<div>Its a Catsgame!</div>)
    }
    return (<div></div>);
    

};


export default GameChecker;