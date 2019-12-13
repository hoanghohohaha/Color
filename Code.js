var playbtn = document.getElementsByClassName('Playbtn');
var menubtn= document.getElementsByClassName('Menubtn');
var highbtn=document.getElementsByClassName('Highscorebtn');
var backbtn =document.getElementById('Backbtn');
var ground=document.getElementById('maincontain');
var highsc=document.getElementById('highscorecontain');
var gameoverr=document.getElementById('gameover');
var menu=document.getElementById('gamemenu');
var point= 0;
var highscore=0;


function loading(){
    document.getElementById('loadingcontain').style.display='flex';
    setTimeout(() => {
        document.getElementById('loadingcontain').style.display='none';
    }, 2000);
}
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
        return array;
}

function randomColor(){
    var colors=['red','blue','green','yellow'];
    var intt= Math.floor(Math.random()*3);
    var textcolor = colors[intt];
    document.getElementById('question').innerHTML=`${textcolor}`
    colors= shuffle(colors);
    for(var k=0;k<colors.length;k++){
        document.getElementById(`q${k+1}`).style.background=`${colors[k]}`
    }
    var int = Math.floor(Math.random()*3);
    var color=colors[int];
    document.getElementById('question').style.color=`${color}`;
    console.log(color);
}
function fetchclick(){
    var boxx=document.getElementsByClassName('box');
        for(var t=0;t<boxx.length;t++){
            boxx[t].addEventListener('click',function(e){
                console.log(e.target);
                console.log(e.target.style.background);
                    console.log(document.getElementById('question').style.color);
                if(e.target.style.background===document.getElementById('question').style.color){
                    randomColor();
                    point=point+1;
                    document.getElementById('score').innerText=`Score:${point}`;
                    
                }
                else if(e.target.style.background!==document.getElementById('question').style.color){
                    if(highscore<=point){
                        highscore=point;
                    }
                    document.getElementById('text').innerHTML=`Game over<br><br>Score:${point}`;
                    gameover();
                }
            })
        }
    
}
function Play(){
    loading();
    menu.style.display='none';
     setTimeout(() => {
        highsc.style.display='none';
        ground.style.display='flex';
        gameoverr.style.display='none';
     }, 2000);
     point=0;
        document.getElementById('score').innerText=`Score:${point}`;
        fetchclick();
        randomColor();
        
}

function gameover(){
    gameoverr.style.display='flex';
    ground.style.display='none';
}

function menutoggle(){
    menu.style.display='flex';
    ground.style.display='none';
    gameoverr.style.display='none'
}

for(var i=0;i< playbtn.length;i++){
    playbtn[i].addEventListener('click',function(){
        Play();
    })
}

for(var o=0;o<menubtn.length;o++){
    menubtn[o].addEventListener('click',function(){
    menutoggle();
    })
}

for(var ii =0;ii<highbtn.length;ii++){
    highbtn[ii].addEventListener('click',function(){
        document.getElementById('high').innerHTML=`Highccore:<br><br>${highscore}`;
        menu.style.display='none';
        highsc.style.display='flex';
    })
}

backbtn.addEventListener('click',function(){
    menu.style.display='flex';
    highsc.style.display='none';
})