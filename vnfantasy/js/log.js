const logPanel = document.getElementById('log-panel');
const logContent = document.getElementById('log-content');

export const showLog = () => {
    logPanel.classList.remove('hidden');
};

export const hideLog = () => {
    logPanel.classList.add('hidden');
};

export const updateLog = (log) => {
    logContent.innerHTML = log.join('<br>');
};