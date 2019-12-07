var play = document.getElementById('Playbtn');
var menu= document.getElementById('Menubtn');
var high=document.getElementById('Highscorebtn');
var back =document.getElementById('Backbtn');
var ground=document.getElementById('maincontain');
var highsc=document.getElementById('highscorecontain');
var gameover=document.getElementById('gameover');
var point= 0;
var highscore=0;

function loading(){
    document.getElementById('loadingcontain').style.display='flex';
    setTimeout(() => {
        document.getElementById('loadingcontain').style.display='none';
    }, 3000);
}

function play(){
    play.style.display='none';
    menu.style.display='none';
    high.style.display='none';
    back.style.display='none';
    ground.style.display='flex';
    gameover.style.display='none';
    point=0;
}

function gameover(){
    highscore=point;
    
}

