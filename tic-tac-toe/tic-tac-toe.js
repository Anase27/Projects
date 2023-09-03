let box = document.querySelectorAll(".box");
let dialog = document.querySelector('dialog');
let winner = document.querySelector("#winnerName");
let draw = document.querySelector(".dialog-container p");
let closeButton = document.querySelector('.dialog-container button');
let size = 3;
let no = 1;
let turn = true;
// box.forEach(e => {
//     e.addEventListener('click', output);
// })

// function output(){
//     // console.log(this.childNodes[1].textContent);
//     console.log(this.children[0].textContent);
// }

closeButton.addEventListener('click', () => {
    dialog.close();
});

let Gameboard = {
    game : [[1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],[1,4,7],[1,5,9],[3,5,7]]
};
let player = (name) => {
    const _arr  = [];
    const pushTurn = (e) => _arr.push(e);
    if (name == '' || name == undefined) {
        no++;
        return {name: `Player${no - 1}` ,pushTurn,_arr};
    }
    return {name,pushTurn,_arr};    
};

const player1 = player();
const player2 = player();

box.forEach(e => {
    e.addEventListener('click', playerTurn);
});

function playerTurn(){
    if (this.classList.contains('disabled')) {
        return;
    }
    // this.classList.add('disabled');
    disableBox.call(this);

    if (turn) {
        player1.pushTurn(+this.dataset.index + 1);
        console.log(+this.dataset.index);
        this.children[0].textContent = 'X';
        // console.log(player1._arr.length);
        if (player1._arr.length > 2) {
            checkForWin.call(player1);
        }
        // this.classList.add('disabled');
        
        turn = false;
        
    }
    else{
        player2.pushTurn(+this.dataset.index + 1);
        console.log(+this.dataset.index);
        this.children[0].textContent = 'O';
        // console.log(player2._arr.length);
        // this.classList.add('disabled');
        if (player2._arr.length > 2) {
            checkForWin.call(player2);
        }
        turn = true;
    }

}

function checkForWin() {

    if (player1._arr.length + player2._arr.length == 9) {
        console.log('Match is a draw');
        draw.textContent = 'Match is a draw';
        dialog.showModal();
        return;
    }
    for (let i = 0; i < Gameboard.game.length; i++) {
        let patternMatch=0;
        for (let j = 0; j < size; j++) {
            if (this._arr.includes(Gameboard.game[i][j])) {
                patternMatch++;
            }            
        }
        if (patternMatch == size) {
            console.log(`${this.name}`);
            winner.textContent = `${this.name == 'Player1' ? 'X' : 'O'}`;
            dialog.showModal();
            // box.forEach(e => {
            //     e.classList.add('disabled');
            // })
            disableBox.call(box);
            return;
        }
    }
}

function disableBox(){
    if(this == box)
    {
        this.forEach(e => {
            e.classList.add('disabled');
        })
        return;
    }
    this.classList.add('disabled');
}