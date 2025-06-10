/*
 * Rock Paper Scissors Game
 *
 * This script implements a simple Rock-Paper-Scissors game where the player
 * competes against the computer. It keeps track of wins, losses, and ties.
 */

// Game score tracking object
const scoreResult = {
	wins: 0, // Count of player wins
	losses: 0, // Count of player losses
	ties: 0, // Count of ties/draws
};

/**
 * Generates the computer's move randomly
 * @returns {string} - The computer's move ('rock', 'paper', or 'scissors')
 */
const computerMove = () => {
	// Generate random number between 1-3
	const randomMoveGenerator = Math.floor(Math.random() * 3) + 1;
	let randomComputerMove = "";

	// Convert random number to move
	if (randomMoveGenerator === 1) {
		randomComputerMove = "rock";
	} else if (randomMoveGenerator === 2) {
		randomComputerMove = "paper";
	} else {
		randomComputerMove = "scissors";
	}

	return randomComputerMove;
};

/**
 * Plays one round of Rock-Paper-Scissors
 * @param {string} playerMove - The player's move ('rock', 'paper', or 'scissors')
 */
const playGame = (playerMove) => {
	// Get computer's move
	const computerSelection = computerMove();
	let result = ""; // Will store the game outcome

	// Determine game outcome based on player and computer moves
	if (playerMove === "rock") {
		if (computerSelection === "rock") {
			result = "Draw!";
		} else if (computerSelection === "paper") {
			result = "Player lose!";
		} else {
			result = "Player win!";
		}
	} else if (playerMove === "paper") {
		if (computerSelection === "rock") {
			result = "Player win!";
		} else if (computerSelection === "paper") {
			result = "Draw!";
		} else {
			result = "Player lose!";
		}
	} else if (playerMove === "scissors") {
		if (computerSelection === "rock") {
			result = "Player lose!";
		} else if (computerSelection === "paper") {
			result = "Player win!";
		} else {
			result = "Draw!";
		}
	}

	// Update score based on result
	if (result === "Player win!") {
		scoreResult.wins += 1;
	} else if (result === "Player lose!") {
		scoreResult.losses += 1;
	} else {
		scoreResult.ties += 1;
	}

	// Show result to player
	alert(`Player chose ${playerMove}, computer chose ${computerSelection}. ${result}`);

	// Update score display
	document.querySelector(".result-text").textContent = `Wins: ${scoreResult.wins}, Losses: ${scoreResult.losses}, Ties: ${scoreResult.ties}`;
};

// ===== EVENT LISTENERS ===== //

// Rock button click handler
document.querySelector(".btn-rock").addEventListener("click", () => {
	playGame("rock"); // Play game with player move 'rock'
});

// Paper button click handler
document.querySelector(".btn-paper").addEventListener("click", () => {
	playGame("paper"); // Play game with player move 'paper'
});

// Scissors button click handler
document.querySelector(".btn-scissors").addEventListener("click", () => {
	playGame("scissors"); // Play game with player move 'scissors'
});

// Reset score button click handler
document.querySelector(".btn-reset-score").addEventListener("click", () => {
	// Reset all scores to 0
	scoreResult.wins = 0;
	scoreResult.losses = 0;
	scoreResult.ties = 0;

	// Update score display to show zeros
	document.querySelector(".result-text").textContent = "Wins: 0, Losses: 0, Ties: 0";
});
