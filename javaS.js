/**
*
* Author: Ohia William
* Student ID: 000791775
* I hereby certify that this my own work and it wasn't copied from any other source
*/


window.addEventListener("load", function(){
		
    let userChoice = "";
    let computerChoice = "";

    let userScore = 0;
    let computerScore = 0;
    
    var result = getResults(); //The result after one round of a game
    let displayResults = document.getElementById("results"); // where results will be displayed

    let displayUserScore = document.getElementById("user_score");
    let displayComputerScore = document.getElementById("comp_score");
    
    let displayPlayerChoice = document.getElementById("user_choice"); //where players choice will be displayed in the html
    let possibleChoices = document.querySelectorAll(".choices");
    
    let displayComputerChoice = document.getElementById("comp_choice"); //where the computer choice will be displayed
    
    let help = document.getElementById("help");

    //Display instructions once help button clicked
    help.addEventListener("click", function showInstructions() {
        
        document.getElementById("helpContainer").innerHTML = "<h3>Instructions</h3> <p> To play you must select either rock, paper, or scissors. You are playing against the computer. Rock kills Scissors. Paper kills Rock. Scissors kills Paper. If you and the computer have the same choice, then deadlock!. Refresh the page to reset the game and clear the scores. Good Luck!</p>";
        
        
    });
    
    
    //Get the user's choice
    function getUserChoice(){
        possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e)=> {
            userChoice = e.target.id;
            console.log("Player selected: " + userChoice);
            
            getComputerChoice();
            console.log("Computer selected: " + computerChoice);
            
            getResults();
            console.log(result);
            
            displayPlayerChoice.innerHTML = userChoice;
            displayComputerChoice.innerHTML = computerChoice;
            displayResults.innerHTML = result;
            displayComputerScore.innerHTML = computerScore;
            displayUserScore.innerHTML = userScore;
        }));
        
    }
    
    
    //Get the Computer's Choice
    function getComputerChoice() {
        let rand = Math.floor(Math.random() * 3);
        if (rand === 0) {
            return computerChoice = "rock";
        } else if (rand === 1) {
            return computerChoice = "paper";
        } else {
            return computerChoice = "scissors";
        }
    }
    
    
    //get Results after comparing user choice to computer's choice
    function getResults(){
        
        if (computerChoice === userChoice){
            return result = "Deadlock!";
        }
        else if (computerChoice === "rock" && userChoice === "paper"){
            userScore = userScore + 1;
            return result = "You win! Paper kills Rock!";
            
        }
        else if (computerChoice === "rock" && userChoice === "scissors"){
            computerScore = computerScore + 1;
            return result = "You lost! Rock kills Scissors!";
            
        }
        else if (computerChoice === "paper" && userChoice === "rock"){
            computerScore = computerScore + 1;
            return result = "You lost! Paper kills Rock!";
            
        }
        else if (computerChoice === "paper" && userChoice === "scissors"){
            userScore = userScore + 1;
            return result = "You win! Scissors kills Paper!";
            
        }
        else if (computerChoice === "scissors" && userChoice === "rock"){
            userScore = userScore + 1;
            return result = "You win! Rock kills Scissors!";
            
        }
        else if (computerChoice === "scissors" && userChoice === "paper"){
            computerScore = computerScore + 1;
            return result = "You lost! Scissors kills Paper!";
            
        }
    }
    
getUserChoice();
    

document.forms.RegiForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.forms.RegiForm.username.value;
    let age = document.forms.RegiForm.age.value;
    let color = document.getElementById("favColor").value;
    
    console.log("Player: "+ username);
    console.log("Age: "+ age);
    console.log("Favorite color: "+ color);
    
    //will display the game after form submitted
    
    document.getElementById("major").style.display = "block"; 
    document.getElementById("major").style.backgroundColor = color; 
    
    document.getElementById("bc").innerHTML = "Rock Paper Scissors Game";
    
    document.getElementById("help").innerHTML = "Help";
    
    document.getElementById("rock").innerHTML = "Rock";
    document.getElementById("paper").innerHTML = "Paper";
    document.getElementById("scissors").innerHTML = "Scissors";
        
    document.getElementById("user_bc").innerHTML = "" + username + "'s choice: ";
    document.getElementById("user_scr").innerHTML = "" + username + "'s score: ";
    
    document.getElementById("comp_bc").innerHTML = "Computer's choice: ";
    document.getElementById("comp_scr").innerHTML = "Computer's score: ";
    document.getElementById("result_bc").innerHTML = "Results: ";
    
    
});

});








