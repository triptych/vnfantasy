export const saveGame = (gameState) => {
    localStorage.setItem('visualNovelGameState', JSON.stringify(gameState));
    console.log('Game saved');
};

export const loadGame = () => {
    const savedState = localStorage.getItem('visualNovelGameState');
    if (savedState) {
        console.log('Game loaded');
        return JSON.parse(savedState);
    }
    return null;
};