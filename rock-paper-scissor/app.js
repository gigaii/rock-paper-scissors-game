const game = () => {
    let pScore = 0;
    let cScore = 0;


// Start the game
    const startGame = () => {
        const startBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        startBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationed', function(){
                this.style.animation = "";
            });
        })
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
            //computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
        
            setTimeout(() => {
                //here is where we call compare hands
                compareHands(this.textContent, computerChoice);
            
                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);
            


            //animation
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
     };

     const updateScore = () => {
         const playerScore = document.querySelector('.player-score p');
         const computerScore = document.querySelector('.computer-score p');

         playerScore.textContent = pScore;
         computerScore.textContent = cScore;
     };

     const compareHands = (playerChoice, computerChoice) => {
            //update Text
            const winner = document.querySelector('.winner');
            //checking for a tie
            if(playerChoice === computerChoice){
                winner.textContent = 'It is Tie';
                return;
            }
            //checking for a rock
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Player Wins'
                    pScore++;
                    updateScore();
                    return;
                }else {
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            //checking for a paper
            if(playerChoice === 'paper'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Computer Wins'
                    cScore++;
                    updateScore();
                    return;
                }else {
                    winner.textContent = 'Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
            //checking for a scissors
            if(playerChoice === 'scissors'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Computer Wins'
                    cScore++;
                    updateScore();
                    return;
                }else {
                    winner.textContent = 'Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
     }

    

    //Is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();