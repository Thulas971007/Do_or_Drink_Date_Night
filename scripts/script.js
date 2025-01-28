// Card Deck with Points (difficulty levels)
const cards = [
    { text: "Kiss your partner on the neck for 15 seconds.", points: 1 },
    { text: "Whisper something romantic into your partner's ear.", points: 1 },
    { text: "Give your partner a back massage for 2 minutes.", points: 2 },
    { text: "Kiss your partner like it’s your first time.", points: 1 },
    { text: "Give your partner a hickey — no excuses!", points: 3 },
    { text: "Trace your partner’s lips with your finger before kissing them.", points: 2 },
    { text: "Share a fantasy you’ve had about your partner.", points: 3 },
    { text: "Give your partner a 30-second hug without saying a word.", points: 1 },
    { text: "Nibble gently on your partner’s ear.", points: 2 }
  ];
  
  // Player Info
  let players = [];
  let currentPlayerIndex = 0;
  
  // DOM Elements
  const setupScreen = document.querySelector(".setup-screen");
  const gameScreen = document.querySelector(".game-screen");
  const playerSetupForm = document.getElementById("playerSetupForm");
  const currentCard = document.getElementById("currentCard");
  const turnIndicator = document.getElementById("turnIndicator");
  const nextCardBtn = document.getElementById("nextCard");
  const completeDareBtn = document.getElementById("completeDare");
  const backToSetupBtn = document.getElementById("backToSetup");
  const scoreBoard = document.getElementById("scoreBoard");
  
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
  
    players = [
      { name: player1Name, color: player1Color, score: 0 },
      { name: player2Name, color: player2Color, score: 0 }
    ];
  
    updateScoreBoard();
    switchToGameScreen();
    shuffle(cards);
    displayFirstCard(); // Automatically display the first card
  });
  
  // Display the First Card
  function displayFirstCard() {
    if (cards.length > 0) {
      currentCard.innerText = cards[0].text; // Show the first card
    } else {
      currentCard.innerText = "No more cards! Shuffle to restart.";
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
  
  // Show Next Card and Skip Current Dare
  nextCardBtn.addEventListener("click", () => {
    // Display penalty message
    document.body.style.backgroundColor = "red";
    currentCard.innerText = `${players[currentPlayerIndex].name}, take a sip of your drink!`;
  
    setTimeout(() => {
      // Revert background color and show the next card
      document.body.style.backgroundColor = players[currentPlayerIndex].color;
  
      // Move to the next card
      if (cards.length > 0) {
        currentCard.innerText = cards.shift().text;
      } else {
        currentCard.innerText = "No more cards! Shuffle to restart.";
      }
  
      // Switch to the next player
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      updateTurnIndicator();
    }, 5000); // Pause for 2 seconds before switching
  });
  
  // Complete Dare and Move to Next Card
  completeDareBtn.addEventListener("click", () => {
    // Award points for completing the dare
    const completedCard = cards.shift();
    if (completedCard) {
      players[currentPlayerIndex].score += completedCard.points; // Add points based on card difficulty
      updateScoreBoard(); // Update the scoreboard
    }
  
    // Move to the next card
    if (cards.length > 0) {
      currentCard.innerText = cards[0].text; // Show the next card
    } else {
      currentCard.innerText = "No more cards! Shuffle to restart.";
    }
  
    // Switch to the next player
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnIndicator();
  });
  
  // Back to Setup
  backToSetupBtn.addEventListener("click", () => {
    switchToSetupScreen();
  });
  