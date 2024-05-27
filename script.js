

let you = document.getElementById('you');
let com = document.getElementById('com');
let win = document.getElementById('win');
let loss = document.getElementById('loss');
let tie = document.getElementById('tie');
let game = document.getElementById('game');

let score = JSON.parse(localStorage.getItem('score'));

    if(score===null)
    {
        score=
        {
            win: 0,
            tie: 0,
            loss: 0
        }
        localStorage.setItem('score',JSON.stringify(score));
    }
    
    tie.innerHTML = score.tie;
    win.innerHTML = score.win;
    loss.innerHTML = score.loss;

function makeMove(e) 
{
    you.src = e.src;
    let n = Math.round(Math.random() * 100) % 3;
    let m;
    switch (n) 
    {
        case 0: com.src = "svg/hand-rock-svgrepo-com.svg";
            break;

        case 1: com.src = "svg/hand-paper-svgrepo-com.svg";
            break;

        case 2: com.src = "svg/two-fingers-svgrepo-com.svg";
    }

    switch (e.id) 
    {
        case 'rock': m = 0;
            break;

        case 'paper': m = 1;
            break;

        case 'scissor': m = 2;
    }

    if (m == n) 
        {
        score.tie++;
        tie.innerHTML = score.tie;
        game.innerHTML = "Tie...!";
    }
    else if (m - n == 1 || m - n == -2) 
    {
        score.win++;
        win.innerHTML = score.win;
        game.innerHTML = "You won...!";
    }
    else if (m - n == -1 || m - n == 2) 
    {
        score.loss++;
        loss.innerHTML = score.loss;
        game.innerHTML = "you loss...!";
    }
    localStorage.setItem('score',JSON.stringify(score));
}

function resetButton() 
{
    tie.innerHTML = 0;
    win.innerHTML = 0;
    loss.innerHTML = 0;
    game.innerHTML = "";
    score.tie = 0;
    score.win = 0;
    score.loss = 0;
    you.src = "svg/profile-round-1342-svgrepo-com.svg";
    com.src = "svg/computer-svgrepo-com.svg";
    localStorage.removeItem('score');
}
