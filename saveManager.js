// SaveManager - Handles cloud save syncing for Rune Bearer game
class SaveManager {
  constructor() {
    this.userId = null;
    this.isOnline = false;
    this.saveRef = null;
    this.localSaveKey = 'runeBearerSave';
    this.isInitialized = false;
    
    // Start Firebase auth
    this.initAuth();
  }

  async initAuth() {
    try {
      // Wait for Firebase to load
      if (typeof firebase === 'undefined') {
        console.log('Firebase not loaded yet, retrying...');
        setTimeout(() => this.initAuth(), 1000);
        return;
      }

      // Sign in anonymously
      await firebaseAuth.signInAnonymously();
      console.log('SaveManager: Anonymous sign-in successful');
      
      // Listen for auth state changes
      firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
          this.userId = user.uid;
          this.saveRef = firebaseDB.ref(`saves/${this.userId}`);
          this.isOnline = true;
          this.isInitialized = true;
          console.log('SaveManager: Connected to Firebase with user ID:', this.userId);
          
          // Sync with cloud save
          this.syncSaveData();
          
          // Listen for real-time changes
          this.setupRealtimeSync();
        } else {
          this.isOnline = false;
          this.isInitialized = true;
          console.log('SaveManager: Using offline mode');
        }
      });
    } catch (error) {
      console.warn('SaveManager: Firebase failed, using offline mode:', error);
      this.isOnline = false;
      this.isInitialized = true;
    }
  }

  // Wait for SaveManager to be ready
  async waitForInit() {
    while (!this.isInitialized) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Load save data (local first, then sync with cloud)
  async loadSave() {
    await this.waitForInit();

    // Always load local first for immediate UI update
    const localSave = localStorage.getItem(this.localSaveKey);
    if (localSave) {
      try {
        return JSON.parse(localSave);
      } catch (error) {
        console.warn('SaveManager: Failed to parse local save:', error);
      }
    }

    // If online, try to load from cloud
    if (this.isOnline && this.saveRef) {
      try {
        const snapshot = await this.saveRef.once('value');
        const cloudSave = snapshot.val();
        if (cloudSave) {
          // Update local storage
          localStorage.setItem(this.localSaveKey, JSON.stringify(cloudSave));
          console.log('SaveManager: Loaded save from cloud');
          return cloudSave;
        }
      } catch (error) {
        console.warn('SaveManager: Failed to load cloud save:', error);
      }
    }

    // Return default save structure
    console.log('SaveManager: Creating new save file');
    return this.getDefaultSave();
  }

  // Save data (local + cloud)
  async saveSave(saveData) {
    // Add timestamp and device info
    const enhancedSave = {
      ...saveData,
      lastUpdated: Date.now(),
      device: navigator.userAgent.substring(0, 50),
      gameVersion: '1.0'
    };

    // Always save locally first
    localStorage.setItem(this.localSaveKey, JSON.stringify(enhancedSave));
    console.log('SaveManager: Saved locally');

    // Save to cloud if online
    if (this.isOnline && this.saveRef) {
      try {
        await this.saveRef.set(enhancedSave);
        console.log('SaveManager: Synced to cloud');
        this.showSyncStatus('✅ Synced to cloud');
      } catch (error) {
        console.warn('SaveManager: Failed to save to cloud:', error);
        this.showSyncStatus('⚠️ Offline mode');
      }
    } else {
      this.showSyncStatus('📱 Offline mode');
    }
  }

  // Sync local and cloud saves
  async syncSaveData() {
    if (!this.isOnline || !this.saveRef) return;

    try {
      const snapshot = await this.saveRef.once('value');
      const cloudSave = snapshot.val();
      const localSaveStr = localStorage.getItem(this.localSaveKey);
      const localSave = localSaveStr ? JSON.parse(localSaveStr) : null;

      if (!cloudSave && localSave) {
        // Local save exists, cloud doesn't - upload local
        console.log('SaveManager: Uploading local save to cloud');
        await this.saveSave(localSave);
      } else if (cloudSave && !localSave) {
        // Cloud save exists, local doesn't - download cloud
        console.log('SaveManager: Downloading cloud save');
        localStorage.setItem(this.localSaveKey, JSON.stringify(cloudSave));
      } else if (cloudSave && localSave) {
        // Both exist - use most recent
        const cloudTime = cloudSave.lastUpdated || 0;
        const localTime = localSave.lastUpdated || 0;
        
        if (cloudTime > localTime + 5000) { // 5 second buffer
          console.log('SaveManager: Using newer cloud save');
          localStorage.setItem(this.localSaveKey, JSON.stringify(cloudSave));
          this.showSyncNotification('📱 Game synced from another device!');
        } else if (localTime > cloudTime + 5000) {
          console.log('SaveManager: Uploading newer local save');
          await this.saveSave(localSave);
        } else {
          console.log('SaveManager: Saves are in sync');
        }
      }
    } catch (error) {
      console.warn('SaveManager: Sync failed:', error);
    }
  }

  // Setup real-time listening for changes from other devices
  setupRealtimeSync() {
    if (!this.saveRef) return;

    this.saveRef.on('value', (snapshot) => {
      const cloudSave = snapshot.val();
      if (!cloudSave) return;

      const localSaveStr = localStorage.getItem(this.localSaveKey);
      const localSave = localSaveStr ? JSON.parse(localSaveStr) : null;

      // Only update if cloud is newer and from different device
      if (localSave && cloudSave.lastUpdated > (localSave.lastUpdated || 0) + 5000) {
        const cloudDevice = cloudSave.device || '';
        const currentDevice = navigator.userAgent.substring(0, 50);
        
        if (cloudDevice !== currentDevice) {
          console.log('SaveManager: Detected save update from another device');
          localStorage.setItem(this.localSaveKey, JSON.stringify(cloudSave));
          
          // Show notification
          this.showSyncNotification('📱 Game updated from another device!');
          
          // Optional: Auto-reload after delay
          setTimeout(() => {
            if (confirm('Game progress updated from another device. Refresh to see changes?')) {
              window.location.reload();
            }
          }, 3000);
        }
      }
    });
  }

  // Show sync status
  showSyncStatus(message) {
    // Create or update status indicator
    let statusEl = document.getElementById('saveStatus');
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.id = 'saveStatus';
      statusEl.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 8px 12px;
        background: rgba(0,0,0,0.8);
        color: white;
        border-radius: 5px;
        font-size: 12px;
        z-index: 9999;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(statusEl);
    }
    
    statusEl.textContent = message;
    statusEl.style.opacity = '1';
    
    // Fade out after 3 seconds
    setTimeout(() => {
      if (statusEl) statusEl.style.opacity = '0.3';
    }, 3000);
  }

  // Show sync notification
  showSyncNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 60px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      font-weight: bold;
      max-width: 300px;
      animation: slideIn 0.3s ease;
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // Get default save structure
  getDefaultSave() {
    return {
      wells: {
        currentDay: 1,
        currentRealm: 'Dawnbreak Expanse',
        irlCompleted: false,
        mathCompleted: false,
        mathProgress: 0,
        completedRooms: [],
        collectedRunes: [],
        completedTasks: []
      },
      rou: {
        currentDay: 1,
        currentRealm: 'Crystal Glade',
        irlCompleted: false,
        mathCompleted: false,
        mathProgress: 0,
        completedRooms: [],
        collectedRunes: [],
        completedTasks: []
      },
      claimedRewards: [],
      settings: {
        adminMode: false,
        soundEnabled: true
      },
      lastUpdated: Date.now(),
      device: navigator.userAgent.substring(0, 50),
      gameVersion: '1.0'
    };
  }

  // Admin functions
  async adminResetSave() {
    console.log('SaveManager: Admin reset triggered');
    const defaultSave = this.getDefaultSave();
    await this.saveSave(defaultSave);
    
    // Clear any cached data
    localStorage.removeItem(this.localSaveKey);
    
    // Show confirmation
    this.showSyncNotification('🔄 Game reset successfully!');
    
    // Reload after short delay
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  async adminUnlockDay(player, day) {
    console.log(`SaveManager: Admin unlock day ${day} for ${player}`);
    const save = await this.loadSave();
    
    if (save[player]) {
      save[player].currentDay = Math.max(save[player].currentDay, day);
      await this.saveSave(save);
      this.showSyncNotification(`🔓 Unlocked day ${day} for ${player}!`);
    }
  }

  // Check connection status
  getConnectionStatus() {
    return {
      isOnline: this.isOnline,
      userId: this.userId,
      initialized: this.isInitialized
    };
  }
}

// Initialize save manager globally
console.log('SaveManager: Initializing...');
window.saveManager = new SaveManager();

// Provide global helper functions for backwards compatibility
window.loadGameData = async function() {
  return await window.saveManager.loadSave();
};

window.saveGameData = async function(data) {
  return await window.saveManager.saveSave(data);
};

// Admin console functions
window.adminResetGame = async function() {
  if (confirm('Are you sure you want to reset ALL game progress? This cannot be undone.')) {
    await window.saveManager.adminResetSave();
  }
};

window.adminUnlockDay = async function(player, day) {
  await window.saveManager.adminUnlockDay(player, day);
};

window.checkSaveStatus = function() {
  const status = window.saveManager.getConnectionStatus();
  console.log('Save Status:', status);
  return status;
};

console.log('SaveManager: Loaded successfully!');