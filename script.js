console.log('Welcome to Rock Paper Scissor Game');


let moves = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissor' 
}
let Human = 0; 
let AI = 0; 
let Draw = 0;


function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.34) return 'Rock';
    else if (randomNum >= 0.34 && randomNum < 0.67) return 'Paper';
    else return 'Scissor';
}

function getUserChoice() {
    const userchoice = parseInt(prompt('Enter your choice (1 for Rock, 2 for Paper, 3 for Scissor): '));
    
    if (!(userchoice in moves)) {
        console.log('Invalid Input');
        return null; 
    }
    
    return moves[userchoice];
}

function determineWinner(user_move, computer_move) {
    if (user_move == computer_move) {
        return 'Match Draw';
    }
    if (computer_move == 'Rock') {
        return (user_move == 'Paper') ? 'You Win' : 'AI Wins';
    }
    else if (computer_move == 'Paper') {
        return (user_move == 'Scissor') ? 'You Win' : 'AI Wins';
    }
    else { 
        return (user_move == 'Rock') ? 'You Win' : 'AI Wins';
    }
}

function updateScores(result) {
    if (result == 'You Win') {
        Human += 1;
    }
    else if (result == 'AI Wins') {
        AI += 1;
    }
    else if (result == 'Match Draw') { 
        Draw += 1;
    }
    
    console.log('--- Current Score ---');
    console.log('Human: ' + Human);
    console.log('AI: ' + AI);
    console.log('Draws: ' + Draw);
}


console.log('Available Moves:');
for (const key in moves) {
    const element = moves[key];
    console.log(key + ': ' + element);
}

const k = parseInt(prompt('Enter number of rounds to play: '));


for (let i = 0; i < k; i++) {
    console.log(`\n--- Round ${i + 1} ---`);
    
    const user_move = getUserChoice();
    
    if (user_move === null) {
        console.log("Skipping this round due to invalid input.");
        continue; 
    }
    
    const computer_move = getComputerChoice();
    
    console.log('Your choice is: ' + user_move);
    console.log('AI choice is: ' + computer_move);
    
    let result = determineWinner(user_move, computer_move);
    console.log(result);
    
    updateScores(result);
}

console.log('\n--- GAME OVER ---');
console.log('Final Score:');
console.log(`Human: ${Human} | AI: ${AI} | Draws: ${Draw}`);

if (Human > AI) {
    console.log('Congratulations, You are the winner!');
} else if (AI > Human) {
    console.log('The AI wins! Better luck next time.');
} else {
    console.log('It\'s a tie game!');
}