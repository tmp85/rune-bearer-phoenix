# 🗿 Rune Bearers Phoenix — Master Design Document
**Version:** 2025-06-08  
**Maintainer:** Todd (primary), ChatGPT + Claude (design assistants)

**Project Codename:** "Rune Bearers Phoenix" - Named for the rebuild from scratch after the original game code was lost.

## 🔧 Daily Challenge Submission Templates

**CRITICAL:** Use these exact templates to prevent errors. Copy-paste and fill in content only.

### **🌅 Wells Daily Template (Orange/Sun Theme)**

```json
{
  "day{N}": {
    "realm": "[Realm Name]",
    "room": "[Room Name]", 
    "icon": "[Single Emoji]",
    "artwork": "wells_day{N}.png",
    "story": "[2-3 sentences, 6-10 word sentences, vocabulary like 'glimmer,' 'murmur']",
    "baseRune": "[Rune Name from schedule OR null]",
    "runeIcon": "[Rune Emoji OR null]",
    
    "irlChallenge": {
      "title": "[Challenge Title]",
      "icon": "[Emoji]",
      "type": "[piano|drums|ixl|none]",
      "content": {
        // PIANO TYPE:
        "notes": "[Musical notation: C – E – G – E – C]",
        "instructions": [
          "[Step 1]",
          "[Step 2]", 
          "[Step 3]"
        ],
        "reference": [
          "[Reference note 1]",
          "[Reference note 2]"
        ]
        
        // DRUMS TYPE:
        "pattern": "[Rhythm description]",
        "instructions": [
          "[Playing instruction 1]",
          "[Playing instruction 2]"
        ],
        "reference": [
          "[Technique tip 1]",
          "[Technique tip 2]"
        ]
        
        // IXL TYPE:
        "instructions": [
          "[IXL step 1]", 
          "[IXL step 2]",
          "[IXL step 3]"
        ],
        "reference": [
          "[Helpful tip 1]",
          "[Helpful tip 2]"
        ],
        "successMessage": "[Custom completion message]"
      }
    },
    
    "mathChallenge": {
      "title": "[Math Challenge Title]",
      "icon": "[Math Emoji]",
      "description": "[Optional setup description]",
      "missions": [
        {
          "category": "[Addition|Subtraction|Multiplication|Division|Fractions|Geometry]",
          "title": "[📊 Mission Title]",
          "story": "[2-3 sentences narrative context, Wells complexity]",
          "question": "[HTML-formatted with <strong> tags for emphasis]",
          "answer": [Numeric Answer],
          "acceptedAnswers": [Optional: [answer1, answer2, "text_answer"]],
          "successMessage": "[Optional: Custom success text]",
          "irlActivity": "[Optional: Embedded IRL activity object]"
        }
        // Add missions 2, 3, etc. as needed
      ],
      "finalMessage": "[Day completion reward message - REQUIRED for rune days]"
    }
  }
}
```

### **🌙 Rou Daily Template (Blue/Moon Theme)**

```json
{
  "day{N}": {
    "realm": "[Realm Name]",
    "room": "[Room Name]",
    "icon": "[Single Emoji]", 
    "artwork": "rou_day{N}.png",
    "story": "[2-3 sentences, 4-6 word sentences, common sight words only]",
    "baseRune": "[Rune Name from schedule OR null]",
    "runeIcon": "[Rune Emoji OR null]",
    
    "irlChallenge": {
      "title": "[Challenge Title]",
      "icon": "[Emoji]",
      "type": "[drums|shoeTie|ixl|none]",
      "content": {
        // DRUMS TYPE:
        "pattern": "[Simple rhythm description]",
        "instructions": [
          "[Simple step 1]",
          "[Simple step 2]"
        ],
        "reference": [
          "[Basic tip 1]",
          "[Basic tip 2]"
        ]
        
        // SHOE TIE TYPE:
        "instructions": [
          "[Shoe tying step 1]",
          "[Shoe tying step 2]",
          "[Shoe tying step 3]"
        ],
        "reference": [
          "[Helpful tip 1]",
          "[Helpful tip 2]"
        ]
        
        // IXL TYPE:
        "instructions": [
          "[Simple IXL step 1]",
          "[Simple IXL step 2]"
        ],
        "reference": [
          "[Basic tip 1]",
          "[Basic tip 2]"
        ],
        "successMessage": "[Simple completion message]"
      }
    },
    
    "mathChallenge": {
      "title": "[Simple Math Title]",
      "icon": "[Math Emoji]", 
      "description": "[Optional simple setup]",
      "missions": [
        {
          "category": "[Addition|Subtraction|Multiplication|Counting]",
          "title": "[🔢 Simple Mission Title]",
          "story": "[2-3 sentences, simple words, Rou complexity]",
          "question": "[Simple HTML formatting, <strong> for key numbers]",
          "answer": [Numeric Answer],
          "acceptedAnswers": [Optional: [answer1, answer2]],
          "successMessage": "[Optional: Simple success text]",
          "irlActivity": "[Optional: Simple IRL activity]"
        }
        // Add missions 2, 3, etc. as needed
      ],
      "finalMessage": "[Simple day completion message - REQUIRED for rune days]"
    }
  }
}
```

