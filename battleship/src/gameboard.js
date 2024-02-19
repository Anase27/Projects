export default function gameboard(){
    const board = new Map();

    // 1
    const placeShip = (arr,ship) => {
        arr.forEach(element => {
            board.set(`${element[0]}${element[1]}`,ship);
        });
    }

    // 2
    const getShipOnCords = (arr) => {
        // returns undefined if there is no ship in the cords.
        board.get(`${arr[0]}${arr[1]}`);
    }

    // 3
    const checkCordsForPlacement = (cords,axis,len,ship) => {
        let x = cords[0];
        let y = cords[1];
        if(x>9 || y>9) throw new Error();
        
        let shipCords = [];
        if(axis == 'x'){
            if(x+len>9) throw new Error();
            for(let i = 0;i<len;i++){
                if(getShipOnCords([x,y+i]) == undefined){
                    shipCords.push([x,y+i]);
                }
                else{
                    throw new Error();
                }
            }
        }
        else{
            if(y+len>9) throw new Error();
            for(let i = 0;i<len;i++){
                if(getShipOnCords([x+i,y]) == undefined){
                    shipCords.push([x+i,y]);
                }
                else{
                    throw new Error();
                }
            }
        }
        placeShip(shipCords,ship);
        return board.get(`${x}${y}`);

    }

    // 4
    const takeCords = () => {

    }

    // 5
    const fireAt = (cords) => {
        return board.delete(`${cords[0]}${cords[1]}`);
    }
    return{
        board,
        placeShip,
        getShipOnCords,
        checkCordsForPlacement,
        fireAt,

    }
}