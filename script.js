const rollButton = document.getElementById("rollButton");


let score = 0;
let number;


rollButton.addEventListener("click", () => {
    function roll(){
   
        number = Math.ceil((Math.random() * 6))
        console.log(`rolled = ${number}`) 
    
            if (number == 1) {
                return console.log("Loser") 
    
            } else if (score >= 20) { 
                return console.log("Winner!")
            }
            else {
                calcScore() 
            }
    }
    roll()

    function calcScore() {
        score += number; 
            console.log(`score = ${score}`) 
    }

});




