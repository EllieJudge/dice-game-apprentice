const rollButton = document.getElementById("rollButton");
let score = parseInt(document.getElementById("score").textContent);
let startAgain = document.getElementById("start-again");
console.log(score)
let number;


rollButton.addEventListener("click", () => {
    function roll(){
        number = Math.ceil((Math.random() * 6))
        document.getElementById("image").src = `img/dice${number}.png`
        console.log(`rolled = ${number}`) 
    
            if (score >= 20) { 
                console.log("Winner!")
                document.getElementById("start-again").innerHTML = "Play again?"
                document.getElementById("player1").innerHTML = "Winner!"
            }
            else if  (number == 1) {
                console.log("Loser") 
                document.getElementById("start-again").innerHTML = "Start again?"
                document.getElementById("player1").innerHTML = "Loser!"
            } 
            else {
                calcScore() 
            }
    }
    roll()

    function calcScore() {
        let showScore = score += number; 
            document.getElementById("score").innerHTML = showScore;
            console.log(`score = ${score}`);
    }

});


startAgain.addEventListener("click", () => {
    location.reload()
});