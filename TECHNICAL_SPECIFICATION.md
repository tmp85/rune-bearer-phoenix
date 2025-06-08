# Rune Bearers Phoenix - Official Technical Specification

**Version:** 1.0  
**Date:** June 8, 2025  
**System:** Brothers' Rune Quest Educational Dungeon Crawler

---

## 1. Room JSON Structure Specification

### Core Room Data Structure
```javascript
{
  day{N}: {
    realm: 'String',           // Realm name (e.g., "Dawnbreak Expanse")
    room: 'String',            // Room name (e.g., "Hall of Harmonies")
    icon: 'Emoji',             // Single emoji icon (e.g., '🌅')
    artwork: 'String',         // Path to artwork asset
    story: 'String',           // 2-3 sentence narrative setup
    baseRune: 'String|null',   // Rune name from schedule, or null
    runeIcon: 'Emoji|null',    // Rune emoji, or null
    
    irlChallenge: {
      title: 'String',
      icon: 'Emoji', 
              type: 'piano|drums|ixl|reading|shoeTie|none',
      content: {
        // Type-specific content structure
      }
    },
    
    mathChallenge: {
      title: 'String',
      icon: 'Emoji',
      description: 'String',    // Optional
      missions: [
        {
          category: 'Addition|Subtraction|Multiplication|Division|Fractions|Geometry',
          title: 'String',       // Display title with emoji prefix
          story: 'String',       // Narrative context (2-3 sentences)
          question: 'String',    // HTML-formatted question with <strong> tags
          answer: Number,        // Primary numeric answer
          acceptedAnswers: Array, // Optional: multiple valid formats
          successMessage: 'String', // Optional: custom success text
          irlActivity: Object    // Optional: embedded IRL activity
        }
      ],
      finalMessage: 'String'    // Optional: day completion text
    }
  }
}
```

### IRL Challenge Content Types

**Piano Type:**
```javascript
content: {
  notes: 'String',              // Musical notation (e.g., "C – E – G – E – C")
  instructions: Array,          // Step-by-step instructions
  reference: Array              // Musical reference notes
}
```

**Drums Type:**
```javascript
content: {
  pattern: 'String',            // Rhythm pattern description
  instructions: Array,          // Playing instructions
  reference: Array              // Technique reference
}
```

**IXL Type:**
```javascript
content: {
  instructions: Array,          // Step-by-step IXL process
  reference: Array,             // Helpful tips
  successMessage: 'String'      // Custom completion message
}
```

**Reading Type:**
```javascript
content: {
  instructions: Array,          // Reading activity steps
  reference: Array,             // Reading tips and guidance
  successMessage: 'String'      // Custom completion message
}
```

**Shoe Tie Type:**
```javascript
content: {
  instructions: Array,          // Step-by-step tying process
  successCriteria: 'String'     // Completion requirements
}
```

---

## 2. Task Validation and Completion Logic

### Game State Structure
```javascript
gameState = {
  wells: {
    currentDay: Number,
    currentRealm: 'String',
    irlCompleted: Boolean,      // Reset per room entry
    mathCompleted: Boolean,     // Reset per room entry  
    mathProgress: Number,       // 0 to missions.length
    completedDays: Array,       // Persistent across sessions
    collectedRunes: Array       // Persistent across sessions
  },
  rou: { /* same structure */ }
}
```

### Validation Rules

1. **IRL Challenge Gating**: Math challenges require IRL completion when `irlChallenge.type !== 'none'`
2. **Sequential Math Missions**: Must complete missions 1, 2, 3... in order
3. **Progress Tracking**: `mathProgress` tracks highest completed mission number
4. **Day Completion**: Requires `mathProgress >= totalMissions` AND appropriate IRL completion
5. **Rune Award**: Only awarded on successful day completion per `gameSchedule.js`

### Error Handling Patterns

```javascript
// Missing content validation
if (!content) {
  alert(`Content not yet available for ${player} Day ${currentDay}`);
  return;
}

// IRL requirement validation  
if (hasIRLChallenge && !gameState[currentPlayer].irlCompleted) {
  showSuccessModal('🔒', 'Locked', 'Complete IRL challenge first', player, () => {});
  return;
}

// Wrong answer handling
showSuccessModal('❌', 'Try Again!', errorMessage, currentPlayer, () => {
  currentInput = '0';
  // Keep modals open for retry
});
```

