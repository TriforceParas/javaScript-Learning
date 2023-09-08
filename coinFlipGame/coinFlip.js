let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losts: 0
};

function winCheck(userInput, object) {
    let checker = Math.random();
    checker = (checker >= 0 && checker < 1 / 2) ? 'Heads' : 'Tails';
    console.log(checker);
    (checker === userInput) ? object.wins += 1 : object.losts += 1;
    console.log(object);
};

function alertScore() {
    alert(`Wins: ${score.wins} Losts: ${score.losts}`);
    localStorage.setItem('score', JSON.stringify(score));
}