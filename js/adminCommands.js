// Admin URL Commands - allows remote control via URL parameters
// Example: yoursite.com?admin=unlock&day=10&key=RB25Admin

const ADMIN_KEY = 'RB25Admin2025';

function checkAdminCommands() {
    const urlParams = new URLSearchParams(window.location.search);
    const adminCmd = urlParams.get('admin');
    const adminKey = urlParams.get('key');
    
    if (adminKey === ADMIN_KEY && adminCmd) {
        console.log('Admin command received:', adminCmd);
        
        switch(adminCmd) {
            case 'unlock':
                const day = parseInt(urlParams.get('day') || '1');
                const wells = urlParams.get('wells') || day;
                const rou = urlParams.get('rou') || day;
                
                // Set player progress
                (async () => {
                    const gameData = await loadGameData();
                    gameData.wells.currentDay = parseInt(wells);
                    gameData.rou.currentDay = parseInt(rou);
                    gameData.lastUpdated = Date.now() + 1000000; // Future timestamp
                    gameData.device = 'ADMIN_URL_COMMAND';
                    
                    await saveGameData(gameData);
                    
                    alert(`Admin: Set Wells to Day ${wells}, Rou to Day ${rou}`);
                    
                    // Clear URL parameters and reload
                    window.history.replaceState({}, document.title, window.location.pathname);
                    setTimeout(() => window.location.reload(), 1000);
                })();
                break;
                
            case 'reset':
                if (confirm('Admin: Reset entire game to Day 1?')) {
                    (async () => {
                        await adminResetGame();
                        window.history.replaceState({}, document.title, window.location.pathname);
                    })();
                }
                break;
                
            case 'addrune':
                const player = urlParams.get('player');
                const rune = urlParams.get('rune');
                
                if (player && rune) {
                    (async () => {
                        const gameData = await loadGameData();
                        if (!gameData[player].collectedRunes.includes(rune)) {
                            gameData[player].collectedRunes.push(rune);
                            gameData.lastUpdated = Date.now() + 1000000;
                            await saveGameData(gameData);
                            alert(`Admin: Added ${rune} to ${player}`);
                        }
                        window.history.replaceState({}, document.title, window.location.pathname);
                        setTimeout(() => window.location.reload(), 1000);
                    })();
                }
                break;
                
            case 'status':
                (async () => {
                    const gameData = await loadGameData();
                    alert(`Admin Status:\n\nWells: Day ${gameData.wells.currentDay}, Runes: ${gameData.wells.collectedRunes.length}\nRou: Day ${gameData.rou.currentDay}, Runes: ${gameData.rou.collectedRunes.length}\n\nLast Updated: ${new Date(gameData.lastUpdated).toLocaleString()}`);
                    window.history.replaceState({}, document.title, window.location.pathname);
                })();
                break;
        }
    }
}

// Export for use in other files
window.checkAdminCommands = checkAdminCommands; 