---

## 3. UI Patterns and Consistency Rules

### Theme-Based Styling
- **Wells**: Orange theme (`var(--primary-orange)`)
- **Rou**: Blue theme (`var(--secondary-blue)`)
- **Success states**: Green theme (`var(--success-green)`)

### Modal System Architecture
```javascript
// Standard modal pattern
showSuccessModal(icon, title, message, playerTheme, onContinue)

// Theme application
modalContent.className = `success-modal-content ${playerTheme}-theme`;
header.className = `success-header ${playerTheme}-theme`;
```

### Button State Management
```javascript
// Challenge button states
.challenge-btn              // Base state
.challenge-btn.completed    // Green success state
.challenge-btn:disabled     // Gray locked state

// Progress indication
irlBtn.innerHTML = hasIRL ? '🎵 Begin Harmony Ritual' : 'hidden';
mathBtn.disabled = hasIRL && !irlCompleted;
```

### Screen Border System
```javascript
// Prevents auto-dimming during challenges
showScreenBorder(playerTheme);  // Show colored border
hideScreenBorder();             // Remove border
```

---

## 4. IRL Tasks vs Math Challenges Integration

### Day Type Classification
```javascript
const hasIRLChallenge = content.irlChallenge.type !== 'none';

// Math-only days (Rou style)
if (!hasIRLChallenge) {
  openMathQuestion(1);  // Direct to first question
}

// Mixed days (Wells style)  
if (hasIRLChallenge) {
  // Require IRL completion before math access
  mathBtn.disabled = !playerData.irlCompleted;
}
```

### Special Multi-Phase Structure (Rou Day 4)
```javascript
// Three-phase flow: Math1 → IRL → Math2
if (currentDay === 4 && player === 'rou') {
  if (currentMathPhase === 1 && currentQuestion === 4) {
    showIRLActivityModal(content.irlBridgeChallenge);
    return;
  }
  if (currentMathPhase === 2 && currentQuestion === 1) {
    completeMathChallenge();
    return;
  }
}
```

### Embedded IRL Activities
```javascript
// Mission-level IRL integration
const currentMission = mathChallenge.missions[currentQuestion - 1];
if (currentMission.irlActivity) {
  showIRLActivityModal(currentMission.irlActivity);
  return;
}
```

---

## 5. Error Handling and Edge Cases

### Content Validation
```javascript
// Defensive content access
const content = gameContent[currentPlayer][`day${currentDay}`];
if (!content) {
  alert(`Content not yet available for ${player} Day ${currentDay}`);
  return;
}
```

### Math Answer Validation
```javascript
// Multiple answer format support
if (mission.acceptedAnswers) {
  isCorrect = mission.acceptedAnswers.some(accepted => {
    if (typeof accepted === 'number') {
      return Math.abs(numericAnswer - accepted) < 0.01;
    } else {
      return userAnswer === accepted.toString().toLowerCase();
    }
  });
}
```

### Audio Error Handling
```javascript
audio.addEventListener('error', function() {
  console.error('Audio error:', e);
  button.style.opacity = '0.6';
  audioText.textContent = 'Audio Unavailable';
  button.disabled = true;
});
```

### Save State Recovery
```javascript
// Auto-reset challenge flags on room entry
gameState.wells.irlCompleted = false;
gameState.wells.mathCompleted = false; 
gameState.wells.mathProgress = 0;
```

---

## 6. Save System Architecture

### Dual Storage Pattern
```javascript
// Local game state (session-specific)
localStorage.setItem('runeBearerGameState', JSON.stringify(gameState));

// Shared progress (cross-system)
localStorage.setItem('runeBearer_progress', JSON.stringify(sharedProgress));
```

### Shared Progress Structure
```javascript
sharedProgress = {
  currentDay: Number,           // Current unlocked day
  completedDays: Array,         // Days fully completed
  unlockedDays: Array,          // Days available to play
  taskCompletions: Object,      // Task completion tracking
  collectedRunes: {
    wells: Array,               // Wells' rune collection
    rou: Array                  // Rou's rune collection
  }
}
```

