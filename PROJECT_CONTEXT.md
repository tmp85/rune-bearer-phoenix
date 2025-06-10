# SYSTEM CONTEXT — BROTHERS' RUNE QUEST — ROOM GENERATION GUIDELINES

---

## 🔧 Core Purpose

The Brothers' Rune Quest is a Minecraft-inspired educational dungeon crawler designed for Wells (age 7) and Rou (age 6). The game runs fully client-side as a standalone web app, developed and managed via GitHub commits. The primary build environment is Cursor on the Mac Studio, with production versions deployed via GitHub. The live game runs directly as a web app on a Mac Mini with touchscreen. The system operates independently of DAKboard or Synology.

The Challenge Modules operate as a real-world parallel system directly integrated into the Rune Quest dungeon loop. Each room may include real-world IRL challenges that help drive progression.

---

## 🗂️ Key File Structure
- `gameSchedule.js` - Game progression data (managed separately)
- `json/runes.json` - Rune data and pairing system
- `rooms/` - Individual room content files
- Main game runs as standalone web app (HTML/JS/CSS)

**Note:** `gameSchedule.js` contains scheduling data but is not part of the room generation workflow. Room generation works independently using content prompts and template structure.

## 🔧 Technical Notes
- No external dependencies beyond standard web APIs
- Client-side save system using localStorage
- Responsive design for touchscreen interface

---

## 🖥️ Save System

- Save state is currently device-specific.
- The Mac Mini touchscreen holds its own unique game save state.
- Playing on a different device requires manual override.
- A long-term shared save system may be implemented in future versions.

---

## ⚔️ Room Task Types

Each room may include one or more of the following:

1. **IRL Challenges:**
   - Piano Melody Sequences — Play simple melodies as room triggers.
   - Drum Beat Repeats — Repeat designed drum beat patterns.
   - Shoe Tying Trials — Untimed, narrative-based shoe-tying tasks.
   - Trick Shot or Movement Challenges — Physical real-world actions.
   - IXL Challenges — Complete specific IXL modules (exact count determined as designed).
   - Other IRL skills may be assigned as needed.

2. **Math Challenges (In-Room Puzzle Layer):**
   - These are pre-written, hand-designed math questions.
   - No procedural generation; each is designed to match the narrative puzzle.
   - Math includes addition, subtraction, early multiplication, resource tracking, and problem-solving tasks.

3. **Narrative Puzzle Elements:**
   - Counting, pattern recognition, sequencing, or word clues fully integrated into lore.
   - Journaling prompts added where appropriate for future recall puzzles.

---

## 🧩 Rune System

- Primary collectible system tied to task and puzzle completion.
- Each player collects their own distinct rune set.
- When both players collect matching rune pairs, real-world rewards are unlocked.
- Rune pair tracking key is always visible on the main game page.
- Rune drops are controlled via scheduling data (managed separately), not random.
- Rune data stored in `json/runes.json`.

---

## 🎁 Reward System

- Real-world prizes are tied to paired rune collection.
- Loot drops will appear randomized but are pre-scripted and controlled.
- No XP system is currently active.
- No cosmetic gear system is active.

---

## 🐺 Flint & Ferrin Companion Abilities

**Flint (Wells Companion):**  
- *Heat-Sense:* Detect hidden magma or redstone veins.
- *Ember Tracking:* Sniffs out heat-locked puzzle triggers.
- *Fetch Leap:* Recovers distant keys, levers, or runes.

**Ferrin (Rou Companion):**  
- *Frost-Step:* Freezes shallow water or mist into crossing paths.
- *Ice-Bound Tracking:* Detects frost-cloaked glyphs.
- *Whisper Sniff:* Reveals hidden doors or floor panels.
- *Rune-Amplified Bark:* Shatters fragile ice barriers when Rou holds an Ice-aligned rune.

---

## 🎮 Realm Structure

### Wells Realms (Warm Path):
1. Dawnbreak Expanse
2. Emerald Canopy
3. Golden Savannah
4. Emberlight Bastion
5. Skyforge Spire
6. Molten Zenith Cavern
7. Solar Cathedral Ruins
8. Celestial Observatory

### Rou Realms (Cool Path):
1. Crystal Glade
2. Shimmering Reef
3. Frostpeak Summit
4. Molten Depths
5. Abyssal Trench
6. Stormbound Isles
7. Glacial Frontier
8. Arcane Vault

---

## 🎯 Room & Narrative Design Rules

- Realm-themed environmental flavor integrated into puzzle text.
- Continuous lore breadcrumbs via journal notes, clues, or wall inscriptions.
- Sequential resource tracking across multi-step problems.
- Consistent phrasing for collected items ("You now hold X shards").
- Journaling prompts added for future puzzle recall.
- "What do you do now?" prompts reserved for future logic branches.

---

## 💬 Language Complexity Levels

- **Wells (age 7):**  
  - 6–10 word sentences, limited compound structure.
  - Vocabulary: slightly advanced, e.g. "glimmer," "murmur."

- **Rou (age 6):**  
  - 4–6 word sentences.
  - Strictly common sight words, simple phrasing.

---

## 🏗️ Room Text Format Standard

Each room should follow this flexible structure:

## [Player] — [Room Context]  
Realm: [Realm Name]  
Room: [Room Name]  

[Short Lore: 2–3 sentences to set the scene]

To solve this room:  
1. [Task or puzzle step]  
2. [Optional additional step]
3. [Optional additional step]
4. [Optional additional step]

[Outcome text based on completion. If a rune is scheduled: "You find the ___ rune." If no rune drop is scheduled, use an alternate success line such as: "The path opens." or "The crystal hums and the chamber falls silent."]

---

## 🎯 Room Generation Process

**Your Role:** Take content prompts (IRL task + math + story) and generate properly formatted room code following the established template structure and design guidelines.

**Key Guidelines:**
- Apply appropriate language complexity for target player
- Integrate realm-themed environmental details
- Ensure math challenges match narrative context
- Follow companion ability integration where relevant
- Use consistent formatting and text structure
- Use rune rewards as specified in content prompts (scheduling managed separately)

#runebearers