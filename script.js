let you = document.getElementById('you');
let com = document.getElementById('com');
let win = document.getElementById('win');
let loss = document.getElementById('loss');
let tie = document.getElementById('tie');
let game = document.getElementById('game')

function makeMove(e) {
    you.src = e.src;
    let n = Math.round(Math.random() * 100) % 3;
    let m;
    switch (n) {
        case 0: com.src = "svg/hand-rock-svgrepo-com.svg";
            break;

        case 1: com.src = "svg/hand-paper-svgrepo-com.svg";
            break;

        case 2: com.src = "svg/two-fingers-svgrepo-com.svg";
    }
    console.log(e.id);
    switch (e.id) {
        case 'rock': m = 0;
            break;

        case 'paper': m = 1;
            break;

        case 'scissor': m = 2;
    }
    if (m == n) {
        tie.innerHTML = (tie.innerHTML - '0') + 1;
        game.innerHTML = "Tie...!";
    }
    else if (m - n == 1 || m - n == -2) {
        win.innerHTML = (win.innerHTML - '0') + 1;
        game.innerHTML = "You won...!";
    }
    else if (m - n == -1 || m - n == 2) {
        loss.innerHTML = (loss.innerHTML - '0') + 1;
        game.innerHTML = "you loss...!";
    }
}

function resetButton() {
    tie.innerHTML = 0;
    win.innerHTML = 0;
    loss.innerHTML = 0;
    game.innerHTML = "";
    you.src = "svg/profile-round-1342-svgrepo-com.svg";
    com.src = "svg/computer-svgrepo-com.svg";
}
