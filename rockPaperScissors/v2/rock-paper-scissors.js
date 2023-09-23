let finalResult = JSON.parse(localStorage.getItem('store-scores')) || {
  win: 0,
  loss: 0,
  tie: 0
};

function showResult() {
  document.querySelector('.results').innerHTML = `Wins: ${finalResult.win} Loss: ${finalResult.loss} Tie: ${finalResult.tie}`;
}

function showChoiceMade() {
  document.querySelector('.choice-made').innerHTML = `You Chose ${playerMove}, Compuer Chose ${computerMove()}`
}

function decisionMaker(player = playerMove, computer = computerMove()) {
  if (player === computer) {
    finalResult.tie++;
  } else if (player === 'rock' && computer === 'paper') {
    finalResult.loss++;
  } else if (player === 'rock' && computer === 'scissors') {
    finalResult.win++;
  } else if (player === 'paper' && computer === 'rock') {
    finalResult.win++;
  } else if (player === 'paper' && computer === 'scissors') {
    finalResult.loss++;
  } else if (player === 'scissors' && computer === 'rock') {
    finalResult.loss++;
  } else if (player === 'scissors' && computer === 'paper') {
    finalResult.win++;
  }
  showResult();
  localStorage.setItem('store-scores', JSON.stringify(finalResult));
}

let playerMove;
const computerMove = () => {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'paper'
  } else if (randomNumber >= 2 / 3) {
    return 'scissors'
  }
}
document.addEventListener('keypress', (keyInput) => {
  if (keyInput.key === 'r') {
    playerMove = 'rock';
  } else if (keyInput.key === 'p') {
    playerMove = 'paper';
  } else if (keyInput.key === 's') {
    playerMove = 'scissors';
  };
  decisionMaker();
  showChoiceMade();
})

document.addEventListener('DOMContentLoaded', () => {
  const updateStatus = document.querySelector('.choice-made');
  const rockButton = document.querySelector('.rock-button');
  const resetScoreButton = document.querySelector('.reset-scores');
  const confirmMenu = document.querySelector('.confirm-menu')
  const yesButton = document.querySelector('.confirm-yes');
  const noButton = document.querySelector('.confirm-no');
  const autoPlayButton = document.querySelector('.auto-play');
  let autoPlayActive = false;
  rockButton.addEventListener('click', () => {
    playerMove = 'rock';
    decisionMaker();
    showChoiceMade();
  })
  const paperButton = document.querySelector('.paper-button');
  paperButton.addEventListener('click', () => {
    playerMove = 'paper';
    decisionMaker();
    showChoiceMade();
  })
  const scissorsButton = document.querySelector('.scissors-button');
  scissorsButton.addEventListener('click', () => {
    playerMove = 'scissors';
    decisionMaker();
    showChoiceMade();
  })

  // reset button
  resetScoreButton.addEventListener('click', () => {
    confirmMenu.classList.add('active');
  })
  yesButton.addEventListener('click', () => {
    localStorage.removeItem("store-scores");
    finalResult = {
      win: 0,
      loss: 0,
      tie: 0
    }
    updateStatus.innerHTML = 'Score board resetted successfully'
    setTimeout(() => { updateStatus.innerHTML =  'Choose a button to start the Game'},2000)
    showResult();
    confirmMenu.classList.remove('active');
    noButton.addEventListener('click', () => {
      confirmMenu.classList.remove('active');
    })
  })
  // autoplay
  autoPlayButton.addEventListener('click', () => {
    if (autoPlayActive === false) {
      autoPlayButton.innerHTML = 'Auto play: ON';
      autoPlayActive = true;
      autoPlayInterval = setInterval(() => {
        playerMove = computerMove();
        decisionMaker();
        showChoiceMade();
      }, 1000)
    } else if (autoPlayActive === true) {
      autoPlayButton.innerHTML = 'Auto play: OFF';
      updateStatus.innerHTML = 'Auto Play stopped';
      setInterval(() => { updateStatus.innerHTML = 'Choose a button to start the Game'; }, 2000)
      autoPlayActive = false;
      clearInterval(autoPlayInterval);
    }
  })
  decisionMaker();
});
