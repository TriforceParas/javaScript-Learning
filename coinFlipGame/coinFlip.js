let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losts: 0
};

function winCheck(userInput, object) {
  let checker = Math.random();
  checker = (checker >= 0 && checker < 1 / 2) ? 'Heads' : 'Tails';
  (checker === userInput) ? object.wins += 1 : object.losts += 1;
};

function alertScore() {
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.result').innerHTML = `Wins: ${score.wins} Losts: ${score.losts}`;
}
function resetScore() {
  score = {
    wins: 0,
    losts: 0
  };
  localStorage.removeItem('score');
}
