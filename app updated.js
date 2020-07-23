var board= [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
console.log(board)
const player1_Button = document.getElementById('player-1');
console.log(player1_Button);
const player2_Button = document.getElementById('player-2');
console.log(player2_Button);

class player{
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }
    function rolllDice() {
        let pos =Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    function updatePosition(pos) {
        this.position+=pos;
        console.log(this.position);
        this.updateMoney();
    }
    function updateMoney() {
        if (this.position < board.length)
        this.money-=board[this.position];
        else {
            this.position %=15;
            this.money-=board[this.position];
        }
        console.log(player1);
        console.log(player2);
    }
}
var player1 =new player("sai",0,1000);
var player2 =new player("kumar",0,1000);
player1_Button.addEventListener('click', function(){
    player1_rollDice();
}, false);
player2_Button.addEventListener('click', function(){
    player2_rollDice();
}, false);