### **✅ Mandatory Validation Checklist**

**Before submitting ANY challenge, verify:**

1. **JSON Structure:**
   - [ ] Day number matches `"day{N}"` format
   - [ ] All required fields present (realm, room, icon, artwork, story)
   - [ ] Proper nesting: `irlChallenge` and `mathChallenge` objects

2. **Rune Integration:**
   - [ ] `baseRune` matches schedule OR is `null`
   - [ ] `runeIcon` matches rune OR is `null` 
   - [ ] `finalMessage` present if rune day (for reward prompt)

3. **Language Complexity:**
   - [ ] **Wells:** 6-10 word sentences, advanced vocabulary allowed
   - [ ] **Rou:** 4-6 word sentences, common sight words only

4. **IRL Challenge Structure:**
   - [ ] `type` matches available options per player
   - [ ] `content` object matches type structure exactly
   - [ ] Instructions are step-by-step arrays

5. **Math Challenge Structure:**
   - [ ] Missions numbered sequentially starting at 1
   - [ ] Each mission has required fields: category, title, story, question, answer
   - [ ] HTML formatting uses `<strong>` tags appropriately
   - [ ] Answer is numeric or in `acceptedAnswers` array

### **🚫 Common Error Prevention**

**These WILL break the system:**
- Missing `finalMessage` on rune reward days
- Wrong `irlChallenge.type` for player (piano for Rou, shoeTie for Wells)
- Math missions not numbered 1, 2, 3...
- Language complexity mismatch (complex words for Rou)
- Missing required JSON fields
- Inconsistent emoji usage
- Non-numeric answers without `acceptedAnswers` array

**Theme Application Rules:**
- **Wells:** Orange theme auto-applied, sun/fire/warm imagery preferred
- **Rou:** Blue theme auto-applied, moon/ice/cool imagery preferred
- System handles theme styling automatically based on player

---

## 📜 Project Overview

**Project Type:**  
Educational Dungeon Crawler — Gamified Summer Challenge

**Primary Users:**  
- Wells (Age 7, entering 2nd grade)
- Rou (Age 6, entering 1st grade)

**Platform:**  
- Standalone web app (HTML/JS/CSS)
- Client-side only, runs via GitHub commits
- Local save state (`localStorage`) - **CRITICAL:** No localStorage/sessionStorage in artifacts due to Claude.ai restrictions
- Played on Mac Mini touchscreen
- Save state is device-specific

**Project Dates:**  
- Start: June 2, 2025  
- End: July 25, 2025  
- Duration: 8 weeks (40 weekdays)
- Total Rooms: 40 rooms per player (80 total)

---

## 📅 Schedule Rules & Structure

### **Core Schedule Rules**
- **Weekdays Only:** New room unlocks Monday-Friday
- **Weekends:** Catch-up days (no automatic unlocks)
- **Sync Rule:** Boys progress in lockstep (within 1 room of each other)
- **Admin Override:** Parents can manually unlock rooms for travel/emergencies

### **Room Structure per Realm**
Each realm has 10 rooms:
- **Rooms 1-4:** Exploration
- **Room 5:** Sub-Boss encounter
- **Rooms 6-9:** Exploration  
- **Room 10:** Boss encounter (bold formatting)

### **Special Encounters**
- **Sub-Bosses:** Days 5, 15, 25, 35
- **Bosses:** Days 10, 20, 30, 40
- **Chicken Jockey Arenas:** 
  - Wells: Day 9 (6/12) - Big loot
  - Rou: Day 29 (7/10) - Big loot

