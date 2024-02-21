export default function shipLogic(){
    let allShips = {};
    const newShip = (length) => {
        return {
            length,
            hit_No: 0,
            sunk: "false",
            hit: function(){
                if(this.hit_No<this.length)
                    ++this.hit_No;
            },
            isSunk: function(){
                if(this.length == this.hit_No) this.sunk = true;
                return this.sunk;
            }
    
        }
    }
    const addShipToAllShips = (length) => {
        let shipNo = Object.keys(allShips).length;
        allShips[`ship${shipNo+1}`] = newShip(length);
    }

    return{
        allShips,
        newShip,
        addShipToAllShips,

    }
}

// const sh = shipLogic();

// sh.addShipToAllShips(5);
// console.log(sh.allShips);
// sh.allShips["ship1"].hit();
// console.log(sh.allShips);

