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
        // Auto-connect to existing family code without showing modal
        await this.connectToFamilyCode(existingCode, true); // true = silent reconnect
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
    if (currentCode === familyCode && this.connectedFamilyCode === familyCode) {
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

  // Check for existing family code
  checkForFamilyCode() {
    const existingCode = localStorage.getItem('familyCode');
    if (existingCode) {
      console.log(`SaveManager: Found existing family code: ${existingCode}`);
      return true;
    }
    return false;
  }

  // Reset family code
  resetFamilyCode() {
    localStorage.removeItem('familyCode');
    this.connectedFamilyCode = null;
    this.showFamilyNotification('🔄 Family code reset. Refresh to set new code.');
  }

  // Wait for initialization
  async waitForInit() {
    while (!this.isInitialized) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Load save data
  async loadState() {
    await this.waitForInit();
    
    try {
      if (this.isOnline && this.saveRef) {
        const snapshot = await this.saveRef.once('value');
        const saveData = snapshot.val();
        
        if (saveData) {
          console.log('SaveManager: Loaded save from Firebase');
          return saveData;
        }
      }
      
      // Try local storage fallback
      const localSave = localStorage.getItem(this.localSaveKey);
      if (localSave) {
        console.log('SaveManager: Loaded save from local storage');
        return JSON.parse(localSave);
      }
      
    } catch (error) {
      console.error('SaveManager: Failed to load save:', error);
    }
    
    return null;
  }

  // Save game state
  async saveState(saveData) {
    await this.waitForInit();
    
    try {
      // Always save locally as backup
      localStorage.setItem(this.localSaveKey, JSON.stringify(saveData));
      
      if (this.isOnline && this.saveRef) {
        await this.saveRef.set(saveData);
        console.log('SaveManager: Saved to Firebase');
      } else {
        console.log('SaveManager: Saved locally only (offline mode)');
      }
      
    } catch (error) {
      console.error('SaveManager: Failed to save:', error);
      throw error; // Re-throw to let game handle error
    }
  }

  // Sync save data between devices
  async syncSaveData() {
    if (!this.isOnline || !this.saveRef) {
      return;
    }
    
    try {
      const snapshot = await this.saveRef.once('value');
      const cloudSave = snapshot.val();
      
      if (cloudSave) {
        // Load cloud save
        localStorage.setItem(this.localSaveKey, JSON.stringify(cloudSave));
        console.log('SaveManager: Synced cloud save to local storage');
      } else {
        // Push local save to cloud if exists
        const localSave = localStorage.getItem(this.localSaveKey);
        if (localSave) {
          await this.saveRef.set(JSON.parse(localSave));
          console.log('SaveManager: Pushed local save to cloud');
        }
      }
      
    } catch (error) {
      console.error('SaveManager: Failed to sync save data:', error);
    }
  }

  // Setup real-time sync
  setupRealtimeSync() {
    if (!this.isOnline || !this.saveRef) {
      return;
    }
    
    this.saveRef.on('value', (snapshot) => {
      const cloudSave = snapshot.val();
      if (cloudSave) {
        localStorage.setItem(this.localSaveKey, JSON.stringify(cloudSave));
        this.showSyncNotification('📱 Game updated from another device!');
        
        // Optional: Ask before reload
        setTimeout(() => {
          if (confirm('Game progress updated from another device. Refresh to see changes?')) {
            window.location.reload();
          }
        }, 1500);
      }
    });
  }

  // Show sync notification with proper cleanup
  showSyncNotification(message) {
    // Clear existing sync notifications
    document.querySelectorAll('[data-notification="sync"]').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.setAttribute('data-notification', 'sync');
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #2196F3;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
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
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
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

  // Get default save state
  getDefaultSave() {
    return {
      wells: {
        irlCompleted: false,
        mathCompleted: false,
        mathProgress: 0,
        // Add other Wells-specific state here
      },
      rou: {
        irlCompleted: false,
        mathCompleted: false,
        mathProgress: 0,
        // Add other Rou-specific state here
      },
      claimedRewards: [],
      // Add other shared state here
    };
  }

  // Admin: Reset save data
  async adminResetSave() {
    if (!this.isOnline || !this.saveRef) {
      console.error('SaveManager: Cannot reset save - not connected to Firebase');
      return;
    }
    
    try {
      const defaultSave = this.getDefaultSave();
      await this.saveRef.set(defaultSave);
      localStorage.setItem(this.localSaveKey, JSON.stringify(defaultSave));
      console.log('SaveManager: Reset save data to defaults');
      this.showFamilyNotification('🔄 Save data reset to defaults');
    } catch (error) {
      console.error('SaveManager: Failed to reset save:', error);
    }
  }

  // Admin: Unlock specific day
  async adminUnlockDay(player, day) {
    try {
      const currentSave = await this.loadState() || this.getDefaultSave();
      currentSave[player.toLowerCase()].unlockedDays = day;
      await this.saveState(currentSave);
      console.log(`SaveManager: Unlocked day ${day} for ${player}`);
    } catch (error) {
      console.error('SaveManager: Failed to unlock day:', error);
    }
  }

  // Get connection status
  getConnectionStatus() {
    return {
      isOnline: this.isOnline,
      userId: this.userId,
      initialized: this.isInitialized,
      familyCode: this.connectedFamilyCode
    };
  }
}

// Initialize save manager globally
console.log('SaveManager: Initializing...');
window.saveManager = new SaveManager();

// Provide global helper functions for backwards compatibility
window.loadGameData = async function() {
  return await window.saveManager.loadState();
};

window.saveGameData = async function(data) {
  return await window.saveManager.saveState(data);
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