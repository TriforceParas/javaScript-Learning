let finalResult = JSON.parse(localStorage.getItem('store-scores')) || {
  win: 0,
  loss: 0,
  tie: 0
};

function showResult() {
  document.querySelector('.results').innerHTML = `Wins: ${finalResult.win} Loss: ${finalResult.loss} Tie: ${finalResult.tie}`;
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
})

document.addEventListener('DOMContentLoaded', () => {
  const rockButton = document.querySelector('.rock-button');
  rockButton.addEventListener('click', () => {
    playerMove = 'rock';
    decisionMaker();
  })
});
document.addEventListener('DOMContentLoaded', () => {
  const paperButton = document.querySelector('.paper-button');
  paperButton.addEventListener('click', () => {
    playerMove = 'paper';
    decisionMaker();
  })
});
document.addEventListener('DOMContentLoaded', () => {
  const scissorsButton = document.querySelector('.scissors-button');
  scissorsButton.addEventListener('click', () => {
    playerMove = 'scissors';
    decisionMaker();
  })
});

document.addEventListener('DOMContentLoaded', () => {
  const resetButton = document.querySelector('.reset-scores');
  resetButton.addEventListener('click', () => {
    localStorage.removeItem('store-scores');
    finalResult = {
      win: 0,
      loss: 0,
      tie: 0
    };
    showResult();
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const autoPlayButton = document.querySelector('.auto-play');
  let autoPlayActive = false;
  autoPlayButton.addEventListener('click', () => {
    if (autoPlayActive === false) {
      autoPlayActive = true;
      autoPlayInterval = setInterval(() => {
        playerMove = computerMove();
        decisionMaker();
      },1000)
    } else if (autoPlayActive === true) {
      autoPlayActive = false;
      clearInterval(autoPlayInterval);
    }
  })
})