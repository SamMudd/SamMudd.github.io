let score = Number(localStorage.getItem("score") || 0);

function scoretoiq(s) {
    return 0.0536131 * Math.pow(s, 3) - 0.195804 * Math.pow(s, 2) + 4.12821 * s + 66.28671;
    // The score to iq calculation is based off a cubic regression from a table I made in desmos; the equation is: f(x) = 0.0536131x^3 - 0.195804x^2 + 4.12821x + 66.28671
}

function right() {
    score++;
    localStorage.setItem("score", score);
}

function wrong() {
    localStorage.setItem("score", score);
}