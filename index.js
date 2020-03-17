const options = ['rock','paper','scissors'];

const playerPlay = () => {
  let selection="";
  while(!options.includes(selection.toLowerCase())){
    selection = prompt("Rock, Paper or Scissors", "rock")
  }
  return selection;
}
const computerPlay = () => {
  return options[Math.floor(Math.random()*options.length)]
}
const whoWon = (player, computer) =>{
  // the ties, we handle right off.
  if(player===computer) return 0;
  switch(player){
    case "rock":
      if(computer=="paper") return -1;
      return 1;
    case "paper":
      if(computer=="scissors") return -1;
      return 1;
    case "scissors":
      if(computer=="rock") return -1;
      return 1;
  }
}

const playRound = () => {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  const wonThisRound = whoWon(playerSelection, computerSelection );

  switch(wonThisRound){
    case 0:
      return {
        message: `It's a tie: ${playerSelection} and ${computerSelection}`,
        player: 0,
        computer: 0
      };
    case 1:
      return {
        message:  `You won! ${playerSelection} beats ${computerSelection}`,
        player: 1,
        computer: 0
      };
    default:
    return {
      message:   `You lose. ${computerSelection} beats ${playerSelection}`,
      player: 0,
      computer: 1
    };
  }
}

const game = () => {
  let scores = {
    player: 0,
    computer: 0
  };
  let result;
  for(let roundCount=0; roundCount<=5; roundCount++){
    result = playRound();
    console.log(JSON.stringify(result))
    scores.player += result.player;
    scores.computer += result.computer;
    console.log(result.message);
    console.log(`Player: ${scores.player}, Computer: ${scores.computer}`)
  }
  result=undefined;

}

game();