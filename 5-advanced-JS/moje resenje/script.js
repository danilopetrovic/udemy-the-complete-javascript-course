function correctIncorrectAnswer(color) {
    var correctAnswer = setInterval(function () {
        document.body.style.backgroundColor = color;
        setTimeout(function () {
            document.body.style.backgroundColor = '#999';
        }, 500);
    }, 1000);

    setTimeout(function () {
        clearInterval(correctAnswer)
    }, 4000);
}

function correctAnswer() {
    correctIncorrectAnswer('green');
}
function incorrectAnswer() {
    correctIncorrectAnswer('red');
}