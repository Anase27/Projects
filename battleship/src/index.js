// document.body.textContent = "afhajlkfl";
import ship from "./shipLogic.js";
import gameboard from "./gameboard.js";
const gameFunctions = gameboard();
let ship1;
export default function main(cords,axis,len,shipN){
    let shipName = shipN;
    ship1 = ship(len);
    
    
    return gameFunctions.checkCordsForPlacement(cords,axis,len,shipName);
    
}
function getShip(cords,axis,len,shipN){
    ship1 = ship(len);
    return ship1.length;
}

function shoot(cords){
    return gameFunctions.fireAt(cords);
}
function getBoard(){
    return gameFunctions.board;
}
export {getShip,shoot,getBoard};

console.log(gameFunctions.board);