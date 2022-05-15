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

function napraviBrojeve(n) {
    var niz = []
    for (let i = 0; i < n; i++) {
        niz.push(randomNumber());
    }
    return niz;
}

var brojevi = napraviBrojeve(2);

// var a = randomNumber();
// var b = randomNumber();
var pitanje = document.getElementById('pitanje');
var odgovor = document.getElementById('odgovor');
var score = 0;
var scoreCounter = document.getElementById('scoreCounter');

function question(a, b) {
    pitanje.innerText = a + ' + ' + b + ' = ?';
}

question(brojevi[0], brojevi[1]);

function resetSvega(odg) {
    if (odg === true) {
        score++;
        correctAnswer();
    }
    if (odg === false) {
        score--;
        incorrectAnswer();
    }
    scoreCounter.innerText = score;
    odgovor.value = '';
    brojevi = napraviBrojeve(2);
    question(brojevi[0], brojevi[1]);
}

odgovor.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // console.log('stisnut enter', parseInt(odgovor.value));
        if (brojevi[0] + brojevi[1] === parseInt(odgovor.value)) {
            // console.log('tacno');
            resetSvega(true);
        } else {
            // console.log('nije tacno');
            resetSvega(false);
        }
    }
});