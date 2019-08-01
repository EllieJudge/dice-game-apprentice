
let score = 0;
let number;

function roll(){
   
    number = Math.ceil((Math.random() * 6))
    console.log(`rolled = ${number}`) //5

        if (number == 1) {
            return console.log("Loser") //no

        } else if (score >= 20) { //no
            return console.log("Winner!")
        }
        else {
            calcScore() 
        }
}
roll()

function calcScore() {
    score += number; //6
        console.log(`score = ${score}`) //6
        roll()
}

