var last = 0;
var score = 0;
setInterval(myInterval, 600);

// Injecting random image by random Id
function myInterval() {
  // debugger;
    var image = document.createElement("img");
    image.setAttribute("src", "rat.png");
    image.setAttribute("onclick", "clicked();");
    var arr = ['d1','d2','d3','d4','d5','d6','d7','d8','d9'];

    var random = Math.floor(Math.random() * 9);
    document.getElementById(arr[last]).innerHTML = '';

    document.getElementById(arr[random]).appendChild(image);
    last=random;
}

// To count score on clicking image
function clicked(){
    score += 10;
    document.getElementById('score').innerHTML = score;
    document.getElementById('showScore').innerHTML = 'Your score is '+ score;
}

// For how much time game will run.. count down
var timeleft = 60;
var downloadTimer = setInterval(function(){
  // debugger;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
    document.getElementById("result").style.display = "block";
    document.getElementById("game").style.display = "none";
    getCookie(score);
    setCookie(score);
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
    document.getElementById('highScore').innerHTML = document.cookie;
  }
  timeleft -= 1;
}, 1000);

// To set href in button to redirect Index page
function menu() {
    location.replace("index.html");
}

// To get high score from the cookies
function getCookie(score){
  
  var highScore = document.cookie.split("=")[1];
  if(highScore==undefined)
  {
    highScore=0;
  }
  if(score > highScore){
    console.log("you set a new high score");
    document.getElementById('resultHScore').innerHTML = 'Congratulation You made High Score ' +score;
  }
}

// If high score made it will save new data to cookie
function setCookie(score) {
  // console.log('heyy');
  var highScore = document.cookie.split("=")[1];
  if(highScore==undefined)
  {
    highScore=0;
  }
  if(score > highScore){
  document.cookie= 'highScore=' +score;
   }
    console.log(document.cookie);
    document.getElementById('highScore').innerHTML = document.cookie;
}
