let homeScoreValue = 0;
let awayScoreValue = 0;

let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

function incrementHome1Point() {
    homeScoreValue += 1;
    homeScore.innerText = homeScoreValue;
}

function incrementHome2Point() {
    homeScoreValue += 2;
    homeScore.innerText = homeScoreValue;
}

function incrementHome3Point() {
    homeScoreValue += 3;
    homeScore.innerText = homeScoreValue;
}

function incrementAway1Point() {
    awayScoreValue += 1;
    awayScore.innerText = awayScoreValue;
}

function incrementAway2Point() {
    awayScoreValue += 2;
    awayScore.innerText = awayScoreValue;
}

function incrementAway3Point() {
    awayScoreValue += 3;
    awayScore.innerText = awayScoreValue;
}
