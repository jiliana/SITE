// Restores variable values from URL parameters
/* const urlParams = new URLSearchParams(window.location.search);
const wins = urlParams.get("wins");
const loss = urlParams.get("loss");
document.getElementById("totalWins").innerHTML = wins;
document.getElementById("totalLosses").innerHTML = loss;
*/

var totalWins = 0;
var totalLosses = 0;

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


// Initialize Parse
Parse.initialize(
  "qJroUJPIBEo3oynEhxxzqX64g0RO45BvhnPQPYzX",
  "KHVyi3o3hSgiWMfblqISSVjoyTAg1RY21b8kwOqK"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

// Post to leaderboard
async function createParseUser() {
  // Creates a new Parse "User" object, which is created by default in your Parse app

  let user = new Parse.Object("Leaderboard");
  // Set the input values to the new "User" object
  user.set("username", document.getElementById("username").value);

  let w = parseInt(document.getElementById("totalWins").innerHTML);
  user.set("wins", w);

  let l = parseInt(document.getElementById("totalLosses").innerHTML);
  user.set("losses", l);

  var score = w - l;
  user.set("score", score);

  try {
    // Call the save method, which returns the saved object if successful
    user = await user.save();
    if (user !== null) {
      // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `Your score was posted!\n${user.get("username")} has ${user.get(
          "wins"
        )} wins and ${user.get("losses")} losses\nYour score is ${user.get(
          "score"
        )}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
  
  
  window.location.reload();
}


// Load table
async function load() {
  const Leaderboard = Parse.Object.extend("Leaderboard");
  const query = new Parse.Query(Leaderboard);
  query.descending("score"); // Sort by score in descending order
  query.limit(20);
  const results = await query.find();

  var table = document.getElementById("table");

  // For every object, create new row
  for (let i = 0; i < results.length; i++) {
    var row = table.insertRow(i+1);
    const object = results[i];
    var ranking = row.insertCell(0);
    var userCell = row.insertCell(1);
    var winCell = row.insertCell(2);
    var lossCell = row.insertCell(3);
    var scoreCell = row.insertCell(4);
    
    ranking.innerHTML = i+1;
    userCell.innerHTML = object.get("username") || "Anonymous";
    winCell.innerHTML = object.get("wins");
    lossCell.innerHTML = object.get("losses");
    scoreCell.innerHTML = object.get("score");
  }
}

