export default function ship(length){
    return {
        length,
        hit_No: 0,
        sunk: "false",
        hit: ()=>{
            if(hit_No<length)
                hit_No++;
        },
        isSunk: ()=>{
            if(length == hit_No) sunk = true;
        }

    }
}

