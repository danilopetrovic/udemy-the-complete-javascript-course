function correctIncorrectAnswer(color) {
    var correctAnswer = setInterval(function () {
        document.body.style.backgroundColor = color;
        setTimeout(function () {
            document.body.style.backgroundColor = '#999';
        }, 200);
    }, 300);

    setTimeout(function () {
        clearInterval(correctAnswer)
    }, 600);
}

function correctAnswer() {
    correctIncorrectAnswer('green');
}

function incorrectAnswer() {
    correctIncorrectAnswer('red');
}

function randomNumber() {
    return Math.ceil(Math.random() * 10);
}

var a = randomNumber();
var b = randomNumber();
var pitanje = document.getElementById('pitanje');
var odgovor = document.getElementById('odgovor');
var score = 0;
var scoreCounter = document.getElementById('scoreCounter');

function question(a, b) {
    pitanje.innerText = a + ' + ' + b + ' = ?';
}

question(a, b);

odgovor.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // console.log('stisnut enter', parseInt(odgovor.value));
        if (a + b === parseInt(odgovor.value)) {
            // console.log('tacno');
            score++;
            scoreCounter.innerText = score;
            odgovor.value = '';
            correctAnswer();
        } else {
            // console.log('nije tacno');
            score--;
            scoreCounter.innerText = score;
            odgovor.value = '';
            incorrectAnswer();
        }
    }
});