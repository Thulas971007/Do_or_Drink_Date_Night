const cards = [
  { text: "Kiss your partner on the neck for 15 seconds.", points: 1, category: "romantic" },
  { text: "Whisper something romantic into your partner's ear.", points: 1, category: "romantic" },
  { text: "Do a silly dance for 1 minute.", points: 2, category: "funny" },
  { text: "Eat a spoonful of hot sauce.", points: 3, category: "daring" },
  { text: "Give your partner a back massage for 2 minutes.", points: 2, category: "romantic" },
  { text: "Kiss your partner like it’s your first time.", points: 1, category: "romantic" },
  { text: "Give your partner a hickey — no excuses!", points: 3, category: "daring" },
  { text: "Trace your partner’s lips with your finger before kissing them.", points: 2, category: "romantic" },
  { text: "Share a fantasy you’ve had about your partner.", points: 3, category: "romantic" },
  { text: "Give your partner a 30-second hug without saying a word.", points: 1, category: "romantic" },
  { text: "Nibble gently on your partner’s ear.", points: 2, category: "romantic" },
  { text: "Hold hands and describe your first impression of each other.", points: 1, category: "romantic" },
  { text: "Gaze into each other's eyes without laughing for 30 seconds.", points: 2, category: "romantic" },
  { text: "Massage your partner’s feet for 2 minutes.", points: 3, category: "romantic" },
  { text: "Write a flirty message on your partner’s back with your finger—they must guess it.", points: 2, category: "romantic" },
  { text: "Make up a 10-second rap about your partner.", points: 3, category: "funny" },
  { text: "Imitate your partner for one minute.", points: 2, category: "funny" },
  { text: "Do 10 jumping jacks while maintaining eye contact with your partner.", points: 2, category: "funny" },
  { text: "Try to make your partner laugh without touching them.", points: 2, category: "funny" },
  { text: "Tell a joke—if your partner doesn’t laugh, take a sip of your drink.", points: 2, category: "funny" },
  { text: "Sing a song with the word ‘love’ in it.", points: 2, category: "funny" },
  { text: "Act out a romantic scene from a movie.", points: 3, category: "funny" },
  { text: "Speak in an exaggerated accent for the next two rounds.", points: 2, category: "funny" },
  { text: "Try to say ‘I love you’ with a mouthful of water.", points: 2, category: "funny" },
  { text: "Give your partner a sensual lap dance for 30 seconds.", points: 5, category: "daring" },
  { text: "Whisper your favorite physical feature of your partner in a seductive tone.", points: 3, category: "daring" },
  { text: "Let your partner blindfold you and kiss you anywhere they want.", points: 4, category: "daring" },
  { text: "Describe in detail your partner’s most attractive trait.", points: 3, category: "daring" },
  { text: "Let your partner pick a dare for you.", points: 4, category: "daring" },
  { text: "Balance something on your head for 30 seconds. Fail? Take a sip.", points: 3, category: "funny" },
  { text: "Guess your partner’s favorite song—if you’re wrong, take a sip.", points: 3, category: "funny" },
  { text: "Say ‘I love you’ in 3 different languages. Fail? Take a sip.", points: 2, category: "funny" },
  { text: "Take a selfie with your partner while making the ugliest face possible.", points: 2, category: "funny" },
  { text: "Try to touch your nose with your tongue while your partner watches.", points: 1, category: "funny" },
  { text: "Whisper a dirty secret in your partner’s ear. Refuse? Take a sip.", points: 3, category: "daring" },
  { text: "Reenact your first kiss together.", points: 4, category: "romantic" },
  { text: "Describe your ideal romantic getaway with your partner.", points: 2, category: "romantic" },
  { text: "Write a one-sentence love poem for your partner.", points: 2, category: "romantic" },
  { text: "Swap an item of clothing with your partner for the next 3 rounds.", points: 4, category: "daring" },
  { text: "Let your partner send a random emoji to someone from your phone.", points: 5, category: "daring" },
  { text: "Describe your partner using only movie titles.", points: 3, category: "funny" },
  { text: "Hold your breath while kissing your partner.", points: 3, category: "romantic" },
  { text: "Tell your partner what first attracted you to them.", points: 2, category: "romantic" },
  { text: "Describe what you would name a pet together.", points: 2, category: "romantic" },
  { text: "Share something about your partner that makes you feel lucky.", points: 3, category: "romantic" },
  { text: "Let your partner kiss you wherever they want.", points: 4, category: "daring" },
  { text: "Make a fish face for 30 seconds while staring at your partner.", points: 1, category: "funny" },
  { text: "Trace a heart on your partner’s skin with your tongue.", points: 4, category: "daring" },
  { text: "Lightly bite your partner’s lip while kissing them.", points: 3, category: "romantic" },
  { text: "Run your fingers slowly through your partner’s hair for one minute.", points: 2, category: "romantic" },
  { text: "Drink if you're the best kisser.", points: 2, category: "romantic" }
];

// Player Info
let players = [];
let currentPlayerIndex = 0;
let filteredCards = [];