### **IRL Task Distribution**
- **60% of weekdays** have IRL tasks
- **Rule:** When both boys have tasks on same day, tasks must be different

---

## 🏗 Room Format Standard

Each room follows this structure:

```markdown
## [Player Name] — Day [X]  
Realm: [Realm Name]  
Room: [Room Name]  

[Short lore: 2-3 sentences to set the scene]

To solve this room:
1. [Task or puzzle step]
2. [Optional additional step]
3. [Optional additional step]

[Outcome text: "You find the ___ rune." OR alternate success message]
```

### **Design Guidelines**
- Use "you" phrasing for player POV narration
- Tie room problems to realm's unique flavor
- Reference prior lore breadcrumbs for story continuity
- Keep sensory details minimal but evocative
- Maintain question continuity & resource tracking across steps

### **Language Complexity**
- **Wells (age 7):** 6-10 word sentences, vocabulary like "glimmer," "murmur"
- **Rou (age 6):** 4-6 word sentences, common sight words only

### **Journaling Notes**
- Journals used **only for working notes** during current challenges
- **No future recall mechanics** - journaling for puzzle continuity removed

---

## 🧮 Math Challenge Design

### **Wells Math (Age 7)**
- Addition, subtraction, early multiplication
- Story-based resource tracking problems
- Word problems integrated with room lore
- 6-10 minutes focused thinking time per puzzle

### **Rou Math (Age 6)**
- Addition/subtraction within 20
- Counting, grouping, simple patterns
- Word problems with concrete phrasing
- 4-6 minutes focused thinking time per puzzle

---

## ⚔️ Companion Abilities

### **Flint (Wells Companion)**
- **Heat-Sense:** Detect hidden magma or redstone veins
- **Ember Tracking:** Sniffs out heat-locked puzzle triggers
- **Fetch Leap:** Recovers distant keys, levers, or runes

### **Ferrin (Rou Companion)**
- **Frost-Step:** Freezes shallow water or mist into crossing paths
- **Ice-Bound Tracking:** Detects frost-cloaked glyphs
- **Whisper Sniff:** Reveals hidden doors or floor panels
- **Rune-Amplified Bark:** Shatters fragile ice barriers when Rou holds Ice-aligned rune

---

## 🧩 Rune System

### **Core Rules**
- **Total:** 20 runes per player (40 total)
- **Pairing:** Runes pair between brothers for joint IRL rewards
- **Drop Rate:** 50% of weekdays have rune drops (randomly distributed)
- **Timing:** Randomized to build anticipation (pairs complete 1-34 days apart)
- **Storage:** Rune data stored in `runes.json`
- **Scheduling:** Rune drops controlled via `gameSchedule.js`

### **Complete Rune Reward Chart**

| Wells Rune | Rou Rune | IRL Reward |
|------------|----------|------------|
| Ember Fang | Frost Fang | Ice cream treat |
| Sky Feather | Mist Weaver | Big Helmet Heroes game |
| Iron Root | Stone Wing | Lego kit + custom mini-figure |
| Tide Pearl | River Scale | Popsicles at the pool |
| Shadow Paw | Phantom Cloak | Visit to arcade |
| Thunder Eye | Storm Fang | 30 min extra screen time |
| Solar Scale | Star Prism | Choose next family movie |
| Lunar Mirror | Shadow Lens | Stay-up-late pass |
| Crystal Spine | Iron Bark | Pick a new book |
| Stormcaller Sigil | Frozen Bloom | Mini-golf with Happy Grandpa |
| Blazing Antler | Molten Seed | Build-your-own pizza night |
| Whisper Branch | Thunder Fang | Minecraft coins |
| Molten Shard | Skyborn Leaf | Nerf war |
| Windrunner Crest | Mooncap | Family video game session |
| Glowcap | Glacier Heart | Breakfast choice pass |
| Obsidian Heart | Moonfire Bloom | Custom Ice Cream Sundae Party |
| Sunfire Crest | Stormpetal Veil | Board game night pick |
| Zephyr Bloom | Ironclad Husk | Pangea Pastry Quest |
| Deepstone Shell | Frostthorn Crown | Breakfast for Dinner Choice |
| Emberthorn Crown | Ember Seed | Nerf target contest |

### **End Game Rewards**
- **Wells:** Sun-faceted half of the Catalyst
- **Rou:** Moon-cast half of the Catalyst

---

## 🎁 Loot System

