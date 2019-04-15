let p1Button = document.getElementById('p1');
let p2Button = document.getElementById('p2');
let resetButton = document.getElementById('reset')
let p1Score = 0;
let p2Score = 0;
let p1Display = document.getElementById('p1Display');
let p2Dsiplay = document.getElementById('p2Dsiplay');
let gameOver = false;
let winningScore = 5;





p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore) {
        p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
