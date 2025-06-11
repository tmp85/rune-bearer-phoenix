// SaveManager - Handles cloud save syncing for Rune Bearer game with RB25 Family Code System
class SaveManager {
  constructor() {
    this.userId = null;
    this.isOnline = false;
    this.saveRef = null;
    this.localSaveKey = 'runeBearerSave';
    this.isInitialized = false;
    this.isConnecting = false; // Prevent multiple simultaneous connections
    this.connectedFamilyCode = null; // Track current family code
    
    // Start Firebase auth
    this.initAuth();
  }

  async initAuth() {
    try {
      if (typeof firebase === 'undefined') {
        console.log('Firebase not loaded yet, retrying...');
        setTimeout(() => this.initAuth(), 1000);
        return;
      }

      // Check for existing family code first
      const existingCode = localStorage.getItem('familyCode');
      if (existingCode) {
        this.connectedFamilyCode = existingCode;
        // Set up Firebase connection for family code
        const familyUserId = `family_${existingCode.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
        
        // Sign in anonymously first
        await firebaseAuth.signInAnonymously();
        
        // Then set up family connection
        this.userId = familyUserId;
        this.saveRef = firebaseDB.ref(`saves/${familyUserId}`);
        this.isOnline = true;
        this.isInitialized = true;
        
        console.log(`SaveManager: Auto-connected to family code: ${existingCode}`);
        
        // Start syncing
        this.syncSaveData();
        this.setupRealtimeSync();
        return;
      }

      // Show family code modal for new users after a short delay
      setTimeout(() => {
        // Only show modal if not already connected
        if (!this.connectedFamilyCode && !this.isConnecting) {
          this.showFamilyCodeModal();
        }
      }, 1500);

      // Continue with anonymous sign-in for now
      await firebaseAuth.signInAnonymously();
      console.log('SaveManager: Anonymous sign-in successful');
      
      firebaseAuth.onAuthStateChanged((user) => {
        if (user && !localStorage.getItem('familyCode')) {
          // Only set up anonymous user if no family code
          this.userId = user.uid;
          this.saveRef = firebaseDB.ref(`saves/${this.userId}`);
          this.isOnline = true;
          this.isInitialized = true;
          console.log('SaveManager: Connected to Firebase with user ID:', this.userId);
          
          this.syncSaveData();
          this.setupRealtimeSync();
        } else if (!localStorage.getItem('familyCode')) {
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

  // Show family code input modal with RB25 pre-filled
  showFamilyCodeModal() {
    // Don't show modal if already connecting or connected
    if (this.isConnecting || this.connectedFamilyCode) {
      return;
    }

    const modal = document.createElement('div');
    modal.id = 'familyCodeModal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      font-family: 'Segoe UI', Arial, sans-serif;
    `;

    modal.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        text-align: center;
        max-width: 400px;
        color: white;
      ">
        <h2 style="margin: 0 0 20px 0; font-size: 24px;">🏰 Rune Bearer Family</h2>
        <p style="margin: 0 0 20px 0; font-size: 16px;">Enter family code to sync saves across all devices:</p>
        
        <input 
          type="text" 
          id="familyCodeInput" 
          value="RB25"
          style="
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            text-align: center;
            margin-bottom: 20px;
            box-sizing: border-box;
            font-weight: bold;
            background: rgba(255,255,255,0.9);
          "
        />
        
        <div style="display: flex; gap: 10px;">
          <button 
            id="familyCodeConnect" 
            style="
              flex: 1;
              background: #4CAF50;
              color: white;
              border: none;
              padding: 15px;
              border-radius: 10px;
              font-size: 16px;
              cursor: pointer;
              font-weight: bold;
            "
          >
            Connect to RB25
          </button>
          <button 
            id="familyCodeSkip" 
            style="
              flex: 1;
              background: #666;
              color: white;
              border: none;
              padding: 15px;
              border-radius: 10px;
              font-size: 16px;
              cursor: pointer;
              font-weight: bold;
            "
          >
            Skip (Single Device)
          </button>
        </div>
        
        <div style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
          <p>💡 Use "RB25" for Wells & Rou's shared adventure!</p>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const input = document.getElementById('familyCodeInput');
    const connectBtn = document.getElementById('familyCodeConnect');
    const skipBtn = document.getElementById('familyCodeSkip');

    // Focus and select all text
    input.focus();
    input.select();

    // Handle connect
    connectBtn.onclick = async () => {
      const code = input.value.trim().toUpperCase();
      if (code.length >= 2) {
        await this.connectToFamilyCode(code);
        modal.remove();
      } else {
        input.style.borderColor = '#f44336';
        input.placeholder = 'Code must be at least 2 characters';
      }
    };

    // Handle skip
    skipBtn.onclick = () => {
      modal.remove();
      this.continueAsAnonymous();
    };

    // Handle enter key
    input.onkeypress = (e) => {
      if (e.key === 'Enter') {
        connectBtn.click();
      }
    };

    // Update button text when code changes
    input.oninput = () => {
      const code = input.value.trim();
      connectBtn.textContent = code ? `Connect to ${code.toUpperCase()}` : 'Connect';
    };
  }

  // Connect to family save system
  async connectToFamilyCode(familyCode, isSilentReconnect = false) {
    // Prevent multiple simultaneous connections
    if (this.isConnecting) {
      console.log('SaveManager: Already connecting, please wait...');
      return;
    }

    // Check if already connected to this family code
    const currentCode = localStorage.getItem('familyCode');
    if (currentCode === familyCode && this.connectedFamilyCode === familyCode && this.isInitialized) {
      console.log(`SaveManager: Already connected to family code: ${familyCode}`);
      if (!isSilentReconnect) {
        this.showFamilyNotification(`✅ Already connected to family "${familyCode}"!`);
      }
      return;
    }

    this.isConnecting = true;
    console.log(`SaveManager: Connecting to family code: ${familyCode}`);
    
    // Store family code
    localStorage.setItem('familyCode', familyCode);
    this.connectedFamilyCode = familyCode;
    
    // Create deterministic user ID from family code
    const familyUserId = `family_${familyCode.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    
    try {
      // Sign out current anonymous user
      if (firebaseAuth.currentUser) {
        await firebaseAuth.signOut();
      }
      
      // Sign in with anonymous auth but use family ID
      await firebaseAuth.signInAnonymously();
      
      // Override the user ID for family sharing
      this.userId = familyUserId;
      this.saveRef = firebaseDB.ref(`saves/${familyUserId}`);
      this.isOnline = true;
      this.isInitialized = true;
      
      console.log(`SaveManager: Connected to family save system with ID: ${familyUserId}`);
      
      // Show success notification (unless silent reconnect)
      if (!isSilentReconnect) {
        this.showFamilyNotification(`✅ Connected to family "${familyCode}"! All devices will now sync.`);
      }
      
      // Sync with family save
      await this.syncSaveData();
      this.setupRealtimeSync();
      
      // Only reload if switching between different family codes
      if (currentCode && currentCode !== familyCode) {
        // Switching family codes - reload to apply new save
        this.showFamilyNotification(`🔄 Switching to family "${familyCode}"...`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      
    } catch (error) {
      console.error('SaveManager: Family code connection failed:', error);
      this.showFamilyNotification('❌ Connection failed. Continuing in single-device mode.');
      this.continueAsAnonymous();
    } finally {
      this.isConnecting = false;
    }
  }

  // Continue with anonymous user (single device)
  continueAsAnonymous() {
    console.log('SaveManager: Continuing with anonymous user (single device mode)');
    this.showFamilyNotification('📱 Playing in single-device mode');
    
    // Continue normal initialization
    this.isInitialized = true;
  }

  // Show family notification with proper cleanup
  showFamilyNotification(message) {
    // Clear existing family notifications first
    document.querySelectorAll('[data-notification="family"]').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.setAttribute('data-notification', 'family');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #4CAF50;
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      z-index: 10001;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      font-weight: bold;
      font-size: 16px;
      max-width: 400px;
      text-align: center;
      transition: opacity 0.3s ease;
      opacity: 1;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Auto-remove after 4 seconds with fade effect
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.opacity = '0';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }
    }, 4000);
  }

  // Check for existing family code on startup
  checkForFamilyCode() {
    const existingCode = localStorage.getItem('familyCode');
    if (existingCode) {
      console.log(`SaveManager: Found existing family code: ${existingCode}`);
      return true;
    }
    return false;
  }

  // Admin function to reset family code
  resetFamilyCode() {
    localStorage.removeItem('familyCode');
    this.connectedFamilyCode = null;
    this.showFamilyNotification('🔄 Family code reset. Refresh to set new code.');
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
          
          // Optional: Ask before reload (not automatic)
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

  // Show sync notification with proper cleanup
  showSyncNotification(message) {
    // Clear existing sync notifications
    document.querySelectorAll('[data-notification="sync"]').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.setAttribute('data-notification', 'sync');
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
      transition: opacity 0.3s ease;
    `;
    
    // Add slide-in animation if not already exists
    if (!document.getElementById('syncNotificationStyles')) {
      const style = document.createElement('style');
      style.id = 'syncNotificationStyles';
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 5 seconds with fade
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.opacity = '0';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }
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
      initialized: this.isInitialized,
      familyCode: this.connectedFamilyCode
    };
  }

  // Compatibility aliases for game code that expects different function names
  saveState(data) {
    return this.saveSave(data);
  }

  loadState() {
    return this.loadSave();
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

// Family Code Admin Functions
window.showFamilyCodeModal = function() {
  window.saveManager.showFamilyCodeModal();
};

window.checkFamilyCode = function() {
  const code = localStorage.getItem('familyCode');
  if (code) {
    console.log('Current family code:', code);
    return code;
  } else {
    console.log('No family code set');
    return null;
  }
};

window.resetFamilyCode = function() {
  window.saveManager.resetFamilyCode();
};

window.connectToRB25 = function() {
  window.saveManager.connectToFamilyCode('RB25');
};

console.log('SaveManager: Loaded successfully!');