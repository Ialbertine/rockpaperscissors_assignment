// 1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error! Invalid choice.');
    }
  };
  
  /*
  4. Test the function by calling it with valid and invalid input,
   and printing the results to the console. 
   You can delete this when you know your function works.
  */
  console.log(getUserChoice('Paper')); // should print 'paper'
  console.log(getUserChoice('fork'));  // should print 'Error!' and `undefined`
  
  // 5. Now we need to have the computer make a choice.
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  /* 6. Test the function by calling it multiple times and printing the results to the console. 
  You can delete this when you know your function works.
  */
  console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'

//   7. Now it’s time to determine a winner.

  const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === 'bomb') {
        return 'You won! (Cheat code activated)';
      }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    // 8, 9, and 10. If the game is not a tie, you’ll need to determine a winner.
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
    } else if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
    } else if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
    }
  };
   // 11. Don’t forget to test your function!  
  console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  console.log(determineWinner('paper', 'paper'));   // prints something like 'The game is a tie!'
  console.log(determineWinner('paper', 'rock'));    // prints something like 'You won!'
  
  //12-13 questions
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  // The cheat code is automatically applied in getUserChoice() and determineWinner()
  