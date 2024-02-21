// document.body.textContent = "afhajlkfl";
import ship from "./shipLogic.js";
import gameboard from "./gameboard.js";
const gameFunctions = gameboard();
const shipFunctions = ship();
let ship1;
export default function main(cords,axis,len,shipN){
    let shipName = shipN;
    ship1 = shipFunctions.newShip(len);
    
    
    return gameFunctions.checkCordsForPlacement(cords,axis,len,shipName);
    
}
function getShip(cords,axis,len,shipN){
    ship1 = shipFunctions.newShip(len);
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