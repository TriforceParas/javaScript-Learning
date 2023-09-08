let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    tie: 0
};


console.log(localStorage.getItem('score'));
console.log(JSON.parse(localStorage.getItem('score')));
let computerChoice = NaN;
let result = NaN;
function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice >= 0 && computerChoice < 1 / 3) {
        return 'Rock';
    } else if (computerChoice >= 1 / 3 && computerChoice < 2 / 3) {
        return 'Paper';
    } else if (computerChoice <= 1) {
        return 'Scissors';
    }
}

function getResult(result1, result2, result3, computerChoice) {
    if (computerChoice === result1) {
        score.tie += 1;
        return 'Tie';
    } else if (computerChoice === result2) {
        score.wins += 1;
        return 'You Win';
    } else if (computerChoice === result3) {
        score.loss += 1;
        return 'Computer Win';
    }
}

function alertResult(yourChoice, computerChoice, result) {
    alert(`You Chose ${yourChoice}. Computer Chose ${computerChoice}. Result ${result}\nWins: ${score.wins} Loss: ${score.loss} Tie: ${score.tie}`);
    localStorage.setItem('score', JSON.stringify(score));

}