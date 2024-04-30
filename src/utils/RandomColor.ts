export const getRandomPastelColor = (useDarkModeState : IDarkModeState) => {
    const isDarkMode = useDarkModeState.isDarkMode ;
    const letters = isDarkMode ? '59AB' : 'BCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color+'60';
};