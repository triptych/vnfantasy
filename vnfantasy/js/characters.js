const characterContainer = document.getElementById('characters');

export const renderCharacters = (characters) => {
    characterContainer.innerHTML = '';
    characters.forEach((char, index) => {
        const charElement = document.createElement('div');
        charElement.className = 'character';
        charElement.style.fontSize = '15vw';
        charElement.textContent = char.emoji;
        characterContainer.appendChild(charElement);
    });
};

export const updateCharacters = (speakingCharIndex) => {
    const characters = characterContainer.children;
    Array.from(characters).forEach((char, index) => {
        if (index === speakingCharIndex) {
            char.classList.add('active');
            char.classList.remove('inactive');
        } else {
            char.classList.remove('active');
            char.classList.add('inactive');
        }
    });
};