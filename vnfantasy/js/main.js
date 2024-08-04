import { loadGame, saveGame } from './storage.js';
import { renderCharacters, updateCharacters } from './characters.js';
import { displayDialog, advanceDialog } from './dialog.js';
import { showLog, hideLog, updateLog } from './log.js';

let gameState = {
    currentScene: 0,
    dialogIndex: 0,
    log: []
};

let gameData = null;

const loadGameData = async (url = 'game_data.json') => {
    try {
        const response = await fetch(url);
        gameData = await response.json();
        resetGame();
        startGame();
    } catch (error) {
        console.error('Error loading game data:', error);
    }
};

const resetGame = () => {
    gameState = {
        currentScene: 0,
        dialogIndex: 0,
        log: []
    };
};

const startGame = () => {
    renderScene();
    setupEventListeners();
};

const renderScene = () => {
    const scene = gameData.scenes[gameState.currentScene];
    document.getElementById('background').style.backgroundImage = `url(${scene.background})`;
    renderCharacters(scene.characters);
    displayDialog(scene.dialog[gameState.dialogIndex], gameState.log);
    updateLog(gameState.log);
};

const setupEventListeners = () => {
    // Keyboard event for Enter key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            advanceStory();
        }
    });

    // Touch event for tapping
    document.getElementById('viewport').addEventListener('touchend', (e) => {
        // Prevent default to stop potential unwanted behaviors
        e.preventDefault();
        advanceStory();
    });

    document.getElementById('btn-load').addEventListener('click', () => {
        const loadedState = loadGame();
        if (loadedState) {
            gameState = loadedState;
            renderScene();
        }
    });

    document.getElementById('btn-save').addEventListener('click', () => {
        saveGame(gameState);
    });

    document.getElementById('btn-new-game').addEventListener('click', () => {
        resetGame();
        renderScene();
    });

    document.getElementById('btn-log').addEventListener('click', showLog);
    document.getElementById('btn-close-log').addEventListener('click', hideLog);

    document.getElementById('btn-load-url').addEventListener('click', () => {
        const url = prompt('Enter the URL of the game data JSON file:');
        if (url) {
            loadGameData(url);
        }
    });
};

const advanceStory = () => {
    if (advanceDialog()) {
        advanceGame();
    }
};

const advanceGame = () => {
    const currentScene = gameData.scenes[gameState.currentScene];
    
    if (gameState.dialogIndex < currentScene.dialog.length - 1) {
        gameState.dialogIndex++;
    } else if (gameState.currentScene < gameData.scenes.length - 1) {
        gameState.currentScene++;
        gameState.dialogIndex = 0;
    } else {
        console.log('Game over');
        return;
    }

    renderScene();
};

// Initial load of default game data
loadGameData();