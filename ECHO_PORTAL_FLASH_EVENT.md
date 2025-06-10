# Echo-Portal Flash Event

## Overview
The Echo-Portal Flash Event is a special collaborative challenge designed for both Wells and Rou to work together simultaneously. This unique feature introduces a cipher puzzle that requires teamwork and number-to-letter conversion skills.

## Features

### 🔮 Collaborative Gameplay
- **Shared Challenge**: Both players participate in the same puzzle simultaneously
- **Joint Solution**: Success requires combining both players' assigned numbers
- **Real-time Interaction**: Players can work together to solve the cipher

### 🎯 Puzzle Mechanics
- **Number-to-Letter Cipher**: Uses A=1, B=2, C=3... Z=26 conversion
- **Sacred Numbers**: 
  - Wells: 7, 15, 5 (G, O, E)
  - Rou: 12, 22, 19 (L, V, S)
- **Target Word**: "GLOVES" (a warrior's hand-sheath)
- **Progressive Hints**: After 3 failed attempts, hints are provided

### 🎨 Visual Design
- **Purple Portal Theme**: Mystical gradient backgrounds with magical effects
- **Animated Elements**: Shimmering portals and floating cipher stones
- **Responsive Design**: Works on desktop and mobile devices
- **Asset Integration**: Uses actual game assets (sun icon, moon icon, Prism Seer image)

## Integration

### Main Game Integration
- **Flash Event Button**: Located in the center content area of the main game
- **Trigger Function**: `triggerEchoPortalEvent()` launches the event
- **Completion Tracking**: Uses localStorage to prevent multiple completions
- **Window Management**: Opens in a popup window or new tab if popups are blocked

### File Structure
```
/echo-portal-flash-event.html    # Standalone event file
/assets/special/sun_icon.png     # Sun portal icon
/assets/special/moon_icon.png    # Moon portal icon  
/assets/special/PRISM_SEER.jpg   # Prism Seer artwork
```

## How to Play

1. **Launch Event**: Click the "ECHO-PORTAL Flash Event" button in the main game
2. **Study the Numbers**: Wells has 7, 15, 5 and Rou has 12, 22, 19
3. **Use the Cipher**: Click letters on the rune stones (A=1, B=2, etc.)
4. **Build the Word**: Fill all 6 letter slots
5. **Submit Answer**: Click "Submit Cipher" to check your solution
6. **Receive Reward**: Success grants enchanted gloves for both players

## Reward System

### 🎁 Completion Reward
- **Enchanted Gloves**: One warm orange for Wells, one cool blue for Rou
- **Shared Achievement**: Both players benefit from the collaboration
- **One-Time Event**: Can only be completed once per game session

### 💾 Progress Tracking
- **localStorage Integration**: `echoPortalFlashEvent` key stores completion data
- **Timestamp Recording**: Tracks when the event was completed
- **Attempt Counter**: Records how many tries it took to solve

## Technical Implementation

### 🔧 Core Technologies
- **HTML5**: Semantic structure with responsive design
- **CSS3**: Advanced gradients, animations, and effects
- **Vanilla JavaScript**: Clean, framework-free implementation
- **localStorage API**: Cross-session state persistence

### 🎭 Visual Effects
- **Portal Animations**: Pulsing glow effects on the challenge modal
- **Shimmer Effects**: Moving light across the flash event button
- **Interactive Feedback**: Hover states and click animations
- **Responsive Layouts**: Adapts to different screen sizes

### 🔗 Game Integration Points
- **Main Game Trigger**: Seamless launch from the main interface
- **Asset Sharing**: Uses existing game artwork and icons
- **State Management**: Integrates with main game's localStorage system
- **Window Handling**: Proper popup management with fallbacks

## Development Notes

### 📝 Code Quality
- **User Rules Compliance**: Follows all specified coding guidelines
- **Simple & Declarative**: Clean, maintainable code structure
- **No External Dependencies**: Self-contained implementation
- **Defensive Programming**: Validates inputs and handles edge cases

### 🎯 Future Enhancements
- **Multiple Difficulty Levels**: Different cipher complexity options
- **Time Challenges**: Speed-based bonus rewards
- **Seasonal Variations**: Holiday-themed special events
- **Achievement System**: Progress tracking and badges

## Testing Checklist

- [x] **Event Launches**: Button successfully opens the flash event
- [x] **Cipher Logic**: Number-to-letter conversion works correctly
- [x] **Visual Polish**: Animations and effects render smoothly
- [x] **Asset Loading**: All images display properly
- [x] **Completion Flow**: Reward modal appears after success
- [x] **State Persistence**: Completion status saves correctly
- [x] **Integration**: Returns to main game seamlessly
- [x] **Responsive Design**: Works on different screen sizes

## Maintenance

### 🔄 Regular Updates
- Monitor event participation rates
- Gather feedback on puzzle difficulty
- Update visual assets as needed
- Ensure cross-browser compatibility

### 🐛 Bug Tracking
- Test popup functionality across browsers
- Verify localStorage compatibility
- Check mobile device performance
- Validate asset loading reliability

---

*The Echo-Portal Flash Event represents a unique collaborative gaming experience that strengthens the bond between Wells and Rou while providing an engaging puzzle challenge.* 