### **Distribution**
- **No Loot:** ~50% chance
- **Tiny Loot:** ~30% chance
- **Medium Loot:** ~15% chance
- **Big Loot:** ~5% chance (only on Chicken Jockey days and final boss)
- **No dual loot days** (except final boss battle)

### **Loot Types**
- Special rare candy
- Shared iPad or Switch games
- Squirt guns
- Water balloon packs
- Other periodic shared IRL rewards

---

## 🏃 IRL Challenge Types

### **Available Tasks**
- **Piano:** Melody sequences integrated as room triggers
- **Drums:** Beat repeat patterns
- **IXL:** Specific module completion (exact count per room)
- **Reading:** Narrative-based reading tasks
- **Shoe Tie:** Untimed, narrative-based (Rou only)
- **Trick Shots:** Physical real-world actions
- **Other skills** as assigned

### **Integration Rules**
- All IRL tasks framed as in-game actions
- Tasks tie directly into "solving" the room
- Remove any "show to partner" instructions
- Each brother plays separately

---

## 🏞 Realm Structure

### **Wells Realms (Warm Path)**
1. Dawnbreak Expanse
2. Emerald Canopy
3. Golden Savannah
4. Emberlight Bastion
5. Skyforge Spire
6. Molten Zenith Cavern
7. Solar Cathedral Ruins
8. Celestial Observatory

### **Rou Realms (Cool Path)**
1. Crystal Glade
2. Shimmering Reef
3. Frostpeak Summit
4. Molten Depths
5. Abyssal Trench
6. Stormbound Isles
7. Glacial Frontier
8. Arcane Vault

---

## 💾 Technical Implementation

### **File Structure**
```
rune-bearers/
├── index.html
├── css/styles.css
├── js/
│   ├── gameSchedule.js   # core daily schedule, IRL tasks, loot, runes
│   ├── runes.json        # rune pairings & data
│   └── main.js           # main game logic
├── rooms/
│   ├── wells_day01.json  # per-player room files
│   └── rou_day01.json
├── assets/
│   ├── pixel_art/
│   ├── audio/
│   └── fonts/
├── docs/
│   ├── RuneBearers_MasterDoc.md  # this document
│   └── art_style_guides.md
├── README.md
└── changelog.md
```

### **Storage & Browser Restrictions**
- **Save System:** Device-local localStorage only
- **CRITICAL:** Never use localStorage/sessionStorage in Claude.ai artifacts
- **Alternative:** Use React state (useState, useReducer) or JavaScript variables
- **Platform:** Fully client-side HTML/JS/CSS
- **Hosting:** GitHub repo deployment
- **Interface:** Responsive design for Mac Mini touchscreen

### **Development Workflow**
- **Pipeline:** ChatGPT → Claude → Cursor
- **Source of Truth:** This master document
- **Room Creation:** Individual JSON files per day/player
- **Version Control:** GitHub commits

---

## 📋 Complete 40-Day Schedule

**Schedule follows 60% IRL task distribution with no overlap rule**

**Validation Completed:**
✅ Each boy gets exactly 20 unique runes  
✅ No duplicate runes within each collection  
✅ No overlap between Wells and Rou rune sets  
✅ All rune pairs have corresponding rewards  
✅ Schedule follows all stated rules and constraints

---

## 📝 Changelog

| Date | Change |
|------|--------|
| 2025-06-08 | Master Document baseline created from ChatGPT + Claude consolidation |
| 2025-06-08 | Journaling system removed, notes-only approach adopted |
| 2025-06-08 | IRL task distribution set to 60% with no-overlap rule |
| 2025-06-08 | Complete rune reward chart and 40-day schedule integrated |
| 2025-06-08 | Project renamed "Rune Bearers Phoenix" - rebuilt from scratch after original code loss |
| 2025-06-08 | Removed locked Week 1 references (dates now past) |
| 2025-06-08 | Added Daily Challenge Submission Templates with bulletproof JSON structures |
| 2025-06-08 | Updated artwork naming: wells-day-#-art.jpg / rou-day-#-art.jpg |
| 2025-06-08 | Removed (Sub-Boss)/(Boss) labels from room names - keep display clean |
| 2025-06-08 | Added Rou reading structure: Parent reads story + Rou reads simple sentence |

---

## 🔖 END OF MASTER DESIGN DOCUMENT

**Status:** ✅ Complete and ready for implementation  
**Next Steps:** Begin daily room content creation using this specification