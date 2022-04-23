// Global Constants
// const clueHoldTime = 700; //how long to hold each clue's light/sound
const cluePauseTime = 200; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const jsConfetti = new JSConfetti();


// Global Variables
var clueHoldTime = 700; 
var pattern = [0, 0, 0, 0, 0, 0, 0];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

var totalWins = 0;
var totalLosses = 0;
var nightmode = false;


function toggleClick() {
  if (document.getElementById('toggleMode').checked) {
    document.body.classList.add("nightmode");
    localStorage.setItem("nightmode", true);
  }
  else {
    document.body.classList.remove("nightmode");
    localStorage.setItem("nightmode", false);

  }
}

// Restores variable values from local storage
if (localStorage.getItem("nightmode") === 'true') {
  document.getElementById("toggleMode").checked = true;
  toggleClick();
}
if (localStorage.getItem("totalWins") === null) {
  totalWins = 0;
} else {
  totalWins = parseInt(localStorage.getItem("totalWins"));
}
if (localStorage.getItem("totalLosses") === null) {
  totalLosses = 0;
}
else {
  totalLosses = parseInt(localStorage.getItem("totalLosses"));
}
document.getElementById("totalWins").innerHTML = totalWins;
document.getElementById("totalLosses").innerHTML = totalLosses;



function startGame() {
  // initialize game variables
  clueHoldTime = 800;
  progress = 0;
  gamePlaying = true;
  

  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor((Math.random() * 6) + 1);
  }
  
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame() {
  
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 350.2,
  3: 391,
  4: 441.15,
  5: 460,
  6: 485
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function playAudio(btn) {
  switch(btn) {
    case 1: 
      document.getElementById("catAudio").play();
      break;
    case 2: 
      document.getElementById("dogAudio").play();
      break;
    case 3:
      document.getElementById("cowAudio").play();
      break;
    case 4:
      document.getElementById("birdAudio").play();
      break;
    case 5:
      document.getElementById("frogAudio").play();
      break;
    case 6:
      document.getElementById("fishAudio").play();
      break;
  }
  

}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("btn"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    playAudio(btn);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clueHoldTime -= 50;
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// Response
function loseGame(){
  totalLosses += 1;
  document.getElementById('totalLosses').innerHTML = totalLosses;
  localStorage.setItem("totalLosses",totalLosses);
  stopGame();
  jsConfetti.addConfetti({
    emojis: ['🚩', '😨']
  }).then(() => alert("Game Over. You lost."));
}

function winGame(){
  totalWins += 1;
  document.getElementById('totalWins').innerHTML = totalWins;
  localStorage.setItem("totalWins",totalWins);
  stopGame();
  jsConfetti.addConfetti({
    emojis: ['🥳', '🎉']
  }).then(() => alert("Game Over. You won!"));
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  
  // wrong button is pressed
  if (btn != pattern[guessCounter]) {
    console.log(btn + pattern[guessCounter])
    loseGame();
  }
  // correct button
  else {
    // turn is over
    if (progress == guessCounter) {

      // last turn
      if (progress == pattern.length - 1) {
        winGame();
      }
      else {
        progress++;
        playClueSequence();
      }

    }
    else {
      guessCounter++;
    }
  
  }
  
 
  
}