// DOM Elements
const setupScreen = document.querySelector(".setup-screen");
const gameScreen = document.querySelector(".game-screen");
const playerSetupForm = document.getElementById("playerSetupForm");
const currentCard = document.getElementById("currentCard");
const turnIndicator = document.getElementById("turnIndicator");
const nextCardBtn = document.getElementById("nextCard");
const completeDareBtn = document.getElementById("completeDare");
const backToSetupBtn = document.getElementById("backToSetup");
const saveGameBtn = document.getElementById("saveGame");
const loadGameBtn = document.getElementById("loadGame");
const scoreBoard = document.getElementById("scoreBoard");
const leaderboardList = document.getElementById("leaderboardList");

// Shuffle Function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start Game
playerSetupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const player1Name = document.getElementById("player1Name").value.trim() || "Player 1";
  const player1Color = document.getElementById("player1Color").value;
  const player2Name = document.getElementById("player2Name").value.trim() || "Player 2";
  const player2Color = document.getElementById("player2Color").value;
  const category = document.getElementById("category").value;
  const winningScore = parseInt(document.getElementById("winningScore").value, 10);
  const penaltyDrinks = parseInt(document.getElementById("penaltyDrinks").value, 10);

  players = [
    { name: player1Name, color: player1Color, score: 0 },
    { name: player2Name, color: player2Color, score: 0 },
  ];

  filteredCards = category === "all" ? [...cards] : cards.filter((card) => card.category === category);
  shuffle(filteredCards);

  updateScoreBoard();
  switchToGameScreen();
  displayFirstCard();
});

// Display the First Card
function displayFirstCard() {
  if (filteredCards.length > 0) {
    const card = filteredCards[0];
    currentCard.querySelector(".front").innerText = card.text;
    currentCard.classList.remove("romantic", "funny", "daring");
    currentCard.classList.add(card.category);
  } else {
    currentCard.querySelector(".front").innerText = "No more cards! Shuffle to restart.";
    currentCard.classList.remove("romantic", "funny", "daring");
  }
  updateTurnIndicator();
}

// Update Scoreboard
function updateScoreBoard() {
  scoreBoard.innerHTML = `
    <div style="background-color: ${players[0].color}; padding: 10px; border-radius: 5px;">
      ${players[0].name}: ${players[0].score} points
    </div>
    <div style="background-color: ${players[1].color}; padding: 10px; border-radius: 5px;">
      ${players[1].name}: ${players[1].score} points
    </div>
  `;
}

// Switch Screens
function switchToGameScreen() {
  setupScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

function switchToSetupScreen() {
  gameScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}

// Update Turn Indicator
function updateTurnIndicator() {
  document.body.style.backgroundColor = players[currentPlayerIndex].color;
  turnIndicator.innerText = `${players[currentPlayerIndex].name}'s turn!`;
}

// Flip Card Animation
function flipCard() {
  currentCard.classList.toggle("flipped");
}

// Next Card Function
function nextCard() {
  flipCard(); // Flip the card
  setTimeout(() => {
    if (filteredCards.length > 0) {
      const card = filteredCards.shift();
      currentCard.querySelector(".front").innerText = card.text;
      currentCard.classList.remove("romantic", "funny", "daring");
      currentCard.classList.add(card.category);
    } else {
      currentCard.querySelector(".front").innerText = "No more cards! Shuffle to restart.";
      currentCard.classList.remove("romantic", "funny", "daring");
    }
    flipCard(); // Flip back to front
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnIndicator();
  }, 600); // Match the duration of the flip animation
}

// Complete Dare Function
completeDareBtn.addEventListener("click", () => {
  if (filteredCards.length > 0) {
    const completedCard = filteredCards.shift();
    players[currentPlayerIndex].score += completedCard.points;
    updateScoreBoard();
    checkForWinner();
  }
  nextCard();
});

// Check for Winner
function checkForWinner() {
  const winningScore = parseInt(document.getElementById("winningScore").value, 10);
  const winner = players.find((player) => player.score >= winningScore);
  if (winner) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    alert(`${winner.name} wins!`);
    endGame();
  }
}

// End Game Function
function endGame() {
  updateLeaderboard();
  switchToSetupScreen();
}

// Leaderboard Functions
function updateLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  players.forEach((player) => {
    leaderboard.push({ name: player.name, score: player.score });
  });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  leaderboardList.innerHTML = leaderboard
    .map((player) => `<li>${player.name}: ${player.score} points</li>`)
    .join("");
}

// Save and Load Game
saveGameBtn.addEventListener("click", () => {
  const gameState = {
    players: players,
    cards: filteredCards,
    currentPlayerIndex: currentPlayerIndex,
  };
  localStorage.setItem("gameState", JSON.stringify(gameState));
  alert("Game saved!");
});

loadGameBtn.addEventListener("click", () => {
  const savedState = localStorage.getItem("gameState");
  if (savedState) {
    const gameState = JSON.parse(savedState);
    players = gameState.players;
    filteredCards = gameState.cards;
    currentPlayerIndex = gameState.currentPlayerIndex;
    updateScoreBoard();
    updateTurnIndicator();
    currentCard.querySelector(".front").innerText = filteredCards.length > 0 ? filteredCards[0].text : "No more cards! Shuffle to restart.";
    alert("Game loaded!");
  } else {
    alert("No saved game found.");
  }
});

// Back to Setup
backToSetupBtn.addEventListener("click", () => {
  switchToSetupScreen();
});

// Event Listener for "Next Card" Button
nextCardBtn.addEventListener("click", () => {
  nextCard();
});