### Auto-Save Implementation
```javascript
// Periodic auto-save
setInterval(saveGameState, 30000); // Every 30 seconds

// Event-driven saves
saveGameState(); // After major state changes
```

### Sync Mechanisms
```javascript
// Load shared progress on room entry
const sharedProgress = JSON.parse(localStorage.getItem('runeBearer_progress') || '{}');
const currentDay = sharedProgress.currentDay || 1;

// Sync rune collections
if (sharedProgress.collectedRunes !== undefined) {
  gameState.wells.collectedRunes = [...sharedProgress.collectedRunes.wells];
  gameState.rou.collectedRunes = [...sharedProgress.collectedRunes.rou];
}
```

### Reset and Recovery
```javascript
function resetGameState() {
  localStorage.removeItem('runeBearerGameState');
  localStorage.removeItem('runeBearer_progress');
  
  // Reinitialize default state
  gameState = getDefaultGameState();
  saveGameState();
}
```

---

## 7. Language and Content Standards

### Wells (Age 7) Content Rules
- 6-10 word sentences, limited compound structure
- Vocabulary: slightly advanced ("glimmer," "murmur")  
- Complex narrative context allowed
- Math problems can include multi-step reasoning

### Rou (Age 6) Content Rules
- 4-6 word sentences
- Strictly common sight words
- Simple, direct phrasing
- Math problems focus on single operations

### Narrative Consistency
- Realm-themed environmental flavor
- Sequential resource tracking ("You now hold X shards")
- Companion integration (Flint/Ferrin abilities)
- Consistent emoji usage for categories

---

## 8. Room Progression Standards

### Room Text Format
```
## [Player] — Day X  
Realm: [Realm Name]  
Room: [Room Name]  

[Short Lore: 2–3 sentences to set the scene]

To solve this room:  
1. [Task or puzzle step]  
2. [Optional additional step]  
3. [Optional additional step]  
4. [Optional additional step]

[Outcome text based on completion]
```

### Boss Battle Schedule
- Sub-bosses: Days 5, 15, 25, 35
- Bosses: Days 10, 20, 30, 40
- Chicken Jockey Arenas: Wells Day 9, Rou Day 29

### Special Day Types
- `isSubBoss: true` - Enhanced loot, special mechanics
- `isBoss: true` - Major encounters, realm transitions
- `isChickenJockey: true` - Unique arena battles
- `isFinalBoss: true` - Final day encounters

---

## 9. Asset and Audio Management

### Required Asset Structure
```
assets/
├── rooms/[Realm]/[Player]-day-[N]-art.jpg
├── avatars/[player]_avatar.png
├── loot/[type]-loot.png
└── audio/sfx/[event].mp3
```

### Sound Effect Integration
- `loot_tiny_sparkle.mp3` - Small rewards
- `loot_medium_chest.mp3` - Medium rewards  
- `loot_big_legendary.mp3` - Major rewards
- `rune_discovered_epic.mp3` - Rune discoveries
- `puzzle_mechanism_solved.mp3` - Math completion
- `irl_music_magic_echo.mp3` - IRL completions

### Error Handling for Missing Assets
```javascript
// Graceful fallback for missing images
img.onerror = function() {
  this.src = 'assets/defaults/missing-artwork.png';
};

// Audio fallback
audio.addEventListener('error', function() {
  console.warn('Audio file missing:', this.src);
  // Continue without audio
});
```

---

## 10. Development and Maintenance Guidelines

### Code Organization Rules
- Keep room content in `gameContent` object
- Schedule data in `gameSchedule.js`
- Shared progress functions in dedicated sections
- UI theme functions grouped by player

### Testing Standards
- Validate all room content before deployment
- Test IRL/math integration flows
- Verify save/load functionality
- Check cross-browser compatibility

### Performance Requirements
- Auto-save every 30 seconds maximum
- Graceful degradation for missing assets
- Responsive design for touchscreen interface
- No external dependencies beyond standard web APIs

---

This specification ensures consistent implementation across all room generation, maintains system integrity, and provides clear guidelines for content creation and technical maintenance.

**Document Status:** Official Technical Specification  
**Next Review:** As needed for system updates 