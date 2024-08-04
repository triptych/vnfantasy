import { updateCharacters } from './characters.js';

const speakerNameElement = document.getElementById('speaker-name');
const dialogTextElement = document.getElementById('dialog-text');

let currentInterval = null;
let fullText = '';
let isDisplayingFullText = false;

export const displayDialog = (dialogData, log) => {
    clearInterval(currentInterval);
    
    speakerNameElement.textContent = dialogData.speaker;
    dialogTextElement.textContent = '';
    fullText = dialogData.text;
    isDisplayingFullText = false;
    
    updateCharacters(dialogData.characterIndex);
    
    const words = dialogData.text.split(' ');
    let wordIndex = 0;
    
    currentInterval = setInterval(() => {
        if (wordIndex < words.length) {
            dialogTextElement.textContent += words[wordIndex] + ' ';
            wordIndex++;
        } else {
            clearInterval(currentInterval);
            isDisplayingFullText = true;
        }
    }, 200);

    log.push(`${dialogData.speaker}: ${dialogData.text}`);
};

export const advanceDialog = () => {
    if (!isDisplayingFullText) {
        clearInterval(currentInterval);
        dialogTextElement.textContent = fullText;
        isDisplayingFullText = true;
    } else {
        return true; // Indicate that we can move to the next dialog
    }
    return false;
};