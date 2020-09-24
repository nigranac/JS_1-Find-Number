let guess;
let count = 0;
let correctNumber = Math.floor((Math.random() * 20) + 1);

var input = document.getElementById("inputBox");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("check").click(displayResult);
    }
});


document.getElementById('check').addEventListener('click',displayResult);




function displayResult(){


    count++;
    document.getElementById('guessNumber').innerHTML  = 'This is your ' + count + '.' + ' try.';

    guess = document.getElementById('inputBox').value;

    if (guess == correctNumber){

        alert('You win! You find at ' + count + '.' + ' try');
       
        var play_again = confirm('Do you wanna play again?');

        if (play_again == true){
            count = 0;
            correctNumber = Math.floor((Math.random() * 20) + 1);
            document.getElementById('guessNumber').innerHTML  = '';
            document.getElementById('result').innerHTML  = '';
            document.getElementById('inputBox').value = '';
        }
        else{
            document.getElementById('thanks').innerHTML  = 'Thanks for playing! Hope to see you next time!';
        }
    }

    else if(guess < correctNumber){
        document.getElementById('result').innerHTML  = 'Higher please!'; 
    
    }

    else if(guess > correctNumber){
        document.getElementById('result').innerHTML  = 'Lower please!';  
      
    }

    document.getElementById('inputBox').value = '';
    document.getElementById('inputBox').focus() = '';
    document.getElementById('guessNumber').innerHTML  = '';  

}
